// js/modules/tab2_error_finder.js - CBSE Diagnostic Step Error Finder
(function() {
    const diagnosticErrorCatalog = {
                SST: {
            1: [
                {
                    id: "SST-CH1-D01",
                    question: "A student wrote: 'Giuseppe Mazzini founded Young Italy in Marseilles in 1831 and believed nations were natural units created by God. Metternich supported his revolutionary vision.' Identify the historical error.",
                    incorrectStep: "Metternich supported his revolutionary vision.",
                    correction: "Metternich strongly opposed him and famously described Mazzini as 'the most dangerous enemy of our social order.'",
                    cbseTip: "CBSE 2026 Board Trap: Metternich was an arch-conservative Austrian Chancellor who opposed nationalist revolutionaries."
                }
            ],
            2: [
                {
                    id: "SST-CH2-D01",
                    question: "A student states: 'Mahatma Gandhi withdrew the Non-Cooperation Movement after the Jallianwala Bagh incident in April 1919.' Spot the chronological/causal error.",
                    incorrectStep: "withdrew the Non-Cooperation Movement after the Jallianwala Bagh incident in April 1919.",
                    correction: "The Non-Cooperation Movement was withdrawn in February 1922 due to the violent Chauri Chaura incident, not the 1919 Jallianwala Bagh massacre.",
                    cbseTip: "Always distinguish between the trigger of the Khilafat/Non-Cooperation launch (Rowlatt/Jallianwala Bagh) and its withdrawal (Chauri Chaura)."
                }
            ]
        },
        MATH: {
            1: [
                {
                    id: "ERR-M1-01",
                    title: "Irrationality Proof Assumption Breach",
                    marks: 3,
                    question: "Prove that sqrt(5) is an irrational number.",
                    steps: [
                        { stepNum: 1, text: "Let sqrt(5) = a/b, where a, b are integers and b != 0 with gcd(a, b) = 1.", isError: false },
                        { stepNum: 2, text: "5 = a^2 / b^2 => 5b^2 = a^2. Therefore, 5 divides a^2 => 5 divides a.", isError: false },
                        { stepNum: 3, text: "Let a = 5c. Then 5b^2 = 25c^2 => b^2 = 5c^2, so 5 divides b^2 => 5 divides b.", isError: false },
                        { stepNum: 4, text: "Therefore a and b are both odd numbers, which completes the contradiction.", isError: true, explanation: "Flawed conclusion! The contradiction is that gcd(a, b) >= 5, directly contradicting the coprime assumption gcd(a, b) = 1, not that they are odd.", deduction: "-1.5 Marks (Zero deduction for proof closure)" }
                    ]
                },
                {
                    id: "ERR-M1-02",
                    title: "HCF & LCM Fundamental Theorem Fallacy",
                    marks: 2,
                    question: "Given HCF(306, 657) = 9, find LCM(306, 657) and test if HCF(a,b,c) * LCM(a,b,c) = a * b * c.",
                    steps: [
                        { stepNum: 1, text: "Using HCF(a,b) * LCM(a,b) = a * b, we have 9 * LCM = 306 * 657 => LCM = 22,338.", isError: false },
                        { stepNum: 2, text: "By extension, for three numbers p, q, r, the formula HCF(p,q,r) * LCM(p,q,r) = p * q * r holds true.", isError: true, explanation: "CBSE Classic Trap! The relationship HCF * LCM = Product holds strictly for TWO numbers only. It is FALSE for three numbers.", deduction: "-1 Mark (Formula Misapplication)" }
                    ]
                }
            ],
            2: [
                {
                    id: "ERR-M2-01",
                    title: "Relationship of Zeroes and Coefficients Sign Error",
                    marks: 3,
                    question: "Find the zeroes of p(x) = x^2 - 2x - 8 and verify the relationship with coefficients.",
                    steps: [
                        { stepNum: 1, text: "x^2 - 4x + 2x - 8 = 0 => (x - 4)(x + 2) = 0 => alpha = 4, beta = -2.", isError: false },
                        { stepNum: 2, text: "Sum of zeroes: alpha + beta = 4 + (-2) = 2. Formula check: alpha + beta = b/a = -2/1 = -2.", isError: true, explanation: "Sign Error! The formula is alpha + beta = -b/a, which gives -(-2/1) = 2. Forgetting the negative sign causes total verification mismatch.", deduction: "-1 Mark" }
                    ]
                }
            ]
        },
        SCI: {
            1: [
                {
                    id: "ERR-S1-01",
                    title: "Unbalanced Chemical State Notation",
                    marks: 2,
                    question: "Write a balanced chemical equation for the reaction between iron and steam.",
                    steps: [
                        { stepNum: 1, text: "Skeleton equation: Fe + H2O -> Fe3O4 + H2.", isError: false },
                        { stepNum: 2, text: "Balanced equation: 3Fe(s) + 4H2O(l) -> Fe3O4(s) + 4H2(g).", isError: true, explanation: "State Notation Trap! The question specifies STEAM (gas phase). Writing H2O(l) instead of H2O(g) incurs direct half-mark board deduction.", deduction: "-0.5 Mark (State Notation Penalty)" }
                    ]
                }
            ]
        }
    };

    window.tab2 = {
        render: function() {
            const container = document.getElementById('workspace-2');
            if (!container) return;

            const subj = (window.store && window.store.state.subject) || 'MATH';
            const chId = (window.store && window.store.state.activeChapterId) || (window.store && window.store.state.activeChapter) || 1;
            const cls = window.curriculumBridge ? window.curriculumBridge.getActiveClass() : 10;
            let catalogList = (cls === 10 && diagnosticErrorCatalog[subj] && diagnosticErrorCatalog[subj][chId]) || [];
            if (catalogList.length === 0 && window.curriculumBridge) {
                const ch = window.curriculumBridge.getActiveChapter(subj);
                const chKey = window.curriculumBridge.getActiveChapterKey(subj);
                if (ch) {
                    const extracted = window.curriculumBridge.extractChapterItems(ch, chKey).slice(0, 3);
                    catalogList = extracted.map((item, idx) => ({
                        id: `ERR-${chKey}-0${idx + 1}`,
                        title: `${ch.name}: Step Deduction Trap #${idx + 1}`,
                        marks: item.marks || 3,
                        question: item.prompt,
                        steps: [
                            { stepNum: 1, text: `Given & Setup from ${ch.name}: Identify boundary conditions and domain constraints.`, isError: false },
                            { stepNum: 2, text: `Direct substitution without verifying domain/sign inversion or NCERT theorem prerequisites.`, isError: true, explanation: `CBSE Class ${cls} Examiner Trap in ${ch.name}! ${item.sampleAnswer}`, deduction: `-1 Mark (Step Justification Omitted)` },
                            { stepNum: 3, text: `Final simplified conclusion stated with proper notation.`, isError: false }
                        ]
                    }));
                }
            }

            if (catalogList.length === 0) {
                container.innerHTML = `
                    <div class="p-8 rounded-2xl bg-[#121927] border border-slate-800 text-center space-y-3">
                        <span class="text-3xl">🩺</span>
                        <h3 class="text-base font-bold text-white">Diagnostic Error Finder</h3>
                        <p class="text-xs text-slate-400 max-w-md mx-auto">
                            Diagnostic problem sets for Subject <strong>${subj}</strong> (Chapter ${chId}) are being mapped to CBSE 2026 rubric blueprints. Switch to Chapter 01 or 02 to test the active diagnostic engine.
                        </p>
                    </div>
                `;
                return;
            }

            const casesHtml = catalogList.map((item, caseIdx) => `
                <div class="p-5 rounded-2xl bg-[#121927] border border-slate-800 space-y-4 shadow-lg">
                    <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div class="flex items-center gap-2">
                            <span class="px-2 py-0.5 rounded bg-rose-950/80 border border-rose-800 text-rose-300 font-mono text-[10px] font-bold">${item.id}</span>
                            <h3 class="text-sm font-bold text-white">${item.title}</h3>
                        </div>
                        <span class="text-[10px] font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">${item.marks} Board Marks</span>
                    </div>

                    <div class="p-3 rounded-xl bg-[#0B0F19] border border-slate-800 text-xs text-slate-200 font-mono">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-1 font-sans">Board Question Prompt</span>
                        ${item.question}
                    </div>

                    <div class="space-y-2">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Click on the Step Containing the Flaw:</span>
                        <div class="space-y-2" id="steps-container-${caseIdx}">
                            ${item.steps.map(st => `
                                <div class="step-card group p-3 rounded-xl border border-slate-800 bg-[#0F1523] hover:border-indigo-500 cursor-pointer transition flex items-start gap-3"
                                     onclick="window.tab2.inspectStep(${caseIdx}, ${st.stepNum}, ${st.isError})">
                                    <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-xs font-bold">Step ${st.stepNum}</span>
                                    <div class="flex-1 text-xs text-slate-300 font-mono leading-relaxed">${st.text}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div id="feedback-${caseIdx}" class="hidden p-4 rounded-xl border space-y-2 text-xs"></div>
                </div>
            `).join('');

            container.innerHTML = `
                <div class="space-y-6">
                    <div class="p-6 rounded-2xl bg-[#121927] border border-slate-800 shadow-xl flex items-center justify-between">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xl">🩺</span>
                                <h2 class="text-lg font-black text-white">Diagnostic Error Finder</h2>
                                <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 text-[10px] font-bold">Autopsy Mode</span>
                            </div>
                            <p class="text-xs text-slate-400">
                                Inspect real student submissions line by line. Pinpoint the exact step where marks are lost before appearing for your CBSE board examination.
                            </p>
                        </div>
                        <div class="text-right">
                            <span class="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-2.5 py-1 rounded-lg">
                                Active Chapter: ${chId}
                            </span>
                        </div>
                    </div>

                    <div class="space-y-4">${casesHtml}</div>
                </div>
            `;
        },

        inspectStep: function(caseIdx, stepNum, isError) {
            const subj = (window.store && window.store.state.subject) || 'MATH';
            const chId = (window.store && window.store.state.activeChapterId) || 1;
            const item = diagnosticErrorCatalog[subj][chId][caseIdx];
            const stepObj = item.steps.find(s => s.stepNum === stepNum);
            const fbBox = document.getElementById(`feedback-${caseIdx}`);

            if (!fbBox) return;

            fbBox.classList.remove('hidden');

            if (isError) {
                fbBox.className = 'p-4 rounded-xl border border-emerald-800 bg-emerald-950/40 text-emerald-200 space-y-2 block';
                fbBox.innerHTML = `
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-xs text-emerald-400 flex items-center gap-1.5">
                            <span>🎯</span> <strong>Accurate Diagnosis! Step ${stepNum} contains the fatal error.</strong>
                        </span>
                        <span class="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800 text-[10px] font-bold">
                            Penalty: ${stepObj.deduction}
                        </span>
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed font-sans">${stepObj.explanation}</p>
                `;
            } else {
                fbBox.className = 'p-4 rounded-xl border border-amber-800 bg-amber-950/40 text-amber-200 space-y-1 block';
                fbBox.innerHTML = `
                    <div class="font-bold text-xs text-amber-300 flex items-center gap-1.5">
                        <span>⚠️</span> Step ${stepNum} is mathematically and logically sound.
                    </div>
                    <p class="text-xs text-slate-300 font-sans">Look closer at subsequent transformations, assumptions, or formula signs.</p>
                `;
            }
        }
    };
})();

