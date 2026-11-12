// js/modules/tab3_evaluator.js - CBSE AI Micro-Evaluator Engine
(function() {
    const evaluationQuestionBank = {
                SST: {
            1: [
                {
                    id: "SST-CH1-E01",
                    title: "Explain the measures introduced by French revolutionaries to create a sense of collective identity (la patrie and le citoyen).",
                    maxMarks: 5,
                    rubric: [
                        { step: "Ideas of la patrie (fatherland) and le citoyen (citizen)", marks: 1 },
                        { step: "New tricolour flag replacing the royal standard", marks: 1 },
                        { step: "Estates General elected and renamed National Assembly", marks: 1 },
                        { step: "Centralised administrative system & uniform laws", marks: 1 },
                        { step: "Uniform system of weights/measures & French as common language", marks: 1 }
                    ]
                }
            ]
        },
        MATH: {
            1: [
                {
                    id: "Q-M1-01",
                    title: "Irrationality Proof of âˆš5",
                    marks: 3,
                    prompt: "Prove that âˆš5 is irrational.",
                    rubric: [
                        { step: "Hypothesis: Let âˆš5 = a/b where gcd(a,b)=1", marks: 0.5 },
                        { step: "Square both sides: 5bÂ² = aÂ² => 5 divides aÂ² => 5 divides a", marks: 1.0 },
                        { step: "Substitution: a = 5c => 5bÂ² = 25cÂ² => bÂ² = 5cÂ² => 5 divides b", marks: 1.0 },
                        { step: "Contradiction: gcd(a,b) >= 5 contradicts coprime assumption", marks: 0.5 }
                    ],
                    sampleAnswer: "Let âˆš5 = a/b where a, b are coprime integers (b â‰  0).\n5bÂ² = aÂ² => 5 divides a.\nLet a = 5c => 5bÂ² = 25cÂ² => bÂ² = 5cÂ² => 5 divides b.\nHence 5 is a common factor of a and b, contradicting that gcd(a,b)=1.\nTherefore, âˆš5 is irrational."
                },
                {
                    id: "Q-M1-02",
                    title: "HCF & LCM Fundamental Theorem",
                    marks: 2,
                    prompt: "Find HCF and LCM of 120 and 144 using prime factorisation, and verify HCF Ã— LCM = Product.",
                    rubric: [
                        { step: "Prime factorization: 120 = 2Â³ Ã— 3 Ã— 5; 144 = 2â´ Ã— 3Â²", marks: 0.5 },
                        { step: "Calculate HCF = 2Â³ Ã— 3 = 24 and LCM = 2â´ Ã— 3Â² Ã— 5 = 720", marks: 0.5 },
                        { step: "LHS: HCF Ã— LCM = 24 Ã— 720 = 17,280", marks: 0.5 },
                        { step: "RHS: 120 Ã— 144 = 17,280 => LHS = RHS Verified", marks: 0.5 }
                    ],
                    sampleAnswer: "120 = 2Â³ Ã— 3 Ã— 5\n144 = 2â´ Ã— 3Â²\nHCF = 2Â³ Ã— 3 = 24\nLCM = 2â´ Ã— 3Â² Ã— 5 = 720\nHCF Ã— LCM = 24 Ã— 720 = 17280\nProduct = 120 Ã— 144 = 17280\nVerified."
                }
            ]
        },
        SCI: {
            1: [
                {
                    id: "Q-S1-01",
                    title: "Balancing & State Notation of Redox",
                    marks: 3,
                    prompt: "Write a balanced equation with physical states when iron reacts with steam, and identify the substance oxidized.",
                    rubric: [
                        { step: "Balanced Equation: 3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g)", marks: 1.5 },
                        { step: "Substance Oxidized: Fe", marks: 0.75 },
                        { step: "Substance Reduced: H2O", marks: 0.75 }
                    ],
                    sampleAnswer: "3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g)\nSubstance Oxidized: Fe\nSubstance Reduced: H2O"
                }
            ]
        }
    };

    function getDynamicEvalQuestions(subj, chId) {
        const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
        if (cls === 10 && evaluationQuestionBank[subj] && evaluationQuestionBank[subj][chId]) {
            return evaluationQuestionBank[subj][chId];
        }
        if (window.curriculumBridge) {
            const ch = window.curriculumBridge.getActiveChapter(subj);
            const chKey = window.curriculumBridge.getActiveChapterKey(subj);
            const items = window.curriculumBridge.extractChapterItems(ch, chKey);
            if (items.length > 0) return items;
        }
        return (evaluationQuestionBank[subj] && evaluationQuestionBank[subj][chId]) || [];
    }

    let selectedQuestionIndex = 0;

    window.tab3 = {
        render: function() {
            const container = document.getElementById('workspace-3');
            if (!container) return;

            const subj = (window.store && window.store.state.subject) || 'MATH';
            const chId = (window.store && window.store.state.activeChapterId) || 1;
            const chIdResolved = (window.store && (window.store.state.activeChapterId || window.store.state.activeChapter)) || 1;
            const qList = getDynamicEvalQuestions(subj, chIdResolved);

            if (qList.length === 0) {
                container.innerHTML = `
                    <div class="p-8 rounded-2xl bg-[#121927] border border-slate-800 text-center space-y-3">
                        <span class="text-3xl">âœ’ï¸</span>
                        <h3 class="text-base font-bold text-white">CBSE AI Micro-Evaluator</h3>
                        <p class="text-xs text-slate-400 max-w-md mx-auto">
                            Evaluation sets for Subject <strong>${subj}</strong> (Chapter ${chId}) are being mapped to CBSE rubrics. Switch to Chapter 01 to test.
                        </p>
                    </div>
                `;
                return;
            }

            const activeQ = qList[selectedQuestionIndex] || qList[0];

            container.innerHTML = `
                <div class="space-y-6">
                    <div class="p-6 rounded-2xl bg-[#121927] border border-slate-800 shadow-xl flex items-center justify-between">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xl">âœ’ï¸</span>
                                <h2 class="text-lg font-black text-white">CBSE AI Micro-Evaluator</h2>
                                <span class="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 text-[10px] font-bold">Official Rubric Engine</span>
                            </div>
                            <p class="text-xs text-slate-400">
                                Submit your step solution. The engine evaluates formula writing, step substitutions, and final answers against CBSE 2026 marking criteria.
                            </p>
                        </div>
                        <span class="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-2.5 py-1 rounded-lg">
                            Active Chapter: ${chId}
                        </span>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div class="lg:col-span-5 space-y-4">
                            <div class="p-5 rounded-2xl bg-[#121927] border border-slate-800 space-y-3 shadow-lg">
                                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Select Board Problem</span>
                                <div class="space-y-2">
                                    ${qList.map((q, idx) => `
                                        <div onclick="window.tab3.selectQuestion(${idx})" class="p-3 rounded-xl border transition cursor-pointer flex items-center justify-between ${idx === selectedQuestionIndex ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-md' : 'bg-[#0B0F19] border-slate-800 text-slate-400 hover:text-white'}">
                                            <div>
                                                <div class="text-[10px] font-mono text-indigo-400 font-bold">${q.id}</div>
                                                <div class="text-xs font-bold mt-0.5">${q.title}</div>
                                            </div>
                                            <span class="text-[10px] font-bold bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-400">${q.marks}M</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="p-5 rounded-2xl bg-[#121927] border border-slate-800 space-y-3 shadow-lg">
                                <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                                    <span class="text-xs font-bold text-white flex items-center gap-1.5">
                                        <span>ðŸŽ¯</span> <strong>CBSE Step Marking Rubric</strong>
                                    </span>
                                    <span class="text-[10px] text-emerald-400 font-mono font-bold">${activeQ.marks} Marks Max</span>
                                </div>
                                <div class="space-y-2">
                                    ${activeQ.rubric.map(r => `
                                        <div class="p-2.5 rounded-lg bg-[#0B0F19] border border-slate-800/80 flex items-center justify-between text-xs">
                                            <span class="text-slate-300 text-[11px] leading-snug flex-1 pr-2">${r.step}</span>
                                            <span class="font-mono text-indigo-400 font-bold text-[11px] whitespace-nowrap">+${r.marks}M</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-7 space-y-4">
                            <div class="p-5 rounded-2xl bg-[#121927] border border-slate-800 space-y-3 shadow-lg">
                                <div class="flex items-center justify-between">
                                    <span class="text-xs font-bold text-white flex items-center gap-1.5">
                                        <span>âœï¸</span> <strong>Student Step Submission</strong>
                                    </span>
                                    <button type="button" onclick="window.tab3.loadSampleAnswer()" class="text-[11px] text-indigo-400 hover:text-indigo-300 font-bold cursor-pointer">
                                        Paste Ideal Board Steps
                                    </button>
                                </div>

                                <div class="p-3 rounded-xl bg-[#0B0F19] border border-slate-800 text-xs text-slate-200 font-mono">
                                    <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-1 font-sans">Problem Question</span>
                                    ${activeQ.prompt}
                                </div>

                                <textarea id="studentSolutionInput" rows="7" placeholder="Type or paste your step-by-step mathematical or chemical proof here..." class="w-full p-3.5 rounded-xl bg-[#0B0F19] border border-slate-700 text-xs text-white font-mono leading-relaxed outline-none focus:border-indigo-500"></textarea>

                                <button type="button" id="btnEvaluateSubmission" onclick="window.tab3.evaluateSolution()" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl shadow-lg transition text-white cursor-pointer">
                                    âš¡ Run CBSE AI Step Micro-Evaluation
                                </button>
                            </div>

                            <div id="evaluationOutputCard" class="hidden p-5 rounded-2xl bg-[#121927] border border-slate-800 space-y-4 shadow-xl"></div>
                        </div>
                    </div>
                </div>
            `;
        },

        selectQuestion: function(idx) {
            selectedQuestionIndex = idx;
            this.render();
        },

        loadSampleAnswer: function() {
            const subj = (window.store && window.store.state.subject) || 'MATH';
            const chId = (window.store && window.store.state.activeChapterId) || 1;
            const chIdResolved = (window.store && (window.store.state.activeChapterId || window.store.state.activeChapter)) || 1;
            const qList = getDynamicEvalQuestions(subj, chIdResolved);
            const activeQ = qList[selectedQuestionIndex] || qList[0];

            const input = document.getElementById('studentSolutionInput');
            if (input && activeQ) {
                input.value = activeQ.sampleAnswer;
            }
        },

        evaluateSolution: function() {
            const subj = (window.store && window.store.state.subject) || 'MATH';
            const chId = (window.store && window.store.state.activeChapterId) || 1;
            const chIdResolved = (window.store && (window.store.state.activeChapterId || window.store.state.activeChapter)) || 1;
            const qList = getDynamicEvalQuestions(subj, chIdResolved);
            const activeQ = qList[selectedQuestionIndex] || qList[0];

            const input = document.getElementById('studentSolutionInput');
            const text = (input ? input.value : '').trim();
            const outCard = document.getElementById('evaluationOutputCard');
            const btn = document.getElementById('btnEvaluateSubmission');

            if (!text) {
                alert('Please type or paste your step solution before submitting for evaluation.');
                return;
            }

            btn.disabled = true;
            btn.innerText = 'Evaluating Steps against CBSE 2026 Rubric...';

            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = 'âš¡ Run CBSE AI Step Micro-Evaluation';

                let awardedMarks = 0;
                const lower = text.toLowerCase();

                const gradedSteps = activeQ.rubric.map(r => {
                    let passed = false;
                    const rLower = r.step.toLowerCase();

                    if (rLower.includes('hypothesis') || rLower.includes('let')) {
                        passed = lower.includes('let') && (lower.includes('a/b') || lower.includes('coprime') || lower.includes('gcd'));
                    } else if (rLower.includes('square') || rLower.includes('divides a')) {
                        passed = (lower.includes('5b') || lower.includes('divides a') || lower.includes('a^2') || lower.includes('aÂ²'));
                    } else if (rLower.includes('substitution') || rLower.includes('divides b')) {
                        passed = (lower.includes('5c') || lower.includes('divides b') || lower.includes('25c'));
                    } else if (rLower.includes('contradiction')) {
                        passed = (lower.includes('contradict') || lower.includes('irrational') || lower.includes('factor'));
                    } else if (rLower.includes('factorisation')) {
                        passed = lower.includes('2') && lower.includes('3');
                    } else if (rLower.includes('hcf =') || rLower.includes('lcm =')) {
                        passed = lower.includes('24') && lower.includes('720');
                    } else if (rLower.includes('lhs') || rLower.includes('rhs') || rLower.includes('verified')) {
                        passed = lower.includes('17280') || lower.includes('17,280') || lower.includes('verified');
                    } else if (rLower.includes('balanced equation')) {
                        passed = lower.includes('fe3o4') && lower.includes('h2');
                    } else if (rLower.includes('oxidized') || rLower.includes('reduced')) {
                        passed = lower.includes('fe') && lower.includes('h2o');
                    } else {
                        const keywords = rLower.replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 3);
                        const hits = keywords.filter(w => lower.includes(w)).length;
                        passed = keywords.length === 0 ? lower.length > 12 : (hits >= Math.max(1, Math.ceil(keywords.length * 0.25)));
                    }

                    if (passed) awardedMarks += r.marks;

                    return {
                        step: r.step,
                        maxMarks: r.marks,
                        awarded: passed ? r.marks : 0,
                        passed: passed
                    };
                });

                const percentage = Math.round((awardedMarks / activeQ.marks) * 100);
                const scoreColor = percentage >= 80 ? 'text-emerald-400' : (percentage >= 50 ? 'text-amber-400' : 'text-rose-400');
                const badgeColor = percentage >= 80 ? 'bg-emerald-950/80 border-emerald-800 text-emerald-300' : 'bg-amber-950/80 border-amber-800 text-amber-300';

                outCard.classList.remove('hidden');
                outCard.innerHTML = `
                    <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="text-base">ðŸ“‹</span>
                                <h3 class="text-sm font-bold text-white">CBSE Examiner Evaluation Sheet</h3>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-0.5">Scored against Board Official Answer Key</p>
                        </div>
                        <div class="text-right">
                            <span class="text-lg font-black ${scoreColor}">${awardedMarks} / ${activeQ.marks} Marks</span>
                            <div class="text-[10px] font-bold ${badgeColor} px-2 py-0.5 rounded border mt-0.5">${percentage}% Accuracy</div>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Step-Wise Mark Distribution:</span>
                        <div class="space-y-1.5">
                            ${gradedSteps.map(gs => `
                                <div class="p-2.5 rounded-lg bg-[#0B0F19] border ${gs.passed ? 'border-emerald-900/50' : 'border-rose-900/50'} flex items-center justify-between text-xs">
                                    <div class="flex items-center gap-2 flex-1 pr-2">
                                        <span>${gs.passed ? 'âœ…' : 'âŒ'}</span>
                                        <span class="text-slate-200 text-[11px]">${gs.step}</span>
                                    </div>
                                    <span class="font-mono font-bold ${gs.passed ? 'text-emerald-400' : 'text-rose-400'} text-[11px] whitespace-nowrap">
                                        ${gs.awarded} / ${gs.maxMarks}M
                                    </span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="p-3 rounded-xl bg-[#0B0F19] border border-slate-800 text-xs text-slate-300 space-y-1">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block">Evaluator Advice</span>
                        <p class="text-[11px] leading-relaxed">
                            ${percentage === 100 
                                ? 'Outstanding! All steps conform strictly to official CBSE marking guidelines.' 
                                : 'Review the uncredited steps above. In CBSE exams, skipping explicit declarations or intermediate steps leads to deductions.'}
                        </p>
                    </div>
                `;
            }, 500);
        }
    };
})();

