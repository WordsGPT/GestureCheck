"""Add saved Glimpse scores to the corrected paper reference, without API calls.

Run from this materials package: python analysis/include_glimpse.py
Then python analysis/recompute_descriptive.py and python analysis/human_model_disagreement.py.
"""
from pathlib import Path
import json,hashlib,csv
import numpy as np
from recompute_descriptive import stats
HERE=Path(__file__).resolve().parent
KEY='elorian-glimpse-no-reasoning'

def run(source=None):
 source=Path(source) if source else HERE.parent/'glimpse'
 x=json.loads((HERE/'frozen_inputs.json').read_text());r=json.loads((HERE/'descriptive_results.json').read_text())
 cfg=json.loads((source/'run_config_4096.json').read_text());scores={}
 for item in x['items']:
  value=json.loads((source/(Path(item['id']).stem+'.rating.json')).read_text())
  if value['video_file']!=item['id'] or value['target_word']!=item['target']:raise ValueError('Item/label mismatch: '+item['id'])
  scores[item['id']]=[value['ratings'][dim]['score'] for dim in x['dimensions']]
  if any(type(v) is not int or not 1<=v<=5 for v in scores[item['id']]):raise ValueError('Invalid score: '+item['id'])
 usage=[json.loads(line) for line in (source/'openrouter_gesture_rating.usage.jsonl').read_text().splitlines() if line.strip()]
 cost=sum(v['accounted_cost_usd'] for v in usage)
 meta={'label':'Elorian Glimpse','input':'native video, provider-default sampling','logged_model_ids':sorted({v['model'] for v in usage}),'model_id_evidence':'saved run configuration and usage logs','canonical_slug':cfg['model']['canonical_slug'],'reasoning':'off','temperature':cfg['temperature'],'max_tokens':cfg['max_tokens'],'measured_total_usd':cost,'measured_clips':len(usage),'measured_usd_per_1000':cost/len(usage)*1000,'cost_basis':'Observed inference cost for the 149 completed reasoning-off requests; excludes preliminary default-reasoning attempts, fees and taxes','prompt_sha256':cfg['prompt_sha256'],'manifest_sha256':cfg['manifest_sha256']}
 x['models'][KEY]=meta;x['scores'][KEY]=scores
 ordinary=[i for i in x['items'] if not i['control']];controls=[i for i in x['items'] if i['control'] and i['human'] is not None];bytitle={i['source_title']:i for i in ordinary}
 h=np.array([i['human'] for i in ordinary]);m=np.array([scores[i['id']] for i in ordinary]);hc=np.array([i['human'] for i in controls]);mc=np.array([scores[i['id']] for i in controls]);hp=np.array([bytitle[i['base_title']]['human'] for i in controls]);mp=np.array([scores[bytitle[i['base_title']]['id']] for i in controls]);delta=mc-mp;human_delta=hc-hp
 result={**meta,**stats(h,m),'by_dimension':[stats(h[:,d],m[:,d]) for d in range(7)],'paired':{'n_base_clips':len(controls),'correct':mp.mean(axis=0).tolist(),'incorrect':mc.mean(axis=0).tolist(),'delta':delta.mean(axis=0).tolist(),'control_stats':stats(hc,mc),'control_by_dimension':[stats(hc[:,d],mc[:,d]) for d in range(7)],'delta_mae':np.abs(delta-human_delta).mean(axis=0).tolist(),'model_minus_human_delta':(delta-human_delta).mean(axis=0).tolist()}}
 r['models'][KEY]=result;r['counts']['main_model_configurations']=12;r['counts']['model_configurations_including_auxiliary']=13
 (HERE/'frozen_inputs.json').write_text(json.dumps(x,ensure_ascii=False,indent=2))
 (HERE/'descriptive_results.json').write_text(json.dumps(r,ensure_ascii=False,indent=2))
 (HERE/'glimpse_results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
 with (HERE/'glimpse_ratings.csv').open('w',newline='') as f:
  wr=csv.writer(f);wr.writerow(['item_id','source_title','target','control','dimension','model_score','human_mean'])
  for i in x['items']:
   for d,dim in enumerate(x['dimensions']):wr.writerow([i['id'],i['source_title'],i['target'],i['control'],dim,scores[i['id']][d],i['human'][d] if i['human'] else ''])
 print(json.dumps({'mae':result['mae'],'rho':result['rho'],'bias':result['bias'],'control_mae':result['paired']['control_stats']['mae'],'cost':cost,'n_clips':len(scores)},indent=2))
if __name__=='__main__':run()
