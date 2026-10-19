"""Recompute descriptive benchmark metrics only; no inference or resampling."""
from pathlib import Path
import json,warnings
import numpy as np
from scipy.stats import spearmanr,pearsonr
HERE=Path(__file__).resolve().parent
def stats(h,m):
 h=np.asarray(h);m=np.asarray(m);e=m-h
 with warnings.catch_warnings():
  warnings.simplefilter('ignore')
  rho=float(spearmanr(h.ravel(),m.ravel()).statistic)
  pr=float(pearsonr(h.ravel(),m.ravel()).statistic)
 return {'n':int(h.size),'mae':float(np.abs(e).mean()),'rmse':float(np.sqrt((e**2).mean())),'bias':float(e.mean()),'rho':rho if np.isfinite(rho) else None,'r':pr if np.isfinite(pr) else None,'human_mean':float(h.mean()),'model_mean':float(m.mean())}

def run():
 x=json.loads((HERE/'frozen_inputs.json').read_text())
 standard=[i for i in x['items'] if not i['control']]
 controls=[i for i in x['items'] if i['control'] and i['human'] is not None]
 by_title={i['source_title']:i for i in standard}
 h=np.array([i['human'] for i in standard]);hc=np.array([i['human'] for i in controls]);hp=np.array([by_title[i['base_title']]['human'] for i in controls])
 out={'human_correct':hp.mean(axis=0).tolist(),'human_incorrect':hc.mean(axis=0).tolist(),'human_change':(hc-hp).mean(axis=0).tolist(),'models':{}}
 for key,meta in x['models'].items():
  scores=x['scores'][key]
  m=np.array([scores[i['id']] for i in standard]);mc=np.array([scores[i['id']] for i in controls]);mp=np.array([scores[by_title[i['base_title']]['id']] for i in controls])
  out['models'][key]={**meta,**stats(h,m),'by_dimension':[stats(h[:,d],m[:,d]) for d in range(7)],'controls':{'n':len(controls),'correct':mp.mean(axis=0).tolist(),'incorrect':mc.mean(axis=0).tolist(),'change':(mc-mp).mean(axis=0).tolist(),'by_dimension':[stats(hc[:,d],mc[:,d]) for d in range(7)]}}
 (HERE/'recomputed_metrics.json').write_text(json.dumps(out,indent=2,ensure_ascii=False))
 print('Saved descriptive metrics for',len(standard),'standard pairings and',len(controls),'shared controls.')
if __name__=='__main__':run()
