/* Social Gym - a tiny offline trainer. All state lives in localStorage. */
(function () {
  "use strict";

  var KEY = "socialgym.v1";
  var state = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { done: {}, scenarioBest: {}, quiz: null, visits: [], lastDay: null, streak: 0 };
  }
  function save() { localStorage.setItem(KEY, JSON.stringify(state)); }

  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }
  function touchVisit() {
    var t = today();
    if (state.lastDay === t) return;
    var y = new Date(); y.setDate(y.getDate() - 1);
    var ys = y.getFullYear() + "-" + (y.getMonth() + 1) + "-" + y.getDate();
    state.streak = (state.lastDay === ys) ? (state.streak || 0) + 1 : 1;
    state.lastDay = t;
    save();
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function el(id) { return document.getElementById(id); }
  function app() { return el("app"); }

  function lessonById(id) {
    for (var i = 0; i < TRACKS.length; i++)
      for (var j = 0; j < TRACKS[i].lessons.length; j++)
        if (TRACKS[i].lessons[j].id === id) return TRACKS[i].lessons[j];
    return null;
  }
  function trackOf(lessonId) {
    for (var i = 0; i < TRACKS.length; i++)
      for (var j = 0; j < TRACKS[i].lessons.length; j++)
        if (TRACKS[i].lessons[j].id === lessonId) return TRACKS[i];
    return null;
  }
  function scenarioById(id) {
    for (var i = 0; i < SCENARIOS.length; i++) if (SCENARIOS[i].id === id) return SCENARIOS[i];
    return null;
  }

  function totalLessons() {
    return TRACKS.reduce(function (n, t) { return n + t.lessons.length; }, 0);
  }
  function doneCount() { return Object.keys(state.done).length; }

  function renderStreak() {
    touchVisit();
    el("streak-count").textContent = state.streak || 0;
  }

  /* ---------- views ---------- */

  function viewHome() {
    var suggested = suggestedTrack();
    var html = "";
    html += '<section class="hero">';
    html += '<div class="kicker">Free people-skills training</div>';
    html += "<h1>Small talk is a muscle. Train it.</h1>";
    html += '<p class="lede">Five-minute lessons and practice reps for conversations, dating, negotiation and interviews. Everything is free. No sign-up, no paywall, no ads. Your progress never leaves this device.</p>';
    html += '<a class="btn dark big" href="#/track/' + suggested.id + '">Start with ' + esc(suggested.title) + "</a>";
    html += "</section>";

    html += '<div class="stat-row">';
    html += stat(state.streak || 0, "day streak");
    html += stat(doneCount() + "/" + totalLessons(), "lessons done");
    html += stat(Object.keys(state.scenarioBest).length + "/" + SCENARIOS.length, "reps tried");
    html += "</div>";

    html += "<h2>Pick a track</h2>";
    html += '<div class="grid two">';
    TRACKS.forEach(function (t) {
      var done = t.lessons.filter(function (l) { return state.done[l.id]; }).length;
      var pct = Math.round((done / t.lessons.length) * 100);
      html += '<a class="card" href="#/track/' + t.id + '">';
      html += '<div class="emoji">' + t.emoji + "</div>";
      html += "<h2>" + esc(t.title) + "</h2>";
      html += '<p class="desc">' + esc(t.blurb) + "</p>";
      html += '<div class="progress"><i style="width:' + pct + '%"></i></div>';
      html += '<div class="meta"><span>' + t.lessons.length + " lessons</span><span>" + (done === t.lessons.length ? '<span class="done-dot">Done</span>' : done + " done") + "</span></div>";
      html += "</a>";
    });
    html += "</div>";

    html += '<h2 style="margin-top:28px">Practice reps</h2>';
    html += '<p class="muted small">Real conversations, simulated. You pick what to say, then get told exactly why it lands or flops.</p>';
    html += '<div class="grid two">';
    SCENARIOS.forEach(function (s) {
      var best = state.scenarioBest[s.id];
      html += '<a class="card" href="#/scenario/' + s.id + '">';
      html += '<div class="emoji">' + s.emoji + "</div>";
      html += "<h2>" + esc(s.title) + "</h2>";
      html += '<p class="desc">' + esc(s.blurb) + "</p>";
      html += '<div class="meta"><span>' + esc(s.setting) + "</span><span>" + (best != null ? "best " + best + "%" : "not tried") + "</span></div>";
      html += "</a>";
    });
    html += "</div>";

    html += '<div style="margin-top:28px" class="block">';
    html += "<h2>Not sure where to start?</h2>";
    html += '<p class="muted">Ten honest questions, ninety seconds, and the scorecard tells you which track pays off first.</p>';
    html += '<a class="btn" href="#/scorecard">' + (state.quiz ? "Retake the scorecard" : "Take the scorecard") + "</a>";
    html += "</div>";
    app().innerHTML = html;
  }

  function stat(v, label) {
    return '<div class="stat"><b>' + v + "</b><span>" + label + "</span></div>";
  }

  function suggestedTrack() {
    if (state.quiz && state.quiz.focus) {
      var t = TRACKS.find(function (x) { return x.id === state.quiz.focus; });
      if (t) return t;
    }
    for (var i = 0; i < TRACKS.length; i++) {
      var t2 = TRACKS[i];
      var unfinished = t2.lessons.some(function (l) { return !state.done[l.id]; });
      if (unfinished) return t2;
    }
    return TRACKS[0];
  }

  function viewTrack(id) {
    var t = TRACKS.find(function (x) { return x.id === id; });
    if (!t) return viewHome();
    var html = '<a class="crumb" href="#/">&larr; All tracks</a>';
    html += "<h1>" + t.emoji + " " + esc(t.title) + "</h1>";
    html += '<p class="lede">' + esc(t.intro) + "</p>";
    t.lessons.forEach(function (l, i) {
      var done = !!state.done[l.id];
      html += '<a class="lesson-item' + (done ? " done" : "") + '" href="#/lesson/' + l.id + '">';
      html += '<span class="num">' + (done ? "&#10003;" : i + 1) + "</span>";
      html += "<span><span class=\"t\">" + esc(l.title) + "</span><br><span class=\"m\">" + l.minutes + " min read</span></span>";
      html += '<span class="go">&rarr;</span></a>';
    });
    if (t.scenario) {
      var s = scenarioById(t.scenario);
      if (s) {
        html += '<div class="callout" style="margin-top:18px"><b class="tag">Practice rep</b>';
        html += "<p style=\"margin:0 0 10px\">Ready to use this? <b>" + esc(s.title) + "</b> - " + esc(s.blurb) + "</p>";
        html += '<a class="btn" href="#/scenario/' + s.id + '">Run the rep</a></div>';
      }
    }
    app().innerHTML = html;
  }

  function viewLesson(id) {
    var l = lessonById(id);
    if (!l) return viewHome();
    var t = trackOf(id);
    var html = '<a class="crumb" href="#/track/' + t.id + '">&larr; ' + esc(t.title) + "</a>";
    html += "<h1>" + esc(l.title) + "</h1>";
    html += '<p class="lede">' + esc(l.hook) + "</p>";

    html += '<div class="block"><h2>The idea</h2><p>' + esc(l.idea) + "</p></div>";

    html += '<div class="block"><h2>Why it works</h2><ul class="tight">';
    l.why.forEach(function (w) { html += "<li>" + esc(w) + "</li>"; });
    html += "</ul></div>";

    if (l.saynot && l.saynot.length) {
      html += "<h3>Say it like this</h3><div class=\"saynot\">";
      l.saynot.forEach(function (pair) {
        html += '<div class="not"><b>Not this</b>' + esc(pair[0]) + "</div>";
        html += '<div class="say"><b>This</b>' + esc(pair[1]) + "</div>";
      });
      html += "</div>";
    }

    html += '<div class="block" style="margin-top:14px"><h2>Mistakes that kill it</h2><ul class="tight">';
    l.mistakes.forEach(function (m) { html += "<li>" + esc(m) + "</li>"; });
    html += "</ul></div>";

    if (l.nd) {
      html += '<div class="callout nd"><b class="tag">If your brain works differently</b><p style="margin:0">' + esc(l.nd) + "</p></div>";
    }

    html += '<div class="callout"><b class="tag">Today\'s rep</b><p style="margin:0">' + esc(l.drill) + "</p></div>";

    html += '<div class="block"><h2>One line to remember</h2><p style="font-size:17px;font-weight:650;margin:0">' + esc(l.takeaway) + "</p></div>";

    var done = !!state.done[id];
    html += '<button class="btn big" id="mark-done">' + (done ? "Done - tap to undo" : "Mark lesson done") + "</button>";

    var next = nextLesson(t, id);
    if (next) html += '<p style="text-align:center;margin-top:14px"><a class="crumb" href="#/lesson/' + next.id + '">Next: ' + esc(next.title) + " &rarr;</a></p>";
    else html += '<p style="text-align:center;margin-top:14px"><a class="crumb" href="#/track/' + t.id + '">Track complete - back to ' + esc(t.title) + " &rarr;</a></p>";

    app().innerHTML = html;
    el("mark-done").onclick = function () {
      if (state.done[id]) delete state.done[id]; else state.done[id] = true;
      save();
      viewLesson(id);
      window.scrollTo(0, document.body.scrollHeight);
    };
    window.scrollTo(0, 0);
  }

  function nextLesson(t, id) {
    for (var i = 0; i < t.lessons.length; i++)
      if (t.lessons[i].id === id) return t.lessons[i + 1] || null;
    return null;
  }

  /* ---------- scenarios ---------- */

  function viewScenario(id) { scenarioStart(id); }

  function scenarioStart(id) {
    var s = scenarioById(id);
    if (!s) return viewHome();
    var html = '<a class="crumb" href="#/">&larr; Home</a>';
    html += "<h1>" + s.emoji + " " + esc(s.title) + "</h1>";
    html += '<p class="lede">' + esc(s.setup) + "</p>";
    html += '<div class="block"><h2>The setting</h2><p>' + esc(s.setting) + "</p>";
    html += '<p class="muted small" style="margin:0">' + esc(s.goal) + "</p></div>";
    html += '<button class="btn big" id="begin">Start the conversation</button>';
    html += '<p class="muted small" style="margin-top:12px;text-align:center">Score: strong choices are worth 2, okay ones 1, weak ones 0.</p>';
    app().innerHTML = html;
    el("begin").onclick = function () { scenarioNode(s, s.start, [], 0, 0); };
    window.scrollTo(0, 0);
  }

  function scenarioNode(s, nodeId, history, score, max) {
    var n = s.nodes[nodeId];
    if (!n) return scenarioEnd(s, history, score, max);
    if (n.end) return scenarioEnd(s, history.concat([{ node: n, choice: null }]), score, max);

    var html = '<a class="crumb" href="#/scenario/' + s.id + '">&larr; ' + esc(s.title) + "</a>";
    html += '<div class="chat">';
    history.forEach(function (h) {
      if (h.node.them) html += '<div class="bubble them">' + esc(h.node.them) + "</div>";
      if (h.choice) html += '<div class="bubble me">' + esc(h.choice.text) + "</div>";
    });
    if (n.them) html += '<div class="bubble them">' + esc(n.them) + "</div>";
    html += "</div>";

    if (n.context) html += '<p class="muted small">' + esc(n.context) + "</p>";
    html += '<div class="quiz-q">' + esc(n.prompt) + "</div>";

    var letters = ["A", "B", "C", "D"];
    n.choices.forEach(function (c, i) {
      html += '<button class="opt" data-i="' + i + '"><b>' + letters[i] + ".</b> " + esc(c.text) + '<span class="why" hidden></span></button>';
    });
    app().innerHTML = html;

    var answered = false;
    Array.prototype.forEach.call(app().querySelectorAll(".opt"), function (btn) {
      btn.onclick = function () {
        if (answered) return;
        answered = true;
        var c = n.choices[Number(btn.getAttribute("data-i"))];
        var cls = c.score === 2 ? "correct" : (c.score === 0 ? "wrong" : "");
        if (cls) btn.classList.add(cls);
        var why = btn.querySelector(".why");
        why.hidden = false;
        why.innerHTML = '<div class="feedback ' + (c.score === 2 ? "great" : (c.score === 1 ? "good" : "")) + '"><b>' +
          (c.score === 2 ? "Strong move" : c.score === 1 ? "Okay, but" : "Weak move") + "</b>" + esc(c.why) + "</div>";
        Array.prototype.forEach.call(app().querySelectorAll(".opt"), function (b) { b.disabled = true; });
        var cont = document.createElement("button");
        cont.className = "btn big";
        cont.style.marginTop = "6px";
        cont.textContent = "Continue";
        cont.onclick = function () {
          scenarioNode(s, c.next, history.concat([{ node: n, choice: c }]), score + c.score, max + 2);
        };
        app().appendChild(cont);
        cont.scrollIntoView({ behavior: "smooth", block: "end" });
      };
    });
  }

  function scenarioEnd(s, history, score, max) {
    var pct = max ? Math.round((score / max) * 100) : 0;
    var prev = state.scenarioBest[s.id];
    if (prev == null || pct > prev) { state.scenarioBest[s.id] = pct; save(); }

    var verdict, emoji;
    if (pct >= 80) { verdict = s.resultGreat; emoji = "\u{1F525}"; }
    else if (pct >= 50) { verdict = s.resultOk; emoji = "\u{1F4AA}"; }
    else { verdict = s.resultLow; emoji = "\u{1F331}"; }

    var html = '<a class="crumb" href="#/">&larr; Home</a>';
    html += '<div class="result-emoji">' + emoji + "</div>";
    html += "<h1>" + pct + "%</h1>";
    html += '<p class="lede">' + esc(verdict) + "</p>";

    html += '<div class="block"><h2>How the conversation went</h2>';
    history.forEach(function (h) {
      if (h.node.them) html += '<div class="bubble them">' + esc(h.node.them) + "</div>";
      if (h.choice) {
        html += '<div class="bubble me">' + esc(h.choice.text) + "</div>";
        html += '<div class="feedback ' + (h.choice.score === 2 ? "great" : h.choice.score === 1 ? "good" : "") + '"><b>' +
          (h.choice.score === 2 ? "Strong move" : h.choice.score === 1 ? "Okay, but" : "Weak move") + "</b>" + esc(h.choice.why) + "</div>";
      }
    });
    html += "</div>";

    html += '<button class="btn big" id="again">Run it again</button>';
    html += '<p style="text-align:center;margin-top:14px"><a class="crumb" href="#/">Pick another rep &rarr;</a></p>';
    app().innerHTML = html;
    el("again").onclick = function () { scenarioStart(s.id); };
    window.scrollTo(0, 0);
  }

  /* ---------- scorecard ---------- */

  function viewScorecard(step, answers) {
    step = step || 0;
    answers = answers || [];
    if (step >= QUIZ.length) return scorecardResult(answers);
    var q = QUIZ[step];
    var html = '<a class="crumb" href="#/">&larr; Home</a>';
    html += '<p class="muted small">Question ' + (step + 1) + " of " + QUIZ.length + "</p>";
    html += '<div class="quiz-q">' + esc(q.q) + "</div>";
    q.opts.forEach(function (o, i) {
      html += '<button class="opt" data-i="' + i + '">' + esc(o.text) + "</button>";
    });
    app().innerHTML = html;
    Array.prototype.forEach.call(app().querySelectorAll(".opt"), function (btn) {
      btn.onclick = function () {
        answers.push(q.opts[Number(btn.getAttribute("data-i"))].tracks);
        viewScorecard(step + 1, answers);
      };
    });
    window.scrollTo(0, 0);
  }

  function scorecardResult(answers) {
    var tally = {};
    answers.forEach(function (list) {
      list.forEach(function (t) { tally[t] = (tally[t] || 0) + 1; });
    });
    var ranked = Object.keys(tally).sort(function (a, b) { return tally[b] - tally[a]; });
    var focus = ranked[0] || TRACKS[0].id;
    var second = ranked[1];
    state.quiz = { at: today(), focus: focus, second: second, tally: tally };
    save();

    var ft = TRACKS.find(function (x) { return x.id === focus; });
    var st = second ? TRACKS.find(function (x) { return x.id === second; }) : null;

    var html = '<a class="crumb" href="#/">&larr; Home</a>';
    html += '<div class="result-emoji">\u{1F3AF}</div>';
    html += "<h1>Start with " + esc(ft.title) + "</h1>";
    html += '<p class="lede">Your answers point here as the fastest win. ' + esc(ft.intro) + "</p>";
    html += '<div class="pill-row">';
    ranked.forEach(function (tid, i) {
      var t = TRACKS.find(function (x) { return x.id === tid; });
      html += '<span class="pill' + (i === 0 ? " hot" : "") + '">' + t.emoji + " " + esc(t.title) + " · " + tally[tid] + "</span>";
    });
    html += "</div>";
    if (st) html += '<p class="muted">After that, <b>' + esc(st.title) + "</b> is your next lever.</p>";
    html += '<a class="btn big" href="#/track/' + ft.id + '">Open ' + esc(ft.title) + "</a>";
    app().innerHTML = html;
    window.scrollTo(0, 0);
  }

  /* ---------- router ---------- */

  function route() {
    touchVisit();
    var h = location.hash || "#/";
    var parts = h.replace(/^#\//, "").split("/");
    if (parts[0] === "track" && parts[1]) viewTrack(parts[1]);
    else if (parts[0] === "lesson" && parts[1]) viewLesson(parts[1]);
    else if (parts[0] === "scenario" && parts[1]) viewScenario(parts[1]);
    else if (parts[0] === "scorecard") viewScorecard();
    else viewHome();
    renderStreak();
  }

  window.addEventListener("hashchange", route);
  route();

  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
