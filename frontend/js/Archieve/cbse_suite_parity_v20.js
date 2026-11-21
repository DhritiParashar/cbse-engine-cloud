(function () {
  function alignHeaderAndInjectTab7() {
    // 1. Remove any cross-site switcher if present
    document.querySelectorAll("div, nav, section").forEach(el => {
      if (/7-Engine Cloud Suite/i.test(el.textContent || "") && !/GOALisB Master Tutor/i.test(el.textContent || "") && el.querySelectorAll("a, button").length >= 5) {
        el.remove();
      }
    });

    // 2. Align Vx logo horizontally beside GOALisB Master Tutor title (matching 8001/8006 header)
    const brandTitle = Array.from(document.querySelectorAll("h1, div, span")).find(
      el => el.children.length === 0 && /^GOALisB Master Tutor$/i.test((el.textContent || "").trim())
    );
    if (brandTitle && brandTitle.parentElement) {
      const titleRow = brandTitle.parentElement;
      const outerBlock = titleRow.parentElement;
      if (outerBlock) {
        const vxBadge = Array.from(outerBlock.querySelectorAll("div, span")).find(
          el => el.children.length === 0 && /^√x$/i.test((el.textContent || "").trim())
        );
        if (vxBadge && vxBadge.parentElement !== titleRow) {
          vxBadge.style.display = "inline-flex";
          vxBadge.style.alignItems = "center";
          vxBadge.style.justifyContent = "center";
          vxBadge.style.marginBottom = "0";
          vxBadge.style.marginRight = "10px";
          vxBadge.style.flexShrink = "0";
          titleRow.style.display = "flex";
          titleRow.style.flexWrap = "wrap";
          titleRow.style.alignItems = "center";
          titleRow.style.gap = "8px";
          titleRow.insertBefore(vxBadge, titleRow.firstChild);
        }
      }
    }

    // 3. Ensure right-side user/plan/exit/dark buttons stay in a crisp horizontal flex row
    const darkBtn = Array.from(document.querySelectorAll("button")).find(b => /Dark Mode|Light Mode/i.test(b.textContent || ""));
    if (darkBtn && darkBtn.parentElement) {
      darkBtn.parentElement.style.display = "flex";
      darkBtn.parentElement.style.flexWrap = "wrap";
      darkBtn.parentElement.style.alignItems = "center";
      darkBtn.parentElement.style.justifyContent = "flex-end";
      darkBtn.parentElement.style.gap = "8px";
    }

    // 4. Inject dedicated "7. Board Target & Score Forecaster" tab button right after Tab 6
    const tab6Btn = Array.from(document.querySelectorAll("button")).find(
      b => /^6\.\s*/.test((b.textContent || "").trim()) && !b.dataset.cbseTab7
    );
    if (tab6Btn && tab6Btn.parentElement) {
      const bar = tab6Btn.parentElement;
      bar.style.display = "flex";
      bar.style.flexWrap = "wrap";
      bar.style.gap = "8px";
      bar.style.overflowX = "visible";

      if (!document.getElementById("cbse-nav-tab7")) {
        const tab7Btn = document.createElement("button");
        tab7Btn.id = "cbse-nav-tab7";
        tab7Btn.type = "button";
        tab7Btn.dataset.cbseTab7 = "1";
        tab7Btn.className = tab6Btn.className
          .replace(/bg-indigo-600|bg-blue-600|text-white|shadow[^\s]*/g, "")
          .trim() + " bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-indigo-400 cursor-pointer";
        tab7Btn.innerHTML = `<span class="mr-1.5">&#127919;</span>7. Board Target &amp; Score Forecaster`;
        tab7Btn.onclick = function () {
          window.activateCbseTab7(bar, tab7Btn);
        };
        bar.appendChild(tab7Btn);
      }

      // Clicking any native tab (1..6) restores main content & deactivates Tab 7 styling
      bar.querySelectorAll("button:not(#cbse-nav-tab7)").forEach(otherBtn => {
        if (!otherBtn.dataset.cbseHooked) {
          otherBtn.dataset.cbseHooked = "1";
          otherBtn.addEventListener("click", () => {
            window.deactivateCbseTab7();
          });
        }
      });
    }
  }

  const DEFAULT_CBSE_TARGETS = {
    math: 95,
    science: 94,
    sst: 92,
    english: 93,
    fifth: 95,
    internalAvg: 19
  };

  function loadCbseStore() {
    try {
      const s = JSON.parse(localStorage.getItem("cbse_t7_targets_v2") || "null");
      if (s && s.locked) return s;
    } catch (_) {}
    return {
      draft: { ...DEFAULT_CBSE_TARGETS },
      locked: { ...DEFAULT_CBSE_TARGETS },
      lockedAt: "Default 95%+ CBSE Board Goal",
      syncedMock: null,
      toast: ""
    };
  }

  window.CBSE_T7_STORE = window.CBSE_T7_STORE || loadCbseStore();

  function getCbseMockHistory() {
    try {
      const arr = JSON.parse(localStorage.getItem("cbse_mock_history_v1") || "[]");
      return Array.isArray(arr) ? arr : [];
    } catch (_) {
      return [];
    }
  }

  function persistCbseStore() {
    localStorage.setItem("cbse_t7_targets_v2", JSON.stringify({
      draft: window.CBSE_T7_STORE.draft,
      locked: window.CBSE_T7_STORE.locked,
      lockedAt: window.CBSE_T7_STORE.lockedAt,
      syncedMock: window.CBSE_T7_STORE.syncedMock
    }));
  }

  window.cbseLockTarget = function () {
    const st = window.CBSE_T7_STORE;
    st.locked = { ...st.draft };
    st.lockedAt = "Target Locked at " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    st.toast = "CBSE Board Subject Targets locked! Achievement & Stream Cutoff Matrix updated.";
    persistCbseStore();
    window.renderCbseTab7View();
  };

  window.cbseResetTarget = function () {
    const st = window.CBSE_T7_STORE;
    st.draft = { ...DEFAULT_CBSE_TARGETS };
    st.locked = { ...DEFAULT_CBSE_TARGETS };
    st.syncedMock = null;
    st.lockedAt = "Reset to 95%+ Board Benchmark";
    st.toast = "All subject sliders, locked targets, and synced mocks reset to baseline.";
    persistCbseStore();
    window.renderCbseTab7View();
  };

  window.cbseSyncLatestMock = function (serialId) {
    const hist = getCbseMockHistory();
    if (!hist.length) {
      window.CBSE_T7_STORE.toast = "No CBSE mocks logged yet — complete a 40-Mark or 80-Mark Timed Mock in Tab 6 first, then click Sync Mock.";
      window.renderCbseTab7View();
      return;
    }
    const chosen = serialId
      ? (hist.find(h => h.serialId === serialId) || hist[hist.length - 1])
      : hist[hist.length - 1];
    window.CBSE_T7_STORE.syncedMock = chosen;
    window.CBSE_T7_STORE.toast = `Synced Board Mock ${chosen.serialId} (${chosen.score}/${chosen.maxScore} • ${chosen.pct}%).`;
    persistCbseStore();
    window.renderCbseTab7View();
  };

  window.cbseUpdateSlider = function (k, v) {
    window.CBSE_T7_STORE.draft[k] = Number(v);
    window.renderCbseTab7View();
  };

  window.activateCbseTab7 = function (bar, tab7Btn) {
    bar.querySelectorAll("button").forEach(b => {
      b.style.backgroundColor = "";
      b.style.color = "";
      b.style.borderColor = "";
    });
    tab7Btn.style.backgroundColor = "#4f46e5";
    tab7Btn.style.color = "#ffffff";
    tab7Btn.style.borderColor = "#4f46e5";

    const main = document.querySelector("main") || document.body;
    Array.from(main.children).forEach(ch => {
      if (ch.id !== "cbse-tab7-workspace") {
        ch.dataset.cbseHiddenByTab7 = "1";
        ch.style.display = "none";
      }
    });

    let ws = document.getElementById("cbse-tab7-workspace");
    if (!ws) {
      ws = document.createElement("div");
      ws.id = "cbse-tab7-workspace";
      ws.className = "max-w-7xl mx-auto px-4 py-5";
      main.appendChild(ws);
    }
    ws.style.display = "block";
    window.renderCbseTab7View();
  };

  window.deactivateCbseTab7 = function () {
    const tab7Btn = document.getElementById("cbse-nav-tab7");
    if (tab7Btn) {
      tab7Btn.style.backgroundColor = "";
      tab7Btn.style.color = "";
      tab7Btn.style.borderColor = "";
    }
    const ws = document.getElementById("cbse-tab7-workspace");
    if (ws) ws.style.display = "none";
    const main = document.querySelector("main") || document.body;
    Array.from(main.children).forEach(ch => {
      if (ch.dataset.cbseHiddenByTab7 === "1") {
        ch.style.display = "";
        delete ch.dataset.cbseHiddenByTab7;
      }
    });
  };

  window.renderCbseTab7View = function () {
    const ws = document.getElementById("cbse-tab7-workspace");
    if (!ws) return;
    const st = window.CBSE_T7_STORE;
    const d = st.draft;
    const t = st.locked;
    const synced = st.syncedMock;
    const hist = getCbseMockHistory().slice().reverse();
    const unsaved = JSON.stringify(d) !== JSON.stringify(t);

    const subjects = [
      { key: "math", label: "Mathematics Standard (041)", cutoff: 85, subjMatch: /math/i, breakdown: "80 Theory (50% CBQ/MCQ + 50% SA/LA) + 20 IA" },
      { key: "science", label: "Science (086 — Phy/Chem/Bio)", cutoff: 85, subjMatch: /sci/i, breakdown: "80 Theory (39 Qs across Bio/Chem/Phy) + 20 IA" },
      { key: "sst", label: "Social Science (087 — 4 Units)", cutoff: 82, subjMatch: /soc|sst/i, breakdown: "80 Theory (History/Geo/PolSci/Econ + Map) + 20 IA" },
      { key: "english", label: "English Lang & Literature (184)", cutoff: 85, subjMatch: /eng/i, breakdown: "20 Reading + 20 Grammar/Writing + 40 Lit + 20 IA" },
      { key: "fifth", label: "5th Subject / AI (417) / Hindi", cutoff: 88, subjMatch: /ai|hin|comp/i, breakdown: "Board Theory + Practical / Internal Assessment" }
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

    const draftAgg = ((d.math + d.science + d.sst + d.english + d.fifth) / 5).toFixed(1);
    const lockedAgg = ((t.math + t.science + t.sst + t.english + t.fifth) / 5).toFixed(1);
    const mockAgg = synced ? (subjects.reduce((a, b) => a + (b.achieved || 0), 0) / subjects.length).toFixed(1) : null;
    const readySubjects = synced ? subjects.filter(s => s.achieved >= s.cutoff).length : 0;

    ws.innerHTML = `
      <div class="space-y-4">
        ${st.toast ? `
          <div class="p-3 rounded-2xl bg-indigo-950/70 border border-indigo-500/40 flex items-center justify-between text-xs text-indigo-200">
            <span>&#9989; <strong>Status:</strong> ${st.toast}</span>
            <button type="button" onclick="window.CBSE_T7_STORE.toast=''; window.renderCbseTab7View();" class="font-bold px-2">&times;</button>
          </div>
        ` : ""}

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <!-- LEFT: SUBJECT TARGET SLIDERS + SET / RESET / SYNC -->
          <div class="lg:col-span-5 bg-slate-900/95 border border-slate-800 rounded-2xl p-5 space-y-4 text-xs shadow-lg">
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div>
                <span class="px-2.5 py-0.5 rounded-full ${unsaved ? "bg-amber-500/20 text-amber-300" : "bg-indigo-500/20 text-indigo-300"} text-[10px] font-extrabold uppercase">
                  ${unsaved ? "UNSAVED DRAFT — CLICK SET TARGET" : "LOCKED BOARD GOAL ACTIVE"}
                </span>
                <h2 class="text-lg font-extrabold text-white mt-1.5">Set Desired CBSE Board Target</h2>
                <p class="text-[11px] text-slate-400 mt-0.5">Adjust subject goals (80 Theory + 20 IA = 100), click <strong>Set Target</strong> to lock, or <strong>Sync Mock</strong> from Tab 6.</p>
              </div>
              <div class="flex flex-col gap-1.5 shrink-0">
                <button type="button" onclick="window.cbseLockTarget()"
                  class="px-3.5 py-1.5 rounded-xl ${unsaved ? "bg-amber-500 text-slate-950" : "bg-indigo-600 text-white"} text-xs font-extrabold shadow cursor-pointer">
                  &#127919; Set Target
                </button>
                <button type="button" onclick="window.cbseResetTarget()"
                  class="px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold cursor-pointer">
                  &#8634; Reset Target
                </button>
                <button type="button" onclick="window.cbseSyncLatestMock()"
                  class="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold shadow cursor-pointer">
                  &#8635; Sync Mock
                </button>
              </div>
            </div>

            <div class="space-y-3 pt-2 border-t border-slate-800">
              ${subjects.map(s => `
                <div>
                  <div class="flex flex-wrap justify-between font-bold mb-1">
                    <span class="text-slate-200">${s.label}</span>
                    <span class="font-mono text-emerald-400">
                      ${d[s.key]} <span class="text-slate-400 font-normal">/ 100</span>
                      <span class="ml-1 text-[10px] text-amber-300">Stream Bar: ${s.cutoff}</span>
                      <span class="ml-1 text-[10px] text-indigo-300">&bull; Locked: ${t[s.key]}</span>
                    </span>
                  </div>
                  <input type="range" min="40" max="100" step="1" value="${d[s.key]}"
                    oninput="window.cbseUpdateSlider('${s.key}', this.value)" class="w-full accent-emerald-500 cursor-pointer">
                </div>
              `).join("")}
            </div>
          </div>

          <!-- RIGHT: KPI CARDS + ACHIEVEMENT VS DEFICIENCY MATRIX + STREAM READINESS -->
          <div class="lg:col-span-7 space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="p-4 rounded-2xl bg-slate-900/95 border border-slate-800">
                <div class="text-[10px] font-extrabold uppercase text-slate-400">${synced ? `MOCK PROJECTED (${synced.serialId})` : "DRAFT BOARD AGGREGATE"}</div>
                <div class="text-xl font-extrabold text-white mt-1">${synced ? mockAgg + "%" : draftAgg + "%"}</div>
                <div class="text-[11px] text-indigo-300 mt-0.5">Locked Target: ${lockedAgg}%</div>
              </div>
              <div class="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-700/40">
                <div class="text-[10px] font-extrabold uppercase text-emerald-300">STREAM CUTOFF READINESS</div>
                <div class="text-xl font-extrabold ${synced ? "text-emerald-400" : "text-slate-300"} mt-1">${readySubjects} / 5 Subjects</div>
                <div class="text-[11px] text-emerald-200 mt-0.5">${synced ? "Evaluated on Synced Mock" : "Awaiting Tab 6 Mock"}</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-900/95 border border-slate-800">
                <div class="text-[10px] font-extrabold uppercase text-amber-300">BOARD GRADE &amp; STREAM TIER</div>
                <div class="text-sm font-extrabold text-white mt-1">${!synced ? "Awaiting Tab 6 Mock" : Number(mockAgg) >= 90 ? "A1 Merit • PCM/Commerce Ready" : Number(mockAgg) >= 80 ? "A2 Strong Standing" : "Focus 50% CBQ & Step-Marking"}</div>
                <div class="text-[10px] text-slate-400 mt-0.5">${st.lockedAt}</div>
              </div>
            </div>

            <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-5 space-y-3 text-xs">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div class="text-xs font-extrabold uppercase tracking-wider text-amber-400">SUBJECT ACHIEVEMENT VS. DEFICIENCY MATRIX</div>
                  <div class="text-[11px] text-slate-400">${synced ? `Synced Mock: ${synced.serialId} (${synced.score}/${synced.maxScore} • ${synced.pct}%)` : "Complete a 40M/80M Mock in Tab 6 or click Sync Mock"}</div>
                </div>
                ${hist.length ? `
                  <select onchange="if(this.value) window.cbseSyncLatestMock(this.value)" class="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono font-bold text-amber-300">
                    <option value="">Switch Mock (${hist.length} Logged)...</option>
                    ${hist.map(h => `<option value="${h.serialId}" ${synced && synced.serialId === h.serialId ? "selected" : ""}>${h.serialId} (${h.pct}%)</option>`).join("")}
                  </select>
                ` : ""}
              </div>

              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                      <th class="py-2 pr-2">Subject (2026 Pattern)</th>
                      <th class="py-2 px-2">Locked</th>
                      <th class="py-2 px-2">Mock %</th>
                      <th class="py-2 px-2">Gap / Surplus</th>
                      <th class="py-2 pl-2">Completion</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-800/70">
                    ${subjects.map(s => `
                      <tr>
                        <td class="py-2.5 pr-2">
                          <div class="font-bold text-white">${s.label}</div>
                          <div class="text-[10px] text-slate-400">${s.breakdown}</div>
                        </td>
                        <td class="py-2.5 px-2 font-mono text-indigo-300">${s.target}/100</td>
                        <td class="py-2.5 px-2 font-mono font-bold text-white">${s.achieved !== null ? s.achieved + "/100" : "—"}</td>
                        <td class="py-2.5 px-2 font-bold ${s.diff === null ? "text-slate-400" : s.diff >= 0 ? "text-emerald-400" : "text-rose-400"}">
                          ${s.diff === null ? "Pending Mock" : s.diff >= 0 ? "+" + s.diff + " Surplus" : s.diff + " Deficit"}
                        </td>
                        <td class="py-2.5 pl-2">
                          <div class="flex items-center gap-2">
                            <div class="w-16 h-2 rounded-full bg-slate-800 overflow-hidden"><div class="h-full bg-emerald-500" style="width:${s.pct}%"></div></div>
                            <span class="text-[10px] font-bold text-slate-300">${s.pct}%</span>
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
      </div>
    `;
  };

  document.addEventListener("DOMContentLoaded", () => {
    alignHeaderAndInjectTab7();
    setTimeout(alignHeaderAndInjectTab7, 250);
  });
  document.addEventListener("click", () => setTimeout(alignHeaderAndInjectTab7, 100));

  // v22: Tag brand container & right controls directly so CSS aligns √x horizontally beside title
  function fixCbseHeaderDomV22() {
    const allDivs = Array.from(document.querySelectorAll("div"));
    const vxEl = allDivs.find(el => el.children.length === 0 && (el.textContent || "").trim() === "√x");
    if (vxEl && vxEl.parentElement) {
      vxEl.parentElement.classList.add("cbse-brand-row");
    }
    const darkBtn = Array.from(document.querySelectorAll("button")).find(b => /Dark Mode|Light Mode/i.test(b.textContent || ""));
    if (darkBtn && darkBtn.parentElement) {
      // If Dark Mode is on a second sub-row inside the right header column, merge it into the top control row
      const rightCol = darkBtn.parentElement.parentElement;
      if (rightCol && rightCol.children.length === 2 && /Master Scholar/i.test(rightCol.textContent || "")) {
        const topRow = rightCol.children[0];
        topRow.classList.add("cbse-right-controls");
        topRow.appendChild(darkBtn);
      } else {
        darkBtn.parentElement.classList.add("cbse-right-controls");
      }
    }
  }

  window.openCbseTab7Direct = function () {
    const t7 = document.getElementById("cbse-nav-tab7");
    const bar = t7 ? t7.parentElement : null;
    if (bar && t7) {
      window.activateCbseTab7(bar, t7);
    }
  };

  fixCbseHeaderDomV22();
  setTimeout(fixCbseHeaderDomV22, 100);
  setTimeout(fixCbseHeaderDomV22, 400);

})();
