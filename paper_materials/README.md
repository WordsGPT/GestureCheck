# GestureCheck paper materials

Materials accompanying **Can Video-Language Models Rate Instructional Gestures Like Humans Do? A Benchmark Study**. Prepared 19 October 2026.

This directory contains the corrected aggregate inputs and descriptive analyses used in the targeted manuscript revision. The repository root also contains earlier pilot experiments and dashboards; use this directory for the revised paper's numbers.

## Read the current revision

**[Read the current paper](revision/manuscript.md)** · [Word](revision/06_GestureCheck_Pedro_targeted_revision.docx) · [PDF](revision/06_GestureCheck_Pedro_targeted_revision.pdf) · [Download everything](https://github.com/WordsGPT/GestureCheck/raw/refs/heads/main/paper_materials/GestureCheck_revision_with_Glimpse.zip)

The ZIP contains the local HTML comparison, manuscript, supplement, instructions, figures, saved model scores and analysis code. Extract it and open `revision/comparison.html`. See [revision/](revision/README.md) for the review links and change list.

## Contents

- `analysis/frozen_inputs.json`: human item means, saved scores for 13 model/input configurations, logged model identifiers, aggregate sample checks and cohort results. Twelve configurations are in the main benchmark; the additional Flash frame-input configuration supports the auxiliary input-format comparison.
- `analysis/stimulus_map.csv`: all 149 model pairings, of which 148 have human data; 134 underlying clips, 14 shared incorrect-label controls and one extra model-only control.
- `analysis/stimulus_provenance.csv`: item-level source attribution, dataset/item DOI, original filenames and reuse terms.
- `analysis/field_normalization.json`: alternate Qwen score-field names recovered during correction.
- `analysis/human_rating_counts.json`: anonymous item/dimension counts of the five response categories for 134 standard pairings. No participant identities or response sequences.
- `analysis/descriptive_results.json` and `analysis/human_model_disagreement.json`: saved summary outputs.
- `HUMAN_INSTRUCTIONS_BY_LANGUAGE.md` and `human_instructions_by_language.json`: exact introductory instructions, seven questions and five scale labels in German, English, Italian and Japanese.
- `source_materials/model_prompt.md`: the human-aligned model prompt. `survey_client.js`, `assignment_service.js` and `survey_server/` preserve the source used to document task presentation and assignment. These are source snapshots, not a configured live server.
- `figures/` and `make_figures.py`: manuscript figure files and the generator for the four diagrams/charts. The fifth figure is an interface screenshot.
- `model_inference/`: model-call and manifest-building source snapshots. These scripts expect the original project layout and video assets, and model access through environment variables. They are not needed to reproduce the saved-score analyses.
- `glimpse/`: 149 completed reasoning-off Glimpse ratings, saved responses, run configuration and usage records. `GLIMPSE_RESULTS.md` describes its corrected comparison; `analysis/include_glimpse.py` reconstructs it without API calls.
- `VIDEO_PROVENANCE.md`: both video sources and the recovered reuse terms.
- `VLM_REFERENCE_AUDIT.md`: evidence supporting the VLM account and hypothesis rationales.
- `supplementary.html`: open directly in a browser to read the supplementary tables and instructions.

## Reproduce the paper's descriptive model metrics

From this directory, with Python and the packages in `analysis/requirements.txt` installed:

```bash
python analysis/recompute_descriptive.py
python analysis/human_model_disagreement.py
python make_figures.py
```

The first two commands write `analysis/recomputed_metrics.json` and `analysis/human_model_disagreement.json`. No API requests, video files or participant-level data are needed. The figure generator uses the saved descriptive summary outputs.

Human agreement and the original cohort coefficients are included as aggregate results. The procedure to regenerate them is also supplied:

```bash
python analysis/recompute_human_statistics.py /path/to/controlled_workbook.xlsx
```

This requires the controlled workbook with its `Clean Ratings` and `Video Summary` sheets, which is not included here. Its calculation uses item fixed effects, participant-clustered standard errors and unadjusted two-sided t-reference p values. The comparisons are exploratory. No bootstrap intervals, typical-score baseline or new multiplicity correction is included in this paper package.

## Video attribution

The public 90-clip **Gesture video corpus** is at https://doi.org/10.6084/m9.figshare.c.5296396.v1. All 90 Figshare item records state CC BY 4.0. Attribute the creators and cite Macedonia et al. (2011) and Mayer et al. (2015), as requested by the source collection.

The 44-clip JKU collection was identified by the original project source correspondence as material from Macedonia et al. (2011), https://doi.org/10.1002/hbm.21084. These are Manuela’s collaboration materials, and all 44 converted MP4s are already publicly downloadable in this repository. The original draft requested source and provenance, which are now documented; it did not ask Samer to obtain permission from Manuela. Its old download folder no longer exists. No separate public reuse licence is asserted. See `VIDEO_PROVENANCE.md` and `source_materials/jku_public_video_paths.json`.

The third-party video licences do not automatically license the entire repository. This package makes no new blanket ownership or licence claim.
