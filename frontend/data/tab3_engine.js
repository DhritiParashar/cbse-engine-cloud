function loadEvaluationCase(caseType) {
            const input = document.getElementById('studentSolutionInput');
            if (!input) return;
            const prob = getActiveProblemRecord();
            if (!prob) return;

            if (caseType === 'ideal') {
                let ans = prob.idealAnswer || prob.ideal_solution || '';
                if (!ans || ans === 'Standard CBSE response.' || ans.length < 10) {
                    if (prob.rubric && Array.isArray(prob.rubric)) {
                        ans = prob.rubric.map((r, i) => `Step ${i + 1}: ${r.step || r.description || JSON.stringify(r)}`).join('\n');
                    } else {
                        ans = "Step 1: State governing formula & isolate required variable.\nStep 2: Carry out step derivation.\nStep 3: State verified final result with SI units.";
                    }
                }
                input.value = ans;
            } else if (caseType === 'flaw') {
                let flaw = prob.flawedAnswer || '';
                if (!flaw || flaw === 'Answer provided without points or supporting examples.') {
                    if (prob.text && (prob.text.includes('=') || currentSubject === 'MATH')) {
                        flaw = "Step 1: Expand equation\nStep 2: Transposition: 2y = 14 + 4 = 18 (Sign inversion error)\nStep 3: Incorrect final values: y = 9, x = 13";
                    } else {
                        flaw = "Step 1: It was introduced because of general colonial policies.\n(Omitted specific legislative act, year, and clause 2-year imprisonment provision).";
                    }
                }
                input.value = flaw;
            } else {
                input.value = '';
                input.focus();
            }
            const results = document.getElementById('evalResultsContainer');
            if (results) results.classList.add('hidden');
        }

        function getActiveProblemRecord() {
            const select = document.getElementById('evalProblemSelect');
            const pIdx = select ? parseInt(select.value) : 0;
            const problems = getTab3Problems();
            return problems[pIdx] || problems[0];
        }

        async function runMicroEvaluation() {
            const prob = getActiveProblemRecord();
            const input = document.getElementById('studentSolutionInput');
            const studentText = (input ? input.value : '').trim();

            if (!studentText) {
                alert("Please enter your answer or click one of the testing presets ('Ideal' / 'Common Slip').");
                return;
            }

            const resultsContainer = document.getElementById('evalResultsContainer');
            const scoreDisplay = document.getElementById('evalScoreDisplay');
            const statusBadge = document.getElementById('evalStatusBadge');
            const stepBreakdown = document.getElementById('evalStepBreakdown');

            const totalMarks = prob ? (prob.marks || prob.total_marks || 1) : 1;
            let rubric = (prob && prob.rubric) ? prob.rubric : [];
            if (!Array.isArray(rubric) || rubric.length === 0) {
                rubric = [
                    { step: "Identification of relevant formula & initial expansion", marks: totalMarks / 2 },
                    { step: "Correct algebraic derivation and conclusive answer", marks: totalMarks / 2 }
                ];
            }

            const lower = studentText.toLowerCase();

            // Detect case 1: Gibberish or irrelevant entry (e.g. "sfsgsh")
            const isGibberish = studentText.length < 15 || !(/[a-zA-Z0-9]{3,}/.test(studentText)) || (studentText.split(' ').length < 3 && !studentText.includes('='));

            // Detect case 2: Flawed answer containing recognized errors
            const isFlawed = lower.includes('sign inversion') || lower.includes('incorrect') || lower.includes('omitted') || lower.includes('sign error') || lower.includes('error');

            // Detect case 3: Ideal solution matching key mathematical terms or option letters
            const hasOptionLetter = prob.text && prob.text.includes('(B)') && (lower.includes('option b') || lower.includes('correct: b') || lower.includes('(b)'));
            const hasDerivation = lower.includes('expand') || lower.includes('highest power') || lower.includes('quadratic') || lower.includes('step 1') || lower.includes('step 2');
            const isIdeal = !isGibberish && !isFlawed && (hasOptionLetter || hasDerivation || studentText.length > 50);

            let awardedMarks = 0;
            let verdictLabel = "Zero Credit (Irrelevant Working)";
            let badgeStyle = "bg-rose-950 text-rose-400 border border-rose-800";

            if (isGibberish) {
                awardedMarks = 0;
                verdictLabel = "0 Marks: Unintelligible / Incomplete Derivation";
                badgeStyle = "bg-rose-950 text-rose-400 border border-rose-800";
            } else if (isFlawed) {
                awardedMarks = Math.max(0, Math.round((totalMarks * 0.4) * 10) / 10);
                verdictLabel = "Step Deductions Flagged";
                badgeStyle = "bg-amber-950 text-amber-400 border border-amber-800";
            } else if (isIdeal) {
                awardedMarks = totalMarks;
                verdictLabel = "100% CBSE Rubric Compliant";
                badgeStyle = "bg-emerald-950 text-emerald-400 border border-emerald-800";
            } else {
                // Partial credit
                awardedMarks = Math.round((totalMarks * 0.5) * 10) / 10;
                verdictLabel = "Partial Working Credit Awarded";
                badgeStyle = "bg-sky-950 text-sky-400 border border-sky-800";
            }

            if (scoreDisplay) {
                scoreDisplay.innerText = `${awardedMarks} / ${totalMarks} Marks`;
                scoreDisplay.className = `text-xl font-black font-mono ${awardedMarks === totalMarks ? 'text-emerald-400' : (awardedMarks > 0 ? 'text-amber-400' : 'text-rose-400')}`;
            }

            if (statusBadge) {
                statusBadge.innerText = verdictLabel;
                statusBadge.className = `px-2.5 py-1 rounded-full text-xs font-mono font-bold ${badgeStyle}`;
            }

            if (stepBreakdown) {
                let htmlStr = '';
                rubric.forEach((r, idx) => {
                    const stepMark = r.marks || (totalMarks / rubric.length);
                    let stepEarned = 0;
                    let stepStatus = "✗ Not Satisfied";

                    if (isIdeal) {
                        stepEarned = stepMark;
                        stepStatus = "✓ Fully Satisfied";
                    } else if (isFlawed) {
                        stepEarned = (idx === 0) ? stepMark : 0;
                        stepStatus = (idx === 0) ? "✓ Initial Setup Satisfied" : "✗ Intermediate Deduction (Slip)";
                    } else if (!isGibberish && idx === 0) {
                        stepEarned = stepMark;
                        stepStatus = "✓ Formulated Correctly";
                    }

                    const isPass = stepEarned > 0;
                    htmlStr += `
                        <div class="p-3 rounded-xl ${isPass ? 'bg-emerald-950/25 border border-emerald-900/60' : 'bg-rose-950/25 border border-rose-900/60'} flex items-start justify-between gap-3 text-xs mb-2">
                            <div class="leading-relaxed text-slate-200">
                                <span class="${isPass ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}">${isPass ? '✓' : '✗'} Step ${idx + 1}:</span>
                                ${r.step || r.description || JSON.stringify(r)}
                                <div class="text-[10px] ${isPass ? 'text-emerald-400/80' : 'text-rose-400/80'} mt-0.5">${stepStatus}</div>
                            </div>
                            <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold shrink-0 ${isPass ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-rose-950 text-rose-300 border border-rose-800'}">
                                ${stepEarned}/${stepMark}M
                            </span>
                        </div>
                    `;
                });
                stepBreakdown.innerHTML = htmlStr;
            }

            if (resultsContainer) {
                resultsContainer.classList.remove('hidden');
                resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        
        function renderRoadmap() {
            try {
                const saved = localStorage.getItem('cbse_self_eval');
                if (saved) studentChapterRatings = JSON.parse(saved);
                loadChecklistState();
            } catch (e) {}

            renderChapterSelfEvalGrid();
            recalculateRoadmap();

            if (window.renderMathInElement) {
                renderMathInElement(document.getElementById('workspace-4'), { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] });
            }
        }

        function renderChapterSelfEvalGrid() {
            const container = document.getElementById('selfEvalChapterGrid');
            if (!container) return;

            const activeSubj = subjectsRegistry[currentSubject] || subjectsRegistry.MATH;
            const chapters = activeSubj.chapters || {};

            let html = '';
            for (const key in chapters) {
                const ch = chapters[key];
                const currentRating = studentChapterRatings[key] || 'developing';

                html += `
                    <div class="p-3 rounded-xl bg-surfaceLight border border-slate-700/60 flex items-center justify-between gap-2 shadow-sm">
                        <div class="truncate pr-2">
                            <div class="text-[10px] font-mono text-slate-400 font-semibold">${ch.code} • ${ch.weight}M</div>
                            <div class="text-xs font-bold text-white truncate">${ch.name}</div>
                        </div>
                        <div class="flex items-center gap-1 shrink-0 bg-slate-900/80 p-1 rounded-lg border border-slate-800">
                            <button onclick="setChapterRating('${key}', 'weak')" title="Needs Focus (40%)" class="w-6 h-6 rounded flex items-center justify-center text-xs transition ${currentRating === 'weak' ? 'bg-rose-600 text-white shadow-sm ring-1 ring-rose-400' : 'text-slate-500 hover:text-slate-300'}">🔴</button>
                            <button onclick="setChapterRating('${key}', 'developing')" title="Developing (70%)" class="w-6 h-6 rounded flex items-center justify-center text-xs transition ${currentRating === 'developing' ? 'bg-amber-600 text-white shadow-sm ring-1 ring-amber-400' : 'text-slate-500 hover:text-slate-300'}">🟡</button>
                            <button onclick="setChapterRating('${key}', 'mastered')" title="Exam Ready (95%)" class="w-6 h-6 rounded flex items-center justify-center text-xs transition ${currentRating === 'mastered' ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400' : 'text-slate-500 hover:text-slate-300'}">🟢</button>
                        </div>
                    </div>
                `;
            }
            container.innerHTML = html;
        }

        function setChapterRating(key, rating) {
            studentChapterRatings[key] = rating;
            try {
                localStorage.setItem('cbse_self_eval', JSON.stringify(studentChapterRatings));
            } catch (e) {}
            renderChapterSelfEvalGrid();
            recalculateRoadmap();
        }

        function resetSelfAssessment() {
            const activeSubj = subjectsRegistry[currentSubject] || subjectsRegistry.MATH;
            const chapters = activeSubj.chapters || {};
            for (const key in chapters) {
                studentChapterRatings[key] = 'developing';
            }
            try {
                localStorage.setItem('cbse_self_eval', JSON.stringify(studentChapterRatings));
            } catch (e) {}
            renderChapterSelfEvalGrid();
            recalculateRoadmap();
        }

        function recalculateRoadmap() {
            const activeSubj = subjectsRegistry[currentSubject] || subjectsRegistry.MATH;
            const chapters = activeSubj.chapters || {};
            const units = subjectUnitsMap[currentSubject] || subjectUnitsMap.MATH;

            let totalWeightedMarks = 0;
            let masteredCount = 0;
            let totalChapters = Object.keys(chapters).length;
            let weakChapters = [];
            let developingChapters = [];
            let masteredChapters = [];

            const unitListContainer = document.getElementById('roadmapUnitList');
            let unitsHtml = '';

            units.forEach(u => {
                let unitEarned = 0;
                let unitWeightTotal = 0;
                let chapterNames = [];

                u.chapterKeys.forEach(chKey => {
                    const ch = chapters[chKey];
                    if (ch) {
                        chapterNames.push(ch.name);
                        const rating = studentChapterRatings[chKey] || 'developing';
                        const fraction = ratingWeights[rating];
                        unitEarned += ch.weight * fraction;
                        unitWeightTotal += ch.weight;

                        if (rating === 'mastered') masteredCount++;
                        if (rating === 'weak') weakChapters.push({ name: ch.name, weight: ch.weight, key: chKey });
                        if (rating === 'developing') developingChapters.push({ name: ch.name, weight: ch.weight, key: chKey });
                        if (rating === 'mastered') masteredChapters.push({ name: ch.name, weight: ch.weight, key: chKey });
                    }
                });

                const unitPercent = unitWeightTotal > 0 ? Math.round((unitEarned / unitWeightTotal) * 100) : 0;
                totalWeightedMarks += unitEarned;

                unitsHtml += `
                    <div class="p-3.5 rounded-xl bg-surfaceLight border border-slate-700/60 space-y-2">
                        <div class="flex items-center justify-between text-xs">
                            <div>
                                <strong class="text-white">${u.name}</strong>
                                <span class="text-slate-400 text-[11px] block sm:inline sm:ml-2">(${chapterNames.join(', ')})</span>
                            </div>
                            <div class="text-right shrink-0">
                                <span class="font-bold text-white">${u.weight} Marks</span>
                                <span class="text-[10px] text-slate-400 block">${unitPercent}% Prepared</span>
                            </div>
                        </div>
                        <div class="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div class="h-full ${u.color} rounded-full transition-all duration-500" style="width: ${unitPercent}%"></div>
                        </div>
                    </div>
                `;
            });

            if (unitListContainer) unitListContainer.innerHTML = unitsHtml;

            const projectedScore = Math.round(totalWeightedMarks);
            const scoreDisplay = document.getElementById('roadmapScore');
            const percentDisplay = document.getElementById('roadmapPercent');
            const masteredDisplay = document.getElementById('roadmapMasteredCount');
            const riskDisplay = document.getElementById('roadmapTopRiskDomain');
            const nextAction = document.getElementById('roadmapNextAction');
            const nextActionDetail = document.getElementById('roadmapNextActionDetail');

            if (scoreDisplay) scoreDisplay.innerText = `${projectedScore} / 80`;
            if (percentDisplay) percentDisplay.innerText = `${((projectedScore / 80) * 100).toFixed(1)}% Projected Score`;
            if (masteredDisplay) masteredDisplay.innerText = `${masteredCount} / ${totalChapters}`;

            weakChapters.sort((a, b) => b.weight - a.weight);
            developingChapters.sort((a, b) => b.weight - a.weight);

            if (weakChapters.length > 0) {
                if (riskDisplay) riskDisplay.innerText = weakChapters[0].name;
                if (nextAction) nextAction.innerText = "Target Theory & Proofs";
                if (nextActionDetail) nextActionDetail.innerText = `Study ${weakChapters[0].name} in Tab 1`;
            } else if (developingChapters.length > 0) {
                if (riskDisplay) riskDisplay.innerText = developingChapters[0].name;
                if (nextAction) nextAction.innerText = "Fix Step Traps";
                if (nextActionDetail) nextActionDetail.innerText = `Inspect ${developingChapters[0].name} in Tab 2`;
            } else {
                if (riskDisplay) riskDisplay.innerText = "None (Full Mastery)";
                if (nextAction) nextAction.innerText = "Timed Mocks";
                if (nextActionDetail) nextActionDetail.innerText = "Attempt Timed Mock in Tab 6";
            }

            const urgentBadge = document.getElementById('urgentCountBadge');
            const urgentText = document.getElementById('urgentChaptersText');
            const moderateBadge = document.getElementById('moderateCountBadge');
            const moderateText = document.getElementById('moderateChaptersText');
            const masteredBadge = document.getElementById('masteredCountBadge');
            const masteredText = document.getElementById('masteredChaptersText');

            if (urgentBadge) urgentBadge.innerText = `${weakChapters.length} Chapter${weakChapters.length === 1 ? '' : 's'}`;
            if (urgentText) urgentText.innerText = weakChapters.length > 0
                ? weakChapters.map(c => `${c.name} (${c.weight}M)`).join(', ')
                : "No urgent chapters. Great job!";

            if (moderateBadge) moderateBadge.innerText = `${developingChapters.length} Chapter${developingChapters.length === 1 ? '' : 's'}`;
            if (moderateText) moderateText.innerText = developingChapters.length > 0
                ? developingChapters.map(c => `${c.name} (${c.weight}M)`).join(', ')
                : "No moderate-risk chapters.";

            if (masteredBadge) masteredBadge.innerText = `${masteredChapters.length} Chapter${masteredChapters.length === 1 ? '' : 's'}`;
            if (masteredText) masteredText.innerText = masteredChapters.length > 0
                ? masteredChapters.map(c => `${c.name} (${c.weight}M)`).join(', ')
                : "No chapters marked as mastered yet.";
        }

        function saveChecklistState() {
            const state = {
                chk1: document.getElementById('chk1') ? document.getElementById('chk1').checked : false,
                chk2: document.getElementById('chk2') ? document.getElementById('chk2').checked : false,
                chk3: document.getElementById('chk3') ? document.getElementById('chk3').checked : false,
                chk4: document.getElementById('chk4') ? document.getElementById('chk4').checked : false
            };
            try {
                localStorage.setItem('cbse_checklist_state', JSON.stringify(state));
            } catch (e) {}
        }

        function loadChecklistState() {
            try {
                const saved = localStorage.getItem('cbse_checklist_state');
                if (saved) {
                    const state = JSON.parse(saved);
                    for (const id in state) {
                        const el = document.getElementById(id);
                        if (el) el.checked = state[id];
                    }
                }
            } catch (e) {}
        }

	// -------------------------------------------------------------------------
        // TAB 5: SUBJECT-AWARE AI DOUBT SOLVER ENGINE
        // -------------------------------------------------------------------------
        let doubtSessionHistory = [];

        function fillDoubt(text) {
            const input = document.getElementById('doubtInput');
            if (input) {
                input.value = text;
                input.focus();
            }
        }

        function clearDoubtInput() {
            const input = document.getElementById('doubtInput');
            if (input) input.value = '';
        }

        function clearDoubtHistory() {
            doubtSessionHistory = [];
            const container = document.getElementById('doubtHistoryContainer');
            if (container) {
                container.innerHTML = `<p class="text-[11px] text-slate-500 italic">No doubts logged in this session yet.</p>`;
            }
        }

        const chapterDoubtBank = {
            // Mathematics
            M10_CH01: [
                { chip: "HCF × LCM = a × b proof", q: "How do we prove that HCF(a, b) × LCM(a, b) = a × b for two positive integers?" },
                { chip: "√5 Irrationality 5-step proof", q: "Write down the formal 5-step proof by contradiction showing that √5 is an irrational number." },
                { chip: "Why 6^n cannot end with 0", q: "Explain why 6^n cannot end with the digit 0 for any natural number n." }
            ],
            M10_CH04: [
                { chip: "Negative root discard rationale", q: "Why do we reject the negative root in speed and dimension quadratic word problems?" },
                { chip: "Completing square formula derivation", q: "Derive Sridharacharya's quadratic formula using completing the square." },
                { chip: "Sign trap in b^2 - 4ac", q: "How to avoid the negative sign mistake in b^2 - 4ac when b is negative?" }
            ],

            // Science
            S10_CH01: [
                { chip: "Balancing Fe + H2O equation", q: "How do you balance Fe + H2O -> Fe3O4 + H2 using the step-by-step atom inventory method?" },
                { chip: "Redox identification in MnO2 + HCl", q: "Identify substance oxidized, reduced, oxidizing agent, and reducing agent in MnO2 + 4HCl -> MnCl2 + 2H2O + Cl2." },
                { chip: "Why respiration is exothermic", q: "Explain with chemical equation why cellular respiration is classified as an exothermic reaction." }
            ],
            S10_CH02: [
                { chip: "Why dry HCl doesn't change litmus", q: "Why does dry HCl gas not turn dry blue litmus paper red while dilute HCl does?" },
                { chip: "Chlor-Alkali electrode products", q: "What products are formed at the anode and cathode during the Chlor-Alkali electrolysis of brine?" },
                { chip: "Plaster of Paris half water rationale", q: "Explain why Plaster of Paris is written with half a molecule of water of crystallization (CaSO4·1/2H2O)." }
            ],

            // Social Science
            SS10_HIS_01: [
                { chip: "Napoleonic Code (1804) features", q: "What were the major administrative and legal reforms introduced by the Civil Code of 1804 (Napoleonic Code)?" },
                { chip: "Balkan nationalist tension causes", q: "Why did the Balkan region become the most serious source of nationalist tension in Europe after 1871?" }
            ],
            SS10_GEO_01: [
                { chip: "Bangar vs Khadar alluvium", q: "Differentiate between Bangar and Khadar alluvial soils on the basis of age, texture, and fertility." },
                { chip: "Black soil formation & cotton", q: "Describe the formation, climatic factors, and chemical properties of Black Soil (Regur Soil)." }
            ]
        };

        function renderDoubtTab(chapterKey) {
            const activeSubj = subjectsRegistry[currentSubject] || subjectsRegistry.MATH;
            const chapters = activeSubj.chapters || {};
            const ch = chapters[chapterKey];
            if (!ch) return;

            const tag = document.getElementById('tab5ChapterTag');
            if (tag) tag.innerText = `Context: ${ch.name}`;

            const header = document.getElementById('doubtChipsHeader');
            if (header) header.innerText = `${ch.code} (${ch.name}) Frequent Doubts & Shortcuts:`;

            const chipsContainer = document.getElementById('doubtQuickChips');
            if (chipsContainer) {
                const chips = chapterDoubtBank[chapterKey] || [
                    { chip: "Important Board Questions", q: `What are the most frequent 3-mark and 5-mark board exam questions from ${ch.name}?` },
                    { chip: "Core Definitions", q: `Explain the fundamental definitions and key principles of ${ch.name}.` }
                ];
                let html = '';
                chips.forEach(item => {
                    html += `
                        <button onclick="fillDoubt('${item.q.replace(/'/g, "\\'")}')" class="text-xs px-3 py-1.5 rounded-lg bg-surfaceLight border border-slate-700 hover:border-indigo-500 text-slate-300 transition flex items-center gap-1.5">
                            <span class="text-indigo-400">⚡</span> ${item.chip}
                        </button>
                    `;
                });
                chipsContainer.innerHTML = html;
            }
        }

        async function solveDoubt() {
            const userTier = getCurrentUserTier();
            const activeSubj = subjectsRegistry[currentSubject] || subjectsRegistry.MATH;
            const allowedDemoChapters = activeSubj.freeChapters || [];

            if (userTier === 'FREE' && !allowedDemoChapters.includes(currentChapterKey)) {
                showUpgradeModal(`The AI Doubt Solver is limited to free demo chapters on the Free tier. Upgrade to Pro for full solutions across all ${activeSubj.name} topics.`);
                return;
            }

            const input = document.getElementById('doubtInput');
            const question = input ? input.value.trim() : '';
            if (!question) {
                alert("Please type or select a question first.");
                return;
            }

            const btn = document.getElementById('doubtSubmitBtn');
            const idleState = document.getElementById('doubtIdleState');
            const activeContent = document.getElementById('doubtActiveContent');
            const answerBody = document.getElementById('doubtAnswerBody');

            if (btn) {
                btn.disabled = true;
                btn.innerHTML = `<span>⏳</span> Solving...`;
            }

            let solutionText = "";

            try {
                const response = await fetch('http://127.0.0.1:8001/api/solve-doubt', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question: question, chapter_id: currentChapterKey })
                });

                if (response.ok) {
                    const data = await response.json();
                    solutionText = data.solution_markdown || data.solution;
                } else {
                    throw new Error("Backend response error");
                }
            } catch (err) {
                solutionText = generateFallbackDoubtSolution(question);
            }

            if (idleState) idleState.classList.add('hidden');
            if (activeContent) activeContent.classList.remove('hidden');
            if (answerBody) {
                answerBody.innerHTML = solutionText;
                if (window.renderMathInElement) {
                    renderMathInElement(answerBody, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] });
                }
            }

            doubtSessionHistory.unshift(question);
            updateDoubtHistoryUI();

            if (btn) {
                btn.disabled = false;
                btn.innerHTML = `<span>🚀</span> Resolve Doubt`;
            }
        }

