# Targeted revision of Pedro’s manuscript

The original title, author list, section structure, and original prose are the starting point. Pedro’s tracked insertions are accepted and deletions omitted. The original DOCX is unchanged. The new file preserves the original paragraph and run formatting wherever possible. Yellow reviewer highlighting and comment markers are removed from the clean reading copy.

No bootstrap confidence intervals, typical-score baseline, or new multiplicity-adjusted analysis has been added to this manuscript. Original unadjusted cohort tests are explicitly identified as exploratory. The previous broad rewrite remains in revision_20261015 for reference; it is not the current revision.

## Scope

173 of 269 original text/table blocks are retained without text changes. Changed blocks include individual numeric replacements and necessary question renumbering; this count does not mean every changed block was rewritten. Five figures and narrowly scoped methods/reference additions are included.


## Exact change list

1. **Title and abstract, source block 11:** Distinguish underlying clips from relabeled presentations. The negative Qwen movement correlation resulted from incomplete field parsing. A single inference per configuration does not establish repeatability. Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Systematic characterization of gesture stimuli is important for vocabulary-learning research, but human annotation is slow and costly to scale. Video-language models (VLMs) may sup…

2. **1 Introduction, source block 15:** Subject–verb agreement only.
   Passage: To address this gap, recent work has moved beyond binary “gesture/no-gesture” distinctions toward characterizing gesture effectiveness as a multidimensional construct. Macedonia et…

3. **1 Introduction, source block 16:** The retained participant sample was not established as an expert panel.
   Passage: A significant methodological bottleneck constrains this purpose: operationalizing gesture-related variables typically requires human annotation of video data, with each gesture rat…

4. **1 Introduction, source block 18:** The retained participant sample was not established as an expert panel. Pedro explicitly requested removal of fine-tuning from the tested scope.
   Passage: This paper investigates that question directly: whether state-of-the-art VLMs can autonomously estimate GMSM-aligned gesture covariates from instructional video data in a manner th…

5. **2 Theoretical background, source block 39:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: The increasing availability of multimodal learning datasets has stimulated growing interest in computational approaches to gesture analysis. Computational approaches to gesture rec…

6. **2 Theoretical background, source block 40:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: More recent developments in deep learning substantially expanded the scope of computational gesture analysis (Donahue et al., 2015; Bertasius et al., 2021). Convolutional Neural Ne…

7. **2 Theoretical background, source block 41:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: In parallel, advances in multimodal representation learning have increasingly blurred the distinction between gesture recognition and semantic interpretation. Contemporary multimod…

8. **2 Theoretical background, source block 42:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Within educational and psycholinguistic research, however, computational gesture analysis remains comparatively underdeveloped. Manual annotation of gesture properties requires hum…

9. **2 Theoretical background, source block 43:** The removed citation concerns lexical diversity rather than psycholinguistic norming.
   Passage: Recent work on psycholinguistic norming using large language models (LLMs) suggests that artificial intelligence systems may increasingly be capable of approximating human judgment…

10. **2 Theoretical background, source block 46:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Video-Language Models (VLMs) represent a recent development in multimodal artificial intelligence that combines advances in computer vision, natural language processing, and tempor…

11. **2 Theoretical background, source block 47:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Modern VLMs commonly combine visual encoders with large-scale Transformer architectures trained on multimodal datasets containing aligned video, image, and text information. These …

12. **2 Theoretical background, source block 48:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Several characteristics of VLMs make them particularly relevant for gesture analysis in vocabulary learning research. First, VLMs can process temporally unfolding bodily actions ra…

13. **2 Theoretical background, source block 49:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: From a theoretical perspective, VLMs may provide a computational approximation of multimodal semantic integration. Bavaresco et al. (2026) found alignment between VLM concept repre…

14. **2 Theoretical background, source block 50:** The retained participant sample was not established as an expert panel. Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: At the same time, the application of VLMs to educational and psycholinguistic gesture analysis remains largely unexplored. Existing VLMs benchmarks focus predominantly on general-p…

15. **2 Theoretical background, source block 50 (addition):** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: General video-understanding benchmarks demonstrate capabilities in video question answering and temporal reasoning (Fu et al., 2025), but do not establish correspondence with human…

