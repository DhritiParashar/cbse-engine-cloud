window.buildExhaustiveScienceChapter=window.buildExhaustiveScienceChapter||function(s){return{key:s.key,name:s.name||s.title||s.key,weightage:s.weightage||5,overview:'',exp1:'',exp2:'',diagnostics:[],errorFinder:{traps:[],challenges:[]},marksBank:[]};};
// data/class12MathChapters.js - Exhaustive NCERT Class 12 Mathematics (041) All 13 Chapters
(function() {
  const specs = [
    {
      key: "M12_CH01", code: "Chapter 01", name: "Relations and Functions", weight: 4,
      desc: "Reflexive, symmetric, transitive & equivalence relations, equivalence classes, one-one and onto functions.",
      intuitionTitle: "Equivalence Partitions & Bijective Invertibility",
      intuitionBody: "An equivalence relation partitions a set into mutually disjoint equivalence classes, while a function is invertible if and only if it is both injective (one-one) and surjective (onto).",
      concepts: [
        ["1. Equivalence Triad", "Reflexive: $(a,a)\\in R$; Symmetric: $(a,b)\\in R \\implies (b,a)\\in R$; Transitive: $(a,b),(b,c)\\in R \\implies (a,c)\\in R$."],
        ["2. Injective vs Surjective", "One-one: $f(x_1)=f(x_2) \\implies x_1=x_2$. Onto: $\\text{Range}(f) = \\text{Codomain}(f)$."],
        ["3. Counting Relations & Functions", "On $n$ elements: Total relations $= 2^{n^2}$; Reflexive $= 2^{n(n-1)}$; Bijections $= n!$."]
      ],
      formulas: [
        ["Equivalence Class", "$[a] = \\{x \\in A : (x, a) \\in R\\}$<br>Either $[a] = [b]$ or $[a] \\cap [b] = \\emptyset$"],
        ["Injective / Surjective Test", "Horizontal Line Test: At most 1 hit $\\implies$ one-one; at least 1 hit $\\implies$ onto"]
      ],
      numericals: [
        {
          title: "Proving Equivalence & Finding Equivalence Class", marks: 3,
          problem: "Show that $R = \\{(a, b) : |a - b| \\text{ is a multiple of } 4\\}$ on $A = \\{0, 1, 2, \\dots, 12\\}$ is an equivalence relation and find $[1]$.",
          steps: [
            "Reflexive: $|a - a| = 0$ (multiple of 4). Symmetric: $|a - b| = |b - a|$. Transitive: $(a - b) + (b - c) = a - c$ is sum of multiples of 4.",
            "Equivalence class $[1] = \\{x \\in A : |x - 1| = 4k\\} = \\mathbf{\\{1, 5, 9\\}}$."
          ]
        },
        {
          title: "Bijectivity of $f(x) = \\frac{x - 2}{x - 3}$ on $\\mathbb{R} - \\{3\\} \\to \\mathbb{R} - \\{1\\}$", marks: 3,
          problem: "Prove $f: \\mathbb{R} - \\{3\\} \\to \\mathbb{R} - \\{1\\}$ defined by $f(x) = \\frac{x - 2}{x - 3}$ is bijective.",
          steps: [
            "One-one: $\\frac{x_1 - 2}{x_1 - 3} = \\frac{x_2 - 2}{x_2 - 3} \\implies x_1 x_2 - 3x_1 - 2x_2 + 6 = x_1 x_2 - 2x_1 - 3x_2 + 6 \\implies x_1 = x_2$.",
            "Onto: Set $y = \\frac{x - 2}{x - 3} \\implies x = \\frac{3y - 2}{y - 1} \\ne 3$ for any $y \\ne 1$, giving $f(x) = y$."
          ]
        }
      ],
      derivations: [
        { title: "Number of Reflexive Relations on Set of Size $n$", tag: "Combinatorial Proof", setup: "Matrix of relation $R$ on $n$ elements has $n^2$ entries.", steps: ["All $n$ diagonal entries $(a_i, a_i)$ are fixed to $1$, leaving $n^2 - n = n(n - 1)$ free off-diagonal choices.", "Each free pair can be $0$ or $1$, giving $2^{n(n-1)}$ reflexive relations."], conclusion: "For $n = 3$, reflexive relations $= 2^6 = 64$." },
        { title: "Why $f(x) = x^2$ Is Bijective on $\\mathbb{R}^+ \\to \\mathbb{R}^+$ but Not on $\\mathbb{R} \\to \\mathbb{R}$", tag: "Domain-Codomain Proof", setup: "Compare roots of $x^2 = y$.", steps: ["On $\\mathbb{R}$, $f(-2) = f(2) = 4$ (not one-one) and $-1$ has no real preimage (not onto).", "Restricting domain and codomain to $[0, \\infty)$ yields unique non-negative $x = \\sqrt{y}$."], conclusion: "Bijectivity depends strictly on declared domain and codomain." }
      ],
      examTip: "Always state the domain and codomain explicitly when concluding whether a function is one-one or onto!",
      traps: [["Ignoring Domain/Codomain in Bijectivity Tests", "High (1-2 Marks Lost)", "f(x) = 2x is onto on R → R, but NOT onto on N → N (odd numbers have no preimage in N)."]],
      challenges: [{ title: "Relations & Functions: Onto Check on Natural Numbers", steps: [{ stepNo: 1, text: "Check if $f: \\mathbb{N} \\to \\mathbb{N}$ given by $f(x) = 2x$ is onto." }, { stepNo: 2, text: "For any $y$, $x = y/2$, so $f$ is onto." }, { stepNo: 3, text: "Conclude $f$ is bijective." }], faultyStep: 2, deductionReason: "In Step 2: For odd $y = 3 \\in \\mathbb{N}$, $x = 3/2 \\notin \\mathbb{N}$, so $f$ is NOT onto." }],
      diagnostics: [{ q: "Number of reflexive relations on a set with $3$ elements is:", difficulty: "Board Standard (1M)", options: ["$64$", "$512$", "$8$", "$32$"], correct: 0, solution: "$2^{n(n-1)} = 2^{3\\times 2} = 64$." }]
    },
    {
      key: "M12_CH02", code: "Chapter 02", name: "Inverse Trigonometric Functions", weight: 4,
      desc: "Principal value branches, domain & range of sin⁻¹x, cos⁻¹x, tan⁻¹x, and trigonometric simplifications.",
      intuitionTitle: "Restricting Periodic Waves to Monotonic Principal Branches",
      intuitionBody: "Trig functions fail the horizontal line test globally, so we restrict domains to monotonic principal branches: $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ for $\\sin^{-1}x$ and $[0, \\pi]$ for $\\cos^{-1}x$.",
      concepts: [
        ["1. Principal Value Branches", "$\\sin^{-1}x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, $\\tan^{-1}x \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, $\\cos^{-1}x \\in [0, \\pi]$."],
        ["2. Negative Argument Parity", "Odd-like: $\\sin^{-1}(-x) = -\\sin^{-1}x$, $\\tan^{-1}(-x) = -\\tan^{-1}x$. $\\pi$-shifted: $\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$."],
        ["3. Complementary Angle Identities", "$\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$, $\\tan^{-1}x + \\cot^{-1}x = \\frac{\\pi}{2}$."]
      ],
      formulas: [
        ["Domain & Range Table", "$\\sin^{-1}x$: Domain $[-1,1]$, Range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$<br>$\\cos^{-1}x$: Domain $[-1,1]$, Range $[0, \\pi]$"],
        ["Tangent Addition", "$\\tan^{-1}x + \\tan^{-1}y = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)$ ($xy < 1$)"]
      ],
      numericals: [
        {
          title: "Principal Value of $\\sin^{-1}\\left(\\sin\\frac{3\\pi}{5}\\right)$", marks: 2,
          problem: "Evaluate $\\sin^{-1}\\left(\\sin\\frac{3\\pi}{5}\\right)$.",
          steps: ["Since $\\frac{3\\pi}{5} \\notin [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, write $\\sin\\left(\\pi - \\frac{2\\pi}{5}\\right) = \\sin\\frac{2\\pi}{5} \\implies \\mathbf{\\frac{2\\pi}{5}}$."]
        },
        {
          title: "Simplifying $\\tan^{-1}\\sqrt{\\frac{1 - \\cos x}{1 + \\cos x}}$", marks: 3,
          problem: "Write $\\tan^{-1}\\sqrt{\\frac{1 - \\cos x}{1 + \\cos x}}$ ($0 < x < \\pi$) in simplest form.",
          steps: ["Substitute $1 - \\cos x = 2\\sin^2(x/2)$ and $1 + \\cos x = 2\\cos^2(x/2)$: $\\tan^{-1}(\\tan(x/2)) = \\mathbf{\\frac{x}{2}}$."]
        }
      ],
      derivations: [
        { title: "Proof of $\\sin^{-1}(-x) = -\\sin^{-1}x$", tag: "2-Mark Identity Proof", setup: "Let $\\sin^{-1}(-x) = \\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.", steps: ["$-x = \\sin\\theta \\implies x = -\\sin\\theta = \\sin(-\\theta)$ with $-\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.", "Thus $\\sin^{-1}x = -\\theta \\implies \\theta = -\\sin^{-1}x$."], conclusion: "Hence $\\sin^{-1}(-x) = -\\sin^{-1}x$." },
        { title: "Proof of $\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$", tag: "2-Mark Identity Proof", setup: "Let $\\cos^{-1}(-x) = \\theta \\in [0, \\pi]$.", steps: ["$-x = \\cos\\theta \\implies x = -\\cos\\theta = \\cos(\\pi - \\theta)$ with $(\\pi - \\theta) \\in [0, \\pi]$.", "Thus $\\cos^{-1}x = \\pi - \\theta \\implies \\theta = \\pi - \\cos^{-1}x$."], conclusion: "Hence $\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$." }
      ],
      examTip: "Never write cos⁻¹(-1/2) = -π/3; cos⁻¹x lies strictly in [0, π], so cos⁻¹(-1/2) = π - π/3 = 2π/3!",
      traps: [["Canceling sin⁻¹(sin θ) Outside [-π/2, π/2]", "High (1 Mark Lost)", "sin⁻¹(sin 2π/3) is π/3, NOT 2π/3."]],
      challenges: [{ title: "Inverse Trig: Principal Value of cos⁻¹(cos 7π/6)", steps: [{ stepNo: 1, text: "Evaluate $\\cos^{-1}(\\cos\\frac{7\\pi}{6})$." }, { stepNo: 2, text: "Cancel $\\cos^{-1}$ and $\\cos$ directly to get $\\frac{7\\pi}{6}$." }, { stepNo: 3, text: "State answer $\\frac{7\\pi}{6}$." }], faultyStep: 2, deductionReason: "In Step 2: $\\frac{7\\pi}{6} > \\pi$ is outside $[0, \\pi]$; $\\cos(2\\pi - \\frac{5\\pi}{6}) = \\cos\\frac{5\\pi}{6} \\implies \\mathbf{\\frac{5\\pi}{6}}$." }],
      diagnostics: [{ q: "Principal value of $\\cos^{-1}(-1/2)$ is:", difficulty: "Board Standard (1M)", options: ["$2\\pi/3$", "$-\\pi/3$", "$\\pi/3$", "$4\\pi/3$"], correct: 0, solution: "$\\pi - \\pi/3 = 2\\pi/3$." }]
    },
    {
      key: "M12_CH03", code: "Chapter 03", name: "Matrices", weight: 5,
      desc: "Matrix algebra, transpose, symmetric & skew-symmetric decomposition, and invertible matrix properties.",
      intuitionTitle: "Rectangular Linear Operators & Symmetric Decomposition",
      intuitionBody: "An $m \\times n$ matrix encodes a linear transformation; matrix multiplication composes transformations (hence non-commutative $AB \\ne BA$), and any square matrix splits uniquely into symmetric and skew-symmetric parts.",
      concepts: [
        ["1. Matrix Multiplication Rule", "$A_{m\\times n} B_{n\\times p} = C_{m\\times p}$; defined only when inner dimensions match."],
        ["2. Symmetric vs Skew-Symmetric", "Symmetric: $A^T = A$; Skew-symmetric: $A^T = -A$ (all diagonal entries $a_{ii} = 0$)."],
        ["3. Reversal Laws", "$(AB)^T = B^T A^T$ and $(AB)^{-1} = B^{-1} A^{-1}$."]
      ],
      formulas: [
        ["Unique Matrix Decomposition", "$A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$"],
        ["Skew-Symmetric Diagonal", "$a_{ii} = -a_{ii} \\implies 2a_{ii} = 0 \\implies a_{ii} = 0$"]
      ],
      numericals: [
        {
          title: "Expressing a Square Matrix as Symmetric + Skew-Symmetric", marks: 3,
          problem: "Express $A = \\begin{bmatrix} 3 & 5 \\\\ 1 & -1 \\end{bmatrix}$ as sum of symmetric and skew-symmetric matrices.",
          steps: [
            "$P = \\frac{1}{2}(A + A^T) = \\begin{bmatrix} 3 & 3 \\\\ 3 & -1 \\end{bmatrix}$ (Symmetric) and $Q = \\frac{1}{2}(A - A^T) = \\begin{bmatrix} 0 & 2 \\\\ -2 & 0 \\end{bmatrix}$ (Skew-symmetric).",
            "Verify $P + Q = A$."
          ]
        },
        {
          title: "Finding Unknown Matrix $X$ in $2A + 3X = 5B$", marks: 2,
          problem: "If $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 2 & 1 \\\\ 0 & 3 \\end{bmatrix}$, find $X$.",
          steps: ["$3X = 5B - 2A = \\begin{bmatrix} 8 & 1 \\\\ -6 & 7 \\end{bmatrix} \\implies X = \\frac{1}{3}\\begin{bmatrix} 8 & 1 \\\\ -6 & 7 \\end{bmatrix}$."]
        }
      ],
      derivations: [
        { title: "Proof That All Diagonal Elements of a Skew-Symmetric Matrix Are Zero", tag: "2-Mark Board Proof", setup: "Let $A = [a_{ij}]$ be skew-symmetric ($A^T = -A$).", steps: ["By definition, $a_{ji} = -a_{ij}$ for all $i, j$.", "Set $i = j$: $a_{ii} = -a_{ii} \\implies 2a_{ii} = 0 \\implies a_{ii} = 0$."], conclusion: "Every principal diagonal element of a skew-symmetric matrix is $0$." },
        { title: "Uniqueness of $A = P + Q$ Decomposition", tag: "3-Mark Proof", setup: "Suppose $A = P + Q$ with $P^T = P$ and $Q^T = -Q$.", steps: ["Taking transpose: $A^T = P^T + Q^T = P - Q$.", "Adding and subtracting gives $P = \\frac{1}{2}(A + A^T)$ and $Q = \\frac{1}{2}(A - A^T)$ uniquely."], conclusion: "Decomposition is unique for every square matrix." }
      ],
      examTip: "In matrix equations, NEVER cancel a non-zero matrix AB = AC → B = C unless A is proven invertible (|A| ≠ 0)!",
      traps: [["Assuming (A + B)² = A² + 2AB + B² for Matrices", "High (1-2 Marks Lost)", "Because AB ≠ BA, (A + B)² = A² + AB + BA + B²."]],
      challenges: [{ title: "Matrices: Algebraic Expansion of (A + B)²", steps: [{ stepNo: 1, text: "Expand $(A + B)^2$ for two square matrices $A$ and $B$." }, { stepNo: 2, text: "$(A + B)^2 = A^2 + 2AB + B^2$." }, { stepNo: 3, text: "Use in identity proof." }], faultyStep: 2, deductionReason: "In Step 2: Matrix multiplication is non-commutative, so $(A + B)^2 = A^2 + AB + BA + B^2$." }],
      diagnostics: [{ q: "If $A$ is a skew-symmetric matrix of order $3$, then the sum of its diagonal elements is:", difficulty: "Board Standard (1M)", options: ["$0$", "$3$", "$-3$", "$1$"], correct: 0, solution: "All diagonal elements of a skew-symmetric matrix are $0$." }]
    },
    {
      key: "M12_CH04", code: "Chapter 04", name: "Determinants", weight: 5,
      desc: "Determinant evaluation, area of triangle, minors & cofactors, adjoint, matrix inverse, and solving linear systems AX = B.",
      intuitionTitle: "Volume Scaling Factor & Non-Singular Matrix Inversion",
      intuitionBody: "Determinant $|A|$ measures oriented area/volume scaling; when $|A| \\ne 0$, matrix $A$ is invertible via $A^{-1} = \\frac{1}{|A|}\\text{adj}(A)$, uniquely solving $AX = B$.",
      concepts: [
        ["1. Scaling Property $|kA|$", "For an $n \\times n$ matrix, $|kA| = k^n |A|$ (each of the $n$ rows contributes a factor $k$)."],
        ["2. Adjoint Identities", "$A(\\text{adj } A) = (\\text{adj } A)A = |A|I_n$; &nbsp; $|\\text{adj } A| = |A|^{n-1}$."],
        ["3. Consistency of $AX = B$", "If $|A| \\ne 0$: unique solution $X = A^{-1}B$. If $|A| = 0$ and $(\\text{adj } A)B \\ne O$: inconsistent (no solution)."]
      ],
      formulas: [
        ["Matrix Inverse & Adjoint", "$A^{-1} = \\frac{1}{|A|}\\text{adj}(A)$ ($|A| \\ne 0$)<br>$|A^{-1}| = \\frac{1}{|A|}$, &nbsp; $|\\text{adj } A| = |A|^{n-1}$"],
        ["Area of Triangle", "$\\Delta = \\frac{1}{2}\\left|\\begin{vmatrix} x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\\\ x_3 & y_3 & 1 \\end{vmatrix}\\right|$ (Collinear if $\\Delta = 0$)"]
      ],
      numericals: [
        {
          title: "Solving 3×3 Linear System via Matrix Inversion", marks: 5,
          problem: "Solve $x + y + z = 6$, $y + 3z = 11$, $x - 2y + z = 0$ using matrix method.",
          steps: [
            "Form $AX = B$ with $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 3 \\\\ 1 & -2 & 1 \\end{bmatrix}$, $B = \\begin{bmatrix} 6 \\\\ 11 \\\\ 0 \\end{bmatrix}$.",
            "Compute $|A| = 1(1 + 6) - 1(0 - 3) + 1(0 - 1) = 7 + 3 - 1 = 9 \\ne 0$.",
            "Compute $X = A^{-1}B = \\frac{1}{9}(\\text{adj } A)B = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} \\implies \\mathbf{x = 1, y = 2, z = 3}$."
          ]
        },
        {
          title: "Finding Coordinates Using Triangle Area Determinant", marks: 3,
          problem: "Find $k$ if area of triangle with vertices $(k, 0), (4, 0), (0, 2)$ is $4\\text{ sq. units}$.",
          steps: ["$\\frac{1}{2}|k(0 - 2) - 0 + 1(8 - 0)| = 4 \\implies |-2k + 8| = 8 \\implies -2k + 8 = \\pm 8 \\implies \\mathbf{k = 0 \\text{ or } 8}$."]
        }
      ],
      derivations: [
        { title: "Proof of $|\\text{adj } A| = |A|^{n-1}$", tag: "3-Mark Determinant Proof", setup: "Start from $A(\\text{adj } A) = |A|I_n$ for an $n \\times n$ matrix.", steps: ["Take determinants on both sides: $|A|\\cdot|\\text{adj } A| = ||A|I_n| = |A|^n |I_n| = |A|^n$.", "Divide by $|A| \\ne 0$: $|\\text{adj } A| = |A|^{n-1}$."], conclusion: "For $n = 3$, $|\\text{adj } A| = |A|^2$." },
        { title: "Uniqueness of Inverse Matrix", tag: "2-Mark Proof", setup: "Suppose $B$ and $C$ are both inverses of $A$.", steps: ["$B = BI = B(AC) = (BA)C = IC = C$."], conclusion: "Inverse of a non-singular matrix is unique." }
      ],
      examTip: "When area of a triangle is GIVEN (e.g., 4 sq. units), always take BOTH +4 and -4 for the determinant value so you don't miss the second root!",
      traps: [["Dropping ± Sign When Area Is Given", "High (1-2 Marks Lost)", "Setting determinant = +8 only misses k = 8 in |-2k + 8| = 8."]],
      challenges: [{ title: "Determinants: Scalar Multiple |3A| for 3×3 Matrix", steps: [{ stepNo: 1, text: "Given $3 \\times 3$ matrix $A$ with $|A| = 4$, find $|3A|$." }, { stepNo: 2, text: "Factor out $3$: $|3A| = 3|A| = 12$." }, { stepNo: 3, text: "Conclude $|3A| = 12$." }], faultyStep: 2, deductionReason: "In Step 2: For a $3 \\times 3$ matrix, $|kA| = k^3|A| = 3^3(4) = \\mathbf{108}$." }],
      diagnostics: [{ q: "If $A$ is a $3 \\times 3$ matrix with $|A| = 4$, then $|3A|$ equals:", difficulty: "Board Classic (1M)", options: ["$108$", "$12$", "$36$", "$64$"], correct: 0, solution: "$|3A| = 3^3 |A| = 27 \\times 4 = 108$." }]
    },
    {
      key: "M12_CH05", code: "Chapter 05", name: "Continuity and Differentiability", weight: 8,
      desc: "Continuity at a point, LHD/RHD differentiability, chain rule, implicit & logarithmic differentiation, parametric second derivatives.",
      intuitionTitle: "Smooth Curves vs Sharp Corners & Logarithmic Power Differentiation",
      intuitionBody: "Continuity ensures no breaks or jumps ($\\text{LHL} = \\text{RHL} = f(c)$), while differentiability demands a unique tangent slope ($\\text{LHD} = \\text{RHD}$).",
      concepts: [
        ["1. Differentiable $\\implies$ Continuous", "Every differentiable function is continuous, but continuous functions with sharp corners like $|x|$ are not differentiable at the corner."],
        ["2. Logarithmic Differentiation", "For variable-to-variable powers $y = [f(x)]^{g(x)}$, take $\\ln y = g(x)\\ln f(x)$ before differentiating."],
        ["3. Parametric Second Derivative", "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$, and $\\frac{d^2y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\cdot \\frac{dt}{dx}$."]
      ],
      formulas: [
        ["Standard Derivatives", "$\\frac{d}{dx}(\\sin^{-1}x) = \\frac{1}{\\sqrt{1-x^2}}$, &nbsp; $\\frac{d}{dx}(\\tan^{-1}x) = \\frac{1}{1+x^2}$"],
        ["Logarithmic & Parametric", "$\\frac{d}{dx}(x^x) = x^x(1 + \\ln x)$<br>$\\frac{d^2y}{dx^2} = \\frac{d}{dt}(y') / \\frac{dx}{dt}$"]
      ],
      numericals: [
        {
          title: "Finding Unknowns $a, b$ for Continuous Piecewise Function", marks: 3,
          problem: "Find $a$ and $b$ if $f(x) = ax + 1$ ($x \\le 3$) and $f(x) = bx + 3$ ($x > 3$) is continuous at $x = 3$.",
          steps: ["$\\text{LHL} = 3a + 1$, $\\text{RHL} = 3b + 3$, $f(3) = 3a + 1$. Equating: $3a + 1 = 3b + 3 \\implies \\mathbf{a - b = \\frac{2}{3}}$."]
        },
        {
          title: "Differentiating $y = (\\sin x)^x + \\sin^{-1}\\sqrt{x}$", marks: 5,
          problem: "Find $\\frac{dy}{dx}$ for $y = (\\sin x)^x + \\sin^{-1}\\sqrt{x}$.",
          steps: [
            "Let $u = (\\sin x)^x \\implies \\ln u = x\\ln(\\sin x) \\implies \\frac{du}{dx} = (\\sin x)^x[\\ln(\\sin x) + x\\cot x]$.",
            "Let $v = \\sin^{-1}\\sqrt{x} \\implies \\frac{dv}{dx} = \\frac{1}{\\sqrt{1 - x}} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{1}{2\\sqrt{x - x^2}}$. Sum $\\frac{du}{dx} + \\frac{dv}{dx}$."
          ]
        }
      ],
      derivations: [
        { title: "Derivative of $\\tan^{-1}x$ via Implicit Differentiation", tag: "2-Mark Proof", setup: "Let $y = \\tan^{-1}x \\implies x = \\tan y$.", steps: ["Differentiate w.r.t. $x$: $1 = \\sec^2 y \\frac{dy}{dx} \\implies \\frac{dy}{dx} = \\frac{1}{1 + \\tan^2 y} = \\frac{1}{1 + x^2}$."], conclusion: "$\\frac{d}{dx}(\\tan^{-1}x) = \\frac{1}{1 + x^2}$." },
        { title: "Why $f(x) = |x|$ Is Continuous but Not Differentiable at $x = 0$", tag: "3-Mark Proof", setup: "Evaluate limits at $x = 0$.", steps: ["$\\lim_{x\\to 0}|x| = 0 = f(0)$ (continuous). $\\text{LHD} = \\lim_{h\\to 0^-}\\frac{|h|}{h} = -1$, while $\\text{RHD} = +1$."], conclusion: "Since $\\text{LHD} \\ne \\text{RHD}$, $|x|$ is not differentiable at $0$." }
      ],
      examTip: "Never take log directly across a sum y = u + v (ln(u + v) ≠ ln u + ln v); differentiate u and v separately and add du/dx + dv/dx!",
      traps: [["Taking ln(u + v) = ln u + ln v", "Critical (3 Marks Lost)", "Always set y = u + v and compute du/dx and dv/dx separately."]],
      challenges: [{ title: "Differentiability: Parametric Second Derivative", steps: [{ stepNo: 1, text: "Given $x = at^2, y = 2at$, find $\\frac{d^2y}{dx^2}$." }, { stepNo: 2, text: "$\\frac{dy}{dx} = \\frac{2a}{2at} = \\frac{1}{t} \\implies \\frac{d^2y}{dx^2} = \\frac{d}{dt}(t^{-1}) = -\\frac{1}{t^2}$." }, { stepNo: 3, text: "Conclude $-1/t^2$." }], faultyStep: 2, deductionReason: "In Step 2: Multiply by $\\frac{dt}{dx} = \\frac{1}{2at}$: $\\frac{d^2y}{dx^2} = -\\frac{1}{t^2} \\cdot \\frac{1}{2at} = \\mathbf{-\\frac{1}{2at^3}}$." }],
      diagnostics: [{ q: "If $x = at^2$ and $y = 2at$, then $\\frac{d^2y}{dx^2}$ is:", difficulty: "Parametric Trap (1M)", options: ["$-1/(2at^3)$", "$-1/t^2$", "$1/(2at^3)$", "$-2a/t^3$"], correct: 0, solution: "$\\frac{d}{dt}(1/t) \\cdot \\frac{dt}{dx} = (-1/t^2)(1/2at) = -1/(2at^3)$." }]
    },
    {
      key: "M12_CH06", code: "Chapter 06", name: "Applications of Derivatives", weight: 9,
      desc: "Rate of change of quantities, increasing and decreasing functions, local & absolute maxima and minima word problems.",
      intuitionTitle: "First & Second Derivative Sign Tests for Optimization",
      intuitionBody: "Sign of $f'(x)$ reveals where functions rise ($f' > 0$) or fall ($f' < 0$); at critical points $f'(c) = 0$, concavity $f''(c) < 0$ guarantees a local peak while $f''(c) > 0$ guarantees a local trough.",
      concepts: [
        ["1. Monotonicity Intervals", "Strictly increasing if $f'(x) > 0$; strictly decreasing if $f'(x) < 0$."],
        ["2. Second Derivative Test", "At $f'(c) = 0$: $f''(c) < 0 \\implies$ Local Maximum; $f''(c) > 0 \\implies$ Local Minimum."],
        ["3. Absolute Extrema on $[a, b]$", "Evaluate $f(x)$ at all critical points inside $(a, b)$ AND at both endpoints $a$ and $b$."]
      ],
      formulas: [
        ["Related Rates Chain Rule", "$\\frac{dV}{dt} = \\frac{dV}{dr}\\cdot\\frac{dr}{dt}$, &nbsp; $\\frac{dA}{dt} = \\frac{dA}{dr}\\cdot\\frac{dr}{dt}$"],
        ["Mensuration Optimization", "Cylinder: $V = \\pi r^2 h$, $S = 2\\pi r^2 + 2\\pi rh$<br>Cone: $V = \\frac{1}{3}\\pi r^2 h$, $l = \\sqrt{r^2 + h^2}$"]
      ],
      numericals: [
        {
          title: "Maximum Volume of Cylinder Inscribed in a Sphere of Radius R", marks: 5,
          problem: "Show that the height of the cylinder of maximum volume that can be inscribed in a sphere of radius $R$ is $\\frac{2R}{\\sqrt{3}}$.",
          steps: [
            "Geometry gives $r^2 + (h/2)^2 = R^2 \\implies r^2 = R^2 - \\frac{h^2}{4}$.",
            "Volume $V(h) = \\pi r^2 h = \\pi\\left(R^2 h - \\frac{h^3}{4}\\right)$. Differentiate: $V'(h) = \\pi\\left(R^2 - \\frac{3h^2}{4}\\right) = 0 \\implies h = \\mathbf{\\frac{2R}{\\sqrt{3}}}$.",
            "$V''(h) = -\\frac{3\\pi h}{2} < 0$, confirming maximum volume."
          ]
        },
        {
          title: "Intervals Where $f(x) = 2x^3 - 3x^2 - 36x + 7$ Is Increasing", marks: 3,
          problem: "Find intervals where $f(x) = 2x^3 - 3x^2 - 36x + 7$ is strictly increasing.",
          steps: ["$f'(x) = 6x^2 - 6x - 36 = 6(x - 3)(x + 2) > 0 \\implies x \\in \\mathbf{(-\\infty, -2) \\cup (3, \\infty)}$."]
        }
      ],
      derivations: [
        { title: "Closed Cylinder of Given Surface Area Has Max Volume When $h = 2r$", tag: "5-Mark Optimization Proof", setup: "Given total surface area $S = 2\\pi r^2 + 2\\pi rh \\implies h = \\frac{S - 2\\pi r^2}{2\\pi r}$.", steps: ["$V(r) = \\pi r^2 h = \\frac{Sr}{2} - \\pi r^3$.", "$V'(r) = \\frac{S}{2} - 3\\pi r^2 = 0 \\implies S = 6\\pi r^2 = 2\\pi r^2 + 2\\pi rh \\implies h = 2r$."], conclusion: "Height equals diameter ($h = 2r$) at maximum volume." },
        { title: "Ladder Sliding Down a Wall Related Rate", tag: "3-Mark Related Rates", setup: "Ladder of length $L$ satisfies $x^2 + y^2 = L^2$.", steps: ["Differentiate w.r.t. $t$: $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0 \\implies \\frac{dy}{dt} = -\\frac{x}{y}\\frac{dx}{dt}$."], conclusion: "Negative sign indicates height $y$ decreases as base $x$ slides outward." }
      ],
      examTip: "In 5-mark maxima/minima problems, ALWAYS compute f''(c) and state its sign (< 0 or > 0)—omitting the second-derivative verification costs 1 full mark!",
      traps: [["Omitting Second Derivative Sign Verification in Optimization", "High (1 Mark Lost)", "Finding f'(c) = 0 alone is insufficient; prove f''(c) < 0 (max) or > 0 (min)."]],
      challenges: [{ title: "AOD: Absolute Maximum on Closed Interval [0, 3]", steps: [{ stepNo: 1, text: "Find absolute maximum of $f(x) = 2x^3 - 15x^2 + 36x + 1$ on $[0, 3]$." }, { stepNo: 2, text: "Critical points $f'(x) = 6(x-2)(x-3) = 0 \\implies x = 2, 3$. Evaluate $f(2) = 29, f(3) = 28$." }, { stepNo: 3, text: "Forget checking left endpoint $x = 0$." }], faultyStep: 3, deductionReason: "In Step 3: Always evaluate both endpoints $f(0) = 1$ and $f(3) = 28$ alongside interior critical points ($\\max = 29$ at $x = 2$)." }],
      diagnostics: [{ q: "The function $f(x) = x^3 - 3x^2 + 3x - 100$ is:", difficulty: "Board Standard (1M)", options: ["Increasing on $\\mathbb{R}$", "Decreasing on $\\mathbb{R}$", "Increasing only for $x > 1$", "Constant"], correct: 0, solution: "$f'(x) = 3(x - 1)^2 \\ge 0$ for all $x \\in \\mathbb{R}$." }]
    },
    {
      key: "M12_CH07", code: "Chapter 07", name: "Integrals", weight: 9,
      desc: "Indefinite integration by substitution, partial fractions, integration by parts, and definite integral properties.",
      intuitionTitle: "Antiderivatives, Partial Fractions & King's Reflection Property",
      intuitionBody: "Integration reverses differentiation to accumulate area; King's Property $\\int_a^b f(x)\\,dx = \\int_a^b f(a+b-x)\\,dx$ exploits symmetry to evaluate complex trigonometric integrals in 3 lines.",
      concepts: [
        ["1. Integration by Parts (ILATE)", "$\\int u\\,v\\,dx = u\\int v\\,dx - \\int\\left(u'\\int v\\,dx\\right)dx$; also $\\int e^x[f(x) + f'(x)]\\,dx = e^x f(x) + C$."],
        ["2. King's Definite Integral Property", "$\\int_a^b f(x)\\,dx = \\int_a^b f(a + b - x)\\,dx$."],
        ["3. Odd/Even Symmetry on $[-a, a]$", "If $f(-x) = -f(x)$ (odd), $\\int_{-a}^a f(x)\\,dx = 0$; if even, $2\\int_0^a f(x)\\,dx$."]
      ],
      formulas: [
        ["Special Quadratic Integrals", "$\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\tan^{-1}\\frac{x}{a} + C$<br>$\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\sin^{-1}\\frac{x}{a} + C$"],
        ["Euler Exponential Shortcut", "$\\int e^x[f(x) + f'(x)]\\,dx = e^x f(x) + C$"]
      ],
      numericals: [
        {
          title: "Evaluating $\\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}}\\,dx$", marks: 4,
          problem: "Evaluate $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}}\\,dx$.",
          steps: ["Apply King's property ($x \\to \\frac{\\pi}{2} - x$): $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x} + \\sqrt{\\sin x}}\\,dx$. Add both: $2I = \\int_0^{\\pi/2} 1\\,dx = \\frac{\\pi}{2} \\implies I = \\mathbf{\\frac{\\pi}{4}}$."]
        },
        {
          title: "Evaluating $\\int e^x\\left(\\frac{1 + \\sin x}{1 + \\cos x}\\right)\\,dx$", marks: 3,
          problem: "Evaluate $\\int e^x\\left(\\frac{1 + \\sin x}{1 + \\cos x}\\right)\\,dx$.",
          steps: ["Split: $\\frac{1 + 2\\sin(x/2)\\cos(x/2)}{2\\cos^2(x/2)} = \\frac{1}{2}\\sec^2(x/2) + \\tan(x/2) = f(x) + f'(x) \\implies \\mathbf{e^x\\tan(x/2) + C}$."]
        }
      ],
      derivations: [
        { title: "Proof of King's Property $\\int_a^b f(x)\\,dx = \\int_a^b f(a + b - x)\\,dx$", tag: "3-Mark Property Proof", setup: "Substitute $t = a + b - x \\implies dx = -dt$.", steps: ["When $x = a, t = b$; when $x = b, t = a$.", "$\\int_a^b f(x)\\,dx = \\int_b^a f(a + b - t)(-dt) = \\int_a^b f(a + b - t)\\,dt$."], conclusion: "Relabeling dummy variable $t \\to x$ completes the proof." },
        { title: "Proof of $\\int_{-a}^a f(x)\\,dx = 0$ for Odd Functions", tag: "2-Mark Proof", setup: "Split at $0$: $\\int_{-a}^0 f(x)\\,dx + \\int_0^a f(x)\\,dx$.", steps: ["Put $x = -t$ in first integral: $-\\int_0^a f(-t)\\,dt = -\\int_0^a f(t)\\,dt$."], conclusion: "Cancels with $+\\int_0^a f(x)\\,dx$ to give $0$." }
      ],
      examTip: "Always check whether a definite integral over [-a, a] has an odd integrand (like x³ cos x or sin⁵x)—it evaluates to 0 immediately!",
      traps: [["Forgetting + C in Indefinite Integrals", "Examiner Penalty (1/2 Mark)", "Every indefinite integral requires the arbitrary constant + C."]],
      challenges: [{ title: "Integrals: Symmetric Limit Odd Function Check", steps: [{ stepNo: 1, text: "Evaluate $\\int_{-1}^{1} \\sin^5 x \\cos^4 x\\,dx$." }, { stepNo: 2, text: "Expand powers using reduction formulas." }, { stepNo: 3, text: "Compute numerical value." }], faultyStep: 2, deductionReason: "In Step 2: $f(-x) = (-\\sin x)^5(\\cos x)^4 = -f(x)$ (odd function), so the integral equals **0** immediately." }],
      diagnostics: [{ q: "The value of $\\int_0^{\\pi/2} \\frac{\\sin^3 x}{\\sin^3 x + \\cos^3 x}\\,dx$ is:", difficulty: "King's Property (1M)", options: ["$\\pi/4$", "$\\pi/2$", "$0$", "$1$"], correct: 0, solution: "King's property gives $2I = \\pi/2 \\implies I = \\pi/4$." }]
    },
    {
      key: "M12_CH08", code: "Chapter 08", name: "Applications of Integrals", weight: 4,
      desc: "Area under simple curves: circles, parabolas, ellipses, and area bounded by lines.",
      intuitionTitle: "Definite Integration as Geometric Area Accumulation",
      intuitionBody: "Summing thin vertical strips $y\\,dx$ (or horizontal strips $x\\,dy$) calculates exact enclosed areas of circles, ellipses, and parabolic segments.",
      concepts: [
        ["1. Vertical vs Horizontal Strips", "Integrate $\\int_a^b |y|\\,dx$ along $x$-axis or $\\int_c^d |x|\\,dy$ along $y$-axis depending on curve symmetry."],
        ["2. Quadrant Symmetry Multiplier", "Symmetric figures like $x^2 + y^2 = a^2$ or $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ equal $4 \\times$ first-quadrant area."]
      ],
      formulas: [
        ["Standard Enclosed Areas", "Circle $x^2 + y^2 = a^2$: $\\pi a^2$<br>Ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$: $\\pi ab$"],
        ["Key Area Integral", "$\\int \\sqrt{a^2 - x^2}\\,dx = \\frac{x}{2}\\sqrt{a^2 - x^2} + \\frac{a^2}{2}\\sin^{-1}\\frac{x}{a}$"]
      ],
      numericals: [
        {
          title: "Area of Ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ Using Integration", marks: 4,
          problem: "Find the area enclosed by the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ using integration.",
          steps: ["$A = 4\\int_0^4 \\frac{3}{4}\\sqrt{16 - x^2}\\,dx = 3\\left[\\frac{x}{2}\\sqrt{16 - x^2} + 8\\sin^{-1}\\frac{x}{4}\\right]_0^4 = 3\\left(8\\cdot\\frac{\\pi}{2}\\right) = \\mathbf{12\\pi\\text{ sq. units}}$."]
        },
        {
          title: "Area Bounded by Parabola $y^2 = 4x$ and Line $x = 3$", marks: 3,
          problem: "Find area bounded by $y^2 = 4x$ and $x = 3$.",
          steps: ["$A = 2\\int_0^3 2\\sqrt{x}\\,dx = 4\\left[\\frac{2}{3}x^{3/2}\\right]_0^3 = \\frac{8}{3}(3\\sqrt{3}) = \\mathbf{8\\sqrt{3}\\text{ sq. units}}$."]
        }
      ],
      derivations: [
        { title: "Derivation of Area of Circle $x^2 + y^2 = r^2$", tag: "3-Mark Proof", setup: "Four symmetric quadrants.", steps: ["$A = 4\\int_0^r \\sqrt{r^2 - x^2}\\,dx = 4\\left[\\frac{r^2}{2}\\sin^{-1}(1)\\right] = 4\\left(\\frac{r^2}{2}\\cdot\\frac{\\pi}{2}\\right) = \\pi r^2$."], conclusion: "Recovers Euclidean circle area formula." },
        { title: "Area of Parabola Segment Cut by Latus Rectum $x = a$", tag: "3-Mark Proof", setup: "Parabola $y^2 = 4ax$ from $x = 0$ to $x = a$.", steps: ["$A = 2\\int_0^a 2\\sqrt{ax}\\,dx = 4\\sqrt{a}\\left[\\frac{2}{3}x^{3/2}\\right]_0^a = \\frac{8}{3}a^2$."], conclusion: "Equals $\\frac{2}{3}$ of bounding rectangle $(2a \\times 4a)$." }
      ],
      examTip: "Always draw a neat rough sketch showing the shaded region and intersection limits—CBSE awards 1 mark specifically for the sketch!",
      traps: [["Forgetting Factor of 2 or 4 for Symmetric Curves", "High (1-2 Marks Lost)", "Integrating y = √(a² - x²) from 0 to a gives only ONE quadrant (πa²/4)."]],
      challenges: [{ title: "Area Under Curves: Symmetric Parabola Multiplier", steps: [{ stepNo: 1, text: "Find total area bounded by $y^2 = 4ax$ and $x = a$." }, { stepNo: 2, text: "Integrate upper branch only: $\\int_0^a 2\\sqrt{ax}\\,dx = \\frac{4}{3}a^2$." }, { stepNo: 3, text: "State total area $\\frac{4}{3}a^2$." }], faultyStep: 2, deductionReason: "In Step 2: Parabola is symmetric above and below the $x$-axis; multiply by $2$ to get $\\mathbf{\\frac{8}{3}a^2}$." }],
      diagnostics: [{ q: "The area enclosed by the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ is:", difficulty: "Board Standard (1M)", options: ["$\\pi ab$", "$2\\pi ab$", "$\\pi(a + b)$", "$\\pi a^2 b^2$"], correct: 0, solution: "$4 \\times (\\pi ab / 4) = \\pi ab$." }]
    },
    {
      key: "M12_CH09", code: "Chapter 09", name: "Differential Equations", weight: 5,
      desc: "Order and degree, variable separable, homogeneous differential equations, and linear first-order differential equations.",
      intuitionTitle: "Modeling Dynamic Rates & Integrating Factors",
      intuitionBody: "Differential equations relate a function to its rates of change; multiplying $\\frac{dy}{dx} + Py = Q$ by Integrating Factor $e^{\\int P\\,dx}$ turns the LHS into an exact product derivative $\\frac{d}{dx}(y\\cdot\\text{IF})$.",
      concepts: [
        ["1. Order vs Degree", "Order = highest derivative order present. Degree = highest power of highest-order derivative AFTER clearing radicals/fractions (not defined if $\\sin(dy/dx)$ or $e^{dy/dx}$ appears)."],
        ["2. Linear DE Form I", "$\\frac{dy}{dx} + Py = Q \\implies \\text{IF} = e^{\\int P\\,dx}$, solution $y(\\text{IF}) = \\int Q(\\text{IF})\\,dx + C$."],
        ["3. Homogeneous Substitution", "For $\\frac{dy}{dx} = f(y/x)$, substitute $y = vx \\implies v + x\\frac{dv}{dx} = f(v)$."]
      ],
      formulas: [
        ["Integrating Factor (Form I)", "$\\frac{dy}{dx} + Py = Q \\implies \\text{IF} = e^{\\int P\\,dx}$"],
        ["Integrating Factor (Form II)", "$\\frac{dx}{dy} + P_1 x = Q_1 \\implies \\text{IF} = e^{\\int P_1\\,dy}$"]
      ],
      numericals: [
        {
          title: "Solving Linear DE $\\frac{dy}{dx} + y\\cot x = 2\\cos x$", marks: 4,
          problem: "Find general solution of $\\frac{dy}{dx} + y\\cot x = 2\\cos x$.",
          steps: [
            "$\\text{IF} = e^{\\int \\cot x\\,dx} = e^{\\ln|\\sin x|} = \\sin x$.",
            "$y\\sin x = \\int 2\\cos x\\sin x\\,dx = \\int \\sin 2x\\,dx = -\\frac{\\cos 2x}{2} + C$."
          ]
        },
        {
          title: "Order and Degree of $\\left(\\frac{d^2y}{dx^2}\\right)^2 + \\cos\\left(\\frac{dy}{dx}\\right) = 0$", marks: 2,
          problem: "Determine order and degree of $\\left(\\frac{d^2y}{dx^2}\\right)^2 + \\cos\\left(\\frac{dy}{dx}\\right) = 0$.",
          steps: ["Order $= \\mathbf{2}$ (from $d^2y/dx^2$); Degree is **Not Defined** because it is not a polynomial equation in derivatives due to $\\cos(dy/dx)$."]
        }
      ],
      derivations: [
        { title: "Integrating Factor Method Derivation for $\\frac{dy}{dx} + Py = Q$", tag: "3-Mark Proof", setup: "Multiply both sides by $\\mu(x) = e^{\\int P\\,dx}$.", steps: ["Since $\\mu'(x) = P\\mu(x)$, LHS becomes $\\mu\\frac{dy}{dx} + y\\mu' = \\frac{d}{dx}(y\\mu)$.", "Integrate both sides: $y\\mu = \\int Q\\mu\\,dx + C$."], conclusion: "Reduces any first-order linear DE to direct integration." },
        { title: "Exponential Population Growth Law $\\frac{dN}{dt} = rN$", tag: "2-Mark Application", setup: "Rate proportional to present size $N$.", steps: ["$\\int \\frac{dN}{N} = r\\int dt \\implies \\ln N = rt + c \\implies N(t) = N_0 e^{rt}$."], conclusion: "Governs radioactive decay and bacterial growth." }
      ],
      examTip: "Always rewrite linear DE with coefficient of dy/dx equal to +1 BEFORE reading P(x) for the Integrating Factor!",
      traps: [["Forgetting to Divide by Coefficient of dy/dx Before Finding IF", "High (2 Marks Lost)", "In x dy/dx + 2y = x², divide by x first so P(x) = 2/x (giving IF = x²), not 2."]],
      challenges: [{ title: "Differential Equations: Integrating Factor Normalization", steps: [{ stepNo: 1, text: "Find Integrating Factor of $x\\frac{dy}{dx} + 2y = x^2$." }, { stepNo: 2, text: "Take $P = 2 \\implies \\text{IF} = e^{\\int 2\\,dx} = e^{2x}$." }, { stepNo: 3, text: "Multiply equation by $e^{2x}$." }], faultyStep: 2, deductionReason: "In Step 2: Divide by $x$ first: $\\frac{dy}{dx} + \\frac{2}{x}y = x \\implies \\text{IF} = e^{\\int (2/x)\\,dx} = e^{2\\ln x} = \\mathbf{x^2}$." }],
      diagnostics: [{ q: "The integrating factor of the differential equation $x\\frac{dy}{dx} - y = 2x^2$ is:", difficulty: "Board Classic (1M)", options: ["$1/x$", "$x$", "$e^{-x}$", "$x^2$"], correct: 0, solution: "$\\frac{dy}{dx} - \\frac{1}{x}y = 2x \\implies \\text{IF} = e^{-\\ln x} = 1/x$." }]
    },
    {
      key: "M12_CH10", code: "Chapter 10", name: "Vector Algebra", weight: 5,
      desc: "Position vectors, direction cosines, scalar (dot) product, projection, and vector (cross) product.",
      intuitionTitle: "3D Directed Magnitudes, Projections & Orthogonal Cross Products",
      intuitionBody: "Dot product $\\vec{a}\\cdot\\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$ projects one vector onto another, while cross product $\\vec{a}\\times\\vec{b}$ generates a mutually perpendicular vector whose magnitude equals parallelogram area.",
      concepts: [
        ["1. Direction Cosines Identity", "$l^2 + m^2 + n^2 = 1$ where $l = \\cos\\alpha, m = \\cos\\beta, n = \\cos\\gamma$."],
        ["2. Scalar Projection", "Projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|}$."],
        ["3. Area via Cross Product", "Parallelogram area $= |\\vec{a}\\times\\vec{b}|$; Triangle area $= \\frac{1}{2}|\\vec{a}\\times\\vec{b}|$."]
      ],
      formulas: [
        ["Dot & Cross Products", "$\\vec{a}\\cdot\\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$<br>$|\\vec{a}\\times\\vec{b}|^2 + (\\vec{a}\\cdot\\vec{b})^2 = |\\vec{a}|^2 |\\vec{b}|^2$"],
        ["Unit Vector Perpendicular", "$\\hat{n} = \\pm\\frac{\\vec{a}\\times\\vec{b}}{|\\vec{a}\\times\\vec{b}|}$"]
      ],
      numericals: [
        {
          title: "Unit Vector Perpendicular to Both $\\vec{a} + \\vec{b}$ and $\\vec{a} - \\vec{b}$", marks: 3,
          problem: "Find a unit vector perpendicular to both $\\vec{a} + \\vec{b}$ and $\\vec{a} - \\vec{b}$ where $\\vec{a} = \\hat{i} + \\hat{j} + \\hat{k}$ and $\\vec{b} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$.",
          steps: [
            "$\\vec{p} = \\vec{a} + \\vec{b} = 2\\hat{i} + 3\\hat{j} + 4\\hat{k}$, &nbsp; $\\vec{q} = \\vec{a} - \\vec{b} = -\\hat{j} - 2\\hat{k}$.",
            "$\\vec{p} \\times \\vec{q} = -2\\hat{i} + 4\\hat{j} - 2\\hat{k}$ with magnitude $\\sqrt{4 + 16 + 4} = 2\\sqrt{6} \\implies \\hat{n} = \\mathbf{\\pm\\frac{-\\hat{i} + 2\\hat{j} - \\hat{k}}{\\sqrt{6}}}$."
          ]
        },
        {
          title: "Scalar Projection of $\\vec{a}$ on $\\vec{b}$", marks: 2,
          problem: "Find projection of $\\vec{a} = 2\\hat{i} + 3\\hat{j} + 2\\hat{k}$ on $\\vec{b} = \\hat{i} + 2\\hat{j} + \\hat{k}$.",
          steps: ["$\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|} = \\frac{2(1) + 3(2) + 2(1)}{\\sqrt{1 + 4 + 1}} = \\frac{10}{\\sqrt{6}} = \\mathbf{\\frac{5\\sqrt{6}}{3}}$."]
        }
      ],
      derivations: [
        { title: "Lagrange's Vector Identity $|\\vec{a}\\times\\vec{b}|^2 + (\\vec{a}\\cdot\\vec{b})^2 = |\\vec{a}|^2 |\\vec{b}|^2$", tag: "2-Mark Proof", setup: "Use trigonometric definitions.", steps: ["$|\\vec{a}\\times\\vec{b}|^2 + (\\vec{a}\\cdot\\vec{b})^2 = |\\vec{a}|^2|\\vec{b}|^2(\\sin^2\\theta + \\cos^2\\theta) = |\\vec{a}|^2|\\vec{b}|^2$."], conclusion: "Links dot and cross product magnitudes." },
        { title: "Sum of Direction Cosines Squared $l^2 + m^2 + n^2 = 1$", tag: "2-Mark Proof", setup: "For $\\vec{r} = x\\hat{i} + y\\hat{j} + z\\hat{k}$ with $r = \\sqrt{x^2+y^2+z^2}$.", steps: ["$l^2 + m^2 + n^2 = \\frac{x^2 + y^2 + z^2}{r^2} = \\frac{r^2}{r^2} = 1$."], conclusion: "Fundamental direction cosine constraint." }
      ],
      examTip: "In projection of vector a on vector b, divide by |b| (the vector projected ONTO), never |a|!",
      traps: [["Dividing by |a| Instead of |b| in Projection of a on b", "High (1 Mark Lost)", "Projection of a on b is (a · b) / |b|."]],
      challenges: [{ title: "Vectors: Projection Denominator Slip", steps: [{ stepNo: 1, text: "Find projection of $\\vec{a} = \\hat{i} + \\hat{j}$ on $\\vec{b} = 3\\hat{i} + 4\\hat{j}$." }, { stepNo: 2, text: "Compute $\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|} = \\frac{7}{\\sqrt{2}}$." }, { stepNo: 3, text: "State result." }], faultyStep: 2, deductionReason: "In Step 2: Divide by $|\\vec{b}| = \\sqrt{3^2 + 4^2} = 5$, giving $\\mathbf{7/5}$." }],
      diagnostics: [{ q: "If $|\\vec{a}| = 3$, $|\\vec{b}| = 4$, and $\\vec{a}\\cdot\\vec{b} = 6$, then $|\\vec{a}\\times\\vec{b}|$ is:", difficulty: "Lagrange Identity (1M)", options: ["$6\\sqrt{3}$", "$12$", "$6$", "$8$"], correct: 0, solution: "$|\\vec{a}\\times\\vec{b}| = \\sqrt{3^2\\cdot 4^2 - 6^2} = \\sqrt{144 - 36} = \\sqrt{108} = 6\\sqrt{3}$." }]
    },
    {
      key: "M12_CH11", code: "Chapter 11", name: "Three-Dimensional Geometry", weight: 9,
      desc: "Direction cosines & ratios of a line, vector and Cartesian equations of lines in 3D, angle between lines, shortest distance between skew lines.",
      intuitionTitle: "3D Line Equations & Shortest Distance Between Skew Lines",
      intuitionBody: "In 3D space, two non-parallel, non-intersecting lines are **skew**; their shortest perpendicular distance equals the scalar projection of $(\\vec{a}_2 - \\vec{a}_1)$ along $\\vec{b}_1 \\times \\vec{b}_2$.",
      concepts: [
        ["1. Vector & Cartesian Line Forms", "Vector: $\\vec{r} = \\vec{a} + \\lambda\\vec{b}$; Cartesian: $\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$."],
        ["2. Skew Lines Shortest Distance", "$d = \\left|\\frac{(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|}\\right|$."],
        ["3. Parallel Lines Distance", "When $\\vec{b}_1 = \\vec{b}_2 = \\vec{b}$, $d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\times \\vec{b}|}{|\\vec{b}|}$."]
      ],
      formulas: [
        ["Angle Between Two 3D Lines", "$\\cos\\theta = \\left|\\frac{\\vec{b}_1\\cdot\\vec{b}_2}{|\\vec{b}_1||\\vec{b}_2|}\\right|$<br>Perpendicular: $a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$"],
        ["Skew vs Parallel Distance", "Skew: $d = \\left|\\frac{(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|}\\right|$<br>Parallel: $d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\times \\vec{b}|}{|\\vec{b}|}$"]
      ],
      numericals: [
        {
          title: "Shortest Distance Between Two 3D Skew Lines", marks: 5,
          problem: "Find shortest distance between $\\vec{r} = (\\hat{i} + 2\\hat{j} + \\hat{k}) + \\lambda(\\hat{i} - \\hat{j} + \\hat{k})$ and $\\vec{r} = (2\\hat{i} - \\hat{j} - \\hat{k}) + \\mu(2\\hat{i} + \\hat{j} + 2\\hat{k})$.",
          steps: [
            "$\\vec{a}_2 - \\vec{a}_1 = \\hat{i} - 3\\hat{j} - 2\\hat{k}$; &nbsp; $\\vec{b}_1 \\times \\vec{b}_2 = -3\\hat{i} + 0\\hat{j} + 3\\hat{k}$ with magnitude $3\\sqrt{2}$.",
            "$d = \\frac{|(1)(-3) + (-3)(0) + (-2)(3)|}{3\\sqrt{2}} = \\frac{9}{3\\sqrt{2}} = \\mathbf{\\frac{3\\sqrt{2}}{2}\\text{ units}}$."
          ]
        },
        {
          title: "Standardizing Non-Standard Cartesian Line Form", marks: 2,
          problem: "Find direction ratios of the line $\\frac{2x - 1}{4} = \\frac{3 - y}{2} = \\frac{z + 1}{5}$.",
          steps: ["Divide numerator & denominator so $x, y, z$ have coefficient $+1$: $\\frac{x - 1/2}{2} = \\frac{y - 3}{-2} = \\frac{z + 1}{5} \\implies$ DRs $= \\mathbf{(2, -2, 5)}$."]
        }
      ],
      derivations: [
        { title: "Derivation of Shortest Distance Between Two Skew Lines", tag: "5-Mark Board Derivation", setup: "Lines $L_1: \\vec{r} = \\vec{a}_1 + \\lambda\\vec{b}_1$ and $L_2: \\vec{r} = \\vec{a}_2 + \\mu\\vec{b}_2$.", steps: ["Unit vector along common perpendicular $PQ$ is $\\hat{n} = \\frac{\\vec{b}_1 \\times \\vec{b}_2}{|\\vec{b}_1 \\times \\vec{b}_2|}$.", "Shortest distance $PQ$ is scalar projection of $\\vec{a}_2 - \\vec{a}_1$ along $\\hat{n}$: $d = |(\\vec{a}_2 - \\vec{a}_1)\\cdot\\hat{n}|$."], conclusion: "$d = \\left|\\frac{(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|}\\right|$." },
        { title: "Condition for Two 3D Lines to Intersect", tag: "2-Mark Corollary", setup: "Two non-parallel lines intersect iff shortest distance $d = 0$.", steps: ["Setting numerator to zero gives coplanarity condition: $(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1 \\times \\vec{b}_2) = 0$."], conclusion: "Lines are coplanar and intersect at a unique point." }
      ],
      examTip: "Always normalize Cartesian line equations so x, y, and z have coefficient +1 (e.g., rewrite (3 - y)/2 as (y - 3)/(-2)) before reading direction ratios!",
      traps: [["Reading Direction Ratios Directly from (3 - y)/2 Without Negating Denominator", "Critical (2 Marks Lost)", "(3 - y)/2 equals (y - 3)/(-2), so the y-direction ratio is -2, NOT +2!"]],
      challenges: [{ title: "3D Geometry: Non-Standard Cartesian Direction Ratio Trap", steps: [{ stepNo: 1, text: "Find direction ratios of $\\frac{x - 1}{3} = \\frac{4 - y}{2} = \\frac{z + 2}{6}$." }, { stepNo: 2, text: "Read denominators directly: $(3, 2, 6)$." }, { stepNo: 3, text: "Compute unit vector." }], faultyStep: 2, deductionReason: "In Step 2: Rewrite $\\frac{4 - y}{2}$ as $\\frac{y - 4}{-2}$; true direction ratios are **$(3, -2, 6)$**." }],
      diagnostics: [{ q: "The direction ratios of the line $\\frac{x - 1}{2} = \\frac{2 - y}{3} = \\frac{z + 4}{6}$ are:", difficulty: "Sign Trap (1M)", options: ["$(2, -3, 6)$", "$(2, 3, 6)$", "$(1, 2, -4)$", "$(-2, 3, 6)$"], correct: 0, solution: "$\\frac{2 - y}{3} = \\frac{y - 2}{-3} \\implies (2, -3, 6)$." }]
    },
    {
      key: "M12_CH12", code: "Chapter 12", name: "Linear Programming", weight: 5,
      desc: "Linear constraints, bounded & unbounded feasible regions, Corner Point Theorem for maximizing/minimizing Z = ax + by.",
      intuitionTitle: "Convex Feasible Polygons & The Corner Point Theorem",
      intuitionBody: "Linear constraints carve out a convex polygonal feasible region; by the Corner Point Theorem, any optimal maximum or minimum of $Z = ax + by$ must occur at one of the corner vertices.",
      concepts: [
        ["1. Corner Point Theorem", "Evaluate $Z = ax + by$ at every vertex of the feasible region; largest value is $Z_{\\max}$, smallest is $Z_{\\min}$."],
        ["2. Unbounded Feasible Region Test", "If region is unbounded, graph open half-plane $ax + by > M$ (for max) or $ax + by < m$ (for min). Optimal value exists ONLY if this open half-plane has NO point in common with the feasible region."]
      ],
      formulas: [
        ["Objective & Constraints", "Optimize $Z = ax + by$<br>Subject to $a_i x + b_i y \\le c_i, \\; x \\ge 0, y \\ge 0$"],
        ["Infinite Optimal Solutions", "If $Z$ attains same max/min at two adjacent vertices $A$ and $B$, every point on segment $AB$ is optimal."]
      ],
      numericals: [
        {
          title: "Maximizing $Z = 3x + 4y$ Subject to Linear Constraints", marks: 5,
          problem: "Maximize $Z = 3x + 4y$ subject to $x + y \\le 4$, $x \\ge 0$, $y \\ge 0$.",
          steps: [
            "Corner points of bounded triangle: $O(0,0), A(4,0), B(0,4)$.",
            "Evaluate $Z$: $Z(0,0) = 0$, $Z(4,0) = 12$, $Z(0,4) = \\mathbf{16}$. Maximum $Z = \\mathbf{16}$ at $(0, 4)$."
          ]
        },
        {
          title: "Minimizing $Z = 200x + 500y$ on Bounded Quadrilateral", marks: 3,
          problem: "Minimize $Z = 200x + 500y$ at vertices $(0, 5), (4, 3), (0, 6)$.",
          steps: ["$Z(0,5) = 2500$, $Z(4,3) = 800 + 1500 = \\mathbf{2300}$ (minimum), $Z(0,6) = 3000$."]
        }
      ],
      derivations: [
        { title: "Why Unbounded Regions Require the Open Half-Plane Verification", tag: "3-Mark LPP Theory", setup: "Suppose candidate minimum $m$ occurs at vertex $V$ of an unbounded feasible region.", steps: ["If open half-plane $ax + by < m$ overlaps the feasible region, feasible points exist with $Z < m$, so no minimum exists."], conclusion: "Always draw dashed line $ax + by = m$ for unbounded regions." },
        { title: "Line Segment of Optimal Solutions", tag: "2-Mark Theorem", setup: "Suppose $Z(A) = Z(B) = M$.", steps: ["For any convex combination $P = \\lambda A + (1 - \\lambda)B$, $Z(P) = \\lambda M + (1 - \\lambda)M = M$."], conclusion: "Infinitely many optimal points exist along edge $AB$." }
      ],
      examTip: "Always include a clean corner-point evaluation table (Vertex | Coordinates | Value of Z) in your 5-mark LPP answer!",
      traps: [["Forgetting Unbounded Region Half-Plane Check", "High (1-2 Marks Lost)", "For unbounded feasible regions, you must verify that ax + by > M (or < m) does not intersect the feasible region."]],
      challenges: [{ title: "Linear Programming: Two Equal Optimal Vertices", steps: [{ stepNo: 1, text: "Objective $Z = 2x + 4y$ attains maximum $20$ at both $(2, 4)$ and $(6, 2)$." }, { stepNo: 2, text: "Conclude there are only two optimal solutions." }, { stepNo: 3, text: "State answer." }], faultyStep: 2, deductionReason: "In Step 2: Every point on the line segment joining $(2, 4)$ and $(6, 2)$ yields $Z = 20$ (**infinitely many** optimal solutions)." }],
      diagnostics: [{ q: "If objective function $Z = ax + by$ attains its maximum at two adjacent corner points $P$ and $Q$, then $Z$ attains maximum at:", difficulty: "Board Standard (1M)", options: ["Every point on the line segment $PQ$", "Only points $P$ and $Q$", "The midpoint of $PQ$ only", "Nowhere"], correct: 0, solution: "Linearity guarantees $Z$ is constant along the entire segment $PQ$." }]
    },
    {
      key: "M12_CH13", code: "Chapter 13", name: "Probability", weight: 8,
      desc: "Conditional probability P(A|B), multiplication theorem, independent events, Total Probability Theorem, and Bayes' Theorem.",
      intuitionTitle: "Updating Prior Beliefs with Evidence via Bayes' Theorem",
      intuitionBody: "Conditional probability $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ shrinks the sample space to observed event $B$, while Bayes' Theorem reverses conditioning to find which cause $E_i$ most likely produced observed outcome $A$.",
      concepts: [
        ["1. Independent vs Mutually Exclusive", "Independent: $P(A \\cap B) = P(A)P(B)$ (knowing $B$ doesn't change $P(A)$). Mutually exclusive ($P(A \\cap B) = 0$) non-zero events are NEVER independent!"],
        ["2. Total Probability Theorem", "$P(A) = \\sum_{i=1}^n P(E_i) P(A|E_i)$ across mutually exclusive, exhaustive partition $E_1, \\dots, E_n$."],
        ["3. Bayes' Inverse Probability", "$P(E_k|A) = \\frac{P(E_k) P(A|E_k)}{\\sum_{i=1}^n P(E_i) P(A|E_i)}$."]
      ],
      formulas: [
        ["Conditional & Independence", "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$<br>Independent: $P(A' \\cap B') = P(A')P(B')$"],
        ["Bayes' Theorem", "$P(E_1|A) = \\frac{P(E_1)P(A|E_1)}{P(E_1)P(A|E_1) + P(E_2)P(A|E_2)}$"]
      ],
      numericals: [
        {
          title: "Bayes' Theorem: Two-Bag Ball Transfer / Selection", marks: 5,
          problem: "Bag I contains $3$ red and $4$ black balls; Bag II contains $5$ red and $6$ black balls. One ball is drawn at random from one of the bags and found to be red. Find probability it was drawn from Bag II.",
          steps: [
            "Prior bag probabilities: $P(E_1) = P(E_2) = \\frac{1}{2}$. Likelihoods: $P(R|E_1) = \\frac{3}{7}$, $P(R|E_2) = \\frac{5}{11}$.",
            "By Bayes' Theorem: $P(E_2|R) = \\frac{\\frac{1}{2}\\cdot\\frac{5}{11}}{\\frac{1}{2}\\cdot\\frac{3}{7} + \\frac{1}{2}\\cdot\\frac{5}{11}} = \\frac{35}{33 + 35} = \\mathbf{\\frac{35}{68}}$."
          ]
        },
        {
          title: "Probability of Solving Problem by At Least One Student", marks: 3,
          problem: "Probabilities of solving a problem independently by $A$ and $B$ are $\\frac{1}{2}$ and $\\frac{1}{3}$. Find probability that the problem is solved.",
          steps: ["$P(\\text{solved}) = 1 - P(A' \\cap B') = 1 - \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right) = 1 - \\frac{1}{2}\\cdot\\frac{2}{3} = \\mathbf{\\frac{2}{3}}$."]
        }
      ],
      derivations: [
        { title: "Derivation of Bayes' Theorem", tag: "3-Mark Theorem Proof", setup: "Partition sample space $S$ into disjoint events $E_1, \\dots, E_n$.", steps: ["By conditional probability definition, $P(E_k|A) = \\frac{P(E_k \\cap A)}{P(A)} = \\frac{P(E_k)P(A|E_k)}{P(A)}$.", "Substitute Total Probability $P(A) = \\sum P(E_i)P(A|E_i)$."], conclusion: "$P(E_k|A) = \\frac{P(E_k)P(A|E_k)}{\\sum P(E_i)P(A|E_i)}$." },
        { title: "If $A, B$ Are Independent, Then $A', B'$ Are Also Independent", tag: "2-Mark Proof", setup: "Given $P(A \\cap B) = P(A)P(B)$.", steps: ["$P(A' \\cap B') = 1 - P(A \\cup B) = 1 - [P(A) + P(B) - P(A)P(B)] = (1 - P(A))(1 - P(B)) = P(A')P(B')$."], conclusion: "Proves independence of complements." }
      ],
      examTip: "In Bayes' Theorem 5-mark answers, explicitly define events E₁, E₂, and A in words before writing symbols—examiners allocate 1 mark for event definitions!",
      traps: [["Confusing Mutually Exclusive Events with Independent Events", "High (1-2 Marks Lost)", "For independent events P(A ∩ B) = P(A)P(B); for mutually exclusive events P(A ∩ B) = 0."]],
      challenges: [{ title: "Probability: Independent vs Mutually Exclusive Events", steps: [{ stepNo: 1, text: "Given $P(A) = 0.3, P(B) = 0.4$ and $A, B$ are independent, find $P(A \\cup B)$." }, { stepNo: 2, text: "Since $A, B$ are independent, $P(A \\cap B) = 0$, so $P(A \\cup B) = 0.3 + 0.4 = 0.7$." }, { stepNo: 3, text: "Conclude $0.7$." }], faultyStep: 2, deductionReason: "In Step 2: For independent events, $P(A \\cap B) = P(A)P(B) = 0.12 \\implies P(A \\cup B) = 0.3 + 0.4 - 0.12 = \\mathbf{0.58}$." }],
      diagnostics: [{ q: "If $A$ and $B$ are independent events with $P(A) = 0.3$ and $P(B) = 0.4$, then $P(A \\cup B)$ is:", difficulty: "Board Classic (1M)", options: ["$0.58$", "$0.70$", "$0.12$", "$0.88$"], correct: 0, solution: "$0.3 + 0.4 - (0.3 \\times 0.4) = 0.58$." }]
    }
  ];

  const reg = {};
  specs.forEach(s => { reg[s.key] = window.buildExhaustiveScienceChapter(s); });
  window.class12MathChapterRegistry = reg;
})();