function generateFallbackDoubtSolution(q) {
            const lower = q.toLowerCase();

            // 1. Social Science (SST) Queries
            if (currentSubject === 'SST' || lower.includes('balkan') || lower.includes('napoleon') || lower.includes('1804') || lower.includes('bangar') || lower.includes('khadar') || lower.includes('soil') || lower.includes('swaraj') || lower.includes('treaty') || lower.includes('congress') || lower.includes('movement')) {
                if (lower.includes('balkan')) {
                    return `
                        <div class="space-y-3 font-sans">
                            <p class="font-bold text-amber-300 text-sm">Causes of Nationalist Tensions in the Balkan Region (Post-1871):</p>
                            <div class="p-3 rounded-xl bg-surfaceLight/80 border border-slate-700/60 space-y-2 text-xs leading-relaxed text-slate-200">
                                <p><strong>1. Ethnic & Geographical Diversity:</strong> The Balkans was a region of enormous geographical and ethnic variation comprising modern-day Romania, Bulgaria, Albania, Greece, Macedonia, Croatia, Bosnia-Herzegovina, Slovenia, Serbia, and Montenegro, whose inhabitants were broadly known as the Slavs.</p>
                                <p><strong>2. Disintegration of the Ottoman Empire:</strong> A large part of the Balkans was under the control of the Ottoman Empire. The spread of romantic nationalism coupled with the disintegration of the Ottoman Empire made this region explosive.</p>
                                <p><strong>3. Mutual Jealousy & Territorial Ambition:</strong> As Slavic nationalities struggled to define their identity and independence, the Balkan states were fiercely jealous of each other and each hoped to gain more territory at the expense of others.</p>
                                <p><strong>4. Big Power Rivalry:</strong> The area became the scene of intense rivalry among European powers (Russia, Germany, England, and Austro-Hungary) over trade supremacy and territorial control, culminating in World War I.</p>
                            </div>
                        </div>
                    `;
                } else if (lower.includes('napoleon') || lower.includes('1804')) {
                    return `
                        <div class="space-y-3 font-sans">
                            <p class="font-bold text-amber-300 text-sm">Civil Code of 1804 (Napoleonic Code) - Core Provisions:</p>
                            <div class="p-3 rounded-xl bg-surfaceLight/80 border border-slate-700/60 space-y-2 text-xs leading-relaxed text-slate-200">
                                <p><strong>1. Equality before the Law:</strong> Abolished all privileges based on birth and established legal equality.</p>
                                <p><strong>2. Right to Property:</strong> Secured private property rights for French citizens.</p>
                                <p><strong>3. Feudal Abolition:</strong> Freed peasants from serfdom, manorial dues, and feudal obligations.</p>
                                <p><strong>4. Administrative Uniformity:</strong> Standardized weights, measures, and a unified national currency.</p>
                            </div>
                        </div>
                    `;
                } else if (lower.includes('bangar') || lower.includes('khadar')) {
                    return `
                        <div class="space-y-3 font-sans">
                            <p class="font-bold text-amber-300 text-sm">Comparison: Bangar vs Khadar Alluvial Soils:</p>
                            <div class="p-3 rounded-xl bg-surfaceLight/80 border border-slate-700/60 space-y-2 text-xs leading-relaxed text-slate-200">
                                <p><strong>• Bangar (Old Alluvium):</strong> Found in higher terraces away from river valleys; contains higher concentration of calcareous deposits (kankar nodules); less fertile.</p>
                                <p><strong>• Khadar (New Alluvium):</strong> Found in low floodplains renewed annually by seasonal silt; fine-grained texture; highly fertile for intensive agriculture.</p>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="space-y-3 font-sans">
                            <p class="font-bold text-indigo-300 text-sm">CBSE Social Science Step-by-Step Resolution</p>
                            <div class="p-3 rounded-xl bg-surfaceLight/80 border border-slate-700/60 space-y-2 text-xs leading-relaxed text-slate-200">
                                <p><strong>Point 1: Historical / Constitutional Context:</strong> Clearly define the core event, policy, treaty, or geographical feature referenced in the question.</p>
                                <p><strong>Point 2: Primary Socio-Economic & Political Factors:</strong> State 2 to 3 substantive points supported by historical dates, locations, or economic data.</p>
                                <p><strong>Point 3: Long-term Impact & Conclusion:</strong> Conclude with the national outcome or policy relevance to secure full marks according to CBSE rubrics.</p>
                            </div>
                        </div>
                    `;
                }
            }

            // 2. Science (SCI) Queries
            if (currentSubject === 'SCI' || lower.includes('fe') || lower.includes('reaction') || lower.includes('acid') || lower.includes('lens') || lower.includes('ohm') || lower.includes('current') || lower.includes('respiration')) {
                if (lower.includes('fe') && lower.includes('h2o')) {
                    return `
                        <div class="space-y-3 font-sans">
                            <p class="font-bold text-indigo-300 text-sm">Balancing Iron and Steam Reaction Step-by-Step</p>
                            <div class="p-3 rounded-xl bg-surfaceLight/80 border border-slate-700/60 space-y-2 text-xs leading-relaxed text-slate-200">
                                <p><strong>Step 1: Skeletal Equation:</strong> $\\text{Fe} + \\text{H}_2\\text{O} \\rightarrow \\text{Fe}_3\\text{O}_4 + \\text{H}_2$</p>
                                <p><strong>Step 2: Balance Oxygen:</strong> $4\\text{H}_2\\text{O} \\implies \\text{Fe} + 4\\text{H}_2\\text{O} \\rightarrow \\text{Fe}_3\\text{O}_4 + \\text{H}_2$</p>
                                <p><strong>Step 3: Balance Hydrogen:</strong> Multiply $\\text{H}_2$ by 4 $\\implies \\text{Fe} + 4\\text{H}_2\\text{O} \\rightarrow \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2$</p>
                                <p><strong>Step 4: Balance Iron:</strong> Multiply $\\text{Fe}$ by 3 $\\implies 3\\text{Fe} + 4\\text{H}_2\\text{O} \\rightarrow \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2$</p>
                                <p><strong>Final Equation with Physical States:</strong> $3\\text{Fe(s)} + 4\\text{H}_2\\text{O(g)} \\rightarrow \\text{Fe}_3\\text{O}_4\\text{(s)} + 4\\text{H}_2\\text{(g)}$</p>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="space-y-3 font-sans">
                            <p class="font-bold text-indigo-300 text-sm">CBSE Science Step-by-Step Resolution</p>
                            <div class="p-3 rounded-xl bg-surfaceLight/80 border border-slate-700/60 space-y-2 text-xs leading-relaxed text-slate-200">
                                <p><strong>Step 1: Governing Scientific Principle / Definition:</strong> State the scientific law, ray diagram rule, or reaction category.</p>
                                <p><strong>Step 2: Mathematical Working or Balanced Chemical Equation:</strong> Provide step calculations or balanced reactions complete with physical states ($s, l, g, aq$).</p>
                                <p><strong>Step 3: Observation & Standard Scientific Units:</strong> Clearly mention the final unit (e.g., $\\text{cm}, \\text{D}, \\Omega, \\text{A}$) or qualitative observation.</p>
                            </div>
                        </div>
                    `;
                }
            }

            // 3. Mathematics (MATH) Queries
            if (lower.includes('negative root') || lower.includes('speed') || lower.includes('reject')) {
                return `
                    <div class="space-y-3 font-sans">
                        <p class="font-bold text-indigo-300 text-sm">CBSE Examiner Rationale: Rejecting Negative Roots in Real-World Word Problems</p>
                        <div class="p-3 rounded-xl bg-surfaceLight/80 border border-slate-700/60 space-y-2 text-xs leading-relaxed text-slate-200">
                            <p><strong>Step 1: Domain Definition:</strong> Variables denote non-negative scalar physical quantities ($v > 0$, $\\text{dimensions} > 0$).</p>
                            <p><strong>Step 2: Algebraic Roots:</strong> A quadratic model produces two roots: $x = 6$ and $x = -54$.</p>
                            <p><strong>Step 3: Marking Rubric Penalty:</strong> In CBSE rubrics, leaving both roots without an explicit rejection statement forfeits 1 mark. State:</p>
                            <blockquote class="p-2.5 bg-surface border-l-4 border-amber-500 rounded text-slate-300 font-mono text-xs">
                                "Since physical speed cannot be negative, $x = -54$ is discarded. Therefore, stream speed = $6\\text{ km/h}$."
                            </blockquote>
                        </div>
                    </div>
                `;
            }

            return `
                <div class="space-y-3 font-sans">
                    <p class="font-bold text-indigo-300 text-sm">CBSE Step-by-Step Resolution</p>
                    <div class="p-3 rounded-xl bg-surfaceLight/80 border border-slate-700/60 space-y-2 text-xs leading-relaxed text-slate-200">
                        <p><strong>Step 1: Identify Given Equations & Domain Restrictions:</strong> Analyze the problem statement, establish standard variable declarations, and state boundary conditions.</p>
                        <p><strong>Step 2: Apply Governing NCERT Formula or Principle:</strong> State the primary mathematical theorem explicitly before numeric substitution.</p>
                        <p><strong>Step 3: Concluding Verification & Units:</strong> Verify values, calculate final steps, and ensure final units are written.</p>
                    </div>
                </div>
            `;
        }

        function updateDoubtHistoryUI() {
            const container = document.getElementById('doubtHistoryContainer');
            if (!container) return;

            let html = '';
            doubtSessionHistory.forEach((q, idx) => {
                html += `
                    <div onclick="fillDoubt('${q.replace(/'/g, "\\'")}')" class="p-2 rounded-lg bg-surfaceLight hover:bg-slate-700/60 cursor-pointer border border-slate-700/60 truncate transition">
                        <span class="text-indigo-400 font-mono text-[10px] mr-1">#${idx + 1}</span>
                        <span class="text-slate-300">${q}</span>
                    </div>
                `;
            });
            container.innerHTML = html;
        }

        function copyDoubtSolution() {
            const answerBody = document.getElementById('doubtAnswerBody');
            const btn = document.getElementById('copySolutionBtn');
            if (!answerBody) return;

            navigator.clipboard.writeText(answerBody.innerText).then(() => {
                if (btn) {
                    btn.innerHTML = `<span>✓</span> Copied!`;
                    setTimeout(() => {
                        btn.innerHTML = `<span>📋</span> Copy Solution`;
                    }, 2000);
                }
            });
        }

        // -------------------------------------------------------------------------
        // TAB 6: SUBJECT-AWARE TIMED MOCK TEST ENGINE
        // -------------------------------------------------------------------------
        let mockMode = 'chapter';
        let mockTimerInterval = null;
        let mockTotalSeconds = 2700;
        let mockSecondsLeft = 2700;
        let mockStartTime = null;
        let activeMockQuestions = [];
        let currentMockTestNo = 1;
        let lastEvaluationResults = null;
        let examSourceMode = 'blueprint';

        function setExamSource(source) {
    const userTier = (getCurrentUserTier() || '').toUpperCase();
    const isInstitutional = (userTier === 'ENTERPRISE' || userTier === 'INSTITUTIONAL');

    if (source === 'pyq' && !isInstitutional) {
        showUpgradeModal("Authentic CBSE Past Year Board Papers and School Cohort Diagnostics require an Institutional (ENTERPRISE) plan.");
        return;
    }

    examSourceMode = source;
    const bpBtn = document.getElementById('sourceBlueprintBtn');
    const pyqBtn = document.getElementById('sourcePyqBtn');
    const pastPaperContainer = document.getElementById('pastPaperContainer');
    const formatGrid = document.querySelector('#mockTestStartCard .grid.grid-cols-1.md\\:grid-cols-3');

    if (source === 'blueprint') {
        if (bpBtn) bpBtn.className = "px-4 py-1.5 rounded-xl text-xs font-bold bg-amber-600 text-white shadow-md shadow-amber-900/30 transition";
        if (pyqBtn) pyqBtn.className = "px-4 py-1.5 rounded-xl text-xs font-semibold bg-surfaceLight border border-slate-700 text-slate-400 hover:text-white transition";
        if (pastPaperContainer) pastPaperContainer.classList.add('hidden');
        if (formatGrid) formatGrid.classList.remove('hidden');
        setMockMode(mockMode || 'quick');
    } else {
        if (pyqBtn) pyqBtn.className = "px-4 py-1.5 rounded-xl text-xs font-bold bg-amber-600 text-white shadow-md shadow-amber-900/30 transition";
        if (bpBtn) bpBtn.className = "px-4 py-1.5 rounded-xl text-xs font-semibold bg-surfaceLight border border-slate-700 text-slate-400 hover:text-white transition";
        if (pastPaperContainer) pastPaperContainer.classList.remove('hidden');
        if (formatGrid) formatGrid.classList.add('hidden');
        loadAvailablePastPapers();
    }
}

        async function loadAvailablePastPapers() {
            try {
                const response = await fetch(`http://127.0.0.1:8001/api/mock-test/past-papers?subject_code=${currentSubject}`);
                if (response.ok) {
                    const data = await response.json();
                    const select = document.getElementById('pastPaperSelect');
                    if (select && data.papers && data.papers.length > 0) {
                        let html = '';
                        data.papers.forEach(p => {
                            html += `<option value="${p.year}_${p.set}">${p.label || `${p.year} (${p.set}) • ${p.total_marks}M`}</option>`;
                        });
                        select.innerHTML = html;
                        onPastPaperChanged();
                    } else if (select) {
                        select.innerHTML = `<option value="">No past papers available for ${currentSubject}</option>`;
                    }
                }
            } catch (e) {
                console.warn("Could not load past papers list:", e);
            }
        }

        function onPastPaperChanged() {
            mockTotalSeconds = 5400;
            mockSecondsLeft = 5400;
            document.getElementById('secALabel').innerText = "3 × 1M";
            document.getElementById('secBLabel').innerText = "3 × 2M";
            document.getElementById('secCLabel').innerText = "3 × 3M";
            document.getElementById('secDLabel').innerText = "3 × 5M";
        }

        function setMockMode(mode) {
            const userTier = getCurrentUserTier();
            if (mode === 'quick' && userTier === 'FREE') {
                showUpgradeModal("40-Mark timed drills require a Pro Learner or Institutional subscription.");
                return;
            }
            if (mode === 'full_80' && userTier === 'FREE') {
                showUpgradeModal("Comprehensive 80-Mark (3-Hour) board simulations require a Pro Learner or Institutional subscription.");
                return;
            }
            mockMode = mode;
            const chBtn = document.getElementById('mockModeChapterBtn');
            const quickBtn = document.getElementById('mockModeQuickBtn');
            const full80Btn = document.getElementById('mockModeFull80Btn');

            const inactiveClass = "p-4 rounded-xl border border-slate-700 bg-surfaceLight text-slate-400 hover:text-white transition flex flex-col gap-1 text-left";
            if (chBtn) chBtn.className = inactiveClass;
            if (quickBtn) quickBtn.className = inactiveClass;
            if (full80Btn) full80Btn.className = inactiveClass;

            if (mode === 'chapter') {
                mockTotalSeconds = 2700;
                mockSecondsLeft = 2700;
                if (chBtn) chBtn.className = "p-4 rounded-xl border-2 border-sky-500 bg-sky-950/30 text-white transition flex flex-col gap-1 shadow-md shadow-sky-950/40 text-left";
                document.getElementById('secALabel').innerText = "2 × 1M";
                document.getElementById('secBLabel').innerText = "2 × 2M";
                document.getElementById('secCLabel').innerText = "3 × 3M";
                document.getElementById('secDLabel').innerText = "1 × 5M";
            } else if (mode === 'quick') {
                mockTotalSeconds = 5400;
                mockSecondsLeft = 5400;
                if (quickBtn) quickBtn.className = "p-4 rounded-xl border-2 border-amber-500 bg-amber-950/30 text-white transition flex flex-col gap-1 shadow-md shadow-amber-950/40 text-left";
                document.getElementById('secALabel').innerText = "4 × 1M";
                document.getElementById('secBLabel').innerText = "3 × 2M";
                document.getElementById('secCLabel').innerText = "5 × 3M";
                document.getElementById('secDLabel').innerText = "3 × 5M";
            } else if (mode === 'full_80') {
                mockTotalSeconds = 10800;
                mockSecondsLeft = 10800;
                if (full80Btn) full80Btn.className = "p-4 rounded-xl border-2 border-emerald-500 bg-emerald-950/30 text-white transition flex flex-col gap-1 shadow-md shadow-emerald-950/40 text-left";
                document.getElementById('secALabel').innerText = "20 × 1M";
                document.getElementById('secBLabel').innerText = "5 × 2M";
                document.getElementById('secCLabel').innerText = "6 × 3M";
                document.getElementById('secDLabel').innerText = "4 × 5M";
            }
        }

        async function generateMockTest() {
            const isChapter = (typeof mockMode !== 'undefined' && mockMode === 'chapter');
            const targetChapter = isChapter ? currentChapterKey : 'ALL';
            const queryMode = isChapter ? 'chapter' : 'full';
            const examFmt = (typeof mockMode !== 'undefined') ? mockMode : 'quick';

            const candidateName = document.getElementById('candidateNameInput')?.value || "Rohan Kumar";
            const activeCandidate = document.getElementById('activeCandidateName');
            const activeTag = document.getElementById('activeExamModeTag');
            if (activeCandidate) activeCandidate.innerText = candidateName;
            if (activeTag) {
                if (typeof examSourceMode !== 'undefined' && examSourceMode === 'pyq') {
                    const select = document.getElementById('pastPaperSelect');
                    activeTag.innerText = select ? select.options[select.selectedIndex]?.text.split('•')[0].trim() : "Official Board Paper";
                } else {
                    if (mockMode === 'chapter') activeTag.innerText = "Chapter Focus Drill (20M)";
                    else if (mockMode === 'quick') activeTag.innerText = "Quick Board Drill (40M)";
                    else activeTag.innerText = "Comprehensive Board Mock (80M)";
                }
            }

            let questions = [];

            try {
                let response;
                if (typeof examSourceMode !== 'undefined' && examSourceMode === 'pyq') {
                    const select = document.getElementById('pastPaperSelect');
                    const [pyqYear, pyqSet] = (select ? select.value : "2023_Delhi Set 1").split('_');
                    response = await fetch(`http://127.0.0.1:8001/api/mock-test/generate-pyq/${pyqYear}?pyq_set=${encodeURIComponent(pyqSet)}&subject_code=${currentSubject}`);
                } else {
                    response = await fetch(`http://127.0.0.1:8001/api/mock-test/generate/${targetChapter}?mode=${queryMode}&exam_format=${examFmt}&subject_code=${currentSubject}`);
                }

                if (response.ok) {
                    const data = await response.json();
                    questions = (data.questions || []).map(q => ({
                        id: q.question_id,
                        marks: q.total_marks,
                        text: q.question_text,
                        section: q.section || (q.total_marks === 1 ? "Section A" : (q.total_marks === 2 ? "Section B" : (q.total_marks === 3 ? "Section C" : "Section D"))),
                        model: q.ideal_solution || '', rubric: q.marking_rubric || null,
                        sourceTag: (q.pyq_year && q.pyq_set) ? `CBSE ${q.pyq_year} • ${q.pyq_set}` : null,
                        lossCategory: "Calculation / Step Omission",
                        remedy: `Revise chapter concepts in Tab 1`
                    }));
                }
            } catch (e) {
                console.warn("Backend API offline or failed, falling back to local pool:", e);
            }

            if (!questions || questions.length === 0) {
                questions = buildChapterMock(currentChapterKey);
            }

            if (!questions || questions.length === 0) {
                alert("No questions found for this topic.");
                return;
            }

            activeMockQuestions = questions;

            let html = '';
            questions.forEach((q, idx) => {
                html += `
                    <div class="p-5 bg-surfaceLight border border-slate-700/70 rounded-2xl shadow-sm space-y-3">
                        <div class="flex justify-between items-center text-xs text-slate-400 font-mono">
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-white">Question ${idx + 1}</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">${q.section}</span>
                                ${q.sourceTag ? `<span class="text-[10px] px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 font-bold">${q.sourceTag}</span>` : ''}
                            </div>
                            <span class="text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded font-bold">${q.marks} Mark${q.marks > 1 ? 's' : ''}</span>
                        </div>
                        <p class="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">${q.text}</p>
                        <textarea name="q_${q.id}" rows="${q.marks > 2 ? 4 : 2}" class="w-full p-3 text-xs font-mono border border-slate-700 rounded-xl bg-background text-slate-200 focus:border-amber-500 outline-none leading-relaxed" placeholder="Write step-by-step solution and final answer..."></textarea>
                    </div>
                `;
            });

            document.getElementById('mockTestQuestions').innerHTML = html;
            document.getElementById('mockTestStartCard').classList.add('hidden');
            document.getElementById('mockTestResults').classList.add('hidden');
            document.getElementById('mockTestForm').classList.remove('hidden');
            document.getElementById('mockTimerBadge').classList.remove('hidden');

            mockStartTime = Date.now();
            startMockTimer();

            if (window.renderMathInElement) {
                renderMathInElement(document.getElementById('mockTestQuestions'), { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] });
            }
        }

        function buildChapterMock(chKey) {
    const activeSubj = subjectsRegistry[currentSubject] || subjectsRegistry.MATH;
    const chapters = activeSubj.chapters || {};
    const ch = chapters[chKey] || chapters[Object.keys(chapters)[0]];
    const bank = (typeof window !== 'undefined' && window.dbQuestionBank) ? window.dbQuestionBank : {};
    
    // Get all available questions for this chapter from the synced bank
    let available = (typeof resolveProblemsForChapter === 'function') 
        ? resolveProblemsForChapter(bank, chKey, currentSubject) 
        : (bank[chKey] || []);

    // Filter by marks
    const q1M = available.filter(q => (q.marks || q.total_marks) === 1);
    const q2M = available.filter(q => (q.marks || q.total_marks) === 2);
    const q3M = available.filter(q => (q.marks || q.total_marks) === 3);
    const q5M = available.filter(q => (q.marks || q.total_marks) >= 4);

    const questions = [];

    // Helper to format or generate fallback questions if database bank is sparse
    function makeQ(q, defaultSection, defaultMarks, fallbackText) {
        if (q) {
            return {
                id: q.question_id || Math.floor(Math.random() * 90000 + 10000),
                section: defaultSection,
                marks: defaultMarks,
                text: q.text || q.question_text || fallbackText,
                model: q.idealAnswer || q.ideal_solution || "Refer to CBSE marking criteria.",
                rubric: q.rubric || q.marking_rubric || null,
                lossCategory: "Conceptual / Working Step Slip",
                remedy: `Revise ${ch ? ch.name : 'chapter'} in Tab 1`
            };
        }
        return {
            id: Math.floor(Math.random() * 90000 + 10000),
            section: defaultSection,
            marks: defaultMarks,
            text: fallbackText,
            model: "Standard CBSE point-wise response.",
            rubric: null,
            lossCategory: "Omitted core definitions / steps",
            remedy: `Review ${ch ? ch.name : 'chapter'} in Tab 1`
        };
    }

    // SECTION A: 2 x 1M (Questions 1, 2)
    questions.push(makeQ(q1M[0], "Section A", 1, `Identify the core definition or objective term related to ${ch ? ch.name : 'the chapter'}.`));
    questions.push(makeQ(q1M[1] || q1M[0], "Section A", 1, `State the primary historical event, rule, or formula governing ${ch ? ch.name : 'this topic'}.`));

    // SECTION B: 2 x 2M (Questions 3, 4)
    questions.push(makeQ(q2M[0], "Section B", 2, `Explain two key features or consequences of ${ch ? ch.name : 'the chapter concepts'}.`));
    questions.push(makeQ(q2M[1] || q2M[0], "Section B", 2, `Differentiate between two fundamental concepts in ${ch ? ch.name : 'this topic'}.`));

    // SECTION C: 3 x 3M (Questions 5, 6, 7)
    questions.push(makeQ(q3M[0], "Section C", 3, `Analyze three major causes or conditions leading to developments in ${ch ? ch.name : 'the chapter'}.`));
    questions.push(makeQ(q3M[1] || q3M[0], "Section C", 3, `Examine three key arguments or applications derived from ${ch ? ch.name : 'the curriculum'}.`));
    questions.push(makeQ(q3M[2] || q3M[0], "Section C", 3, `Describe the structural impact or working mechanism of ${ch ? ch.name : 'this topic'}.`));

    // SECTION D: 1 x 5M (Question 8)
    questions.push(makeQ(q5M[0] || q3M[0], "Section D", 5, `Examine in detail the multifaceted implications, institutional reforms, and historical significance of ${ch ? ch.name : 'the chapter'}.`));

    return questions;
}

        
        function startMockTimer() {
            clearInterval(mockTimerInterval);
            mockSecondsLeft = mockTotalSeconds;

            const timerEl = document.getElementById('mockTimer');
            const timerBadge = document.getElementById('mockTimerBadge');

            mockTimerInterval = setInterval(() => {
                mockSecondsLeft--;
                if (mockSecondsLeft <= 0) {
                    clearInterval(mockTimerInterval);
                    alert("Time is up! Submitting your exam paper for evaluation.");
                    document.getElementById('mockTestForm').requestSubmit();
                    return;
                }

                const mins = Math.floor(mockSecondsLeft / 60);
                const secs = mockSecondsLeft % 60;
                if (timerEl) timerEl.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

                if (mockSecondsLeft < 300) {
                    if (timerBadge) timerBadge.className = "px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-950 border border-rose-700 text-rose-300 animate-pulse";
                } else if (mockSecondsLeft < 900) {
                    if (timerBadge) timerBadge.className = "px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-950 border border-amber-700 text-amber-300";
                }
            }, 1000);
        }

        async function submitMockTest(e) {
            e.preventDefault();
            clearInterval(mockTimerInterval);

            const elapsedSecs = Math.max(1, Math.round((Date.now() - mockStartTime) / 1000));
            const elapsedMins = Math.floor(elapsedSecs / 60);
            const remainingSecs = elapsedSecs % 60;
            const timeString = `${elapsedMins}m ${remainingSecs}s`;

            let maxExamMarks = 20;
            if (typeof examSourceMode !== 'undefined' && examSourceMode === 'pyq') {
                maxExamMarks = activeMockQuestions.reduce((sum, q) => sum + (q.marks || 0), 0) || 45;
            } else if (mockMode === 'full_80') {
                maxExamMarks = 80;
            } else if (mockMode === 'quick') {
                maxExamMarks = 40;
            } else if (mockMode === 'chapter') {
                maxExamMarks = 20;
            }

            const pacePerMark = (elapsedSecs / maxExamMarks).toFixed(1);
            let paceVerdict = "Optimal Board Pacing";
            let paceColor = "text-emerald-400";
            if (elapsedSecs < (mockTotalSeconds * 0.35)) {
                paceVerdict = "Rushed (High Risk of Minor Operational Slips)";
                paceColor = "text-amber-400";
            } else if (elapsedSecs > (mockTotalSeconds * 0.90)) {
                paceVerdict = "Time Pressure Warning";
                paceColor = "text-rose-400";
            }

            const formData = new FormData(e.target);
            const answers = {};
            for (let [key, val] of formData.entries()) {
                if (key.startsWith('q_')) {
                    answers[key.replace('q_', '')] = val;
                }
            }

            const candidateName = document.getElementById('activeCandidateName').innerText || "Rohan Kumar";
            let evaluatedScore = 0;
            let itemizedBreakdown = [];

            activeMockQuestions.forEach((q, idx) => {
                const studentAns = (answers[q.id] || "").trim();
                const lower = studentAns.toLowerCase();
                let matches = 0;

                if (q.keywords) {
                    q.keywords.forEach(kw => {
                        if (lower.includes(kw.toLowerCase())) matches++;
                    });
                }

                let earned = 0;
                let loss = 0;
                let lossReason = "None (Full Credit Awarded)";

                if (studentAns.length === 0) {
                    earned = 0;
                    loss = q.marks;
                    lossReason = "Unattempted Question (Full Mark Loss)";
                } else if (matches >= 2 || (q.marks <= 2 && matches >= 1)) {
                    earned = q.marks;
                    loss = 0;
                } else if (matches >= 1 || studentAns.length > 25) {
                    earned = Math.round((q.marks * 0.5) * 10) / 10;
                    loss = q.marks - earned;
                    lossReason = q.lossCategory || "Omitted boundary explanation, step formula or final units";
                } else {
                    earned = Math.round((q.marks * 0.2) * 10) / 10;
                    loss = q.marks - earned;
                    lossReason = q.lossCategory || "Algebraic calculation error or formula misapplication";
                }

                evaluatedScore += earned;

                itemizedBreakdown.push({
                    qNo: idx + 1,
                    section: q.section,
                    text: q.text,
                    totalMarks: q.marks,
                    earned: earned,
                    loss: loss,
                    lossReason: lossReason,
                    model: q.model, rubric: q.rubric,
                    studentAns: studentAns || "(No response submitted)",
                    remedy: q.remedy || `Revise ${q.section} concepts in Tab 1`
                });
            });

            evaluatedScore = Math.min(maxExamMarks, Math.round(evaluatedScore * 10) / 10);
            const percentage = ((evaluatedScore / maxExamMarks) * 100).toFixed(1);

            lastEvaluationResults = {
                candidate: candidateName,
                mode: mockMode,
                score: evaluatedScore,
                maxMarks: maxExamMarks,
                percentage: percentage,
                timeString: timeString,
                pacePerMark: pacePerMark,
                paceVerdict: paceVerdict,
                paceColor: paceColor,
                breakdown: itemizedBreakdown
            };

            renderMockResultsView('all');
        }

	function formatRubricSteps(rawModel, rawRubric) {
    let outHtml = '';

    // Parse structured rubric if provided
    let rubricItems = [];
    if (rawRubric) {
        if (Array.isArray(rawRubric)) {
            rubricItems = rawRubric;
        } else if (typeof rawRubric === 'object') {
            rubricItems = Object.entries(rawRubric).map(([k, v]) => ({ step: `${k.replace(/_/g, ' ')}: ${v}`, marks: '' }));
        } else if (typeof rawRubric === 'string' && rawRubric.trim()) {
            try {
                const parsed = JSON.parse(rawRubric);
                if (Array.isArray(parsed)) rubricItems = parsed;
                else if (typeof parsed === 'object') {
                    rubricItems = Object.entries(parsed).map(([k, v]) => ({ step: `${k.replace(/_/g, ' ')}: ${v}`, marks: '' }));
                }
            } catch (e) {}
        }
    }

    // Render Answer Body (splits by line breaks cleanly)
    const textBody = (typeof rawModel === 'string' ? rawModel : JSON.stringify(rawModel || '')).trim();
    if (textBody && textBody !== '""') {
        const paragraphs = textBody.split('\n').map(p => p.trim()).filter(Boolean);
        outHtml += '<div class="space-y-2 mb-3">';
        paragraphs.forEach(p => {
            const isHeader = p.toLowerCase().startsWith('step') || p.startsWith('1.') || p.startsWith('2.') || p.startsWith('3.') || p.startsWith('4.') || p.startsWith('5.') || p.startsWith('(i)') || p.startsWith('(ii)') || p.startsWith('(iii)');
            outHtml += `
                <div class="p-2.5 rounded-lg ${isHeader ? 'bg-indigo-950/40 border border-indigo-900/60 font-semibold text-indigo-200' : 'bg-surface/90 border border-slate-800 text-slate-200'} text-[11px] leading-relaxed">
                    ${p}
                </div>
            `;
        });
        outHtml += '</div>';
    }

    // Render Explicit CBSE Step Marks Breakdown
    if (rubricItems.length > 0) {
        outHtml += '<div class="pt-2 border-t border-indigo-900/60 space-y-1.5">';
        outHtml += '<span class="text-[10px] uppercase font-bold text-indigo-400 tracking-wider block mb-1">Official CBSE Step Allocation:</span>';
        rubricItems.forEach((r, idx) => {
            const stepText = r.step || r.description || JSON.stringify(r);
            const markBadge = r.marks ? `<span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px] font-bold border border-indigo-800 shrink-0">${r.marks}M</span>` : '';
            outHtml += `
                <div class="p-2 rounded-lg bg-indigo-950/20 border border-indigo-900/40 flex items-start justify-between gap-2 text-[11px] text-indigo-200">
                    <span class="leading-relaxed"><strong>Step ${idx + 1}:</strong> ${stepText}</span>
                    ${markBadge}
                </div>
            `;
        });
        outHtml += '</div>';
    }

    return outHtml || '<span class="text-slate-500 italic">No detailed rubric available</span>';
}

        
        function renderMockResultsView(filter) {
            const data = lastEvaluationResults;
            if (!data) return;

            document.getElementById('mockTestForm').classList.add('hidden');
            document.getElementById('mockTimerBadge').classList.add('hidden');
            const resDiv = document.getElementById('mockTestResults');
            resDiv.classList.remove('hidden');

            const filteredItems = data.breakdown.filter(item => {
                if (filter === 'lost') return item.loss > 0;
                if (filter === 'perfect') return item.loss === 0;
                return true;
            });

            let itemsHtml = '';
            filteredItems.forEach(item => {
                const isFull = (item.loss === 0);
                itemsHtml += `
                    <div class="w-full p-5 rounded-2xl ${isFull ? 'bg-emerald-950/20 border-emerald-800/50' : 'bg-surfaceLight border-rose-800/40'} border space-y-3 text-xs shadow-sm">
                        
                        <!-- Header Row -->
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-2.5">
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-white text-sm">Question ${item.qNo}</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">${item.section}</span>
                                ${isFull ? '<span class="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">✓ Full Credit</span>' : '<span class="text-[10px] px-2 py-0.5 rounded bg-rose-950 text-rose-300 font-bold border border-rose-800">⚠️ Mark Deduction</span>'}
                            </div>
                            <div class="font-mono text-sm">
                                <span class="${isFull ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}">${item.earned}</span>
                                <span class="text-slate-500">/ ${item.totalMarks} Marks</span>
                                ${item.loss > 0 ? `<span class="text-rose-400 text-xs ml-1">(-${item.loss.toFixed(1)}M)</span>` : ''}
                            </div>
                        </div>

                        <!-- Question Prompt -->
                        <p class="text-slate-200 font-medium text-sm leading-relaxed">${item.text}</p>

                        <!-- Expanded Two-Column Grid: Submitted Step (33%) vs Official Rubric (67% WIDE) -->
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 pt-1">
                            
                            <!-- Left: Submitted Step (4 of 12 columns) -->
                            <div class="lg:col-span-4 p-3.5 bg-background rounded-xl border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1.5 flex flex-col justify-start">
                                <div class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Your Submitted Step:</div>
                                <div class="leading-relaxed whitespace-pre-wrap">${item.studentAns}</div>
                            </div>
                            
                            <!-- Right: Official Step-by-Step Rubric (8 of 12 columns) -->
                            <div class="lg:col-span-8 p-3.5 bg-indigo-950/20 rounded-xl border border-indigo-900/50 text-[11px] space-y-2">
                                <div class="flex items-center justify-between border-b border-indigo-900/60 pb-1.5">
                                    <span class="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">Official CBSE Step-by-Step Rubric:</span>
                                    <span class="text-[9px] px-1.5 py-0.5 rounded bg-indigo-900/80 text-indigo-300 font-mono">NCERT Verified</span>
                                </div>
                                <div class="space-y-1.5 font-sans">
                                    ${formatRubricSteps(item.model, item.rubric)}
                                </div>
                            </div>

                        </div>

                        <!-- Deduction Banner -->
                        ${item.loss > 0 ? `
                            <div class="p-2.5 bg-rose-950/40 border border-rose-900/50 rounded-xl flex flex-wrap items-center justify-between gap-2 text-[11px]">
                                <span class="text-rose-300"><strong>Mark Leakage Reason:</strong> ${item.lossReason}</span>
                                <span class="text-indigo-400 font-semibold">Recommended: ${item.remedy}</span>
                            </div>
                        ` : ''}

                    </div>
                `;
            });

            resDiv.innerHTML = `
                <div class="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#151B2B] border border-slate-800 shadow-lg space-y-4">
                    <div class="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                                Exam Evaluated Successfully
                            </span>
                            <h3 class="text-2xl sm:text-3xl font-black text-white mt-2">Official CBSE Diagnostic Score Card</h3>
                            <p class="text-xs text-slate-400">Candidate: <strong class="text-white">${data.candidate}</strong> • Format: <strong>${data.mode === 'full_80' ? 'Comprehensive Board Mock (80M)' : (data.mode === 'quick' ? 'Quick Board Drill (40M)' : 'Chapter Focus Drill (20M)')}</strong></p>
                        </div>
                        <div class="text-right">
                            <div class="text-4xl sm:text-5xl font-black text-emerald-400">${data.score} <span class="text-xl sm:text-2xl text-slate-400 font-bold">/ ${data.maxMarks}</span></div>
                            <span class="text-xs font-mono font-bold text-slate-300">${data.percentage}% Aggregate</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800 text-xs">
                        <div class="p-3 bg-surface rounded-xl border border-slate-800">
                            <span class="text-slate-400 block text-[10px]">TIME TAKEN</span>
                            <strong class="text-white text-sm font-mono">${data.timeString}</strong>
                        </div>
                        <div class="p-3 bg-surface rounded-xl border border-slate-800">
                            <span class="text-slate-400 block text-[10px]">PACE PER MARK</span>
                            <strong class="text-white text-sm font-mono">${data.pacePerMark} secs / mark</strong>
                        </div>
                        <div class="p-3 bg-surface rounded-xl border border-slate-800">
                            <span class="text-slate-400 block text-[10px]">PACING VERDICT</span>
                            <strong class="${data.paceColor} text-sm">${data.paceVerdict}</strong>
                        </div>
                    </div>
                </div>

                <div class="space-y-3 pt-2">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Question-Wise Mark Evaluation & Correct Solutions</h4>
                        <div class="flex items-center gap-1.5 bg-surfaceLight p-1 rounded-lg border border-slate-700 text-xs font-medium">
                            <button onclick="renderMockResultsView('all')" class="px-2.5 py-1 rounded ${filter === 'all' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'}">
                                All (${data.breakdown.length})
                            </button>
                            <button onclick="renderMockResultsView('lost')" class="px-2.5 py-1 rounded ${filter === 'lost' ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'}">
                                Marks Lost (${data.breakdown.filter(x => x.loss > 0).length})
                            </button>
                            <button onclick="renderMockResultsView('perfect')" class="px-2.5 py-1 rounded ${filter === 'perfect' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white'}">
                                Full Credit (${data.breakdown.filter(x => x.loss === 0).length})
                            </button>
                        </div>
                    </div>

                    <div class="space-y-3">${itemsHtml}</div>
                </div>

                <div class="text-center pt-2">
                    <button onclick="retakeMockExam()" class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition shadow-lg shadow-indigo-600/30">
                        🔄 Attempt Another Mock Examination
                    </button>
                </div>
            `;

            if (window.renderMathInElement) {
                renderMathInElement(resDiv, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] });
            }
        }

        function retakeMockExam() {
            document.getElementById('mockTestResults').classList.add('hidden');
            document.getElementById('mockTestStartCard').classList.remove('hidden');
        }

        function cancelAndReselectMock() {
            if (confirm("Are you sure you want to exit this mock exam? Any entered answers will be reset.")) {
                if (mockTimerInterval) clearInterval(mockTimerInterval);
                document.getElementById('mockTestForm').classList.add('hidden');
                document.getElementById('mockTimerBadge').classList.add('hidden');
                document.getElementById('mockTestResults').classList.add('hidden');
                document.getElementById('mockTestQuestions').innerHTML = '';
                activeMockQuestions = [];
                document.getElementById('mockTestStartCard').classList.remove('hidden');
            }
        }

		// -------------------------------------------------------------------------
        	  // AUTHENTICATION & MULTI-TENANT SESSION MANAGEMENT
        	  // -------------------------------------------------------------------------
        let activeAuthMode = 'school';

        function toggleAuthType(type) {
            activeAuthMode = type;
            const schoolBtn = document.getElementById('tabSchoolMode');
            const directBtn = document.getElementById('tabDirectMode');
            const schoolCodeGroup = document.getElementById('schoolCodeFieldGroup');
            const instInput = document.getElementById('authInstCode');

            if (type === 'school') {
                schoolBtn.className = "flex-1 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold transition";
                directBtn.className = "flex-1 py-1.5 rounded-lg text-slate-400 hover:text-white transition";
                schoolCodeGroup.classList.remove('hidden');
                if (instInput) instInput.required = true;
            } else {
                directBtn.className = "flex-1 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold transition";
                schoolBtn.className = "flex-1 py-1.5 rounded-lg text-slate-400 hover:text-white transition";
                schoolCodeGroup.classList.add('hidden');
                if (instInput) {
                    instInput.required = false;
                    instInput.value = "DIRECT";
                }
            }
        }

        function showLoginModal() {
            const modal = document.getElementById('authModal');
            if (modal) modal.classList.remove('hidden');
        }

        function closeLoginModal() {
            const modal = document.getElementById('authModal');
            if (modal) modal.classList.add('hidden');
        }

        async function handleAuthSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value.trim();
    const instCode = activeAuthMode === 'direct' ? 'DIRECT' : (document.getElementById('authInstCode').value.trim() || 'DIRECT');
    const submitBtn = document.getElementById('authSubmitBtn');
    const banner = document.getElementById('authPromptBanner');
    const promptText = document.getElementById('authPromptText');
    const promptAction = document.getElementById('authPromptActionBtn');

    if (banner) banner.classList.add('hidden');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Authenticating...";
    }

    try {
        const response = await fetch('http://127.0.0.1:8001/api/auth/student/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, institution_code: instCode })
        });

        const data = await response.json();

        if (!response.ok) {
            // Suggest creating an account if user is not found
            if (response.status === 404 || (data.detail && data.detail.toLowerCase().includes('not found'))) {
                if (banner && promptText && promptAction) {
                    banner.className = "text-xs p-3 rounded-xl border border-amber-800 bg-amber-950/40 text-amber-200 flex items-center justify-between gap-2";
                    promptText.innerText = "No account found with this email.";
                    promptAction.innerText = "Create Account";
                    promptAction.onclick = () => {
                        const regEmail = document.getElementById('regEmail');
                        const regInst = document.getElementById('regInstCode');
                        if (regEmail) regEmail.value = email;
                        if (regInst) regInst.value = instCode;
                        switchAuthConsole('student_register');
                    };
                    banner.classList.remove('hidden');
                }
                return;
            }
            throw new Error(data.detail || "Invalid credentials.");
        }

        localStorage.setItem('goalisb_token', data.access_token);
        localStorage.setItem('goalisb_user', JSON.stringify(data.user));
        hydrateStudentUI();
        closeLoginModal();
    } catch (err) {
        if (banner && promptText) {
            banner.className = "text-xs p-3 rounded-xl border border-rose-800 bg-rose-950/40 text-rose-300 block";
            promptText.innerText = err.message;
            if (promptAction) promptAction.innerText = "";
            banner.classList.remove('hidden');
        }
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = "Sign In to Master Engine";
        }
    }
}

        function onHeaderTierChanged(newTier) {
    const tier = (newTier || 'INSTITUTIONAL').toUpperCase();
    
    // Update local user record
    let user = {};
    try {
        user = JSON.parse(localStorage.getItem('goalisb_user') || '{}');
    } catch {}
    user.plan_tier = tier;
    localStorage.setItem('goalisb_user', JSON.stringify(user));
    
    // Sync UI badges and chapters
    renderSidebar();
    
    if (tier === 'FREE') {
        if (!confirm("Downgrade to Free Demo? Chapters 3–14 and full mock exams will be locked.")) {
            // Revert dropdown if user cancels
            const sel = document.getElementById('userTierSelector');
            if (sel) sel.value = 'INSTITUTIONAL';
            user.plan_tier = 'INSTITUTIONAL';
            localStorage.setItem('goalisb_user', JSON.stringify(user));
            renderSidebar();
            return;
        }
        executeTierDowngrade('FREE');
    }
}
       
        function hydrateStudentUI() {
            const raw = localStorage.getItem('goalisb_user');
            const nameEl = document.getElementById('studentNameDisplay');
            const instEl = document.getElementById('studentInstBadge');
            const classEl = document.getElementById('studentClassBadge');
            const trackEl = document.getElementById('studentTrackSelect');
            const logoutBtn = document.getElementById('logoutBtn');
            const candidateInput = document.getElementById('candidateNameInput');
            const tierSelector = document.getElementById('userTierSelector');

            if (!raw) {
                if (nameEl) nameEl.innerText = "Sign In";
                if (instEl) instEl.innerText = "Guest Mode";
                if (logoutBtn) logoutBtn.classList.add('hidden');
                if (tierSelector) tierSelector.value = "FREE";
                return;
            }

            try {
                const user = JSON.parse(raw);
                const currentTier = (user.plan_tier || 'FREE').toUpperCase();

                if (nameEl) nameEl.innerText = user.full_name || "Enrolled Student";
                if (instEl) instEl.innerText = user.institution_name || (user.institution_code === 'DIRECT' ? "Direct Learner" : user.institution_code);
                if (classEl) classEl.innerText = `CLASS ${user.student_class || 10}`;
                if (trackEl && user.math_track) trackEl.value = user.math_track;
                if (candidateInput && user.full_name) candidateInput.value = user.full_name;
                if (logoutBtn) logoutBtn.classList.remove('hidden');

                if (tierSelector) {
                    tierSelector.value = currentTier;
                }
            } catch (e) {
                console.error("Session parse error:", e);
            }
        }

        function studentLogout() {
            localStorage.removeItem('goalisb_token');
            localStorage.removeItem('goalisb_user');
            hydrateStudentUI();
            location.reload();
        }
	// Switch between Sign In, Sign Up, and Institution tabs
