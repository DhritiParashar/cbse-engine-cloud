// frontend/data/mathChapters.js
window.mathChapterRegistry = {
    M10_CH01: {
        code: "Chapter 01", name: "Real Numbers", weight: 6,
        desc: "Master Prime Factorization, HCF/LCM fundamental relationships, and proof of irrationality by contradiction.",
        overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 01: Real Numbers & The DNA of Counting</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> The Lego Brick Metaphor
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                Imagine every whole number is a structure built out of indestructible Lego bricks called <strong>Prime Numbers</strong> ($2, 3, 5, 7, 11\dots$). You can break down a number like $12$ into $2 \times 2 \times 3$, but you can never break down the number $2$ or $3$ any further. Prime numbers are the fundamental "atoms" or "DNA" of all mathematics!
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Ancient merchants needed a way to package goods evenly (HCF) and align recurring schedules or planetary rotations (LCM). Later, Greek mathematicians discovered numbers like $\sqrt{2}$ that could not be written as simple ratios, creating the concept of <em>Irrational Numbers</em>.
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    <strong>Proof by Contradiction:</strong> To prove something impossible (like proving $\sqrt{5}$ is irrational), assume it IS rational! If that assumption leads to a logical absurdity (like a number being both even and odd), your original assumption MUST be wrong.
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Express composite numbers into prime exponential factors ($2^a \cdot 3^b \dots$).</li>
                                <li><strong>Step 2:</strong> Master HCF (smallest powers of common primes) and LCM (greatest powers of all primes).</li>
                                <li><strong>Step 3:</strong> Master the 5-step proof by contradiction for irrationality ($\sqrt{2}, \sqrt{3}, \sqrt{5}$).</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Prime Factorization & HCF-LCM Relation" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Proof of Irrationality by Contradiction" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">1. Fundamental Theorem of Arithmetic & HCF-LCM Relation</h4>
                        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            Every composite number can be expressed (factored) as a product of primes, and this factorization is unique, apart from the order in which the prime factors occur. For any two positive integers $a$ and $b$:
                        </p>
                        <div class="text-center font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300 py-2">
                            $$\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$$
                        </div>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: HCF & LCM OF 336 AND 54</p>
                        <p><strong>Step 1: Write prime factorization in exponential form.</strong></p>
                        <p class="pl-4">$336 = 2 \\times 2 \\times 2 \\times 2 \\times 3 \\times 7 = 2^4 \\times 3^1 \\times 7^1$</p>
                        <p class="pl-4">$54 = 2 \\times 3 \\times 3 \\times 3 = 2^1 \\times 3^3$</p>
                        
                        <p><strong>Step 2: Calculate HCF (Product of smallest powers of common prime factors).</strong></p>
                        <p class="pl-4">$\\text{HCF}(336, 54) = 2^1 \\times 3^1 = 6$</p>
                        
                        <p><strong>Step 3: Calculate LCM (Product of greatest powers of all prime factors).</strong></p>
                        <p class="pl-4">$\\text{LCM}(336, 54) = 2^4 \\times 3^3 \\times 7^1 = 16 \\times 27 \\times 7 = 3024$</p>
                        
                        <p><strong>Step 4: Verify Product Rule.</strong></p>
                        <p class="pl-4">$\\text{LHS} = \\text{HCF} \\times \\text{LCM} = 6 \\times 3024 = 18144$</p>
                        <p class="pl-4">$\\text{RHS} = a \\times b = 336 \\times 54 = 18144$ \\quad (Verified!)</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Formal Line-by-Line Proof: Prove $\\sqrt{5}$ is Irrational</h4>
                        
                        <p><strong>Theorem Lemma:</strong> Let $p$ be a prime number. If $p$ divides $a^2$, then $p$ divides $a$, where $a$ is a positive integer.</p>
                        
                        <p><strong>Step 1: Assume the contrary (Proof by Contradiction).</strong><br>
                        Suppose $\\sqrt{5}$ is a rational number. Therefore, we can find coprime integers $a$ and $b$ ($b \\neq 0$) such that:</p>
                        <div class="py-1 text-center font-mono">$$\\sqrt{5} = \\frac{a}{b}$$</div>
                        
                        <p><strong>Step 2: Square both sides and rearrange terms.</strong><br>
                        $$5 = \\frac{a^2}{b^2} \\implies a^2 = 5b^2 \\quad \\text{--- (Equation 1)}$$</p>
                        
                        <p><strong>Step 3: Deduce divisibility for $a$.</strong><br>
                        Since $5$ divides $5b^2$, it follows that $5$ divides $a^2$. By the lemma, <strong>$5$ must also divide $a$</strong>.<br>
                        So, we can write $a = 5c$ for some integer $c$.</p>
                        
                        <p><strong>Step 4: Substitute into Equation 1 and deduce divisibility for $b$.</strong><br>
                        $$(5c)^2 = 5b^2 \\implies 25c^2 = 5b^2 \\implies b^2 = 5c^2$$
                        This means $5$ divides $b^2$, and therefore <strong>$5$ also divides $b$</strong>.</p>
                        
                        <p><strong>Step 5: Identify the contradiction and conclude.</strong><br>
                        From Steps 3 and 4, both $a$ and $b$ have at least $5$ as a common factor. This contradicts our initial assumption that $a$ and $b$ are coprime. Hence, $\\sqrt{5}$ cannot be expressed as $\\frac{a}{b}$, proving that $\\sqrt{5}$ is irrational. $\\blacksquare$</p>
                    </div>
                `,
                vernacular: {
                    English: "Remember the core relationship HCF(a, b) × LCM(a, b) = a × b, and practice the 5-step proof by contradiction for irrationality."
                },
                diagnostics: [
                    { q: "What is the HCF of two consecutive even numbers?", difficulty: "Foundation Level", options: ["1", "2", "4", "Depends on number"], correct: 1, solution: "<strong>Step 1:</strong> Take two general consecutive even numbers, $2n$ and $2n+2$.<br><strong>Step 2:</strong> Factorize both: $2n = 2 \\times n$ and $2n+2 = 2 \\times (n+1)$.<br><strong>Step 3:</strong> Since $n$ and $n+1$ are consecutive integers, $\\text{HCF}(n, n+1) = 1$.<br><strong>Conclusion:</strong> Thus, $\\text{HCF}(2n, 2n+2) = 2$." },
                    { q: "If HCF(306, 657) = 9, what is LCM(306, 657)?", difficulty: "Application Level", options: ["22338", "22330", "12338", "22348"], correct: 0, solution: "<strong>Step 1:</strong> Use the formula $\\text{HCF}(a,b) \\times \\text{LCM}(a,b) = a \\times b$.<br><strong>Step 2:</strong> Substitute values: $9 \\times \\text{LCM} = 306 \\times 657$.<br><strong>Step 3:</strong> Solve for LCM: $\\text{LCM} = \\frac{306 \\times 657}{9} = 34 \\times 657 = 22338$." },
                    { q: "The prime factorization of 140 is:", difficulty: "Foundation Level", options: ["$2 \\times 5 \\times 7$", "$2^2 \\times 5 \\times 7$", "$2^3 \\times 5$", "$2 \\times 7^2$"], correct: 1, solution: "<strong>Step 1:</strong> Divide 140 by 2: $140 / 2 = 70$.<br><strong>Step 2:</strong> Divide 70 by 2: $70 / 2 = 35$.<br><strong>Step 3:</strong> Divide 35 by 5: $35 / 5 = 7$.<br><strong>Conclusion:</strong> Prime factorization of $140 = 2^2 \\times 5 \\times 7$." },
                    { q: "If two positive integers $a$ and $b$ are written as $a = x^3 y^2$ and $b = x y^3$, where $x, y$ are prime numbers, then HCF(a, b) is:", difficulty: "Foundation Level", options: ["$xy$", "$x y^2$", "$x^3 y^3$", "$x^2 y^2$"], correct: 1, solution: "<strong>Step 1:</strong> Identify common prime factors: $x$ and $y$.<br><strong>Step 2:</strong> Lowest power of $x$ is $x^1$; lowest power of $y$ is $y^2$.<br><strong>Conclusion:</strong> $\\text{HCF}(a, b) = x y^2$." },
                    { q: "If two positive integers $a$ and $b$ are written as $a = x^3 y^2$ and $b = x y^3$, where $x,y$ are primes, then LCM(a, b) is:", difficulty: "Foundation Level", options: ["$xy$", "$x y^2$", "$x^3 y^3$", "$x^2 y^2$"], correct: 2, solution: "<strong>Step 1:</strong> Take highest power of each prime: $\\max(3, 1) = 3$ for $x$, and $\\max(2, 3) = 3$ for $y$.<br><strong>Conclusion:</strong> $\\text{LCM}(a, b) = x^3 y^3$." },
                    { q: "The largest number which divides 70 and 125, leaving remainders 5 and 8 respectively, is:", difficulty: "Application Level", options: ["13", "65", "875", "1750"], correct: 0, solution: "<strong>Step 1:</strong> Subtract remainders: $70 - 5 = 65$ and $125 - 8 = 117$.<br><strong>Step 2:</strong> Find HCF(65, 117): $65 = 5 \\times 13$, $117 = 9 \\times 13$.<br><strong>Conclusion:</strong> $\\text{HCF} = 13$." },
                    { q: "If $n$ is a natural number, then $6^n$ always ends with the digit:", difficulty: "Foundation Level", options: ["0", "2", "4", "6"], correct: 3, solution: "<strong>Step 1:</strong> Powers of 6 are $6^1 = 6, 6^2 = 36, 6^3 = 216$.<br><strong>Conclusion:</strong> Multiplying any number ending in 6 by 6 always results in a number ending in 6." },
                    { q: "If $\\text{HCF}(a, b) = 12$ and $a \\times b = 1800$, then $\\text{LCM}(a, b)$ is:", difficulty: "Application Level", options: ["150", "90", "200", "120"], correct: 0, solution: "<strong>Step 1:</strong> $\\text{LCM} = \\frac{a \\times b}{\\text{HCF}} = \\frac{1800}{12} = 150$." },
                    { q: "The ratio of HCF to LCM of the least composite number and the least prime number is:", difficulty: "HOTS Level", options: ["1:2", "2:1", "1:1", "1:3"], correct: 0, solution: "<strong>Step 1:</strong> Least prime $= 2$, least composite $= 4$.<br><strong>Step 2:</strong> $\\text{HCF}(2, 4) = 2$, $\\text{LCM}(2, 4) = 4$.<br><strong>Conclusion:</strong> Ratio $= 2:4 = 1:2$." },
                    { q: "Which of the following is an irrational number?", difficulty: "Foundation Level", options: ["$3.141414...$", "$22/7$", "$3 + \\sqrt{5}$", "$\\sqrt{16}$"], correct: 2, solution: "<strong>Step 1:</strong> $3 + \\sqrt{5}$ is the sum of a rational and an irrational number, which is always irrational." },
                    { q: "If $p$ and $q$ are coprime numbers, then $p^2$ and $q^2$ are:", difficulty: "Application Level", options: ["Not coprime", "Coprime", "Even", "Odd"], correct: 1, solution: "<strong>Step 1:</strong> If two numbers share no common prime factors, squaring them introduces no new prime factors, so they remain coprime." },
                    { q: "The total number of factors of a prime number is:", difficulty: "Foundation Level", options: ["1", "2", "3", "Infinite"], correct: 1, solution: "<strong>Step 1:</strong> By definition, a prime number has exactly two distinct factors: 1 and itself." }
                ]
            },
            M10_CH02: {
                code: "Chapter 02", name: "Polynomials", weight: 4,
                desc: "Explore zeros of quadratic polynomials, geometric interpretations, and relationship between coefficients and zeros.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 02: Polynomials & Curve Mapping</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> Ground Zero & Curve Crossings
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                Think of a polynomial curve as the flight path of a dolphin jumping out of the ocean. The surface of the water is the $x$-axis ($y=0$). The exact places where the dolphin pierces the water's surface are called the <strong>"Zeros" ($\alpha, \beta$)</strong> of the polynomial.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Algebraists needed a way to predict the roots/zeros of complex equations without graphing them manually. They discovered that the coefficients ($a, b, c$) act as hidden handles that dictate where the curve hits the ground.
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    You don't need to know individual zeros $\alpha$ and $\beta$ to know their sum ($\alpha+\beta = -b/a$) or product ($\alpha\beta = c/a$). The numbers $a, b, c$ encode this information directly!
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Identify degree and visual $x$-axis intersections on graphs.</li>
                                <li><strong>Step 2:</strong> Factorize quadratic polynomials $ax^2+bx+c$ to find zeros $\alpha$ and $\beta$.</li>
                                <li><strong>Step 3:</strong> Verify relationships: $\alpha+\beta = -b/a$ and $\alpha\beta = c/a$.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Zeros & Coefficient Relationships" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Derivation of Sum and Product of Zeros Formulas" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">2. Quadratic Polynomial Zero-Coefficient Relationships</h4>
                        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            For any quadratic polynomial $P(x) = ax^2 + bx + c$ ($a \\neq 0$) with zeros $\\alpha$ and $\\beta$:
                        </p>
                        <div class="text-center font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300 py-2">
                            $$\\text{Sum of zeros } (\\alpha + \\beta) = -\\frac{b}{a} = -\\frac{\\text{Coefficient of } x}{\\text{Coefficient of } x^2}$$
                            $$\\text{Product of zeros } (\\alpha \\beta) = \\frac{c}{a} = \\frac{\\text{Constant term}}{\\text{Coefficient of } x^2}$$
                        </div>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: ZEROS OF $x^2 - 2x - 8$</p>
                        <p><strong>Step 1: Set polynomial to 0 and factorize by splitting middle term.</strong></p>
                        <p class="pl-4">$x^2 - 4x + 2x - 8 = 0$</p>
                        <p class="pl-4">$x(x - 4) + 2(x - 4) = 0 \\implies (x - 4)(x + 2) = 0$</p>
                        <p class="pl-4">Zeros are $\\alpha = 4$ and $\\beta = -2$.</p>
                        
                        <p><strong>Step 2: Compare coefficients: $a = 1, b = -2, c = -8$.</strong></p>
                        <p><strong>Step 3: Verify Sum of Zeros:</strong></p>
                        <p class="pl-4">$\\alpha + \\beta = 4 + (-2) = 2$</p>
                        <p class="pl-4">$-\\frac{b}{a} = -\\frac{-2}{1} = 2 \\quad \\text{(Matches!)}$</p>
                        
                        <p><strong>Step 4: Verify Product of Zeros:</strong></p>
                        <p class="pl-4">$\\alpha \\beta = 4 \\times (-2) = -8$</p>
                        <p class="pl-4">$\\frac{c}{a} = \\frac{-8}{1} = -8 \\quad \\text{(Matches!)}$</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Mathematical Derivation: Zero-Coefficient Formulas</h4>
                        <p><strong>Step 1: Apply Factor Theorem.</strong><br>
                        If $\\alpha$ and $\\beta$ are zeros of $P(x) = ax^2 + bx + c$, then $(x - \\alpha)$ and $(x - \\beta)$ are factors of $P(x)$.</p>
                        
                        <p><strong>Step 2: Express polynomial in terms of factors.</strong><br>
                        $$ax^2 + bx + c = k(x - \\alpha)(x - \\beta)$$
                        where $k$ is a non-zero constant.</p>
                        
                        <p><strong>Step 3: Expand right-hand side.</strong><br>
                        $$ax^2 + bx + c = k[x^2 - (\\alpha + \\beta)x + \\alpha \\beta]$$
                        $$ax^2 + bx + c = kx^2 - k(\\alpha + \\beta)x + k\\alpha \\beta$$</p>
                        
                        <p><strong>Step 4: Equate corresponding coefficients of $x^2, x$, and constant terms.</strong><br>
                        • Coefficient of $x^2$: $a = k$<br>
                        • Coefficient of $x$: $b = -k(\\alpha + \\beta) \\implies b = -a(\\alpha + \\beta) \\implies \\alpha + \\beta = -\\frac{b}{a}$<br>
                        • Constant term: $c = k\\alpha \\beta \\implies c = a\\alpha \\beta \\implies \\alpha \\beta = \\frac{c}{a}$. $\\blacksquare$</p>
                    </div>
                `,
                vernacular: {
                    English: "Always verify roots by checking sum of zeros (α + β = -b/a) and product of zeros (αβ = c/a) against the coefficients."
                },
                diagnostics: [
                    { q: "What is the maximum number of zeros a quadratic polynomial can have?", difficulty: "Foundation Level", options: ["1", "2", "3", "Infinite"], correct: 1, solution: "<strong>Step 1:</strong> The degree of a quadratic polynomial is 2.<br><strong>Conclusion:</strong> A polynomial of degree $n$ has at most $n$ real zeros. Thus, maximum zeros = 2." },
                    { q: "If $\\alpha$ and $\\beta$ are zeros of $x^2 - 5x + 6$, then $\\alpha + \\beta$ is:", difficulty: "Application Level", options: ["5", "-5", "6", "-6"], correct: 0, solution: "<strong>Step 1:</strong> Identify coefficients: $a = 1, b = -5, c = 6$.<br><strong>Step 2:</strong> Use relation $\\alpha + \\beta = -b/a = -(-5)/1 = 5$." },
                    { q: "If one zero of $(k-1)x^2 + kx + 1$ is $-3$, find value of $k$.", difficulty: "HOTS Level", options: ["4/3", "2/3", "1/3", "3/4"], correct: 0, solution: "<strong>Step 1:</strong> Since $-3$ is a zero, $P(-3) = 0$.<br><strong>Step 2:</strong> $(k-1)(-3)^2 + k(-3) + 1 = 0 \\implies 9(k-1) - 3k + 1 = 0$.<br><strong>Step 3:</strong> $9k - 9 - 3k + 1 = 0 \\implies 6k - 8 = 0 \\implies k = 8/6 = 4/3$." },
                    { q: "If one zero of the quadratic polynomial $x^2 + 3x + k$ is $2$, then the value of $k$ is:", difficulty: "Foundation Level", options: ["10", "-10", "-7", "-2"], correct: 1, solution: "<strong>Step 1:</strong> Substitute $x = 2$: $2^2 + 3(2) + k = 0 \\implies 4 + 6 + k = 0 \\implies k = -10$." },
                    { q: "A quadratic polynomial whose zeros are $-3$ and $4$ is:", difficulty: "Application Level", options: ["$x^2 - x - 12$", "$x^2 + x + 12$", "$x^2 - x + 12$", "$2x^2 + 2x - 24$"], correct: 0, solution: "<strong>Step 1:</strong> Sum $= -3 + 4 = 1$, Product $= -3 \\times 4 = -12$.<br><strong>Step 2:</strong> Polynomial $= x^2 - (\\text{Sum})x + (\\text{Product}) = x^2 - x - 12$." },
                    { q: "If the zeros of the quadratic polynomial $ax^2 + bx + c$ are equal, then $c$ and $a$ have:", difficulty: "HOTS Level", options: ["Opposite signs", "Same sign", "Zero value", "Cannot be determined"], correct: 1, solution: "<strong>Step 1:</strong> Equal zeros require $D = 0 \\implies b^2 - 4ac = 0 \\implies 4ac = b^2$.<br><strong>Step 2:</strong> Since $b^2 > 0$, $4ac > 0$, which requires $a$ and $c$ to have the exact same sign." },
                    { q: "The number of polynomials having zeros $-2$ and $5$ is:", difficulty: "Foundation Level", options: ["1", "2", "3", "More than 3"], correct: 3, solution: "<strong>Step 1:</strong> Any polynomial of the form $k(x+2)(x-5)$ for any non-zero real constant $k$ has zeros $-2$ and $5$. Hence, more than 3 (infinitely many)." },
                    { q: "If $\\alpha, \\beta$ are the zeros of $2x^2 + 5x + k$ such that $\\alpha^2 + \\beta^2 + \\alpha\\beta = 21/4$, then $k$ equals:", difficulty: "HOTS Level", options: ["2", "3", "-2", "1"], correct: 0, solution: "<strong>Step 1:</strong> $\\alpha+\\beta = -5/2$, $\\alpha\\beta = k/2$.<br><strong>Step 2:</strong> $(\\alpha+\\beta)^2 - \\alpha\\beta = 21/4 \\implies 25/4 - k/2 = 21/4 \\implies k/2 = 4/4 = 1 \\implies k = 2$." },
                    { q: "If sum of zeros of $P(x) = kx^2 + 2x + 3k$ is equal to their product, then $k$ is:", difficulty: "Application Level", options: ["2/3", "-2/3", "1/3", "-1/3"], correct: 1, solution: "<strong>Step 1:</strong> Sum $= -2/k$, Product $= 3k/k = 3$.<br><strong>Step 2:</strong> Equate: $-2/k = 3 \\implies k = -2/3$." },
                    { q: "The geometrical representation of $y = ax^2 + bx + c$ is a:", difficulty: "Foundation Level", options: ["Straight line", "Circle", "Parabola", "Hyperbola"], correct: 2, solution: "<strong>Step 1:</strong> Any second-degree single-variable polynomial forms a parabola opening upwards ($a>0$) or downwards ($a<0$)." },
                    { q: "If $\\alpha, \\beta$ are zeros of $x^2 - 1$, then $\\alpha + \\beta$ is:", difficulty: "Foundation Level", options: ["0", "1", "-1", "2"], correct: 0, solution: "<strong>Step 1:</strong> Coefficients: $a = 1, b = 0, c = -1$.<br><strong>Step 2:</strong> $\\alpha + \\beta = -b/a = -0/1 = 0$." },
                    { q: "If one zero of $3x^2 + 8x + k$ is reciprocal of the other, then $k$ is:", difficulty: "Application Level", options: ["3", "-3", "1/3", "1"], correct: 0, solution: "<strong>Step 1:</strong> Let zeros be $\\alpha$ and $1/\\alpha$.<br><strong>Step 2:</strong> Product $= \\alpha \\times (1/\\alpha) = 1 = c/a = k/3 \\implies k = 3$." }
                ]
            },
            M10_CH03: {
                code: "Chapter 03", name: "Pair of Linear Equations in Two Variables", weight: 6,
                desc: "Solve simultaneous linear equations geometrically and algebraically, analyzing consistency criteria.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 03: Linear Systems & Intersecting Paths</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> Railway Tracks vs. Crossing Roads
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                Every straight line equation represents a path. When you have two lines, only 3 things can happen:
                                <br>1. They cross at exactly 1 point (Unique Solution).
                                <br>2. They run perfectly parallel like train tracks (No Solution).
                                <br>3. They lie directly on top of each other like two coats of paint (Infinite Solutions).
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    When buying multiple items (e.g., 2 pens and 3 notebooks cost ₹50), you have 2 unknown variables ($x$ and $y$). A single clue isn't enough; you need a second independent clue to pin down exact values.
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    The ratio of line slopes ($a_1/a_2$ vs $b_1/b_2$) tells you instantly whether lines will intersect before you spend minutes solving equations!
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Check consistency ratios ($a_1/a_2, b_1/b_2, c_1/c_2$).</li>
                                <li><strong>Step 2:</strong> Solve algebraically using Elimination or Substitution.</li>
                                <li><strong>Step 3:</strong> Solve real-world word problems (upstream/downstream boats, age problems).</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Algebraic Elimination & Substitution Method" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Consistency Ratios Derivation & Graphical Intersections" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">3. Consistency Ratios & Algebraic Methods</h4>
                        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            For linear system $a_1 x + b_1 y + c_1 = 0$ and $a_2 x + b_2 y + c_2 = 0$:<br>
                            • Intersecting Lines (Unique Solution): $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$<br>
                            • Coincident Lines (Infinite Solutions): $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$<br>
                            • Parallel Lines (No Solution): $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$
                        </p>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: SOLVE BY ELIMINATION</p>
                        <p>$$\\text{Eq 1: } x + y = 5 \\quad | \\quad \\text{Eq 2: } 2x - 3y = 4$$</p>
                        
                        <p><strong>Step 1: Multiply Eq 1 by 2 to equate coefficients of $x$.</strong></p>
                        <p class="pl-4">$2(x + y) = 2(5) \\implies 2x + 2y = 10 \\quad \\text{--- (Eq 3)}$</p>
                        
                        <p><strong>Step 2: Subtract Eq 2 from Eq 3.</strong></p>
                        <p class="pl-4">$(2x + 2y) - (2x - 3y) = 10 - 4$</p>
                        <p class="pl-4">$5y = 6 \\implies y = \\frac{6}{5}$</p>
                        
                        <p><strong>Step 3: Substitute $y = \\frac{6}{5}$ back into Eq 1.</strong></p>
                        <p class="pl-4">$x + \\frac{6}{5} = 5 \\implies x = 5 - \\frac{6}{5} = \\frac{19}{5}$</p>
                        <p class="pl-4 text-emerald-400 font-bold">Solution: $x = \\frac{19}{5}, \\; y = \\frac{6}{5}$</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Derivation of Consistency Ratios via Slope Analysis</h4>
                        <p>Convert linear equations into slope-intercept form $y = mx + C$:</p>
                        <p>$$a_1 x + b_1 y + c_1 = 0 \\implies y = -\\left(\\frac{a_1}{b_1}\\right)x - \\frac{c_1}{b_1} \\implies m_1 = -\\frac{a_1}{b_1}, \\; C_1 = -\\frac{c_1}{b_1}$$</p>
                        <p>$$a_2 x + b_2 y + c_2 = 0 \\implies y = -\\left(\\frac{a_2}{b_2}\\right)x - \\frac{c_2}{b_2} \\implies m_2 = -\\frac{a_2}{b_2}, \\; C_2 = -\\frac{c_2}{b_2}$$</p>
                        
                        <p><strong>1. Unique Solution (Non-parallel intersecting lines):</strong><br>
                        Requires distinct slopes $m_1 \\neq m_2 \\implies -\\frac{a_1}{b_1} \\neq -\\frac{a_2}{b_2} \\implies \\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$.</p>
                        
                        <p><strong>2. No Solution (Parallel non-intersecting lines):</strong><br>
                        Requires equal slopes $m_1 = m_2$ but distinct y-intercepts $C_1 \\neq C_2 \\implies \\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.</p>
                        
                        <p><strong>3. Infinitely Many Solutions (Coincident identical lines):</strong><br>
                        Requires equal slopes and equal y-intercepts $\\implies \\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$. $\\blacksquare$</p>
                    </div>
                `,
                vernacular: {
                    English: "Check coefficient ratios (a1/a2 vs b1/b2) first to confirm whether the system has a unique, infinite, or no solution before solving algebraically."
                },
                diagnostics: [
                    { q: "If lines 3x + 2ky = 2 and 2x + 5y + 1 = 0 are parallel, k is:", difficulty: "Foundation Level", options: ["15/4", "9/5", "4/15", "5/9"], correct: 0, solution: "<strong>Step 1:</strong> Condition for parallel lines: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.<br><strong>Step 2:</strong> Substitute coefficients: $\\frac{3}{2} = \\frac{2k}{5}$.<br><strong>Step 3:</strong> Solve for $k$: $4k = 15 \\implies k = 15/4$." },
                    { q: "The pair of equations x = a and y = b represents lines which are:", difficulty: "Application Level", options: ["Parallel", "Coincident", "Intersecting at (a, b)", "Intersecting at (b, a)"], correct: 2, solution: "<strong>Step 1:</strong> $x = a$ is a vertical line at $x=a$.<br><strong>Step 2:</strong> $y = b$ is a horizontal line at $y=b$.<br><strong>Conclusion:</strong> They intersect perpendicularly at the coordinate point $(a, b)$." },
                    { q: "For what value of k do equations represent coincident lines?", difficulty: "HOTS Level", options: ["2", "3", "4", "6"], correct: 0, solution: "<strong>Step 1:</strong> Coincident lines require all three ratios to be equal: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$." },
                    { q: "The pair of linear equations $y = 0$ and $y = -7$ has:", difficulty: "Foundation Level", options: ["One solution", "Two solutions", "Infinitely many solutions", "No solution"], correct: 3, solution: "<strong>Step 1:</strong> Both equations represent horizontal lines parallel to the x-axis.<br><strong>Step 2:</strong> Parallel lines never intersect, hence there is no solution." },
                    { q: "If the system $x - ky = 2$ and $3x + 2y = -5$ has a unique solution, then $k \\neq$:", difficulty: "Application Level", options: ["-2/3", "2/3", "3/2", "-3/2"], correct: 0, solution: "<strong>Step 1:</strong> Condition for unique solution: $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$.<br><strong>Step 2:</strong> $\\frac{1}{3} \\neq \\frac{-k}{2} \\implies -3k \\neq 2 \\implies k \\neq -2/3$." },
                    { q: "If $2x + 3y = 11$ and $2x - 4y = -24$, then the value of $m$ in $y = mx + 3$ is:", difficulty: "Application Level", options: ["-1", "1", "3", "-3"], correct: 0, solution: "<strong>Step 1:</strong> Subtract equations: $(2x+3y) - (2x-4y) = 11 - (-24) \\implies 7y = 35 \\implies y = 5$.<br><strong>Step 2:</strong> $2x + 3(5) = 11 \\implies 2x = -4 \\implies x = -2$.<br><strong>Step 3:</strong> $5 = m(-2) + 3 \\implies -2m = 2 \\implies m = -1$." },
                    { q: "Aruna has only ₹1 and ₹2 coins with her. If total number of coins is 50 and amount of money is ₹75, number of ₹1 and ₹2 coins are:", difficulty: "Application Level", options: ["35 and 15", "25 and 25", "15 and 35", "20 and 30"], correct: 1, solution: "<strong>Step 1:</strong> $x + y = 50$ and $x + 2y = 75$.<br><strong>Step 2:</strong> Subtracting gives $y = 25$, and $x = 50 - 25 = 25$." },
                    { q: "A pair of linear equations which has a unique solution $x = 2, y = -3$ is:", difficulty: "HOTS Level", options: ["$x+y=-1$ & $2x-3y=-5$", "$2x+5y=-11$ & $4x+10y=-22$", "$x-4y-14=0$ & $5x-y-13=0$", "$x-y=5$ & $3x+2y=0$"], correct: 2, solution: "<strong>Step 1:</strong> Test $(2, -3)$ in Option C: $2 - 4(-3) - 14 = 2 + 12 - 14 = 0$ (True).<br><strong>Step 2:</strong> $5(2) - (-3) - 13 = 10 + 3 - 13 = 0$ (True)." },
                    { q: "If $a_1/a_2 = b_1/b_2 \\neq c_1/c_2$, then the lines represented by equations are:", difficulty: "Foundation Level", options: ["Intersecting", "Parallel", "Coincident", "Perpendicular"], correct: 1, solution: "<strong>Step 1:</strong> Equal slopes with different intercepts define parallel lines." },
                    { q: "The area of the triangle formed by the lines $x=0, y=0$ and $x+y=6$ is:", difficulty: "HOTS Level", options: ["36 sq units", "18 sq units", "12 sq units", "6 sq units"], correct: 1, solution: "<strong>Step 1:</strong> Intercepts on axes are $(6, 0)$ and $(0, 6)$.<br><strong>Step 2:</strong> Base $= 6$, Height $= 6$. Area $= \\frac{1}{2} \\times 6 \\times 6 = 18$ sq units." },
                    { q: "If $x = a, y = b$ is the solution of $x - y = 2$ and $x + y = 4$, then values of $a$ and $b$ are:", difficulty: "Foundation Level", options: ["3 and 5", "5 and 3", "3 and 1", "-1 and -3"], correct: 2, solution: "<strong>Step 1:</strong> Adding equations gives $2x = 6 \\implies x = 3$.<br><strong>Step 2:</strong> $3 + y = 4 \\implies y = 1$." },
                    { q: "For what value of $p$ does $2x + 3y - 5 = 0$ and $px - 6y - 8 = 0$ have a unique solution?", difficulty: "Application Level", options: ["$p \\neq -4$", "$p = -4$", "$p \\neq 4$", "$p = 4$"], correct: 0, solution: "<strong>Step 1:</strong> $\\frac{2}{p} \\neq \\frac{3}{-6} \\implies \\frac{2}{p} \\neq -\\frac{1}{2} \\implies p \\neq -4$." }
                ]
            },
            M10_CH04: {
                code: "Chapter 04", name: "Quadratic Equations", weight: 6,
                desc: "Master root determination via factorization, completing the square, and Sridharacharya's Quadratic Formula.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 04: Quadratic Equations & Trajectories</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> Throwing a Cricket Ball
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                Linear equations model straight lines (like walking at constant speed). But gravity pulls falling objects into curves! When a batter hits a six, the ball rises, curves at the apex, and falls. That parabolic path is governed by $x^2$. Quadratic equations model area growth, gravity, and maximum efficiency.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Ancient Babylonian land surveyors needed to construct rectangular plots given total area and perimeter. Later, Indian mathematician Sridharacharya derived a universal master formula to solve any second-degree equation without trial-and-error.
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    The Discriminant $D = b^2 - 4ac$ acts as a radar scanner. If $D > 0$, the parabola cuts the ground twice. If $D = 0$, it just touches the ground. If $D < 0$, it floats entirely in the air with no real landing points!
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Formulate word problems into standard form $ax^2 + bx + c = 0$.</li>
                                <li><strong>Step 2:</strong> Solve via Middle Term Splitting or Sridharacharya's Quadratic Formula.</li>
                                <li><strong>Step 3:</strong> Derive the Quadratic Formula step-by-step using <em>Completing the Square</em>.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Fundamentals & Mathematical Modeling", sub: "Formulation & Spatial Dimension Optimization" },
                method2: { name: "Method 2: Step-by-Step Proof & Mathematical Derivation", sub: "Derivation of Quadratic Formula by Completing the Square" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">Concept Overview: Standard Form & Definitions</h4>
                        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            A quadratic equation in the variable $x$ is a polynomial equation of second degree. Any equation that can be expressed in the form:
                        </p>
                        <div class="text-center font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300 py-2">
                            $$ax^2 + bx + c = 0, \\quad \\text{where } a, b, c \\in \\mathbb{R} \\text{ and } a \\neq 0$$
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Discriminant $D = b^2 - 4ac$. If $D > 0$ (two distinct real roots), $D = 0$ (two equal real roots), $D < 0$ (no real roots).
                        </p>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">MATHEMATICAL MODELING: SPATIAL DIMENSION OPTIMIZATION</p>
                        <p class="font-sans text-slate-300"><strong>Problem Context:</strong> A hall must be constructed with a rectangular carpet area of $300\\text{ m}^2$, where the length exceeds twice its breadth by 1 meter. Determine the governing quadratic equation.</p>
                        
                        <p class="text-amber-300 font-bold pt-1">Detailed Line-by-Line Algebraic Derivation:</p>
                        <p><strong>Step 1: Define the unknown variable.</strong></p>
                        <p class="pl-4">Let the breadth of the rectangular hall = $x\\text{ meters}$.</p>
                        
                        <p><strong>Step 2: Express the length in terms of $x$.</strong></p>
                        <p class="pl-4">Length = $(2 \\cdot \\text{breadth}) + 1 = (2x + 1)\\text{ meters}$.</p>
                        
                        <p><strong>Step 3: Apply the geometric area formula.</strong></p>
                        <p class="pl-4">$$\\text{Area} = \\text{Length} \\times \\text{Breadth}$$</p>
                        <p class="pl-4">$$\\text{Area} = (2x + 1) \\cdot x = (2x^2 + x)\\text{ m}^2$$</p>
                        
                        <p><strong>Step 4: Equate calculated area to given constraint.</strong></p>
                        <p class="pl-4">$$2x^2 + x = 300$$</p>
                        
                        <p><strong>Step 5: Rearrange into Standard Form $ax^2 + bx + c = 0$.</strong></p>
                        <p class="pl-4 text-emerald-400 font-bold">$$2x^2 + x - 300 = 0$$</p>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">WORKED APPLICATION: TWO-VARIABLE ITEM DISTRIBUTION PROBLEM</p>
                        <p class="font-sans text-slate-300"><strong>Problem Context:</strong> Two individuals collectively possess 45 units. After both lose 5 units each, the product of their remaining counts equals 124. Formulate the quadratic equation.</p>
                        
                        <p class="text-amber-300 font-bold pt-1">Fully Elaborated Line-by-Line Solution:</p>
                        <p><strong>Step 1: Declare initial variables.</strong></p>
                        <p class="pl-4">Let initial quantity held by Person A = $x$.</p>
                        <p class="pl-4">Since total count is $45$, initial quantity held by Person B = $45 - x$.</p>
                        
                        <p><strong>Step 2: Model quantities after deduction of 5 units each.</strong></p>
                        <p class="pl-4">Remaining quantity of Person A = $x - 5$.</p>
                        <p class="pl-4">Remaining quantity of Person B = $(45 - x) - 5 = 40 - x$.</p>
                        
                        <p><strong>Step 3: Formulate product equation.</strong></p>
                        <p class="pl-4">$$(x - 5)(40 - x) = 124$$</p>
                        
                        <p><strong>Step 4: Perform binomial algebraic expansion.</strong></p>
                        <p class="pl-4">$$x(40) + x(-x) - 5(40) - 5(-x) = 124$$</p>
                        <p class="pl-4">$$40x - x^2 - 200 + 5x = 124$$</p>
                        <p class="pl-4">$$-x^2 + 45x - 200 = 124$$</p>
                        
                        <p><strong>Step 5: Transpose terms and multiply by $-1$.</strong></p>
                        <p class="pl-4 text-emerald-400 font-bold">$$x^2 - 45x + 324 = 0$$</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Formal Line-by-Line Derivation: Sridharacharya's Quadratic Formula</h4>
                        
                        <p><strong>Step 1: Start with standard quadratic equation.</strong><br>
                        $$ax^2 + bx + c = 0 \\quad (a \\neq 0)$$</p>
                        
                        <p><strong>Step 2: Divide entire equation by $a$.</strong><br>
                        $$x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0 \\implies x^2 + \\frac{b}{a}x = -\\frac{c}{a}$$</p>
                        
                        <p><strong>Step 3: Complete the square by adding $\\left(\\frac{b}{2a}\\right)^2$ to both sides.</strong><br>
                        $$x^2 + 2 \\cdot x \\cdot \\left(\\frac{b}{2a}\\right) + \\left(\\frac{b}{2a}\\right)^2 = \\left(\\frac{b}{2a}\\right)^2 - \\frac{c}{a}$$</p>
                        
                        <p><strong>Step 4: Express LHS as perfect square and simplify RHS.</strong><br>
                        $$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2} - \\frac{c}{a} = \\frac{b^2 - 4ac}{4a^2}$$</p>
                        
                        <p><strong>Step 5: Take square root of both sides.</strong><br>
                        $$x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$$</p>
                        
                        <p><strong>Step 6: Isolate $x$.</strong><br>
                        $$x = -\\frac{b}{2a} \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a} \\implies x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\quad \\blacksquare$$</p>
                    </div>
                `,
                vernacular: {
                    English: "Always compute the discriminant D = b² - 4ac first, and ensure signs are preserved when b is negative: (-b)²."
                },
                diagnostics: [
                    { q: "What is the standard degree of a Quadratic Equation?", difficulty: "Foundation Level", options: ["Degree 1", "Degree 2", "Degree 3", "Degree 4"], correct: 1, solution: "<strong>Step 1:</strong> The standard form is $ax^2 + bx + c = 0$ where $a \\neq 0$.<br><strong>Conclusion:</strong> The highest exponent of variable $x$ is 2, so its degree is 2." },
                    { q: "If D = b^2 - 4ac > 0, what is the nature of the roots?", difficulty: "Application Level", options: ["No real roots", "Two equal real roots", "Two distinct real roots", "Imaginary roots"], correct: 2, solution: "<strong>Step 1:</strong> When $D > 0$, $\\sqrt{D}$ produces a positive real number.<br><strong>Conclusion:</strong> The quadratic formula yields two distinct real values." },
                    { q: "For 2x^2 - 5x + 3 = 0, what is the value of Discriminant D?", difficulty: "HOTS Level", options: ["D = 1", "D = 0", "D = 25", "D = -11"], correct: 0, solution: "<strong>Step 1:</strong> $a = 2, b = -5, c = 3$.<br><strong>Step 2:</strong> $D = b^2 - 4ac = (-5)^2 - 4(2)(3) = 25 - 24 = 1$." },
                    { q: "Which of the following equations has 2 as a root?", difficulty: "Foundation Level", options: ["$x^2 - 4x + 5 = 0$", "$x^2 + 3x - 12 = 0$", "$2x^2 - 7x + 6 = 0$", "$3x^2 - 6x - 2 = 0$"], correct: 2, solution: "<strong>Step 1:</strong> Substitute $x = 2$ in Option C: $2(2)^2 - 7(2) + 6 = 8 - 14 + 6 = 0$. Hence 2 is a root." },
                    { q: "If the equation $x^2 + 4x + k = 0$ has real and equal roots, then $k$ is:", difficulty: "Application Level", options: ["$k = 4$", "$k < 4$", "$k > 4$", "$k = 2$"], correct: 0, solution: "<strong>Step 1:</strong> Equal roots require $D = 0 \\implies 4^2 - 4(1)(k) = 0 \\implies 16 = 4k \\implies k = 4$." },
                    { q: "Values of $k$ for which the quadratic equation $2x^2 - kx + k = 0$ has equal roots are:", difficulty: "HOTS Level", options: ["0 only", "4 only", "8 only", "0 and 8"], correct: 3, solution: "<strong>Step 1:</strong> $D = (-k)^2 - 4(2)(k) = 0 \\implies k^2 - 8k = 0 \\implies k(k - 8) = 0 \\implies k = 0, 8$." },
                    { q: "If $\\frac{1}{2}$ is a root of the equation $x^2 + kx - \\frac{5}{4} = 0$, then the value of $k$ is:", difficulty: "Application Level", options: ["2", "-2", "1/4", "1/2"], correct: 0, solution: "<strong>Step 1:</strong> $(1/2)^2 + k(1/2) - 5/4 = 0 \\implies 1/4 + k/2 - 5/4 = 0 \\implies k/2 = 1 \\implies k = 2$." },
                    { q: "Quadratic equation $x^2 + 1 = 0$ has:", difficulty: "Foundation Level", options: ["Two real roots", "One real root", "No real roots", "Infinite real roots"], correct: 2, solution: "<strong>Step 1:</strong> $x^2 = -1$. The square of a real number is never negative, so no real roots exist." },
                    { q: "The sum of the roots of equation $3x^2 - 9x + 5 = 0$ is:", difficulty: "Foundation Level", options: ["3", "-3", "5/3", "-5/3"], correct: 0, solution: "<strong>Step 1:</strong> $\\text{Sum} = -b/a = -(-9)/3 = 3$." },
                    { q: "The product of the roots of equation $2x^2 - 8x + 6 = 0$ is:", difficulty: "Foundation Level", options: ["4", "3", "-3", "-4"], correct: 1, solution: "<strong>Step 1:</strong> $\\text{Product} = c/a = 6/2 = 3$." },
                    { q: "If one root of $ax^2 + bx + c = 0$ is 0, then the value of $c$ is:", difficulty: "Foundation Level", options: ["0", "1", "-1", "Cannot be determined"], correct: 0, solution: "<strong>Step 1:</strong> Substitute $x = 0$: $a(0)^2 + b(0) + c = 0 \\implies c = 0$." },
                    { q: "A natural number, when increased by 12, equals 160 times its reciprocal. The number is:", difficulty: "HOTS Level", options: ["8", "10", "12", "16"], correct: 0, solution: "<strong>Step 1:</strong> $x + 12 = 160/x \\implies x^2 + 12x - 160 = 0 \\implies (x+20)(x-8) = 0$. Since natural, $x = 8$." }
                ],
                errorFinder: {
                    traps: [
                        {
                            title: "The Missing Negative Sign Trap in $b^2 - 4ac$",
                            severity: "High (1-2 Marks Lost)",
                            explanation: "When $b$ is negative (e.g., $x^2 - 5x + 6 = 0$), students often write $-5^2 = -25$ instead of $(-5)^2 = +25$, resulting in an incorrect discriminant calculation."
                        },
                        {
                            title: "Discarding Roots in Real-World Word Problems",
                            severity: "Critical (1 Mark Lost)",
                            explanation: "In speed, age, or dimension word problems, students often forget to explicitly state why a negative root is rejected (e.g., 'Speed cannot be negative, hence $x = -10$ is discarded')."
                        }
                    ],
                    challenges: [
                        {
                            title: "Quadratic Equations Challenge 1: Discriminant Sign Square",
                            steps: [
                                { stepNo: 1, text: "Given quadratic equation: $2x^2 - 7x + 3 = 0$ with coefficients $a = 2, b = -7, c = 3$." },
                                { stepNo: 2, text: "Calculate Discriminant: $D = b^2 - 4ac = -7^2 - 4(2)(3) = -49 - 24 = -73$." },
                                { stepNo: 3, text: "Since $D < 0$, conclude that the equation has no real roots." }
                            ],
                            faultyStep: 2,
                            deductionReason: "In Step 2, $b^2$ was computed as $-7^2 = -49$ instead of $(-7)^2 = +49$. The correct $D = 49 - 24 = 25$, so two distinct real roots exist ($x = 3, 1/2$)."
                        },
                        {
                            title: "Quadratic Equations Challenge 2: Division by Unknown Variable",
                            steps: [
                                { stepNo: 1, text: "Given equation: $x^2 = 6x$." },
                                { stepNo: 2, text: "Dividing both sides by $x$ gives: $x = 6$." },
                                { stepNo: 3, text: "Concluding that $x = 6$ is the only root of the equation." }
                            ],
                            faultyStep: 2,
                            deductionReason: "In Step 2, dividing by $x$ loses the root $x = 0$! Correct algebraic factorization: $x^2 - 6x = 0 \\implies x(x - 6) = 0 \\implies x = 0$ or $x = 6$."
                        },
                        {
                            title: "Quadratic Equations Challenge 3: Word Problem Negative Root Rejection",
                            steps: [
                                { stepNo: 1, text: "Formulating hall dimensions: Area $= x(x + 5) = 84 \\implies x^2 + 5x - 84 = 0$." },
                                { stepNo: 2, text: "Factorizing gives: $(x + 12)(x - 7) = 0 \\implies x = -12$ or $x = 7$." },
                                { stepNo: 3, text: "State final answers: The hall breadth can be either $-12\\text{ m}$ or $7\\text{ m}$." }
                            ],
                            faultyStep: 3,
                            deductionReason: "In Step 3, physical dimensions cannot be negative. CBSE marking schemes deduct 1 full mark unless you explicitly write: 'Discarding $x = -12$ as breadth cannot be negative; therefore, breadth = 7 m'."
                        }
                    ]
                }
            },
            M10_CH05: {
                code: "Chapter 05", name: "Arithmetic Progressions", weight: 6,
                desc: "Analyze sequences, common difference ($d$), general term ($a_n$), and series sum ($S_n$).",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 05: Arithmetic Progressions & Rhythmic Ladders</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> Staircases & Piggy Banks
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                Imagine putting ₹10 into a piggy bank today, ₹15 tomorrow, ₹20 the next day. The amount grows by a steady step of ₹5 every single day. An Arithmetic Progression (AP) is simply a mathematical ladder where every step is equal in size ($d$).
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Young Carl Friedrich Gauss was asked by his teacher to sum all numbers from 1 to 100. Instead of adding term by term, Gauss paired $1+100=101$, $2+99=101$, realizing there were 50 such pairs of 101, inventing the AP sum trick instantly!
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    To reach the $n^{\\text{th}}$ step of a ladder starting at $a$, you don't take $n$ jumps—you only take $(n-1)$ jumps! That's why the formula is $a_n = a + (n-1)d$.
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Identify first term $a$ and common difference $d = a_2 - a_1$.</li>
                                <li><strong>Step 2:</strong> Find any $n^{\\text{th}}$ term using $a_n = a + (n-1)d$.</li>
                                <li><strong>Step 3:</strong> Sum total series elements using Gauss's reverse addition formula $S_n = \\frac{n}{2}[2a + (n-1)d]$.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "nth Term & Sum of AP Terms" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Derivation of Sum Formula (Gauss's Proof)" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">5. Arithmetic Progression Key Formulas</h4>
                        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">For AP with first term $a$ and common difference $d$:</p>
                        <div class="text-center font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300 py-2">
                            $$a_n = a + (n - 1)d, \\quad S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}[a + l]$$
                        </div>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: AP 2, 7, 12...</p>
                        <p><strong>Step 1: Identify given terms.</strong> $a = 2, d = 7 - 2 = 5$.</p>
                        <p><strong>Step 2: Find 10th term ($a_{10}$).</strong></p>
                        <p class="pl-4">$a_{10} = 2 + (10 - 1)(5) = 2 + (9 \\times 5) = 2 + 45 = 47$</p>
                        <p><strong>Step 3: Find sum of first 20 terms ($S_{20}$).</strong></p>
                        <p class="pl-4">$S_{20} = \\frac{20}{2}[2(2) + (20 - 1)(5)] = 10[4 + (19 \\times 5)] = 10[4 + 95] = 990$</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Formal Proof: Derivation of AP Sum Formula $S_n$ (Gauss's Method)</h4>
                        
                        <p><strong>Step 1: Write sum of $n$ terms in standard order.</strong><br>
                        $$S_n = a + (a + d) + (a + 2d) + \\dots + [a + (n - 2)d] + [a + (n - 1)d] \\quad \\text{--- (Eq 1)}$$</p>
                        
                        <p><strong>Step 2: Write sum in reverse order.</strong><br>
                        $$S_n = [a + (n - 1)d] + [a + (n - 2)d] + \\dots + (a + d) + a \\quad \\text{--- (Eq 2)}$$</p>
                        
                        <p><strong>Step 3: Add Eq 1 and Eq 2 column-by-column.</strong><br>
                        Each pair sums to $[2a + (n - 1)d]$. Since there are $n$ such pairs:</p>
                        $$2S_n = n \\times [2a + (n - 1)d]$$
                        
                        <p><strong>Step 4: Divide by 2 to isolate $S_n$.</strong><br>
                        $$S_n = \\frac{n}{2}[2a + (n - 1)d] \\quad \\blacksquare$$</p>
                    </div>
                `,
                vernacular: {
                    English: "Use Gauss's column-wise summation logic Sn = (n/2)[2a + (n-1)d] to quickly solve series addition problems."
                },
                diagnostics: [
                    { q: "The 10th term of AP: 2, 7, 12... is:", difficulty: "Foundation Level", options: ["47", "52", "42", "37"], correct: 0, solution: "<strong>Step 1:</strong> $a = 2, d = 5$.<br><strong>Step 2:</strong> $a_{10} = a + 9d = 2 + 9(5) = 2 + 45 = 47$." },
                    { q: "Which term of AP: 21, 18, 15... is -81?", difficulty: "Application Level", options: ["35th", "36th", "34th", "30th"], correct: 0, solution: "<strong>Step 1:</strong> $a = 21, d = -3$.<br><strong>Step 2:</strong> $-81 = 21 + (n-1)(-3) \\implies -102 = -3(n-1) \\implies n-1 = 34 \\implies n = 35$." },
                    { q: "Sum of first 100 positive integers is:", difficulty: "Foundation Level", options: ["5050", "5000", "5100", "4950"], correct: 0, solution: "<strong>Step 1:</strong> $S_n = \\frac{n(n+1)}{2} = \\frac{100 \\times 101}{2} = 5050$." },
                    { q: "In an AP, if $d = -4, n = 7, a_n = 4$, then first term $a$ is:", difficulty: "Foundation Level", options: ["6", "7", "20", "28"], correct: 3, solution: "<strong>Step 1:</strong> $a_n = a + (n-1)d \\implies 4 = a + 6(-4) \\implies 4 = a - 24 \\implies a = 28$." },
                    { q: "The 11th term of the AP: $-3, -1/2, 2, \\dots$ is:", difficulty: "Application Level", options: ["28", "22", "-38", "-46.5"], correct: 1, solution: "<strong>Step 1:</strong> $d = -1/2 - (-3) = 2.5$.<br><strong>Step 2:</strong> $a_{11} = -3 + 10(2.5) = -3 + 25 = 22$." },
                    { q: "The famous mathematician associated with finding the sum of first 100 natural numbers is:", difficulty: "Foundation Level", options: ["Pythagoras", "Newton", "Gauss", "Euclid"], correct: 2, solution: "<strong>Step 1:</strong> Carl Friedrich Gauss discovered the pairwise pairing trick in primary school." },
                    { q: "If the 3rd and 9th terms of an AP are 4 and -8 respectively, which term is 0?", difficulty: "Application Level", options: ["5th", "6th", "7th", "8th"], correct: 0, solution: "<strong>Step 1:</strong> $a + 2d = 4$ and $a + 8d = -8 \\implies 6d = -12 \\implies d = -2, a = 8$.<br><strong>Step 2:</strong> $8 + (n-1)(-2) = 0 \\implies 2(n-1) = 8 \\implies n = 5$." },
                    { q: "The number of two-digit numbers divisible by 3 is:", difficulty: "Application Level", options: ["25", "30", "32", "35"], correct: 1, solution: "<strong>Step 1:</strong> First is 12, last is 99. $d = 3$.<br><strong>Step 2:</strong> $99 = 12 + (n-1)3 \\implies 87 = 3(n-1) \\implies n-1 = 29 \\implies n = 30$." },
                    { q: "If the $n$-th term of an AP is $3n + 5$, then its common difference is:", difficulty: "Foundation Level", options: ["3", "5", "8", "2"], correct: 0, solution: "<strong>Step 1:</strong> $a_1 = 3(1)+5 = 8$, $a_2 = 3(2)+5 = 11$.<br><strong>Step 2:</strong> $d = a_2 - a_1 = 11 - 8 = 3$." },
                    { q: "Sum of first $n$ terms of an AP is given by $S_n = 3n^2 + 5n$. Its 2nd term is:", difficulty: "HOTS Level", options: ["8", "14", "11", "22"], correct: 1, solution: "<strong>Step 1:</strong> $S_1 = a_1 = 3(1)^2 + 5(1) = 8$.<br><strong>Step 2:</strong> $S_2 = a_1 + a_2 = 3(4) + 10 = 22$.<br><strong>Step 3:</strong> $a_2 = S_2 - S_1 = 22 - 8 = 14$." },
                    { q: "If $a, b, c$ are in AP, then $\\frac{a + c}{2}$ is equal to:", difficulty: "Foundation Level", options: ["$a$", "$b$", "$c$", "$b/2$"], correct: 1, solution: "<strong>Step 1:</strong> In any AP, the middle term is the arithmetic mean of its neighbors: $b = \\frac{a+c}{2}$." },
                    { q: "The common difference of the AP $\\frac{1}{p}, \\frac{1-p}{p}, \\frac{1-2p}{p}, \\dots$ is:", difficulty: "Application Level", options: ["$p$", "$-1$", "1", "$-p$"], correct: 1, solution: "<strong>Step 1:</strong> $d = \\frac{1-p}{p} - \\frac{1}{p} = \\frac{1 - p - 1}{p} = \\frac{-p}{p} = -1$." }
                ]
            },
M10_CH06: {
                code: "Chapter 06", name: "Triangles", weight: 8,
                desc: "Master triangle similarity criteria, Basic Proportionality Theorem (BPT/Thales Theorem), and geometric ratio proofs.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 06: Triangles & Scaled Photographs</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> Photo Zoom & Proportions
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                When you pinch-to-zoom a photo on your phone, the person's height and width scale up by the exact same proportion. The photo is <strong>Similar</strong> (same shape, different size), not Congruent (identical size).
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Thales of Miletus measured the exact height of the Great Pyramid of Giza by comparing the length of its shadow with the shadow cast by his walking stick at the exact same time of day!
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    If you draw a line inside a triangle parallel to its base ($DE \\parallel BC$), it slices the side walls into exact proportional fractions ($AD/DB = AE/EC$).
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Differentiate Congruence (identical) vs. Similarity (scaled).</li>
                                <li><strong>Step 2:</strong> Master Basic Proportionality Theorem (BPT/Thales) proof using triangle areas.</li>
                                <li><strong>Step 3:</strong> Apply AAA, SAS, and SSS similarity tests to solve geometric proportions.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Similarity Criteria & Area Ratios" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Proof of Basic Proportionality Theorem (Thales Theorem)" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">6. Thales Theorem (Basic Proportionality Theorem)</h4>
                        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio:</p>
                        <div class="text-center font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300 py-2">
                            $$\\text{If } DE \\parallel BC, \\text{ then } \\frac{AD}{DB} = \\frac{AE}{EC}$$
                        </div>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: BPT RATIO EVALUATION</p>
                        <p>Given $\\Delta ABC$ with $DE \\parallel BC$. $AD = 1.5\\text{ cm}, DB = 3\\text{ cm}, AE = 1\\text{ cm}$. Find $EC$.</p>
                        <p><strong>Step 1: State BPT ratio.</strong> $\\frac{AD}{DB} = \\frac{AE}{EC}$</p>
                        <p><strong>Step 2: Substitute values.</strong> $\\frac{1.5}{3} = \\frac{1}{EC}$</p>
                        <p><strong>Step 3: Cross multiply.</strong> $1.5 \\cdot EC = 3 \\implies EC = \\frac{3}{1.5} = 2\\text{ cm}$.</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Formal Proof: Basic Proportionality Theorem (BPT / Thales Theorem)</h4>
                        
                        <p><strong>Given:</strong> A triangle $ABC$ in which line $DE \\parallel BC$ intersects $AB$ at $D$ and $AC$ at $E$.<br>
                        <strong>To Prove:</strong> $\\frac{AD}{DB} = \\frac{AE}{EC}$.<br>
                        <strong>Construction:</strong> Join $BE$ and $CD$. Draw $EF \\perp AB$ and $DG \\perp AC$.</p>
                        
                        <p><strong>Step 1: Calculate area of $\\Delta ADE$.</strong><br>
                        $$\\text{Area}(\\Delta ADE) = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times AD \\times EF$$</p>
                        
                        <p><strong>Step 2: Calculate area of $\\Delta BDE$.</strong><br>
                        $$\\text{Area}(\\Delta BDE) = \\frac{1}{2} \\times DB \\times EF$$</p>
                        
                        <p><strong>Step 3: Ratio of Area($\\Delta ADE$) to Area($\\Delta BDE$).</strong><br>
                        $$\\frac{\\text{Area}(\\Delta ADE)}{\\text{Area}(\\Delta BDE)} = \\frac{\\frac{1}{2} \\times AD \\times EF}{\\frac{1}{2} \\times DB \\times EF} = \\frac{AD}{DB} \\quad \\text{--- (Eq 1)}$$</p>
                        
                        <p><strong>Step 4: Similarly, compute ratio on side $AC$.</strong><br>
                        $$\\frac{\\text{Area}(\\Delta ADE)}{\\text{Area}(\\Delta DEC)} = \\frac{\\frac{1}{2} \\times AE \\times DG}{\\frac{1}{2} \\times EC \\times DG} = \\frac{AE}{EC} \\quad \\text{--- (Eq 2)}$$</p>
                        
                        <p><strong>Step 5: Apply parallel lines area theorem.</strong><br>
                        $\\Delta BDE$ and $\\Delta DEC$ lie on same base $DE$ and between same parallels $DE \\parallel BC$.<br>
                        $$\\implies \\text{Area}(\\Delta BDE) = \\text{Area}(\\Delta DEC)$$</p>
                        
                        <p><strong>Step 6: Equate equations 1 and 2.</strong><br>
                        $$\\frac{AD}{DB} = \\frac{AE}{EC} \\quad \\blacksquare$$</p>
                    </div>
                `,
                vernacular: {
                    English: "Master the step-by-step Basic Proportionality Theorem (Thales) area ratio proof, as it frequently carries high board weightage."
                },
                diagnostics: [
                    { q: "All circles are always:", difficulty: "Foundation Level", options: ["Congruent", "Similar", "Equal", "None"], correct: 1, solution: "<strong>Step 1:</strong> All circles have the exact same round geometry regardless of radius, so they are always similar." },
                    { q: "In triangle ABC, DE || BC. If AD=1.5, DB=3, AE=1, then EC is:", difficulty: "Application Level", options: ["2 cm", "3 cm", "1.5 cm", "4 cm"], correct: 0, solution: "<strong>Step 1:</strong> By BPT: $\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{1.5}{3} = \\frac{1}{EC} \\implies EC = 2$ cm." },
                    { q: "If perimeters of two similar triangles are in ratio 4:9, sides are in ratio:", difficulty: "Foundation Level", options: ["4:9", "2:3", "16:81", "81:16"], correct: 0, solution: "<strong>Step 1:</strong> The ratio of perimeters of two similar triangles is equal to the ratio of their corresponding sides ($4:9$)." },
                    { q: "If $\\Delta ABC \\sim \\Delta EDF$ and $\\Delta ABC$ is not similar to $\\Delta DEF$, then which of the following is true?", difficulty: "Application Level", options: ["$BC \\cdot EF = AC \\cdot FD$", "$AB \\cdot EF = AC \\cdot DE$", "$BC \\cdot DE = AB \\cdot EF$", "$BC \\cdot DE = AB \\cdot FD$"], correct: 3, solution: "<strong>Step 1:</strong> $\\frac{AB}{ED} = \\frac{BC}{DF} \\implies BC \\cdot ED = AB \\cdot DF$." },
                    { q: "If in two triangles $ABC$ and $PQR$, $\\frac{AB}{QR} = \\frac{BC}{PR} = \\frac{CA}{PQ}$, then:", difficulty: "Application Level", options: ["$\\Delta PQR \\sim \\Delta CAB$", "$PQR \\sim \\Delta ABC$", "$\\Delta CBA \\sim \\Delta PQR$", "$\\Delta BCA \\sim \\Delta PQR$"], correct: 0, solution: "<strong>Step 1:</strong> Mapping corresponding sides: $AB \\leftrightarrow QR, BC \\leftrightarrow PR, CA \\leftrightarrow PQ \\implies \\Delta PQR \\sim \\Delta CAB$." },
                    { q: "A vertical pole of length 6m casts a shadow 4m long on the ground and at the same time a tower casts a shadow 28m long. The height of tower is:", difficulty: "Application Level", options: ["40m", "42m", "36m", "32m"], correct: 1, solution: "<strong>Step 1:</strong> $\\frac{\\text{Height}}{\\text{Shadow}} = \\frac{6}{4} = \\frac{H}{28} \\implies H = \\frac{6 \\times 28}{4} = 42$ m." },
                    { q: "If $\\Delta ABC \\sim \\Delta QRP$, $\\frac{\\text{Area}(\\Delta ABC)}{\\text{Area}(\\Delta QRP)} = \\frac{9}{4}, AB = 18\\text{ cm}, BC = 15\\text{ cm}$, then $PR$ is:", difficulty: "HOTS Level", options: ["10 cm", "12 cm", "8 cm", "6 cm"], correct: 0, solution: "<strong>Step 1:</strong> $\\frac{\\text{Area}_1}{\\text{Area}_2} = \\left(\\frac{BC}{RP}\\right)^2 \\implies \\frac{9}{4} = \\left(\\frac{15}{PR}\\right)^2 \\implies \\frac{3}{2} = \\frac{15}{PR} \\implies PR = 10$ cm." },
                    { q: "In triangles $ABC$ and $DEF$, $\\angle B = \\angle E, \\angle F = \\angle C$ and $AB = 3 DE$. Then the two triangles are:", difficulty: "Foundation Level", options: ["Congruent & similar", "Similar but not congruent", "Neither similar nor congruent", "Congruent but not similar"], correct: 1, solution: "<strong>Step 1:</strong> Two angles are equal (similar by AA criterion), but sides are in a 3:1 ratio (not congruent)." },
                    { q: "If $D, E$ are midpoints of sides $AB$ and $AC$ of $\\Delta ABC$, then ratio of area($\\Delta ADE$) to area($\\Delta ABC$) is:", difficulty: "Foundation Level", options: ["1:2", "1:4", "2:1", "4:1"], correct: 1, solution: "<strong>Step 1:</strong> Side ratio is $1:2$. Ratio of areas $= (1/2)^2 = 1:4$." },
                    { q: "If in $\\Delta ABC, DE \\parallel BC$ such that $AD = x, DB = x-2, AE = x+2, EC = x-1$, then $x$ is:", difficulty: "HOTS Level", options: ["4", "3", "2", "1"], correct: 0, solution: "<strong>Step 1:</strong> $\\frac{x}{x-2} = \\frac{x+2}{x-1} \\implies x(x-1) = (x-2)(x+2) \\implies x^2 - x = x^2 - 4 \\implies x = 4$." },
                    { q: "All equilateral triangles are always:", difficulty: "Foundation Level", options: ["Congruent only", "Similar only", "Both similar and congruent", "Neither"], correct: 1, solution: "<strong>Step 1:</strong> All internal angles are $60^\\circ$, hence they are always similar by AAA." },
                    { q: "The length of diagonals of a rhombus are 16cm and 12cm. The length of the side of rhombus is:", difficulty: "Application Level", options: ["9 cm", "10 cm", "8 cm", "20 cm"], correct: 1, solution: "<strong>Step 1:</strong> Diagonals bisect at right angles with half-lengths 8 cm and 6 cm.<br><strong>Step 2:</strong> $\\text{Side} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10$ cm." }
                ]
            },
            M10_CH07: {
                code: "Chapter 07", name: "Coordinate Geometry", weight: 6,
                desc: "Calculate distance, midpoints, section ratios, and verify geometric properties on the Cartesian plane.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 07: Coordinate Geometry & Map Grids</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> GPS & Google Maps
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                How does Google Maps pinpoint your exact position? By giving you two numbers: Latitude ($x$) and Longitude ($y$). Coordinate Geometry bridges algebra and geometry by turning shapes into grid addresses!
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    René Descartes was lying in bed watching a fly crawl across his ceiling grid. He realized he could pinpoint the fly's exact location at any moment by measuring its distance from two perpendicular walls!
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    The Distance Formula $d = \\sqrt{\\Delta x^2 + \\Delta y^2}$ is NOT a new formula! It's just the ancient Pythagoras Theorem applied to horizontal and vertical grid steps on graph paper.
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Plot points and calculate straight-line distances between coordinates.</li>
                                <li><strong>Step 2:</strong> Use Section Formula to find points dividing segments in given ratios ($m_1:m_2$).</li>
                                <li><strong>Step 3:</strong> Prove geometric shapes (parallelograms, squares) by coordinate properties.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Distance & Section Formula Applications" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Derivation of Distance & Section Formulas" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">7. Distance & Section Formulas</h4>
                        <div class="text-center font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 py-2">
                            $$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}, \\quad P(x, y) = \\left(\\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2}\\right)$$
                        </div>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: SECTION FORMULA</p>
                        <p>Find coordinates of point $P$ dividing segment joining $A(4, -3)$ and $B(8, 5)$ in ratio $1:3$.</p>
                        <p><strong>Step 1: Identify values.</strong> $x_1=4, y_1=-3, x_2=8, y_2=5, m_1=1, m_2=3$.</p>
                        <p><strong>Step 2: Apply Section Formula.</strong></p>
                        <p class="pl-4">$x = \\frac{(1)(8) + (3)(4)}{1 + 3} = \\frac{8 + 12}{4} = \\frac{20}{4} = 5$</p>
                        <p class="pl-4">$y = \\frac{(1)(5) + (3)(-3)}{1 + 3} = \\frac{5 - 9}{4} = \\frac{-4}{4} = -1$</p>
                        <p class="pl-4 text-emerald-400 font-bold">Coordinates of P: $(5, -1)$</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Formal Derivation: Distance Formula via Pythagorean Theorem</h4>
                        
                        <p><strong>Step 1: Plot points $P(x_1, y_1)$ and $Q(x_2, y_2)$ on Cartesian plane.</strong><br>
                        Draw perpendiculars $PR$ and $QS$ to x-axis. Draw $PT \\perp QS$.</p>
                        
                        <p><strong>Step 2: Determine side lengths of right triangle $\\Delta PTQ$.</strong><br>
                        Base $PT = RS = x_2 - x_1$<br>
                        Height $QT = QS - ST = y_2 - y_1$</p>
                        
                        <p><strong>Step 3: Apply Pythagoras Theorem to $\\Delta PTQ$.</strong><br>
                        $$PQ^2 = PT^2 + QT^2$$
                        $$PQ^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$</p>
                        
                        <p><strong>Step 4: Take square root.</strong><br>
                        $$PQ = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\quad \\blacksquare$$</p>
                    </div>
                `,
                vernacular: {
                    English: "Treat the Distance Formula as a direct application of the Pythagorean theorem: d = √((x₂ - x₁)² + (y₂ - y₁)²)."
                },
                diagnostics: [
                    { q: "Distance of point P(-6, 8) from origin is:", difficulty: "Foundation Level", options: ["10", "8", "6", "2*sqrt(7)"], correct: 0, solution: "<strong>Step 1:</strong> $d = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$." },
                    { q: "Midpoint of segment joining (2, 6) and (4, 2) is:", difficulty: "Foundation Level", options: ["(3, 4)", "(4, 3)", "(6, 8)", "(1, 2)"], correct: 0, solution: "<strong>Step 1:</strong> $\\left(\\frac{2+4}{2}, \\frac{6+2}{2}\\right) = (3, 4)$." },
                    { q: "Ratio in which y-axis divides (5, -6) and (-1, -4) is:", difficulty: "Application Level", options: ["5:1", "1:5", "2:3", "3:2"], correct: 0, solution: "<strong>Step 1:</strong> On y-axis, $x = 0$. Using section formula: $0 = \\frac{k(-1) + 1(5)}{k+1} \\implies -k + 5 = 0 \\implies k = 5$ (ratio $5:1$)." },
                    { q: "The distance between the points $(0, 5)$ and $(-5, 0)$ is:", difficulty: "Foundation Level", options: ["5", "$5\\sqrt{2}$", "$2\\sqrt{5}$", "10"], correct: 1, solution: "<strong>Step 1:</strong> $d = \\sqrt{(-5-0)^2 + (0-5)^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2}$." },
                    { q: "If the distance between points $(4, p)$ and $(1, 0)$ is 5, then value of $p$ is:", difficulty: "Application Level", options: ["$\\pm 4$", "4 only", "$-4$ only", "0"], correct: 0, solution: "<strong>Step 1:</strong> $(4-1)^2 + (p-0)^2 = 5^2 \\implies 9 + p^2 = 25 \\implies p^2 = 16 \\implies p = \\pm 4$." },
                    { q: "The perimeter of a triangle with vertices $(0,4), (0,0)$ and $(3,0)$ is:", difficulty: "Application Level", options: ["$7 + \\sqrt{5}$", "5", "11", "12"], correct: 3, solution: "<strong>Step 1:</strong> Sides along axes are 4 and 3. Hypotenuse $= \\sqrt{4^2+3^2} = 5$. Perimeter $= 4 + 3 + 5 = 12$." },
                    { q: "The point which divides line segment joining $(7, -6)$ and $(3, 4)$ in ratio $1:2$ internally lies in quadrant:", difficulty: "HOTS Level", options: ["I", "II", "III", "IV"], correct: 3, solution: "<strong>Step 1:</strong> $x = \\frac{1(3)+2(7)}{3} = 17/3 > 0$, $y = \\frac{1(4)+2(-6)}{3} = -8/3 < 0$. Sign $(+, -)$ is Quadrant IV." },
                    { q: "The point on x-axis equidistant from $(2, -5)$ and $(-2, 9)$ is:", difficulty: "HOTS Level", options: ["$(-7, 0)$", "$(7, 0)$", "$(0, -7)$", "$(0, 7)$"], correct: 0, solution: "<strong>Step 1:</strong> $(x-2)^2 + 25 = (x+2)^2 + 81 \\implies -4x + 29 = 4x + 85 \\implies 8x = -56 \\implies x = -7$." },
                    { q: "If $(1, 2), (4, y), (x, 6)$ and $(3, 5)$ are vertices of parallelogram taken in order, then $(x, y)$ is:", difficulty: "HOTS Level", options: ["$(6, 3)$", "$(3, 6)$", "$(5, 2)$", "$(2, 5)$"], correct: 0, solution: "<strong>Step 1:</strong> Midpoints of diagonals coincide: $\\frac{1+x}{2} = \\frac{4+3}{2} \\implies x = 6$; $\\frac{2+6}{2} = \\frac{y+5}{2} \\implies y = 3$." },
                    { q: "The distance of point $P(2, 3)$ from the x-axis is:", difficulty: "Foundation Level", options: ["2", "3", "1", "5"], correct: 1, solution: "<strong>Step 1:</strong> Distance from x-axis is the absolute y-coordinate: $|3| = 3$." },
                    { q: "The distance of point $P(2, 3)$ from the y-axis is:", difficulty: "Foundation Level", options: ["2", "3", "1", "5"], correct: 0, solution: "<strong>Step 1:</strong> Distance from y-axis is the absolute x-coordinate: $|2| = 2$." },
                    { q: "If coordinates of one end of diameter of circle are $(2, 3)$ and center is $(-2, 5)$, then other end is:", difficulty: "Application Level", options: ["$(-6, 7)$", "$(6, -7)$", "$(0, 8)$", "$(4, 2)$"], correct: 0, solution: "<strong>Step 1:</strong> Center is midpoint: $\\frac{2+x}{2} = -2 \\implies x = -6$; $\\frac{3+y}{2} = 5 \\implies y = 7$." }
                ]
            },
            M10_CH08: {
                code: "Chapter 08", name: "Introduction to Trigonometry", weight: 7,
                desc: "Master trigonometric ratios, standard angle values, and fundamental Pythagorean identities.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 08: Trigonometry & Triangle Secrets</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> The Shadow & Ramp Ratio
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                Imagine building a wheelchair ramp. If you increase the ramp angle, the height gets steeper relative to its base. <strong>Trigonometry</strong> ("Triangle Measurement") simply measures the fixed ratio between side lengths for any specific angle!
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Ancient astronomers (like Hipparchus and Aryabhata) needed to measure distances to stars and moons without physically laying measuring tape across space. They created chord tables, which evolved into $\\sin, \\cos, \\tan$.
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    In any right triangle, $(\\text{Opposite}/\\text{Hypotenuse})^2 + (\\text{Adjacent}/\\text{Hypotenuse})^2 = 1$ because of Pythagoras Theorem! That's why $\\sin^2 \\theta + \\cos^2 \\theta = 1$ is always true.
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Memorize 6 trigonometric ratios ($\sin, \cos, \tan, \csc, \sec, \cot$).</li>
                                <li><strong>Step 2:</strong> Master standard angle values table ($0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$).</li>
                                <li><strong>Step 3:</strong> Prove trigonometric identities using algebraic substitutions.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Trigonometric Ratios & Identity Evaluation" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Geometric Proof of Identity $\\sin^2 \\theta + \\cos^2 \\theta = 1$" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">8. Fundamental Trigonometric Identities</h4>
                        <div class="text-center font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 py-2">
                            $$\\sin^2 \\theta + \\cos^2 \\theta = 1, \\quad 1 + \\tan^2 \\theta = \\sec^2 \\theta, \\quad 1 + \\cot^2 \\theta = \\csc^2 \\theta$$
                        </div>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: IDENTITY PROOF</p>
                        <p>Prove that $\\frac{\\sin A}{1 + \\cos A} + \\frac{1 + \\cos A}{\\sin A} = 2 \\csc A$.</p>
                        
                        <p><strong>Step 1: Take LCM of denominators.</strong></p>
                        <p class="pl-4">$\\text{LHS} = \\frac{\\sin^2 A + (1 + \\cos A)^2}{\\sin A (1 + \\cos A)}$</p>
                        
                        <p><strong>Step 2: Expand numerator using $(a+b)^2$.</strong></p>
                        <p class="pl-4">$\\text{LHS} = \\frac{\\sin^2 A + 1 + 2\\cos A + \\cos^2 A}{\\sin A (1 + \\cos A)}$</p>
                        
                        <p><strong>Step 3: Group $\\sin^2 A + \\cos^2 A = 1$.</strong></p>
                        <p class="pl-4">$\\text{LHS} = \\frac{1 + 1 + 2\\cos A}{\\sin A (1 + \\cos A)} = \\frac{2 + 2\\cos A}{\\sin A (1 + \\cos A)}$</p>
                        
                        <p><strong>Step 4: Factor out 2 and cancel terms.</strong></p>
                        <p class="pl-4">$\\text{LHS} = \\frac{2(1 + \\cos A)}{\\sin A (1 + \\cos A)} = \\frac{2}{\\sin A} = 2 \\csc A \\quad \\text{(RHS Proved!)}$</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Formal Geometric Proof: $\\sin^2 \\theta + \\cos^2 \\theta = 1$</h4>
                        
                        <p><strong>Step 1: Consider right triangle $\\Delta ABC$ right-angled at $B$.</strong><br>
                        Let angle $\\angle ACB = \\theta$.<br>
                        Perpendicular $= AB$, Base $= BC$, Hypotenuse $= AC$.</p>
                        
                        <p><strong>Step 2: Write trigonometric ratio definitions.</strong><br>
                        $$\\sin \\theta = \\frac{AB}{AC}, \\quad \\cos \\theta = \\frac{BC}{AC}$$</p>
                        
                        <p><strong>Step 3: Apply Pythagoras Theorem to $\\Delta ABC$.</strong><br>
                        $$AB^2 + BC^2 = AC^2$$</p>
                        
                        <p><strong>Step 4: Divide entire equation by $AC^2$.</strong><br>
                        $$\\frac{AB^2}{AC^2} + \\frac{BC^2}{AC^2} = \\frac{AC^2}{AC^2}$$
                        $$\\left(\\frac{AB}{AC}\\right)^2 + \\left(\\frac{BC}{AC}\\right)^2 = 1$$</p>
                        
                        <p><strong>Step 5: Substitute trigonometric definitions.</strong><br>
                        $$(\\sin \\theta)^2 + (\\cos \\theta)^2 = 1 \\implies \\sin^2 \\theta + \\cos^2 \\theta = 1 \\quad \\blacksquare$$</p>
                    </div>
                `,
                vernacular: {
                    English: "When proving trigonometric identities, simplify complex terms by converting them directly into sin and cos equivalents."
                },
                diagnostics: [
                    { q: "Value of sin^2 30 + cos^2 30 is:", difficulty: "Foundation Level", options: ["1", "0", "1/2", "2"], correct: 0, solution: "<strong>Step 1:</strong> Fundamental identity: $\\sin^2 \\theta + \\cos^2 \\theta = 1$ holds for all angles." },
                    { q: "If sin A = 3/4, then cos A is:", difficulty: "Application Level", options: ["sqrt(7)/4", "4/3", "3/5", "1/4"], correct: 0, solution: "<strong>Step 1:</strong> $\\cos A = \\sqrt{1 - \\sin^2 A} = \\sqrt{1 - 9/16} = \\sqrt{7/16} = \\sqrt{7}/4$." },
                    { q: "Value of 9 sec^2 A - 9 tan^2 A is:", difficulty: "Foundation Level", options: ["9", "1", "0", "8"], correct: 0, solution: "<strong>Step 1:</strong> Factor out 9: $9(\\sec^2 A - \\tan^2 A) = 9(1) = 9$." },
                    { q: "If $\\cos A = 4/5$, then value of $\\tan A$ is:", difficulty: "Foundation Level", options: ["3/5", "3/4", "4/3", "5/3"], correct: 1, solution: "<strong>Step 1:</strong> $\\text{Opposite} = \\sqrt{5^2 - 4^2} = 3$. Therefore $\\tan A = 3/4$." },
                    { q: "Value of $\\frac{1 - \\tan^2 45^\\circ}{1 + \\tan^2 45^\\circ}$ is:", difficulty: "Foundation Level", options: ["$\\tan 90^\\circ$", "1", "$\\sin 45^\\circ$", "0"], correct: 3, solution: "<strong>Step 1:</strong> $\\tan 45^\\circ = 1 \\implies \\frac{1 - 1}{1 + 1} = \\frac{0}{2} = 0$." },
                    { q: "If $\\sin A + \\sin^2 A = 1$, then value of expression $(\\cos^2 A + \\cos^4 A)$ is:", difficulty: "HOTS Level", options: ["1", "1/2", "2", "3"], correct: 0, solution: "<strong>Step 1:</strong> $\\sin A = 1 - \\sin^2 A = \\cos^2 A$.<br><strong>Step 2:</strong> $\\cos^2 A + \\cos^4 A = \\sin A + \\sin^2 A = 1$." },
                    { q: "If $4 \\tan \\theta = 3$, then $\\frac{4 \\sin \\theta - \\cos \\theta}{4 \\sin \\theta + \\cos \\theta}$ equals:", difficulty: "HOTS Level", options: ["2/3", "1/3", "1/2", "3/4"], correct: 2, solution: "<strong>Step 1:</strong> Divide numerator and denominator by $\\cos \\theta$: $\\frac{4\\tan\\theta - 1}{4\\tan\\theta + 1} = \\frac{3 - 1}{3 + 1} = \\frac{2}{4} = 1/2$." },
                    { q: "If $\\sin \\theta + \\cos \\theta = \\sqrt{2} \\cos \\theta$, then $\\tan \\theta$ is:", difficulty: "HOTS Level", options: ["$\\sqrt{2} - 1$", "$\\sqrt{2} + 1$", "1", "$\\sqrt{2}$"], correct: 0, solution: "<strong>Step 1:</strong> Divide by $\\cos \\theta$: $\\tan \\theta + 1 = \\sqrt{2} \\implies \\tan \\theta = \\sqrt{2} - 1$." },
                    { q: "Value of $\\sin 60^\\circ \\cos 30^\\circ + \\sin 30^\\circ \\cos 60^\\circ$ is:", difficulty: "Foundation Level", options: ["0", "1", "1/2", "1/4"], correct: 1, solution: "<strong>Step 1:</strong> $(\\sqrt{3}/2)(\\sqrt{3}/2) + (1/2)(1/2) = 3/4 + 1/4 = 1$." },
                    { q: "If $\\theta = 45^\\circ$, then $\\sec \\theta \\cdot \\cot \\theta$ equals:", difficulty: "Foundation Level", options: ["1", "$\\sqrt{2}$", "2", "$1/\\sqrt{2}$"], correct: 1, solution: "<strong>Step 1:</strong> $\\sec 45^\\circ \\times \\cot 45^\\circ = \\sqrt{2} \\times 1 = \\sqrt{2}$." },
                    { q: "$(\\sec A + \\tan A)(1 - \\sin A)$ is equal to:", difficulty: "Application Level", options: ["$\\sec A$", "$\\sin A$", "$\\csc A$", "$\\cos A$"], correct: 3, solution: "<strong>Step 1:</strong> $\\left(\\frac{1+\\sin A}{\\cos A}\\right)(1 - \\sin A) = \\frac{1 - \\sin^2 A}{\\cos A} = \\frac{\\cos^2 A}{\\cos A} = \\cos A$." },
                    { q: "If $\\sqrt{3} \\tan \\theta = 1$, then acute angle $\\theta$ is:", difficulty: "Foundation Level", options: ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"], correct: 0, solution: "<strong>Step 1:</strong> $\\tan \\theta = 1/\\sqrt{3} \\implies \\theta = 30^\\circ$." }
                ]
            },
            M10_CH09: {
                code: "Chapter 09", name: "Some Applications of Trigonometry", weight: 5,
                desc: "Solve height and distance problems using line of sight, angle of elevation, and angle of depression.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 09: Applications & Remote Heights</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> Flashlights & Lighthouse Keepers
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                Looking UP at a bird in a tree creates an <strong>Angle of Elevation</strong>. Looking DOWN from a balcony at a car creates an <strong>Angle of Depression</strong>. Both create virtual right triangles in thin air!
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Surveyors measuring Mount Everest or lighthouse operators guiding ships into dark harbors could not swim out with tape measures. They used angle clinometers to measure heights from a safe distance.
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    $90\%$ of height problems use $\\tan \\theta = \\text{Height} / \\text{Distance}$ because you usually know (or want to find) the vertical height and horizontal ground distance!
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Convert word problems into accurate right-triangle geometric diagrams.</li>
                                <li><strong>Step 2:</strong> Label Line of Sight, Angle of Elevation/Depression, and ground distance.</li>
                                <li><strong>Step 3:</strong> Set up $\\tan 30^\\circ, \\tan 45^\\circ, \\tan 60^\\circ$ equations to solve missing dimensions.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Single Right-Triangle Elevation Problem" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Two-Triangle System Equations Derivation" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">9. Heights and Distances Principles</h4>
                        <div class="text-center font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 py-2">
                            $$\\tan \\theta = \\frac{\\text{Opposite Side (Height)}}{\\text{Adjacent Side (Distance/Shadow)}}$$
                        </div>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: SHADOW HEIGHT EVALUATION</p>
                        <p>A tower casts shadow $10\\sqrt{3}\\text{ m}$ long when sun elevation is $30^\\circ$. Find tower height $h$.</p>
                        <p><strong>Step 1: Set up tangent ratio.</strong> $\\tan 30^\\circ = \\frac{h}{10\\sqrt{3}}$</p>
                        <p><strong>Step 2: Substitute standard angle value $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$.</strong></p>
                        <p class="pl-4">$\\frac{1}{\\sqrt{3}} = \\frac{h}{10\\sqrt{3}}$</p>
                        <p><strong>Step 3: Solve for $h$.</strong> $h = \\frac{10\\sqrt{3}}{\\sqrt{3}} = 10\\text{ meters}$.</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Derivation of Height Formula in Two-Triangle Systems</h4>
                        
                        <p><strong>Scenario:</strong> Two points at distance $d$ apart observe top of tower of height $h$ with angles of elevation $\\alpha$ and $\\beta$ ($\\beta > \\alpha$).</p>
                        
                        <p><strong>Step 1: Express base distances for each right triangle.</strong><br>
                        Near point distance $x = h \\cot \\beta$<br>
                        Far point distance $x + d = h \\cot \\alpha$</p>
                        
                        <p><strong>Step 2: Subtract equations to eliminate $x$.</strong><br>
                        $$(x + d) - x = h \\cot \\alpha - h \\cot \\beta$$
                        $$d = h(\\cot \\alpha - \\cot \\beta)$$</p>
                        
                        <p><strong>Step 3: Isolate height $h$.</strong><br>
                        $$h = \\frac{d}{\\cot \\alpha - \\cot \\beta} \\quad \\blacksquare$$</p>
                    </div>
                `,
                vernacular: {
                    English: "Always construct an accurate right-triangle diagram first, clearly labeling the angle of elevation or depression."
                },
                diagnostics: [
                    { q: "A tower 10m high casts shadow 10*sqrt(3)m long. Sun elevation is:", difficulty: "Foundation Level", options: ["30 deg", "45 deg", "60 deg", "90 deg"], correct: 0, solution: "<strong>Step 1:</strong> $\\tan \\theta = \\frac{10}{10\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ$." },
                    { q: "If height of pole equals length of shadow, sun altitude is:", difficulty: "Foundation Level", options: ["45 deg", "30 deg", "60 deg", "90 deg"], correct: 0, solution: "<strong>Step 1:</strong> $\\tan \\theta = h/h = 1 \\implies \\theta = 45^\\circ$." },
                    { q: "A 20m ladder touches wall at 10m height. Angle with ground is:", difficulty: "Application Level", options: ["30 deg", "45 deg", "60 deg", "15 deg"], correct: 0, solution: "<strong>Step 1:</strong> $\\sin \\theta = \\frac{\\text{Opp}}{\\text{Hyp}} = \\frac{10}{20} = \\frac{1}{2} \\implies \\theta = 30^\\circ$." },
                    { q: "If the sun's elevation changes from $30^\\circ$ to $60^\\circ$, the length of shadow of a tower:", difficulty: "Foundation Level", options: ["Increases", "Decreases", "Remains same", "Doubles"], correct: 1, solution: "<strong>Step 1:</strong> As the sun rises higher (larger angle), shadow length decreases." },
                    { q: "The angle of elevation of the top of a tower from a point on the ground 30m away from foot of tower is $30^\\circ$. Tower height is:", difficulty: "Application Level", options: ["$10\\sqrt{3}$m", "$30\\sqrt{3}$m", "$10$m", "$20$m"], correct: 0, solution: "<strong>Step 1:</strong> $\\tan 30^\\circ = h/30 \\implies h = 30/\\sqrt{3} = 10\\sqrt{3}$ m." },
                    { q: "A string of kite is 100m long making angle of $60^\\circ$ with ground. Height of kite is:", difficulty: "Application Level", options: ["$50\\sqrt{3}$m", "$100\\sqrt{3}$m", "$50$m", "$100/\\sqrt{3}$m"], correct: 0, solution: "<strong>Step 1:</strong> $\\sin 60^\\circ = h/100 \\implies h = 100(\\sqrt{3}/2) = 50\\sqrt{3}$ m." },
                    { q: "An observer 1.5m tall is 28.5m away from a tower 30m high. Angle of elevation of top of tower from eye of observer is:", difficulty: "Application Level", options: ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"], correct: 1, solution: "<strong>Step 1:</strong> Net height $= 30 - 1.5 = 28.5$m. $\\tan \\theta = 28.5/28.5 = 1 \\implies \\theta = 45^\\circ$." },
                    { q: "From top of a 7m high building, angle of elevation of top of cable tower is $60^\\circ$ and angle of depression of its foot is $45^\\circ$. Tower height is:", difficulty: "HOTS Level", options: ["$7(\\sqrt{3}+1)$m", "$7(\\sqrt{3}-1)$m", "$14$m", "$7\\sqrt{3}$m"], correct: 0, solution: "<strong>Step 1:</strong> Distance to tower $= 7/\\tan 45^\\circ = 7$m. Top section $= 7\\tan 60^\\circ = 7\\sqrt{3}$. Total $= 7(1+\\sqrt{3})$m." },
                    { q: "Ratio of height of a rod and its shadow is $1 : \\sqrt{3}$. Angle of elevation of sun is:", difficulty: "Foundation Level", options: ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"], correct: 0, solution: "<strong>Step 1:</strong> $\\tan \\theta = 1/\\sqrt{3} \\implies \\theta = 30^\\circ$." },
                    { q: "If angle of elevation of a balloon from two points at distances $a$ and $b$ ($a>b$) from base are $30^\\circ$ and $60^\\circ$, height of balloon is:", difficulty: "HOTS Level", options: ["$\\sqrt{ab}$", "$a+b$", "$a-b$", "$ab$"], correct: 0, solution: "<strong>Step 1:</strong> $\\tan 30^\\circ = h/a, \\tan 60^\\circ = h/b \\implies (h/a)(h/b) = (1/\\sqrt{3})(\\sqrt{3}) = 1 \\implies h = \\sqrt{ab}$." },
                    { q: "Angle of depression of a car standing on ground from top of a 75m high tower is $30^\\circ$. Distance of car from base of tower is:", difficulty: "Foundation Level", options: ["$75\\sqrt{3}$m", "$25\\sqrt{3}$m", "$75$m", "$150$m"], correct: 0, solution: "<strong>Step 1:</strong> $\\tan 30^\\circ = 75/x \\implies x = 75/\\tan 30^\\circ = 75\\sqrt{3}$ m." },
                    { q: "The line drawn from eye of an observer to object viewed is called:", difficulty: "Foundation Level", options: ["Horizontal line", "Line of sight", "Line of elevation", "Transversal"], correct: 1, solution: "<strong>Step 1:</strong> By definition, it is called the line of sight." }
                ]
            },
            M10_CH10: {
                code: "Chapter 10", name: "Circles", weight: 6,
                desc: "Explore radius-tangent perpendicularity and equal lengths of tangents drawn from external points.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 10: Circles & Tangent Geometry</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> Whirling a Stone on a String
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                Tie a stone to a string and spin it in a circle. If the string suddenly snaps, the stone flies off in a perfectly straight line! That straight line path is a <strong>Tangent</strong>—it touches the circle at exactly one single point.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Engineers designing bicycle chains, machine gears, and train wheels needed to calculate exact contact points where flat belts wrap around circular wheels without slipping.
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    If you hold a ice-cream cone (an external point $P$), both sides of the cone stretching to the scoop of ice-cream ($PA$ and $PB$) MUST be identical in length ($PA = PB$) due to symmetry!
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Understand Theorem 10.1: Radius is always perpendicular ($90^\circ$) to tangent at point of contact.</li>
                                <li><strong>Step 2:</strong> Master Theorem 10.2: Tangents from external point are equal ($PA=PB$) via RHS Congruence.</li>
                                <li><strong>Step 3:</strong> Solve circumscribed polygon and cyclic quadrilateral chord problems.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Tangent-Radius Perpendicularity Application" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Proof of Equal Tangents Theorem (Theorem 10.2)" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">10. Tangent Theorems</h4>
                        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            • Theorem 10.1: Tangent at any point of circle is $\\perp$ to radius through point of contact.<br>
                            • Theorem 10.2: Lengths of tangents drawn from an external point to a circle are equal ($PA = PB$).
                        </p>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: TANGENT LENGTH</p>
                        <p>A point $P$ is $10\\text{ cm}$ away from center $O$ of circle of radius $r = 6\\text{ cm}$. Find tangent length $PA$.</p>
                        <p><strong>Step 1: Identify right triangle $\\Delta OAP$ ($\\angle OAP = 90^\\circ$).</strong></p>
                        <p><strong>Step 2: Apply Pythagoras Theorem.</strong></p>
                        <p class="pl-4">$OP^2 = OA^2 + PA^2 \\implies 10^2 = 6^2 + PA^2$</p>
                        <p class="pl-4">$100 = 36 + PA^2 \\implies PA^2 = 64 \\implies PA = 8\\text{ cm}$.</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Formal Proof: Theorem 10.2 (Equal Tangent Lengths from External Point)</h4>
                        
                        <p><strong>Given:</strong> Circle with center $O$, external point $P$, and two tangents $PA$ and $PB$ touching circle at $A$ and $B$.<br>
                        <strong>To Prove:</strong> $PA = PB$.<br>
                        <strong>Construction:</strong> Join $OA$, $OB$, and $OP$.</p>
                        
                        <p><strong>Step 1: Identify perpendicular angles.</strong><br>
                        By Theorem 10.1, radius is perpendicular to tangent at point of contact.<br>
                        $$\\implies \\angle OAP = \\angle OBP = 90^\\circ$$</p>
                        
                        <p><strong>Step 2: Compare triangles $\\Delta OAP$ and $\\Delta OBP$.</strong><br>
                        • $\\angle OAP = \\angle OBP = 90^\\circ$ (Right angles)<br>
                        • $OP = OP$ (Common hypotenuse)<br>
                        • $OA = OB$ (Radii of same circle)</p>
                        
                        <p><strong>Step 3: Apply RHS Congruence Criterion.</strong><br>
                        $$\\Delta OAP \\cong \\Delta OBP \\quad \\text{(by RHS)}$$</p>
                        
                        <p><strong>Step 4: Conclude using CPCTC.</strong><br>
                        $$PA = PB \\quad \\text{(Corresponding Parts of Congruent Triangles)} \\quad \\blacksquare$$</p>
                    </div>
                `,
                vernacular: {
                    English: "Master Theorem 10.2 (tangents from an external point are equal in length) using RHS triangle congruence."
                },
                diagnostics: [
                    { q: "Maximum number of tangents from an external point to a circle is:", difficulty: "Foundation Level", options: ["2", "1", "Infinite", "0"], correct: 0, solution: "<strong>Step 1:</strong> Exactly two tangents can be drawn from any point outside a circle." },
                    { q: "If TP and TQ are tangents with angle POQ = 110 deg, angle PTQ is:", difficulty: "Application Level", options: ["70 deg", "80 deg", "90 deg", "60 deg"], correct: 0, solution: "<strong>Step 1:</strong> $\\angle PTQ + \\angle POQ = 180^\\circ \\implies \\angle PTQ = 180^\\circ - 110^\\circ = 70^\\circ$." },
                    { q: "Length of chord of outer circle (r=5) touching inner circle (r=3) is:", difficulty: "HOTS Level", options: ["8 cm", "6 cm", "4 cm", "10 cm"], correct: 0, solution: "<strong>Step 1:</strong> Half chord $= \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$. Full chord $= 2 \\times 4 = 8$ cm." },
                    { q: "If tangents $PA$ and $PB$ from point $P$ to circle with center $O$ are inclined to each other at angle $80^\\circ$, then $\\angle POA$ is equal to:", difficulty: "Application Level", options: ["$50^\\circ$", "$60^\\circ$", "$70^\\circ$", "$80^\\circ$"], correct: 0, solution: "<strong>Step 1:</strong> $\\angle AOB = 180^\\circ - 80^\\circ = 100^\\circ$. Line $OP$ bisects $\\angle AOB$, so $\\angle POA = 50^\\circ$." },
                    { q: "Number of tangents that can be drawn to a circle at any point on the circle is:", difficulty: "Foundation Level", options: ["1", "2", "Infinite", "0"], correct: 0, solution: "<strong>Step 1:</strong> Only 1 tangent line can touch a circle at a given point on its circumference." },
                    { q: "If a parallelogram circumscribes a circle, then it is a:", difficulty: "Application Level", options: ["Rectangle", "Square", "Rhombus", "Trapezium"], correct: 2, solution: "<strong>Step 1:</strong> Equal tangent segments force adjacent sides to be equal, turning the parallelogram into a rhombus." },
                    { q: "In figure, $AQ, AR, BC$ are tangents to circle with center $O$. If $AQ = 5\\text{ cm}$, perimeter of $\\Delta ABC$ is:", difficulty: "HOTS Level", options: ["10 cm", "15 cm", "20 cm", "25 cm"], correct: 0, solution: "<strong>Step 1:</strong> $\\text{Perimeter}(\\Delta ABC) = 2 \\times AQ = 2(5) = 10$ cm." },
                    { q: "Distance between two parallel tangents to a circle of radius 5 cm is:", difficulty: "Foundation Level", options: ["5 cm", "10 cm", "2.5 cm", "15 cm"], correct: 1, solution: "<strong>Step 1:</strong> Distance $= 2 \\times r = 2(5) = 10$ cm (diameter length)." },
                    { q: "A line touching a circle at only one single point is called a:", difficulty: "Foundation Level", options: ["Secant", "Chord", "Tangent", "Segment"], correct: 2, solution: "<strong>Step 1:</strong> By definition, it is a tangent." },
                    { q: "A line intersecting a circle in two distinct points is called a:", difficulty: "Foundation Level", options: ["Secant", "Tangent", "Radius", "Diameter"], correct: 0, solution: "<strong>Step 1:</strong> By definition, it is a secant." },
                    { q: "If radii of two concentric circles are 4cm and 5cm, length of chord of larger circle touching smaller circle is:", difficulty: "Application Level", options: ["3 cm", "6 cm", "9 cm", "10 cm"], correct: 1, solution: "<strong>Step 1:</strong> Half-chord $= \\sqrt{5^2 - 4^2} = 3$ cm. Total chord $= 2 \\times 3 = 6$ cm." },
                    { q: "Angle between tangent and radius through point of contact is:", difficulty: "Foundation Level", options: ["$45^\\circ$", "$60^\\circ$", "$90^\\circ$", "$180^\\circ$"], correct: 2, solution: "<strong>Step 1:</strong> Theorem 10.1 proves this angle is always $90^\\circ$." }
                ]
            },
