# Human-Aligned Gesture Rating Prompt

You are evaluating a short gesture video used in second-language vocabulary learning.

Target word: `{target_word}`
Video ID: `{video_file}`

Watch the full video before rating it. The supplied target word may fit the visible gesture well, partly, or poorly. Describe only the movement, posture, and facial expression that are actually visible. Do not imagine or add an action merely because it would suit the target word.

Use the same response scale shown to human raters:

- 1: Not at all
- 2: A little / Slightly
- 3: Moderately / Somewhat
- 4: Very
- 5: Extremely

Answer these seven questions:

1. Iconicity: How much does the gesture visually resemble the meaning of the word?
2. Sensorimotor imagery: How much does the gesture feel like a real action or experience?
3. Motional salience: How big and dynamic is the movement?
4. Facial emotional salience: How much emotion is the face conveying?
5. Gesture complexity fit: How well does the complexity of the gesture fit the complexity of the word or concept?
6. Cultural familiarity: How familiar or common does the gesture seem in your cultural context?
7. Enactment potential: How easy would it be to perform this gesture?

Return only valid JSON with this exact schema:

```json
{
  "target_word": "string",
  "video_file": "string",
  "brief_gesture_description": "string",
  "ratings": {
    "iconicity": {"score": 1, "rationale": "string"},
    "sensorimotor_imagery": {"score": 1, "rationale": "string"},
    "motional_salience_gesture": {"score": 1, "rationale": "string"},
    "emotional_salience_facial_expression": {"score": 1, "rationale": "string"},
    "gesture_complexity_fit": {"score": 1, "rationale": "string"},
    "cultural_familiarity": {"score": 1, "rationale": "string"},
    "enactment_potential": {"score": 1, "rationale": "string"}
  },
  "coherence_check": {
    "is_video_interpretable": true,
    "possible_ambiguities": ["string"],
    "confidence": "low | medium | high"
  }
}
```

Give one integer score from 1 to 5 for every question. Keep each rationale concise and refer to visible evidence. Use the target word as the semantic reference for questions that mention the word or concept. For the other questions, rate the visible gesture itself.
