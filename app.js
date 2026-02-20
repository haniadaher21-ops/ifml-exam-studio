const TOPICS = ["Money", "Sources", "Sovereignty", "Central Banks", "IMF", "Architecture"];

const state = {
  flashIndex: 0,
  flipped: false,
  quiz: {
    active: false,
    mode: "",
    total: 0,
    index: 0,
    score: 0,
    timeLeft: 0,
    timerId: null,
    questions: []
  },
  stats: loadStats()
};

function defaultTopicStats() {
  return TOPICS.reduce((acc, topic) => {
    acc[topic] = { attempts: 0, correct: 0 };
    return acc;
  }, {});
}

function loadStats() {
  try {
    const raw = localStorage.getItem("ifml_stats_v2");
    const parsed = raw ? JSON.parse(raw) : null;
    if (!parsed) {
      return { attempts: 0, correct: 0, streak: 0, bestStreak: 0, topicStats: defaultTopicStats() };
    }
    return {
      attempts: parsed.attempts || 0,
      correct: parsed.correct || 0,
      streak: parsed.streak || 0,
      bestStreak: parsed.bestStreak || 0,
      topicStats: { ...defaultTopicStats(), ...(parsed.topicStats || {}) }
    };
  } catch {
    return { attempts: 0, correct: 0, streak: 0, bestStreak: 0, topicStats: defaultTopicStats() };
  }
}

function saveStats() {
  localStorage.setItem("ifml_stats_v2", JSON.stringify(state.stats));
  updateDashboardStats();
}

function updateDashboardStats() {
  const mastery = state.stats.attempts ? Math.round((state.stats.correct / state.stats.attempts) * 100) : 0;
  document.getElementById("masteryScore").textContent = `${mastery}%`;
  document.getElementById("masteryFill").style.width = `${mastery}%`;
  document.getElementById("streakScore").textContent = `${state.stats.streak} (best ${state.stats.bestStreak})`;
  document.getElementById("bankSize").textContent = `${QUESTION_BANK.length} questions`;
}

function getTopicAccuracy(topic) {
  const item = state.stats.topicStats[topic] || { attempts: 0, correct: 0 };
  return item.attempts === 0 ? 0 : Math.round((item.correct / item.attempts) * 100);
}

function getWeakTopics(limit = 4) {
  return TOPICS
    .map((topic) => ({ topic, accuracy: getTopicAccuracy(topic) }))
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, limit);
}

function initTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
}

function renderLearn() {
  const weak = getWeakTopics();
  const topicStats = TOPICS.map((topic) => {
    const acc = getTopicAccuracy(topic);
    const item = state.stats.topicStats[topic];
    return `<article class="metric-card"><h4>${topic}</h4><p>Accuracy: <strong>${acc}%</strong></p><p>Attempts: ${item.attempts}</p></article>`;
  }).join("");

  const modules = MODULES.map(
    (m) => `
      <article class="module">
        <h3>${m.title}</h3>
        <p>${m.summary}</p>
        <ul>${m.keyPoints.map((point) => `<li>${point}</li>`).join("")}</ul>
      </article>
    `
  ).join("");

  document.getElementById("learn").innerHTML = `
    <div class="section-title">
      <div>
        <h2>Core Curriculum</h2>
        <p class="muted">Comprehensive map from worksheet content with added exam depth.</p>
      </div>
    </div>
    <div class="weak-list">
      ${weak.map((w) => `<span class="weak-item">Weak topic: ${w.topic} (${w.accuracy}%)</span>`).join("")}
    </div>
    <div class="module-grid">${modules}</div>
    <div class="section-title" style="margin-top:14px">
      <h3>Performance Heatmap</h3>
    </div>
    <div class="analytics-grid">${topicStats}</div>
  `;
}

function renderDeepDive() {
  const deep = DEEP_DIVES.map(
    (d) => `
      <article class="deep-card">
        <span class="topic-pill">${d.topic}</span>
        <h3 style="margin-top:6px">${d.title}</h3>
        <p>${d.summary}</p>
        <h4 style="margin-top:10px">Doctrine</h4>
        <ul>${d.doctrine.map((x) => `<li>${x}</li>`).join("")}</ul>
        <h4 style="margin-top:10px">Common Pitfalls</h4>
        <ul>${d.pitfalls.map((x) => `<li>${x}</li>`).join("")}</ul>
        <h4 style="margin-top:10px">Exam Move</h4>
        <p>${d.examMove}</p>
      </article>
    `
  ).join("");

  document.getElementById("deepdive").innerHTML = `
    <div class="section-title">
      <div>
        <h2>Deep Dive Notes</h2>
        <p class="muted">Higher-granularity doctrine and issue-spotting guidance.</p>
      </div>
    </div>
    <div class="deep-grid">${deep}</div>
  `;
}

function renderFlashcard() {
  const card = FLASHCARDS[state.flashIndex];
  document.getElementById("cardFront").textContent = card.front;
  document.getElementById("cardBack").textContent = card.back;
  document.getElementById("cardCounter").textContent = `Card ${state.flashIndex + 1} of ${FLASHCARDS.length}`;
  document.getElementById("flashcard").classList.toggle("flipped", state.flipped);
}

