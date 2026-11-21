(function () {
  const CLASS_SUBJECT_SCHEMAS = {
    10: [
      { key: "MATH", label: "Mathematics Standard (041)", maxTheory: 80, cutoff: 68, pattern: "80 Theory (20 MCQ + 5 VSA + 6 SA + 4 LA + 3 CBQ)" },
      { key: "SCI",  label: "Science (086 — Phy / Chem / Bio)", maxTheory: 80, cutoff: 68, pattern: "80 Theory (39 Qs across Chem, Bio & Physics)" },
      { key: "SST",  label: "Social Science (087 — 4 Units)", maxTheory: 80, cutoff: 66, pattern: "80 Theory (History, Geography, Pol. Sci & Economics + Map)" }
    ],
    11: [
      { key: "MATH", label: "Class 11 Mathematics (041)", maxTheory: 80, cutoff: 68, pattern: "80 Theory (38 Qs: 20 MCQ + 5 VSA + 6 SA + 4 LA + 3 CBQ)" },
      { key: "SCI",  label: "Class 11 Physics (042)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: 16 MCQ + 5 VSA + 7 SA + 2 CBQ + 3 LA)" },
      { key: "SST",  label: "Class 11 Chemistry (043)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: Physical, Organic & Inorganic)" },
      { key: "BIO",  label: "Class 11 Biology (044)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: Diversity, Cell, Plant & Human Physiology)" }
    ],
    12: [
      { key: "MATH", label: "Class 12 Mathematics (041)", maxTheory: 80, cutoff: 68, pattern: "80 Theory (38 Qs: Calculus, Vectors/3D, Algebra & Probability)" },
      { key: "SCI",  label: "Class 12 Physics (042)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: Electrostatics, Magnetism, Optics & Modern)" },
      { key: "SST",  label: "Class 12 Chemistry (043)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: Physical, Electro/Kinetics, d/f-Block & Organic)" },
      { key: "BIO",  label: "Class 12 Biology (044)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: Reproduction, Genetics, Biotech & Ecology)" }
    ]
  };

  function getActiveClassNum() {
    try {
      const u = JSON.parse(localStorage.getItem("goalisb_user") || "{}");
      if (u.student_class) return Number(u.student_class);
    } catch (_) {}
    const badge = document.getElementById("studentClassBadge");
    if (badge) {
      const m = (badge.textContent || "").match(/\d+/);
      if (m) return Number(m[0]);
    }
    return 10;
  }

  function getActiveSubjectCode() {
    return (typeof currentSubject !== "undefined" && currentSubject) ? currentSubject : "MATH";
  }

  function getSchemaForClass(cls) {
    return CLASS_SUBJECT_SCHEMAS[cls] || CLASS_SUBJECT_SCHEMAS[10];
  }

  function buildDefaultTargets(cls) {
    const out = {};
    getSchemaForClass(cls).forEach(s => {
      out[s.key] = Math.round(s.maxTheory * 0.92); // e.g., 74/80 or 64/70
    });
    return out;
  }

  function loadTargetStore() {
    const cls = getActiveClassNum();
    const defaults = buildDefaultTargets(cls);
    try {
      const saved = JSON.parse(localStorage.getItem(`cbse_t7_subj_store_c${cls}`) || "null");
      if (saved && saved.locked) {
        return {
          draft: { ...defaults, ...saved.draft },
          locked: { ...defaults, ...saved.locked },
          lockedAt: saved.lockedAt || "Default 92% Distinction Target",
          selectedSerialId: saved.selectedSerialId || null,
          toast: saved.toast || ""
        };
      }
    } catch (_) {}
    return {
      draft: { ...defaults },
      locked: { ...defaults },
      lockedAt: "Default 92% Distinction Target",
      selectedSerialId: null,
      toast: ""
    };
  }

  function saveTargetStore(st) {
    const cls = getActiveClassNum();
    localStorage.setItem(`cbse_t7_subj_store_c${cls}`, JSON.stringify(st));
  }

  function getMockHistory() {
    const cls = getActiveClassNum();
    try {
      const arr = JSON.parse(localStorage.getItem(`cbse_mock_ledger_c${cls}`) || "[]");
      return Array.isArray(arr) ? arr : [];
    } catch (_) {
      return [];
    }
  }

  function appendMockHistory(rec) {
    const cls = getActiveClassNum();
    const arr = getMockHistory();
    arr.push(rec);
    localStorage.setItem(`cbse_mock_ledger_c${cls}`, JSON.stringify(arr));
    const st = loadTargetStore();
    st.selectedSerialId = rec.serialId;
    st.toast = `Logged & synced ${rec.serialId} (${rec.score}/${rec.maxMarks} • ${rec.percentage}%) for ${rec.subject}.`;
    saveTargetStore(st);
  }

  function recordLastEvaluationIfMissing() {
    if (typeof lastEvaluationResults === "undefined" || !lastEvaluationResults) return null;
    const res = lastEvaluationResults;
    if (res._loggedSerialId) {
      return getMockHistory().find(h => h.serialId === res._loggedSerialId) || null;
    }
    const cls = getActiveClassNum();
    const subj = getActiveSubjectCode();
    const dStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const seq = String(getMockHistory().length + 1).padStart(2, "0");
    const serialId = `CBSE-${cls}-${subj}-${dStr}-#${seq}`;
    res._loggedSerialId = serialId;
    const rec = {
      serialId,
      classLevel: cls,
      subject: subj,
      mode: res.mode || "quick",
      score: Number(res.score || 0),
      maxMarks: Number(res.maxMarks || 40),
      percentage: Number(res.percentage || 0),
      timeString: res.timeString || "0m 0s",
      date: new Date().toLocaleString([], { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })
    };
    appendMockHistory(rec);
    window.renderCbseMockLedger();
    return rec;
  }

  document.addEventListener("submit", function (ev) {
    if (ev.target && ev.target.id === "mockTestForm") {
      setTimeout(() => recordLastEvaluationIfMissing(), 60);
    }
  }, true);

  // Re-render Tab 7 or Tab 6 ledger whenever Subject or Class switches
  if (typeof window.switchSubject === "function" && !window.switchSubject._v29Hooked) {
    const origSubj = window.switchSubject;
    window.switchSubject = function () {
      origSubj.apply(this, arguments);
      if (typeof currentMainTab !== "undefined" && currentMainTab === 7) window.renderCbseBoardForecaster();
      if (typeof currentMainTab !== "undefined" && currentMainTab === 6) window.renderCbseMockLedger();
    };
    window.switchSubject._v29Hooked = true;
  }

  window.syncCbseMockToTab7 = function (serialId) {
    recordLastEvaluationIfMissing();
    const hist = getMockHistory();
    const match = serialId ? (hist.find(h => h.serialId === serialId) || hist[hist.length - 1]) : hist[hist.length - 1];
    const st = loadTargetStore();
    if (!match) {
      st.toast = "No timed mocks logged yet — complete a mock in Tab 6 first, then click Sync Mock.";
      saveTargetStore(st);
      window.renderCbseBoardForecaster();
      return;
    }
    st.selectedSerialId = match.serialId;
    st.toast = Number(match.score) <= 0
      ? `Synced ${match.serialId} (${match.subject}: 0/${match.maxMarks} • 0%): 0-Score Mock — complete a valid scored attempt in Tab 6.`
      : `Synced ${match.serialId} (${match.subject}: ${match.score}/${match.maxMarks} • ${match.percentage}%) into Subject Attainment Matrix.`;
    saveTargetStore(st);
    if (typeof currentMainTab !== "undefined" && currentMainTab !== 7 && typeof switchMainTab === "function") {
      switchMainTab(7);
    } else {
      window.renderCbseBoardForecaster();
    }
  };

  window.lockCbseBoardTarget = function () {
    const st = loadTargetStore();
    st.locked = { ...st.draft };
    st.lockedAt = "Locked at " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    st.toast = "Subject Theory Targets locked! Attainment & Deficiency Matrix updated.";
    saveTargetStore(st);
    window.renderCbseBoardForecaster();
  };

  window.resetCbseBoardTarget = function () {
    const cls = getActiveClassNum();
    const st = loadTargetStore();
    const hasUnsavedDraft = JSON.stringify(st.draft) !== JSON.stringify(st.locked);
    if (hasUnsavedDraft) {
      st.draft = { ...st.locked };
      st.toast = `Draft sliders reverted to your last locked target (${st.lockedAt}). Click Reset Target again to restore 92% defaults.`;
    } else {
      const defaults = buildDefaultTargets(cls);
      st.draft = { ...defaults };
      st.locked = { ...defaults };
      st.lockedAt = "Reset to 92% Distinction Benchmark";
      st.toast = "Restored default 92% subject benchmarks.";
    }
    saveTargetStore(st);
    window.renderCbseBoardForecaster();
  };

  window.updateCbseTargetSlider = function (key, val) {
    const st = loadTargetStore();
    st.draft[key] = Number(val);
    saveTargetStore(st);
    window.renderCbseBoardForecaster();
  };

  window.clearCbseMockLedger = function () {
    if (!confirm("Clear all logged mocks from the Official CBSE Board Mock Ledger?")) return;
    const cls = getActiveClassNum();
    localStorage.removeItem(`cbse_mock_ledger_c${cls}`);
    const st = loadTargetStore();
    st.selectedSerialId = null;
    st.toast = "Board Mock Ledger cleared.";
    saveTargetStore(st);
    window.renderCbseMockLedger();
    if (typeof currentMainTab !== "undefined" && currentMainTab === 7) window.renderCbseBoardForecaster();
  };

  window.renderCbseMockLedger = function () {
    const ws6 = document.getElementById("workspace-6");
    if (!ws6) return;
    let box = document.getElementById("cbse-t6-official-ledger");
    if (!box) {
      box = document.createElement("div");
      box.id = "cbse-t6-official-ledger";
      ws6.appendChild(box);
    }
    const cls = getActiveClassNum();
    const hist = getMockHistory().slice().reverse();
    box.innerHTML = `
      <div class="p-5 rounded-2xl bg-surface border border-slate-800 space-y-3 text-xs shadow-lg">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 class="text-sm font-extrabold text-white">Class ${cls} Official Board Mock Attempt Ledger (${hist.length} Logged)</h3>
            <p class="text-[11px] text-slate-400">Click <strong>Sync Tab 7 &rarr;</strong> on any Serial ID to inspect subject-wise attainment &amp; readiness.</p>
          </div>
          <div class="flex items-center gap-2">
            ${hist.length ? `<button type="button" onclick="window.clearCbseMockLedger()" class="px-3 py-1.5 rounded-xl bg-rose-950/70 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold cursor-pointer">Clear Logs</button>` : ""}
            <button type="button" onclick="switchMainTab(7)" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold cursor-pointer">
              Open Tab 7 Attainment &rarr;
            </button>
          </div>
        </div>
        ${hist.length ? `
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                  <th class="py-2 pr-2">Serial Mock ID</th>
                  <th class="py-2 px-2">Date &amp; Time</th>
                  <th class="py-2 px-2">Subject</th>
                  <th class="py-2 px-2">Raw Score</th>
                  <th class="py-2 px-2">Attained %</th>
                  <th class="py-2 pl-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/70">
                ${hist.map(h => `
                  <tr>
                    <td class="py-2.5 pr-2 font-mono font-bold text-indigo-400 whitespace-nowrap">${h.serialId}</td>
                    <td class="py-2.5 px-2 text-slate-400 whitespace-nowrap">${h.date}</td>
                    <td class="py-2.5 px-2 font-bold text-white">${h.subject}</td>
                    <td class="py-2.5 px-2 font-bold text-emerald-400 whitespace-nowrap">${h.score} / ${h.maxMarks}</td>
                    <td class="py-2.5 px-2 font-semibold text-slate-200">${h.percentage}%</td>
                    <td class="py-2.5 pl-2 text-right whitespace-nowrap">
                      <button type="button" onclick="window.syncCbseMockToTab7('${h.serialId}')"
                        class="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-extrabold shadow cursor-pointer">
                        Sync Tab 7 &rarr;
                      </button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        ` : `<div class="p-3.5 rounded-xl bg-background border border-slate-800 text-slate-400">No timed mocks logged yet for Class ${cls}. Complete any mock above to log a Serial ID &amp; sync to Tab 7.</div>`}
      </div>
    `;
  };

  function getTab4ChapterReadinessPct(subjKey) {
    try {
      const ratings = window.studentChapterRatings || JSON.parse(localStorage.getItem("cbse_self_eval") || "{}");
      const prefix = subjKey === "SCI" ? "S10_" : subjKey === "SST" ? "SS10_" : "M10_";
      const keys = Object.keys(ratings).filter(k => k.startsWith(prefix));
      if (!keys.length) return null;
      const map = { weak: 40, developing: 70, mastered: 95 };
      const sum = keys.reduce((acc, k) => acc + (map[ratings[k]] || 70), 0);
      return Math.round(sum / keys.length);
    } catch (_) {
      return null;
    }
  }

  window.renderCbseBoardForecaster = function () {
    const ws7 = document.getElementById("workspace-7");
    if (!ws7) return;
    const cls = getActiveClassNum();
    const activeSubj = getActiveSubjectCode();
    const schema = getSchemaForClass(cls);
    const st = loadTargetStore();
    const d = st.draft;
    const t = st.locked;
    const hist = getMockHistory().slice().reverse();
    const unsaved = JSON.stringify(d) !== JSON.stringify(t);

    // Evaluate each curriculum subject independently (no cross-subject bleed!)
    const rows = schema.map(s => {
      const target = t[s.key];
      const subjMocks = hist.filter(h => h.subject === s.key);
      // Prefer explicitly selected mock if it belongs to this subject, otherwise latest mock for this subject
      const chosenMock = (st.selectedSerialId && subjMocks.find(m => m.serialId === st.selectedSerialId)) || subjMocks[0] || null;
      const selfEvalPct = cls === 10 ? getTab4ChapterReadinessPct(s.key) : null;

      let attainedMarks = null;
      let attainedPct = null;
      let diff = null;
      let completionPct = 0;
      let readinessStage = "Not Attempted in Tab 6";
      let readinessBadgeClass = "bg-slate-800 text-slate-300";

      if (chosenMock) {
        attainedPct = Number(chosenMock.percentage || 0);
        attainedMarks = Math.round((attainedPct / 100) * s.maxTheory);
        diff = attainedMarks - target;
        completionPct = Math.min(100, Math.round((attainedMarks / Math.max(1, target)) * 100));

        if (Number(chosenMock.score) <= 0) {
          readinessStage = "0-Score Mock (Needs Valid Attempt)";
          readinessBadgeClass = "bg-rose-950 text-rose-300 border border-rose-800";
        } else if (attainedPct >= 90) {
          readinessStage = "Distinction Ready (A1 • 90%+)";
          readinessBadgeClass = "bg-emerald-950 text-emerald-300 border border-emerald-800";
        } else if (attainedPct >= 75) {
          readinessStage = "Board Ready (75–89%)";
          readinessBadgeClass = "bg-indigo-950 text-indigo-300 border border-indigo-800";
        } else {
          readinessStage = "Developing (<75% — Fix Weak Chapters)";
          readinessBadgeClass = "bg-amber-950 text-amber-300 border border-amber-800";
        }
      } else if (selfEvalPct !== null) {
        readinessStage = `Self-Eval Only (${selfEvalPct}% • Pending Mock)`;
        readinessBadgeClass = "bg-cyan-950/60 text-cyan-300 border border-cyan-800/60";
      }

      return {
        ...s,
        target,
        chosenMock,
        attainedMarks,
        attainedPct,
        diff,
        completionPct,
        readinessStage,
        readinessBadgeClass,
        isActiveSubject: s.key === activeSubj
      };
    });

    const activeRow = rows.find(r => r.key === activeSubj) || rows[0];
    const attemptedCount = rows.filter(r => r.chosenMock !== null).length;
    const distinctionReadyCount = rows.filter(r => r.chosenMock && r.attainedMarks >= r.cutoff).length;

    ws7.innerHTML = `
      <div class="p-6 rounded-2xl bg-surface border border-slate-800 shadow-lg space-y-2 shrink-0 mt-1">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="px-2.5 py-1 rounded text-xs font-bold bg-indigo-900/50 text-indigo-300 border border-indigo-800/50">
            Class ${cls} Curriculum Subject Attainment (${schema.length} Active Subjects)
          </span>
          <span class="text-xs font-mono text-slate-400">Active Subject Focus: <strong class="text-indigo-300">${activeRow.label}</strong></span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">Subject-Wise Attainment &amp; Readiness Forecaster</h2>
        <p class="text-xs sm:text-sm text-slate-400 max-w-3xl">Evaluates only your enrolled Class ${cls} curriculum subjects—comparing each subject's locked theory goal against actual Tab 6 Timed Mock performance and present readiness level.</p>
      </div>

      ${st.toast ? `
        <div class="p-3.5 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-between text-xs text-indigo-200">
          <span>&#9989; <strong>Status:</strong> ${st.toast}</span>
          <button type="button" onclick="const s=JSON.parse(localStorage.getItem('cbse_t7_subj_store_c${cls}')||'{}'); s.toast=''; localStorage.setItem('cbse_t7_subj_store_c${cls}', JSON.stringify(s)); window.renderCbseBoardForecaster();" class="font-bold px-2">&times;</button>
        </div>
      ` : ""}

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <!-- LEFT: CURRICULUM SUBJECT TARGET SLIDERS -->
        <div class="lg:col-span-5 bg-surface border border-slate-800 rounded-2xl p-5 space-y-4 text-xs shadow-lg">
          <div class="flex flex-wrap items-start justify-between gap-2">
            <div>
              <span class="px-2.5 py-0.5 rounded-full ${unsaved ? "bg-amber-500/20 text-amber-300" : "bg-indigo-500/20 text-indigo-300"} text-[10px] font-extrabold uppercase">
                ${unsaved ? "UNSAVED DRAFT — CLICK SET TARGET" : "LOCKED SUBJECT TARGETS"}
              </span>
              <h3 class="text-base font-extrabold text-white mt-1.5">Class ${cls} Subject Theory Goals</h3>
            </div>
            <div class="flex flex-col gap-1.5 shrink-0">
              <button type="button" onclick="window.lockCbseBoardTarget()"
                class="px-3.5 py-1.5 rounded-xl ${unsaved ? "bg-amber-500 text-slate-950" : "bg-indigo-600 text-white"} text-xs font-extrabold shadow cursor-pointer">
                &#127919; Set Target
              </button>
              <button type="button" onclick="window.resetCbseBoardTarget()"
                class="px-3.5 py-1.5 rounded-xl bg-surfaceLight text-slate-200 border border-slate-700 text-xs font-bold cursor-pointer">
                &#8634; Reset Target
              </button>
              <button type="button" onclick="window.syncCbseMockToTab7()"
                class="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold shadow cursor-pointer">
                &#8635; Sync Mock
              </button>
            </div>
          </div>

          <div class="space-y-4 pt-2 border-t border-slate-800">
            ${rows.map(r => `
              <div class="p-3 rounded-xl ${r.isActiveSubject ? "bg-indigo-950/25 border border-indigo-500/40" : "bg-surfaceLight/50 border border-slate-800"}">
                <div class="flex flex-wrap justify-between font-bold mb-1">
                  <span class="text-slate-200">${r.label} ${r.isActiveSubject ? '<span class="ml-1 text-[9px] px-1.5 py-0.5 rounded bg-indigo-600 text-white">ACTIVE</span>' : ""}</span>
                  <span class="font-mono text-emerald-400">
                    ${d[r.key]} <span class="text-slate-400 font-normal">/ ${r.maxTheory}</span>
                    <span class="ml-1.5 text-[10px] text-amber-300">Distinction: ${r.cutoff}</span>
                    <span class="ml-1 text-[10px] text-indigo-300">&bull; Locked: ${t[r.key]}</span>
                  </span>
                </div>
                <input type="range" min="30" max="${r.maxTheory}" step="1" value="${d[r.key]}"
                  oninput="window.updateCbseTargetSlider('${r.key}', this.value)" class="w-full accent-emerald-500 cursor-pointer">
                <div class="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                  <span>Pass: ${Math.round(r.maxTheory * 0.33)}</span>
                  <span class="text-amber-400/90">Distinction Bar: ${r.cutoff}/${r.maxTheory}</span>
                  <span>Max: ${r.maxTheory}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- RIGHT: SUBJECT-SPECIFIC KPI CARDS + ATTAINMENT & READINESS MATRIX -->
        <div class="lg:col-span-7 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="p-4 rounded-2xl bg-surface border border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-slate-400">${activeRow.label.split("(")[0].trim()} ATTAINMENT</div>
              <div class="text-xl font-extrabold text-white mt-1">
                ${activeRow.chosenMock ? `${activeRow.attainedMarks} / ${activeRow.maxTheory} (${activeRow.attainedPct}%)` : `Target: ${d[activeRow.key]} / ${activeRow.maxTheory}`}
              </div>
              <div class="text-[11px] text-indigo-300 mt-0.5">
                ${activeRow.chosenMock ? `Mock: ${activeRow.chosenMock.serialId} • Locked: ${activeRow.target}/${activeRow.maxTheory}` : `Locked: ${activeRow.target}/${activeRow.maxTheory} • Awaiting ${activeRow.key} Mock`}
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-700/40">
              <div class="text-[10px] font-extrabold uppercase text-emerald-300">CURRICULUM MOCK COVERAGE</div>
              <div class="text-xl font-extrabold text-emerald-400 mt-1">${attemptedCount} / ${rows.length} Attempted</div>
              <div class="text-[11px] text-emerald-200 mt-0.5">${distinctionReadyCount} / ${rows.length} at Distinction Bar</div>
            </div>

            <div class="p-4 rounded-2xl bg-surface border border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-amber-300">ACTIVE SUBJECT READINESS</div>
              <div class="text-sm font-extrabold text-white mt-1">${activeRow.readinessStage}</div>
              <div class="text-[10px] text-slate-400 mt-0.5">${st.lockedAt}</div>
            </div>
          </div>

          <div class="bg-surface border border-slate-800 rounded-2xl p-5 space-y-3 text-xs shadow-lg">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-amber-400">SUBJECT-WISE ATTAINED LEVEL, DEFICIENCY &amp; READINESS MATRIX</div>
                <div class="text-[11px] text-slate-400">Each subject evaluates strictly against its own Tab 6 mocks — no cross-subject extrapolation.</div>
              </div>
              ${hist.length ? `
                <select onchange="if(this.value) window.syncCbseMockToTab7(this.value)" class="px-2.5 py-1.5 rounded-xl bg-background border border-slate-700 text-xs font-mono font-bold text-amber-300">
                  <option value="">Select Logged Mock (${hist.length})...</option>
                  ${hist.map(h => `<option value="${h.serialId}" ${st.selectedSerialId === h.serialId ? "selected" : ""}>${h.serialId} (${h.subject} • ${h.score}/${h.maxMarks})</option>`).join("")}
                </select>
              ` : `<span class="px-2.5 py-1 rounded-lg bg-surfaceLight border border-slate-700 text-[11px] font-bold text-slate-400">0 Mocks Logged</span>`}
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                    <th class="py-2 pr-2">Subject (Class ${cls})</th>
                    <th class="py-2 px-2">Locked</th>
                    <th class="py-2 px-2">Attained</th>
                    <th class="py-2 px-2">Deficiency / Surplus</th>
                    <th class="py-2 px-2">Present Readiness Level</th>
                    <th class="py-2 pl-2">Completion</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800/70">
                  ${rows.map(r => `
                    <tr class="${r.isActiveSubject ? "bg-indigo-950/15" : ""}">
                      <td class="py-2.5 pr-2">
                        <div class="font-bold text-white">${r.label}</div>
                        <div class="text-[10px] text-slate-400">${r.chosenMock ? `Evaluated on ${r.chosenMock.serialId} (${r.chosenMock.score}/${r.chosenMock.maxMarks})` : r.pattern}</div>
                      </td>
                      <td class="py-2.5 px-2 font-mono text-indigo-300 whitespace-nowrap">${r.target} / ${r.maxTheory}</td>
                      <td class="py-2.5 px-2 font-mono font-bold text-white whitespace-nowrap">${r.attainedMarks !== null ? `${r.attainedMarks} / ${r.maxTheory} (${r.attainedPct}%)` : "&mdash;"}</td>
                      <td class="py-2.5 px-2 font-bold whitespace-nowrap ${r.diff === null ? "text-slate-400" : r.diff >= 0 ? "text-emerald-400" : "text-rose-400"}">
                        ${r.diff === null
                          ? "Awaiting Subject Mock"
                          : (r.chosenMock && Number(r.chosenMock.score) <= 0)
                            ? "0-Score Mock (Needs Valid Attempt)"
                            : r.diff >= 0
                              ? `+${r.diff} Surplus`
                              : `${r.diff} Deficit`}
                      </td>
                      <td class="py-2.5 px-2 whitespace-nowrap">
                        <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${r.readinessBadgeClass}">${r.readinessStage}</span>
                      </td>
                      <td class="py-2.5 pl-2">
                        <div class="flex items-center gap-2">
                          <div class="w-16 h-2 rounded-full bg-slate-800 overflow-hidden"><div class="h-full bg-emerald-500" style="width:${r.completionPct}%"></div></div>
                          <span class="text-[10px] font-bold text-slate-300">${r.completionPct}%</span>
                        </div>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  document.addEventListener("DOMContentLoaded", () => {
    window.renderCbseMockLedger();
    window.renderCbseBoardForecaster();
  });
})();
