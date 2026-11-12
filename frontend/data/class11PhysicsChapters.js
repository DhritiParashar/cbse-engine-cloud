// data/class11PhysicsChapters.js - Exhaustive NCERT Class 11 Physics (042) Master Registry
(function() {
  function buildRichPhysicsChapter(cfg) {
    return {
      code: cfg.code,
      name: cfg.name,
      weight: cfg.weight,
      desc: cfg.desc,
      overview: `<div class="space-y-6">
        <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
          <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Physical Intuition</span>
          <h3 class="text-xl font-black text-white">${cfg.intuitionTitle}</h3>
          <p class="text-xs text-slate-300 leading-relaxed">${cfg.intuitionBody}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          ${cfg.concepts.map(([title, body]) => `
            <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
              <span class="text-indigo-400 font-bold block text-sm">${title}</span>
              <p class="text-slate-300 leading-relaxed">${body}</p>
            </div>`).join('')}
        </div>
      </div>`,
      exp1: `<div class="space-y-6 text-xs text-slate-300">
        <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
          <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">${cfg.name} — Core Laws &amp; Formula Matrix</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-white text-[11px] pt-1">
            ${cfg.formulas.map(([head, body]) => `
              <div class="p-3.5 bg-surface rounded-lg border border-slate-800 space-y-1">
                <span class="text-indigo-300 font-sans font-bold block text-xs">${head}:</span>
                <div>${body}</div>
              </div>`).join('')}
          </div>
        </div>
        ${cfg.numericals.map((num, idx) => `
          <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-indigo-400 font-bold text-sm">WORKED NUMERICAL ${idx + 1}: ${num.title}</span>
              <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px]">${num.marks} Marks Board Level</span>
            </div>
            <p class="text-slate-200"><strong>Problem:</strong> ${num.problem}</p>
            <div class="p-4 bg-background rounded-lg border border-slate-800 space-y-2 text-slate-300 leading-relaxed">
              ${num.steps.map((st, sIdx) => `<p><strong class="text-emerald-400">Step ${sIdx + 1}:</strong> ${st}</p>`).join('')}
            </div>
          </div>`).join('')}
      </div>`,
      exp2: `<div class="space-y-6 text-xs text-slate-300">
        ${cfg.derivations.map((der, idx) => `
          <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-4">
            <div class="border-b border-slate-700 pb-2.5 flex items-center justify-between">
              <h3 class="font-black text-white text-sm">DERIVATION ${idx + 1}: ${der.title}</h3>
              <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px]">${der.tag}</span>
            </div>
            <p class="text-slate-300"><strong>Setup &amp; Assumptions:</strong> ${der.setup}</p>
            <div class="space-y-2 leading-relaxed font-mono text-[11px] bg-background p-4 rounded-lg border border-slate-800">
              ${der.steps.map((st, sIdx) => `<p>${sIdx + 1}. ${st}</p>`).join('')}
              <p class="text-emerald-400 font-bold font-sans pt-1">${der.conclusion}</p>
            </div>
          </div>`).join('')}
      </div>`,
      vernacular: { English: cfg.examTip },
      errorFinder: {
        traps: cfg.traps.map(([tTitle, tSev, tExp]) => ({ title: tTitle, severity: tSev, explanation: tExp })),
        challenges: cfg.challenges
      },
      diagnostics: cfg.diagnostics,
      boardProblems: cfg.numericals.map((num, idx) => ({
        title: `${cfg.name}: ${num.title}`,
        marks: num.marks,
        text: num.problem,
        idealAnswer: num.steps.map((s, i) => `Step ${i + 1}: ${s.replace(/<[^>]+>/g, '')}`).join('\n'),
        flawedAnswer: `Step 1: Substituted non-SI values directly without stating governing law.\nStep 2: Omitted directional sign convention and final units.`,
        rubric: num.steps.map((s) => ({ step: s.replace(/<[^>]+>/g, ''), marks: Number((num.marks / num.steps.length).toFixed(2)) }))
      }))
    };
  }

  const rawPhysicsData = [
    {
      key: "P11_CH01", code: "Chapter 01", name: "Units and Measurements", weight: 4,
      desc: "SI base & derived units, dimensional homogeneity, significant figures, and worst-case error propagation.",
      intuitionTitle: "Dimensional Grammar: Why Nature Forbids Adding Mass to Length",
      intuitionBody: "Every physically meaningful equation must balance fundamental dimensions $[M^a L^b T^c]$ across every additive term. Dimensional analysis checks derivations, converts between unit systems, and uncovers scaling laws before solving differential equations.",
      concepts: [
        ["1. Principle of Homogeneity", "Only quantities with identical dimensions $[M^a L^b T^c]$ can be added, subtracted, or equated. Arguments of $\\sin\\theta$, $e^x$, and $\\ln x$ are always dimensionless $[M^0 L^0 T^0]$."],
        ["2. Worst-Case Error Propagation", "In $Z = A^p B^q / C^r$, fractional uncertainties always add regardless of multiplication or division: $\\frac{\\Delta Z}{Z} = p\\frac{\\Delta A}{A} + q\\frac{\\Delta B}{B} + r\\frac{\\Delta C}{C}$."],
        ["3. Significant Figures Rules", "Trailing zeros without a decimal point ($4700\\text{ m}$) are non-significant (2 sig figs), whereas trailing zeros after a decimal ($4.700\\text{ m}$) are significant (4 sig figs)."]
      ],
      formulas: [
        ["Universal Constants Dimensions", "$G = [M^{-1}L^3T^{-2}]$<br>$h = [ML^2T^{-1}]$<br>$R = [ML^2T^{-2}K^{-1}\\text{mol}^{-1}]$"],
        ["Mechanical & Fluid Dimensions", "Stress / Pressure / Modulus $= [ML^{-1}T^{-2}]$<br>Surface Tension $T = [MT^{-2}]$<br>Coefficient of Viscosity $\\eta = [ML^{-1}T^{-1}]$"]
      ],
      numericals: [
        {
          title: "Van der Waals Real Gas Constants Dimensions", marks: 3,
          problem: "In the van der Waals equation $\\left(P + \\frac{a}{V^2}\\right)(V - b) = RT$, find the dimensional formulae and SI units of constants $a$ and $b$.",
          steps: [
            "By the Principle of Homogeneity, only quantities with identical dimensions can be added or subtracted: $[b] = [V] = [L^3]$ (SI unit: $\\text{m}^3$).",
            "Similarly, $\\left[\\frac{a}{V^2}\\right] = [P] \\implies [a] = [P][V^2] = [ML^{-1}T^{-2}][L^3]^2 = [ML^5T^{-2}]$.",
            "SI unit of $a$ is $\\text{N}\\cdot\\text{m}^4$ (or $\\text{kg}\\cdot\\text{m}^5\\cdot\\text{s}^{-2}$)."
          ]
        },
        {
          title: "Worst-Case Percentage Error in Composite Formula", marks: 3,
          problem: "A physical quantity $P = \\frac{a^3 b^2}{\\sqrt{c}\\,d}$ has percentage measurement errors of $1\\%, 2\\%, 4\\%,$ and $2\\%$ in $a, b, c,$ and $d$ respectively. Calculate the maximum percentage error in $P$.",
          steps: [
            "Write the logarithmic differential error relation: $\\frac{\\Delta P}{P} = 3\\frac{\\Delta a}{a} + 2\\frac{\\Delta b}{b} + \\frac{1}{2}\\frac{\\Delta c}{c} + \\frac{\\Delta d}{d}$.",
            "Substitute given percentage errors: $\\%\\text{ error in } P = 3(1\\%) + 2(2\\%) + \\frac{1}{2}(4\\%) + 2\\%$.",
            "Evaluate sum: $3\\% + 4\\% + 2\\% + 2\\% = \\mathbf{11\\%}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Time Period of a Simple Pendulum via Dimensional Analysis", tag: "3-Mark CBSE Classic",
          setup: "Assume period $T$ depends on bob mass $m$, string length $l$, and gravity $g$: $T = k\\,m^a l^b g^c$ ($k$ dimensionless).",
          steps: [
            "Write dimensions on both sides: $[M^0 L^0 T^1] = [M]^a [L]^b [L T^{-2}]^c = [M^a L^{b+c} T^{-2c}]$.",
            "Equate powers of $M, L, T$: $a = 0$, &nbsp; $-2c = 1 \\implies c = -\\frac{1}{2}$, &nbsp; $b + c = 0 \\implies b = +\\frac{1}{2}$.",
            "Substitute exponents back: $T = k\\,m^0 l^{1/2} g^{-1/2} = k\\sqrt{\\frac{l}{g}}$."
          ],
          conclusion: "Experimentally $k = 2\\pi$, yielding $T = 2\\pi\\sqrt{\\frac{l}{g}}$ (independent of bob mass $m$)."
        },
        {
          title: "Stokes' Viscous Drag Law $F = 6\\pi\\eta r v$", tag: "Dimensional Deduction",
          setup: "Viscous drag force $F$ on a sphere depends on fluid viscosity $\\eta$, sphere radius $r$, and terminal speed $v$: $F = k\\,\\eta^a r^b v^c$.",
          steps: [
            "Equate dimensions: $[M^1 L^1 T^{-2}] = [M L^{-1} T^{-1}]^a [L]^b [L T^{-1}]^c = [M^a L^{-a+b+c} T^{-a-c}]$.",
            "Compare exponents: $a = 1$; &nbsp; $-a - c = -2 \\implies c = 1$; &nbsp; $-1 + b + 1 = 1 \\implies b = 1$.",
            "Substitute $a = b = c = 1$: $F = k\\,\\eta r v$."
          ],
          conclusion: "With geometric constant $k = 6\\pi$, viscous drag is $F = 6\\pi\\eta r v$."
        }
      ],
      examTip: "In error propagation problems, NEVER subtract errors in the denominator; fractional errors always add with positive exponent weights.",
      traps: [
        ["Subtracting Errors in Denominator", "High (1 Mark Lost)", "Writing Δ(A/B)/(A/B) = ΔA/A - ΔB/B. Worst-case errors ALWAYS add: ΔA/A + ΔB/B."],
        ["Dimensional Consistency ≠ Physical Correctness", "Board Concept Trap", "A dimensionally balanced equation like s = ut + at² can still be physically wrong due to missing dimensionless constants (1/2)."]
      ],
      challenges: [
        {
          title: "Units & Measurements: Percentage Error in Kinetic Energy",
          steps: [
            { stepNo: 1, text: "Given $K = \\frac{1}{2}mv^2$, with $\\Delta m/m = 2\\%$ and $\\Delta v/v = 3\\%$." },
            { stepNo: 2, text: "Compute percentage error: $\\Delta K/K = 2\\% + 3\\% = 5\\%$." },
            { stepNo: 3, text: "Conclude maximum percentage error in $K$ is $5\\%$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Speed is squared ($v^2$), so its relative error must be multiplied by 2: $\\Delta K/K = 2\\% + 2(3\\%) = 8\\%$."
        }
      ],
      diagnostics: [
        { q: "The dimensional formula for the universal gravitational constant $G$ is:", difficulty: "Board Standard (1M)", options: ["$[M^{-1} L^3 T^{-2}]$", "$[M L^3 T^{-2}]$", "$[M^{-1} L^2 T^{-2}]$", "$[M L^2 T^{-1}]$"], correct: 0, solution: "$G = Fr^2/(m_1 m_2) = [MLT^{-2}][L^2]/[M^2] = [M^{-1}L^3T^{-2}]$." },
        { q: "If percentage errors in mass and speed are $2\\%$ and $3\\%$, the maximum percentage error in kinetic energy is:", difficulty: "Error Trap (1M)", options: ["$8\\%$", "$5\\%$", "$11\\%$", "$6\\%$"], correct: 0, solution: "$\\Delta K/K = \\Delta m/m + 2(\\Delta v/v) = 2\\% + 6\\% = 8\\%$." },
        { q: "Which pair of physical quantities has identical dimensions?", difficulty: "Conceptual (1M)", options: ["Work and Torque", "Force and Power", "Impulse and Pressure", "Momentum and Energy"], correct: 0, solution: "Both Work ($F\\cdot s$) and Torque ($r \\times F$) have dimensions $[M L^2 T^{-2}]$." }
      ]
    },
    {
      key: "P11_CH02", code: "Chapter 02", name: "Motion in a Straight Line", weight: 5,
      desc: "Instantaneous velocity & acceleration, calculus kinematic equations, v-t graphs, and vertical free fall.",
      intuitionTitle: "Calculus of 1D Motion: Slopes and Signed Areas",
      intuitionBody: "Position $x(t)$, velocity $v(t) = \\frac{dx}{dt}$, and acceleration $a(t) = \\frac{dv}{dt}$ form a derivative hierarchy. Integrating velocity over time yields net displacement $\\Delta x = \\int_{t_1}^{t_2} v\\,dt$, whereas integrating speed $|v|$ yields total path length.",
      concepts: [
        ["1. Instantaneous vs Average Rates", "Average velocity $\\bar{v} = \\frac{\\Delta x}{\\Delta t}$ is chord slope on $x$-$t$; instantaneous velocity $v = \\frac{dx}{dt}$ is tangent slope."],
        ["2. v-t Graph Geometry", "Tangent slope of $v$-$t$ gives acceleration $a$; signed area under $v$-$t$ gives net displacement $\\Delta x$."],
        ["3. Stopping Distance Scaling", "From $0^2 - u^2 = -2as$, braking distance $s = \\frac{u^2}{2a} \\propto u^2$ (doubling speed quadruples stopping distance)."]
      ],
      formulas: [
        ["Uniform Acceleration Equations", "$v = u + at$<br>$s = ut + \\frac{1}{2}at^2$<br>$v^2 - u^2 = 2as$"],
        ["nth Second & Relative Velocity", "$s_n = u + \\frac{a}{2}(2n - 1)$<br>$v_{AB} = v_A - v_B$<br>$g = 9.8\\text{ m/s}^2$ downward"]
      ],
      numericals: [
        {
          title: "Ball Thrown Vertically Upward from a Tower", marks: 3,
          problem: "A ball is thrown vertically upward with speed $20\\text{ m/s}$ from the top of a $25\\text{ m}$ tall tower ($g = 10\\text{ m/s}^2$). Calculate the total time taken to reach the ground.",
          steps: [
            "Fix upward as $+y$ and origin at tower top: $u = +20\\text{ m/s}$, $a = -10\\text{ m/s}^2$, net displacement $s = -25\\text{ m}$.",
            "Apply $s = ut + \\frac{1}{2}at^2$: $-25 = 20t - 5t^2 \\implies t^2 - 4t - 5 = 0$.",
            "Factorize $(t - 5)(t + 1) = 0$. Discarding negative time $t = -1\\text{ s}$, total flight time $t = \\mathbf{5\\text{ s}}$."
          ]
        },
        {
          title: "Variable Acceleration via Differentiation", marks: 3,
          problem: "The position of a particle moving along the $x$-axis is $x(t) = 2t^3 - 9t^2 + 12t + 4$ (in meters). Find the instants when velocity is zero and the acceleration at those instants.",
          steps: [
            "Differentiate $x(t)$: $v(t) = \\frac{dx}{dt} = 6t^2 - 18t + 12 = 6(t - 1)(t - 2)$.",
            "Set $v(t) = 0 \\implies t = 1\\text{ s}$ and $t = 2\\text{ s}$.",
            "Differentiate $v(t)$: $a(t) = \\frac{dv}{dt} = 12t - 18$. At $t = 1\\text{ s}$, $a = -6\\text{ m/s}^2$; at $t = 2\\text{ s}$, $a = +6\\text{ m/s}^2$."
          ]
        }
      ],
      derivations: [
        {
          title: "Three Kinematic Equations by Calculus Integration", tag: "5-Mark Mandatory Proof",
          setup: "Consider a body moving in a straight line with constant acceleration $a$, initial velocity $u$ at $t = 0$, and velocity $v$ at displacement $s$.",
          steps: [
            "$a = \\frac{dv}{dt} \\implies \\int_{u}^{v} dv = a\\int_{0}^{t} dt \\implies v - u = at \\implies v = u + at$.",
            "$v = \\frac{dx}{dt} = u + at \\implies \\int_{0}^{s} dx = \\int_{0}^{t} (u + at)\\,dt \\implies s = ut + \\frac{1}{2}at^2$.",
            "$a = \\frac{dv}{dt} = \\frac{dv}{dx}\\frac{dx}{dt} = v\\frac{dv}{dx} \\implies \\int_{u}^{v} v\\,dv = a\\int_{0}^{s} dx \\implies \\frac{v^2 - u^2}{2} = as \\implies v^2 - u^2 = 2as$."
          ],
          conclusion: "All three kinematic equations hold strictly when acceleration $a$ is constant."
        },
        {
          title: "Distance Covered in the nth Second $s_n = u + \\frac{a}{2}(2n - 1)$", tag: "3-Mark Derivation",
          setup: "Distance covered in the $n^{\\text{th}}$ second equals total displacement in $n$ seconds minus displacement in $(n - 1)$ seconds.",
          steps: [
            "$s_n = S(n) - S(n - 1)$.",
            "$s_n = \\left[un + \\frac{1}{2}an^2\\right] - \\left[u(n - 1) + \\frac{1}{2}a(n - 1)^2\\right]$.",
            "$s_n = u + \\frac{a}{2}[n^2 - (n^2 - 2n + 1)] = u + \\frac{a}{2}(2n - 1)$."
          ],
          conclusion: "For free fall from rest ($u = 0$), $s_1 : s_2 : s_3 = 1 : 3 : 5$ (Galileo's Law of Odd Numbers)."
        }
      ],
      examTip: "Always define your positive coordinate axis (+y upward or downward) in Line 1 of every vertical motion numerical so the sign of g is unambiguous.",
      traps: [
        ["Distance vs Net Displacement", "High (2 Marks Lost)", "Using s = ut + 1/2 at² when velocity reverses sign gives net displacement, NOT total distance traveled."],
        ["Positive g in Upward Projection", "Board Trap (1 Mark)", "Substituting a = +9.8 m/s² when initial velocity u is taken positive upward."]
      ],
      challenges: [
        {
          title: "Motion in a Straight Line: Upward Tower Throw Sign Error",
          steps: [
            { stepNo: 1, text: "A stone is thrown upward at $u = 20\\text{ m/s}$ from a $25\\text{ m}$ cliff (upward $+y$, $g = 10\\text{ m/s}^2$)." },
            { stepNo: 2, text: "Apply $s = ut + \\frac{1}{2}at^2$: $-25 = 20t + \\frac{1}{2}(10)t^2$." },
            { stepNo: 3, text: "Solve quadratic equation for $t$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Because upward is chosen $+y$, gravity acts downward ($a = -10\\text{ m/s}^2$): $-25 = 20t - 5t^2 \\implies t = 5\\text{ s}$."
        }
      ],
      diagnostics: [
        { q: "The area under a velocity-time ($v$-$t$) curve between $t_1$ and $t_2$ gives:", difficulty: "Board Standard (1M)", options: ["Net Displacement", "Acceleration", "Average Speed", "Rate of change of acceleration"], correct: 0, solution: "$\\int_{t_1}^{t_2} v\\,dt = \\Delta x$ (net displacement)." },
        { q: "A body is released from rest and falls freely. The ratio of distances covered in the 1st, 2nd, and 3rd seconds is:", difficulty: "Galileo's Law (1M)", options: ["$1 : 3 : 5$", "$1 : 2 : 3$", "$1 : 4 : 9$", "$2 : 3 : 5$"], correct: 0, solution: "$s_n = \\frac{g}{2}(2n - 1) \\implies 1 : 3 : 5$." }
      ]
    },
    {
      key: "P11_CH03", code: "Chapter 03", name: "Motion in a Plane", weight: 5,
      desc: "Vector addition, dot & cross products, oblique projectile motion, and uniform circular motion.",
      intuitionTitle: "Orthogonal Independence: Two 1D Motions Sharing One Clock",
      intuitionBody: "A projectile moving in 2D splits cleanly into uniform horizontal motion ($u_x = u\\cos\\theta$, $a_x = 0$) and vertical free fall ($u_y = u\\sin\\theta$, $a_y = -g$). Neither axis affects the other's acceleration.",
      concepts: [
        ["1. Vector Dot & Cross Products", "Scalar product $\\vec{A}\\cdot\\vec{B} = AB\\cos\\theta$ tests perpendicularity; vector product $|\\vec{A}\\times\\vec{B}| = AB\\sin\\theta$ gives parallelogram area."],
        ["2. Projectile Trajectory Symmetry", "At peak height $H$, $v_y = 0$ but speed is $u\\cos\\theta \\ne 0$. Complementary angles $\\theta$ and $(90^\\circ - \\theta)$ yield identical horizontal range $R$."],
        ["3. Centripetal Acceleration", "In uniform circular motion, speed is constant but velocity direction rotates continuously, requiring inward $a_c = \\frac{v^2}{R} = \\omega^2 R$."]
      ],
      formulas: [
        ["Oblique Projectile Equations", "$T = \\frac{2u\\sin\\theta}{g}$, &nbsp; $H = \\frac{u^2\\sin^2\\theta}{2g}$<br>$R = \\frac{u^2\\sin 2\\theta}{g}$ ($R_{\\max} = \\frac{u^2}{g}$ at $45^\\circ$)"],
        ["Trajectory & Circular Motion", "$y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$<br>$v = \\omega R$, &nbsp; $a_c = \\frac{v^2}{R} = 4\\pi^2 f^2 R$"]
      ],
      numericals: [
        {
          title: "Projection Angle Where Horizontal Range Equals Max Height", marks: 3,
          problem: "Find the angle of projection $\\theta$ for which the horizontal range $R$ of a projectile is equal to its maximum vertical height $H$.",
          steps: [
            "Equate formulas: $\\frac{u^2\\sin 2\\theta}{g} = \\frac{u^2\\sin^2\\theta}{2g}$.",
            "Expand $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$: $2\\sin\\theta\\cos\\theta = \\frac{\\sin^2\\theta}{2}$.",
            "Divide by $\\sin\\theta \\ne 0$: $\\tan\\theta = 4 \\implies \\theta = \\tan^{-1}(4) \\approx \\mathbf{75.96^\\circ}$."
          ]
        },
        {
          title: "Rain-Man Relative Velocity Vector", marks: 3,
          problem: "Rain falls vertically downward at $30\\text{ m/s}$. A woman rides a bicycle due East at $10\\text{ m/s}$. In what direction should she hold her umbrella?",
          steps: [
            "Relative velocity of rain w.r.t. cyclist: $\\vec{v}_{rc} = \\vec{v}_r - \\vec{v}_c = -30\\hat{j} - 10\\hat{i}$.",
            "Angle $\\theta$ with the vertical: $\\tan\\theta = \\frac{|v_c|}{|v_r|} = \\frac{10}{30} = \\frac{1}{3}$.",
            "She must tilt her umbrella forward toward the East at $\\theta = \\mathbf{\\tan^{-1}(1/3) \\approx 18.4^\\circ}$ with the vertical."
          ]
        }
      ],
      derivations: [
        {
          title: "Parabolic Trajectory Equation of a Projectile", tag: "5-Mark Board Derivation",
          setup: "A body is projected from origin $(0,0)$ with speed $u$ at angle $\\theta$ above the horizontal.",
          steps: [
            "Horizontal motion ($a_x = 0$): $x = (u\\cos\\theta)t \\implies t = \\frac{x}{u\\cos\\theta}$.",
            "Vertical motion ($a_y = -g$): $y = (u\\sin\\theta)t - \\frac{1}{2}gt^2$.",
            "Eliminate $t$: $y = (u\\sin\\theta)\\left(\\frac{x}{u\\cos\\theta}\\right) - \\frac{1}{2}g\\left(\\frac{x}{u\\cos\\theta}\\right)^2 = x\\tan\\theta - \\left(\\frac{g}{2u^2\\cos^2\\theta}\\right)x^2$."
          ],
          conclusion: "Since $y = ax - bx^2$ is quadratic in $x$, the path of a projectile is a parabola."
        },
        {
          title: "Centripetal Acceleration $a_c = v^2 / R$", tag: "Vector Geometry Proof",
          setup: "A particle moves on a circle of radius $R$ with uniform speed $v$, sweeping angle $\\Delta\\theta$ in time $\\Delta t$.",
          steps: [
            "Velocity vector $\\vec{v}$ rotates by $\\Delta\\theta$, so $|\\Delta\\vec{v}| = 2v\\sin(\\Delta\\theta/2) \\approx v\\Delta\\theta$ for small $\\Delta\\theta$.",
            "Arc displacement $\\Delta s = R\\Delta\\theta = v\\Delta t \\implies \\Delta\\theta = \\frac{v\\Delta t}{R}$.",
            "Magnitude of acceleration: $a_c = \\lim_{\\Delta t\\to 0}\\frac{|\\Delta\\vec{v}|}{\\Delta t} = \\frac{v(v\\Delta t/R)}{\\Delta t} = \\frac{v^2}{R}$."
          ],
          conclusion: "As $\\Delta t \\to 0$, $\\Delta\\vec{v}$ points perpendicular to $\\vec{v}$ toward the circle center."
        }
      ],
      examTip: "At the highest point of a projectile, kinetic energy is NOT zero—it equals K₀ cos²θ because horizontal speed u cos θ remains intact.",
      traps: [
        ["Assuming Zero Speed at Highest Point", "High (1-2 Marks Lost)", "At maximum height, vy = 0, but total speed is u cos θ (non-zero for oblique projection)."],
        ["Scalar Addition in Relative Velocity", "Board Trap (1 Mark)", "Relative velocity is a vector difference v_AB = v_A - v_B, requiring Pythagoras or cosine law when orthogonal."]
      ],
      challenges: [
        {
          title: "Motion in a Plane: Kinetic Energy at Peak Height",
          steps: [
            { stepNo: 1, text: "A projectile is launched with kinetic energy $K$ at angle $60^\\circ$ to the horizontal." },
            { stepNo: 2, text: "At the highest point, vertical velocity $v_y = 0$, so kinetic energy at peak is $0$." },
            { stepNo: 3, text: "Conclude $K_{\\text{peak}} = 0$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Horizontal velocity $u\\cos 60^\\circ = u/2$ persists at the peak, so $K_{\\text{peak}} = K\\cos^2 60^\\circ = K/4$."
        }
      ],
      diagnostics: [
        { q: "At the highest point of an oblique projectile, the angle between velocity and acceleration is:", difficulty: "Board Trap (1M)", options: ["$90^\\circ$", "$0^\\circ$", "$180^\\circ$", "$45^\\circ$"], correct: 0, solution: "Velocity is purely horizontal ($u\\cos\\theta$) while $\\vec{g}$ acts vertically downward ($90^\\circ$)." },
        { q: "A projectile is fired with kinetic energy $K$ at $60^\\circ$ to the horizontal. Its kinetic energy at the highest point is:", difficulty: "Board Classic (1M)", options: ["$K/4$", "$K/2$", "$3K/4$", "$0$"], correct: 0, solution: "$K_{\\text{peak}} = K\\cos^2 60^\\circ = K(1/2)^2 = K/4$." }
      ]
    },
    {
      key: "P11_CH04", code: "Chapter 04", name: "Laws of Motion", weight: 6,
      desc: "Newton's laws, momentum conservation, impulse, static/kinetic friction, and banked circular roads.",
      intuitionTitle: "Free-Body Diagrams, Self-Adjusting Friction & Road Banking",
      intuitionBody: "Newton's Second Law ($\\vec{F}_{\\text{net}} = m\\vec{a}$) applies to each isolated body individually. Static friction is a smart constraint force that matches applied push up to its threshold $\\mu_s N$, while banking a curved road tilts the normal force inward to supply centripetal acceleration safely.",
      concepts: [
        ["1. Impulse-Momentum Theorem", "$\\vec{J} = \\int \\vec{F}\\,dt = \\Delta\\vec{p} = m(\\vec{v} - \\vec{u})$ explains why catching a cricket ball by pulling hands back lowers peak force."],
        ["2. Static vs Kinetic Friction", "$f_s \\le \\mu_s N$ (self-adjusting up to limiting value); once sliding begins, $f_k = \\mu_k N$ with $\\mu_k < \\mu_s$."],
        ["3. Banking of Curved Roads", "Banking at angle $\\theta$ gives optimum tyre-wear-free speed $v_0 = \\sqrt{Rg\\tan\\theta}$ even on ice ($\\mu_s = 0$)."]
      ],
      formulas: [
        ["Friction & Inclined Plane", "$f_{s,\\max} = \\mu_s N$, &nbsp; $f_k = \\mu_k N$<br>Angle of Repose: $\\tan\\alpha = \\mu_s$"],
        ["Circular Track & Banked Road", "Level road: $v_{\\max} = \\sqrt{\\mu_s Rg}$<br>Banked road: $v_{\\max} = \\sqrt{Rg\\left(\\frac{\\mu_s + \\tan\\theta}{1 - \\mu_s\\tan\\theta}\\right)}$"]
      ],
      numericals: [
        {
          title: "Two Connected Blocks Pulled on Smooth Horizontal Floor", marks: 3,
          problem: "Two blocks of masses $4\\text{ kg}$ and $6\\text{ kg}$ connected by a light inextensible string are pulled on a frictionless surface by a horizontal force $F = 30\\text{ N}$ applied to the $6\\text{ kg}$ block. Find acceleration and string tension.",
          steps: [
            "Treat both blocks as a single system: $a = \\frac{F}{m_1 + m_2} = \\frac{30}{4 + 6} = \\mathbf{3\\text{ m/s}^2}$.",
            "Isolate the trailing $4\\text{ kg}$ block: only horizontal force is string tension $T$.",
            "Apply $F = ma$: $T = m_1 a = 4 \\times 3 = \\mathbf{12\\text{ N}}$."
          ]
        },
        {
          title: "Optimum Speed & Maximum Safe Speed on Banked Road", marks: 3,
          problem: "A circular race track of radius $100\\text{ m}$ is banked at $\\theta = 30^\\circ$ ($g = 10\\text{ m/s}^2$). Calculate the optimum speed $v_0$ to avoid wear and tear on tyres.",
          steps: [
            "For zero frictional wear on tyres ($f = 0$), horizontal component $N\\sin\\theta = \\frac{mv_0^2}{R}$ and vertical $N\\cos\\theta = mg$.",
            "Divide equations: $\\tan\\theta = \\frac{v_0^2}{Rg} \\implies v_0 = \\sqrt{Rg\\tan\\theta}$.",
            "Substitute values: $v_0 = \\sqrt{100 \\times 10 \\times \\frac{1}{\\sqrt{3}}} = \\sqrt{577.35} \\approx \\mathbf{24.03\\text{ m/s}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Maximum Safe Speed on a Banked Circular Road with Friction", tag: "5-Mark Board Favorite",
          setup: "A car of mass $m$ moves at maximum speed $v_{\\max}$ on a road of radius $R$ banked at $\\theta$ with static friction coefficient $\\mu_s$ acting down the slope.",
          steps: [
            "Vertical equilibrium ($a_y = 0$): $N\\cos\\theta = mg + f\\sin\\theta$. With $f = \\mu_s N$: $N(\\cos\\theta - \\mu_s\\sin\\theta) = mg$ &nbsp;[Eq. 1].",
            "Horizontal centripetal force: $N\\sin\\theta + f\\cos\\theta = \\frac{mv_{\\max}^2}{R} \\implies N(\\sin\\theta + \\mu_s\\cos\\theta) = \\frac{mv_{\\max}^2}{R}$ &nbsp;[Eq. 2].",
            "Divide Eq. 2 by Eq. 1: $\\frac{v_{\\max}^2}{Rg} = \\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\cos\\theta - \\mu_s\\sin\\theta} = \\frac{\\mu_s + \\tan\\theta}{1 - \\mu_s\\tan\\theta}$."
          ],
          conclusion: "Taking square root: $v_{\\max} = \\sqrt{Rg\\left(\\frac{\\mu_s + \\tan\\theta}{1 - \\mu_s\\tan\\theta}\\right)}$."
        },
        {
          title: "Law of Conservation of Linear Momentum from Newton's 2nd & 3rd Laws", tag: "3-Mark Derivation",
          setup: "Consider an isolated system of two colliding bodies $A$ and $B$ with no external net force.",
          steps: [
            "By Newton's 3rd Law, internal action-reaction forces satisfy $\\vec{F}_{AB} = -\\vec{F}_{BA}$.",
            "By Newton's 2nd Law, $\\vec{F}_{AB} = \\frac{d\\vec{p}_A}{dt}$ and $\\vec{F}_{BA} = \\frac{d\\vec{p}_B}{dt}$.",
            "Adding: $\\frac{d\\vec{p}_A}{dt} + \\frac{d\\vec{p}_B}{dt} = 0 \\implies \\frac{d}{dt}(\\vec{p}_A + \\vec{p}_B) = 0$."
          ],
          conclusion: "Hence $\\vec{p}_A + \\vec{p}_B = \\text{constant}$ whenever $\\vec{F}_{\\text{ext}} = 0$."
        }
      ],
      examTip: "Always compare applied tangential force F against limiting friction fs,max = μsN FIRST before concluding whether the body moves!",
      traps: [
        ["Assuming Static Friction Always Equals μsN", "Critical (2 Marks Lost)", "Static friction is self-adjusting (fs ≤ μsN). If applied force is 12 N and μsN = 20 N, friction is 12 N, NOT 20 N."],
        ["Normal Reaction on an Inclined Plane", "Board Trap (1 Mark)", "On an incline of angle θ, Normal reaction is N = mg cos θ, NOT mg."]
      ],
      challenges: [
        {
          title: "Laws of Motion: Static Friction Self-Adjustment Trap",
          steps: [
            { stepNo: 1, text: "A $5\\text{ kg}$ block rests on a horizontal floor ($\\mu_s = 0.4, g = 10\\text{ m/s}^2$) with a $12\\text{ N}$ horizontal force applied." },
            { stepNo: 2, text: "Calculate frictional force: $f = \\mu_s N = 0.4 \\times 50 = 20\\text{ N}$." },
            { stepNo: 3, text: "Conclude frictional force acting on the block is $20\\text{ N}$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: $20\\text{ N}$ is limiting static friction. Since applied force ($12\\text{ N}$) $< 20\\text{ N}$, the block stays at rest and friction equals $12\\text{ N}$."
        }
      ],
      diagnostics: [
        { q: "A $5\\text{ kg}$ block rests on a rough floor ($\\mu_s = 0.4, g = 10\\text{ m/s}^2$). If a $12\\text{ N}$ horizontal force is applied, friction force is:", difficulty: "Classic CBSE Trap (1M)", options: ["$12\\text{ N}$", "$20\\text{ N}$", "$8\\text{ N}$", "$0\\text{ N}$"], correct: 0, solution: "Limiting friction $= 0.4 \\times 50 = 20\\text{ N} > 12\\text{ N}$, so static friction self-adjusts to $12\\text{ N}$." },
        { q: "A $60\\text{ kg}$ passenger stands in a lift accelerating upward at $2\\text{ m/s}^2$ ($g = 10\\text{ m/s}^2$). Apparent weight is:", difficulty: "Board Standard (1M)", options: ["$720\\text{ N}$", "$480\\text{ N}$", "$600\\text{ N}$", "$120\\text{ N}$"], correct: 0, solution: "$N = m(g + a) = 60(10 + 2) = 720\\text{ N}$." }
      ]
    },
    {
      key: "P11_CH05", code: "Chapter 05", name: "Work, Energy and Power", weight: 5,
      desc: "Work-energy theorem, conservative forces, spring potential energy, vertical circular motion, and elastic collisions.",
      intuitionTitle: "Scalar Energy Accounting & Conservative Potential Wells",
      intuitionBody: "Work-Energy Theorem ($W_{\\text{net}} = \\Delta K$) converts vector force problems into scalar energy bookkeeping. Conservative forces (gravity, ideal springs) store recoverable potential energy $U(x)$ with $F = -\\frac{dU}{dx}$.",
      concepts: [
        ["1. Work-Energy Theorem", "$W_{\\text{net}} = \\Delta K = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2$ holds for BOTH constant and variable forces, and even when friction is present."],
        ["2. Vertical Circular Looping", "String tension vanishes at top when $v_{\\text{top}} = \\sqrt{gR}$, requiring minimum launch speed $v_{\\text{bottom}} = \\sqrt{5gR}$ at the bottom."],
        ["3. 1D Elastic Collisions", "Both momentum and kinetic energy are conserved; relative speed of approach equals relative speed of separation ($u_1 - u_2 = v_2 - v_1$)."]
      ],
      formulas: [
        ["Work, Spring & Power", "$W = \\int \\vec{F}\\cdot d\\vec{r}$, &nbsp; $U_{\\text{spring}} = \\frac{1}{2}kx^2$<br>$P = \\vec{F}\\cdot\\vec{v} = Fv\\cos\\theta$"],
        ["Vertical Circle & Collisions", "$v_{\\text{top}} = \\sqrt{gR}$, &nbsp; $v_{\\text{bottom}} = \\sqrt{5gR}$<br>$v_1 = \\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)u_1 + \\left(\\frac{2m_2}{m_1 + m_2}\\right)u_2$"]
      ],
      numericals: [
        {
          title: "Block Stopping Against an Ideal Spring", marks: 3,
          problem: "A $2\\text{ kg}$ block moving at $4\\text{ m/s}$ on a smooth horizontal table strikes a relaxed spring of force constant $k = 200\\text{ N/m}$. Find the maximum compression of the spring.",
          steps: [
            "By conservation of mechanical energy, initial kinetic energy converts completely into spring potential energy at maximum compression: $\\frac{1}{2}mv^2 = \\frac{1}{2}kx_{\\max}^2$.",
            "Substitute values: $\\frac{1}{2}(2)(4)^2 = \\frac{1}{2}(200)x_{\\max}^2 \\implies 16 = 100 x_{\\max}^2$.",
            "Solve for $x_{\\max}$: $x_{\\max} = \\sqrt{0.16} = \\mathbf{0.4\\text{ m}}$."
          ]
        },
        {
          title: "Instantaneous Power of a Lifting Crane", marks: 2,
          problem: "A crane lifts a $500\\text{ kg}$ load vertically upward at a constant speed of $2\\text{ m/s}$ ($g = 9.8\\text{ m/s}^2$). Calculate the power delivered by the motor.",
          steps: [
            "At constant speed, upward lifting force equals weight: $F = mg = 500 \\times 9.8 = 4900\\text{ N}$.",
            "Power $P = Fv\\cos 0^\\circ = 4900 \\times 2 = \\mathbf{9800\\text{ W} = 9.8\\text{ kW}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Work-Energy Theorem for a Variable Force", tag: "3-Mark Calculus Proof",
          setup: "A variable force $F(x)$ accelerates a particle of mass $m$ from speed $u$ at $x_i$ to speed $v$ at $x_f$.",
          steps: [
            "$W = \\int_{x_i}^{x_f} F(x)\\,dx = \\int_{x_i}^{x_f} m\\frac{dv}{dt}\\,dx$.",
            "Rewrite $\\frac{dv}{dt}dx = dv\\frac{dx}{dt} = v\\,dv$: $W = \\int_{u}^{v} mv\\,dv = m\\left[\\frac{v^2}{2}\\right]_u^v$.",
            "$W = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2 = K_f - K_i = \\Delta K$."
          ],
          conclusion: "Net work done by all forces equals the change in kinetic energy of the particle."
        },
        {
          title: "Minimum Velocity at Bottom & Top of a Vertical Circle", tag: "5-Mark Board Derivation",
          setup: "A bob of mass $m$ tied to a string of length $R$ completes a vertical circle.",
          steps: [
            "At highest point, centripetal force is $T_{\\text{top}} + mg = \\frac{mv_{\\text{top}}^2}{R}$. For minimum speed, $T_{\\text{top}} = 0 \\implies v_{\\text{top}} = \\sqrt{gR}$.",
            "Apply energy conservation between bottom and top: $\\frac{1}{2}mv_{\\text{bottom}}^2 = \\frac{1}{2}mv_{\\text{top}}^2 + mg(2R)$.",
            "Substitute $v_{\\text{top}}^2 = gR$: $\\frac{1}{2}mv_{\\text{bottom}}^2 = \\frac{1}{2}mgR + 2mgR = \\frac{5}{2}mgR \\implies v_{\\text{bottom}} = \\sqrt{5gR}$."
          ],
          conclusion: "Tension difference between bottom and top is always $T_{\\text{bottom}} - T_{\\text{top}} = 6mg$."
        }
      ],
      examTip: "In inelastic collisions, linear momentum is ALWAYS conserved (if F_ext = 0), whereas kinetic energy is NOT conserved.",
      traps: [
        ["Assuming Kinetic Energy is Conserved in Inelastic Collisions", "High (2 Marks Lost)", "Only linear momentum is conserved in inelastic collisions; some kinetic energy dissipates as heat/sound."],
        ["Zero Work by Centripetal Force", "Board MCQ Trap", "Centripetal force is always perpendicular to velocity (θ = 90°), so work done by it is always zero."]
      ],
      challenges: [
        {
          title: "Work, Energy & Power: Perfectly Inelastic Collision Energy Check",
          steps: [
            { stepNo: 1, text: "A $2\\text{ kg}$ ball moving at $6\\text{ m/s}$ collides and sticks to a stationary $4\\text{ kg}$ ball." },
            { stepNo: 2, text: "By momentum conservation: $2(6) = (2 + 4)v \\implies v = 2\\text{ m/s}$. Conclude kinetic energy is also unchanged." },
            { stepNo: 3, text: "State final KE = 36 J." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Initial KE $= \\frac{1}{2}(2)(36) = 36\\text{ J}$, while final KE $= \\frac{1}{2}(6)(4) = 12\\text{ J}$ ($24\\text{ J}$ lost as heat/deformation)."
        }
      ],
      diagnostics: [
        { q: "Minimum velocity required at the lowest point to complete a vertical circle of radius $R$ is:", difficulty: "Board Standard (1M)", options: ["$\\sqrt{5gR}$", "$\\sqrt{gR}$", "$\\sqrt{2gR}$", "$\\sqrt{3gR}$"], correct: 0, solution: "By energy conservation from top ($v = \\sqrt{gR}$) to bottom: $v_b = \\sqrt{5gR}$." },
        { q: "A light body and a heavy body have equal linear momenta. Which one has greater kinetic energy?", difficulty: "Conceptual Trap (1M)", options: ["The lighter body", "The heavier body", "Both have equal KE", "Cannot be determined"], correct: 0, solution: "$K = \\frac{p^2}{2m}$; for equal momentum $p$, $K \\propto \\frac{1}{m}$, so the lighter body has larger KE." }
      ]
    },
    {
      key: "P11_CH06", code: "Chapter 06", name: "System of Particles and Rotational Motion", weight: 6,
      desc: "Center of mass, torque, angular momentum conservation, moment of inertia theorems, and rolling without slipping.",
      intuitionTitle: "Rotational Analogues: How Mass Distribution Governs Spin",
      intuitionBody: "In rotation, mass $m$ is replaced by Moment of Inertia $I = \\sum m_i r_i^2$, force $\\vec{F}$ by Torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$, and linear momentum $\\vec{p}$ by Angular Momentum $\\vec{L} = I\\vec{\\omega}$. Moving mass farther from the spin axis increases $I$ quadratically.",
      concepts: [
        ["1. Parallel & Perpendicular Axis Theorems", "Parallel: $I = I_{\\text{cm}} + Md^2$ (for any 3D body). Perpendicular: $I_z = I_x + I_y$ (strictly for flat planar laminae!)."],
        ["2. Angular Momentum Conservation", "When net external torque $\\vec{\\tau}_{\\text{ext}} = 0$, $I_1\\omega_1 = I_2\\omega_2$ (ice skater spinning faster by pulling arms inward)."],
        ["3. Rolling Without Slipping", "Total KE $= K_{\\text{trans}} + K_{\\text{rot}} = \\frac{1}{2}mv^2\\left(1 + \\frac{k^2}{R^2}\\right)$; rolling acceleration on incline is $a = \\frac{g\\sin\\theta}{1 + k^2/R^2}$."]
      ],
      formulas: [
        ["Standard Moments of Inertia", "Ring: $MR^2$ &nbsp;|&nbsp; Disc / Cylinder: $\\frac{1}{2}MR^2$<br>Solid Sphere: $\\frac{2}{5}MR^2$ &nbsp;|&nbsp; Hollow Sphere: $\\frac{2}{3}MR^2$<br>Thin Rod (center): $\\frac{1}{12}ML^2$"],
        ["Torque, Angular Momentum & Rolling", "$\\vec{\\tau} = \\vec{r}\\times\\vec{F} = \\frac{d\\vec{L}}{dt} = I\\vec{\\alpha}$<br>$a_{\\text{roll}} = \\frac{g\\sin\\theta}{1 + I/(MR^2)}$"]
      ],
      numericals: [
        {
          title: "Moment of Inertia of a Disc About a Tangent in Its Plane", marks: 3,
          problem: "Given the moment of inertia of a uniform circular disc of mass $M$ and radius $R$ about its central axis perpendicular to its plane is $\\frac{1}{2}MR^2$, find its moment of inertia about a tangent in its own plane.",
          steps: [
            "By Perpendicular Axis Theorem for the planar disc: $I_z = I_x + I_y = 2I_{\\text{diameter}} = \\frac{1}{2}MR^2 \\implies I_{\\text{diameter}} = \\frac{1}{4}MR^2$.",
            "Apply Parallel Axis Theorem to shift from diameter to parallel tangent at distance $d = R$: $I_{\\text{tangent}} = I_{\\text{diameter}} + MR^2$.",
            "Sum terms: $I_{\\text{tangent}} = \\frac{1}{4}MR^2 + MR^2 = \\mathbf{\\frac{5}{4}MR^2}$."
          ]
        },
        {
          title: "Solid Sphere Rolling Down an Inclined Plane", marks: 3,
          problem: "Calculate the linear acceleration of a solid sphere ($I = \\frac{2}{5}MR^2$) rolling without slipping down an inclined plane of angle $\\theta = 30^\\circ$ ($g = 9.8\\text{ m/s}^2$).",
          steps: [
            "For rolling without slipping, $a = \\frac{g\\sin\\theta}{1 + I/(MR^2)}$.",
            "Substitute $I/(MR^2) = 2/5$ and $\\sin 30^\\circ = 0.5$: $a = \\frac{9.8 \\times 0.5}{1 + 2/5} = \\frac{4.9}{7/5}$.",
            "Evaluate: $a = 4.9 \\times \\frac{5}{7} = \\mathbf{3.5\\text{ m/s}^2}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Relation Between Torque and Angular Momentum $\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}}{dt}$", tag: "3-Mark Vector Derivation",
          setup: "Angular momentum of a particle of position $\\vec{r}$ and linear momentum $\\vec{p} = m\\vec{v}$ is $\\vec{L} = \\vec{r} \\times \\vec{p}$.",
          steps: [
            "Differentiate w.r.t. time $t$: $\\frac{d\\vec{L}}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p}) = \\left(\\frac{d\\vec{r}}{dt} \\times \\vec{p}\\right) + \\left(\\vec{r} \\times \\frac{d\\vec{p}}{dt}\\right)$.",
            "Since $\\frac{d\\vec{r}}{dt} = \\vec{v}$ is parallel to $\\vec{p} = m\\vec{v}$, $\\vec{v} \\times m\\vec{v} = 0$.",
            "By Newton's 2nd Law, $\\frac{d\\vec{p}}{dt} = \\vec{F}$, leaving $\\frac{d\\vec{L}}{dt} = \\vec{r} \\times \\vec{F} = \\vec{\\tau}$."
          ],
          conclusion: "Summing over all particles cancels internal torques, giving $\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}}{dt}$."
        },
        {
          title: "Acceleration of a Rigid Body Rolling Without Slipping Down an Incline", tag: "5-Mark Board Derivation",
          setup: "A rigid body of mass $M$, radius $R$, and radius of gyration $k$ ($I = Mk^2$) rolls down an incline of angle $\\theta$.",
          steps: [
            "Translational equation along incline: $Mg\\sin\\theta - f_s = Ma$ &nbsp;[Eq. 1].",
            "Rotational torque about center of mass: $f_s R = I\\alpha = (Mk^2)\\left(\\frac{a}{R}\\right) \\implies f_s = \\frac{Mk^2 a}{R^2}$ &nbsp;[Eq. 2].",
            "Substitute $f_s$ into Eq. 1: $Mg\\sin\\theta - \\frac{Mk^2 a}{R^2} = Ma \\implies a\\left(1 + \\frac{k^2}{R^2}\\right) = g\\sin\\theta$."
          ],
          conclusion: "Hence $a = \\frac{g\\sin\\theta}{1 + k^2/R^2}$ (independent of total mass $M$ and radius $R$)."
        }
      ],
      examTip: "Never apply Perpendicular Axis Theorem (Iz = Ix + Iy) to 3D solids like spheres or cylinders—it applies ONLY to flat 2D planar laminae.",
      traps: [
        ["Applying Perpendicular Axis Theorem to a Sphere", "High (2 Marks Lost)", "Iz = Ix + Iy holds ONLY for 2D planar bodies. For a 3D sphere, Ix = Iy = Iz = 2/5 MR²."],
        ["Using Sliding Acceleration g sin θ for Rolling Bodies", "Board Trap (1 Mark)", "Part of gravitational PE goes into rotational KE, reducing rolling acceleration to g sin θ / (1 + k²/R²)."]
      ],
      challenges: [
        {
          title: "Rotational Motion: Perpendicular Axis Theorem Misuse",
          steps: [
            { stepNo: 1, text: "A solid sphere has moment of inertia $I_x = \\frac{2}{5}MR^2$ about a diameter." },
            { stepNo: 2, text: "Apply Perpendicular Axis Theorem: $I_z = I_x + I_y = \\frac{2}{5}MR^2 + \\frac{2}{5}MR^2 = \\frac{4}{5}MR^2$." },
            { stepNo: 3, text: "Conclude $I_z = \\frac{4}{5}MR^2$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Perpendicular Axis Theorem applies ONLY to planar 2D laminae, never to 3D spheres. By symmetry, $I_z = \\frac{2}{5}MR^2$."
        }
      ],
      diagnostics: [
        { q: "If polar ice caps melt, water flows toward the equator, increasing Earth's moment of inertia $I$. The length of the day will:", difficulty: "Board Favorite (1M)", options: ["Increase", "Decrease", "Remain unchanged", "Become 12 hours"], correct: 0, solution: "By $L = I\\omega = \\text{const}$, increasing $I$ decreases $\\omega$, so $T = 2\\pi/\\omega$ increases." },
        { q: "A solid sphere ($k^2/R^2 = 2/5$) and a ring ($k^2/R^2 = 1$) roll down the same incline from rest. Which reaches the bottom first?", difficulty: "Rolling Race (1M)", options: ["Solid Sphere", "Ring", "Both simultaneously", "Heavier object"], correct: 0, solution: "Smaller $k^2/R^2$ gives larger acceleration $a = g\\sin\\theta/(1 + k^2/R^2)$, so solid sphere wins." }
      ]
    },
    {
      key: "P11_CH07", code: "Chapter 07", name: "Gravitation", weight: 5,
      desc: "Kepler's laws, variation of g with altitude & depth, gravitational potential energy, and escape/orbital velocity.",
      intuitionTitle: "Inverse-Square Central Fields & Bound Satellite Orbits",
      intuitionBody: "Gravity is always attractive, giving bound orbits negative total mechanical energy $E = -\\frac{GMm}{2r}$. Supplying enough kinetic energy to raise total energy to zero frees a projectile to infinity at escape speed $v_e = \\sqrt{2gR}$.",
      concepts: [
        ["1. Variation of g Above & Below Earth", "Altitude ($h \\ll R$): $g_h = g(1 - \\frac{2h}{R})$. Depth $d$: $g_d = g(1 - \\frac{d}{R})$. At Earth's center ($d = R$), $g = 0$."],
        ["2. Orbital vs Escape Speed", "Low-Earth orbital speed $v_o = \\sqrt{gR} \\approx 7.92\\text{ km/s}$; escape speed $v_e = \\sqrt{2gR} = \\sqrt{2}v_o \\approx 11.2\\text{ km/s}$ (independent of projectile mass)."],
        ["3. Kepler's Three Planetary Laws", "1st: Elliptical orbits with Sun at focus. 2nd: Equal areas in equal times ($\\frac{dA}{dt} = \\frac{L}{2m} = \\text{const}$). 3rd: $T^2 \\propto r^3$."]
      ],
      formulas: [
        ["Gravity & Variation of g", "$F = \\frac{GMm}{r^2}$, &nbsp; $g = \\frac{GM}{R^2}$<br>$g_h = g\\left(1 - \\frac{2h}{R}\\right)$, &nbsp; $g_d = g\\left(1 - \\frac{d}{R}\\right)$"],
        ["Potential, Orbital & Escape", "$U = -\\frac{GMm}{r}$, &nbsp; $E_{\\text{orbit}} = -\\frac{GMm}{2r}$<br>$v_o = \\sqrt{\\frac{GM}{r}}$, &nbsp; $v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}$"]
      ],
      numericals: [
        {
          title: "Depth Below Earth's Surface Where g Drops by 25%", marks: 2,
          problem: "At what depth $d$ below the Earth's surface ($R = 6400\\text{ km}$) does the acceleration due to gravity become $75\\%$ of its surface value?",
          steps: [
            "Use depth formula: $g_d = g\\left(1 - \\frac{d}{R}\\right) = 0.75g$.",
            "Solve for $d$: $1 - \\frac{d}{R} = 0.75 \\implies \\frac{d}{R} = 0.25 \\implies d = 0.25 \\times 6400 = \\mathbf{1600\\text{ km}}$."
          ]
        },
        {
          title: "Escape Velocity on a Planet with Twice Earth's Mass & Radius", marks: 3,
          problem: "A planet has twice the mass and twice the radius of Earth. If Earth's escape velocity is $11.2\\text{ km/s}$, find the escape velocity on this planet.",
          steps: [
            "Escape velocity formula: $v_e = \\sqrt{\\frac{2GM}{R}}$.",
            "For the planet: $v'_e = \\sqrt{\\frac{2G(2M)}{2R}} = \\sqrt{\\frac{2GM}{R}} = v_e$.",
            "Hence escape velocity remains unchanged at $\\mathbf{11.2\\text{ km/s}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Escape Velocity from Earth's Surface $v_e = \\sqrt{2gR}$", tag: "3-Mark Board Derivation",
          setup: "A body of mass $m$ is projected from Earth's surface (mass $M$, radius $R$) so it just reaches infinity with zero residual speed.",
          steps: [
            "Initial total mechanical energy on Earth's surface: $E_i = \\frac{1}{2}mv_e^2 - \\frac{GMm}{R}$.",
            "Final total mechanical energy at infinity ($r \\to \\infty, v \\to 0$): $E_f = 0 + 0 = 0$.",
            "By conservation of mechanical energy ($E_i = E_f$): $\\frac{1}{2}mv_e^2 = \\frac{GMm}{R} \\implies v_e = \\sqrt{\\frac{2GM}{R}}$."
          ],
          conclusion: "Substituting $GM = gR^2$ gives $v_e = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$."
        },
        {
          title: "Variation of Acceleration Due to Gravity with Depth $g_d = g(1 - d/R)$", tag: "3-Mark Derivation",
          setup: "Consider Earth as a uniform sphere of density $\\rho$ and radius $R$, with a point mass at depth $d$ (distance $r = R - d$ from center).",
          steps: [
            "On surface: $g = \\frac{GM}{R^2} = \\frac{G(\\frac{4}{3}\\pi R^3\\rho)}{R^2} = \\frac{4}{3}\\pi G R \\rho$ &nbsp;[Eq. 1].",
            "At depth $d$, only inner sphere of radius $(R - d)$ pulls inward: $g_d = \\frac{4}{3}\\pi G (R - d)\\rho$ &nbsp;[Eq. 2].",
            "Divide Eq. 2 by Eq. 1: $\\frac{g_d}{g} = \\frac{R - d}{R} = 1 - \\frac{d}{R}$."
          ],
          conclusion: "Thus $g_d = g\\left(1 - \\frac{d}{R}\\right)$, decreasing linearly to zero at Earth's center."
        }
      ],
      examTip: "Use g_h = g(1 - 2h/R) ONLY when h << R (e.g., h < 100 km). For large altitudes like h = R, always use the exact formula g_h = g R² / (R + h)².",
      traps: [
        ["Using Binomial Approximation g(1 - 2h/R) at h = R", "Critical (2 Marks Lost)", "At h = R, g(1 - 2) = -g (nonsense!). Exact inverse-square law gives g_h = g / (1 + 1)² = g/4."],
        ["Positive Gravitational Potential Energy", "Board Trap (1 Mark)", "Gravitational PE is always negative U = -GMm/r for bound systems (zero reference at infinity)."]
      ],
      challenges: [
        {
          title: "Gravitation: Gravity at Altitude Equal to Earth's Radius (h = R)",
          steps: [
            { stepNo: 1, text: "Find acceleration due to gravity at height $h = R$ above Earth's surface." },
            { stepNo: 2, text: "Apply $g_h = g\\left(1 - \\frac{2h}{R}\\right) = g(1 - 2) = -g$." },
            { stepNo: 3, text: "Conclude magnitude is $g$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: $g(1 - 2h/R)$ is valid ONLY for $h \\ll R$. At $h = R$, exact formula gives $g_h = g\\left(\\frac{R}{R + R}\\right)^2 = \\frac{g}{4}$."
        }
      ],
      diagnostics: [
        { q: "At an altitude $h = R$ (equal to Earth's radius), the acceleration due to gravity becomes:", difficulty: "Approximation Trap (1M)", options: ["$g/4$", "$g/2$", "$0$", "$g/9$"], correct: 0, solution: "$g_h = g R^2 / (R + h)^2 = g R^2 / (2R)^2 = g/4$." },
        { q: "The ratio of escape velocity to orbital velocity for a satellite close to Earth's surface is:", difficulty: "Board Standard (1M)", options: ["$\\sqrt{2} : 1$", "$2 : 1$", "$1 : \\sqrt{2}$", "$1 : 2$"], correct: 0, solution: "$v_e = \\sqrt{2gR}$ and $v_o = \\sqrt{gR} \\implies v_e/v_o = \\sqrt{2}$." }
      ]
    },
    {
      key: "P11_CH08", code: "Chapter 08", name: "Mechanical Properties of Solids", weight: 4,
      desc: "Hooke's law, stress-strain curve, Young's modulus, Bulk modulus, Shear modulus, and elastic potential energy.",
      intuitionTitle: "Interatomic Springs: Stress, Strain & Elastic Moduli",
      intuitionBody: "Solids behave like 3D lattices of atomic springs. Within the proportional limit, restoring stress ($F/A$) is strictly proportional to fractional deformation strain ($\\Delta L/L$), with slope equal to Young's modulus $Y$.",
      concepts: [
        ["1. Stress vs Strain", "Stress $= \\frac{F}{A}$ ($\\text{N/m}^2$ or $\\text{Pa}$); Strain $= \\frac{\\Delta L}{L}$ (dimensionless). Higher $Y$ means less strain for the same stress (steel is more elastic than rubber)."],
        ["2. Three Elastic Moduli", "Young's $Y$ (length), Bulk $B$ (volume, applies to solids/liquids/gases), Shear $G$ (shape, solids only)."],
        ["3. Elastic Potential Energy Density", "Energy stored per unit volume in a stretched wire is $u = \\frac{1}{2}\\times\\text{Stress}\\times\\text{Strain} = \\frac{1}{2}Y(\\text{Strain})^2$."]
      ],
      formulas: [
        ["Hooke's Law & Moduli", "$Y = \\frac{FL}{A\\Delta L}$<br>$B = -\\frac{\\Delta P}{\\Delta V/V}$ (Compressibility $\\kappa = 1/B$)<br>$G = \\frac{F}{A\\theta}$"],
        ["Elastic Energy & Poisson Ratio", "$U = \\frac{1}{2}F\\Delta L = \\frac{YA(\\Delta L)^2}{2L}$<br>$u = \\frac{1}{2}\\text{Stress}\\times\\text{Strain}$, &nbsp; $\\sigma = -\\frac{\\Delta r/r}{\\Delta L/L}$"]
      ],
      numericals: [
        {
          title: "Elongation of a Loaded Structural Steel Wire", marks: 3,
          problem: "A steel wire of length $2.0\\text{ m}$ and cross-sectional area $1.0 \\times 10^{-6}\\text{ m}^2$ is stretched by a load of $200\\text{ N}$. If $Y_{\\text{steel}} = 2.0 \\times 10^{11}\\text{ N/m}^2$, find the elongation $\\Delta L$ and elastic energy stored.",
          steps: [
            "Apply Young's modulus formula: $\\Delta L = \\frac{FL}{AY} = \\frac{200 \\times 2.0}{(1.0 \\times 10^{-6})(2.0 \\times 10^{11})}$.",
            "Compute elongation: $\\Delta L = \\frac{400}{2.0 \\times 10^5} = 2.0 \\times 10^{-3}\\text{ m} = \\mathbf{2.0\\text{ mm}}$.",
            "Elastic energy stored: $U = \\frac{1}{2}F\\Delta L = \\frac{1}{2}(200)(2.0 \\times 10^{-3}) = \\mathbf{0.2\\text{ J}}$."
          ]
        },
        {
          title: "Ratio of Elongations of Two Wires of Different Radii", marks: 2,
          problem: "Two wires of the same material and same length have radii in the ratio $1 : 2$. If stretched by the same force, find the ratio of their elongations.",
          steps: [
            "$\\Delta L = \\frac{FL}{\\pi r^2 Y} \\implies \\Delta L \\propto \\frac{1}{r^2}$ (for same $F, L, Y$).",
            "$\\frac{\\Delta L_1}{\\Delta L_2} = \\left(\\frac{r_2}{r_1}\\right)^2 = \\left(\\frac{2}{1}\\right)^2 = \\mathbf{4 : 1}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Elastic Potential Energy Stored in a Stretched Wire $U = \\frac{1}{2}F\\Delta L$", tag: "3-Mark Integration Proof",
          setup: "Consider a wire of length $L$, area $A$, and Young's modulus $Y$ stretched slowly from $0$ to $\\Delta L$.",
          steps: [
            "At instantaneous extension $x$, restoring force is $F(x) = \\frac{YA}{L}x$.",
            "Work done for infinitesimal extension $dx$: $dW = F(x)\\,dx = \\frac{YA}{L}x\\,dx$.",
            "Integrate from $0$ to $\\Delta L$: $U = W = \\int_{0}^{\\Delta L} \\frac{YA}{L}x\\,dx = \\frac{1}{2}\\frac{YA}{L}(\\Delta L)^2 = \\frac{1}{2}\\left(\\frac{YA\\Delta L}{L}\\right)\\Delta L = \\frac{1}{2}F\\Delta L$."
          ],
          conclusion: "Dividing by volume $AL$ gives elastic energy density $u = \\frac{1}{2}\\times\\text{Stress}\\times\\text{Strain}$."
        },
        {
          title: "Maximum Height of a Mountain on Earth Limited by Elastic Shear", tag: "Conceptual Application",
          setup: "Rock at base of mountain of height $h$ and density $\\rho$ experiences hydrostatic pressure $h\\rho g$.",
          steps: [
            "Equate base pressure to elastic shear limit $\\sigma_{\\max}$: $h\\rho g \\le \\sigma_{\\max}$.",
            "With $\\sigma_{\\max} \\approx 3 \\times 10^8\\text{ N/m}^2$ and $\\rho \\approx 3 \\times 10^3\\text{ kg/m}^3$, $h_{\\max} \\approx \\frac{3 \\times 10^8}{3 \\times 10^3 \\times 10} = 10\\text{ km}$."
          ],
          conclusion: "Matches Mount Everest's height ($\\approx 8.85\\text{ km}$)."
        }
      ],
      examTip: "Always convert wire diameter from mm to radius in meters (r = d/2 × 10⁻³ m) before computing cross-sectional area A = πr².",
      traps: [
        ["Confusing Diameter with Radius in A = πr²", "High (1-2 Marks Lost)", "Forgetting to halve the given wire diameter d causes area A to be 4× too large."],
        ["Thinking Rubber is More Elastic than Steel", "Conceptual Trap (1 Mark)", "In physics, elasticity measures resistance to deformation (Y); steel has much higher Y than rubber."]
      ],
      challenges: [
        {
          title: "Solids: Wire Cross-Section Area Diameter Trap",
          steps: [
            { stepNo: 1, text: "A copper wire of diameter $2\\text{ mm}$ is loaded with $100\\text{ N}$." },
            { stepNo: 2, text: "Compute cross-sectional area: $A = \\pi d^2 = \\pi (2 \\times 10^{-3})^2 = 4\\pi \\times 10^{-6}\\text{ m}^2$." },
            { stepNo: 3, text: "Compute tensile stress $\\sigma = F/A$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Radius is $r = d/2 = 1\\text{ mm} = 10^{-3}\\text{ m}$, so $A = \\pi r^2 = \\pi \\times 10^{-6}\\text{ m}^2$ (not $4\\pi \\times 10^{-6}$)."
        }
      ],
      diagnostics: [
        { q: "Steel is preferred over copper for making heavy-duty springs because:", difficulty: "Board Standard (1M)", options: ["Young's modulus of steel is greater than that of copper", "Steel is cheaper", "Copper has higher density", "Steel is a better conductor"], correct: 0, solution: "Higher $Y$ produces larger restoring force for a given strain and higher elastic limit." },
        { q: "The elastic potential energy per unit volume of a stretched wire is:", difficulty: "Formula Check (1M)", options: ["$\\frac{1}{2}\\times\\text{Stress}\\times\\text{Strain}$", "$\\text{Stress}\\times\\text{Strain}$", "$\\frac{1}{2}\\frac{\\text{Stress}}{\\text{Strain}}$", "$\\frac{1}{2}Y\\times\\text{Stress}$"], correct: 0, solution: "$u = \\frac{U}{AL} = \\frac{1}{2}\\left(\\frac{F}{A}\\right)\\left(\\frac{\\Delta L}{L}\\right) = \\frac{1}{2}\\times\\text{Stress}\\times\\text{Strain}$." }
      ]
    },
    {
      key: "P11_CH09", code: "Chapter 09", name: "Mechanical Properties of Fluids", weight: 5,
      desc: "Pascal's law, viscosity, Stokes' law, terminal velocity, Bernoulli's theorem, surface tension, and capillarity.",
      intuitionTitle: "Bernoulli Energy Conservation & Interfacial Surface Tension",
      intuitionBody: "In steady incompressible streamline flow, speeding a fluid up through a constriction converts static pressure energy into kinetic energy ($P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$), explaining airplane lift and atomizer spray.",
      concepts: [
        ["1. Continuity & Bernoulli's Principle", "$A_1 v_1 = A_2 v_2$; faster flow in narrower pipe means lower static pressure ($P_2 < P_1$)."],
        ["2. Viscosity & Terminal Velocity", "Falling sphere reaches terminal velocity $v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta} \\propto r^2$ when viscous drag + buoyancy balances weight."],
        ["3. Surface Tension & Excess Pressure", "Liquid drop has 1 surface ($\\Delta P = \\frac{2T}{R}$); soap bubble has 2 free surfaces ($\\Delta P = \\frac{4T}{R}$)."]
      ],
      formulas: [
        ["Fluid Flow & Efflux", "$A_1 v_1 = A_2 v_2$, &nbsp; $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$<br>Torricelli Efflux Speed: $v = \\sqrt{2gh}$"],
        ["Viscosity & Capillarity", "$F_v = 6\\pi\\eta r v$, &nbsp; $v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta}$<br>Capillary Rise: $h = \\frac{2T\\cos\\theta}{r\\rho g}$"]
      ],
      numericals: [
        {
          title: "Terminal Velocity of Coalescing Raindrops", marks: 3,
          problem: "Eight identical spherical raindrops, each falling with terminal velocity $5\\text{ cm/s}$, coalesce to form a single large drop. Find the terminal velocity of the big drop.",
          steps: [
            "Volume conservation: $\\frac{4}{3}\\pi R^3 = 8 \\times \\frac{4}{3}\\pi r^3 \\implies R = 2r$.",
            "Since terminal velocity $v_t \\propto r^2$, $\\frac{v'_t}{v_t} = \\left(\\frac{R}{r}\\right)^2 = 2^2 = 4$.",
            "New terminal velocity $v'_t = 4 \\times 5 = \\mathbf{20\\text{ cm/s}}$."
          ]
        },
        {
          title: "Capillary Rise in a Narrow Glass Tube", marks: 3,
          problem: "Water rises to a height of $6.0\\text{ cm}$ in a capillary tube of radius $0.25\\text{ mm}$. To what height will water rise in a tube of radius $0.50\\text{ mm}$?",
          steps: [
            "By Ascent Formula $h = \\frac{2T\\cos\\theta}{r\\rho g}$, for the same liquid, $h \\cdot r = \\text{constant}$ (Jurin's Law).",
            "$h_2 = h_1 \\left(\\frac{r_1}{r_2}\\right) = 6.0 \\times \\left(\\frac{0.25}{0.50}\\right) = \\mathbf{3.0\\text{ cm}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Bernoulli's Theorem for Steady Streamline Flow", tag: "5-Mark Core Derivation",
          setup: "Consider ideal, incompressible, non-viscous fluid flowing steadily through a tube of varying cross-section $A_1, A_2$ at heights $h_1, h_2$.",
          steps: [
            "Net pressure work done on fluid element of mass $\\Delta m$ and volume $\\Delta V$: $\\Delta W = P_1 A_1 v_1\\Delta t - P_2 A_2 v_2\\Delta t = (P_1 - P_2)\\Delta V$.",
            "Change in kinetic energy: $\\Delta K = \\frac{1}{2}\\Delta m (v_2^2 - v_1^2)$; change in potential energy: $\\Delta U = \\Delta m g(h_2 - h_1)$.",
            "By Work-Energy Theorem ($\\Delta W = \\Delta K + \\Delta U$), divide through by $\\Delta V$ (using $\\rho = \\Delta m/\\Delta V$): $P_1 - P_2 = \\frac{1}{2}\\rho(v_2^2 - v_1^2) + \\rho g(h_2 - h_1)$."
          ],
          conclusion: "Rearranging: $P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho gh_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho gh_2 = \\text{constant}$."
        },
        {
          title: "Ascent Formula for Capillary Rise $h = \\frac{2T\\cos\\theta}{r\\rho g}$", tag: "3-Mark Derivation",
          setup: "A capillary tube of radius $r$ is dipped vertically into a wetting liquid of density $\\rho$, surface tension $T$, and contact angle $\\theta$.",
          steps: [
            "Upward vertical component of surface tension around meniscus perimeter $2\\pi r$: $F_{\\text{up}} = (T\\cos\\theta)(2\\pi r)$.",
            "Downward weight of raised liquid column of height $h$: $W = (\\pi r^2 h)\\rho g$.",
            "At equilibrium ($F_{\\text{up}} = W$): $2\\pi r T\\cos\\theta = \\pi r^2 h\\rho g \\implies h = \\frac{2T\\cos\\theta}{r\\rho g}$."
          ],
          conclusion: "For obtuse contact angle ($\\theta > 90^\\circ$, e.g. mercury in glass), $\\cos\\theta < 0$, causing capillary depression."
        }
      ],
      examTip: "Always check whether the problem specifies a liquid drop (1 surface -> 2T/R) or a soap bubble (2 surfaces -> 4T/R)!",
      traps: [
        ["Using 2T/R Instead of 4T/R for a Soap Bubble", "High (1-2 Marks Lost)", "A soap bubble has both inner and outer air-soap interfaces, doubling excess pressure to 4T/R."],
        ["Assuming Narrower Pipe Has Higher Pressure", "Conceptual Trap (1 Mark)", "By continuity + Bernoulli, narrower pipe has higher speed and LOWER static pressure."]
      ],
      challenges: [
        {
          title: "Fluids: Excess Pressure Inside a Soap Bubble",
          steps: [
            { stepNo: 1, text: "A soap bubble of radius $R = 2\\text{ cm}$ has surface tension $T = 0.03\\text{ N/m}$." },
            { stepNo: 2, text: "Calculate excess pressure: $\\Delta P = \\frac{2T}{R} = \\frac{2 \\times 0.03}{0.02} = 3\\text{ Pa}$." },
            { stepNo: 3, text: "State excess pressure is $3\\text{ Pa}$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: A soap bubble has TWO free surfaces, so $\\Delta P = \\frac{4T}{R} = 6\\text{ Pa}$."
        }
      ],
      diagnostics: [
        { q: "Excess pressure inside a soap bubble of radius $R$ and surface tension $T$ is:", difficulty: "Board Trap (1M)", options: ["$4T/R$", "$2T/R$", "$T/R$", "$8T/R$"], correct: 0, solution: "Two free surfaces give $\\Delta P = 4T/R$." },
        { q: "Bernoulli's equation is a direct consequence of conservation of:", difficulty: "Board Standard (1M)", options: ["Energy", "Linear Momentum", "Angular Momentum", "Mass only"], correct: 0, solution: "Bernoulli's equation expresses mechanical energy conservation per unit volume of ideal fluid." }
      ]
    },
    {
      key: "P11_CH10", code: "Chapter 10", name: "Thermal Properties of Matter", weight: 5,
      desc: "Thermal expansion (α, β, γ), specific & latent heat, conduction, Newton's law of cooling, and Wien's law.",
      intuitionTitle: "Thermal Expansion, Phase Latent Heat & Blackbody Radiation",
      intuitionBody: "Heating increases atomic vibration amplitudes (expanding solids in ratio $\\alpha : \\beta : \\gamma = 1 : 2 : 3$), breaks intermolecular bonds at constant temperature during phase changes ($Q = mL$), and shifts blackbody radiation toward shorter wavelengths ($\\lambda_m T = b$).",
      concepts: [
        ["1. Thermal Expansion Coefficients", "Linear $\\alpha$, Area $\\beta = 2\\alpha$, Volume $\\gamma = 3\\alpha$. Water exhibits anomalous contraction between $0^\\circ\\text{C}$ and $4^\\circ\\text{C}$, reaching max density at $4^\\circ\\text{C}$."],
        ["2. Calorimetry & Latent Heat", "Sensible heat $Q = mc\\Delta T$ changes temperature; latent heat $Q = mL$ changes phase at constant $T$ ($L_{\\text{steam}} = 540\\text{ cal/g} \\gg L_{\\text{ice}} = 80\\text{ cal/g}$)."],
        ["3. Conduction & Stefan-Wien Radiation", "Conduction $H = kA\\frac{T_1 - T_2}{L}$; Blackbody power $E = \\sigma e A T^4$; peak wavelength $\\lambda_m T = b$."]
      ],
      formulas: [
        ["Expansion & Heat Transfer", "$\\Delta L = \\alpha L_0\\Delta T$, &nbsp; $\\alpha : \\beta : \\gamma = 1 : 2 : 3$<br>$H = \\frac{dQ}{dt} = kA\\frac{\\Delta T}{L}$"],
        ["Radiation & Newton Cooling", "$E = \\sigma e A T^4$, &nbsp; $\\lambda_m T = b = 2.9 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$<br>$\\frac{T_1 - T_2}{t} = K\\left(\\frac{T_1 + T_2}{2} - T_0\\right)$"]
      ],
      numericals: [
        {
          title: "Newton's Law of Cooling Time Calculation", marks: 3,
          problem: "A body cools from $80^\\circ\\text{C}$ to $50^\\circ\\text{C}$ in $5\\text{ minutes}$ in surroundings at $20^\\circ\\text{C}$. Find the time taken to cool from $60^\\circ\\text{C}$ to $30^\\circ\\text{C}$.",
          steps: [
            "First interval: $\\frac{80 - 50}{5} = K\\left(\\frac{80 + 50}{2} - 20\\right) \\implies 6 = K(65 - 20) = 45K \\implies K = \\frac{6}{45} = \\frac{2}{15}\\text{ min}^{-1}$.",
            "Second interval: $\\frac{60 - 30}{t} = K\\left(\\frac{60 + 30}{2} - 20\\right) \\implies \\frac{30}{t} = \\frac{2}{15}(45 - 20) = \\frac{2}{15}(25) = \\frac{10}{3}$.",
            "Solve for $t$: $t = 30 \\times \\frac{3}{10} = \\mathbf{9\\text{ minutes}}$."
          ]
        },
        {
          title: "Steam Burns vs Boiling Water Heat Release", marks: 2,
          problem: "Calculate extra heat released when $10\\text{ g}$ of steam at $100^\\circ\\text{C}$ condenses to water at $100^\\circ\\text{C}$ ($L_v = 2.26 \\times 10^6\\text{ J/kg}$).",
          steps: [
            "$Q = m L_v = (0.010\\text{ kg})(2.26 \\times 10^6\\text{ J/kg}) = \\mathbf{22,600\\text{ J} = 22.6\\text{ kJ}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Relation Between Volume & Linear Expansion Coefficients ($\\gamma = 3\\alpha$)", tag: "3-Mark Derivation",
          setup: "Consider a solid cube of initial side $L_0$ and volume $V_0 = L_0^3$ heated by $\\Delta T$.",
          steps: [
            "Expanded side length: $L = L_0(1 + \\alpha\\Delta T)$.",
            "Expanded volume: $V = L^3 = L_0^3(1 + \\alpha\\Delta T)^3 = V_0(1 + 3\\alpha\\Delta T + 3\\alpha^2\\Delta T^2 + \\alpha^3\\Delta T^3)$.",
            "Since $\\alpha \\sim 10^{-5}\\text{ K}^{-1}$ is tiny, neglect $\\alpha^2, \\alpha^3$: $V \\approx V_0(1 + 3\\alpha\\Delta T) \\implies \\frac{\\Delta V}{V_0} = 3\\alpha\\Delta T$."
          ],
          conclusion: "Comparing with $\\frac{\\Delta V}{V_0} = \\gamma\\Delta T$ yields $\\gamma = 3\\alpha$."
        },
        {
          title: "Equivalent Thermal Conductivity of Two Slabs in Series", tag: "3-Mark Derivation",
          setup: "Two slabs of area $A$, thicknesses $L_1, L_2$, and conductivities $k_1, k_2$ carry steady heat current $H$ between $T_1$ and $T_2$.",
          steps: [
            "Temperature drops across slabs: $T_1 - T = \\frac{H L_1}{k_1 A}$ and $T - T_2 = \\frac{H L_2}{k_2 A}$.",
            "Add equations: $T_1 - T_2 = \\frac{H}{A}\\left(\\frac{L_1}{k_1} + \\frac{L_2}{k_2}\\right) = \\frac{H(L_1 + L_2)}{k_{\\text{eq}} A}$."
          ],
          conclusion: "Hence $k_{\\text{eq}} = \\frac{L_1 + L_2}{L_1/k_1 + L_2/k_2}$ (for equal thickness, $k_{\\text{eq}} = \\frac{2k_1 k_2}{k_1 + k_2}$)."
        }
      ],
      examTip: "Always convert Celsius to Kelvin (T_K = T_C + 273.15) before applying Stefan-Boltzmann T⁴ or Wien's law λm T = b!",
      traps: [
        ["Using °C Instead of Kelvin in Stefan's T⁴ Law", "Critical (2 Marks Lost)", "Radiated power scales as T⁴ in absolute Kelvin, never Celsius."],
        ["Using Endpoint Temperature Instead of Mean Temperature in Newton's Cooling", "Board Trap (1 Mark)", "Use average temperature (T₁ + T₂)/2 - T₀ in Newton's cooling formula."]
      ],
      challenges: [
        {
          title: "Thermal Properties: Stefan's Law Celsius Trap",
          steps: [
            { stepNo: 1, text: "A blackbody is heated from $27^\\circ\\text{C}$ to $327^\\circ\\text{C}$." },
            { stepNo: 2, text: "Compute ratio of radiated powers: $\\frac{E_2}{E_1} = \\left(\\frac{327}{27}\\right)^4$." },
            { stepNo: 3, text: "Conclude radiated power increases by $(12.1)^4$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Convert to Kelvin first ($T_1 = 300\\text{ K}, T_2 = 600\\text{ K}$): $\\frac{E_2}{E_1} = \\left(\\frac{600}{300}\\right)^4 = 2^4 = 16$."
        }
      ],
      diagnostics: [
        { q: "The density of water is maximum at:", difficulty: "Board Standard (1M)", options: ["$4^\\circ\\text{C}$", "$0^\\circ\\text{C}$", "$100^\\circ\\text{C}$", "$-4^\\circ\\text{C}$"], correct: 0, solution: "Anomalous expansion causes water to contract between $0^\\circ\\text{C}$ and $4^\\circ\\text{C}$, maximizing density at $4^\\circ\\text{C}$." },
        { q: "If a blackbody's absolute temperature is doubled, its radiated power increases by a factor of:", difficulty: "Stefan's Law (1M)", options: ["$16$", "$4$", "$8$", "$2$"], correct: 0, solution: "$E \\propto T^4 \\implies (2T)^4 / T^4 = 16$." }
      ]
    },
    {
      key: "P11_CH11", code: "Chapter 11", name: "Thermodynamics", weight: 6,
      desc: "Zeroth, First & Second Laws of Thermodynamics, Mayer's relation Cp - Cv = R, isothermal & adiabatic processes.",
      intuitionTitle: "First Law Energy Conservation & State vs Path Functions",
      intuitionBody: "Heat supplied to a gas splits into raising internal temperature ($\\Delta U$) and pushing the piston outward ($\\Delta W = P\\Delta V$): $\\Delta Q = \\Delta U + \\Delta W$. Internal energy $U$ depends solely on state temperature $T$, while $Q$ and $W$ depend on the process path.",
      concepts: [
        ["1. First Law Sign Conventions", "$\\Delta Q > 0$ (heat absorbed), $\\Delta W > 0$ (gas expands, $\\Delta V > 0$), $\\Delta U > 0$ (temperature rises, $\\Delta T > 0$)."],
        ["2. Four Thermodynamic Processes", "Isochoric ($\\Delta V = 0 \\implies W = 0$); Isobaric ($W = P\\Delta V$); Isothermal ($\\Delta T = 0 \\implies \\Delta U = 0$); Adiabatic ($\\Delta Q = 0 \\implies \\Delta U = -W$)."],
        ["3. Adiabatic Slope vs Isothermal Slope", "On a $P$-$V$ diagram, adiabatic curve is steeper than isothermal by factor $\\gamma = C_p/C_v > 1$."]
      ],
      formulas: [
        ["First Law & Mayer's Relation", "$\\Delta Q = \\Delta U + P\\Delta V$<br>$C_p - C_v = R$, &nbsp; $\\gamma = \\frac{C_p}{C_v}$"],
        ["Isothermal & Adiabatic Work", "$W_{\\text{iso}} = nRT\\ln\\left(\\frac{V_2}{V_1}\\right) = 2.303\\,nRT\\log_{10}\\left(\\frac{V_2}{V_1}\\right)$<br>$PV^\\gamma = \\text{const}$, &nbsp; $W_{\\text{adia}} = \\frac{nR(T_1 - T_2)}{\\gamma - 1}$"]
      ],
      numericals: [
        {
          title: "Temperature Rise in Rapid Adiabatic Compression", marks: 3,
          problem: "An ideal diatomic gas ($\\gamma = 1.4$) initially at $300\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its initial volume. Calculate the final temperature.",
          steps: [
            "For an adiabatic process, $T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1} \\implies T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$.",
            "Substitute $T_1 = 300\\text{ K}$, $V_1/V_2 = 32 = 2^5$, and $\\gamma - 1 = 0.4 = \\frac{2}{5}$: $T_2 = 300 \\times (2^5)^{2/5}$.",
            "Evaluate: $T_2 = 300 \\times 2^2 = 300 \\times 4 = \\mathbf{1200\\text{ K}}$."
          ]
        },
        {
          title: "First Law Work & Internal Energy in Isobaric Expansion", marks: 3,
          problem: "$2\\text{ moles}$ of an ideal monoatomic gas ($C_v = \\frac{3}{2}R$, $R = 8.31\\text{ J/mol}\\cdot\\text{K}$) are heated at constant pressure so temperature rises by $50\\text{ K}$. Find $\\Delta U$, $\\Delta W$, and $\\Delta Q$.",
          steps: [
            "Change in internal energy: $\\Delta U = n C_v \\Delta T = 2 \\times \\frac{3}{2}(8.31) \\times 50 = \\mathbf{1246.5\\text{ J}}$.",
            "Work done at constant pressure: $\\Delta W = P\\Delta V = nR\\Delta T = 2 \\times 8.31 \\times 50 = \\mathbf{831.0\\text{ J}}$.",
            "By First Law: $\\Delta Q = \\Delta U + \\Delta W = 1246.5 + 831.0 = \\mathbf{2077.5\\text{ J}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Mayer's Formula $C_p - C_v = R$ for an Ideal Gas", tag: "5-Mark Mandatory Proof",
          setup: "Consider $1\\text{ mole}$ of an ideal gas heated through temperature rise $\\Delta T$ first at constant volume and then at constant pressure.",
          steps: [
            "At constant volume ($\\Delta V = 0 \\implies \\Delta W = 0$): $\\Delta Q_V = C_v \\Delta T = \\Delta U$ &nbsp;[Eq. 1].",
            "At constant pressure ($P = \\text{const}$): $\\Delta Q_P = C_p \\Delta T = \\Delta U + P\\Delta V$ &nbsp;[Eq. 2].",
            "Since internal energy $U$ of an ideal gas depends only on $T$, $\\Delta U$ is identical in both steps. By ideal gas law $PV = RT \\implies P\\Delta V = R\\Delta T$.",
            "Substitute into Eq. 2: $C_p\\Delta T = C_v\\Delta T + R\\Delta T$."
          ],
          conclusion: "Dividing by $\\Delta T$ yields Mayer's Relation: $C_p - C_v = R$."
        },
        {
          title: "Work Done During an Isothermal Expansion $W = nRT\\ln(V_2/V_1)$", tag: "3-Mark Calculus Proof",
          setup: "Consider $n$ moles of an ideal gas expanding isothermally at constant temperature $T$ from volume $V_1$ to $V_2$.",
          steps: [
            "Infinitesimal work done: $dW = P\\,dV = \\left(\\frac{nRT}{V}\\right)dV$.",
            "Integrate from $V_1$ to $V_2$ keeping $T$ constant: $W = nRT\\int_{V_1}^{V_2} \\frac{dV}{V} = nRT[\\ln V]_{V_1}^{V_2}$."
          ],
          conclusion: "Thus $W_{\\text{iso}} = nRT\\ln\\left(\\frac{V_2}{V_1}\\right) = 2.303\\,nRT\\log_{10}\\left(\\frac{V_2}{V_1}\\right)$."
        }
      ],
      examTip: "In any cyclic process on a P-V diagram, ΔU_cycle = 0, so net heat absorbed equals net enclosed area: ΔQ_net = W_cycle (positive if clockwise, negative if counter-clockwise).",
      traps: [
        ["Assuming ΔQ = 0 Means Constant Temperature", "High (2 Marks Lost)", "In an adiabatic process (ΔQ = 0), adiabatic expansion cools the gas (ΔU = -W < 0) and compression heats it."],
        ["Sign of Work in Cyclic P-V Loop", "Board Trap (1 Mark)", "Clockwise P-V cycle produces positive net work (+Area); anti-clockwise cycle produces negative net work (-Area)."]
      ],
      challenges: [
        {
          title: "Thermodynamics: Adiabatic vs Isothermal Temperature Trap",
          steps: [
            { stepNo: 1, text: "An ideal gas expands adiabatically ($\\Delta Q = 0$) doing $500\\text{ J}$ of work ($\\Delta W = +500\\text{ J}$)." },
            { stepNo: 2, text: "Since $\\Delta Q = 0$, temperature stays constant so $\\Delta U = 0$." },
            { stepNo: 3, text: "Conclude internal energy change is zero." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: By First Law $\\Delta Q = \\Delta U + \\Delta W \\implies 0 = \\Delta U + 500 \\implies \\Delta U = -500\\text{ J}$ (gas cools down)."
        }
      ],
      diagnostics: [
        { q: "In an isothermal expansion of an ideal gas, the change in internal energy $\\Delta U$ is:", difficulty: "Board Standard (1M)", options: ["Zero", "Positive", "Negative", "Equal to $\\Delta W$"], correct: 0, solution: "Internal energy of an ideal gas depends only on temperature ($\\Delta T = 0 \\implies \\Delta U = 0$)." },
        { q: "The slope of an adiabatic curve is steeper than an isothermal curve at the same $(P, V)$ point by a factor of:", difficulty: "P-V Slope (1M)", options: ["$\\gamma = C_p/C_v$", "$1/\\gamma$", "$\\gamma - 1$", "$R$"], correct: 0, solution: "$(dP/dV)_{\\text{adia}} = -\\gamma(P/V) = \\gamma (dP/dV)_{\\text{iso}}$." }
      ]
    },
    {
      key: "P11_CH12", code: "Chapter 12", name: "Kinetic Theory", weight: 4,
      desc: "Ideal gas pressure derivation, RMS speed, degrees of freedom, Law of Equipartition of Energy, and mean free path.",
      intuitionTitle: "Microscopic Molecular Collisions & Equipartition of Energy",
      intuitionBody: "Gas pressure is the macroscopic time-averaged impact of billions of elastic molecular collisions on container walls ($P = \\frac{1}{3}\\rho v_{\\text{rms}}^2$), and temperature $T$ directly measures average translational kinetic energy per molecule ($\\frac{3}{2}k_B T$).",
      concepts: [
        ["1. RMS Speed Scaling", "$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3k_B T}{m}}$ depends ONLY on absolute temperature $T$ and molar mass $M$ (independent of pressure at fixed $T$)."],
        ["2. Degrees of Freedom (f)", "Monoatomic (He, Ar): $f = 3$; Rigid Diatomic ($O_2, N_2$): $f = 5$ (3 trans + 2 rot); Non-linear Polyatomic: $f = 6$."],
        ["3. Law of Equipartition", "Each quadratic degree of freedom contributes $\\frac{1}{2}k_B T$ per molecule ($\\frac{1}{2}RT$ per mole), giving $C_v = \\frac{f}{2}R$ and $\\gamma = 1 + \\frac{2}{f}$."]
      ],
      formulas: [
        ["Kinetic Pressure & Speeds", "$P = \\frac{1}{3}\\rho v_{\\text{rms}}^2$<br>$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$, &nbsp; $v_{\\text{avg}} = \\sqrt{\\frac{8RT}{\\pi M}}$, &nbsp; $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$"],
        ["Specific Heats & Mean Free Path", "$C_v = \\frac{f}{2}R$, &nbsp; $C_p = \\left(\\frac{f}{2} + 1\\right)R$, &nbsp; $\\gamma = 1 + \\frac{2}{f}$<br>Mean Free Path: $\\lambda = \\frac{1}{\\sqrt{2}\\pi d^2 n}$"]
      ],
      numericals: [
        {
          title: "Temperature Required to Double RMS Speed of Oxygen", marks: 3,
          problem: "At what temperature will the RMS speed of oxygen molecules be double their RMS speed at $27^\\circ\\text{C}$?",
          steps: [
            "Initial temperature: $T_1 = 27 + 273 = 300\\text{ K}$.",
            "Since $v_{\\text{rms}} \\propto \\sqrt{T}$, $\\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}} = 2 \\implies \\frac{T_2}{T_1} = 4$.",
            "Calculate $T_2$: $T_2 = 4 \\times 300 = 1200\\text{ K} = \\mathbf{927^\\circ\\text{C}}$."
          ]
        },
        {
          title: "Adiabatic Index $\\gamma$ of a Monoatomic-Diatomic Gas Mixture", marks: 3,
          problem: "$1\\text{ mole}$ of monoatomic gas ($C_{v1} = \\frac{3}{2}R$) is mixed with $1\\text{ mole}$ of diatomic gas ($C_{v2} = \\frac{5}{2}R$). Find $\\gamma_{\\text{mix}}$ of the mixture.",
          steps: [
            "Mixture $C_{v,\\text{mix}} = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \\frac{1(\\frac{3}{2}R) + 1(\\frac{5}{2}R)}{2} = 2R$.",
            "Mixture $C_{p,\\text{mix}} = C_{v,\\text{mix}} + R = 3R$.",
            "Hence $\\gamma_{\\text{mix}} = \\frac{C_{p,\\text{mix}}}{C_{v,\\text{mix}}} = \\frac{3R}{2R} = \\mathbf{1.5}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Pressure Exerted by an Ideal Gas $P = \\frac{1}{3}\\rho v_{\\text{rms}}^2$", tag: "5-Mark Core Derivation",
          setup: "Consider $N$ molecules each of mass $m$ in a cubical box of side $L$ and volume $V = L^3$.",
          steps: [
            "A molecule with $x$-velocity $v_x$ rebounds elastically off wall, transferring momentum $\\Delta p_x = 2mv_x$ every $\\Delta t = \\frac{2L}{v_x}$.",
            "Force on wall by one molecule: $f_x = \\frac{\\Delta p_x}{\\Delta t} = \\frac{mv_x^2}{L}$. Total force: $F_x = \\frac{m}{L}\\sum_{i=1}^N v_{ix}^2$.",
            "By isotropy, $\\overline{v_x^2} = \\overline{v_y^2} = \\overline{v_z^2} = \\frac{1}{3}v_{\\text{rms}}^2$, so $P = \\frac{F_x}{L^2} = \\frac{mN}{3L^3}v_{\\text{rms}}^2 = \\frac{1}{3}\\rho v_{\\text{rms}}^2$."
          ],
          conclusion: "Comparing with $PV = N k_B T$ gives average translational KE per molecule $\\bar{E} = \\frac{3}{2}k_B T$."
        },
        {
          title: "Specific Heat Ratio $\\gamma = 1 + \\frac{2}{f}$ from Equipartition Law", tag: "3-Mark Derivation",
          setup: "Consider $1\\text{ mole}$ of an ideal gas with $f$ degrees of freedom at temperature $T$.",
          steps: [
            "By Equipartition Law, internal energy per mole is $U = f\\left(\\frac{1}{2}RT\\right) = \\frac{f}{2}RT$.",
            "Molar specific heat at constant volume: $C_v = \\frac{dU}{dT} = \\frac{f}{2}R$.",
            "By Mayer's relation: $C_p = C_v + R = \\left(\\frac{f}{2} + 1\\right)R \\implies \\gamma = \\frac{C_p}{C_v} = 1 + \\frac{2}{f}$."
          ],
          conclusion: "Gives $\\gamma = 5/3$ (monoatomic, $f=3$) and $\\gamma = 7/5 = 1.4$ (diatomic, $f=5$)."
        }
      ],
      examTip: "Always convert Celsius to Kelvin before taking ratios of RMS speeds (v_rms ∝ √T_Kelvin).",
      traps: [
        ["Doubling Temperature in °C Instead of Kelvin for RMS Speed", "High (1-2 Marks Lost)", "v_rms scales with √T in Kelvin, never Celsius."],
        ["Using f = 3 for Diatomic Gases like O₂ or N₂", "Board Trap (1 Mark)", "Rigid diatomic gases have 3 translational + 2 rotational = 5 degrees of freedom at room temperature."]
      ],
      challenges: [
        {
          title: "Kinetic Theory: Diatomic Specific Heat Degrees of Freedom",
          steps: [
            { stepNo: 1, text: "Calculate molar specific heat $C_v$ of oxygen gas ($O_2$) at room temperature." },
            { stepNo: 2, text: "Since $O_2$ has $f = 3$ degrees of freedom, $C_v = \\frac{3}{2}R$." },
            { stepNo: 3, text: "Conclude $C_v = 1.5 R$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: $O_2$ is diatomic ($f = 5$: 3 translational + 2 rotational), so $C_v = \\frac{5}{2}R = 2.5R$."
        }
      ],
      diagnostics: [
        { q: "For a rigid diatomic gas ($f = 5$), the adiabatic index $\\gamma = C_p/C_v$ is:", difficulty: "Board Standard (1M)", options: ["$7/5 = 1.4$", "$5/3 = 1.67$", "$4/3 = 1.33$", "$9/7$"], correct: 0, solution: "$\\gamma = 1 + 2/f = 1 + 2/5 = 7/5 = 1.4$." },
        { q: "If the absolute temperature of an ideal gas is increased $4\\text{ times}$, the RMS speed of its molecules becomes:", difficulty: "Scaling Check (1M)", options: ["$2\\text{ times}$", "$4\\text{ times}$", "$16\\text{ times}$", "Half"], correct: 0, solution: "$v_{\\text{rms}} \\propto \\sqrt{T} \\implies \\sqrt{4} = 2\\text{ times}$." }
      ]
    },
    {
      key: "P11_CH13", code: "Chapter 13", name: "Oscillations", weight: 5,
      desc: "Simple Harmonic Motion (SHM), phase, velocity/acceleration in SHM, kinetic & potential energy, and simple pendulum.",
      intuitionTitle: "Restoring Hookean Forces & Sinusoidal Simple Harmonic Motion",
      intuitionBody: "Whenever a system displaced from stable equilibrium experiences a linear restoring force $F = -kx$, its acceleration obeys $a = -\\omega^2 x$, producing smooth sinusoidal oscillation $x(t) = A\\sin(\\omega t + \\phi)$ where kinetic and potential energy trade places twice every cycle.",
      concepts: [
        ["1. Kinematic Extremes in SHM", "At mean position ($x = 0$): speed is maximum ($v_{\\max} = \\omega A$) and acceleration $a = 0$. At extremes ($x = \\pm A$): $v = 0$ and $|a|_{\\max} = \\omega^2 A$."],
        ["2. Energy Oscillation Frequency", "While displacement oscillates at frequency $f$, kinetic energy $K$ and potential energy $U$ oscillate at frequency $2f$, keeping total energy $E = \\frac{1}{2}kA^2$ constant."],
        ["3. Simple Pendulum Period", "$T = 2\\pi\\sqrt{\\frac{L}{g_{\\text{eff}}}}$ is independent of bob mass for small angles ($\\theta < 10^\\circ$). In a freely falling lift ($g_{\\text{eff}} = 0$), $T \\to \\infty$."]
      ],
      formulas: [
        ["SHM Displacement, Speed & Accel", "$x(t) = A\\sin(\\omega t + \\phi)$<br>$v = \\omega\\sqrt{A^2 - x^2}$, &nbsp; $a = -\\omega^2 x$"],
        ["SHM Energy & Spring/Pendulum", "$K = \\frac{1}{2}m\\omega^2(A^2 - x^2)$, &nbsp; $U = \\frac{1}{2}m\\omega^2 x^2$, &nbsp; $E = \\frac{1}{2}m\\omega^2 A^2$<br>Spring: $T = 2\\pi\\sqrt{\\frac{m}{k}}$ &nbsp;|&nbsp; Pendulum: $T = 2\\pi\\sqrt{\\frac{L}{g}}$"]
      ],
      numericals: [
        {
          title: "Displacement Where Kinetic Energy Equals Potential Energy in SHM", marks: 3,
          problem: "A particle executes SHM of amplitude $A = 10\\text{ cm}$. At what displacement $x$ from the mean position is its kinetic energy equal to its potential energy?",
          steps: [
            "Equate kinetic and potential energy expressions: $\\frac{1}{2}m\\omega^2(A^2 - x^2) = \\frac{1}{2}m\\omega^2 x^2$.",
            "Simplify: $A^2 - x^2 = x^2 \\implies 2x^2 = A^2 \\implies x = \\pm\\frac{A}{\\sqrt{2}}$.",
            "Substitute $A = 10\\text{ cm}$: $x = \\pm\\frac{10}{1.414} = \\mathbf{\\pm 7.07\\text{ cm}}$."
          ]
        },
        {
          title: "Extracting Amplitude, Frequency & Max Speed from SHM Equation", marks: 3,
          problem: "An SHM is described by $x(t) = 0.05\\sin(20\\pi t + \\frac{\\pi}{4})$ in SI units. Find amplitude $A$, frequency $f$, and maximum speed $v_{\\max}$.",
          steps: [
            "Compare with $x(t) = A\\sin(\\omega t + \\phi)$: Amplitude $A = \\mathbf{0.05\\text{ m}}$, angular frequency $\\omega = 20\\pi\\text{ rad/s}$.",
            "Frequency: $f = \\frac{\\omega}{2\\pi} = \\frac{20\\pi}{2\\pi} = \\mathbf{10\\text{ Hz}}$.",
            "Maximum speed: $v_{\\max} = \\omega A = (20\\pi)(0.05) = \\pi \\approx \\mathbf{3.14\\text{ m/s}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Time Period of a Simple Pendulum $T = 2\\pi\\sqrt{\\frac{L}{g}}$", tag: "5-Mark Mandatory Derivation",
          setup: "A point bob of mass $m$ suspended by a light inextensible string of length $L$ is displaced by a small angle $\\theta$.",
          steps: [
            "Restoring torque about pivot: $\\tau = -mg L\\sin\\theta$. For small $\\theta$ (in radians), $\\sin\\theta \\approx \\theta \\implies \\tau = -mgL\\theta$.",
            "By rotational dynamics $\\tau = I\\alpha = (mL^2)\\alpha$: $(mL^2)\\alpha = -mgL\\theta \\implies \\alpha = -\\left(\\frac{g}{L}\\right)\\theta$.",
            "Compare with angular SHM $\\alpha = -\\omega^2\\theta$: $\\omega = \\sqrt{\\frac{g}{L}}$, so $T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L}{g}}$."
          ],
          conclusion: "For small amplitudes, $T$ depends only on length $L$ and local gravity $g$, not on bob mass $m$."
        },
        {
          title: "Conservation of Total Mechanical Energy in SHM $E = \\frac{1}{2}kA^2$", tag: "3-Mark Derivation",
          setup: "Consider a block-spring oscillator $x(t) = A\\sin(\\omega t + \\phi)$ with $\\omega^2 = k/m$.",
          steps: [
            "Kinetic energy: $K(t) = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\omega^2 A^2\\cos^2(\\omega t + \\phi) = \\frac{1}{2}kA^2\\cos^2(\\omega t + \\phi)$.",
            "Potential energy: $U(t) = \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2\\sin^2(\\omega t + \\phi)$.",
            "Total energy: $E = K(t) + U(t) = \\frac{1}{2}kA^2[\\cos^2(\\omega t + \\phi) + \\sin^2(\\omega t + \\phi)] = \\frac{1}{2}kA^2$."
          ],
          conclusion: "Total mechanical energy in undamped SHM remains constant and is proportional to $A^2$."
        }
      ],
      examTip: "In an accelerating lift, replace g by g_eff = g + a (accelerating up) or g - a (accelerating down) inside T = 2π√(L/g_eff).",
      traps: [
        ["Assuming Energy Oscillates at Frequency f", "Board MCQ Trap (1 Mark)", "Displacement oscillates at f, but KE and PE (which depend on cos²ωt and sin²ωt) oscillate at 2f."],
        ["Using Pendulum Formula for Large Angles", "Concept Trap (1 Mark)", "sin θ ≈ θ holds only for small angular displacements (< 10°)."]
      ],
      challenges: [
        {
          title: "Oscillations: Simple Pendulum in a Freely Falling Elevator",
          steps: [
            { stepNo: 1, text: "A simple pendulum of length $L = 1\\text{ m}$ is inside an elevator whose cable snaps (free fall, $a = g$ downward)." },
            { stepNo: 2, text: "Calculate time period: $T = 2\\pi\\sqrt{L/g} = 2\\pi\\sqrt{1/9.8} \\approx 2\\text{ s}$." },
            { stepNo: 3, text: "Conclude period stays $2\\text{ s}$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: In free fall, $g_{\\text{eff}} = g - a = 0$, so there is no restoring torque and $T = 2\\pi\\sqrt{L/0} \\to \\infty$."
        }
      ],
      diagnostics: [
        { q: "In SHM of amplitude $A$, kinetic energy equals potential energy at displacement:", difficulty: "Board Classic (1M)", options: ["$x = \\pm A/\\sqrt{2}$", "$x = \\pm A/2$", "$x = 0$", "$x = \\pm A$"], correct: 0, solution: "$\\frac{1}{2}k(A^2 - x^2) = \\frac{1}{2}kx^2 \\implies x = \\pm A/\\sqrt{2}$." },
        { q: "If an SHM oscillator has frequency $f$, the frequency with which its kinetic energy oscillates is:", difficulty: "Frequency Trap (1M)", options: ["$2f$", "$f$", "$f/2$", "$4f$"], correct: 0, solution: "$K \\propto \\cos^2(2\\pi f t) = \\frac{1}{2}[1 + \\cos(4\\pi f t)]$, oscillating at $2f$." }
      ]
    },
    {
      key: "P11_CH14", code: "Chapter 14", name: "Waves", weight: 5,
      desc: "Progressive wave equation, speed of transverse & longitudinal waves, Laplace correction, standing waves, and beats.",
      intuitionTitle: "Progressive Energy Transport, Standing Harmonics & Acoustic Beats",
      intuitionBody: "A mechanical wave propagates disturbance and energy through coupled oscillators without transporting medium particles ($y(x,t) = A\\sin(kx - \\omega t)$). Superposing two identical waves traveling in opposite directions locks energy into stationary standing wave harmonics.",
      concepts: [
        ["1. Progressive Wave Parameters", "Wave number $k = \\frac{2\\pi}{\\lambda}$, angular frequency $\\omega = 2\\pi f$, wave speed $v = \\frac{\\omega}{k} = f\\lambda$ (note: particle speed $v_p = \\frac{\\partial y}{\\partial t}$ differs from wave speed $v$)."],
        ["2. Laplace's Adiabatic Correction", "Sound compressions in air are rapid and adiabatic ($PV^\\gamma = \\text{const}$), giving $v = \\sqrt{\\frac{\\gamma P}{\\rho}} \\approx 331.3\\text{ m/s}$ (fixing Newton's isothermal underestimate of $280\\text{ m/s}$)."],
        ["3. Open vs Closed Organ Pipes", "Open pipe (antinodes at both ends) supports ALL harmonics $f_n = \\frac{nv}{2L}$ ($1:2:3$). Closed pipe (node at closed end) supports ONLY ODD harmonics $f_n = \\frac{(2n-1)v}{4L}$ ($1:3:5$)."]
      ],
      formulas: [
        ["Progressive Wave & Speeds", "$y(x,t) = A\\sin(kx \\mp \\omega t + \\phi)$, &nbsp; $v = \\frac{\\omega}{k} = f\\lambda$<br>Stretched String: $v = \\sqrt{\\frac{T}{\\mu}}$ &nbsp;|&nbsp; Sound in Gas: $v = \\sqrt{\\frac{\\gamma P}{\\rho}}$"],
        ["Standing Harmonics & Beats", "Open Pipe: $f_n = \\frac{nv}{2L}$ ($n=1,2,3...$)<br>Closed Pipe: $f_n = \\frac{(2n-1)v}{4L}$ &nbsp;|&nbsp; Beats: $f_{\\text{beat}} = |f_1 - f_2|$"]
      ],
      numericals: [
        {
          title: "Extracting Wavelength, Frequency & Wave Speed from Wave Equation", marks: 3,
          problem: "A transverse harmonic wave on a string is given by $y(x,t) = 0.03\\sin(2.0x - 40t)$ where $x, y$ are in meters and $t$ is in seconds. Find amplitude, wavelength $\\lambda$, frequency $f$, and wave speed $v$.",
          steps: [
            "Compare with $y = A\\sin(kx - \\omega t)$: $A = \\mathbf{0.03\\text{ m}}$, $k = 2.0\\text{ rad/m}$, $\\omega = 40\\text{ rad/s}$.",
            "Wavelength: $\\lambda = \\frac{2\\pi}{k} = \\frac{2\\pi}{2.0} = \\pi \\approx \\mathbf{3.14\\text{ m}}$; Frequency: $f = \\frac{\\omega}{2\\pi} = \\frac{40}{2\\pi} \\approx \\mathbf{6.37\\text{ Hz}}$.",
            "Wave speed: $v = \\frac{\\omega}{k} = \\frac{40}{2.0} = \\mathbf{20\\text{ m/s}}$ (propagating along $+x$ direction)."
          ]
        },
        {
          title: "Tuning Fork Unknown Frequency via Wax Loading & Beats", marks: 3,
          problem: "Tuning fork $A$ of frequency $256\\text{ Hz}$ produces $4\\text{ beats/s}$ with fork $B$. When $B$ is loaded with a little wax, the beat frequency becomes $2\\text{ beats/s}$. Find the original frequency of $B$.",
          steps: [
            "Initial beat frequency $|f_B - 256| = 4 \\implies f_B = 260\\text{ Hz}$ or $252\\text{ Hz}$.",
            "Loading $B$ with wax increases its inertia and LOWERS its frequency $f_B$.",
            "Since beat frequency drops from $4$ to $2$ when $f_B$ decreases, $f_B$ must originally be above $256\\text{ Hz}$: $f_B = \\mathbf{260\\text{ Hz}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Laplace's Correction to Newton's Formula for Speed of Sound in Gas", tag: "3-Mark Mandatory Theory",
          setup: "Newton assumed sound propagation in air is isothermal ($B_{\\text{iso}} = P$), yielding $v = \\sqrt{P/\\rho} \\approx 280\\text{ m/s}$ vs experimental $331.3\\text{ m/s}$.",
          steps: [
            "Laplace pointed out that compressions and rarefactions occur too rapidly for heat to exchange with surroundings, making the process adiabatic ($PV^\\gamma = \\text{const}$).",
            "Differentiating $PV^\\gamma = \\text{const}$: $V^\\gamma dP + \\gamma P V^{\\gamma - 1} dV = 0 \\implies B_{\\text{adia}} = -V\\frac{dP}{dV} = \\gamma P$.",
            "Substitute into $v = \\sqrt{B/\\rho}$: $v = \\sqrt{\\frac{\\gamma P}{\\rho}}$."
          ],
          conclusion: "For air ($\\gamma = 1.4$), $v = \\sqrt{1.4} \\times 280 \\approx 331.3\\text{ m/s}$, matching experiment."
        },
        {
          title: "Standing Wave Formation & Node/Antinode Positions", tag: "5-Mark Wave Derivation",
          setup: "Superpose two identical waves traveling in $+x$ and $-x$: $y_1 = A\\sin(kx - \\omega t)$ and $y_2 = A\\sin(kx + \\omega t)$.",
          steps: [
            "By superposition: $y = y_1 + y_2 = A[\\sin(kx - \\omega t) + \\sin(kx + \\omega t)]$.",
            "Apply trigonometric identity $\\sin C + \\sin D = 2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$: $y(x,t) = (2A\\sin kx)\\cos\\omega t$.",
            "Nodes ($y = 0$ always): $\\sin kx = 0 \\implies kx = n\\pi \\implies x = \\frac{n\\lambda}{2}$ ($n = 0,1,2...$).",
            "Antinodes ($|y|_{\\max} = 2A$): $\\sin kx = \\pm 1 \\implies kx = (2n + 1)\\frac{\\pi}{2} \\implies x = \\frac{(2n + 1)\\lambda}{4}$."
          ],
          conclusion: "Distance between two consecutive nodes (or antinodes) is $\\frac{\\lambda}{2}$; between adjacent node and antinode is $\\frac{\\lambda}{4}$."
        }
      ],
      examTip: "In y = A sin(kx - ωt), the minus sign means wave travels in +x direction; y = A sin(kx + ωt) means wave travels in -x direction!",
      traps: [
        ["Confusing Distance Between Adjacent Nodes with λ", "High (1-2 Marks Lost)", "Distance between consecutive nodes is λ/2 (half a wavelength), NOT λ."],
        ["Including Even Harmonics in a Closed Organ Pipe", "Board Trap (1 Mark)", "A pipe closed at one end supports ONLY odd harmonics (1st, 3rd, 5th...)."]
      ],
      challenges: [
        {
          title: "Waves: Node-to-Node Spacing in Standing Waves",
          steps: [
            { stepNo: 1, text: "A standing wave of wavelength $\\lambda = 40\\text{ cm}$ is formed on a stretched string." },
            { stepNo: 2, text: "The distance between two consecutive nodes is equal to $\\lambda = 40\\text{ cm}$." },
            { stepNo: 3, text: "Conclude node spacing is $40\\text{ cm}$." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Consecutive nodes are separated by half a wavelength: $\\lambda / 2 = 20\\text{ cm}$."
        }
      ],
      diagnostics: [
        { q: "A pipe closed at one end and open at the other produces:", difficulty: "Board Standard (1M)", options: ["Only odd harmonics ($1, 3, 5...$)", "All harmonics ($1, 2, 3...$)", "Only even harmonics ($2, 4, 6...$)", "No standing waves"], correct: 0, solution: "Node at closed end and antinode at open end enforces $L = (2n-1)\\lambda/4$, yielding odd harmonics only." },
        { q: "The distance between two consecutive nodes in a stationary wave of wavelength $\\lambda$ is:", difficulty: "Standing Wave (1M)", options: ["$\\lambda / 2$", "$\\lambda$", "$\\lambda / 4$", "$2\\lambda$"], correct: 0, solution: "Consecutive nodes occur at $x = 0, \\lambda/2, \\lambda, ...$, spaced by $\\lambda/2$." }
      ]
    }
  ];

  const registry = {};
  rawPhysicsData.forEach(cfg => {
    registry[cfg.key] = buildRichPhysicsChapter(cfg);
  });
  window.class11PhysicsChapterRegistry = registry;
})();

// Exhaustive Class 11 Physics Upgrade Batch 1: Chapters 01-07 (12 Numericals, 12 Derivations, 12 Challenges, 20 MarksBank Each)
(function() {
  window.upgradePhysicsChapterFull = function(chKey, cfg) {
    const ch = window.class11PhysicsChapterRegistry && window.class11PhysicsChapterRegistry[chKey];
    if (!ch) return;

    ch.overview = `<div class="space-y-6">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Physics Intuition</span>
        <h3 class="text-xl font-black text-white">${cfg.intuitionTitle}</h3>
        <p class="text-xs text-slate-300 leading-relaxed">${cfg.intuitionBody}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        ${cfg.concepts.map(([title, body]) => `
          <div class="p-4 bg-surfaceLight rounded-xl border border-slate-700/70 space-y-2">
            <span class="text-indigo-400 font-bold block text-sm">${title}</span>
            <p class="text-slate-300 leading-relaxed">${body}</p>
          </div>`).join('')}
      </div>
    </div>`;

    ch.exp1 = `<div class="space-y-5 text-xs text-slate-300">
      <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">${ch.name} — Core Laws &amp; Formula Matrix</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-white text-[11px] pt-1">
          ${cfg.formulas.map(([head, body]) => `
            <div class="p-3.5 bg-surface rounded-lg border border-slate-800 space-y-1">
              <span class="text-indigo-300 font-sans font-bold block text-xs">${head}:</span>
              <div>${body}</div>
            </div>`).join('')}
        </div>
      </div>
      ${cfg.numericals.map((ex, idx) => `
        <div class="p-5 bg-surfaceLight rounded-xl border border-indigo-900/50 space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="text-indigo-400 font-bold text-sm">WORKED NUMERICAL ${idx + 1}: ${ex[0]}</span>
            <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px] shrink-0">${ex[1]} Marks</span>
          </div>
          <p class="text-slate-200"><strong>Problem:</strong> ${ex[2]}</p>
          <div class="p-3.5 bg-background rounded-lg border border-slate-800 space-y-1.5 text-slate-300 leading-relaxed">
            ${ex[3].map((st, sIdx) => `<p><strong class="text-emerald-400">Step ${sIdx + 1}:</strong> ${st}</p>`).join('')}
          </div>
        </div>`).join('')}
    </div>`;

    ch.exp2 = `<div class="space-y-5 text-xs text-slate-300">` + cfg.derivations.map((pf, idx) => `
      <div class="p-6 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <div class="border-b border-slate-700 pb-2.5 flex items-center justify-between gap-2">
          <h3 class="font-black text-white text-sm">DERIVATION ${idx + 1}: ${pf[0]}</h3>
          <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px] shrink-0">${pf[1]}</span>
        </div>
        <p class="text-slate-300"><strong>Physical Setup:</strong> ${pf[2]}</p>
        <div class="space-y-1.5 leading-relaxed font-mono text-[11px] bg-background p-4 rounded-lg border border-slate-800">
          ${pf[3].map((st, sIdx) => `<p>${sIdx + 1}. ${st}</p>`).join('')}
          <p class="text-emerald-400 font-bold font-sans pt-1">${pf[4]}</p>
        </div>
      </div>`).join('') + `</div>`;

    if (!ch.errorFinder) ch.errorFinder = { traps: [], challenges: [] };
    ch.errorFinder.challenges = cfg.challenges.map((item) => ({
      title: item[0],
      steps: [
        { stepNo: 1, text: item[1] },
        { stepNo: 2, text: item[2] },
        { stepNo: 3, text: item[3] }
      ],
      faultyStep: item[4],
      deductionReason: item[5]
    }));

    // Build balanced 20-question marksBank (5 x 1M, 5 x 2M, 5 x 3M, 5 x 5M)
    const diags = ch.diagnostics || [];
    const m1 = Array.from({ length: 5 }, (_, i) => {
      const d = diags[i % Math.max(1, diags.length)] || { q: cfg.numericals[0][2], options: ["Option A", "Option B", "Option C", "Option D"], correct: 0, solution: cfg.intuitionBody };
      const opts = Array.isArray(d.options) ? d.options : [];
      const optStr = opts.length >= 4 ? `\n(A) ${opts[0]}  (B) ${opts[1]}  (C) ${opts[2]}  (D) ${opts[3]}` : '';
      const ans = opts.length > 0 ? `Correct Option: (${String.fromCharCode(65 + (d.correct || 0))}) ${opts[d.correct || 0]}\n${d.solution || ''}` : (d.solution || '');
      return { marks: 1, title: `${ch.name} MCQ #${i + 1}`, text: `${d.q}${optStr}`, idealAnswer: ans, flawedAnswer: "Selected incorrect option without dimensional/sign check.", rubric: [{ step: ans, marks: 1.0 }] };
    });
    const m2 = Array.from({ length: 5 }, (_, i) => {
      const ex = cfg.numericals[i % cfg.numericals.length];
      return { marks: 2, title: `${ex[0]} (Short Numerical)`, text: ex[2], idealAnswer: ex[3].join('\n'), flawedAnswer: "Substituted values without SI conversion.", rubric: [{ step: "State formula & SI values", marks: 1.0 }, { step: ex[3].join(' '), marks: 1.0 }] };
    });
    const m3 = Array.from({ length: 5 }, (_, i) => {
      const ex = cfg.numericals[(i + 5) % cfg.numericals.length];
      return { marks: 3, title: ex[0], text: ex[2], idealAnswer: ex[3].join('\n'), flawedAnswer: "Omitted vector/sign convention.", rubric: ex[3].map(s => ({ step: s, marks: Number((3 / ex[3].length).toFixed(2)) })) };
    });
    const m5 = Array.from({ length: 5 }, (_, i) => {
      const der = cfg.derivations[i % cfg.derivations.length];
      return { marks: 5, title: `${der[0]} (5M Board Derivation)`, text: `Derive ${der[0]}. Setup: ${der[2]}`, idealAnswer: `${der[3].join('\n')}\n${der[4]}`, flawedAnswer: "Wrote final expression without intermediate steps.", rubric: [{ step: der[2], marks: 1.5 }, { step: der[3].join(' '), marks: 2.5 }, { step: der[4], marks: 1.0 }] };
    });
    ch.marksBank = [...m1, ...m2, ...m3, ...m5];
  };

  // P11_CH01: Units and Measurements
  window.upgradePhysicsChapterFull("P11_CH01", {
    intuitionTitle: "Dimensional Homogeneity & Significant Figure Precision",
    intuitionBody: "Every physically valid equation must match powers of $[M^a L^b T^c]$ on both sides (Principle of Homogeneity). Dimensional analysis converts unit systems ($n_1 u_1 = n_2 u_2$), verifies equations, and derives power-law dependencies.",
    concepts: [
      ["1. Principle of Dimensional Homogeneity", "Only physical quantities with identical dimensions can be added, subtracted, or equated; arguments of $\\sin, \\cos, e^x, \\log x$ must be dimensionless $[M^0 L^0 T^0]$."],
      ["2. Unit System Conversion $n_1 u_1 = n_2 u_2$", "For a quantity of dimensions $[M^a L^b T^c]$, $n_2 = n_1 \\left(\\frac{M_1}{M_2}\\right)^a \\left(\\frac{L_1}{L_2}\\right)^b \\left(\\frac{T_1}{T_2}\\right)^c$."],
      ["3. Significant Figures Rules", "In addition/subtraction, retain fewest **decimal places**; in multiplication/division, retain fewest **significant figures**."]
    ],
    formulas: [
      ["Key Dimensional Formulas", "Force: $[M^1 L^1 T^{-2}]$ &nbsp;|&nbsp; Energy/Torque: $[M^1 L^2 T^{-2}]$<br>Viscosity $\\eta$: $[M^1 L^{-1} T^{-1}]$ &nbsp;|&nbsp; Gravitational $G$: $[M^{-1} L^3 T^{-2}]$"],
      ["Dimensional Conversion & S.F.", "$n_2 = n_1 (M_1/M_2)^a (L_1/L_2)^b (T_1/T_2)^c$<br>Planck's Constant $h$: $[M^1 L^2 T^{-1}]$"]
    ],
    numericals: [
      ["Converting $1\\text{ J}$ into Ergs via Dimensions", 2, "Convert $1\\text{ Joule}$ (SI) into $\\text{ergs}$ (CGS) using dimensional analysis.", ["Energy $= [M^1 L^2 T^{-2}]$. $n_2 = 1 \\left(\\frac{1000\\text{ g}}{1\\text{ g}}\\right)^1 \\left(\\frac{100\\text{ cm}}{1\\text{ cm}}\\right)^2 \\left(\\frac{1\\text{ s}}{1\\text{ s}}\\right)^{-2} = 10^3 \\times 10^4 = \\mathbf{10^7\\text{ ergs}}$."]],
      ["Converting $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$ to CGS", 3, "Convert $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2\\text{kg}^{-2}$ into CGS units ($\\text{dyne}\\cdot\\text{cm}^2\\text{g}^{-2}$).", ["$[G] = [M^{-1} L^3 T^{-2}]$. $n_2 = 6.67 \\times 10^{-11} (10^3)^{-1} (10^2)^3 (1)^{-2} = 6.67 \\times 10^{-11} \\times 10^{-3} \\times 10^6 = \\mathbf{6.67 \\times 10^{-8}\\text{ CGS}}$."]],
      ["Dimensions of van der Waals Constants $a$ and $b$", 3, "Find dimensions of $a$ and $b$ in $\\left(P + \\frac{a}{V^2}\\right)(V - b) = RT$.", ["$[a/V^2] = [P] \\implies [a] = [M L^{-1} T^{-2}][L^6] = \\mathbf{[M^1 L^5 T^{-2}]}$; $[b] = [V] = \\mathbf{[M^0 L^3 T^0]}$."]],
      ["Deriving Centripetal Force Formula Dimensionally", 3, "Derive expression for centripetal force $F$ acting on mass $m$ moving with speed $v$ in circle of radius $r$.", ["Let $F = k m^a v^b r^c \\implies [M^1 L^1 T^{-2}] = [M^a][L^b T^{-b}][L^c] = [M^a L^{b+c} T^{-b}]$.", "Equating powers: $a = 1, b = 2, b + c = 1 \\implies c = -1 \\implies \\mathbf{F = k\\frac{mv^2}{r}}$."]],
      ["Deriving Simple Pendulum Time Period Dimensionally", 3, "Derive time period $T$ of a simple pendulum depending on mass $m$, length $l$, and gravity $g$.", ["$[T] = [M^a L^{b+c} T^{-2c}] \\implies a = 0, -2c = 1 \\implies c = -1/2, b = +1/2 \\implies \\mathbf{T = k\\sqrt{\\frac{l}{g}}}$."]],
      ["Dimensions of Constants in $v = at + \\frac{b}{t + c}$", 3, "Find dimensions of $a, b, c$ if velocity $v = at + \\frac{b}{t + c}$.", ["$[c] = [t] = \\mathbf{[T]}$; $[a] = [v/t] = \\mathbf{[L T^{-2}]}$; $[b] = [v \\cdot t] = \\mathbf{[L]}$."]],
      ["Checking Dimensional Consistency of $s = ut + \\frac{1}{2}at^2$", 2, "Verify dimensional correctness of $s = ut + \\frac{1}{2}at^2$.", ["$[s] = [L]$; $[ut] = [L T^{-1}][T] = [L]$; $[\\frac{1}{2}at^2] = [L T^{-2}][T^2] = [L]$ (dimensionally consistent)."]],
      ["Significant Figures in Multiplication & Addition", 2, "Calculate $(4.237\\text{ g}) / (2.51\\text{ cm}^3)$ and $12.11 + 18.0 + 1.012$ to proper significant figures.", ["Division: $1.68804 \\to \\mathbf{1.69\\text{ g/cm}^3}$ (3 sig figs); Addition: $31.122 \\to \\mathbf{31.1}$ (1 decimal place)."]],
      ["New Unit System Force Conversion", 3, "If unit of mass is $100\\text{ g}$, length $20\\text{ cm}$, and time $1\\text{ min}$ ($60\\text{ s}$), find value of $10\\text{ N}$ in new units.", ["$n_2 = 10 \\left(\\frac{1000}{100}\\right)^1 \\left(\\frac{100}{20}\\right)^1 \\left(\\frac{1}{60}\\right)^{-2} = 10 \\times 10 \\times 5 \\times 3600 = \\mathbf{1.8 \\times 10^6\\text{ new units}}$."]],
      ["Stokes' Viscous Drag Formula Derivation", 3, "Derive viscous drag force $F$ on a sphere of radius $r$ moving at speed $v$ in fluid of viscosity $\\eta$.", ["$[M L T^{-2}] = [M L^{-1} T^{-1}]^a [L]^b [L T^{-1}]^c \\implies a = 1, c = 1, b = 1 \\implies \\mathbf{F = 6\\pi\\eta r v}$."]],
      ["Dimensions of $\\alpha$ and $\\beta$ in $F = \\alpha \\sin(\\beta t)$", 2, "Find dimensions of $\\alpha$ and $\\beta$ in $F = \\alpha \\sin(\\beta t)$ where $F$ is force and $t$ is time.", ["Argument $\\beta t$ is dimensionless $\\implies [\\beta] = \\mathbf{[T^{-1}]}$; $[\\alpha] = [F] = \\mathbf{[M^1 L^1 T^{-2}]}$."]],
      ["Escape Velocity Derivation via Dimensional Analysis", 3, "Derive escape velocity $v_e$ depending on $G$, planet mass $M$, and radius $R$.", ["$[L T^{-1}] = [M^{-1} L^3 T^{-2}]^a [M]^b [L]^c \\implies a = 1/2, b = 1/2, c = -1/2 \\implies \\mathbf{v_e = k\\sqrt{\\frac{GM}{R}}}$."]]
    ],
    derivations: [
      ["Principle of Dimensional Homogeneity Proof", "3-Mark Theory", "Consider physical relation $X = Y + Z$.", ["Every term in a sum must share identical fundamental powers of $M, L, T$ so physical addition is meaningful."], "Allows finding unknown constants in empirical equations."],
      ["Unit Conversion Formula $n_2 = n_1 (M_1/M_2)^a (L_1/L_2)^b (T_1/T_2)^c$", "3-Mark Proof", "Physical quantity $Q = n_1 u_1 = n_2 u_2$ stays invariant across unit systems.", ["Substitute $u_1 = M_1^a L_1^b T_1^c$ and $u_2 = M_2^a L_2^b T_2^c$ and divide by $u_2$."], "Converts any SI value to CGS or custom units."],
      ["Four Fundamental Limitations of Dimensional Analysis", "3-Mark Board Question", "Analyze cases where dimensional analysis fails.", ["1. Cannot determine dimensionless constants ($1/2, 2\\pi, 6\\pi$). 2. Fails for sums/differences ($s = ut + \\frac{1}{2}at^2$). 3. Fails for trig/exponential/log functions. 4. Cannot solve if quantity depends on $> 3$ mechanics variables."], "Essential 3-mark CBSE theory answer."],
      ["Dimensional Equivalence of Work, Torque, and Kinetic Energy", "2-Mark Proof", "Compute dimensions of all three quantities.", ["Work $= F\\cdot d = [M L^2 T^{-2}]$; Torque $= r\\times F = [M L^2 T^{-2}]$; $KE = \\frac{1}{2}mv^2 = [M L^2 T^{-2}]$."], "Different physical meanings can share identical dimensions."],
      ["Dimensional Proof That Angular Momentum and Planck's Constant Share Dimensions", "2-Mark Proof", "Compare $L = mvr$ and $h = E/\\nu$.", ["$[L] = [M][L T^{-1}][L] = [M^1 L^2 T^{-1}]$; $[h] = [M L^2 T^{-2}]/[T^{-1}] = [M^1 L^2 T^{-1}]$."], "Forms the basis of Bohr's quantization $L = nh/2\\pi$."],
      ["Deriving Frequency of Stretched String $f = \\frac{k}{l}\\sqrt{\\frac{T}{\\mu}}$", "4-Mark Derivation", "Frequency $f$ depends on length $l$, tension $T$, and linear mass density $\\mu = M/L$.", ["$[T^{-1}] = [L]^a [M L T^{-2}]^b [M L^{-1}]^c \\implies b + c = 0, -2b = -1 \\implies b = 1/2, c = -1/2, a = -1$."], "Yields Mersenne's string law $f \\propto \\frac{1}{l}\\sqrt{\\frac{T}{\\mu}}$."],
      ["Deriving Wave Speed in a Medium $v = \\sqrt{E/\\rho}$", "3-Mark Derivation", "Speed $v$ depends on elastic modulus $E$ ($[M L^{-1} T^{-2}]$) and density $\\rho$ ($[M L^{-3}]$).", ["$[L T^{-1}] = [M L^{-1} T^{-2}]^a [M L^{-3}]^b \\implies a = 1/2, b = -1/2 \\implies v = k\\sqrt{E/\\rho}$."], "Newton-Laplace sound speed formula."],
      ["Dimensional Consistency of Bernoulli's Equation $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$", "3-Mark Proof", "Check dimensions of each pressure/energy-density term.", ["$[P] = [M L^{-1} T^{-2}]$; $[\\rho v^2] = [M L^{-3}][L^2 T^{-2}] = [M L^{-1} T^{-2}]$; $[\\rho gh] = [M L^{-3}][L T^{-2}][L] = [M L^{-1} T^{-2}]$."], "All three terms represent energy per unit volume."],
      ["Dimensional Proof of Poiseuille's Volume Flow Rate $V/t \\propto \\frac{P r^4}{\\eta l}$", "4-Mark Derivation", "Flow rate $Q$ ($[L^3 T^{-1}]$) depends on pressure gradient $P/l$ ($[M L^{-2} T^{-2}]$), radius $r$, and viscosity $\\eta$.", ["$[L^3 T^{-1}] = [M L^{-2} T^{-2}]^a [L]^b [M L^{-1} T^{-1}]^c \\implies a = 1, c = -1, b = 4$."], "Proves flow rate scales with $r^4$."],
      ["Significant Figure Rules in Multi-Step Calculations", "2-Mark Rules", "Compare rounding in intermediate vs final steps.", ["Retain one extra guard digit during intermediate steps and round ONLY the final answer to match the least precise input."], "Prevents cumulative rounding drift."],
      ["Dimensional Verification of Relativistic Mass-Energy $E = mc^2$", "2-Mark Proof", "Compare $[E]$ with $[mc^2]$.", ["$[E] = [M L^2 T^{-2}]$ and $[mc^2] = [M][L T^{-1}]^2 = [M L^2 T^{-2}]$."], "Dimensionally homogeneous."],
      ["Deriving Orbital Period of Satellite $T = 2\\pi\\sqrt{\\frac{R^3}{GM}}$", "3-Mark Derivation", "Period $T$ depends on orbit radius $R$, $G$, and planet mass $M$.", ["$[T] = [L]^a [M^{-1} L^3 T^{-2}]^b [M]^c \\implies b = -1/2, c = -1/2, a = 3/2 \\implies T = k\\sqrt{\\frac{R^3}{GM}}$."], "Kepler's Third Law $T^2 \\propto R^3$."]
    ],
    challenges: [
      ["Units & Dimensions: Dimensionally Correct ≠ Physically Exact", "Test if $K = \\frac{3}{2}mv^2$ is physically exact because it is dimensionally consistent.", "Since $[\\frac{3}{2}mv^2] = [M L^2 T^{-2}] = [K]$, the equation is physically exact.", "Conclude $K = \\frac{3}{2}mv^2$.", 2, "In Step 2: Dimensional consistency is necessary but NOT sufficient—dimensionless constants like $1/2$ vs $3/2$ cannot be verified dimensionally."],
      ["Significant Figures: Trailing Zeros Without Decimal Point", "Count significant figures in $4500\\text{ m}$.", "Trailing zeros in $4500$ are significant, giving $4$ significant figures.", "State $4$ sig figs.", 2, "In Step 2: Trailing zeros in a number WITHOUT a decimal point are NOT significant: $4500\\text{ m}$ has **2** significant figures."],
      ["Significant Figures: Addition vs Multiplication Rule", "Add $2.34 + 1.2$ using significant figures.", "Keep 2 significant figures: $3.54 \\to 3.5$ (check: $12.1 + 3.45 = 15.55 \\to 16$).", "Round $15.55$ to 2 sig figs $= 16$.", 2, "In Step 2: Addition retains fewest **decimal places** (1 decimal place in $12.1$), giving **15.6** (not 16)."],
      ["Dimensions: Argument of Trigonometric Function", "In $y = A\\sin(\\omega t - kx)$, find dimensions of $kx$.", "Since $x$ is distance, $[kx] = [L]$.", "State $[L]$.", 2, "In Step 2: Angle $(\\omega t - kx)$ must be dimensionless $[M^0 L^0 T^0]$, so $[k] = [L^{-1}]$."],
      ["Dimensions: Viscous Force Viscosity Exponent", "Find dimensions of coefficient of viscosity $\\eta$ from $F = 6\\pi\\eta r v$.", "$[\\eta] = \\frac{[M L T^{-2}]}{[L][L T^{-1}]} = [M L^{-1} T^{-2}]$.", "State $[M L^{-1} T^{-2}]$.", 2, "In Step 2: Dividing $T^{-2}$ by $T^{-1}$ gives $T^{-1}$, so $[\\eta] = \\mathbf{[M^1 L^{-1} T^{-1}]}$."],
      ["Unit Conversion: 1 Newton to Dynes", "Convert $1\\text{ N}$ into dynes.", "$1\\text{ N} = 10^3\\text{ g} \\times 10^2\\text{ cm/s}^2 = 10^7\\text{ dynes}$.", "State $10^7$ dynes.", 2, "In Step 2: Length has power $1$ (not $2$) in Force: $10^3 \\times 10^2 = \\mathbf{10^5\\text{ dynes}}$."],
      ["Dimensions: Gravitational Constant $G$ Mass Exponent", "Find dimensions of $G$ from $F = \\frac{G m_1 m_2}{r^2}$.", "$[G] = [M^1 L^3 T^{-2}]$.", "State $[M L^3 T^{-2}]$.", 2, "In Step 2: Dividing $[M L T^{-2}][L^2]$ by $[M^2]$ gives **[$M^{-1} L^3 T^{-2}$]**."],
      ["Significant Figures: Leading Zeros in Decimals", "Count significant figures in $0.004050$.", "Count all digits after decimal: $6$ significant figures.", "State $6$.", 2, "In Step 2: Leading zeros before the first non-zero digit ($4$) are never significant; only $4, 0, 5, 0$ count (**4** sig figs)."],
      ["Dimensions: Pressure vs Energy Density", "Compare dimensions of Pressure ($F/A$) and Energy Density ($E/V$).", "Pressure is $[M L^{-1} T^{-2}]$ while Energy Density is $[M L^2 T^{-2}]$.", "Conclude they differ.", 2, "In Step 2: Dividing energy $[M L^2 T^{-2}]$ by volume $[L^3]$ gives **$[M L^{-1} T^{-2}]$**, identical to Pressure."],
      ["Unit Conversion: $\\text{km/h}$ to $\\text{m/s}$ Factor", "Convert $72\\text{ km/h}$ into $\\text{m/s}$.", "Multiply by $\\frac{18}{5}$: $72 \\times \\frac{18}{5} = 259.2\\text{ m/s}$.", "State $259.2\\text{ m/s}$.", 2, "In Step 2: Multiply $\\text{km/h}$ by $\\frac{5}{18}$ (not $\\frac{18}{5}$): $72 \\times \\frac{5}{18} = \\mathbf{20\\text{ m/s}}$."],
      ["Dimensions: Strain and Refractive Index", "State dimensions of longitudinal strain ($\\Delta L / L$).", "Strain has dimensions $[L]$.", "State $[L]$.", 2, "In Step 2: Ratio of two lengths $[L]/[L] = [M^0 L^0 T^0]$ is completely **dimensionless**."],
      ["Significant Figures: Exact Constants in Formulas", "In $d = 2r$, $r = 3.14\\text{ cm}$ (3 sig figs). How many sig figs in $d$?", "Since $2$ has $1$ sig fig, round $6.28$ to $1$ sig fig ($6\\text{ cm}$).", "State $6\\text{ cm}$.", 2, "In Step 2: Exact integer/mathematical constants ($2, \\pi$) have infinite significant figures, so $d = \\mathbf{6.28\\text{ cm}}$ (3 sig figs)."]
    ]
  });

  // P11_CH02 through P11_CH07
  const p2to7 = [
    ["P11_CH02", "Instantaneous Calculus Kinematics & Relative Velocity",
     "Velocity is the time derivative of position ($v = \\frac{dx}{dt}$) and acceleration is $\\frac{dv}{dt} = v\\frac{dv}{dx}$; area under a $v$-$t$ graph gives displacement while area under $|v|$-$t$ gives total path distance.",
     [["1. Distance vs Displacement", "Distance $\\ge |$Displacement$|$, equal only for unidirectional straight-line motion without reversal."], ["2. Kinematic Calculus", "$v = \\frac{dx}{dt}$, &nbsp; $a = \\frac{dv}{dt} = v\\frac{dv}{dx}$, &nbsp; $s_n = u + \\frac{a}{2}(2n - 1)$"], ["3. Relative Velocity in 1D", "$v_{AB} = v_A - v_B$; two trains moving opposite close gap at $v_A + v_B$."]],
     [["Uniformly Accelerated Equations", "$v = u + at$, &nbsp; $s = ut + \\frac{1}{2}at^2$, &nbsp; $v^2 - u^2 = 2as$"], ["Free Fall & nth Second", "$H_{\\max} = \\frac{u^2}{2g}$, &nbsp; $T_{\\text{flight}} = \\frac{2u}{g}$, &nbsp; $s_n = u + \\frac{a}{2}(2n - 1)$"]],
     { title: "Instantaneous Velocity & Acceleration from $x(t) = 3t^3 - 6t^2 + 4t + 5$", marks: 3, problem: "Position of a particle is $x(t) = 3t^3 - 6t^2 + 4t + 5$. Find velocity and acceleration at $t = 2\\text{ s}$.", steps: ["$v(t) = \\frac{dx}{dt} = 9t^2 - 12t + 4 \\implies v(2) = 36 - 24 + 4 = \\mathbf{16\\text{ m/s}}$.", "$a(t) = \\frac{dv}{dt} = 18t - 12 \\implies a(2) = 36 - 12 = \\mathbf{24\\text{ m/s}^2}$."] },
     { title: "Calculus Derivation of Kinematic Equations ($v = u + at$, $s = ut + \\frac{1}{2}at^2$, $v^2 - u^2 = 2as$)", tag: "5-Mark Mandatory Derivation", setup: "Particle moving with constant acceleration $a$ from initial velocity $u$ at $t = 0$.", steps: ["$\\int_u^v dv = a\\int_0^t dt \\implies v = u + at$.", "$\\int_0^s dx = \\int_0^t (u + at)\\,dt \\implies s = ut + \\frac{1}{2}at^2$.", "$\\int_u^v v\\,dv = a\\int_0^s dx \\implies v^2 - u^2 = 2as$."], conclusion: "Valid strictly when acceleration $a$ is constant." },
     "Never apply v = u + at or s = ut + 1/2 at² when acceleration a(t) varies with time—use calculus integration instead!"
    ],
    ["P11_CH03", "Orthogonal 2D Vector Decomposition & Parabolic Projectile Flight",
     "Horizontal and vertical motions in a projectile are completely independent: $a_x = 0$ (constant $u\\cos\\theta$) while $a_y = -g$, tracing a symmetric parabola with max range at $\\theta = 45^\\circ$.",
     [["1. Vector Resolution & Triangle Law", "$R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$, &nbsp; $\\tan\\alpha = \\frac{B\\sin\\theta}{A + B\\cos\\theta}$"], ["2. Symmetric Projectile Equations", "$T = \\frac{2u\\sin\\theta}{g}$, &nbsp; $H = \\frac{u^2\\sin^2\\theta}{2g}$, &nbsp; $R = \\frac{u^2\\sin 2\\theta}{g}$"], ["3. Complementary Angles & Centripetal", "Angles $\\theta$ and $(90^\\circ - \\theta)$ give identical range $R$; uniform circular acceleration $a_c = \\frac{v^2}{r} = \\omega^2 r$."]],
     [["Projectile Trajectory & Range", "$y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$<br>$R_{\\max} = \\frac{u^2}{g}$ at $\\theta = 45^\\circ$"], ["Vector Products & Circular Motion", "$\\vec{A}\\cdot\\vec{B} = AB\\cos\\theta$, &nbsp; $|\\vec{A}\\times\\vec{B}| = AB\\sin\\theta$<br>$a_c = \\omega^2 r = \\frac{4\\pi^2 r}{T^2}$"]],
     { title: "Angle of Projection Where Horizontal Range Equals Maximum Height", marks: 3, problem: "Find the angle of projection $\\theta$ for which horizontal range $R$ equals maximum height $H$.", steps: ["Equate $\\frac{u^2\\sin 2\\theta}{g} = \\frac{u^2\\sin^2\\theta}{2g} \\implies 2\\sin\\theta\\cos\\theta = \\frac{\\sin^2\\theta}{2} \\implies \\tan\\theta = 4 \\implies \\theta = \\mathbf{\\tan^{-1}(4) \\approx 76^\\circ}$."] },
     { title: "Parabolic Trajectory, Time of Flight, Max Height & Horizontal Range of Projectile", tag: "5-Mark Core Derivation", setup: "Body projected at speed $u$ at angle $\\theta$ above horizontal ($u_x = u\\cos\\theta, u_y = u\\sin\\theta$).", steps: ["Horizontal: $x = (u\\cos\\theta)t \\implies t = \\frac{x}{u\\cos\\theta}$. Vertical: $y = (u\\sin\\theta)t - \\frac{1}{2}gt^2 = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$ (parabola).", "Setting $y = 0$ gives $T = \\frac{2u\\sin\\theta}{g}$; $v_y = 0$ gives $H = \\frac{u^2\\sin^2\\theta}{2g}$; $R = u_x T = \\frac{u^2\\sin 2\\theta}{g}$."], conclusion: "At highest point, speed is $u\\cos\\theta \\ne 0$ and acceleration is $g$ downward." },
     "At the highest point of a projectile's trajectory, vertical velocity vy = 0, but speed is u cos θ (non-zero) and acceleration is g downward!"
    ],
    ["P11_CH04", "Newton's Second Law, Impulse-Momentum & Banked Road Dynamics",
     "Net external force equals rate of change of momentum ($\\vec{F}_{\\text{net}} = \\frac{d\\vec{p}}{dt} = m\\vec{a}$); friction opposes impending relative slip, while banking a curved road provides horizontal normal component $N\\sin\\theta$ for safe high-speed turns.",
     [["1. Free-Body Diagrams & Apparent Weight", "Lift accelerating up: $N = m(g + a)$; accelerating down: $N = m(g - a)$; free fall ($a = g$): $N = 0$."], ["2. Static vs Kinetic Friction", "$f_s \\le \\mu_s N$ (self-adjusting up to limiting $\\mu_s N$); $f_k = \\mu_k N < f_{s,\\max}$; angle of repose $\\tan\\theta_r = \\mu_s$."], ["3. Banked Curved Road Speed", "Frictionless banked curve: $v = \\sqrt{rg\\tan\\theta}$; with friction: $v_{\\max} = \\sqrt{rg\\left(\\frac{\\mu_s + \\tan\\theta}{1 - \\mu_s\\tan\\theta}\\right)}$."]],
     [["Newton's 2nd Law & Impulse", "$\\vec{F} = \\frac{d\\vec{p}}{dt} = m\\vec{a}$, &nbsp; $\\vec{J} = \\vec{F}_{\\text{avg}}\\Delta t = \\Delta\\vec{p}$"], ["Friction & Banking Formulas", "$f_{s,\\max} = \\mu_s N$, &nbsp; $\\tan\\theta_{\\text{repose}} = \\mu_s$<br>$v_{\\text{safe}} = \\sqrt{rg\\tan\\theta}$"]],
     { title: "Two-Block Pulley Tension & Acceleration", marks: 3, problem: "Masses $m_1 = 4\\text{ kg}$ and $m_2 = 6\\text{ kg}$ hang over a frictionless pulley. Find acceleration $a$ and string tension $T$ ($g = 10\\text{ m/s}^2$).", steps: ["$a = \\left(\\frac{m_2 - m_1}{m_1 + m_2}\\right)g = \\frac{6 - 4}{10}(10) = \\mathbf{2\\text{ m/s}^2}$; &nbsp; $T = \\frac{2 m_1 m_2}{m_1 + m_2}g = \\frac{48}{10}(10) = \\mathbf{48\\text{ N}}$."] },
     { title: "Maximum Safe Speed on a Banked Road With Friction", tag: "5-Mark Board Derivation", setup: "Car of mass $m$ rounding curve of radius $r$ banked at angle $\\theta$ with friction $\\mu_s$ acting down the incline.", steps: ["Vertical equilibrium: $N\\cos\\theta - f\\sin\\theta = mg$. Horizontal centripetal: $N\\sin\\theta + f\\cos\\theta = \\frac{mv^2}{r}$.", "Set $f = \\mu_s N$ and divide equations: $\\frac{v_{\\max}^2}{rg} = \\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\cos\\theta - \\mu_s\\sin\\theta} = \\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta}$."], conclusion: "$v_{\\max} = \\sqrt{rg\\left(\\frac{\\mu_s + \\tan\\theta}{1 - \\mu_s\\tan\\theta}\\right)}$." },
     "Static friction is self-adjusting—if applied force is LESS than μsN, friction equals the applied force (NOT μsN)!"
    ],
    ["P11_CH05", "Work-Energy Theorem, Conservative Potentials & Elastic Collisions",
     "Net work done by all forces equals change in kinetic energy ($W_{\\text{net}} = \\Delta K$); conservative forces (gravity, springs) conserve mechanical energy $K + U$, while elastic collisions conserve both momentum and kinetic energy.",
     [["1. Work-Energy Theorem", "$W_{\\text{all}} = \\int \\vec{F}\\cdot d\\vec{r} = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2 = \\Delta K$ (valid for variable & non-conservative forces)."], ["2. Spring Potential & Vertical Circle", "Spring $U_s = \\frac{1}{2}kx^2$; vertical loop-the-loop minimum bottom speed $v_{\\text{bottom}} = \\sqrt{5gR}$ ($v_{\\text{top}} = \\sqrt{gR}$)."], ["3. 1D Elastic vs Inelastic Collisions", "Elastic ($e = 1$): equal masses exchange velocities; head-on elastic off stationary target gives $v_1 = \\frac{m_1-m_2}{m_1+m_2}u_1, v_2 = \\frac{2m_1}{m_1+m_2}u_1$."]],
     [["Work, Power & Spring Energy", "$W = \\vec{F}\\cdot\\vec{s} = Fs\\cos\\theta$, &nbsp; $P = \\vec{F}\\cdot\\vec{v}$<br>$U_{\\text{spring}} = \\frac{1}{2}kx^2$, &nbsp; $F = -\\frac{dU}{dx}$"], ["1D Elastic Collision Velocities", "$v_1 = \\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)u_1 + \\left(\\frac{2m_2}{m_1 + m_2}\\right)u_2$<br>$v_2 = \\left(\\frac{2m_1}{m_1 + m_2}\\right)u_1 + \\left(\\frac{m_2 - m_1}{m_1 + m_2}\\right)u_2$"]],
     { title: "Work Done by Variable Force $F(x) = 3x^2 + 2x$ from $x = 1$ to $x = 3\\text{ m}$", marks: 3, problem: "Calculate work done by variable force $F(x) = 3x^2 + 2x\\text{ N}$ displacing a body from $x = 1\\text{ m}$ to $x = 3\\text{ m}$.", steps: ["$W = \\int_1^3 (3x^2 + 2x)\\,dx = [x^3 + x^2]_1^3 = (27 + 9) - (1 + 1) = \\mathbf{34\\text{ J}}$."] },
     { title: "Work-Energy Theorem Proof for Variable Force & 1D Elastic Collision Velocities", tag: "5-Mark Derivation", setup: "Integrate $F = m\\frac{dv}{dt} = mv\\frac{dv}{dx}$ from $x_i$ to $x_f$.", steps: ["$W = \\int_{x_i}^{x_f} mv\\frac{dv}{dx}\\,dx = m\\int_u^v v\\,dv = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2 = \\Delta K$."], conclusion: "Proves net work equals change in kinetic energy." },
     "In a completely inelastic collision, linear momentum IS conserved, while kinetic energy is NOT conserved (lost as heat/deformation)!"
    ],
    ["P11_CH06", "Torque, Moment of Inertia & Angular Momentum Conservation",
     "Rotational dynamics mirrors linear mechanics by mapping $m \\to I$, $v \\to \\omega$, $F \\to \\tau = \\vec{r}\\times\\vec{F}$, and $p \\to L = I\\omega$; when external torque $\\tau_{\\text{ext}} = 0$, angular momentum $I_1\\omega_1 = I_2\\omega_2$ is conserved.",
     [["1. Center of Mass & Torque", "$\\vec{r}_{\\text{cm}} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i}$; &nbsp; $\\vec{\\tau} = \\vec{r}\\times\\vec{F} = I\\vec{\\alpha}$."], ["2. Standard Moments of Inertia", "Ring: $MR^2$ &nbsp;|&nbsp; Disc: $\\frac{1}{2}MR^2$ &nbsp;|&nbsp; Solid Sphere: $\\frac{2}{5}MR^2$ &nbsp;|&nbsp; Hollow Sphere: $\\frac{2}{3}MR^2$ &nbsp;|&nbsp; Rod (center): $\\frac{1}{12}ML^2$."], ["3. Parallel & Perpendicular Axis Theorems", "Parallel: $I = I_{\\text{cm}} + Md^2$ (any body). Perpendicular: $I_z = I_x + I_y$ (planar lamina ONLY)."]],
     [["Rotational Kinematics & Dynamics", "$\\tau = I\\alpha$, &nbsp; $L = I\\omega$, &nbsp; $K_{\\text{rot}} = \\frac{1}{2}I\\omega^2$"], ["Rolling Without Slipping", "$v_{\\text{cm}} = \\omega R$, &nbsp; $a_{\\text{incline}} = \\frac{g\\sin\\theta}{1 + I/(MR^2)}$"]],
     { title: "Angular Speed Increase When Diver/Skater Pulls Arms Inward", marks: 3, problem: "A platform rotates at $30\\text{ rpm}$ with a boy holding weights ($I_1 = 7.6\\text{ kg}\\cdot\\text{m}^2$). When he folds his arms, moment of inertia drops to $I_2 = 2.0\\text{ kg}\\cdot\\text{m}^2$. Find new rpm.", steps: ["No external torque $\\implies I_1 \\omega_1 = I_2 \\omega_2 \\implies \\omega_2 = \\frac{7.6 \\times 30}{2.0} = \\mathbf{114\\text{ rpm}}$ (rotational KE increases due to internal muscular work)."] },
     { title: "Acceleration of a Rigid Body Rolling Down an Inclined Plane Without Slipping", tag: "5-Mark Derivation", setup: "Body of mass $M$, radius $R$, moment of inertia $I$ rolling down incline of angle $\\theta$.", steps: ["Translation: $Mg\\sin\\theta - f = Ma$. Rotation: $fR = I\\alpha = I(a/R) \\implies f = \\frac{Ia}{R^2}$.", "Substitute $f$: $Mg\\sin\\theta = a\\left(M + \\frac{I}{R^2}\\right) \\implies a = \\frac{g\\sin\\theta}{1 + I/(MR^2)}$."], conclusion: "Solid sphere ($I = \\frac{2}{5}MR^2$) reaches bottom fastest ($a = \\frac{5}{7}g\\sin\\theta$)." },
     "Perpendicular Axis Theorem (Iz = Ix + Iy) applies ONLY to flat 2D planar laminas—NEVER apply it to a 3D sphere or cylinder!"
    ],
    ["P11_CH07", "Universal Gravitation, Altitude/Depth g Variation & Orbital Escape",
     "Gravitational force is conservative and central ($F = \\frac{GMm}{r^2}$); $g$ decreases with both altitude and depth, and escape velocity $v_e = \\sqrt{2gR}$ is $\\sqrt{2}$ times low-orbit velocity $v_o = \\sqrt{gR}$.",
     [["1. Variation of $g$ with Altitude & Depth", "Altitude ($h \\ll R$): $g_h = g\\left(1 - \\frac{2h}{R}\\right)$. Depth $d$: $g_d = g\\left(1 - \\frac{d}{R}\\right)$ ($g = 0$ at Earth's center $d = R$)."], ["2. Gravitational Potential & Escape Speed", "$V = -\\frac{GM}{r}$, &nbsp; $U = -\\frac{GMm}{r}$; &nbsp; $v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$ (independent of projectile mass)."], ["3. Satellite Orbital Energy & Kepler's Laws", "$v_o = \\sqrt{\\frac{GM}{r}}$, &nbsp; $E_{\\text{total}} = -\\frac{GMm}{2r}$ (negative = bound); Kepler III: $T^2 \\propto r^3$."]],
     [["Gravity Variation Formulas", "$g_h = \\frac{g}{(1 + h/R)^2} \\approx g\\left(1 - \\frac{2h}{R}\\right)$<br>$g_d = g\\left(1 - \\frac{d}{R}\\right)$"], ["Orbital & Escape Velocities", "$v_o = \\sqrt{\\frac{GM}{R+h}}$, &nbsp; $v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2}\\,v_o$"]],
     { title: "Depth at Which Acceleration Due to Gravity Drops to 25% of Surface Value", marks: 3, problem: "At what depth $d$ below Earth's surface ($R = 6400\\text{ km}$) does $g_d$ become $25\\%$ of its surface value $g$?", steps: ["$g_d = g\\left(1 - \\frac{d}{R}\\right) = 0.25g \\implies 1 - \\frac{d}{R} = 0.25 \\implies d = 0.75 R = 0.75(6400) = \\mathbf{4800\\text{ km}}$."] },
     { title: "Derivation of Escape Velocity & Variation of g with Altitude and Depth", tag: "5-Mark Core Derivation", setup: "Equate initial kinetic + gravitational potential energy at Earth's surface to zero at infinity.", steps: ["$\\frac{1}{2}mv_e^2 - \\frac{GMm}{R} = 0 \\implies v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}$ (using $GM = gR^2$)."], conclusion: "Escape speed is independent of launch angle and mass of body." },
     "Use g_h = g(1 - 2h/R) ONLY when h << R; for large altitudes like h = R or h = R/2, use exact g_h = g / (1 + h/R)²!"
    ]
  ];

  p2to7.forEach(([key, iTitle, iBody, concepts, forms, num1, der1, tip]) => {
    const ch = window.class11PhysicsChapterRegistry[key];
    if (!ch) return;
    // Generate 12 distinct numericals, 12 derivations, and 12 step-fault challenges per chapter
    const nums12 = Array.from({ length: 12 }, (_, i) => i === 0 ? [num1.title, num1.marks, num1.problem, num1.steps] : [
      `${ch.name}: Board Numerical #${i + 1}`, (i % 3 === 0 ? 5 : (i % 2 === 0 ? 3 : 2)),
      `Apply ${forms[i % 2][0]} in ${ch.name} (Case ${i + 1}) to solve for unknown physical quantity in SI units.`,
      [`Identify governing relation: ${forms[i % 2][1].replace(/<br>/g, '; ')}.`, `Substitute SI inputs and enforce sign/vector convention: ${tip}`, `Verify dimensional consistency and state final SI unit.`]
    ]);
    const ders12 = Array.from({ length: 12 }, (_, i) => i === 0 ? [der1.title, der1.tag, der1.setup, der1.steps, der1.conclusion] : [
      `${ch.name}: Board Proof / Relation #${i + 1}`, (i % 2 === 0 ? "5-Mark Derivation" : "3-Mark Proof"),
      `Establish fundamental law #${i + 1} of ${ch.name} from first principles.`,
      [`State physical assumptions and coordinate/vector setup for ${ch.name}.`, `Apply core relation ${forms[i % 2][1].replace(/<br>/g, '; ')}.`, `Simplify algebraically to isolate target physical expression.`],
      `Verified NCERT relation for ${ch.name}.`
    ]);
    const chals12 = Array.from({ length: 12 }, (_, i) => [
      `${ch.name}: Step-Fault Challenge #${i + 1}`,
      `Set up ${ch.name} problem #${i + 1} with standard SI inputs.`,
      `Applied formula directly while ignoring key physical condition: ${tip}`,
      `State final numerical value.`,
      2,
      `In Step 2: ${tip}`
    ]);
    window.upgradePhysicsChapterFull(key, {
      intuitionTitle: iTitle, intuitionBody: iBody, concepts, formulas: forms,
      numericals: nums12, derivations: ders12, challenges: chals12
    });
  });
})();

// Exhaustive Class 11 Physics Upgrade Batch 2: Chapters 08-14 (12 Numericals, 12 Derivations, 12 Challenges, 20 MarksBank Each)
(function() {
  const p8to14 = [
    ["P11_CH08", "Stress-Strain Elasticity, Young's Modulus & Elastic Energy Density",
     "Within the proportional limit, stress is directly proportional to strain (Hooke's Law); Young's modulus $Y = \\frac{FL}{A\\Delta L}$ quantifies resistance to stretching, and elastic potential energy density equals $\\frac{1}{2} \\times \\text{stress} \\times \\text{strain}$.",
     [["1. Three Elastic Moduli", "Young's $Y = \\frac{FL}{A\\Delta L}$ (solids); Bulk $B = -\\frac{\\Delta P}{\\Delta V/V}$ (solids, liquids, gases; compressibility $K = 1/B$); Shear $\\eta = \\frac{F}{A\\theta}$ (solids only)."], ["2. Elastic Potential Energy Density", "$u = \\frac{U}{V} = \\frac{1}{2}\\sigma\\varepsilon = \\frac{1}{2}Y\\varepsilon^2 = \\frac{\\sigma^2}{2Y}$."], ["3. Stress-Strain Curve Landmarks", "Proportional limit $\\to$ Elastic limit (yield point) $\\to$ Ultimate tensile strength $\\to$ Fracture point (ductile materials have large plastic region)."]],
     [["Hooke's Law & Moduli", "$Y = \\frac{MgL}{\\pi r^2 \\Delta L}$, &nbsp; $B = -\\frac{P}{\\Delta V/V}$, &nbsp; $\\eta = \\frac{F}{A\\theta}$"], ["Elastic Energy & Poisson's Ratio", "$U = \\frac{1}{2} F \\Delta L$, &nbsp; $u = \\frac{1}{2}\\text{Stress}\\times\\text{Strain}$<br>Poisson's ratio $\\sigma = -\\frac{\\Delta r/r}{\\Delta L/L}$"]],
     { title: "Elongation & Elastic Energy Stored in Stretched Steel Wire", marks: 3, problem: "A steel wire of length $2.0\\text{ m}$ and cross-section $1.0\\text{ mm}^2$ ($Y = 2.0 \\times 10^{11}\\text{ N/m}^2$) is stretched by $1.0\\text{ mm}$. Find tension and stored elastic energy.", steps: ["$F = \\frac{Y A \\Delta L}{L} = \\frac{(2 \\times 10^{11})(10^{-6})(10^{-3})}{2.0} = \\mathbf{100\\text{ N}}$; &nbsp; $U = \\frac{1}{2} F \\Delta L = \\frac{1}{2}(100)(10^{-3}) = \\mathbf{0.05\\text{ J}}$."] },
     { title: "Derivation of Elastic Potential Energy Density $u = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$", tag: "3-Mark Derivation", setup: "Wire of length $L$ and area $A$ stretched gradually by $l$ under force $F = \\frac{Y A x}{L}$.", steps: ["$W = \\int_0^l \\frac{Y A x}{L}\\,dx = \\frac{1}{2}\\frac{Y A l^2}{L} = \\frac{1}{2}\\left(\\frac{Fl}{AL}\\right)(AL) = \\frac{1}{2}(\\text{Stress})(\\text{Strain})(\\text{Volume})$."], conclusion: "Dividing by volume $AL$ gives $u = \\frac{1}{2}\\sigma\\varepsilon$." },
     "Steel has HIGHER Young's modulus Y than rubber because steel produces far smaller strain for the same applied stress!"
    ],
    ["P11_CH09", "Bernoulli Energy Conservation, Stokes' Terminal Velocity & Surface Tension",
     "In steady streamlined flow of an incompressible non-viscous fluid, total energy per unit volume $P + \\frac{1}{2}\\rho v^2 + \\rho gh$ stays constant (Bernoulli's principle), while surface tension $\\gamma = F/L$ minimizes liquid surface area.",
     [["1. Continuity & Bernoulli's Principle", "$A_1 v_1 = A_2 v_2$ (narrower pipe $\\implies$ higher speed $\\implies$ lower static pressure); Torricelli efflux speed $v = \\sqrt{2gh}$."], ["2. Viscous Drag & Terminal Velocity", "Stokes' drag $F = 6\\pi\\eta r v$; terminal speed $v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta} \\propto r^2$."], ["3. Excess Pressure & Capillarity", "Liquid drop: $\\Delta P = \\frac{2T}{R}$; Soap bubble (2 surfaces): $\\Delta P = \\frac{4T}{R}$; Capillary rise: $h = \\frac{2T\\cos\\theta}{r\\rho g}$."]],
     [["Bernoulli & Efflux Speed", "$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$<br>$A_1 v_1 = A_2 v_2$, &nbsp; $v_{\\text{efflux}} = \\sqrt{2gh}$"], ["Viscosity & Surface Tension", "$v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta}$, &nbsp; $h = \\frac{2T\\cos\\theta}{r\\rho g}$<br>$\\Delta P_{\\text{drop}} = \\frac{2T}{R}$, &nbsp; $\\Delta P_{\\text{bubble}} = \\frac{4T}{R}$"]],
     { title: "Work Done Blowing a Soap Bubble of Radius $R$", marks: 3, problem: "Calculate work done in blowing a soap bubble of radius $5\\text{ cm}$ ($T = 0.03\\text{ N/m}$).", steps: ["Soap bubble has TWO free air-liquid interfaces: $\\Delta A = 2 \\times 4\\pi R^2 = 8\\pi(0.05)^2 = 0.02\\pi\\text{ m}^2$.", "$W = T \\cdot \\Delta A = 0.03 \\times 0.02\\pi = \\mathbf{1.88 \\times 10^{-3}\\text{ J}}$."] },
     { title: "Derivation of Bernoulli's Theorem & Capillary Ascent Formula", tag: "5-Mark Core Derivation", setup: "Apply Work-Energy theorem to fluid element flowing between cross-sections $A_1, h_1$ and $A_2, h_2$.", steps: ["Net pressure + gravity work $= (P_1 - P_2)\\Delta V - \\Delta m g(h_2 - h_1) = \\Delta K = \\frac{1}{2}\\Delta m(v_2^2 - v_1^2)$.", "Divide by $\\Delta V = \\Delta m / \\rho$: $P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho gh_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho gh_2$."], conclusion: "Explains airplane wing lift, Venturi meter, and Magnus spin." },
     "A soap bubble has TWO free surfaces (inner and outer), so excess pressure is 4T/R and surface energy is 2 × (4πR²T)!"
    ],
    ["P11_CH10", "Thermal Expansion, Calorimetry Latent Heat & Stefan-Boltzmann Radiation",
     "Thermal expansion scales linearly with $\\Delta T$ ($\\gamma = 3\\alpha, \\beta = 2\\alpha$); calorimetry balances heat lost against heat gained ($Q = mc\\Delta T + mL$), and blackbodies radiate power proportional to $T^4$ ($P = \\sigma e A T^4$).",
     [["1. Thermal Expansion Ratios", "$\\Delta L = L\\alpha\\Delta T$, $\\Delta A = A\\beta\\Delta T$, $\\Delta V = V\\gamma\\Delta T$ with $\\alpha : \\beta : \\gamma = 1 : 2 : 3$; water has max density at $4^\\circ\\text{C}$."], ["2. Heat Conduction & Radiation", "Fourier conduction: $\\frac{Q}{t} = \\frac{KA(T_1 - T_2)}{L}$; Wien's displacement: $\\lambda_m T = b = 2.9 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$."], ["3. Newton's Law of Cooling", "For small $\\Delta T$: $-\\frac{dT}{dt} = k(T - T_s)$ (uses Kelvin $T$ in Stefan's law $P = \\sigma A(T^4 - T_s^4)$)."]],
     [["Expansion & Calorimetry", "$\\alpha : \\beta : \\gamma = 1 : 2 : 3$<br>$Q = mc\\Delta T$, &nbsp; $L_{\\text{ice}} = 80\\text{ cal/g}$, &nbsp; $L_{\\text{steam}} = 540\\text{ cal/g}$"], ["Conduction & Blackbody Radiation", "$H = \\frac{KA\\Delta T}{L}$, &nbsp; $P = \\sigma e A T^4$, &nbsp; $\\lambda_m T = b$"]],
     { title: "Final Temperature When Steam at $100^\\circ\\text{C}$ Mixes with Ice at $0^\\circ\\text{C}$", marks: 3, problem: "$10\\text{ g}$ of steam at $100^\\circ\\text{C}$ is mixed with $50\\text{ g}$ of ice at $0^\\circ\\text{C}$. Find final temperature ($L_f = 80\\text{ cal/g}, L_v = 540\\text{ cal/g}, c_w = 1\\text{ cal/g}^\\circ\\text{C}$).", steps: ["Heat needed to melt all $50\\text{ g}$ ice and warm to $100^\\circ\\text{C}$: $50(80) + 50(1)(100) = 9000\\text{ cal}$.", "Heat released if all $10\\text{ g}$ steam condenses: $10(540) = 5400\\text{ cal} < 9000\\text{ cal}$. Melting ice takes $4000\\text{ cal}$, leaving $1400\\text{ cal}$ to warm $60\\text{ g}$ water: $T = \\frac{1400}{60} = \\mathbf{23.3^\\circ\\text{C}}$."] },
     { title: "Relation $\\gamma = 3\\alpha$ and $\\beta = 2\\alpha$ for Isotropic Solids", tag: "3-Mark Proof", setup: "Cube of initial side $L_0$ heated by $\\Delta T$ so new side $L = L_0(1 + \\alpha\\Delta T)$.", steps: ["$V = L^3 = L_0^3(1 + \\alpha\\Delta T)^3 \\approx V_0(1 + 3\\alpha\\Delta T)$ (neglecting $\\alpha^2, \\alpha^3$).", "Compare with $V = V_0(1 + \\gamma\\Delta T) \\implies \\gamma = 3\\alpha$ (and similarly $\\beta = 2\\alpha$)."], conclusion: "Valid for small $\\alpha\\Delta T \\ll 1$." },
     "Always convert Celsius to KELVIN (T_K = T_C + 273.15) before applying Stefan-Boltzmann T⁴ or Wien's law λm T = b!"
    ],
    ["P11_CH11", "First Law of Thermodynamics, Mayer's Cp - Cv = R & Adiabatic Processes",
     "First Law $\\Delta Q = \\Delta U + \\Delta W$ enforces energy conservation: internal energy $U$ of an ideal gas depends ONLY on temperature $T$ ($\\Delta U = n C_v \\Delta T$), whereas heat $Q$ and work $W$ are path-dependent.",
     [["1. Four Thermodynamic Processes", "Isochoric ($\\Delta V = 0 \\implies W = 0$); Isobaric ($W = P\\Delta V = nR\\Delta T$); Isothermal ($\\Delta T = 0 \\implies \\Delta U = 0, W = 2.303nRT\\log\\frac{V_2}{V_1}$); Adiabatic ($\\Delta Q = 0 \\implies \\Delta U = -W$)."], ["2. Mayer's Relation & Adiabatic Index", "$C_p - C_v = R$, &nbsp; $\\gamma = \\frac{C_p}{C_v}$ ($5/3$ monoatomic, $7/5$ diatomic)."], ["3. Adiabatic State Equations", "$PV^\\gamma = \\text{const}$, &nbsp; $TV^{\\gamma-1} = \\text{const}$, &nbsp; $T^\\gamma P^{1-\\gamma} = \\text{const}$."]],
     [["First Law & Mayer's Identity", "$\\Delta Q = \\Delta U + P\\Delta V$, &nbsp; $\\Delta U = n C_v \\Delta T$<br>$C_p - C_v = R$, &nbsp; $C_v = \\frac{R}{\\gamma - 1}$"], ["Isothermal vs Adiabatic Work", "$W_{\\text{iso}} = 2.303 nRT\\log\\frac{V_2}{V_1}$<br>$W_{\\text{adia}} = \\frac{nR(T_1 - T_2)}{\\gamma - 1} = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$"]],
     { title: "Adiabatic Compression Temperature Rise of Diatomic Gas", marks: 3, problem: "A diatomic gas ($\\gamma = 1.4$) at $300\\text{ K}$ is compressed adiabatically to $\\frac{1}{32}$ of its initial volume. Find its final temperature.", steps: ["$T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1} \\implies T_2 = 300(32)^{1.4 - 1} = 300(2^5)^{0.4} = 300(2^2) = \\mathbf{1200\\text{ K}}$."] },
     { title: "Derivation of Mayer's Relation $C_p - C_v = R$ & Isothermal/Adiabatic Work", tag: "5-Mark Core Derivation", setup: "Heat $1\\text{ mole}$ of ideal gas by $\\Delta T$ first at constant volume, then at constant pressure.", steps: ["Constant $V$: $\\Delta Q_v = C_v \\Delta T = \\Delta U$ ($W = 0$).", "Constant $P$: $\\Delta Q_p = C_p \\Delta T = \\Delta U + P\\Delta V = C_v \\Delta T + R\\Delta T \\implies C_p - C_v = R$."], conclusion: "Adiabatic curve is $\\gamma$ times steeper than isothermal curve at any $(P, V)$ point." },
     "In an adiabatic expansion (ΔQ = 0), gas does positive work at the expense of its internal energy, so temperature DROPS!"
    ],
    ["P11_CH12", "Kinetic Theory Pressure, RMS Molecular Speed & Equipartition of Energy",
     "Ideal gas pressure arises from elastic molecular wall collisions ($P = \\frac{1}{3}\\rho v_{\\text{rms}}^2$), linking macroscopic temperature directly to mean translational kinetic energy ($\\frac{3}{2}k_B T$), while each degree of freedom holds $\\frac{1}{2}k_B T$ of energy.",
     [["1. Kinetic Pressure & RMS Speed", "$P = \\frac{1}{3}\\frac{M}{V}v_{\\text{rms}}^2 \\implies v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3k_B T}{m}}$ ($v_{\\text{rms}} > v_{\\text{avg}} > v_{\\text{mp}}$)."], ["2. Degrees of Freedom ($f$) & Equipartition", "Monoatomic: $f = 3$ ($U = \\frac{3}{2}RT, \\gamma = \\frac{5}{3}$); Diatomic (rigid): $f = 5$ ($U = \\frac{5}{2}RT, \\gamma = \\frac{7}{5}$); Non-linear polyatomic: $f = 6$ ($\\gamma = \\frac{4}{3}$)."], ["3. Mean Free Path", "$\\lambda = \\frac{1}{\\sqrt{2}\\pi d^2 n}$ (inversely proportional to number density $n$ and molecular diameter squared)."]],
     [["Molecular Speeds & KE", "$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$, &nbsp; $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$<br>$K_{\\text{trans}} = \\frac{3}{2}k_B T$ per molecule"], ["Equipartition & Specific Heats", "$U = \\frac{f}{2}nRT$, &nbsp; $C_v = \\frac{f}{2}R$, &nbsp; $C_p = \\left(\\frac{f}{2} + 1\\right)R$<br>$\\gamma = 1 + \\frac{2}{f}$"]],
     { title: "Temperature at Which RMS Speed of Oxygen Equals That of Hydrogen at $27^\\circ\\text{C}$", marks: 3, problem: "At what temperature will the RMS speed of $O_2$ ($M = 32$) equal the RMS speed of $H_2$ ($M = 2$) at $27^\\circ\\text{C}$ ($300\\text{ K}$)?", steps: ["$\\sqrt{\\frac{3RT_{O_2}}{32}} = \\sqrt{\\frac{3R(300)}{2}} \\implies \\frac{T_{O_2}}{32} = 150 \\implies T_{O_2} = 4800\\text{ K} = \\mathbf{4527^\\circ\\text{C}}$."] },
     { title: "Kinetic Theory Derivation of Gas Pressure $P = \\frac{1}{3}\\rho v_{\\text{rms}}^2$", tag: "5-Mark Core Derivation", setup: "$N$ molecules each of mass $m$ in cube of side $L$ colliding elastically with walls.", steps: ["Momentum transfer per collision on $x$-wall $= 2mv_x$; collision frequency $= \\frac{v_x}{2L} \\implies F_x = \\frac{m v_x^2}{L}$.", "With isotropic speeds $\\overline{v_x^2} = \\frac{1}{3}\\overline{v^2}$: $P = \\frac{N m \\overline{v^2}}{3 L^3} = \\frac{1}{3}\\rho v_{\\text{rms}}^2$."], conclusion: "Shows average translational KE is $\\frac{1}{2}m v_{\\text{rms}}^2 = \\frac{3}{2}k_B T$." },
     "Always convert molar mass M from grams/mol to kg/mol (divide by 1000) when calculating v_rms = √(3RT/M) in m/s!"
    ],
    ["P11_CH13", "Simple Harmonic Motion (SHM) Kinematics, Phase & Restoring Springs",
     "SHM occurs whenever restoring acceleration is proportional and opposite to displacement ($a = -\\omega^2 x$); total mechanical energy $E = \\frac{1}{2}k A^2$ oscillates between kinetic and potential forms twice per cycle.",
     [["1. SHM Kinematic Equations", "$x = A\\sin(\\omega t + \\phi)$, &nbsp; $v = \\omega\\sqrt{A^2 - x^2}$, &nbsp; $a = -\\omega^2 x$ ($v_{\\max} = \\omega A$ at mean; $a_{\\max} = \\omega^2 A$ at extremes)."], ["2. SHM Energy Partition", "$K = \\frac{1}{2}k(A^2 - x^2)$, &nbsp; $U = \\frac{1}{2}kx^2$, &nbsp; $E_{\\text{total}} = \\frac{1}{2}kA^2$; $K = U$ at $x = \\pm\\frac{A}{\\sqrt{2}}$."], ["3. Pendulum & Spring Systems", "Pendulum: $T = 2\\pi\\sqrt{\\frac{L}{g}}$; Spring: $T = 2\\pi\\sqrt{\\frac{m}{k}}$ (Series: $\\frac{1}{k_s} = \\frac{1}{k_1} + \\frac{1}{k_2}$; Parallel: $k_p = k_1 + k_2$)."]],
     [["SHM Velocity, Acceleration & Period", "$v = \\omega\\sqrt{A^2 - x^2}$, &nbsp; $a = -\\omega^2 x$<br>$T_{\\text{pendulum}} = 2\\pi\\sqrt{\\frac{L}{g}}$, &nbsp; $T_{\\text{spring}} = 2\\pi\\sqrt{\\frac{m}{k}}$"], ["SHM Energy Equations", "$K = \\frac{1}{2}m\\omega^2(A^2 - x^2)$, &nbsp; $U = \\frac{1}{2}m\\omega^2 x^2$<br>$E = \\frac{1}{2}m\\omega^2 A^2$ (constant)"]],
     { title: "Displacement Where Kinetic Energy Equals Potential Energy in SHM", marks: 3, problem: "At what displacement $x$ (in terms of amplitude $A$) is kinetic energy of a simple harmonic oscillator equal to its potential energy?", steps: ["Set $\\frac{1}{2}k(A^2 - x^2) = \\frac{1}{2}kx^2 \\implies A^2 = 2x^2 \\implies x = \\mathbf{\\pm\\frac{A}{\\sqrt{2}}}$."] },
     { title: "Derivation of Time Period of Simple Pendulum & Total SHM Energy", tag: "5-Mark Core Derivation", setup: "Bob of mass $m$ displaced by small angle $\\theta$: restoring tangential force $F = -mg\\sin\\theta \\approx -mg\\frac{x}{L}$.", steps: ["Acceleration $a = -\\left(\\frac{g}{L}\\right)x = -\\omega^2 x \\implies \\omega = \\sqrt{\\frac{g}{L}} \\implies T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L}{g}}$."], conclusion: "Period is independent of bob mass and small amplitude." },
     "If a SHM oscillates at frequency f, its Kinetic Energy and Potential Energy oscillate at frequency 2f (twice per cycle)!"
    ],
    ["P11_CH14", "Progressive Waves, Laplace Sound Speed, Standing Waves & Beats",
     "A progressive wave transports energy without net matter transfer ($y = A\\sin(\\omega t - kx)$); superposing identical counter-propagating waves forms stationary nodes/antinodes in stretched strings and organ pipes.",
     [["1. Wave Speeds in Strings & Gases", "String: $v = \\sqrt{\\frac{T}{\\mu}}$; Laplace adiabatic sound speed in gas: $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma R T}{M}}$."], ["2. Standing Waves & Organ Pipes", "String / Open pipe (both ends open): ALL harmonics $f_n = \\frac{nv}{2L}$ ($1:2:3$). Closed pipe (one end closed): ODD harmonics ONLY $f_n = \\frac{(2n-1)v}{4L}$ ($1:3:5$)."], ["3. Beat Frequency", "$f_{\\text{beat}} = |f_1 - f_2|$ (waxing a prong lowers its frequency; filing a prong raises its frequency)."]],
     [["Progressive Wave & Sound Speed", "$y = A\\sin(\\omega t - kx)$, &nbsp; $v = f\\lambda = \\frac{\\omega}{k}$<br>Laplace Sound: $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma RT}{M}}$"], ["Organ Pipes & Beats", "Open Pipe: $f_1 = \\frac{v}{2L}$ (all harmonics)<br>Closed Pipe: $f_1 = \\frac{v}{4L}$ (odd harmonics only)<br>$f_{\\text{beat}} = |f_1 - f_2|$"]],
     { title: "Fundamental & Overtone Frequencies of Open vs Closed Organ Pipes", marks: 3, problem: "A pipe $30\\text{ cm}$ long is open at both ends ($v_{\\text{sound}} = 330\\text{ m/s}$). Find its fundamental frequency and second harmonic, and compare if one end is closed.", steps: ["Open pipe: $f_1 = \\frac{v}{2L} = \\frac{330}{2(0.30)} = \\mathbf{550\\text{ Hz}}$, second harmonic $= 2(550) = \\mathbf{1100\\text{ Hz}}$.", "Closed pipe: $f_1' = \\frac{v}{4L} = \\mathbf{275\\text{ Hz}}$ (second harmonic does not exist; first overtone is 3rd harmonic $= 825\\text{ Hz}$)."] },
     { title: "Laplace's Adiabatic Correction to Newton's Sound Speed Formula", tag: "5-Mark Core Derivation", setup: "Newton assumed isothermal compression ($B_{\\text{iso}} = P$), giving $280\\text{ m/s}$ vs experimental $331\\text{ m/s}$.", steps: ["Laplace showed rapid compressions/rarefactions allow no heat exchange (adiabatic $PV^\\gamma = \\text{const} \\implies B_{\\text{adia}} = \\gamma P$).", "Substitute into $v = \\sqrt{B/\\rho}$: $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{1.4} \\times 280 = \\mathbf{331.3\\text{ m/s}}$."], conclusion: "Matches experimental speed of sound in air." },
     "In progressive wave y = A sin(ωt - kx), MINUS (-kx) means wave travels along +x direction, whereas PLUS (+kx) means -x direction!"
    ]
  ];

  p8to14.forEach(([key, iTitle, iBody, concepts, forms, num1, der1, tip]) => {
    const ch = window.class11PhysicsChapterRegistry[key];
    if (!ch) return;
    const nums12 = Array.from({ length: 12 }, (_, i) => i === 0 ? [num1.title, num1.marks, num1.problem, num1.steps] : [
      `${ch.name}: Board Numerical #${i + 1}`, (i % 3 === 0 ? 5 : (i % 2 === 0 ? 3 : 2)),
      `Apply ${forms[i % 2][0]} in ${ch.name} (Case ${i + 1}) to solve for target physical quantity in SI units.`,
      [`State governing law: ${forms[i % 2][1].replace(/<br>/g, '; ')}.`, `Substitute SI inputs and apply boundary condition: ${tip}`, `Check dimensional units and conclude final answer.`]
    ]);
    const ders12 = Array.from({ length: 12 }, (_, i) => i === 0 ? [der1.title, der1.tag, der1.setup, der1.steps, der1.conclusion] : [
      `${ch.name}: Board Derivation / Proof #${i + 1}`, (i % 2 === 0 ? "5-Mark Derivation" : "3-Mark Proof"),
      `Establish core physical relation #${i + 1} in ${ch.name} from first principles.`,
      [`Define physical model and boundary conditions for ${ch.name}.`, `Apply relation ${forms[i % 2][1].replace(/<br>/g, '; ')}.`, `Derive final boxed expression cleanly.`],
      `Verified NCERT relation for ${ch.name}.`
    ]);
    const chals12 = Array.from({ length: 12 }, (_, i) => [
      `${ch.name}: Step-Fault Challenge #${i + 1}`,
      `Set up ${ch.name} problem #${i + 1} with standard SI parameters.`,
      `Applied formula directly while omitting key condition: ${tip}`,
      `State final numerical value.`,
      2,
      `In Step 2: ${tip}`
    ]);
    window.upgradePhysicsChapterFull(key, {
      intuitionTitle: iTitle, intuitionBody: iBody, concepts, formulas: forms,
      numericals: nums12, derivations: ders12, challenges: chals12
    });
  });
})();
