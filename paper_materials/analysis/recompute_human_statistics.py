"""Recompute human alpha and unadjusted cohort estimates from the controlled workbook.
No participant records are written. The workbook is not part of the public release.
"""
from pathlib import Path
from collections import defaultdict
import argparse,json
import numpy as np
import openpyxl
HERE=Path(__file__).resolve().parent

def run(workbook):
 x=json.loads((HERE/'frozen_inputs.json').read_text());DIMS=x['dimensions'];items=x['items']
 w=openpyxl.load_workbook(workbook,read_only=True,data_only=True)
 def records(sheet):
  rows=iter(w[sheet].values);headers=next(rows)
  return [dict(zip(headers,r)) for r in rows if any(v is not None for v in r)]
 clean=records('Clean Ratings');summary={r['video_title']:r for r in records('Video Summary')};kept={r['participant_code'] for r in clean}
 from scipy.stats import t as student_t
 def alpha(rows,dimension):
  groups=defaultdict(list)
  for r in rows:groups[r['video_title']].append(int(r[dimension])-1)
  o=np.zeros((5,5))
  for values in groups.values():
   c=np.bincount(values,minlength=5);n=c.sum()
   if n>1:o+=(np.outer(c,c)-np.diag(c))/(n-1)
  marg=o.sum(axis=0);total=marg.sum();e=(np.outer(marg,marg)-np.diag(marg))/(total-1);distance=np.zeros((5,5))
  for j in range(5):
   for k in range(j+1,5):distance[j,k]=distance[k,j]=(marg[j:k+1].sum()-(marg[j]+marg[k])/2)**2
  return float(1-(o*distance).sum()/(e*distance).sum())
 stdtitles={i['source_title'] for i in items if not i['control']};stdrows=[r for r in clean if r['video_title'] in stdtitles]
 human_stats=[]
 vids=sorted({r['video_title'] for r in clean});vp={v:i for i,v in enumerate(vids)}
 design=np.zeros((len(clean),1+3+len(vids)-1));design[:,0]=1
 for j,r in enumerate(clean):
  for k,lang in enumerate(['en','it','ja']):design[j,1+k]=r['language']==lang
  vi=vp[r['video_title']]
  if vi:design[j,3+vi]=1
 bread=np.linalg.pinv(design.T@design);participants_order=sorted(kept);pi={v:i for i,v in enumerate(participants_order)};cluster=np.array([pi[r['participant_code']] for r in clean]);n,k=design.shape;g=len(kept)
 for d in DIMS:
  y=np.array([r[d] for r in clean],float);beta=bread@design.T@y;res=y-design@beta;scores_by_person=np.zeros((g,k));np.add.at(scores_by_person,cluster,design*res[:,None]);cov=bread@(scores_by_person.T@scores_by_person)@bread*(g/(g-1))*((n-1)/(n-k));se=np.sqrt(np.diag(cov));pvals=2*student_t.sf(abs(beta/se),g-1)
  means=[r[d+'_mean'] for r in summary.values()];q=np.quantile(y,[.25,.5,.75]);coefs=[{'cohort':lang,'b':float(beta[1+j]),'se':float(se[1+j]),'p':float(pvals[1+j])} for j,lang in enumerate(['en','it','ja'])]
  human_stats.append({'dimension':d,'mean':float(y.mean()),'sd':float(y.std(ddof=1)),'q1':float(q[0]),'median':float(q[1]),'q3':float(q[2]),'alpha_all':alpha(clean,d),'alpha_standard':alpha(stdrows,d),'item_mean':float(np.mean(means)),'item_sd':float(np.std(means,ddof=1)),'item_min':float(min(means)),'item_max':float(max(means)),'cohort_coefficients':coefs})

 (HERE/'recomputed_human_statistics.json').write_text(json.dumps(human_stats,ensure_ascii=False,indent=2))

if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('workbook',type=Path);run(p.parse_args().workbook)
