const results = window.GESTURE_RESULTS || [];

const ratingLabels = [
  [
    "iconicity",
    "Iconicity",
    "How much the gesture visually resembles the target word's meaning.",
  ],
  [
    "sensorimotor_imagery",
    "Sensorimotor Imagery",
    "How much the gesture evokes bodily action, physical interaction, or perceptual experience.",
  ],
  [
    "motional_salience_gesture",
    "Motional Salience",
    "How much the gesture's movement dynamics convey emotional expressiveness.",
  ],
  [
    "emotional_salience_facial_expression",
    "Facial Emotion",
    "How much the actor's facial expression communicates affective meaning.",
  ],
  [
    "gesture_complexity_fit",
    "Complexity Fit",
    "How appropriate the gesture's motor and cognitive complexity is for learning.",
  ],
  [
    "cultural_familiarity",
    "Cultural Familiarity",
    "How likely learners are to recognize the gesture from a cultural repertoire.",
  ],
  [
    "enactment_potential",
    "Enactment Potential",
    "How easily learners could reproduce the gesture themselves.",
  ],
];

let currentIndex = 0;
const selectedModels = {};

const videoList = document.getElementById("videoList");
const videoPlayer = document.getElementById("videoPlayer");
const fileName = document.getElementById("fileName");
const targetWord = document.getElementById("targetWord");
const confidenceBadge = document.getElementById("confidenceBadge");
const ratingDescription = document.getElementById("ratingDescription");
const ratingsGrid = document.getElementById("ratingsGrid");
const ratingAmbiguities = document.getElementById("ratingAmbiguities");
const probeDescription = document.getElementById("probeDescription");
const candidateList = document.getElementById("candidateList");
const componentsList = document.getElementById("componentsList");
const probeAmbiguities = document.getElementById("probeAmbiguities");
const ratingTab = document.getElementById("ratingTab");
const probeTab = document.getElementById("probeTab");
const ratingView = document.getElementById("ratingView");
const probeView = document.getElementById("probeView");
const modelToggle = document.getElementById("modelToggle");

function itemKey(item) {
  return `${item.collection}::${item.title}`;
}

function getVariants(item) {
  return item.variants || [
    {
      key: "default",
      label: item.model,
      model: item.model,
      rating: item.rating,
      probe: item.probe,
    },
  ];
}

function getSelectedVariant(item) {
  const variants = getVariants(item);
  const selectedKey = selectedModels[itemKey(item)] || item.default_model || variants[0].key;
  return variants.find((variant) => variant.key === selectedKey) || variants[0];
}

function setActiveTab(tab) {
  const showRating = tab === "rating";
  ratingTab.classList.toggle("active", showRating);
  probeTab.classList.toggle("active", !showRating);
  ratingView.classList.toggle("active", showRating);
  probeView.classList.toggle("active", !showRating);
  ratingTab.setAttribute("aria-selected", String(showRating));
  probeTab.setAttribute("aria-selected", String(!showRating));
  ratingTab.tabIndex = showRating ? 0 : -1;
  probeTab.tabIndex = showRating ? -1 : 0;
  ratingView.hidden = !showRating;
  probeView.hidden = showRating;
}

function renderList() {
  videoList.innerHTML = "";
  results.forEach((item, index) => {
    const variant = getSelectedVariant(item);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `video-button${index === currentIndex ? " active" : ""}`;
    button.setAttribute("aria-current", index === currentIndex ? "true" : "false");
    const word = document.createElement("strong");
    word.textContent = item.target_word || item.title || "Untitled";
    const details = document.createElement("span");
    details.textContent = `${item.collection || "Unknown collection"} · ${variant.label || variant.model || "Unknown model"} · ${item.title || "Untitled"}`;
    button.append(word, details);
    button.addEventListener("click", () => {
      currentIndex = index;
      render();
    });
    videoList.appendChild(button);
  });
}

function renderModelToggle(item) {
  const variants = getVariants(item);
  const selectedVariant = getSelectedVariant(item);

  modelToggle.innerHTML = "";
  if (variants.length <= 1) {
    modelToggle.classList.add("single");
    modelToggle.textContent = selectedVariant.label || selectedVariant.model || "Model";
    return;
  }

  modelToggle.classList.remove("single");
  variants.forEach((variant) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `model-button${variant.key === selectedVariant.key ? " active" : ""}`;
    button.textContent = variant.label || variant.model || "Model";
    button.setAttribute("aria-pressed", String(variant.key === selectedVariant.key));
    button.addEventListener("click", () => {
      selectedModels[itemKey(item)] = variant.key;
      render();
    });
    modelToggle.appendChild(button);
  });
}

