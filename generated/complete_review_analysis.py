from pathlib import Path
import json,hashlib,collections
import numpy as np
import openpyxl
R=Path(__file__).resolve().parents[1]
x=json.loads((R/'paper_materials/analysis/frozen_inputs.json').read_text())
a=json.loads((R/'paper_materials/analysis/descriptive_results.json').read_text())
contr=a['cohort_contrasts']; ps=np.array([c['p'] for c in contr]); order=np.argsort(ps); adj=np.empty(len(ps));adj[order]=np.minimum(1,np.maximum.accumulate((len(ps)-np.arange(len(ps)))*ps[order]))
for c,p in zip(contr,adj):
 c.update(p_holm=float(p),ci_low=c['b']-1.970377*c['se'],ci_high=c['b']+1.970377*c['se'])
print('CONTRASTS',json.dumps(contr,indent=2))
style=[]
for p in (Path.home()/'Downloads').glob('all_respondents*.xlsx'):
 digest=hashlib.sha256(p.read_bytes()).hexdigest()
 print('WORKBOOK',p.name,digest,'MATCH',digest==a['audit']['workbook_sha256'])
 if digest!=a['audit']['workbook_sha256']:continue
 w=openpyxl.load_workbook(p,read_only=True,data_only=True);rs=iter(w['Clean Ratings'].values);hdr=next(rs);rows=[dict(zip(hdr,r)) for r in rs if any(v is not None for v in r)]
 print('ROWS',len(rows),'PEOPLE',len(set(r['participant_code'] for r in rows)))
 for lang in ['de','en','it','ja']:
  rr=[r for r in rows if r['language']==lang]
  for d in x['dimensions']:
   values=np.array([r[d] for r in rr],float)
   style.append({'cohort':lang,'dimension':d,'n':len(values),'extreme':float(np.mean((values==1)|(values==5))),'midpoint':float(np.mean(values==3))})
 break
norm=json.loads((R/'paper_materials/analysis/field_normalization.json').read_text())
print('REMAPS',collections.Counter(v['model'] for v in norm))
remaps={key:{'fields':sum(v['model']==key for v in norm),'items':len({v['item'] for v in norm if v['model']==key})} for key in x['models']}
out={'contrasts':contr,'response_style':style,'remaps':remaps}
(R/'generated/review_analysis.json').write_text(json.dumps(out,indent=2))
print('STYLE',json.dumps(style))
