(function () {
  // 1. Remove any dynamically injected 7-Engine Cloud Suite bar & unwrap school/tab containers
  function cleanHeaderAndTabs() {
    document.querySelectorAll("div, nav, section").forEach(el => {
      if (el.children.length <= 12 && /7-Engine Cloud Suite/i.test(el.textContent || "") && el.querySelectorAll("a, button").length >= 5 && el.querySelectorAll("a, button").length <= 9) {
        if (!/GOALisB Master Tutor/i.test(el.textContent || "")) {
          el.remove();
        }
      }
    });
    // Prevent narrow vertical stacking of school name in header
    document.querySelectorAll("header div, header span").forEach(el => {
      const t = (el.textContent || "").trim();
      if (/Delhi Public School|Kendriya Vidyalaya|School/i.test(t) && t.length < 60 && el.children.length === 0) {
        el.classList.add("cbse-inline-school");
        el.style.maxWidth = "none";
      }
    });
    // Ensure tab strip wraps instead of clipping Tab 6 off-screen
    document.querySelectorAll("button").forEach(btn => {
      if (/^1\.\s*Tuition/i.test((btn.textContent || "").trim()) && btn.parentElement) {
        btn.parentElement.style.flexWrap = "wrap";
        btn.parentElement.style.overflowX = "visible";
      }
    });
  }

  // 2. CBSE Board Target & Mock Ledger State (Parity with IPM v48 & NEET)
  const DEFAULT_CBSE_TARGETS = {
    math: 95,
    science: 94,
    sst: 92,
    english: 93,
    fifth: 95
  };

  function loadCbseStore() {
    try {
      const s = JSON.parse(localStorage.getItem("cbse_t4_targets_v1") || "null");
      if (s && s.locked) return s;
    } catch (_) {}
    return {
      draft: { ...DEFAULT_CBSE_TARGETS },
      locked: { ...DEFAULT_CBSE_TARGETS },
      lockedAt: "Default 95%+ Board Goal",
      syncedMock: null,
      toast: ""
    };
  }

  window.CBSE_T4_STORE = window.CBSE_T4_STORE || loadCbseStore();

  function getCbseMockHistory() {
    try {
      const arr = JSON.parse(localStorage.getItem("cbse_mock_history_v1") || "[]");
      return Array.isArray(arr) ? arr : [];
    } catch (_) {
      return [];
    }
  }

  function saveCbseMockRecord(rec) {
    const hist = getCbseMockHistory();
    hist.push(rec);
    localStorage.setItem("cbse_mock_history_v1", JSON.stringify(hist));
    window.CBSE_T4_STORE.syncedMock = rec;
    window.CBSE_T4_STORE.toast = `Auto-synced ${rec.serialId} (${rec.score}/${rec.maxScore} • ${rec.pct}%).`;
    persistCbseStore();
  }

  function persistCbseStore() {
    localStorage.setItem("cbse_t4_targets_v1", JSON.stringify({
      draft: window.CBSE_T4_STORE.draft,
      locked: window.CBSE_T4_STORE.locked,
      lockedAt: window.CBSE_T4_STORE.lockedAt,
      syncedMock: window.CBSE_T4_STORE.syncedMock
    }));
  }

  window.cbseLockTarget = function () {
    const st = window.CBSE_T4_STORE;
    st.locked = { ...st.draft };
    st.lockedAt = "Locked " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    st.toast = "Board Subject Targets locked! Achievement vs. Deficiency Matrix updated.";
    persistCbseStore();
    renderCbseForecasterPanel();
  };

  window.cbseResetTarget = function () {
    const st = window.CBSE_T4_STORE;
    st.draft = { ...DEFAULT_CBSE_TARGETS };
    st.locked = { ...DEFAULT_CBSE_TARGETS };
    st.syncedMock = null;
    st.lockedAt = "Reset to 95%+ Board Benchmark";
    st.toast = "Targets and synced mock comparison reset.";
    persistCbseStore();
    renderCbseForecasterPanel();
  };

  window.cbseSyncLatestMock = function (serialId) {
    const hist = getCbseMockHistory();
    if (!hist.length) {
      window.CBSE_T4_STORE.toast = "No CBSE mocks logged yet — complete a timed mock in Tab 6 first, then click Sync Mock.";
      renderCbseForecasterPanel();
      return;
    }
    const chosen = serialId
      ? (hist.find(h => h.serialId === serialId) || hist[hist.length - 1])
      : hist[hist.length - 1];
    window.CBSE_T4_STORE.syncedMock = chosen;
    window.CBSE_T4_STORE.toast = `Synced Board Mock ${chosen.serialId} (${chosen.score}/${chosen.maxScore} • ${chosen.pct}%).`;
    persistCbseStore();
    renderCbseForecasterPanel();
  };

  window.cbseUpdateSlider = function (k, v) {
    window.CBSE_T4_STORE.draft[k] = Number(v);
    renderCbseForecasterPanel();
  };

  window.cbseLogQuickDiagnosticAttempt = function (subjectLabel, score, maxScore) {
    const hist = getCbseMockHistory();
    const dStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const seq = String(hist.length + 1).padStart(2, "0");
    const subCode = /sci/i.test(subjectLabel) ? "SCI" : /soc/i.test(subjectLabel) ? "SST" : "MATH";
    const pct = Math.round((Math.max(0, score) / Math.max(1, maxScore)) * 100);
    saveCbseMockRecord({
      serialId: `CBSE-10-${subCode}-${dStr}-#${seq}`,
      subject: subjectLabel,
      score,
      maxScore,
      pct,
      date: new Date().toLocaleString([], { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })
    });
  };

  function renderCbseForecasterPanel() {
    const host = document.getElementById("cbse-suite-forecaster-box");
    if (!host) return;
    const st = window.CBSE_T4_STORE;
    const d = st.draft;
    const t = st.locked;
    const synced = st.syncedMock;
    const hist = getCbseMockHistory().slice().reverse();
    const unsaved = JSON.stringify(d) !== JSON.stringify(t);

    const rows = [
      { key: "math", label: "Mathematics (041)", subjMatch: /math/i },
      { key: "science", label: "Science (086)", subjMatch: /sci/i },
      { key: "sst", label: "Social Science (087)", subjMatch: /soc|sst/i },
      { key: "english", label: "English Lang & Lit (184)", subjMatch: /eng/i },
      { key: "fifth", label: "5th Subject / AI (417)", subjMatch: /ai|hin|comp/i }
    ].map(r => {
      const target = t[r.key];
      let achieved = null;
      if (synced) {
        const subHist = hist.find(h => r.subjMatch.test(h.subject || ""));
        achieved = subHist ? subHist.pct : synced.pct;
      }
      const diff = achieved !== null ? achieved - target : null;
      const pct = achieved !== null ? Math.min(100, Math.round((achieved / Math.max(1, target)) * 100)) : 0;
      return { ...r, target, achieved, diff, pct };
    });

    const avgTarget = ((t.math + t.science + t.sst + t.english + t.fifth) / 5).toFixed(1);
    const avgMock = synced
      ? (rows.reduce((acc, r) => acc + (r.achieved || 0), 0) / rows.length).toFixed(1)
      : null;

    host.innerHTML = `
      <div class="rounded-2xl border border-indigo-500/30 bg-slate-900/95 p-5 space-y-4 text-xs shadow-lg mb-5">
        ${st.toast ? `
          <div class="p-3 rounded-xl bg-indigo-950/70 border border-indigo-500/40 flex items-center justify-between text-indigo-200">
            <span>&#9989; ${st.toast}</span>
            <button type="button" onclick="window.CBSE_T4_STORE.toast=''; renderCbseForecasterPanel();" class="font-bold px-2">&times;</button>
          </div>
        ` : ""}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <div class="lg:col-span-5 space-y-3">
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div>
                <span class="px-2.5 py-0.5 rounded-full ${unsaved ? "bg-amber-500/20 text-amber-300" : "bg-indigo-500/20 text-indigo-300"} text-[10px] font-extrabold uppercase">
                  ${unsaved ? "UNSAVED DRAFT — CLICK SET TARGET" : "LOCKED BOARD GOAL"}
                </span>
                <h3 class="text-base font-extrabold text-white mt-1">CBSE Board Target Forecaster</h3>
              </div>
              <div class="flex flex-col gap-1.5">
                <button type="button" onclick="window.cbseLockTarget()" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold cursor-pointer">&#127919; Set Target</button>
                <button type="button" onclick="window.cbseResetTarget()" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold cursor-pointer">&#8634; Reset Target</button>
                <button type="button" onclick="window.cbseSyncLatestMock()" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold cursor-pointer">&#8635; Sync Mock</button>
              </div>
            </div>
            ${rows.map(r => `
              <div>
                <div class="flex justify-between font-bold mb-1">
                  <span class="text-slate-200">${r.label}</span>
                  <span class="font-mono text-emerald-400">${d[r.key]} / 100 <span class="text-indigo-300 text-[10px]">&bull; Locked: ${t[r.key]}</span></span>
                </div>
                <input type="range" min="40" max="100" step="1" value="${d[r.key]}" oninput="window.cbseUpdateSlider('${r.key}', this.value)" class="w-full accent-emerald-500 cursor-pointer">
              </div>
            `).join("")}
          </div>

          <div class="lg:col-span-7 space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div class="text-[10px] font-extrabold uppercase text-slate-400">LOCKED BOARD AGGREGATE</div>
                <div class="text-lg font-extrabold text-white mt-0.5">${avgTarget}%</div>
                <div class="text-[10px] text-indigo-300">${st.lockedAt}</div>
              </div>
              <div class="p-3.5 rounded-xl bg-emerald-950/25 border border-emerald-700/40">
                <div class="text-[10px] font-extrabold uppercase text-emerald-300">MOCK PROJECTED %</div>
                <div class="text-lg font-extrabold text-emerald-400 mt-0.5">${avgMock !== null ? avgMock + "%" : "Pending Mock"}</div>
                <div class="text-[10px] text-emerald-200">${synced ? synced.serialId : "Run Tab 6 Mock"}</div>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div class="text-[10px] font-extrabold uppercase text-amber-300">GRADE &amp; STREAM TIER</div>
                <div class="text-xs font-extrabold text-white mt-1">${!synced ? "Awaiting Tab 6 Mock" : Number(avgMock) >= 90 ? "A1 Distinction (90%+)" : Number(avgMock) >= 80 ? "A2 Merit Tier" : "Focus Step-Marking Gaps"}</div>
              </div>
            </div>

            <div class="overflow-x-auto rounded-xl bg-slate-950 border border-slate-800 p-3">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                    <th class="py-1.5">Subject</th>
                    <th class="py-1.5">Locked Target</th>
                    <th class="py-1.5">Achieved</th>
                    <th class="py-1.5">Deficiency / Surplus</th>
                    <th class="py-1.5">Completion</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800/70">
                  ${rows.map(r => `
                    <tr>
                      <td class="py-2 font-bold text-white">${r.label}</td>
                      <td class="py-2 font-mono text-indigo-300">${r.target} / 100</td>
                      <td class="py-2 font-mono font-bold text-white">${r.achieved !== null ? r.achieved + " / 100" : "—"}</td>
                      <td class="py-2 font-bold ${r.diff === null ? "text-slate-400" : r.diff >= 0 ? "text-emerald-400" : "text-rose-400"}">
                        ${r.diff === null ? "Pending Mock" : r.diff >= 0 ? "+" + r.diff + " Surplus" : r.diff + " Deficit"}
                      </td>
                      <td class="py-2">
                        <div class="flex items-center gap-2">
                          <div class="w-16 h-2 rounded-full bg-slate-800 overflow-hidden"><div class="h-full bg-emerald-500" style="width:${r.pct}%"></div></div>
                          <span class="text-[10px] text-slate-300 font-bold">${r.pct}%</span>
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
  }

  function injectTabEnhancements() {
    cleanHeaderAndTabs();
    const main = document.querySelector("main") || document.body;
    const text = main.innerText || "";

    // Inject Board Target Forecaster at top of Tab 4 (Strategy Roadmap & Strengths)
    if (/Strategy Roadmap|Strengths/i.test(text) && !document.getElementById("cbse-suite-forecaster-box")) {
      const targetContainer = main.querySelector(".space-y-6, .space-y-4, div > div");
      if (targetContainer) {
        const box = document.createElement("div");
        box.id = "cbse-suite-forecaster-box";
        targetContainer.insertBefore(box, targetContainer.firstChild);
        renderCbseForecasterPanel();
      }
    }

    // Inject Official Board Mock Ledger in Tab 6 (Timed Mock Examination)
    if (/Timed Mock Examination/i.test(text) && !document.getElementById("cbse-suite-mock-ledger")) {
      const hist = getCbseMockHistory().slice().reverse();
      const box = document.createElement("div");
      box.id = "cbse-suite-mock-ledger";
      box.className = "mt-5 rounded-2xl border border-slate-800 bg-slate-900/95 p-5 space-y-3 text-xs";
      box.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 class="text-sm font-extrabold text-white">Official CBSE Board Mock Ledger (${hist.length} Logged)</h3>
            <p class="text-[11px] text-slate-400">Every completed 40M/80M mock generates a Serial ID that syncs directly to Tab 4 Strategy Roadmap.</p>
          </div>
        </div>
        ${hist.length ? `
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                  <th class="py-2">Serial ID</th>
                  <th class="py-2">Date</th>
                  <th class="py-2">Subject</th>
                  <th class="py-2">Score</th>
                  <th class="py-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/70">
                ${hist.map(h => `
                  <tr>
                    <td class="py-2 font-mono font-bold text-indigo-400">${h.serialId}</td>
                    <td class="py-2 text-slate-400">${h.date}</td>
                    <td class="py-2 font-bold text-white">${h.subject}</td>
                    <td class="py-2 font-bold text-emerald-400">${h.score}/${h.maxScore} (${h.pct}%)</td>
                    <td class="py-2 text-right">
                      <button type="button" onclick="window.cbseSyncLatestMock('${h.serialId}')"
                        class="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-extrabold cursor-pointer">
                        Sync Tab 4 &rarr;
                      </button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        ` : `<div class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400">Complete a Timed Mock above to generate your first serialized Board Marksheet &amp; Tab 4 sync entry.</div>`}
      `;
      const card = main.querySelector(".max-w-7xl, .max-w-6xl, main > div") || main;
      card.appendChild(box);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    cleanHeaderAndTabs();
    setTimeout(injectTabEnhancements, 200);
  });
  document.addEventListener("click", () => setTimeout(injectTabEnhancements, 120));
  window.renderCbseForecasterPanel = renderCbseForecasterPanel;
})();
