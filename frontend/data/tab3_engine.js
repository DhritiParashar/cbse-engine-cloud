// tab3_engine.js - Verified CBSE Micro-Evaluator Engine

window.currentFilterMark = "ALL";

// Button glow updater
window.setRandomButtonGlow = function(activeMode) {
    var btnCh = document.getElementById('btnChapterRandom');
    var btnFull = document.getElementById('btnFullRandom');

    if (btnCh) {
        btnCh.style.setProperty('background-color', activeMode === 'chapter' ? '#4f46e5' : '#1e293b', 'important');
        btnCh.style.setProperty('border-color', activeMode === 'chapter' ? '#c7d2fe' : '#475569', 'important');
        btnCh.style.setProperty('color', activeMode === 'chapter' ? '#ffffff' : '#cbd5e1', 'important');
        btnCh.style.setProperty('box-shadow', activeMode === 'chapter' ? '0 0 20px #6366f1, 0 0 4px #ffffff' : 'none', 'important');
        btnCh.style.setProperty('transform', activeMode === 'chapter' ? 'scale(1.04)' : 'scale(1)', 'important');
    }
    if (btnFull) {
        btnFull.style.setProperty('background-color', activeMode === 'subject' ? '#9333ea' : '#1e293b', 'important');
        btnFull.style.setProperty('border-color', activeMode === 'subject' ? '#f3e8ff' : '#475569', 'important');
        btnFull.style.setProperty('color', activeMode === 'subject' ? '#ffffff' : '#cbd5e1', 'important');
        btnFull.style.setProperty('box-shadow', activeMode === 'subject' ? '0 0 20px #a855f7, 0 0 4px #ffffff' : 'none', 'important');
        btnFull.style.setProperty('transform', activeMode === 'subject' ? 'scale(1.04)' : 'scale(1)', 'important');
    }
};

// Retrieve question array for the given chapter key
window.getQuestionsForChapter = function(rawKey) {
    var bank = window.dbQuestionBank;
    if (!bank) return [];

    // Extract chapter number (e.g. M10_CH02, ch02, 2 -> 2)
    var numMatch = String(rawKey || 'M10_CH02').match(/\d+/g);
    var num = numMatch ? parseInt(numMatch[numMatch.length - 1], 10) : 2;
    var padded = num < 10 ? '0' + num : '' + num;

    // Check all common key variations
    var candidates = [
        'M10_CH' + padded,
        'M10_CH' + num,
        'M11_CH' + padded,
        'M12_CH' + padded,
        'ch_' + padded,
        'ch' + padded,
        'CH' + padded,
        padded,
        String(num)
    ];

    for (var i = 0; i < candidates.length; i++) {
        var k = candidates[i];
        if (bank[k] && Array.isArray(bank[k]) && bank[k].length > 0) {
            return bank[k];
        }
    }

    // Fallback: search any key containing CH + padded
    var allKeys = Object.keys(bank);
    for (var j = 0; j < allKeys.length; j++) {
        if (allKeys[j].indexOf('CH' + padded) !== -1 && Array.isArray(bank[allKeys[j]])) {
            return bank[allKeys[j]];
        }
    }

    // Default fallback to first chapter in bank
    if (allKeys.length > 0 && Array.isArray(bank[allKeys[0]])) {
        return bank[allKeys[0]];
    }

    return [];
};

// Populate the problem dropdown based on mark filter
window.renderTab3Questions = function(chapterKey) {
    var select = document.getElementById('evalProblemSelect');
    if (!select) return;

    var targetKey = chapterKey || window.currentChapterKey || 'M10_CH02';
    var questions = window.getQuestionsForChapter(targetKey);

    select.innerHTML = '';

    var filtered = questions.filter(function(q) {
        if (!window.currentFilterMark || window.currentFilterMark === 'ALL') return true;
        return String(q.marks) === String(window.currentFilterMark);
    });

    if (filtered.length === 0) {
        var opt = document.createElement('option');
        opt.value = "";
        opt.textContent = questions.length === 0 
            ? "No questions found for " + targetKey 
            : "No questions match filter (" + window.currentFilterMark + " Marks)";
        select.appendChild(opt);
        return;
    }

    filtered.forEach(function(q, idx) {
        var opt = document.createElement('option');
        opt.value = q.id || idx;
        var label = (idx + 1) + ". " + (q.title || (q.text ? q.text.substring(0, 48) + '...' : 'Question ' + (idx + 1))) + " (" + (q.marks || 3) + " Marks)";
        opt.textContent = label;
        select.appendChild(opt);
    });

    window.currentFilteredQuestions = filtered;

    // Load first question details
    window.loadEvalProblem();
};