16. **2 Theoretical background, source block 51:** The retained participant sample was not established as an expert panel. No fine-tuned model was evaluated.
   Passage: The current study addresses this gap by evaluating the feasibility of using VLMs as automated coders for gesture-based vocabulary learning research. Specifically, we investigate wh…

17. **3 Research questions, source block 58:** The retained participant sample was not established as an expert panel.
   Passage: The present study investigates whether contemporary Video-Language Models (VLMs) can function as reliable computational annotators for gesture properties relevant to vocabulary lea…

18. **3 Research questions, source block 60:** RQ1 must match the available single-run benchmark.
   Passage: RQ1: Can VLMs generate estimates corresponding to human ratings of GMSM dimensions from gesture videos?

19. **3 Research questions, source block 61:** Replace only the unperformed reliability procedure.
   Passage: This question examines whether VLMs are capable of producing ratings for gesture-related mnemonic dimensions such as iconicity, sensorimotor imagery, motional salience, emotional s…

20. **3 Research questions, source block 64:** The retained participant sample was not established as an expert panel.
   Passage: RQ3: How closely do VLM-generated scores align with human ratings?

21. **3 Research questions, source block 65:** The retained participant sample was not established as an expert panel. Agreement with a single rating instrument does not establish construct validity.
   Passage: A central objective of the study is to evaluate the degree of agreement between model-generated ratings and human annotations. This question assesses the correspondence of VLM-base…

22. **3 Research questions, source block 66:** Remove the unperformed fine-tuning RQ/H requested by Pedro (RQ4 and H3 in the actual document).
   Passage: RQ4: Does fine-tuning improve alignment relative to zero-shot prompting?

23. **3 Research questions, source block 67:** Remove the unperformed fine-tuning RQ/H requested by Pedro (RQ4 and H3 in the actual document).
   Passage: Recent multimodal models demonstrate strong zero-shot reasoning capabilities, but domain-specific fine-tuning may further improve performance for specialized gesture interpretation…

24. **3 Research questions, source block 68:** Renumber after deleting the fine-tuning question/hypothesis.
   Passage: RQ4: Do VLMs exhibit systematic disagreement patterns similar to those observed among human raters?

25. **3 Research questions, source block 70:** Renumber after deleting the fine-tuning question/hypothesis.
   Passage: RQ5: Can VLM-generated gesture covariates support scalable multimodal research pipelines in vocabulary acquisition?

26. **3 Research questions, source block 73:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Based on prior research in embodied cognition, multimodal language processing, and recent advances in multimodal artificial intelligence, the following hypotheses are proposed. The…

27. **3 Research questions, source block 73 (addition):** Clarify the status of the hypotheses without replacing their content.
   Passage: These hypotheses provide a conceptual framework for interpreting the benchmark. The reported analyses are exploratory and do not constitute preregistered confirmatory tests.

28. **3 Research questions, source block 74:** The retained participant sample was not established as an expert panel. The reported correlations are descriptive; no significance analysis was performed.
   Passage: H1: VLM-generated ratings will positively correlate with human annotations across GMSM dimensions.

29. **3 Research questions, source block 75:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Because contemporary VLMs can integrate visual and linguistic information (Zhang et al., 2023), and text-based psycholinguistic norming has shown correspondence with human judgment…

30. **3 Research questions, source block 77:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Dimensions such as iconicity, motional salience, and enactment potential are expected to produce stronger agreement because they rely heavily on directly observable bodily movement…

31. **3 Research questions, source block 78:** Remove the unperformed fine-tuning RQ/H requested by Pedro (RQ4 and H3 in the actual document).
   Passage: H3: Fine-tuned VLMs will outperform zero-shot models in alignment with expert ratings.

32. **3 Research questions, source block 79:** Remove the unperformed fine-tuning RQ/H requested by Pedro (RQ4 and H3 in the actual document).
   Passage: Although zero-shot prompting is expected to produce meaningful estimates, fine-tuning on gesture-specific annotation data should improve the model’s sensitivity to theoretically re…

33. **3 Research questions, source block 80:** Renumber after deleting the fine-tuning question/hypothesis.
   Passage: H3: Highly iconic and sensorimotor-rich gestures will produce lower inter-rater disagreement than abstract or weakly embodied gestures.

