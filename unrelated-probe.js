const probeData = window.UNRELATED_PROBE || {
  human: { response_count: 0, participant_count: 0 },
  ratings: [],
  rows: [],
};
const probeRows = probeData.rows || [];
const probeRatings = probeData.ratings || [];

const summaryGrid = document.getElementById("summaryGrid");
const analysisBody = document.getElementById("analysisBody");
const itemsBody = document.getElementById("itemsBody");
const itemCount = document.getElementById("itemCount");
const detailPanel = document.getElementById("detailPanel");

const sources = [
  ["human", "Human"],
  ["flash", "Gemini Flash"],
  ["pro", "Gemini Pro"],
  ["qwen", "Qwen"],
];

let currentIndex = 0;

function score(row, ratingKey, source) {
  return row.ratings?.[ratingKey]?.[source]?.score ?? null;
}

function average(values) {
  const valid = values.filter((value) => typeof value === "number" && Number.isFinite(value));
  if (!valid.length) return null;
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
}

function fmt(value) {
  return typeof value === "number" && Number.isFinite(value) ? value.toFixed(2) : "—";
}

function sourceMean(row, source) {
  return average(probeRatings.map((rating) => score(row, rating.key, source)));
}

function itemGap(row) {
  const gaps = [];
  probeRatings.forEach((rating) => {
    const human = score(row, rating.key, "human");
    ["flash", "pro", "qwen"].forEach((model) => {
      const modelScore = score(row, rating.key, model);
      if (typeof human === "number" && typeof modelScore === "number") {
        gaps.push(Math.abs(modelScore - human));
      }
    });
  });
  return average(gaps);
}

function overallGap() {
  return average(probeRows.map(itemGap));
}

function renderSummary() {
  const cards = [
    ["Probe videos", probeRows.length, "The current database-covered mismatched-title set"],
    ["Human ratings", probeData.human?.response_count || 0, "One latest response per participant and video"],
    ["Participants", probeData.human?.participant_count || 0, "Across the current 14-video probe"],
    ["Mean |VLM − human|", fmt(overallGap()), "Across 14 items, 7 dimensions, and 3 VLMs"],
  ];
  summaryGrid.innerHTML = cards
    .map(
      ([label, value, note]) => `
        <article>
          <strong>${label}</strong>
          <span>${value}</span>
          <small>${note}</small>
        </article>
      `,
    )
    .join("");
}

function renderAnalysis() {
  analysisBody.innerHTML = "";
  probeRatings.forEach((rating) => {
    const means = Object.fromEntries(
      sources.map(([source]) => [
        source,
        average(probeRows.map((row) => score(row, rating.key, source))),
      ]),
    );
    const gaps = ["flash", "pro", "qwen"].map((model) =>
      average(
        probeRows.map((row) => {
          const human = score(row, rating.key, "human");
          const modelScore = score(row, rating.key, model);
          return typeof human === "number" && typeof modelScore === "number"
            ? Math.abs(modelScore - human)
            : null;
        }),
      ),
    );
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${rating.label}</strong></td>
      <td><span class="score-badge human">${fmt(means.human)}</span></td>
      <td>${fmt(means.flash)}</td>
      <td>${fmt(means.pro)}</td>
      <td>${fmt(means.qwen)}</td>
      <td><strong>${fmt(average(gaps))}</strong></td>
    `;
    analysisBody.appendChild(tr);
  });
}

function renderTable() {
  itemCount.textContent = `${probeRows.length} videos`;
  itemsBody.innerHTML = "";
  probeRows.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.className = index === currentIndex ? "active" : "";
    tr.tabIndex = 0;
    tr.innerHTML = `
      <td><strong>${row.target_word}</strong><br><span class="file-meta">${row.title}</span></td>
      <td><strong>${row.original_word}</strong><br><span class="file-meta">${row.original_title}</span></td>
      <td><span class="score-badge human">${fmt(sourceMean(row, "human"))}</span><br><span class="analysis-note">n=${row.human_response_count}</span></td>
      <td>${fmt(sourceMean(row, "flash"))}</td>
      <td>${fmt(sourceMean(row, "pro"))}</td>
      <td>${fmt(sourceMean(row, "qwen"))}</td>
      <td><strong>${fmt(itemGap(row))}</strong></td>
    `;
    const selectRow = () => {
      currentIndex = index;
      renderTable();
      renderDetail();
      detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    tr.addEventListener("click", selectRow);
    tr.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectRow();
      }
    });
    itemsBody.appendChild(tr);
  });
}

function renderDetail() {
  const row = probeRows[currentIndex];
  if (!row) {
    detailPanel.innerHTML = "<p>No current probe results are available.</p>";
    return;
  }
  detailPanel.innerHTML = `
    <div class="detail-head">
      <div>
        <p class="eyebrow">Mismatched target: ${row.target_word}</p>
        <h2>${row.title}</h2>
        <p class="file-meta">Original gesture: <strong>${row.original_word}</strong> · ${row.original_title} · ${row.human_response_count} human ratings</p>
      </div>
      <span class="gap-pill">Mean |VLM − human| ${fmt(itemGap(row))}</span>
    </div>
    <div class="detail-grid">
      <div>
        <video class="detail-video" controls playsinline preload="metadata" src="${row.video}"></video>
        <section class="model-descriptions">
          <h3>VLM descriptions</h3>
          ${["flash", "pro", "qwen"]
            .map(
              (model) =>
                `<p><strong>${sources.find(([key]) => key === model)[1]}:</strong> ${row.models?.[model]?.description || "Missing"}</p>`,
            )
            .join("")}
        </section>
      </div>
      <div>
        ${probeRatings
          .map((rating) => {
            const value = row.ratings[rating.key];
            return `
              <article class="rating-card">
                <h3>${rating.label}</h3>
                <div class="human-rating">
                  <strong>Human mean ${fmt(value.human.score)}</strong>
                  <span>n=${value.human.n}</span>
                </div>
                <div class="rationale-grid three-models">
                  ${["flash", "pro", "qwen"]
                    .map(
                      (model) => `
                        <div>
                          <strong>${sources.find(([key]) => key === model)[1]} ${fmt(value[model].score)}</strong>
                          <p>${value[model].rationale || "No rationale available."}</p>
                        </div>
                      `,
                    )
                    .join("")}
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function render() {
  renderSummary();
  renderAnalysis();
  renderTable();
  renderDetail();
}

render();
