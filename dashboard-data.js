window.RATING_DASHBOARD = {
  "ratings": [
    {
      "key": "iconicity",
      "label": "Iconicity"
    },
    {
      "key": "sensorimotor_imagery",
      "label": "Sensorimotor imagery"
    },
    {
      "key": "motional_salience_gesture",
      "label": "Motional salience"
    },
    {
      "key": "emotional_salience_facial_expression",
      "label": "Facial emotion"
    },
    {
      "key": "gesture_complexity_fit",
      "label": "Complexity fit"
    },
    {
      "key": "cultural_familiarity",
      "label": "Cultural familiarity"
    },
    {
      "key": "enactment_potential",
      "label": "Enactment potential"
    }
  ],
  "rows": [
    {
      "index": 1,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Traffic Light",
      "title": "01_TrafficLight.avi",
      "local_path": "data/gesture_videos/01_TrafficLight.avi",
      "video": "assets/rating-videos/01_TrafficLight.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could potentially be interpreted as a generic 'stop' signal or a 'wait' gesture if not contextualized.",
      "pro_ambiguities": "The gesture signifies 'stop' rather than the physical object 'traffic light', which might be slightly ambiguous without context.",
      "qwen_ambiguities": "Gesture may be interpreted as signaling 'stop' rather than representing the object 'traffic light' itself.; Does not depict the vertical arrangement of lights or color changes typical of traffic signals.",
      "models": {
        "flash": {
          "description": "The actor raises her right arm and moves her hand in a vertical, stop-and-go motion, mimicking the changing lights of a traffic signal.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as a generic 'stop' signal or a 'wait' gesture if not contextualized."
        },
        "pro": {
          "description": "The actor raises her right arm with the palm facing forward, resembling a 'stop' hand signal.",
          "confidence": "high",
          "ambiguities": "The gesture signifies 'stop' rather than the physical object 'traffic light', which might be slightly ambiguous without context."
        },
        "qwen": {
          "description": "The actor stands facing forward, then raises her right arm to shoulder height with palm open and fingers extended, holding the pose briefly before lowering the arm back down. Her head turns slightly toward the raised hand during the gesture.",
          "confidence": "medium",
          "ambiguities": "Gesture may be interpreted as signaling 'stop' rather than representing the object 'traffic light' itself.; Does not depict the vertical arrangement of lights or color changes typical of traffic signals."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The vertical movement of the hand clearly mimics the sequence of a traffic light changing colors."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture represents the 'stop' command associated with a red traffic light, rather than the physical appearance of the light itself."
          },
          "qwen": {
            "score": 3,
            "rationale": "The raised hand with open palm resembles a stop signal, which is associated with one state of a traffic light (red), but does not visually represent the full concept of a multi-light traffic signal or its structure."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It simulates the visual experience of observing a traffic light, though it lacks the physical interaction of driving."
          },
          "pro": {
            "score": 4,
            "rationale": "Evokes the physical action of halting or signaling someone to stop, which is the primary function of a traffic light."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture evokes a stopping action, which relates to driver behavior at a red light, but lacks simulation of interacting with or observing a physical traffic light device."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not particularly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is a clear, deliberate raising of the arm, moderate in size and speed."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and deliberate — raising and lowering the arm — but not particularly large, fast, or complex; it draws moderate attention without being visually commanding."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout; no emotional cues are conveyed via face."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the concept of a traffic light."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple, direct, and perfectly balances informativeness with ease of understanding."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is simple motorically and cognitively — single arm raise and hold — making it easy to process and associate with the target word in a learning context."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Traffic lights are a universal cultural symbol, and the vertical motion is widely understood."
          },
          "pro": {
            "score": 5,
            "rationale": "The raised hand with palm facing outward is a highly familiar and universally recognized sign for 'stop' in Western cultures."
          },
          "qwen": {
            "score": 4,
            "rationale": "In Western contexts, an open palm raised horizontally is commonly understood as a 'stop' signal, which aligns with the red light function of a traffic light, though not the entire object."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a basic arm movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture requires minimal coordination — simply raising one arm with open palm — making it very natural and effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 2,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Trailer",
      "title": "02_Trailer.avi",
      "local_path": "data/gesture_videos/02_Trailer.avi",
      "video": "assets/rating-videos/02_Trailer.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.857,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could be interpreted as hitching a trailer, but without context, it might also look like simply reaching behind one's back.",
      "pro_ambiguities": "The gesture represents the action of pulling rather than the object itself, which could be interpreted as verbs like 'pull' or 'drag'.",
      "qwen_ambiguities": "Could be interpreted as 'airplane' or 'flying'; Might suggest 'wind' or 'resistance'; Could represent the verb 'to pull' rather than the noun 'trailer'",
      "models": {
        "flash": {
          "description": "The actor stands still, then leans forward slightly while moving her hands behind her back as if hitching something, then returns to a neutral standing position.",
          "confidence": "high",
          "ambiguities": "The gesture could be interpreted as hitching a trailer, but without context, it might also look like simply reaching behind one's back."
        },
        "pro": {
          "description": "The actor turns slightly, leans forward, and reaches both arms behind her back as if pulling a heavy object behind her.",
          "confidence": "high",
          "ambiguities": "The gesture represents the action of pulling rather than the object itself, which could be interpreted as verbs like 'pull' or 'drag'."
        },
        "qwen": {
          "description": "The actor stands upright, then leans their torso forward significantly while extending both arms straight back behind them, holding the pose briefly before returning to neutral.",
          "confidence": "medium",
          "ambiguities": "Could be interpreted as 'airplane' or 'flying'; Might suggest 'wind' or 'resistance'; Could represent the verb 'to pull' rather than the noun 'trailer'"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The gesture mimics the act of hitching a trailer to a vehicle, which is a moderate iconic representation of the word's function."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly depicts the action of towing or pulling something behind, which is the defining characteristic of a trailer."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture metaphorically represents the concept of 'trailing' or being pulled behind, rather than depicting the physical object of a trailer directly."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It simulates the physical action of connecting a trailer, providing a moderate sensorimotor link to the concept."
          },
          "pro": {
            "score": 4,
            "rationale": "The posture and arm position strongly evoke the physical sensation of dragging or pulling a heavy load."
          },
          "qwen": {
            "score": 3,
            "rationale": "Leaning forward and extending arms back evokes the physical sensation of drag, tension, or being towed, simulating the dynamics of a trailer."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively small and constrained to the area behind the back, making it somewhat subtle."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement involves a full-body shift and arm extension, making it moderately salient but not overly expansive."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement involves a large shift in center of gravity and full arm extension, making it visually prominent and distinct from a neutral stance."
          },
          "delta": 1.333
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, showing only a slight hint of physical effort."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression remains largely neutral with slight concentration, offering minimal affective support for the word meaning."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple, clear, and directly related to the concept without unnecessary complexity."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is straightforward and effectively conveys the concept without unnecessary complexity."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture requires balance while leaning forward, which adds moderate physical complexity compared to simple hand gestures."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 3,
            "rationale": "The action of hitching a trailer is a recognizable concept in many Western contexts, though the specific gesture is not a standard emblem."
          },
          "pro": {
            "score": 4,
            "rationale": "Pantomiming pulling something behind oneself is a recognizable way to represent towing or a trailer."
          },
          "qwen": {
            "score": 2,
            "rationale": "This is not a conventional emblem or widely recognized sign for 'trailer' in Western culture; it appears to be a novel iconic gesture."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, requires no special coordination, and is very easy for learners to enact."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is physically straightforward and easy for most learners to reproduce without significant motor skill barriers."
          },
          "delta": 0.667
        }
      }
    },
    {
      "index": 3,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Balcony",
      "title": "03_Balcony.avi",
      "local_path": "data/gesture_videos/03_Balcony.avi",
      "video": "assets/rating-videos/03_Balcony.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as leaning on a fence or a counter, but in the context of the word 'balcony', it is highly specific.",
      "pro_ambiguities": "The gesture could potentially be interpreted as leaning on a table or a fence, though 'balcony' is a very strong fit.",
      "qwen_ambiguities": "Could be misinterpreted as 'looking over a fence' or 'peering off a bridge' without contextual cues",
      "models": {
        "flash": {
          "description": "The actor leans forward slightly and rests their arms on an imaginary railing in front of them, simulating the posture of someone standing on a balcony.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as leaning on a fence or a counter, but in the context of the word 'balcony', it is highly specific."
        },
        "pro": {
          "description": "The actor brings her arms forward and rests her forearms on an imaginary horizontal surface, leaning slightly forward as if looking over a railing.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as leaning on a table or a fence, though 'balcony' is a very strong fit."
        },
        "qwen": {
          "description": "The actor stands upright, then bends forward at the waist while extending both arms horizontally in front of her, palms down, as if resting them on a railing. She holds this posture briefly before returning to standing.",
          "confidence": "high",
          "ambiguities": "Could be misinterpreted as 'looking over a fence' or 'peering off a bridge' without contextual cues"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The posture of leaning on an imaginary railing is a clear and recognizable iconic representation of standing on a balcony."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly depicts the action of leaning on a railing, visually representing the physical structure and typical interaction with a balcony."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly mimics leaning over a balcony railing — arms extended forward and downward simulate the physical act of looking out from an elevated platform."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture effectively simulates the physical experience of leaning on a balcony railing, engaging the upper body in a way that mirrors the real-world action."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the bodily experience of resting one's arms on a solid surface and leaning forward to look out."
          },
          "qwen": {
            "score": 4,
            "rationale": "The bending motion and arm placement evoke the bodily experience of standing on a balcony and leaning forward to look down or out, engaging spatial and postural memory."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively contained and static, which is appropriate for the nature of the action being depicted."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, but moderate in its spatial extent and speed."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is deliberate and visible but not expansive or rapid; it’s moderate in size and speed, sufficient to draw attention without being overly dramatic."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's facial expression remains mostly neutral, with only a slight indication of looking outward."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains neutral throughout; no emotional cue is conveyed beyond focused intent, which may limit affective engagement for learners."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the concept of a balcony without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and optimally balances informativeness with ease of understanding for a learner."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture involves a simple whole-body motion (bending + arm extension) that is easy to parse and replicate, well-suited for vocabulary learning contexts."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of leaning on a railing is a universally understood gesture in Western contexts."
          },
          "pro": {
            "score": 4,
            "rationale": "Pantomiming leaning on a railing is a common and easily understood way to represent a balcony or looking out from a height in Western culture."
          },
          "qwen": {
            "score": 4,
            "rationale": "Leaning on a railing is a universally recognizable action associated with balconies in Western contexts; the gesture aligns with common embodied experiences."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very natural, requires no special coordination, and is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motion is natural, requires no special skill, and can be easily reproduced by learners of most ages and physical abilities."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 4,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Ball",
      "title": "04_Ball.avi",
      "local_path": "data/gesture_videos/04_Ball.avi",
      "video": "assets/rating-videos/04_Ball.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.095,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The large size of the traced sphere might suggest 'beach ball' or 'exercise ball' specifically, rather than a generic small ball.; Could potentially be confused with 'globe' or 'world' without context.",
      "models": {
        "flash": {
          "description": "The actor uses both hands to trace the shape of a large, round object in the air, moving them in a circular motion to represent a ball.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor holds her hands in front of her as if grasping a round object, then moves her arms upward and to the side in a throwing motion.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both hands with fingers spread and traces a large circular outline in the air in front of her upper body, mimicking the shape of a large sphere.",
          "confidence": "high",
          "ambiguities": "The large size of the traced sphere might suggest 'beach ball' or 'exercise ball' specifically, rather than a generic small ball.; Could potentially be confused with 'globe' or 'world' without context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The circular hand movement clearly and transparently depicts the spherical shape of a ball."
          },
          "pro": {
            "score": 5,
            "rationale": "The hands forming a spherical shape combined with a throwing motion provides a highly transparent visual representation of a ball and its typical use."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture directly traces the spherical shape of the target object, providing a highly transparent visual representation."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical interaction of tracing the outline of a round object, evoking the tactile experience of a ball."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly simulates the physical sensation of holding a round object and the bodily action of throwing it."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement evokes the spatial dimensions and volume of a ball, simulating the experience of handling or defining a large spherical object."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 4,
            "rationale": "The movement is expansive and uses both arms, making it visually prominent and easy to follow."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture involves a clear, expansive movement of both arms across and away from the body, making it visually prominent."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture uses both arms to create a large, expansive movement that clearly captures attention and defines a specific space."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral throughout the gesture, conveying no affective meaning."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, offering no additional emotional cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the concept of a ball."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is straightforward and perfectly balances simplicity with clear semantic meaning, making it optimal for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is simple, intuitive, and perfectly balanced for conveying the concept of shape without unnecessary cognitive load."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Tracing a circle to represent a round object is a universally understood and highly familiar gesture."
          },
          "pro": {
            "score": 5,
            "rationale": "The pantomime of holding and throwing a ball is a highly recognizable and universally understood action in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Using hands to outline the shape or size of an object is a highly familiar and universally understood communicative strategy in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The throwing motion is very natural, requires no special coordination, and is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is physically effortless and requires no complex motor skills, making it very easy for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 5,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Bett",
      "title": "05_Bett.mov.avi",
      "local_path": "data/gesture_videos/05_Bett.mov.avi",
      "video": "assets/rating-videos/05_Bett.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'sleep' or 'tired' rather than specifically 'bed', though it is strongly associated with the object.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The gesture primarily signifies the action 'to sleep' (schlafen) rather than the noun 'bed' (Bett), though the semantic link is strong.",
      "models": {
        "flash": {
          "description": "The actor places her hands together, tilts her head, and rests it on her hands, mimicking the act of sleeping.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'sleep' or 'tired' rather than specifically 'bed', though it is strongly associated with the object."
        },
        "pro": {
          "description": "The actor places her hands together palm-to-palm, tilts her head to the side, and rests her cheek on her hands, simulating sleeping.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor tilts her head to the right side and places her palms together against her right cheek, closing her eyes briefly to mimic the posture of sleeping on a pillow.",
          "confidence": "high",
          "ambiguities": "The gesture primarily signifies the action 'to sleep' (schlafen) rather than the noun 'bed' (Bett), though the semantic link is strong."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a classic, universally recognized pantomime for sleeping, which is the primary function of a bed."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture of resting the head on folded hands perfectly mimics the action of sleeping on a pillow, strongly representing the concept of a bed."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture depicts the action associated with the object (sleeping) rather than the object's shape, creating a strong metonymic visual link."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It directly simulates the physical posture and sensation of resting one's head on a pillow, evoking the bodily experience of sleeping."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly simulates the bodily experience of resting the head, evoking strong sensorimotor associations with lying in a bed."
          },
          "qwen": {
            "score": 4,
            "rationale": "Evokes the physical sensation of resting one's head on a pillow and the bodily state of sleep."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though relatively small and contained within the upper body space."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is smooth and constrained to the upper body, lacking large or rapid dynamics."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is contained near the head with a moderate head tilt, making it noticeable but not expansive."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 4,
            "rationale": "The actor adopts a calm, closed-eye expression that effectively conveys the feeling of sleepiness or relaxation."
          },
          "pro": {
            "score": 3,
            "rationale": "The actor's face relaxes and eyes close slightly, conveying a calm, restful state associated with sleeping."
          },
          "qwen": {
            "score": 3,
            "rationale": "The actor adopts a calm, resting expression with eyes closed, signaling relaxation and sleep."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learners of all levels."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and easy to process, making it ideal for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple and cognitively straightforward, ideal for vocabulary acquisition."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The 'hands-under-cheek' gesture for sleeping is a highly common and culturally universal signifier."
          },
          "pro": {
            "score": 5,
            "rationale": "Placing hands together under a tilted head is a widely recognized emblem for sleep in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "This is a universally recognized emblem for sleeping or bed in Western and many other cultures."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely easy and natural for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, requires no special coordination, and is effortless to perform."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can easily reproduce this natural posture without difficulty or awkwardness."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 6,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Monitor",
      "title": "06_Monitor.avi",
      "local_path": "data/gesture_videos/06_Monitor.avi",
      "video": "assets/rating-videos/06_Monitor.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as 'frame', 'picture', or 'television' depending on context, though 'monitor' is the most logical fit.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The initial raising of hands with index fingers pointing up could momentarily be interpreted as a different sign (e.g., 'quote' or 'attention') before the rectangular shape is formed.",
      "models": {
        "flash": {
          "description": "The actor uses both hands to trace a rectangular shape in the air in front of her, mimicking the outline of a computer screen.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'frame', 'picture', or 'television' depending on context, though 'monitor' is the most logical fit."
        },
        "pro": {
          "description": "The actor uses both index fingers to trace the outline of a rectangle in the air, starting from the top corners, moving down, and then inwards to meet at the bottom center.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both hands to head level with index fingers pointing upward, then brings them down and forward to outline a rectangular shape in front of her torso, mimicking the frame of a screen.",
          "confidence": "high",
          "ambiguities": "The initial raising of hands with index fingers pointing up could momentarily be interpreted as a different sign (e.g., 'quote' or 'attention') before the rectangular shape is formed."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture clearly outlines the rectangular shape of a monitor screen, making the iconic relationship to the target word very transparent."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly traces the rectangular shape of a computer monitor, providing a highly transparent visual representation of the object."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture directly traces the rectangular physical shape of a computer monitor, providing a highly transparent visual representation of the object."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It simulates the physical act of framing or defining the boundaries of a screen, which provides a moderate level of sensorimotor engagement."
          },
          "pro": {
            "score": 3,
            "rationale": "The action of tracing the outline evokes the physical dimensions and boundaries of the object, providing moderate sensorimotor engagement."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement evokes the spatial dimensions and boundaries of the object, simulating the visual experience of seeing a screen."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid, providing a moderate level of visual salience."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and uses both arms to draw a distinct shape in the space in front of the body, making it moderately salient."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is deliberate and clear, involving a distinct path from head level to chest level, but is moderate in size and speed."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional emotional cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly aligned with the concept of a monitor, making it highly appropriate for learning."
          },
          "pro": {
            "score": 5,
            "rationale": "The simple tracing motion is perfectly balanced, conveying the meaning clearly without any unnecessary complexity."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture involves a sequence of movements (up, then down to form a box) which is slightly complex but well-balanced for representing the object's form."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Tracing a rectangle to represent a screen is a universally understood gesture in modern, technology-driven cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "Drawing a rectangle in the air is a widely recognized and common gesture for a screen, TV, or monitor in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Drawing a rectangle in the air to represent a screen, TV, or picture is a highly familiar and widely understood gesture in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and requires no special motor skills, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, symmetrical, and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture uses natural hand movements and is very easy for learners to reproduce without difficulty."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 7,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Letter Box",
      "title": "07_LetterBox.avi",
      "local_path": "data/gesture_videos/07_LetterBox.avi",
      "video": "assets/rating-videos/07_LetterBox.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.762,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The rectangular shape could potentially be interpreted as a window or a picture frame, but the downward insertion motion clarifies the 'letter box' meaning.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The gesture could be interpreted as reaching for a high shelf, hanging an object, or signaling direction rather than specifically depicting a letter box.; No visual representation of the ‘box’ component—only the insertion action is shown, which may lead to incomplete semantic mapping.",
      "models": {
        "flash": {
          "description": "The actor raises both hands to form a rectangular shape in the air, then makes a downward motion as if dropping something through a slot.",
          "confidence": "high",
          "ambiguities": "The rectangular shape could potentially be interpreted as a window or a picture frame, but the downward insertion motion clarifies the 'letter box' meaning."
        },
        "pro": {
          "description": "The actor raises her left hand to represent a horizontal slot and uses her right hand to simulate inserting a letter into it.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands facing forward, then turns slightly to her left. She extends her right arm forward and upward, forming a curved hand shape as if inserting something into a slot or opening above head level. Her left arm remains at her side. After holding the pose briefly, she returns to neutral stance.",
          "confidence": "medium",
          "ambiguities": "The gesture could be interpreted as reaching for a high shelf, hanging an object, or signaling direction rather than specifically depicting a letter box.; No visual representation of the ‘box’ component—only the insertion action is shown, which may lead to incomplete semantic mapping."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The rectangular hand shape clearly outlines the frame of a letter box, and the downward motion mimics the act of inserting mail."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly depicts the action of interacting with a letter box by simulating the insertion of a letter into a slot."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture suggests inserting an object into an elevated slot, which loosely resembles placing a letter into a box; however, the absence of a clear ‘box’ outline or receiving container reduces visual transparency."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical interaction of placing a letter into a slot, which is a common sensorimotor experience."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly evokes the physical action and bodily experience of posting a letter."
          },
          "qwen": {
            "score": 3,
            "rationale": "The reaching and inserting motion evokes a familiar physical action (mailing a letter), but lacks tactile or resistance cues that would strengthen bodily simulation of interacting with a actual letter box."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is clear and pronounced, involving both arms to create a distinct action sequence."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate in amplitude and speed—clearly visible but not expansive or dynamic enough to strongly command attention or enhance encoding through motion alone."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 1,
            "rationale": "Facial expression remains neutral throughout; no affective cues are provided to support emotional engagement or semantic reinforcement."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the concept of a letter box."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is straightforward and perfectly balances informativeness with simplicity for learning."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture involves a single, coordinated arm movement with minimal cognitive load, making it well-suited for vocabulary learning without overwhelming the learner."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The concept of a letter box and the action of posting mail are widely understood in Western cultural contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of posting a letter into a slot is a highly familiar and universally understood concept in Western cultures."
          },
          "qwen": {
            "score": 3,
            "rationale": "While mailing letters is a common concept, the specific gesture of reaching upward to insert mail may not align with all learners’ experiences (e.g., ground-level or wall-mounted boxes are more typical in some regions)."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves simple, everyday arm movements that are very natural and effortless to reproduce."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is simple, uses natural arm extension, and requires no fine motor control, making it easy for most learners to reproduce accurately."
          },
          "delta": 0.667
        }
      }
    },
    {
      "index": 8,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Ceiling",
      "title": "08_Ceiling.avi",
      "local_path": "data/gesture_videos/08_Ceiling.avi",
      "video": "assets/rating-videos/08_Ceiling.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor stands still, then raises both arms above her head, palms facing upward, to mimic the flat surface of a ceiling, before returning her arms to her sides.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises both arms above her head, palms facing down and fingers pointing towards each other, creating a flat horizontal surface above her.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands still, then raises both arms above her head with palms facing down and fingers extended, forming a flat horizontal plane overhead to represent the ceiling. She holds this pose briefly before lowering her arms back to her sides.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly and directly represents the concept of a ceiling by using the hands to define a flat, overhead boundary."
          },
          "pro": {
            "score": 5,
            "rationale": "The flat hands held above the head perfectly mimic the flat, horizontal surface of a ceiling."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture directly mimics the spatial location and flat surface of a ceiling — hands positioned overhead in a horizontal plane clearly visually represent the concept."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement simulates the physical act of reaching toward or indicating the overhead space, which is a common spatial interaction."
          },
          "pro": {
            "score": 4,
            "rationale": "Reaching up and indicating the space above evokes the physical relationship and spatial awareness one has with a ceiling."
          },
          "qwen": {
            "score": 4,
            "rationale": "The upward arm movement and hand positioning evoke the physical experience of reaching toward or touching a ceiling, engaging proprioceptive and spatial memory."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though it is relatively simple and contained within a vertical plane."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture involves a large, upward movement of both arms, making it visually prominent and expansive."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is clear and deliberate but not expansive or rapid; it’s moderate in size and speed, sufficient to draw attention without being overly dramatic."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, with no emotional cues."
          },
          "qwen": {
            "score": 1,
            "rationale": "Facial expression remains neutral throughout; no emotional cues are conveyed via face, which is appropriate for a concrete noun like 'ceiling'."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the spatial concept of a ceiling."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, direct, and easy to process, making it an optimal fit for vocabulary learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "Simple, single-motion gesture with minimal cognitive load; perfectly suited for vocabulary learning — easy to associate with the word and reproduce."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Using hands to indicate an overhead surface is a universally understood iconic gesture in Western contexts."
          },
          "pro": {
            "score": 4,
            "rationale": "Indicating a flat surface above the head is a commonly understood way to represent a ceiling or roof."
          },
          "qwen": {
            "score": 5,
            "rationale": "Overhead hand-as-surface gesture is widely recognized across Western cultures as representing ceilings, roofs, or overhead structures."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture involves basic arm movements that are very easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture requires only basic motor skills (raising arms) and is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Extremely natural and effortless to replicate; requires no special flexibility or coordination, making it ideal for learners of all ages and abilities."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 9,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Monument",
      "title": "09_Monument.avi",
      "local_path": "data/gesture_videos/09_Monument.avi",
      "video": "assets/rating-videos/09_Monument.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as 'arch', 'building', or 'tall' without the context of the word 'monument'.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as 'tall', 'statue', 'sky', or 'reach' without context",
      "models": {
        "flash": {
          "description": "The actor stands, then slowly raises both arms upward in a curved motion, forming an arch shape above their head, mimicking the structure of a monument.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'arch', 'building', or 'tall' without the context of the word 'monument'."
        },
        "pro": {
          "description": "The actor raises both arms high above her head while looking upwards, as if indicating or tracing the shape of a tall, imposing structure.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands facing forward, then raises both arms high above her head with palms facing inward while looking upward, outlining a tall vertical shape before lowering her arms.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as 'tall', 'statue', 'sky', or 'reach' without context"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The arm movement clearly traces the outline of an arch or a tall, structured object, which is a common iconic representation of a monument."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly represents the verticality and large scale typical of a monument by tracing a tall shape in the air."
          },
          "qwen": {
            "score": 4,
            "rationale": "The upward extension of both arms visually mimics the height and vertical structure typical of a monument or statue."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture simulates the physical act of building or tracing the height and shape of a structure, engaging the upper body."
          },
          "pro": {
            "score": 4,
            "rationale": "The action of looking up and reaching high strongly evokes the physical experience of standing at the base of a large structure."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the physical experience of craning one's neck to look up at a tall structure, simulating the viewer's perspective."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is deliberate and expansive, though performed at a slow, steady pace."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is expansive, involving full arm extension above the head and a noticeable change in head posture."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is expansive and uses the full vertical range of the upper body, making it visually prominent against the neutral background."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, though the upward gaze slightly suggests looking at something grand."
          },
          "qwen": {
            "score": 3,
            "rationale": "The actor looks upward with a focused expression that suggests awe or attention to scale, though the facial affect remains relatively neutral."
          },
          "delta": 1.333
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, clear, and directly maps to the concept of a tall, static structure."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and effectively conveys the core physical attribute of the target word without unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture consists of a single, fluid motion that is cognitively simple and directly maps to the concept of height."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "Using hands to outline the shape of a structure is a universally understood iconic gesture."
          },
          "pro": {
            "score": 4,
            "rationale": "Using upward reaching and gazing to indicate something tall or grand is a widely understood convention."
          },
          "qwen": {
            "score": 5,
            "rationale": "Reaching upward to indicate height or a tall object is a highly conventional and recognizable gesture in Western contexts."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and requires no special coordination, making it easy for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very natural, requires no special coordination, and is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement requires no fine motor skills or complex coordination, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 10,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Entrance Ticket",
      "title": "10_EntranceTicket.avi",
      "local_path": "data/gesture_videos/10_EntranceTicket.avi",
      "video": "assets/rating-videos/10_EntranceTicket.mp4",
      "complete": true,
      "max_abs_delta": 0,
      "mean_abs_delta": 0.0,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as swiping a credit card or waving a hand, but in the context of 'entrance ticket', it is highly coherent.",
      "pro_ambiguities": "The gesture could be interpreted as handing over any small object, not exclusively an entrance ticket, though the context makes it clear.",
      "qwen_ambiguities": "Without the label, the gesture could be interpreted generally as 'giving something' or 'handing over' rather than specifically a ticket.",
      "models": {
        "flash": {
          "description": "The actor performs a sweeping motion with her right arm from right to left, as if scanning or presenting a ticket at an entrance gate.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as swiping a credit card or waving a hand, but in the context of 'entrance ticket', it is highly coherent."
        },
        "pro": {
          "description": "The actor extends her right arm forward with her hand slightly open, simulating the action of holding and presenting a small object like a ticket to someone.",
          "confidence": "high",
          "ambiguities": "The gesture could be interpreted as handing over any small object, not exclusively an entrance ticket, though the context makes it clear."
        },
        "qwen": {
          "description": "The actor extends her right arm forward with a pinched hand shape, mimicking the action of handing a small flat object (a ticket) to someone, then retracts the arm.",
          "confidence": "high",
          "ambiguities": "Without the label, the gesture could be interpreted generally as 'giving something' or 'handing over' rather than specifically a ticket."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The sweeping motion effectively mimics the action of scanning a ticket or passing through an automated turnstile, which is a clear iconic representation of using an entrance ticket."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly visually represents the action of presenting a ticket for entry, which is strongly associated with the target word."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture functionally represents the use of the object (handing over a ticket) which is strongly associated with the concept of an entrance ticket."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical interaction of presenting a ticket to a scanner, engaging the arm and hand in a way that mirrors the real-world action."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the physical action and bodily experience of holding a small piece of paper and handing it over."
          },
          "qwen": {
            "score": 4,
            "rationale": "The hand shape suggests holding a small rectangular object, and the arm extension evokes the physical action of the transaction."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively contained and not overly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, but relatively simple and constrained to a single arm extension."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct, involving a full arm extension, but is relatively standard in size and speed."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective context."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no emotional cues."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, conveying no specific emotion."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the concept of an entrance ticket without unnecessary cognitive load."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and optimally balances informativeness with ease of understanding for a learner."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single arm movement, making it cognitively light and easy to process."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of scanning a ticket or passing through a gate is a universally recognized experience in modern Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of presenting a ticket or pass is a highly familiar and universally understood convention in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Handing a ticket to gain entry is a universally recognized routine in Western contexts, making the gesture highly familiar."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is a basic, everyday arm extension that is very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no dexterity or complex coordination, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 11,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Thread",
      "title": "11_Thread.avi",
      "local_path": "data/gesture_videos/11_Thread.avi",
      "video": "assets/rating-videos/11_Thread.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "The gesture could potentially be interpreted as 'needle' or 'pulling', but 'thread' is a very strong and direct fit.",
      "qwen_ambiguities": "Could be interpreted as 'string', 'wire', or 'pulling something fine' without audio context.",
      "models": {
        "flash": {
          "description": "The actor mimics the action of threading a needle by bringing her hand up, making a pinching motion with her fingers as if holding a thread, and then moving her hand forward as if passing it through an eye.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right hand, pinching her thumb and index finger together as if holding something very thin, and pulls it upwards and outwards.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'needle' or 'pulling', but 'thread' is a very strong and direct fit."
        },
        "qwen": {
          "description": "The actor pinches her thumb and index finger together as if holding a thin object, then moves her hand upward in a smooth motion, mimicking the action of pulling or lifting a thread.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as 'string', 'wire', or 'pulling something fine' without audio context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a highly transparent, iconic representation of the act of threading a needle."
          },
          "pro": {
            "score": 5,
            "rationale": "The pinch grip and pulling motion perfectly mimic the action of holding and drawing out a thread, providing a highly transparent visual representation."
          },
          "qwen": {
            "score": 4,
            "rationale": "The pinched fingers clearly represent the thinness of a thread, and the upward motion mimics handling or pulling it."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly simulates the fine motor action of holding a thread and guiding it through a small opening."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture strongly simulates the fine motor control and physical sensation required to grasp and pull a thin thread."
          },
          "qwen": {
            "score": 4,
            "rationale": "Evokes the tactile sensation of holding a fine strand and the motor action of pulling it taut or lifting it."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and contained within the hand and forearm."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, involving a smooth upward arm extension, but remains moderate in size and speed."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct but relatively small and subtle compared to full-arm gestures."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, focusing solely on the hand movement."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The single, clear action is optimally simple and directly informative, making it an excellent fit for vocabulary learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single hand shape and movement, making it easy to process."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of threading a needle is a universally recognized, culturally familiar task."
          },
          "pro": {
            "score": 5,
            "rationale": "Using a pinch grip to represent holding something tiny or thin is a highly familiar and widely understood convention."
          },
          "qwen": {
            "score": 5,
            "rationale": "Pinching fingers to indicate thinness or holding a small object is a widely recognized and conventional pantomime."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very easy and natural for a learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very natural, requires minimal physical effort, and is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires minimal effort or dexterity to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 12,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Bicycle",
      "title": "12_Bicycle.avi",
      "local_path": "data/gesture_videos/12_Bicycle.avi",
      "video": "assets/rating-videos/12_Bicycle.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could potentially be confused with 'motorcycle' without auditory context, though the lack of engine revving motion suggests bicycle.",
      "models": {
        "flash": {
          "description": "The actor performs a pedaling motion with their legs while holding their arms in front of their body as if gripping handlebars.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor extends her arms forward as if holding handlebars and alternately lifts her legs to simulate the action of pedaling.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both hands in front of the chest with fists clenched as if gripping handlebars, performs a steering motion, and simultaneously lifts one leg slightly to mimic pedaling or balancing.",
          "confidence": "high",
          "ambiguities": "Could potentially be confused with 'motorcycle' without auditory context, though the lack of engine revving motion suggests bicycle."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly mimics the physical act of riding a bicycle, including both the handlebars and the pedaling motion."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a highly transparent and direct visual representation of riding a bicycle, capturing both the steering and pedaling actions."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a highly transparent mime of riding a bicycle, visually representing the handlebars and the act of riding."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The movement directly simulates the bodily experience of cycling, engaging both upper and lower body motor systems."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture strongly evokes the bodily experience of riding a bike by simulating the exact motor actions required."
          },
          "qwen": {
            "score": 5,
            "rationale": "Strongly evokes the physical sensation of gripping handlebars, steering, and the balance required for cycling."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 4,
            "rationale": "The movement is full-body, rhythmic, and clearly defined, making it visually prominent."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is clear and pronounced, involving both the arms and the legs in a coordinated, dynamic action."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement involves both upper and lower body coordination, making it distinct and visually clear against the neutral background."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no emotional cues."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is largely neutral and focused on the action, providing minimal additional affective information."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the concept of a bicycle."
          },
          "pro": {
            "score": 5,
            "rationale": "Despite involving multiple body parts, the gesture is highly intuitive and perfectly balances informativeness with simplicity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matched to the concrete noun/verb concept without being cognitively overloaded."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The act of riding a bicycle is a universally recognized activity in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "Pantomiming holding handlebars and pedaling is a universally recognized gesture for a bicycle in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Mimicking handlebars is a universally recognized emblem for bicycles in Western and many other cultural contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 4,
            "rationale": "The gesture is easy to replicate, though it requires a bit of coordination to perform the leg and arm movements simultaneously."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is easy to reproduce, though it requires standing and a slight amount of balance to lift the legs, making it slightly more effortful than a purely manual gesture."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no special flexibility or skill, making it effortless for learners to reproduce."
          },
          "delta": 0.667
        }
      }
    },
    {
      "index": 13,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Window",
      "title": "13_Window.avi",
      "local_path": "data/gesture_videos/13_Window.avi",
      "video": "assets/rating-videos/13_Window.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could potentially be confused with opening curtains or a sliding door without context.",
      "models": {
        "flash": {
          "description": "The actor uses both hands to trace a rectangular shape in the air, simulating the frame of a window.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor uses both hands to trace a large rectangular shape in the air in front of her.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor turns slightly to the side, raises both hands to shoulder height with fists closed as if gripping a frame, and mimics sliding a window pane open and closed horizontally.",
          "confidence": "high",
          "ambiguities": "Could potentially be confused with opening curtains or a sliding door without context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly and directly traces the outline of a rectangular window, making the meaning highly transparent."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly traces a rectangular shape, which is the typical visual form of a window, providing a strong visual resemblance."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is a clear pantomime of opening a sliding window, visually resembling the action associated with the object."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It simulates the visual shape of the object rather than the physical interaction of opening or closing a window."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves the physical action of outlining a shape in space, engaging the arms, but does not simulate interacting with a window (like opening it)."
          },
          "qwen": {
            "score": 4,
            "rationale": "The fist grip and sliding motion strongly evoke the tactile and kinesthetic experience of physically manipulating a window frame."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not particularly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and uses both arms to define a space, but it is relatively slow and simple in its dynamics."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is distinct and deliberate but remains relatively contained within the upper body space."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the demonstration, focusing on the action rather than affect."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the concept of a window."
          },
          "pro": {
            "score": 5,
            "rationale": "Tracing a simple shape is highly intuitive and perfectly balances informativeness with simplicity for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, involving a single coordinated bimanual action that is easy to cognitively process."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Tracing a shape in the air is a universally understood way to represent objects in Western and many other cultures."
          },
          "pro": {
            "score": 4,
            "rationale": "Drawing a shape in the air to represent an object of that shape is a common and easily understood communicative convention."
          },
          "qwen": {
            "score": 5,
            "rationale": "Mimicking the action of sliding a window is a highly familiar and conventionalized gesture in Western contexts."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and requires no special motor skills to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of tracing a box in the air is physically undemanding and very easy for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no special dexterity, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 14,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Remote Control",
      "title": "14_RemoteControl.avi",
      "local_path": "data/gesture_videos/14_RemoteControl.avi",
      "video": "assets/rating-videos/14_RemoteControl.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without an object in hand, the gesture could initially be interpreted as simply pointing at a distant object rather than holding a remote.",
      "models": {
        "flash": {
          "description": "The actor holds their hand in a fist shape and makes a small, repetitive pressing motion with their thumb, simulating the use of a remote control button.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right hand, holding it as if grasping a small object, and makes a pressing motion with her thumb while looking forward.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor turns her body slightly to the side, extends her right arm forward, and uses her index finger to make a pointing or button-pressing motion, mimicking the action of using a remote control.",
          "confidence": "high",
          "ambiguities": "Without an object in hand, the gesture could initially be interpreted as simply pointing at a distant object rather than holding a remote."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly mimics the physical action of pressing a button on a remote control, which is highly iconic."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture highly transparently represents the semantics by mimicking the exact action of holding and using a remote control."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly mimics the action of pointing a remote at a device or pressing a button, establishing a strong visual link to the word's function."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It directly simulates the specific motor action of using a remote control, engaging the learner's sensorimotor experience."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture provides a very vivid simulation of the physical experience of gripping a remote and pressing a button with the thumb."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement evokes the specific motor experience of extending the arm and pressing a button, engaging the learner's motor memory of using the device."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is small, subtle, and localized to the hand, making it less visually commanding."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively subtle and constrained, involving only a slight arm raise and a small thumb action."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement involves a body turn and arm extension which draws attention, but the hand movement itself is relatively small and contained."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional emotional cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the essence of the target word without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is extremely simple and intuitive, requiring minimal cognitive load to understand or reproduce."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Using a remote control is a ubiquitous daily activity in Western culture, making the gesture highly familiar."
          },
          "pro": {
            "score": 5,
            "rationale": "This pantomime of using a remote control is a highly familiar and universally understood gesture in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "The action of pointing or pressing a button to control a device is a highly familiar and conventionalized gesture in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to reproduce."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves minimal, everyday movements that are extremely natural and effortless for anyone to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and effortless, making it very easy for learners to copy and practice immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 15,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Bottle",
      "title": "15_Bottle.avi",
      "local_path": "data/gesture_videos/15_Bottle.avi",
      "video": "assets/rating-videos/15_Bottle.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also represent 'drinking' or 'water' rather than specifically a 'bottle', though it is highly contextually relevant.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The gesture depicts the action of drinking, which could be interpreted as the verb 'drink' rather than the noun 'bottle'.; The hand shape is generic and could represent a cup, glass, or small container rather than specifically a bottle.",
      "models": {
        "flash": {
          "description": "The actor performs a drinking motion by raising her hand to her mouth, tilting her head back, and then lowering her hand.",
          "confidence": "high",
          "ambiguities": "The gesture could also represent 'drinking' or 'water' rather than specifically a 'bottle', though it is highly contextually relevant."
        },
        "pro": {
          "description": "The actor raises her right hand as if gripping a cylindrical object, brings it to her mouth, and tilts her head back slightly to simulate drinking.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right hand to her mouth with fingers curved as if holding a small container, tilts her head back slightly to mimic drinking, and then lowers her hand.",
          "confidence": "high",
          "ambiguities": "The gesture depicts the action of drinking, which could be interpreted as the verb 'drink' rather than the noun 'bottle'.; The hand shape is generic and could represent a cup, glass, or small container rather than specifically a bottle."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture clearly mimics the action of drinking from a bottle, which is a strong iconic representation of the object's primary function."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture highly transparently represents the target word by mimicking the primary action associated with a bottle (drinking from it)."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture functionally represents the object by mimicking the action of drinking from a bottle, providing a clear metonymic link to the target word."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement simulates the physical interaction of holding a bottle and tilting it to drink, engaging motor imagery related to the object."
          },
          "pro": {
            "score": 5,
            "rationale": "The gripping hand shape and the motion of bringing it to the mouth strongly evoke the physical experience of holding and using a bottle."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement strongly evokes the physical sensation and motor schema of lifting a vessel to the lips and tilting the head to drink."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively contained and standard in speed and size."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and involves the arm and head, but it is relatively contained and moderate in speed and size."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct but relatively small and contained within the upper body space, lacking expansive dynamics."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral, focusing entirely on the physical action rather than conveying emotion."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, offering no additional affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the word 'bottle'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the essence of the word without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple and cognitively straightforward, making it highly suitable for vocabulary learning contexts."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of drinking from a bottle is a universal human experience and highly familiar in Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "Pantomiming drinking from a bottle is a highly common and universally recognized gesture in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Miming the act of drinking to represent a drinking vessel is a highly conventionalized and universally recognized pantomime in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The action mimics a common daily movement, making it very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The action is natural and effortless, requiring no complex coordination, making it very easy for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 16,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Airplane",
      "title": "16_Airplane.avi",
      "local_path": "data/gesture_videos/16_Airplane.avi",
      "video": "assets/rating-videos/16_Airplane.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor stands still and extends both arms out to the sides, then tilts her body to the left and right, mimicking the banking motion of an airplane in flight.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor extends both arms straight out to the sides and tilts her torso left and right, mimicking the wings and banking motion of an airplane.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands upright and extends both arms horizontally to the sides, mimicking airplane wings. She then tilts her torso and arms diagonally left and right in a banking motion, simulating flight maneuvering, before returning to center and lowering her arms.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The arm extension and lateral tilting motion clearly and directly represent the wings and banking movement of an airplane."
          },
          "pro": {
            "score": 5,
            "rationale": "Extending the arms horizontally and tilting the torso perfectly mimics the wings and banking motion of an airplane, providing a highly transparent visual representation."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture directly mirrors the shape and motion of an airplane in flight — outstretched arms as wings, body tilt as banking — making it highly transparent visually."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical experience of flight and balance, which is strongly associated with the concept of an airplane."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves full upper-body engagement, vividly simulating the physical action and experience of an airplane flying and banking."
          },
          "qwen": {
            "score": 5,
            "rationale": "The full-body movement evokes the physical sensation of flying or piloting, engaging proprioceptive and vestibular imagery strongly tied to the concept of airborne motion."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively slow and contained within the actor's immediate space."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture involves wide arm extensions and noticeable torso tilting, making it a pronounced and expansive movement that easily captures attention."
          },
          "qwen": {
            "score": 4,
            "rationale": "The lateral arm extension and diagonal tilting are expansive and dynamic, drawing clear visual attention; however, the motion is controlled rather than rapid or exaggerated."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, serious facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no emotional cues."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains neutral throughout; no emotional cues (e.g., excitement, focus) are conveyed to enhance semantic engagement."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learners to associate with the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, direct, and perfectly captures the core concept without any unnecessary complexity, making it optimal for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple to understand and execute, yet rich in semantic mapping — ideal for vocabulary learning without cognitive overload."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Mimicking an airplane with outstretched arms is a universally recognized gesture in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "Pretending to be an airplane by extending one's arms is a highly recognizable and universally understood gesture in Western cultures, often used in childhood play."
          },
          "qwen": {
            "score": 5,
            "rationale": "Extending arms as wings is a universally recognized emblem for 'airplane' in Western and many global contexts, especially in educational or playful settings."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and requires no special coordination, making it extremely easy for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gross motor movements of extending the arms and tilting the body are very natural, simple, and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Requires only basic motor control — standing and extending arms — making it effortlessly reproducible by learners of all ages and abilities."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 17,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Painting",
      "title": "17_Painting.avi",
      "local_path": "data/gesture_videos/17_Painting.avi",
      "video": "assets/rating-videos/17_Painting.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without context, the motion could resemble writing on a high board or cleaning a window.",
      "models": {
        "flash": {
          "description": "The actor performs a repetitive, sweeping motion with her right hand, mimicking the action of using a paintbrush on a vertical surface.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right arm and makes a sweeping up-and-down motion, mimicking the action of painting a wall or canvas with a brush or roller.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right arm to head height, forming a grip as if holding a paintbrush, and performs a short, repetitive dabbing or brushing motion against an invisible vertical surface.",
          "confidence": "high",
          "ambiguities": "Without context, the motion could resemble writing on a high board or cleaning a window."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly and directly mimics the physical action of painting on a canvas or wall."
          },
          "pro": {
            "score": 5,
            "rationale": "The up-and-down arm movement perfectly mimics the action of applying paint to a surface, providing a highly transparent visual representation of the word."
          },
          "qwen": {
            "score": 5,
            "rationale": "The hand shape mimics holding a brush and the movement directly replicates the action of applying paint to a wall or canvas."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The movement strongly simulates the motor action of painting, engaging the arm and hand in a way that evokes the physical experience of the task."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture strongly evokes the physical sensation of holding a painting tool and moving it across a surface, creating vivid action representation."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture strongly evokes the physical sensation of reaching up and the fine motor control of the wrist used in painting."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively contained and moderate in speed and size."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture involves a clear, pronounced, and expansive up-and-down movement of the entire arm."
          },
          "qwen": {
            "score": 4,
            "rationale": "The arm extension is large and clear, drawing attention to the action space above shoulder level."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, with no emotional cues."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is neutral but focused on the task, providing minimal affective information."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the target word without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and optimally balances informativeness with ease of understanding for a learner."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, involving a single arm movement that is easy to process cognitively."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of painting is a universally recognized physical activity, making the gesture highly familiar."
          },
          "pro": {
            "score": 5,
            "rationale": "The mimed action of painting a wall or canvas is a highly familiar and universally recognized concept in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "The action of painting a wall or canvas is a universally recognized motor schema in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate, requiring no special skill or coordination."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is natural, requires no special coordination, and is effortless for learners to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can easily reproduce this natural arm movement without physical strain or complex coordination."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 18,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Present",
      "title": "18_Present.avi",
      "local_path": "data/gesture_videos/18_Present.avi",
      "video": "assets/rating-videos/18_Present.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'give', 'offer', or 'here', which are semantically very close to 'present'.",
      "pro_ambiguities": "The word 'present' can also mean 'current time' or 'to present (verb)', but the gesture clearly aligns with the noun meaning 'gift'.",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor performs a gesture as if offering or handing something to someone, extending both hands forward with palms up.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'give', 'offer', or 'here', which are semantically very close to 'present'."
        },
        "pro": {
          "description": "The actor holds both hands out in front of her as if holding a box, then moves them forward as if offering the box to someone.",
          "confidence": "high",
          "ambiguities": "The word 'present' can also mean 'current time' or 'to present (verb)', but the gesture clearly aligns with the noun meaning 'gift'."
        },
        "qwen": {
          "description": "The actor cups her hands in front of her torso as if holding a box, then extends both arms forward to offer the imaginary object to the viewer before returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly mimics the act of offering or presenting an object to another person, which is a direct iconic representation of the word 'present'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture of holding an imaginary box and offering it forward perfectly mimics the action of giving a present."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture of holding an invisible box and extending it outward is a highly transparent and conventional visual representation of giving a gift."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement simulates the physical action of holding and extending an object toward someone, engaging motor imagery related to giving."
          },
          "pro": {
            "score": 5,
            "rationale": "Strongly evokes the physical sensation of holding an object with both hands and extending the arms to hand it over."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement strongly evokes the tactile sensation of holding a weighted object and the kinesthetic experience of offering it to someone."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though not overly expansive or rapid, making it moderately salient."
          },
          "pro": {
            "score": 4,
            "rationale": "Clear, deliberate forward movement of both arms, making it visually distinct and easy to follow."
          },
          "qwen": {
            "score": 4,
            "rationale": "The forward extension of the arms is clear and distinct, effectively drawing attention to the act of giving."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor's facial expression remains largely neutral, lacking the warmth or excitement typically associated with giving a present."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for conveying the meaning of 'present' in a learning context."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and directly conveys the meaning without unnecessary movements."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is simple, involving a single cohesive action that is easy to process and associate with the word."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The gesture of offering something with palms up is a universally understood and common social convention in Western cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of offering an object with both hands is a universally recognized gesture for giving a gift in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Offering an object with two hands is a widely recognized and culturally familiar emblem for giving a gift in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is basic and requires no special coordination, making it effortless to copy."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is physically effortless and natural, making it very easy for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 19,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Guitar",
      "title": "19_Guitar.avi",
      "local_path": "data/gesture_videos/19_Guitar.avi",
      "video": "assets/rating-videos/19_Guitar.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor performs a pantomime of strumming a guitar by holding one arm across the chest and moving the other hand in a rhythmic strumming motion.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor holds her left arm out as if grasping the neck of a guitar and moves her right hand up and down near her torso as if strumming the strings.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands facing the camera, extends her left arm forward with a closed fist (simulating holding a guitar neck), and uses her right hand to make a downward strumming motion across her torso (simulating strumming strings). She holds the pose briefly before returning to neutral.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a clear, direct pantomime of playing a guitar, making the meaning immediately obvious."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture perfectly mimics the action of playing a guitar, providing a highly transparent visual representation of the target word."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture directly mimics the physical act of playing a guitar — one hand as fretting hand, the other as strumming hand — making the semantic link to 'guitar' highly transparent."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It perfectly simulates the physical action of strumming a guitar, engaging the motor imagery associated with playing the instrument."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly simulates the physical interaction and bodily actions required to hold and strum a guitar."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement strongly evokes the bodily experience of holding and strumming a guitar, engaging motor memory associated with playing the instrument."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and rhythmic, though it is relatively contained and not overly expansive."
          },
          "pro": {
            "score": 4,
            "rationale": "The strumming motion and extended arm create a clear, pronounced, and easily noticeable movement."
          },
          "qwen": {
            "score": 4,
            "rationale": "The strumming motion is clear, deliberate, and spatially distinct, drawing attention without being overly exaggerated or fast."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, conveying no emotional meaning."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains neutral throughout; no emotional cue is added to reinforce the gesture’s meaning."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the word 'guitar'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is straightforward and perfectly captures the essence of the word without any unnecessary or confusing complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and requires minimal coordination — ideal for learners to encode and reproduce without cognitive overload."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Pantomiming playing a guitar is a universally recognized gesture in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "The 'air guitar' gesture is a highly familiar and universally recognized action in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Strumming an imaginary guitar is a widely recognized emblematic gesture in Western cultures, commonly used to represent music or guitars."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very natural and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movements are simple, natural, and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can easily mimic this gesture using only their hands and arms; no special equipment or complex body positioning is required."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 20,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Purse",
      "title": "20_Purse.avi",
      "local_path": "data/gesture_videos/20_Purse.avi",
      "video": "assets/rating-videos/20_Purse.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "The initial motion could resemble putting on a seatbelt, but the subsequent patting at the hip clarifies it is a bag or purse.",
      "qwen_ambiguities": "Could be interpreted as 'shoulder' or 'bag' generally rather than specifically 'purse'",
      "models": {
        "flash": {
          "description": "The actor performs a motion as if placing a strap over their shoulder and then adjusting a bag at their side.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor mimics putting the strap of a cross-body purse over her head and shoulder, then pats the imaginary purse resting on her hip.",
          "confidence": "high",
          "ambiguities": "The initial motion could resemble putting on a seatbelt, but the subsequent patting at the hip clarifies it is a bag or purse."
        },
        "qwen": {
          "description": "The actor mimes the action of wearing a shoulder bag by lifting her right hand to grasp her left shoulder, simulating the strap of a purse.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as 'shoulder' or 'bag' generally rather than specifically 'purse'"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly mimics the physical action of putting on a shoulder bag or purse, making the meaning highly transparent."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly visually represents the action of wearing and interacting with a cross-body purse."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly depicts the action of carrying a purse over the shoulder, providing a strong visual link to the object's use."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The movement directly simulates the tactile and motor experience of interacting with a personal accessory."
          },
          "pro": {
            "score": 4,
            "rationale": "Strongly evokes the bodily experience of putting on a bag strap and feeling the weight or presence of the bag on the hip."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement evokes the physical sensation of the weight and position of a strap resting on the shoulder."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively contained and not overly expansive."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is distinct and crosses the torso, but remains moderate in speed and overall expansiveness."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct but relatively small and contained within the upper body."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is neutral to pleasant, serving a functional role without adding specific emotional meaning to the word."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The two-step action (strap over shoulder, patting the bag) is simple, intuitive, and perfectly balances informativeness with ease of understanding."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single arm movement that is easy to process cognitively."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of putting on a shoulder bag is a universally recognized, everyday gesture in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of wearing a cross-body bag is a highly familiar and universally understood concept in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Carrying a bag over the shoulder is a highly familiar and conventional action in Western culture."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves basic, everyday motor actions that are effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires minimal effort or dexterity for a learner to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 21,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Cable",
      "title": "21_Cable.avi",
      "local_path": "data/gesture_videos/21_Cable.avi",
      "video": "assets/rating-videos/21_Cable.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could potentially be interpreted as handling a rope, string, or thread rather than specifically a cable.",
      "pro_ambiguities": "The gesture focuses on the action of connecting rather than the object itself, which could also be interpreted as 'plug', 'connect', or 'tie'.",
      "qwen_ambiguities": "Gesture could be interpreted as pulling a string, rope, or even a drawer handle rather than specifically a 'cable'.; Lack of object representation (e.g., miming thickness or connectors) reduces specificity to 'cable' versus other flexible linear objects.",
      "models": {
        "flash": {
          "description": "The actor holds their hands in front of their body and makes a small, repetitive motion as if pulling or manipulating a thin, flexible object like a cable or wire.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as handling a rope, string, or thread rather than specifically a cable."
        },
        "pro": {
          "description": "The actor brings both hands together in front of her body with a pinching grip, mimicking the action of holding and connecting two ends of a cable.",
          "confidence": "high",
          "ambiguities": "The gesture focuses on the action of connecting rather than the object itself, which could also be interpreted as 'plug', 'connect', or 'tie'."
        },
        "qwen": {
          "description": "The actor stands still, then uses her right hand to make a small, quick pulling motion near her left hip, as if tugging on a thin cord or cable. She returns to neutral stance immediately after.",
          "confidence": "medium",
          "ambiguities": "Gesture could be interpreted as pulling a string, rope, or even a drawer handle rather than specifically a 'cable'.; Lack of object representation (e.g., miming thickness or connectors) reduces specificity to 'cable' versus other flexible linear objects."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The hand movement effectively mimics the action of handling or pulling a cable, which is a clear iconic representation."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture represents the action of connecting a cable rather than the physical shape of the cable itself, providing moderate visual resemblance to the object."
          },
          "qwen": {
            "score": 3,
            "rationale": "The pulling motion suggests interaction with a linear object like a cable, but lacks clear depiction of the cable’s form or function; resemblance is moderate and context-dependent."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the tactile experience of manipulating a flexible, cord-like object."
          },
          "pro": {
            "score": 4,
            "rationale": "The pinching grip and joining motion strongly evoke the physical experience of handling and connecting a wire or cable."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture evokes a tactile pulling action associated with handling a cable, but does not simulate resistance, weight, or connection points strongly enough for vivid imagery."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively small and constrained to the area in front of the torso, lacking expansive or highly dynamic motion."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, bringing the hands from the sides to the center, but remains moderate in size and speed."
          },
          "qwen": {
            "score": 2,
            "rationale": "Movement is small, fast, and localized near the hip — subtle and easily missed; lacks expansiveness or visual command to strongly guide attention."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "Facial expression remains neutral throughout; no affective cues are communicated to reinforce meaning or engagement."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the concept of a cable."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and effectively conveys the concept without unnecessary complexity."
          },
          "qwen": {
            "score": 4,
            "rationale": "Gesture is simple and cognitively light — appropriate for vocabulary learning; however, its minimalism may reduce memorability without additional contextual support."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The action of handling a wire or cable is a common, universally understood physical interaction."
          },
          "pro": {
            "score": 4,
            "rationale": "The action of connecting two ends of a cable is a common, universally understood interaction in modern contexts."
          },
          "qwen": {
            "score": 3,
            "rationale": "Pulling motions are culturally recognizable as interacting with objects, but this specific gesture lacks conventional emblematic status for 'cable' in Western contexts."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a very simple and natural hand movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Extremely easy to reproduce — requires only a small hand pull near the hip; no coordination, balance, or fine motor control needed."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 22,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Camera",
      "title": "22_Camera.avi",
      "local_path": "data/gesture_videos/22_Camera.avi",
      "video": "assets/rating-videos/22_Camera.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.095,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could potentially be confused with 'binoculars' or 'glasses' without verbal context, though it fits 'camera' viewfinder semantics well.",
      "models": {
        "flash": {
          "description": "The actor holds both hands up to their eyes, forming a rectangular frame with their fingers to simulate looking through a camera viewfinder.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises both hands to eye level, forming a rectangular shape with her thumbs and index fingers to mimic holding a camera, and slightly moves her right index finger as if pressing a shutter button.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both hands to her eyes, forming circles with her thumbs and index fingers to mimic looking through a viewfinder or binoculars, then lowers her hands.",
          "confidence": "high",
          "ambiguities": "Could potentially be confused with 'binoculars' or 'glasses' without verbal context, though it fits 'camera' viewfinder semantics well."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly mimics the action of framing a shot through a camera viewfinder, which is a highly recognizable iconic representation of a camera."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture highly transparently represents the visual shape of a camera and the action of taking a picture."
          },
          "qwen": {
            "score": 5,
            "rationale": "The hand shape (circles at eyes) is a highly transparent visual representation of looking through a camera lens or viewfinder."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "It simulates the physical act of framing a photograph, engaging the hands and eyes in a way that mirrors the actual use of a camera."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture strongly evokes the physical experience and bodily action of holding a camera and pressing the shutter."
          },
          "qwen": {
            "score": 4,
            "rationale": "Strongly evokes the physical sensation of holding an optical device to the face and focusing vision."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively contained and brief, making it moderately salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and distinct as the hands are brought to the face, but it is relatively contained and not overly expansive."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is clear and distinct but relatively small and contained near the face."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the concept of a camera."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly captures the concept without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, requiring only basic finger coordination, making it ideal for learning."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The 'framing' gesture is a universally recognized convention in Western culture for taking a picture."
          },
          "pro": {
            "score": 5,
            "rationale": "This is a widely recognized and highly familiar gesture for a camera in Western culture."
          },
          "qwen": {
            "score": 5,
            "rationale": "This is a widely recognized emblematic gesture for looking, optics, or taking a photo in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to perform, requiring no special coordination."
          },
          "pro": {
            "score": 5,
            "rationale": "The hand shape and movement are very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Very natural and effortless for learners to reproduce without significant motor difficulty."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 23,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Till",
      "title": "23_Till.avi",
      "local_path": "data/gesture_videos/23_Till.avi",
      "video": "assets/rating-videos/23_Till.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.857,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is highly abstract and does not clearly map to the word 'till', making it difficult to interpret the intended meaning.",
      "pro_ambiguities": "The word 'till' has multiple meanings (e.g., cash register, plowing), but the gesture clearly targets the preposition meaning 'until'.",
      "qwen_ambiguities": "Gesture resembles generic pointing ('here' or 'this') rather than indicating a temporal boundary; Lack of a sweeping motion or timeline visualization makes the 'duration' aspect unclear; Subtle movement could be missed or interpreted as a fidget",
      "models": {
        "flash": {
          "description": "The actor performs a small, repetitive downward tapping motion with her right hand, as if pressing a button or tapping a surface.",
          "confidence": "high",
          "ambiguities": "The gesture is highly abstract and does not clearly map to the word 'till', making it difficult to interpret the intended meaning."
        },
        "pro": {
          "description": "The actor raises her right hand, palm down, and moves it horizontally to the right, stopping abruptly to indicate a limit or endpoint.",
          "confidence": "high",
          "ambiguities": "The word 'till' has multiple meanings (e.g., cash register, plowing), but the gesture clearly targets the preposition meaning 'until'."
        },
        "qwen": {
          "description": "The actor stands in a neutral posture, briefly raises her right hand with the index finger extended pointing slightly forward and downward, glances at the hand, and then returns to a resting position.",
          "confidence": "medium",
          "ambiguities": "Gesture resembles generic pointing ('here' or 'this') rather than indicating a temporal boundary; Lack of a sweeping motion or timeline visualization makes the 'duration' aspect unclear; Subtle movement could be missed or interpreted as a fidget"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture of tapping does not visually represent the meaning of 'till' (as in 'until' or 'cultivate land')."
          },
          "pro": {
            "score": 3,
            "rationale": "The horizontal movement stopping at a specific point metaphorically represents reaching a limit in time or space, aligning with the concept of 'till' or 'until'."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture is a generic pointing motion which has a weak visual relationship to the abstract temporal concept of 'till' (up to a time)."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "The movement is abstract and does not evoke a clear physical action related to the word 'till'."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture involves a simple arm movement to indicate a boundary, lacking strong physical interaction or vivid bodily experience."
          },
          "qwen": {
            "score": 2,
            "rationale": "There is minimal bodily engagement; the gesture does not strongly evoke the experience of duration or reaching a limit."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 1,
            "rationale": "The movement is very small, subtle, and lacks dynamic range."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively small, constrained to one arm, and moderate in speed."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is small in amplitude, quick, and lacks expansive dynamics that would draw strong attention."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 2,
            "rationale": "While simple, the gesture is confusing because it lacks a clear semantic connection to the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The simple, clear movement is optimal for conveying the abstract concept of a limit without unnecessary complexity."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is motorically very simple and easy to process, though perhaps too simple for the abstract meaning."
          },
          "delta": 2
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 2,
            "rationale": "The gesture is a generic tapping motion that does not carry a specific cultural meaning related to the word."
          },
          "pro": {
            "score": 4,
            "rationale": "Using a flat hand to indicate a boundary or 'up to here' is a common and recognizable gesture in Western cultures."
          },
          "qwen": {
            "score": 3,
            "rationale": "Pointing is a familiar deictic gesture, but it is not a conventionalized emblem specifically for the word 'till' in Western contexts."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and physically easy for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a very basic arm movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is extremely natural and effortless for a learner to reproduce physically."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 24,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Catalog",
      "title": "24_Catalog.avi",
      "local_path": "data/gesture_videos/24_Catalog.avi",
      "video": "assets/rating-videos/24_Catalog.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as reading a book, a menu, or a pamphlet, which are semantically similar to a catalog.",
      "pro_ambiguities": "The gesture is not exclusive to 'catalog' and could also be interpreted as 'book', 'magazine', or 'reading', though it fits the target word well.",
      "qwen_ambiguities": "Could be interpreted generally as 'book', 'magazine', or 'reading'.",
      "models": {
        "flash": {
          "description": "The actor holds her hands together as if holding a small book or pamphlet, then opens her hands slightly as if opening a catalog to look at it.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as reading a book, a menu, or a pamphlet, which are semantically similar to a catalog."
        },
        "pro": {
          "description": "The actor holds her left hand flat, palm up, as if holding a book or catalog, and uses her right hand to simulate flipping through pages.",
          "confidence": "high",
          "ambiguities": "The gesture is not exclusive to 'catalog' and could also be interpreted as 'book', 'magazine', or 'reading', though it fits the target word well."
        },
        "qwen": {
          "description": "The actor holds her left hand flat with palm up to simulate holding a book, while her right hand mimics the action of flipping pages over it.",
          "confidence": "high",
          "ambiguities": "Could be interpreted generally as 'book', 'magazine', or 'reading'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture clearly mimics the physical act of holding and opening a small booklet or catalog."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly resembles the action of holding and flipping through a multi-page document, which strongly aligns with the concept of a catalog."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a direct visual mimicry of holding a physical catalog and flipping through its pages."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "It effectively simulates the tactile experience of handling a physical document."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the physical sensation and motor action of holding a bound document and turning its pages."
          },
          "qwen": {
            "score": 5,
            "rationale": "Strongly evokes the tactile and motor experience of browsing a booklet or catalog."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is small, subtle, and confined to the immediate area in front of the chest."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and distinct but relatively small, contained within the torso area, and performed at a moderate speed."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear but relatively small and contained within the central body space."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no emotional cues."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused expression looking down at her hands."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and directly maps to the concept of a catalog."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is straightforward, intuitive, and perfectly balances simplicity with the semantic meaning of the word."
          },
          "qwen": {
            "score": 5,
            "rationale": "The two-handed coordination is simple and perfectly suited for the concept."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The action of opening a book or catalog is a universally understood physical interaction."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of flipping pages is a highly familiar and universally understood gesture in Western cultures for reading or browsing a publication."
          },
          "qwen": {
            "score": 5,
            "rationale": "Flipping pages is a highly familiar and conventional action associated with books and catalogs."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The motor action involves basic hand movements that are very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can easily reproduce this simple hand movement without difficulty."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 25,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Clothes",
      "title": "25_Clothes.avi",
      "local_path": "data/gesture_videos/25_Clothes.avi",
      "video": "assets/rating-videos/25_Clothes.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as 'getting ready' or 'dressing up' rather than the noun 'clothes' specifically.",
      "pro_ambiguities": "The gesture could potentially be interpreted as 'body' or 'dress' specifically, rather than 'clothes' in general.",
      "qwen_ambiguities": "Could potentially be interpreted as 'body' or 'self' without verbal context, though the focus on the fabric suggests clothing.",
      "models": {
        "flash": {
          "description": "The actor stands and performs a sweeping motion with both hands, starting from the shoulders and moving down the torso and hips, mimicking the act of smoothing or wearing clothes.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'getting ready' or 'dressing up' rather than the noun 'clothes' specifically."
        },
        "pro": {
          "description": "The actor starts with her hands near her upper chest and sweeps them downwards and slightly outwards along her torso, indicating the garments she is wearing.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'body' or 'dress' specifically, rather than 'clothes' in general."
        },
        "qwen": {
          "description": "The actor places both hands on her upper chest/shoulders and strokes downwards along the front of her torso to her hips, mimicking the action of smoothing down a shirt or jacket.",
          "confidence": "high",
          "ambiguities": "Could potentially be interpreted as 'body' or 'self' without verbal context, though the focus on the fabric suggests clothing."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The downward sweeping motion along the body clearly mimics the act of adjusting or wearing clothing."
          },
          "pro": {
            "score": 4,
            "rationale": "The downward sweeping motion along the body visually represents the shape and location of clothing worn on the torso."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture directly manipulates the actor's own clothing, providing a highly transparent visual representation of the target concept."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical sensation and action of smoothing down one's own clothes."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture evokes the physical sensation of wearing clothes and the action of smoothing or presenting one's attire."
          },
          "qwen": {
            "score": 5,
            "rationale": "The downward stroking motion strongly evokes the tactile sensation of touching and feeling fabric against the body."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves a clear, moderate-sized movement of both arms down the body, but it is not particularly rapid or highly expansive."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and covers the length of the torso, but it is relatively subtle and contained rather than expansive."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, focusing on the physical demonstration."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the concept of clothes."
          },
          "pro": {
            "score": 5,
            "rationale": "The single, smooth downward motion is simple and directly conveys the concept without unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is extremely simple, requiring only a basic two-handed downward stroke, making it ideal for vocabulary learning."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of smoothing one's clothes is a universal, easily recognizable human behavior."
          },
          "pro": {
            "score": 4,
            "rationale": "Sweeping hands down the torso is a recognizable and common gesture for indicating an outfit or clothing in general."
          },
          "qwen": {
            "score": 5,
            "rationale": "Indicating one's own attire by smoothing it down is a universally recognized and intuitive gesture in Western contexts."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very natural and requires no special motor skills to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture requires basic, symmetrical arm movements that are very easy and natural for learners to mimic."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can effortlessly reproduce this natural self-touching movement without cognitive or physical strain."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 26,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Suitcase",
      "title": "26_Suitcase.avi",
      "local_path": "data/gesture_videos/26_Suitcase.avi",
      "video": "assets/rating-videos/26_Suitcase.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could potentially represent any handled object like a briefcase, heavy bag, or box rather than specifically a suitcase.",
      "models": {
        "flash": {
          "description": "The actor bends down slightly, mimics gripping a handle with one hand, and lifts it upward as if picking up a heavy suitcase.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor leans to her right, curls her hand as if gripping a handle, and straightens up, simulating lifting a heavy suitcase.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor bends forward at the waist to reach down with her right hand, then returns to an upright position with her right hand held at her hip as if gripping a handle.",
          "confidence": "high",
          "ambiguities": "Could potentially represent any handled object like a briefcase, heavy bag, or box rather than specifically a suitcase."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The movement clearly mimics the physical action of grasping and lifting a suitcase handle, making the meaning highly transparent."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly depicts the action of holding and lifting a suitcase by its handle."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly mimics the action of reaching for and lifting a suitcase by its handle, providing a strong visual link to the word's function."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture directly simulates the physical interaction of lifting a weighted object, engaging the learner's motor system."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture strongly evokes the physical sensation of gripping a handle and bearing the weight of a heavy object."
          },
          "qwen": {
            "score": 4,
            "rationale": "The bending motion and subsequent posture evoke the physical sensation of lifting a weighted object from the ground."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively contained and not overly expansive."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively small and slow, involving a slight lean and arm lift."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement involves a clear change in posture (bending and rising), which is noticeable but not overly expansive or dramatic."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, with only a very subtle hint of physical effort."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, focusing on the action rather than affect."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple and perfectly captures the core interaction with the object without unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is simple, consisting of a reach and a hold, making it cognitively light and easy to process."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of picking up a suitcase is a universal, culturally familiar physical experience."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of carrying a suitcase is highly familiar and universally recognized."
          },
          "qwen": {
            "score": 5,
            "rationale": "Carrying an object by the handle at one's side is a universally recognized action in Western contexts for bags and suitcases."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, natural, and effortless to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture uses natural body mechanics and requires no dexterity or complex coordination to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 27,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Machine",
      "title": "27_Machine.avi",
      "local_path": "data/gesture_videos/27_Machine.avi",
      "video": "assets/rating-videos/27_Machine.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as 'spinning' or 'turning' rather than specifically 'machine', though in context it is clear.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted specifically as 'robot' rather than the broader category of 'machine'.",
      "models": {
        "flash": {
          "description": "The actor stands still and performs a repetitive, rhythmic circular motion with both forearms, mimicking the rotation of gears or mechanical parts.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'spinning' or 'turning' rather than specifically 'machine', though in context it is clear."
        },
        "pro": {
          "description": "The actor bends her arms at the elbows and moves her forearms up and down simultaneously in a rigid, repetitive motion, resembling mechanical parts.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor bends her elbows and moves her forearms up and down in a rhythmic, piston-like motion to mimic mechanical movement.",
          "confidence": "high",
          "ambiguities": "Could be interpreted specifically as 'robot' rather than the broader category of 'machine'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The circular, rhythmic motion of the forearms effectively mimics the rotation of gears or mechanical components, which is a strong iconic representation of a machine."
          },
          "pro": {
            "score": 4,
            "rationale": "The rigid, repetitive up-and-down motion clearly mimics the mechanical action of a machine, such as a press or pistons."
          },
          "qwen": {
            "score": 4,
            "rationale": "The piston-like arm movement is a clear visual metaphor for the moving parts of a machine or engine."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture simulates the repetitive, mechanical action of a machine, providing a moderate level of sensorimotor engagement."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes a moderate sense of physical, repetitive action associated with operating machinery or the movement of machine parts."
          },
          "qwen": {
            "score": 4,
            "rationale": "The rigid, repetitive motion effectively simulates the physical action of mechanical components."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and rhythmic, though it is somewhat constrained to the forearm area, making it moderately salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and repetitive, involving both arms, but remains moderate in size and speed."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is distinct and rhythmic, though confined mostly to the forearms, making it moderately salient."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, repetitive, and easy to associate with the concept of a machine, making it highly appropriate for learning."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple, straightforward, and easy to process, making it optimal for vocabulary learning."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is simple enough to be understood quickly but specific enough to convey the concept of mechanical action."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The concept of rotating gears as a symbol for machinery is widely understood in Western cultural contexts."
          },
          "pro": {
            "score": 4,
            "rationale": "Mimicking rigid, robotic, or mechanical movements is a common and easily recognizable way to represent a machine in Western culture."
          },
          "qwen": {
            "score": 5,
            "rationale": "Mimicking a robot or machine with stiff, moving arms is a highly common and recognizable trope in Western culture."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is simple and involves basic motor skills, making it very easy for learners to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The synchronized, simple up-and-down movement of the arms is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no complex coordination, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 28,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Mask",
      "title": "28_Mask.avi",
      "local_path": "data/gesture_videos/28_Mask.avi",
      "video": "assets/rating-videos/28_Mask.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as 'hide' or 'peek-a-boo'; Might suggest 'scared' or 'shy' without context",
      "models": {
        "flash": {
          "description": "The actor brings both hands up to cover her face, mimicking the action of putting on or wearing a mask.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor brings both hands up to cover her face, holding them there briefly before lowering them back to her sides.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands facing forward, raises both hands simultaneously to cover her entire face with her palms, holds the position briefly, and then lowers her hands back to her sides.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as 'hide' or 'peek-a-boo'; Might suggest 'scared' or 'shy' without context"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a direct, iconic representation of placing a mask over one's face."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture of covering the face with the hands is a highly transparent visual representation of a mask's function and location."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture of covering the face with hands is a direct visual metaphor for the function of a mask, which is to cover or hide the face."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It simulates the physical action of covering the face, which is the primary sensorimotor experience associated with a mask."
          },
          "pro": {
            "score": 5,
            "rationale": "The action strongly evokes the physical experience of placing a mask over one's face."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement strongly evokes the tactile sensation of hands pressing against the face and the visual experience of vision being blocked."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively simple and contained within the facial area."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement involves both arms moving from the sides to the face and back, creating a clear and pronounced visual signal."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, centered in the frame, but relatively small in scale and speed."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression, and the face is obscured during the main part of the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor's face is neutral before and after the gesture, and obscured during the gesture, conveying no specific emotion."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the word 'mask'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the concept without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is extremely simple, consisting of a single, fluid motion that is easy to process cognitively."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of covering one's face is a universally understood gesture for 'mask'."
          },
          "pro": {
            "score": 5,
            "rationale": "Covering the face with hands to represent a mask or hiding is a widely recognized and familiar gesture."
          },
          "qwen": {
            "score": 4,
            "rationale": "Covering the face with hands is a universally recognized gesture for hiding or masking, familiar across many cultures."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very simple and requires no special coordination, making it effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no dexterity or complex coordination, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 29,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Paper",
      "title": "29_Paper.avi",
      "local_path": "data/gesture_videos/29_Paper.avi",
      "video": "assets/rating-videos/29_Paper.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.762,
      "flash_confidence": "high",
      "pro_confidence": "medium",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could potentially be interpreted as smoothing out fabric or a tablecloth, but 'paper' is a reasonable interpretation given the context.",
      "pro_ambiguities": "The gesture could easily be interpreted as 'dropping', 'placing', or 'flat surface' rather than specifically 'paper'.",
      "qwen_ambiguities": "Could be interpreted as 'notebook' or 'notepad' specifically due to the tearing motion.; Might be confused with 'ticket' or 'receipt' if context is missing.",
      "models": {
        "flash": {
          "description": "The actor makes a quick, sweeping motion with her right hand, as if smoothing out or flattening a sheet of paper on a surface.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as smoothing out fabric or a tablecloth, but 'paper' is a reasonable interpretation given the context."
        },
        "pro": {
          "description": "The actor holds her hands in front of her as if holding a flat object, then moves her right hand down and to the side with an open palm, simulating placing or dropping a sheet of paper.",
          "confidence": "medium",
          "ambiguities": "The gesture could easily be interpreted as 'dropping', 'placing', or 'flat surface' rather than specifically 'paper'."
        },
        "qwen": {
          "description": "The actor performs a bimanual gesture where the right hand remains stationary near the chest (mimicking holding a pad) while the left hand moves outward to the left (mimicking tearing off a sheet).",
          "confidence": "medium",
          "ambiguities": "Could be interpreted as 'notebook' or 'notepad' specifically due to the tearing motion.; Might be confused with 'ticket' or 'receipt' if context is missing."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The sweeping hand motion effectively mimics the action of smoothing out a piece of paper, which is a common interaction with the object."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture weakly resembles the semantics of 'paper', primarily relying on the open palm to suggest a flat surface or the action of placing a sheet down."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture depicts an action associated with paper (tearing from a pad) rather than the shape of the object itself, creating a functional rather than visual resemblance."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture strongly evokes the tactile experience of flattening or handling a thin, flexible material like paper."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture moderately evokes the physical action of holding and then placing or dropping a light, flat object like a piece of paper."
          },
          "qwen": {
            "score": 3,
            "rationale": "Evokes the tactile and motor experience of holding a stable object with one hand and pulling with the other, simulating the physical interaction with paper."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively brief and contained within a small space."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is moderate in size and speed, consisting of a clear downward and outward sweep of the arm."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is relatively small, contained within the torso area, and quick, lacking large or expansive dynamics that would strongly capture attention."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and directly related to the physical properties of the target word."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is simple and easy to process, though its slight ambiguity prevents it from being perfectly optimal."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple, involving a basic two-handed coordination that is easy to process and does not overload cognitive resources."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of smoothing or flattening paper is a universal, everyday physical interaction."
          },
          "pro": {
            "score": 2,
            "rationale": "This is not a highly standardized or universally recognized emblem for 'paper', and could be interpreted more generally as 'placing' or 'flat'."
          },
          "qwen": {
            "score": 4,
            "rationale": "The action of tearing a page from a notepad is a common, recognizable motor schema in Western contexts, aligning with general cultural experience."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and requires no special motor skills to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a very simple, natural arm movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no special dexterity, making it very easy for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 30,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Tire",
      "title": "30_Tire.avi",
      "local_path": "data/gesture_videos/30_Tire.avi",
      "video": "assets/rating-videos/30_Tire.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as 'wheel' or 'circle' rather than specifically 'tire', though 'tire' is a logical fit.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could potentially be interpreted as 'wheel' rather than specifically 'tire', though contextually acceptable",
      "models": {
        "flash": {
          "description": "The actor performs a series of sweeping, circular arm motions, moving from high to low, mimicking the rotation of a wheel.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'wheel' or 'circle' rather than specifically 'tire', though 'tire' is a logical fit."
        },
        "pro": {
          "description": "The actor uses both hands to trace a large circle in the air in front of her body.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both arms overhead, then brings them down in a circular motion while rotating her wrists, mimicking the spinning of a wheel or tire. She ends with a slight forward lean and neutral expression.",
          "confidence": "high",
          "ambiguities": "Could potentially be interpreted as 'wheel' rather than specifically 'tire', though contextually acceptable"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The circular, rotating motion of the arms clearly represents the shape and movement of a tire."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly traces the round shape and large size characteristic of a tire, providing a strong visual representation of the object."
          },
          "qwen": {
            "score": 4,
            "rationale": "The circular arm and wrist motion strongly resembles the rotation of a tire, making the gesture visually representative of the word’s meaning."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture simulates the physical motion of a wheel turning, which provides a moderate sensorimotor link to the object."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical dimensions and spatial presence of a large, round object through the expansive arm movements."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the physical sensation of turning or rolling a wheel, engaging motor imagery related to vehicle movement."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 4,
            "rationale": "The arm movements are expansive and involve the full range of motion, making them visually prominent."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is large and expansive, using both arms to draw a prominent shape in the air, making it visually commanding."
          },
          "qwen": {
            "score": 4,
            "rationale": "The large, sweeping arm movements are pronounced and draw attention, enhancing memorability through dynamic motion."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains mostly neutral throughout; no strong emotional cues are conveyed to reinforce the concept of 'tire'."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, clear, and directly maps to the object, making it very easy to learn."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple to process while effectively conveying the core physical attribute (shape) of the target word."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is simple enough to be understood quickly but includes sufficient detail (wrist rotation) to convey the concept effectively."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Representing a wheel or tire through circular hand motions is a universally understood iconic gesture."
          },
          "pro": {
            "score": 5,
            "rationale": "Tracing a shape in the air to indicate an object's form is a highly familiar and universally understood communicative strategy."
          },
          "qwen": {
            "score": 4,
            "rationale": "Mimicking wheel rotation with hands is a common iconic gesture in Western contexts for representing tires or wheels."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very natural and requires no special coordination, making it easy for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "Drawing a large circle with both arms is a very natural, effortless movement that is easy for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, requires no special skill, and can be easily reproduced by learners of most ages and abilities."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 31,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Ring",
      "title": "31_Ring.avi",
      "local_path": "data/gesture_videos/31_Ring.avi",
      "video": "assets/rating-videos/31_Ring.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.857,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could potentially be interpreted as 'circle' or 'round' rather than specifically 'ring', though 'ring' is the most likely interpretation in context.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as 'ball', 'globe', or 'circle'; Resembles holding an invisible object rather than wearing jewelry; Lacks specific reference to a finger",
      "models": {
        "flash": {
          "description": "The actor holds their right hand up and makes a circular motion with their index finger, as if tracing the shape of a ring in the air.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'circle' or 'round' rather than specifically 'ring', though 'ring' is the most likely interpretation in context."
        },
        "pro": {
          "description": "The actor uses her right hand to simulate sliding a ring onto the ring finger of her left hand.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor brings both hands to the center of her torso, curving her fingers to touch or interlock briefly to form a circular shape, before returning to a neutral standing position.",
          "confidence": "medium",
          "ambiguities": "Could be interpreted as 'ball', 'globe', or 'circle'; Resembles holding an invisible object rather than wearing jewelry; Lacks specific reference to a finger"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The circular motion of the finger clearly and transparently depicts the shape of a ring."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a highly transparent visual representation of the action of putting on a ring, directly linking to the object."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture creates a circular shape which relates to the geometry of a ring, but it lacks the specific semantic feature of a finger band, making it look more like 'ball' or 'circle'."
          },
          "delta": 2
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It simulates the action of tracing a ring, which is a common way to represent the object, though it lacks the tactile sensation of wearing one."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly simulates the physical action and tactile experience of sliding a ring onto a finger."
          },
          "qwen": {
            "score": 3,
            "rationale": "The hand shaping evokes the tactile experience of holding a small, round object, providing moderate bodily engagement."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is small, localized to the hand, and relatively slow, making it somewhat subtle."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively small, constrained to the hands, and lacks expansive or rapid dynamics."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is small, contained within the torso, and relatively slow, lacking high visual prominence."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the concept of a ring."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly balances informativeness with ease of understanding."
          },
          "qwen": {
            "score": 4,
            "rationale": "The motor action is simple and uncomplicated, fitting well within a learning context despite semantic ambiguity."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Tracing a circle to represent a ring is a universally understood iconic gesture in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of placing a ring on the ring finger is a highly familiar and universally recognized gesture in Western culture."
          },
          "qwen": {
            "score": 2,
            "rationale": "This is not a conventional emblem for 'ring' in Western contexts, where pointing to the finger is the standard gesture."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and requires no special motor skills to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a simple, everyday hand movement that is very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is extremely simple and natural to reproduce, requiring minimal motor coordination."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 32,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Backpack",
      "title": "32_Backpack.avi",
      "local_path": "data/gesture_videos/32_Backpack.avi",
      "video": "assets/rating-videos/32_Backpack.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor mimics putting on a backpack by reaching back with both hands as if grabbing shoulder straps and pulling them down over the shoulders.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor places her hands near her upper chest and shoulders, then pulls them down slightly, mimicking the action of holding or adjusting the straps of a backpack.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands facing the camera and uses both hands to mime the action of putting on a backpack: she lifts her arms, bends her elbows, and pulls her hands down toward her shoulders as if sliding straps over them, then briefly holds the pose before returning to neutral.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a direct, transparent pantomime of the physical action of putting on a backpack, making the meaning immediately clear."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture highly transparently represents the object by mimicking the specific action of holding its straps."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly mimics the physical act of donning a backpack by simulating strap placement over the shoulders, offering a strong visual link to the word’s meaning."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture perfectly simulates the proprioceptive and motor experience of wearing a backpack."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture provides a very vivid simulation of the physical experience of wearing and interacting with a backpack."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement evokes the bodily sensation of lifting and adjusting a backpack onto one’s back, engaging motor memory associated with the object’s use."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively contained and not overly expansive."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively subtle and constrained to a small area near the chest and shoulders."
          },
          "qwen": {
            "score": 3,
            "rationale": "The motion is deliberate and visible but not exaggerated; it has moderate size and speed, sufficient to draw attention without being overly dynamic."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout, providing no emotional or affective cues to support memory encoding."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and optimally balances informativeness with ease of cognitive processing."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and directly tied to the function of the object, making it ideal for vocabulary learning without cognitive overload."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of putting on a backpack is a universal, everyday physical experience in Western and many other cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "Miming the holding of straps is a highly familiar and widely understood gesture for a backpack in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Miming the act of putting on a backpack is a widely recognized and culturally neutral iconic gesture in Western contexts, aligning with common experiential schemas."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very natural and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a very simple, natural movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can easily replicate this gesture using natural arm movements that mirror everyday actions, requiring no special skill or coordination."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 33,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Collection",
      "title": "33_Collection.avi",
      "local_path": "data/gesture_videos/33_Collection.avi",
      "video": "assets/rating-videos/33_Collection.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'gathering' or 'grouping', which are synonyms for 'collection', so the meaning is quite stable.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as the verb 'gather' rather than the noun 'collection'; Might be confused with 'group' or 'together'",
      "models": {
        "flash": {
          "description": "The actor stands still and makes a sweeping motion with both hands, moving them from the sides toward the center of her body, as if gathering objects together.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'gathering' or 'grouping', which are synonyms for 'collection', so the meaning is quite stable."
        },
        "pro": {
          "description": "The actor extends both arms to the sides and then sweeps them inward towards the center of her body, as if gathering multiple objects together.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands neutrally, then raises both hands and performs a gathering motion, reaching slightly outward and drawing hands inward toward the midline of the body, as if collecting scattered items into a central group.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as the verb 'gather' rather than the noun 'collection'; Might be confused with 'group' or 'together'"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The sweeping, gathering motion of the arms toward the center clearly represents the act of collecting or bringing items together."
          },
          "pro": {
            "score": 4,
            "rationale": "The sweeping motion of the arms bringing imaginary objects together clearly represents the act of collecting or forming a collection."
          },
          "qwen": {
            "score": 4,
            "rationale": "The inward gathering motion of the hands clearly mimics the semantic action of collecting items together."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical action of gathering objects, which is a strong sensorimotor representation of the concept of a collection."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly simulates the physical action of gathering multiple items into a single group or pile."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the physical sensation of reaching for and pulling objects into a pile or group."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is performed at a moderate speed and range."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is distinct and involves both arms moving across the body, but it remains moderate in speed and overall size."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and involves both arms, but is relatively contained within the personal space."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, focusing on her hands without conveying emotion."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a neutral, focused expression without strong emotional signaling."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and directly maps to the meaning of the word without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is straightforward, intuitive, and directly maps to the concept without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and cognitively lightweight for the target concept."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The act of gathering or collecting items with one's arms is a universal, easily understood physical action."
          },
          "pro": {
            "score": 4,
            "rationale": "The physical act of gathering is a widely understood and common metaphor for collecting things together."
          },
          "qwen": {
            "score": 4,
            "rationale": "The pantomime of gathering items is a widely recognized metaphor for collecting across Western contexts."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and natural, making it extremely easy for a learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The sweeping arm motion is very simple, natural, and effortless for a learner to mimic."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no fine motor skills, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 34,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Key",
      "title": "34_Key.avi",
      "local_path": "data/gesture_videos/34_Key.avi",
      "video": "assets/rating-videos/34_Key.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture is very brief and small, which might be missed if the viewer is not paying close attention.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without audio or context, the gesture could potentially be interpreted as 'lock' or 'open' rather than the object 'key' itself.",
      "models": {
        "flash": {
          "description": "The actor stands still, then performs a quick, small twisting motion with her hand as if turning a key in a lock.",
          "confidence": "high",
          "ambiguities": "The gesture is very brief and small, which might be missed if the viewer is not paying close attention."
        },
        "pro": {
          "description": "The actor extends her right arm and makes a twisting motion with her hand, simulating the action of turning a key in a lock.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor extends her right arm forward at shoulder height, forms a pinch grip as if holding a small object, and performs a distinct wrist rotation mimicking the action of turning a key in a lock.",
          "confidence": "high",
          "ambiguities": "Without audio or context, the gesture could potentially be interpreted as 'lock' or 'open' rather than the object 'key' itself."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The twisting motion is a highly transparent and conventional representation of the action of using a key."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a highly transparent and direct visual representation of the primary action associated with the object."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly depicts the functional use of a key (turning it) rather than its physical shape, establishing a strong semantic link."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture directly simulates the specific fine motor action required to operate a physical key."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly simulates the physical experience of grasping a small object and applying rotational force."
          },
          "qwen": {
            "score": 4,
            "rationale": "The wrist rotation and pinch grip effectively evoke the tactile and motor experience of manipulating a key."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is very small, localized to the wrist/hand, and lacks expansive or commanding dynamics."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, but localized primarily to the wrist and hand, making it moderate in overall size and dynamics."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is localized to the arm and wrist; it is clear but relatively small in scale compared to full-body gestures."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for a quick vocabulary demonstration."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the essence of the word without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple and cognitively straightforward, making it highly suitable for vocabulary association."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of turning a key is a universally recognized motor schema in Western cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "Pantomiming turning a key is a highly familiar and universally recognized gesture in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "The action of turning a key in a lock is a universally recognized and culturally familiar motor schema in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely simple and natural for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The motion is very natural, requires no special coordination, and is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires minimal dexterity, making it very easy for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 35,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Drawer",
      "title": "35_Drawer.avi",
      "local_path": "data/gesture_videos/35_Drawer.avi",
      "video": "assets/rating-videos/35_Drawer.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without context, the pulling motion could represent 'pull', 'open', or 'bring here'.",
      "models": {
        "flash": {
          "description": "The actor performs a single, quick pulling motion with one hand, simulating the act of opening a drawer.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right hand, mimes grasping a handle, and pulls her hand back towards her body as if opening a drawer.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor extends her left arm forward with a grasping hand shape, then pulls her hand back towards her hip, mimicking the action of pulling open a drawer handle.",
          "confidence": "high",
          "ambiguities": "Without context, the pulling motion could represent 'pull', 'open', or 'bring here'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a direct, transparent pantomime of the physical action of pulling open a drawer."
          },
          "pro": {
            "score": 5,
            "rationale": "The pulling motion directly mimics the action of opening a drawer, making the visual representation highly transparent."
          },
          "qwen": {
            "score": 4,
            "rationale": "The grasping and pulling motion directly mimics the primary physical interaction with a drawer."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It perfectly simulates the motor action of gripping and pulling a handle, engaging the learner's sensorimotor system."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly simulates the physical interaction of grasping a handle and pulling it towards oneself."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the tactile sensation of gripping a handle and the kinetic feeling of resistance while pulling."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and quick, making it moderately salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, but relatively constrained to a simple pulling motion with one arm."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is relatively small and subtle, lacking large or exaggerated dynamics that would grab strong visual attention."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the target word without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, straightforward, and perfectly captures the core action without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple, involving a single arm movement that is easy to process cognitively."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of opening a drawer is a universal, everyday physical experience."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of opening a drawer is a common, everyday experience, making the gesture highly recognizable."
          },
          "qwen": {
            "score": 5,
            "rationale": "Pulling a handle to open a container is a highly conventional and universally recognized action in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The single-arm pulling motion is very natural, effortless, and easy for anyone to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires minimal effort or coordination for a learner to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 36,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Sunglasses",
      "title": "36_Sunglasses.avi",
      "local_path": "data/gesture_videos/36_Sunglasses.avi",
      "video": "assets/rating-videos/36_Sunglasses.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "The gesture could also be interpreted as 'glasses' or 'binoculars', but fits 'sunglasses' perfectly.",
      "qwen_ambiguities": "The gesture represents 'glasses' generally and lacks specific markers (like shielding eyes) to distinguish 'sunglasses' specifically.",
      "models": {
        "flash": {
          "description": "The actor brings both hands up to her face, forming circles with her fingers around her eyes to mimic the shape and placement of sunglasses.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor brings both hands up to her face, forming circles with her thumbs and index fingers, and places them over her eyes like lenses.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'glasses' or 'binoculars', but fits 'sunglasses' perfectly."
        },
        "qwen": {
          "description": "The actor raises both hands to her face, forming circles with her thumbs and index fingers over her eyes to mimic the shape of glasses frames, then lowers her hands back to her sides.",
          "confidence": "high",
          "ambiguities": "The gesture represents 'glasses' generally and lacks specific markers (like shielding eyes) to distinguish 'sunglasses' specifically."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a direct, iconic representation of wearing sunglasses, clearly mimicking the shape and position of the frames on the face."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture highly transparently represents the shape and placement of sunglasses on the face."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture creates a direct visual map of the object by shaping hands like lenses over the eyes."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "It simulates the physical act of placing or wearing sunglasses, engaging the learner's bodily schema related to the object."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement strongly evokes the physical action of putting on and wearing glasses."
          },
          "qwen": {
            "score": 5,
            "rationale": "Strongly evokes the tactile and motor experience of putting on eyewear."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively contained and simple in its execution."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and distinct, but relatively contained and moderate in speed and size."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is distinct and centrally located, drawing immediate attention to the face."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is neutral and functional, lacking specific affective cues like squinting against bright light."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly balances informativeness with ease of understanding."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor plan is simple and symmetrical, imposing minimal cognitive load."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "This is a universally recognized iconic gesture for sunglasses in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "Forming circles over the eyes is a widely recognized and highly familiar gesture for glasses in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "This is a highly conventionalized gesture for glasses or vision in Western culture."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to reproduce."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a very simple motor action that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is physically effortless and intuitive for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 37,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Mirror",
      "title": "37_Mirror.avi",
      "local_path": "data/gesture_videos/37_Mirror.avi",
      "video": "assets/rating-videos/37_Mirror.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as 'looking at a window' or 'waving', but in context, it clearly represents a mirror.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could potentially be interpreted as 'stop' or 'frame' without context, but the specific hand orientation favors 'mirror'.",
      "models": {
        "flash": {
          "description": "The actor stands facing forward, raises her right hand to her face level with the palm facing outward, and then moves it slightly as if looking into or touching a reflective surface.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'looking at a window' or 'waving', but in context, it clearly represents a mirror."
        },
        "pro": {
          "description": "The actor raises her right hand, palm facing her face, and looks into it as if holding and looking into a hand mirror.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The woman raises both hands to shoulder/face level with palms facing forward and fingers extended, mimicking the act of looking into a mirror or framing a reflection, before lowering them back down.",
          "confidence": "high",
          "ambiguities": "Could potentially be interpreted as 'stop' or 'frame' without context, but the specific hand orientation favors 'mirror'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture mimics the action of looking into or touching a mirror, which is a clear iconic representation of the word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture highly transparently represents the semantics by mimicking the action of holding and looking into a hand mirror."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly mimics the action of looking into a mirror or the frame of a mirror, creating a strong visual link to the concept of reflection."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement simulates the physical interaction one has with a mirror, engaging the learner's sensorimotor experience of reflection."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture strongly evokes the physical action of grasping a mirror and the perceptual experience of looking at one's reflection."
          },
          "qwen": {
            "score": 4,
            "rationale": "It evokes the bodily experience of checking one's appearance or facing a reflective surface, engaging the learner's own sense of spatial orientation."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though relatively contained and not overly expansive."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is moderate in size and speed, consisting of a simple arm raise and a brief hold."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is deliberate and clear, involving both arms, but is relatively contained in space and speed."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's facial expression is mostly neutral, showing only a slight focus on the imaginary mirror."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional emotional cues."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the concept of a mirror."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly balances informativeness with ease of processing."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single fluid motion that is easy to process and associate with the word."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of looking at one's reflection is a universal human experience, making the gesture highly familiar."
          },
          "pro": {
            "score": 5,
            "rationale": "Mimicking looking into a hand mirror by looking at one's palm is a highly familiar and widely understood gesture."
          },
          "qwen": {
            "score": 5,
            "rationale": "Using hands to frame the face or mimic looking into a glass surface is a highly conventional and recognizable mime for 'mirror' in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a very simple arm movement that is effortless and natural for anyone to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no special dexterity, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 38,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Tram",
      "title": "38_Tram.avi",
      "local_path": "data/gesture_videos/38_Tram.avi",
      "video": "assets/rating-videos/38_Tram.mp4",
      "complete": true,
      "max_abs_delta": 2.667,
      "mean_abs_delta": 1.143,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture is abstract and does not clearly represent the concept of a tram, making it difficult to interpret without the label.",
      "pro_ambiguities": "The gesture could also represent riding a bus or subway, as the action is common to various forms of public transport.",
      "qwen_ambiguities": "Gesture could be misinterpreted as signaling 'stop', 'victory', or 'attention' rather than referencing a tram.; No contextual cues (e.g., sound, props, or additional movements) clarify the intended link to 'tram'.",
      "models": {
        "flash": {
          "description": "The actor stands still and raises her right arm straight up, then brings it back down to her side.",
          "confidence": "high",
          "ambiguities": "The gesture is abstract and does not clearly represent the concept of a tram, making it difficult to interpret without the label."
        },
        "pro": {
          "description": "The actor raises her right arm and holds her hand in a fist above her head, simulating holding onto an overhead strap or rail.",
          "confidence": "high",
          "ambiguities": "The gesture could also represent riding a bus or subway, as the action is common to various forms of public transport."
        },
        "qwen": {
          "description": "The actor stands still, raises her right arm straight up with a closed fist, holds it briefly, then lowers it back down. No other body movement or facial expression is used.",
          "confidence": "high",
          "ambiguities": "Gesture could be misinterpreted as signaling 'stop', 'victory', or 'attention' rather than referencing a tram.; No contextual cues (e.g., sound, props, or additional movements) clarify the intended link to 'tram'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture of raising an arm vertically does not visually resemble a tram or its movement."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly depicts the action of a passenger holding an overhead strap, which is strongly associated with riding a tram."
          },
          "qwen": {
            "score": 1,
            "rationale": "The gesture of raising a fist vertically has no visual resemblance to a tram (a rail vehicle), its motion, structure, or function."
          },
          "delta": 2
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "The movement does not evoke any physical interaction or action associated with riding or operating a tram."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly simulates the physical action and posture of holding onto a handle while standing in a moving vehicle."
          },
          "qwen": {
            "score": 1,
            "rationale": "No bodily action or perceptual experience related to riding, operating, or observing a tram is evoked by the static arm raise."
          },
          "delta": 2.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is simple and vertical, lacking the dynamic or expansive quality needed to be highly salient."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement consists of a simple, relatively slow raising of one arm, without complex or expansive dynamics."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is slow and minimal — only one arm moves in a simple vertical path — lacking dynamism or visual prominence."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor’s face remains neutral throughout; no emotional cue is conveyed to support meaning or engagement."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 3,
            "rationale": "The gesture is simple to perform, but it is not informative or relevant to the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly balances informativeness with ease of comprehension."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is extremely simple motorically, which may aid reproducibility but fails to convey semantic content relevant to 'tram'."
          },
          "delta": 1.333
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 1,
            "rationale": "This movement is not a recognized cultural gesture for a tram."
          },
          "pro": {
            "score": 4,
            "rationale": "The action of holding an overhead strap is a widely recognized behavior associated with public transportation in many cultures."
          },
          "qwen": {
            "score": 1,
            "rationale": "Raising a fist vertically is not culturally associated with trams in Western contexts; it may signal protest, victory, or greeting — none relevant here."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "Raising an arm and making a fist is a very natural and effortless movement for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture requires no coordination or skill — any learner can easily replicate raising an arm with a closed fist."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 39,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Daily Newspaper",
      "title": "39_DailyNewspaper.avi",
      "local_path": "data/gesture_videos/39_DailyNewspaper.avi",
      "video": "assets/rating-videos/39_DailyNewspaper.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.857,
      "flash_confidence": "medium",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is so minimal that it could be interpreted as holding any small object, not specifically a newspaper.; The lack of a clear 'reading' motion makes the semantic link to 'newspaper' weak.",
      "pro_ambiguities": "The gesture could potentially be interpreted as opening a map or a large book.",
      "qwen_ambiguities": "Gesture could represent any flat object (tray, paper, tablet, etc.); No contextual cue (e.g., mimicking reading or folding) to disambiguate toward 'newspaper'; Lack of facial or vocal emphasis reduces semantic anchoring",
      "models": {
        "flash": {
          "description": "The actor performs a brief, subtle motion with her right hand, appearing to mimic the act of holding or flipping through a thin object, but the movement is very small and lacks clear definition.",
          "confidence": "medium",
          "ambiguities": "The gesture is so minimal that it could be interpreted as holding any small object, not specifically a newspaper.; The lack of a clear 'reading' motion makes the semantic link to 'newspaper' weak."
        },
        "pro": {
          "description": "The actor holds her left arm across her chest and moves her right arm outwards from the left hand, simulating the action of opening a large folded newspaper.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as opening a map or a large book."
        },
        "qwen": {
          "description": "The actor stands still, then extends her right arm horizontally to the side with palm down, as if holding or presenting a flat object. She holds this pose briefly before returning to neutral stance. No facial expression change is observed.",
          "confidence": "medium",
          "ambiguities": "Gesture could represent any flat object (tray, paper, tablet, etc.); No contextual cue (e.g., mimicking reading or folding) to disambiguate toward 'newspaper'; Lack of facial or vocal emphasis reduces semantic anchoring"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 2,
            "rationale": "The gesture is too subtle and lacks the clear, expansive motion required to represent the act of reading or holding a newspaper."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly mimics the physical action of opening a broadsheet newspaper."
          },
          "qwen": {
            "score": 2,
            "rationale": "The extended arm with palm down may suggest holding a flat object like a newspaper, but lacks specificity—could also represent a tray, board, or abstract concept. Weak visual link to 'newspaper' without additional cues (e.g., folding, reading motion)."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 2,
            "rationale": "There is a faint suggestion of holding something, but it is not distinct enough to evoke a strong sensorimotor experience of reading a newspaper."
          },
          "pro": {
            "score": 4,
            "rationale": "Evokes the bodily experience of holding and unfolding a large paper object."
          },
          "qwen": {
            "score": 2,
            "rationale": "Minimal bodily simulation; the gesture does not evoke actions typically associated with newspapers (e.g., unfolding, turning pages, reading). The static hold offers little kinesthetic engagement."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 1,
            "rationale": "The movement is very constrained, small, and lacks the dynamic quality needed to be visually salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and pronounced but moderate in speed and expansiveness."
          },
          "qwen": {
            "score": 2,
            "rationale": "Movement is slow and limited to one arm extension and retraction. Lacks dynamic range or emphasis that would draw attention or aid memory encoding."
          },
          "delta": 1.333
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 1,
            "rationale": "Facial expression remains neutral throughout. No affective signal is conveyed to reinforce meaning or engage learner emotion."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 3,
            "rationale": "The gesture is simple, but it is perhaps too simple to effectively convey the specific meaning of 'daily newspaper'."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is simple, direct, and easy to process without being overly complex."
          },
          "qwen": {
            "score": 4,
            "rationale": "Gesture is simple and easy to parse cognitively. However, its simplicity comes at the cost of semantic clarity for the target word."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 2,
            "rationale": "The gesture is not a standard or recognizable cultural emblem for reading a newspaper."
          },
          "pro": {
            "score": 4,
            "rationale": "The action of opening a newspaper is a widely recognized everyday action."
          },
          "qwen": {
            "score": 3,
            "rationale": "In Western contexts, extending an arm palm-down can imply offering or displaying something flat, which may loosely align with handing out or showing a newspaper—but it’s not a conventional emblem for ‘newspaper’ specifically."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and physically easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very natural, requires no special coordination, and is effortless to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Extremely easy to reproduce: single-arm extension with no fine motor control required. Learners of all ages and abilities could mimic it effortlessly."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 40,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Telephone",
      "title": "40_Telephone.avi",
      "local_path": "data/gesture_videos/40_Telephone.avi",
      "video": "assets/rating-videos/40_Telephone.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor performs a classic pantomime gesture of holding a telephone receiver to their ear using their hand.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right hand to her ear with the thumb pointing towards the ear and the pinky towards the mouth, mimicking holding a telephone receiver.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right hand to her right ear with her thumb and pinky finger extended while curling the middle fingers, mimicking the shape of a traditional telephone receiver, then lowers her arm back to her side.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a highly transparent and iconic representation of using a traditional telephone handset."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a highly transparent and universally recognized visual representation of holding a telephone."
          },
          "qwen": {
            "score": 5,
            "rationale": "The hand shape held against the ear is a direct visual mimicry of holding a telephone receiver, making the semantic link extremely transparent."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It directly simulates the physical action of holding a phone to the ear, evoking strong sensorimotor associations."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly simulates the physical action and bodily experience of holding a phone to one's ear to listen and speak."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture strongly evokes the physical experience and bodily action of making a phone call, engaging auditory and motor schemas."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively simple and contained within a small space."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively subtle and constrained, involving a simple raising of the hand to the head without expansive dynamics."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct but moderate in amplitude and speed; it is functional and precise rather than expansive or dramatic."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a neutral to slightly focused expression, providing minimal affective information beyond attention to the task."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is extremely simple, direct, and perfectly balances informativeness with ease of understanding."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture involves a single, simple hand shape and arm movement, offering an optimal balance of simplicity and semantic clarity for learners."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "This is a universally recognized emblem for a telephone in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "This specific hand shape and movement is a highly familiar and widely used emblem for a telephone in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "This is a widely recognized emblematic gesture in Western culture, universally understood to represent a phone or the act of calling."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely easy and natural for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very natural, requires minimal effort, and is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor action is natural and effortless, requiring no complex coordination, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 41,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Plate",
      "title": "41_Plate.avi",
      "local_path": "data/gesture_videos/41_Plate.avi",
      "video": "assets/rating-videos/41_Plate.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The circular motion could potentially be interpreted as a bowl or a generic round object, but in context, it strongly suggests a plate.",
      "pro_ambiguities": "The gesture could potentially be interpreted as 'bowl' or 'serving', but 'plate' is a very strong fit given the flat hand position.",
      "qwen_ambiguities": "The right hand touching near the left wrist initially resembles the sign for 'watch' or 'time'.; It is unclear if the right hand is tracing a circle (shape) or simply holding the wrist/hand.",
      "models": {
        "flash": {
          "description": "The actor makes a circular motion with her hand, as if tracing the rim of a plate, then brings her hands together as if holding a plate.",
          "confidence": "high",
          "ambiguities": "The circular motion could potentially be interpreted as a bowl or a generic round object, but in context, it strongly suggests a plate."
        },
        "pro": {
          "description": "The actor brings both hands together in front of her torso, palms facing upwards and fingers slightly curved, simulating holding a flat, round object.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'bowl' or 'serving', but 'plate' is a very strong fit given the flat hand position."
        },
        "qwen": {
          "description": "The actor extends her left arm with the palm facing up, then brings her right hand to touch or hold the left hand/wrist area, miming the action of holding or indicating a flat, round object.",
          "confidence": "medium",
          "ambiguities": "The right hand touching near the left wrist initially resembles the sign for 'watch' or 'time'.; It is unclear if the right hand is tracing a circle (shape) or simply holding the wrist/hand."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The circular hand motion clearly mimics the shape of a plate, making the iconic relationship quite transparent."
          },
          "pro": {
            "score": 4,
            "rationale": "The flat, open hands clearly represent the shape and function of a plate."
          },
          "qwen": {
            "score": 4,
            "rationale": "The flat, palm-up left hand is a strong visual symbol for a plate, and the two-handed interaction suggests holding a flat object."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical act of tracing the shape and holding a plate, engaging motor imagery related to interacting with the object."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture provides a strong simulation of physically holding or carrying a plate."
          },
          "qwen": {
            "score": 4,
            "rationale": "The posture evokes the haptic experience of balancing or holding a plate in one's hands."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is subtle, slow, and kept close to the body, lacking expansive dynamics."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is small, contained near the waist, and lacks expansive or rapid dynamics."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple, direct, and easy to process, making it optimal for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple and cognitively easy to map to the concrete noun."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Tracing a circular shape to represent a plate is a universally understood and common iconic gesture."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture of holding a flat object in this manner is easily recognizable and common."
          },
          "qwen": {
            "score": 4,
            "rationale": "Holding an imaginary object with one or two hands is a universally recognized representational gesture."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to reproduce."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, natural, and effortless for a learner to copy."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, requires no dexterity, and is very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 42,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Carpet",
      "title": "42_Carpet.avi",
      "local_path": "data/gesture_videos/42_Carpet.avi",
      "video": "assets/rating-videos/42_Carpet.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as cleaning or sweeping a floor, but in the context of 'carpet', it is clearly understood as smoothing.",
      "pro_ambiguities": "The gesture could also be interpreted more generally as 'floor' or 'ground'.",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor stands upright, bends forward slightly at the waist, and sweeps both arms in a wide, flat arc across the floor area in front of her, mimicking the act of smoothing out a carpet.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as cleaning or sweeping a floor, but in the context of 'carpet', it is clearly understood as smoothing."
        },
        "pro": {
          "description": "The actor bends slightly forward and sweeps both arms outwards and downwards, indicating a wide, flat area on the floor.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted more generally as 'floor' or 'ground'."
        },
        "qwen": {
          "description": "The actor bends forward at the waist, extends both arms downward with palms facing the floor, and sweeps them outward horizontally to indicate a flat surface on the ground, then returns to standing.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The sweeping motion across the floor clearly mimics the action of laying out or smoothing a carpet."
          },
          "pro": {
            "score": 4,
            "rationale": "The sweeping motion near the floor clearly represents a flat, wide object covering the ground, visually resembling a carpet."
          },
          "qwen": {
            "score": 4,
            "rationale": "The sweeping motion of the hands low to the ground clearly mimics the shape and placement of a carpet on a floor."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture effectively simulates the physical interaction of smoothing a flat surface, which is highly relevant to the concept of a carpet."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture simulates the physical act of smoothing out or indicating the spatial extent of a carpet on the floor."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the physical action of smoothing out or laying down a rug, engaging the learner's sense of touch and spatial orientation."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively contained and performed at a moderate speed."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement involves bending the torso and spreading both arms wide, creating a moderately salient visual cue."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is deliberate and covers a moderate horizontal space, but it is relatively slow and contained within the lower body frame."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional emotional cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the semantic meaning of the word without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the core physical attribute of the object without unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single bending and sweeping motion that is easy to process cognitively while remaining descriptive."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The action of smoothing a rug or carpet is a common, universally understood physical activity."
          },
          "pro": {
            "score": 4,
            "rationale": "Using hands to outline the shape and location of an object on the ground is a common and easily understood communicative strategy."
          },
          "qwen": {
            "score": 5,
            "rationale": "Indicating a floor-level object by pointing or sweeping hands near the ground is a universally understood deictic and iconic convention."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very natural and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, requires no special coordination, and is effortless for learners to enact."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is natural and requires no special dexterity, though the bending motion might be slightly less effortless for some than a standing gesture."
          },
          "delta": 0.667
        }
      }
    },
    {
      "index": 43,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Bandage",
      "title": "43_Bandage.avi",
      "local_path": "data/gesture_videos/43_Bandage.avi",
      "video": "assets/rating-videos/43_Bandage.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as indicating general pain or injury (e.g., 'hurt knee') rather than specifically a bandage.",
      "models": {
        "flash": {
          "description": "The actor bends down and makes a wrapping motion around her knee with both hands, simulating the application of a bandage.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor bends down and uses both hands to simulate wrapping something around her knee.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor bends forward at the waist and uses both hands to make a wrapping motion around her right lower leg/knee area, simulating the application of a bandage.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as indicating general pain or injury (e.g., 'hurt knee') rather than specifically a bandage."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The wrapping motion around the knee is a highly transparent and iconic representation of applying a bandage to an injury."
          },
          "pro": {
            "score": 4,
            "rationale": "The wrapping motion around the knee clearly visually represents the application of a bandage."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a direct pantomime of the action; wrapping hands around a limb visually represents the act of bandaging perfectly."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture directly simulates the physical action of wrapping a bandage, engaging strong sensorimotor imagery."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture strongly evokes the physical action of holding and wrapping a bandage tightly around a joint."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement strongly evokes the tactile sensation of wrapping and the pressure of a bandage being applied to a body part."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively small and contained within the lower body area."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves bending down and circular hand motions, making it moderately salient in terms of movement."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture is clear and distinct due to the bending of the torso, but the hand movement itself is relatively small and contained."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral and does not convey any specific emotion."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused expression throughout the gesture, without conveying pain or distress."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The wrapping motion is straightforward and optimally balances simplicity with the informative action of applying a bandage."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single continuous action that is easy to process and remember."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The act of wrapping a bandage is a universally understood action in Western contexts."
          },
          "pro": {
            "score": 4,
            "rationale": "Simulating the wrapping of an injury is a widely understood and common action in Western culture."
          },
          "qwen": {
            "score": 5,
            "rationale": "Wrapping hands around an injured area is a highly familiar and universal gesture for indicating injury or bandaging."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is natural, requires no special skill, and is effortless for learners to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no special skill or flexibility to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 44,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Tent",
      "title": "44_Tent.avi",
      "local_path": "data/gesture_videos/44_Tent.avi",
      "video": "assets/rating-videos/44_Tent.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.19,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "Could potentially be interpreted as a house or a roof, but in the context of the word 'tent', it is clear.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor brings their hands together above their head, forming a triangular shape with their arms and hands to represent the roof of a tent.",
          "confidence": "high",
          "ambiguities": "Could potentially be interpreted as a house or a roof, but in the context of the word 'tent', it is clear."
        },
        "pro": {
          "description": "The actor brings her hands up and touches her fingertips together to form an inverted V or triangle shape, resembling the roof of a tent.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands facing the camera, raises both hands to chest level, and brings the fingertips of each hand together to form a triangular peak shape in front of her face, then lowers her hands back down.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The triangular shape formed by the arms and hands is a highly transparent and iconic representation of a tent's structure."
          },
          "pro": {
            "score": 5,
            "rationale": "The inverted V shape formed by the hands is a highly transparent visual representation of a traditional A-frame tent."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture forms a clear triangular peak with the hands, directly mimicking the iconic roofline or silhouette of a tent."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture simulates the shape of the object rather than the action of setting one up, providing moderate sensorimotor imagery."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture primarily traces the static shape of the object rather than evoking a strong bodily action or physical interaction like pitching a tent."
          },
          "qwen": {
            "score": 4,
            "rationale": "The action simulates the structural shape of a tent, evoking the spatial concept of a shelter with a peaked top, though it does not simulate the act of pitching one."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though relatively contained within the upper body space."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is moderate in size and speed, bringing the hands from the sides to the center of the body."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is moderate in size and speed; the hands move clearly to form the shape but the motion is contained within the upper body without large expansive gestures."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional emotional cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly balances informativeness with ease of understanding."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, requiring only basic hand coordination to form a triangle, making it highly appropriate for vocabulary learning."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Using hands to form a roof shape is a universally understood iconic gesture in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "Using the hands to form a triangle or roof shape is a widely recognized and common way to represent a tent or shelter in Western culture."
          },
          "qwen": {
            "score": 5,
            "rationale": "Using hands to form a roof or triangle shape is a widely recognized and conventional way to represent a house or tent in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "Bringing the fingertips together to form a triangle is a very natural, simple, and effortless movement for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is very natural and effortless to reproduce, requiring no complex motor skills or flexibility."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 45,
      "collection": "gesture",
      "concreteness": "concrete",
      "target_word": "Cigarette",
      "title": "45_Cigarette.avi",
      "local_path": "data/gesture_videos/45_Cigarette.avi",
      "video": "assets/rating-videos/45_Cigarette.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without context, the outward arm motion could be misinterpreted as pointing or dismissing rather than exhaling smoke.",
      "models": {
        "flash": {
          "description": "The actor holds their hand in a pinch-like shape near their mouth, mimicking the action of holding a cigarette, then moves it away.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor brings her index and middle fingers to her lips as if holding a cigarette, pauses briefly, and then moves her hand away to the side.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right hand to her mouth, pinching her thumb and index finger together as if holding a cigarette. She then extends her arm outward and slightly upward, mimicking the motion of exhaling smoke or flicking ash away.",
          "confidence": "high",
          "ambiguities": "Without context, the outward arm motion could be misinterpreted as pointing or dismissing rather than exhaling smoke."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a direct, iconic representation of the act of holding and smoking a cigarette."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a highly transparent and universally recognized visual representation of smoking a cigarette."
          },
          "qwen": {
            "score": 4,
            "rationale": "The hand-to-mouth pinch and outward arm extension clearly mimic the act of smoking, visually representing the target word with strong iconicity."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It perfectly simulates the physical action of holding a cigarette between the fingers and bringing it to the mouth."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly simulates the physical action and bodily experience of holding and smoking a cigarette."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the physical sensation of holding and smoking a cigarette, including the inhalation/exhalation motion, creating vivid sensorimotor imagery."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and contained."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, but relatively constrained in size and speed."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is moderate in size and speed — not overly dramatic but sufficiently pronounced to draw attention without being distracting."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains largely neutral; no clear emotional cue (e.g., pleasure, disgust, relaxation) is conveyed alongside the gesture."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the essence of the word without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and cognitively lightweight — ideal for vocabulary learning contexts where clarity and ease of encoding are prioritized."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The gesture for smoking is universally recognized in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "This specific gesture is a highly familiar and widely used emblem for smoking in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture aligns with widely recognized Western conventions for depicting smoking, making it highly familiar across cultures exposed to media portrayals of cigarettes."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely easy and natural for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement involves a simple, everyday motor action that is very natural and effortless to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can easily reproduce this gesture using one hand with minimal coordination — natural and effortless to enact."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 46,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Cancellation",
      "title": "46_Cancellation.avi",
      "local_path": "data/gesture_videos/46_Cancellation.avi",
      "video": "assets/rating-videos/46_Cancellation.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "The gesture could also be interpreted more broadly as 'no', 'reject', or 'swipe away'.",
      "qwen_ambiguities": "The gesture could also be interpreted as 'cut', 'stop', 'decision', or 'no' without specific context.",
      "models": {
        "flash": {
          "description": "The actor performs a quick, sharp 'X' motion with her right hand in the air, moving from top-left to bottom-right and then top-right to bottom-left.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right arm and makes a single horizontal swiping motion from left to right, resembling crossing something out.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted more broadly as 'no', 'reject', or 'swipe away'."
        },
        "qwen": {
          "description": "The actor stands neutrally, then raises her right hand and executes a sharp, downward chopping motion with her hand, simulating a cutting action, before returning to rest.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'cut', 'stop', 'decision', or 'no' without specific context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The 'X' gesture is a universally recognized symbol for crossing something out, deleting, or cancelling."
          },
          "pro": {
            "score": 4,
            "rationale": "The horizontal swipe visually represents the action of crossing something out or removing it, which aligns well with the concept of cancellation."
          },
          "qwen": {
            "score": 4,
            "rationale": "The chopping motion metaphorically represents cutting or severing a connection, which aligns well with the concept of cancellation."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement mimics the physical action of striking through a document or item to cancel it."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical action of striking through text on a page or pushing an object away to reject it."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the physical sensation of striking or cutting through an object, creating a strong bodily association with ending something."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively compact and quick."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is a single, clear, and moderate-speed arm swipe that is distinct but not overly expansive."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is sharp, distinct, and contrasts clearly with the static posture, drawing immediate visual attention."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a largely neutral, focused expression with minimal emotional signaling accompanying the gesture."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for the concept of cancellation."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly balances informativeness with ease of cognitive processing."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a simple, single-plane movement that is cognitively and motorically undemanding for learners."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The 'X' mark is a highly familiar cultural symbol for cancellation in Western contexts."
          },
          "pro": {
            "score": 4,
            "rationale": "The 'crossing out' or 'waving away' gesture is commonly understood in Western cultures to signify cancellation, negation, or rejection."
          },
          "qwen": {
            "score": 5,
            "rationale": "The hand-chop gesture is a widely recognized emblem in Western cultures for stopping, cutting, or negating an action."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very easy to replicate as it involves a basic, common arm movement."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a simple, single-arm movement that is very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no complex coordination, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 47,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Alternative",
      "title": "47_Alternative.avi",
      "local_path": "data/gesture_videos/47_Alternative.avi",
      "video": "assets/rating-videos/47_Alternative.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.095,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'choice', 'options', or 'comparison', which are closely related to 'alternative'.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The gesture closely resembles a shrug indicating 'I don't know' or uncertainty, which might confuse the specific meaning of 'alternative' versus 'unsure'.",
      "models": {
        "flash": {
          "description": "The actor holds both hands out to the sides with palms facing upward, alternating her gaze between the left and right hand, suggesting a choice between two options.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'choice', 'options', or 'comparison', which are closely related to 'alternative'."
        },
        "pro": {
          "description": "The actor raises her left hand palm up, looks at it, then lowers it while raising her right hand palm up and looking at it, as if presenting two different options.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands neutrally, then raises both hands to waist level with elbows bent and palms facing upward, moving them slightly outward as if weighing two options or presenting a choice, before returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": "The gesture closely resembles a shrug indicating 'I don't know' or uncertainty, which might confuse the specific meaning of 'alternative' versus 'unsure'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture clearly represents the concept of having two distinct options or paths to choose from, which is the core meaning of 'alternative'."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture metaphorically represents two distinct choices by presenting them sequentially in opposite hands."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture of holding palms up and outward is a conventional metaphor for weighing options or presenting distinct choices, which aligns directly with the concept of an alternative."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It simulates the physical act of weighing or presenting two different choices, which is a common cognitive-motor metaphor."
          },
          "pro": {
            "score": 3,
            "rationale": "Evokes the physical action of holding or weighing two different objects in the hands."
          },
          "qwen": {
            "score": 4,
            "rationale": "Evokes the physical sensation of holding or balancing two separate objects in the hands, simulating the act of comparing possibilities."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and distinct, alternating between the left and right sides, but remains moderate in size and speed."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct but relatively contained within the personal space, lacking high speed or large amplitude."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 2,
            "rationale": "The facial expression is neutral to slightly thoughtful, providing minimal emotional context."
          },
          "pro": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, with a slight shift in gaze to follow the hands, indicating focus rather than emotion."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression remains largely neutral with perhaps a slight look of consideration, providing minimal affective reinforcement."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the abstract concept of an alternative."
          },
          "pro": {
            "score": 5,
            "rationale": "The simple alternating hand movement perfectly captures the concept of 'alternative' without unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor pattern is extremely simple and cognitively lightweight, making it ideal for quick association with a vocabulary word."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The 'this or that' gesture is a universally understood communicative convention in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "This 'on the one hand, on the other hand' gesture is a highly familiar and widely used convention for presenting options in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "The 'weighing scales' or 'palms up' gesture is highly recognizable in Western contexts as a symbol for choices, options, or uncertainty."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves basic arm and hand movements that are very easy and natural for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture requires minimal coordination and effort, making it effortless for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 48,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Requirement",
      "title": "48_Requirement.avi",
      "local_path": "data/gesture_videos/48_Requirement.avi",
      "video": "assets/rating-videos/48_Requirement.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.572,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is highly abstract and does not clearly map to the meaning of 'requirement', potentially leading to confusion about what the gesture is intended to represent.",
      "pro_ambiguities": "The gesture of raising both hands could easily be interpreted as surrender, reaching for something, or indicating height, rather than specifically denoting a requirement.",
      "qwen_ambiguities": "The gesture strongly resembles 'surrender' or 'volunteering' rather than 'requirement'.; It is unclear if the gesture implies a 'high standard' metaphor or a command.",
      "models": {
        "flash": {
          "description": "The actor stands still, then raises both arms straight up above the head with palms facing forward, then lowers them back to the sides.",
          "confidence": "high",
          "ambiguities": "The gesture is highly abstract and does not clearly map to the meaning of 'requirement', potentially leading to confusion about what the gesture is intended to represent."
        },
        "pro": {
          "description": "The actor raises both arms straight up above her head with palms facing forward, holds the position briefly, and then lowers her arms to her sides.",
          "confidence": "high",
          "ambiguities": "The gesture of raising both hands could easily be interpreted as surrender, reaching for something, or indicating height, rather than specifically denoting a requirement."
        },
        "qwen": {
          "description": "The actor stands facing forward and rapidly raises both arms straight up above her head with palms open and facing forward, holds the position briefly, and then lowers them back to her sides.",
          "confidence": "medium",
          "ambiguities": "The gesture strongly resembles 'surrender' or 'volunteering' rather than 'requirement'.; It is unclear if the gesture implies a 'high standard' metaphor or a command."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture of raising arms above the head does not visually represent the abstract concept of a 'requirement'."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture of raising arms high might abstractly represent a standard or level that must be met, but the visual resemblance to the concept of a 'requirement' is weak."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture of raising hands does not visually resemble the abstract concept of a 'requirement'. It may metaphorically suggest a 'high standard' or a command, but the link is weak and ambiguous."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "There is no clear bodily action or physical interaction associated with the concept of a requirement."
          },
          "pro": {
            "score": 2,
            "rationale": "The action involves reaching upwards, which could weakly simulate striving to meet a standard, but it lacks a strong physical interaction directly related to the word's meaning."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement evokes reaching or surrendering rather than the experience of needing something or setting a condition. There is weak bodily connection to the word's semantics."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and involves the full range of arm motion, making it moderately salient."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is large and expansive, involving both arms extending fully upwards, making it visually prominent and clear."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is large, vertical, and rapid, making it visually prominent and attention-grabbing against the static background."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video, providing no emotional cues."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral throughout the gesture, providing no additional affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 3,
            "rationale": "The movement is simple and easy to perform, though it lacks a clear semantic connection to the target word."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is motorically simple and easy to process, though its cognitive connection to the meaning requires some abstract interpretation."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple, involving a single bilateral movement that is easy to process and remember."
          },
          "delta": 1.333
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 1,
            "rationale": "This movement is not a conventional or culturally recognized gesture for the word 'requirement'."
          },
          "pro": {
            "score": 2,
            "rationale": "While raising hands is a common physical action, it is not a conventional or highly familiar gesture specifically used to convey the concept of a 'requirement' in Western culture."
          },
          "qwen": {
            "score": 2,
            "rationale": "While raising hands is a familiar gesture (e.g., surrender, volunteering), it is not a conventional or recognized emblem for the word 'requirement' in Western culture."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and physically easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement of raising both arms is very simple, natural, and effortless for a learner to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and effortless, requiring no fine motor skills or complex coordination, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 49,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Arrival",
      "title": "49_Arrival.avi",
      "local_path": "data/gesture_videos/49_Arrival.avi",
      "video": "assets/rating-videos/49_Arrival.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.762,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture is so minimal that it could also be interpreted as 'step', 'move', or 'forward' rather than specifically 'arrival'.",
      "pro_ambiguities": "The gesture is very subtle and could be interpreted simply as 'stepping' or 'stopping' rather than the specific concept of 'arrival'.",
      "qwen_ambiguities": "Without the target word, the gesture could be interpreted simply as 'walk' or 'come here'.",
      "models": {
        "flash": {
          "description": "The actor stands still, then takes a single step forward with one foot, shifting her weight slightly, then returns to a neutral standing position.",
          "confidence": "high",
          "ambiguities": "The gesture is so minimal that it could also be interpreted as 'step', 'move', or 'forward' rather than specifically 'arrival'."
        },
        "pro": {
          "description": "The actor takes a single step forward and brings her feet together, coming to a complete stop.",
          "confidence": "high",
          "ambiguities": "The gesture is very subtle and could be interpreted simply as 'stepping' or 'stopping' rather than the specific concept of 'arrival'."
        },
        "qwen": {
          "description": "The actor walks forward a few steps towards the camera and then comes to a complete stop, standing still.",
          "confidence": "high",
          "ambiguities": "Without the target word, the gesture could be interpreted simply as 'walk' or 'come here'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The act of stepping forward is a common metaphor for arriving at a destination, though it is a very minimal representation."
          },
          "pro": {
            "score": 3,
            "rationale": "The action of stepping forward and stopping provides a moderate visual representation of reaching a destination or arriving."
          },
          "qwen": {
            "score": 4,
            "rationale": "Walking forward and stopping is a direct physical enactment of reaching a destination, clearly mapping to the concept of arrival."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The movement simulates the physical act of taking a step, which is a core component of the experience of arriving."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves whole-body movement, simulating the physical act of walking to a point and stopping."
          },
          "qwen": {
            "score": 4,
            "rationale": "The full-body movement of walking and halting evokes the physical sensation of traveling and reaching an endpoint."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is very subtle and constrained, involving only a small step forward."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is limited to a single, relatively slow step forward, making it visually subtle."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is distinct but relatively subtle; it relies on translation through space rather than large limb gestures."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is neutral to mildly pleasant, providing little additional affective information about the arrival."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely simple and easy to understand in the context of the word 'arrival'."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is very simple and easy to process, though it might lack distinctiveness."
          },
          "qwen": {
            "score": 5,
            "rationale": "The action is extremely simple and cognitively undemanding, making it highly suitable for vocabulary association."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Stepping forward is a universally understood action associated with movement and arrival."
          },
          "pro": {
            "score": 2,
            "rationale": "While the action is understandable, taking a step forward is not a conventional or widely used emblematic gesture specifically for 'arrival'."
          },
          "qwen": {
            "score": 5,
            "rationale": "Walking to a spot and stopping is a universal human action understood across cultures as reaching a destination."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very natural and effortless for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "Taking a single step forward is an extremely natural and effortless action for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can easily reproduce this by simply taking a step forward and stopping; it requires no special skill."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 50,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Attention",
      "title": "50_Attention.avi",
      "local_path": "data/gesture_videos/50_Attention.avi",
      "video": "assets/rating-videos/50_Attention.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.095,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture specifically relates to 'listening' or 'auditory attention' rather than a general abstract concept of attention.",
      "pro_ambiguities": "The gesture could also be interpreted specifically as 'listen' or 'I can't hear you', rather than the broader concept of 'attention'.",
      "qwen_ambiguities": "Could be misinterpreted as 'listen' rather than general 'attention', though auditory attention is a valid subset of the broader concept.",
      "models": {
        "flash": {
          "description": "The actor performs a gesture by placing her hand behind her ear, leaning her head slightly toward it, as if listening intently to something.",
          "confidence": "high",
          "ambiguities": "The gesture specifically relates to 'listening' or 'auditory attention' rather than a general abstract concept of attention."
        },
        "pro": {
          "description": "The actor raises her left hand, cups it behind her left ear, and leans slightly forward as if listening intently.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted specifically as 'listen' or 'I can't hear you', rather than the broader concept of 'attention'."
        },
        "qwen": {
          "description": "The actor stands upright, then raises her right hand to cup behind her right ear while tilting her head slightly and leaning her torso forward, as if straining to hear. She holds this pose briefly before returning to neutral stance.",
          "confidence": "high",
          "ambiguities": "Could be misinterpreted as 'listen' rather than general 'attention', though auditory attention is a valid subset of the broader concept."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture of cupping the hand behind the ear is a conventional, iconic representation of listening or paying close attention to a sound."
          },
          "pro": {
            "score": 4,
            "rationale": "Cupping the ear is a clear visual representation of focusing one's auditory senses, which is a primary way of paying attention."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture of cupping the hand behind the ear is a widely recognized iconic representation of listening or paying attention to sound, directly mapping to the semantic core of 'attention' in auditory contexts."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "It directly simulates the physical act of trying to hear or focus on auditory input, which is a core component of paying attention."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the physical action and bodily experience of straining to hear and directing focus."
          },
          "qwen": {
            "score": 4,
            "rationale": "The posture evokes the physical act of leaning in and amplifying sound through hand placement, simulating the bodily experience of focusing auditory attention."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively contained and not overly expansive."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, but localized to one arm and a slight body lean, lacking expansive or rapid dynamics."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate — deliberate but not expansive or rapid; the lean and hand raise are clear but contained within personal space."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 4,
            "rationale": "The actor's facial expression is focused and alert, which effectively reinforces the meaning of the gesture."
          },
          "pro": {
            "score": 3,
            "rationale": "The actor's facial expression is focused and serious, providing a moderate cue of concentration and intent."
          },
          "qwen": {
            "score": 3,
            "rationale": "Facial expression shows mild concentration — eyebrows slightly raised, gaze directed outward — conveying focused intent without strong emotional valence."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for conveying the concept of attention."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly balances informativeness with ease of comprehension for a learner."
          },
          "qwen": {
            "score": 5,
            "rationale": "Simple, single-motion gesture with no fine motor demands; ideal for learners to associate quickly with the target word without cognitive overload."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "This is a universally recognized gesture for listening or paying attention in Western and many other cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "Cupping the ear to indicate listening or 'pay attention' is a highly familiar and widely understood emblem in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Cupping the hand behind the ear to indicate listening is a highly familiar emblematic gesture across Western cultures, aligning with common sociocultural schemas."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to perform, making it easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a single, natural movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Extremely natural and effortless to reproduce; requires only basic arm movement and head tilt, accessible to all learners regardless of motor skill level."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 51,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Effort",
      "title": "51_Effort.avi",
      "local_path": "data/gesture_videos/51_Effort.avi",
      "video": "assets/rating-videos/51_Effort.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as 'lifting' or 'heavy' rather than the abstract concept of 'effort', though these are closely related.",
      "pro_ambiguities": "The gesture could also be interpreted literally as 'lift' or 'heavy', but the metaphorical link to 'effort' is strong.",
      "qwen_ambiguities": "Could be interpreted specifically as 'heavy', 'lift', or 'pick up' rather than the abstract noun 'effort'.",
      "models": {
        "flash": {
          "description": "The actor bends forward slightly, reaches down with both hands as if grasping a heavy object, and pulls upward with a strained motion, then returns to a standing position.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'lifting' or 'heavy' rather than the abstract concept of 'effort', though these are closely related."
        },
        "pro": {
          "description": "The actor bends forward slightly, reaches down with both hands, and mimes pulling or lifting a heavy object upwards and to the side, simulating physical exertion.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted literally as 'lift' or 'heavy', but the metaphorical link to 'effort' is strong."
        },
        "qwen": {
          "description": "The actor bends forward at the waist with both arms reaching downward, then straightens her torso and lifts her arms slightly, mimicking the physical action of lifting a heavy object.",
          "confidence": "high",
          "ambiguities": "Could be interpreted specifically as 'heavy', 'lift', or 'pick up' rather than the abstract noun 'effort'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture clearly mimics the physical act of lifting something heavy, which is a strong iconic representation of exerting effort."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture metaphorically represents the abstract concept of 'effort' through the concrete, visual action of lifting a heavy object."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture iconically represents physical exertion by mimicking the act of lifting a heavy load, which is a concrete metaphor for the abstract concept of effort."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement simulates the physical strain and muscle engagement associated with lifting a heavy load, evoking a strong sensorimotor experience."
          },
          "pro": {
            "score": 5,
            "rationale": "The mimed action of lifting strongly evokes the bodily sensations of muscle tension, weight, and physical exertion."
          },
          "qwen": {
            "score": 5,
            "rationale": "The bending and lifting motion strongly evokes the somatic sensation of muscle strain and physical work associated with exerting effort."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though not overly expansive or rapid, providing a moderate level of visual salience."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture involves a full upper-body movement, bending, and a clear, pronounced lifting motion that is visually salient."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement involves significant displacement of the upper body and arms, making it visually distinct and attention-grabbing against the neutral stance."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the movement, failing to convey the affective strain associated with effort."
          },
          "pro": {
            "score": 3,
            "rationale": "The actor's face shows slight concentration or strain during the lifting motion, aligning with the idea of exertion, though it remains relatively subtle."
          },
          "qwen": {
            "score": 3,
            "rationale": "The actor displays a focused expression during the movement that suggests concentration or mild strain, supporting the meaning without being overly dramatic."
          },
          "delta": 1.333
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly aligned with the concept of effort, making it highly appropriate for a learning context."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture uses a simple, easily understood physical action to effectively convey an abstract concept without being overly complex."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor sequence is simple and intuitive, consisting of a single bend-and-lift action that is easy to process cognitively."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The act of lifting a heavy object is a universal human experience, making the gesture immediately recognizable."
          },
          "pro": {
            "score": 5,
            "rationale": "Using physical labor or lifting a heavy load as a metaphor for effort or hard work is a widely understood cultural trope."
          },
          "qwen": {
            "score": 5,
            "rationale": "Miming the lifting of a heavy object is a widely recognized and conventional way to represent hard work or effort in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very natural and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is a basic, everyday action that is very natural and effortless for learners to mimic."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture uses natural body mechanics and requires no fine motor skills, making it very easy for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 52,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "View",
      "title": "52_View.avi",
      "local_path": "data/gesture_videos/52_View.avi",
      "video": "assets/rating-videos/52_View.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.095,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could also be interpreted as 'look', 'see', 'search', or 'sun' depending on context.",
      "models": {
        "flash": {
          "description": "The actor places her hand horizontally above her eyes, mimicking the action of shielding one's eyes to look into the distance.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her hand to her forehead as if shading her eyes and turns her head from side to side, simulating looking at a wide scene.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right hand to her forehead with the palm facing outward, mimicking the action of shading her eyes to look into the distance, while slightly turning her head as if scanning the horizon.",
          "confidence": "high",
          "ambiguities": "Could also be interpreted as 'look', 'see', 'search', or 'sun' depending on context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a classic, highly recognizable iconic representation of looking at a view or shielding eyes to see something far away."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture of shading the eyes and scanning the horizon is a highly transparent visual representation of taking in a view."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture of shading the eyes is a highly transparent and conventional visual representation of looking at or viewing something in the distance."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It directly simulates the physical action of shading the eyes to improve vision, which is a common perceptual experience associated with viewing."
          },
          "pro": {
            "score": 5,
            "rationale": "The action strongly evokes the physical experience of shielding one's eyes from glare to improve vision and moving the head to see a wide area."
          },
          "qwen": {
            "score": 5,
            "rationale": "It vividly evokes the physical sensation of blocking light to improve vision and the bodily experience of scanning a landscape."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively contained and brief, making it moderately salient."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is clear and pronounced, involving both the arm and the head turning, making it visually salient without being overly expansive."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is clear and pronounced, drawing attention to the face and eyes, though it is contained rather than expansive."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, with only a slight focus in the eyes, providing minimal emotional context."
          },
          "pro": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, showing a slight focus associated with looking, but lacking strong emotional content."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is focused and slightly squinting to match the gesture, but lacks strong emotional affect."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly balances ease of understanding with the semantic meaning of the word."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, involving a single hand movement that is cognitively lightweight and easy to process."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "This is a universally understood gesture in Western culture for looking at a view."
          },
          "pro": {
            "score": 5,
            "rationale": "Shading the eyes to look into the distance is a highly familiar and universally understood gesture in Western culture."
          },
          "qwen": {
            "score": 5,
            "rationale": "Shading one's eyes to see better is a widely recognized and familiar gesture in Western contexts for looking or viewing."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely simple and natural to perform."
          },
          "pro": {
            "score": 5,
            "rationale": "Raising a hand to the forehead and turning the head is a very natural and effortless movement for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and effortless for learners to reproduce without requiring complex motor coordination."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 53,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Command",
      "title": "53_Command.avi",
      "local_path": "data/gesture_videos/53_Command.avi",
      "video": "assets/rating-videos/53_Command.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'stop' or 'down', depending on the context.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The gesture is literally a 'salute', which could be interpreted as the word 'Salute', 'Soldier', 'Army', or 'Respect' rather than the act of 'Command'.",
      "models": {
        "flash": {
          "description": "The actor performs a downward sweeping motion with her right arm, starting from an elevated position and moving down, resembling a gesture of authority or giving an order.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'stop' or 'down', depending on the context."
        },
        "pro": {
          "description": "The actor raises her right hand and brings it down in a swift, decisive chopping motion while maintaining a stern facial expression.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands upright and performs a military-style salute, raising her right hand to her forehead and then lowering it back to her side.",
          "confidence": "high",
          "ambiguities": "The gesture is literally a 'salute', which could be interpreted as the word 'Salute', 'Soldier', 'Army', or 'Respect' rather than the act of 'Command'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The downward arm movement is a conventional gesture often associated with giving a command or asserting authority."
          },
          "pro": {
            "score": 4,
            "rationale": "The decisive downward chop metaphorically represents authority, finality, and the act of giving an order."
          },
          "qwen": {
            "score": 4,
            "rationale": "The salute is a strong emblem of military authority and hierarchy, which is the primary context for issuing commands, creating a clear metonymic link."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The movement simulates the physical act of directing or ordering someone, which provides a moderate level of sensorimotor engagement."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical sensation of a forceful, decisive action, akin to striking a surface to emphasize a point."
          },
          "qwen": {
            "score": 4,
            "rationale": "Evokes the rigid physical posture and formal bodily discipline associated with military environments where commands are given and received."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is quick and sharp, drawing attention through its suddenness and clear trajectory."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is distinct and sharp, drawing attention to the upper body, but is relatively contained in scope."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 4,
            "rationale": "The actor's stern and serious facial expression clearly conveys the authority and gravity associated with a command."
          },
          "qwen": {
            "score": 3,
            "rationale": "The actor maintains a serious, neutral expression that conveys authority and sternness appropriate for the concept of command."
          },
          "delta": 2
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and easy to associate with the concept of a command."
          },
          "pro": {
            "score": 5,
            "rationale": "The simple, single-stroke gesture perfectly encapsulates the concept without any unnecessary complexity, making it ideal for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a single, simple motion that is cognitively lightweight and easy to process alongside the vocabulary word."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "Downward hand gestures are widely recognized in Western cultures as signs of authority or direction."
          },
          "pro": {
            "score": 5,
            "rationale": "The downward chop is a widely recognized emblem for authority, decision-making, or giving an order in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "The military salute is a widely recognized symbol in Western culture, immediately understood as relating to authority or the armed forces."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and requires no special physical skill to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The single, straightforward arm movement is very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motion is physically simple and requires no complex coordination, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 54,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Property",
      "title": "54_Property.avi",
      "local_path": "data/gesture_videos/54_Property.avi",
      "video": "assets/rating-videos/54_Property.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.857,
      "flash_confidence": "medium",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could be interpreted as 'hugging', 'cold', 'holding', or 'enclosing' rather than 'property'.",
      "pro_ambiguities": "The gesture could also be interpreted as 'mine', 'hug', or 'protect', but fits 'property' well in context.",
      "qwen_ambiguities": "The self-hugging motion could be interpreted as feeling cold or giving oneself a hug.; Without context, the outward arms might simply look like stretching.",
      "models": {
        "flash": {
          "description": "The actor starts with arms outstretched to the sides, then brings them inward to cross over the chest, as if hugging or enclosing something.",
          "confidence": "medium",
          "ambiguities": "The gesture could be interpreted as 'hugging', 'cold', 'holding', or 'enclosing' rather than 'property'."
        },
        "pro": {
          "description": "The actor extends her arms outwards and then brings them inwards, crossing them over her torso as if gathering or claiming something.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'mine', 'hug', or 'protect', but fits 'property' well in context."
        },
        "qwen": {
          "description": "The actor extends both arms outward to the sides as if outlining a space, then brings them inward to cross over the torso in a self-hugging or holding motion, before returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": "The self-hugging motion could be interpreted as feeling cold or giving oneself a hug.; Without context, the outward arms might simply look like stretching."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 2,
            "rationale": "The gesture of hugging oneself or enclosing space is a very abstract representation of 'property' (as in ownership or possession), making the connection weak and non-obvious."
          },
          "pro": {
            "score": 4,
            "rationale": "The gathering motion metaphorically represents taking ownership or possession, aligning well with the concept of property."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture metaphorically represents ownership and boundaries; extending arms suggests the extent of land or items, while bringing them to the chest signifies possession or 'mine'."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 2,
            "rationale": "It evokes a sense of holding or claiming something, but the connection to the abstract concept of 'property' is weak."
          },
          "pro": {
            "score": 4,
            "rationale": "Evokes the physical action of pulling objects towards oneself to claim and hold them."
          },
          "qwen": {
            "score": 4,
            "rationale": "The motion of gathering arms inward simulates the physical act of claiming or holding onto possessions, evoking a strong sense of ownership."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and involves the whole arm, but it is not particularly expansive or rapid."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is large and pronounced, starting from a wide arm span and ending in a crossed-arm position."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is expansive and distinct, utilizing the full width of the body to create a clear visual boundary that draws attention."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's facial expression remains mostly neutral, with a slight look of focus."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective cues to support the meaning."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple and easy to perform, though its semantic link to the word is not immediately clear."
          },
          "pro": {
            "score": 5,
            "rationale": "A simple, single-phase movement that effectively conveys the meaning without being overly complex."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture consists of a simple two-part sequence (outward then inward) that is cognitively light and easy to process alongside the word."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 2,
            "rationale": "This is not a standard or conventional gesture used to represent the concept of 'property' in Western culture."
          },
          "pro": {
            "score": 4,
            "rationale": "The 'gathering to oneself' gesture is a recognizable way to indicate possession or claiming something as one's own."
          },
          "qwen": {
            "score": 4,
            "rationale": "The concept of bringing objects or arms to the self to indicate 'mine' or ownership is a widely recognized metaphorical gesture in Western contexts."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and can be easily replicated by any learner."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves basic arm movements that are effortless to mimic."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no fine motor skills, making it effortless for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 55,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Destination",
      "title": "55_Destination.avi",
      "local_path": "data/gesture_videos/55_Destination.avi",
      "video": "assets/rating-videos/55_Destination.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.667,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could also be interpreted as 'down', 'here', or 'finish' depending on context, though 'destination' is a reasonable interpretation.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Gesture could be interpreted as 'stop', 'cut off', or 'end' rather than 'destination'; Lack of spatial reference (e.g., pointing forward or placing hand on map) weakens association with location or arrival",
      "models": {
        "flash": {
          "description": "The actor performs a sweeping motion with her right hand, starting from an elevated position and moving downward and forward, as if pointing to a specific location on a map or ground.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'down', 'here', or 'finish' depending on context, though 'destination' is a reasonable interpretation."
        },
        "pro": {
          "description": "The actor raises her right hand with the index finger extended and then moves her arm down to point deliberately at a specific location on the ground in front of her.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands still, then raises her right hand to shoulder height with palm facing forward, and performs a single downward chopping motion toward her left hip, ending with hand near waist level. She returns to neutral stance. Facial expression remains neutral throughout.",
          "confidence": "medium",
          "ambiguities": "Gesture could be interpreted as 'stop', 'cut off', or 'end' rather than 'destination'; Lack of spatial reference (e.g., pointing forward or placing hand on map) weakens association with location or arrival"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The downward pointing motion effectively mimics the act of indicating a specific point or location, which is the core meaning of 'destination'."
          },
          "pro": {
            "score": 4,
            "rationale": "Pointing to a specific spot clearly represents a location or endpoint, which aligns well with the concept of a destination."
          },
          "qwen": {
            "score": 2,
            "rationale": "The downward chop does not visually resemble 'destination'—no clear mapping to arrival, endpoint, or location. May be misinterpreted as dismissal or termination."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It evokes the physical act of pointing or marking a location, which is a common sensorimotor experience associated with navigation."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves the physical action of indicating a location, simulating the act of pointing out a goal or endpoint."
          },
          "qwen": {
            "score": 2,
            "rationale": "Minimal bodily simulation of travel or arrival; the motion lacks directional trajectory or spatial anchoring that would evoke reaching a destination."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is distinct, starting from a raised position and ending with a deliberate point, but it is not overly expansive or rapid."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate in size and speed—clearly visible but not expansive or dynamic enough to strongly capture attention for encoding."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "Facial expression remains neutral throughout; no affective cue to reinforce meaning or engagement."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly aligned with the abstract concept of a destination."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly balances informativeness with ease of understanding."
          },
          "qwen": {
            "score": 4,
            "rationale": "Gesture is simple and cognitively lightweight, appropriate for vocabulary learning context despite low semantic clarity."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Pointing to a location is a universal gesture understood across most cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "Pointing to indicate a specific place or destination is a highly common and universally understood gesture in Western cultures."
          },
          "qwen": {
            "score": 2,
            "rationale": "Downward chop is not a conventional emblem for 'destination' in Western contexts; may be associated with cutting, stopping, or negation instead."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and requires no special motor skills to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is a basic pointing action, making it effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Very easy to reproduce—single arm movement with no fine motor control or coordination required."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 56,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Plea",
      "title": "56_Plea.avi",
      "local_path": "data/gesture_videos/56_Plea.avi",
      "video": "assets/rating-videos/56_Plea.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as 'pray' or 'thank you' without context, though the knee bend leans towards pleading.",
      "models": {
        "flash": {
          "description": "The actor stands still, brings her hands together in a prayer-like position in front of her chest, and slightly bows her head, mimicking a gesture of begging or pleading.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor brings her hands together in front of her chest, palms touching, in a classic 'praying' or 'begging' gesture, while slightly bending her knees and leaning forward with an earnest facial expression.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor brings her palms together in front of her chest in a prayer position, slightly bends her knees to lower her body in a bowing motion, and then returns to a standing position with hands at her sides.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as 'pray' or 'thank you' without context, though the knee bend leans towards pleading."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture of clasping hands together in front of the chest is a universally recognized iconic representation of begging, imploring, or making a plea."
          },
          "pro": {
            "score": 5,
            "rationale": "The clasped hands gesture is a widely recognized symbol for begging or making an earnest request, perfectly matching the semantics of 'plea'."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture of pressing palms together combined with a slight bow is a highly transparent and universal visual representation of begging or pleading."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture evokes the physical act of begging or beseeching, which is directly related to the semantic meaning of a plea."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture evokes the physical posture of submission or earnest request associated with pleading, including the slight bodily dip."
          },
          "qwen": {
            "score": 4,
            "rationale": "The action simulates the physical posture of submission and earnest asking, strongly evoking the bodily experience of making a plea."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively small and contained, focusing on the hands and a slight head tilt, rather than expansive or highly dynamic movement."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear but relatively contained, involving bringing the hands to the chest and a slight dip of the body."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is deliberate and clear, particularly the knee bend, but remains contained within a moderate range of motion."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 3,
            "rationale": "The facial expression is serious and slightly somber, which supports the meaning of a plea, though it is not overly dramatic."
          },
          "pro": {
            "score": 4,
            "rationale": "The actor's face shows an earnest, slightly distressed expression that conveys the emotional weight of making a plea."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is neutral to serious, lacking strong indicators of desperation or urgency often associated with a plea."
          },
          "delta": 1.333
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, clear, and perfectly fits the meaning of the word without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly balances informativeness with ease of processing for a learner."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single cohesive movement sequence that is easy to cognitively process."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The 'prayer hands' gesture for pleading is highly familiar and widely understood in Western cultural contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "The 'praying hands' gesture is a highly conventionalized and familiar emblem for pleading in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "The 'prayer hands' gesture used for begging or pleading is a highly familiar cultural convention in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to perform, making it easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very simple, natural, and effortless for anyone to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no special physical ability, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 57,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Discipline",
      "title": "57_Discipline.avi",
      "local_path": "data/gesture_videos/57_Discipline.avi",
      "video": "assets/rating-videos/57_Discipline.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 1.428,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is abstract and lacks a clear semantic link to the word 'discipline', making it difficult to interpret without context.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The gesture could easily be interpreted as 'balance', 'exercise', 'military attention', or 'physical fitness' rather than the abstract concept of discipline.",
      "models": {
        "flash": {
          "description": "The actor stands still and performs a quick, sharp, lateral arm and leg extension to the side, then returns to a neutral standing position.",
          "confidence": "high",
          "ambiguities": "The gesture is abstract and lacks a clear semantic link to the word 'discipline', making it difficult to interpret without context."
        },
        "pro": {
          "description": "The actor starts with her left arm and leg extended, then sharply brings them in to stand rigidly at attention with a serious expression.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands upright, then simultaneously extends her right arm straight out to the side and lifts her left leg straight out to the side, holding a rigid, balanced pose before returning to a neutral standing position.",
          "confidence": "medium",
          "ambiguities": "The gesture could easily be interpreted as 'balance', 'exercise', 'military attention', or 'physical fitness' rather than the abstract concept of discipline."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture is an abstract, sharp movement that does not visually represent the concept of discipline."
          },
          "pro": {
            "score": 4,
            "rationale": "The act of snapping to attention visually represents order, control, and strict adherence to rules, which are core to the concept of discipline."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture metaphorically represents self-control and rigidity, resembling a military drill or physical test, which aligns with the concept of discipline but is not a direct visual icon."
          },
          "delta": 2
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 2,
            "rationale": "The sharp, controlled movement has a slight quality of precision, but it does not strongly evoke the concept of discipline."
          },
          "pro": {
            "score": 4,
            "rationale": "The physical act of pulling the body into a rigid, controlled posture strongly evokes the bodily sensation of restraint and order."
          },
          "qwen": {
            "score": 4,
            "rationale": "The pose strongly evokes the physical sensation of core stability, balance, and strict bodily control, simulating the effort required to maintain order."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is quick and involves both arm and leg, making it moderately salient, though it is brief."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves a clear, sharp movement of the arm and leg coming together, followed by a static, rigid stance."
          },
          "qwen": {
            "score": 4,
            "rationale": "The simultaneous extension of the arm and leg creates a large, distinct shape that stands out clearly against the body's neutral position."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 3,
            "rationale": "The actor maintains a serious, stern facial expression, which aligns with the strictness of discipline, though it is relatively subtle."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a neutral, focused expression with little emotional variation, conveying seriousness but not strong affect."
          },
          "delta": 1.333
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 3,
            "rationale": "The movement is simple and easy to perform, but its connection to the word is unclear, making it less effective for learning."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is straightforward and effectively conveys the meaning without any unnecessary complexity."
          },
          "qwen": {
            "score": 3,
            "rationale": "While the movement concept is simple, the physical requirement to balance on one leg while extending limbs adds motor complexity that may distract from word encoding."
          },
          "delta": 1.333
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 2,
            "rationale": "This specific movement does not correspond to a common cultural gesture for discipline."
          },
          "pro": {
            "score": 5,
            "rationale": "Standing at attention is a widely recognized cultural emblem for discipline, especially in military or formal contexts."
          },
          "qwen": {
            "score": 2,
            "rationale": "This specific pose is not a conventional emblem for 'discipline' in Western culture; it is more commonly associated with exercise, dance, or balance."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and physically easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is a basic full-body posture change that is effortless for learners to enact."
          },
          "qwen": {
            "score": 3,
            "rationale": "Reproducing the gesture requires moderate physical ability, specifically balance and core strength, which may be difficult for some learners to perform effortlessly."
          },
          "delta": 1.333
        }
      }
    },
    {
      "index": 58,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Recommendation",
      "title": "58_Recommendation.avi",
      "local_path": "data/gesture_videos/58_Recommendation.avi",
      "video": "assets/rating-videos/58_Recommendation.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.572,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'offering', 'giving', or 'presenting' rather than specifically 'recommendation'.",
      "pro_ambiguities": "The gesture could also be interpreted more literally as 'offering' or 'giving' an object.",
      "qwen_ambiguities": "Without verbal context, the gesture could be misinterpreted as 'giving', 'showing', or 'offering' rather than specifically 'recommending'.; Lack of facial expression may reduce perceived intentionality or emotional valence associated with recommending.",
      "models": {
        "flash": {
          "description": "The actor performs a gesture where she extends her hands forward with palms facing upward, as if offering or presenting something, then pulls them back slightly toward her chest.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'offering', 'giving', or 'presenting' rather than specifically 'recommendation'."
        },
        "pro": {
          "description": "The actor turns to her left and extends both hands forward with palms facing up, as if offering or presenting something.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted more literally as 'offering' or 'giving' an object."
        },
        "qwen": {
          "description": "The actor stands facing forward, then bends slightly at the waist and extends both hands forward with palms up, as if presenting or offering something. She holds the pose briefly before returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": "Without verbal context, the gesture could be misinterpreted as 'giving', 'showing', or 'offering' rather than specifically 'recommending'.; Lack of facial expression may reduce perceived intentionality or emotional valence associated with recommending."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The gesture resembles the act of offering or presenting an idea or object, which is a component of making a recommendation, though it is not a direct representation of the abstract concept."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture metaphorically represents offering an idea or option, aligning well with the concept of making a recommendation."
          },
          "qwen": {
            "score": 4,
            "rationale": "The open-palm, forward-offering gesture visually mirrors the act of giving advice or suggesting something — core semantics of 'recommendation'."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The movement simulates the physical act of presenting or offering something to another person, which provides a moderate sensorimotor link to the act of recommending."
          },
          "pro": {
            "score": 3,
            "rationale": "Evokes the physical action of holding out an object to give or show to someone."
          },
          "qwen": {
            "score": 4,
            "rationale": "The motion evokes the physical experience of handing over or presenting an object or idea, strongly linking to the sensorimotor schema of offering guidance."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively small and contained, lacking the expansive or rapid dynamics that would make it highly salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement involves a clear torso turn and arm extension, making it moderately salient."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate in size and speed — clear but not exaggerated; sufficient to draw attention without being overwhelming."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's facial expression remains mostly neutral throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains largely neutral throughout; no strong affective cues (e.g., warmth, enthusiasm) are visibly conveyed to reinforce the gesture’s intent."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple, clear, and easy to associate with the act of offering a suggestion."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is straightforward and perfectly balances simplicity with its metaphorical meaning."
          },
          "qwen": {
            "score": 5,
            "rationale": "Simple, single-motion gesture with low cognitive load; ideal for vocabulary learning contexts where clarity and ease of encoding are prioritized."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The 'offering' gesture is a common and widely understood social convention in Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "The open-handed offering gesture is widely recognized in Western cultures as presenting a suggestion or recommendation."
          },
          "qwen": {
            "score": 5,
            "rationale": "Open-palm offering gesture is widely recognized across Western cultures as signaling presentation, suggestion, or recommendation."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, making it effortless for learners to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very natural, simple, and effortless to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Gesture requires minimal coordination or flexibility; easily reproducible by learners of varying motor abilities."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 59,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Thought",
      "title": "59_Thought.avi",
      "local_path": "data/gesture_videos/59_Thought.avi",
      "video": "assets/rating-videos/59_Thought.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.857,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "",
      "pro_ambiguities": "The gesture is often more specifically associated with 'idea' or 'eureka' rather than the general process of 'thought', but the connection is still very strong.",
      "qwen_ambiguities": "The gesture could be interpreted as indicating 'idea', 'inspiration', or 'question' rather than the general concept of 'thought'.; Without verbal context, the link between the motion and the abstract noun 'thought' may not be immediately clear to all learners.",
      "models": {
        "flash": {
          "description": "The actor raises her right hand to her forehead, taps it once, and then lowers her hand back to her side.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right hand with the index finger pointing upwards near her head, while looking slightly up.",
          "confidence": "high",
          "ambiguities": "The gesture is often more specifically associated with 'idea' or 'eureka' rather than the general process of 'thought', but the connection is still very strong."
        },
        "qwen": {
          "description": "The actor raises her right arm, points her index finger upward, and then brings the hand down in a small arc toward her head before returning to a neutral stance. Her facial expression remains largely neutral throughout.",
          "confidence": "medium",
          "ambiguities": "The gesture could be interpreted as indicating 'idea', 'inspiration', or 'question' rather than the general concept of 'thought'.; Without verbal context, the link between the motion and the abstract noun 'thought' may not be immediately clear to all learners."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "Tapping the forehead is a highly conventionalized and transparent iconic gesture representing the act of thinking or having a thought."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is a highly conventionalized metaphorical representation of having a thought or an idea, acting as a clear visual symbol for the abstract concept."
          },
          "qwen": {
            "score": 2,
            "rationale": "The upward-pointing finger followed by a motion toward the head loosely suggests an idea entering the mind, but the connection to 'thought' is abstract and not visually transparent."
          },
          "delta": 2
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical action of pointing to the brain/mind, which is the seat of thought."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical action often associated with a sudden realization or signaling that one has an idea to share."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture implies a mental event (idea appearing), but lacks strong bodily or perceptual simulation of thinking itself."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively simple and contained within the personal space."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is a clear, distinct upward motion of the arm, moderate in size and speed."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and deliberate but modest in size and speed; it draws attention without being highly dynamic."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's facial expression is mostly neutral, with only a very subtle upward gaze suggesting realization."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor’s face remains neutral with no discernible emotional expression that would reinforce the concept of thought."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the abstract concept of 'thought'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is extremely simple, direct, and perfectly suited for easy cognitive processing."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is simple enough for learners to process without cognitive overload, yet conveys a symbolic meaning relevant to the target word."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "This is a universally recognized gesture in Western culture for indicating thinking or an idea."
          },
          "pro": {
            "score": 5,
            "rationale": "Raising an index finger near the head is a universally recognized emblem for an idea or thought in Western cultures."
          },
          "qwen": {
            "score": 3,
            "rationale": "Pointing upward to indicate an idea is somewhat conventional in Western contexts (e.g., 'lightbulb moment'), but not universally standardized for 'thought'."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely simple and natural to perform."
          },
          "pro": {
            "score": 5,
            "rationale": "The simple motion of raising an arm and pointing a finger is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is straightforward, requires minimal coordination, and can be easily mimicked by learners of various ages and abilities."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 60,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Patience",
      "title": "60_Patience.avi",
      "local_path": "data/gesture_videos/60_Patience.avi",
      "video": "assets/rating-videos/60_Patience.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'stop' or 'calm down' rather than specifically 'patience'.",
      "pro_ambiguities": "The gesture could also be interpreted as 'calm down', 'relax', or 'quiet'.",
      "qwen_ambiguities": "Could be misinterpreted as ‘calm down’ or ‘wait’ rather than specifically ‘patience’ without verbal context",
      "models": {
        "flash": {
          "description": "The actor stands still, raises both hands with palms facing downward, and slowly pushes them down toward the floor in a calming motion.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'stop' or 'calm down' rather than specifically 'patience'."
        },
        "pro": {
          "description": "The actor raises both hands with palms facing down and slowly pushes them downwards, maintaining a calm demeanor.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'calm down', 'relax', or 'quiet'."
        },
        "qwen": {
          "description": "The actor stands still, raises both hands to shoulder height with palms facing down, and performs a slow, rhythmic downward pressing motion while maintaining a calm, neutral facial expression.",
          "confidence": "high",
          "ambiguities": "Could be misinterpreted as ‘calm down’ or ‘wait’ rather than specifically ‘patience’ without verbal context"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The downward pressing motion is a common metaphorical gesture for 'calming down' or 'waiting,' which aligns well with the concept of patience."
          },
          "pro": {
            "score": 4,
            "rationale": "The downward pushing motion with flat palms is a common visual metaphor for suppressing urgency or slowing down, aligning well with the concept of patience."
          },
          "qwen": {
            "score": 4,
            "rationale": "The downward pressing motion visually suggests calming or holding back energy, which metaphorically aligns with the concept of patience as self-restraint or waiting calmly."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture simulates the physical act of trying to settle or calm a situation, providing a moderate sensorimotor link to the concept."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical sensation of pressing down or holding something back, relating to the bodily experience of self-control."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the bodily sensation of suppressing impulse or gently restraining movement, simulating the internal experience of exercising patience."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is deliberate and slow, which is appropriate for the meaning, though it is not particularly expansive or high-energy."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is slow, controlled, and relatively small in scale, lacking prominent or expansive dynamics."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is deliberate and repeated but not large or fast; it’s moderate in salience—noticeable without being dramatic."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 2,
            "rationale": "The facial expression remains largely neutral, missing an opportunity to convey the calm or composed affect associated with patience."
          },
          "pro": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, conveying a subtle sense of calm but lacking strong emotional cues."
          },
          "qwen": {
            "score": 3,
            "rationale": "The actor maintains a calm, composed expression that subtly reinforces patience, though it lacks strong emotional signaling beyond neutrality."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, clear, and perfectly suited for a learning context."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and optimally balanced for learning without being overloaded."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, repetitive, and easy to associate with the abstract concept of patience without overwhelming cognitive load."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The 'calm down' gesture is widely recognized in Western cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "This specific gesture is widely recognized in Western cultures as a signal to 'calm down' or 'wait'."
          },
          "qwen": {
            "score": 4,
            "rationale": "The palms-down calming gesture is commonly used in Western contexts to signal ‘slow down’ or ‘stay calm,’ making it culturally recognizable."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is basic, requires no special coordination, and is effortless to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motion requires minimal coordination and can be easily reproduced by learners of varying motor abilities."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 61,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Indifference",
      "title": "61_Indifference.avi",
      "local_path": "data/gesture_videos/61_Indifference.avi",
      "video": "assets/rating-videos/61_Indifference.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.952,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The lack of distinct hand movement (like a shrug) could be interpreted as waiting, boredom, or simply a neutral starting position rather than active indifference.",
      "models": {
        "flash": {
          "description": "The actor performs a classic shrug gesture by raising both shoulders simultaneously and then letting them drop, accompanied by a neutral facial expression.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her shoulders in a shrugging motion, holds it briefly, and then lowers them while maintaining a neutral facial expression.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands still with arms at her sides and maintains a neutral facial expression, exhibiting minimal to no visible body movement throughout the clip.",
          "confidence": "medium",
          "ambiguities": "The lack of distinct hand movement (like a shrug) could be interpreted as waiting, boredom, or simply a neutral starting position rather than active indifference."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The shrug is the universal, highly iconic gesture for expressing indifference, lack of knowledge, or lack of concern."
          },
          "pro": {
            "score": 5,
            "rationale": "The shoulder shrug is a highly transparent and universally recognized emblem for 'I don't care', perfectly matching the semantics of indifference."
          },
          "qwen": {
            "score": 3,
            "rationale": "The lack of movement and neutral posture visually maps to the concept of not caring or reacting, though it lacks the more conventional shrug emblem."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The physical act of shrugging is a direct bodily manifestation of the feeling of indifference."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture involves a simple bodily movement (raising shoulders) but lacks complex action simulation or physical interaction with the environment."
          },
          "qwen": {
            "score": 2,
            "rationale": "The static posture evokes little bodily action or physical interaction, representing a state of inaction rather than active engagement."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and distinct, though relatively brief and contained within the shoulder area."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is minimal and constrained, consisting only of a brief raising and lowering of the shoulders."
          },
          "qwen": {
            "score": 1,
            "rationale": "There is minimal to no movement, making the gesture visually subtle and low in dynamic salience."
          },
          "delta": 1.333
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 2,
            "rationale": "The facial expression remains largely neutral, which is consistent with indifference, but lacks a strong, expressive emotional signal."
          },
          "pro": {
            "score": 3,
            "rationale": "The actor maintains a neutral, blank facial expression, which serves as a moderate cue effectively communicating the lack of emotion characteristic of indifference."
          },
          "qwen": {
            "score": 4,
            "rationale": "The neutral facial expression is a clear and meaningful signal that effectively communicates the lack of emotion associated with indifference."
          },
          "delta": 1.333
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is extremely simple and direct, providing an optimal balance of informativeness without any cognitive overload."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is extremely simple, requiring no complex motor planning or cognitive load to process."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The shrug is a highly common and widely recognized gesture in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "The shoulder shrug is a highly common and widely understood gesture in Western cultures for expressing a lack of interest or indifference."
          },
          "qwen": {
            "score": 3,
            "rationale": "While a neutral stance is recognizable, the specific meaning of indifference is often more strongly associated with a shrug in Western contexts, making this somewhat ambiguous."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely easy and natural for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "Raising the shoulders is a very natural, everyday movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is effortless to reproduce, requiring learners to simply stand still and maintain a neutral face."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 62,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Information",
      "title": "62_Information.avi",
      "local_path": "data/gesture_videos/62_Information.avi",
      "video": "assets/rating-videos/62_Information.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.667,
      "flash_confidence": "medium",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could be interpreted as 'giving,' 'sharing,' or 'presenting' rather than specifically 'information'.",
      "pro_ambiguities": "Without the target word, the gesture could be interpreted more broadly as 'giving', 'sharing', or 'having an idea'.",
      "qwen_ambiguities": "The gesture resembles a greeting wave or a signal to stop/wait.; It could be interpreted as 'I have an idea' or pointing to something unseen.; The link to the abstract concept of 'information' is not immediately obvious without verbal context.",
      "models": {
        "flash": {
          "description": "The actor performs a sweeping motion with her right hand, starting from near her head and moving outward and downward, as if distributing or presenting something.",
          "confidence": "medium",
          "ambiguities": "The gesture could be interpreted as 'giving,' 'sharing,' or 'presenting' rather than specifically 'information'."
        },
        "pro": {
          "description": "The actor raises her right hand near her head while looking left, then moves her hand down and forward in a giving motion while turning her head to face forward.",
          "confidence": "high",
          "ambiguities": "Without the target word, the gesture could be interpreted more broadly as 'giving', 'sharing', or 'having an idea'."
        },
        "qwen": {
          "description": "The actor stands facing forward, then raises her right arm to shoulder height with an open palm and slightly spread fingers, holding it briefly before lowering it back to her side.",
          "confidence": "high",
          "ambiguities": "The gesture resembles a greeting wave or a signal to stop/wait.; It could be interpreted as 'I have an idea' or pointing to something unseen.; The link to the abstract concept of 'information' is not immediately obvious without verbal context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 2,
            "rationale": "The gesture is abstract and does not clearly represent the concept of 'information' in a visual or iconic way."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture metaphorically represents taking knowledge from the mind and sharing it, aligning well with the concept of providing information."
          },
          "qwen": {
            "score": 2,
            "rationale": "The open palm gesture has a weak semantic link to 'information', perhaps suggesting 'presenting' or 'offering' data, but lacks a clear visual representation of the concept."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 2,
            "rationale": "The movement suggests a generic action of 'giving' or 'spreading,' which has a weak connection to the abstract concept of information."
          },
          "pro": {
            "score": 3,
            "rationale": "It evokes the physical action of handing something over, mapping the abstract concept of information onto a physical object being transferred."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is a simple arm raise without simulating a specific physical interaction with information, such as reading, writing, or transferring data."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, with a moderate range of motion, making it noticeable without being overly dramatic."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and involves the arm and head, but is relatively constrained and moderate in speed and size."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is relatively small and quick, lacking the expansive or complex dynamics that would strongly capture visual attention."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, professional facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple, easy to perform, and does not distract from the learning process."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and easy to process, making it highly suitable for a learning context."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor pattern is extremely simple and requires minimal cognitive load to memorize, making it highly accessible for learners."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 3,
            "rationale": "The gesture is somewhat recognizable as a 'presenting' or 'distributing' motion, which is common in Western communication."
          },
          "pro": {
            "score": 4,
            "rationale": "The metaphor of 'giving' thoughts or knowledge from the head is a recognizable cultural trope in Western contexts."
          },
          "qwen": {
            "score": 2,
            "rationale": "This specific hand raise is not a conventional emblem for 'information' in Western contexts, where it might be confused with greeting or signaling."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and natural, making it effortless for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, natural, and requires no special coordination, making it effortless for learners to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture involves a natural, single-limb movement that is effortless for learners to reproduce physically."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 63,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Correction",
      "title": "63_Correction.avi",
      "local_path": "data/gesture_videos/63_Correction.avi",
      "video": "assets/rating-videos/63_Correction.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'dismissal' or 'throwing something away' rather than specifically 'correction'.",
      "pro_ambiguities": "The gesture could also be interpreted simply as 'no' or 'wrong', but in the context of 'correction', the crossing-out metaphor is clear.",
      "qwen_ambiguities": "The gesture could be interpreted simply as 'No' or 'Wrong' without the specific nuance of 'Correction' unless the pointing phase is clearly linked to a replacement.; Without audio context, the distinction between 'Delete' and 'Correct' relies heavily on the second part of the movement.",
      "models": {
        "flash": {
          "description": "The actor performs a quick, sharp flicking motion with her right hand, moving it from near her face outward to the side, as if flicking away an error.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'dismissal' or 'throwing something away' rather than specifically 'correction'."
        },
        "pro": {
          "description": "The actor raises her right hand with the index finger extended and makes a sweeping motion from left to right, resembling the action of crossing something out.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted simply as 'no' or 'wrong', but in the context of 'correction', the crossing-out metaphor is clear."
        },
        "qwen": {
          "description": "The actor extends her right index finger and makes a diagonal crossing motion in front of her body, followed by pointing to the side, mimicking the action of crossing out an error and indicating the correct alternative.",
          "confidence": "high",
          "ambiguities": "The gesture could be interpreted simply as 'No' or 'Wrong' without the specific nuance of 'Correction' unless the pointing phase is clearly linked to a replacement.; Without audio context, the distinction between 'Delete' and 'Correct' relies heavily on the second part of the movement."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The flicking motion suggests 'removing' or 'fixing' something, which is a metaphorical representation of correction, though not a literal one."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly represents the physical action of crossing out an error, which is strongly associated with making a correction."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture of crossing out (making an X or diagonal line) combined with pointing elsewhere visually maps well to the concept of negating an error and providing the correct version."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture simulates a physical action of discarding or correcting an error, engaging the arm and hand in a purposeful movement."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical action of striking through text on a page or board."
          },
          "qwen": {
            "score": 4,
            "rationale": "Evokes the familiar physical experience of writing, crossing out a mistake on paper, and pointing to the right answer."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is quick and distinct, providing a moderate level of visual salience that draws attention."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is a clear, moderate-sized sweep of the arm that is easily noticeable."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct, involving the arm and hand, but is relatively contained in size and speed."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, serious facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor's facial expression is neutral and focused, providing minimal affective reinforcement for the concept."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, concise, and easy to associate with the concept of correcting or removing an error."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a simple, single motion that perfectly conveys the concept without unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single compound movement that is easy to process cognitively."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 3,
            "rationale": "The gesture is somewhat recognizable as a 'flicking away' motion, which is a common way to express dismissal or correction in many cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of crossing something out to indicate an error or correction is highly familiar in Western cultures."
          },
          "qwen": {
            "score": 4,
            "rationale": "Crossing something out to indicate it is wrong or needs changing is a widely recognized convention in Western cultures."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and requires no special coordination, making it extremely easy for learners to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a simple arm sweep that is very easy and natural for anyone to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no dexterity or complex coordination, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 64,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Boredom",
      "title": "64_Boredom.avi",
      "local_path": "data/gesture_videos/64_Boredom.avi",
      "video": "assets/rating-videos/64_Boredom.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.095,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor rests their chin on their hand with their elbow supported, while maintaining a neutral, slightly weary facial expression, mimicking the classic posture of someone who is bored.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor rests her chin on her hand, supporting her head, while her other hand rests on her hip, accompanied by a flat, unengaged facial expression.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right hand to rest her cheek against her palm, tilts her head slightly into the hand, and places her left hand on her hip, holding a static, slumped pose before returning to neutral.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture of resting the chin on the hand is a universally recognized iconic representation of boredom or waiting."
          },
          "pro": {
            "score": 5,
            "rationale": "Resting the head on the hand is a highly transparent and universally recognized posture representing boredom or a lack of interest."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture of resting the head in the hand is a universally recognized visual metaphor for lack of interest or energy."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "It effectively simulates the physical posture associated with the feeling of lethargy or lack of engagement."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the physical sensation of lethargy and the bodily need to support one's head when lacking energy or stimulation."
          },
          "qwen": {
            "score": 4,
            "rationale": "Evokes the physical sensation of lethargy and the bodily tendency to slump or seek support when unstimulated."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is subtle and static, which is appropriate for the concept of boredom but low in motional salience."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture involves minimal movement, primarily consisting of adopting and holding a static, low-energy posture."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is slow and deliberate, transitioning into a static pose; it is distinct but not visually commanding or large."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 4,
            "rationale": "The facial expression is consistent with the posture, clearly conveying a sense of disinterest or weariness."
          },
          "pro": {
            "score": 4,
            "rationale": "The actor's facial expression is intentionally flat and unengaged, effectively communicating the affective state of boredom."
          },
          "qwen": {
            "score": 4,
            "rationale": "The actor adopts a flat affect and blank stare that effectively communicates disinterest and lack of engagement."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the concept without any unnecessary or confusing complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, involving a single hand placement and body lean, making it cognitively light."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "This is a highly conventionalized gesture in Western culture for expressing boredom."
          },
          "pro": {
            "score": 5,
            "rationale": "This specific posture is a highly familiar and widely used emblem for boredom in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Resting the chin or cheek on the hand is a highly familiar and conventional emblem for boredom in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very natural and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is extremely simple and requires no special coordination, making it effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, requires no dexterity, and is effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 65,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Mentality",
      "title": "65_Mentality.avi",
      "local_path": "data/gesture_videos/65_Mentality.avi",
      "video": "assets/rating-videos/65_Mentality.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 1.048,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture is abstract and lacks a clear semantic link to the word 'mentality', making it difficult to interpret the intended meaning without context.",
      "pro_ambiguities": "The gesture could also be interpreted as 'imagination', 'mind', or 'thoughts' rather than specifically 'mentality'.",
      "qwen_ambiguities": "Could be interpreted generally as 'thinking' or 'idea' rather than the specific trait of 'mentality'.; Without context, framing the head might occasionally signal 'crazy' depending on facial expression, though here it appears neutral.",
      "models": {
        "flash": {
          "description": "The actor raises both arms from her sides to above her head, palms facing upward, then returns them to her sides.",
          "confidence": "high",
          "ambiguities": "The gesture is abstract and lacks a clear semantic link to the word 'mentality', making it difficult to interpret the intended meaning without context."
        },
        "pro": {
          "description": "The actor raises both hands to head level with open palms facing inwards, framing her head while looking slightly upwards.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'imagination', 'mind', or 'thoughts' rather than specifically 'mentality'."
        },
        "qwen": {
          "description": "The actor raises both hands from her sides up to the level of her head, framing her temples with open palms, before returning to a neutral standing position.",
          "confidence": "high",
          "ambiguities": "Could be interpreted generally as 'thinking' or 'idea' rather than the specific trait of 'mentality'.; Without context, framing the head might occasionally signal 'crazy' depending on facial expression, though here it appears neutral."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture of raising arms above the head does not visually represent the abstract concept of 'mentality' or mindset."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture frames the head, linking to the concept of the mind, but the abstract nature of 'mentality' makes the visual resemblance moderate."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture uses the head as a metonym for the mind, which is a clear and conventional visual representation for 'mentality'."
          },
          "delta": 2
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "The movement is generic and does not evoke any specific bodily action or physical interaction associated with the concept of mentality."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture involves a weak physical action of framing or presenting the mind, but lacks strong bodily simulation."
          },
          "qwen": {
            "score": 3,
            "rationale": "Framing the head evokes the location of thought processes, providing a moderate bodily anchor for the abstract concept."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and involves the full range of arm motion, making it moderately salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is moderate in size and speed, involving both arms raising to head level."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is symmetrical and deliberate, drawing attention to the head without being overly large or rapid."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's facial expression is mostly neutral, with a slight upward gaze that does not convey strong emotion."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a neutral to slightly focused expression, lacking strong emotional signaling."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 3,
            "rationale": "The gesture is simple and easy to perform, but it lacks a clear semantic connection to the target word, making it potentially confusing for learning."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is simple, clear, and not overloaded, making it appropriate for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is simple, symmetrical, and cognitively undemanding, making it ideal for vocabulary association."
          },
          "delta": 1.333
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 2,
            "rationale": "This specific arm-raising movement is not a standard or conventional gesture used to represent 'mentality' in Western culture."
          },
          "pro": {
            "score": 3,
            "rationale": "While gesturing near the head for mind-related concepts is common, this specific framing gesture is not a standard emblem for 'mentality'."
          },
          "qwen": {
            "score": 5,
            "rationale": "Pointing to or framing the head to indicate thinking or the mind is a highly familiar convention in Western contexts."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and physically effortless to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very natural, simple, and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture involves natural arm movements that are effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 66,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Method",
      "title": "66_Method.avi",
      "local_path": "data/gesture_videos/66_Method.avi",
      "video": "assets/rating-videos/66_Method.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could also be interpreted as 'plan', 'process', or 'sequence' rather than specifically 'method'.",
      "pro_ambiguities": "Without the target word, the gesture could potentially be interpreted as 'measuring', 'arm', or 'vein', but the connection to a structured 'method' is logical once known.",
      "qwen_ambiguities": "Gesture could be interpreted as ‘presenting an idea,’ ‘showing options,’ or even ‘stopping’ depending on context.; No clear visual metaphor for ‘method’ (e.g., steps, tools, sequence) is enacted.",
      "models": {
        "flash": {
          "description": "The actor performs a series of precise, rhythmic hand and arm movements, tracing a structured path in the air, suggesting a systematic or step-by-step process.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'plan', 'process', or 'sequence' rather than specifically 'method'."
        },
        "pro": {
          "description": "The actor raises her left arm, bent at the elbow, and uses her right hand to trace a path from her left elbow up to her left hand.",
          "confidence": "high",
          "ambiguities": "Without the target word, the gesture could potentially be interpreted as 'measuring', 'arm', or 'vein', but the connection to a structured 'method' is logical once known."
        },
        "qwen": {
          "description": "The actor stands facing forward, then turns to her left profile. She raises both hands to shoulder height with palms open and facing forward, as if presenting or framing something in space. She holds this pose briefly before lowering her arms and returning to a neutral stance.",
          "confidence": "medium",
          "ambiguities": "Gesture could be interpreted as ‘presenting an idea,’ ‘showing options,’ or even ‘stopping’ depending on context.; No clear visual metaphor for ‘method’ (e.g., steps, tools, sequence) is enacted."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The gesture uses structured, sequential movements to represent the concept of a 'method' or systematic approach, which is moderately iconic."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture of tracing a path along the arm provides a moderate, somewhat abstract visual representation of following a structured procedure or steps, which aligns with the concept of a method."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture does not visually resemble the abstract concept of 'method'—no clear mapping to procedure, system, or technique is evident."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The movement simulates the act of organizing or following a path, providing a moderate sensorimotor representation of a process."
          },
          "pro": {
            "score": 3,
            "rationale": "The action of physically tracing a line on one's own body evokes a moderate sensorimotor experience of following a set path or procedure."
          },
          "qwen": {
            "score": 2,
            "rationale": "Minimal bodily simulation; the open-palm presentation doesn’t evoke a specific action or physical experience tied to ‘method’."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, with moderate speed and spatial extent, making it noticeable without being overly dramatic."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is deliberate, involves both arms, and covers a moderate amount of space, making it clearly visible but not overly expansive."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate in size and speed—turning and raising arms is noticeable but not expansive or rapid enough to strongly command attention."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no emotional cues."
          },
          "qwen": {
            "score": 1,
            "rationale": "Facial expression remains neutral throughout; no affective cues are communicated to support meaning."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is well-balanced, being simple enough to follow while clearly conveying a sense of structure."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is simple, clear, and easy to process, making it well-balanced for a learning context without being overly complex."
          },
          "qwen": {
            "score": 4,
            "rationale": "Gesture is simple and cognitively light—easy to process without overload, though it lacks semantic richness for the target word."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 3,
            "rationale": "The gesture is a somewhat abstract representation of 'process' or 'method' that is generally understandable but not a standard cultural emblem."
          },
          "pro": {
            "score": 2,
            "rationale": "While the metaphor of a path is understandable, this specific gesture is not a common or widely recognized emblem for 'method' in Western culture."
          },
          "qwen": {
            "score": 3,
            "rationale": "Open-palm presentation is somewhat recognizable in Western contexts as ‘showing’ or ‘presenting,’ but not specifically linked to ‘method.’"
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 4,
            "rationale": "The movement sequence is straightforward and easy for a learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves simple, slow arm movements and touching one's own arm, making it very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Very natural and effortless to reproduce—requires only basic arm elevation and torso turn, accessible to all learners."
          },
          "delta": 0.667
        }
      }
    },
    {
      "index": 67,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Bravery",
      "title": "67_Bravery.avi",
      "local_path": "data/gesture_videos/67_Bravery.avi",
      "video": "assets/rating-videos/67_Bravery.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could also be interpreted as 'pride', 'confidence', or 'strength' rather than specifically 'bravery'.",
      "pro_ambiguities": "The gesture might also be interpreted simply as 'strength' or 'muscles' rather than specifically 'bravery'.",
      "qwen_ambiguities": "Gesture could be interpreted as impatience, authority, or casual stance rather than specifically bravery.; Lack of facial or contextual cues may lead learners to associate the gesture with confidence rather than courage under threat.",
      "models": {
        "flash": {
          "description": "The actor stands still, then pulls their shoulders back and squares their chest, adopting a posture of confidence or pride.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'pride', 'confidence', or 'strength' rather than specifically 'bravery'."
        },
        "pro": {
          "description": "The actor begins with her arms bent, elbows out, and fists clenched near her shoulders in a posture of strength, then lowers her arms to her sides.",
          "confidence": "high",
          "ambiguities": "The gesture might also be interpreted simply as 'strength' or 'muscles' rather than specifically 'bravery'."
        },
        "qwen": {
          "description": "The actor stands upright, then places both hands firmly on her hips with elbows bent outward, holding the pose briefly before returning to a neutral stance. Her facial expression remains calm and composed throughout.",
          "confidence": "medium",
          "ambiguities": "Gesture could be interpreted as impatience, authority, or casual stance rather than specifically bravery.; Lack of facial or contextual cues may lead learners to associate the gesture with confidence rather than courage under threat."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The posture of squaring the shoulders and chest is a common physical manifestation of confidence and courage, which are components of bravery."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture uses a metaphor of physical strength (clenched fists, broad posture) to represent the abstract concept of bravery, providing a moderate visual link."
          },
          "qwen": {
            "score": 3,
            "rationale": "Hands-on-hips is a culturally associated posture of confidence or readiness, which loosely connects to bravery but does not visually depict courage or risk-taking directly."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It evokes the physical sensation of standing tall and firm, which is associated with feeling brave."
          },
          "pro": {
            "score": 4,
            "rationale": "The tensing of the arms and clenching of fists strongly evoke the bodily sensation of preparing for a challenge or standing firm."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture evokes a static posture of assertiveness rather than dynamic action; it lacks strong bodily simulation of facing danger or overcoming fear."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is subtle and brief, consisting mainly of a slight adjustment of the shoulders."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is minimal, consisting mainly of holding a static pose and then returning the arms to a neutral position."
          },
          "qwen": {
            "score": 2,
            "rationale": "Movement is minimal — only arms move to hips and back — with no speed, expansion, or complexity to draw strong attention."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral throughout the video, offering no emotional cues."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression is neutral to mildly confident; no strong emotional signal (e.g., determination, fearlessness) is conveyed through the face."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and easy to understand in the context of the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple and direct, making it optimally balanced for learning without cognitive overload."
          },
          "qwen": {
            "score": 5,
            "rationale": "Extremely simple motor pattern — easy to understand and replicate without cognitive overload; ideal for vocabulary learning context."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "Standing tall with squared shoulders is a widely recognized Western cultural cue for confidence and bravery."
          },
          "pro": {
            "score": 4,
            "rationale": "The 'strong' pose with clenched fists is a common cultural emblem for strength, courage, and bravery in Western contexts."
          },
          "qwen": {
            "score": 4,
            "rationale": "Hands-on-hips is widely recognized in Western contexts as signaling confidence, defiance, or readiness — moderately aligned with bravery."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and natural for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves basic arm movements and a simple posture that are effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Gesture requires no coordination or flexibility; learners of all ages can easily reproduce it without instruction."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 68,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Partnership",
      "title": "68_Partnership.avi",
      "local_path": "data/gesture_videos/68_Partnership.avi",
      "video": "assets/rating-videos/68_Partnership.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'agreement', 'connection', or 'joining' in general, though it fits 'partnership' well.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could also represent 'connection', 'together', 'friendship', or 'holding'.",
      "models": {
        "flash": {
          "description": "The actor brings both hands together in front of the chest, palms facing each other, and then moves them slightly apart and back together, suggesting a connection or joining.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'agreement', 'connection', or 'joining' in general, though it fits 'partnership' well."
        },
        "pro": {
          "description": "The actor raises both arms and brings her two index fingers together to meet in the center in front of her chest.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both arms to chest height and interlocks her fingers in front of her torso, holding the clasp briefly before releasing and lowering her arms.",
          "confidence": "high",
          "ambiguities": "Could also represent 'connection', 'together', 'friendship', or 'holding'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture of bringing hands together clearly symbolizes the concept of joining, unity, or a partnership."
          },
          "pro": {
            "score": 4,
            "rationale": "Bringing two separate fingers together to meet in the middle clearly visually represents two entities joining to form a partnership."
          },
          "qwen": {
            "score": 4,
            "rationale": "Interlocking fingers visually represents two separate entities joining together to form a single unit, which is a clear metaphor for partnership."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It evokes the physical sensation of joining two things together, which is a common metaphor for partnership."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes a moderate sense of physical connection or the action of joining two separate objects together."
          },
          "qwen": {
            "score": 4,
            "rationale": "The physical sensation of hands clasping and locking together evokes the feeling of connection and mutual support inherent in a partnership."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is deliberate and clear, but moderate in terms of speed and spatial expansiveness."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and centered but relatively contained in size and speed, making it moderately salient."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional emotional cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and easy to associate with the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and effectively communicates the core concept without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, symmetrical, and easy to process cognitively, making it highly appropriate for learning."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The concept of joining hands to represent partnership or agreement is widely understood in Western culture."
          },
          "pro": {
            "score": 4,
            "rationale": "Using two fingers to symbolize two people or entities coming together is a common and easily understood metaphor in Western culture."
          },
          "qwen": {
            "score": 5,
            "rationale": "Clasping hands or shaking hands are widely recognized Western symbols for agreement, connection, and partnership."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and can be easily replicated by any learner."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a very simple, symmetrical movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, requires no dexterity beyond basic finger interlocking, and is very easy for a learner to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 69,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Consideration",
      "title": "69_Consideration.avi",
      "local_path": "data/gesture_videos/69_Consideration.avi",
      "video": "assets/rating-videos/69_Consideration.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.572,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could also be interpreted as 'thinking', 'pondering', or 'weighing options', which are all closely related to consideration.",
      "pro_ambiguities": "The gesture could also be interpreted as 'comparison', 'hesitation', or 'framing'.",
      "qwen_ambiguities": "The gesture is generic and could easily represent 'thinking', 'wondering', or 'idea' rather than specifically 'consideration'.; Without audio context, the specific nuance of careful thought versus general thought is hard to distinguish.",
      "models": {
        "flash": {
          "description": "The actor stands still, then raises both hands to the side of her head, palms facing forward, with a thoughtful facial expression, suggesting a 'thinking' or 'weighing' action.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'thinking', 'pondering', or 'weighing options', which are all closely related to consideration."
        },
        "pro": {
          "description": "The actor raises both hands to shoulder height with palms facing inward, tilts her head slightly, and looks off to the side as if weighing options or thinking deeply.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'comparison', 'hesitation', or 'framing'."
        },
        "qwen": {
          "description": "The actor raises both hands to shoulder height with palms facing inward and fingers slightly spread, while tilting her head and gazing upward to the side, mimicking a classic thinking or weighing posture, before returning to a neutral stance.",
          "confidence": "medium",
          "ambiguities": "The gesture is generic and could easily represent 'thinking', 'wondering', or 'idea' rather than specifically 'consideration'.; Without audio context, the specific nuance of careful thought versus general thought is hard to distinguish."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture of placing hands near the head to 'weigh' or 'think' is a common iconic representation of the cognitive process of consideration."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture visually represents the abstract concept of weighing different options or thoughts, which aligns clearly with the meaning of consideration."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture visually represents the act of thinking or weighing options, which is the process of consideration, but does not depict the abstract noun itself."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It simulates the physical act of thinking or pondering, which is a common metaphor for consideration."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical sensation of holding and balancing two different ideas or objects in one's hands."
          },
          "qwen": {
            "score": 3,
            "rationale": "Evokes the internal bodily sensation of pausing and mentally weighing information, simulating the cognitive effort of consideration."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is brief, constrained, and relatively slow, without expansive or highly prominent dynamics."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is relatively small, contained near the upper body, and lacks high speed or expansive range."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 4,
            "rationale": "The actor adopts a focused, thoughtful facial expression that aligns well with the meaning of consideration."
          },
          "pro": {
            "score": 3,
            "rationale": "The facial expression is thoughtful and focused, conveying cognitive engagement and deliberation rather than strong emotion."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is thoughtful and focused, with eyes looking away, but lacks strong affective or emotional signaling."
          },
          "delta": 1.333
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for the abstract concept of consideration."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and optimally balances informativeness with ease of understanding."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is simple and uncomplicated, making it easy to process without overloading the learner's cognitive resources."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The 'thinking' gesture is a universally recognized emblem in Western culture."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture of holding hands up to weigh options or frame a thought is a familiar metaphor in Western cultures."
          },
          "qwen": {
            "score": 4,
            "rationale": "Looking up and away while raising hands is a widely recognized Western cultural convention for indicating thought or contemplation."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very simple, natural, and requires no special coordination, making it effortless to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, requires no dexterity, and can be effortlessly reproduced by learners of most physical abilities."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 70,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Sensation",
      "title": "70_Sensation.avi",
      "local_path": "data/gesture_videos/70_Sensation.avi",
      "video": "assets/rating-videos/70_Sensation.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.667,
      "flash_confidence": "medium",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is highly abstract and could be interpreted as 'open', 'wide', or 'everything' rather than 'sensation'.",
      "pro_ambiguities": "The gesture looks more like a reaction to a shock or surprise rather than a general representation of 'sensation'.",
      "qwen_ambiguities": "Could be interpreted as 'freedom', 'relief', 'breathing', or 'sunshine' due to the upward gaze and open posture.",
      "models": {
        "flash": {
          "description": "The actor stands still, then quickly spreads both arms out to the sides and slightly upward, then returns them to her sides.",
          "confidence": "medium",
          "ambiguities": "The gesture is highly abstract and could be interpreted as 'open', 'wide', or 'everything' rather than 'sensation'."
        },
        "pro": {
          "description": "The actor quickly extends her arms outwards and downwards with open hands while turning her head to the right, then returns to a neutral standing posture.",
          "confidence": "high",
          "ambiguities": "The gesture looks more like a reaction to a shock or surprise rather than a general representation of 'sensation'."
        },
        "qwen": {
          "description": "The actor stands still, then raises both arms out to the sides with palms open and tilts her head back slightly, as if feeling the air or embracing an experience, before returning to a neutral stance.",
          "confidence": "medium",
          "ambiguities": "Could be interpreted as 'freedom', 'relief', 'breathing', or 'sunshine' due to the upward gaze and open posture."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 2,
            "rationale": "The gesture is very abstract and does not clearly represent the concept of a 'sensation' or feeling."
          },
          "pro": {
            "score": 2,
            "rationale": "The sudden outward arm movement weakly resembles a physical reaction to a stimulus, but does not clearly depict the broad, abstract concept of sensation."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture metaphorically represents openness to sensory input rather than depicting a specific sense, offering a moderate visual link to the abstract concept."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 2,
            "rationale": "The movement is expansive but does not clearly evoke a specific sensory experience or physical feeling."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture simulates a sudden bodily reaction or reflex to an external or internal physical stimulus."
          },
          "qwen": {
            "score": 4,
            "rationale": "Opening the arms and tilting the head strongly evokes the bodily experience of receiving external stimuli through the skin and senses."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is relatively large and quick, making it moderately salient, though it lacks complexity."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is expansive with the arms fully extended, but it is very brief, providing moderate visual prominence."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and expansive enough to be noticed but is performed at a moderate speed and size."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, with only a slight hint of surprise or reaction accompanying the head turn."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is calm and receptive, hinting at an internal state, but lacks strong emotional markers."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple and easy to perform, though its connection to the word is weak."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is simple and easy to process, making it appropriate for learning, even if the semantic link is somewhat abstract."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture uses simple, gross motor movements that are cognitively undemanding and easy to parse."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 3,
            "rationale": "The movement is a generic expansive gesture that is somewhat recognizable but not tied to a specific cultural meaning."
          },
          "pro": {
            "score": 2,
            "rationale": "While recognizable as a startle or physical reaction, it is not a common or standard gesture specifically used to convey 'sensation'."
          },
          "qwen": {
            "score": 4,
            "rationale": "The open-arm posture is a common Western convention for embracing, feeling freedom, or receiving something."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and physically effortless to reproduce."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very simple, natural, and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no dexterity, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 71,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Style",
      "title": "71_Style.avi",
      "local_path": "data/gesture_videos/71_Style.avi",
      "video": "assets/rating-videos/71_Style.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.667,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'fashion', 'modeling', or 'beauty' rather than the broader concept of 'style'.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as 'pose', 'model', or 'confidence' rather than the abstract noun 'style' itself.; Might be confused with 'hip' due to hand placement.",
      "models": {
        "flash": {
          "description": "The actor performs a sweeping motion with her right hand from her side up toward her head, then poses with her hand on her hip.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'fashion', 'modeling', or 'beauty' rather than the broader concept of 'style'."
        },
        "pro": {
          "description": "The actor places one hand on her hip and sweeps her other hand back over her hair, striking a confident pose before returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor places her left hand on her hip, shifts her weight to one leg, and tilts her head slightly, adopting a classic modeling or fashion pose before returning to a neutral standing position.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as 'pose', 'model', or 'confidence' rather than the abstract noun 'style' itself.; Might be confused with 'hip' due to hand placement."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 2,
            "rationale": "The gesture resembles a 'posing' or 'fashion' motion, which is loosely related to style, but it is not a direct or transparent representation of the abstract concept."
          },
          "pro": {
            "score": 4,
            "rationale": "Striking a pose and grooming hair is a clear and conventionalized visual representation of fashion and style."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture depicts a 'model pose,' which is a strong metonymic representation of fashion and style, visually signaling the concept through body language."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 2,
            "rationale": "It evokes a sense of modeling or showing off one's appearance, which has a weak sensorimotor link to the concept of style."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical actions of grooming oneself and holding a deliberate bodily posture."
          },
          "qwen": {
            "score": 4,
            "rationale": "The action evokes the physical experience of posing for a photo or runway, connecting the abstract word to a concrete bodily stance."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, involving a full arm sweep and a postural shift, making it moderately salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is moderate, involving a clear arm sweep and a shift in body posture to hold a pose."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct (hand to hip, weight shift), but relatively contained and slow rather than expansive or rapid."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral with a slight, subtle smile, providing only a weak emotional cue."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor displays a subtle look of confidence while posing, but the facial expression remains largely neutral."
          },
          "qwen": {
            "score": 3,
            "rationale": "The actor displays a confident, poised expression that complements the pose, though it is not overly dramatic or emotionally intense."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple, easy to follow, and fits well within a learning context without being overly complex."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly balances informativeness with ease of comprehension."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple and cognitively straightforward, making it highly suitable for vocabulary learning without causing overload."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The 'hand on hip' pose and the sweeping motion are common cultural tropes associated with fashion, modeling, and style."
          },
          "pro": {
            "score": 5,
            "rationale": "Posing with a hand on the hip like a fashion model is a highly familiar cultural trope for representing style."
          },
          "qwen": {
            "score": 5,
            "rationale": "The hand-on-hip modeling stance is a widely recognized cultural convention in Western contexts for indicating fashion, confidence, or style."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to perform, requiring no special physical skill."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves basic, everyday movements that are very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and effortless to reproduce, requiring no complex coordination or flexibility."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 72,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Talent",
      "title": "72_Talent.avi",
      "local_path": "data/gesture_videos/72_Talent.avi",
      "video": "assets/rating-videos/72_Talent.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.857,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is highly abstract and does not clearly map to the target word 'talent', making it difficult to interpret without context.",
      "pro_ambiguities": "The gesture could be interpreted as 'me', 'mine', or 'internal', rather than specifically 'talent'.",
      "qwen_ambiguities": "Could be interpreted as 'idea', 'thinking', or 'intelligence' rather than specifically 'talent'; lacks contextual cues (e.g., performance, award, applause) to disambiguate.",
      "models": {
        "flash": {
          "description": "The actor stands still, then raises both arms out to the sides and brings them forward to point at the camera with both index fingers.",
          "confidence": "high",
          "ambiguities": "The gesture is highly abstract and does not clearly map to the target word 'talent', making it difficult to interpret without context."
        },
        "pro": {
          "description": "The actor extends both arms wide to the sides, then brings them forward to point at her own chest with both thumbs.",
          "confidence": "high",
          "ambiguities": "The gesture could be interpreted as 'me', 'mine', or 'internal', rather than specifically 'talent'."
        },
        "qwen": {
          "description": "The actor stands facing the camera, raises both hands to head level with index fingers pointing toward her temples, then extends both arms outward horizontally while maintaining finger-pointing posture, before returning to neutral stance.",
          "confidence": "medium",
          "ambiguities": "Could be interpreted as 'idea', 'thinking', or 'intelligence' rather than specifically 'talent'; lacks contextual cues (e.g., performance, award, applause) to disambiguate."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture of pointing at the camera does not visually represent the abstract concept of 'talent'."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture of pointing to oneself suggests an internal quality or possession, providing a weak visual link to the abstract concept of talent."
          },
          "qwen": {
            "score": 3,
            "rationale": "Pointing to temples suggests mental capacity or innate ability, which loosely relates to 'talent' as an internal trait; however, it does not visually depict talent itself (e.g., skill demonstration) and could be confused with 'thinking' or 'idea'."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "There is no clear bodily action or physical interaction associated with the concept of talent in this movement."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture does not simulate a specific physical action or skill associated with having a talent."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture evokes a sense of accessing or indicating something inside the mind, simulating the concept of inherent mental ability — moderately aligned with sensorimotor experience of ‘having’ talent internally."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively simple and slow, lacking dynamic or expansive qualities."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is expansive, with arms fully extended to the sides before being brought to the chest, making it visually prominent."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is clear, expansive (arms extend fully outward), and temporally distinct — drawing attention effectively through size and directional change from head to sides."
          },
          "delta": 1.333
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains largely neutral throughout; no strong affective cues (e.g., pride, awe, excitement) are conveyed that would reinforce the emotional weight of 'talent'."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 3,
            "rationale": "The gesture is simple to perform, but it does not provide any cognitive support for learning the word."
          },
          "pro": {
            "score": 3,
            "rationale": "While the motor action is simple, the cognitive link between the gesture and the word 'talent' is somewhat abstract and requires interpretation."
          },
          "qwen": {
            "score": 4,
            "rationale": "Gesture involves two simple, sequential movements (point to head → extend arms) that are easy to parse cognitively and motorically appropriate for vocabulary learning contexts."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 2,
            "rationale": "Pointing at someone is a common gesture, but it is not culturally associated with the meaning of 'talent'."
          },
          "pro": {
            "score": 2,
            "rationale": "While pointing to oneself is common, this specific sequence is not a widely recognized emblem for 'talent' in Western culture."
          },
          "qwen": {
            "score": 3,
            "rationale": "Pointing to the head to indicate intelligence or mental ability is somewhat recognizable in Western contexts, but not a conventional emblem for 'talent'; may require interpretation rather than immediate recognition."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves basic, gross motor movements that are very easy for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Very natural and effortless to reproduce — requires only basic arm and hand coordination without fine motor control or balance challenges."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 73,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Fact",
      "title": "73_Fact.avi",
      "local_path": "data/gesture_videos/73_Fact.avi",
      "video": "assets/rating-videos/73_Fact.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.857,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'stop' or 'done' depending on the context.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The gesture strongly suggests 'time', 'watch', or 'late' rather than the target word 'fact'.; It is unclear if the actor intended to mime holding an object, but the contact with the wrist suggests otherwise.",
      "models": {
        "flash": {
          "description": "The actor performs a quick, sharp downward motion with one hand, as if stamping or confirming something, followed by a neutral stance.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'stop' or 'done' depending on the context."
        },
        "pro": {
          "description": "The actor brings her hands together, striking one hand firmly against the other in a decisive motion.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor brings her right hand to her left wrist, briefly touching it as if checking a watch, then returns her arms to her sides.",
          "confidence": "high",
          "ambiguities": "The gesture strongly suggests 'time', 'watch', or 'late' rather than the target word 'fact'.; It is unclear if the actor intended to mime holding an object, but the contact with the wrist suggests otherwise."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The downward stamping motion suggests 'fixing' or 'confirming' a truth, which relates to the concept of a fact, though it is somewhat abstract."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture metaphorically represents a 'fact' as something solid or concrete by bringing the hands together firmly, but lacks direct visual resemblance to the abstract concept."
          },
          "qwen": {
            "score": 1,
            "rationale": "The gesture visually resembles checking a watch or indicating time, bearing no obvious visual relationship to the abstract concept of a 'fact'."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture mimics the physical action of stamping a document, which is a common sensorimotor metaphor for establishing a fact."
          },
          "pro": {
            "score": 3,
            "rationale": "The physical impact of the hands striking together evokes a sense of solidity and undeniable presence, relating to the nature of a fact."
          },
          "qwen": {
            "score": 1,
            "rationale": "The action of checking a wrist does not evoke bodily experiences or physical interactions associated with the meaning of 'fact'."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is sharp and distinct, providing moderate visual salience."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and distinct, with a moderate speed and a defined endpoint at the impact of the hands."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is small, quick, and contained within the torso area, lacking significant visual prominence."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor maintains a mostly neutral, slightly serious facial expression that aligns with stating a fact, but provides only a weak emotional cue."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no emotional cues."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, concise, and easy to associate with the target word without being confusing."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple, direct, and easy to process, making it an optimal fit for learning without cognitive overload."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor action is extremely simple and requires minimal cognitive load to process or execute."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The 'stamping' motion is a widely understood cultural metaphor for verification or finality."
          },
          "pro": {
            "score": 4,
            "rationale": "Striking a hand against the other to emphasize a point or indicate something conclusive is a common gesture in Western cultures."
          },
          "qwen": {
            "score": 1,
            "rationale": "While checking a watch is a common gesture, it is not a recognized or conventional emblem for the word 'fact' in Western culture."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and requires no special motor skills to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The motion of bringing the hands together is extremely natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is physically effortless and very easy for a learner to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 74,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Participation",
      "title": "74_Participation.avi",
      "local_path": "data/gesture_videos/74_Participation.avi",
      "video": "assets/rating-videos/74_Participation.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'inviting', 'offering', or 'pointing', which are related to but not identical to 'participation'.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could potentially be interpreted as 'question', 'idea', or 'attention' depending on context.",
      "models": {
        "flash": {
          "description": "The actor touches their chest with their right hand and then extends their arm forward with an open palm, as if inviting or pointing toward a group.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'inviting', 'offering', or 'pointing', which are related to but not identical to 'participation'."
        },
        "pro": {
          "description": "The actor points to her chest with her index finger, then raises her arm and points upward and forward, mimicking the action of raising a hand to volunteer or speak.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right arm and points her index finger upward, mimicking the common classroom or meeting gesture of volunteering to speak or answer a question.",
          "confidence": "high",
          "ambiguities": "Could potentially be interpreted as 'question', 'idea', or 'attention' depending on context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The gesture of pointing forward with an open hand can be interpreted as inviting others to join or be part of something, which relates to the concept of participation."
          },
          "pro": {
            "score": 4,
            "rationale": "Raising a hand is a strong, conventional visual metaphor for volunteering or participating in a group setting."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture of raising a hand is a widely recognized symbol for volunteering to participate, creating a clear metonymic link to the word."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The movement simulates the physical act of gesturing toward others to include them, which is a common bodily action associated with inviting participation."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical, bodily action of raising one's hand in a classroom or meeting to signal involvement."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement strongly evokes the physical sensation and action of raising one's hand to join a discussion or activity."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, involving a transition from the self to an outward direction, making it moderately salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and distinct, involving a two-part motion from the chest to an elevated arm position, but remains moderate in speed and size."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct but relatively contained in size and speed, lacking expansive dynamics."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a largely neutral facial expression with minimal emotional signaling or enthusiasm."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple, direct, and easy to associate with the concept of inviting or including others."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly balances informativeness with ease of cognitive processing."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is extremely simple, involving a single arm movement that is easy to process cognitively."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The gesture of extending an open hand toward others is a common, culturally understood way to signal invitation or inclusion."
          },
          "pro": {
            "score": 5,
            "rationale": "Raising a hand to indicate participation is a highly familiar and universally understood convention in Western educational and professional contexts."
          },
          "qwen": {
            "score": 5,
            "rationale": "Raising a hand to speak is a highly familiar and conventional gesture in Western educational and professional contexts."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and natural, making it extremely easy for a learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves basic, everyday movements that are very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, effortless, and requires no complex motor coordination to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 75,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Tendency",
      "title": "75_Tendency.avi",
      "local_path": "data/gesture_videos/75_Tendency.avi",
      "video": "assets/rating-videos/75_Tendency.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'growth', 'increase', or 'going up' rather than specifically 'tendency'.",
      "pro_ambiguities": "The gesture could also be interpreted as 'trend', 'direction', or 'increase', given its abstract, metaphorical nature.",
      "qwen_ambiguities": "The gesture could also represent 'increase', 'rise', or 'future' due to the upward direction.; Without context, the specific nuance of 'habitual inclination' vs 'single event direction' is not visually distinguished.",
      "models": {
        "flash": {
          "description": "The actor performs a sweeping, diagonal upward motion with both hands, moving from the lower left to the upper right, suggesting a trajectory or inclination.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'growth', 'increase', or 'going up' rather than specifically 'tendency'."
        },
        "pro": {
          "description": "The actor moves both arms upwards and to her left in a smooth, diagonal trajectory, with her gaze following the movement of her hands.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'trend', 'direction', or 'increase', given its abstract, metaphorical nature."
        },
        "qwen": {
          "description": "The actor raises both hands in front of her torso and sweeps them diagonally upward to her left, tracing an invisible slope or path, before returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": "The gesture could also represent 'increase', 'rise', or 'future' due to the upward direction.; Without context, the specific nuance of 'habitual inclination' vs 'single event direction' is not visually distinguished."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The diagonal upward movement iconically represents a 'trend' or 'inclination' toward a certain direction, which aligns with the abstract meaning of tendency."
          },
          "pro": {
            "score": 3,
            "rationale": "The upward, diagonal sweeping motion metaphorically represents a trend, direction, or inclination, providing a moderate visual link to the abstract concept of a 'tendency'."
          },
          "qwen": {
            "score": 4,
            "rationale": "The upward diagonal sweep effectively maps the abstract concept of an 'inclination' or 'direction' inherent in the word tendency onto physical space."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The movement simulates a physical trajectory or path, grounding the abstract concept of a tendency in a spatial, directional action."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture involves a directional movement of the arms, but lacks a strong simulation of physical interaction or bodily experience, relying more on spatial metaphor."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture simulates the action of tracing a graph or following a path, evoking a sense of directional movement."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, using both arms to create a visible diagonal line, though it is not overly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and involves both arms extending outwards and upwards, making it moderately salient without being overly expansive."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and occupies a distinct zone of space, though it is performed at a moderate speed and size."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no emotional cues."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture, conveying no specific emotion."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple, easy to perform, and directly maps to the concept of a directional trend without unnecessary complexity."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is simple, straightforward, and easy to process, making it a well-balanced representation for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor pattern is simple and intuitive, perfectly matching the abstract nature of the word without adding unnecessary cognitive load."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 3,
            "rationale": "Using a diagonal line to represent a trend or tendency is a common convention in graphs and spatial metaphors, making it somewhat recognizable."
          },
          "pro": {
            "score": 4,
            "rationale": "Using an upward diagonal motion to indicate a trend, direction, or inclination is a common spatial metaphor in Western cultures (e.g., resembling a graph)."
          },
          "qwen": {
            "score": 4,
            "rationale": "Tracing a line in the air to indicate a trend or direction is a common conventional gesture in Western educational and business contexts."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and natural, involving a basic diagonal sweep that any learner could easily replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The sweeping arm movement is very natural, requires no special coordination, and is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, requires no dexterity, and can be easily reproduced by learners of any age."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 76,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Theory",
      "title": "76_Theory.avi",
      "local_path": "data/gesture_videos/76_Theory.avi",
      "video": "assets/rating-videos/76_Theory.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "medium",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is highly abstract and could easily be interpreted as 'idea', 'concept', 'plan', or 'structure' rather than specifically 'theory'.",
      "pro_ambiguities": "The gesture is highly abstract and could easily be interpreted as 'concept', 'idea', 'box', or 'size' without the target word context.",
      "qwen_ambiguities": "The gesture could easily be interpreted as 'idea', 'structure', 'framework', or 'balance' rather than specifically 'theory'.; Without audio context, the specific abstract noun being referenced is unclear.",
      "models": {
        "flash": {
          "description": "The actor brings both hands up from the sides to meet in front of the chest with palms facing each other, then pulls them apart slightly as if framing or presenting an abstract concept.",
          "confidence": "medium",
          "ambiguities": "The gesture is highly abstract and could easily be interpreted as 'idea', 'concept', 'plan', or 'structure' rather than specifically 'theory'."
        },
        "pro": {
          "description": "The actor raises both hands to chest level with palms facing each other, as if holding or framing an invisible, abstract object, holds the position briefly, and then lowers her arms.",
          "confidence": "high",
          "ambiguities": "The gesture is highly abstract and could easily be interpreted as 'concept', 'idea', 'box', or 'size' without the target word context."
        },
        "qwen": {
          "description": "The actor raises both hands to shoulder height with palms facing inward and fingers spread, as if holding or framing an invisible object, then lowers them back to her sides.",
          "confidence": "medium",
          "ambiguities": "The gesture could easily be interpreted as 'idea', 'structure', 'framework', or 'balance' rather than specifically 'theory'.; Without audio context, the specific abstract noun being referenced is unclear."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 2,
            "rationale": "The gesture is abstract and does not clearly represent the concept of a 'theory' in a visually transparent way."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture of holding an invisible space weakly resembles the abstract nature of a 'theory' as a framed concept or idea, but the visual connection is not highly transparent."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture is metaphorical, suggesting the framing or holding of an abstract concept, but lacks a direct visual link to the specific semantics of 'theory'."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 2,
            "rationale": "It evokes a vague sense of 'holding' or 'presenting' an idea, but lacks a strong physical action component."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture evokes a weak physical interaction of holding or weighing an abstract object in one's hands."
          },
          "qwen": {
            "score": 2,
            "rationale": "The action simulates holding an object, which is a weak bodily correlate for an abstract intellectual concept like a theory."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively small, slow, and contained, lacking high visual prominence."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively subtle, consisting of a simple raising and holding of the arms without expansive or rapid dynamics."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is symmetrical and clear, drawing attention to the upper body, but is relatively slow and contained."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple and easy to perform, though its connection to the word is not immediately intuitive."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is motorically simple and not overloaded, though its abstract nature requires some cognitive mapping to the word."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor pattern is extremely simple and cognitively undemanding, making it highly suitable for a learning context."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 3,
            "rationale": "The movement resembles a generic 'presenting' or 'framing' gesture common in academic or explanatory contexts."
          },
          "pro": {
            "score": 3,
            "rationale": "Using hands to frame or hold an invisible space is a somewhat recognizable convention for indicating an abstract concept or idea in Western contexts."
          },
          "qwen": {
            "score": 3,
            "rationale": "The 'framing' or 'holding a concept' hand shape is somewhat recognizable in Western contexts as a metaphor for ideas, but is not a specific emblem for 'theory'."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and requires no special physical skill to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a very basic and natural arm movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture involves a natural, bilateral arm movement that is effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 77,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Therapy",
      "title": "77_Therapy.avi",
      "local_path": "data/gesture_videos/77_Therapy.avi",
      "video": "assets/rating-videos/77_Therapy.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could be interpreted as 'massage', 'pain', or 'applying lotion' rather than specifically 'therapy'.",
      "pro_ambiguities": "The word 'therapy' is a broad concept; the gesture specifically depicts physical therapy, which might not align with learners who primarily associate the word with psychological therapy.",
      "qwen_ambiguities": "Could be interpreted simply as 'pain', 'cold', or 'shoulder' without the lexical label.; Might suggest 'massage' more specifically than general 'therapy'.",
      "models": {
        "flash": {
          "description": "The actor performs a gentle, rhythmic rubbing motion on their upper arm, as if soothing a sore muscle or applying a topical treatment.",
          "confidence": "high",
          "ambiguities": "The gesture could be interpreted as 'massage', 'pain', or 'applying lotion' rather than specifically 'therapy'."
        },
        "pro": {
          "description": "The actor rubs her left shoulder and upper arm with her right hand, simulating a massage or physical therapy.",
          "confidence": "high",
          "ambiguities": "The word 'therapy' is a broad concept; the gesture specifically depicts physical therapy, which might not align with learners who primarily associate the word with psychological therapy."
        },
        "qwen": {
          "description": "The actor stands neutrally, then raises her right hand to rub her left upper arm/shoulder while tilting her head to the side with eyes closed, suggesting relief or soothing, before returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": "Could be interpreted simply as 'pain', 'cold', or 'shoulder' without the lexical label.; Might suggest 'massage' more specifically than general 'therapy'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The gesture represents the act of receiving physical therapy or soothing a physical ailment, which is a common association with the concept of therapy."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture depicts physical therapy by rubbing a muscle, which represents one specific type of therapy, though it may not capture the broader concept of psychotherapy."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture depicts physical soothing or massage, which is a specific subtype of therapy (physiotherapy/massage), but does not visually represent the broader abstract concept of therapy."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The rubbing motion strongly evokes the tactile sensation of self-care or physical treatment."
          },
          "pro": {
            "score": 4,
            "rationale": "The action of rubbing the shoulder strongly evokes the physical sensation and bodily interaction of receiving physical therapy or a massage."
          },
          "qwen": {
            "score": 4,
            "rationale": "Rubbing a sore muscle is a strong tactile and bodily experience that evokes the sensation of pain relief and physical treatment."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is small, localized to the arm, and relatively slow, making it subtle rather than expansive."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is localized to the shoulder area and is relatively subtle, lacking large, expansive, or rapid dynamics."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is relatively small, contained near the torso, and lacks large or rapid dynamics that would strongly grab visual attention."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral throughout the gesture, providing no additional emotional cues."
          },
          "qwen": {
            "score": 3,
            "rationale": "The head tilt and closed eyes convey a sense of relief or mild discomfort being soothed, adding affective meaning to the physical action."
          },
          "delta": 1.333
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, repetitive, and easy to perform, making it highly appropriate for a learning context."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is simple, straightforward, and easy to process, making it well-suited for learning without cognitive overload."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor plan is extremely simple (one hand rubbing the other arm) and cognitively undemanding, making it ideal for learning."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "Rubbing a sore area is a universally understood gesture for physical discomfort and the need for care."
          },
          "pro": {
            "score": 4,
            "rationale": "Rubbing a sore muscle is a widely recognized action associated with physical ailments and treatments like massage or physical therapy in Western cultures."
          },
          "qwen": {
            "score": 4,
            "rationale": "Self-soothing by rubbing a sore spot is a widely recognized human behavior associated with healing or pain management in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very natural and requires no special coordination or effort to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a simple, everyday movement that is highly natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is natural, requires no dexterity, and can be effortlessly reproduced by learners of any age."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 78,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Tradition",
      "title": "78_Tradition.avi",
      "local_path": "data/gesture_videos/78_Tradition.avi",
      "video": "assets/rating-videos/78_Tradition.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.667,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is highly abstract and could be interpreted as 'opening', 'presenting', or 'releasing' rather than 'tradition'.",
      "pro_ambiguities": "The gesture could easily be interpreted as 'prayer', 'religion', or 'respect' rather than the broader concept of 'tradition'.",
      "qwen_ambiguities": "Could be interpreted simply as 'dance' or 'kick'; The link between a specific dance step and the broad concept of 'tradition' is not immediately obvious without the label",
      "models": {
        "flash": {
          "description": "The actor starts with hands clasped together in front of the chest, then opens them outward and downward in a smooth, symmetrical motion.",
          "confidence": "high",
          "ambiguities": "The gesture is highly abstract and could be interpreted as 'opening', 'presenting', or 'releasing' rather than 'tradition'."
        },
        "pro": {
          "description": "The actor brings her hands together in front of her chest with palms touching, resembling a prayer or gesture of reverence, before lowering them.",
          "confidence": "high",
          "ambiguities": "The gesture could easily be interpreted as 'prayer', 'religion', or 'respect' rather than the broader concept of 'tradition'."
        },
        "qwen": {
          "description": "The actor performs a small, folk-dance-like step, lifting her right leg with a bent knee while moving her hands outward and down, then returning to a neutral stance.",
          "confidence": "medium",
          "ambiguities": "Could be interpreted simply as 'dance' or 'kick'; The link between a specific dance step and the broad concept of 'tradition' is not immediately obvious without the label"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 2,
            "rationale": "The gesture is abstract and does not clearly represent the concept of 'tradition' visually; it could represent many other concepts like 'opening' or 'sharing'."
          },
          "pro": {
            "score": 3,
            "rationale": "The prayer-like gesture represents a common form of traditional ritual or practice, providing a moderate visual link to the abstract concept of tradition."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture depicts a specific dance step, which is only indirectly related to the abstract concept of 'tradition' via metonymy (cultural dance representing tradition)."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 2,
            "rationale": "The movement is graceful but lacks a specific physical action or interaction that would ground the abstract concept of tradition in bodily experience."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves a specific, recognizable bodily action (clasping hands) that is often physically performed in traditional ceremonies."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement simulates a rhythmic physical activity (dancing), evoking bodily engagement associated with cultural practices."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is slow, controlled, and relatively small in scale, lacking the dynamism needed to be highly salient."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively subtle and constrained, involving a simple bringing together of the hands in front of the chest."
          },
          "qwen": {
            "score": 3,
            "rationale": "The leg lift and arm movement are distinct and break the neutral posture, drawing attention without being overly large."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, static facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's facial expression remains mostly neutral, conveying only a slight sense of solemnity."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor's facial expression remains largely neutral throughout the gesture, offering no additional emotional cues."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple and easy to perform, though its lack of semantic clarity makes it less effective for learning."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple and straightforward, making it easy to process without cognitive overload."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single coordinated movement that is easy to process cognitively."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 3,
            "rationale": "The gesture is a generic, somewhat formal movement that is recognizable but not tied to a specific cultural convention for 'tradition'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture of bringing palms together is widely recognized in Western cultures as a symbol of prayer, respect, or ritual, which are strongly tied to tradition."
          },
          "qwen": {
            "score": 3,
            "rationale": "Folk dancing is a recognizable symbol of tradition in Western contexts, though the specific step is generic rather than a specific emblem."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple, symmetrical, and requires no special coordination, making it effortless to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is basic, natural, and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is physically simple and requires no special skill, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 79,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Triumph",
      "title": "79_Triumph.avi",
      "local_path": "data/gesture_videos/79_Triumph.avi",
      "video": "assets/rating-videos/79_Triumph.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'reaching' or 'stretching' rather than specifically 'triumph' due to the lack of facial affect.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The neutral facial expression might make the emotional intensity of 'triumph' less clear compared to 'victory' or 'success'.",
      "models": {
        "flash": {
          "description": "The actor performs a single-arm upward reach, extending the arm fully above the head while leaning slightly to the side, mimicking a celebratory gesture.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'reaching' or 'stretching' rather than specifically 'triumph' due to the lack of facial affect."
        },
        "pro": {
          "description": "The actor raises her right arm high into the air with a clenched fist, leaning slightly to the side, before returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands still, then raises her right arm straight up with a clenched fist, leaning her torso slightly to the side, holding the pose briefly before returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": "The neutral facial expression might make the emotional intensity of 'triumph' less clear compared to 'victory' or 'success'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The upward arm extension is a conventional, iconic representation of victory or success, closely mapping to the concept of triumph."
          },
          "pro": {
            "score": 5,
            "rationale": "Raising a clenched fist high is a highly transparent and universally recognized visual representation of victory and triumph."
          },
          "qwen": {
            "score": 5,
            "rationale": "The raised fist is a universally recognized emblem for victory, success, and triumph, creating a direct visual link to the word's meaning."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It evokes the physical sensation of reaching upward in celebration, though it lacks the full-body engagement often associated with a true feeling of triumph."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the physical action and bodily sensation of celebrating a significant achievement or win."
          },
          "qwen": {
            "score": 4,
            "rationale": "The upward thrust of the arm simulates the physical sensation of celebrating a win or overcoming an obstacle, evoking feelings of power and elevation."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, but relatively brief and contained, lacking the expansive energy often associated with high-salience gestures."
          },
          "pro": {
            "score": 4,
            "rationale": "The upward thrust of the arm is a large, clear, and expansive movement that easily captures attention."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is large, expansive, and distinct against the neutral background, effectively capturing attention."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 2,
            "rationale": "The facial expression remains largely neutral throughout the movement, failing to reinforce the emotional intensity of the word 'triumph'."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's facial expression remains relatively neutral, providing only a very weak emotional cue of the joy typically associated with triumph."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor's facial expression remains largely neutral throughout the gesture, lacking the intense joy or relief typically associated with triumph."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and easy to understand, making it highly appropriate for a learning context."
          },
          "pro": {
            "score": 5,
            "rationale": "The single, straightforward motion is simple, direct, and optimally balanced for easy cognitive processing."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single arm movement, making it cognitively and motorically easy to process and associate with the word."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The 'fist pump' or upward reach is a universally recognized gesture for victory in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "The raised fist is a highly familiar and widely used emblem for success and victory in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "The raised fist is a highly familiar cultural symbol for victory and achievement in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and requires no special physical skill to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a simple, single-arm raise, making it very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no special skill or flexibility, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 80,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Exercise",
      "title": "80_Exercise.avi",
      "local_path": "data/gesture_videos/80_Exercise.avi",
      "video": "assets/rating-videos/80_Exercise.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could be interpreted as 'squat' specifically, rather than the broader category of 'exercise', though it remains a strong representative example.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted specifically as the word 'squat' rather than the broader category of 'exercise', though the fit is strong.",
      "models": {
        "flash": {
          "description": "The actor performs a single squat, keeping her arms extended forward at shoulder height throughout the movement.",
          "confidence": "high",
          "ambiguities": "The gesture could be interpreted as 'squat' specifically, rather than the broader category of 'exercise', though it remains a strong representative example."
        },
        "pro": {
          "description": "The actor extends her arms forward and performs a full-body squat, then returns to a standing position.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor extends both arms forward for balance and performs a deep squat, holding the position briefly before returning to a standing posture.",
          "confidence": "high",
          "ambiguities": "Could be interpreted specifically as the word 'squat' rather than the broader category of 'exercise', though the fit is strong."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "Squatting is a very common and recognizable form of physical exercise, making the gesture highly iconic for the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "Performing a squat is a direct and highly transparent visual representation of the concept of physical exercise."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a direct enactment of the target concept; performing a squat is a prototypical form of physical exercise."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture involves a full-body movement that directly simulates the physical experience of performing a common exercise."
          },
          "pro": {
            "score": 5,
            "rationale": "The full-body movement of squatting strongly evokes the physical exertion and bodily action associated with exercising."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement strongly evokes the physical sensations of leg engagement, balance, and vertical displacement associated with working out."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is performed at a moderate, controlled speed rather than being overly expansive or rapid."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture involves a large, full-body vertical movement that is visually prominent and expansive."
          },
          "qwen": {
            "score": 4,
            "rationale": "The squat involves a large, full-body movement that is visually distinct and clearly separates the action from a neutral standing pose."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the movement."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the movement, conveying no emotional meaning."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is largely neutral but shows mild focus or concentration, lacking strong affective signaling like strain or joy."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, easy to understand, and perfectly fits the concept of 'exercise'."
          },
          "pro": {
            "score": 5,
            "rationale": "The single, clear action of a squat is perfectly balanced, being highly informative of the concept without being overly complex."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is a single, cohesive action that is cognitively simple to map to the word without being overly intricate."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Squatting is a universally recognized physical movement associated with fitness and exercise in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "The squat is a highly familiar and widely recognized exercise movement in Western culture."
          },
          "qwen": {
            "score": 5,
            "rationale": "Squatting is a fundamental human movement and a widely recognized standard exercise in Western fitness contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is a basic, natural physical action that is very easy for almost anyone to replicate."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is a basic physical action that is easy for most learners to reproduce, though it requires full-body engagement and standing up."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is natural and effortless for most learners to reproduce physically, requiring no complex fine motor skills."
          },
          "delta": 0.667
        }
      }
    },
    {
      "index": 81,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Innocence",
      "title": "81_Innocence.avi",
      "local_path": "data/gesture_videos/81_Innocence.avi",
      "video": "assets/rating-videos/81_Innocence.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could also be interpreted as 'sincerity', 'love', or 'honesty', which are semantically related to innocence but not identical.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Gesture is polysemous and could easily be interpreted as 'love', 'sorry', 'honesty', or 'me'; Lacks specific visual markers distinguishing innocence from general sincerity",
      "models": {
        "flash": {
          "description": "The actor places both hands over her heart and looks slightly upward and to the side with a calm, gentle facial expression.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'sincerity', 'love', or 'honesty', which are semantically related to innocence but not identical."
        },
        "pro": {
          "description": "The actor brings both hands up to cross them over her chest/heart while looking slightly upwards with a soft, open facial expression.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands still, then brings both hands up to clasp them gently over her chest/heart area, holding the pose with a calm expression before lowering her hands.",
          "confidence": "medium",
          "ambiguities": "Gesture is polysemous and could easily be interpreted as 'love', 'sorry', 'honesty', or 'me'; Lacks specific visual markers distinguishing innocence from general sincerity"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "Placing hands over the heart is a conventional, iconic gesture representing sincerity, purity, and innocence."
          },
          "pro": {
            "score": 4,
            "rationale": "Placing hands over the heart is a strong metaphorical representation of purity, sincerity, and a clear conscience, closely aligning with the concept of innocence."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture is metaphorical (pure heart) rather than visually representative of innocence; it closely resembles gestures for love, sincerity, or apology."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture evokes a physical sensation of holding or protecting one's heart, which is metaphorically linked to innocence."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves a self-directed touch to the chest, simulating the physical expression of an internal, heartfelt state rather than a complex external action."
          },
          "qwen": {
            "score": 3,
            "rationale": "Touching the chest evokes the somatic experience of feeling emotion or sincerity within the body."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is slow, gentle, and relatively small, lacking high dynamic salience."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is gentle, relatively slow, and constrained to the torso, lacking expansive or highly prominent dynamics."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is small, slow, and contained within the torso area, lacking high visual prominence."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 4,
            "rationale": "The soft, calm, and slightly upward-looking facial expression effectively conveys a sense of purity and innocence."
          },
          "pro": {
            "score": 4,
            "rationale": "The actor's soft facial expression and upward gaze effectively communicate a sense of purity, vulnerability, and lack of guilt."
          },
          "qwen": {
            "score": 3,
            "rationale": "The actor maintains a soft, serene expression that aligns with the concept of purity or calmness."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for the abstract concept of innocence."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple and direct, providing a clear semantic link without any cognitive overload, making it optimal for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor action is extremely simple and requires minimal cognitive load to process or execute."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The 'hand over heart' gesture is a widely recognized and culturally familiar sign of sincerity and innocence in Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "Crossing hands over the heart to indicate sincerity, truthfulness, or innocence is a highly familiar and widely understood emblem in Western cultures."
          },
          "qwen": {
            "score": 4,
            "rationale": "Placing hands over the heart is a widely recognized Western emblem for sincerity, honesty, or deep feeling."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very natural, simple, and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is physically undemanding and very natural, making it effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is natural, requires no dexterity, and is effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 82,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Change",
      "title": "82_Change.avi",
      "local_path": "data/gesture_videos/82_Change.avi",
      "video": "assets/rating-videos/82_Change.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.857,
      "flash_confidence": "medium",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture is quite abstract and could potentially be interpreted as representing other concepts like 'feeling', 'breathing', or 'turning' rather than 'change'.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as 'swap' or 'exchange' specifically rather than the broader concept of 'change'.; Without seeing the full dynamic motion, it might resemble a brushing down gesture if the swap is subtle.",
      "models": {
        "flash": {
          "description": "The actor places her right hand on her chest and her left hand on her stomach, then moves both hands in a circular motion before returning to a neutral standing position.",
          "confidence": "medium",
          "ambiguities": "The gesture is quite abstract and could potentially be interpreted as representing other concepts like 'feeling', 'breathing', or 'turning' rather than 'change'."
        },
        "pro": {
          "description": "The actor holds both hands in front of her torso, one above the other, and then swaps their vertical positions in a circular motion.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands facing forward and brings both hands up in front of the torso. The hands perform a vertical swapping or alternating motion (resembling the ASL sign for 'change' where fists exchange vertical positions) before returning to the sides.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as 'swap' or 'exchange' specifically rather than the broader concept of 'change'.; Without seeing the full dynamic motion, it might resemble a brushing down gesture if the swap is subtle."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 2,
            "rationale": "The circular motion is abstract and does not clearly represent the concept of 'change' in a way that is immediately intuitive."
          },
          "pro": {
            "score": 4,
            "rationale": "The swapping motion of the hands clearly represents the concept of changing or exchanging one thing for another."
          },
          "qwen": {
            "score": 4,
            "rationale": "The vertical swapping of hand positions is a strong metaphorical representation of exchange, alteration, or transformation."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 2,
            "rationale": "The movement is somewhat abstract and does not strongly evoke a specific physical action associated with the concept of changing something."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture simulates the physical action of manipulating two objects to switch their positions."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture involves a clear manual action of swapping, evoking the physical sense of exchanging items or states."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively small and slow, lacking the dynamic energy that might make it more memorable."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is distinct and involves both arms, but is moderate in speed and size."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is contained within the torso area; it is distinct and deliberate but not large or expansive."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 3,
            "rationale": "The gesture is simple and easy to perform, though its connection to the target word is not very clear."
          },
          "pro": {
            "score": 5,
            "rationale": "The simple swapping motion is easy to process and perfectly captures the core meaning without being overly complex."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, requiring only basic bimanual coordination, making it highly suitable for learning contexts."
          },
          "delta": 1.333
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 2,
            "rationale": "This specific circular hand movement is not a standard or widely recognized cultural emblem for 'change'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture of swapping hands is widely recognized as meaning 'change' or 'switch'."
          },
          "qwen": {
            "score": 4,
            "rationale": "The motion aligns with the common ASL sign for 'change' and the universal metaphor of swapping positions to indicate alteration."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and physically easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, requires no special coordination, and is effortless to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, requires no flexibility, and is very easy for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 83,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Sympathy",
      "title": "83_Sympathy.avi",
      "local_path": "data/gesture_videos/83_Sympathy.avi",
      "video": "assets/rating-videos/83_Sympathy.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as 'Sorry' or 'Apology' due to the head bow.; Might resemble a gesture for 'Prayer' or 'Please' depending on hand tightness.",
      "models": {
        "flash": {
          "description": "The actor leans forward slightly, clasps her hands together near her chest, and adopts a somber, concerned facial expression.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor leans forward slightly, clasps her hands together in front of her torso, and displays a concerned, slightly sad facial expression.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor brings both hands together in front of the chest, clasping them, while simultaneously bowing the head and upper body slightly forward and downward.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as 'Sorry' or 'Apology' due to the head bow.; Might resemble a gesture for 'Prayer' or 'Please' depending on hand tightness."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The posture of leaning in with clasped hands is a conventional, iconic way to express concern or sympathy for someone else's situation."
          },
          "pro": {
            "score": 4,
            "rationale": "The posture of leaning forward with clasped hands is a recognized social signal for showing concern, visually representing the act of offering sympathy."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture metaphorically places the emotion in the heart center and uses a head bow to signify solemnity or care, creating a clear visual link to the abstract concept."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture simulates a bodily posture of leaning toward someone in distress, which evokes a physical sense of empathy."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical feeling of leaning towards someone to offer comfort or listen attentively to their troubles."
          },
          "qwen": {
            "score": 3,
            "rationale": "Clasping hands and leaning forward simulates the physical sensation of holding concern or feeling a weight in the chest associated with empathy."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively subtle and constrained, focusing more on posture than expansive motion."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is slow, subtle, and constrained, involving only a slight lean and bringing the hands together."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is contained but distinct, involving both arm flexion and a torso lean that draws attention to the center of the body."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 4,
            "rationale": "The actor's facial expression is clearly somber and concerned, which effectively communicates the emotional weight of sympathy."
          },
          "pro": {
            "score": 4,
            "rationale": "The actor's facial expression clearly conveys sadness and concern, which strongly matches the affective meaning of sympathy."
          },
          "qwen": {
            "score": 4,
            "rationale": "The downward gaze and bowed head effectively communicate sadness, solemnity, or concern, which are key components of sympathy."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, clear, and directly maps to the target word without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, providing an optimal balance of informativeness without any cognitive overload."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor sequence is simple and natural, requiring no complex coordination, making it highly suitable for vocabulary learning."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Leaning in with clasped hands is a very common and widely understood gesture for expressing sympathy in Western cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "This specific body language and facial expression are widely understood in Western cultures as a sign of empathy, condolence, or sympathy."
          },
          "qwen": {
            "score": 4,
            "rationale": "Clasping hands near the heart with a head bow is a widely recognized Western convention for sincerity, sorrow, or deep feeling, though it may overlap with 'sorry'."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very natural and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is extremely simple, requiring only a slight change in posture and hand position, making it effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is effortless to reproduce, requiring only basic arm and head movements that are comfortable for most learners."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 84,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Procedure",
      "title": "84_Procedure.avi",
      "local_path": "data/gesture_videos/84_Procedure.avi",
      "video": "assets/rating-videos/84_Procedure.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.571,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is completely abstract and lacks any semantic link to the word 'procedure', making it impossible to interpret the intended meaning without the label.",
      "pro_ambiguities": "The gesture could easily be interpreted as 'step', 'walk', 'forward', or 'progress' rather than specifically 'procedure'.",
      "qwen_ambiguities": "The gesture could easily be interpreted as 'walk', 'advance', 'approach', or 'next' rather than 'procedure'.; The lack of hand involvement removes common cues for process or method (e.g., counting, listing, manipulating).",
      "models": {
        "flash": {
          "description": "The actor stands still and performs a simple, rhythmic stepping motion with one foot, then returns to a neutral standing position.",
          "confidence": "high",
          "ambiguities": "The gesture is completely abstract and lacks any semantic link to the word 'procedure', making it impossible to interpret the intended meaning without the label."
        },
        "pro": {
          "description": "The actor lifts her right leg and takes a deliberate step forward, then brings her left leg to meet it.",
          "confidence": "high",
          "ambiguities": "The gesture could easily be interpreted as 'step', 'walk', 'forward', or 'progress' rather than specifically 'procedure'."
        },
        "qwen": {
          "description": "The actor stands with arms at her sides and takes a single, deliberate step forward with one foot, then returns to a neutral standing position.",
          "confidence": "medium",
          "ambiguities": "The gesture could easily be interpreted as 'walk', 'advance', 'approach', or 'next' rather than 'procedure'.; The lack of hand involvement removes common cues for process or method (e.g., counting, listing, manipulating)."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The stepping motion has no clear visual or semantic connection to the abstract concept of a 'procedure'."
          },
          "pro": {
            "score": 2,
            "rationale": "Taking a physical step metaphorically represents a 'step' in a process, but weakly resembles the abstract concept of a full procedure."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture relies on a weak metaphorical link between physical 'steps' and the abstract 'steps' of a procedure, lacking direct visual resemblance."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "The movement is a generic physical action that does not evoke the cognitive or sequential nature of a procedure."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves a clear, full-body movement of the legs, evoking the physical sensation of walking or moving forward."
          },
          "qwen": {
            "score": 2,
            "rationale": "While walking is a physical action, it does not strongly evoke the specific manipulative or cognitive actions associated with following a procedure."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is slow and limited to a small, repetitive foot tap, lacking dynamic or expansive qualities."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is distinct and involves the whole leg and a shift in body weight, providing moderate visual salience."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is small, slow, and constrained to the lower body, making it visually subtle rather than commanding."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the video."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout, providing no affective cues to support the meaning."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 2,
            "rationale": "The gesture is simple, but it is confusing because it does not relate to the target word, making it ineffective for learning."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture is very simple, which makes it easy to process, though it may lack the detail needed to fully convey the target word."
          },
          "qwen": {
            "score": 4,
            "rationale": "The motor action is extremely simple and cognitively undemanding, though perhaps too simple to convey the abstract concept effectively."
          },
          "delta": 1.333
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 2,
            "rationale": "While the movement itself is a common physical action, it is not a recognized cultural gesture for the word 'procedure'."
          },
          "pro": {
            "score": 2,
            "rationale": "While 'taking a step' is a common verbal metaphor for a procedure, it is rarely used as a standalone physical gesture for the concept."
          },
          "qwen": {
            "score": 2,
            "rationale": "Stepping forward is not a conventional or emblematic gesture for 'procedure' in Western contexts, making the association unusual."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is a very simple, natural physical action that anyone can easily replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "Taking a single step forward is a very natural and effortless action for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture involves a basic walking motion that is natural and effortless for any learner to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 85,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Excuse",
      "title": "85_Excuse.avi",
      "local_path": "data/gesture_videos/85_Excuse.avi",
      "video": "assets/rating-videos/85_Excuse.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could also be interpreted as 'stop', 'wait', or 'no' depending on the context.",
      "pro_ambiguities": "The gesture might be interpreted more directly as 'stop' or 'wait' rather than the noun 'excuse'.",
      "qwen_ambiguities": "Gesture could also be interpreted as ‘stop’ or ‘wait’ rather than specifically ‘excuse’.; Lack of facial expression reduces clarity of intended pragmatic function (apology vs. interruption).",
      "models": {
        "flash": {
          "description": "The actor holds both hands up with palms facing forward, fingers slightly spread, and pushes them forward in a short, controlled motion, then returns them to a neutral position.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'stop', 'wait', or 'no' depending on the context."
        },
        "pro": {
          "description": "The actor raises both hands to chest level with palms facing forward, as if signaling someone to stop or wait.",
          "confidence": "high",
          "ambiguities": "The gesture might be interpreted more directly as 'stop' or 'wait' rather than the noun 'excuse'."
        },
        "qwen": {
          "description": "The actor stands facing the camera, raises both hands to chest level with palms open and facing forward, then pushes them slightly outward before lowering them back down. The facial expression remains neutral throughout.",
          "confidence": "medium",
          "ambiguities": "Gesture could also be interpreted as ‘stop’ or ‘wait’ rather than specifically ‘excuse’.; Lack of facial expression reduces clarity of intended pragmatic function (apology vs. interruption)."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture resembles a 'stop' or 'hold on' signal, which is commonly associated with the act of excusing oneself or asking for a pause in social interaction."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture is a conventional emblem often used to signal 'stop' or 'wait', which pragmatically relates to saying 'excuse me' to interrupt, though it does not visually depict the abstract concept of an excuse."
          },
          "qwen": {
            "score": 3,
            "rationale": "The open-palm push-forward motion loosely resembles a polite distancing or clearing gesture, which can metaphorically relate to making space or apologizing — common contexts for 'excuse' — but lacks direct visual mapping to the word’s core semantics."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It simulates the physical act of creating a boundary or requesting space, which is a common bodily response when needing to excuse oneself."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical action of creating a boundary or pausing an interaction by putting hands up."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture evokes a mild sense of physical displacement or yielding space, which may simulate the social act of excusing oneself, though it does not strongly engage bodily memory of specific actions like stepping aside or bowing."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though relatively compact and brief."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and distinct, involving both arms moving to chest level, but it is not overly expansive or rapid."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate in size and speed — clear enough to be noticed but not expansive or rapid; sufficient to draw attention without being overwhelming."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's facial expression remains relatively neutral, providing only a weak emotional cue."
          },
          "qwen": {
            "score": 1,
            "rationale": "Facial expression remains neutral throughout; no emotional cues (e.g., apology, regret, politeness) are conveyed via face, reducing affective reinforcement of the word."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and easy to associate with the target word without cognitive overload."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple, direct, and easy to process, making it an optimal fit for learning."
          },
          "qwen": {
            "score": 4,
            "rationale": "Gesture is simple, symmetrical, and easy to parse cognitively; well-suited for vocabulary learning as it avoids unnecessary motor complexity while still conveying intent."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The 'stop' or 'pause' hand gesture is a universally recognized emblem in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "Raising hands with palms out is a highly familiar and widely understood gesture in Western cultures for pausing or excusing oneself."
          },
          "qwen": {
            "score": 4,
            "rationale": "Open palms pushed forward is a widely recognized gesture in Western cultures for signaling ‘stop,’ ‘wait,’ or ‘I’m sorry’ — all contextually relevant to ‘excuse’ — making it culturally familiar and interpretable."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and requires no special coordination, making it easy for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a basic, everyday movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Gesture requires minimal coordination, uses natural arm movement, and is easily reproducible by learners of most ages and physical abilities."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 86,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Warning",
      "title": "86_Warning.avi",
      "local_path": "data/gesture_videos/86_Warning.avi",
      "video": "assets/rating-videos/86_Warning.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.952,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could also be interpreted as 'stop' or 'attention' rather than specifically 'warning'.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The gesture strongly resembles signs for 'Idea', 'Up', 'Wait', or 'Attention' rather than 'Warning'.; Lack of facial affect makes the intent (alert vs. question vs. statement) unclear.",
      "models": {
        "flash": {
          "description": "The actor raises her right arm straight up and then brings it down in a sharp, vertical motion, mimicking a warning signal or a 'stop' gesture.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'stop' or 'attention' rather than specifically 'warning'."
        },
        "pro": {
          "description": "The actor raises her right hand with the index finger pointing up and wags it back and forth while maintaining a serious facial expression.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right arm with the index finger pointing upward, holding it briefly near head level before lowering it, while maintaining a neutral facial expression.",
          "confidence": "medium",
          "ambiguities": "The gesture strongly resembles signs for 'Idea', 'Up', 'Wait', or 'Attention' rather than 'Warning'.; Lack of facial affect makes the intent (alert vs. question vs. statement) unclear."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The vertical motion is somewhat reminiscent of a warning signal or a 'stop' gesture, though it is slightly abstract."
          },
          "pro": {
            "score": 4,
            "rationale": "The wagging index finger is a strong conventional emblem that directly represents the act of issuing a warning or scolding."
          },
          "qwen": {
            "score": 2,
            "rationale": "The raised index finger is a symbolic gesture for attention or 'wait' rather than a visual depiction of danger or caution associated with warning."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The sharp, downward movement evokes the physical action of signaling or alerting someone."
          },
          "pro": {
            "score": 3,
            "rationale": "Evokes the specific physical action of pointing and wagging a finger at someone to caution them."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is a simple reach upward, lacking the physical blocking, shielding, or urgent motion typically associated with warning someone."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not particularly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is localized to the hand and finger, featuring a repetitive but relatively small motion."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture is relatively slow and contained, lacking the sharp, rapid, or expansive movement that would signal urgency or alarm."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 4,
            "rationale": "The actor's serious and stern facial expression effectively conveys the gravity and affective tone of a warning."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor's facial expression remains largely neutral, missing the concern, seriousness, or urgency that would reinforce the meaning of a warning."
          },
          "delta": 2
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and easy to understand in the context of the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple, direct, and easy to process, making it optimal for learning."
          },
          "qwen": {
            "score": 4,
            "rationale": "The motor execution is very simple and uncomplicated, making it easy to process motorically, though the semantic mapping is weak."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The gesture is a common way to signal attention or a warning in many Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "This is a highly recognizable and widely used gesture in Western cultures for warning or reprimanding."
          },
          "qwen": {
            "score": 3,
            "rationale": "A raised finger is a common gesture for 'attention' or 'wait', which is somewhat related to warning, but it is not a standard emblem specifically for 'warning'."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and can be easily replicated by any learner."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a simple, single-handed movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture involves a basic arm raise and finger extension that is physically effortless and natural for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 87,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Wealth",
      "title": "87_Wealth.avi",
      "local_path": "data/gesture_videos/87_Wealth.avi",
      "video": "assets/rating-videos/87_Wealth.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.476,
      "flash_confidence": "medium",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could be interpreted as 'offering,' 'giving,' or 'here,' rather than specifically 'wealth'.",
      "pro_ambiguities": "The gesture could be interpreted as 'offering', 'holding', or 'heavy' rather than specifically 'wealth'.",
      "qwen_ambiguities": "Could be interpreted as holding a ball or box; Might signify 'size' or 'volume' rather than value; Lacks specific money-related cues",
      "models": {
        "flash": {
          "description": "The actor holds both hands in front of her, palms facing up, and makes a small, quick upward motion as if presenting or offering something.",
          "confidence": "medium",
          "ambiguities": "The gesture could be interpreted as 'offering,' 'giving,' or 'here,' rather than specifically 'wealth'."
        },
        "pro": {
          "description": "The actor brings both hands forward with palms facing up and fingers slightly curled, as if holding or presenting a pile of objects, then returns them to her sides.",
          "confidence": "high",
          "ambiguities": "The gesture could be interpreted as 'offering', 'holding', or 'heavy' rather than specifically 'wealth'."
        },
        "qwen": {
          "description": "The actor lifts both hands to waist level, curving fingers and facing palms inward as if holding a large, invisible spherical object or a heavy stack of items, before returning to a neutral stance.",
          "confidence": "medium",
          "ambiguities": "Could be interpreted as holding a ball or box; Might signify 'size' or 'volume' rather than value; Lacks specific money-related cues"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 2,
            "rationale": "The gesture resembles an offering or presentation, which is only tangentially related to the abstract concept of wealth."
          },
          "pro": {
            "score": 3,
            "rationale": "Holding out hands as if containing a large amount of something relates to wealth, but is not highly specific."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture of holding an invisible object has a weak visual relationship to the abstract concept of wealth, potentially implying possession but lacking specific semantic markers like money or gold."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 2,
            "rationale": "It evokes the physical act of holding or offering, but does not strongly simulate the experience of having or possessing wealth."
          },
          "pro": {
            "score": 3,
            "rationale": "Evokes the physical sensation of holding a heavy pile or quantity of objects."
          },
          "qwen": {
            "score": 3,
            "rationale": "Evokes a moderate sense of haptic feedback, simulating the weight and volume of holding a substantial accumulation of items."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is small, quick, and relatively subtle, lacking expansive or commanding dynamics."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively subtle, involving a simple forward extension of the arms."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct from the neutral pose, occupying the central visual field, though it lacks high speed or expansive range."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is largely neutral with a faint smile, providing minimal affective reinforcement regarding the value or desirability of wealth."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple and easy to perform, though its connection to the target word is not highly intuitive."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is simple and easy to process, though its meaning relies on context."
          },
          "qwen": {
            "score": 4,
            "rationale": "The motor pattern is simple and uncomplicated, making it easy to process without cognitive overload."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 3,
            "rationale": "The gesture of holding palms up is a common way to indicate 'here it is' or 'offering,' but it is not a standard emblem for wealth."
          },
          "pro": {
            "score": 3,
            "rationale": "While holding out hands to show quantity is understood, it is not a highly specific or common emblem for 'wealth'."
          },
          "qwen": {
            "score": 2,
            "rationale": "This specific holding shape is not a standard cultural emblem for wealth (unlike rubbing fingers together), making it less immediately recognizable in that context."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very natural, simple, and effortless to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is highly natural and requires no complex dexterity, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 88,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Benefaction",
      "title": "88_Benefaction.avi",
      "local_path": "data/gesture_videos/88_Benefaction.avi",
      "video": "assets/rating-videos/88_Benefaction.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture is generic and could represent 'giving', 'placing', or 'dropping' rather than specifically 'benefaction'.",
      "pro_ambiguities": "The downward angle of the reach might imply giving to someone smaller or placing something down, rather than a general exchange, but the core meaning of giving remains clear.",
      "qwen_ambiguities": "The gesture could broadly represent 'give', 'offer', or 'present' without specifically conveying the charitable or 'good' aspect of benefaction.",
      "models": {
        "flash": {
          "description": "The actor performs a simple downward reaching motion with one hand, as if placing or giving something to someone below.",
          "confidence": "high",
          "ambiguities": "The gesture is generic and could represent 'giving', 'placing', or 'dropping' rather than specifically 'benefaction'."
        },
        "pro": {
          "description": "The actor bends slightly and extends her right arm forward and downward with an open hand, as if offering or giving something to someone.",
          "confidence": "high",
          "ambiguities": "The downward angle of the reach might imply giving to someone smaller or placing something down, rather than a general exchange, but the core meaning of giving remains clear."
        },
        "qwen": {
          "description": "The actor stands upright, then leans forward slightly while extending her right arm outward and downward with an open hand, as if offering or placing a gift, before returning to a neutral standing position.",
          "confidence": "high",
          "ambiguities": "The gesture could broadly represent 'give', 'offer', or 'present' without specifically conveying the charitable or 'good' aspect of benefaction."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The gesture mimics the act of giving or bestowing something, which aligns with the core meaning of 'benefaction', though it is a generic 'giving' motion."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture of extending an open hand forward clearly represents the act of giving or offering a gift, which aligns well with the meaning of benefaction."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly mimics the act of giving or bestowing something, which is the core semantic component of a benefaction (a charitable gift)."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It simulates the physical action of handing something over, providing a basic sensorimotor link to the concept of providing a benefit."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the physical action of holding an object and handing it over to another person."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement strongly evokes the physical sensation of handing an object to another person, grounding the abstract concept in a concrete action."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively small, slow, and constrained, lacking the expansive quality that would make it highly salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement involves a moderate extension of the arm and a slight bend of the torso, but it is relatively slow and not overly expansive."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct, involving a lean and arm extension, but it is relatively moderate in size and speed."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, almost blank facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's facial expression remains largely neutral, with only a very subtle, gentle look accompanying the offering motion."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral throughout the gesture, lacking specific emotional cues like warmth or generosity."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and easy to understand, making it highly appropriate for a learning context."
          },
          "pro": {
            "score": 5,
            "rationale": "The simple, single-motion gesture perfectly captures the core concept of giving without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single smooth motion that is easy to process cognitively."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The act of reaching out to give something is a universal and highly familiar human gesture."
          },
          "pro": {
            "score": 5,
            "rationale": "The act of extending a hand to offer something is a highly recognizable and universally understood gesture for giving in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Extending an open hand to offer or give something is a highly familiar and universally recognized gesture in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very natural and requires no special skill or coordination to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is straightforward, requires no special coordination, and is very natural and effortless to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no complex motor skills, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 89,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Admission",
      "title": "89_Admission.avi",
      "local_path": "data/gesture_videos/89_Admission.avi",
      "video": "assets/rating-videos/89_Admission.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'welcome', 'invitation', or 'offering', which are semantically related to 'admission' but not identical.",
      "pro_ambiguities": "The gesture could also be interpreted more generally as 'presenting', 'showing', or 'giving', rather than specifically 'admission'.",
      "qwen_ambiguities": "The gesture could equally represent 'Welcome' or 'Enter' rather than the specific noun 'Admission'.; It does not represent the secondary meaning of admission (confessing a truth).",
      "models": {
        "flash": {
          "description": "The actor performs a bowing motion, bending forward at the waist while extending both arms forward with palms facing upward, as if welcoming someone or granting entry.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'welcome', 'invitation', or 'offering', which are semantically related to 'admission' but not identical."
        },
        "pro": {
          "description": "The actor leans forward slightly and extends her right arm with an open palm, as if presenting a ticket or requesting entry, before returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted more generally as 'presenting', 'showing', or 'giving', rather than specifically 'admission'."
        },
        "qwen": {
          "description": "The actor bends forward at the waist and extends both arms outward and downward with open palms, mimicking an inviting 'come in' or ushering motion, before returning to an upright standing position.",
          "confidence": "high",
          "ambiguities": "The gesture could equally represent 'Welcome' or 'Enter' rather than the specific noun 'Admission'.; It does not represent the secondary meaning of admission (confessing a truth)."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture of bowing and extending arms is a classic, recognizable iconic representation of welcoming someone or granting permission to enter, which aligns well with the concept of 'admission'."
          },
          "pro": {
            "score": 3,
            "rationale": "The forward lean and extended hand simulate presenting a ticket or requesting entry, providing a moderate visual link to the concept of admission."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture visually depicts the act of inviting someone to enter, which is the primary physical consequence of gaining admission."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement simulates the physical act of welcoming or ushering someone into a space, engaging the upper body and arms in a way that mimics a real-world social interaction."
          },
          "pro": {
            "score": 3,
            "rationale": "Evokes the physical action of handing over an item for entry or stepping forward to be admitted."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement strongly evokes the bodily experience of ushering someone through a doorway or welcoming them into a space."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, involving a full-body bow and arm extension, which provides moderate visual salience."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement involves a clear forward lean and arm extension, making it moderately salient without being overly expansive."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, involving a bend and arm extension, but remains relatively contained in size."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 2,
            "rationale": "The facial expression remains largely neutral throughout the gesture, providing little additional affective context."
          },
          "pro": {
            "score": 2,
            "rationale": "The facial expression remains largely neutral, with only a slight look of expectation during the forward lean."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a neutral to slightly polite expression, lacking strong emotional signaling."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and directly maps to the concept of admission without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a simple, single movement that is easy to process and does not overload the learner."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is simple enough to be learned quickly but distinct enough to be memorable for the target concept."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "Bowing or gesturing with open arms to invite someone in is a widely understood social convention in many Western and global cultures."
          },
          "pro": {
            "score": 3,
            "rationale": "The action of presenting something for entry is recognizable, though it is a general gesture rather than a highly specific emblem for the word itself."
          },
          "qwen": {
            "score": 5,
            "rationale": "The open-palm 'come in' motion is a highly familiar and conventional emblem in Western cultures for inviting entry."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very natural, simple, and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very simple, involving basic body mechanics, making it effortless for a learner to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, requires no dexterity, and is very easy for learners to reproduce physically."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 90,
      "collection": "gesture",
      "concreteness": "abstract",
      "target_word": "Purpose",
      "title": "90_Purpose.avi",
      "local_path": "data/gesture_videos/90_Purpose.avi",
      "video": "assets/rating-videos/90_Purpose.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 1.238,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is highly abstract and does not clearly map to the semantic meaning of 'purpose'. It could be interpreted as pointing, directing, or simply moving, but not specifically as 'purpose'.",
      "pro_ambiguities": "The gesture could also be interpreted as 'target', 'goal', or 'point'.",
      "qwen_ambiguities": "Gesture could be interpreted as representing 'idea', 'concept', or 'object' rather than 'purpose'.; Lack of facial or contextual cues makes intended meaning ambiguous without verbal label.",
      "models": {
        "flash": {
          "description": "The actor performs a sweeping motion with her right hand, moving it from the side toward the center, then makes a flat-handed gesture as if marking a point or direction, followed by a brief, somewhat abstract hand movement.",
          "confidence": "high",
          "ambiguities": "The gesture is highly abstract and does not clearly map to the semantic meaning of 'purpose'. It could be interpreted as pointing, directing, or simply moving, but not specifically as 'purpose'."
        },
        "pro": {
          "description": "The actor extends her right arm to the side with the palm facing forward, then uses her left index finger to point directly at the center of her right palm, as if indicating a target.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'target', 'goal', or 'point'."
        },
        "qwen": {
          "description": "The actor stands facing forward, then raises her right hand with palm open and facing left, while her left hand moves forward to meet it, palm also open and facing right — as if framing or holding an invisible object between the hands. She holds this pose briefly before returning to neutral stance.",
          "confidence": "medium",
          "ambiguities": "Gesture could be interpreted as representing 'idea', 'concept', or 'object' rather than 'purpose'.; Lack of facial or contextual cues makes intended meaning ambiguous without verbal label."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture is abstract and does not visually represent the concept of 'purpose' in any clear or recognizable way."
          },
          "pro": {
            "score": 4,
            "rationale": "Pointing to a specific spot on the palm serves as a clear visual metaphor for aiming at a target or having a specific goal, aligning well with the abstract concept of 'purpose'."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture does not clearly resemble any concrete aspect of 'purpose' (e.g., goal, direction, intention). It may suggest containment or focus, but the link to abstract semantics is weak."
          },
          "delta": 2
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "There is no clear physical action or bodily experience associated with the abstract concept of 'purpose' in this movement."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical action of aiming, directing focus, or establishing a physical target."
          },
          "qwen": {
            "score": 2,
            "rationale": "The motion involves basic hand positioning but does not evoke strong bodily experiences related to purpose (e.g., striving, aiming, deciding). The action feels static and symbolic rather than experiential."
          },
          "delta": 1.333
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movements are relatively slow and lack the dynamic energy or distinctiveness needed to be highly salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement involves both arms and is deliberate, but remains relatively contained and moderate in speed and size."
          },
          "qwen": {
            "score": 2,
            "rationale": "Movement is slow, small in amplitude, and lacks dynamic emphasis. It does not command attention or stand out visually against the neutral background."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no emotional cues."
          },
          "qwen": {
            "score": 1,
            "rationale": "Facial expression remains neutral throughout; no emotional cues are conveyed that might reinforce the meaning of 'purpose' (e.g., determination, resolve)."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 2,
            "rationale": "The gesture is somewhat vague and lacks a clear connection to the target word, which may confuse a learner."
          },
          "pro": {
            "score": 5,
            "rationale": "The two-part gesture (setting the target, then pointing to it) is simple, logical, and easy to process without being overwhelming."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is simple motorically and cognitively — two-handed framing motion — making it easy to process without overwhelming learners, though its semantic fit is poor."
          },
          "delta": 2
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 1,
            "rationale": "The gesture does not correspond to any common cultural emblem or conventional sign for 'purpose'."
          },
          "pro": {
            "score": 4,
            "rationale": "Using a pointing gesture to indicate a target, goal, or main point is a familiar metaphorical action in Western communication."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture resembles a generic 'holding' or 'framing' motion seen in some contexts (e.g., presenting an idea), but it is not a culturally established emblem for 'purpose' in Western contexts."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 4,
            "rationale": "The physical movements are simple and easy to replicate, even if their meaning is unclear."
          },
          "pro": {
            "score": 5,
            "rationale": "The movements are straightforward, require no special physical coordination, and are very easy for a learner to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is straightforward, requires no fine motor control, and can be easily replicated by learners of varying physical abilities."
          },
          "delta": 0.667
        }
      }
    },
    {
      "index": 91,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Zip",
      "title": "01_zip.mov.AVI",
      "local_path": "data/videos/01_zip.mov.AVI",
      "video": "assets/rating-videos/01_zip.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.19,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor performs a vertical motion with her hand starting from her chest and moving downward, mimicking the action of pulling a zipper.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor brings her right hand to her waist and moves it straight up to her neck, mimicking the action of pulling a zipper on a jacket.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor mimes the action of zipping up a garment by pinching her right hand at her waist and pulling it vertically up to her chest/neck area.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The movement is a direct and highly recognizable pantomime of the physical action of zipping a zipper."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a highly transparent and direct visual representation of zipping up a piece of clothing."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a direct pantomime of the physical action associated with the word, creating a perfect visual match."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture perfectly simulates the tactile and motor experience of operating a zipper."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement strongly evokes the physical sensation and bodily action of grasping and pulling a zipper."
          },
          "qwen": {
            "score": 5,
            "rationale": "The pinching grasp and upward pulling motion strongly evoke the tactile and kinesthetic experience of using a zipper."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and contained within the torso area."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is functional and direct, lacking significant emotional expressiveness or dynamic emphasis."
          },
          "qwen": {
            "score": 4,
            "rationale": "The upward movement is distinct, sharp, and repeated, making the trajectory clear and easy to follow."
          },
          "delta": 1.333
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral, instructional facial expression throughout the gesture."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a simple, single upward motion, making it optimally balanced and easy to process."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple and cognitively straightforward, ideal for vocabulary learning."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Zipping a zipper is a universal, everyday physical action familiar to almost everyone in Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of zipping a jacket is a widely recognized and common everyday action."
          },
          "qwen": {
            "score": 5,
            "rationale": "Zipping clothing is a ubiquitous daily action, making the gesture instantly recognizable in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely easy and natural for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a simple, one-handed upward movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no special dexterity, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 92,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Earring",
      "title": "02_earring.mov.AVI",
      "local_path": "data/videos/02_earring.mov.AVI",
      "video": "assets/rating-videos/02_earring.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could potentially be interpreted as the body part 'ear' generally rather than the specific object 'earring' without context.",
      "models": {
        "flash": {
          "description": "The actor touches her earlobe with her fingers, mimicking the action of putting on or adjusting an earring.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her left hand to touch her left earlobe briefly before lowering her arm back to her side.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right hand to her right ear, using a pinching motion with her thumb and index finger to touch or indicate the earlobe, then returns to a neutral stance.",
          "confidence": "high",
          "ambiguities": "Could potentially be interpreted as the body part 'ear' generally rather than the specific object 'earring' without context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a direct, transparent pantomime of the action associated with wearing an earring."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly points to and touches the earlobe, which is the exact location where an earring is worn, making the meaning highly transparent."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture directly points to and touches the specific body part where the object is worn, creating a highly transparent visual link."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It perfectly simulates the tactile experience of touching one's earlobe to place or adjust jewelry."
          },
          "pro": {
            "score": 4,
            "rationale": "The action simulates the physical experience of touching, feeling, or adjusting an earring on one's own ear."
          },
          "qwen": {
            "score": 4,
            "rationale": "The pinching motion simulates the tactile experience of holding or putting on an earring, strongly evoking the physical interaction."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is small, precise, and subtle, which is appropriate for the specific action but low in overall motional salience."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is a simple, functional touch with minimal dynamic emphasis or emotional expressiveness."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is precise and distinct but relatively small and contained near the head, lacking large expansive dynamics."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, conveying no affective meaning."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a single, straightforward movement that is perfectly simple and highly informative for learning the word."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single hand movement, which is perfectly appropriate for a concrete noun."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of touching an earlobe to indicate an earring is a universally understood gesture in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "Touching the earlobe to indicate an earring is a very common and widely understood gesture across many cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Touching the earlobe to indicate earrings is a widely recognized and conventional gesture in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely simple and natural for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a basic self-touch to the ear, which is extremely natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The action is physically effortless and requires no complex coordination, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 93,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Peppermill",
      "title": "03_peppermill.mov.AVI",
      "local_path": "data/videos/03_peppermill.mov.AVI",
      "video": "assets/rating-videos/03_peppermill.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be confused with other twisting motions, such as opening a jar or turning a knob, but in context, it is clearly a peppermill.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without context, the gesture could be mistaken for grinding coffee or spices generally, not specifically pepper.; Location (lower abdomen) may seem odd if learners expect the gesture to occur at table height.",
      "models": {
        "flash": {
          "description": "The actor performs a twisting motion with one hand over the other, simulating the action of grinding a peppermill.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be confused with other twisting motions, such as opening a jar or turning a knob, but in context, it is clearly a peppermill."
        },
        "pro": {
          "description": "The actor holds an imaginary object with her left hand and makes a twisting motion over it with her right hand, simulating grinding pepper.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands still, then brings both hands to her lower abdomen/pelvic area and performs a quick, circular grinding motion with closed fists, mimicking the action of turning a peppermill. She returns to neutral stance afterward.",
          "confidence": "high",
          "ambiguities": "Without context, the gesture could be mistaken for grinding coffee or spices generally, not specifically pepper.; Location (lower abdomen) may seem odd if learners expect the gesture to occur at table height."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The hand motion clearly and accurately mimics the physical act of twisting the top of a manual peppermill."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture perfectly mimics the action of holding and twisting a manual peppermill."
          },
          "qwen": {
            "score": 4,
            "rationale": "The circular hand motion at waist level strongly resembles the twisting action of operating a peppermill, making the gesture visually representative of the word’s semantics."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture directly simulates the specific motor action required to operate the object, providing strong sensorimotor engagement."
          },
          "pro": {
            "score": 5,
            "rationale": "Strongly evokes the physical sensation of gripping the mill and applying twisting force."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the physical sensation of gripping and rotating a kitchen tool, engaging motor memory associated with using a peppermill."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and localized to the hand/wrist area."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is functional and descriptive rather than emotionally expressive."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate in size and speed — not overly large or fast, but clearly visible and distinct from resting posture."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "Facial expression remains neutral throughout; no emotional cues are conveyed to support meaning or engagement."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the functional semantics of the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the core action without unnecessary complexity."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is simple enough to be learned quickly yet specific enough to convey the target concept without confusion."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of grinding a peppermill is a universally recognized domestic gesture in Western cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of using a manual peppermill is a common and widely recognized culinary practice."
          },
          "qwen": {
            "score": 4,
            "rationale": "In Western contexts, mimicking the use of common kitchen tools like a peppermill is widely understood and culturally familiar."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and requires no special coordination, making it extremely easy for learners to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The bimanual twisting motion is very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motion is natural, requires no special skill, and can be easily reproduced by learners of most ages and abilities."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 94,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Cup",
      "title": "04_cup.mov.AVI",
      "local_path": "data/videos/04_cup.mov.AVI",
      "video": "assets/rating-videos/04_cup.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as the verb 'drink' rather than the noun 'cup', though the hand shape implies the object.",
      "models": {
        "flash": {
          "description": "The actor brings both hands together in front of her face, forming a rounded, cup-like shape with her palms, then brings them down to her chest area.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor forms a cup shape with both hands, brings it to her mouth, and tilts her head back as if drinking.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor brings both hands together in a curved shape, lifts them to her mouth as if drinking from a container, and then lowers them.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as the verb 'drink' rather than the noun 'cup', though the hand shape implies the object."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The hand shape clearly and directly mimics the physical form of a cup, making the meaning highly transparent."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly mimics holding a cup and drinking from it, providing a highly transparent visual representation of the object's function."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a direct visual mime of holding and using the target object."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical act of holding or cupping an object, evoking a strong sensorimotor experience."
          },
          "pro": {
            "score": 5,
            "rationale": "The action strongly simulates the physical experience of grasping a cup and bringing it to the mouth to drink."
          },
          "qwen": {
            "score": 5,
            "rationale": "Strongly evokes the physical sensations of grasping a cylinder and tilting the head to drink."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is functional and deliberate, lacking strong emotional dynamics or expressive intensity."
          },
          "qwen": {
            "score": 4,
            "rationale": "Movement is clear, deliberate, and centrally located, drawing attention effectively."
          },
          "delta": 1.333
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The facial expression remains neutral throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The facial expression remains neutral throughout the gesture, focusing solely on the action."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression is neutral and focused on the action rather than conveying emotion."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the word 'cup'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly balances informativeness with ease of understanding for the concept."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is simple, intuitive, and perfectly matched to the concrete noun."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Using hands to represent a container or cup is a universally understood and common iconic gesture."
          },
          "pro": {
            "score": 5,
            "rationale": "The pantomime of drinking from a cup is a universally recognized action across cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Miming drinking is a universally recognized action across cultures."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves simple, everyday motor actions that are effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is natural and effortless for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 95,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Broom",
      "title": "05_broom.mov.AVI",
      "local_path": "data/videos/05_broom.mov.AVI",
      "video": "assets/rating-videos/05_broom.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor performs a quick, repetitive sweeping motion with both hands held together, moving from right to left in front of the body.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor positions her hands as if holding a long handle and makes a sweeping motion from right to left, mimicking the action of sweeping the floor.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands still, then performs a single diagonal sweeping motion with her right arm across her body from upper left to lower right, mimicking the action of sweeping with a broom. She returns to neutral stance afterward.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The sweeping motion clearly mimics the action of using a broom to clean a floor."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a highly transparent visual representation of the action associated with the target word, clearly mimicking the use of a broom."
          },
          "qwen": {
            "score": 4,
            "rationale": "The diagonal arm sweep clearly mimics the motion of using a broom, visually representing the core action associated with the word."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture effectively simulates the physical action of sweeping, engaging the arms and torso in a way that mirrors the real-world task."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly simulates the bodily action and physical interaction of holding and sweeping with a broom."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the physical sensation of gripping and moving a broom handle, engaging motor memory related to sweeping."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively compact and brief in duration."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is primarily functional and lacks strong emotional expressiveness, though it has a clear, deliberate rhythm."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and purposeful but not large or fast; it’s moderate in size and speed, sufficient to draw attention without being exaggerated."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout, offering no emotional cues to reinforce meaning."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the semantic meaning of the word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and provides an optimal balance of informativeness without being overly complex."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, one-motion, and cognitively lightweight — ideal for vocabulary learning contexts."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Sweeping with a broom is a universally recognized household activity."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of sweeping with a broom is a highly familiar and universally recognized concept."
          },
          "qwen": {
            "score": 5,
            "rationale": "Sweeping motions are universally recognized in Western cultures as associated with brooms; this gesture aligns with common cultural schemas."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very natural and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The sweeping motion is very natural, requires no special coordination, and is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can easily replicate the single-arm sweep without coordination challenges or physical strain."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 96,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Parsley",
      "title": "06_parseley.mov.AVI",
      "local_path": "data/videos/06_parseley.mov.AVI",
      "video": "assets/rating-videos/06_parseley.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.857,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture is abstract and does not clearly represent the target word, making it difficult to interpret without context.",
      "pro_ambiguities": "The gesture is highly abstract and could easily be interpreted as representing a tree, a bush, an explosion, or a 'ta-da' motion rather than parsley specifically.",
      "qwen_ambiguities": "The gesture strongly depicts 'surprise' or 'being startled', suggesting it may be a phonological mnemonic (rhyming 'parsley' with 'startled') rather than a semantic depiction of the herb.; Without the mnemonic context, the link between the gesture and the vegetable is opaque.",
      "models": {
        "flash": {
          "description": "The actor stands still, then quickly raises both arms with hands open and fingers spread, then returns them to her sides.",
          "confidence": "high",
          "ambiguities": "The gesture is abstract and does not clearly represent the target word, making it difficult to interpret without context."
        },
        "pro": {
          "description": "The actor raises both arms with elbows bent and hands open, fingers spread, then quickly lowers them back to her sides.",
          "confidence": "high",
          "ambiguities": "The gesture is highly abstract and could easily be interpreted as representing a tree, a bush, an explosion, or a 'ta-da' motion rather than parsley specifically."
        },
        "qwen": {
          "description": "The actor stands neutrally, then suddenly throws both arms upward and outward with fingers splayed wide while widening her eyes in a surprised expression, before quickly returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": "The gesture strongly depicts 'surprise' or 'being startled', suggesting it may be a phonological mnemonic (rhyming 'parsley' with 'startled') rather than a semantic depiction of the herb.; Without the mnemonic context, the link between the gesture and the vegetable is opaque."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture of raising arms with open hands does not visually resemble the physical appearance or the act of using parsley."
          },
          "pro": {
            "score": 2,
            "rationale": "The spread fingers and raised arms might loosely represent the bushy shape or leaves of a parsley plant, but the visual resemblance is very weak."
          },
          "qwen": {
            "score": 1,
            "rationale": "The gesture does not visually resemble the herb parsley (leaves, stems, color). It appears to depict an emotion or reaction rather than the object."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "There is no clear sensorimotor connection between the arm-raising movement and the physical experience of handling or consuming parsley."
          },
          "pro": {
            "score": 1,
            "rationale": "The gesture does not evoke any typical physical interaction with parsley, such as chopping, picking, or sprinkling."
          },
          "qwen": {
            "score": 1,
            "rationale": "There is no simulation of handling, chopping, smelling, or eating the herb. The movement is a full-body reaction."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is relatively quick and involves the whole arm, making it moderately salient, though it lacks a clear purpose."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves a clear, moderate movement of both arms being raised and lowered, which is noticeable but not overly expansive."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is fast, expansive, and involves the whole upper body, making it visually prominent and attention-grabbing."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a completely neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 4,
            "rationale": "The actor's eyes widen significantly and her expression shifts to surprise/shock, providing a strong emotional cue."
          },
          "delta": 2
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 2,
            "rationale": "The gesture is simple to perform but confusing because it lacks a clear semantic link to the target word."
          },
          "pro": {
            "score": 2,
            "rationale": "While motorically simple, the gesture's weak semantic connection to the target word makes it cognitively confusing for a learner."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor pattern is extremely simple (arms up, arms down) and cognitively undemanding."
          },
          "delta": 2
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 1,
            "rationale": "This movement does not correspond to any conventional or culturally recognized gesture for 'parsley'."
          },
          "pro": {
            "score": 1,
            "rationale": "There is no recognized cultural convention linking this specific gesture to parsley."
          },
          "qwen": {
            "score": 2,
            "rationale": "While the 'surprise' gesture is common, it is not a recognized or conventional gesture for the word 'parsley' in Western culture."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and physically easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very simple, natural, and effortless for a learner to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is very natural and effortless for a learner to reproduce physically."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 97,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Stairs",
      "title": "07_stairs.mov.AVI",
      "local_path": "data/videos/07_stairs.mov.AVI",
      "video": "assets/rating-videos/07_stairs.mp4",
      "complete": true,
      "max_abs_delta": 2.667,
      "mean_abs_delta": 1.429,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is highly abstract and does not clearly map to the concept of 'stairs'. It could be interpreted as reaching for something, lifting, or a generic exercise movement.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as 'up' or 'ascend' generally; Might represent a roof or slope; Could signify 'climbing' without the object",
      "models": {
        "flash": {
          "description": "The actor performs a movement where she raises both arms diagonally upward and forward, then returns them to her sides.",
          "confidence": "high",
          "ambiguities": "The gesture is highly abstract and does not clearly map to the concept of 'stairs'. It could be interpreted as reaching for something, lifting, or a generic exercise movement."
        },
        "pro": {
          "description": "The actor raises both hands, palms facing down, and moves them upwards and forwards in an alternating, stepping motion to trace the shape of a staircase.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands neutral, then swiftly raises both arms diagonally upward to the left, tracing an incline, before returning to a resting position.",
          "confidence": "medium",
          "ambiguities": "Could be interpreted as 'up' or 'ascend' generally; Might represent a roof or slope; Could signify 'climbing' without the object"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture does not resemble climbing stairs or the structure of stairs; it looks more like a generic reaching or lifting motion."
          },
          "pro": {
            "score": 5,
            "rationale": "The alternating upward and forward movement of the flat hands perfectly traces the physical shape of a staircase."
          },
          "qwen": {
            "score": 3,
            "rationale": "The diagonal upward movement visually represents the incline or slope of a staircase, but does not depict the individual steps or structure of the object itself."
          },
          "delta": 2.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "The movement does not simulate the physical act of climbing or the sensation of stairs."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the physical structure of stairs and the upward progression of climbing them."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture simulates the trajectory of ascending, evoking the direction of movement associated with stairs, though it lacks the bodily sensation of climbing."
          },
          "delta": 2
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and involves the full extension of the arms, making it moderately salient."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is steady and descriptive, lacking strong emotional dynamics or intensity."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is large, swift, and expansive, clearly drawing the viewer's eye upward and distinguishing the gesture from neutral posture."
          },
          "delta": 1.333
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral and focused throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 2,
            "rationale": "The gesture is simple, but because it does not clearly represent the target word, it may cause confusion for a learner."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is straightforward, easy to process, and effectively conveys the meaning without unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple, involving a single coordinated arm movement that is easy to process cognitively."
          },
          "delta": 2
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 1,
            "rationale": "This movement is not a culturally recognized gesture for 'stairs'."
          },
          "pro": {
            "score": 4,
            "rationale": "Using hands to indicate steps or ascending levels is a widely understood and common representational strategy."
          },
          "qwen": {
            "score": 4,
            "rationale": "Using arms to trace a direction or incline is a common iconic strategy in Western contexts to indicate upward movement or structures."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and easy for any learner to physically replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The alternating hand movement is simple, natural, and requires no special coordination to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no fine motor skills, making it very easy for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 98,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Hair Dryer",
      "title": "08_hair dryer.mov.AVI",
      "local_path": "data/videos/08_hair dryer.mov.AVI",
      "video": "assets/rating-videos/08_hair_dryer.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as brushing hair, though the context of the prompt clarifies it as a hair dryer.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without audio context, the gesture could potentially be interpreted as 'brushing hair' or 'combing', though the gripping hand shape suggests a tool like a dryer.",
      "models": {
        "flash": {
          "description": "The actor performs a single, sweeping motion with her right hand over the top of her head, mimicking the action of drying hair.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as brushing hair, though the context of the prompt clarifies it as a hair dryer."
        },
        "pro": {
          "description": "The actor raises her right hand, holding an imaginary object, and moves it around her head as if drying her hair.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right arm, shaping her hand as if gripping a handle, and moves it back and forth near the top of her head to mimic the action of drying hair.",
          "confidence": "high",
          "ambiguities": "Without audio context, the gesture could potentially be interpreted as 'brushing hair' or 'combing', though the gripping hand shape suggests a tool like a dryer."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture clearly mimics the physical action of using a hair dryer on one's own hair, making the semantic link quite transparent."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture highly transparently represents the action of holding and using a hair dryer."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a highly transparent pantomime of holding a hair dryer and using it on one's head, directly visually representing the object's function."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement directly simulates the motor action of holding and moving a hair dryer, engaging the learner's sensorimotor system."
          },
          "pro": {
            "score": 5,
            "rationale": "Strongly evokes the physical action of gripping a hair dryer and moving it around the head."
          },
          "qwen": {
            "score": 4,
            "rationale": "The back-and-forth motion near the scalp strongly evokes the physical sensation and motor action of drying wet hair."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively brief and contained to a single sweep."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is functional and descriptive rather than emotionally expressive."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is distinct and localized to the upper body, clearly visible but not overly expansive or rapid."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, focusing on the action rather than conveying emotion."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the target word without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the core meaning without unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple, involving a single arm movement that is easy to cognitively process and associate with the word."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of drying one's hair is a universal daily activity, making the gesture highly recognizable in Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "Pantomiming the use of a hair dryer is a universally understood action in modern cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Mimicking the use of a handheld tool near the head is a universally recognized and conventional way to represent hair care tools."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very natural, effortless, and easy for anyone to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and effortless, requiring no complex coordination, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 99,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Watering Can",
      "title": "09_gießkanne.mov.AVI",
      "local_path": "data/videos/09_gießkanne.mov.AVI",
      "video": "assets/rating-videos/09_gie_kanne.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could also be interpreted as pouring from a pitcher or a bottle, as the specific shape of the 'watering can' is not explicitly defined by the hand posture.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as the verb 'to pour' rather than the noun 'watering can'.; Might be confused with pouring from a pitcher or jug due to the lack of a two-handed grip or spout indication.",
      "models": {
        "flash": {
          "description": "The actor performs a simple, repetitive arm movement, tilting the hand downward as if pouring water from a container.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as pouring from a pitcher or a bottle, as the specific shape of the 'watering can' is not explicitly defined by the hand posture."
        },
        "pro": {
          "description": "The actor simulates holding a watering can by the handle and tilting it forward to pour water.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands and mimes holding a handle with her right hand near her hip, then swings her arm forward and downward in an arc, simulating the tilting and pouring motion of using a watering can.",
          "confidence": "medium",
          "ambiguities": "Could be interpreted as the verb 'to pour' rather than the noun 'watering can'.; Might be confused with pouring from a pitcher or jug due to the lack of a two-handed grip or spout indication."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The hand movement clearly mimics the action of tilting a watering can to pour water, which is a strong iconic representation of the object's primary function."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture highly transparently represents the action of pouring from a watering can."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture captures the functional action of pouring, which is associated with the object, but lacks specific morphological features of a watering can (e.g., a long spout or two-handed grip), making it resemble generic pouring."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture effectively simulates the physical action of holding and tilting a watering can, engaging the learner's motor imagery related to the object's use."
          },
          "pro": {
            "score": 5,
            "rationale": "Strongly evokes the physical sensation of holding a handle and tilting a heavy object to pour."
          },
          "qwen": {
            "score": 4,
            "rationale": "The arm swing and wrist tilt strongly evoke the kinesthetic experience of lifting a weighted container and tilting it to release water."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small in scale and limited to the forearm and hand."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear but moderate in size and speed, consisting of a simple arm tilt."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is distinct and creates a clear arc in space, drawing attention to the action without being overly large or exaggerated."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture, providing no additional emotional cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the target word without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the core action without unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple, involving a single arm movement that is easy to process and memorize."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of pouring from a container is a universal, highly familiar physical interaction."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of using a watering can is highly familiar and universally recognized."
          },
          "qwen": {
            "score": 4,
            "rationale": "The pantomime of pouring from a container is a widely recognized and culturally common action."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a simple arm movement that is effortless for anyone to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no complex coordination, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 100,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Tissue",
      "title": "10_tissue.mov.AVI",
      "local_path": "data/videos/10_tissue.mov.AVI",
      "video": "assets/rating-videos/10_tissue.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "The gesture represents the action of 'blowing nose' or having a 'cold', which requires the learner to infer the object 'tissue' from the action.",
      "qwen_ambiguities": "Without audio, the gesture could initially be interpreted as 'sneeze' or 'cold' rather than the object itself.; The reliance on an imaginary object requires learner imagination.",
      "models": {
        "flash": {
          "description": "The actor brings her hand up to her nose and makes a wiping motion, simulating the act of blowing or wiping one's nose with a tissue.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right hand to her nose, pinches it slightly as if holding a tissue and blowing her nose, and then lowers her hand.",
          "confidence": "high",
          "ambiguities": "The gesture represents the action of 'blowing nose' or having a 'cold', which requires the learner to infer the object 'tissue' from the action."
        },
        "qwen": {
          "description": "The actor mimes reaching into her right pocket, retrieving an imaginary item, and bringing it to her nose to wipe or blow it.",
          "confidence": "high",
          "ambiguities": "Without audio, the gesture could initially be interpreted as 'sneeze' or 'cold' rather than the object itself.; The reliance on an imaginary object requires learner imagination."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a direct, pantomimed representation of using a tissue to wipe the nose, making the meaning immediately clear."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly depicts the primary action associated with the object, providing a strong metonymic link to the word 'tissue'."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture depicts the functional use of the object (pulling from pocket, wiping nose), creating a clear semantic link to the word."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It perfectly simulates the physical action associated with the object, engaging the learner's motor memory of the experience."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly simulates the physical, bodily action of holding a tissue and pinching the nose."
          },
          "qwen": {
            "score": 5,
            "rationale": "The sequence strongly evokes the tactile and motor experience of retrieving and using a tissue."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and contained to the facial area."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is functional and straightforward, lacking significant emotional expressiveness or dynamic emphasis."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movements are natural and moderate in size, clearly visible but not exaggerated or expansive."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, though it serves the functional purpose of the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's face remains mostly neutral, with only a slight, functional scrunching of the features during the simulated action."
          },
          "qwen": {
            "score": 4,
            "rationale": "The actor mimics facial expressions of discomfort or sneezing, adding affective context to the need for a tissue."
          },
          "delta": 1.333
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture consists of a single, simple, and highly recognizable movement, making it optimal for vocabulary learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a simple, logical sequence of everyday actions that is easy to process cognitively."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The act of wiping one's nose is a universal human behavior, and this gesture is highly recognizable in Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "Miming the action of blowing one's nose is a universally recognized behavior."
          },
          "qwen": {
            "score": 5,
            "rationale": "Reaching into a pocket to retrieve a tissue is a highly familiar and conventional action in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is an everyday motor action that is extremely easy for learners to reproduce effortlessly."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movements are natural and effortless, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 101,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Soap",
      "title": "11_soap.mov.AVI",
      "local_path": "data/videos/11_soap.mov.AVI",
      "video": "assets/rating-videos/11_soap.mp4",
      "complete": true,
      "max_abs_delta": 0,
      "mean_abs_delta": 0.0,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as 'washing hands' or 'lotion', but in the context of the target word 'soap', it is unambiguous.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor brings her hands together in front of her chest, rubbing them against each other in a circular motion, mimicking the action of lathering soap.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as 'washing hands' or 'lotion', but in the context of the target word 'soap', it is unambiguous."
        },
        "pro": {
          "description": "The actor brings her hands together in front of her torso and rubs her palms together, simulating the action of washing hands with a bar of soap.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands still, then brings both hands together in front of her lower torso, palms facing each other as if holding a small object. She rubs her palms together briefly in a circular motion, mimicking lathering soap, then returns hands to sides.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The hand-rubbing motion is a highly transparent and universally recognized iconic representation of washing hands with soap."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture perfectly mimics the action of using a bar of soap to wash hands, making it highly transparent."
          },
          "qwen": {
            "score": 5,
            "rationale": "The hand-rubbing motion directly mimics the act of washing with soap, making the gesture highly transparent and visually representative of the word’s semantics."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture directly simulates the physical, tactile experience of lathering soap between one's hands."
          },
          "pro": {
            "score": 5,
            "rationale": "The action provides a strong simulation of the tactile and motor experience of rubbing soap between the hands."
          },
          "qwen": {
            "score": 5,
            "rationale": "The rubbing motion strongly evokes the tactile and motor experience of using soap — friction, lather, cleaning — activating vivid sensorimotor memory."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is contained within a small space in front of the torso, making it moderately salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and distinct, but relatively small and contained to the hands and wrists."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate in size and speed — contained within the torso zone, not expansive or rapid, but clear enough to draw attention without being overwhelming."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "Facial expression remains neutral throughout; no emotional cues are conveyed via face, which is appropriate for a concrete noun like 'soap' but limits affective engagement."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learners of any level."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly captures the concept without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "Gesture is simple, intuitive, and cognitively lightweight — ideal for vocabulary learning. No extraneous movements or cognitive load beyond the core action."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of washing hands is a universal human experience, making this gesture highly familiar across cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of rubbing hands together is a universally recognized mime for washing with soap in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Hand-rubbing to simulate washing is a universally recognized gesture in Western contexts (and globally) associated with soap/hygiene, aligning perfectly with learners’ cultural schemas."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely simple and natural to reproduce."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is natural, effortless, and very easy for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Extremely easy to reproduce — requires only basic bilateral hand coordination and minimal space or strength. Natural and effortless for learners of all ages."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 102,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Shelf",
      "title": "12_shelf.mov.AVI",
      "local_path": "data/videos/12_shelf.mov.AVI",
      "video": "assets/rating-videos/12_shelf.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as 'table' or 'flat surface' if not for the context of the target word.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could potentially be confused with 'table' depending on the perceived height, though the mid-level positioning favors 'shelf'.",
      "models": {
        "flash": {
          "description": "The actor raises both hands to shoulder height and moves them horizontally outward, mimicking the flat, linear shape of a shelf.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'table' or 'flat surface' if not for the context of the target word."
        },
        "pro": {
          "description": "The actor uses both hands, palms facing down, to trace horizontal lines in the air at three different heights, starting from the top and moving downwards, simulating the levels of a shelving unit.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both hands high and then brings them down to shoulder level, holding them flat and parallel to the ground to outline a horizontal surface.",
          "confidence": "high",
          "ambiguities": "Could potentially be confused with 'table' depending on the perceived height, though the mid-level positioning favors 'shelf'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The horizontal hand movement clearly traces the flat, linear shape of a shelf."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture highly transparently represents the physical structure of shelves by tracing multiple stacked horizontal surfaces."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture perfectly mimics the physical characteristics of a shelf: a flat, horizontal surface at a specific height."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "It simulates the physical act of indicating a flat surface, though it lacks the interaction of placing an object on it."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture evokes a strong sense of outlining or physically interacting with flat, stacked surfaces."
          },
          "qwen": {
            "score": 4,
            "rationale": "The flat hand position strongly evokes the tactile and spatial experience of a shelf surface where objects are placed."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is clear and expansive, involving both arms sweeping across the body multiple times at different heights."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is large and distinct, sweeping from high above the head down to a specific level, drawing clear attention to the defined space."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused expression typical of instructional videos, with no specific emotional signaling."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing a basic object like a shelf."
          },
          "pro": {
            "score": 5,
            "rationale": "The three-level tracing is simple to process yet optimally informative for conveying the concept of a shelving unit."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matched to the concrete noun it represents, imposing no unnecessary cognitive load."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "Using hands to indicate a flat, horizontal surface is a common and easily understood gesture in Western contexts."
          },
          "pro": {
            "score": 4,
            "rationale": "Outlining the shape of an object in the air to describe its physical form is a common and easily understood communicative strategy."
          },
          "qwen": {
            "score": 5,
            "rationale": "Using flat hands to indicate a level or surface is a highly familiar and universally understood communicative gesture."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and requires no special coordination, making it easy for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very natural and effortless to enact, requiring only basic arm movements."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no dexterity or complex coordination, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 103,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Violin",
      "title": "13_violine.mov.AVI",
      "local_path": "data/videos/13_violine.mov.AVI",
      "video": "assets/rating-videos/13_violine.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without context, could broadly represent 'playing music' or 'orchestra', though the specific hand placement near the chin strongly specifies violin.",
      "models": {
        "flash": {
          "description": "The actor performs a pantomime of playing the violin by holding an imaginary instrument against their left shoulder and moving their right arm back and forth as if drawing a bow across strings.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor mimics playing a violin by holding her left arm up as if grasping the neck of the instrument, resting her head slightly to the left, and moving her right arm back and forth as if bowing the strings.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor mimics playing a violin by positioning her left hand near her left shoulder as if holding the instrument's neck and chin rest, while her right hand mimics holding a bow and making a sawing motion across the imaginary strings.",
          "confidence": "high",
          "ambiguities": "Without context, could broadly represent 'playing music' or 'orchestra', though the specific hand placement near the chin strongly specifies violin."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a highly transparent and classic pantomime of playing a violin, making the semantic link immediate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture perfectly mimics the action of playing a violin, providing a highly transparent visual representation of the target word."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a direct and highly transparent pantomime of playing the violin, visually depicting both the instrument's position and the bowing action."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The movement accurately simulates the specific motor actions required to play the instrument, engaging the learner's sensorimotor system."
          },
          "pro": {
            "score": 5,
            "rationale": "The action vividly simulates the physical experience, posture, and motor actions required to hold and bow a violin."
          },
          "qwen": {
            "score": 5,
            "rationale": "Evokes the specific motor actions of holding and bowing a violin, creating a vivid simulation of the physical experience of playing the instrument."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and rhythmic, though it is contained within a moderate range of motion appropriate for the action."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture involves clear, coordinated movements of both arms and a slight head tilt, making it visually prominent and distinct."
          },
          "qwen": {
            "score": 4,
            "rationale": "The arm movements are distinct and clearly defined against the neutral posture, drawing attention to the specific playing action."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's facial expression remains mostly neutral, with only a slight look of focus, lacking strong emotional cues."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is neutral to focused, lacking strong emotional signaling or affective connection to the music being mimed."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly balanced for learning the word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is straightforward and perfectly balances informativeness with simplicity, making it an optimal representation for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for vocabulary learning without imposing cognitive or motor overload."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of playing a violin is a universally recognized cultural icon in Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "Miming playing a violin in this manner is a highly familiar and universally recognized pantomime in Western culture."
          },
          "qwen": {
            "score": 5,
            "rationale": "The pantomime of playing a violin is a widely recognized and conventional gesture in Western culture, aligning with existing schemas."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very natural and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movements are simple, intuitive, and effortless for learners to reproduce themselves."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can easily reproduce this gesture as it requires no complex dexterity, props, or difficult body positioning."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 104,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Stamp",
      "title": "14_stamp.mov.AVI",
      "local_path": "data/videos/14_stamp.mov.AVI",
      "video": "assets/rating-videos/14_stamp.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted as 'hit' or 'punch' without context, though the flat palm suggests a surface.",
      "models": {
        "flash": {
          "description": "The actor holds one hand flat, palm up, and uses the other hand to make a downward pressing motion onto the palm, simulating the action of stamping a document.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor holds her left hand flat, palm up, and brings her right hand down firmly onto it, mimicking the action of using a rubber stamp.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor holds her left hand flat with palm up and brings her right fist down forcefully onto it, mimicking the action of using a hand stamp on a surface.",
          "confidence": "high",
          "ambiguities": "Could be interpreted as 'hit' or 'punch' without context, though the flat palm suggests a surface."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly and directly mimics the physical action of using a hand stamp on a surface."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture clearly mimics the physical action of stamping a document, providing a highly transparent visual representation of the word."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a direct visual mimicry of the action of stamping, with one hand representing the stamp and the other the surface."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It effectively simulates the tactile and motor experience of pressing a stamp down."
          },
          "pro": {
            "score": 5,
            "rationale": "The action strongly evokes the bodily experience of holding a stamp and pressing it down onto a surface."
          },
          "qwen": {
            "score": 4,
            "rationale": "The forceful downward strike evokes the tactile sensation and physical effort of pressing a stamp."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and contained within the hand/arm area."
          },
          "pro": {
            "score": 4,
            "rationale": "The downward striking motion is clear and pronounced, drawing attention to the specific action."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is sharp, vertical, and distinct against the neutral background, drawing clear attention."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a neutral, focused expression with minimal emotional signaling."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and optimally balances informativeness with ease of understanding."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, involving basic coordination that is easy to process cognitively."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of stamping is a universally recognized office or administrative gesture in Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of using a rubber stamp is a common and widely recognized concept in Western cultures."
          },
          "qwen": {
            "score": 4,
            "rationale": "The action of stamping a document or object is a common, recognizable convention in Western contexts."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very easy and natural for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement involves basic arm and hand coordination, making it very natural and effortless for learners to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and effortless for learners to reproduce physically."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 105,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Thread",
      "title": "15_thread.mov.AVI",
      "local_path": "data/videos/15_thread.mov.AVI",
      "video": "assets/rating-videos/15_thread.mp4",
      "complete": true,
      "max_abs_delta": 0,
      "mean_abs_delta": 0.0,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The initial touch to the chest is slightly ambiguous and could be interpreted as a gesture for 'shirt' or 'neck' rather than specifically 'thread'.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could potentially be interpreted as 'needle', 'sew', or 'pull' without verbal context.",
      "models": {
        "flash": {
          "description": "The actor touches her chest near the collarbone, then raises her right hand above her head, making a pinching motion with her fingers as if holding a thread.",
          "confidence": "high",
          "ambiguities": "The initial touch to the chest is slightly ambiguous and could be interpreted as a gesture for 'shirt' or 'neck' rather than specifically 'thread'."
        },
        "pro": {
          "description": "The actor pinches her fingers together near her chest and then pulls her hand upwards and outwards, simulating the action of pulling a long piece of thread.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor pinches her thumb and index finger together near her chest, then extends her arm upwards and outwards while maintaining the pinch, mimicking the action of pulling a thin thread through a space.",
          "confidence": "high",
          "ambiguities": "Could potentially be interpreted as 'needle', 'sew', or 'pull' without verbal context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The pinching motion of the fingers held high clearly mimics the action of holding or pulling a thread."
          },
          "pro": {
            "score": 4,
            "rationale": "The action of pinching and pulling an invisible, thin object clearly represents the physical interaction with a thread."
          },
          "qwen": {
            "score": 4,
            "rationale": "The pinched fingers visually represent the thinness of a thread, and the pulling motion mimics the action of threading or pulling a string."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical action of manipulating a thin, delicate object like a thread."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the fine motor action of holding and pulling a delicate string or thread."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the fine motor sensation of holding a delicate object and the physical action of pulling it taut."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is moderate in size, starting small and extending the arm fully, but it is not overly rapid or complex."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct, extending from the chest to above the head, but is relatively contained to one arm."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the concept of a thread."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly balances informativeness with ease of understanding for a learner."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single hand shape and arm movement, making it ideal for vocabulary learning."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The action of pinching fingers to represent holding a small object is a common and easily understood gesture."
          },
          "pro": {
            "score": 4,
            "rationale": "The pantomime of pulling a thread is a common and easily recognizable action in many cultural contexts."
          },
          "qwen": {
            "score": 4,
            "rationale": "The action of threading a needle or pulling a string is a widely understood concept represented by a common iconic hand shape."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and requires no special coordination, making it easy for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very simple, natural, and effortless for a learner to mimic."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no complex coordination, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 106,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Temple",
      "title": "16_temple.mov.AVI",
      "local_path": "data/videos/16_temple.mov.AVI",
      "video": "assets/rating-videos/16_temple.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 1.048,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture represents 'prayer' or 'respect' rather than the physical structure of a 'temple', which may confuse learners.",
      "pro_ambiguities": "The gesture could easily be interpreted as 'pray', 'religion', or 'church' rather than specifically 'temple'.",
      "qwen_ambiguities": "Could be misinterpreted as 'pray' or 'thank you' depending on cultural context; Lacks architectural or spatial cues that might more directly evoke 'temple' as a building",
      "models": {
        "flash": {
          "description": "The actor stands with hands pressed together in a prayer-like position and performs a slight bow.",
          "confidence": "high",
          "ambiguities": "The gesture represents 'prayer' or 'respect' rather than the physical structure of a 'temple', which may confuse learners."
        },
        "pro": {
          "description": "The actor brings her hands together in a prayer position in front of her chest, closes her eyes, and bows slightly forward.",
          "confidence": "high",
          "ambiguities": "The gesture could easily be interpreted as 'pray', 'religion', or 'church' rather than specifically 'temple'."
        },
        "qwen": {
          "description": "The actor brings her palms together in front of her chest in a prayer-like position, bows her head slightly forward, then returns to upright and lowers her hands.",
          "confidence": "medium",
          "ambiguities": "Could be misinterpreted as 'pray' or 'thank you' depending on cultural context; Lacks architectural or spatial cues that might more directly evoke 'temple' as a building"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture represents a prayer or a bow, which has no visual relationship to the architectural structure of a temple."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture depicts the action of praying rather than the physical structure of a temple, relying on a strong association between the action and the location."
          },
          "qwen": {
            "score": 4,
            "rationale": "The prayer-hand gesture is widely associated with temples or places of worship, especially in Eastern religious contexts; it visually evokes reverence and sacred space."
          },
          "delta": 2
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "The gesture evokes the act of praying or showing respect, which does not simulate the physical experience of being in or interacting with a temple."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the bodily action of praying or showing reverence, simulating the physical experience associated with being in a temple."
          },
          "qwen": {
            "score": 3,
            "rationale": "The bowing motion and hand placement simulate a ritualistic bodily action common in temple visits, evoking physical participation in worship."
          },
          "delta": 2
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is slow and limited to a simple bow, lacking dynamic or expansive qualities."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is slow, deliberate, and constrained to the center of the body, lacking expansive or rapid dynamics."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate — clear but not exaggerated; the bow adds dynamic emphasis without being overly large or fast."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 2,
            "rationale": "The facial expression is neutral and solemn, which is appropriate for a prayer gesture but does not strongly convey the concept of a temple."
          },
          "pro": {
            "score": 3,
            "rationale": "The actor closes her eyes and maintains a calm, serene expression, conveying a moderate sense of reverence or peace."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains neutral throughout; no overt emotional signaling (e.g., serenity, awe) accompanies the gesture."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 2,
            "rationale": "The gesture is simple to perform but is conceptually confusing because it represents a religious act rather than the building itself."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple, clear, and easy to process, making it an optimal fit for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "Simple, single-motion gesture with minimal cognitive load; ideal for vocabulary learning contexts."
          },
          "delta": 2
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The gesture of pressing hands together and bowing is a widely recognized cultural symbol for prayer or respect."
          },
          "pro": {
            "score": 4,
            "rationale": "The prayer hands gesture is a widely recognized symbol of religious or spiritual practice across many cultures."
          },
          "qwen": {
            "score": 4,
            "rationale": "Prayer hands + bow is recognizable across many Western-educated audiences as associated with Asian temples or spiritual settings, though not universal."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "Bringing the hands together and bowing slightly is a very natural and effortless motor action to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Extremely easy to reproduce — requires only basic motor coordination and no special flexibility or strength."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 107,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Chair",
      "title": "17_chair.mov.AVI",
      "local_path": "data/videos/17_chair.mov.AVI",
      "video": "assets/rating-videos/17_chair.mp4",
      "complete": true,
      "max_abs_delta": 2.667,
      "mean_abs_delta": 1.524,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture is completely unrelated to the word 'chair'. It looks more like a random pose or a dance movement.",
      "pro_ambiguities": "Without knowing the target word, the gesture could be misinterpreted as 'stepping up', 'climbing', or 'resting a foot'.",
      "qwen_ambiguities": "Without context, the gesture could be interpreted as the verb 'sit' rather than the noun 'chair'.; Could potentially be confused with body parts like 'knee' or 'leg' due to the focus on limb movement.",
      "models": {
        "flash": {
          "description": "The actor stands, then briefly lifts one leg and places a hand on her hip, mimicking a pose rather than the act of sitting or the shape of a chair.",
          "confidence": "high",
          "ambiguities": "The gesture is completely unrelated to the word 'chair'. It looks more like a random pose or a dance movement."
        },
        "pro": {
          "description": "The actor lifts her right leg, bending it at a 90-degree angle, and places her left hand on her hip, using her body posture to mimic the physical shape of a chair.",
          "confidence": "high",
          "ambiguities": "Without knowing the target word, the gesture could be misinterpreted as 'stepping up', 'climbing', or 'resting a foot'."
        },
        "qwen": {
          "description": "The actor stands upright, places her left hand on her hip, and lifts her right leg, bending the knee to mimic the posture of sitting down on an invisible seat.",
          "confidence": "high",
          "ambiguities": "Without context, the gesture could be interpreted as the verb 'sit' rather than the noun 'chair'.; Could potentially be confused with body parts like 'knee' or 'leg' due to the focus on limb movement."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture does not resemble a chair or the act of sitting in any recognizable way."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture visually resembles the shape of a chair (torso as backrest, thigh as seat), providing a moderate iconic relationship to the object's form."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture iconically represents the function of a chair (sitting) rather than the object's shape, creating a clear semantic link."
          },
          "delta": 2
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "The movement is abstract and does not evoke the physical experience of sitting or the structure of a chair."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture represents the static shape of the object rather than the bodily action of interacting with it (e.g., sitting down), resulting in weak action-related imagery."
          },
          "qwen": {
            "score": 4,
            "rationale": "Lifting the leg and bending the knee strongly evokes the physical sensation and motor plan of lowering oneself onto a seat."
          },
          "delta": 2
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is brief and somewhat slow, lacking the dynamism needed to be highly salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement involves lifting a leg and positioning an arm, which is a clear and moderate movement, though not particularly expansive or rapid."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is distinct and changes the body silhouette clearly, but it is relatively contained and slow rather than expansive."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, conveying no emotional meaning."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is neutral and focused on the movement, lacking strong affective signaling."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 2,
            "rationale": "The gesture is confusing because it does not relate to the target word, making it cognitively unhelpful."
          },
          "pro": {
            "score": 3,
            "rationale": "While physically simple, the cognitive mapping of body parts to the structural components of a chair makes it moderately complex for a learner to process."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple and cognitively straightforward, making it ideal for vocabulary association."
          },
          "delta": 2
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 1,
            "rationale": "This specific movement sequence is not a culturally recognized gesture for 'chair'."
          },
          "pro": {
            "score": 2,
            "rationale": "Using the body to mimic the shape of a chair is an unusual and uncommon gesture; a more familiar cultural gesture would involve miming the act of sitting."
          },
          "qwen": {
            "score": 5,
            "rationale": "Miming the act of sitting is a universally recognized gesture in Western contexts for indicating a chair or sitting."
          },
          "delta": 2.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 4,
            "rationale": "The physical movement is simple enough to replicate, even if it is meaningless in context."
          },
          "pro": {
            "score": 4,
            "rationale": "The posture is physically straightforward and easy for most learners to reproduce without difficulty."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement requires minimal balance and effort, making it very easy for learners to reproduce immediately."
          },
          "delta": 0.667
        }
      }
    },
    {
      "index": 108,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Coffee",
      "title": "18_coffee.mov.AVI",
      "local_path": "data/videos/18_coffee.mov.AVI",
      "video": "assets/rating-videos/18_coffee.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.095,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could technically represent any hot beverage (tea, hot chocolate), but in the context of the target word, it is unambiguous.",
      "pro_ambiguities": "The gesture could represent any hot beverage drunk from a cup (like tea), but it is highly appropriate for coffee.",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor brings her hand to her mouth as if holding a cup, then makes a motion as if blowing on a hot beverage, followed by a slight upward movement.",
          "confidence": "high",
          "ambiguities": "The gesture could technically represent any hot beverage (tea, hot chocolate), but in the context of the target word, it is unambiguous."
        },
        "pro": {
          "description": "The actor mimics holding a cup or saucer with one hand while using the other hand to bring an imaginary cup to her mouth and drink, tilting her head back slightly.",
          "confidence": "high",
          "ambiguities": "The gesture could represent any hot beverage drunk from a cup (like tea), but it is highly appropriate for coffee."
        },
        "qwen": {
          "description": "The actor stands still, then raises her left hand palm-up to chest level as if holding a cup. Her right hand mimes pouring from an invisible container into the left palm. She then brings the left hand to her mouth and tilts her head back slightly, simulating drinking.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly mimics the physical act of drinking from a cup and blowing on a hot liquid, which is a highly iconic representation of consuming coffee."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture highly transparently represents the action of drinking from a cup, which is strongly and directly associated with coffee."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture clearly mimics holding a cup, pouring liquid, and drinking — directly representing the act of consuming coffee."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture directly simulates the sensory experience of holding a hot cup and the motor action of blowing on it, providing strong sensorimotor engagement."
          },
          "pro": {
            "score": 5,
            "rationale": "Vividly simulates the physical action of holding a cup and the bodily experience of drinking a beverage."
          },
          "qwen": {
            "score": 5,
            "rationale": "Evokes strong bodily simulation: gripping a cup, pouring, lifting to lips, and swallowing — all sensorimotor actions tied to drinking coffee."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful but relatively contained and moderate in size, typical of a naturalistic gesture."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, involving both arms and the head, but remains moderate in size and speed."
          },
          "qwen": {
            "score": 4,
            "rationale": "Movement is clear and purposeful but not overly large or fast; sufficient to draw attention without being distracting."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, with only a very subtle hint of engagement, lacking a strong affective component."
          },
          "pro": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, with only a slight focus on the action of drinking, lacking strong emotional cues."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains largely neutral throughout; no clear affective cue (e.g., enjoyment, warmth) associated with coffee consumption."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly balanced for learning the word 'coffee'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly balances informativeness with ease of understanding for a learner."
          },
          "qwen": {
            "score": 5,
            "rationale": "Simple, sequential motions that are easy to parse and remember; ideal for vocabulary learning context."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The act of drinking from a cup and blowing on a hot beverage is a universally recognized behavior in Western cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "The pantomime of drinking from a cup is a highly familiar and universally recognized gesture in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Miming holding and drinking from a cup is universally recognized in Western contexts as consuming a beverage like coffee."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very natural and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture mimics a common daily action, making it very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Requires no special skill or flexibility; learners can easily replicate the hand positions and motion sequence."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 109,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Bridge",
      "title": "19_bridge.mov.AVI",
      "local_path": "data/videos/19_bridge.mov.AVI",
      "video": "assets/rating-videos/19_bridge.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.095,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could potentially be interpreted as 'arch' or 'tunnel' without linguistic context",
      "models": {
        "flash": {
          "description": "The actor raises both arms in a wide, curved arc from the sides to meet above her head, forming an arch shape, then lowers them back down.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises both arms and sweeps them in a large arc from one side of her body to the other, tracing the shape of an arch.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both arms high and sweeps them forward and down in a large arc, bending slightly at the waist to form an arch shape with her upper body.",
          "confidence": "high",
          "ambiguities": "Could potentially be interpreted as 'arch' or 'tunnel' without linguistic context"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The arm movement clearly and transparently traces the physical shape of an arch or bridge."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture of tracing a large arch in the air is a highly transparent visual representation of the physical structure of a bridge."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture creates a clear arch shape with the arms and torso, directly mimicking the structural form of a typical arch bridge."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement simulates the physical structure of a bridge, engaging the upper body in a spatial representation."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves drawing the shape of the object rather than simulating a physical interaction with it, providing moderate imagery of its form."
          },
          "qwen": {
            "score": 4,
            "rationale": "The sweeping motion of the arms overhead and down simulates the physical span and curvature involved in bridge architecture."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 4,
            "rationale": "The movement is expansive, fluid, and clearly defined, making it visually prominent."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is expansive and clear, using both arms to create a large, sweeping arc across the upper body."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture involves a large, expansive movement of the upper body and arms, making it visually prominent and attention-grabbing."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the entire movement."
          },
          "qwen": {
            "score": 1,
            "rationale": "The facial expression remains neutral and focused on the movement, conveying no specific emotional affect."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the concept of a bridge."
          },
          "pro": {
            "score": 5,
            "rationale": "The single, continuous sweeping motion is simple, clear, and perfectly suited for conveying the concept without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is a single, fluid arc that is simple to parse and understand without creating cognitive overload."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Using hands to represent an arch or bridge is a universally understood iconic gesture."
          },
          "pro": {
            "score": 5,
            "rationale": "Tracing an arch is a widely recognized, intuitive, and common way to visually represent a bridge in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Using arms to form an arch is a widely recognized and conventional gesture for representing bridges or arches."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The sweeping arm motion is physically simple, requires no special coordination, and is effortless for a learner to mimic."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture uses natural, gross motor body mechanics and requires no fine motor skills, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 110,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Earth",
      "title": "20_earth.mov.AVI",
      "local_path": "data/videos/20_earth.mov.AVI",
      "video": "assets/rating-videos/20_earth.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially represent other spherical objects like a ball or a globe, but in the context of the word 'Earth', it is clear.",
      "pro_ambiguities": "Without the target word, the gesture could represent any large spherical object, such as a ball or a circle.",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor stands still, raises both arms in a wide arc above her head, and then brings them down to her sides in a circular motion, tracing the shape of a sphere.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially represent other spherical objects like a ball or a globe, but in the context of the word 'Earth', it is clear."
        },
        "pro": {
          "description": "The actor raises both arms straight up and then brings them down in a wide, symmetrical circular motion, tracing the shape of a large sphere.",
          "confidence": "high",
          "ambiguities": "Without the target word, the gesture could represent any large spherical object, such as a ball or a circle."
        },
        "qwen": {
          "description": "The actor raises both arms high above her head and then sweeps them down and outward in a large, circular motion, effectively outlining the shape of a large sphere or globe around her body.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The circular arm movement clearly traces the spherical shape of the Earth, providing a strong visual representation of the concept."
          },
          "pro": {
            "score": 4,
            "rationale": "The wide circular motion clearly traces the shape of a globe or sphere, visually representing the Earth."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture creates a clear visual outline of a sphere or globe, which is the direct physical shape of the Earth."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture simulates the act of outlining a large, round object, which engages the learner's spatial and motor systems."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture simulates the action of outlining or encompassing a large, round physical object."
          },
          "qwen": {
            "score": 4,
            "rationale": "The sweeping motion evokes the physical experience of encompassing or holding a large spherical object."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 4,
            "rationale": "The movement is expansive, involving the full range of motion of both arms, which makes it visually prominent."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is expansive, using both arms to create a large shape, making it visually prominent."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is expansive and uses the full vertical range of the actor's reach, making it visually prominent."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is largely neutral, perhaps slightly widened eyes for emphasis, but lacks strong affective signaling."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and directly maps to the target word without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The single, large circular motion is simple, direct, and perfectly balances informativeness with ease of processing."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a simple, single continuous motion that is easy to process cognitively while learning the word."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "Using hands to indicate a round shape is a universally understood gesture for representing spherical objects like the Earth."
          },
          "pro": {
            "score": 5,
            "rationale": "Using a circular hand motion to represent a globe or the world is a highly familiar and conventional gesture."
          },
          "qwen": {
            "score": 5,
            "rationale": "Drawing a circle in the air to represent the globe or the world is a highly conventional and recognized gesture in Western contexts."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is natural, requires no special coordination, and is very easy for a learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is gross motor, symmetrical, and very easy for anyone to reproduce effortlessly."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement relies on natural gross motor skills and is very easy for a learner to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 111,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Flower",
      "title": "21_flower.mov.AVI",
      "local_path": "data/videos/21_flower.mov.AVI",
      "video": "assets/rating-videos/21_flower.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.667,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The circular motion could be interpreted as stirring or mixing rather than representing petals or fragrance if context is missing.; Without prior knowledge of the target word, the gesture might be seen as generic ‘holding’ or ‘presenting’ rather than specifically ‘flower’.",
      "models": {
        "flash": {
          "description": "The actor holds her hands together in front of her chest, then slowly opens them outward and upward, mimicking the blooming of a flower.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor holds her left hand out as if holding a stem, then brings her right hand to her nose and inhales slightly with closed eyes, simulating smelling a flower.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands facing the camera, raises her left hand with palm up as if holding something, then uses her right hand to make a small circular motion above the left palm, ending with both hands held in place as if presenting or cradling an object.",
          "confidence": "high",
          "ambiguities": "The circular motion could be interpreted as stirring or mixing rather than representing petals or fragrance if context is missing.; Without prior knowledge of the target word, the gesture might be seen as generic ‘holding’ or ‘presenting’ rather than specifically ‘flower’."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly and directly mimics the physical process of a flower bud opening into a bloom."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture depicts the action of interacting with a flower (smelling it) rather than its physical shape, but the association is very clear and representative."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture visually suggests holding and presenting a flower — the cupped left hand implies containment (like a bloom), and the right hand’s circular motion mimics petals or fragrance rising, creating a clear iconic link to 'flower'."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement simulates the growth and expansion of a plant, providing a strong visual-motor representation of the concept."
          },
          "pro": {
            "score": 5,
            "rationale": "Highly vivid simulation of holding a delicate object and the sensory experience of smelling it."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the tactile experience of gently holding a flower and the kinesthetic sense of smelling or admiring it, engaging motor and perceptual simulations relevant to the word."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is smooth and deliberate, though not particularly large or fast, making it moderately salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is relatively small and contained, primarily involving bringing the hand to the face at a moderate speed."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate in size and speed — not overly dramatic but sufficiently distinct to draw attention; the circular motion adds visual interest without being overwhelming."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 4,
            "rationale": "The facial expression, with closed eyes and a slight inhalation, effectively conveys the pleasant sensory experience of smelling a flower."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains largely neutral throughout; no strong affective cues (e.g., delight, awe) are conveyed that might enhance emotional encoding of the word."
          },
          "delta": 2
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the concept of a flower."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly balances informativeness with ease of understanding for a learner."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is simple enough for learners to parse quickly yet contains meaningful components (holding + circling) that support semantic mapping without cognitive overload."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The 'blooming' gesture is a universally understood iconic representation of a flower."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of smelling a flower is a highly familiar and conventional way to represent the concept in Western cultures."
          },
          "qwen": {
            "score": 4,
            "rationale": "In Western contexts, cupping hands to hold or present an object (especially something delicate like a flower) is a recognizable convention; the circular motion may also evoke scent or beauty, aligning with common gestural schemas."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to perform, requiring no special motor skills."
          },
          "pro": {
            "score": 5,
            "rationale": "The movements are natural, everyday actions that are effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture requires minimal coordination and uses natural hand positions; learners can easily replicate it without training or physical strain."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 112,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Shampoo",
      "title": "22_shampoo.mov.AVI",
      "local_path": "data/videos/22_shampoo.mov.AVI",
      "video": "assets/rating-videos/22_shampoo.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without the specific scrubbing dynamic, hands on the head could ambiguously signal a headache or stress, but the motion clarifies the intent.",
      "models": {
        "flash": {
          "description": "The actor performs a miming action of washing hair by placing both hands on the top of her head and moving them in a circular, scrubbing motion.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises both hands to her head and makes a rubbing or massaging motion on her hair, simulating washing it.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both hands to the top of her head and performs a vigorous scrubbing or massaging motion with her fingers, mimicking the action of washing hair, before quickly returning her arms to her sides.",
          "confidence": "high",
          "ambiguities": "Without the specific scrubbing dynamic, hands on the head could ambiguously signal a headache or stress, but the motion clarifies the intent."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a direct, transparent pantomime of the physical act of shampooing one's hair."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly mimics the action of washing hair, which is the primary use of shampoo, making it highly transparent."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a direct pantomime of the physical act of applying shampoo and scrubbing the scalp, creating a highly transparent visual link to the word."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The movement perfectly simulates the tactile and motor experience of washing hair."
          },
          "pro": {
            "score": 5,
            "rationale": "Strongly evokes the tactile and motor experience of massaging shampoo into the scalp with both hands."
          },
          "qwen": {
            "score": 5,
            "rationale": "The scrubbing motion strongly evokes the tactile sensation of fingers massaging the scalp and the physical routine of hair washing."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it remains within a relatively small, localized space around the head."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement involves raising both arms and moving hands around the head, presenting moderate movement dynamics."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is clear and pronounced, utilizing both arms and distinct hand actions that effectively capture attention without being overly exaggerated."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor's facial expression remains neutral throughout the gesture, conveying no emotional meaning."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a relatively neutral facial expression, focusing on the physical enactment rather than conveying strong affective meaning."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly captures the concept without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matched to the concrete nature of the verb, imposing minimal cognitive load."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The act of washing hair is a universal human experience, making the gesture immediately recognizable."
          },
          "pro": {
            "score": 5,
            "rationale": "Miming washing hair is a universally recognized and highly familiar action for representing shampoo or showering."
          },
          "qwen": {
            "score": 5,
            "rationale": "The action of washing hair is a universal daily routine, and the hand-to-head scrubbing motion is widely recognized across Western cultures."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is natural, requires no special physical skill, and is effortless for learners to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and effortless, requiring no special dexterity, making it very easy for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 113,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Jumper",
      "title": "23_jumper.mov.AVI",
      "local_path": "data/videos/23_jumper.mov.AVI",
      "video": "assets/rating-videos/23_jumper.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without the label, the gesture might be interpreted as 'putting on a mask' or 'fixing hair' due to the hands near the face.; The word 'Jumper' has different meanings (sweater vs. pinafore dress vs. action of jumping); the gesture specifically supports the 'pullover sweater' definition.",
      "models": {
        "flash": {
          "description": "The actor stands still, then raises both arms from her sides up over her head and back down, mimicking the action of pulling a sweater or jumper over one's head.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises both hands above her head and then pulls them down over her torso, mimicking the action of putting on a jumper.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both hands to the neck/head area, moves them behind the head, extends arms fully upward, and then brings them down, mimicking the action of pulling a pullover sweater over the head.",
          "confidence": "high",
          "ambiguities": "Without the label, the gesture might be interpreted as 'putting on a mask' or 'fixing hair' due to the hands near the face.; The word 'Jumper' has different meanings (sweater vs. pinafore dress vs. action of jumping); the gesture specifically supports the 'pullover sweater' definition."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The movement clearly and directly mimics the physical action of pulling a jumper over the head, making the semantic link highly transparent."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture provides a highly transparent visual representation of the object by pantomiming the specific action of putting it on."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture iconically represents the action of putting on a pullover-style jumper (sweater), which is a strong metonymic link to the object itself."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture engages the full range of motion required to put on a garment, providing a strong sensorimotor simulation of the action."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement vividly simulates the physical experience and bodily action of pulling a garment over the head and down the body."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement evokes the specific tactile and motor experience of pulling a garment over one's head and through the arms."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 4,
            "rationale": "The movement is expansive, involving the full arms and a clear vertical trajectory, which makes it visually prominent."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture involves a clear, expansive movement of both arms reaching above the head and then down, making it visually prominent."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture involves large, full-range arm movements extending vertically, making it visually prominent and easy to track."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, conveying no emotional meaning."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor's facial expression remains relatively neutral and focused on the movement, lacking strong emotional signaling."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly balanced for learning the word 'jumper'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is straightforward, intuitive, and optimally balances simplicity with clear informativeness for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a single, fluid sequence that is cognitively simple and perfectly matched to the concrete nature of the noun."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of pulling a jumper over one's head is a universal, everyday physical experience in Western cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "The pantomime of putting on a sweater is a highly familiar and universally recognized action in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "The action of dressing oneself is a universal human experience, making the gesture recognizable across most cultural contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very natural, simple to perform, and requires no special coordination."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a natural, everyday movement that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, requires no special skill, and can be effortlessly reproduced by learners of any age."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 114,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Dish Washing Liquid",
      "title": "24_dish washing liquid.mov.AVI",
      "local_path": "data/videos/24_dish washing liquid.mov.AVI",
      "video": "assets/rating-videos/24_dish_washing_liquid.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.191,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture represents the action of washing dishes generally, rather than specifically the liquid itself, though this is a standard iconic representation.",
      "pro_ambiguities": "The rubbing motion resembles washing hands rather than specifically washing a dish, which could slightly overlap with 'hand soap'.",
      "qwen_ambiguities": "The gesture represents using liquid soap generally, so it could be confused with 'hand soap' or 'washing hands' without context.",
      "models": {
        "flash": {
          "description": "The actor performs a circular rubbing motion with one hand against the palm of the other, simulating the act of scrubbing a dish.",
          "confidence": "high",
          "ambiguities": "The gesture represents the action of washing dishes generally, rather than specifically the liquid itself, though this is a standard iconic representation."
        },
        "pro": {
          "description": "The actor mimics holding a bottle and squeezing it downwards with one hand, then brings both hands together in a circular rubbing motion as if washing.",
          "confidence": "high",
          "ambiguities": "The rubbing motion resembles washing hands rather than specifically washing a dish, which could slightly overlap with 'hand soap'."
        },
        "qwen": {
          "description": "The actor mimes holding a dispenser bottle in one hand, pressing a pump mechanism to dispense liquid into the other palm, and then rubbing both hands together.",
          "confidence": "high",
          "ambiguities": "The gesture represents using liquid soap generally, so it could be confused with 'hand soap' or 'washing hands' without context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The circular rubbing motion clearly mimics the physical action of scrubbing a dish, which is directly related to the use of dish washing liquid."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly depicts the sequence of dispensing a liquid from a bottle and then washing, which strongly resembles the use of dish washing liquid."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly mimics the specific action of pumping liquid from a bottle and applying it, which is strongly associated with the target word."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture effectively simulates the tactile experience of washing dishes, engaging motor imagery related to the target concept."
          },
          "pro": {
            "score": 5,
            "rationale": "The actions of grasping, squeezing, and rubbing hands together evoke very vivid physical interactions and bodily experiences related to the word."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motion evokes the tactile sensation of pressing a pump and the friction of rubbing soapy hands, creating vivid bodily imagery."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively small and contained within the hand area."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and involves both hands, but remains relatively contained in front of the torso with moderate speed and size."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct but relatively contained within the upper body, lacking large or expansive dynamics."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture without conveying specific affect."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the action associated with the target word."
          },
          "pro": {
            "score": 4,
            "rationale": "The two-step sequence (squeezing then washing) is informative and easy to follow without being overly complex."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of two distinct phases (pumping and rubbing), making it cognitively light and easy to process."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of scrubbing a dish is a universal domestic activity, making the gesture highly recognizable."
          },
          "pro": {
            "score": 5,
            "rationale": "The motions of dispensing liquid soap from a bottle and washing are highly familiar and universally understood in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "The action of pumping soap and washing hands is a highly familiar, routine motor schema in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture consists of simple, everyday motor actions that are very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture requires no flexibility or complex coordination, making it effortless for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 115,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Pumpkin",
      "title": "25_pumpkin.mov.AVI",
      "local_path": "data/videos/25_pumpkin.mov.AVI",
      "video": "assets/rating-videos/25_pumpkin.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.571,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could theoretically represent any large, round object (e.g., a ball, a melon), but in the context of the target word, it is unambiguous.",
      "pro_ambiguities": "Without the target word, the gesture could represent any large, round object, such as a ball or a boulder.",
      "qwen_ambiguities": "The gesture could easily represent other large, round objects like a watermelon or a ball.; The movement might be interpreted as indicating 'heavy' or 'big' rather than a specific object.",
      "models": {
        "flash": {
          "description": "The actor uses both hands to trace a rounded, spherical shape in the air in front of her torso, mimicking the size and shape of a pumpkin.",
          "confidence": "high",
          "ambiguities": "The gesture could theoretically represent any large, round object (e.g., a ball, a melon), but in the context of the target word, it is unambiguous."
        },
        "pro": {
          "description": "The actor uses both hands to trace the outline of a large, round object in front of her lower torso.",
          "confidence": "high",
          "ambiguities": "Without the target word, the gesture could represent any large, round object, such as a ball or a boulder."
        },
        "qwen": {
          "description": "The actor bends her knees to lower her body while simultaneously sweeping her hands downwards and outwards, as if outlining the shape and size of a large, round object resting on the ground.",
          "confidence": "medium",
          "ambiguities": "The gesture could easily represent other large, round objects like a watermelon or a ball.; The movement might be interpreted as indicating 'heavy' or 'big' rather than a specific object."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly and accurately depicts the round, voluminous shape of a pumpkin."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly traces a large, round shape, which visually resembles the physical form of a pumpkin."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture visually represents the round shape and ground-level position of a pumpkin, but lacks specific distinguishing features like ridges or a stem, making it somewhat generic."
          },
          "delta": 1.333
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement simulates the physical experience of holding or outlining a large, round object."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture evokes the physical action of holding or feeling the size and shape of a large, bulky object."
          },
          "qwen": {
            "score": 3,
            "rationale": "The knee bend and arm extension evoke the physical properties of the object, specifically its size and potential weight, creating a moderate sense of physical presence."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though it remains within a moderate range of motion."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is moderate in size and speed, clearly outlining a shape but not overly expansive or rapid."
          },
          "qwen": {
            "score": 3,
            "rationale": "The downward drop of the torso and arms is distinct and creates a clear vertical movement path that captures attention without being overly exaggerated."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture, providing no additional emotional cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The simple, symmetrical tracing motion is easy to process and directly conveys the concept of a round shape without unnecessary complexity."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture involves a simple coordination of leg and arm movement that is easy to understand and not cognitively overloaded."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Using hands to indicate the size and shape of an object is a universal and highly familiar gesture."
          },
          "pro": {
            "score": 4,
            "rationale": "Using hands to outline the size and shape of an object is a widely understood and common communicative strategy."
          },
          "qwen": {
            "score": 3,
            "rationale": "While there is no specific cultural emblem for 'pumpkin', the strategy of outlining an object's size and shape with the hands is a widely recognized communicative convention."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, symmetrical, and requires no special coordination, making it very easy for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, requiring only a slight squat and arm sweep, making it very easy for learners to reproduce physically."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 116,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Eraser",
      "title": "26_radiergummi.mov.AVI",
      "local_path": "data/videos/26_radiergummi.mov.AVI",
      "video": "assets/rating-videos/26_radiergummi.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture is performed on the chest rather than a flat surface, which might slightly abstract the action, but it remains clearly recognizable as 'rubbing' or 'erasing'.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The rubbing motion occurs near the hip rather than on an imaginary desk in front, which might slightly confuse the context of where the erasing is happening.",
      "models": {
        "flash": {
          "description": "The actor performs a quick, repetitive rubbing motion with their hand against their chest, simulating the action of erasing.",
          "confidence": "high",
          "ambiguities": "The gesture is performed on the chest rather than a flat surface, which might slightly abstract the action, but it remains clearly recognizable as 'rubbing' or 'erasing'."
        },
        "pro": {
          "description": "The actor raises her right hand, forms a fist, and makes a repetitive back-and-forth rubbing motion in front of her chest, simulating the action of erasing.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor mimes holding a small object in her right hand and makes a short, back-and-forth rubbing motion near her torso, simulating the act of using an eraser on a surface.",
          "confidence": "high",
          "ambiguities": "The rubbing motion occurs near the hip rather than on an imaginary desk in front, which might slightly confuse the context of where the erasing is happening."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The rubbing motion clearly mimics the physical action of using an eraser on a surface."
          },
          "pro": {
            "score": 5,
            "rationale": "The back-and-forth rubbing motion with a closed fist perfectly mimics the action of using an eraser on a surface."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly mimics the functional action of using an eraser (rubbing motion), creating a strong semantic link to the target word."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture effectively simulates the motor action of erasing, which is highly relevant to the word's meaning."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly simulates the physical interaction of holding an eraser and applying friction to a surface, strongly evoking the associated bodily experience."
          },
          "qwen": {
            "score": 4,
            "rationale": "The hand shape (holding a small object) and the friction-like movement evoke the tactile experience of erasing pencil marks."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and contained within the chest area."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture involves a clear, repetitive arm movement, but it is contained within the chest area and is moderate in speed and size."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is distinct but relatively small and contained near the body, lacking large expansive dynamics."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video, providing no emotional cues."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is neutral to focused, serving a functional role rather than conveying strong emotion."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the concept of an eraser."
          },
          "pro": {
            "score": 5,
            "rationale": "The single, repetitive motion is simple and optimally conveys the meaning without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a basic grip and rubbing motion, making it cognitively light for learners."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of erasing is a universal, everyday motor activity familiar to almost everyone in a school or office context."
          },
          "pro": {
            "score": 5,
            "rationale": "The pantomime of erasing is a highly familiar and universally understood action in educational and everyday contexts."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motion of rubbing something out is a universally recognized action associated with writing and correcting in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very simple, requires no special coordination, and is effortless for learners to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no special dexterity, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 117,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Stamp For Letter",
      "title": "27_stamp for letter.mov.AVI",
      "local_path": "data/videos/27_stamp for letter.mov.AVI",
      "video": "assets/rating-videos/27_stamp_for_letter.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as tapping a finger or pressing a button, but in context, it clearly represents stamping.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without context, the motion could briefly resemble a clap or a hand slap.",
      "models": {
        "flash": {
          "description": "The actor performs a quick, downward tapping motion with her right hand, simulating the action of pressing a stamp onto a surface.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as tapping a finger or pressing a button, but in context, it clearly represents stamping."
        },
        "pro": {
          "description": "The actor brings her right hand to her mouth as if licking something small, then presses it down onto her flat left hand.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor positions her left hand flat with palm facing up to represent an envelope or letter. She then brings her right hand down in a firm, pressing motion onto the left palm, mimicking the action of applying a postage stamp.",
          "confidence": "high",
          "ambiguities": "Without context, the motion could briefly resemble a clap or a hand slap."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The downward tapping motion clearly mimics the physical action of stamping a letter."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture perfectly mimics the sequence of licking a stamp and pressing it onto an envelope, making it highly transparent."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a direct pantomime of the target action, using one hand as the paper and the other as the stamp."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture effectively simulates the motor action of applying a stamp, engaging the learner's sensorimotor system."
          },
          "pro": {
            "score": 5,
            "rationale": "Vividly simulates the tactile experience of holding a small stamp, bringing it to the mouth, and pressing it down onto a surface."
          },
          "qwen": {
            "score": 5,
            "rationale": "Strongly evokes the tactile sensation of holding a flat object and the pressure of pressing a stamp down."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and quick, making it moderately salient."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is distinct, involving moving the hand to the face and then down, but it is moderate in size and speed."
          },
          "qwen": {
            "score": 4,
            "rationale": "The downward striking motion is distinct and deliberate, drawing clear attention to the action."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The two-step sequence is simple, intuitive, and optimally balances informativeness with ease of processing for a learner."
          },
          "qwen": {
            "score": 5,
            "rationale": "The two-handed coordination is simple and intuitively maps to the semantic meaning without cognitive overload."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "The action of stamping is a common, culturally recognized physical task."
          },
          "pro": {
            "score": 5,
            "rationale": "The pantomime of licking and sticking a stamp is a highly recognizable and common cultural trope."
          },
          "qwen": {
            "score": 4,
            "rationale": "While physical stamping is less common digitally, the physical action is a widely recognized conventional mime."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movements are simple, everyday actions that are effortless for anyone to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural, requires no flexibility, and is very easy for a learner to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 118,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Flute",
      "title": "28_flute.mov.AVI",
      "local_path": "data/videos/28_flute.mov.AVI",
      "video": "assets/rating-videos/28_flute.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.095,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without the target word, the gesture could potentially be confused with playing a piccolo or a fife due to the similar holding position.",
      "models": {
        "flash": {
          "description": "The actor holds her hands up to her mouth in a horizontal position, mimicking the action of playing a flute, and moves her fingers as if pressing keys.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises both hands to her mouth, positioning them as if holding a transverse flute, and wiggles her fingers while slightly pursing her lips as if blowing.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both hands to chest level, positioning them horizontally as if holding a transverse flute. She purses her lips to simulate blowing and positions her fingers as if pressing keys, then returns to a neutral stance.",
          "confidence": "high",
          "ambiguities": "Without the target word, the gesture could potentially be confused with playing a piccolo or a fife due to the similar holding position."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a direct, transparent pantomime of playing a flute, making the semantic link immediately clear."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is a highly transparent and direct visual representation of holding and playing a flute."
          },
          "qwen": {
            "score": 5,
            "rationale": "The horizontal hand positioning and blowing action are a direct, transparent visual representation of playing a transverse flute."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture perfectly simulates the specific motor actions required to play the instrument, including hand placement and finger movement."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly simulates the physical actions of holding the instrument, fingering the keys, and blowing into the mouthpiece."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture vividly evokes the specific motor actions of holding the instrument, finger placement, and the breath control required to play."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though it is relatively contained and focused on the hand/mouth area rather than being expansive."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is moderate in size and speed, primarily involving hand positioning and finger wiggling rather than expansive arm movements."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is contained within the upper torso and is relatively subtle, though distinct enough to be noticed."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The facial expression is mostly neutral, though the pursed lips serve a functional role in the mime rather than conveying emotion."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is primarily functional (pursed lips for blowing) rather than emotional, though it shows focus."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for learning the word 'flute'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the essence of the word without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, requiring only basic hand positioning and breath simulation, making it ideal for vocabulary learning."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of playing a flute is a universally recognized pantomime in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "Miming the playing of a flute is a highly familiar and universally understood gesture in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Miming the playing of musical instruments, particularly the flute in this horizontal manner, is a widely recognized and conventional gesture."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very natural, effortless, and easy for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can easily reproduce this gesture without physical strain or complex coordination."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 119,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Metal Sheet",
      "title": "29_metal sheet.mov.AVI",
      "local_path": "data/videos/29_metal sheet.mov.AVI",
      "video": "assets/rating-videos/29_metal_sheet.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture could also represent other flat objects like a table, a board, or a piece of paper.",
      "pro_ambiguities": "The gesture indicates a flat surface but lacks any specific feature that would distinguish 'metal' from other materials like paper or plastic.",
      "qwen_ambiguities": "Could represent any flat object like 'paper', 'table', or 'board'; Does not convey the hardness or texture associated with 'metal'",
      "models": {
        "flash": {
          "description": "The actor stands still and moves both hands from her sides to a position in front of her body, palms facing down, as if tracing the flat surface of a sheet.",
          "confidence": "high",
          "ambiguities": "The gesture could also represent other flat objects like a table, a board, or a piece of paper."
        },
        "pro": {
          "description": "The actor raises her hands slightly with palms facing down and moves them outwards horizontally, as if indicating a flat, wide surface.",
          "confidence": "high",
          "ambiguities": "The gesture indicates a flat surface but lacks any specific feature that would distinguish 'metal' from other materials like paper or plastic."
        },
        "qwen": {
          "description": "The actor starts with hands near the center of the torso, then extends both arms outward to the sides with palms facing down and fingers extended, outlining a flat, horizontal plane.",
          "confidence": "medium",
          "ambiguities": "Could represent any flat object like 'paper', 'table', or 'board'; Does not convey the hardness or texture associated with 'metal'"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The flat, horizontal hand movement effectively mimics the shape and surface of a flat sheet."
          },
          "pro": {
            "score": 3,
            "rationale": "The outward movement of flat hands visually represents a flat, wide surface, corresponding to the 'sheet' aspect of the word, though it does not convey 'metal'."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture clearly depicts the shape and flatness of a 'sheet' using hand orientation and movement, but lacks specific visual cues to distinguish the material as 'metal'."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture simulates the physical act of feeling or presenting a flat surface, which relates to the object's physical properties."
          },
          "pro": {
            "score": 2,
            "rationale": "The gesture provides a weak simulation of feeling or indicating the spatial extent of a flat object."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement simulates indicating the dimensions of a flat object or holding a large, thin item, evoking spatial properties but not the tactile sensation of metal."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively small and slow, lacking high-energy dynamics."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is slight, brief, and stays close to the body, making it relatively low in visual prominence."
          },
          "qwen": {
            "score": 3,
            "rationale": "The outward expansion of the arms is clear and deliberate, creating a moderate visual focus on the width of the implied object."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a completely neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective information."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, clear, and directly maps to the concept of a flat object."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is very simple and easy to process, avoiding any cognitive overload, though it is somewhat minimal in information."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is simple, symmetrical, and cognitively undemanding, making it highly suitable for vocabulary association."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 4,
            "rationale": "Using hands to indicate a flat surface is a common and intuitive gesture in Western contexts."
          },
          "pro": {
            "score": 4,
            "rationale": "Using flat hands moving apart to indicate a flat surface or object is a common and easily understood iconic gesture."
          },
          "qwen": {
            "score": 5,
            "rationale": "Using hands to outline the size and shape of an object is a universally recognized deictic or iconic strategy in Western contexts."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The minimal and straightforward hand movement is effortless and highly natural for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture requires no fine motor skill or flexibility; learners can easily reproduce the arm extension and hand orientation."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 120,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Towel",
      "title": "30_towel.mov.AVI",
      "local_path": "data/videos/30_towel.mov.AVI",
      "video": "assets/rating-videos/30_towel.mp4",
      "complete": true,
      "max_abs_delta": 2.667,
      "mean_abs_delta": 1.524,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture is completely abstract and does not convey the meaning of 'towel'. It could be interpreted as reaching for something, waving, or a generic exercise movement.",
      "pro_ambiguities": "The gesture depicts twirling a towel rather than the more common action of drying off, which might momentarily confuse learners expecting a drying motion.",
      "qwen_ambiguities": "Could be interpreted specifically as drying hair rather than general towel use; Without a prop, the grip on the imaginary towel is abstract",
      "models": {
        "flash": {
          "description": "The actor performs a single, repetitive, upward-reaching motion with one arm, which does not clearly resemble the action of using a towel.",
          "confidence": "high",
          "ambiguities": "The gesture is completely abstract and does not convey the meaning of 'towel'. It could be interpreted as reaching for something, waving, or a generic exercise movement."
        },
        "pro": {
          "description": "The actor raises her right arm above her head and makes a circular, twirling motion, simulating swinging a towel in the air.",
          "confidence": "high",
          "ambiguities": "The gesture depicts twirling a towel rather than the more common action of drying off, which might momentarily confuse learners expecting a drying motion."
        },
        "qwen": {
          "description": "The actor raises her right arm high above her head and performs a sweeping downward motion across her upper body, mimicking the action of drying off with a towel.",
          "confidence": "high",
          "ambiguities": "Could be interpreted specifically as drying hair rather than general towel use; Without a prop, the grip on the imaginary towel is abstract"
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture is an abstract reaching motion that does not resemble the action of drying oneself or using a towel."
          },
          "pro": {
            "score": 3,
            "rationale": "The gesture represents a specific action associated with a towel (twirling it in the air, often in celebration), but it does not depict the prototypical use of drying oneself."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly mimics the functional action of using a towel (drying off), establishing a strong semantic link through instrumental movement."
          },
          "delta": 2
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "The movement does not simulate the physical interaction or tactile experience associated with using a towel."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the physical action and bodily experience of holding and swinging an object overhead."
          },
          "qwen": {
            "score": 4,
            "rationale": "The sweeping arm movement effectively evokes the tactile sensation and physical effort of rubbing a towel against the body or hair."
          },
          "delta": 2
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is repetitive and slightly dynamic, but it is limited in range and lacks clear purpose."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is large and pronounced, involving the entire arm extended above the head."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is large and expansive, utilizing the full range of the arm to ensure the action is visually prominent against the static background."
          },
          "delta": 1.333
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a largely neutral expression with minimal affective signaling, focusing attention solely on the physical movement."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 2,
            "rationale": "While simple, the gesture is confusing because it does not map to the target word, making it difficult to interpret."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is simple, straightforward, and easy to process without being overly complex."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple, consisting of a single continuous arc that is easy to process and associate with the word."
          },
          "delta": 2
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 1,
            "rationale": "This movement is not a recognized cultural gesture for 'towel' or any common action."
          },
          "pro": {
            "score": 3,
            "rationale": "While twirling a towel is a recognizable action in certain cultural contexts (e.g., sports events), it is not the most common or universal association with the word."
          },
          "qwen": {
            "score": 5,
            "rationale": "The action of drying oneself is a universal human experience, making this mime highly recognizable across Western cultural contexts."
          },
          "delta": 2.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is physically simple and easy to replicate, even if it is semantically meaningless."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a simple, single-arm motion that is very easy for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no complex coordination, making it effortless for learners to reproduce immediately."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 121,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Crutch",
      "title": "31_crutch.mov.AVI",
      "local_path": "data/videos/31_crutch.mov.AVI",
      "video": "assets/rating-videos/31_crutch.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.572,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "Without the context of the word 'crutch', the posture could potentially be interpreted as general leaning or hip pain.",
      "pro_ambiguities": "The gesture could be interpreted as simply resting one's hands on their hips or experiencing back pain, rather than specifically using a crutch.",
      "qwen_ambiguities": "Could be interpreted as 'limp', 'hip pain', or 'injury' rather than the specific object 'crutch'.",
      "models": {
        "flash": {
          "description": "The actor places one hand on their hip and leans slightly to the side, mimicking the posture of someone using a crutch under their arm.",
          "confidence": "high",
          "ambiguities": "Without the context of the word 'crutch', the posture could potentially be interpreted as general leaning or hip pain."
        },
        "pro": {
          "description": "The actor places her left hand on her hip, raises her left shoulder, and leans her body weight to the left, simulating the posture of someone resting on a crutch.",
          "confidence": "high",
          "ambiguities": "The gesture could be interpreted as simply resting one's hands on their hips or experiencing back pain, rather than specifically using a crutch."
        },
        "qwen": {
          "description": "The actor places one hand on her hip and leans her torso to the opposite side with the other arm hanging loosely, mimicking the posture of someone relying on a support aid.",
          "confidence": "medium",
          "ambiguities": "Could be interpreted as 'limp', 'hip pain', or 'injury' rather than the specific object 'crutch'."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The posture clearly mimics the physical stance of someone leaning on a crutch, making the semantic link quite transparent."
          },
          "pro": {
            "score": 3,
            "rationale": "The posture suggests leaning on a support, but without explicitly showing the hands gripping the crutch handles, the visual resemblance to the object itself is moderate."
          },
          "qwen": {
            "score": 3,
            "rationale": "The gesture depicts the functional use of a crutch (leaning for support) rather than the object's physical form, offering a moderate semantic link."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture effectively simulates the bodily experience of supporting one's weight with a crutch."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture effectively evokes the bodily experience of shifting weight and relying on an external physical support."
          },
          "qwen": {
            "score": 4,
            "rationale": "The visible shift in center of gravity and weight-bearing posture strongly evokes the bodily experience of needing physical support."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively subtle and static, focusing more on a fixed posture than dynamic motion."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively subtle and constrained, consisting of a slow shift in posture and arm placement."
          },
          "qwen": {
            "score": 3,
            "rationale": "The lean is distinct and deliberate, creating a clear visual asymmetry without being overly large or rapid."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, serious facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor displays a slight facial expression of discomfort or effort, which weakly aligns with the context of needing a mobility aid."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is largely neutral but focused, providing only a weak cue regarding the discomfort or effort implied."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the target word without unnecessary complexity."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture is simple and captures the core action of using the object without being overly complex or difficult to process."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is motorically simple and cognitively clear, representing an optimal balance for learning contexts."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The posture of leaning on a crutch is a universally recognized physical stance in Western culture."
          },
          "pro": {
            "score": 3,
            "rationale": "The posture of leaning on an invisible support is somewhat recognizable, though it could potentially be interpreted as a general sign of fatigue or back pain without the target word."
          },
          "qwen": {
            "score": 3,
            "rationale": "While leaning suggests instability, the specific mapping to 'crutch' rather than general injury or fatigue is somewhat context-dependent."
          },
          "delta": 1.333
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and easy for any learner to replicate physically."
          },
          "pro": {
            "score": 5,
            "rationale": "The leaning posture is very natural, requires no special coordination, and is effortless for a learner to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is physically effortless and requires no fine motor skills, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 122,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Saw",
      "title": "32_saw.mov.AVI",
      "local_path": "data/videos/32_saw.mov.AVI",
      "video": "assets/rating-videos/32_saw.mp4",
      "complete": true,
      "max_abs_delta": 2,
      "mean_abs_delta": 0.952,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The gesture strongly resembles 'cut' or 'slice' rather than the reciprocating action of 'sawing'.; It could be interpreted as brushing something off the arm.",
      "models": {
        "flash": {
          "description": "The actor performs a rhythmic, back-and-forth sawing motion with her right arm across her torso, mimicking the action of using a hand saw.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right arm, bends her elbow, and performs a repetitive back-and-forth horizontal motion across her body, mimicking the action of using a hand saw.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands neutrally, then swiftly moves her right hand across her left forearm in a single slicing or swiping motion before returning to a neutral stance.",
          "confidence": "medium",
          "ambiguities": "The gesture strongly resembles 'cut' or 'slice' rather than the reciprocating action of 'sawing'.; It could be interpreted as brushing something off the arm."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The movement is a clear, direct, and highly recognizable pantomime of the physical action of sawing."
          },
          "pro": {
            "score": 5,
            "rationale": "The back-and-forth arm motion perfectly mimics the action of using a hand saw, providing a highly transparent visual representation of the word."
          },
          "qwen": {
            "score": 2,
            "rationale": "The gesture resembles a cutting or slicing action more than sawing, which typically requires a back-and-forth reciprocating motion to visually represent the tool's function."
          },
          "delta": 2
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture effectively simulates the specific motor pattern and physical interaction involved in the act of sawing."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a simulated grip and the repetitive push-pull motion of sawing, strongly evoking the physical experience of using the tool."
          },
          "qwen": {
            "score": 2,
            "rationale": "While it evokes a bodily action, it simulates a single slice rather than the friction and repetitive effort associated with using a saw."
          },
          "delta": 2
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and rhythmic, though it is confined to a relatively small space near the torso, making it moderately salient."
          },
          "pro": {
            "score": 4,
            "rationale": "The repetitive back-and-forth movement of the arm is clear, pronounced, and easily captures attention."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is quick and distinct against the static background, drawing attention, but lacks the complexity or size of a more demonstrative action."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, conveying no emotional meaning."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly matches the semantic meaning of the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The single, repetitive motion is simple and perfectly captures the concept without any unnecessary complexity, making it optimal for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor plan is extremely simple and cognitively light, making it easy to process, even if the semantic mapping is weak."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of sawing is a universal physical activity, and the pantomime is widely understood in Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "Pantomiming the use of a common tool like a saw is a highly familiar and widely understood gesture in Western cultures."
          },
          "qwen": {
            "score": 2,
            "rationale": "A single swipe across the arm is not a widely recognized conventional emblem for 'saw' in Western contexts, where a reciprocating motion is expected."
          },
          "delta": 2
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate, requiring no special coordination."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, requires no special coordination, and is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is very natural and effortless to reproduce, requiring minimal coordination or range of motion."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 123,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Perfume",
      "title": "33_perfume.mov.AVI",
      "local_path": "data/videos/33_perfume.mov.AVI",
      "video": "assets/rating-videos/33_perfume.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be interpreted generally as the verb 'to smell' or 'scent' rather than the specific noun 'perfume', though the context likely clarifies this.",
      "models": {
        "flash": {
          "description": "The actor brings her hand up to her neck/collarbone area and makes a slight spraying or dabbing motion, accompanied by a subtle sniff.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right hand to her neck, makes a small pressing motion with her thumb as if spraying a bottle, and tilts her head back slightly with closed eyes as if smelling the scent.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right hand in a fist with thumb extended near her collarbone, tilts her head back, and mimics sniffing the air or smelling her neck.",
          "confidence": "high",
          "ambiguities": "Could be interpreted generally as the verb 'to smell' or 'scent' rather than the specific noun 'perfume', though the context likely clarifies this."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture clearly mimics the common action of applying perfume to the neck or pulse points."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly and transparently mimics the action of spraying perfume onto the neck."
          },
          "qwen": {
            "score": 4,
            "rationale": "The combination of placing the hand near the pulse point (neck) and the sniffing action creates a clear visual representation of applying or smelling perfume."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It directly simulates the physical experience of applying a fragrance, engaging the learner's motor memory of the action."
          },
          "pro": {
            "score": 5,
            "rationale": "Strongly evokes the physical action of holding a bottle, pressing a spray nozzle, and the sensory experience of smelling a fragrance."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture strongly evokes the sensory experience of smelling a scent and the physical action of applying it to the neck."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and contained within the personal space."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is small, localized to the neck area, and relatively subtle without expansive dynamics."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is distinct and focused on the upper body, standing out against the neutral stance, though not overly large or rapid."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 3,
            "rationale": "The actor includes a subtle sniff, which adds a sensory/emotional dimension to the gesture."
          },
          "pro": {
            "score": 3,
            "rationale": "The actor closes her eyes and tilts her head back, providing a moderate cue simulating the pleasant experience of smelling a fragrance."
          },
          "qwen": {
            "score": 3,
            "rationale": "The actor tilts her head back and closes her eyes slightly while sniffing, conveying the sensory focus associated with smelling a fragrance."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly aligned with the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly captures the core meaning without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single fluid motion that is easy to process cognitively."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Applying perfume to the neck is a universally recognized action in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of spraying perfume on the neck is a highly familiar and universally recognizable cultural script in Western contexts."
          },
          "qwen": {
            "score": 5,
            "rationale": "Miming the act of smelling or dabbing perfume on the neck is a highly conventional and recognizable gesture in Western culture."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very natural and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a simple, single-handed motion that is effortless and natural for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no complex motor skills, making it very easy for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 124,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Tie",
      "title": "34_tie.mov.AVI",
      "local_path": "data/videos/34_tie.mov.AVI",
      "video": "assets/rating-videos/34_tie.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as adjusting a necklace or a scarf, though 'tie' is the most direct association.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor brings both hands to the center of her chest/neck area, mimicking the motion of adjusting or tying a necktie.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as adjusting a necklace or a scarf, though 'tie' is the most direct association."
        },
        "pro": {
          "description": "The actor brings both hands up to her neck and performs a motion mimicking the tying or adjusting of a necktie.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands still, then brings both hands to the front of her neck/collar area and performs a quick, symmetrical crossing motion as if tying a bow or knot, before returning hands to sides.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The hand movement clearly mimics the action of adjusting or tying a necktie at the collar."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly mimics the action of tying or adjusting a necktie, providing a highly transparent visual representation of the word."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture directly mimics the physical action of tying a necktie or bow at the collar, making the semantic link to 'tie' highly transparent."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the specific physical interaction of handling a tie, which is a common motor experience."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement strongly evokes the physical sensation and motor action of manipulating fabric around the neck to form a knot."
          },
          "qwen": {
            "score": 5,
            "rationale": "The hand movement evokes the tactile and motor experience of manipulating fabric to form a knot — strongly activating sensorimotor memory associated with tying."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 2,
            "rationale": "The movement is relatively small, contained, and performed at a moderate speed, lacking high visual impact."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and distinct, bringing the hands from the sides to the neck, but remains relatively contained in size and speed."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is concise but clearly visible; the crossing motion at chest level is pronounced enough to draw attention without being overly large or fast."
          },
          "delta": 1.333
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video, providing no emotional cues."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains neutral throughout; no emotional cues are added to reinforce or contextualize the gesture."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and optimally balances informativeness with ease of comprehension for a learner."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and requires minimal coordination — ideal for vocabulary learning contexts where cognitive load should be low."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of adjusting a tie is a universally recognized gesture in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of tying a necktie is a highly familiar and universally recognized gesture in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motion of tying a bow or knot at the neck is widely recognized across Western cultures as associated with ties, scarves, or shoelaces — highly familiar schema."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves simple, everyday hand movements near the body that are very natural and effortless for a learner to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Learners can easily replicate the gesture using their own hands at their neck; it requires no special flexibility or props and feels natural."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 125,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Button",
      "title": "35_button.mov.AVI",
      "local_path": "data/videos/35_button.mov.AVI",
      "video": "assets/rating-videos/35_button.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Without context, the pinching motion could potentially be interpreted as 'pinch' or 'small', though the chest location clarifies it.",
      "models": {
        "flash": {
          "description": "The actor performs a single, downward pressing motion with her index finger, mimicking the action of pressing a button.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right hand and uses her index finger to make a distinct downward pressing motion, simulating the action of pressing a button.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right hand to her upper torso, pinches her thumb and index finger together, and performs a small, precise movement mimicking the action of fastening a button on a shirt.",
          "confidence": "high",
          "ambiguities": "Without context, the pinching motion could potentially be interpreted as 'pinch' or 'small', though the chest location clarifies it."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a direct, transparent representation of the physical action of pressing a button."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly visually represents the typical action of interacting with a button by pressing it."
          },
          "qwen": {
            "score": 4,
            "rationale": "The hand shape (pinched fingers) and location (chest) visually resemble the physical act of manipulating a button."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "It perfectly simulates the tactile experience and motor action of pushing a button."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture strongly evokes the physical, tactile experience of pushing a button with a finger."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture strongly evokes the fine motor action and tactile sensation of holding and pushing a small object through a hole."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and contained."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively small, quick, and constrained to the hand and arm, lacking expansive dynamics."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is subtle, small in amplitude, and confined to the hand and wrist, lacking large or expansive motion."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-focused facial expression throughout."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression with no emotional cues accompanying the gesture."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple, direct, and perfectly captures the core interaction with the object without unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple and cognitively straightforward, making it highly suitable for vocabulary learning."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Pressing a button is a universal, highly familiar action in modern society."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of pressing a button with an index finger is a highly familiar and universally understood gesture in modern contexts."
          },
          "qwen": {
            "score": 5,
            "rationale": "The action of buttoning clothing is a universal daily activity in Western contexts, making the pantomime instantly recognizable."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely easy and natural for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a basic, everyday motor action that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no complex coordination, allowing learners to easily reproduce it."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 126,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Sponge",
      "title": "36_sponge.mov.AVI",
      "local_path": "data/videos/36_sponge.mov.AVI",
      "video": "assets/rating-videos/36_sponge.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as squeezing a stress ball or a similar soft object, but 'sponge' is a very strong candidate.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be misinterpreted as wringing any cloth item (e.g., towel, rag) without contextual cueing; however, given target word 'sponge', interpretation is coherent.",
      "models": {
        "flash": {
          "description": "The actor performs a squeezing motion with one hand against their chest, mimicking the action of squeezing a sponge.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as squeezing a stress ball or a similar soft object, but 'sponge' is a very strong candidate."
        },
        "pro": {
          "description": "The actor brings both hands to her chest and performs a squeezing motion, simulating the action of wringing out a sponge.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands still, then brings both hands together in front of her chest, interlocking fingers and squeezing them tightly while slightly hunching forward, as if wringing out a wet object. She holds the squeeze briefly before releasing and returning to neutral stance.",
          "confidence": "high",
          "ambiguities": "Could be misinterpreted as wringing any cloth item (e.g., towel, rag) without contextual cueing; however, given target word 'sponge', interpretation is coherent."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The hand motion clearly mimics the action of squeezing a sponge, which is a defining characteristic of the object."
          },
          "pro": {
            "score": 5,
            "rationale": "The squeezing motion directly and transparently represents the primary function and physical property of a sponge."
          },
          "qwen": {
            "score": 4,
            "rationale": "The hand-squeezing motion strongly resembles the action of wringing a sponge, visually conveying compression and water expulsion — core semantic features of 'sponge' in use."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture effectively simulates the physical interaction of squeezing a soft, absorbent material."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly simulates the tactile experience and motor action of squeezing a soft, wet object."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture evokes vivid tactile and motor imagery: the feeling of gripping, compressing, and releasing a saturated material, directly simulating the physical interaction with a sponge."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and contained within the chest area."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and pronounced, but localized to the chest area without being overly large or rapid."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate in size and speed — confined to the torso zone, not expansive or rapid, but clearly deliberate and focused on the squeezing action."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor's face shows a slight expression of effort during the squeeze, providing a weak but relevant cue."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains largely neutral; slight downward gaze during squeeze may imply concentration, but no strong emotional signal is conveyed."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly captures the essence of the word without any unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "Gesture is simple, intuitive, and cognitively lightweight — ideal for vocabulary learning, requiring minimal coordination while maximizing semantic clarity."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Squeezing a sponge is a universal, everyday action that is easily recognized in Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of squeezing a sponge is a common, everyday action that is widely recognized and understood."
          },
          "qwen": {
            "score": 5,
            "rationale": "Wringing motion is a universally recognized domestic action in Western contexts, commonly associated with sponges, towels, or cloths — highly familiar and culturally transparent."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The squeezing motion is natural, effortless, and very easy for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Extremely easy to reproduce: requires only basic hand coordination and no special flexibility or strength — natural for learners of all ages and abilities."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 127,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Piece Of Paper",
      "title": "37_piece of paper.mov.AVI",
      "local_path": "data/videos/37_piece of paper.mov.AVI",
      "video": "assets/rating-videos/37_piece_of_paper.mp4",
      "complete": true,
      "max_abs_delta": 2.667,
      "mean_abs_delta": 1.524,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture is highly abstract and does not convey the meaning of 'piece of paper' at all.; It could be interpreted as a generic 'shaking off' or 'opening' motion, but it is not specific to the target word.",
      "pro_ambiguities": "Without the target word, the gesture could potentially be interpreted as 'tear' or 'break', but it strongly implies paper.",
      "qwen_ambiguities": "Could potentially be interpreted as holding a book, tablet, or photograph due to the similar hand shape.",
      "models": {
        "flash": {
          "description": "The actor performs a quick, repetitive motion with both hands, moving them outward and slightly downward in a way that does not clearly represent the physical properties or handling of a piece of paper.",
          "confidence": "high",
          "ambiguities": "The gesture is highly abstract and does not convey the meaning of 'piece of paper' at all.; It could be interpreted as a generic 'shaking off' or 'opening' motion, but it is not specific to the target word."
        },
        "pro": {
          "description": "The actor brings both hands up in front of her chest, fists closed as if gripping something, and then pulls her hands apart horizontally, simulating the action of tearing a piece of paper.",
          "confidence": "high",
          "ambiguities": "Without the target word, the gesture could potentially be interpreted as 'tear' or 'break', but it strongly implies paper."
        },
        "qwen": {
          "description": "The actor raises both hands to chest level, positioning them parallel to each other as if holding the vertical edges of a thin, rectangular sheet, then lowers them back to her sides.",
          "confidence": "high",
          "ambiguities": "Could potentially be interpreted as holding a book, tablet, or photograph due to the similar hand shape."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture does not resemble the shape, texture, or act of holding or using a piece of paper."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly depicts the action of tearing, which is strongly associated with creating or manipulating a piece of paper, providing a strong visual link to the concept."
          },
          "qwen": {
            "score": 4,
            "rationale": "The parallel hand placement clearly outlines the shape and thinness of a rectangular sheet, visually representing the object's physical properties."
          },
          "delta": 2
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "The movement is abstract and does not simulate any physical interaction with paper."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of gripping and pulling apart vividly evokes the physical sensation and motor action of tearing paper."
          },
          "qwen": {
            "score": 4,
            "rationale": "The grip mimics the tactile experience of holding a light, flat object, evoking the physical sensation of handling paper."
          },
          "delta": 2.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is moderately sized and quick, making it visible, but it lacks a clear purpose."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is clear, pronounced, and involves both arms moving outward in a distinct, recognizable action."
          },
          "qwen": {
            "score": 2,
            "rationale": "The movement is contained and relatively small, lacking large or rapid dynamics that would strongly grab visual attention."
          },
          "delta": 1.333
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, expressionless face throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture, providing no additional affective cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 2,
            "rationale": "The gesture is simple to perform but confusing because it lacks a clear semantic link to the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the essence of the target word without unnecessary complexity."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple and cognitively straightforward, making it highly suitable for vocabulary learning."
          },
          "delta": 2
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 1,
            "rationale": "This is not a recognized or conventional gesture for 'piece of paper' in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "The pantomime of tearing paper is a universally understood action and highly familiar in Western culture."
          },
          "qwen": {
            "score": 5,
            "rationale": "Miming the holding of an object is a universal and highly recognizable communicative strategy across Western contexts."
          },
          "delta": 2.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and physically easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a basic, everyday motor action that is very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no dexterity or complex coordination, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 128,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Knife",
      "title": "38_knife.mov.AVI",
      "local_path": "data/videos/38_knife.mov.AVI",
      "video": "assets/rating-videos/38_knife.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as 'chopping' or 'cutting' generally, rather than specifically 'knife', though it is highly contextually appropriate.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The gesture depicts an action (cutting/stabbing), which might be interpreted as the verb 'to cut' rather than the noun 'knife' without context.",
      "models": {
        "flash": {
          "description": "The actor performs a single, sharp downward chopping motion with her right hand, mimicking the action of using a knife.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'chopping' or 'cutting' generally, rather than specifically 'knife', though it is highly contextually appropriate."
        },
        "pro": {
          "description": "The actor raises her right arm high with a flat hand, fingers together, and brings it down swiftly in a chopping motion.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right arm, gripping an imaginary handle, and executes a sharp, swift downward chopping or stabbing motion in the air before returning to a neutral stance.",
          "confidence": "high",
          "ambiguities": "The gesture depicts an action (cutting/stabbing), which might be interpreted as the verb 'to cut' rather than the noun 'knife' without context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The downward chopping motion clearly mimics the action of using a knife to cut something."
          },
          "pro": {
            "score": 5,
            "rationale": "The flat hand clearly represents a blade, and the downward motion perfectly mimics the action of chopping with a knife, making the visual relationship highly transparent."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture functionally represents the target word by miming the primary action associated with a knife (cutting or stabbing), creating a clear semantic link."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical action of cutting, which is a core sensorimotor experience associated with a knife."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture strongly evokes the physical sensation and bodily action of wielding a large knife and striking downward."
          },
          "qwen": {
            "score": 4,
            "rationale": "The sharp downward strike and hand grip strongly evoke the physical sensation and motor program of wielding a blade."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively brief and contained."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is pronounced, involving a full arm extension and a rapid downward stroke, making it visually commanding."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement is quick, decisive, and distinct from the neutral posture, effectively capturing visual attention."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, serious facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The actor maintains a mostly neutral expression, with perhaps a slight look of focus during the downward motion, providing a weak emotional cue."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a focused, relatively neutral expression that matches the seriousness of the action but lacks strong emotional signaling."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the target word."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and highly informative, offering an optimal balance for learning without any cognitive overload."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, consisting of a single arm movement, making it cognitively light and easy to process."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of chopping is a universally understood gesture for using a knife."
          },
          "pro": {
            "score": 5,
            "rationale": "Using a flat hand in a chopping motion to represent a knife or cutting is a highly familiar and universally understood gesture in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "Miming a cutting or stabbing motion is a highly conventional and universally recognized way to represent a knife or cutting action."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The single, straightforward chopping motion is very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no complex dexterity, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 129,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Wave",
      "title": "39_wave.mov.AVI",
      "local_path": "data/videos/39_wave.mov.AVI",
      "video": "assets/rating-videos/39_wave.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor performs a single, lateral wave motion with her right hand, moving it from the center of her body outward to the right and back.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right hand and moves it side-to-side in a standard waving motion.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right hand to shoulder height and moves it side-to-side in a standard greeting or parting motion.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a standard, highly recognizable iconic representation of waving hello or goodbye."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is the literal, universally recognized action of waving a hand, making it highly transparent."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is a direct, literal visual representation of the action defined by the word."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "It directly simulates the physical action of waving, which is a common motor experience."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly enacts the physical motor action of waving, providing strong sensorimotor imagery."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement vividly simulates the physical act of waving hello or goodbye."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively contained and not overly expansive."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and visible but moderate in size and speed, not overly expansive."
          },
          "qwen": {
            "score": 4,
            "rationale": "The hand movement is distinct and clearly visible against the background, drawing attention effectively."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, serious facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the video."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a largely neutral facial expression without strong affective cues like smiling."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for learning the word 'wave'."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is very simple and perfectly suited for conveying the concept without any cognitive overload."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is simple, involving a single hand movement that is easy to cognitively process."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Waving is a universally recognized gesture in Western culture."
          },
          "pro": {
            "score": 5,
            "rationale": "A hand wave is a highly familiar and ubiquitous gesture in Western culture."
          },
          "qwen": {
            "score": 5,
            "rationale": "This is a highly conventional and universally recognized emblem for greeting or parting in Western contexts."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely simple and natural for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The motion is extremely simple and effortless for a learner to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires minimal physical effort for a learner to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 130,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Telephone",
      "title": "40_telephone.mov.AVI",
      "local_path": "data/videos/40_telephone.mov.AVI",
      "video": "assets/rating-videos/40_telephone.mp4",
      "complete": true,
      "max_abs_delta": 1.333,
      "mean_abs_delta": 0.19,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "",
      "pro_ambiguities": "",
      "qwen_ambiguities": "",
      "models": {
        "flash": {
          "description": "The actor performs a classic 'telephone' gesture by forming a handset shape with her hand and placing it against her ear, accompanied by a slight head tilt and a neutral facial expression.",
          "confidence": "high",
          "ambiguities": ""
        },
        "pro": {
          "description": "The actor raises her right hand to her head with the thumb pointing to her ear and pinky to her mouth, mimicking a telephone receiver, while placing her left hand on her hip.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right hand to her ear, extending the thumb and pinky finger while curling the middle fingers, mimicking the shape of a telephone handset.",
          "confidence": "high",
          "ambiguities": ""
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 5,
            "rationale": "The gesture is a highly transparent and universally recognized iconic representation of holding a telephone handset to one's ear."
          },
          "pro": {
            "score": 5,
            "rationale": "The hand shape perfectly mimics the physical form of holding a traditional telephone receiver to the ear and mouth."
          },
          "qwen": {
            "score": 5,
            "rationale": "The hand shape (thumb and pinky extended) is the universally recognized iconic representation of a telephone handset held to the ear."
          },
          "delta": 0
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 5,
            "rationale": "The gesture directly simulates the physical action of using a traditional telephone, engaging clear motor imagery."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly simulates the physical action and bodily posture of holding a phone and engaging in a conversation."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture directly simulates the physical action of holding a phone to the ear to listen or speak, evoking strong bodily memory."
          },
          "delta": 0
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively contained and standard in its execution."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement of bringing the hand to the head is clear and distinct, representing moderate movement dynamics without being overly expansive."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct but relatively small and contained near the head, lacking large or rapid dynamics."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 3,
            "rationale": "The actor's slightly open mouth and engaged gaze suggest active participation in a call, providing a moderate contextual cue."
          },
          "qwen": {
            "score": 2,
            "rationale": "The actor maintains a neutral to slightly pleasant expression, providing minimal affective reinforcement for the word."
          },
          "delta": 1.333
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for vocabulary learning."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and highly informative, making it an optimal fit for vocabulary learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "The motor requirement is minimal (simple hand shape), making it cognitively and physically appropriate for vocabulary learning."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "This is a globally recognized emblem for a telephone, highly familiar in Western and many other cultures."
          },
          "pro": {
            "score": 5,
            "rationale": "This specific hand shape is a highly ubiquitous and universally recognized emblem for a telephone in Western cultures."
          },
          "qwen": {
            "score": 5,
            "rationale": "This is a highly conventionalized emblematic gesture widely understood in Western cultures as meaning 'call' or 'telephone'."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is extremely simple and natural for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture involves a very simple, everyday motor action that is effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is extremely easy to reproduce, requiring only a basic hand configuration and movement to the ear."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 131,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Mirror",
      "title": "41_mirrow.mov.AVI",
      "local_path": "data/videos/41_mirrow.mov.AVI",
      "video": "assets/rating-videos/41_mirrow.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.286,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could potentially be interpreted as 'window' or 'frame', but in the context of the target word, it is clearly 'mirror'.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Could be misinterpreted as ‘stop’ or ‘frame’ without context; however, symmetry and proximity to face strongly favor ‘mirror’ interpretation.",
      "models": {
        "flash": {
          "description": "The actor brings both hands up in front of her face, palms facing outward, then pulls them apart and down, mimicking the act of looking into or framing a mirror.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as 'window' or 'frame', but in the context of the target word, it is clearly 'mirror'."
        },
        "pro": {
          "description": "The actor raises both hands in front of her face with palms facing inwards, simulating holding and looking into a mirror, then lowers her arms.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands facing forward, then raises both hands with palms open and facing outward, moving them slightly forward and back in a symmetrical motion as if presenting or framing a reflective surface in front of her face.",
          "confidence": "high",
          "ambiguities": "Could be misinterpreted as ‘stop’ or ‘frame’ without context; however, symmetry and proximity to face strongly favor ‘mirror’ interpretation."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The movement of bringing hands up to the face and framing it clearly represents the act of looking into a mirror."
          },
          "pro": {
            "score": 5,
            "rationale": "The hands positioned in front of the face with palms inward highly transparently represent the physical object of a mirror and the act of looking into it."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture visually mimics holding or facing a mirror — palms forward, symmetric placement near the face — strongly suggesting reflection or self-viewing."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The gesture simulates the physical action of interacting with a reflective surface, engaging the learner's proprioception."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture directly and vividly simulates the bodily action of holding a mirror and the perceptual experience of looking at one's reflection."
          },
          "qwen": {
            "score": 4,
            "rationale": "Evokes the bodily experience of looking into a mirror; hand positioning simulates interaction with a reflective surface, engaging spatial and tactile imagination."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and deliberate, though not overly expansive or rapid."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and deliberate but relatively constrained to the upper body and face area, without being overly expansive or rapid."
          },
          "qwen": {
            "score": 3,
            "rationale": "Movement is moderate in size and speed — clear but not exaggerated; sufficient to draw attention without being overly dramatic."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 2,
            "rationale": "The facial expression remains mostly neutral, with only a slight focus indicating looking at a reflection, lacking strong affective meaning."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains neutral throughout; no emotional cues are conveyed beyond focused gaze, which may support intent but lacks affective signaling."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, intuitive, and perfectly suited for representing the concept of a mirror."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the concept without any unnecessary complexity, making it optimal for learning."
          },
          "qwen": {
            "score": 5,
            "rationale": "Simple, intuitive movement requiring minimal coordination; ideal for learners to associate with the concept of ‘mirror’ without cognitive overload."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "The action of looking at one's reflection is a universal human experience, making the gesture highly recognizable."
          },
          "pro": {
            "score": 5,
            "rationale": "Mime-like gestures of holding an imaginary mirror to the face are highly familiar and widely understood in Western cultural contexts."
          },
          "qwen": {
            "score": 5,
            "rationale": "Highly familiar gesture in Western contexts — mimicking holding or facing a mirror is a common iconic representation understood across cultures."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and requires no special coordination, making it easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement involves a simple raising of the arms and hands, making it very natural and effortless for learners to reproduce."
          },
          "qwen": {
            "score": 5,
            "rationale": "Extremely easy to reproduce — requires only raising both hands symmetrically; natural and effortless for most learners to imitate."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 132,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Remote Control",
      "title": "42_remote control.mov.AVI",
      "local_path": "data/videos/42_remote control.mov.AVI",
      "video": "assets/rating-videos/42_remote_control.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.381,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as pointing at something or using a laser pointer, but in the context of the target word, it is clearly a remote control.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The hand shape with the thumb up could potentially be misinterpreted as a 'thumbs up' sign if the forward pointing context is missed.; Without finger movement, the specific action of 'pressing buttons' is implied rather than shown.",
      "models": {
        "flash": {
          "description": "The actor stands still, then briefly extends her right arm forward with a closed hand, mimicking the action of pointing a remote control at a device, before returning to a neutral position.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as pointing at something or using a laser pointer, but in the context of the target word, it is clearly a remote control."
        },
        "pro": {
          "description": "The actor raises her right hand forward, holding it as if grasping a small object, and makes a pressing motion with her thumb.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises her right hand forward with fingers curled and thumb extended upward, mimicking the grip of holding a small device, while placing her left hand on her hip. She points the imaginary device forward briefly before returning to a neutral standing position.",
          "confidence": "high",
          "ambiguities": "The hand shape with the thumb up could potentially be misinterpreted as a 'thumbs up' sign if the forward pointing context is missed.; Without finger movement, the specific action of 'pressing buttons' is implied rather than shown."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 4,
            "rationale": "The gesture clearly mimics the action of pointing a remote control at a television or device, which is a highly recognizable iconic representation."
          },
          "pro": {
            "score": 5,
            "rationale": "The hand shape and thumb pressing motion perfectly mimic the action of holding and using a remote control."
          },
          "qwen": {
            "score": 4,
            "rationale": "The hand shape (curled fingers, thumb up) and forward extension clearly mimic holding and pointing a remote control device."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 4,
            "rationale": "The movement directly simulates the physical interaction of using a remote control, engaging the motor schema associated with the object."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture strongly evokes the physical sensation of holding a device and pressing a button with the thumb."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture evokes the specific motor action of aiming a remote at a television, supported by the casual hand-on-hip stance."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and purposeful, though relatively small and contained, making it moderately salient."
          },
          "pro": {
            "score": 2,
            "rationale": "The movement is relatively constrained, involving a simple arm raise and a small, subtle thumb movement."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and distinct but relatively contained within a standard reaching range, lacking exaggerated dynamics."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, serious facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "The facial expression is neutral to focused, lacking strong emotional cues, though it fits the casual context of watching TV."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly suited for representing the target word without unnecessary complexity."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and optimally balances ease of understanding with semantic accuracy."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture is motorically simple and cognitively straightforward, making it highly suitable for vocabulary learning."
          },
          "delta": 0
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 5,
            "rationale": "Pointing a remote control is a ubiquitous, culturally familiar action in Western contexts."
          },
          "pro": {
            "score": 5,
            "rationale": "This is a highly common and universally understood gesture for operating a remote control in modern society."
          },
          "qwen": {
            "score": 5,
            "rationale": "Pointing a remote control is a ubiquitous, culturally universal action in modern contexts, making it instantly recognizable."
          },
          "delta": 0
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The gesture is very simple and natural, making it extremely easy for any learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is very natural, requires no special skill, and is effortless to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is natural and requires no dexterity or complex coordination, making it effortless for learners to reproduce."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 133,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Banana",
      "title": "43_banana.mov.AVI",
      "local_path": "data/videos/43_banana.mov.AVI",
      "video": "assets/rating-videos/43_banana.mp4",
      "complete": true,
      "max_abs_delta": 2.667,
      "mean_abs_delta": 1.524,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "medium",
      "flash_ambiguities": "The gesture is abstract and does not clearly map to the target word 'banana', making it difficult to interpret without the label.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "Gesture could be misinterpreted as indicating direction, dismissal, or dance movement rather than referencing 'banana'.; Absence of hand shaping or object interaction makes intended referent unclear without verbal context.",
      "models": {
        "flash": {
          "description": "The actor performs a quick, sweeping arm motion from the side to the front, which does not clearly resemble the act of peeling or eating a banana.",
          "confidence": "high",
          "ambiguities": "The gesture is abstract and does not clearly map to the target word 'banana', making it difficult to interpret without the label."
        },
        "pro": {
          "description": "The actor raises her right hand and makes a downward pulling motion, simulating the action of peeling a banana.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor stands still, then performs a quick, sweeping motion with her right arm across her body from left to right, ending with a slight head tilt and return to neutral stance. No hand shaping or object mimicry is evident.",
          "confidence": "medium",
          "ambiguities": "Gesture could be misinterpreted as indicating direction, dismissal, or dance movement rather than referencing 'banana'.; Absence of hand shaping or object interaction makes intended referent unclear without verbal context."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 1,
            "rationale": "The gesture is a generic sweeping motion that lacks any visual resemblance to the shape, peeling, or eating of a banana."
          },
          "pro": {
            "score": 5,
            "rationale": "The peeling motion is a highly transparent and recognizable action directly associated with a banana."
          },
          "qwen": {
            "score": 1,
            "rationale": "The gesture bears no visual resemblance to a banana’s shape, peeling action, or typical handling; it appears abstract and unrelated to the target word’s semantics."
          },
          "delta": 2.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 1,
            "rationale": "The movement does not simulate any physical interaction with a banana or the sensory experience of eating one."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture vividly simulates the physical interaction and bodily experience of holding and peeling the fruit."
          },
          "qwen": {
            "score": 1,
            "rationale": "No bodily simulation of holding, peeling, eating, or interacting with a banana is evoked; the movement lacks tactile or motor association with the word."
          },
          "delta": 2.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is moderately sized and quick, making it visible, but it lacks specific purpose or distinct dynamics."
          },
          "pro": {
            "score": 3,
            "rationale": "The movement is clear and pronounced but relatively brief and localized to one arm, making it moderately salient."
          },
          "qwen": {
            "score": 3,
            "rationale": "The arm sweep is moderately sized and fast enough to draw attention, but lacks complexity or repetition that would enhance salience for learning."
          },
          "delta": 0
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, static facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 2,
            "rationale": "Facial expression remains largely neutral throughout; the slight head tilt at the end conveys minimal affective cue, insufficient to reinforce meaning."
          },
          "delta": 0.667
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 2,
            "rationale": "The gesture is simple to perform but confusing because it does not relate to the target word, potentially hindering learning."
          },
          "pro": {
            "score": 5,
            "rationale": "The single peeling motion is simple, direct, and perfectly captures the essence of the word without being overly complex."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture is simple and not cognitively overloaded, making it easy to process — though its simplicity does not aid semantic mapping to 'banana'."
          },
          "delta": 2
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 1,
            "rationale": "This is not a recognized or conventional gesture for 'banana' in Western or any common cultural context."
          },
          "pro": {
            "score": 5,
            "rationale": "The action of peeling a banana is a very common and universally understood concept in Western cultures."
          },
          "qwen": {
            "score": 2,
            "rationale": "This sweeping arm motion is not a culturally recognized emblem or iconic gesture for 'banana' in Western contexts; it may be interpreted as random or stylistic."
          },
          "delta": 2.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is a simple, non-specific arm sweep that is very easy for anyone to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is simple, requires no special coordination, and is effortless for learners to enact."
          },
          "qwen": {
            "score": 5,
            "rationale": "The movement is physically effortless and requires no fine motor control, making it very easy for learners to reproduce — despite lacking semantic relevance."
          },
          "delta": 0
        }
      }
    },
    {
      "index": 134,
      "collection": "object",
      "concreteness": "concrete",
      "target_word": "Poster",
      "title": "44_poster.mov.AVI",
      "local_path": "data/videos/44_poster.mov.AVI",
      "video": "assets/rating-videos/44_poster.mp4",
      "complete": true,
      "max_abs_delta": 0.667,
      "mean_abs_delta": 0.476,
      "flash_confidence": "high",
      "pro_confidence": "high",
      "qwen_confidence": "high",
      "flash_ambiguities": "The gesture could also be interpreted as smoothing out a tablecloth, a map, or any large flat surface, not exclusively a poster.",
      "pro_ambiguities": "",
      "qwen_ambiguities": "The gesture could potentially be interpreted as handling a large map or a curtain due to the similar size and unrolling action.; The final crossing of the arms might be interpreted as simply finishing the action rather than specifically rolling the item up.",
      "models": {
        "flash": {
          "description": "The actor performs a sweeping motion with both arms, starting from the side and moving in an arc to the front, as if smoothing out or displaying a large flat surface.",
          "confidence": "high",
          "ambiguities": "The gesture could also be interpreted as smoothing out a tablecloth, a map, or any large flat surface, not exclusively a poster."
        },
        "pro": {
          "description": "The actor raises both hands and moves them downwards in parallel, simulating the action of unrolling or outlining a large rectangular poster on a wall.",
          "confidence": "high",
          "ambiguities": ""
        },
        "qwen": {
          "description": "The actor raises both hands high as if holding the top corners of a large sheet, brings them down and apart to mimic unrolling or displaying it, and then crosses her arms in front of her chest as if rolling it back up.",
          "confidence": "high",
          "ambiguities": "The gesture could potentially be interpreted as handling a large map or a curtain due to the similar size and unrolling action.; The final crossing of the arms might be interpreted as simply finishing the action rather than specifically rolling the item up."
        }
      },
      "ratings": {
        "iconicity": {
          "label": "Iconicity",
          "flash": {
            "score": 3,
            "rationale": "The sweeping motion mimics the act of smoothing out or hanging a poster, which provides a moderate visual link to the concept."
          },
          "pro": {
            "score": 4,
            "rationale": "The gesture clearly outlines the shape and size of a poster being placed on a wall, providing a strong visual representation."
          },
          "qwen": {
            "score": 4,
            "rationale": "The gesture clearly mimics the physical dimensions and handling of a poster, specifically the action of holding the top edge and unrolling or displaying a large sheet of paper."
          },
          "delta": 0.667
        },
        "sensorimotor_imagery": {
          "label": "Sensorimotor imagery",
          "flash": {
            "score": 3,
            "rationale": "The gesture simulates the physical action of interacting with a large, flat object, engaging the arms in a way that suggests surface manipulation."
          },
          "pro": {
            "score": 4,
            "rationale": "The action strongly evokes the physical experience of handling, unrolling, or hanging a large piece of paper."
          },
          "qwen": {
            "score": 4,
            "rationale": "The movement evokes the kinesthetic sensation of handling a large, lightweight, flexible object, engaging the learner's memory of similar physical interactions."
          },
          "delta": 0.667
        },
        "motional_salience_gesture": {
          "label": "Motional salience",
          "flash": {
            "score": 3,
            "rationale": "The movement is clear and involves the full range of the arms, making it moderately salient without being overly dramatic."
          },
          "pro": {
            "score": 4,
            "rationale": "The movement is expansive and pronounced, using both arms to trace a large shape in space."
          },
          "qwen": {
            "score": 3,
            "rationale": "The movement is clear and uses the upper body space effectively, though it is not overly large or rapid, maintaining a moderate level of visual prominence."
          },
          "delta": 0.667
        },
        "emotional_salience_facial_expression": {
          "label": "Facial emotion",
          "flash": {
            "score": 1,
            "rationale": "The actor maintains a neutral, task-oriented facial expression throughout the gesture."
          },
          "pro": {
            "score": 1,
            "rationale": "The actor maintains a neutral facial expression throughout the gesture."
          },
          "qwen": {
            "score": 1,
            "rationale": "The actor maintains a neutral, focused facial expression throughout the gesture, providing no additional emotional cues."
          },
          "delta": 0
        },
        "gesture_complexity_fit": {
          "label": "Complexity fit",
          "flash": {
            "score": 4,
            "rationale": "The gesture is simple, intuitive, and well-suited for representing the act of displaying a poster."
          },
          "pro": {
            "score": 5,
            "rationale": "The gesture is simple, direct, and perfectly captures the concept without any unnecessary complexity."
          },
          "qwen": {
            "score": 4,
            "rationale": "The two-handed coordination is simple enough to be easily processed but complex enough to distinctively represent the object's properties."
          },
          "delta": 0.667
        },
        "cultural_familiarity": {
          "label": "Cultural familiarity",
          "flash": {
            "score": 3,
            "rationale": "While not a conventionalized emblem, the action of smoothing or placing a poster is a common, recognizable physical task."
          },
          "pro": {
            "score": 4,
            "rationale": "Outlining a shape in the air to represent an object is a common and easily understood communicative strategy."
          },
          "qwen": {
            "score": 4,
            "rationale": "The action of unrolling or hanging a poster is a common experience in Western educational and office contexts, making the mime readily recognizable."
          },
          "delta": 0.667
        },
        "enactment_potential": {
          "label": "Enactment potential",
          "flash": {
            "score": 5,
            "rationale": "The movement is very simple and natural, making it extremely easy for a learner to replicate."
          },
          "pro": {
            "score": 5,
            "rationale": "The movement is straightforward, requiring no special coordination, making it effortless for a learner to copy."
          },
          "qwen": {
            "score": 5,
            "rationale": "The gesture involves natural arm movements that are very easy for a learner to reproduce without physical strain or complex coordination."
          },
          "delta": 0
        }
      }
    }
  ]
};
