// Full-Depth Exhaustive Chapter Builder for CBSE Class 11 & 12 Chemistry, Biology, Math & Physics
window.buildExhaustiveScienceChapter = function(cfg) {
  return {
    code: cfg.code,
    name: cfg.name,
    weight: cfg.weight,
    desc: cfg.desc,
    overview: `<div class="space-y-6">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles NCERT Intuition</span>
        <h3 class="text-xl font-black text-white">${cfg.intuitionTitle}</h3>
        <p class="text-xs text-slate-300 leading-relaxed">${cfg.intuitionBody}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        ${(cfg.concepts || []).map(([title, body]) => `
          <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
            <span class="text-indigo-400 font-bold block text-sm">${title}</span>
            <p class="text-slate-300 leading-relaxed">${body}</p>
          </div>`).join('')}
      </div>
    </div>`,
    exp1: `<div class="space-y-6 text-xs text-slate-300">
      <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">${cfg.name} — Core NCERT Laws, Equations &amp; Matrices</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-white text-[11px] pt-1">
          ${(cfg.formulas || []).map(([head, body]) => `
            <div class="p-3.5 bg-surface rounded-lg border border-slate-800 space-y-1">
              <span class="text-indigo-300 font-sans font-bold block text-xs">${head}:</span>
              <div>${body}</div>
            </div>`).join('')}
        </div>
      </div>
      ${(cfg.numericals || []).map((num, idx) => `
        <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-indigo-400 font-bold text-sm">WORKED BOARD PROBLEM ${idx + 1}: ${num.title}</span>
            <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px]">${num.marks} Marks CBSE Standard</span>
          </div>
          <p class="text-slate-200"><strong>Problem:</strong> ${num.problem}</p>
          <div class="p-4 bg-background rounded-lg border border-slate-800 space-y-2 text-slate-300 leading-relaxed">
            ${(num.steps || []).map((st, sIdx) => `<p><strong class="text-emerald-400">Step ${sIdx + 1}:</strong> ${st}</p>`).join('')}
          </div>
        </div>`).join('')}
    </div>`,
    exp2: `<div class="space-y-6 text-xs text-slate-300">
      ${(cfg.derivations || []).map((der, idx) => `
        <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-4">
          <div class="border-b border-slate-700 pb-2.5 flex items-center justify-between">
            <h3 class="font-black text-white text-sm">MECHANISM / DERIVATION ${idx + 1}: ${der.title}</h3>
            <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px]">${der.tag}</span>
          </div>
          <p class="text-slate-300"><strong>Principle &amp; Context:</strong> ${der.setup}</p>
          <div class="space-y-2 leading-relaxed font-mono text-[11px] bg-background p-4 rounded-lg border border-slate-800">
            ${(der.steps || []).map((st, sIdx) => `<p>${sIdx + 1}. ${st}</p>`).join('')}
            <p class="text-emerald-400 font-bold font-sans pt-1">${der.conclusion}</p>
          </div>
        </div>`).join('')}
    </div>`,
    vernacular: { English: cfg.examTip || '' },
    errorFinder: {
      traps: (cfg.traps || []).map(([tTitle, tSev, tExp]) => ({ title: tTitle, severity: tSev, explanation: tExp })),
      challenges: cfg.challenges || []
    },
    diagnostics: cfg.diagnostics || [],
    boardProblems: (cfg.numericals || []).map((num) => ({
      title: `${cfg.name}: ${num.title}`,
      marks: num.marks,
      text: num.problem,
      idealAnswer: (num.steps || []).map((s, i) => `Step ${i + 1}: ${s.replace(/<[^>]+>/g, '')}`).join('\n'),
      flawedAnswer: "Step 1: Applied direct formula without checking stoichiometry/units or NCERT preconditions.\nStep 2: Omitted intermediate justification.",
      rubric: (num.steps || []).map((s) => ({ step: s.replace(/<[^>]+>/g, ''), marks: Number((num.marks / Math.max(1, num.steps.length)).toFixed(2)) }))
    }))
  };
};

