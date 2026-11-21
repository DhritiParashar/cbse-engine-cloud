(function () {
  // Unified Tab 7 (Board Target & Score Forecaster) + Tab 6 Serialized Mock Ledger + Tab 5 Tier Banner
  const DEFAULT_TARGETS = {
    math: 95,
    science: 94,
    sst: 92,
    english: 93,
    fifth: 95
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

  function loadTargetStore() {
    const cls = getActiveClassNum();
    try {
      const saved = JSON.parse(localStorage.getItem(`cbse_t7_store_c${cls}`) || "null");
      if (saved && saved.locked) return saved;
    } catch (_) {}
    return {
      draft: { ...DEFAULT_TARGETS },
      locked: { ...DEFAULT_TARGETS },
      lockedAt: "Default 95%+ CBSE Board Goal",
      syncedRecord: null,
      toast: ""
    };
  }

  function saveTargetStore(st) {
    const cls = getActiveClassNum();
    localStorage.setItem(`cbse_t7_store_c${cls}`, JSON.stringify({
      draft: st.draft,
      locked: st.locked,
      lockedAt: st.lockedAt,
      syncedRecord: st.syncedRecord
    }));
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
    st.syncedRecord = rec;
    st.toast = `Auto-synced ${rec.serialId} (${rec.score}/${rec.maxMarks} • ${rec.percentage}%) to Board Forecaster.`;
    saveTargetStore(st);
  }

  // Hook submitMockTest so every completed exam in Tab 6 logs a Serial ID & auto-syncs to Tab 7
  if (typeof window.submitMockTest === "function" && !window.submitMockTest._v25Hooked) {
    const origSubmit = window.submitMockTest;
    window.submitMockTest = async function (e) {
      await origSubmit.apply(this, arguments);
      if (window.lastEvaluationResults) {
        const res = window.lastEvaluationResults;
        const cls = getActiveClassNum();
        const subj = (typeof currentSubject !== "undefined" ? currentSubject : "MATH") || "MATH";
        const dStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        const seq = String(getMockHistory().length + 1).padStart(2, "0");
        const serialId = `CBSE-${cls}-${subj}-${dStr}-#${seq}`;
        appendMockHistory({
          serialId,
          classLevel: cls,
          subject: subj,
          mode: res.mode,
          score: res.score,
          maxMarks: res.maxMarks,
          percentage: Number(res.percentage),
          timeString: res.timeString,
          date: new Date().toLocaleString([], { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })
        });
        window.renderCbseMockLedger();
      }
    };
    window.submitMockTest._v25Hooked = true;
  }

  window.syncCbseMockToTab7 = function (serialId) {
    const hist = getMockHistory();
    const match = serialId ? (hist.find(h => h.serialId === serialId) || hist[hist.length - 1]) : hist[hist.length - 1];
    const st = loadTargetStore();
    if (!match) {
      st.toast = "No timed mocks logged yet — complete a 20M, 40M, or 80M mock in Tab 6 first, then click Sync Mock.";
      saveTargetStore(st);
      window.renderCbseBoardForecaster();
      return;
    }
    st.syncedRecord = match;
    st.toast = `Synced Board Mock ${match.serialId} (${match.score}/${match.maxMarks} • ${match.percentage}%) against Locked Targets.`;
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
    st.toast = "CBSE Board Subject Targets locked! Achievement & Stream Cutoff Matrix updated.";
    saveTargetStore(st);
    window.renderCbseBoardForecaster();
  };

  window.resetCbseBoardTarget = function () {
    const st = loadTargetStore();
    st.draft = { ...DEFAULT_TARGETS };
    st.locked = { ...DEFAULT_TARGETS };
    st.syncedRecord = null;
    st.lockedAt = "Reset to 95%+ Board Benchmark";
    st.toast = "All subject sliders, locked targets, and synced mocks reset.";
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
    if (!confirm("Clear all test mock entries from the Official CBSE Board Mock Ledger?")) return;
    const cls = getActiveClassNum();
    localStorage.removeItem(`cbse_mock_ledger_c${cls}`);
    const st = loadTargetStore();
    st.syncedRecord = null;
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
    const hist = getMockHistory().slice().reverse();
    box.innerHTML = `
      <div class="p-5 rounded-2xl bg-surface border border-slate-800 space-y-3 text-xs shadow-lg">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 class="text-sm font-extrabold text-white">Official CBSE Board Mock Attempt Ledger (${hist.length} Logged)</h3>
            <p class="text-[11px] text-slate-400">Click <strong>Sync Tab 7 &rarr;</strong> on any Serial ID to evaluate that mock against your locked board targets.</p>
          </div>
          <div class="flex items-center gap-2">
            ${hist.length ? `<button type="button" onclick="window.clearCbseMockLedger()" class="px-3 py-1.5 rounded-xl bg-rose-950/70 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold cursor-pointer">Clear Logs</button>` : ""}
            <button type="button" onclick="switchMainTab(7)" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold cursor-pointer">
              Open Tab 7 Forecaster &rarr;
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
                  <th class="py-2 px-2">Score</th>
                  <th class="py-2 px-2">Aggregate %</th>
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
        ` : `<div class="p-3.5 rounded-xl bg-background border border-slate-800 text-slate-400">No timed mocks logged yet. Complete any mock above to generate a serialized Board Marksheet &amp; Tab 7 sync entry.</div>`}
      </div>
    `;
  };

  window.renderCbseBoardForecaster = function () {
    const ws7 = document.getElementById("workspace-7");
    if (!ws7) return;
    const cls = getActiveClassNum();
    const st = loadTargetStore();
    const d = st.draft;
    const t = st.locked;
    const synced = st.syncedRecord;
    const hist = getMockHistory().slice().reverse();
    const unsaved = JSON.stringify(d) !== JSON.stringify(t);

    const rowsMeta = cls === 10 ? [
      { key: "math", label: "Mathematics Standard (041)", cutoff: 85, subjCode: "MATH", pattern: "80 Theory (50% CBQ + 50% SA/LA) + 20 IA" },
      { key: "science", label: "Science (086 — Phy/Chem/Bio)", cutoff: 85, subjCode: "SCI", pattern: "80 Theory (39 Qs) + 20 IA" },
      { key: "sst", label: "Social Science (087 — 4 Units)", cutoff: 82, subjCode: "SST", pattern: "80 Theory + Map Work + 20 IA" },
      { key: "english", label: "English Lang & Literature (184)", cutoff: 85, subjCode: "ENG", pattern: "20 Reading + 20 Grammar + 40 Lit + 20 IA" },
      { key: "fifth", label: "5th Subject / AI (417) / Hindi", cutoff: 88, subjCode: "FIFTH", pattern: "Board Theory + Practical / Project" }
    ] : [
      { key: "math", label: `Class ${cls} Mathematics (041)`, cutoff: 85, subjCode: "MATH", pattern: "80 Theory (38 Qs: 20 MCQ + 5 SA + 6 LA + 3 CBQ) + 20 IA" },
      { key: "science", label: `Class ${cls} Physics (042)`, cutoff: 85, subjCode: "SCI", pattern: "70 Theory (33 Qs: 16 MCQ + 5 VSA + 7 SA + 2 CBQ + 3 LA) + 30 Practical" },
      { key: "sst", label: `Class ${cls} Chemistry (043)`, cutoff: 85, subjCode: "SST", pattern: "70 Theory (33 Qs) + 30 Practical" },
      { key: "english", label: `Class ${cls} Biology (044)`, cutoff: 85, subjCode: "BIO", pattern: "70 Theory (33 Qs) + 30 Practical" },
      { key: "fifth", label: `Class ${cls} English Core (301)`, cutoff: 88, subjCode: "ENG", pattern: "80 Theory + 20 Assessment of Listening & Speaking" }
    ];

    const rows = rowsMeta.map(r => {
      const target = t[r.key];
      let achieved = null;
      if (synced) {
        const subMatch = hist.find(h => h.subject === r.subjCode);
        achieved = subMatch ? Math.round(subMatch.percentage) : Math.round(synced.percentage);
      }
      const diff = achieved !== null ? achieved - target : null;
      const pct = achieved !== null ? Math.min(100, Math.round((achieved / Math.max(1, target)) * 100)) : 0;
      return { ...r, target, achieved, diff, pct };
    });

    const draftAgg = ((d.math + d.science + d.sst + d.english + d.fifth) / 5).toFixed(1);
    const lockedAgg = ((t.math + t.science + t.sst + t.english + t.fifth) / 5).toFixed(1);
    const mockAgg = synced ? (rows.reduce((acc, r) => acc + (r.achieved || 0), 0) / rows.length).toFixed(1) : null;
    const readyCount = synced ? rows.filter(r => r.achieved >= r.cutoff).length : 0;

    ws7.innerHTML = `
      <div class="p-6 rounded-2xl bg-surface border border-slate-800 shadow-lg space-y-2 shrink-0 mt-1">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="px-2.5 py-1 rounded text-xs font-bold bg-indigo-900/50 text-indigo-300 border border-indigo-800/50">
            CBSE Class ${cls} Board Aggregate &amp; Stream Readiness Engine
          </span>
          <span class="text-xs font-mono text-slate-400">2026 Prescribed Blueprint (80M Math / 70M Science)</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">Board Call, Stream Cutoff &amp; Target Forecaster</h2>
        <p class="text-xs sm:text-sm text-slate-400 max-w-3xl">Lock your subject-level board goals on the left and sync any completed Tab 6 Timed Mock to measure real surplus or mark deficiency.</p>
      </div>

      ${st.toast ? `
        <div class="p-3.5 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-between text-xs text-indigo-200">
          <span>&#9989; <strong>Status:</strong> ${st.toast}</span>
          <button type="button" onclick="const s=JSON.parse(localStorage.getItem('cbse_t7_store_c${cls}')||'{}'); s.toast=''; localStorage.setItem('cbse_t7_store_c${cls}', JSON.stringify(s)); window.renderCbseBoardForecaster();" class="font-bold px-2">&times;</button>
        </div>
      ` : ""}

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <!-- LEFT: SUBJECT TARGET SLIDERS -->
        <div class="lg:col-span-5 bg-surface border border-slate-800 rounded-2xl p-5 space-y-4 text-xs shadow-lg">
          <div class="flex flex-wrap items-start justify-between gap-2">
            <div>
              <span class="px-2.5 py-0.5 rounded-full ${unsaved ? "bg-amber-500/20 text-amber-300" : "bg-indigo-500/20 text-indigo-300"} text-[10px] font-extrabold uppercase">
                ${unsaved ? "UNSAVED DRAFT — CLICK SET TARGET" : "LOCKED TARGET ACTIVE"}
              </span>
              <h3 class="text-base font-extrabold text-white mt-1.5">Set Desired Class ${cls} Board Target</h3>
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

          <div class="space-y-3.5 pt-2 border-t border-slate-800">
            ${rows.map(r => `
              <div>
                <div class="flex flex-wrap justify-between font-bold mb-1">
                  <span class="text-slate-200">${r.label}</span>
                  <span class="font-mono text-emerald-400">
                    ${d[r.key]} <span class="text-slate-400 font-normal">/ 100</span>
                    <span class="ml-1.5 text-[10px] text-amber-300">Cutoff: ${r.cutoff}</span>
                    <span class="ml-1 text-[10px] text-indigo-300">&bull; Locked: ${t[r.key]}</span>
                  </span>
                </div>
                <input type="range" min="40" max="100" step="1" value="${d[r.key]}"
                  oninput="window.updateCbseTargetSlider('${r.key}', this.value)" class="w-full accent-emerald-500 cursor-pointer">
                <div class="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                  <span>Min: 40</span>
                  <span class="text-amber-400/90">Distinction: ${r.cutoff}</span>
                  <span>Max: 100</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- RIGHT: 3 KPI CARDS + ACHIEVEMENT VS DEFICIENCY MATRIX -->
        <div class="lg:col-span-7 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="p-4 rounded-2xl bg-surface border border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-slate-400">${synced ? `MOCK PROJECTED (${synced.serialId})` : "DRAFT BOARD AGGREGATE"}</div>
              <div class="text-xl font-extrabold text-white mt-1">${synced ? mockAgg + "%" : draftAgg + "%"}</div>
              <div class="text-[11px] text-indigo-300 mt-0.5">Locked Target: ${lockedAgg}%</div>
            </div>
            <div class="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-700/40">
              <div class="text-[10px] font-extrabold uppercase text-emerald-300">DISTINCTION CUTOFF READINESS</div>
              <div class="text-xl font-extrabold ${synced ? "text-emerald-400" : "text-slate-300"} mt-1">${readyCount} / 5 Subjects</div>
              <div class="text-[11px] text-emerald-200 mt-0.5">${synced ? "Evaluated on Synced Mock" : "Awaiting Tab 6 Mock"}</div>
            </div>
            <div class="p-4 rounded-2xl bg-surface border border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-amber-300">EXPECTED CBSE GRADE TIER</div>
              <div class="text-sm font-extrabold text-white mt-1">${!synced ? "Awaiting Tab 6 Mock" : Number(mockAgg) >= 91 ? "A1 Top-1% Merit Tier" : Number(mockAgg) >= 81 ? "A2 Strong First Division" : "Focus Step-Marking & CBQs"}</div>
              <div class="text-[10px] text-slate-400 mt-0.5">${st.lockedAt}</div>
            </div>
          </div>

          <div class="bg-surface border border-slate-800 rounded-2xl p-5 space-y-3 text-xs shadow-lg">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-amber-400">SUBJECT ACHIEVEMENT VS. DEFICIENCY MATRIX</div>
                <div class="text-[11px] text-slate-400">${synced ? `Synced Mock: ${synced.serialId} (${synced.score}/${synced.maxMarks} • ${synced.percentage}%)` : "Select a Mock Serial ID or click Sync Mock to populate Actual Achievement"}</div>
              </div>
              ${hist.length ? `
                <select onchange="if(this.value) window.syncCbseMockToTab7(this.value)" class="px-2.5 py-1.5 rounded-xl bg-background border border-slate-700 text-xs font-mono font-bold text-amber-300">
                  <option value="">Switch Synced Mock (${hist.length} Logged)...</option>
                  ${hist.map(h => `<option value="${h.serialId}" ${synced && synced.serialId === h.serialId ? "selected" : ""}>${h.serialId} (${h.percentage}%)</option>`).join("")}
                </select>
              ` : `<span class="px-2.5 py-1 rounded-lg bg-surfaceLight border border-slate-700 text-[11px] font-bold text-slate-400">0 Mocks Logged</span>`}
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                    <th class="py-2 pr-2">Subject / Blueprint</th>
                    <th class="py-2 px-2">Locked</th>
                    <th class="py-2 px-2">Achieved</th>
                    <th class="py-2 px-2">Deficiency / Surplus</th>
                    <th class="py-2 pl-2">Completion</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800/70">
                  ${rows.map(r => `
                    <tr>
                      <td class="py-2.5 pr-2">
                        <div class="font-bold text-white">${r.label}</div>
                        <div class="text-[10px] text-slate-400">${r.pattern}</div>
                      </td>
                      <td class="py-2.5 px-2 font-mono text-indigo-300 whitespace-nowrap">${r.target} / 100</td>
                      <td class="py-2.5 px-2 font-mono font-bold text-white whitespace-nowrap">${r.achieved !== null ? r.achieved + " / 100" : "&mdash;"}</td>
                      <td class="py-2.5 px-2 font-bold whitespace-nowrap ${r.diff === null ? "text-slate-400" : r.diff >= 0 ? "text-emerald-400" : "text-rose-400"}">
                        ${r.diff === null ? "Pending Mock" : r.diff >= 0 ? `+${r.diff} Surplus` : `${r.diff} Deficit`}
                      </td>
                      <td class="py-2.5 pl-2">
                        <div class="flex items-center gap-2">
                          <div class="w-16 h-2 rounded-full bg-slate-800 overflow-hidden"><div class="h-full bg-emerald-500" style="width:${r.pct}%"></div></div>
                          <span class="text-[10px] font-bold text-slate-300">${r.pct}%</span>
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