34. **3 Research questions, source block 81:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Gestures that provide transparent mappings between movement and lexical meaning are expected to generate more stable ratings across both humans and models. In contrast, abstract, m…

35. **3 Research questions, source block 82:** Renumber after deleting the fine-tuning question/hypothesis.
   Passage: H4: VLM disagreement patterns will partially mirror human disagreement patterns.

36. **3 Research questions, source block 83:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Items that produce high variability among human raters are also expected to generate greater disagreement between model ratings, particularly for gestures with low semantic transpa…

37. **3 Research questions, source block 84:** Renumber after deleting the fine-tuning question/hypothesis.
   Passage: H5: VLM-generated gesture covariates will demonstrate sufficient reliability to support exploratory large-scale multimodal research applications.

38. **3 Research questions, source block 85:** The retained participant sample was not established as an expert panel. Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Although model-generated ratings are not expected to replace human annotation entirely, they are hypothesized to provide sufficiently robust estimates for use in large-scale corpus…

39. **4 Methods, source block 88:** Correct the fabricated object-display condition and distinguish 134 base clips from 148 presentations; unresolved provenance remains in author notes. Resolve the requested provenance using Pedro’s original source correspondence and the public corpus record.
   Passage: The dataset comprised 134 short instructional gesture clips representing lexical items commonly used in second-language (L2) vocabulary-learning paradigms. Stimuli were organized i…

40. **4 Methods, source block 90:** Remove unverified uniform recording specifications and deliberate facial-neutrality manipulation.
   Passage: A female performer demonstrated each gesture against a neutral background, from a fixed frontal camera position. The source collections differ in framing and video characteristics;…

41. **4 Methods, source block 91:** Resolve the highlighted count question using manifests and incorporate the user’s clarification of control purpose and exposure prevention.
   Passage: Fourteen clips from the gesture collection were also paired with deliberately unrelated target words, yielding 148 gesture–word pairings for the human survey: 134 standard pairings…

42. **4 Methods, source block 92 (addition):** Add the overview/results figure requested in the email.
   Passage: Figure 1. Overview of the benchmark. The human survey included 148 pairings from 134 underlying clips; the model manifest contained one additional control without human ratings.

43. **4 Methods, source block 98:** Recorded assignment count does not describe randomization or participant count. Correct the unit of presentation.
   Passage: Each participant was assigned a fixed set of 20 videos to rate on all seven dimensions, presented in randomized order; this assignment size was constant at exactly 20 items among t…

44. **4 Methods, source block 99:** Fill the requested survey-methods placeholder, supply all four languages verbatim, and distinguish the instruction screen from an unsupported tutorial claim.
   Passage: The survey used a custom browser-based application with a Vercel-hosted collection service. Participants received informed-consent information and task instructions before rating. …

45. **4 Methods, source block 100 (addition):** Add the overview/results figure requested in the email.
   Passage: Figure 2. Human rating interface. Participants viewed each gesture video alongside its target word and rated seven dimensions on five-point scales. The interface also provided an o…

46. **4 Methods, source block 103:** Fill the exclusion-breakdown placeholder; correct the Human Results cross-reference.
   Passage: Of 278 participants represented in the workbook, 230 (82.7%) completed an analysis-ready assignment and are described below and analyzed in Section 5; the remaining 48 comprised 25…

47. **4 Methods, source block 108:** Correct the Human Results cross-reference.
   Passage: Two additional review flags were recorded for sensitivity purposes without triggering automatic exclusion: assignments completed in under 7 minutes, and assignments in which the pa…

48. **5 Human ratings, source block 111:** Correct the unit of presentation. Do not claim participant microdata are in the shared package.
   Passage: Each of the 148 stimulus pairings received between 25 and 39 evaluations from distinct participants (M = 31.08, SD = 2.40, Mdn = 31), with responses represented across all four sur…

49. **5 Human ratings, source block 114:** Correct cultural-familiarity alpha from the recalculated human table.
   Passage: Table: Dimension

50. **5 Human ratings, source block 115:** Remove a stray character.
   Passage: Note. N = 4,600 evaluations per dimension. SD describes dispersion of individual ratings. Ordinal α is Krippendorff’s alpha.