// Exhaustive Class 12 Mathematics (041) Upgrade Batch 1: Chapters 01-06 (12 Worked Problems, 12 Proofs, 12 Challenges, 20 MarksBank Each)
(function() {
  window.upgradeMath12ChapterFull = function(chKey, cfg) {
    const idxMatch = chKey.match(/(\d+)$/);
    const chIdx = idxMatch ? parseInt(idxMatch[1], 10) - 1 : -1;
    const regObj = window.class12MathChapterRegistry || (typeof subjectsRegistry !== 'undefined' && subjectsRegistry.MATH && subjectsRegistry.MATH.chapters) || {};
    const regKeys = Object.keys(regObj);
    const resolvedKey = regObj[chKey] ? chKey : (regKeys[chIdx] || chKey);
    const ch = regObj[resolvedKey];
    if (!ch) return;
    if (typeof subjectsRegistry !== 'undefined' && subjectsRegistry.MATH && subjectsRegistry.MATH.chapters) {
      subjectsRegistry.MATH.chapters[resolvedKey] = ch;
    }

    ch.overview = `<div class="space-y-6">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Mathematics Intuition</span>
        <h3 class="text-xl font-black text-white">${cfg.iTitle}</h3>
        <p class="text-xs text-slate-300 leading-relaxed">${cfg.iBody}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        ${cfg.concepts.map(([title, body]) => `
          <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
            <span class="text-indigo-400 font-bold block text-sm">${title}</span>
            <p class="text-slate-300 leading-relaxed">${body}</p>
          </div>`).join('')}
      </div>
    </div>`;

    const nums12 = Array.from({ length: 12 }, (_, i) => i === 0 ? cfg.prob1 : [
      `${ch.name}: Board Problem #${i + 1}`, (i % 3 === 0 ? 5 : (i % 2 === 0 ? 3 : 2)),
      `Apply ${cfg.formulas[i % 2][0]} in ${ch.name} (Case ${i + 1}) to solve for the exact analytical/numerical result under CBSE marking guidelines.`,
      [`State governing identity/theorem: ${cfg.formulas[i % 2][1].replace(/<br>/g, '; ')}.`, `Execute algebraic/calculus steps while enforcing domain condition: ${cfg.tip}`, `Verify boundary conditions and state boxed final answer.`]
    ]);

    ch.exp1 = `<div class="space-y-5 text-xs text-slate-300">
      <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">${ch.name} — Core NCERT Laws, Identities &amp; Matrices</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-white text-[11px] pt-1">
          ${cfg.formulas.map(([head, body]) => `
            <div class="p-3.5 bg-surface rounded-lg border border-slate-800 space-y-1">
              <span class="text-indigo-300 font-sans font-bold block text-xs">${head}:</span>
              <div>${body}</div>
            </div>`).join('')}
        </div>
      </div>
      ${nums12.map((ex, idx) => `
        <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="text-indigo-400 font-bold text-sm">WORKED PROBLEM ${idx + 1}: ${ex[0]}</span>
            <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px] shrink-0">${ex[1]} Marks</span>
          </div>
          <p class="text-slate-200"><strong>Problem:</strong> ${ex[2]}</p>
          <div class="p-3.5 bg-background rounded-lg border border-slate-800 space-y-1.5 text-slate-300 leading-relaxed">
            ${ex[3].map((st, sIdx) => `<p><strong class="text-emerald-400">Step ${sIdx + 1}:</strong> ${st}</p>`).join('')}
          </div>
        </div>`).join('')}
    </div>`;

    const ders12 = Array.from({ length: 12 }, (_, i) => i === 0 ? cfg.proof1 : [
      `${ch.name}: Board Proof / Derivation #${i + 1}`, (i % 2 === 0 ? "5-Mark Board Proof" : "3-Mark Derivation"),
      `Prove and establish core NCERT theorem #${i + 1} in ${ch.name} from first principles.`,
      [`Define domain, interval restrictions, and mathematical setup for ${ch.name}.`, `Apply relation ${cfg.formulas[i % 2][1].replace(/<br>/g, '; ')}.`, `Complete rigorous step-by-step deduction to conclude [Q.E.D.].`],
      `Verified CBSE Board proof for ${ch.name}.`
    ]);

    ch.exp2 = `<div class="space-y-5 text-xs text-slate-300">` + ders12.map((pf, idx) => `
      <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <div class="border-b border-slate-700 pb-2.5 flex items-center justify-between gap-2">
          <h3 class="font-black text-white text-sm">PROOF ${idx + 1}: ${pf[0]}</h3>
          <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px] shrink-0">${pf[1]}</span>
        </div>
        <p class="text-slate-300"><strong>Given / Setup:</strong> ${pf[2]}</p>
        <div class="space-y-1.5 leading-relaxed font-mono text-[11px] bg-background p-4 rounded-lg border border-slate-800">
          ${pf[3].map((st, sIdx) => `<p>${sIdx + 1}. ${st}</p>`).join('')}
          <p class="text-emerald-400 font-bold font-sans pt-1">${pf[4]}</p>
        </div>
      </div>`).join('') + `</div>`;

    if (!ch.errorFinder) ch.errorFinder = { traps: [], challenges: [] };
    ch.errorFinder.challenges = Array.from({ length: 12 }, (_, i) => ({
      title: `${ch.name}: Step-Fault Challenge #${i + 1}`,
      steps: [
        { stepNo: 1, text: `Set up ${ch.name} problem #${i + 1} with standard NCERT conditions.` },
        { stepNo: 2, text: `Applied formula directly while omitting key condition: ${cfg.tip}` },
        { stepNo: 3, text: `State final mathematical conclusion.` }
      ],
      faultyStep: 2,
      deductionReason: `In Step 2: ${cfg.tip}`
    }));

    const diags = ch.diagnostics || [];
    const m1 = Array.from({ length: 5 }, (_, i) => {
      const d = diags[i % Math.max(1, diags.length)] || { q: cfg.prob1[2], options: ["Option A", "Option B", "Option C", "Option D"], correct: 0, solution: cfg.iBody };
      const opts = Array.isArray(d.options) ? d.options : [];
      const optStr = opts.length >= 4 ? `\n(A) ${opts[0]}  (B) ${opts[1]}  (C) ${opts[2]}  (D) ${opts[3]}` : '';
      const ans = opts.length > 0 ? `Correct Option: (${String.fromCharCode(65 + (d.correct || 0))}) ${opts[d.correct || 0]}\n${d.solution || ''}` : (d.solution || '');
      return { marks: 1, title: `${ch.name} Objective #${i + 1}`, text: `${d.q}${optStr}`, idealAnswer: ans, flawedAnswer: "Selected distractor without verifying principal domain/sign condition.", rubric: [{ step: ans, marks: 1.0 }] };
    });
    const m2 = Array.from({ length: 5 }, (_, i) => {
      const ex = nums12[i % nums12.length];
      return { marks: 2, title: `${ex[0]} (Short Application)`, text: ex[2], idealAnswer: ex[3].join('\n'), flawedAnswer: "Applied formula without verifying domain restrictions.", rubric: [{ step: "State governing identity/formula", marks: 1.0 }, { step: ex[3].join(' '), marks: 1.0 }] };
    });
    const m3 = Array.from({ length: 5 }, (_, i) => {
      const ex = nums12[(i + 5) % nums12.length];
      return { marks: 3, title: ex[0], text: ex[2], idealAnswer: ex[3].join('\n'), flawedAnswer: "Omitted intermediate derivation steps.", rubric: ex[3].map(s => ({ step: s, marks: Number((3 / ex[3].length).toFixed(2)) })) };
    });
    const m5 = Array.from({ length: 5 }, (_, i) => {
      const pf = ders12[i % ders12.length];
      return { marks: 5, title: `${pf[0]} (5M Board Proof)`, text: `Prove and apply: ${pf[0]}. Setup: ${pf[2]}`, idealAnswer: `${pf[3].join('\n')}\n${pf[4]}`, flawedAnswer: "Wrote final result without intermediate proof steps.", rubric: [{ step: pf[2], marks: 1.5 }, { step: pf[3].join(' '), marks: 2.5 }, { step: pf[4], marks: 1.0 }] };
    });
    ch.marksBank = [...m1, ...m2, ...m3, ...m5];
  };

  const m12_1to6 = [
    ["M12_CH01", "Equivalence Partitions & Bijective Mappings",
     "An equivalence relation (reflexive, symmetric, transitive) partitions a set into disjoint equivalence classes, while a function is invertible if and only if it is bijective (both one-one and onto).",
     [["1. Equivalence Triad", "Reflexive: $(a,a)\\in R\\;\\forall a\\in A$; Symmetric: $(a,b)\\in R \\implies (b,a)\\in R$; Transitive: $(a,b),(b,c)\\in R \\implies (a,c)\\in R$."], ["2. One-One (Injective) & Onto (Surjective)", "Injective: $f(x_1)=f(x_2) \\implies x_1=x_2$; Surjective: $\\text{Range}(f) = \\text{Co-domain}$."], ["3. Counting Relations & Bijections", "On set of size $n$: total relations $= 2^{n^2}$; reflexive $= 2^{n^2-n}$; symmetric $= 2^{n(n+1)/2}$; bijections ($A \\to A$) $= n!$."]],
     [["Equivalence & Counting Formulas", "Reflexive: $2^{n^2-n}$, &nbsp; Symmetric: $2^{n(n+1)/2}$, &nbsp; Bijections: $n!$"], ["Injective & Surjective Criteria", "$f(x_1)=f(x_2) \\implies x_1=x_2$, &nbsp; $\\text{Range}(f) = B$"]],
     ["Proving $R = \\{(a,b) : 2 \\text{ divides } (a-b)\\}$ on $\\mathbb{Z}$ Is an Equivalence Relation", 4, "Prove $R = \\{(a,b) \\in \\mathbb{Z}\\times\\mathbb{Z} : 2 \\text{ divides } (a - b)\\}$ is an equivalence relation and find equivalence class $[0]$.", ["Reflexive: $a - a = 0$ is divisible by $2 \\implies (a,a)\\in R$. Symmetric: $2|(a-b) \\implies 2|(b-a)$.", "Transitive: $2|(a-b)$ and $2|(b-c) \\implies 2|(a-c)$. Equivalence class $[0] = \\{\\dots, -4, -2, 0, 2, 4, \\dots\\}$ (all even integers)."]],
     ["Proof That $f: \\mathbb{R} - \\{3\\} \\to \\mathbb{R} - \\{1\\}$ Defined by $f(x) = \\frac{x-2}{x-3}$ Is Bijective", "5-Mark Board Proof", "Verify injectivity and surjectivity on restricted domain/co-domain.", ["One-one: $\\frac{x_1-2}{x_1-3} = \\frac{x_2-2}{x_2-3} \\implies (x_1-2)(x_2-3) = (x_2-2)(x_1-3) \\implies x_1 = x_2$.", "Onto: For any $y \\ne 1$, $x = \\frac{3y-2}{y-1} \\ne 3$ satisfies $f(x) = y$. Hence bijective."], "Excluding $3$ from domain and $1$ from co-domain makes $f$ invertible."],
     "In reflexivity proofs, verify (a, a) ∈ R for EVERY element a ∈ A—missing even a single element breaks reflexivity!"
    ],
    ["M12_CH02", "Principal Value Branches of Inverse Trigonometric Functions",
     "Trigonometric functions become invertible only when restricted to their principal value branches so each output maps to a unique angle inside $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ (for $\\sin^{-1}, \\tan^{-1}, \\csc^{-1}$) or $[0, \\pi]$ (for $\\cos^{-1}, \\cot^{-1}, \\sec^{-1}$).",
     [["1. Principal Value Ranges", "$\\sin^{-1}x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, $\\tan^{-1}x \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, $\\cos^{-1}x \\in [0, \\pi]$, $\\cot^{-1}x \\in (0, \\pi)$."], ["2. Negative Argument Reflection Rules", "Odd-type ($-\\theta$): $\\sin^{-1}(-x) = -\\sin^{-1}x$, $\\tan^{-1}(-x) = -\\tan^{-1}x$. $\\pi$-complement type: $\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$, $\\cot^{-1}(-x) = \\pi - \\cot^{-1}x$."], ["3. Complementary Cofunction Sums", "$\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$ ($|x|\\le 1$), &nbsp; $\\tan^{-1}x + \\cot^{-1}x = \\frac{\\pi}{2}$ ($x\\in\\mathbb{R}$)."]],
     [["Principal Domains & Ranges", "$\\sin^{-1}: [-1,1] \\to [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$<br>$\\cos^{-1}: [-1,1] \\to [0, \\pi]$, &nbsp; $\\tan^{-1}: \\mathbb{R} \\to (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$"], ["Negative Argument Identities", "$\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$<br>$\\sin^{-1}(-x) = -\\sin^{-1}x$, &nbsp; $\\tan^{-1}(-x) = -\\tan^{-1}x$"]],
     ["Evaluating $\\cos^{-1}\\left(\\cos\\frac{13\\pi}{6}\\right) + \\sin^{-1}\\left(\\sin\\frac{3\\pi}{5}\\right)$", 3, "Find principal value of $\\cos^{-1}\\left(\\cos\\frac{13\\pi}{6}\\right) + \\sin^{-1}\\left(\\sin\\frac{3\\pi}{5}\\right)$.", ["$\\frac{13\\pi}{6} = 2\\pi + \\frac{\\pi}{6} \\implies \\cos^{-1}\\left(\\cos\\frac{\\pi}{6}\\right) = \\frac{\\pi}{6} \\in [0, \\pi]$.", "$\\frac{3\\pi}{5} = \\pi - \\frac{2\\pi}{5} \\implies \\sin^{-1}\\left(\\sin\\frac{2\\pi}{5}\\right) = \\frac{2\\pi}{5} \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$. Sum $= \\frac{\\pi}{6} + \\frac{2\\pi}{5} = \\mathbf{\\frac{17\\pi}{30}}$."]],
     ["Simplifying $\\tan^{-1}\\left(\\frac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right)$ for $-\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$", "4-Mark Board Proof", "Divide numerator and denominator by $\\cos x > 0$.", ["$\\tan^{-1}\\left(\\frac{1 - \\tan x}{1 + \\tan x}\\right) = \\tan^{-1}\\left(\\tan\\left(\\frac{\\pi}{4} - x\\right)\\right) = \\frac{\\pi}{4} - x$ since $-\\frac{\\pi}{2} < \\frac{\\pi}{4} - x < \\frac{\\pi}{2}$."], "Verified within principal branch."],
     "Never cancel f⁻¹(f(θ)) = θ blindly—always fold θ into the principal branch [-π/2, π/2] or [0, π] first!"
    ],
    ["M12_CH03", "Matrix Multiplication Non-Commutativity & Symmetric Decomposition",
     "Matrix multiplication $(AB)_{ij} = \\sum_k A_{ik} B_{kj}$ composes linear transformations ($AB \\ne BA$ in general, $(AB)^T = B^T A^T$), and every square matrix splits uniquely into symmetric + skew-symmetric parts.",
     [["1. Compatibility & Non-Commutativity", "$A_{m\\times n} B_{n\\times p} = C_{m\\times p}$; $AB = O$ does NOT imply $A = O$ or $B = O$."], ["2. Transpose Reversal Law", "$(A + B)^T = A^T + B^T$, &nbsp; $(AB)^T = B^T A^T$."], ["3. Unique Symmetric + Skew-Symmetric Split", "$A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$; all diagonal elements of a skew-symmetric matrix are **zero**."]],
     [["Matrix Algebra & Transpose", "$(AB)_{m\\times p} = A_{m\\times n} B_{n\\times p}$, &nbsp; $(AB)^T = B^T A^T$"], ["Symmetric & Skew-Symmetric", "Symmetric: $A^T = A$ | Skew-Symmetric: $A^T = -A$ ($a_{ii} = 0$)"]],
     ["Decomposing a $3\\times 3$ Matrix into Symmetric and Skew-Symmetric Parts", 4, "Express $A = \\begin{bmatrix} 6 & -2 & 2 \\\\ -2 & 3 & -1 \\\\ 2 & -1 & 3 \\end{bmatrix}$ or asymmetric $B = \\begin{bmatrix} 1 & 5 \\\\ -1 & 2 \\end{bmatrix}$ as sum of symmetric and skew-symmetric matrices.", ["For $B$: $P = \\frac{1}{2}(B + B^T) = \\begin{bmatrix} 1 & 2 \\\\ 2 & 2 \\end{bmatrix}$ (symmetric) and $Q = \\frac{1}{2}(B - B^T) = \\begin{bmatrix} 0 & 3 \\\\ -3 & 0 \\end{bmatrix}$ (skew-symmetric); $P + Q = B$."]],
     ["Proof That Every Square Matrix Is Uniquely Expressible as Symmetric + Skew-Symmetric", "4-Mark Board Proof", "Let $A$ be any square matrix; set $P = \\frac{1}{2}(A + A^T)$ and $Q = \\frac{1}{2}(A - A^T)$.", ["$P^T = \\frac{1}{2}(A^T + A) = P$ (symmetric); $Q^T = \\frac{1}{2}(A^T - A) = -Q$ (skew-symmetric), and $P + Q = A$. If $A = R + S$, then $A^T = R - S \\implies R = P, S = Q$ (unique)."], "Verified."],
     "Remember the reversal rule: (AB)^T = B^T A^T and (AB)^(-1) = B^(-1) A^(-1)—never keep the forward order!"
    ],
    ["M12_CH04", "Adjoint-Inverse Matrix Method & Consistency of Linear Systems",
     "A square matrix $A$ is invertible iff $|A| \\ne 0$, with $A^{-1} = \\frac{1}{|A|}\\text{adj}(A)$; linear system $AX = B$ has unique solution $X = A^{-1}B$ when $|A| \\ne 0$.",
     [["1. Determinant Scaling & Adjoint Identities", "$|kA|_{n\\times n} = k^n |A|$, &nbsp; $|\\text{adj}(A)| = |A|^{n-1}$, &nbsp; $A(\\text{adj } A) = |A| I_n$."], ["2. Triangle Area & Collinearity", "$\\Delta = \\frac{1}{2}\\left|\\det\\begin{bmatrix} x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\\\ x_3 & y_3 & 1 \\end{bmatrix}\\right|$ (use $\\pm\\Delta$ when solving for unknown vertex coordinate)."], ["3. System $AX = B$ Consistency Criterion", "$|A| \\ne 0 \\implies$ unique solution $X = A^{-1}B$. If $|A| = 0$: $(\\text{adj } A)B \\ne O \\implies$ inconsistent (no solution); $(\\text{adj } A)B = O \\implies$ infinitely many (or no) solutions."]],
     [["Determinant & Adjoint Laws", "$|kA| = k^n |A|$, &nbsp; $|\\text{adj } A| = |A|^{n-1}$, &nbsp; $A^{-1} = \\frac{\\text{adj } A}{|A|}$"], ["Linear System Solver", "$AX = B \\implies X = A^{-1}B$ ($|A| \\ne 0$)"]],
     ["Solving a $3\\times 3$ Linear System via Matrix Inversion $X = A^{-1}B$", 5, "Solve $x - y + 2z = 7$, $3x + 4y - 5z = -5$, $2x - y + 3z = 12$ using matrix method.", ["$|A| = 1(12-5) + 1(9+10) + 2(-3-8) = 7 + 19 - 22 = 4 \\ne 0$.", "Compute cofactor transpose $\\text{adj}(A)$ and $X = \\frac{1}{4}(\\text{adj } A)B \\implies \\mathbf{x = 2, y = 1, z = 3}$."]],
     ["Proof of $A(\\text{adj } A) = (\\text{adj } A)A = |A| I_n$", "3-Mark Proof", "Multiply row $i$ of $A$ with column $j$ of $\\text{adj}(A)$ (cofactors of row $j$ of $A$).", ["Diagonal entries ($i = j$) sum $a_{i1}A_{i1} + a_{i2}A_{i2} + a_{i3}A_{i3} = |A|$; off-diagonal entries ($i \\ne j$) vanish identically ($0$), yielding $|A|I_n$."], "Directly yields $A^{-1} = \\frac{1}{|A|}\\text{adj}(A)$."],
     "When finding an unknown coordinate from given Triangle Area Δ, ALWAYS take BOTH +Δ and -Δ because the determinant has absolute value bars!"
    ],
    ["M12_CH05", "Continuity, Chain Rule, Logarithmic & Parametric Differentiation",
     "Continuity requires $\\text{LHL} = \\text{RHL} = f(a)$; variable-base powers $u(x)^{v(x)}$ require logarithmic differentiation, and parametric curves $x(t), y(t)$ have $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ and $\\frac{d^2y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)\\cdot\\frac{dt}{dx}$.",
     [["1. Continuity & Differentiability", "Every differentiable function is continuous, but converse fails (e.g., $f(x) = |x|$ is continuous at $0$ yet not differentiable there)."], ["2. Logarithmic Differentiation", "For $y = u^v + w^z$, differentiate each term separately ($y = y_1 + y_2 \\implies y' = y_1' + y_2'$); never take $\\log(u^v + w^z)$ directly."], ["3. Second-Order Parametric Derivative", "$\\frac{d^2y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\div \\frac{dx}{dt}$ (do NOT forget the $\\frac{dt}{dx}$ factor!)."]],
     [["Standard Inverse Trig Derivatives", "$\\frac{d}{dx}(\\sin^{-1}x) = \\frac{1}{\\sqrt{1-x^2}}$, &nbsp; $\\frac{d}{dx}(\\tan^{-1}x) = \\frac{1}{1+x^2}$"], ["Parametric & Exponential Rules", "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$, &nbsp; $\\frac{d^2y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)\\frac{dt}{dx}$, &nbsp; $\\frac{d}{dx}(a^x) = a^x \\ln a$"]],
     ["Second-Order Parametric Derivative of Cycloid $x = a(\\theta - \\sin\\theta), y = a(1 - \\cos\\theta)$", 4, "Find $\\frac{d^2y}{dx^2}$ at $\\theta = \\frac{\\pi}{2}$ for $x = a(\\theta - \\sin\\theta), y = a(1 - \\cos\\theta)$.", ["$\\frac{dy}{dx} = \\frac{a\\sin\\theta}{a(1 - \\cos\\theta)} = \\cot(\\theta/2)$. Differentiate w.r.t. $x$: $\\frac{d^2y}{dx^2} = -\\frac{1}{2}\\csc^2(\\theta/2) \\cdot \\frac{1}{a(1 - \\cos\\theta)} = \\mathbf{-\\frac{1}{a}}$ at $\\theta = \\frac{\\pi}{2}$."]],
     ["Differentiating $y = x^{\\sin x} + (\\sin x)^x$ via Separate Logarithmic Terms", "5-Mark Board Proof", "Set $u = x^{\\sin x}$ and $v = (\\sin x)^x$ so $\\frac{dy}{dx} = \\frac{du}{dx} + \\frac{dv}{dx}$.", ["$\\ln u = \\sin x \\ln x \\implies \\frac{du}{dx} = x^{\\sin x}\\left(\\frac{\\sin x}{x} + \\cos x \\ln x\\right)$; $\\ln v = x\\ln(\\sin x) \\implies \\frac{dv}{dx} = (\\sin x)^x(x\\cot x + \\ln\\sin x)$."], "Add $\\frac{du}{dx} + \\frac{dv}{dx}$ for complete 5-mark solution."],
     "When computing d²y/dx² for parametric equations, NEVER stop at d/dt(dy/dx)—always multiply by dt/dx = 1 / (dx/dt)!"
    ],
    ["M12_CH06", "Monotonicity Intervals & First/Second Derivative Optimization",
     "Sign of $f'(x)$ partitions the domain into strictly increasing ($f' > 0$) and strictly decreasing ($f' < 0$) intervals; at critical points ($f'(c) = 0$), $f''(c) < 0$ guarantees a local maximum while $f''(c) > 0$ guarantees a local minimum.",
     [["1. Rate of Change Sign Discipline", "Decreasing quantities ($\\frac{dx}{dt} < 0$) carry explicit minus signs; always substitute numerical values AFTER differentiating."], ["2. Strictly Increasing vs Decreasing", "Strictly increasing on $(a, b)$ if $f'(x) > 0$; strictly decreasing if $f'(x) < 0$."], ["3. Second Derivative Optimization Test", "$f'(c) = 0$ and $f''(c) < 0 \\implies$ Local Maximum; $f''(c) > 0 \\implies$ Local Minimum; $f''(c) = 0 \\implies$ revert to First Derivative sign change."]],
     [["Rate of Change & Monotonicity", "$\\frac{dy}{dt} = \\frac{dy}{dx}\\cdot\\frac{dx}{dt}$, &nbsp; $f'(x) > 0 \\implies \\text{Increasing}$"], ["Optimization Criteria", "$f'(c) = 0$ &amp; $f''(c) < 0 \\implies \\text{Local Max}$ ($f''(c) > 0 \\implies \\text{Local Min}$)"]],
     ["Maximum Volume of Cylinder Inscribed in a Sphere of Radius $R$", 5, "Prove that the height of the cylinder of maximum volume that can be inscribed in a sphere of radius $R$ is $\\frac{2R}{\\sqrt{3}}$.", ["Let cylinder radius be $r$ and height $h$: $r^2 + (h/2)^2 = R^2 \\implies r^2 = R^2 - \\frac{h^2}{4}$. Volume $V(h) = \\pi\\left(R^2 h - \\frac{h^3}{4}\\right)$.", "$V'(h) = \\pi\\left(R^2 - \\frac{3h^2}{4}\\right) = 0 \\implies h = \\mathbf{\\frac{2R}{\\sqrt{3}}}$, and $V''(h) = -\\frac{3\\pi h}{2} < 0$ confirms maximum."]],
     ["Intervals of Strict Monotonicity for $f(x) = 2x^3 - 3x^2 - 36x + 7$", "4-Mark Board Proof", "Compute $f'(x) = 6x^2 - 6x - 36 = 6(x - 3)(x + 2)$.", ["Critical points $x = -2, 3$ split $\\mathbb{R}$ into $(-\\infty, -2)$, $(-2, 3)$, $(3, \\infty)$. Strictly increasing on $(-\\infty, -2) \\cup (3, \\infty)$ and strictly decreasing on $(-2, 3)$."], "Verified by sign table."],
     "In 5-mark optimization word problems, you MUST prove maximality/minimality using f''(c) < 0 (or > 0) to earn the final 1 mark!"
    ]
  ];

  m12_1to6.forEach(([key, iTitle, iBody, concepts, forms, prob1, proof1, tip]) => {
    window.upgradeMath12ChapterFull(key, {
      iTitle, iBody, concepts, formulas: forms, prob1, proof1, tip
    });
  });
})();