function renderRatings(variant) {
  const rating = variant.rating || {};
  ratingDescription.textContent = rating.brief_gesture_description || "";
  ratingsGrid.innerHTML = "";

  ratingLabels.forEach(([key, label, hint]) => {
    const value = rating.ratings?.[key] || {};
    const card = document.createElement("article");
    card.className = "rating-card";
    const head = document.createElement("div");
    head.className = "rating-head";
    const heading = document.createElement("h3");
    heading.append(document.createTextNode(label));
    const hintButton = document.createElement("button");
    hintButton.className = "hint-button";
    hintButton.type = "button";
    hintButton.setAttribute("aria-label", `${label} definition`);
    hintButton.setAttribute("aria-describedby", `rating-hint-${key}`);
    hintButton.append(document.createTextNode("?"));
    const tooltip = document.createElement("span");
    tooltip.id = `rating-hint-${key}`;
    tooltip.className = "hint-tooltip";
    tooltip.role = "tooltip";
    tooltip.textContent = hint;
    hintButton.appendChild(tooltip);
    heading.appendChild(hintButton);
    const score = document.createElement("div");
    score.className = "score";
    score.textContent = value.score ?? "–";
    score.setAttribute("aria-label", `Score ${value.score ?? "not available"} out of 5`);
    head.append(heading, score);
    const rationale = document.createElement("p");
    rationale.textContent = value.rationale || "No rationale available.";
    card.append(head, rationale);
    ratingsGrid.appendChild(card);
  });

  renderListItems(ratingAmbiguities, rating.coherence_check?.possible_ambiguities || []);
}

function renderProbe(variant) {
  const probe = variant.probe || {};
  probeDescription.textContent = probe.brief_gesture_description || "";

  candidateList.innerHTML = "";
  (probe.candidate_meanings || []).forEach((candidate) => {
    const card = document.createElement("article");
    card.className = "candidate";
    const header = document.createElement("div");
    header.className = "candidate-header";
    const meaning = document.createElement("strong");
    meaning.textContent = candidate.meaning || "Unspecified";
    const confidence = document.createElement("span");
    confidence.className = "confidence";
    confidence.textContent = candidate.confidence || "unknown";
    header.append(meaning, confidence);
    const evidence = document.createElement("p");
    evidence.textContent = candidate.evidence || "No evidence provided.";
    card.append(header, evidence);
    candidateList.appendChild(card);
  });

  componentsList.innerHTML = "";
  Object.entries(probe.visible_components || {}).forEach(([key, value]) => {
    const row = document.createElement("div");
    const label = key.replaceAll("_", " ");
    const term = document.createElement("dt");
    term.textContent = label;
    const description = document.createElement("dd");
    description.textContent = value;
    row.append(term, description);
    componentsList.appendChild(row);
  });

  renderListItems(probeAmbiguities, probe.ambiguities || []);
}

function renderListItems(container, items) {
  container.innerHTML = "";
  if (!items.length) {
    const item = document.createElement("li");
    item.textContent = "None reported.";
    container.appendChild(item);
    return;
  }

  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    container.appendChild(item);
  });
}

function render() {
  const item = results[currentIndex];
  if (!item) {
    targetWord.textContent = "No results available";
    fileName.textContent = "";
    confidenceBadge.textContent = "";
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
    return;
  }
  const variant = getSelectedVariant(item);

  renderList();
  renderModelToggle(item);
  if (videoPlayer.getAttribute("src") !== item.video) {
    videoPlayer.src = item.video;
  }
  fileName.textContent = item.title || "";
  targetWord.textContent = item.target_word || item.title || "Untitled";
  confidenceBadge.textContent = `${item.collection || "Unknown collection"} · ${variant.model || variant.label || "Unknown model"} · rating confidence: ${variant.rating?.coherence_check?.confidence || "unknown"}`;

  renderRatings(variant);
  renderProbe(variant);
}

ratingTab.addEventListener("click", () => setActiveTab("rating"));
probeTab.addEventListener("click", () => setActiveTab("probe"));
document.querySelector(".tabs").addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const showRating = event.key === "ArrowLeft" || event.key === "Home";
  setActiveTab(showRating ? "rating" : "probe");
  (showRating ? ratingTab : probeTab).focus();
});

setActiveTab("rating");
render();
