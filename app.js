const state = {
  flashIndex: 0,
  flipped: false,
  quiz: {
    active: false,
    sprint: false,
    total: 0,
    index: 0,
    score: 0,
    timeLeft: 0,
    timerId: null,
    questions: []
  },
  stats: loadStats()
};

function loadStats() {
  try {
    const raw = localStorage.getItem("ifml_stats_v1");
    return raw ? JSON.parse(raw) : { attempts: 0, correct: 0 };
  } catch {
    return { attempts: 0, correct: 0 };
  }
}

function saveStats() {
  localStorage.setItem("ifml_stats_v1", JSON.stringify(state.stats));
  updateMastery();
}

function updateMastery() {
  const pct = state.stats.attempts === 0 ? 0 : Math.round((state.stats.correct / state.stats.attempts) * 100);
  document.getElementById("masteryScore").textContent = `${pct}%`;
  document.getElementById("masteryFill").style.width = `${pct}%`;
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

function renderModules() {
  const learn = document.getElementById("learn");
  const blocks = MODULES.map(
    (m) => `
      <article class="module">
        <h3>${m.title}</h3>
        <p>${m.summary}</p>
        <ul>${m.keyPoints.map((p) => `<li>${p}</li>`).join("")}</ul>
      </article>
    `
  ).join("");

  learn.innerHTML = `
    <h2>Topic Map</h2>
    <p class="muted">Built from your worksheet so you can revise chapter-by-chapter quickly.</p>
    <div class="module-grid">${blocks}</div>
  `;
}

function renderFlashcard() {
  const card = FLASHCARDS[state.flashIndex];
  document.getElementById("cardFront").textContent = card.front;
  document.getElementById("cardBack").textContent = card.back;
  document.getElementById("cardCounter").textContent = `Card ${state.flashIndex + 1} of ${FLASHCARDS.length}`;

  const el = document.getElementById("flashcard");
  el.classList.toggle("flipped", state.flipped);
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

function shuffle(arr) {
  const list = [...arr];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function startQuiz({ sprint = false } = {}) {
  const total = sprint ? 8 : 10;
  state.quiz = {
    active: true,
    sprint,
    total,
    index: 0,
    score: 0,
    timeLeft: sprint ? 420 : 0,
    timerId: null,
    questions: shuffle(QUIZ_QUESTIONS).slice(0, total)
  };

  if (sprint) {
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
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function renderQuiz() {
  const area = document.getElementById("quizArea");
  if (!state.quiz.active) {
    area.innerHTML = '<p class="muted">Pick a mode and start practicing.</p>';
    return;
  }

  const q = state.quiz.questions[state.quiz.index];
  if (!q) {
    finishQuiz(false);
    return;
  }

  area.innerHTML = `
    <div class="quiz-meta">
      <span>Question ${state.quiz.index + 1}/${state.quiz.total}</span>
      <span>Score: ${state.quiz.score}</span>
      ${state.quiz.sprint ? `<span>Time left: ${formatTime(state.quiz.timeLeft)}</span>` : ""}
    </div>
    <span class="q-topic">${q.topic}</span>
    <p class="q-prompt">${q.prompt}</p>
    <div id="choices">${q.choices.map((c, i) => `<button class="choice" data-i="${i}">${c}</button>`).join("")}</div>
    <div id="feedback"></div>
  `;

  area.querySelectorAll(".choice").forEach((btn) => {
    btn.addEventListener("click", () => submitAnswer(Number(btn.dataset.i)));
  });
}

function submitAnswer(choiceIndex) {
  const q = state.quiz.questions[state.quiz.index];
  const correct = choiceIndex === q.answer;
  const fb = document.getElementById("feedback");

  state.stats.attempts += 1;
  if (correct) {
    state.stats.correct += 1;
    state.quiz.score += 1;
  }
  saveStats();

  fb.className = `feedback ${correct ? "ok" : "bad"}`;
  fb.textContent = correct ? `Correct. ${q.explanation}` : `Not quite. ${q.explanation}`;

  document.querySelectorAll(".choice").forEach((b) => {
    b.disabled = true;
    const idx = Number(b.dataset.i);
    if (idx === q.answer) b.style.borderColor = "#1f7a42";
    if (!correct && idx === choiceIndex) b.style.borderColor = "#b43e3e";
  });

  const next = document.createElement("button");
  next.className = "primary-btn";
  next.style.marginTop = "12px";
  next.textContent = state.quiz.index + 1 >= state.quiz.total ? "Finish" : "Next";
  next.addEventListener("click", () => {
    state.quiz.index += 1;
    renderQuiz();
  });
  fb.appendChild(document.createElement("br"));
  fb.appendChild(next);
}

function finishQuiz(byTimeout) {
  clearInterval(state.quiz.timerId);
  const area = document.getElementById("quizArea");
  const pct = Math.round((state.quiz.score / state.quiz.total) * 100);
  const label = pct >= 80 ? "Exam-ready momentum" : pct >= 60 ? "Solid, keep sharpening" : "Needs another pass";

  area.innerHTML = `
    <h3>Session Complete</h3>
    <p><strong>${state.quiz.score}/${state.quiz.total}</strong> (${pct}%)</p>
    <p class="muted">${byTimeout ? "Time expired. " : ""}${label}</p>
    <button id="retryQuiz" class="primary-btn">Run Another Challenge</button>
  `;

  state.quiz.active = false;
  document.getElementById("retryQuiz").addEventListener("click", () => startQuiz({ sprint: false }));
}

function bindQuiz() {
  document.getElementById("startQuiz").addEventListener("click", () => startQuiz({ sprint: false }));
  document.getElementById("startSprint").addEventListener("click", () => startQuiz({ sprint: true }));
  renderQuiz();
}

function bindPrompts() {
  const promptEl = document.getElementById("activePrompt");
  const setPrompt = () => {
    const random = EXAM_PROMPTS[Math.floor(Math.random() * EXAM_PROMPTS.length)];
    promptEl.textContent = random;
  };

  document.getElementById("newPrompt").addEventListener("click", setPrompt);
  setPrompt();
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
  renderModules();
  bindFlashcards();
  bindQuiz();
  bindPrompts();
  bindCountdown();
  updateMastery();
}

init();
