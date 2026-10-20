from pathlib import Path
import json,openpyxl,subprocess,collections
R=Path(__file__).resolve().parents[1]
x=json.loads((R/'paper_materials/analysis/frozen_inputs.json').read_text())
print('MODELS',json.dumps(x['models'],indent=2))
w=openpyxl.load_workbook(R/'research-insights-7f3c9a/gesture_ratings_all_data_and_analysis.xlsx',read_only=True,data_only=True)
print('SHEETS',w.sheetnames)
for s in w:
 print(s.title,s.max_row,list(next(s.values))[:45])
print('LOGS')
for p in (R/'tests').rglob('*'):
 if p.is_file() and any(v in p.name for v in ['config','usage','summary']): print(p.relative_to(R))
vstats={}
manifest={i['title']:i for i in json.loads((R/'paper_materials/model_inference/all_videos_neutral.json').read_text())}
for i in x['items']:
 if i['control']:continue
 p=R/manifest[i['id']]['local_path']
 if not p.exists():continue
 j=json.loads(subprocess.check_output(['ffprobe','-v','quiet','-show_streams','-show_format','-of','json',str(p)]))
 v=[s for s in j['streams'] if s['codec_type']=='video'][0]
 a=any(s['codec_type']=='audio' for s in j['streams'])
 vstats[i['id']]={'collection':i['collection'],'duration':float(j['format']['duration']),'width':v['width'],'height':v['height'],'fps':v['r_frame_rate'],'audio':a}
(R/'generated/video_audit.json').write_text(json.dumps(vstats,indent=2))
for c in ['gesture','object']:
 vs=[v for v in vstats.values() if v['collection']==c]
 if vs:print('VIDEO',c,len(vs),'duration',sum(v['duration'] for v in vs)/len(vs),min(v['duration'] for v in vs),max(v['duration'] for v in vs),'formats',collections.Counter((v['width'],v['height'],v['fps'],v['audio']) for v in vs))