// Populate question statement & rubric cards
window.loadEvalProblem = function() {
    var select = document.getElementById('evalProblemSelect');
    if (!select) return;

    var questions = window.currentFilteredQuestions || window.getQuestionsForChapter(window.currentChapterKey || 'M10_CH02');
    if (!questions || questions.length === 0) return;

    var q = questions.find(function(item, idx) {
        return (item.id && String(item.id) === String(select.value)) || String(idx) === String(select.value);
    });

    if (!q) q = questions[0];
    if (!q) return;

    window.activeTab3Question = q;

    // Update Question Statement (uses q.text or q.title)
    var txtElem = document.getElementById('evalProblemText');
    if (txtElem) txtElem.textContent = q.text || q.statement || q.title || "Question statement";

    // Update Marks Badge
    var marksBadge = document.getElementById('evalTotalMarks');
    if (marksBadge) marksBadge.textContent = (q.marks || "--") + " Marks Total";

    // Update Marking Rubric
    var rubricContainer = document.getElementById('evalModelRubric');
    if (rubricContainer) {
        rubricContainer.innerHTML = '';
        var rubricList = q.rubric || q.marking_scheme || q.markingScheme;
        if (rubricList && Array.isArray(rubricList)) {
            rubricList.forEach(function(r) {
                var d = document.createElement('div');
                d.className = 'flex items-start justify-between py-1 border-b border-slate-800 text-xs text-slate-300';
                var text = r.step || r.criterion || r.text || (typeof r === 'string' ? r : 'Mark allocation step');
                var marks = r.marks || r.fraction || 1;
                d.innerHTML = '<span>• ' + text + '</span><span class="font-mono text-purple-400 font-bold ml-2">+' + marks + 'M</span>';
                rubricContainer.appendChild(d);
            });
        } else {
            rubricContainer.innerHTML = '<p class="text-xs text-slate-500 italic">CBSE rubric loaded for ' + (q.marks || 3) + ' Marks.</p>';
        }
    }

    // Reset student steps and scorecard
    window.resetStudentSteps();
};

// Load 100% Ideal Answer
window.loadIdealAnswer = function() {
    var q = window.activeTab3Question;
    var input = document.getElementById('studentSolutionInput');
    if (!input) return;
    if (q && (q.idealAnswer || q.solution)) {
        input.value = q.idealAnswer || q.solution;
    } else {
        input.value = "1. Given the problem statement.\n2. Formulating algebraic relationship accurately.\n3. Solving step-by-step with proper sign retention.\n4. Concluding answer with appropriate units.";
    }
};

// Load Common Student Flaw
window.loadFlawedAnswer = function() {
    var q = window.activeTab3Question;
    var input = document.getElementById('studentSolutionInput');
    if (!input) return;
    if (q && (q.flawedAnswer || q.commonFlaw)) {
        input.value = q.flawedAnswer || q.commonFlaw;
    } else {
        input.value = "1. Given equation set up.\n2. Arithmetic sign flipped during transposition.\n3. Missed negative root check.\n4. Final answer omitted units.";
    }
};

// Pick Random Question
window.pickRandomQuestion = function(scope) {
    window.setRandomButtonGlow(scope);

    if (scope === 'chapter') {
        var questions = window.getQuestionsForChapter(window.currentChapterKey || 'M10_CH02');
        if (!questions || questions.length === 0) return;

        var pool = questions.filter(function(q) {
            if (!window.currentFilterMark || window.currentFilterMark === 'ALL') return true;
            return String(q.marks) === String(window.currentFilterMark);
        });
        if (pool.length === 0) pool = questions;

        var chosen = pool[Math.floor(Math.random() * pool.length)];
        var select = document.getElementById('evalProblemSelect');
        if (select) {
            select.value = chosen.id || questions.indexOf(chosen);
            window.loadEvalProblem();
        }
    } else if (scope === 'subject') {
        var bank = window.dbQuestionBank;
        if (!bank) return;

        var allItems = [];
        Object.keys(bank).forEach(function(chKey) {
            var qList = bank[chKey];
            if (Array.isArray(qList)) {
                qList.forEach(function(q) {
                    if (!window.currentFilterMark || window.currentFilterMark === 'ALL' || String(q.marks) === String(window.currentFilterMark)) {
                        allItems.push({ chapterKey: chKey, question: q });
                    }
                });
            }
        });

        if (allItems.length === 0) return;
        var pick = allItems[Math.floor(Math.random() * allItems.length)];

        if (window.selectChapter && window.currentChapterKey !== pick.chapterKey) {
            window.selectChapter(pick.chapterKey);
        }

        setTimeout(function() {
            var select = document.getElementById('evalProblemSelect');
            if (select) {
                select.value = pick.question.id || pick.question.title;
                window.loadEvalProblem();
            }
            window.setRandomButtonGlow('subject');
        }, 120);
    }
};

// Reset student steps and scorecard
window.resetStudentSteps = function() {
    var input = document.getElementById('studentSolutionInput');
    if (input) input.value = '';

    var card = document.getElementById('evalEvaluationCard');
    if (card) {
        card.style.display = 'none';
        card.classList.add('hidden');
    }

    var scoreDisplay = document.getElementById('evalScoreDisplay');
    if (scoreDisplay) scoreDisplay.textContent = '-- / -- Marks';

    var statusBadge = document.getElementById('evalStatusBadge');
    if (statusBadge) {
        statusBadge.textContent = 'Pending Evaluation';
        statusBadge.className = 'px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-400 border border-slate-700';
    }

    var breakdown = document.getElementById('evalStepBreakdown');
    if (breakdown) breakdown.innerHTML = '';
};

// Auto-populate when DOM and Question Bank are ready
function initTab3WhenReady() {
    if (window.dbQuestionBank) {
        window.renderTab3Questions(window.currentChapterKey || 'M10_CH02');
    } else {
        setTimeout(initTab3WhenReady, 100);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTab3WhenReady);
} else {
    initTab3WhenReady();
}