function bindFlashcards() {
  const flip = () => {
    state.flipped = !state.flipped;
    renderFlashcard();
  };

  document.getElementById("flipCard").addEventListener("click", flip);
  document.getElementById("flashcard").addEventListener("click", flip);
  document.getElementById("flashcard").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      flip();
    }
  });

  document.getElementById("nextCard").addEventListener("click", () => {
    state.flashIndex = (state.flashIndex + 1) % FLASHCARDS.length;
    state.flipped = false;
    renderFlashcard();
  });

  document.getElementById("prevCard").addEventListener("click", () => {
    state.flashIndex = (state.flashIndex - 1 + FLASHCARDS.length) % FLASHCARDS.length;
    state.flipped = false;
    renderFlashcard();
  });

  renderFlashcard();
}

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function topicWeight(topic) {
  const acc = getTopicAccuracy(topic);
  return Math.max(1, 100 - acc + 5);
}

function weightedQuestionPool() {
  const weighted = [];
  QUESTION_BANK.forEach((q) => {
    const weight = topicWeight(q.topic);
    for (let i = 0; i < weight; i += 1) weighted.push(q);
  });
  return weighted;
}

function uniqueSample(source, count) {
  const seen = new Set();
  const chosen = [];
  let attempts = 0;
  while (chosen.length < count && attempts < source.length * 3) {
    const q = source[Math.floor(Math.random() * source.length)];
    if (!seen.has(q.id)) {
      chosen.push(q);
      seen.add(q.id);
    }
    attempts += 1;
  }
  if (chosen.length < count) {
    return chosen.concat(shuffle(QUESTION_BANK.filter((x) => !seen.has(x.id))).slice(0, count - chosen.length));
  }
  return chosen;
}

function getModeConfig(mode) {
  const configs = {
    challenge: { label: "15Q Challenge", total: 15, seconds: 0, adaptive: false },
    adaptive: { label: "Adaptive 20Q", total: 20, seconds: 0, adaptive: true },
    sprint: { label: "7-Min Sprint", total: 12, seconds: 420, adaptive: false },
    rapid: { label: "Rapid Fire", total: 8, seconds: 60, adaptive: false },
    examsim: { label: "Exam Sim", total: 25, seconds: 1800, adaptive: true }
  };
  return configs[mode];
}

function startQuiz(mode) {
  clearInterval(state.quiz.timerId);
  const cfg = getModeConfig(mode);
  const pool = cfg.adaptive ? weightedQuestionPool() : QUESTION_BANK;
  const questions = cfg.adaptive ? uniqueSample(pool, cfg.total) : shuffle(pool).slice(0, cfg.total);

  state.quiz = {
    active: true,
    mode,
    total: cfg.total,
    index: 0,
    score: 0,
    timeLeft: cfg.seconds,
    timerId: null,
    questions
  };

  if (cfg.seconds > 0) {
    state.quiz.timerId = setInterval(() => {
      state.quiz.timeLeft -= 1;
      if (state.quiz.timeLeft <= 0) {
        finishQuiz(true);
      } else {
        renderQuiz();
      }
    }, 1000);
  }

  renderQuiz();
}

function formatTime(secs) {
  const mins = Math.floor(secs / 60);
  const rem = secs % 60;
  return `${mins}:${String(rem).padStart(2, "0")}`;
}

function renderQuiz() {
  const area = document.getElementById("quizArea");
  if (!state.quiz.active) {
    area.innerHTML = '<p class="muted">Choose a mode to begin.</p>';
    return;
  }

  const cfg = getModeConfig(state.quiz.mode);
  const q = state.quiz.questions[state.quiz.index];
  if (!q) {
    finishQuiz(false);
    return;
  }

  area.innerHTML = `
    <div class="quiz-meta">
      <span>Mode: ${cfg.label}</span>
      <span>Question ${state.quiz.index + 1}/${state.quiz.total}</span>
      <span>Score: ${state.quiz.score}</span>
      ${cfg.seconds > 0 ? `<span>Time: ${formatTime(state.quiz.timeLeft)}</span>` : ""}
      <span>Difficulty: ${q.difficulty}</span>
    </div>
    <span class="q-topic">${q.topic}</span>
    <p class="q-prompt">${q.prompt}</p>
    <div id="choices">${q.choices.map((choice, i) => `<button class="choice" data-index="${i}">${choice}</button>`).join("")}</div>
    <div id="feedback"></div>
  `;

  area.querySelectorAll(".choice").forEach((btn) => {
    btn.addEventListener("click", () => submitAnswer(Number(btn.dataset.index)));
  });
}

function recordAttempt(topic, correct) {
  state.stats.attempts += 1;
  state.stats.topicStats[topic].attempts += 1;

  if (correct) {
    state.stats.correct += 1;
    state.stats.streak += 1;
    state.stats.bestStreak = Math.max(state.stats.bestStreak, state.stats.streak);
    state.stats.topicStats[topic].correct += 1;
  } else {
    state.stats.streak = 0;
  }

  saveStats();
  renderLearn();
}

