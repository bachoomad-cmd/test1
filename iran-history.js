(function () {
  "use strict";

  // `questions` comes from iran-history-questions.js, `eras` from iran-history-data.js
  var TRAIT_KEYS = Object.keys(eras[0].society);

  var state = {
    order: [],       // shuffled question order (indices into `questions`)
    step: 0,
    totals: {}
  };

  var els = {};

  function $(sel) { return document.querySelector(sel); }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function shuffledAnswers(q) {
    return shuffle(q.answers);
  }

  function startQuiz() {
    state.order = shuffle(questions.map(function (_, i) { return i; }));
    state.step = 0;
    state.totals = {};
    TRAIT_KEYS.forEach(function (k) { state.totals[k] = 0; });

    els.shell.classList.remove("result-mode");
    els.result.classList.remove("is-visible");
    renderQuestion();
  }

  function renderQuestion() {
    var q = questions[state.order[state.step]];
    var total = state.order.length;

    els.progressFill.style.width = ((state.step) / total * 100) + "%";
    els.progressCount.textContent = "سؤال " + (state.step + 1) + " از " + total;

    els.qTitle.textContent = q.title;
    els.answers.innerHTML = "";

    shuffledAnswers(q).forEach(function (a) {
      var btn = document.createElement("button");
      btn.className = "answer-btn";
      btn.type = "button";
      btn.textContent = a.text;
      btn.addEventListener("click", function () { selectAnswer(a); });
      els.answers.appendChild(btn);
    });
  }

  function selectAnswer(answer) {
    Object.keys(answer.score).forEach(function (k) {
      state.totals[k] = (state.totals[k] || 0) + answer.score[k];
    });

    state.step++;
    if (state.step < state.order.length) {
      renderQuestion();
    } else {
      els.progressFill.style.width = "100%";
      showResult();
    }
  }

  function cosineSimilarity(u, v, keys) {
    var dot = 0, nu = 0, nv = 0;
    keys.forEach(function (k) {
      var a = u[k] || 0, b = v[k] || 0;
      dot += a * b;
      nu += a * a;
      nv += b * b;
    });
    if (nu === 0 || nv === 0) return 0;
    return dot / (Math.sqrt(nu) * Math.sqrt(nv));
  }

  function rankEras() {
    return eras
      .map(function (era) {
        return {
          era: era,
          score: cosineSimilarity(state.totals, era.society, TRAIT_KEYS)
        };
      })
      .sort(function (a, b) { return b.score - a.score; });
  }

  function showResult() {
    var ranked = rankEras();
    var top = ranked[0];

    els.shell.classList.add("result-mode");
    els.result.classList.add("is-visible");

    els.resultName.textContent = top.era.name;
    els.resultYears.textContent = top.era.years;
    els.resultSummary.textContent = top.era.summary;

    var maxScore = ranked[0].score || 1;
    els.rankList.innerHTML = "";

    ranked.forEach(function (row, i) {
      var pct = Math.round((row.score / maxScore) * 100);
      var el = document.createElement("div");
      el.className = "rank-row" + (i === 0 ? " is-top" : "");
      el.innerHTML =
        '<div class="rank-name">' + row.era.name + "</div>" +
        '<div class="rank-bar-track"><div class="rank-bar-fill" style="width:0%"></div></div>' +
        '<div class="rank-pct">' + pct + "%</div>";
      els.rankList.appendChild(el);
      requestAnimationFrame(function () {
        el.querySelector(".rank-bar-fill").style.width = pct + "%";
      });
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.addEventListener("DOMContentLoaded", function () {
    els.shell = $(".quiz-shell");
    els.progressFill = $(".progress-fill");
    els.progressCount = $(".progress-label b");
    els.qTitle = $(".q-title");
    els.answers = $(".answers");
    els.result = $(".result");
    els.resultName = $(".result-name");
    els.resultYears = $(".result-years");
    els.resultSummary = $(".result-summary");
    els.rankList = $(".rank-list");

    $(".retry-btn").addEventListener("click", startQuiz);

    startQuiz();
  });
})();