// Shared Rich Chapter Constructor for CBSE Class 11 & 12 Registries
window.buildCbseChapterEntry = function(c) {
  return {
    code: c[0], name: c[1], weight: c[2], desc: c[3],
    overview: `<div class="space-y-5">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-2.5">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Intuition</span>
        <h3 class="text-xl font-black text-white">${c[4]}</h3>
        <p class="text-xs text-slate-300 leading-relaxed">${c[5]}</p>
      </div>
    </div>`,
    exp1: `<div class="space-y-5 text-xs text-slate-300">
      <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">${c[1]} — Core Laws, Formulas &amp; Equations</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[11px] text-white">
          <div class="p-3 bg-surface rounded-lg border border-slate-800"><span class="text-indigo-300 font-sans font-bold block mb-1">Key Relation 1:</span>${c[6]}</div>
          <div class="p-3 bg-surface rounded-lg border border-slate-800"><span class="text-indigo-300 font-sans font-bold block mb-1">Key Relation 2:</span>${c[7]}</div>
        </div>
      </div>
      <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-2">
        <span class="text-indigo-400 font-bold text-sm">WORKED BOARD PROBLEM: ${c[8]}</span>
        <div class="p-3.5 bg-background rounded-lg border border-slate-800 text-slate-300 leading-relaxed">${c[9]}</div>
      </div>
    </div>`,
    exp2: `<div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-2 text-xs text-slate-300">
      <h4 class="text-emerald-400 font-bold text-sm uppercase">BOARD DERIVATION / MECHANISM: ${c[10]}</h4>
      <div class="font-mono text-[11px] bg-background p-4 rounded-lg border border-slate-800 leading-relaxed">${c[11]}</div>
    </div>`,
    vernacular: { English: c[12] },
    errorFinder: {
      traps: [{ title: `${c[1]}: Board Exam Trap`, severity: "High (1-2 Marks)", explanation: c[12] }],
      challenges: [{
        title: `${c[1]}: Step Verification Challenge`,
        steps: [
          { stepNo: 1, text: `Problem Setup: ${c[8]}` },
          { stepNo: 2, text: `Flawed step omitting key condition: ${c[12]}` },
          { stepNo: 3, text: `Final result stated.` }
        ],
        faultyStep: 2,
        deductionReason: `In Step 2: ${c[12]}`
      }]
    },
    diagnostics: [{
      q: c[13], difficulty: "Board Standard (1M)", options: c[14], correct: c[15], solution: c[16]
    }]
  };
};