51. **5 Human ratings, source block 116:** Correct cultural-familiarity alpha rounding.
   Passage: These pooled means, however, concealed considerable disagreement among individual raters. Ordinal Krippendorff’s α was highest for iconicity (α = .454), followed by cultural famili…

52. **5 Human ratings, source block 116 (addition):** Qualify full-corpus reliability when models are evaluated on the standard subset.
   Passage: For comparison with the standard-pairing model benchmark, ordinal α values after excluding the 14 mismatched controls were .363, .327, .166, .174, .286, .360, and .090, respectivel…

53. **5 Human ratings, source block 121:** Correct the unit of analysis.
   Passage: Note. Each of 148 pairings contributes one mean per dimension. SD describes differences between video means.

54. **5 Human ratings, source block 128:** Match the recalculated participant-clustered p value.
   Passage: Both analyses converged: cohort differences remained significant for every dimension after conditioning on video identity (residual Kruskal-Wallis, all p < .001), indicating that t…

55. **5 Human ratings, source block 129:** Repair a missing space.
   Passage: Table 3 Video-adjusted cohort differences in ratings (reference: German cohort)

56. **5 Human ratings, source block 130:** Update p values from the same participant-clustered model using t(229); no multiplicity adjustment added to the manuscript.
   Passage: Table: Dimension

57. **5 Human ratings, source block 131 (addition):** Disclose the original analysis scope; optional multiplicity adjustment is kept in suggestions.
   Passage: The p values shown are unadjusted for multiple comparisons; the cohort contrasts are exploratory.

58. **6 Model evaluation and results, source block 134:** Uniform 25 fps recording was not established for both collections. Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Twelve model–input configurations were evaluated across four model families: Google Gemini, OpenAI GPT, Alibaba Qwen, and Elorian Glimpse (Table 4). Gemini 3.8 Flash and Gemini 3.1…

59. **6 Model evaluation and results, source block 135:** Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: A separate, additional comparison used Gemini 3.8 Flash to test whether feeding it a full video produces different results from feeding it manually extracted still frames. This com…

60. **6 Model evaluation and results, source block 141:** Use shared controls and the correct pairing unit.
   Passage: The main comparison set model scores against the mean human rating for each of the 134 standard gesture–word pairings. With seven dimensions rated per item, each model configuratio…

