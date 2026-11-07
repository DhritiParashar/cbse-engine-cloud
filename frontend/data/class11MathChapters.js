// frontend/data/class11MathChapters.js
window.class11MathChapterRegistry = {
  M11_CH01: {
    code: "Chapter 01",
    name: "Sets",
    weight: 6,
    desc: "Empty, finite & infinite sets, subsets, power sets, Venn diagrams, union and intersection of sets.",
    overview: `<div class="space-y-6">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Intuition</span>
        <h3 class="text-xl font-black text-white">The Boundary of Belonging: Why Naive Collections Fail</h3>
        <p class="text-xs text-slate-300 leading-relaxed">
          Mathematics cannot operate on subjective descriptions. Consider the phrase: <em>"The collection of all difficult questions in your textbook."</em> Is it a set? No. One student may find a question trivial, while another finds it impossible. A mathematical <strong>set</strong> requires a deterministic, unambiguous rule of membership: for any given candidate element $x$ in Universe $U$, the proposition $x \in A$ must be strictly TRUE or FALSE.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
          <span class="text-indigo-400 font-bold block text-sm">1. Empty Set ($\\emptyset$)</span>
          <p class="text-slate-300 leading-relaxed">Contains no elements. Crucial fact: $\\emptyset$ is a subset of <em>every</em> set. Reason: the statement <em>"if $x \in \\emptyset$, then $x \in A$"</em> is vacuously true because the premise is never satisfied.</p>
        </div>
        <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
          <span class="text-indigo-400 font-bold block text-sm">2. Power Set ($P(A)$)</span>
          <p class="text-slate-300 leading-relaxed">The set of all possible subsets. For a set with $n$ elements, every element has 2 binary states (either chosen or not chosen), producing exactly $2^n$ distinct subsets.</p>
        </div>
        <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
          <span class="text-indigo-400 font-bold block text-sm">3. Universal Space ($U$)</span>
          <p class="text-slate-300 leading-relaxed">The superset containing all entities under current discussion. Complements ($A'$) are always measured relative to $U$: $A' = U - A$.</p>
        </div>
      </div>
    </div>`,
    exp1: `<div class="space-y-6 text-xs text-slate-300">
      <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">Core Algebraic Identities & Laws</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-white pt-1">
          <div class="p-3 bg-surface rounded-lg border border-slate-800">
            <span class="text-indigo-300 font-sans font-bold block text-[11px] mb-1">Inclusion-Exclusion Cardinality:</span>
            n(A ∪ B) = n(A) + n(B) - n(A ∩ B)<br>
            n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(C ∩ A) + n(A ∩ B ∩ C)
          </div>
          <div class="p-3 bg-surface rounded-lg border border-slate-800">
            <span class="text-indigo-300 font-sans font-bold block text-[11px] mb-1">De Morgan's & Difference Laws:</span>
            (A ∪ B)' = A' ∩ B'<br>
            (A ∩ B)' = A' ∪ B'<br>
            A - B = A ∩ B' = A - (A ∩ B)
          </div>
        </div>
      </div>

      <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-indigo-400 font-bold text-sm">WORKED NUMERICAL 1: 3-Set Survey Problem (Standard 4-Mark Board Level)</span>
          <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px]">NCERT Standard</span>
        </div>
        <p class="text-slate-200">
          <strong>Problem:</strong> In a survey of 60 people, it was found that 25 read newspaper H, 26 read newspaper T, 26 read newspaper I, 9 read both H and I, 11 read both H and T, 8 read both T and I, and 3 read all three newspapers. Find: (i) the number of people who read at least one newspaper, and (ii) the number of people who read exactly one newspaper.
        </p>
        <div class="p-4 bg-background rounded-lg border border-slate-800 space-y-2 text-slate-300">
          <p><strong class="text-emerald-400">Step 1: Identify given cardinalities:</strong><br>
          $n(H) = 25$, $n(T) = 26$, $n(I) = 26$, $n(H \cap I) = 9$, $n(H \cap T) = 11$, $n(T \cap I) = 8$, $n(H \cap T \cap I) = 3$.</p>
          <p><strong class="text-emerald-400">Step 2: Calculate people reading at least one newspaper $n(H \cup T \cup I)$:</strong><br>
          $n(H \cup T \cup I) = 25 + 26 + 26 - 11 - 8 - 9 + 3 = 77 - 28 + 3 = 52$.</p>
          <p><strong class="text-emerald-400">Step 3: Calculate people reading exactly one newspaper:</strong><br>
          • Reading only H = $25 - 11 - 9 + 3 = 8$.<br>
          • Reading only T = $26 - 11 - 8 + 3 = 10$.<br>
          • Reading only I = $26 - 9 - 8 + 3 = 12$.<br>
          Total reading exactly one = $8 + 10 + 12 = 30$.</p>
        </div>
      </div>

      <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-3">
        <span class="text-indigo-400 font-bold text-sm">WORKED NUMERICAL 2: Subsets and Power Set Equation</span>
        <p class="text-slate-200">
          <strong>Problem:</strong> Two finite sets have $m$ and $k$ elements. The total number of subsets of the first set is 56 more than the total number of subsets of the second set. Find $m$ and $k$.
        </p>
        <div class="p-4 bg-background rounded-lg border border-slate-800 space-y-2 text-slate-300">
          <p><strong class="text-emerald-400">Step 1: Formulate exponential difference:</strong> $2^m - 2^k = 56$.</p>
          <p><strong class="text-emerald-400">Step 2: Factor out $2^k$:</strong> $2^k (2^{m-k} - 1) = 56 = 8 \times 7 = 2^3 \times (2^3 - 1)$.</p>
          <p><strong class="text-emerald-400">Step 3: Equate components:</strong> $k = 3$, $m - k = 3 \implies m = 6$. Answer: $m = 6, k = 3$.</p>
        </div>
      </div>
    </div>`,
    exp2: `<div class="space-y-6 text-xs text-slate-300">
      <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-4">
        <div class="border-b border-slate-700 pb-2.5 flex items-center justify-between">
          <h3 class="font-black text-white text-sm">PROOF 1: De Morgan's First Law $(A \cup B)' = A' \cap B'$</h3>
          <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px]">Mutual Subset Inclusion</span>
        </div>
        <div class="space-y-3 leading-relaxed font-mono">
          <p><strong class="text-indigo-300 font-sans">Part 1: Prove $(A \cup B)' \\subseteq A' \cap B'$:</strong><br>
          1. Let $x \in (A \cup B)' \implies x \notin (A \cup B)$.<br>
          2. $\implies x \notin A \text{ and } x \notin B$.<br>
          3. $\implies x \in A' \text{ and } x \in B' \implies x \in (A' \cap B')$.<br>
          4. Therefore, $(A \cup B)' \\subseteq A' \cap B'$ &nbsp;[Eq. 1]</p>
          <p><strong class="text-indigo-300 font-sans">Part 2: Prove $A' \cap B' \\subseteq (A \cup B)'$:</strong><br>
          1. Let $y \in (A' \cap B') \implies y \in A' \text{ and } y \in B'$.<br>
          2. $\implies y \notin A \text{ and } y \notin B \implies y \notin (A \cup B)$.<br>
          3. $\implies y \in (A \cup B)'$.<br>
          4. Therefore, $A' \cap B' \\subseteq (A \cup B)'$ &nbsp;[Eq. 2]</p>
          <p class="text-emerald-400 font-bold font-sans">From Eq. 1 and Eq. 2, $(A \cup B)' = A' \cap B'$. [Q.E.D.]</p>
        </div>
      </div>

      <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-4">
        <div class="border-b border-slate-700 pb-2.5 flex items-center justify-between">
          <h3 class="font-black text-white text-sm">PROOF 2: Distributive Law $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$</h3>
          <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px]">Axiomatic Logic</span>
        </div>
        <div class="space-y-2 leading-relaxed font-mono">
          <p>1. Let $x \in A \cap (B \cup C)$.<br>
          2. $\implies x \in A \text{ and } x \in (B \cup C)$.<br>
          3. $\implies x \in A \text{ and } (x \in B \text{ or } x \in C)$.<br>
          4. $\implies (x \in A \text{ and } x \in B) \text{ or } (x \in A \text{ and } x \in C)$.<br>
          5. $\implies x \in (A \cap B) \text{ or } x \in (A \cap C) \implies x \in [(A \cap B) \cup (A \cap C)]$.<br>
          6. Therefore, $A \cap (B \cup C) \\subseteq (A \cap B) \cup (A \cap C)$.<br>
          7. Conversely, following the steps in reverse shows $[(A \cap B) \cup (A \cap C)] \\subseteq A \cap (B \cup C)$.<br>
          <span class="text-emerald-400 font-bold font-sans">∴ $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$.</span></p>
        </div>
      </div>
    </div>`,
    errorFinder: {
      traps: [
        {
          title: "Subset (⊆) vs Belongs To (∈) Notation",
          severity: "High (1-2 Marks Lost)",
          explanation: "Writing {1} ∈ {1, 2, 3} or 1 ⊆ {1, 2, 3}. Elements belong (∈) to sets; sets of elements are subsets (⊆) of sets."
        },
        {
          title: "Empty Set Element Trap: {∅} vs ∅",
          severity: "Examiner Penalty (1 Mark)",
          explanation: "∅ is the empty set with cardinality 0. But {∅} is a singleton set containing one element (the empty set), so |{∅}| = 1."
        },
        {
          title: "Double Counting in 3-Set Inclusion-Exclusion",
          severity: "Board Trap (2 Marks)",
          explanation: "Subtracting pairwise intersections without adding back the 3-set common core n(A ∩ B ∩ C) undercounts the true union cardinality."
        },
        {
          title: "Universal Set Boundary Miscalculation",
          severity: "Standard Deduction (1 Mark)",
          explanation: "Assuming n(A ∪ B) equals n(U) without checking whether individuals outside the survey categories exist: n(Neither) = n(U) - n(A ∪ B)."
        }
      ],
      challenges: [
        {
          title: "Challenge 1: Survey Cardinality & Intersection Double Counting",
          steps: [
            { stepNo: 1, text: "Given n(A)=25, n(B)=20, n(C)=15, pairwise intersections each 5, and all three shared by 2." },
            { stepNo: 2, text: "Calculate union: n(A ∪ B ∪ C) = 25 + 20 + 15 - 5 - 5 - 5 = 45." },
            { stepNo: 3, text: "Conclude total unique participants = 45." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: The pairwise intersections were subtracted, but the 3-set intersection n(A ∩ B ∩ C) = 2 was omitted! True formula adds it back: 60 - 15 + 2 = 47."
        },
        {
          title: "Challenge 2: Complement of Union (De Morgan Slip)",
          steps: [
            { stepNo: 1, text: "Let Universal set U = {1, 2, 3, 4, 5, 6}, A = {2, 3}, B = {3, 4, 5}." },
            { stepNo: 2, text: "Calculate A' = {1, 4, 5, 6} and B' = {1, 2, 6}." },
            { stepNo: 3, text: "Apply De Morgan: (A ∪ B)' = A' ∪ B' = {1, 2, 4, 5, 6}." }
          ],
          faultyStep: 3,
          deductionReason: "In Step 3: De Morgan's Law states (A ∪ B)' = A' ∩ B' (intersection, NOT union!). The correct intersection is {1, 6}."
        },
        {
          title: "Challenge 3: Power Set Cardinality Calculation",
          steps: [
            { stepNo: 1, text: "Given set A = {∅, {1}, 2}." },
            { stepNo: 2, text: "Identify number of elements: Since ∅ is empty, n(A) = 2." },
            { stepNo: 3, text: "Total subsets |P(A)| = 2^2 = 4 subsets." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: ∅ is \tan explicit element inside set A, so n(A) = 3 (elements are ∅, {1}, and 2). True subsets = 2^3 = 8."
        },
        {
          title: "Challenge 4: Symmetric Difference Algebraic Formulation",
          steps: [
            { stepNo: 1, text: "Define symmetric difference A Δ B as elements belonging to exactly one set." },
            { stepNo: 2, text: "Express as union of differences: A Δ B = (A - B) ∪ (B - A)." },
            { stepNo: 3, text: "Substitute equivalent form: A Δ B = (A ∪ B) ∩ (A ∩ B)." }
          ],
          faultyStep: 3,
          deductionReason: "In Step 3: A Δ B = (A ∪ B) - (A ∩ B) (difference/subtraction, not intersection!)."
        },
        {
          title: "Challenge 5: Proper Subsets vs Subsets Counting",
          steps: [
            { stepNo: 1, text: "Let set S contain 5 distinct letters: |S| = 5." },
            { stepNo: 2, text: "Formula for non-empty proper subsets is 2^n - 1." },
            { stepNo: 3, text: "Evaluate: 2^5 - 1 = 32 - 1 = 31 subsets." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: The question asks for non-empty proper subsets. Exclude both S and ∅: 2^n - 2 = 32 - 2 = 30."
        }
      ]
    },
    diagnostics: [
      {
        q: "In a committee of 50 people, 35 speak Hindi, 25 speak English, and all speak at least one of these two languages. How many speak both languages?",
        difficulty: "Board Standard",
        options: ["10", "15", "20", "25"],
        correct: 0,
        solution: "n(H ∪ E) = n(H) + n(E) - n(H ∩ E) ⟹ 50 = 35 + 25 - n(H ∩ E) ⟹ n(H ∩ E) = 60 - 50 = 10."
      },
      {
        q: "If set A has 4 elements, what is the total number of non-empty proper subsets of A?",
        difficulty: "Tricky Trap",
        options: ["16", "15", "14", "13"],
        correct: 2,
        solution: "Total subsets = 2^4 = 16. Proper subsets exclude A (-1). Non-empty subsets exclude ∅ (-1). Total = 16 - 2 = 14."
      },
      {
        q: "In a town of 10,000 families, 40% buy newspaper A, 20% buy B, 10% buy C, 5% buy A and B, 3% buy B and C, and 4% buy A and C. If 2% buy all three, how many families buy newspaper A only?",
        difficulty: "HOTS Problem",
        options: ["3,300", "4,000", "3,100", "2,800"],
        correct: 0,
        solution: "% buying only A = 40% - 5% - 4% + 2% = 33%. Families = 33% of 10,000 = 3,300."
      },
      {
        q: "Let A and B be two sets such that n(A) = 3 and n(B) = 6. What is the minimum possible value of n(A ∪ B)?",
        difficulty: "Conceptual MCQ",
        options: ["3", "6", "9", "0"],
        correct: 1,
        solution: "n(A ∪ B) = 3 + 6 - n(A ∩ B) = 9 - n(A ∩ B). Min value occurs when A ⊆ B, max n(A ∩ B) = 3. Min n(A ∪ B) = 9 - 3 = 6."
      },
      {
        q: "For any two sets A and B, what is (A - B) ∪ (B - A) equal to?",
        difficulty: "Symmetric Difference",
        options: ["(A ∪ B) - (A ∩ B)", "A ∩ B", "A ∪ B", "A' ∩ B'"],
        correct: 0,
        solution: "(A - B) ∪ (B - A) is the Symmetric Difference A Δ B: (A ∪ B) - (A ∩ B)."
      }
    ]
  },

  M11_CH02: {
    code: "Chapter 02",
    name: "Relations and Functions",
    weight: 6,
    desc: "Ordered pairs, Cartesian product, domain, co-domain and range of a relation, real-valued functions.",
    overview: `<div class="space-y-6">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Intuition</span>
        <h3 class="text-xl font-black text-white">The Functional Machine: Single-Valued Determinism</h3>
        <p class="text-xs text-slate-300 leading-relaxed">
          Think of a vending machine: if you press code <strong>B4</strong>, you expect it to drop a packet of chips every single time. If code B4 dropped chips on Monday and coffee on Tuesday, the machine is broken. That is the exact mathematical difference between \tan arbitrary <strong>Relation</strong> and a strict <strong>Function</strong>: a function is a deterministic system where every element in the domain must map to <em>exactly one</em> unique element in the codomain.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
          <span class="text-indigo-400 font-bold block text-sm">Cartesian Product ($A \times B$)</span>
          <p class="text-slate-300 leading-relaxed">Set of all ordered pairs $(a, b)$ where $a \in A$ and $b \in B$. Order matters: $(1, 2) \ne (2, 1)$.</p>
        </div>
        <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
          <span class="text-indigo-400 font-bold block text-sm">Domain vs Codomain vs Range</span>
          <p class="text-slate-300 leading-relaxed"><strong>Domain:</strong> Set of all valid inputs.<br><strong>Codomain:</strong> Target set of all possible outputs.<br><strong>Range:</strong> Subset of codomain actually hit by mappings.</p>
        </div>
        <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
          <span class="text-indigo-400 font-bold block text-sm">The Vertical Line Test</span>
          <p class="text-slate-300 leading-relaxed">If any vertical line intersects a curve at more than one point, that single input $x$ yields multiple contradictory outputs $y$, violating function rules.</p>
        </div>
      </div>
    </div>`,

    exp1: `<div class="space-y-6 text-xs text-slate-300">
      <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">Standard Real-Valued Functions: Domain & Range Cheat Sheet</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300 font-mono text-[11px]">
          <div class="p-2.5 bg-surface rounded-lg border border-slate-800">
            <strong class="text-white">Modulus:</strong> $f(x) = |x|$<br>Domain: $\mathbb{R}$, Range: $[0, \infty)$
          </div>
          <div class="p-2.5 bg-surface rounded-lg border border-slate-800">
            <strong class="text-white">Signum:</strong> $\text{sgn}(x) = x/|x|$ for $x \ne 0$, $0$ at $0$<br>Domain: $\mathbb{R}$, Range: $\{-1, 0, 1\}$
          </div>
          <div class="p-2.5 bg-surface rounded-lg border border-slate-800">
            <strong class="text-white">Greatest Integer:</strong> $f(x) = [x]$<br>Domain: $\mathbb{R}$, Range: $\mathbb{Z}$
          </div>
          <div class="p-2.5 bg-surface rounded-lg border border-slate-800">
            <strong class="text-white">Reciprocal:</strong> $f(x) = 1/x$<br>Domain: $\mathbb{R} - \{0\}$, Range: $\mathbb{R} - \{0\}$
          </div>
        </div>
      </div>

      <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-3">
        <span class="text-indigo-400 font-bold text-sm">WORKED NUMERICAL 1: Rational Square Root Function Domain & Range</span>
        <p class="text-slate-200">
          <strong>Problem:</strong> Find the domain and range of the real function $f(x) = \\sqrt{16 - x^2}$.
        </p>
        <div class="p-4 bg-background rounded-lg border border-slate-800 space-y-2 text-slate-300">
          <p><strong class="text-emerald-400">Step 1: Domain:</strong> $16 - x^2 \ge 0 \implies (4 - x)(4 + x) \ge 0 \implies (x - 4)(x + 4) \le 0 \implies x \in [-4, 4]$.</p>
          <p><strong class="text-emerald-400">Step 2: Range:</strong> Since $x \in [-4, 4]$, $x^2 \in [0, 16]$. Thus $16 - x^2 \in [0, 16]$, so $y = \\sqrt{16 - x^2} \in [0, 4]$.</p>
        </div>
      </div>

      <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-3">
        <span class="text-indigo-400 font-bold text-sm">WORKED NUMERICAL 2: Modulus Linear Piecewise Range Analysis</span>
        <p class="text-slate-200">
          <strong>Problem:</strong> Find the domain and range of the function $f(x) = 1 - |x - 3|$.
        </p>
        <div class="p-4 bg-background rounded-lg border border-slate-800 space-y-2 text-slate-300">
          <p><strong class="text-emerald-400">Step 1: Domain:</strong> $|x - 3|$ is defined for all real numbers. <strong>Domain: $\mathbb{R}$</strong>.</p>
          <p><strong class="text-emerald-400">Step 2: Range:</strong> Since $|x - 3| \ge 0$ for all $x \in \mathbb{R}$, multiplying by $-1$ gives $-|x - 3| \le 0$.<br>
          Adding 1 to both sides: $1 - |x - 3| \le 1$.<br>
          Maximum value is 1 (at $x = 3$), and values extend down to $-\infty$.<br>
          <strong>Range: $(-\infty, 1]$</strong>.</p>
        </div>
      </div>
    </div>`,
    exp2: `<div class="space-y-6 text-xs text-slate-300">
      <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-4">
        <div class="border-b border-slate-700 pb-2.5 flex items-center justify-between">
          <h3 class="font-black text-white text-sm">PROOF 1: Cartesian Product Distributive Identity</h3>
          <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px]">Theorem Proof</span>
        </div>
        <p class="text-slate-400">Prove that: $A \times (B \cap C) = (A \times B) \cap (A \times C)$.</p>
        <div class="space-y-2 leading-relaxed font-mono">
          <p>1. Let $(x, y) \in A \times (B \cap C)$.<br>
          2. $\implies x \in A \text{ and } y \in (B \cap C)$.<br>
          3. $\implies x \in A \text{ and } (y \in B \text{ and } y \in C)$.<br>
          4. $\implies (x \in A \text{ and } y \in B) \text{ and } (x \in A \text{ and } y \in C)$.<br>
          5. $\implies (x, y) \in (A \times B) \text{ and } (x, y) \in (A \times C)$.<br>
          6. $\implies (x, y) \in [(A \times B) \cap (A \times C)]$.<br>
          7. Thus, $A \times (B \cap C) \\subseteq (A \times B) \cap (A \times C)$.<br>
          8. Reversing steps proves $[(A \times B) \cap (A \times C)] \\subseteq A \times (B \cap C)$.<br>
          <span class="text-emerald-400 font-bold font-sans">∴ $A \times (B \cap C) = (A \times B) \cap (A \times C)$. [Q.E.D.]</span></p>
        </div>
      </div>

      <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-4">
        <h3 class="font-black text-white text-sm">PROOF 2: Total Number of Subsets & Relations Formulation</h3>
        <div class="space-y-2 leading-relaxed font-mono">
          <p>Let $n(A) = p$ and $n(B) = q$.<br>
          1. $A \times B = \{(a, b) : a \in A, b \in B\}$. Each pair has $p$ choices for $a$ and $q$ choices for $b$, so $n(A \times B) = pq$.<br>
          2. A relation $R$ is defined as any subset of $A \times B$.<br>
          3. The number of subsets of a set with $N$ elements is $2^N$. Here $N = pq$.<br>
          4. Therefore, total possible relations from $A$ to $B$ is exactly $2^{pq}$.</p>
        </div>
      </div>
    </div>`,
    errorFinder: {
      traps: [
        {
          title: "Denominator Zero Exclusion in Rational Functions",
          severity: "Critical (Full Mark Deduction)",
          explanation: "Writing domain of 1/(x^2 - 4) as x >= 2 or x <= -2 instead of all real numbers except the singular roots: R - {-2, 2}."
        },
        {
          title: "Even Radical vs Odd Radical Preconditions",
          severity: "High (1-2 Marks Lost)",
          explanation: "Assuming odd radicals like cbrt(x) require x >= 0. Only even radicals (square roots, 4th roots) restrict radicands to non-negative reals."
        },
        {
          title: "Open vs Closed Interval on Range Boundaries",
          severity: "Examiner Penalty (1/2 Mark)",
          explanation: "Confusing open ( ) and closed [ ] brackets when stating ranges of bounded rational functions like x^2 / (1 + x^2)."
        },
        {
          title: "Relation vs Function One-to-Many Violation",
          severity: "Board Trap (1 Mark)",
          explanation: "Assuming {(2, 3), (2, 5), (3, 7)} is a function because all elements in domain are covered, ignoring input 2 mapping to two outputs."
        }
      ],
      challenges: [
        {
          title: "Challenge 1: Rational Square Root Function Domain",
          steps: [
            { stepNo: 1, text: "Given f(x) = 1 / √(25 - x²)." },
            { stepNo: 2, text: "Precondition for real values: 25 - x² ≥ 0." },
            { stepNo: 3, text: "Conclude Domain: x ∈ [-5, 5]." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Because the radical is in the denominator, it cannot equal 0! The condition must be strictly 25 - x² > 0, yielding the open interval (-5, 5)."
        },
        {
          title: "Challenge 2: Greatest Integer Function Evaluation",
          steps: [
            { stepNo: 1, text: "Evaluate greatest integer function f(x) = [x] at x = -3.7." },
            { stepNo: 2, text: "Take integer part directly by truncating decimal: [-3.7] = -3." },
            { stepNo: 3, text: "Conclude output = -3." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: [x] denotes the greatest integer less than or equal to x. Since -4 < -3.7 < -3, the greatest integer ≤ -3.7 is -4, not -3!"
        },
        {
          title: "Challenge 3: Range Determination via Quadratic Discriminant",
          steps: [
            { stepNo: 1, text: "Let y = x / (1 + x²). Rearrange as quadratic: y x² - x + y = 0." },
            { stepNo: 2, text: "For real x, discriminant D = (-1)² - 4(y)(y) ≥ 0 ⟹ 1 - 4y² ≥ 0." },
            { stepNo: 3, text: "Solve inequality: 4y² ≥ 1 ⟹ y ≥ 1/2 or y ≤ -1/2." }
          ],
          faultyStep: 3,
          deductionReason: "In Step 3: 1 - 4y² ≥ 0 gives 4y² ≤ 1, which means -1/2 ≤ y ≤ 1/2. The student flipped the inequality sign!"
        },
        {
          title: "Challenge 4: Modulus Function Domain Restriction",
          steps: [
            { stepNo: 1, text: "Given function f(x) = |x - 4| / (x - 4)." },
            { stepNo: 2, text: "State domain: Absolute values are defined for all reals, so Domain = R." },
            { stepNo: 3, text: "Range is {-1, 1}." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: At x = 4, the denominator becomes 0, creating a 0/0 singularity. The domain must exclude 4: Domain = R - {4}."
        },
        {
          title: "Challenge 5: Total Number of Functions Counting",
          steps: [
            { stepNo: 1, text: "Let set A = {1, 2, 3} and set B = {a, b}." },
            { stepNo: 2, text: "Each element in B can be chosen by elements of A, giving 3^2 = 9 functions." },
            { stepNo: 3, text: "Total functions = 9." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: The formula for total functions from A to B is |B|^|A|. Here |B| = 2 and |A| = 3, so total functions = 2^3 = 8, not 3^2 = 9!"
        }
      ]
    },
    diagnostics: [
      {
        q: "Find the domain of the real-valued function f(x) = 1 / √(9 - x²).",
        difficulty: "Singularity Trap",
        options: ["[-3, 3]", "(-3, 3)", "(-∞, -3) ∪ (3, ∞)", "[-9, 9]"],
        correct: 1,
        solution: "Denominator must be strictly positive: 9 - x² > 0 ⟹ x² < 9 ⟹ -3 < x < 3. Domain = (-3, 3). Boundary points are excluded."
      },
      {
        q: "Find the range of the function f(x) = x / (1 + x²).",
        difficulty: "Quadratic Range",
        options: ["[-1/2, 1/2]", "(-1/2, 1/2)", "[-1, 1]", "[0, 1/2]"],
        correct: 0,
        solution: "Let y = x / (1 + x²) ⟹ y x² - x + y = 0. For real x, D ≥ 0: 1 - 4y² ≥ 0 ⟹ -1/2 ≤ y ≤ 1/2. Range = [-1/2, 1/2]."
      },
      {
        q: "Let f = {(1, 1), (2, 3), (0, -1), (-1, -3)} be a linear function from Z to Z. Find f(x).",
        difficulty: "Board Standard",
        options: ["f(x) = 2x - 1", "f(x) = 2x + 1", "f(x) = 3x - 2", "f(x) = x - 1"],
        correct: 0,
        solution: "Let f(x) = mx + c. Since (0, -1) lies on f: c = -1. Since (1, 1) lies on f: m(1) - 1 = 1 ⟹ m = 2. Rule: f(x) = 2x - 1."
      },
      {
        q: "If A = {1, 2, 3} and B = {3, 8}, how many non-empty relations can be defined from A to B?",
        difficulty: "Set Counting",
        options: ["64", "63", "32", "31"],
        correct: 1,
        solution: "n(A × B) = 3 × 2 = 6. Total relations = 2^6 = 64. Non-empty relations exclude ∅: 64 - 1 = 63."
      },
      {
        q: "Find the domain of f(x) = √(x - 1) + √(5 - x).",
        difficulty: "Simultaneous Domain",
        options: ["[1, 5]", "(1, 5)", "[1, ∞)", "(-∞, 5]"],
        correct: 0,
        solution: "x - 1 ≥ 0 ⟹ x ≥ 1, and 5 - x ≥ 0 ⟹ x ≤ 5. Intersection: [1, 5]."
      }
    ]
  },

  M11_CH03: {
    code: "Chapter 03",
    name: "Trigonometric Functions",
    weight: 8,
    desc: "Angles, radian measure, signs of trigonometric functions, compound angles, and identities.",
    overview: `<div class="space-y-6">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Intuition</span>
        <h3 class="text-xl font-black text-white">Escaping Right Triangles: Circular Harmonic Projection</h3>
        <p class="text-xs text-slate-300 leading-relaxed">
          In Class 10, trigonometric ratios were chained inside right-angled triangles with acute angles ($0^\\circ$ to $90^\\circ$). In Class 11, trigonometry graduates to the <strong>Unit Circle</strong> ($x^2 + y^2 = 1$). A point moving counterclockwise at \tan angle $\theta$ from $(1, 0)$ has coordinates $(x, y) = (\cos \theta, \sin \theta)$. Because a circle can rotate indefinitely, angles can be any real number ($-\infty, \infty$), and $\sin$ and $\cos$ are harmonic projections modeling waves, music, and electrical alternating currents.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700">
          <strong class="text-indigo-400 block mb-1">Quadrant I (0 to π/2):</strong>
          All ratios positive (A).
        </div>
        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700">
          <strong class="text-indigo-400 block mb-1">Quadrant II (π/2 to π):</strong>
          Only $\sin, \csc$ positive (S).
        </div>
        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700">
          <strong class="text-indigo-400 block mb-1">Quadrant III (π to 3π/2):</strong>
          Only $\tan, \cot$ positive (T).
        </div>
        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700">
          <strong class="text-indigo-400 block mb-1">Quadrant IV (3π/2 to 2π):</strong>
          Only $\cos, \sec$ positive (C).
        </div>
      </div>
    </div>`,

    exp1: `<div class="space-y-6 text-xs text-slate-300">
      <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">The Master Trigonometry Formula Matrix</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[11px] text-white">
          <div class="p-3 bg-surface rounded-lg border border-slate-800 space-y-1">
            <span class="text-indigo-300 font-sans font-bold block text-xs">Compound Angle Identities:</span>
            sin(A ± B) = sin A cos B ± cos A sin B<br>
            cos(A ± B) = cos A cos B ∓ sin A sin B<br>
            tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)
          </div>
          <div class="p-3 bg-surface rounded-lg border border-slate-800 space-y-1">
            <span class="text-indigo-300 font-sans font-bold block text-xs">Transformation Formulas (Product to Sum):</span>
            2 sin A cos B = sin(A + B) + sin(A - B)<br>
            2 cos A sin B = sin(A + B) - sin(A - B)<br>
            2 cos A cos B = cos(A + B) + cos(A - B)<br>
            2 sin A sin B = cos(A - B) - cos(A + B)
          </div>
        </div>
      </div>

      <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-indigo-400 font-bold text-sm">WORKED NUMERICAL 1: Multi-Angle Cosine Product</span>
          <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px]">Frequent 4-Mark Board Exam Proof</span>
        </div>
        <p class="text-slate-200">
          <strong>Problem:</strong> Prove that: $\cos 20^\\circ \cos 40^\\circ \cos 60^\\circ \cos 80^\\circ = \frac{1}{16}$.
        </p>
        <div class="p-4 bg-background rounded-lg border border-slate-800 space-y-2 text-slate-300">
          <p><strong class="text-emerald-400">Step 1: Substitute $\cos 60^\\circ = 1/2$:</strong> $\frac{1}{2} [\cos 20^\\circ \cos 40^\\circ \cos 80^\\circ]$.</p>
          <p><strong class="text-emerald-400">Step 2: Group and expand:</strong> $\frac{1}{4} [2 \cos 40^\\circ \cos 20^\\circ] \cos 80^\\circ = \frac{1}{4} [\cos 60^\\circ + \cos 20^\\circ] \cos 80^\\circ$.</p>
          <p><strong class="text-emerald-400">Step 3: Distribute:</strong> $\frac{1}{8} \cos 80^\\circ + \frac{1}{8} [2 \cos 80^\\circ \cos 20^\\circ] = \frac{1}{8} \cos 80^\\circ + \frac{1}{8} [\cos 100^\\circ + \cos 60^\\circ]$.</p>
          <p><strong class="text-emerald-400">Step 4: Cancel terms:</strong> Since $\cos 100^\\circ = -\cos 80^\\circ$: $\frac{1}{8} \cos 80^\\circ - \frac{1}{8} \cos 80^\\circ + \frac{1}{16} = \mathbf{\frac{1}{16}}$.</p>
        </div>
      </div>

      <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-3">
        <span class="text-indigo-400 font-bold text-sm">WORKED NUMERICAL 2: Trigonometric Identity Elimination</span>
        <p class="text-slate-200">
          <strong>Problem:</strong> Prove that: $\frac{\sin 5x - 2 \sin 3x + \sin x}{\cos 5x - \cos x} = \tan x$.
        </p>
        <div class="p-4 bg-background rounded-lg border border-slate-800 space-y-2 text-slate-300">
          <p><strong class="text-emerald-400">Step 1: Group terms:</strong> Numerator: $(\sin 5x + \sin x) - 2 \sin 3x$.</p>
          <p><strong class="text-emerald-400">Step 2: Apply C-D formula:</strong> $\sin 5x + \sin x = 2 \sin 3x \cos 2x$.<br>
          Numerator = $2 \sin 3x (\cos 2x - 1) = -2 \sin 3x (2 \sin^2 x) = -4 \sin 3x \sin^2 x$.</p>
          <p><strong class="text-emerald-400">Step 3: Denominator C-D formula:</strong> $\cos 5x - \cos x = -2 \sin 3x \sin 2x = -4 \sin 3x \sin x \cos x$.</p>
          <p><strong class="text-emerald-400">Step 4: Divide:</strong> $\frac{-4 \sin 3x \sin^2 x}{-4 \sin 3x \sin x \cos x} = \frac{\sin x}{\cos x} = \mathbf{\tan x}$.</p>
        </div>
      </div>
    </div>`,
    exp2: `<div class="space-y-6 text-xs text-slate-300">
      <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-4">
        <div class="border-b border-slate-700 pb-2.5 flex items-center justify-between">
          <h3 class="font-black text-white text-base">PROOF 1: Fundamental Unit Circle Derivation of $\cos(x + y)$</h3>
          <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px]">Geometric Proof</span>
        </div>
        <div class="space-y-2 leading-relaxed font-mono">
          <p>1. On unit circle $x^2 + y^2 = 1$, let points be $P_0(1, 0)$, $P_1(\cos x, \sin x)$, $P_2(\cos(x+y), \sin(x+y))$, and $P_3(\cos(-y), \sin(-y)) = (\cos y, -\sin y)$.<br>
          2. Triangle $\\Delta P_0 O P_2$ is congruent to $\\Delta P_3 O P_1$ because central angle is $x + y$ for both.<br>
          3. Therefore, $(P_0 P_2)^2 = (P_3 P_1)^2$.<br>
          4. $(P_0 P_2)^2 = [\cos(x+y) - 1]^2 + \sin^2(x+y) = 2 - 2\cos(x+y)$.<br>
          5. $(P_3 P_1)^2 = (\cos x - \cos y)^2 + (\sin x + \sin y)^2 = 2 - 2(\cos x \cos y - \sin x \sin y)$.<br>
          6. Equating: $2 - 2\cos(x+y) = 2 - 2(\cos x \cos y - \sin x \sin y)$.<br>
          <span class="text-emerald-400 font-bold font-sans">∴ $\cos(x + y) = \cos x \cos y - \sin x \sin y$. [Q.E.D.]</span></p>
        </div>
      </div>

      <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-4">
        <h3 class="font-black text-white text-sm">PROOF 2: Derivation of $\tan(2x) = \frac{2 \tan x}{1 - \tan^2 x}$</h3>
        <div class="space-y-2 leading-relaxed font-mono">
          <p>1. Using $\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A \tan B}$.<br>
          2. Set $A = x$ and $B = x$:<br>
          $$\tan(x + x) = \frac{\tan x + \tan x}{1 - \tan x \tan x} \implies \mathbf{\tan 2x = \frac{2 \tan x}{1 - \tan^2 x}}$$</p>
        </div>
      </div>
    </div>`,
    errorFinder: {
      traps: [
        {
          title: "Quadrant Sign Inversion in Trig Transformations",
          severity: "Critical (2-3 Marks Lost)",
          explanation: "Evaluating cos(180° - θ) as +cos θ instead of -cos θ (Cosine is negative in Quadrant II)."
        },
        {
          title: "Dividing by Variable Trig Term (Losing Roots)",
          severity: "High (1-2 Marks Lost)",
          explanation: "Solving sin 2x = sin x by dividing both sides by sin x, discarding the critical roots where sin x = 0."
        },
        {
          title: "Principal Value Branch vs General Solution",
          severity: "Standard Deduction (1 Mark)",
          explanation: "Providing only the acute angle (e.g. θ = π/6) when CBSE questions explicitly mandate general solutions x = nπ ± (-1)^n α."
        },
        {
          title: "Negative Angle Parity: sin(-θ) vs cos(-θ)",
          severity: "Examiner Penalty (1 Mark)",
          explanation: "Treating cosine like sine: cos(-θ) = -cos θ (WRONG). Cosine is \tan even function: cos(-θ) = +cos θ."
        }
      ],
      challenges: [
        {
          title: "Challenge 1: Dividing by Variable Trig Terms (Root Loss)",
          steps: [
            { stepNo: 1, text: "Given equation: sin 2x + cos x = 0." },
            { stepNo: 2, text: "Expand: 2 sin x cos x + cos x = 0. Divide both sides by cos x: 2 sin x + 1 = 0." },
            { stepNo: 3, text: "sin x = -1/2 ⟹ x = nπ + (-1)^n (-π/6)." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Dividing by cos x forfeits the entire solution set where cos x = 0 (x = (2n+1)π/2). You must factor out cos x: cos x (2 sin x + 1) = 0!"
        },
        {
          title: "Challenge 2: Quadrant Sign Determination for cos x",
          steps: [
            { stepNo: 1, text: "Given sin x = 3/5 with x in Quadrant II (π/2 < x < π)." },
            { stepNo: 2, text: "Calculate cos x = √(1 - sin²x) = √(1 - 9/25) = √(16/25) = 4/5." },
            { stepNo: 3, text: "Evaluate tan x = sin x / cos x = (3/5) / (4/5) = 3/4." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: In Quadrant II, cosine is strictly negative! cos x = -√(1 - 9/25) = -4/5. Consequently, tan x = -3/4."
        },
        {
          title: "Challenge 3: C-D Formula Sign Inversion",
          steps: [
            { stepNo: 1, text: "Express cos C - cos D in product form." },
            { stepNo: 2, text: "Apply formula: cos C - cos D = 2 sin((C+D)/2) sin((D-C)/2)." },
            { stepNo: 3, text: "Rewrite as: cos C - cos D = 2 sin((C+D)/2) sin((C-D)/2)." }
          ],
          faultyStep: 3,
          deductionReason: "In Step 3: sin((D-C)/2) = -sin((C-D)/2). Omission of the negative sign flips the product sign: cos C - cos D = -2 sin((C+D)/2) sin((C-D)/2)."
        },
        {
          title: "Challenge 4: Radian to Degree Conversion",
          steps: [
            { stepNo: 1, text: "Convert 6 radians into degree measure." },
            { stepNo: 2, text: "Formula: Degrees = Radians × (180 / π)." },
            { stepNo: 3, text: "Substitute π = 22/7: 6 × (180 / (22/7)) = 6 × 180 × 22 / 7 = 3394°." }
          ],
          faultyStep: 3,
          deductionReason: "In Step 3: Inverting the fraction (22/7) was computed incorrectly: dividing by (22/7) is multiplying by (7/22), not (22/7)! Correct = 6 × 180 × 7 / 22 = 343° 38' 11''."
        },
        {
          title: "Challenge 5: Double Angle Tangent Application",
          steps: [
            { stepNo: 1, text: "Given tan x = 1/2. Find tan 2x." },
            { stepNo: 2, text: "Apply formula: tan 2x = 2 tan x / (1 + tan²x)." },
            { stepNo: 3, text: "Calculate: (2 × 1/2) / (1 + 1/4) = 1 / (5/4) = 4/5." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: The formula for tan 2x has a minus in the denominator: 2 tan x / (1 - tan²x). 2 tan x / (1 + tan²x) is sin 2x!"
        }
      ]
    },
    diagnostics: [
      {
        q: "If tan A = 1/2 and tan B = 1/3, what is the value of (A + B)?",
        difficulty: "Board Classic",
        options: ["π/6 (30°)", "π/4 (45°)", "π/3 (60°)", "π/2 (90°)"],
        correct: 1,
        solution: "tan(A + B) = (1/2 + 1/3) / (1 - 1/6) = (5/6)/(5/6) = 1 ⟹ A + B = π/4 (45°)."
      },
      {
        q: "If sin x = 3/5, cos y = -12/13, where x and y both lie in the second quadrant, find sin(x + y).",
        difficulty: "Quadrant Sign Trap",
        options: ["-56/65", "-33/65", "56/65", "16/65"],
        correct: 0,
        solution: "In Q2, cos x = -4/5, sin y = +5/13. sin(x + y) = (3/5)(-12/13) + (-4/5)(5/13) = -36/65 - 20/65 = -56/65."
      },
      {
        q: "What is the value of (sin 7x - sin 5x) / (cos 7x + cos 5x)?",
        difficulty: "C-D Ratio",
        options: ["tan x", "cot x", "tan 6x", "cot 6x"],
        correct: 0,
        solution: "Numerator: 2 cos 6x sin x. Denominator: 2 cos 6x cos x. Ratio = sin x / cos x = tan x."
      },
      {
        q: "Find the general solution of sin 2x + cos x = 0.",
        difficulty: "Trig Equation",
        options: ["x = (2n+1)π/2 or nπ + (-1)^n (-π/6)", "x = nπ ± π/6", "x = 2nπ ± π/3", "x = nπ/2"],
        correct: 0,
        solution: "cos x (2 sin x + 1) = 0 ⟹ cos x = 0 gives x = (2n + 1)π/2; sin x = -1/2 gives x = nπ + (-1)^n (-π/6)."
      },
      {
        q: "The value of cos 1° cos 2° cos 3° ... cos 179° is:",
        difficulty: "Zero Product Trap",
        options: ["0", "1", "-1", "1/2"],
        correct: 0,
        solution: "The product contains the intermediate term cos 90° = 0, so the entire continuous product evaluates to 0."
      }
    ]
  },

  M11_CH04: {
    code: "Chapter 04",
    name: "Complex Numbers & Quadratic Equations",
    weight: 5,
    desc: "Imaginary unit i, modulus, argument, conjugate, and roots of negative discriminant quadratics.",
    overview: `<div class="space-y-6">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Intuition</span>
        <h3 class="text-xl font-black text-white">The Complex Plane: 90-Degree Orthogonal Rotation</h3>
        <p class="text-xs text-slate-300 leading-relaxed">
          For centuries, mathematicians discarded $x^2 + 1 = 0$ as "impossible" because multiplying any real number by itself lands on the positive side of the 1D line ($x^2 \ge 0$). But if you treat numbers as vectors in a 2D plane: multiplying by $-1$ is a $180^\\circ$ rotation. If doing \tan operation twice yields a $180^\\circ$ flip, doing it once must be a <strong>$90^\\circ$ rotation</strong> into the orthogonal vertical axis! That vertical unit vector is named $i = \\sqrt{-1}$. Thus, complex numbers $z = a + ib$ are points in \tan Argand Plane.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700">
          <strong class="text-indigo-400 block mb-1">Modulus ($|z|$):</strong>
          The Euclidean distance from origin: $|z| = \\sqrt{a^2 + b^2}$.
        </div>
        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700">
          <strong class="text-indigo-400 block mb-1">Conjugate ($\bar{z}$):</strong>
          Geometric reflection across the real axis: $\bar{z} = a - ib$.
        </div>
        <div class="p-3 bg-surfaceLight rounded-xl border border-slate-700">
          <strong class="text-indigo-400 block mb-1">Principal Argument ($\theta$):</strong>
          The angle $\theta = \text{Arg}(z)$ strictly bounded in $(-\\pi, \\pi]$.
        </div>
      </div>
    </div>`,

    exp1: `<div class="space-y-6 text-xs text-slate-300">
      <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">Formulas & Algebraic Identities</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[11px] text-white">
          <div class="p-3 bg-surface rounded-lg border border-slate-800 space-y-1">
            <span class="text-indigo-300 font-sans font-bold block text-xs">Conjugate & Modulus Relations:</span>
            z · z̄ = |z|²<br>
            z⁻¹ = z̄ / |z|²<br>
            |z1 · z2| = |z1| · |z2|<br>
            |z1 / z2| = |z1| / |z2|
          </div>
          <div class="p-3 bg-surface rounded-lg border border-slate-800 space-y-1">
            <span class="text-indigo-300 font-sans font-bold block text-xs">Quadratic Equation with D < 0:</span>
            ax² + bx + c = 0<br>
            D = b² - 4ac < 0<br>
            Roots: x = (-b ± i√|D|) / 2a
          </div>
        </div>
      </div>

      <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-indigo-400 font-bold text-sm">WORKED NUMERICAL 1: Modulus-Amplitude Polar Conversion</span>
          <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px]">Board Classic 4-Marks</span>
        </div>
        <p class="text-slate-200">
          <strong>Problem:</strong> Convert $z = \frac{1 + 7i}{(2 - i)^2}$ into polar form.
        </p>
        <div class="p-4 bg-background rounded-lg border border-slate-800 space-y-2 text-slate-300">
          <p><strong class="text-emerald-400">Step 1: Simplify denominator:</strong> $(2 - i)^2 = 4 - 4i - 1 = 3 - 4i$.</p>
          <p><strong class="text-emerald-400">Step 2: Multiply by conjugate:</strong> $z = \frac{(1 + 7i)(3 + 4i)}{3^2 + 4^2} = \frac{3 + 25i - 28}{25} = -1 + i$.</p>
          <p><strong class="text-emerald-400">Step 3: Modulus and Argument:</strong> $r = \\sqrt{(-1)^2 + 1^2} = \\sqrt{2}$. Point $(-1, 1)$ lies in Q2: $\theta = \\pi - \\pi/4 = 3\\pi/4$.<br>
          <strong>Polar form: $z = \\sqrt{2} (\cos \frac{3\\pi}{4} + i \sin \frac{3\\pi}{4})$.</strong></p>
        </div>
      </div>

      <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-3">
        <span class="text-indigo-400 font-bold text-sm">WORKED NUMERICAL 2: Quadratic Equation with Negative Discriminant</span>
        <p class="text-slate-200">
          <strong>Problem:</strong> Solve $\\sqrt{2} x^2 + x + \\sqrt{2} = 0$.
        </p>
        <div class="p-4 bg-background rounded-lg border border-slate-800 space-y-2 text-slate-300">
          <p><strong class="text-emerald-400">Step 1: Discriminant:</strong> $D = b^2 - 4ac = 1^2 - 4(\\sqrt{2})(\\sqrt{2}) = 1 - 8 = -7$.</p>
          <p><strong class="text-emerald-400">Step 2: Roots:</strong> $x = \frac{-1 \pm \\sqrt{-7}}{2\\sqrt{2}} = \frac{-1 \pm i\\sqrt{7}}{2\\sqrt{2}}$.</p>
        </div>
      </div>
    </div>`,
    exp2: `<div class="space-y-6 text-xs text-slate-300">
      <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-4">
        <div class="border-b border-slate-700 pb-2.5 flex items-center justify-between">
          <h3 class="font-black text-white text-base">PROOF 1: Derivation of Square Root of Complex Number</h3>
          <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px]">Full Board Derivation</span>
        </div>
        <div class="space-y-2 leading-relaxed font-mono">
          <p>1. Let $\\sqrt{a + ib} = x + iy$. Squaring: $a + ib = (x^2 - y^2) + 2ixy$.<br>
          2. $x^2 - y^2 = a$ &nbsp;[1] &nbsp;and&nbsp; $2xy = b$ &nbsp;[2].<br>
          3. Using $(x^2 + y^2)^2 = (x^2 - y^2)^2 + (2xy)^2 = a^2 + b^2 \implies x^2 + y^2 = \\sqrt{a^2 + b^2} = |z|$ &nbsp;[3].<br>
          4. Adding [1] + [3]: $2x^2 = |z| + a \implies x = \pm \\sqrt{\frac{|z| + a}{2}}$.<br>
          5. Subtracting [1] from [3]: $2y^2 = |z| - a \implies y = \pm \\sqrt{\frac{|z| - a}{2}}$.<br>
          6. If $b > 0$, $xy > 0$ (same signs). If $b < 0$, $xy < 0$ (opposite signs).<br>
          <span class="text-emerald-400 font-bold font-sans">∴ $\\sqrt{a + ib} = \pm \left[ \\sqrt{\frac{|z| + a}{2}} + i \,\text{sgn}(b) \\sqrt{\frac{|z| - a}{2}} \right]$.</span></p>
        </div>
      </div>

      <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-4">
        <h3 class="font-black text-white text-sm">PROOF 2: Modulus Multiplicative Property $|z_1 z_2| = |z_1| |z_2|$</h3>
        <div class="space-y-2 leading-relaxed font-mono">
          <p>1. Recall that $|z|^2 = z \cdot \bar{z}$.<br>
          2. $|z_1 z_2|^2 = (z_1 z_2) \cdot \overline{(z_1 z_2)} = (z_1 z_2) (\bar{z}_1 \bar{z}_2)$.<br>
          3. By commutativity: $= (z_1 \bar{z}_1) (z_2 \bar{z}_2) = |z_1|^2 |z_2|^2$.<br>
          4. Taking positive square root on both sides: $|z_1 z_2| = |z_1| |z_2|$.</p>
        </div>
      </div>
    </div>`,
    errorFinder: {
      traps: [
        {
          title: "Incorrect Multiplicative Property: √a · √b = √(ab)",
          severity: "Critical Foundation Trap",
          explanation: "Assuming √(-a) · √(-b) = √((-a)(-b)) = √(ab). This identity only holds if at least one of a or b is non-negative! √(-1) · √(-1) = i · i = -1, not √1 = 1."
        },
        {
          title: "Principal Argument Quadrant Rules",
          severity: "High (1-2 Marks Lost)",
          explanation: "Calculating Arg(z) as simply tan^(-1)(b/a). For z in Q2, θ = π - α; for Q3, θ = -(π - α); for Q4, θ = -α."
        },
        {
          title: "Square Root of Negative Real Discrimant",
          severity: "Examiner Penalty (1 Mark)",
          explanation: "Writing √(-25) = ±5 instead of 5i. Real square roots do not produce imaginary signs without explicit imaginary unit i."
        },
        {
          title: "Conjugate Distribution Over Quotients",
          severity: "Standard Deduction (1 Mark)",
          explanation: "Forgetting to take conjugate of both numerator and denominator when simplifying rational expressions: (z1 / z2)̄ = z̄1 / z̄2."
        }
      ],
      challenges: [
        {
          title: "Challenge 1: The Product of Imaginary Radicals Fallacy",
          steps: [
            { stepNo: 1, text: "Evaluate the product: √(-25) × √(-4)." },
            { stepNo: 2, text: "Combine radicals: √[(-25) × (-4)] = √(100)." },
            { stepNo: 3, text: "Evaluate real square root: √(100) = 10." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: The radical property √a · √b = √(ab) is invalid when both a and b are negative! √(-25) = 5i and √(-4) = 2i, giving 5i × 2i = 10 i² = -10."
        },
        {
          title: "Challenge 2: Principal Argument in Quadrant III",
          steps: [
            { stepNo: 1, text: "Find principal argument of z = -1 - i√3." },
            { stepNo: 2, text: "Acute angle α = tan⁻¹(|-√3 / -1|) = tan⁻¹(√3) = π/3." },
            { stepNo: 3, text: "Since point (-1, -√3) is in Q3, argument θ = π + α = π + π/3 = 4π/3." }
          ],
          faultyStep: 3,
          deductionReason: "In Step 3: CBSE principal argument is strictly bounded in (-π, π]. For Quadrant III, θ = -(π - α) = -(π - π/3) = -2π/3. 4π/3 is outside the principal value branch!"
        },
        {
          title: "Challenge 3: Modulus of Complex Quotient",
          steps: [
            { stepNo: 1, text: "Find modulus of z = (1 + 3i) / (1 - 2i)." },
            { stepNo: 2, text: "Expand quotient by multiplying by (1 + 2i): (1 + 3i)(1 + 2i) / (1 - 4) = (-5 + 5i) / -3." },
            { stepNo: 3, text: "Calculate modulus." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: In the denominator, (1 - 2i)(1 + 2i) = 1² - (2i)² = 1 + 4 = 5, not -3! (Or use |z1 / z2| = |z1| / |z2| = √10 / √5 = √2)."
        },
        {
          title: "Challenge 4: Negative Power of Imaginary Unit i",
          steps: [
            { stepNo: 1, text: "Simplify i^(-35)." },
            { stepNo: 2, text: "Express as reciprocal: 1 / i^35." },
            { stepNo: 3, text: "Divide 35 by 4: remainder is 3, so i^35 = i^3 = -i. 1 / (-i) = -1/i = -(-i) = -i." }
          ],
          faultyStep: 3,
          deductionReason: "In Step 3: 1 / (-i) = i / (-i²) = i / 1 = +i. The student made a double negative sign mistake."
        },
        {
          title: "Challenge 5: Quadratic Formula Roots with D < 0",
          steps: [
            { stepNo: 1, text: "Solve: x² + 2x + 5 = 0." },
            { stepNo: 2, text: "Discriminant D = 2² - 4(1)(5) = 4 - 20 = -16." },
            { stepNo: 3, text: "Roots: x = (-2 ± √(-16)) / 2 = (-2 ± 4) / 2 ⟹ x = 1 or x = -3." }
          ],
          faultyStep: 3,
          deductionReason: "In Step 3: √(-16) is not 4, it is 4i! The roots are (-2 ± 4i) / 2 = -1 ± 2i."
        }
      ]
    },
    diagnostics: [
      {
        q: "If (x + iy)³ = u + iv, evaluate u/x + v/y.",
        difficulty: "NCERT Exemplar",
        options: ["4(x² - y²)", "2(x² - y²)", "4(x² + y²)", "-4(x² - y²)"],
        correct: 0,
        solution: "(x + iy)³ = (x³ - 3xy²) + i(3x²y - y³). u/x = x² - 3y², v/y = 3x² - y². Sum = 4x² - 4y² = 4(x² - y²)."
      },
      {
        q: "Find the modulus of (1 + i)/(1 - i) - (1 - i)/(1 + i).",
        difficulty: "Simplification",
        options: ["2", "1", "√2", "0"],
        correct: 0,
        solution: "(1 + i)/(1 - i) = i. (1 - i)/(1 + i) = -i. Value = i - (-i) = 2i. Modulus |2i| = 2."
      },
      {
        q: "If |z + 1| = z + 2(1 + i), find complex number z.",
        difficulty: "HOTS Algebraic",
        options: ["1/2 - 2i", "3/2 - 2i", "-1/2 + 2i", "2 - i"],
        correct: 0,
        solution: "Let z = x + iy. Equating real and imaginary parts gives y = -2 and x = 1/2. Hence z = 1/2 - 2i."
      },
      {
        q: "What is the principal argument of z = -1 - i√3?",
        difficulty: "Quadrant III Trap",
        options: ["-2π/3", "4π/3", "-π/3", "2π/3"],
        correct: 0,
        solution: "tan α = √3 ⟹ α = π/3. In Q3, principal argument = -(π - α) = -2π/3."
      },
      {
        q: "Find the smallest positive integer n for which ((1 + i)/(1 - i))^n = 1.",
        difficulty: "Power of i",
        options: ["4", "2", "8", "1"],
        correct: 0,
        solution: "(1 + i)/(1 - i) = i. Smallest positive integer n such that i^n = 1 is 4."
      }
    ]
  },

  M11_CH05: {
    code: "Chapter 05",
    name: "Linear Inequalities",
    weight: 4,
    desc: "Algebraic solutions of linear inequalities in one and two variables, graphical feasibility regions.",
    overview: `<div class="space-y-4 p-5 rounded-2xl bg-surfaceLight border border-slate-700"><h3 class="font-bold text-white">Inequalities & Feasible Regions</h3><p class="text-xs text-slate-300">Linear constraints partition Euclidean space into feasible half-planes satisfying boundary equations.</p></div>`,
    exp1: `<div class="space-y-2 p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300"><p class="font-bold text-indigo-400">Sign Reversal Property:</p><p class="font-mono text-white">If a < b and k < 0, then ka > kb.</p></div>`,
    exp2: `<div class="p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300"><p class="font-bold text-white">Feasibility Test:</p><p>Substitute origin (0,0) into ax + by < c. If true, shade the half-plane containing (0,0); otherwise, shade the opposing side.</p></div>`,
    diagnostics: [
      {
        q: "Solve 30x < 200 when x is a natural number.",
        difficulty: "Easy",
        options: ["{1, 2, 3, 4, 5, 6}", "{0, 1, 2, 3, 4, 5, 6}", "{1, 2, 3, 4, 5, 6, 7}", "{x < 6.66}"],
        correct: 0,
        solution: "30x < 200 ⟹ x < 20/3 ≈ 6.66. Since x ∈ N, x ∈ {1, 2, 3, 4, 5, 6}."
      }
    ]
  },

  M11_CH06: {
    code: "Chapter 06",
    name: "Permutations and Combinations",
    weight: 6,
    desc: "Fundamental principle of counting, factorial n, derivations of nPr and nCr formulae.",
    overview: `<div class="space-y-4 p-5 rounded-2xl bg-surfaceLight border border-slate-700"><h3 class="font-bold text-white">Combinatorics</h3><p class="text-xs text-slate-300">Arrangements where order matters versus selections where order is irrelevant.</p></div>`,
    exp1: `<div class="space-y-2 p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300 font-mono text-white">nPr = n! / (n - r)!<br>nCr = n! / [r!(n - r)!]</div>`,
    exp2: `<div class="p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300"><p class="font-bold text-white">Proof of nCr = nPr / r!:</p><p>Every group of r distinct objects can be arranged among themselves in r! ways. Thus, nPr = nCr × r! ⟹ nCr = nPr / r!.</p></div>`,
    diagnostics: [
      {
        q: "Evaluate 8C3.",
        difficulty: "Easy",
        options: ["56", "336", "24", "112"],
        correct: 0,
        solution: "8C3 = (8 × 7 × 6) / (3 × 2 × 1) = 56."
      }
    ]
  },

  M11_CH07: {
    code: "Chapter 07",
    name: "Binomial Theorem",
    weight: 5,
    desc: "Statement and proof of the binomial theorem for positive integral indices, Pascal's triangle.",
    overview: `<div class="space-y-4 p-5 rounded-2xl bg-surfaceLight border border-slate-700"><h3 class="font-bold text-white">Polynomial Expansions</h3><p class="text-xs text-slate-300">Expanding powers of binomials via combinatorial coefficients.</p></div>`,
    exp1: `<div class="space-y-2 p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300 font-mono text-white">(a + b)^n = Σ [nCr · a^(n-r) · b^r]<br>T_(r+1) = nCr · a^(n-r) · b^r</div>`,
    exp2: `<div class="p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300"><p class="font-bold text-white">Pascal's Identity:</p><p>nCr + nC(r-1) = (n+1)Cr.</p></div>`,
    diagnostics: [
      {
        q: "How many terms are in the expansion of (x + a)^n?",
        difficulty: "Easy",
        options: ["n", "n - 1", "n + 1", "2n"],
        correct: 2,
        solution: "Since r runs from 0 to n inclusive, there are n + 1 terms."
      }
    ]
  },

  M11_CH08: {
    code: "Chapter 08",
    name: "Sequences and Series",
    weight: 7,
    desc: "Arithmetic and Geometric Progressions, arithmetic mean, geometric mean, sum of n terms.",
    overview: `<div class="space-y-4 p-5 rounded-2xl bg-surfaceLight border border-slate-700"><h3 class="font-bold text-white">Discrete Progressions</h3><p class="text-xs text-slate-300">Discrete progressions model uniform difference (AP) or exponential multiplication (GP).</p></div>`,
    exp1: `<div class="space-y-2 p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300 font-mono text-white">a_n = a · r^(n-1)<br>S_n = a(r^n - 1) / (r - 1)</div>`,
    exp2: `<div class="p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300"><p class="font-bold text-white">GP Sum Derivation:</p><p>S - rS = a(1 - r^n) ⟹ S = a(1 - r^n)/(1 - r).</p></div>`,
    diagnostics: [
      {
        q: "Find the 5th term of the GP: 3, 6, 12, 24, ...",
        difficulty: "Easy",
        options: ["36", "48", "96", "192"],
        correct: 1,
        solution: "a = 3, r = 2. a_5 = 3 × 2^4 = 48."
      }
    ]
  },

  M11_CH09: {
    code: "Chapter 09",
    name: "Straight Lines",
    weight: 6,
    desc: "Slope of a line, angle between two lines, various forms of line equations, distance of a point from a line.",
    overview: `<div class="space-y-4 p-5 rounded-2xl bg-surfaceLight border border-slate-700"><h3 class="font-bold text-white">Coordinate Geometry</h3><p class="text-xs text-slate-300">Representing 1D linear constraints in 2D Euclidean coordinate space.</p></div>`,
    exp1: `<div class="space-y-2 p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300 font-mono text-white">m = (y2 - y1) / (x2 - x1)<br>d = |Ax0 + By0 + C| / √(A² + B²)</div>`,
    exp2: `<div class="p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300"><p class="font-bold text-white">Perpendicular Distance Derivation:</p><p>Derived by computing the length of the projection segment onto the normal line.</p></div>`,
    diagnostics: [
      {
        q: "Find the distance between parallel lines 3x - 4y + 7 = 0 and 3x - 4y + 5 = 0.",
        difficulty: "Easy",
        options: ["2/5", "1/5", "2/25", "12/5"],
        correct: 0,
        solution: "d = |7 - 5| / √(3² + 4²) = 2/5."
      }
    ]
  },

  M11_CH10: {
    code: "Chapter 10",
    name: "Conic Sections",
    weight: 7,
    desc: "Standard equations and properties of circles, ellipses, parabolas, and hyperbolas.",
    overview: `<div class="space-y-4 p-5 rounded-2xl bg-surfaceLight border border-slate-700"><h3 class="font-bold text-white">Planar Slices of Cones</h3><p class="text-xs text-slate-300">Geometric curves formed by slicing a double circular cone with a plane.</p></div>`,
    exp1: `<div class="space-y-2 p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300 font-mono text-white">Parabola: y² = 4ax<br>Ellipse: x²/a² + y²/b² = 1</div>`,
    exp2: `<div class="p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300"><p class="font-bold text-white">Parabola Directrix Derivation:</p><p>(x - a)² + y² = (x + a)² ⟹ y² = 4ax.</p></div>`,
    diagnostics: [
      {
        q: "Find the eccentricity of the ellipse 4x² + 9y² = 36.",
        difficulty: "Board Standard",
        options: ["√5 / 3", "5 / 9", "2 / 3", "√5 / 2"],
        correct: 0,
        solution: "x²/9 + y²/4 = 1. b² = a²(1 - e²) ⟹ 4 = 9(1 - e²) ⟹ e = √5 / 3."
      }
    ]
  },

  M11_CH11: {
    code: "Chapter 11",
    name: "Introduction to Three-Dimensional Geometry",
    weight: 6,
    desc: "Coordinate axes, coordinates of a point, distance formula, and section formula in 3D.",
    overview: `<div class="space-y-4 p-5 rounded-2xl bg-surfaceLight border border-slate-700"><h3 class="font-bold text-white">Spatial Coordinates</h3><p class="text-xs text-slate-300">Three mutually perpendicular axes partitioning 3D space into 8 octants.</p></div>`,
    exp1: `<div class="space-y-2 p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300 font-mono text-white">d = √[(x2 - x1)² + (y2 - y1)² + (z2 - z1)²]</div>`,
    exp2: `<div class="p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300"><p class="font-bold text-white">3D Distance Formula Proof:</p><p>Extends 2D Pythagorean base diagonal by adding the vertical z component.</p></div>`,
    diagnostics: [
      {
        q: "In which octant does (-2, 4, -5) lie?",
        difficulty: "Easy",
        options: ["II", "IV", "VI", "VIII"],
        correct: 2,
        solution: "Signs (-, +, -) correspond to Octant VI."
      }
    ]
  },

  M11_CH12: {
    code: "Chapter 12",
    name: "Limits and Derivatives",
    weight: 4,
    desc: "Intuitive idea of limits, standard limits, limits of polynomials and trigonometric functions, derivative from first principles.",
    overview: `<div class="space-y-4 p-5 rounded-2xl bg-surfaceLight border border-slate-700"><h3 class="font-bold text-white">Foundations of Calculus</h3><p class="text-xs text-slate-300">Limits capture boundary behaviors; derivatives formalize instantaneous rates of change.</p></div>`,
    exp1: `<div class="space-y-2 p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300 font-mono text-white">lim(x→0) sin(x)/x = 1<br>f'(x) = lim(h→0) [f(x+h) - f(x)]/h</div>`,
    exp2: `<div class="p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300"><p class="font-bold text-white">Derivative of sin(x) Proof:</p><p>Uses limit of sin(h/2)/(h/2) to establish that d/dx sin(x) = cos(x).</p></div>`,
    diagnostics: [
      {
        q: "Evaluate lim(x→0) (sin 4x) / (sin 2x).",
        difficulty: "Board Standard",
        options: ["1", "2", "4", "1/2"],
        correct: 1,
        solution: "[(sin 4x / 4x) · 4x] / [(sin 2x / 2x) · 2x] = 4/2 = 2."
      }
    ]
  },

  M11_CH13: {
    code: "Chapter 13",
    name: "Statistics",
    weight: 5,
    desc: "Measures of dispersion: range, mean deviation, variance, and standard deviation of grouped/ungrouped data.",
    overview: `<div class="space-y-4 p-5 rounded-2xl bg-surfaceLight border border-slate-700"><h3 class="font-bold text-white">Measures of Dispersion</h3><p class="text-xs text-slate-300">Dispersion metrics quantify stability, variance, and scatter around central tendencies.</p></div>`,
    exp1: `<div class="space-y-2 p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300 font-mono text-white">Mean: x̄ = Σx_i / N<br>Variance: σ² = (1/N) Σx_i² - (x̄)²</div>`,
    exp2: `<div class="p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300"><p class="font-bold text-white">Variance Expansion Proof:</p><p>Expands squared differences to yield the computational formula (1/N) Σx_i² - (x̄)².</p></div>`,
    diagnostics: [
      {
        q: "If each observation in a dataset is multiplied by 3, what happens to the variance?",
        difficulty: "Board Concept Trap",
        options: ["Multiplied by 3", "Multiplied by 9", "Remains unchanged", "Multiplied by √3"],
        correct: 1,
        solution: "Variance scales by k²: 3² = 9."
      }
    ]
  },

  M11_CH14: {
    code: "Chapter 14",
    name: "Probability",
    weight: 5,
    desc: "Random experiments, outcomes, event types, axiomatic approach to probability.",
    overview: `<div class="space-y-4 p-5 rounded-2xl bg-surfaceLight border border-slate-700"><h3 class="font-bold text-white">Axiomatic Probability</h3><p class="text-xs text-slate-300">Probability formalized on subsets of sample spaces satisfying Kolmogorov axioms.</p></div>`,
    exp1: `<div class="space-y-2 p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300 font-mono text-white">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</div>`,
    exp2: `<div class="p-4 bg-surfaceLight rounded-xl border border-slate-700 text-xs text-slate-300"><p class="font-bold text-white">Addition Theorem Proof:</p><p>Decomposes union into disjoint partitions and applies the additive axiom.</p></div>`,
    diagnostics: [
      {
        q: "If P(A) = 3/5 and P(B) = 1/5 with A and B mutually exclusive, find P(A ∪ B).",
        difficulty: "Easy",
        options: ["4/5", "3/25", "2/5", "1/5"],
        correct: 0,
        solution: "P(A ∪ B) = 3/5 + 1/5 = 4/5."
      }
    ]
  }
};