function submitAnswer(choiceIndex) {
  const q = state.quiz.questions[state.quiz.index];
  const isCorrect = choiceIndex === q.answer;
  if (isCorrect) state.quiz.score += 1;

  recordAttempt(q.topic, isCorrect);

  const feedback = document.getElementById("feedback");
  feedback.className = `feedback ${isCorrect ? "ok" : "bad"}`;
  feedback.textContent = `${isCorrect ? "Correct." : "Not correct."} ${q.explanation}`;

  document.querySelectorAll(".choice").forEach((button) => {
    const idx = Number(button.dataset.index);
    button.disabled = true;
    if (idx === q.answer) button.style.borderColor = "#176a38";
    if (!isCorrect && idx === choiceIndex) button.style.borderColor = "#b64242";
  });

  const nextBtn = document.createElement("button");
  nextBtn.className = "primary-btn";
  nextBtn.style.marginTop = "12px";
  nextBtn.textContent = state.quiz.index + 1 >= state.quiz.total ? "Finish" : "Next";
  nextBtn.addEventListener("click", () => {
    state.quiz.index += 1;
    renderQuiz();
  });
  feedback.appendChild(document.createElement("br"));
  feedback.appendChild(nextBtn);

  if (state.quiz.mode === "rapid") {
    setTimeout(() => {
      if (state.quiz.active) {
        state.quiz.index += 1;
        renderQuiz();
      }
    }, 1000);
  }
}

function finishQuiz(byTimeout) {
  clearInterval(state.quiz.timerId);
  const area = document.getElementById("quizArea");
  const pct = Math.round((state.quiz.score / state.quiz.total) * 100);
  const weak = getWeakTopics(3).map((x) => `${x.topic} (${x.accuracy}%)`).join(", ");

  area.innerHTML = `
    <h3>Session Complete</h3>
    <p><strong>${state.quiz.score}/${state.quiz.total}</strong> (${pct}%)</p>
    <p class="muted">${byTimeout ? "Time expired. " : ""}Lowest areas now: ${weak || "No data yet"}.</p>
    <div class="quiz-actions" style="margin-top:10px">
      <button id="retryChallenge" class="primary-btn">Run 15Q Challenge</button>
      <button id="retryAdaptive" class="ghost-btn">Run Adaptive 20Q</button>
    </div>
  `;

  state.quiz.active = false;
  document.getElementById("retryChallenge").addEventListener("click", () => startQuiz("challenge"));
  document.getElementById("retryAdaptive").addEventListener("click", () => startQuiz("adaptive"));
}

function bindQuiz() {
  document.getElementById("startChallenge").addEventListener("click", () => startQuiz("challenge"));
  document.getElementById("startAdaptive").addEventListener("click", () => startQuiz("adaptive"));
  document.getElementById("startSprint").addEventListener("click", () => startQuiz("sprint"));
  document.getElementById("startRapid").addEventListener("click", () => startQuiz("rapid"));
  document.getElementById("startExamSim").addEventListener("click", () => startQuiz("examsim"));
  renderQuiz();
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function renderCase() {
  const c = randomFrom(CASE_LABS);
  document.getElementById("caseArea").innerHTML = `
    <article class="case-card">
      <span class="topic-pill">${c.topic}</span>
      <h3 style="margin-top:6px">${c.title}</h3>
      <p style="margin-top:10px">${c.facts}</p>
      <h4 style="margin-top:12px">Your tasks</h4>
      <ul>${c.tasks.map((t) => `<li>${t}</li>`).join("")}</ul>
      <details style="margin-top:10px">
        <summary><strong>Reveal model issue tree</strong></summary>
        <ul>${c.modelPoints.map((p) => `<li>${p}</li>`).join("")}</ul>
      </details>
    </article>
  `;
}

function bindCaseLab() {
  document.getElementById("newCase").addEventListener("click", renderCase);
  renderCase();
}

function setPrompt(type) {
  document.getElementById("activePrompt").textContent = randomFrom(EXAM_PROMPTS[type]);
}

function bindPrompts() {
  document.getElementById("newShortPrompt").addEventListener("click", () => setPrompt("short"));
  document.getElementById("newLongPrompt").addEventListener("click", () => setPrompt("long"));
  document.getElementById("newDebatePrompt").addEventListener("click", () => setPrompt("debate"));
  setPrompt("short");
}

function bindCountdown() {
  const el = document.getElementById("countdown");
  function tick() {
    const now = new Date();
    const exam = new Date(EXAM_DATE);
    const diff = exam - now;
    if (diff <= 0) {
      el.textContent = "Exam day";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    el.textContent = `${days}d ${hours}h ${mins}m`;
  }
  tick();
  setInterval(tick, 30000);
}

function init() {
  initTabs();
  renderLearn();
  renderDeepDive();
  bindFlashcards();
  bindQuiz();
  bindCaseLab();
  bindPrompts();
  bindCountdown();
  updateDashboardStats();
}

init();
