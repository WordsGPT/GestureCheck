# Glimpse results in the revised paper

Elorian Glimpse (`elorian/glimpse`, saved version `elorian/glimpse-20261016`) was evaluated on 19 October 2026. It returned all seven ratings for 149 pairings. Human comparison uses the same corrected 134 standard pairings and 14 shared incorrect-label controls as the rest of the paper; the extra Cooking control has no human reference.

| Measure | Glimpse |
|---|---:|
| Standard-pairing MAE | 0.8639 |
| Standard-pairing RMSE | 1.0460 |
| Standard-pairing bias | -0.0630 |
| Pooled Spearman rho | 0.6334 |
| Incorrect-label control MAE | 0.7483 |
| Difference from individual human ratings | 1.0784 |

Mean iconicity fell from 2.7143 with correct labels to 1.5714 with unrelated labels. Standard-pairing error was higher than Flash at 1 fps, Qwen Max and the GPT configurations. Control error was close to Qwen Max and lower than Flash at 1 fps.

| Dimension | MAE | Bias | Spearman rho |
|---|---:|---:|---:|
| Iconicity | 0.8274 | -0.2475 | 0.5068 |
| Sensorimotor imagery | 0.7563 | -0.1492 | 0.4316 |
| Motional salience | 0.7233 | -0.6213 | 0.3031 |
| Facial emotional salience | 1.0759 | -1.0697 | 0.3214 |
| Complexity fit | 0.9467 | +0.2439 | 0.4713 |
| Cultural familiarity | 1.0363 | +0.8038 | 0.5164 |
| Enactment potential | 0.6813 | +0.5990 | 0.4945 |

## Protocol and cost

The run used native MP4 video through OpenRouter, provider-default video sampling, temperature 0, reasoning disabled and 4,096 maximum output tokens. The prompt and manifest hashes match the current human-aligned prompt and neutral-ID manifest. Ten pilot outputs were reused in the completed pass; 149 distinct completed reasoning-off requests are logged. Earlier default-reasoning attempts are excluded from this configuration.

Measured inference cost was $0.4971576 for 149 clips, equivalent to $3.3366 per 1,000 clips. This excludes preliminary attempts, credit-purchase fees and taxes. Provider sampling was not set to 1 or 2 fps.

## Files and calculation

The saved ratings, full provider responses, run configuration and usage log are in `glimpse/`. `analysis/include_glimpse.py` adds these outputs to the current corrected human reference. `analysis/recompute_descriptive.py` and `analysis/human_model_disagreement.py` reproduce the reported metrics. `analysis/glimpse_ratings.csv` provides the individual model scores and corresponding human means.

The older report alongside the original local run used an earlier human reference. Its MAE of 0.9529 is superseded by 0.8639 for the current paper. No new model calls, bootstrap intervals or typical-score analysis were added in this revision.