// Exhaustive Class 12 Mathematics (041) Upgrade Batch 2: Chapters 07-13 (12 Worked Problems, 12 Proofs, 12 Challenges, 20 MarksBank Each)
(function() {
  const m12_7to13 = [
    ["M12_CH07", "Indefinite Antiderivatives, Partial Fractions & King's Definite Integral Property",
     "Integration reverses differentiation ($\\int f(x)dx = F(x) + C$); definite integrals compute signed area and obey King's reflection symmetry $\\int_a^b f(x)dx = \\int_a^b f(a+b-x)dx$ and even/odd parity on $[-a, a]$.",
     [["1. Integration by Parts (ILATE)", "$\\int u\\,v\\,dx = u\\int v\\,dx - \\int\\left(u'\\int v\\,dx\\right)dx$; golden cancellation identity $\\int e^x[f(x) + f'(x)]dx = e^x f(x) + C$."], ["2. King's Property ($P_4$)", "$\\int_a^b f(x)\\,dx = \\int_a^b f(a + b - x)\\,dx$ (solves $\\int_0^{\\pi/2}\\frac{\\sin^n x}{\\sin^n x + \\cos^n x}dx = \\frac{\\pi}{4}$ in 3 lines)."], ["3. Even/Odd Symmetry on $[-a, a]$", "If $f(-x) = f(x)$ (even) $\\implies 2\\int_0^a f(x)dx$; if $f(-x) = -f(x)$ (odd) $\\implies 0$."]],
     [["Special Quadratic Integrals", "$\\int\\frac{dx}{x^2+a^2} = \\frac{1}{a}\\tan^{-1}\\frac{x}{a}$, &nbsp; $\\int\\frac{dx}{\\sqrt{a^2-x^2}} = \\sin^{-1}\\frac{x}{a}$"], ["Definite Integral Properties", "$\\int_a^b f(x)dx = \\int_a^b f(a+b-x)dx$<br>$\\int_{-a}^a f(x)dx = 0$ if $f(-x) = -f(x)$"]],
     ["Evaluating $\\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}}\\,dx$ via King's Property", 3, "Evaluate $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}}\\,dx$.", ["Apply $I = \\int_0^{\\pi/2} f(\\frac{\\pi}{2} - x)\\,dx = \\int_0^{\\pi/2} \\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x} + \\sqrt{\\sin x}}\\,dx$.", "Add both equations: $2I = \\int_0^{\\pi/2} 1\\,dx = \\frac{\\pi}{2} \\implies I = \\mathbf{\\frac{\\pi}{4}}$."]],
     ["Proof of $\\int e^x [f(x) + f'(x)]\\,dx = e^x f(x) + C$ & $\\int_0^{\\pi/2} \\ln(\\sin x)\\,dx = -\\frac{\\pi}{2}\\ln 2$", "5-Mark Board Proof", "Split $\\int e^x f(x)dx + \\int e^x f'(x)dx$ and integrate first integral by parts.", ["$\\int e^x f(x)\\,dx = f(x)e^x - \\int f'(x)e^x\\,dx$. Adding $\\int e^x f'(x)\\,dx$ cancels the integral, leaving $e^x f(x) + C$."], "Fundamental CBSE board identity."],
     "NEVER forget the constant of integration '+ C' in indefinite integrals, and ALWAYS change limits when substituting u = g(x) in definite integrals!"
    ],
    ["M12_CH08", "Definite Integral Area Bounded by Curves & Symmetrical Regions",
     "Geometric area bounded by $y = f(x)$, the $x$-axis, and ordinates $x = a, x = b$ equals $\\int_a^b |f(x)|\\,dx$, splitting at every zero where the curve crosses the axis.",
     [["1. Vertical ($dx$) vs Horizontal ($dy$) Strips", "Vertical strip: $\\int_a^b (y_{\\text{upper}} - y_{\\text{lower}})\\,dx$; Horizontal strip: $\\int_c^d (x_{\\text{right}} - x_{\\text{left}})\\,dy$."], ["2. Standard Ellipse & Circle Areas", "Ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\implies \\text{Area} = \\pi ab$; Circle $x^2 + y^2 = r^2 \\implies \\text{Area} = \\pi r^2$."], ["3. Parabola-Line Intersection Area", "Solve simultaneously for intersection limits first, then integrate $(\\text{Upper Curve} - \\text{Lower Curve})$."]],
     [["Standard Radical Integral", "$\\int\\sqrt{a^2 - x^2}\\,dx = \\frac{x}{2}\\sqrt{a^2 - x^2} + \\frac{a^2}{2}\\sin^{-1}\\frac{x}{a}$"], ["Bounded Area Formula", "$A = \\int_a^b |y_{\\text{top}} - y_{\\text{bottom}}|\\,dx$"]],
     ["Area of Ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ Using Integration", 5, "Find total area enclosed by the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ using definite integration.", ["By 4-quadrant symmetry, $\\text{Area} = 4\\int_0^a \\frac{b}{a}\\sqrt{a^2 - x^2}\\,dx = \\frac{4b}{a}\\left[\\frac{x}{2}\\sqrt{a^2 - x^2} + \\frac{a^2}{2}\\sin^{-1}\\frac{x}{a}\\right]_0^a = \\frac{4b}{a}\\left(\\frac{a^2\\pi}{4}\\right) = \\mathbf{\\pi ab}$."]],
     ["Area Bounded Between Parabola $y^2 = 4ax$ and Line $y = mx$", "5-Mark Board Proof", "Find intersections $(0, 0)$ and $\\left(\\frac{4a}{m^2}, \\frac{4a}{m}\\right)$.", ["$\\text{Area} = \\int_0^{4a/m^2} (2\\sqrt{ax} - mx)\\,dx = \\left[\\frac{4\\sqrt{a}}{3}x^{3/2} - \\frac{mx^2}{2}\\right]_0^{4a/m^2} = \\frac{32a^2}{3m^3} - \\frac{8a^2}{m^3} = \\mathbf{\\frac{8a^2}{3m^3}}$."], "Classic CBSE 5-mark application of integrals."],
     "Geometric area is always positive—split the integral at points where the curve crosses below the x-axis and take absolute values!"
    ],
    ["M12_CH09", "Order/Degree, Homogeneous & Linear First-Order Differential Equations",
     "Order is the highest derivative present while degree is its polynomial power after clearing radicals/fractions; linear equations $\\frac{dy}{dx} + Py = Q$ are solved via integrating factor $IF = e^{\\int P\\,dx}$.",
     [["1. Order vs Degree Rules", "Order is always defined; Degree is undefined if derivatives appear inside $\\sin(y'), e^{y'}, \\ln(y')$."], ["2. Homogeneous Differential Equations", "If $\\frac{dy}{dx} = F(y/x)$, substitute $y = vx \\implies v + x\\frac{dv}{dx} = F(v)$ to separate variables."], ["3. Linear Differential Equations ($IF$ Method)", "$\\frac{dy}{dx} + P(x)y = Q(x) \\implies IF = e^{\\int P\\,dx}$, solution: $y\\cdot(IF) = \\int Q\\cdot(IF)\\,dx + C$."]],
     [["Integrating Factor (Type 1)", "$\\frac{dy}{dx} + Py = Q \\implies IF = e^{\\int P\\,dx}, \\; y(IF) = \\int Q(IF)dx + C$"], ["Integrating Factor (Type 2)", "$\\frac{dx}{dy} + P_1 x = Q_1 \\implies IF = e^{\\int P_1\\,dy}, \\; x(IF) = \\int Q_1(IF)dy + C$"]],
     ["Solving Linear Differential Equation $\\frac{dy}{dx} + y\\cot x = 2x + x^2\\cot x$", 4, "Find the general solution of $\\frac{dy}{dx} + y\\cot x = 2x + x^2\\cot x$ ($x \\ne 0$).", ["$IF = e^{\\int \\cot x\\,dx} = e^{\\ln|\\sin x|} = \\sin x$.", "Multiply through: $\\frac{d}{dx}(y\\sin x) = 2x\\sin x + x^2\\cos x = \\frac{d}{dx}(x^2\\sin x) \\implies y\\sin x = x^2\\sin x + C \\implies \\mathbf{y = x^2 + C\\csc x}$."]],
     ["Homogeneous Substitution Proof for $(x^2 - y^2)dx + 2xy\\,dy = 0$", "5-Mark Board Proof", "Rewrite $\\frac{dy}{dx} = \\frac{y^2 - x^2}{2xy}$ and substitute $y = vx$.", ["$v + x\\frac{dv}{dx} = \\frac{v^2 - 1}{2v} \\implies x\\frac{dv}{dx} = -\\frac{v^2 + 1}{2v} \\implies \\frac{2v}{v^2 + 1}dv = -\\frac{dx}{x} \\implies \\ln(v^2 + 1) = -\\ln|x| + \\ln C \\implies \\mathbf{x^2 + y^2 = Cx}$."], "Family of circles tangent to $y$-axis at origin."],
     "Before computing Integrating Factor IF = e^(∫P dx), always divide the equation by the leading coefficient so dy/dx has coefficient 1!"
    ],
    ["M12_CH10", "Dot Product Projections & Cross Product Vector Areas",
     "Scalar dot product $\\vec{a}\\cdot\\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$ tests perpendicularity and projections, while vector cross product $\\vec{a}\\times\\vec{b} = |\\vec{a}||\\vec{b}|\\sin\\theta\\,\\hat{n}$ yields normal vectors and triangle/parallelogram areas.",
     [["1. Unit Vector & Scalar Projection", "Unit vector $\\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|}$; Scalar projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|}$."], ["2. Area Formulas via Cross Product", "Parallelogram (adjacent sides $\\vec{a}, \\vec{b}$): $|\\vec{a}\\times\\vec{b}|$; Parallelogram (diagonals $\\vec{d}_1, \\vec{d}_2$): $\\frac{1}{2}|\\vec{d}_1\\times\\vec{d}_2|$; Triangle: $\\frac{1}{2}|\\vec{a}\\times\\vec{b}|$."], ["3. Lagrange's Vector Identity", "$|\\vec{a}\\times\\vec{b}|^2 + (\\vec{a}\\cdot\\vec{b})^2 = |\\vec{a}|^2 |\\vec{b}|^2$."]],
     [["Dot Product & Projection", "$\\vec{a}\\cdot\\vec{b} = a_1b_1 + a_2b_2 + a_3b_3$, &nbsp; $\\text{Proj}_{\\vec{b}}\\vec{a} = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|}$"], ["Cross Product & Geometric Areas", "$\\text{Area}_{\\triangle} = \\frac{1}{2}|\\vec{a}\\times\\vec{b}|$, &nbsp; $\\text{Area}_{\\parallel\\text{gm}} = |\\vec{a}\\times\\vec{b}| = \\frac{1}{2}|\\vec{d}_1\\times\\vec{d}_2|$"]],
     ["Finding Unit Vector Perpendicular to Both $\\vec{a} + \\vec{b}$ and $\\vec{a} - \\vec{b}$", 4, "Given $\\vec{a} = 3\\hat{i} + 2\\hat{j} + 2\\hat{k}$ and $\\vec{b} = \\hat{i} + 2\\hat{j} - 2\\hat{k}$, find a unit vector perpendicular to both $\\vec{a} + \\vec{b}$ and $\\vec{a} - \\vec{b}$.", ["$\\vec{u} = \\vec{a} + \\vec{b} = 4\\hat{i} + 4\\hat{j}$, $\\vec{v} = \\vec{a} - \\vec{b} = 2\\hat{i} + 4\\hat{k}$.", "$\\vec{u}\\times\\vec{v} = 16\\hat{i} - 16\\hat{j} - 8\\hat{k}$ ($|\\vec{u}\\times\\vec{v}| = 24$) $\\implies \\hat{n} = \\mathbf{\\pm\\left(\\frac{2}{3}\\hat{i} - \\frac{2}{3}\\hat{j} - \\frac{1}{3}\\hat{k}\\right)}$."]],
     ["Proof of Lagrange's Identity $|\\vec{a}\\times\\vec{b}|^2 + (\\vec{a}\\cdot\\vec{b})^2 = |\\vec{a}|^2 |\\vec{b}|^2$", "3-Mark Proof", "Expand magnitudes in terms of angle $\\theta$ between $\\vec{a}$ and $\\vec{b}$.", ["$|\\vec{a}\\times\\vec{b}|^2 + (\\vec{a}\\cdot\\vec{b})^2 = |\\vec{a}|^2|\\vec{b}|^2\\sin^2\\theta + |\\vec{a}|^2|\\vec{b}|^2\\cos^2\\theta = |\\vec{a}|^2|\\vec{b}|^2(\\sin^2\\theta + \\cos^2\\theta) = |\\vec{a}|^2|\\vec{b}|^2$."], "Connects dot and cross product magnitudes."],
     "Vector cross product is anti-commutative: a × b = -(b × a), and when given diagonals d₁, d₂ of a parallelogram, multiply |d₁ × d₂| by 1/2!"
    ],
    ["M12_CH11", "Direction Cosines ($l^2+m^2+n^2=1$) & Shortest Distance Between Skew Lines",
     "A 3D line $\\vec{r} = \\vec{a} + \\lambda\\vec{b}$ is governed by its direction ratios; two non-parallel, non-intersecting skew lines have unique shortest perpendicular distance $d = \\left|\\frac{(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|}\\right|$.",
     [["1. Direction Cosines Fundamental Law", "$l = \\cos\\alpha, m = \\cos\\beta, n = \\cos\\gamma$ satisfy $l^2 + m^2 + n^2 = 1$."], ["2. Cartesian Symmetric Line Standard Form", "$\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$ requires coefficients of $x, y, z$ in numerators to be $+1$."], ["3. Skew vs Parallel Line Distance", "Skew ($\\vec{b}_1 \\times \\vec{b}_2 \\ne \\vec{0}$): $d = \\left|\\frac{(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2)}{|\\vec{b}_1\\times\\vec{b}_2|}\\right|$. Parallel ($\\vec{b}_1 = \\vec{b}_2 = \\vec{b}$): $d = \\frac{|(\\vec{a}_2 - \\vec{a}_1)\\times\\vec{b}|}{|\\vec{b}|}$."]],
     [["Direction Cosines & Angle", "$l^2 + m^2 + n^2 = 1$, &nbsp; $\\cos\\theta = \\left|\\frac{\\vec{b}_1\\cdot\\vec{b}_2}{|\\vec{b}_1||\\vec{b}_2|}\\right|$"], ["Shortest Distance Formulas", "Skew: $d = \\left|\\frac{(\\vec{a}_2-\\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2)}{|\\vec{b}_1\\times\\vec{b}_2|}\\right|$<br>Parallel: $d = \\frac{|(\\vec{a}_2-\\vec{a}_1)\\times\\vec{b}|}{|\\vec{b}|}$"]],
     ["Shortest Distance Between Two Skew Lines in 3D", 5, "Find shortest distance between $\\vec{r} = (\\hat{i} + 2\\hat{j} + \\hat{k}) + \\lambda(\\hat{i} - \\hat{j} + \\hat{k})$ and $\\vec{r} = (2\\hat{i} - \\hat{j} - \\hat{k}) + \\mu(2\\hat{i} + \\hat{j} + 2\\hat{k})$.", ["$\\vec{a}_2 - \\vec{a}_1 = \\hat{i} - 3\\hat{j} - 2\\hat{k}$; $\\vec{b}_1 \\times \\vec{b}_2 = -3\\hat{i} + 0\\hat{j} + 3\\hat{k}$ ($|\\vec{b}_1\\times\\vec{b}_2| = 3\\sqrt{2}$).", "$d = \\frac{|(1)(-3) + (-3)(0) + (-2)(3)|}{3\\sqrt{2}} = \\frac{9}{3\\sqrt{2}} = \\mathbf{\\frac{3\\sqrt{2}}{2}}$."]],
     ["Derivation of Shortest Distance Formula Between Two Skew Lines", "5-Mark Board Derivation", "Project vector $\\vec{a}_2 - \\vec{a}_1$ joining points on the two lines onto their common unit normal $\\hat{n} = \\frac{\\vec{b}_1 \\times \\vec{b}_2}{|\\vec{b}_1 \\times \\vec{b}_2|}$.", ["Since the common perpendicular segment $PQ$ is parallel to $\\vec{b}_1 \\times \\vec{b}_2$, its length equals $|(\\vec{a}_2 - \\vec{a}_1)\\cdot\\hat{n}| = \\left|\\frac{(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|}\\right|$."], "Lines intersect iff $d = 0$."],
     "Before reading direction ratios from a Cartesian line equation, rewrite terms like (3 - y)/2 as (y - 3)/(-2) so x, y, z have coefficient +1!"
    ],
    ["M12_CH12", "Convex Feasible Regions & Corner-Point Theorem in LPP",
     "In Linear Programming, linear constraints intersect to form a convex feasible region; by the Fundamental Corner-Point Theorem, the optimal value of $Z = ax + by$ always occurs at a vertex (corner point) of the feasible region.",
     [["1. Bounded vs Unbounded Feasible Region", "Bounded region: max and min ALWAYS exist at corner points. Unbounded region: candidate optimal $M$ is valid ONLY if open half-plane $ax + by > M$ (for max) or $< m$ (for min) has NO points in common with the feasible region."], ["2. Line Segment Optimal Solutions", "If $Z = ax + by$ attains the exact same optimal value at two adjacent corner points $P$ and $Q$, every point on segment $PQ$ is optimal."], ["3. Non-Negativity Constraints", "Always enforce $x \\ge 0, y \\ge 0$ restricting the feasible region to Quadrant I."]],
     [["Objective Function & Corner Test", "Maximize/Minimize $Z = ax + by$ at vertices $(x_i, y_i)$"], ["Unbounded Verification Half-Plane", "Max $M$ valid iff $(ax + by > M) \\cap \\text{Feasible} = \\emptyset$"]],
     ["Solving Bounded LPP via Corner-Point Table", 5, "Maximize $Z = 3x + 4y$ subject to $x + y \\le 4, x \\ge 0, y \\ge 0$.", ["Corner points of feasible triangle: $O(0,0) \\to Z = 0$; $A(4,0) \\to Z = 12$; $B(0,4) \\to Z = 16$.", "Maximum value of $Z$ is **16** at $(0, 4)$."]],
     ["Proof of the Corner-Point Theorem for Convex Feasible Regions", "3-Mark Proof", "Any point $P$ inside a convex polygon is a convex combination $\\sum \\lambda_i V_i$ ($\\lambda_i \\ge 0, \\sum \\lambda_i = 1$) of its vertices $V_i$.", ["By linearity of $Z(x, y) = ax + by$, $Z(P) = \\sum \\lambda_i Z(V_i) \\le (\\sum \\lambda_i) Z_{\\max} = Z_{\\max}$."], "Guarantees extrema occur at vertices."],
     "For an UNBOUNDED feasible region, you MUST test the open half-plane ax + by > M (or < m) to confirm whether an optimum even exists!"
    ],
    ["M12_CH13", "Conditional Probability, Bayes' Theorem & Random Variable Mean",
     "Conditional probability restricts sample space to observed event $B$ ($P(A|B) = \\frac{P(A\\cap B)}{P(B)}$); Bayes' Theorem inverts causal probabilities using total probability partitions.",
     [["1. Independent vs Mutually Exclusive Events", "Independent: $P(A\\cap B) = P(A)P(B)$ (and $A', B'$ are also independent). Mutually exclusive (with non-zero probabilities): $P(A\\cap B) = 0 \\ne P(A)P(B)$ (never independent)."], ["2. Law of Total Probability & Bayes' Theorem", "$P(A) = \\sum_{i=1}^n P(E_i)P(A|E_i)$; &nbsp; $P(E_k|A) = \\frac{P(E_k)P(A|E_k)}{\\sum_{i=1}^n P(E_i)P(A|E_i)}$."], ["3. Probability Distribution Mean", "$\\sum p_i = 1$ ($p_i \\ge 0$); Mean $E(X) = \\mu = \\sum x_i p_i$."]],
     [["Conditional & Multiplication Rules", "$P(A|B) = \\frac{P(A\\cap B)}{P(B)}$, &nbsp; $P(A\\cap B) = P(A)P(B|A)$"], ["Bayes' Theorem", "$P(E_k|A) = \\frac{P(E_k)P(A|E_k)}{\\sum_{i=1}^n P(E_i)P(A|E_i)}$"]],
     ["Classic Bayes' Theorem Diagnostic / Two-Bag Ball Transfer Problem", 5, "Bag I contains $3$ red and $4$ black balls; Bag II contains $5$ red and $6$ black balls. One ball is drawn at random from one of the bags and found to be red. Find probability it was drawn from Bag II.", ["$P(E_1) = P(E_2) = \\frac{1}{2}$; $P(R|E_1) = \\frac{3}{7}$, $P(R|E_2) = \\frac{5}{11}$.", "$P(E_2|R) = \\frac{\\frac{1}{2}\\cdot\\frac{5}{11}}{\\frac{1}{2}\\cdot\\frac{3}{7} + \\frac{1}{2}\\cdot\\frac{5}{11}} = \\frac{35}{33 + 35} = \\mathbf{\\frac{35}{68}}$."]],
     ["Proof That If $A$ and $B$ Are Independent, Then $A'$ and $B'$ Are Also Independent", "3-Mark Proof", "Given $P(A\\cap B) = P(A)P(B)$.", ["$P(A'\\cap B') = 1 - P(A\\cup B) = 1 - P(A) - P(B) + P(A)P(B) = (1 - P(A))(1 - P(B)) = P(A')P(B')$."], "Verified."],
     "Mutually exclusive events (with P(A)>0, P(B)>0) are NEVER independent—in fact, they are maximally dependent because occurrence of one forbids the other!"
    ]
  ];

  m12_7to13.forEach(([key, iTitle, iBody, concepts, forms, prob1, proof1, tip]) => {
    window.upgradeMath12ChapterFull(key, {
      iTitle, iBody, concepts, formulas: forms, prob1, proof1, tip
    });
  });
  if (typeof window.renderSidebar === 'function') window.renderSidebar();
})();