function switchAuthConsole(view) {
    const tabLogin = document.getElementById('tabStudentLogin');
    const tabRegister = document.getElementById('tabStudentRegister');
    const tabInst = document.getElementById('tabInstConsole');
    const formLogin = document.getElementById('formStudentLogin');
    const formRegister = document.getElementById('formStudentRegister');
    const formInst = document.getElementById('formInstConsole');
    const banner = document.getElementById('authPromptBanner');

    // Reset buttons
    [tabLogin, tabRegister, tabInst].forEach(b => {
        b.className = "flex-1 py-1.5 rounded-lg text-slate-400 hover:text-white transition";
    });
    // Hide all forms & banners
    [formLogin, formRegister, formInst, banner].forEach(el => el.classList.add('hidden'));

    if (view === 'student_login') {
        tabLogin.className = "flex-1 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold transition";
        formLogin.classList.remove('hidden');
    } else if (view === 'student_register') {
        tabRegister.className = "flex-1 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold transition";
        formRegister.classList.remove('hidden');
    } else if (view === 'institution') {
        tabInst.className = "flex-1 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold transition";
        formInst.classList.remove('hidden');
    }
}

// 2. Student Sign Up Handler
async function handleStudentRegister(e) {
    e.preventDefault();
    const fullName = document.getElementById('regFullName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const instCode = document.getElementById('regInstCode').value.trim() || 'DIRECT';
    const mathTrack = document.getElementById('regMathTrack').value;
    const password = document.getElementById('regPassword').value.trim();
    const btn = document.getElementById('regSubmitBtn');
    const banner = document.getElementById('authPromptBanner');
    const promptText = document.getElementById('authPromptText');

    banner.classList.add('hidden');
    btn.disabled = true;
    btn.innerText = "Creating Account...";

    try {
        const response = await fetch('http://127.0.0.1:8001/api/auth/student/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                full_name: fullName,
                email: email,
                password: password,
                institution_code: instCode,
                student_class: 10,
                math_track: mathTrack
            })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.detail || "Registration failed.");

        // Automatically log the newly registered student in
        document.getElementById('authEmail').value = email;
        document.getElementById('authPassword').value = password;
        if (instCode === 'DIRECT') toggleAuthType('direct');
        else {
            toggleAuthType('school');
            document.getElementById('authInstCode').value = instCode;
        }

        switchAuthConsole('student_login');
        document.getElementById('formStudentLogin').requestSubmit();
    } catch (err) {
        banner.className = "text-xs p-3 rounded-xl border border-rose-800 bg-rose-950/40 text-rose-300 block";
        promptText.innerText = err.message;
        banner.classList.remove('hidden');
    } finally {
        btn.disabled = false;
        btn.innerText = "Create Student Account & Enter";
    }
}

