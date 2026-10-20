# Anonymous human rating data, version 1.0.0

Released 20 October 2026 for *Can Video-Language Models Rate Instructional Gestures Like Humans Do? A Benchmark Study*.

**Frozen release:** https://github.com/WordsGPT/GestureCheck/releases/tag/human-ratings-v1-20261020

## What is included

`human_ratings_unlinked.csv` contains 32,200 individual dimension ratings: seven ratings for each of 4,600 retained evaluations from 230 participants. It covers 148 stimulus–label pairings (134 standard pairings and 14 incorrect-label controls), all four survey-language cohorts, and all seven dimensions. The extra model-only control has no human rows.

The four columns are the entire public schema:

| Column | Meaning |
| --- | --- |
| `pairing_id` | Neutral stimulus–label pairing ID; join to `../stimulus_map.csv` using its `id` column. A pairing is not necessarily a distinct underlying video. |
| `cohort` | Survey language: `de` German, `en` English, `it` Italian, `ja` Japanese. This is not a nationality variable. |
| `dimension` | Canonical dimension name; questions and scale labels are in `../../HUMAN_INSTRUCTIONS_BY_LANGUAGE.md`. |
| `rating` | Integer response from 1 to 5. Duplicate rows are separate responses and must not be deduplicated. |

`human_rating_counts_by_cohort.csv` is an equivalent compact representation with an additional `n` column. It includes all five response categories, including zero counts, for every pairing/cohort/dimension combination. Expand each row `n` times to recover the unlinked file. Do not combine the two files as additional observations.

`release_manifest.json` records the source-workbook checksum, counts, schema, and CSV checksums. `validation_results.json` records checks against the saved paper inputs and reproduced statistics.

## Anonymisation and consent review

The export uses an explicit four-column allowlist. It contains no original or replacement participant IDs, session IDs, assignment IDs, demographics, country information, recruitment source, timestamps, response order, completion times, or free-text notes. No participant crosswalk is generated. Each dimension is exported independently from category frequencies, in canonical order. Row position cannot be used to link a person's ratings across dimensions or trials.

The source was the `Clean Ratings` sheet of the workbook matching the SHA-256 already recorded in the paper's analysis audit. No additional participant selection or rating changes were made. The source workbook and its excluded records remain outside this release.

The archived survey information describes scientific dissemination in anonymous or aggregate form: see the English data-confidentiality section and the corresponding German, Italian, and Japanese sections in `../../source_materials/survey_client.js`. The local data-management plan describes access to raw/processed research data by authorised researchers and anonymous sharing upon reasonable request. This public supplement is limited to unlinked item/cohort/category distributions, equivalent to frequency counts; it does not publish the controlled workbook or linked participant response records. The review does not amend the study's consent or ethics approval.

## What can be reproduced

- Item means and counts, including all 14 shared controls.
- Item-by-cohort distributions and means.
- Ordinal Krippendorff's alpha for all pairings and for the 134 standard pairings, separately for each dimension.
- Stimulus-adjusted OLS cohort coefficients, using German as reference.
- Endpoint/midpoint distributions in Appendix A.

Participant-clustered standard errors, their confidence intervals and p values require links between a participant's responses. Those links are deliberately absent. Their original coefficient/SE/p-value summaries remain in `../frozen_inputs.json`; the verification script uses these saved summaries for the 21-comparison Holm adjustment and confidence intervals. It does **not** claim to recompute participant-clustered uncertainty from unlinked ratings. Participant-level exclusions, demographic analyses, within-person relationships, and the cohort omnibus tests are not reproduced by this verification script.

From `paper_materials`, run:

```sh
python analysis/verify_public_human_ratings.py
```

Dependencies are listed in `../requirements.txt`. Verification requires no private workbook or API access. To regenerate the export locally from the controlled source, use `python analysis/build_public_human_ratings.py /path/to/workbook.xlsx`.

## Citation and versioning

Cite the study together with **GestureCheck anonymous human rating data, version 1.0.0 (20 October 2026)** and the frozen GitHub release URL above. GitHub supplies a versioned release and downloadable archive; no Zenodo deposit or DOI is claimed. This release does not grant a new blanket licence to third-party videos or other repository materials.
