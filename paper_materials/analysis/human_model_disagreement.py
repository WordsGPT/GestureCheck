"""Descriptive human–human and model–human differences on the same items.

python human_model_disagreement.py --export-workbook /path/to/workbook.xlsx
python human_model_disagreement.py

Only item/dimension score counts are exported, without participant records.
Each item and each of its seven dimensions receives equal weight.
"""
from pathlib import Path
from collections import defaultdict
import argparse, json

HERE=Path(__file__).resolve().parent

def run(workbook=None):
 x=json.loads((HERE/'frozen_inputs.json').read_text())
 items=[i for i in x['items'] if not i['control']]
 if workbook:
  import openpyxl
  w=openpyxl.load_workbook(workbook,read_only=True,data_only=True)
  it=iter(w['Clean Ratings'].values);headers=next(it)
  counts=defaultdict(lambda:[[0]*5 for _ in x['dimensions']])
  for values in it:
   row=dict(zip(headers,values))
   for d,key in enumerate(x['dimensions']):counts[row['video_title']][d][int(row[key])-1]+=1
  payload=[{'id':i['id'],'counts':counts[i['source_title']]} for i in items]
  (HERE/'human_rating_counts.json').write_text(json.dumps(payload,indent=2))
 rows=json.loads((HERE/'human_rating_counts.json').read_text())
 byid={r['id']:r['counts'] for r in rows}
 def average(vectors):return [sum(v[d] for v in vectors)/len(vectors) for d in range(7)]
 def summarize(vectors):
  v=average(vectors)
  return {'by_dimension':v,'overall':sum(v)/7}
 pairs=[];loo=[]
 for item in items:
  pv=[];lv=[]
  for c in byid[item['id']]:
   n=sum(c);total=sum((v+1)*count for v,count in enumerate(c))
   pv.append(sum(c[a]*c[b]*abs(a-b) for a in range(5) for b in range(5))/(n*(n-1)))
   lv.append(sum(count*abs((v+1)-(total-(v+1))/(n-1)) for v,count in enumerate(c))/n)
  pairs.append(pv);loo.append(lv)
 out={'standard_pairings':len(items),'dimensions':x['labels'],'weighting':'equal item and dimension weights','human_vs_human':summarize(pairs),'human_vs_other_humans_mean':summarize(loo),'models':{}}
 for key,metadata in x['models'].items():
  individual=[];consensus=[]
  for item in items:
   m=x['scores'][key][item['id']];cells=byid[item['id']]
   individual.append([sum(count*abs(m[d]-(v+1)) for v,count in enumerate(c))/sum(c) for d,c in enumerate(cells)])
   consensus.append([abs(m[d]-item['human'][d]) for d in range(7)])
  out['models'][key]={'label':metadata['label'],'input':metadata['input'],'vs_individual_humans':summarize(individual),'vs_human_mean':summarize(consensus)}
 (HERE/'human_model_disagreement.json').write_text(json.dumps(out,ensure_ascii=False,indent=2))
 print('Saved descriptive human/model disagreement for',len(items),'standard pairings.')

if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--export-workbook');args=parser.parse_args();run(args.export_workbook)