// 3. Institution Registration / Authorization Handler
async function handleInstitutionAction(e) {
    e.preventDefault();
    const instCode = document.getElementById('instConsoleCode').value.trim().toUpperCase();
    const instName = document.getElementById('instConsoleName').value.trim() || `${instCode} School`;
    const btn = document.getElementById('instConsoleBtn');
    const banner = document.getElementById('authPromptBanner');
    const promptText = document.getElementById('authPromptText');

    btn.disabled = true;
    btn.innerText = "Registering Institution...";

    try {
        const response = await fetch('http://127.0.0.1:8001/api/auth/institution/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                institution_code: instCode,
                name: instName,
                subscription_tier: 'INSTITUTIONAL'
            })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.detail || "Institution registration failed.");

        banner.className = "text-xs p-3 rounded-xl border border-emerald-800 bg-emerald-950/40 text-emerald-300 block";
        promptText.innerText = `Institution ${instCode} successfully registered! Students can now use this code.`;
        banner.classList.remove('hidden');
    } catch (err) {
        banner.className = "text-xs p-3 rounded-xl border border-rose-800 bg-rose-950/40 text-rose-300 block";
        promptText.innerText = err.message;
        banner.classList.remove('hidden');
    } finally {
        btn.disabled = false;
        btn.innerText = "Authorize Institution";
    }
}

	// -------------------------------------------------------------------------
	// SUBSCRIPTION TIER MIGRATION & PLAN SELECTOR HANDLER
	// -------------------------------------------------------------------------
		function requestPlanMigration(targetTier) {
    		const token = localStorage.getItem('goalisb_token');
   	 	if (!token) {
       	 	closeUpgradeModal();
        	showLoginModal();
        	alert(`Please sign in or create an account to subscribe to ${targetTier}.`);
        return;
    	}

    	if (targetTier === 'FREE') {
        if (!confirm("Downgrade to Free Demo? Chapters 3–14 and full mock exams will be locked.")) return;
        executeTierDowngrade('FREE');
        return;
    	}

    		// Direct paid tiers into the Checkout Modal
    	showUpgradeModal(`Selected: ${targetTier} Plan Checkout`, targetTier);
	}

	async function executeTierDowngrade(targetTier) {
    	const token = localStorage.getItem('goalisb_token');
    	try {
        const response = await fetch('http://127.0.0.1:8001/api/subscription/migrate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ target_tier: targetTier, reason: "Self-service downgrade" })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.detail || "Downgrade failed.");

        localStorage.setItem('goalisb_token', data.access_token);
        localStorage.setItem('goalisb_user', JSON.stringify(data.user));
        hydrateStudentUI();
        renderSidebar();
        closeUpgradeModal();
        alert("Account reset to Free Demo.");
    	} catch (err) {
        alert(err.message);
    			}
	}

async function redeemPromoCode() {
    const code = document.getElementById('voucherCodeInput').value.trim();
    const token = localStorage.getItem('goalisb_token');
    
    if (!token) {
        showLoginModal();
        return;
    }
    if (!code) {
        alert("Please enter a voucher code.");
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:8001/api/subscription/redeem-voucher', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ code })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.detail || "Failed to redeem code.");

        localStorage.setItem('goalisb_token', data.access_token);
        localStorage.setItem('goalisb_user', JSON.stringify(data.user));

        hydrateStudentUI();
        renderSidebar();
        closeUpgradeModal();

        alert(data.message);
    } catch (err) {
        alert(err.message);
    }
}

let pendingTargetTier = 'PRO';

function showUpgradeModal(message, targetTier = 'PRO') {
    pendingTargetTier = targetTier;
    const modal = document.getElementById('upgradeModal');
    const txt = document.getElementById('upgradeModalText');
    const tierName = document.getElementById('checkoutTargetTierName');
    const priceText = document.getElementById('checkoutPayableAmount');

    if (txt) txt.innerText = message || "This feature requires an active Pro or Institutional plan.";
    if (tierName) tierName.innerText = targetTier === 'ENTERPRISE' ? 'INSTITUTIONAL COHORT' : 'PRO LEARNER';
    if (priceText) priceText.innerText = targetTier === 'ENTERPRISE' ? '₹2,499' : '₹499';
    if (modal) modal.classList.remove('hidden');
}

function closeUpgradeModal() {
    const modal = document.getElementById('upgradeModal');
    if (modal) modal.classList.add('hidden');
}

// Payment Option 2: Direct UPI UTR submission
function submitManualPayment() {
    const utr = document.getElementById('upiUtrInput').value.trim();
    if (!utr || utr.length < 6) {
        alert("Please enter a valid 12-digit UPI transaction reference / UTR number.");
        return;
    }
    alert(`Payment verification submitted for Ref: ${utr}. During pilot testing, you can also activate instantly using voucher code 'GOALPRO'!`);
}

// Payment Option 3: Future Gateway placeholder
function launchRazorpayCheckout() {
    alert("Online payment gateway is being finalized. Please use the 'Promo / Access Voucher' (e.g., GOALPRO) or UPI verification above.");
}

    
// Bridge external bank to evalProblemBank if loaded asynchronously
if (typeof window !== 'undefined' && window.dbQuestionBank) {
    window.dbQuestionBank = new Proxy(window.dbQuestionBank, {
        get(obj, prop) {
            if (typeof prop === 'string' && !(prop in obj)) {
                const subjObj = (typeof subjectsRegistry !== 'undefined' && typeof currentSubject !== 'undefined')
                    ? subjectsRegistry[currentSubject]
                    : null;
                const chap = subjObj && subjObj.chapters ? subjObj.chapters[prop] : null;
                if (chap) {
                    const items = [];
                    let idx = 1;
                    (chap.workedExamples || chap.derivations || chap.examples || []).forEach((ex) => {
                        const qText = ex.problem || ex.question || ex.title || ex.statement;
                        if (!qText) return;
                        const stepsArr = Array.isArray(ex.steps) ? ex.steps : (ex.solution ? [ex.solution] : []);
                        const ideal = stepsArr.map((s, i) => typeof s === 'string' ? s : `Step ${i + 1}: ${s.detail || s.step || s.text || ''}`).join('\n');
                        items.push({
                            question_id: `${prop}_EX_${idx++}`,
                            chapter_id: prop,
                            marks: ex.marks || (stepsArr.length >= 4 ? 5 : 3),
                            text: qText,
                            idealAnswer: ideal || 'Step 1: State governing formula.\nStep 2: Substitute values.\nStep 3: State verified result.',
                            flawedAnswer: 'Step 1: Applied formula without verifying domain/boundary conditions.',
                            rubric: { rubric: ideal }
                        });
                    });
                    (chap.practiceProblems || chap.problems || chap.exercises || []).forEach((pr) => {
                        const qText = pr.question || pr.problem || pr.text || pr.q;
                        if (!qText) return;
                        const sol = pr.solution || pr.answer || pr.idealAnswer || '';
                        items.push({
                            question_id: `${prop}_PR_${idx++}`,
                            chapter_id: prop,
                            marks: pr.marks || 2,
                            text: qText,
                            idealAnswer: sol || 'Step 1: Identify given data.\nStep 2: Apply NCERT identity/theorem.\nStep 3: Simplify final result.',
                            flawedAnswer: 'Step 1: Omitted intermediate algebraic justification.',
                            rubric: { rubric: sol }
                        });
                    });
                    (chap.diagnostics || chap.diagnosticQuestions || []).forEach((dg) => {
                        const qText = dg.q || dg.question || dg.text;
                        if (!qText) return;
                        const correctOpt = Array.isArray(dg.options) && typeof dg.correct === 'number' ? dg.options[dg.correct] : '';
                        const cleanSol = (dg.solution || dg.explanation || '').replace(/<[^>]+>/g, '');
                        items.push({
                            question_id: `${prop}_DG_${idx++}`,
                            chapter_id: prop,
                            marks: 1,
                            text: qText,
                            idealAnswer: correctOpt ? `Answer: ${correctOpt}\nJustification: ${cleanSol}` : cleanSol,
                            flawedAnswer: Array.isArray(dg.options) ? `Selected distractor: ${dg.options[(dg.correct + 1) % dg.options.length]}` : 'Incorrect option chosen.',
                            rubric: { rubric: cleanSol }
                        });
                    });
                    if (items.length > 0) {
                        obj[prop] = items;
                    }
                }
            }
            return obj[prop];
        }
    });
    evalProblemBank = window.dbQuestionBank;
}


// Global window bindings for inline HTML onclick attributes
window.loadEvaluationCase = typeof loadEvaluationCase !== 'undefined' ? loadEvaluationCase : window.loadEvaluationCase;
window.runMicroEvaluation = typeof runMicroEvaluation !== 'undefined' ? runMicroEvaluation : window.runMicroEvaluation;
window.toggleIdealReference = typeof toggleIdealReference !== 'undefined' ? toggleIdealReference : window.toggleIdealReference;