// Unified Curriculum Bridge for Multi-Class Chapter & Question Resolution
window.curriculumBridge = {
    getActiveClass: function() {
        const badge = document.getElementById('studentClassBadge');
        if (badge) {
            const m = badge.textContent.match(/\d+/);
            if (m) return parseInt(m[0], 10);
        }
        return parseInt(localStorage.getItem('cbse_active_class') || '10', 10);
    },
    getActiveSubject: function() {
        if (typeof currentSubject !== 'undefined' && currentSubject) return currentSubject;
        const activeBtn = document.querySelector('[id^="subjTab_"].bg-indigo-600');
        return activeBtn ? activeBtn.id.replace('subjTab_', '') : 'MATH';
    },
    getRegistry: function(subj) {
        const targetSubj = subj || this.getActiveSubject();
        if (typeof subjectsRegistry !== 'undefined' && subjectsRegistry[targetSubj]) {
            return subjectsRegistry[targetSubj].chapters || {};
        }
        return {};
    },
    getActiveChapterKey: function(subj) {
        const reg = this.getRegistry(subj);
        if (window._activeClassChapterKey && reg[window._activeClassChapterKey]) {
            return window._activeClassChapterKey;
        }
        if (typeof currentChapter !== 'undefined' && reg[currentChapter]) {
            return currentChapter;
        }
        return Object.keys(reg)[0] || '';
    },
    getActiveChapter: function(subj) {
        const reg = this.getRegistry(subj);
        const k = this.getActiveChapterKey(subj);
        return reg[k] || null;
    },
    stripHtml: function(html) {
        if (!html) return '';
        const div = document.createElement('div');
        div.innerHTML = String(html);
        return (div.textContent || div.innerText || '').trim();
    },
    buildBankProblemsForChapter: function(ch, chKey, subj) {
        if (!ch) return [];
        const items = [];
        let n = 1;

        if (Array.isArray(ch.marksBank) && ch.marksBank.length > 0) {
            ch.marksBank.forEach((mb) => {
                items.push({
                    question_id: `${chKey}_MB_${mb.marks}M_${n++}`,
                    chapter_id: chKey,
                    subject_code: subj || 'MATH',
                    marks: mb.marks,
                    title: `[${mb.marks}M] ${mb.title}`,
                    text: mb.text,
                    ideal_solution: mb.idealAnswer,
                    idealAnswer: mb.idealAnswer,
                    flawedAnswer: mb.flawedAnswer || 'Applied formula without verifying domain restrictions or intermediate steps.',
                    rubric: mb.rubric || [{ step: mb.idealAnswer, marks: mb.marks }]
                });
            });
            return items;
        }

        (ch.diagnostics || []).forEach((dg) => {
            const q = dg.q || dg.question || dg.text;
            if (!q) return;
            const opts = Array.isArray(dg.options) ? dg.options : [];
            const correctIdx = typeof dg.correct === 'number' ? dg.correct : 0;
            const correctOpt = opts[correctIdx] || '';
            const cleanSol = this.stripHtml(dg.solution || '');
            const optText = opts.length >= 4
                ? `\n(A) ${opts[0]}  (B) ${opts[1]}  (C) ${opts[2]}  (D) ${opts[3]}`
                : '';
            items.push({
                question_id: `${chKey}_DG_${n++}`,
                chapter_id: chKey,
                subject_code: subj || 'MATH',
                marks: dg.marks || 1,
                title: `[1M] ${this.stripHtml(q).slice(0, 56)}`,
                text: `${this.stripHtml(q)}${optText}`,
                ideal_solution: correctOpt ? `Correct Option: (${String.fromCharCode(65 + correctIdx)}) ${correctOpt}\n${cleanSol}` : cleanSol,
                idealAnswer: correctOpt ? `Correct Option: (${String.fromCharCode(65 + correctIdx)}) ${correctOpt}\n${cleanSol}` : cleanSol,
                flawedAnswer: opts.length > 1 ? `Selected distractor: ${opts[(correctIdx + 1) % opts.length]} without verifying NCERT conditions.` : 'Incorrect option chosen.',
                rubric: [
                    { step: correctOpt ? `Identify correct result: ${this.stripHtml(correctOpt)}` : 'Identify correct option', marks: 0.5 },
                    { step: cleanSol || 'Complete step-by-step NCERT derivation', marks: 0.5 }
                ]
            });
        });

        (ch.boardProblems || []).forEach((bp) => {
            const m = bp.marks || 3;
            items.push({
                question_id: `${chKey}_BP_${n++}`,
                chapter_id: chKey,
                subject_code: subj || 'MATH',
                marks: m,
                title: `[${m}M] ${bp.title || ch.name}`,
                text: bp.text,
                ideal_solution: bp.idealAnswer,
                idealAnswer: bp.idealAnswer,
                flawedAnswer: bp.flawedAnswer || 'Omitted intermediate derivation steps or SI units.',
                rubric: bp.rubric || [{ step: bp.idealAnswer, marks: m }]
            });
        });

        const challenges = (ch.errorFinder && Array.isArray(ch.errorFinder.challenges)) ? ch.errorFinder.challenges : [];
        challenges.forEach((c) => {
            const steps = Array.isArray(c.steps) ? c.steps : [];
            if (steps.length === 0) return;
            const idealLines = steps.map((s) => `Step ${s.stepNo}: ${this.stripHtml(s.text)}`).join('\n') + (c.deductionReason ? `\nExaminer Rule: ${this.stripHtml(c.deductionReason)}` : '');
            const flawedLines = steps.map((s) => `Step ${s.stepNo}: ${this.stripHtml(s.text)}${s.stepNo === c.faultyStep ? '  <-- [Flawed Step]' : ''}`).join('\n');
            items.push({
                question_id: `${chKey}_CHLG_${n++}`,
                chapter_id: chKey,
                subject_code: subj || 'MATH',
                marks: 3,
                title: `[3M] ${c.title}`,
                text: `${c.title}: ${this.stripHtml(steps[0].text)}`,
                ideal_solution: idealLines,
                idealAnswer: idealLines,
                flawedAnswer: flawedLines,
                rubric: steps.map((s) => ({ step: this.stripHtml(s.text), marks: 1.0 }))
            });
        });

        [1, 2, 3, 5].forEach((targetM) => {
            const bucket = items.filter((it) => it.marks === targetM);
            let idx = 0;
            while (bucket.length < 5 && items.length > 0) {
                const src = items[idx % items.length];
                const clone = Object.assign({}, src, {
                    question_id: `${chKey}_BAL_${targetM}M_${n++}`,
                    marks: targetM,
                    title: `[${targetM}M] ${src.title.replace(/^\[\dM\]\s*/, '')}`,
                    rubric: [{ step: src.idealAnswer, marks: targetM }]
                });
                items.push(clone);
                bucket.push(clone);
                idx++;
            }
        });

        return items;
    }
};
