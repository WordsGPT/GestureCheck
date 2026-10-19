from pathlib import Path
import json
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch

HERE=Path(__file__).resolve().parent/'analysis'
OUT=HERE.parent/'figures';OUT.mkdir(parents=True,exist_ok=True)
R=json.loads((HERE/'descriptive_results.json').read_text());X=json.loads((HERE/'frozen_inputs.json').read_text())
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':10,'axes.spines.top':False,'axes.spines.right':False,'savefig.dpi':220,'pdf.fonttype':42})
teal='#137c73';blue='#456a9b';rust='#b9563c';gray='#667085'
def save(fig,name):
 fig.savefig(OUT/(name+'.png'),bbox_inches='tight',facecolor='white');fig.savefig(OUT/(name+'.pdf'),bbox_inches='tight',facecolor='white');plt.close(fig)

fig,ax=plt.subplots(figsize=(10,4.7));ax.set(xlim=(0,10),ylim=(0,5));ax.axis('off')
boxes=[(.1,3.35,2.8,1.3,'134 underlying clips\n90 + 44 source collections\nAll depict performed gestures'),(3.6,3.35,2.8,1.3,'Human reference\n230 retained participants\n4,600 evaluations × 7 scores'),(7.1,3.35,2.8,1.3,'Model benchmark\n12 main configurations\n4 model families'),(.1,.7,2.8,1.65,'Label manipulation\n14 shared clips × 2 labels\nDifferent humans per version\n15th control: models only'),(3.6,.7,2.8,1.65,'Standard pairings\n134 items × 7 dimensions\nError, bias and correlation\nSeven separate dimensions'),(7.1,.7,2.8,1.65,'Matched control analysis\nSame footage across labels\nHuman and model score drops\nError on low-rated pairings')]
for a,b,w,h,t in boxes:
 ax.add_patch(FancyBboxPatch((a,b),w,h,boxstyle='round,pad=.04,rounding_size=.1',facecolor='#eef6f4' if a<3 else '#f2f4f7',edgecolor='#c2d2cf'));ax.text(a+w/2,b+h/2,t,ha='center',va='center',linespacing=1.5,fontsize=10)
for x in [1.5,5,8.5]:ax.annotate('',xy=(x,2.45),xytext=(x,3.25),arrowprops={'arrowstyle':'->','color':gray,'lw':1.5})
ax.text(5,4.98,'Study design and units of analysis',ha='center',va='top',fontsize=15,fontweight='bold')
save(fig,'fig1_study_overview')

keys=sorted(list(R['models'])[:11]+['elorian-glimpse-no-reasoning'],key=lambda k:R['models'][k]['mae']);models=[R['models'][k] for k in keys];names=[m['label']+' · '+('native video, default sampling' if m['label']=='Elorian Glimpse' else m['input']) for m in models]
fig,ax=plt.subplots(figsize=(9,5.5));ys=np.arange(len(models));mae=np.array([m['mae'] for m in models]);ax.barh(ys,mae,color=[teal if k==0 else blue for k in range(len(models))],height=.65);
ax.set_yticks(ys,names,fontsize=9);ax.invert_yaxis();ax.set_xlabel('Mean absolute error on 134 standard pairings');ax.set_xlim(0,1.35);
ax.set_title('Overall error on standard pairings',loc='left',fontweight='bold');fig.tight_layout();save(fig,'fig2_overall_error')

primary=['gemini-3.8-flash','qwen3.8-max-0902','gpt-5.6-sol','gpt-5.6-luna','qwen3.5-397b-a17b','gemini-3.1-pro-preview'];short=['Gemini Flash\n1 fps','Qwen Max\n1 fps','GPT Sol\n2 fps','GPT Luna\n2 fps','Qwen 3.5\n1 fps','Gemini Pro\n1 fps']
rho=np.array([[R['models'][k]['by_dimension'][d]['rho'] for k in primary] for d in range(7)])
err=np.array([[R['models'][k]['by_dimension'][d]['mae'] for k in primary] for d in range(7)])
fig,axes=plt.subplots(1,2,figsize=(11,4.8),sharey=True)
for ax,values,title,cmap,vmin,vmax in [(axes[0],err,'Absolute error','YlOrBr',0,1.8),(axes[1],rho,'Within-dimension rank correlation','Blues',0,.8)]:
 im=ax.imshow(values,cmap=cmap,vmin=vmin,vmax=vmax,aspect='auto');ax.set_xticks(range(6),[v.replace(' ','\n',1) for v in short],fontsize=8);ax.set_title(title,fontsize=11,fontweight='bold');ax.set_yticks(range(7),X['labels']);
 for row in range(7):
  for col in range(6):ax.text(col,row,f'{values[row,col]:.2f}',ha='center',va='center',fontsize=9,color='white' if values[row,col]>(vmin+vmax)*.57 else '#182230')
 fig.colorbar(im,ax=ax,fraction=.035,pad=.025)
fig.tight_layout();save(fig,'fig3_dimension_profiles')

control_primary=primary+['elorian-glimpse-no-reasoning'];control_short=short+['Glimpse\ndefault sampling']
fig,axes=plt.subplots(1,2,figsize=(10.5,5.2));cats=['Humans']+control_short;correct=[R['human_paired_correct'][0]]+[R['models'][k]['paired']['correct'][0] for k in control_primary];incorrect=[R['human_paired_incorrect'][0]]+[R['models'][k]['paired']['incorrect'][0] for k in control_primary];y=np.arange(8)
for j in range(8):axes[0].plot([incorrect[j],correct[j]],[j,j],color='#b8c7c7',lw=2)
axes[0].scatter(correct,y,color=teal,label='Correct label',zorder=3);axes[0].scatter(incorrect,y,color=rust,label='Incorrect label',zorder=3);axes[0].set_yticks(y,cats,fontsize=8);axes[0].invert_yaxis();axes[0].set(xlim=(1,4.5),xlabel='Mean iconicity (same 14 clips)');axes[0].legend(fontsize=8);axes[0].set_title('Same footage under two labels',fontsize=11,fontweight='bold')
delta=[R['human_paired_delta'][0]]+[R['models'][k]['paired']['delta'][0] for k in control_primary]
axes[1].barh(range(8),delta,color=[teal]+[blue]*7,height=.55)
axes[1].axvline(0,color=gray,lw=.7);axes[1].set_yticks(range(8),cats,fontsize=8);axes[1].invert_yaxis();axes[1].set_xlabel('Incorrect minus correct iconicity');axes[1].set_title('Observed mean rating change',fontsize=11,fontweight='bold')
fig.tight_layout();save(fig,'fig4_controls_descriptive')
print('Created four figures as PNG and vector PDF')