M10_CH11: {
                code: "Chapter 11", name: "Areas Related to Circles", weight: 5,
                desc: "Calculate sector areas, arc lengths, segment areas, and combined plane figure areas.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 11: Pizza Slices & Crust Segment Areas</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> Slicing a Circular Pizza
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                A slice of pizza cut from center to edge is a <strong>Sector</strong>. The outer crust edge of that single slice is the <strong>Arc Length</strong>. If you slice straight across the toppings without passing through the center, you cut off a <strong>Segment</strong>.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Architects designing arched windows, circular amphitheaters, and clockmakers crafting gear rotations needed fractional circular areas rather than full circle calculations.
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Every sector area is simply a fraction of the total circle: $\\frac{\\text{Angle } \\theta}{360^\\circ} \\times \\pi r^2$. If your angle is $60^\\circ$, your slice is exactly $\\frac{60}{360} = \\frac{1}{6}$ of the whole pizza!
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Calculate Arc Length $l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$.</li>
                                <li><strong>Step 2:</strong> Calculate Sector Area $A = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$.</li>
                                <li><strong>Step 3:</strong> Calculate Segment Area = Sector Area - Central Triangle Area.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Sector & Arc Length Computations" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Derivation of Segment Area Formula" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">11. Sector & Segment Formulas</h4>
                        <div class="text-center font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300 py-2">
                            $$\\text{Arc Length } l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r, \\quad \\text{Sector Area} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$$
                        </div>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: SECTOR AREA</p>
                        <p>Find area of sector of circle with radius $r = 6\\text{ cm}$ and central angle $\\theta = 60^\\circ$.</p>
                        <p><strong>Step 1: Apply Sector Area Formula.</strong></p>
                        <p class="pl-4">$\\text{Area} = \\frac{60}{360} \\times \\frac{22}{7} \\times 6^2 = \\frac{1}{6} \\times \\frac{22}{7} \\times 36 = \\frac{132}{7}\\text{ cm}^2 \\approx 18.86\\text{ cm}^2$.</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Derivation of Minor Segment Area Formula</h4>
                        
                        <p><strong>Step 1: Understand geometric components.</strong><br>
                        Minor Segment Area = Area of Sector $OAPB$ - Area of Triangle $\\Delta OAB$.</p>
                        
                        <p><strong>Step 2: Area of Sector $OAPB$.</strong><br>
                        $$\\text{Area}(\\text{Sector}) = \\frac{\\theta}{360^\\circ} \\pi r^2$$</p>
                        
                        <p><strong>Step 3: Area of Triangle $\\Delta OAB$ with central angle $\\theta$.</strong><br>
                        Using trigonometry, $\\text{Area}(\\Delta OAB) = \\frac{1}{2} r^2 \\sin \\theta$.</p>
                        
                        <p><strong>Step 4: Combine terms.</strong><br>
                        $$\\text{Area of Minor Segment} = \\left(\\frac{\\theta}{360^\\circ} \\pi r^2\\right) - \\left(\\frac{1}{2} r^2 \\sin \\theta\\right) \\quad \\blacksquare$$</p>
                    </div>
                `,
                vernacular: {
                    English: "To calculate minor segment area, always subtract the central triangle area ((1/2)r² sin θ) from the sector area."
                },
                diagnostics: [
                    { q: "Area of sector of angle 60 deg of circle with radius 6 cm is:", difficulty: "Foundation Level", options: ["132/7 cm^2", "154/7 cm^2", "44/7 cm^2", "22/7 cm^2"], correct: 0, solution: "<strong>Step 1:</strong> $\\text{Area} = \\frac{60}{360} \\times \\frac{22}{7} \\times 6^2 = \\frac{1}{6} \\times \\frac{22}{7} \\times 36 = \\frac{132}{7}$ cm$^2$." },
                    { q: "If perimeter and area of circle are numerically equal, radius is:", difficulty: "Application Level", options: ["2 units", "pi units", "4 units", "7 units"], correct: 0, solution: "<strong>Step 1:</strong> $2\\pi r = \\pi r^2 \\implies r = 2$ units." },
                    { q: "Angle swept by minute hand of clock in 5 minutes is:", difficulty: "Foundation Level", options: ["30 deg", "60 deg", "15 deg", "45 deg"], correct: 0, solution: "<strong>Step 1:</strong> In 60 minutes, the minute hand sweeps $360^\\circ$. In 5 mins: $\\frac{360}{60} \\times 5 = 30^\\circ$." },
                    { q: "Area of a quadrant of a circle whose circumference is 22 cm is:", difficulty: "Application Level", options: ["77/8 cm^2", "77/4 cm^2", "77/2 cm^2", "22/7 cm^2"], correct: 0, solution: "<strong>Step 1:</strong> $2\\pi r = 22 \\implies r = 7/2$. Area of quadrant $= \\frac{1}{4} \\pi r^2 = \\frac{1}{4} \\times \\frac{22}{7} \\times \\frac{49}{4} = \\frac{77}{8}$ cm$^2$." },
                    { q: "Length of arc of sector of angle $p$ (in degrees) of circle with radius $R$ is:", difficulty: "Foundation Level", options: ["$\\frac{p}{180} \\times 2\\pi R$", "$\\frac{p}{360} \\times 2\\pi R$", "$\\frac{p}{360} \\times \\pi R^2$", "$\\frac{p}{720} \\times 2\\pi R$"], correct: 1, solution: "<strong>Step 1:</strong> Standard arc length formula is $\\frac{p}{360} \\times 2\\pi R$." },
                    { q: "Area of sector of angle $p$ (in degrees) of a circle with radius $R$ is:", difficulty: "Foundation Level", options: ["$\\frac{p}{180} \\times 2\\pi R$", "$\\frac{p}{180} \\times \\pi R^2$", "$\\frac{p}{360} \\times 2\\pi R$", "$\\frac{p}{720} \\times 2\\pi R^2$"], correct: 3, solution: "<strong>Step 1:</strong> $\\frac{p}{360} \\pi R^2 = \\frac{p}{720} (2\\pi R^2)$." },
                    { q: "If radius of a circle is doubled, its area becomes:", difficulty: "Foundation Level", options: ["2 times", "4 times", "8 times", "3 times"], correct: 1, solution: "<strong>Step 1:</strong> Area $\\propto r^2$. Doubling the radius quadruples the area: $2^2 = 4$ times." },
                    { q: "Area of largest triangle that can be inscribed in a semi-circle of radius $r$ is:", difficulty: "HOTS Level", options: ["$r^2$", "$2r^2$", "$r^3$", "$\\frac{1}{2}r^2$"], correct: 0, solution: "<strong>Step 1:</strong> Base $= 2r$, Maximum height $= r$. Area $= \\frac{1}{2} \\times 2r \\times r = r^2$." },
                    { q: "Ratio of area of circle to area of square inscribed in it is:", difficulty: "HOTS Level", options: ["$\\pi : 2$", "$\\pi : 4$", "2 : $\\pi$", "4 : $\\pi$"], correct: 0, solution: "<strong>Step 1:</strong> Square diagonal $= 2r \\implies \\text{side} = \\sqrt{2}r$. Area of square $= 2r^2$. Ratio $= \\pi r^2 : 2r^2 = \\pi : 2$." },
                    { q: "If perimeter of a protractor is 36 cm, its diameter is ($\\,\\pi = 22/7\\,$):", difficulty: "HOTS Level", options: ["14 cm", "7 cm", "21 cm", "28 cm"], correct: 0, solution: "<strong>Step 1:</strong> Perimeter $= \\pi r + 2r = 36 \\implies r(22/7 + 2) = 36 \\implies r(36/7) = 36 \\implies r = 7$. Diameter $= 2r = 14$ cm." },
                    { q: "Distance covered by a wheel of radius 35cm in 100 revolutions is:", difficulty: "Application Level", options: ["220m", "110m", "440m", "330m"], correct: 0, solution: "<strong>Step 1:</strong> Distance $= 100 \\times 2\\pi r = 100 \\times 2(22/7)(0.35) = 220$ m." },
                    { q: "Perimeter of sector of central angle $60^\\circ$ and radius 7cm is:", difficulty: "Application Level", options: ["$21.33$ cm", "$14 + 7.33 = 21.33$ cm", "$7.33$ cm", "$44$ cm"], correct: 1, solution: "<strong>Step 1:</strong> Arc length $= \\frac{60}{360} \\times 2(22/7)(7) = 7.33$ cm. Perimeter $= 7.33 + 2(7) = 21.33$ cm." }
                ]
            },
            M10_CH12: {
                code: "Chapter 12", name: "Surface Areas and Volumes", weight: 6,
                desc: "Calculate surface areas and volumes of combination 3D solids: cones, cylinders, spheres, hemispheres, and cubes.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 12: 3D Solids & Volume Invariance</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> Melting Wax & Ice Cream Cones
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                If you melt a wax candle shaped like a sphere and pour it into a tall cylindrical mold, the shape changes completely, but the <strong>Total Amount of Wax (Volume)</strong> stays exactly the same!
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Industrial designers and metallurgists needed to know how much paint is required to coat complex objects (Surface Area) and how much liquid/metal a container holds (Volume).
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    When combining two solids (like a dome hemisphere on a cylinder building), you ADD their volumes, but for Surface Area, you subtract the hidden touching bases!
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Master individual solid formulas (cylinders, cones, spheres, hemispheres).</li>
                                <li><strong>Step 2:</strong> Solve combined 3D shape problems (test tubes, circus tents, wooden toys).</li>
                                <li><strong>Step 3:</strong> Solve recasting problems by setting Initial Volume = Final Volume.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Combined Solid Volume & Recasting" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Mathematical Proof of Volume Conservation during Recasting" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">12. 3D Solids Formulas</h4>
                        <p class="text-xs text-slate-700 dark:text-slate-300">Cylinder Volume: $\\pi r^2 h$, Cone Volume: $\\frac{1}{3}\\pi r^2 h$, Sphere Volume: $\\frac{4}{3}\\pi r^3$.</p>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: SPHERE RECASTING</p>
                        <p>A metallic sphere of radius $r_1 = 4.2\\text{ cm}$ is melted and recast into cylinder of radius $r_2 = 6\\text{ cm}$. Find cylinder height $h$.</p>
                        <p><strong>Step 1: Apply Volume Conservation: Volume of Cylinder = Volume of Sphere.</strong></p>
                        <p class="pl-4">$\\pi r_2^2 h = \\frac{4}{3} \\pi r_1^3 \\implies r_2^2 h = \\frac{4}{3} r_1^3$</p>
                        <p class="pl-4">$6^2 \\cdot h = \\frac{4}{3} (4.2)^3 \\implies 36 h = \\frac{4}{3} (74.088) = 98.784$</p>
                        <p class="pl-4">$h = \\frac{98.784}{36} = 2.74\\text{ cm}$.</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Mathematical Principle: Volume Conservation Law</h4>
                        <p>When a physical solid is melted and recast into a different shape, its mass and volume remain invariant (assuming zero material loss):</p>
                        $$V_{\\text{initial solid}} = V_{\\text{final solid}}$$
                    </div>
                `,
                vernacular: {
                    English: "For recasting and melting problems, set initial total volume equal to final total volume to determine unknown dimensions."
                },
                diagnostics: [
                    { q: "Volume of sphere of radius r is:", difficulty: "Foundation Level", options: ["4/3 * pi * r^3", "2/3 * pi * r^3", "4 * pi * r^2", "3/4 * pi * r^3"], correct: 0, solution: "<strong>Step 1:</strong> Standard volume of a sphere of radius $r$ is $\\frac{4}{3}\\pi r^3$." },
                    { q: "Two cubes each of volume 64 cm^3 joined end to end form cuboid of SA:", difficulty: "Application Level", options: ["160 cm^2", "128 cm^2", "144 cm^2", "180 cm^2"], correct: 0, solution: "<strong>Step 1:</strong> Edge of cube $= \\sqrt[3]{64} = 4$ cm. Cuboid dimensions: $8 \\times 4 \\times 4$ cm.<br><strong>Step 2:</strong> $\\text{SA} = 2(8\\cdot 4 + 4\\cdot 4 + 8\\cdot 4) = 2(32 + 16 + 32) = 160$ cm$^2$." },
                    { q: "Total surface area of solid hemisphere of radius r is:", difficulty: "Foundation Level", options: ["3 * pi * r^2", "2 * pi * r^2", "4 * pi * r^2", "pi * r^2"], correct: 0, solution: "<strong>Step 1:</strong> Curved surface area $= 2\\pi r^2$. Flat base area $= \\pi r^2$. $\\text{Total} = 3\\pi r^2$." },
                    { q: "A metallic sphere of radius 4.2cm is melted and recast into cylinder of radius 6cm. Height of cylinder is:", difficulty: "Application Level", options: ["2.74 cm", "3.12 cm", "1.98 cm", "2.44 cm"], correct: 0, solution: "<strong>Step 1:</strong> $\\pi (6)^2 h = \\frac{4}{3}\\pi (4.2)^3 \\implies 36h = 98.784 \\implies h = 2.74$ cm." },
                    { q: "Curved surface area of a right circular cone of height 15cm and base diameter 16cm is:", difficulty: "Application Level", options: ["$136\\pi$ cm^2", "$120\\pi$ cm^2", "$136$ cm^2", "$240\\pi$ cm^2"], correct: 0, solution: "<strong>Step 1:</strong> Radius $= 8$ cm. Slant height $l = \\sqrt{15^2 + 8^2} = 17$ cm.<br><strong>Step 2:</strong> $\\text{CSA} = \\pi r l = \\pi(8)(17) = 136\\pi$ cm$^2$." },
                    { q: "If two solid hemispheres of same base radius $r$ are joined together along their bases, total surface area of new solid is:", difficulty: "Foundation Level", options: ["$4\\pi r^2$", "$3\\pi r^2$", "$6\\pi r^2$", "$5\\pi r^2$"], correct: 0, solution: "<strong>Step 1:</strong> Combining two hemispheres at their flat circular bases forms a complete sphere: Surface area $= 4\\pi r^2$." },
                    { q: "Ratio of volumes of two spheres is 64:27. Ratio of their surface areas is:", difficulty: "HOTS Level", options: ["16:9", "4:3", "9:16", "3:4"], correct: 0, solution: "<strong>Step 1:</strong> Ratio of radii $= \\sqrt[3]{64/27} = 4/3$. Ratio of surface areas $= (4/3)^2 = 16:9$." },
                    { q: "A solid piece of iron in form of cuboid $49cm \\times 33cm \\times 24cm$ is molded into solid sphere. Radius of sphere is:", difficulty: "HOTS Level", options: ["21 cm", "28 cm", "14 cm", "35 cm"], correct: 0, solution: "<strong>Step 1:</strong> $\\frac{4}{3}\\pi r^3 = 49 \\times 33 \\times 24 \\implies r^3 = 9261 \\implies r = 21$ cm." },
                    { q: "If radius of base of cone is doubled keeping height same, volume becomes:", difficulty: "Foundation Level", options: ["2 times", "4 times", "8 times", "3 times"], correct: 1, solution: "<strong>Step 1:</strong> Volume is proportional to $r^2$. When $r$ doubles, volume increases by $2^2 = 4$ times." },
                    { q: "Formula for slant height $l$ of cone of height $h$ and radius $r$ is:", difficulty: "Foundation Level", options: ["$l = \\sqrt{h^2 + r^2}$", "$l = h^2 + r^2$", "$l = \\sqrt{h^2 - r^2}$", "$l = h + r$"], correct: 0, solution: "<strong>Step 1:</strong> Derived via the Pythagorean theorem on the cross-sectional right triangle: $l = \\sqrt{h^2 + r^2}$." },
                    { q: "Total surface area of a solid cube of side $a$ is:", difficulty: "Foundation Level", options: ["$4a^2$", "$6a^2$", "$a^3$", "$12a$"], correct: 1, solution: "<strong>Step 1:</strong> A cube has six square faces, each of area $a^2$: Total $= 6a^2$." },
                    { q: "The number of solid spheres of diameter 6cm that can be made by melting a solid cylinder of height 45cm and diameter 4cm is:", difficulty: "HOTS Level", options: ["5", "15", "10", "20"], correct: 0, solution: "<strong>Step 1:</strong> Cylinder volume $= \\pi(2)^2(45) = 180\\pi$. Sphere volume $= \\frac{4}{3}\\pi(3)^3 = 36\\pi$. Count $= 180\\pi / 36\\pi = 5$." }
                ]
            },
            M10_CH13: {
                code: "Chapter 13", name: "Statistics", weight: 7,
                desc: "Compute measures of central tendency: Mean (Direct, Assumed Mean methods), Mode, and Median of grouped data.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 13: Statistics & The Center of Data</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> Class Test Scores & Shoe Sizes
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                If 1,000 students take an exam, looking at 1,000 separate numbers causes brain overload! We summarize data into 3 central measures:
                                <br>• <strong>Mean:</strong> The fair-share average if scores were distributed equally.
                                <br>• <strong>Median:</strong> The exact middle student in line.
                                <br>• <strong>Mode:</strong> The most popular shoe size or score in the crowd.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Governments, census takers, and weather analysts needed ways to process huge datasets into single actionable metrics to make policy decisions.
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Empirical relationship links all three central tendencies together: $3 \\times \\text{Median} = \\text{Mode} + 2 \\times \\text{Mean}$.
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> Calculate Mean of grouped data using Direct and Assumed Mean methods.</li>
                                <li><strong>Step 2:</strong> Identify Modal Class and compute Mode using lower limit $l$ formula.</li>
                                <li><strong>Step 3:</strong> Build Cumulative Frequency ($cf$) tables to compute Median.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Mean & Empirical Formula Calculation" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Derivation of Assumed Mean Method Formula" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">13. Empirical Relationship & Mode Formula</h4>
                        <div class="text-center font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300 py-2">
                            $$3 \\times \\text{Median} = \\text{Mode} + 2 \\times \\text{Mean}$$
                            $$\\text{Mode} = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h$$
                        </div>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: MODE OF GROUPED DATA</p>
                        <p>Given modal class parameters: lower limit $l = 30$, $f_1 = 12, f_0 = 9, f_2 = 6$, width $h = 10$.</p>
                        <p><strong>Step 1: Apply Mode Formula.</strong></p>
                        <p class="pl-4">$\\text{Mode} = 30 + \\left(\\frac{12 - 9}{2(12) - 9 - 6}\\right) \\times 10 = 30 + \\left(\\frac{3}{24 - 15}\\right) \\times 10 = 30 + \\left(\\frac{3}{9}\\right) \\times 10 = 30 + 3.33 = 33.33$.</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Formal Derivation: Assumed Mean Method Formula</h4>
                        
                        <p><strong>Step 1: Define deviation $d_i$ from assumed mean $a$.</strong><br>
                        Let $d_i = x_i - a \\implies x_i = a + d_i$.</p>
                        
                        <p><strong>Step 2: Substitute into Direct Mean formula.</strong><br>
                        $$\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i} = \\frac{\\sum f_i (a + d_i)}{\\sum f_i}$$</p>
                        
                        <p><strong>Step 3: Split summation.</strong><br>
                        $$\\bar{x} = \\frac{a \\sum f_i + \\sum f_i d_i}{\\sum f_i} = a \\frac{\\sum f_i}{\\sum f_i} + \\frac{\\sum f_i d_i}{\\sum f_i}$$
                        $$\\bar{x} = a + \\frac{\\sum f_i d_i}{\\sum f_i} \\quad \\blacksquare$$</p>
                    </div>
                `,
                vernacular: {
                    English: "Use the empirical relationship 3 Median = Mode + 2 Mean to verify consistency among measures of central tendency."
                },
                diagnostics: [
                    { q: "The empirical relationship between mean, median and mode is:", difficulty: "Foundation Level", options: ["3 Median = Mode + 2 Mean", "Median = 3 Mode + 2 Mean", "Mean = 3 Median + Mode", "Mode = 3 Mean + 2 Median"], correct: 0, solution: "<strong>Step 1:</strong> The recognized empirical relationship is $3\\text{ Median} = \\text{Mode} + 2\\text{ Mean}$." },
                    { q: "Class mark of class interval 10 - 25 is:", difficulty: "Foundation Level", options: ["17.5", "15", "20", "12.5"], correct: 0, solution: "<strong>Step 1:</strong> $\\text{Class mark} = \\frac{\\text{Upper} + \\text{Lower}}{2} = \\frac{10 + 25}{2} = \\frac{35}{2} = 17.5$." },
                    { q: "If mean is 27 and median is 28, mode is:", difficulty: "Application Level", options: ["30", "29", "31", "26"], correct: 0, solution: "<strong>Step 1:</strong> $\\text{Mode} = 3\\text{ Median} - 2\\text{ Mean} = 3(28) - 2(27) = 84 - 54 = 30$." },
                    { q: "Construction of cumulative frequency table is useful in determining:", difficulty: "Foundation Level", options: ["Mean", "Median", "Mode", "All three"], correct: 1, solution: "<strong>Step 1:</strong> The cumulative frequency distribution table is directly used to locate the median position." },
                    { q: "For given grouped frequency distribution, modal class is class with:", difficulty: "Foundation Level", options: ["Lowest frequency", "Maximum frequency", "First frequency", "Cumulative frequency"], correct: 1, solution: "<strong>Step 1:</strong> The modal class is defined as the class interval having the highest frequency." },
                    { q: "If $\\sum f_i d_i = 50$, $\\sum f_i = 100$, and assumed mean $a = 25$, then mean $\\bar{x}$ is:", difficulty: "Application Level", options: ["25.5", "25.05", "26", "30"], correct: 0, solution: "<strong>Step 1:</strong> $\\bar{x} = a + \\frac{\\sum f_i d_i}{\\sum f_i} = 25 + \\frac{50}{100} = 25 + 0.5 = 25.5$." },
                    { q: "Mid-point of a class interval is calculated as:", difficulty: "Foundation Level", options: ["(Upper limit - Lower limit)/2", "(Upper limit + Lower limit)/2", "Upper limit + Lower limit", "Upper limit - Lower limit"], correct: 1, solution: "<strong>Step 1:</strong> Mid-point $= \\frac{\\text{Upper limit} + \\text{Lower limit}}{2}$." },
                    { q: "If the mean of numbers 2, 7, 9, x, 6 is 9, then value of x is:", difficulty: "Application Level", options: ["13", "21", "17", "11"], correct: 1, solution: "<strong>Step 1:</strong> $\\frac{2 + 7 + 9 + x + 6}{5} = 9 \\implies 24 + x = 45 \\implies x = 21$." },
                    { q: "While computing mean of grouped data, we assume frequencies are:", difficulty: "Foundation Level", options: ["Evenly distributed across classes", "Centered at class marks of classes", "Centered at upper limits", "Centered at lower limits"], correct: 1, solution: "<strong>Step 1:</strong> Standard statistical assumption: all frequencies are centered at the respective class marks." },
                    { q: "Sum of deviations of observations from their mean is always:", difficulty: "HOTS Level", options: ["0", "1", "Positive", "Negative"], correct: 0, solution: "<strong>Step 1:</strong> $\\sum (x_i - \\bar{x}) = \\sum x_i - n\\bar{x} = n\\bar{x} - n\\bar{x} = 0$." },
                    { q: "If median of data 10, 12, 14, x+2, x+4, 22, 24, 28 arranged in ascending order is 18, x is:", difficulty: "HOTS Level", options: ["15", "16", "17", "18"], correct: 0, solution: "<strong>Step 1:</strong> Median is the average of the 4th and 5th terms: $\\frac{(x+2)+(x+4)}{2} = x + 3 = 18 \\implies x = 15$." },
                    { q: "Mode of observations 5, 3, 4, 3, 5, 3, 6, 4, 3 is:", difficulty: "Foundation Level", options: ["3", "4", "5", "6"], correct: 0, solution: "<strong>Step 1:</strong> The number 3 occurs 4 times, which is more frequent than any other value." }
                ]
            },
            M10_CH14: {
                code: "Chapter 14", name: "Probability", weight: 4,
                desc: "Calculate theoretical probabilities of events, complementary events, and sample space outcomes for coins, dice, and cards.",
                overview: `
                    <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-6">
                        <div>
                            <span class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">First-Principles Intuition</span>
                            <h3 class="text-lg font-black text-slate-900 dark:text-white mt-2">Chapter 14: Probability & Predicting Chance</h3>
                        </div>

                        <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                            <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                                <span>💡</span> Coin Tosses & Weather Forecasts
                            </h4>
                            <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                                When you flip a fair coin, nobody knows if it will land Heads or Tails. But because there are only 2 equal outcomes, your chance of getting Heads is exactly $1$ out of $2$ ($50\\%$ or $0.5$). Probability measures certainty on a scale from $0$ (impossible) to $1$ (guaranteed).
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">🏛️ Why This Was Invented</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    French mathematician Blaise Pascal developed probability theory while solving a game-of-chance division puzzle for gamblers. Today, insurance companies and AI weather models use the exact same formulas!
                                </p>
                            </div>
                            <div class="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">✨ The "Aha!" Moment</h4>
                                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    The probability of something happening PLUS the probability of it NOT happening ALWAYS sums to 1 ($P(E) + P(\\bar{E}) = 1$). To find the chance of NOT rolling a 6, subtract the chance of rolling a 6 from 1!
                                </p>
                            </div>
                        </div>

                        <div class="p-4 bg-indigo-100/60 dark:bg-indigo-950/80 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2">🗺️ Your Learning Roadmap</h4>
                            <ol class="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-decimal list-inside">
                                <li><strong>Step 1:</strong> List full sample space $S$ for coins, 52-card decks, and dice pairs.</li>
                                <li><strong>Step 2:</strong> Apply $P(E) = \\frac{\\text{Favorable Outcomes}}{\\text{Total Outcomes}}$.</li>
                                <li><strong>Step 3:</strong> Use Complement Rule $P(E) + P(\\bar{E}) = 1$ to solve complex probability questions.</li>
                            </ol>
                        </div>
                    </div>
                `,
                method1: { name: "Method 1: Core Formula & Worked Example", sub: "Classical Theoretical Probability & Complement" },
                method2: { name: "Method 2: Step-by-Step Proof & Derivation", sub: "Proof of Complementary Event Axiom $P(E) + P(\\bar{E}) = 1$" },
                exp1: `
                    <div class="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 space-y-3">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">14. Classical Probability Axiom</h4>
                        <div class="text-center font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300 py-2">
                            $$P(E) = \\frac{\\text{Number of outcomes favorable to } E}{\\text{Total number of possible outcomes}}, \\quad P(E) + P(\\bar{E}) = 1$$
                        </div>
                    </div>

                    <div class="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-slate-300 font-mono text-xs shadow-inner">
                        <p class="text-amber-400 font-bold">FULLY WORKED NUMERICAL EXAMPLE: TWO DICE PROBABILITY</p>
                        <p>Two dice are thrown simultaneously. Find probability of getting sum of numbers equal to 8.</p>
                        <p><strong>Step 1: Total possible outcomes $n(S) = 6 \\times 6 = 36$.</strong></p>
                        <p><strong>Step 2: Favorable outcomes $E = \\{(2,6), (3,5), (4,4), (5,3), (6,2)\\} \\implies n(E) = 5$.</strong></p>
                        <p><strong>Step 3: Calculate probability.</strong> $P(E) = \\frac{5}{36}$.</p>
                    </div>
                `,
                exp2: `
                    <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-700 dark:text-slate-300 shadow-sm leading-relaxed">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Formal Proof: Complementary Event Probability Law</h4>
                        
                        <p><strong>Step 1: Partition Sample Space $S$.</strong><br>
                        Let total number of equally likely outcomes in sample space $S$ be $N$.<br>
                        Let event $E$ have $m$ favorable outcomes.</p>
                        
                        <p><strong>Step 2: Determine outcomes for complementary event $\\bar{E}$ ('not E').</strong><br>
                        Number of outcomes favorable to $\\bar{E} = N - m$.</p>
                        
                        <p><strong>Step 3: Write individual probabilities.</strong><br>
                        $$P(E) = \\frac{m}{N}, \\quad P(\\bar{E}) = \\frac{N - m}{N}$$</p>
                        
                        <p><strong>Step 4: Add $P(E)$ and $P(\\bar{E})$.</strong><br>
                        $$P(E) + P(\\bar{E}) = \\frac{m}{N} + \\frac{N - m}{N} = \\frac{m + N - m}{N} = \\frac{N}{N} = 1 \\quad \\blacksquare$$</p>
                    </div>
                `,
                vernacular: {
                    English: "Apply the complementary event rule P(E) + P(not E) = 1 to simplify complicated multi-case probability questions."
                },
                diagnostics: [
                    { q: "If P(E) = 0.05, what is P(not E)?", difficulty: "Foundation Level", options: ["0.95", "0.05", "1.05", "0"], correct: 0, solution: "<strong>Step 1:</strong> $P(\\text{not } E) = 1 - P(E) = 1 - 0.05 = 0.95$." },
                    { q: "Probability of an impossible event is:", difficulty: "Foundation Level", options: ["0", "1", "0.5", "-1"], correct: 0, solution: "<strong>Step 1:</strong> An impossible event has 0 favorable outcomes, so its probability is 0." },
                    { q: "Probability of getting a leap year with 53 Sundays is:", difficulty: "Application Level", options: ["2/7", "1/7", "53/366", "2/365"], correct: 0, solution: "<strong>Step 1:</strong> A leap year has 366 days $= 52$ full weeks $+ 2$ days.<br><strong>Step 2:</strong> Favorable 2-day combinations out of 7: (Sat, Sun) and (Sun, Mon) $\\implies 2/7$." },
                    { q: "Which of the following cannot be the probability of an event?", difficulty: "Foundation Level", options: ["2/3", "-1.5", "15%", "0.7"], correct: 1, solution: "<strong>Step 1:</strong> Probability must satisfy $0 \\le P(E) \\le 1$. It can never be negative ($-1.5$)." },
                    { q: "If an event cannot occur, its probability is:", difficulty: "Foundation Level", options: ["1", "3/4", "1/2", "0"], correct: 3, solution: "<strong>Step 1:</strong> An impossible event has probability 0." },
                    { q: "Probability of getting a prime number on throwing a fair die once is:", difficulty: "Foundation Level", options: ["1/6", "1/3", "1/2", "2/3"], correct: 2, solution: "<strong>Step 1:</strong> Prime outcomes on a die are $\\{2, 3, 5\\}$ (3 outcomes out of 6).<br><strong>Step 2:</strong> $P = 3/6 = 1/2$." },
                    { q: "A card is drawn from a well-shuffled deck of 52 cards. Probability of getting a face card is:", difficulty: "Application Level", options: ["3/13", "1/13", "4/13", "9/52"], correct: 0, solution: "<strong>Step 1:</strong> Total face cards $= 4 \\text{ Kings} + 4 \\text{ Queens} + 4 \\text{ Jacks} = 12$.<br><strong>Step 2:</strong> $P = 12/52 = 3/13$." },
                    { q: "Two coins are tossed simultaneously. Probability of getting at most one head is:", difficulty: "Application Level", options: ["1/4", "1/2", "3/4", "1"], correct: 2, solution: "<strong>Step 1:</strong> Sample space: $\\{HH, HT, TH, TT\\}$. Favorable ('at most 1 head'): $\\{HT, TH, TT\\}$ (3 outcomes).<br><strong>Step 2:</strong> $P = 3/4$." },
                    { q: "A jar contains 24 marbles, some green and others blue. If marble is drawn at random, $P(\\text{green}) = 2/3$. Number of blue marbles is:", difficulty: "HOTS Level", options: ["8", "12", "16", "4"], correct: 0, solution: "<strong>Step 1:</strong> Green marbles $= 24 \\times (2/3) = 16$. Blue marbles $= 24 - 16 = 8$." },
                    { q: "Probability of getting a non-leap year with 53 Mondays is:", difficulty: "Application Level", options: ["1/7", "2/7", "53/365", "1/365"], correct: 0, solution: "<strong>Step 1:</strong> A non-leap year has 365 days $= 52$ full weeks $+ 1$ extra day. That extra day can be a Monday with probability $1/7$." },
                    { q: "If $P(E) = 0.997$, then $P(\\text{not } E)$ is:", difficulty: "Foundation Level", options: ["0.003", "0.03", "0.007", "0.3"], correct: 0, solution: "<strong>Step 1:</strong> $P(\\text{not } E) = 1 - 0.997 = 0.003$." },
                    { q: "In a single throw of two dice, probability of getting a doublet (same numbers) is:", difficulty: "Foundation Level", options: ["1/6", "1/36", "1/2", "5/6"], correct: 0, solution: "<strong>Step 1:</strong> Doublet pairs: $(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)$ (6 pairs out of 36).<br><strong>Step 2:</strong> $P = 6/36 = 1/6$." }
                ]
    }
};
   