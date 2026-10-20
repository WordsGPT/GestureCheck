from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
from copy import deepcopy
from lxml import etree as E

R=Path(__file__).resolve().parents[1]
W='http://schemas.openxmlformats.org/wordprocessingml/2006/main'
N={'w':W}; q=lambda s:'{'+W+'}'+s
src=R/'07_GestureCheck_Final_20_10_2026.docx'
target=R/'generated/GestureCheck_clearer_text.docx'
with ZipFile(src) as z: parts={n:z.read(n) for n in z.namelist()}
root=E.fromstring(parts['word/document.xml'])
changes={
'The video-centered omnibus analyses':[
'The overall tests detected cohort differences in each of the seven rating dimensions (all p < .001). To examine these differences, we compared the English-, Italian-, and Japanese-language cohorts with the German-language cohort for each dimension, giving 21 comparisons. These analyses accounted for which stimuli participants rated and for repeated ratings from the same participant.',
'Seven comparisons were statistically significant before correction for multiple testing. After Holm correction across all 21 comparisons, two remained significant. The English-language cohort rated facial expression 0.41 points lower than the German-language cohort (95% CI [−0.60, −0.21], adjusted p = .001). The Japanese-language cohort rated cultural familiarity 0.31 points lower than the German-language cohort (95% CI [−0.48, −0.14], adjusted p = .008). The other comparisons did not meet the corrected significance threshold. Table 3 reports all estimates, confidence intervals, and unadjusted and adjusted p values.'
],
'Table 3 Video-adjusted cohort differences':['Table 3. Cohort differences in ratings after adjustment for stimulus (reference cohort: German)'],
'Note. All 21 contrasts from seven ordinary least squares models':['Note. Negative coefficients indicate lower ratings than those of the German-language cohort; positive coefficients indicate higher ratings. All 21 comparisons from seven ordinary least squares models are shown. Each model included fixed effects for all 148 stimulus–label pairings, with standard errors clustered by participant. Confidence intervals are pointwise 95% intervals based on t(229); unadjusted p values use the same reference distribution. Holm-adjusted p values account for the 21 comparisons across all seven dimensions.'],
'Response-style diagnostics were computed separately':[
'We also examined how often each cohort selected the endpoints (1 or 5) and midpoint (3) of the rating scale (Appendix A). For enactment potential, the Japanese-language cohort selected endpoints less often than the other cohorts (34.3% versus 39.5–48.0%) and the midpoint more often (25.4% versus 16.1–17.2%). For cultural familiarity, both percentages fell within the ranges observed in the other cohorts. These patterns describe differences in scale use, but cannot distinguish response preferences from differences in how participants understood or judged the gestures.'
],
'These results indicate that at least some cohort differences persist':[
'Together, the analyses provide the strongest evidence for lower facial-expression ratings in the English-language cohort and lower cultural-familiarity ratings in the Japanese-language cohort, relative to the German-language cohort. They do not establish whether these differences reflect translation, interpretation, scale use, or cultural experience. Pooled ratings should therefore be understood as a reference for the sampled participants, rather than assumed to represent every population equally.'
]
}
found=set()
for p in list(root.xpath('//w:body/w:p',namespaces=N)):
 text=''.join(p.xpath('.//w:t/text()',namespaces=N))
 for prefix,values in changes.items():
  if text.startswith(prefix):
   found.add(prefix)
   template=deepcopy(p);prev=p
   for i,value in enumerate(values):
    out=p if i==0 else deepcopy(template)
    rp=out.find('.//w:rPr',N)
    for c in list(out):
     if c.tag!=q('pPr'):out.remove(c)
    r=E.SubElement(out,q('r'))
    if rp is not None:r.append(deepcopy(rp))
    E.SubElement(r,q('t')).text=value
    if i:prev.addnext(out)
    prev=out
assert found==set(changes),f'Missing paragraphs: {set(changes)-found}'
parts['word/document.xml']=E.tostring(root,xml_declaration=True,encoding='UTF-8',standalone=True)
with ZipFile(target,'w',ZIP_DEFLATED) as z:
 for n,data in parts.items():z.writestr(n,data)
builder=(R/'generated/make_codex_review.py').read_text(encoding='utf-8')
builder=builder.replace("TARGET=R/'07_GestureCheck_Final_20_10_2026.docx'","TARGET=R/'generated/GestureCheck_clearer_text.docx'")
builder=builder.replace("OUT=R/'07_GestureCheck_Codex_suggested_changes_20_10_2026.docx'","OUT=R/'07_GestureCheck_Codex_suggested_changes_clearer_20_10_2026.docx'")
builder=builder.replace('codex_review_ledger.json','codex_review_clearer_ledger.json')
(R/'generated/make_codex_review_clearer.py').write_text(builder,encoding='utf-8')
print('Updated section text; numerical table values unchanged.')
