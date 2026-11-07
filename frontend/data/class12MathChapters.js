// frontend/data/class12MathChapters.js
window.class12MathChapterRegistry = {
  M12_CH01: {
    code: "Chapter 01",
    name: "Relations and Functions",
    weight: 4,
    desc: "Reflexive, symmetric, transitive, equivalence relations, and bijective mappings.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Equivalence & Bijective Mappings</h3><p class="text-xs text-slate-300">Equivalence relations partition sets into disjoint equivalence classes. Bijective functions (both one-one and onto) guarantee invertible mappings.</p></div>'
  },
  M12_CH02: {
    code: "Chapter 02",
    name: "Inverse Trigonometric Functions",
    weight: 4,
    desc: "Principal value branches, domains, ranges, and inverse identity transformations.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Principal Branches</h3><p class="text-xs text-slate-300">Restricting trigonometric domains ensures bijective inverses. Principal value branch of arcsin is [-pi/2, pi/2] and arccos is [0, pi].</p></div>'
  },
  M12_CH03: {
    code: "Chapter 03",
    name: "Matrices",
    weight: 5,
    desc: "Matrix operations, transpose, symmetric and skew-symmetric decomposition.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Linear Transformations & Matrices</h3><p class="text-xs text-slate-300">Matrix multiplication is non-commutative (AB != BA). Any square matrix decomposes into symmetric and skew-symmetric components: A = 0.5(A + A^T) + 0.5(A - A^T).</p></div>'
  },
  M12_CH04: {
    code: "Chapter 04",
    name: "Determinants",
    weight: 5,
    desc: "Minors, cofactors, adjoints, matrix inversion, and solving linear systems.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Adjoints & Matrix Solutions</h3><p class="text-xs text-slate-300">A matrix is invertible if and only if det(A) != 0. The system AX = B has unique solution X = A^(-1) B = (adj(A)/det(A)) * B.</p></div>'
  },
  M12_CH05: {
    code: "Chapter 05",
    name: "Continuity and Differentiability",
    weight: 8,
    desc: "Chain rule, logarithmic differentiation, parametric forms, and second-order derivatives.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Calculus Foundations</h3><p class="text-xs text-slate-300">Differentiability strictly implies continuity. Logarithmic differentiation resolves exponential functions, and parametric derivatives follow dy/dx = (dy/dt)/(dx/dt).</p></div>'
  },
  M12_CH06: {
    code: "Chapter 06",
    name: "Application of Derivatives",
    weight: 6,
    desc: "Rate of change, strictly increasing/decreasing functions, and maxima/minima optimization.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Extrema & Monotonicity</h3><p class="text-xs text-slate-300">Stationary points occur where f\'(x) = 0. The second derivative test f\'\'(x) < 0 confirms local maximum, whereas f\'\'(x) > 0 confirms local minimum.</p></div>'
  },
  M12_CH07: {
    code: "Chapter 07",
    name: "Integrals",
    weight: 9,
    desc: "Indefinite integration, substitution, partial fractions, by parts, and definite properties.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Integral Calculus & King Rule</h3><p class="text-xs text-slate-300">Integration by parts evaluates product integrals. Definite integrals apply the reflection property: integral from a to b of f(x) equals integral from a to b of f(a+b-x).</p></div>'
  },
  M12_CH08: {
    code: "Chapter 08",
    name: "Application of Integrals",
    weight: 6,
    desc: "Area bounded by standard curves, parabolas, ellipses, and intersecting lines.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Quadrature & Bounded Regions</h3><p class="text-xs text-slate-300">Area calculation via integration between upper and lower bounding curves over interval [x1, x2].</p></div>'
  },
  M12_CH09: {
    code: "Chapter 09",
    name: "Differential Equations",
    weight: 6,
    desc: "Order and degree, variable separable method, homogeneous, and first-order linear DEs.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Integrating Factors</h3><p class="text-xs text-slate-300">First-order linear differential equations dy/dx + Py = Q are solved using integrating factor I.F. = exp(integral P dx).</p></div>'
  },
  M12_CH10: {
    code: "Chapter 10",
    name: "Vector Algebra",
    weight: 7,
    desc: "Dot product, cross product, projection of vectors, and geometric interpretations.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Vector Multiplications</h3><p class="text-xs text-slate-300">Scalar dot product measures projection along a vector. Vector cross product generates an orthogonal vector representing area.</p></div>'
  },
  M12_CH11: {
    code: "Chapter 11",
    name: "Three Dimensional Geometry",
    weight: 7,
    desc: "Direction cosines/ratios, vector/Cartesian equations of straight lines, and skew shortest distance.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Lines in 3D Space</h3><p class="text-xs text-slate-300">Shortest distance between two skew lines calculated via scalar triple product of directional displacement and vector cross product.</p></div>'
  },
  M12_CH12: {
    code: "Chapter 12",
    name: "Linear Programming",
    weight: 5,
    desc: "Formulation, constraints, feasible region, and corner-point optimization method.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Corner Point Theorem</h3><p class="text-xs text-slate-300">Optimal values of objective function Z = ax + by over a convex feasible polygon always occur at one of the corner vertices.</p></div>'
  },
  M12_CH13: {
    code: "Chapter 13",
    name: "Probability",
    weight: 8,
    desc: "Conditional probability, multiplication theorem, Bayes theorem, and independent events.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Bayes Theorem</h3><p class="text-xs text-slate-300">Conditional probability updating and reverse reasoning based on mutually exclusive exhaustive hypothesis partitions.</p></div>'
  }
};
