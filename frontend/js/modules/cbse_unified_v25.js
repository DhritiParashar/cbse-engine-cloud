(function () {
  const CLASS_SUBJECT_SCHEMAS = {
    10: [
      { key: "MATH", label: "Mathematics Standard (041)", short: "Mathematics (041)", maxTheory: 80, cutoff: 68, pattern: "80 Theory (20 MCQ + 5 VSA + 6 SA + 4 LA + 3 CBQ)" },
      { key: "SCI",  label: "Science (086 — Phy / Chem / Bio)", short: "Science (086)", maxTheory: 80, cutoff: 68, pattern: "80 Theory (39 Qs across Chem, Bio & Physics)" },
      { key: "SST",  label: "Social Science (087 — 4 Units)", short: "Social Science (087)", maxTheory: 80, cutoff: 66, pattern: "80 Theory (History, Geography, Pol. Sci & Economics + Map)" }
    ],
    11: [
      { key: "MATH", label: "Class 11 Mathematics (041)", short: "Mathematics (041)", maxTheory: 80, cutoff: 68, pattern: "80 Theory (38 Qs: 20 MCQ + 5 VSA + 6 SA + 4 LA + 3 CBQ)" },
      { key: "SCI",  label: "Class 11 Physics (042)", short: "Physics (042)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: 16 MCQ + 5 VSA + 7 SA + 2 CBQ + 3 LA)" },
      { key: "SST",  label: "Class 11 Chemistry (043)", short: "Chemistry (043)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: Physical, Organic & Inorganic)" },
      { key: "BIO",  label: "Class 11 Biology (044)", short: "Biology (044)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: Diversity, Cell, Plant & Human Physiology)" }
    ],
    12: [
      { key: "MATH", label: "Class 12 Mathematics (041)", short: "Mathematics (041)", maxTheory: 80, cutoff: 68, pattern: "80 Theory (38 Qs: Calculus, Vectors/3D, Algebra & Probability)" },
      { key: "SCI",  label: "Class 12 Physics (042)", short: "Physics (042)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: Electrostatics, Magnetism, Optics & Modern)" },
      { key: "SST",  label: "Class 12 Chemistry (043)", short: "Chemistry (043)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: Physical, Electro/Kinetics, d/f-Block & Organic)" },
      { key: "BIO",  label: "Class 12 Biology (044)", short: "Biology (044)", maxTheory: 70, cutoff: 60, pattern: "70 Theory (33 Qs: Reproduction, Genetics, Biotech & Ecology)" }
    ]
  };

  const SUBJECT_SECTION_BLUEPRINTS = {
    80: [
      { key: "secA", label: "Section A: 20 MCQs & Assertion-Reason", max: 20, cutoff: 17, defaultTarget: 19 },
      { key: "secB", label: "Section B: 5 Very Short Answer (2M)", max: 10, cutoff: 8, defaultTarget: 9 },
      { key: "secC", label: "Section C: 6 Short Answer Proofs (3M)", max: 18, cutoff: 15, defaultTarget: 17 },
      { key: "secD", label: "Section D: 4 Long Answer Derivations (5M)", max: 20, cutoff: 17, defaultTarget: 18 },
      { key: "secE", label: "Section E: 3 Case-Based Studies (4M)", max: 12, cutoff: 10, defaultTarget: 11 }
    ],
    70: [
      { key: "secA", label: "Section A: 16 MCQs & Assertion-Reason", max: 16, cutoff: 14, defaultTarget: 15 },
      { key: "secB", label: "Section B: 5 Very Short Answer (2M)", max: 10, cutoff: 8, defaultTarget: 9 },
      { key: "secC", label: "Section C: 7 Short Answer (3M)", max: 21, cutoff: 18, defaultTarget: 19 },
      { key: "secD", label: "Section D: 2 Case-Based Passages (4M)", max: 8, cutoff: 7, defaultTarget: 7 },
      { key: "secE", label: "Section E: 3 Long Derivations (5M)", max: 15, cutoff: 13, defaultTarget: 14 }
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

  // Render in-card Subject Selector inside Tab 7 (and Tab 6) synchronized with top SUBJECT bar
  function renderInCardSubjectSelector(hostContainer, modeLabel) {
    if (!hostContainer) return;
    const cls = getActiveClassNum();
    const activeSubj = getActiveSubjectCode();
    const schema = getSchemaForClass(cls);

    let bar = document.getElementById("cbse-mock-incard-subject-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "cbse-mock-incard-subject-bar";
      const anchor = hostContainer.querySelector("h3");
      if (anchor && anchor.parentElement) {
        anchor.parentElement.insertAdjacentElement("afterend", bar);
      } else {
        hostContainer.insertBefore(bar, hostContainer.firstChild);
      }
    }

    bar.className = "p-3.5 rounded-xl bg-slate-950/70 border border-indigo-500/30 space-y-2 text-left";
    bar.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-1 text-[10px] font-extrabold uppercase tracking-wider">
        <span class="text-indigo-300">1. Select Subject for ${modeLabel} (Class ${cls})</span>
        <span class="text-slate-400">Synced with Tab 8 Forecaster</span>
      </div>
      <div class="flex flex-wrap gap-2">
        ${schema.map(s => {
          const isSel = s.key === activeSubj;
          return `
            <button type="button" onclick="if(typeof switchSubject==='function') switchSubject('${s.key}');"
              class="px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                isSel
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400"
                  : "bg-surface border border-slate-700 text-slate-300 hover:border-indigo-400 hover:text-white"
              }">
              ${s.short} <span class="ml-1 text-[10px] font-mono opacity-80">(${s.maxTheory}M)</span>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  // Ensure active exam form always has "Exit Without Submission" & "Reset Paper" controls
  function enhanceActiveMockFormControls() {
    const form = document.getElementById("mockTestForm");
    if (!form) return;

    let topBar = document.getElementById("cbse-active-exam-topbar");
    if (!topBar) {
      topBar = document.createElement("div");
      topBar.id = "cbse-active-exam-topbar";
      form.insertBefore(topBar, form.firstChild);
    }
    const cls = getActiveClassNum();
    const subj = getActiveSubjectCode();
    const sMeta = getSchemaForClass(cls).find(x => x.key === subj) || getSchemaForClass(cls)[0];

    topBar.className = "p-3.5 rounded-2xl bg-slate-900/95 border border-slate-700 flex flex-wrap items-center justify-between gap-2 text-xs shadow-md";
    topBar.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-1 rounded-lg bg-indigo-950 border border-indigo-700 text-indigo-300 font-bold">${sMeta.label}</span>
        <span class="text-slate-400 hidden sm:inline">Attempt answers below or exit cleanly without logging a score.</span>
      </div>
      <div class="flex items-center gap-2">
        <button type="button" onclick="window.resetActiveCbseExamAnswers()"
          class="px-3 py-1.5 rounded-xl bg-amber-950/70 hover:bg-amber-900 border border-amber-600/50 text-amber-200 font-bold cursor-pointer">
          &#8634; Reset Paper
        </button>
        <button type="button" onclick="window.exitCbseExamWithoutSubmission()"
          class="px-3.5 py-1.5 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-600/60 text-rose-200 font-extrabold cursor-pointer">
          &#10005; Exit Without Submission
        </button>
      </div>
    `;
  }

  window.resetActiveCbseExamAnswers = function () {
    const form = document.getElementById("mockTestForm");
    if (!form) return;
    form.querySelectorAll("textarea, input[type='text']").forEach(el => { el.value = ""; });
    form.querySelectorAll("input[type='radio'], input[type='checkbox']").forEach(el => { el.checked = false; });
    if (typeof startMockTimer === "function") startMockTimer();
  };

  window.exitCbseExamWithoutSubmission = function () {
    if (typeof mockTimerInterval !== "undefined" && mockTimerInterval) clearInterval(mockTimerInterval);
    const form = document.getElementById("mockTestForm");
    const badge = document.getElementById("mockTimerBadge");
    const resDiv = document.getElementById("mockTestResults");
    const startCard = document.getElementById("mockTestStartCard");
    if (form) form.classList.add("hidden");
    if (badge) badge.classList.add("hidden");
    if (resDiv) resDiv.classList.add("hidden");
    if (startCard) startCard.classList.remove("hidden");
  };

  // Inject "Sync to Tab 8 Forecaster ->" directly onto the evaluated Score Card
  function enhanceEvaluatedScoreCard() {
    const resDiv = document.getElementById("mockTestResults");
    if (!resDiv || resDiv.classList.contains("hidden")) return;
    const dlBtn = Array.from(resDiv.querySelectorAll("button")).find(b => /Download Marksheet/i.test(b.textContent || ""));
    const serial = window.ensureCbseSerialId();
    const h3 = resDiv.querySelector("h3");
    if (h3 && !document.getElementById("cbse-scorecard-serial-pill")) {
      const pill = document.createElement("span");
      pill.id = "cbse-scorecard-serial-pill";
      pill.className = "ml-2 px-2.5 py-0.5 rounded-lg bg-indigo-950 border border-indigo-600 text-indigo-300 font-mono text-xs align-middle";
      pill.textContent = serial;
      h3.appendChild(pill);
    }
    if (dlBtn && dlBtn.parentElement && !document.getElementById("cbse-scorecard-sync-t8-btn")) {
      const syncBtn = document.createElement("button");
      syncBtn.id = "cbse-scorecard-sync-t8-btn";
      syncBtn.type = "button";
      syncBtn.className = "flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold rounded-xl shadow-lg border border-emerald-400/40 transition cursor-pointer";
      syncBtn.innerHTML = "<span>&#128202;</span> <span>Sync to Tab 8 Forecaster &rarr;</span>";
      syncBtn.onclick = function () {
        const serial = (typeof lastEvaluationResults !== "undefined" && lastEvaluationResults && lastEvaluationResults._loggedSerialId) || null;
        window.syncCbseMockToTab8(serial);
      };
      dlBtn.parentElement.insertBefore(syncBtn, dlBtn);
    }
  }

  function mountMockEngineInto(targetWorkspaceId) {
    const ws6 = document.getElementById("workspace-6");
    const ws7 = document.getElementById("workspace-7");
    const targetWs = document.getElementById(targetWorkspaceId);
    if (!ws6 || !ws7 || !targetWs) return;

    const engineNodes = Array.from(ws6.children).concat(Array.from(ws7.children));
    engineNodes.forEach(node => {
      if (node.parentElement !== targetWs) {
        targetWs.appendChild(node);
      }
    });
  }


  // Sync Tab 6 Chapter Drill card title & Subject Practice Sprint chapter count with active subject + sidebar chapter
  window.syncTab6ActiveChapterAndSubject = function () {
    const subj = getActiveSubjectCode();
    const reg = (typeof subjectsRegistry !== "undefined" && subjectsRegistry[subj]) ? subjectsRegistry[subj] : null;
    const chapters = (reg && reg.chapters) ? reg.chapters : {};
    const chKeys = Object.keys(chapters);
    const activeKey = (typeof currentChapterKey !== "undefined" && chapters[currentChapterKey])
      ? currentChapterKey
      : ((reg && reg.defaultChapter && chapters[reg.defaultChapter]) ? reg.defaultChapter : chKeys[0]);
    const chObj = activeKey ? chapters[activeKey] : null;

    const chLabel = document.getElementById("chapterMockBtnLabel");
    if (chLabel && chObj && chObj.name) {
      chLabel.textContent = `${chObj.name} Drill`;
    }
    const chSub = document.getElementById("chapterMockSubtitle");
    if (chSub && chObj) {
      chSub.textContent = `${chObj.code || "Selected Chapter"} • 45 Mins`;
    }

    const qBtn = document.getElementById("mockModeQuickBtn");
    if (qBtn) {
      const subLine = Array.from(qBtn.querySelectorAll("span")).find(sp => /All \d+ (Units|Chapters)/i.test(sp.textContent || ""));
      if (subLine && chKeys.length) {
        subLine.textContent = `All ${chKeys.length} Chapters • 90 Mins`;
      }
    }

    const tab6Nav = document.getElementById("mainTab6");
    if (tab6Nav && !/Practice Drills/i.test(tab6Nav.textContent || "")) {
      tab6Nav.innerHTML = '<span>&#9889;</span> 6. Practice Drills (Ch &amp; Subj)';
    }
  };

  // TAB 6: Practice Drills ONLY (Chapter-Wise 20M Drill + Subject-Wise 40M/35M Sprint; NO PYQs, NO 80M Board Mock)
  window.openCbseChapterPracticeTab = function () {
    mountMockEngineInto("workspace-6");
    const cls = getActiveClassNum();
    const subj = getActiveSubjectCode();
    const sMeta = getSchemaForClass(cls).find(x => x.key === subj) || getSchemaForClass(cls)[0];
    const ws6 = document.getElementById("workspace-6");
    if (ws6) {
      const h2 = ws6.querySelector("h2");
      const badge = ws6.querySelector("span.rounded");
      const modeTag = document.getElementById("tab6ChapterTag");
      if (badge) badge.textContent = `${sMeta.label} • Practice Drills`;
      if (h2) h2.textContent = "Practice Drills: Chapter-Wise & Subject-Wise Sprints";
      if (modeTag) modeTag.textContent = "Practice Mode: Chapter (20M) & Subject Sprint (40M)";
    }

    renderInCardSubjectSelector(document.getElementById("mockTestStartCard"), "Practice Drill");

    if (typeof setExamSource === "function") setExamSource("blueprint");
    if (typeof setMockMode === "function") setMockMode("chapter");

    const bpBtn = document.getElementById("sourceBlueprintBtn");
    const pyqBox = document.getElementById("pastPaperContainer");
    if (bpBtn && bpBtn.parentElement) bpBtn.parentElement.style.display = "none";
    if (pyqBox) pyqBox.style.display = "none";

    const chBtn = document.getElementById("mockModeChapterBtn");
    const qBtn = document.getElementById("mockModeQuickBtn");
    const fBtn = document.getElementById("mockModeFull80Btn");
    if (chBtn) {
      chBtn.style.display = "";
      chBtn.parentElement.className = "grid grid-cols-1 md:grid-cols-2 gap-3 text-left";
    }
    if (qBtn) {
      qBtn.style.display = "";
      const titleEl = qBtn.querySelector(".font-bold");
      if (titleEl) titleEl.textContent = `${sMeta.short} Subject Practice Sprint`;
    }
    if (fBtn) fBtn.style.display = "none";

    window.syncTab6ActiveChapterAndSubject();
    window.renderCbseMockLedger("practice");
  };

  // TAB 7: Comprehensive Full-Subject Board Mock (80M/70M) + Official Past Board Papers (2019–2026 PYQs ONLY)
  window.openCbseSubjectMockTab = function () {
    mountMockEngineInto("workspace-7");
    const cls = getActiveClassNum();
    const subj = getActiveSubjectCode();
    const sMeta = getSchemaForClass(cls).find(x => x.key === subj) || getSchemaForClass(cls)[0];
    const ws7 = document.getElementById("workspace-7");
    if (ws7) {
      const h2 = ws7.querySelector("h2");
      const badge = ws7.querySelector("span.rounded");
      const modeTag = document.getElementById("tab6ChapterTag");
      if (badge) badge.textContent = `${sMeta.label} • Official Board Simulation`;
      if (h2) h2.textContent = `${sMeta.label} — Comprehensive Board Mock & PYQs`;
      if (modeTag) modeTag.textContent = `Board Simulation (${sMeta.maxTheory}M) + 2019–2026 PYQs`;
    }

    renderInCardSubjectSelector(document.getElementById("mockTestStartCard"), "Board Mock & PYQs");

    if (typeof setExamSource === "function") setExamSource("blueprint");
    if (typeof setMockMode === "function") setMockMode("full_80");

    const bpBtn = document.getElementById("sourceBlueprintBtn");
    const pyqBtn = document.getElementById("sourcePyqBtn");
    const pyqBox = document.getElementById("pastPaperContainer");
    if (bpBtn && bpBtn.parentElement) bpBtn.parentElement.style.display = "";
    if (pyqBtn) pyqBtn.style.display = "";
    if (pyqBox) pyqBox.style.display = "";

    const chBtn = document.getElementById("mockModeChapterBtn");
    const qBtn = document.getElementById("mockModeQuickBtn");
    const fBtn = document.getElementById("mockModeFull80Btn");
    if (chBtn) chBtn.style.display = "none";
    if (qBtn) qBtn.style.display = "none";
    if (fBtn) {
      fBtn.style.display = "";
      fBtn.parentElement.className = "grid grid-cols-1 gap-3 text-left max-w-lg mx-auto";
      const fTitle = fBtn.querySelector(".font-bold");
      const fBadge = fBtn.querySelector(".font-mono");
      if (fTitle) fTitle.textContent = `${sMeta.short} Comprehensive Board Mock`;
      if (fBadge) fBadge.textContent = `${sMeta.maxTheory} Marks`;
    }

    window.renderCbseMockLedger("subject");
  };

  function buildDefaultSectionTargets(maxTheory) {
    const bp = SUBJECT_SECTION_BLUEPRINTS[maxTheory] || SUBJECT_SECTION_BLUEPRINTS[80];
    const out = {};
    bp.forEach(s => { out[s.key] = s.defaultTarget; });
    return out;
  }

  function loadSubjectSectionStore(cls, subjKey, maxTheory) {
    const defaults = buildDefaultSectionTargets(maxTheory);
    const storageKey = `cbse_t8_sec_c${cls}_${subjKey}`;
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
      if (saved && saved.locked) {
        return {
          draft: { ...defaults, ...saved.draft },
          locked: { ...defaults, ...saved.locked },
          lockedAt: saved.lockedAt || "Default 92% Subject Goal",
          selectedSerialId: saved.selectedSerialId || null,
          toast: saved.toast || ""
        };
      }
    } catch (_) {}
    return {
      draft: { ...defaults },
      locked: { ...defaults },
      lockedAt: "Default 92% Subject Goal",
      selectedSerialId: null,
      toast: ""
    };
  }

  function saveSubjectSectionStore(cls, subjKey, st) {
    localStorage.setItem(`cbse_t8_sec_c${cls}_${subjKey}`, JSON.stringify(st));
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
    if (!rec.isPractice) {
      const schema = getSchemaForClass(cls);
      const sMeta = schema.find(x => x.key === rec.subject) || schema[0];
      const st = loadSubjectSectionStore(cls, rec.subject, sMeta.maxTheory);
      st.selectedSerialId = rec.serialId;
      st.toast = `Logged & synced ${rec.serialId} (${rec.subject}: ${rec.score}/${rec.maxMarks} • ${rec.percentage}%) into ${sMeta.label} Forecaster.`;
      saveSubjectSectionStore(cls, rec.subject, st);
    }
  }

  function computeSectionBreakdownFromEval(res) {
    const out = { secA: null, secB: null, secC: null, secD: null, secE: null };
    if (!res || !Array.isArray(res.breakdown)) return out;
    const totals = { secA: [0, 0], secB: [0, 0], secC: [0, 0], secD: [0, 0], secE: [0, 0] };
    res.breakdown.forEach(item => {
      const secStr = String(item.section || "");
      let k = "secA";
      if (/Section B/i.test(secStr)) k = "secB";
      else if (/Section C/i.test(secStr)) k = "secC";
      else if (/Section D/i.test(secStr)) k = "secD";
      else if (/Section E/i.test(secStr)) k = "secE";
      totals[k][0] += Number(item.earned || 0);
      totals[k][1] += Number(item.totalMarks || 0);
    });
    Object.keys(totals).forEach(k => {
      if (totals[k][1] > 0) out[k] = totals[k][0] / totals[k][1];
    });
    return out;
  }


  window.ensureCbseSerialId = function () {
    const rec = recordLastEvaluationIfMissing();
    if (rec && rec.serialId) return rec.serialId;
    const cls = getActiveClassNum();
    const subj = getActiveSubjectCode();
    const dStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const seq = String(getMockHistory().length + 1).padStart(2, "0");
    const isPractice = (typeof currentMainTab !== "undefined" && currentMainTab === 6);
    return `${isPractice ? "PRAC" : "CBSE"}-${cls}-${subj}-${dStr}-#${seq}`;
  };

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
    const isPractice = (typeof currentMainTab !== "undefined" && currentMainTab === 6) || res.mode === "chapter" || res.mode === "quick";
    const serialId = `${isPractice ? "PRAC" : "CBSE"}-${cls}-${subj}-${dStr}-#${seq}`;
    res._loggedSerialId = serialId;
    const rec = {
      serialId,
      classLevel: cls,
      subject: subj,
      candidate: res.candidate || ((document.getElementById("studentNameDisplay") && document.getElementById("studentNameDisplay").innerText.trim()) || "Candidate"),
      mode: res.mode || (isPractice ? "chapter" : "full_80"),
      isPractice,
      score: Number(res.score || 0),
      maxMarks: Number(res.maxMarks || 80),
      percentage: Number(res.percentage || 0),
      secRatios: computeSectionBreakdownFromEval(res),
      timeString: res.timeString || "0m 0s",
      pacePerMark: res.pacePerMark || "0.0",
      paceVerdict: res.paceVerdict || "Standard Pacing",
      breakdown: Array.isArray(res.breakdown) ? res.breakdown : [],
      date: new Date().toLocaleString([], { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })
    };
    appendMockHistory(rec);
    window.renderCbseMockLedger(isPractice ? "practice" : "subject");
    return rec;
  }

  // Hook generateMockTest & submitMockTest for active exam bar + scorecard Sync button
  if (typeof window.generateMockTest === "function" && !window.generateMockTest._v35Hooked) {
    const origGen = window.generateMockTest;
    window.generateMockTest = async function () {
      await origGen.apply(this, arguments);
      enhanceActiveMockFormControls();
    };
    window.generateMockTest._v35Hooked = true;
  }

  document.addEventListener("submit", function (ev) {
    if (ev.target && ev.target.id === "mockTestForm") {
      setTimeout(() => {
        recordLastEvaluationIfMissing();
        enhanceEvaluatedScoreCard();
      }, 60);
    }
  }, true);

  if (typeof window.switchSubject === "function" && !window.switchSubject._v35Hooked) {
    const origSubj = window.switchSubject;
    window.switchSubject = function () {
      origSubj.apply(this, arguments);
      if (typeof currentMainTab !== "undefined") {
        if (currentMainTab === 6) window.openCbseChapterPracticeTab();
        else if (currentMainTab === 7) window.openCbseSubjectMockTab();
        else if (currentMainTab === 8) window.renderCbseBoardForecaster();
      }
    };
    window.switchSubject._v35Hooked = true;
  }

  window.downloadLoggedMockMarksheet = function (serialId) {
    const rec = getMockHistory().find(h => h.serialId === serialId);
    if (!rec) return;

    const win = window.open("", "_blank", "width=960,height=860");
    if (!win) {
      alert("Please allow popups to download the complete marksheet & answer script PDF.");
      return;
    }

    const candidate = rec.candidate || (document.getElementById("studentNameDisplay") && document.getElementById("studentNameDisplay").innerText.trim()) || "Candidate";
    const schema = getSchemaForClass(rec.classLevel || 10);
    const sMeta = schema.find(x => x.key === rec.subject) || schema[0];
    const subjDisplay = sMeta ? sMeta.label : rec.subject;
    const modeLabel = rec.isPractice
      ? (rec.mode === "quick" ? `Subject Practice Sprint (${rec.maxMarks}M)` : `Chapter Focus Drill (${rec.maxMarks}M)`)
      : `Comprehensive Board Mock / PYQ (${rec.maxMarks}M)`;

    const d = new Date();
    const pad = n => (n < 10 ? "0" + n : n);
    const ts = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
    const filename = `CBSE_Marksheet_AnswerScript_${rec.serialId.replace(/#/g, "")}_${ts}_${candidate.replace(/\s+/g, "_")}`;

    function renderPrintableRubric(rawModel, rawRubric) {
      let out = "";
      const bodyStr = (typeof rawModel === "string" ? rawModel : JSON.stringify(rawModel || "")).trim();
      if (bodyStr && bodyStr !== '""') {
        out += bodyStr.split("\n").map(l => l.trim()).filter(Boolean)
          .map(l => `<div class="rubric-line">${l}</div>`).join("");
      }
      let rItems = [];
      if (Array.isArray(rawRubric)) rItems = rawRubric;
      else if (rawRubric && typeof rawRubric === "object") {
        rItems = Object.entries(rawRubric).map(([k, v]) => ({ step: `${k}: ${typeof v === "object" ? JSON.stringify(v) : v}`, marks: "" }));
      }
      if (rItems.length) {
        out += `<div class="step-alloc-title">Official CBSE Step Allocation:</div>`;
        out += rItems.map((r, i) => {
          const stTxt = r.step || r.description || (typeof r === "string" ? r : JSON.stringify(r));
          const mTxt = r.marks ? ` <strong>(${r.marks}M)</strong>` : "";
          return `<div class="step-alloc-row"><strong>Step ${i + 1}:</strong> ${stTxt}${mTxt}</div>`;
        }).join("");
      }
      return out || `<div class="rubric-line">Refer to official CBSE marking criteria.</div>`;
    }

    const items = Array.isArray(rec.breakdown) ? rec.breakdown : [];
    const questionsHtml = items.length ? items.map(item => {
      const isFull = Number(item.loss || 0) === 0;
      const escStudent = String(item.studentAns || "(No response submitted)")
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return `
        <div class="q-card ${isFull ? "q-full" : "q-deduct"}">
          <div class="q-head">
            <div>
              <strong>Question ${item.qNo}</strong>
              <span class="sec-pill">${item.section || "Section"}</span>
              <span class="status-pill ${isFull ? "st-ok" : "st-warn"}">${isFull ? "✓ Full Credit" : "⚠ Mark Deduction"}</span>
            </div>
            <div class="q-marks">
              <strong>${item.earned} / ${item.totalMarks} Marks</strong>
              ${Number(item.loss || 0) > 0 ? `<span class="loss-txt">(-${Number(item.loss).toFixed(1)}M)</span>` : ""}
            </div>
          </div>
          <div class="q-prompt">${item.text || ""}</div>
          <div class="two-col">
            <div class="col-student">
              <div class="box-lbl">YOUR SUBMITTED ANSWER SCRIPT:</div>
              <pre class="student-pre">${escStudent}</pre>
            </div>
            <div class="col-rubric">
              <div class="box-lbl">OFFICIAL CBSE STEP-BY-STEP RUBRIC (NCERT VERIFIED):</div>
              ${renderPrintableRubric(item.model, item.rubric)}
            </div>
          </div>
          ${Number(item.loss || 0) > 0 ? `
            <div class="leak-bar">
              <span><strong>Mark Leakage Reason:</strong> ${item.lossReason || "Step / unit omission"}</span>
              <span><strong>Recommended:</strong> ${item.remedy || "Revise chapter in Tab 1"}</span>
            </div>
          ` : ""}
        </div>
      `;
    }).join("") : `<div class="q-card"><p>Detailed question breakdown was not captured for this legacy entry. Attempt a fresh mock in Tab 6 or Tab 7 to include the full evaluated answer script.</p></div>`;

    const doc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${filename}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"><\/script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"><\/script>
  <style>
    @page { size: A4 portrait; margin: 12mm 14mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #0f172a; margin: 0; padding: 14px; font-size: 12.5px; line-height: 1.5; background: #fff; }
    .header { border-bottom: 2px solid #0f172a; padding-bottom: 8px; margin-bottom: 14px; }
    .title { font-size: 18px; font-weight: 900; margin: 0; letter-spacing: 0.3px; }
    .subtitle { font-size: 11px; color: #475569; margin-top: 4px; }
    .score-card { border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 14px 16px; margin-bottom: 16px; background: #f8fafc; }
    .score-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
    .score-big { font-size: 28px; font-weight: 900; color: #059669; text-align: right; }
    .kpi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 12px; padding-top: 10px; border-top: 1px solid #e2e8f0; font-size: 11px; }
    .kpi-box { background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 10px; }
    .kpi-lbl { display: block; font-size: 9.5px; font-weight: 700; color: #64748b; text-transform: uppercase; }
    .sec-heading { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #334155; margin: 14px 0 8px; }
    .q-card { border: 1px solid #cbd5e1; border-radius: 9px; padding: 11px 13px; margin-bottom: 11px; page-break-inside: avoid; }
    .q-full { border-left: 4px solid #059669; }
    .q-deduct { border-left: 4px solid #e11d48; }
    .q-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 8px; font-size: 11.5px; }
    .sec-pill, .status-pill { display: inline-block; padding: 1px 7px; border-radius: 5px; font-size: 10px; font-weight: 700; margin-left: 6px; }
    .sec-pill { background: #e2e8f0; color: #334155; }
    .st-ok { background: #d1fae5; color: #065f46; }
    .st-warn { background: #ffe4e6; color: #9f1239; }
    .loss-txt { color: #e11d48; font-weight: 700; margin-left: 4px; }
    .q-prompt { font-weight: 600; color: #0f172a; margin-bottom: 8px; }
    .two-col { display: grid; grid-template-columns: 4fr 8fr; gap: 10px; }
    .col-student, .col-rubric { border: 1px solid #e2e8f0; border-radius: 7px; padding: 8px 10px; background: #f8fafc; font-size: 11px; }
    .box-lbl { font-size: 9.5px; font-weight: 800; color: #475569; margin-bottom: 4px; }
    .student-pre { margin: 0; white-space: pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; color: #1e293b; }
    .rubric-line { margin-bottom: 3px; }
    .step-alloc-title { font-size: 9.5px; font-weight: 800; color: #3730a3; margin-top: 6px; text-transform: uppercase; }
    .step-alloc-row { font-size: 10.5px; color: #1e1b4b; margin-top: 2px; }
    .leak-bar { margin-top: 8px; padding: 6px 9px; border-radius: 6px; background: #fff1f2; border: 1px solid #fecdd3; color: #9f1239; font-size: 10.5px; display: flex; justify-content: space-between; gap: 8px; }
    .footer { margin-top: 18px; text-align: center; font-size: 10px; color: #64748b; border-top: 1px solid #cbd5e1; padding-top: 8px; }
    .katex-mathml { display: none !important; }
  </style>
</head>
<body>
  <div class="header">
    <h1 class="title">GOALisB CBSE EVALUATION ENGINE</h1>
    <p class="subtitle">Official CBSE Diagnostic Marksheet &amp; Evaluated Answer Script | Candidate: <strong>${candidate}</strong> | Test ID: <strong>${rec.serialId}</strong> | Class ${rec.classLevel} | Subject: ${subjDisplay} | Date: ${rec.date}</p>
  </div>

  <div class="score-card">
    <div class="score-top">
      <div>
        <div style="font-size:10px;font-weight:800;color:#059669;text-transform:uppercase;">Exam Evaluated Successfully</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px;">Official CBSE Diagnostic Score Card &amp; Answer Script</div>
        <div style="font-size:11px;color:#475569;margin-top:2px;">Candidate: <strong>${candidate}</strong> &bull; Format: <strong>${modeLabel}</strong></div>
      </div>
      <div class="score-big">${rec.score} <span style="font-size:16px;color:#475569;">/ ${rec.maxMarks}</span><div style="font-size:11px;color:#334155;">${rec.percentage}% Aggregate</div></div>
    </div>
    <div class="kpi-grid">
      <div class="kpi-box"><span class="kpi-lbl">Time Taken</span><strong>${rec.timeString}</strong></div>
      <div class="kpi-box"><span class="kpi-lbl">Pace Per Mark</span><strong>${rec.pacePerMark || "0.0"} secs / mark</strong></div>
      <div class="kpi-box"><span class="kpi-lbl">Pacing Verdict</span><strong>${rec.paceVerdict || "Standard Pacing"}</strong></div>
    </div>
  </div>

  <div class="sec-heading">Question-Wise Answer Script, Step Evaluation &amp; Official CBSE Solutions (${items.length} Questions)</div>
  ${questionsHtml}

  <div class="footer">Generated by CBSE AI Micro-Evaluator Platform &bull; Serial ID: ${rec.serialId} &bull; Official NCERT/CBSE Marking Scheme Verified</div>
  <script>
    window.onload = function() {
      if (window.renderMathInElement) {
        renderMathInElement(document.body, {
          delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
          throwOnError: false
        });
      }
      setTimeout(function() { window.print(); }, 450);
    };
  <\/script>
</body>
</html>`;

    win.document.open();
    win.document.write(doc);
    win.document.close();
  };

  window.syncCbseMockToTab8 = function (serialId) {
    recordLastEvaluationIfMissing();
    const cls = getActiveClassNum();
    const hist = getMockHistory().filter(h => !h.isPractice);
    const match = serialId
      ? (hist.find(h => h.serialId === serialId) || hist[hist.length - 1])
      : (hist.filter(h => h.subject === getActiveSubjectCode()).slice(-1)[0] || hist[hist.length - 1]);

    if (!match) {
      const schema = getSchemaForClass(cls);
      const sMeta = schema.find(x => x.key === getActiveSubjectCode()) || schema[0];
      const st = loadSubjectSectionStore(cls, sMeta.key, sMeta.maxTheory);
      st.toast = `No Full-Subject Board Mocks / PYQs logged yet for ${sMeta.label} — complete one in Tab 7 first, then click Sync Mock.`;
      saveSubjectSectionStore(cls, sMeta.key, st);
      window.renderCbseBoardForecaster();
      return;
    }

    if (match.subject && match.subject !== getActiveSubjectCode() && typeof window.switchSubject === "function") {
      window.switchSubject(match.subject);
    }

    const schema = getSchemaForClass(cls);
    const sMeta = schema.find(x => x.key === match.subject) || schema[0];
    const st = loadSubjectSectionStore(cls, match.subject, sMeta.maxTheory);
    st.selectedSerialId = match.serialId;
    st.toast = Number(match.score) <= 0
      ? `Synced ${match.serialId} (${match.subject}: 0/${match.maxMarks} • 0%): 0-Score Mock — complete a scored attempt in Tab 7.`
      : `Synced ${match.serialId} (${match.subject}: ${match.score}/${match.maxMarks} • ${match.percentage}%) into Section A–E Forecaster.`;
    saveSubjectSectionStore(cls, match.subject, st);

    if (typeof currentMainTab !== "undefined" && currentMainTab !== 8 && typeof switchMainTab === "function") {
      switchMainTab(8);
    } else {
      window.renderCbseBoardForecaster();
    }
  };

  window.lockCbseBoardTarget = function () {
    const cls = getActiveClassNum();
    const subj = getActiveSubjectCode();
    const sMeta = getSchemaForClass(cls).find(x => x.key === subj) || getSchemaForClass(cls)[0];
    const st = loadSubjectSectionStore(cls, subj, sMeta.maxTheory);
    st.locked = { ...st.draft };
    st.lockedAt = "Locked at " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    st.toast = `${sMeta.label} Section A–E Targets locked!`;
    saveSubjectSectionStore(cls, subj, st);
    window.renderCbseBoardForecaster();
  };

  window.resetCbseBoardTarget = function () {
    const cls = getActiveClassNum();
    const subj = getActiveSubjectCode();
    const sMeta = getSchemaForClass(cls).find(x => x.key === subj) || getSchemaForClass(cls)[0];
    const st = loadSubjectSectionStore(cls, subj, sMeta.maxTheory);
    const hasUnsavedDraft = JSON.stringify(st.draft) !== JSON.stringify(st.locked);
    if (hasUnsavedDraft) {
      st.draft = { ...st.locked };
      st.toast = `Draft section sliders reverted to your last locked target (${st.lockedAt}). Click Reset Target again to restore defaults.`;
    } else {
      const defaults = buildDefaultSectionTargets(sMeta.maxTheory);
      st.draft = { ...defaults };
      st.locked = { ...defaults };
      st.lockedAt = "Reset to 92% Merit Benchmark";
      st.toast = `Restored default ${sMeta.label} section benchmarks.`;
    }
    saveSubjectSectionStore(cls, subj, st);
    window.renderCbseBoardForecaster();
  };

  window.updateCbseTargetSlider = function (secKey, val) {
    const cls = getActiveClassNum();
    const subj = getActiveSubjectCode();
    const sMeta = getSchemaForClass(cls).find(x => x.key === subj) || getSchemaForClass(cls)[0];
    const st = loadSubjectSectionStore(cls, subj, sMeta.maxTheory);
    st.draft[secKey] = Number(val);
    saveSubjectSectionStore(cls, subj, st);
    window.renderCbseBoardForecaster();
  };

  window.clearCbseMockLedger = function (scope) {
    if (!confirm("Reset & clear all logged attempts from this ledger?")) return;
    const cls = getActiveClassNum();
    const remaining = getMockHistory().filter(h => scope === "practice" ? !h.isPractice : h.isPractice);
    localStorage.setItem(`cbse_mock_ledger_c${cls}`, JSON.stringify(remaining));
    window.renderCbseMockLedger(scope);
    if (typeof currentMainTab !== "undefined" && currentMainTab === 8) window.renderCbseBoardForecaster();
  };

  window.renderCbseMockLedger = function (scope) {
    const activeScope = scope || (typeof currentMainTab !== "undefined" && currentMainTab === 6 ? "practice" : "subject");
    const hostWs = document.getElementById(activeScope === "practice" ? "workspace-6" : "workspace-7") || document.getElementById("workspace-6");
    if (!hostWs) return;
    let box = document.getElementById("cbse-t6-official-ledger");
    if (!box) {
      box = document.createElement("div");
      box.id = "cbse-t6-official-ledger";
    }
    if (box.parentElement !== hostWs) hostWs.appendChild(box);

    const cls = getActiveClassNum();
    const hist = getMockHistory().slice().reverse().filter(h => activeScope === "practice" ? h.isPractice : !h.isPractice);
    box.innerHTML = `
      <div class="p-5 rounded-2xl bg-surface border border-slate-800 space-y-3 text-xs shadow-lg">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 class="text-sm font-extrabold text-white">
              ${activeScope === "practice" ? `Class ${cls} Practice Drill Ledger — Chapter &amp; Subject Sprints (${hist.length} Logged)` : `Class ${cls} Official Board Mock &amp; PYQ Ledger (${hist.length} Logged)`}
            </h3>
            <p class="text-[11px] text-slate-400">
              ${activeScope === "practice"
                ? "Chapter (20M) and Subject (40M) practice drills track topic speed without altering your Tab 8 Board Forecast."
                : "Download PDF marksheets, reset logs, or click Sync Tab 8 → on any mock to update Section A–E attainment."}
            </p>
          </div>
          <div class="flex items-center gap-2">
            ${hist.length ? `<button type="button" onclick="window.clearCbseMockLedger('${activeScope}')" class="px-3 py-1.5 rounded-xl bg-rose-950/70 hover:bg-rose-900 border border-rose-500/40 text-rose-200 text-xs font-bold cursor-pointer">&#8634; Reset / Clear Logs</button>` : ""}
            ${activeScope === "subject" ? `<button type="button" onclick="switchMainTab(8)" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold cursor-pointer">Open Tab 8 Forecaster &rarr;</button>` : ""}
          </div>
        </div>
        ${hist.length ? `
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                  <th class="py-2 pr-2">Serial ID</th>
                  <th class="py-2 px-2">Format</th>
                  <th class="py-2 px-2">Subject</th>
                  <th class="py-2 px-2">Score</th>
                  <th class="py-2 px-2">Attained %</th>
                  <th class="py-2 pl-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/70">
                ${hist.map(h => `
                  <tr>
                    <td class="py-2.5 pr-2 font-mono font-bold ${h.isPractice ? "text-sky-400" : "text-indigo-400"} whitespace-nowrap">${h.serialId}</td>
                    <td class="py-2.5 px-2 whitespace-nowrap"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${h.isPractice ? "bg-sky-950 text-sky-300 border border-sky-800" : "bg-amber-950 text-amber-300 border border-amber-800"}">${h.isPractice ? (h.mode === "quick" ? "Subject Sprint (40M)" : "Chapter Drill (20M)") : "Board Mock / PYQ"}</span></td>
                    <td class="py-2.5 px-2 font-bold text-white">${h.subject}</td>
                    <td class="py-2.5 px-2 font-bold text-emerald-400 whitespace-nowrap">${h.score} / ${h.maxMarks}</td>
                    <td class="py-2.5 px-2 font-semibold text-slate-200">${h.percentage}%</td>
                    <td class="py-2.5 pl-2 text-right whitespace-nowrap space-x-1.5">
                      <button type="button" onclick="window.downloadLoggedMockMarksheet('${h.serialId}')" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 text-[10px] font-bold cursor-pointer">&#11015; Marksheet &amp; Script</button>
                      ${h.isPractice
                        ? `<span class="text-[11px] text-sky-300 font-semibold">Logged</span>`
                        : `<button type="button" onclick="window.syncCbseMockToTab8('${h.serialId}')" class="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-extrabold shadow cursor-pointer">Sync Tab 8 &rarr;</button>`}
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        ` : `<div class="p-3.5 rounded-xl bg-background border border-slate-800 text-slate-400">${activeScope === "practice" ? "No practice drills logged yet. Select a subject above and run a Chapter Drill (20M) or Subject Sprint (40M)." : "No Comprehensive Board Mocks or PYQs logged yet. Select a subject above and complete an 80M/70M Board Mock or Past Paper to correlate with Tab 8."}</div>`}
      </div>
    `;
  };

  window.renderCbseBoardForecaster = function () {
    const ws8 = document.getElementById("workspace-8");
    if (!ws8) return;
    const cls = getActiveClassNum();
    const activeSubj = getActiveSubjectCode();
    const schema = getSchemaForClass(cls);
    const sMeta = schema.find(x => x.key === activeSubj) || schema[0];
    const secBp = SUBJECT_SECTION_BLUEPRINTS[sMeta.maxTheory] || SUBJECT_SECTION_BLUEPRINTS[80];
    const st = loadSubjectSectionStore(cls, sMeta.key, sMeta.maxTheory);
    const d = st.draft;
    const t = st.locked;
    const unsaved = JSON.stringify(d) !== JSON.stringify(t);

    const hist = getMockHistory().slice().reverse();
    const subjFullMocks = hist.filter(h => h.subject === sMeta.key && !h.isPractice);
    const chosenMock = (st.selectedSerialId && subjFullMocks.find(m => m.serialId === st.selectedSerialId))
      || subjFullMocks[0]
      || null;

    const draftSubjectTotal = secBp.reduce((acc, s) => acc + Number(d[s.key] || 0), 0);
    const lockedSubjectTotal = secBp.reduce((acc, s) => acc + Number(t[s.key] || 0), 0);

    const sectionRows = secBp.map(sec => {
      const target = Number(t[sec.key] || 0);
      let attained = null;
      if (chosenMock) {
        const ratio = (chosenMock.secRatios && chosenMock.secRatios[sec.key] !== null && chosenMock.secRatios[sec.key] !== undefined)
          ? chosenMock.secRatios[sec.key]
          : (Number(chosenMock.percentage || 0) / 100);
        attained = Math.round(sec.max * ratio * 10) / 10;
      }
      const diff = attained !== null ? Math.round((attained - target) * 10) / 10 : null;
      const compPct = attained !== null ? Math.min(100, Math.round((attained / Math.max(1, target)) * 100)) : 0;
      return { ...sec, target, attained, diff, compPct };
    });

    const attainedSubjectTotal = chosenMock
      ? Math.round((Number(chosenMock.percentage || 0) / 100) * sMeta.maxTheory)
      : null;

    let readinessStage = `Awaiting ${sMeta.label} Mock`;
    let readinessColor = "text-slate-300";
    if (chosenMock) {
      if (Number(chosenMock.score) <= 0) {
        readinessStage = "0-Score Mock (Needs Valid Attempt)";
        readinessColor = "text-rose-400";
      } else if (chosenMock.percentage >= 90) {
        readinessStage = "A1 Merit Ready (90%+)";
        readinessColor = "text-emerald-400";
      } else if (chosenMock.percentage >= 75) {
        readinessStage = "Board Ready (75–89%)";
        readinessColor = "text-indigo-400";
      } else {
        readinessStage = "Developing (<75% — Revise Weak Sections)";
        readinessColor = "text-amber-400";
      }
    }

    const subjectOverviewRows = schema.map(sub => {
      const sStore = loadSubjectSectionStore(cls, sub.key, sub.maxTheory);
      const sBp = SUBJECT_SECTION_BLUEPRINTS[sub.maxTheory] || SUBJECT_SECTION_BLUEPRINTS[80];
      const sLockedSum = sBp.reduce((a, b) => a + Number(sStore.locked[b.key] || 0), 0);
      const latest = hist.find(h => h.subject === sub.key && !h.isPractice) || null;
      const attained = latest ? Math.round((Number(latest.percentage || 0) / 100) * sub.maxTheory) : null;
      const gap = attained !== null ? attained - sLockedSum : null;
      return { ...sub, sLockedSum, latest, attained, gap, isActive: sub.key === sMeta.key };
    });

    ws8.innerHTML = `
      <div class="p-6 rounded-2xl bg-surface border border-slate-800 shadow-lg space-y-2 shrink-0 mt-1">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="px-2.5 py-1 rounded text-xs font-bold bg-indigo-900/50 text-indigo-300 border border-indigo-800/50">
            Subject-Specific Board Forecaster &bull; Class ${cls}
          </span>
          <span class="text-xs font-mono text-slate-400">Active Subject: <strong class="text-indigo-300">${sMeta.label} (${sMeta.maxTheory} Marks Theory)</strong></span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">${sMeta.label} — Section-by-Section Target &amp; Attainment</h2>
        <p class="text-xs sm:text-sm text-slate-400 max-w-3xl">Correlated directly with Tab 7 Comprehensive Board Mocks &amp; Official Past Board Papers across CBSE Sections A–E. Practice drills stay isolated in Tab 6.</p>
      </div>

      ${st.toast ? `
        <div class="p-3.5 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-between text-xs text-indigo-200">
          <span>&#9989; <strong>Status:</strong> ${st.toast}</span>
          <button type="button" onclick="const s=JSON.parse(localStorage.getItem('cbse_t8_sec_c${cls}_${sMeta.key}')||'{}'); s.toast=''; localStorage.setItem('cbse_t8_sec_c${cls}_${sMeta.key}', JSON.stringify(s)); window.renderCbseBoardForecaster();" class="font-bold px-2">&times;</button>
        </div>
      ` : ""}

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div class="lg:col-span-5 bg-surface border border-slate-800 rounded-2xl p-5 space-y-4 text-xs shadow-lg">
          <div class="flex flex-wrap items-start justify-between gap-2">
            <div>
              <span class="px-2.5 py-0.5 rounded-full ${unsaved ? "bg-amber-500/20 text-amber-300" : "bg-indigo-500/20 text-indigo-300"} text-[10px] font-extrabold uppercase">
                ${unsaved ? "UNSAVED DRAFT — CLICK SET TARGET" : "LOCKED SUBJECT TARGET"}
              </span>
              <h3 class="text-base font-extrabold text-white mt-1.5">${sMeta.label} (${sMeta.maxTheory}M)</h3>
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
              <button type="button" onclick="window.syncCbseMockToTab8()"
                class="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold shadow cursor-pointer">
                &#8635; Sync Mock
              </button>
            </div>
          </div>

          <div class="space-y-3.5 pt-2 border-t border-slate-800">
            ${secBp.map(sec => `
              <div>
                <div class="flex flex-wrap justify-between font-bold mb-1">
                  <span class="text-slate-200">${sec.label}</span>
                  <span class="font-mono text-emerald-400">
                    ${d[sec.key]} <span class="text-slate-400 font-normal">/ ${sec.max}</span>
                    <span class="ml-1.5 text-[10px] text-amber-300">Bar: ${sec.cutoff}</span>
                    <span class="ml-1 text-[10px] text-indigo-300">&bull; Locked: ${t[sec.key]}</span>
                  </span>
                </div>
                <input type="range" min="0" max="${sec.max}" step="1" value="${d[sec.key]}"
                  oninput="window.updateCbseTargetSlider('${sec.key}', this.value)" class="w-full accent-emerald-500 cursor-pointer">
                <div class="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
                  <span>Min: 0</span>
                  <span class="text-amber-400/90">85% Merit: ${sec.cutoff}/${sec.max}</span>
                  <span>Max: ${sec.max}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="lg:col-span-7 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="p-4 rounded-2xl bg-surface border border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-slate-400">${chosenMock ? `ATTAINED (${chosenMock.serialId})` : "TARGET THEORY SCORE"}</div>
              <div class="text-xl font-extrabold text-white mt-1">
                ${chosenMock ? `${attainedSubjectTotal} / ${sMeta.maxTheory} (${chosenMock.percentage}%)` : `${draftSubjectTotal} / ${sMeta.maxTheory}`}
              </div>
              <div class="text-[11px] text-indigo-300 mt-0.5">Locked Target: ${lockedSubjectTotal} / ${sMeta.maxTheory}</div>
            </div>

            <div class="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-700/40">
              <div class="text-[10px] font-extrabold uppercase text-emerald-300">CBSE 85% MERIT BENCHMARK (${sMeta.cutoff}/${sMeta.maxTheory})</div>
              <div class="text-xl font-extrabold ${chosenMock && attainedSubjectTotal >= sMeta.cutoff ? "text-emerald-400" : "text-slate-300"} mt-1">
                ${!chosenMock ? "Pending Mock" : attainedSubjectTotal >= sMeta.cutoff ? "Achieved (+" + (attainedSubjectTotal - sMeta.cutoff) + "M)" : `Short by ${sMeta.cutoff - attainedSubjectTotal}M`}
              </div>
              <div class="text-[11px] text-emerald-700 dark:text-emerald-200 font-semibold mt-0.5">${subjFullMocks.length} Board Mock(s) / PYQ(s) Logged</div>
            </div>

            <div class="p-4 rounded-2xl bg-surface border border-slate-800">
              <div class="text-[10px] font-extrabold uppercase text-amber-300">PRESENT READINESS LEVEL</div>
              <div class="text-sm font-extrabold ${readinessColor} mt-1">${readinessStage}</div>
              <div class="text-[10px] text-slate-400 mt-0.5">${st.lockedAt}</div>
            </div>
          </div>

          <div class="bg-surface border border-slate-800 rounded-2xl p-5 space-y-3 text-xs shadow-lg">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div class="text-xs font-extrabold uppercase tracking-wider text-amber-400">${sMeta.label} — SECTION A–E ATTAINMENT &amp; DEFICIENCY MATRIX</div>
                <div class="text-[11px] text-slate-400">${chosenMock ? `Synced: ${chosenMock.serialId} (${chosenMock.score}/${chosenMock.maxMarks} • ${chosenMock.percentage}%)` : `Complete a ${sMeta.label} Board Mock or PYQ in Tab 7 or click Sync Mock`}</div>
              </div>
              ${subjFullMocks.length ? `
                <select onchange="if(this.value) window.syncCbseMockToTab8(this.value)" class="px-2.5 py-1.5 rounded-xl bg-background border border-slate-700 text-xs font-mono font-bold text-amber-300">
                  <option value="">Switch ${sMeta.key} Board Mock (${subjFullMocks.length})...</option>
                  ${subjFullMocks.map(h => `<option value="${h.serialId}" ${chosenMock && chosenMock.serialId === h.serialId ? "selected" : ""}>${h.serialId} (${h.score}/${h.maxMarks})</option>`).join("")}
                </select>
              ` : `<span class="px-2.5 py-1 rounded-lg bg-surfaceLight border border-slate-700 text-[11px] font-bold text-slate-400">0 ${sMeta.key} Board Mocks</span>`}
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-800 text-[10px] text-slate-400 uppercase">
                    <th class="py-2 pr-2">CBSE Section</th>
                    <th class="py-2 px-2">Locked</th>
                    <th class="py-2 px-2">Attained</th>
                    <th class="py-2 px-2">Deficiency / Surplus</th>
                    <th class="py-2 pl-2">Completion</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800/70">
                  ${sectionRows.map(r => `
                    <tr>
                      <td class="py-2.5 pr-2 font-bold text-white">${r.label}</td>
                      <td class="py-2.5 px-2 font-mono text-indigo-300 whitespace-nowrap">${r.target} / ${r.max}</td>
                      <td class="py-2.5 px-2 font-mono font-bold text-white whitespace-nowrap">${r.attained !== null ? `${r.attained} / ${r.max}` : "&mdash;"}</td>
                      <td class="py-2.5 px-2 font-bold whitespace-nowrap ${r.diff === null ? "text-slate-400" : r.diff >= 0 ? "text-emerald-400" : "text-rose-400"}">
                        ${r.diff === null
                          ? "Pending Mock"
                          : (chosenMock && Number(chosenMock.score) <= 0)
                            ? "0-Score Mock (Needs Valid Attempt)"
                            : r.diff >= 0
                              ? `+${r.diff} Surplus`
                              : `${r.diff} Deficit`}
                      </td>
                      <td class="py-2.5 pl-2">
                        <div class="flex items-center gap-2">
                          <div class="w-16 h-2 rounded-full bg-slate-800 overflow-hidden"><div class="h-full bg-emerald-500" style="width:${r.compPct}%"></div></div>
                          <span class="text-[10px] font-bold text-slate-300">${r.compPct}%</span>
                        </div>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-surface border border-slate-800 rounded-2xl p-5 space-y-3 text-xs shadow-lg">
            <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-300">CLASS ${cls} ENROLLED SUBJECTS — INDIVIDUAL STANDING</div>
            <div class="grid grid-cols-1 sm:grid-cols-${schema.length} gap-3">
              ${subjectOverviewRows.map(sub => `
                <div onclick="switchSubject('${sub.key}')" class="p-3.5 rounded-xl border cursor-pointer transition ${sub.isActive ? "bg-indigo-950/35 border-indigo-500" : "bg-background border-slate-800 hover:border-slate-700"}">
                  <div class="font-bold text-white truncate">${sub.label.split("(")[0].trim()}</div>
                  <div class="text-[11px] font-mono text-indigo-300 mt-1">Target: ${sub.sLockedSum} / ${sub.maxTheory}</div>
                  <div class="text-xs font-extrabold mt-1 ${sub.attained === null ? "text-slate-400" : sub.gap >= 0 ? "text-emerald-400" : "text-rose-400"}">
                    ${sub.attained === null ? "Awaiting Mock" : `Attained: ${sub.attained}/${sub.maxTheory} (${sub.gap >= 0 ? "+" + sub.gap : sub.gap})`}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  };


  if (typeof window.selectChapter === "function" && !window.selectChapter._v37Hooked) {
    const origSelCh = window.selectChapter;
    window.selectChapter = function () {
      origSelCh.apply(this, arguments);
      window.syncTab6ActiveChapterAndSubject();
    };
    window.selectChapter._v37Hooked = true;
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.syncTab6ActiveChapterAndSubject();
    window.renderCbseMockLedger("practice");
    window.renderCbseBoardForecaster();
  });
})();
