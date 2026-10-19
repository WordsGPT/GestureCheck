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

# Overview: a single left-to-right study flow with parallel human/model ratings.
fig,ax=plt.subplots(figsize=(10.8,5.8))
ax.set(xlim=(0,108),ylim=(0,58));ax.axis('off')
ink='#172b3a';muted='#526575';rule='#d8e1e5';human='#087f79';model='#a35330'
def txt(x,y,t,size=12,color=ink,weight='normal',**kw):
 ax.text(x,y,t,fontsize=size,color=color,fontweight=weight,ha='left',va='top',**kw)
def line(x1,y1,x2,y2,color=rule,lw=1):ax.plot([x1,x2],[y1,y2],color=color,lw=lw,solid_capstyle='round')
def arrow(x1,y1,x2,y2):
 ax.annotate('',xy=(x2,y2),xytext=(x1,y1),arrowprops={'arrowstyle':'-|>','color':'#9babb5','lw':1.25,'mutation_scale':11})
# Stage headings, aligned to a common baseline.
for x,num,title in [(1,'01','GESTURE MATERIALS'),(39,'02','INDEPENDENT RATINGS'),(78,'03','HUMAN–MODEL COMPARISON')]:
 txt(x,57,num,11,muted);txt(x,53,title,10.2,ink,'bold');line(x,49,x+(30 if x<78 else 29),49)
# Materials and the within-video label manipulation.
txt(1,46,'134',35,ink,'bold');txt(1,35,'underlying gesture clips',13,ink,'bold')
txt(1,30.5,'90 + 44 clips from two collections',10.5,muted)
txt(1,23,'LABEL MANIPULATION',9.8,muted,'bold')
line(1,18.9,1,10,human,2.5)
txt(3,19,'14 clips × 2 labels',14,ink,'bold')
txt(3,14,'Correct word / unrelated word',10.5,muted)
txt(1,7,'Each human saw only one\nlabel version of a given clip.',10.5,muted,linespacing=1.45)
# Parallel rating arms, with restrained color and large counts.
line(39,45,39,30,human,2.8)
txt(41,46,'HUMANS',10.5,human,'bold');txt(41,42,'230',27,ink,'bold')
txt(53,39,'participants',11,muted)
txt(41,33.5,'4,600 evaluations · 7 scores each',10.5,muted)
line(39,24,39,9,model,2.8)
txt(41,25,'VIDEO-LANGUAGE MODELS',10.5,model,'bold');txt(41,21,'12',27,ink,'bold')
txt(49,18,'configurations · 4 families',10.5,muted)
txt(41,12.5,'149 pairings · 7 scores each',10.5,muted)
# Both rating arms share the same material and feed both comparisons.
line(33,17,33,38,'#9babb5',1.1);arrow(30,28,33,28);arrow(33,38,37,38);arrow(33,17,37,17)
line(73,17,73,38,'#9babb5',1.1);line(70,38,73,38,'#9babb5',1.1);line(70,17,73,17,'#9babb5',1.1);arrow(73,28,76,28)
# Two complementary outcomes, rather than six interchangeable cards.
txt(78,46,'STANDARD PAIRINGS',10.5,ink,'bold');txt(78,41.5,'134',27,ink,'bold');txt(91,38.5,'gesture–word pairs',10.5,muted)
txt(78,33,'Error, bias and correlation\nfor each of seven dimensions',11,muted,linespacing=1.45)
line(78,26.5,107,26.5)
txt(78,24,'INCORRECT-LABEL CONTROLS',10.5,ink,'bold');txt(78,19.5,'14',27,ink,'bold');txt(87,16.5,'matched clips',10.5,muted)
txt(78,11,'Score drops across labels\nError on low-rated pairings',11,muted,linespacing=1.45)
# Keep the additional model-only control visible without competing with the design.
line(1,.1,107,.1)
fig.subplots_adjust(left=.025,right=.99,top=.98,bottom=.10)
fig.text(.034,.025,'Human reference: 148 pairings. Models: 149 pairings, including one additional control without human ratings.',fontsize=9.5,color=muted)
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
