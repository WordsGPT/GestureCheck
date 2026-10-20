"""Layer Word-native Codex revisions over the supplied Claude-reviewed draft."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
from copy import deepcopy as cp
from difflib import SequenceMatcher
from datetime import datetime, timezone
from lxml import etree as E
import re,json

R=Path(__file__).resolve().parents[1]
SOURCE=R/'07_GestureCheckDraft_reviewed_tracked_CLAUDE_20_10_2026.docx'
TARGET=R/'generated/GestureCheck_clearer_text.docx'
OUT=R/'07_GestureCheck_Codex_suggested_changes_clearer_20_10_2026.docx'
W='http://schemas.openxmlformats.org/wordprocessingml/2006/main'
N={'w':W};q=lambda s:'{'+W+'}'+s
AUTHOR='Codex';DATE=datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
with SOURCE.open('rb') as f,ZipFile(f) as z:parts={n:z.read(n) for n in z.namelist()}
with ZipFile(TARGET) as z:target=E.fromstring(z.read('word/document.xml'))
source=E.fromstring(parts['word/document.xml'])
comments=E.fromstring(parts['word/comments.xml'])
revision_id=max([int(v) for v in source.xpath('//@w:id',namespaces=N) if v.isdigit()]+[999])+1
comment_id=max(int(c.get(q('id'))) for c in comments)+1
old_ps=source.xpath('//w:body//w:p',namespaces=N)
indices={id(p):i for i,p in enumerate(old_ps)}
ledger=[]

def sig(e):
 if e is None:return None
 return (e.tag,tuple(sorted(e.attrib.items())),e.text or '',tuple(sig(c) for c in e))
def visible(e):
 return ''.join(e.xpath('.//w:t[not(ancestor::w:del)]/text()',namespaces=N))
def tag(e):return E.QName(e).localname
def revision(kind):
 global revision_id
 el=E.Element(q(kind));el.set(q('id'),str(revision_id));revision_id+=1
 el.set(q('author'),AUTHOR);el.set(q('date'),DATE);return el
def ensure(parent,name,front=False):
 el=parent.find('w:'+name,N)
 if el is None:
  el=E.Element(q(name))
  if front:parent.insert(0,el)
  else:parent.append(el)
 return el
def property_change(parent,name,new):
 old=parent.find('w:'+name,N)
 if sig(old)==sig(new):return
 replacement=cp(new) if new is not None else E.Element(q(name))
 change=revision(name+'Change');change.append(cp(old) if old is not None else E.Element(q(name)))
 replacement.append(change)
 if old is not None:parent.replace(old,replacement)
 else:parent.insert(0,replacement)

def annotate(p,message):
 global comment_id
 cid=str(comment_id);comment_id+=1
 c=E.SubElement(comments,q('comment'));c.set(q('id'),cid);c.set(q('author'),AUTHOR);c.set(q('initials'),'CX');c.set(q('date'),DATE)
 pp=E.SubElement(c,q('p'));rr=E.SubElement(pp,q('r'));tt=E.SubElement(rr,q('t'));tt.text=message
 start=E.Element(q('commentRangeStart'));start.set(q('id'),cid)
 end=E.Element(q('commentRangeEnd'));end.set(q('id'),cid)
 p.insert(1 if p.find('w:pPr',N) is not None else 0,start);p.append(end)
 rr=E.SubElement(p,q('r'));rp=E.SubElement(rr,q('rPr'));style=E.SubElement(rp,q('rStyle'));style.set(q('val'),'CommentReference')
 ref=E.SubElement(rr,q('commentReference'));ref.set(q('id'),cid)
 return cid

def run_segments(p):
 result=[];offset=0
 for t in p.xpath('.//w:t[not(ancestor::w:del)]',namespaces=N):
  s=t.text or '';r=t.getparent();rp=r.find('w:rPr',N)
  result.append((offset,offset+len(s),rp));offset+=len(s)
 return result
def split_format(s,start,segments):
 end=start+len(s)
 for a,b,rp in segments:
  lo=max(a,start);hi=min(b,end)
  if lo<hi:yield s[lo-start:hi-start],rp
def make_run(s,rp=None,deleted=False,oldrp=None,format_changed=False):
 r=E.Element(q('r'))
 if rp is not None:r.append(cp(rp))
 if format_changed:
  prop=ensure(r,'rPr',True);ch=revision('rPrChange');ch.append(cp(oldrp) if oldrp is not None else E.Element(q('rPr')));prop.append(ch)
 t=E.SubElement(r,q('delText' if deleted else 't'));t.set('{http://www.w3.org/XML/1998/namespace}space','preserve');t.text=s
 return r
def tokens(s):return re.findall(r'\s+|\w+|[^\w\s]',s)
def paragraph_diff(old,new):
 out=cp(old);a=visible(old);b=visible(new)
 if a==b:
  property_change(out,'pPr',new.find('w:pPr',N))
  ar=out.xpath('.//w:r[not(ancestor::w:del)]',namespaces=N);br=new.xpath('.//w:r',namespaces=N)
  # Unchanged paragraphs keep their original fields, hyperlinks and reviewer markup.
  if len(ar)==len(br):
   for r,s in zip(ar,br):property_change(r,'rPr',s.find('w:rPr',N))
  return out
 property_change(out,'pPr',new.find('w:pPr',N))
 saved_anchors=[cp(c) for c in old if tag(c) in ['commentRangeStart','commentRangeEnd']]
 saved_refs=[cp(c) for c in old if c.xpath('.//w:commentReference',namespaces=N)]
 for child in list(out):
  if tag(child)!='pPr':out.remove(child)
 for anchor in saved_anchors:
  if tag(anchor)=='commentRangeStart':out.append(anchor)
 aa=tokens(a);bb=tokens(b)
 # Keep extensive rewrites readable as sentence proposals, rather than hundreds
 # of interleaved old/new word fragments. Small inline edits stay at word level.
 if max(len(a),len(b))>200 and SequenceMatcher(None,aa,bb,autojunk=False).ratio()<.70:
  aa=re.split(r'(?<=[.!?])(?=\s+[A-Z“])',a)
  bb=re.split(r'(?<=[.!?])(?=\s+[A-Z“])',b)
 ap=[0];bp=[0]
 for s in aa:ap.append(ap[-1]+len(s))
 for s in bb:bp.append(bp[-1]+len(s))
 aseg=run_segments(old);bseg=run_segments(new)
 for op,i,j,k,l in SequenceMatcher(None,aa,bb,autojunk=False).get_opcodes():
  if op=='equal':
   oldpos=ap[i];newpos=bp[k];end=bp[l]
   while newpos<end:
    oa,ob,orp=next(v for v in aseg if v[0]<=oldpos<v[1])
    na,nb,nrp=next(v for v in bseg if v[0]<=newpos<v[1])
    length=min(ob-oldpos,nb-newpos,end-newpos)
    out.append(make_run(b[newpos:newpos+length],nrp,oldrp=orp,format_changed=sig(orp)!=sig(nrp)))
    oldpos+=length;newpos+=length
  else:
   if op in ['replace','delete']:
    dele=revision('del')
    for s,rp in split_format(a[ap[i]:ap[j]],ap[i],aseg):dele.append(make_run(s,rp,True))
    out.append(dele)
   if op in ['replace','insert']:
    ins=revision('ins')
    for s,rp in split_format(b[bp[k]:bp[l]],bp[k],bseg):ins.append(make_run(s,rp))
    out.append(ins)
 for anchor in saved_anchors:
  if tag(anchor)=='commentRangeEnd':out.append(anchor)
 out.extend(saved_refs)
 return out

def mark_paragraph(p,kind):
 out=cp(p)
 pp=ensure(out,'pPr',True);rp=ensure(pp,'rPr');rp.append(revision(kind))
 # Every newly added or removed run is a native tracked insertion/deletion.
 children=[c for c in out if tag(c) not in ['pPr','commentRangeStart','commentRangeEnd'] and not c.xpath('.//w:commentReference',namespaces=N)]
 if children:
  wrapper=revision(kind);out.insert(list(out).index(children[0]),wrapper)
  for c in children:
   out.remove(c)
   if kind=='del':
    for t in c.iter(q('t')):t.tag=q('delText')
   wrapper.append(c)
 return out
def mark_table(table,kind):
 out=cp(table)
 for row in out.findall('w:tr',N):
  ensure(row,'trPr',True).append(revision(kind))
  for p in list(row.xpath('.//w:p',namespaces=N)):
   parent=p.getparent();parent.replace(p,mark_paragraph(p,kind))
 return out
def table_diff(old,new):
 oldrows=old.findall('w:tr',N);newrows=new.findall('w:tr',N)
 if len(oldrows)!=len(newrows) or any(len(a.findall('w:tc',N))!=len(b.findall('w:tc',N)) for a,b in zip(oldrows,newrows)):
  # A redesigned results table is shown as deleted old rows plus a proposed table.
  spacer=E.Element(q('p'));pp=E.SubElement(spacer,q('pPr'));spacing=E.SubElement(pp,q('spacing'));spacing.set(q('before'),'0');spacing.set(q('after'),'0');spacing.set(q('line'),'20');spacing.set(q('lineRule'),'exact')
  return [mark_table(old,'del'),mark_paragraph(spacer,'ins'),mark_table(new,'ins')]
 out=cp(old)
 property_change(out,'tblPr',new.find('w:tblPr',N))
 property_change(out,'tblGrid',new.find('w:tblGrid',N))
 for row,newrow in zip(out.findall('w:tr',N),newrows):
  property_change(row,'trPr',newrow.find('w:trPr',N))
  for cell,ncell in zip(row.findall('w:tc',N),newrow.findall('w:tc',N)):
   property_change(cell,'tcPr',ncell.find('w:tcPr',N))
   ops=cell.findall('w:p',N);nps=ncell.findall('w:p',N)
   assert len(ops)==len(nps)
   for p,np in zip(ops,nps):cell.replace(p,paragraph_diff(p,np))
 return [out]

def alignment(olds,news):
 n=len(olds);m=len(news);dp=[[0.]*(m+1) for _ in range(n+1)];back={}
 for i in range(1,n+1):dp[i][0]=i*.55;back[i,0]='del'
 for j in range(1,m+1):dp[0][j]=j*.55;back[0,j]='ins'
 for i in range(1,n+1):
  for j in range(1,m+1):
   cost=3 if tag(olds[i-1])!=tag(news[j-1]) else 1-SequenceMatcher(None,visible(olds[i-1]),visible(news[j-1]),autojunk=False).ratio()
   opts=[(dp[i-1][j-1]+cost,'pair'),(dp[i-1][j]+.55,'del'),(dp[i][j-1]+.55,'ins')]
   dp[i][j],back[i,j]=min(opts,key=lambda t:t[0])
 result=[];i=n;j=m
 while i or j:
  op=back[i,j]
  if op=='pair':result.append((olds[i-1],news[j-1]));i-=1;j-=1
  elif op=='del':result.append((olds[i-1],None));i-=1
  else:result.append((None,news[j-1]));j-=1
 return result[::-1]

explanations={
136:'PROPOSED ATTRIBUTION CLARIFICATION. Both collections cite the same 2011 paper. The wording specifies that the Figshare collection requests both the 2011 and 2015 citations, without claiming that the files are identical. Based on the saved VIDEO_PROVENANCE.md source audit.',
138:'PROPOSED NEW METHODS DETAIL. Added duration, resolution, fps and absence of audio measured from the 134 local presentation MP4s using ffprobe. These are presentation-file properties, not original-camera specifications. Cross-collection performer identity is unverified. Please approve whether this detail belongs in the manuscript.',
261:'PROPOSED NEW SENSITIVITY ANALYSIS. Applied Holm correction to all 21 saved cohort contrasts. Only English facial expression and Japanese cultural familiarity survive correction. Revised the interpretation accordingly; this changes which results are described as statistically supported.',
295:'PROPOSED TABLE NOTE. Expanded Table 3 to all 21 contrasts, with pointwise 95% CIs and Holm-adjusted p values. CIs use saved coefficient/SE estimates and t(229); the original regression was not refitted.',
296:'PROPOSED NEW DESCRIPTIVE ANALYSIS. Computed endpoint and midpoint shares by cohort and dimension from the hash-matched controlled workbook (4,600 retained evaluations, 230 people). Appendix A shows all values. These descriptive results do not separate cultural interpretation from scale use.',
298:'PROPOSED INTERPRETATION CHANGE. Qualified the cohort claims to reflect the Holm correction and possible effects of scale use, translation and interpretation.',
300:'PROPOSED PROVENANCE DISCLOSURE. Added saved model IDs/access routes and an input-route confound statement. Earlier evaluation dates, three exact Gemini IDs and complete retry histories were not recoverable from the retained package; Appendix B labels the gaps. These notes are suggestions for author review, not newly established experimental facts.',
303:'PROPOSED METHODS PRECISION. “Video or sampled frames” includes the GPT frame-input conditions.',
305:'PROPOSED REMOVAL. Removed the unanalysed self-reported confidence field from the narrative, as Claude offered as an alternative to analysing it. The archived prompt is unchanged. Added the conjunction needed after that removal.',
313:'PROPOSED CROSS-REFERENCE FIX. Parsing is now described in Methods 6.1 rather than Results 6.3.2.',
495:'PROPOSED MOVE. Deleted this results paragraph because the Qwen field-remapping explanation is now proposed in Methods 6.1, with documented remap counts and a distinction between final completeness and unavailable historical failure rates.',
613:'PROPOSED WORDING AND FORMATTING. Kept only the lead-in bold, shortened the correspondence summary, and removed the repeated discussion of untested model repeatability. You can reject the wording changes separately from the formatting changes.',
655:'PROPOSED DISCUSSION CHANGE. Updated the cohort interpretation after Holm correction and discussed the human/model familiarity-prompt mismatch. A reference-population rerun is proposed as future work; no rerun was performed.',
662:'PROPOSED DELETION. Removes the whole model-reliability limitation paragraph, as explicitly requested in Claude comment 8.',
663:'PROPOSED TRANSITION. Renumbered the remaining limitations after the requested paragraph deletion.',
664:'PROPOSED QUALIFICATION. Limits the strongest cohort claims to the two contrasts surviving Holm correction.',
665:'PROPOSED QUALIFICATION. Removes the unverified claim that the same performer appeared in both source collections; retains the generalisation limitation and renumbers it.',
666:'PROPOSED TRANSITION. Renumbered the remaining limitation after the paragraph deletion.',
669:'PROPOSED RELATED DELETION. Removed the future reliability-study sentence alongside the requested removal of the reliability limitation. This additional deletion is independently rejectable.',
673:'PROPOSED AVAILABILITY QUALIFICATION. Distinguishes the existing public release from the newly added manuscript analyses. No trial-level release or DOI was created. Funding, conflicts, CRediT roles and full AI-use declarations were not supplied and have not been invented; authors still need to confirm these before journal submission.'
}

ob=source.find('w:body',N);nb=target.find('w:body',N)
olds=[e for e in ob if tag(e)!='sectPr'];news=[e for e in nb if tag(e)!='sectPr']
key=lambda e:(tag(e),visible(e))
result=[]
for op,a,b,c,d in SequenceMatcher(None,list(map(key,olds)),list(map(key,news)),autojunk=False).get_opcodes():
 pairs=list(zip(olds[a:b],news[c:d])) if op=='equal' else alignment(olds[a:b],news[c:d])
 for old,new in pairs:
  if old is None:
   out=mark_table(new,'ins') if tag(new)=='tbl' else mark_paragraph(new,'ins')
   t=visible(new)
   if t.startswith('Parsing and field normalization.'):
    annotate(out,'PROPOSED MOVE AND AUDIT ADDITION. Moved the Qwen parsing explanation from Results to Methods. Added the 127 documented field remaps affecting 125/149 pairings and completeness checks for every model/input setting. Historical parse-failure rates are unavailable; no zero failure rate is claimed.')
   elif t.startswith('Appendix A.'):
    annotate(out,'PROPOSED NEW APPENDIX. Everything in Appendix A is new: the cohort endpoint/midpoint distributions and the description of their source. This is a descriptive response-style diagnostic requested by Claude, not a new controlled experiment.')
   elif t.startswith('Appendix B.'):
    annotate(out,'PROPOSED NEW APPENDIX. Everything in Appendix B is new: model provenance and parsing/completeness tables. Missing historical metadata is stated explicitly. You may reject the appendix, or individual paragraphs/table rows.')
   result.append(out);ledger.append({'op':'insert','new':t[:160]})
  elif new is None:
   out=mark_table(old,'del') if tag(old)=='tbl' else mark_paragraph(old,'del')
   idx=indices.get(id(old))
   if idx in explanations:annotate(out,explanations[idx])
   result.append(out);ledger.append({'op':'delete','source_paragraph':idx,'old':visible(old)[:160]})
  elif tag(old)=='tbl':
   outs=table_diff(old,new)
   if visible(old)!=visible(new):
    note='PROPOSED TABLE REPLACEMENT. The original seven selected contrasts are shown as deletions. The proposed replacement shows all 21 contrasts, pointwise 95% confidence intervals and Holm p values. Accepting the replacement removes the old table; rejecting it retains the old table.' if len(outs)>1 else 'PROPOSED SUMMARY UPDATE. Revised the correspondence/disagreement summary to match the item-level results already described in the draft. All altered text is tracked.'
    annotate(outs[-1].find('.//w:p',N),note)
    ledger.append({'op':'table_text_change','old':visible(old)[:100],'new':visible(new)[:100]})
   elif sig(old)!=sig(new):
    annotate(outs[0].find('.//w:p',N),'PROPOSED TABLE FORMATTING. Increased space between the longest dimension label and its numeric mean; adjusted cell widths, padding and type size. Values are unchanged. Formatting changes are tracked.')
   result.extend(outs)
  else:
   out=paragraph_diff(old,new)
   if visible(old)!=visible(new):
    idx=indices.get(id(old))
    if idx in explanations:annotate(out,explanations[idx])
    ledger.append({'op':'edit','source_paragraph':idx,'old':visible(old)[:130],'new':visible(new)[:130]})
   result.append(out)

# Keep original Claude comments and source revision author identities intact.
for child in list(ob):
 if tag(child)!='sectPr':ob.remove(child)
for i,child in enumerate(result):ob.insert(i,child)
title=next(p for p in ob.findall('w:p',N) if visible(p).startswith('Can Video-Language'))
annotate(title,'REVIEW GUIDE. This copy starts from the Claude-reviewed draft. Every Codex text addition, deletion, table replacement and formatting change is a native Word tracked suggestion labelled “Codex”; use Review → Accept or Reject. Claude’s original comments and the pre-existing tracked deletion are retained. New Codex comments explain the substantive proposals. No new API experiments, public data deposit or author declarations were completed.')
settings=E.fromstring(parts['word/settings.xml']);ensure(settings,'trackRevisions')
view=ensure(settings,'revisionView')
for attr in ['markup','insDel','formatting','comments']:view.set(q(attr),'true')
parts['word/settings.xml']=E.tostring(settings,xml_declaration=True,encoding='UTF-8',standalone=True)
parts['word/document.xml']=E.tostring(source,xml_declaration=True,encoding='UTF-8',standalone=True)
parts['word/comments.xml']=E.tostring(comments,xml_declaration=True,encoding='UTF-8',standalone=True)
with ZipFile(OUT,'w',ZIP_DEFLATED) as z:
 for name,data in parts.items():z.writestr(name,data)
(R/'generated/codex_review_clearer_ledger.json').write_text(json.dumps(ledger,indent=2,ensure_ascii=False),encoding='utf-8')

def project(tree,accept):
 tree=cp(tree)
 # Model Word's row-level and paragraph-mark acceptance/rejection for verification.
 for table in list(tree.xpath('//w:tbl',namespaces=N)):
  for row in list(table.findall('w:tr',N)):
   action=next((tag(e) for e in row.xpath('./w:trPr/w:ins | ./w:trPr/w:del',namespaces=N) if e.get(q('author'))==AUTHOR),None)
   if action and ((action=='del')==accept):table.remove(row)
  if not table.findall('w:tr',N):table.getparent().remove(table)
 for p in list(tree.xpath('//w:p',namespaces=N)):
  action=next((tag(e) for e in p.xpath('./w:pPr/w:rPr/w:ins | ./w:pPr/w:rPr/w:del',namespaces=N) if e.get(q('author'))==AUTHOR),None)
  if action and ((action=='del')==accept):p.getparent().remove(p)
 for el in reversed(tree.xpath('//w:ins | //w:del',namespaces=N)):
  if el.get(q('author'))!=AUTHOR:continue
  parent=el.getparent()
  if tag(parent) in ['rPr','trPr']:parent.remove(el);continue
  if (tag(el)=='ins')==accept:
   ix=parent.index(el);parent.remove(el)
   for j,ch in enumerate(list(el)):
    for t in ch.iter(q('delText')):t.tag=q('t')
    parent.insert(ix+j,ch)
  else:parent.remove(el)
 for change in reversed(tree.xpath('//w:pPrChange | //w:rPrChange | //w:tblPrChange | //w:tblGridChange | //w:tcPrChange | //w:trPrChange',namespaces=N)):
  if change.get(q('author'))!=AUTHOR:continue
  prop=change.getparent()
  if accept:prop.remove(change)
  else:
   prior=cp(change[0]);prop.getparent().replace(prop,prior)
 return tree
def content(tree):
 return [(tag(e),visible(e)) for e in tree.find('w:body',N) if tag(e)!='sectPr' and not (tag(e)=='p' and not visible(e) and not e.xpath('.//w:drawing | .//w:pict',namespaces=N))]
with SOURCE.open('rb') as f,ZipFile(f) as z:original=E.fromstring(z.read('word/document.xml'))
assert content(project(source,False))==content(original),'Rejecting Codex must restore original visible content and table structure'
assert content(project(source,True))==content(target),'Accepting Codex must reproduce delivered revision content'
oldcomments=[c for c in comments if c.get(q('author'))!=AUTHOR]
assert len(oldcomments)==11
ids=comments.xpath('./w:comment/@w:id',namespaces=N)
for cid in ids:
 assert source.xpath('//*[@w:id=$id and (self::w:commentRangeStart or self::w:commentRangeEnd or self::w:commentReference)]',namespaces=N,id=cid),f'Unanchored comment {cid}'
print(json.dumps({'file':str(OUT),'codex_text_insertions':len(source.xpath('//w:ins[@w:author="Codex"]',namespaces=N)),'codex_text_deletions':len(source.xpath('//w:del[@w:author="Codex"]',namespaces=N)),'codex_comments':sum(c.get(q('author'))==AUTHOR for c in comments),'claude_comments_retained':len(oldcomments),'accept_and_reject_content_checks':'passed'},indent=2))
