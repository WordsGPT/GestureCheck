# VLM references and hypothesis support

Checked 19 October 2026. Scope: Sections 2.2–2.3 and all five retained hypothesis rationales. The original title, section order, hypothesis statements, analyses and numerical results are retained. Bibliographic checks do not constitute new experiments.

## Claims in the VLM account

| Passage | Evidence checked | Action |
|---|---|---|
| Pose estimation and bodily configurations, Section 2.2 | Cao et al. (2017), abstract and method: https://arxiv.org/abs/1611.08050 | Added the primary pose-estimation source; removed an unsupported claim that it directly establishes semantic gesture ratings. |
| Convolutional/recurrent models and temporal visual representations | Donahue et al. (2015), CVPR paper: https://openaccess.thecvf.com/content_cvpr_2015/html/Donahue_Long-Term_Recurrent_Convolutional_2015_CVPR_paper.html; author manuscript: https://arxiv.org/abs/1411.4389 | Replaced the general architecture citations with primary experimental work. |
| Transformers over video space and time | Bertasius et al. (2021), abstract and experiments: https://proceedings.mlr.press/v139/bertasius21a.html | Added primary architecture evidence. |
| Visual-language associations | Radford et al. (2021), abstract and zero-shot transfer: https://proceedings.mlr.press/v139/radford21a.html | Added the image-text learning source. It supports visual-language alignment, not temporal gesture understanding by itself. |
| Combining encoders, audio/video and an LLM; instruction-following responses | Zhang et al. (2023), abstract and architecture: https://aclanthology.org/2023.emnlp-demo.49/ | Added primary Video-LLaMA source beside the relevant claims. It does not validate the seven GMSM rating questions. |
| General video QA and temporal/action tasks | Fu et al. (2025), Video-MME task taxonomy and experiments: https://openaccess.thecvf.com/content/CVPR2025/papers/Fu_Video-MME_The_First-Ever_Comprehensive_Evaluation_Benchmark_of_Multi-modal_LLMs_in_CVPR_2025_paper.pdf | Used the actual benchmark rather than a general survey. |
| Zero-shot action labels | Unmesh et al. (2026), abstract and training-free pipeline: https://arxiv.org/abs/2602.21406 | Retained the source but narrowed the claim to responses/action labels without task-specific examples. |
| Neural alignment / embodied-cognition analogy | Bavaresco et al. (2026), task, fMRI comparison and ablations: https://aclanthology.org/2026.eacl-long.150/ | Corrected the account: the study concerns concept words with pictures/sentences and architecture-dependent neural alignment; it does not test gesture understanding or establish embodied simulation. Completed publication metadata. |
| Gesture grounding | Nishida et al. (2025), Sections 4.1–4.3: https://aclanthology.org/2025.acl-short.40.pdf | Corrected the account: the consistent weakness concerns indexical gestures; the paper compares all three gesture types. Completed pages and proceedings metadata. |
| LLM psycholinguistic ratings | Conde et al. (2026), abstract and validation studies: https://journalofcognition.org/articles/10.5334/joc.482; Martínez et al., abstract/publisher record: https://link.springer.com/article/10.3758/s13428-024-02515-z | Retained the norming rationale. Martínez's article appeared online in December 2024 and in volume 57 (2025); the draft's 2024 online-publication citation is retained consistently. |
| GMSM manual dimensions; educational application | Authors' supplied GMSM account and conceptual argument | Removed the unsubstantiated “most studies / expert raters” generalization. The proposed educational use remains the purpose of this benchmark, not a previously established VLM result. |

## Hypothesis rationales

| Hypothesis | Relevant support now cited | What this supports |
|---|---|---|
| H1: positive human–model correspondence | Zhang et al. (2023); Conde et al. (2026); Martínez et al. (2024) | Combining visual/textual information and successful text norming motivate expecting some correspondence. They do not establish its magnitude for gesture ratings, so the unsupported “moderate-to-strong” expectation was removed. |
| H2: agreement differs by dimension | Radford et al. (2021); Nishida et al. (2025) | Learned visual-language associations and gesture-type-dependent performance motivate a comparison of dimensions. The ranking of GMSM dimensions remains the present hypothesis. |
| H3: transparent/iconic gestures produce less disagreement | Perniss et al. (2010), conceptual account of form–meaning resemblance, https://doi.org/10.3389/fpsyg.2010.00227; Macedonia et al. (2011), semantic gesture–word processing, https://doi.org/10.1002/hbm.21084 | This is an explicit theoretical extension to agreement; neither source is presented as having already tested this exact human–VLM relationship. |
| H4: human/model disagreement patterns overlap | Nishida et al. (2025) | Grounding failures motivate the question. No direct prior demonstration of the exact shared-disagreement relationship was identified. Replaced “computational uncertainty” with disagreement between model ratings, which matches the available outputs. |
| H5: exploratory annotation use | Norming studies above; Bavaresco et al. (2025), JUDGE-BENCH: https://aclanthology.org/2025.acl-short.20/ | Supports investigating automated rating while validating each property; performance varies by task. Added the complete JUDGE-BENCH reference. |

The hypotheses are retained as exploratory expectations, not described as already proved by these references. The separate author note still identifies which relationships the current benchmark does not directly test. No invented citations or numerical claims of prior GMSM agreement were added.