61. **6 Model evaluation and results, source block 142:** Pearson r measures linear association, not rank association.
   Passage: For each dimension, we report: mean absolute error (MAE), the average size of the gap between a model’s score and the human average, ignoring direction; root mean squared error (RM…

62. **6 Model evaluation and results, source block 143 (addition):** User-requested comparison of human disagreement with model–human disagreement; defines the common sample and weighting.
   Passage: To contextualize model error, we also calculated the mean absolute difference between individual human ratings of the same item, between each human rating and the mean of the other…

63. **6 Model evaluation and results, source block 146:** Completed outputs alone cannot establish absence of failures/timeouts. Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Every configuration had a valid saved rating for every item; the saved outputs do not establish whether earlier requests failed or were retried. Across the twelve configurations, M…

64. **6 Model evaluation and results, source block 147:** Normalize alternate Qwen score fields before computing aggregate metrics. Correct Qwen overall MAE. Correct Qwen bias range. Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Gemini 3.8 Flash at 1 fps had the lowest error of any configuration (MAE = 0.53, RMSE = 0.70). Qwen 3.8 Max had the smallest bias (+0.02), meaning its ratings were, on average, bar…

65. **6 Model evaluation and results, source block 148 (addition):** Add the human disagreement context requested by the user, using the same 134 pairings and seven dimensions.
   Passage: Human disagreement provided a useful reference for these errors. Two humans rating the same pairing differed by an average of 1.06 scale points. Against individual human ratings, m…

66. **6 Model evaluation and results, source block 150:** Recalculate reported metrics from saved scores, with Qwen alternate fields normalized; retain original table structure and historical costs. Add Glimpse with observed run cost and unspecified provider sampling.
   Passage: Table: Configuration

67. **6 Model evaluation and results, source block 151:** Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Note. Costs are benchmark-time estimates, not current pricing. A positive bias means the model rated higher, on average, than human raters. *Glimpse cost is the measured $0.4972 fo…

68. **6 Model evaluation and results, source block 151 (addition):** Add the overview/results figure requested in the email.
   Passage: Figure 3. Mean absolute error across the twelve model–input configurations on 134 standard pairings, with seven dimensions per pairing.

69. **6 Model evaluation and results, source block 153:** Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Model performance depended heavily on which dimension was being rated (Table 5). Cultural familiarity was the hardest dimension for the Gemini, GPT and Qwen configurations, with MA…

70. **6 Model evaluation and results, source block 154:** The previous negative result used only 22 items because alternate Qwen field names were missed; all 134 now contribute.
   Passage: A model can look accurate on one measure and unreliable on another for the same dimension. For Gemini 3.8 Flash at 1 fps, the two dimensions with the lowest error were enactment po…

71. **6 Model evaluation and results, source block 155:** Update numeric ranges and replace the GPT example, which is contradicted by corrected correlations; retain the paragraph’s original point.
   Passage: Iconicity was rated more consistently: correlations ranged from .53 to .66 across the six configurations shown, and sensorimotor imagery from .36 to .65. But again, lower error did…

72. **6 Model evaluation and results, source block 157:** Replace incorrect dimension correlations and Qwen movement MAE with metrics computed on all 134 standard pairings.
   Passage: Table: Dimension

73. **6 Model evaluation and results, source block 158 (addition):** Explain the material Qwen correction transparently.
   Passage: Alternate Qwen Max fields named motional_salience and facial_emotional_salience were mapped to the corresponding rating dimensions before analysis. This recovered missing scores an…

74. **6 Model evaluation and results, source block 158 (addition):** Add the overview/results figure requested in the email.
   Passage: Figure 4. Dimension-specific mean absolute error and Spearman correlation with human item means for the six configurations shown in Table 5.

75. **6 Model evaluation and results, source block 161:** Compare the same 14 clips rather than all 134 standard pairings against a 14-item subset.
   Passage: For the same 14 underlying clips, human raters gave correct-label pairings an average iconicity of 2.97, and mismatched control pairings an average of just 1.25 (Table 6). Differen…

76. **6 Model evaluation and results, source block 163:** Recalculate Table 6 on the same 14 underlying clips for humans and models. Include Glimpse on the same 14 controls.
   Passage: Table: Rater / model

77. **6 Model evaluation and results, source block 164:** State the control comparison and model configurations. Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Note. Both columns use the same 14 clips; human ratings come from different participants. Gemini, GPT and Qwen configurations match Table 5, with Flash-Lite at 1 fps; Glimpse uses …

78. **6 Model evaluation and results, source block 165 (addition):** Clarify what the unrelated-label controls test, following the user’s explanation.
   Passage: Relabeling changes semantic compatibility but not the footage itself; low ratings are therefore expected most directly for word-dependent dimensions such as iconicity, rather than …

79. **6 Model evaluation and results, source block 165 (addition):** Add the overview/results figure requested in the email.
   Passage: Figure 5. Mean iconicity for the same 14 clips under correct and unrelated labels. Human ratings for the two versions were provided by different participants. Values are descriptiv…

80. **6 Model evaluation and results, source block 168:** Avoid a causal input-rate conclusion from one run per configuration.
   Passage: Gemini 3.8 Flash went the other way: its overall error got worse with more frames (MAE: 0.53 → 0.86), even though its rank correlation slightly improved (ρ: .65 → .69). Most of tha…

81. **6 Model evaluation and results, source block 174:** Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Cost per 1,000 clips ranged from $0.65 to $37.24 (Table 4). The cheapest configuration, GPT-5.6 Luna at 1 fps ($0.65), had a moderate error (MAE = 0.81); its 2 fps version cost sli…

82. **6 Model evaluation and results, source block 175 (addition):** Add the user-requested Glimpse evaluation.
   Passage: 6.3.7 Elorian Glimpse

83. **6 Model evaluation and results, source block 175 (addition):** Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Glimpse returned complete ratings for all 149 model pairings. Against the same 134 standard-pairing human means used above, it obtained MAE = 0.86, RMSE = 1.05, and pooled Spearman…

84. **6 Model evaluation and results, source block 175 (addition):** Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Glimpse’s small overall bias concealed opposite errors across dimensions: it rated facial emotional expressiveness 1.07 points below humans, while rating cultural familiarity 0.80 …

85. **6 Model evaluation and results, source block 175 (addition):** Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Table 7. Glimpse performance by dimension on 134 standard pairings

86. **6 Model evaluation and results, source block 175 (addition):** Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Table: Dimension

87. **7 Discussion, source block 178:** Update scope after deleting fine-tuning; preserve original discussion structure.
   Passage: This study asked whether contemporary video-language models can serve as computational annotators for GMSM-aligned gesture dimensions, using a benchmark of gesture–word pairings ev…

88. **7 Discussion, source block 179:** Match the revised question. No correlation significance testing was reported. Delete discussion of an obsolete RQ formulation, retaining its existing limitation. Use the actual scope of the measurement. Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: RQ1/H1 (correspondence with human ratings). H1 predicted positive correlations between model and human ratings across dimensions. This is supported, with an important qualification…

89. **7 Discussion, source block 180:** Movement means are not near the ceiling, and restricted distributions alone do not prove the causal explanation. Remove interpretation resting on the erroneous negative Qwen result. The preceding sentence and corrected dimension results do not justify the original binary verdict. Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: RQ2/H2 (grounded dimensions easier). H2 predicted that visually grounded dimensions (iconicity, motional salience, enactment potential) would show higher human–model agreement than…

90. **7 Discussion, source block 181:** The original RQ3/H3 pairing was erroneous: H3 concerned fine-tuning.
   Passage: RQ3 (alignment for covariate use). This is partially supported and dimension-dependent rather than a single yes/no answer. The mismatched-control analysis is the strongest evidence…

91. **7 Discussion, source block 182:** Delete obsolete fine-tuning verdict after removing it from the tested questions.
   Passage: RQ4/H4 (fine-tuning). This cannot be evaluated from the reported results. All eleven configurations are zero-shot prompting variants; no fine-tuned configuration was included in th…

92. **7 Discussion, source block 183:** Renumber after removing fine-tuning. Low alpha is not equivalent to the greatest raw disagreement. Remove duplicated dimension names following the correction. Correct hypothesis numbering and avoid treating an untested uncertainty relationship as established.
   Passage: RQ4/H4 (disagreement mirrors human disagreement). The two datasets converge here in an informative way. In the human data, chance-corrected agreement was lowest for motional salien…

93. **7 Discussion, source block 184:** Renumber after removing fine-tuning. Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: RQ5/H5 (scalable pipeline feasibility). Cautiously supported for a subset of dimensions, not the full profile. The strongest practical case is Gemini 3.8 Flash at 1 fps: lowest MAE…

94. **7 Discussion, source block 185:** Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Table 8. Summary of findings by research question and hypothesis

95. **7 Discussion, source block 186:** Delete fine-tuning row, repair question/hypothesis numbering, and distinguish descriptive patterns from unperformed tests.
   Passage: Table: #

96. **7 Discussion, source block 187 (addition):** Add a brief interpretation of the requested human/model disagreement comparison.
   Passage: The direct comparison also places model discrepancies in context: disagreement between individual humans averaged 1.06 points, comparable to the 0.93–1.03-point differences between…

97. **7 Discussion, source block 192:** Remove interpretation based on the erroneous Qwen negative correlation.
   Passage: The distinction between absolute error and rank-order association is particularly important when ratings are intended as covariates. A model that assigns nearly constant scores can…

98. **7 Discussion, source block 196:** The cohort-effect dimensions are not identical to the largest-error dimensions. Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Cultural familiarity was among the largest sources of error across the reported configurations. Because familiarity is inherently population-dependent, a pooled human mean reflects…

99. **7 Discussion, source block 200:** The comparison concerns runs and input formats within a model.
   Passage: Temporal sampling density should be treated as an empirical design choice rather than a default setting. Higher sampling density improved some reported metrics (GPT-5.6 Sol and Lun…

100. **7 Discussion, source block 203:** Remove the obsolete question formulation while preserving the original reliability limitation. Agreement alone does not establish construct or predictive validity.
   Passage: Several limitations qualify how these findings should be read. First, reliability in the strict sense was not tested. The reported benchmark compares only a single run per configur…

101. **7 Discussion, source block 204:** Keep fine-tuning as an existing limitation, removing obsolete RQ/H references. Include the completed Glimpse run using the same corrected human reference as the rest of the paper.
   Passage: Second, fine-tuning was not evaluated. All twelve reported configurations are zero-shot prompting variants across four commercial model families, and no fine-tuned configuration wa…

102. **7 Discussion, source block 206:** Correct the false control-design limitation and resolve the highlighted count question.
   Passage: Fourth, the stimulus set imposes its own constraints. The benchmark drew on a modest item pool of well under 150 gesture–word pairings, which limits the precision of dimension-spec…

103. **7 Discussion, source block 210:** Remove obsolete RQ/H references, retaining fine-tuning as future work. The proposed control design was already used; retain a concrete extension. The control mapping is now supplied.
   Passage: Several extensions follow directly from the limitations above. A reliability study, repeating inference on the same items across multiple runs, prompt paraphrases, and, where avail…

104. **8 Conclusion and availability, source block 212 (addition):** Requested reproducibility statement.
   Passage: Data and materials availability

105. **8 Conclusion and availability, source block 212 (addition):** Link to the public, versioned GitHub materials branch rather than leave an unfulfilled future-deposit placeholder.
   Passage: The aggregate human ratings, model scores, stimulus mapping, instructions in all four survey languages, model prompt, analysis code, and figure files are publicly available at http…

106. **References, source block 216 (addition):** Add the checked primary reference used in the VLM account, hypotheses, or corpus attribution.
   Passage: Bavaresco, A., Bernardi, R., Bertolazzi, L., Elliott, D., Fernández, R., Gatt, A., Ghaleb, E., Giulianelli, M., Hanna, M., Koller, A., Martins, A., Mondorf, P., Neplenbroek, V., Pe…

107. **References, source block 217:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Bavaresco, A., de Heer Kloots, M., Pezzelle, S., & Fernández, R. (2026). Vision-Language Models Align with Human Neural Representations in Concept Processing. Proceedings of the 19…

108. **References, source block 217 (addition):** Add the checked primary reference used in the VLM account, hypotheses, or corpus attribution.
   Passage: Bertasius, G., Wang, H., & Torresani, L. (2021). Is Space-Time Attention All You Need for Video Understanding? Proceedings of the 38th International Conference on Machine Learning,…

109. **References, source block 218 (addition):** Add the checked primary reference used in the VLM account, hypotheses, or corpus attribution.
   Passage: Cao, Z., Simon, T., Wei, S.-E., & Sheikh, Y. (2017). Realtime Multi-Person 2D Pose Estimation using Part Affinity Fields. Proceedings of the IEEE Conference on Computer Vision and …

110. **References, source block 223:** Repair a malformed URL; preserve the original bibliographic wording.
   Passage: Dingemanse, M., Perlman, M., & Perniss, P. (2020). Construals of iconicity: experimental approaches to form–meaning resemblances in language. Language and Cognition, 12(1), 1–14. h…

111. **References, source block 223 (addition):** Add the checked primary reference used in the VLM account, hypotheses, or corpus attribution.
   Passage: Donahue, J., Hendricks, L. A., Guadarrama, S., Rohrbach, M., Venugopalan, S., Saenko, K., & Darrell, T. (2015). Long-Term Recurrent Convolutional Networks for Visual Recognition an…

112. **References, source block 225 (addition):** Add a primary VLM reference or a bibliography entry already cited in the original text.
   Passage: Fu, C., Dai, Y., Luo, Y., Li, L., Ren, S., Zhang, R., Wang, Z., Zhou, C., Shen, Y., Zhang, M., Chen, P., Li, Y., Lin, S., Zhao, S., Li, K., Xu, T., Zheng, X., Chen, E., Shan, C., ……

113. **References, source block 225 (addition):** Add a primary VLM reference or a bibliography entry already cited in the original text.
   Passage: Glenberg, A. M., & Gallese, V. (2012). Action-based language: A theory of language acquisition, comprehension, and production. Cortex, 48(7), 905–922. https://doi.org/10.1016/j.cor…

114. **References, source block 226:** Remove a reference replaced with primary research in the VLM source check.
   Passage: Florea, C., Popescu, C.-B., Racovițeanu, A., Nițu, A., & Florea, L. (2026). From Context to Human: A Review of VLM Contextualization in the Recognition of Human States in Visual Da…

115. **References, source block 227:** Remove a reference replaced with primary research in the VLM source check.
   Passage: Foteinos, K., Cani, J., Linardakis, M., Radoglou Grammatikis, P., Argyriou, V., Sarigiannidis, P., Varlamis, I., & Papadopoulos, G. (2025). Visual Hand Gesture Recognition with Dee…

116. **References, source block 228:** Remove a reference replaced with primary research in the VLM source check.
   Passage: Ghojogh, B., & Ghodsi, A. (2026). Recurrent Neural Networks and Long Short-Term Memory Networks (pp. 205–229). https://doi.org/10.1007/978-3-032-10738-1_8

117. **References, source block 237:** Remove a reference replaced with primary research in the VLM source check.
   Passage: Li, Z., Wu, X., Du, H., Nghiem, H., & Shi, G. (2025). Benchmark Evaluations, Applications, and Challenges of Large Vision Language Models: A Survey. https://doi.org/10.32388/GXR68Q

118. **References, source block 242 (addition):** Add the checked primary reference used in the VLM account, hypotheses, or corpus attribution.
   Passage: Macedonia, M., Mayer, K. M., Mathias, B., & von Kriegstein, K. (2021). Gesture video corpus [Data set]. Figshare. https://doi.org/10.6084/m9.figshare.c.5296396.v1

119. **References, source block 244:** Repair a malformed URL; preserve the original bibliographic wording.
   Passage: Macedonia, Manuela, Mathias, B., & Hu, L. (2026). Why Some Gestures Work Better Than Others:Toward a Model of Gesture-Supported Vocabulary Learning. Educational Psychology Review, …

120. **References, source block 245:** Remove duplicate of the same Macedonia et al. (2019) reference already at paragraph 242.
   Passage: Macedonia, Manuela, Repetto, C., Ischebeck, A., & Mueller, K. (2019). Depth of Encoding Through Observed Gestures in Foreign Language Word Learning. Frontiers in Psychology, 10, 33…

121. **References, source block 247 (addition):** Add a primary VLM reference or a bibliography entry already cited in the original text.
   Passage: Mayer, K. M., Yildiz, I. B., Macedonia, M., & von Kriegstein, K. (2015). Visual and motor cortices differentially support the translation of foreign language words. Current Biology…

122. **References, source block 251:** Complete the requested VLM source check with primary research and limit each claim to what its cited study establishes.
   Passage: Nishida, N., Inoue, K., Nakayama, H., Bono, M., & Takanashi, K. (2025). Do Multimodal Large Language Models Truly See What We Point At? Investigating Indexical, Iconic, and Symboli…

123. **References, source block 258:** Repair a malformed URL; preserve the original bibliographic wording.
   Passage: Post, L. S., van Gog, T., Paas, F., & Zwaan, R. A. (2013). Effects of simultaneously observing and making gestures while studying grammar animations on cognitive load and learning.…

124. **References, source block 259 (addition):** Add the checked primary reference used in the VLM account, hypotheses, or corpus attribution.
   Passage: Radford, A., Kim, J. W., Hallacy, C., Ramesh, A., Goh, G., Agarwal, S., Sastry, G., Askell, A., Mishkin, P., Clark, J., Krueger, G., & Sutskever, I. (2021). Learning Transferable V…

125. **References, source block 260:** Replace the broad VLM review citation with primary research supporting the specific claims.
   Passage: Rahman, A. (2026). A systematic review of vision language models: Comprehensive analysis of architectures, applications, datasets and challenges towards robust multimodal intellige…

126. **References, source block 264:** Repair a malformed URL; preserve the original bibliographic wording.
   Passage: Sweller, J. (1988). Cognitive Load During Problem Solving: Effects on Learning. Cognitive Science, 12(2), 257–285. https://doi.org/10.1207/s15516709cog1202_4

127. **References, source block 266 (addition):** Add the checked primary reference used in the VLM account, hypotheses, or corpus attribution.
   Passage: Zhang, H., Li, X., & Bing, L. (2023). Video-LLaMA: An Instruction-tuned Audio-Visual Language Model for Video Understanding. Proceedings of the 2023 Conference on Empirical Methods…
