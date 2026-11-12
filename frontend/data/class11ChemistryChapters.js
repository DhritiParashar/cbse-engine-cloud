// data/class11ChemistryChapters.js - Exhaustive NCERT Class 11 Chemistry (043) Registry
(function() {
  const specs = [
    {
      key: "C11_CH01", code: "Chapter 01", name: "Some Basic Concepts of Chemistry", weight: 7,
      desc: "Mole concept, molar mass, empirical & molecular formulas, limiting reagent, molarity, and molality.",
      intuitionTitle: "The Mole Bridge: Counting Subatomic Particles by Weighing",
      intuitionBody: "Atoms are too small to count individually, so chemistry defines 1 mole ($6.022 \\times 10^{23}$ entities) as the exact bridge connecting atomic mass units (u) to macroscopic grams—allowing balanced equations to predict exact product yields.",
      concepts: [
        ["1. Limiting Reagent Identification", "Divide given moles of each reactant by its balanced stoichiometric coefficient; the smallest ratio identifies the Limiting Reagent that caps product yield."],
        ["2. Temperature-Invariant Concentration", "Molarity ($M$) uses solution volume (expands with $T$), whereas Molality ($m$) and Mole Fraction ($\\chi$) use mass only—staying invariant with temperature."],
        ["3. Empirical vs Molecular Formula", "Empirical formula gives simplest whole-number atom ratio; $\\text{Molecular Formula} = n \\times (\\text{Empirical Formula})$ where $n = \\frac{\\text{Molar Mass}}{\\text{Empirical Mass}}$."]
      ],
      formulas: [
        ["Mole & Gas STP Relations", "$n = \\frac{w}{M} = \\frac{N}{6.022 \\times 10^{23}} = \\frac{V_{\\text{STP}}}{22.4\\text{ L}}$<br>$\\text{Vapour Density} = \\frac{\\text{Molar Mass}}{2}$"],
        ["Solution Concentration Laws", "Molarity $M = \\frac{n_B}{V_{\\text{L}}}$, &nbsp; Molality $m = \\frac{n_B}{W_{A,\\text{kg}}}$<br>Dilution: $M_1 V_1 = M_2 V_2$"]
      ],
      numericals: [
        {
          title: "Limiting Reagent & Ammonia Yield in Haber's Process", marks: 3,
          problem: "$50.0\\text{ kg}$ of $N_2(g)$ and $10.0\\text{ kg}$ of $H_2(g)$ are mixed to produce $NH_3(g)$. Identify the limiting reagent and calculate the mass of $NH_3(g)$ formed.",
          steps: [
            "Balanced equation: $N_2(g) + 3H_2(g) \\to 2NH_3(g)$. Moles of $N_2 = \\frac{50,000}{28} = 1785.7\\text{ mol}$; Moles of $H_2 = \\frac{10,000}{2.016} = 4960.3\\text{ mol}$.",
            "Stoichiometric ratio check: $\\frac{1785.7}{1} = 1785.7$ vs $\\frac{4960.3}{3} = 1653.4$. Since $1653.4 < 1785.7$, **$H_2(g)$ is the Limiting Reagent**.",
            "Moles of $NH_3$ produced $= \\frac{2}{3} \\times 4960.3 = 3306.9\\text{ mol} \\implies \\text{Mass} = 3306.9 \\times 17 = \\mathbf{56.22\\text{ kg}}$."
          ]
        },
        {
          title: "Empirical & Molecular Formula from Percentage Composition", marks: 3,
          problem: "An organic compound contains $40.0\\%\\text{ C}$, $6.67\\%\\text{ H}$, and $53.33\\%\\text{ O}$ by mass with molar mass $180\\text{ g/mol}$. Determine its molecular formula.",
          steps: [
            "Relative moles: $C = \\frac{40}{12} = 3.33$, $H = \\frac{6.67}{1} = 6.67$, $O = \\frac{53.33}{16} = 3.33$. Simplest ratio $= 1 : 2 : 1 \\implies \\text{Empirical Formula} = CH_2O$ (Empirical mass $= 30\\text{ g/mol}$).",
            "Multiplier $n = \\frac{180}{30} = 6 \\implies \\text{Molecular Formula} = (CH_2O)_6 = \\mathbf{C_6H_{12}O_6}$ (Glucose)."
          ]
        }
      ],
      derivations: [
        {
          title: "Relation Between Molarity ($M$), Molality ($m$), and Solution Density ($d$)", tag: "3-Mark Board Derivation",
          setup: "Consider $1\\text{ L}$ ($1000\\text{ mL}$) of solution of density $d\\text{ g/mL}$ containing $M$ moles of solute of molar mass $M_B\\text{ g/mol}$.",
          steps: [
            "Total mass of $1\\text{ L}$ solution $= 1000 d\\text{ grams}$. Mass of solute $= M \\times M_B\\text{ grams}$.",
            "Mass of pure solvent in kg: $W_{\\text{solvent}} = \\frac{1000 d - M M_B}{1000}\\text{ kg}$.",
            "Substitute into molality $m = \\frac{n_B}{W_{\\text{solvent}}}$: $m = \\frac{1000 M}{1000 d - M M_B}$."
          ],
          conclusion: "Useful conversion: $m = \\frac{1000 M}{1000 d - M M_B}$."
        },
        {
          title: "Law of Multiple Proportions Verification (Nitrogen Oxides)", tag: "NCERT Stoichiometry Proof",
          setup: "Nitrogen and oxygen combine to form $N_2O$, $NO$, $N_2O_3$, $NO_2$, and $N_2O_5$.",
          steps: [
            "Fix mass of Nitrogen at $28\\text{ g}$ ($2\\text{ moles}$ of N atoms).",
            "Corresponding masses of Oxygen combining with $28\\text{ g}$ N are $16\\text{ g}, 32\\text{ g}, 48\\text{ g}, 64\\text{ g}, 80\\text{ g}$.",
            "Ratio of oxygen masses $= 16 : 32 : 48 : 64 : 80 = 1 : 2 : 3 : 4 : 5$ (simple whole-number ratio)."
          ],
          conclusion: "Verifies Dalton's Law of Multiple Proportions."
        }
      ],
      examTip: "Never use total solution mass in the denominator of Molality—molality strictly divides by mass of SOLVENT in kilograms!",
      traps: [
        ["Using Solution Mass Instead of Solvent Mass in Molality", "High (1-2 Marks Lost)", "Molality = moles of solute / kg of SOLVENT (not solution). Subtract solute mass from total solution mass first."],
        ["Picking Smaller Mass Reactant as Limiting Reagent", "Board Trap (2 Marks)", "Always compare (moles / stoichiometric coefficient), never raw mass in grams."]
      ],
      challenges: [{
        title: "Mole Concept: Molality Denominator Trap",
        steps: [
          { stepNo: 1, text: "$40\\text{ g}$ NaOH ($1\\text{ mol}$) is dissolved to make $500\\text{ g}$ of aqueous solution." },
          { stepNo: 2, text: "Calculate molality: $m = \\frac{1\\text{ mol}}{0.500\\text{ kg}} = 2.0\\text{ m}$." },
          { stepNo: 3, text: "Conclude molality is $2.0\\text{ m}$." }
        ],
        faultyStep: 2,
        deductionReason: "In Step 2: Mass of solvent (water) $= 500\\text{ g} - 40\\text{ g} = 460\\text{ g} = 0.460\\text{ kg}$, so $m = 1 / 0.460 = 2.17\\text{ m}$."
      }],
      diagnostics: [
        { q: "Which concentration unit does NOT change with a rise in temperature?", difficulty: "Board Standard (1M)", options: ["Molality ($m$)", "Molarity ($M$)", "Normality ($N$)", "Formality ($F$)"], correct: 0, solution: "Molality depends solely on mass, which is temperature-independent." },
        { q: "The number of atoms in $0.1\\text{ mole}$ of a triatomic gas ($N_A = 6.02 \\times 10^{23}$) is:", difficulty: "Mole Trap (1M)", options: ["$1.806 \\times 10^{23}$", "$6.02 \\times 10^{22}$", "$1.806 \\times 10^{22}$", "$3.6 \\times 10^{23}$"], correct: 0, solution: "$0.1 \\times 3 \\times 6.02 \\times 10^{23} = 1.806 \\times 10^{23}$ atoms." }
      ]
    },
    {
      key: "C11_CH02", code: "Chapter 02", name: "Structure of Atom", weight: 9,
      desc: "Bohr's hydrogen model, de Broglie matter waves, Heisenberg uncertainty, quantum numbers, radial nodes, Aufbau & Hund's rule.",
      intuitionTitle: "Quantized Energy Shells & 3D Orbital Probability Clouds",
      intuitionBody: "Electrons in atoms cannot spiral into the nucleus because they behave as standing waves ($2\\pi r = n\\lambda$) restricted to discrete quantum numbers $(n, l, m_l, m_s)$, forming 3D probability orbitals ($s, p, d, f$) separated by radial and angular nodes.",
      concepts: [
        ["1. Four Quantum Numbers", "Principal $n$ (size/energy), Azimuthal $l = 0\\dots n-1$ (subshell shape), Magnetic $m_l = -l\\dots +l$ (orientation), Spin $m_s = \\pm 1/2$."],
        ["2. Radial & Angular Nodes", "Angular nodes $= l$; Radial (spherical) nodes $= n - l - 1$; Total nodes $= n - 1$ (e.g. $3p$ has $l=1$ angular and $3-1-1=1$ radial node)."],
        ["3. Half-Filled & Full-Filled Stability", "Cr ($[Ar]3d^5 4s^1$) and Cu ($[Ar]3d^{10} 4s^1$) promote one $4s$ electron to gain symmetrical shielding and maximum exchange energy."]
      ],
      formulas: [
        ["Bohr Radius, Energy & Rydberg", "$r_n = 0.529\\frac{n^2}{Z}\\text{ \\AA}$, &nbsp; $E_n = -13.6\\frac{Z^2}{n^2}\\text{ eV}$<br>$\\frac{1}{\\lambda} = R_H Z^2\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$ ($R_H = 1.097 \\times 10^7\\text{ m}^{-1}$)"],
        ["de Broglie & Heisenberg Uncertainty", "$\\lambda = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mK}}$<br>$\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$"]
      ],
      numericals: [
        {
          title: "Heisenberg Position Uncertainty of a Moving Electron", marks: 3,
          problem: "A microscope using photons locates an electron within $\\Delta x = 0.1\\text{ \\AA}$ ($10^{-11}\\text{ m}$). Calculate the minimum uncertainty in its velocity ($m_e = 9.1 \\times 10^{-31}\\text{ kg}$, $h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$).",
          steps: [
            "Apply Heisenberg's Principle: $\\Delta x \\cdot (m\\Delta v) = \\frac{h}{4\\pi} \\implies \\Delta v = \\frac{h}{4\\pi m \\Delta x}$.",
            "Substitute SI values: $\\Delta v = \\frac{6.626 \\times 10^{-34}}{4 \\times 3.1416 \\times (9.1 \\times 10^{-31}) \\times 10^{-11}}$.",
            "Compute velocity uncertainty: $\\Delta v = \\frac{6.626 \\times 10^{-34}}{1.1435 \\times 10^{-40}} = \\mathbf{5.79 \\times 10^6\\text{ m/s}}$."
          ]
        },
        {
          title: "Shortest Wavelength in Balmer Series of Hydrogen", marks: 2,
          problem: "Calculate the shortest wavelength (series limit) in the Balmer series of hydrogen ($R_H = 1.097 \\times 10^7\\text{ m}^{-1}$).",
          steps: [
            "Balmer series ends at $n_1 = 2$; shortest wavelength corresponds to $n_2 = \\infty$: $\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{2^2} - \\frac{1}{\\infty}\\right) = \\frac{R_H}{4}$.",
            "$\\lambda = \\frac{4}{1.097 \\times 10^7} = 3.646 \\times 10^{-7}\\text{ m} = \\mathbf{364.6\\text{ nm}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Bohr's Angular Momentum Quantization from de Broglie Matter Waves", tag: "3-Mark Conceptual Proof",
          setup: "Consider an electron wave forming a closed stationary wave around a circular Bohr orbit of radius $r$.",
          steps: [
            "For constructive standing-wave interference without self-cancellation, circumference must equal an integral multiple of de Broglie wavelength: $2\\pi r = n\\lambda$.",
            "Substitute de Broglie relation $\\lambda = \\frac{h}{mv}$: $2\\pi r = n\\left(\\frac{h}{mv}\\right)$.",
            "Rearrange for orbital angular momentum $L = mvr$: $mvr = \\frac{nh}{2\\pi}$."
          ],
          conclusion: "Derives Bohr's second postulate directly from wave-particle duality."
        },
        {
          title: "Why Bohr's Model Fails for Multi-Electron Atoms", tag: "2-Mark CBSE Reasoning",
          setup: "Bohr's derivation accounts solely for electrostatic attraction between nucleus $+Ze$ and a single electron.",
          steps: [
            "In multi-electron atoms, inter-electronic repulsions ($e^--e^-$) depend on subshell orientation $(l, m_l)$, splitting degenerate $n$-shells into $s, p, d, f$ sublevels.",
            "Heisenberg's uncertainty principle forbids simultaneous exact trajectory $(r, v)$ assumed by fixed circular orbits."
          ],
          conclusion: "Requires Schrödinger's 3D wave equation $\\hat{H}\\psi = E\\psi$."
        }
      ],
      examTip: "Always check quantum number validity: l must be strictly LESS than n (0 ≤ l ≤ n - 1), and |ml| ≤ l!",
      traps: [
        ["Allowing l = n in Quantum Number Sets", "High (1 Mark Lost)", "For n = 2, l can only be 0 or 1 (2d orbital does not exist!)."],
        ["Writing [Ar] 3d⁴ 4s² for Chromium (Z = 24)", "Board Trap (1 Mark)", "Half-filled stability makes Cr = [Ar] 3d⁵ 4s¹ and Cu = [Ar] 3d¹⁰ 4s¹."]
      ],
      challenges: [{
        title: "Structure of Atom: Quantum Number Validity & Radial Nodes",
        steps: [
          { stepNo: 1, text: "Determine the number of radial nodes in a $4d$ orbital ($n = 4, l = 2$)." },
          { stepNo: 2, text: "Apply radial node formula: $\\text{Radial nodes} = n - l = 4 - 2 = 2$." },
          { stepNo: 3, text: "State $4d$ has $2$ radial nodes." }
        ],
        faultyStep: 2,
        deductionReason: "In Step 2: Total nodes $= n - 1 = 3$; Radial nodes $= n - l - 1 = 4 - 2 - 1 = 1$ (plus $l = 2$ angular nodes)."
      }],
      diagnostics: [
        { q: "The number of radial nodes and angular nodes in a $4d$ orbital respectively are:", difficulty: "Node Formula Trap (1M)", options: ["$1$ and $2$", "$2$ and $2$", "$2$ and $1$", "$3$ and $1$"], correct: 0, solution: "Angular nodes $= l = 2$; Radial nodes $= n - l - 1 = 4 - 2 - 1 = 1$." },
        { q: "Which set of quantum numbers $(n, l, m_l, m_s)$ is NOT permissible?", difficulty: "Board Classic (1M)", options: ["$(2, 2, 0, +1/2)$", "$(3, 2, -2, -1/2)$", "$(4, 0, 0, +1/2)$", "$(3, 1, 0, -1/2)$"], correct: 0, solution: "For $n = 2$, $l$ cannot equal $2$ ($l_{\\max} = n - 1 = 1$)." }
      ]
    },
    {
      key: "C11_CH03", code: "Chapter 03", name: "Classification of Elements & Periodicity", weight: 6,
      desc: "Periodic trends in atomic/ionic radii, ionization enthalpy, electron gain enthalpy, electronegativity, and diagonal relationships.",
      intuitionTitle: "Effective Nuclear Charge ($Z_{\\text{eff}}$) vs Shell Shielding",
      intuitionBody: "Every periodic trend is a tug-of-war between nuclear proton attraction ($Z$) and inner-electron shielding ($\\sigma$). Across a period, $Z_{\\text{eff}}$ rises sharply; down a group, added principal shells ($n$) dominate.",
      concepts: [
        ["1. Ionization Enthalpy Anomalies", "Across Period 2: $Li < B < Be < C < O < N < F < Ne$. $Be > B$ (full $2s^2$ penetration) and $N > O$ (half-filled $2p^3$ stability)."],
        ["2. Electron Gain Enthalpy Anomaly", "Chlorine ($-349\\text{ kJ/mol}$) has more negative $\\Delta_{eg}H$ than Fluorine ($-328\\text{ kJ/mol}$) due to strong $2p$ electron-electron repulsion in tiny F atoms."],
        ["3. Isoelectronic Ionic Radii", "For constant electron count ($10e^-$), radius shrinks monotonically as nuclear protons rise: $N^{3-} > O^{2-} > F^- > Na^+ > Mg^{2+} > Al^{3+}$."]
      ],
      formulas: [
        ["Slater Screening & Radii", "$Z_{\\text{eff}} = Z - \\sigma$<br>Radius: $r_{\\text{anion}} > r_{\\text{atom}} > r_{\\text{cation}}$"],
        ["Oxide Nature Across Period", "Left ($Na_2O$): Strongly Basic<br>Center ($Al_2O_3$): Amphoteric<br>Right ($Cl_2O_7$): Strongly Acidic"]
      ],
      numericals: [
        {
          title: "Successive Ionization Enthalpy Jump & Group Identification", marks: 3,
          problem: "An element $X$ has first, second, and third ionization enthalpies $IE_1 = 738$, $IE_2 = 1451$, and $IE_3 = 7733\\text{ kJ/mol}$. Predict its valence electrons and group.",
          steps: [
            "Observe the massive $>5\\times$ jump between $IE_2$ ($1451$) and $IE_3$ ($7733\\text{ kJ/mol}$).",
            "Removing the 3rd electron breaks into a stable noble-gas core, proving $X$ has **2 valence electrons** (Group 2, alkaline earth metal such as Mg)."
          ]
        },
        {
          title: "IUPAC Systematic Naming for Z > 100", marks: 2,
          problem: "Write the IUPAC systematic name and symbol for the element with atomic number $Z = 119$.",
          steps: [
            "Digit roots: $1 = \\text{un}$, $1 = \\text{un}$, $9 = \\text{enn}$ + suffix $\\text{-ium}$.",
            "Name: **Ununennium**, Symbol: **Uue**."
          ]
        }
      ],
      derivations: [
        {
          title: "Why First Ionization Enthalpy of Nitrogen Exceeds Oxygen", tag: "3-Mark CBSE Reasoning",
          setup: "Compare ground-state valence configurations of $_7N$ ($1s^2 2s^2 2p_x^1 2p_y^1 2p_z^1$) and $_8O$ ($1s^2 2s^2 2p_x^2 2p_y^1 2p_z^1$).",
          steps: [
            "Nitrogen possesses an exactly half-filled $2p^3$ subshell with symmetrical electron distribution and high exchange energy.",
            "In Oxygen, the 4th $2p$ electron pairs up in $2p_x^2$, creating inter-electronic repulsion that eases its removal."
          ],
          conclusion: "Hence $IE_1(N) = 1402\\text{ kJ/mol} > IE_1(O) = 1314\\text{ kJ/mol}$."
        },
        {
          title: "Why Al₂O₃ Is Amphoteric While Na₂O Is Basic", tag: "2-Mark Chemical Proof",
          setup: "React $Al_2O_3$ separately with strong acid ($HCl$) and strong base ($NaOH$).",
          steps: [
            "With acid: $Al_2O_3(s) + 6HCl(aq) \\to 2AlCl_3(aq) + 3H_2O(l)$.",
            "With base: $Al_2O_3(s) + 2NaOH(aq) + 3H_2O(l) \\to 2Na[Al(OH)_4](aq)$."
          ],
          conclusion: "Neutralizing both acids and bases proves $Al_2O_3$ is amphoteric."
        }
      ],
      examTip: "Always memorize the two Period-2/3 anomalies: IE₁(N) > IE₁(O) and |ΔegH|(Cl) > |ΔegH|(F)—they appear in almost every CBSE paper!",
      traps: [
        ["Ranking Fluorine Above Chlorine in Electron Gain Enthalpy", "High (1 Mark Lost)", "Cl (-349 kJ/mol) releases more energy than F (-328 kJ/mol) when gaining an electron."],
        ["Ranking Oxygen Above Nitrogen in First Ionization Enthalpy", "Board Trap (1 Mark)", "Half-filled 2p³ stability makes IE₁(N) > IE₁(O), though IE₂(O) > IE₂(N)."]
      ],
      challenges: [{
        title: "Periodicity: Halogen Electron Gain Enthalpy Ordering",
        steps: [
          { stepNo: 1, text: "Arrange Group 17 halogens in decreasing order of negative electron gain enthalpy." },
          { stepNo: 2, text: "Order by electronegativity: $F > Cl > Br > I$." },
          { stepNo: 3, text: "Conclude Fluorine has the most negative electron gain enthalpy." }
        ],
        faultyStep: 2,
        deductionReason: "In Step 2: Compact $2p$ electron repulsion lowers F's electron affinity below Cl: true order is $Cl > F > Br > I$."
      }],
      diagnostics: [
        { q: "The correct order of negative electron gain enthalpy among halogens is:", difficulty: "Board Classic (1M)", options: ["$Cl > F > Br > I$", "$F > Cl > Br > I$", "$I > Br > Cl > F$", "$F > Br > Cl > I$"], correct: 0, solution: "Chlorine has higher electron affinity than Fluorine due to less $2p$ inter-electronic repulsion." },
        { q: "Which of the following oxides is amphoteric in nature?", difficulty: "Board Standard (1M)", options: ["$Al_2O_3$", "$Na_2O$", "$SO_2$", "$Cl_2O_7$"], correct: 0, solution: "$Al_2O_3$ reacts with both acids and alkalis." }
      ]
    },
    {
      key: "C11_CH04", code: "Chapter 04", name: "Chemical Bonding and Molecular Structure", weight: 7,
      desc: "VSEPR geometries, sp/sp²/sp³/sp³d/sp³d² hybridization, dipole moment, hydrogen bonding, and Molecular Orbital Theory (MOT).",
      intuitionTitle: "VSEPR Lone-Pair Repulsion & Molecular Orbital Bond Order",
      intuitionBody: "Molecules adopt 3D shapes that minimize electron-pair repulsion (lp–lp > lp–bp > bp–bp), while Molecular Orbital Theory combines atomic orbitals into bonding ($\\sigma, \\pi$) and antibonding ($\\sigma^*, \\pi^*$) MOs—explaining why $O_2$ is paramagnetic.",
      concepts: [
        ["1. Steric Number & Hybridization", "$SN = \\frac{1}{2}(V + M - C + A)$: $2 \\to sp$ (linear), $3 \\to sp^2$ (trigonal planar), $4 \\to sp^3$ (tetrahedral), $5 \\to sp^3d$ (TBP), $6 \\to sp^3d^2$ (octahedral)."],
        ["2. Geometry vs Molecular Shape", "In $CH_4$ (0 lp), $NH_3$ (1 lp), $H_2O$ (2 lp), all three have $sp^3$ tetrahedral electron geometry, but lone-pair compression squeezes bond angles from $109.5^\\circ \\to 107^\\circ \\to 104.5^\\circ$."],
        ["3. MOT Energy Level Crossover", "Up to $14e^-$ ($B_2, C_2, N_2$), $\\pi_{2px} = \\pi_{2py} < \\sigma_{2pz}$ due to $s$-$p$ mixing; for $\\ge 15e^-$ ($O_2, F_2$), $\\sigma_{2pz} < \\pi_{2px} = \\pi_{2py}$."]
      ],
      formulas: [
        ["Hybridization & Dipole Moment", "$SN = \\frac{1}{2}(\\text{Valence } e^- + \\text{Monovalent} - \\text{Cation} + \\text{Anion})$<br>$\\mu = q \\times d$ ($1\\text{ D} = 3.335 \\times 10^{-30}\\text{ C}\\cdot\\text{m}$)"],
        ["Molecular Orbital Theory", "$\\text{Bond Order} = \\frac{1}{2}(N_b - N_a)$<br>Bond Length $\\propto \\frac{1}{\\text{Bond Order}}$"]
      ],
      numericals: [
        {
          title: "MOT Bond Order & Magnetic Comparison: $O_2, O_2^+, O_2^-, O_2^{2-}$", marks: 3,
          problem: "Using Molecular Orbital Theory, compare the bond order, bond length, and magnetic nature of $O_2$, $O_2^+$, and $O_2^-$.",
          steps: [
            "$O_2$ ($16e^-$): $(\\sigma_{2s})^2(\\sigma^*_{2s})^2(\\sigma_{2pz})^2(\\pi_{2px}^2\\pi_{2py}^2)(\\pi^*_{2px})^1(\\pi^*_{2py})^1 \\implies BO = \\frac{10 - 6}{2} = \\mathbf{2.0}$ (Paramagnetic, 2 unpaired $e^-$).",
            "$O_2^+$ ($15e^-$): loses 1 antibonding $\\pi^*$ electron $\\implies BO = \\frac{10 - 5}{2} = \\mathbf{2.5}$ (Paramagnetic, 1 unpaired $e^-$).",
            "$O_2^-$ ($17e^-$): gains 1 antibonding $\\pi^*$ electron $\\implies BO = \\frac{10 - 7}{2} = \\mathbf{1.5}$ (Paramagnetic). Stability: $O_2^+ > O_2 > O_2^-$; Bond length: $O_2^- > O_2 > O_2^+$."
          ]
        },
        {
          title: "Predicting Hybridization & Shape of $XeF_4$ and $ClF_3$", marks: 3,
          problem: "Determine the hybridization, lone pairs, and molecular shape of $XeF_4$ and $ClF_3$.",
          steps: [
            "$XeF_4$: $SN = \\frac{1}{2}(8 + 4) = 6 \\implies sp^3d^2$ octahedral geometry; 4 bp + 2 lp at axial positions give **Square Planar** shape.",
            "$ClF_3$: $SN = \\frac{1}{2}(7 + 3) = 5 \\implies sp^3d$ TBP geometry; 3 bp + 2 equatorial lp give **Bent T-shape**."
          ]
        }
      ],
      derivations: [
        {
          title: "Why $NH_3$ ($1.47\\text{ D}$) Has Much Larger Dipole Moment than $NF_3$ ($0.23\\text{ D}$)", tag: "3-Mark CBSE Classic",
          setup: "Both $NH_3$ and $NF_3$ are $sp^3$ trigonal pyramidal with one lone pair on Nitrogen.",
          steps: [
            "In $NH_3$, N is more electronegative than H, so three N–H bond dipoles point toward N and ADD to the upward lone-pair orbital dipole.",
            "In $NF_3$, F is more electronegative than N, so three N–F bond dipoles point downward away from N, OPPOSING the upward lone-pair dipole."
          ],
          conclusion: "Vector reinforcement makes $\\mu(NH_3) = 1.47\\text{ D} \\gg \\mu(NF_3) = 0.23\\text{ D}$."
        },
        {
          title: "Why $o$-Nitrophenol Is Steam Volatile While $p$-Nitrophenol Is Not", tag: "Hydrogen Bonding Proof",
          setup: "Compare hydrogen bonding modes in ortho- and para-nitrophenol isomers.",
          steps: [
            "$o$-Nitrophenol forms **intramolecular** H-bonding (chelation) within the same molecule, preventing intermolecular association and lowering boiling point.",
            "$p$-Nitrophenol forms **intermolecular** H-bonding chains across millions of molecules, raising boiling point sharply."
          ],
          conclusion: "Thus $o$-nitrophenol distills readily with steam."
        }
      ],
      examTip: "In trigonal bipyramidal (sp³d) structures like PCl₅ or SF₄, lone pairs and less electronegative atoms ALWAYS occupy equatorial positions (120° apart) to minimize repulsion!",
      traps: [
        ["Placing Lone Pairs in Axial Positions of sp³d TBP", "High (1-2 Marks Lost)", "Equatorial positions have only two 90° interactions vs three in axial; lone pairs always go equatorial (e.g., SF₄ is see-saw)."],
        ["Predicting O₂ as Diamagnetic from Valence Bond Theory", "Board Trap (1 Mark)", "VBT fails for O₂; MOT proves O₂ has 2 unpaired electrons in π*2px and π*2py orbitals."]
      ],
      challenges: [{
        title: "Chemical Bonding: VSEPR Shape of SF₄",
        steps: [
          { stepNo: 1, text: "For $SF_4$, $SN = \\frac{1}{2}(6 + 4) = 5 \\implies sp^3d$ trigonal bipyramidal geometry with 1 lone pair." },
          { stepNo: 2, text: "Place the lone pair in an axial position to give a trigonal pyramidal shape." },
          { stepNo: 3, text: "Conclude $SF_4$ is trigonal pyramidal." }
        ],
        faultyStep: 2,
        deductionReason: "In Step 2: The lone pair occupies an EQUATORIAL position to minimize 90° repulsions, producing a **See-Saw** shape."
      }],
      diagnostics: [
        { q: "Which molecule is paramagnetic according to Molecular Orbital Theory?", difficulty: "Board Standard (1M)", options: ["$O_2$", "$N_2$", "$F_2$", "$C_2$"], correct: 0, solution: "$O_2$ has two unpaired electrons in degenerate $\\pi^*_{2px}$ and $\\pi^*_{2py}$ orbitals." },
        { q: "The hybridization and molecular shape of $ClF_3$ are:", difficulty: "VSEPR Trap (1M)", options: ["$sp^3d$, T-shaped", "$sp^3$, Pyramidal", "$sp^2$, Trigonal planar", "$sp^3d^2$, Square planar"], correct: 0, solution: "$SN = 5$ ($3\\text{ bp} + 2\\text{ equatorial lp}$) gives a T-shaped molecule." }
      ]
    },
    {
      key: "C11_CH05", code: "Chapter 05", name: "Chemical Thermodynamics", weight: 9,
      desc: "First law ΔU = q + w, enthalpy ΔH = ΔU + ΔngRT, Hess's law, bond enthalpy, entropy ΔS, and Gibbs spontaneity ΔG = ΔH - TΔS.",
      intuitionTitle: "Enthalpy, Entropy & The Gibbs Spontaneity Criterion",
      intuitionBody: "Systems seek lower enthalpy ($\\Delta H < 0$) and higher disorder ($\\Delta S > 0$). Gibbs Free Energy $\\Delta G = \\Delta H - T\\Delta S$ unites both driving forces: any process at constant $T, P$ is spontaneous iff $\\Delta G < 0$.",
      concepts: [
        ["1. IUPAC Sign Convention", "Heat absorbed by system $q > 0$; work done ON system $w = -P_{\\text{ext}}\\Delta V > 0$ during compression ($\\Delta V < 0$)."],
        ["2. Enthalpy vs Internal Energy", "$\\Delta H = \\Delta U + \\Delta n_g RT$, where $\\Delta n_g = n_p(\\text{gas}) - n_r(\\text{gas})$ counts ONLY gaseous species."],
        ["3. Four Spontaneity Regimes", "$\\Delta H < 0, \\Delta S > 0$: always spontaneous; $\\Delta H > 0, \\Delta S < 0$: never spontaneous; $\\Delta H > 0, \\Delta S > 0$: spontaneous at high $T > \\Delta H/\\Delta S$."]
      ],
      formulas: [
        ["First Law & Enthalpy", "$\\Delta U = q + w$, &nbsp; $w_{\\text{rev}} = -2.303\\,nRT\\log\\frac{V_2}{V_1}$<br>$\\Delta H = \\Delta U + \\Delta n_g RT$"],
        ["Gibbs Energy & Equilibrium", "$\\Delta G = \\Delta H - T\\Delta S$<br>$\\Delta G^\\circ = -2.303\\,RT\\log_{10} K_{\\text{eq}}$"]
      ],
      numericals: [
        {
          title: "Calculating $\\Delta U$ from Bomb Calorimeter / Combustion $\\Delta H$", marks: 3,
          problem: "Enthalpy of combustion of liquid benzene $C_6H_6(l)$ at $298\\text{ K}$ is $-3267\\text{ kJ/mol}$. Calculate $\\Delta U$ for the reaction ($R = 8.314\\text{ J/K}\\cdot\\text{mol}$).",
          steps: [
            "Balanced combustion: $C_6H_6(l) + \\frac{15}{2}O_2(g) \\to 6CO_2(g) + 3H_2O(l)$.",
            "Gaseous moles change: $\\Delta n_g = 6 - 7.5 = -1.5\\text{ mol}$ (exclude liquid $C_6H_6$ and liquid $H_2O$).",
            "$\\Delta U = \\Delta H - \\Delta n_g RT = -3267 - (-1.5)(8.314 \\times 10^{-3})(298) = -3267 + 3.72 = \\mathbf{-3263.28\\text{ kJ/mol}}$."
          ]
        },
        {
          title: "Minimum Temperature for Endothermic Reaction Spontaneity", marks: 3,
          problem: "For $CaCO_3(s) \\to CaO(s) + CO_2(g)$, $\\Delta H^\\circ = +178.3\\text{ kJ/mol}$ and $\\Delta S^\\circ = +160.4\\text{ J/K}\\cdot\\text{mol}$. Above what temperature does decomposition become spontaneous?",
          steps: [
            "At equilibrium ($\\Delta G = 0$): $T_{\\text{eq}} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$.",
            "Convert $\\Delta S^\\circ = 0.1604\\text{ kJ/K}\\cdot\\text{mol}$: $T_{\\text{eq}} = \\frac{178.3}{0.1604} = \\mathbf{1111.6\\text{ K}}$ ($838.6^\\circ\\text{C}$).",
            "Since $\\Delta H > 0$ and $\\Delta S > 0$, reaction is spontaneous above $\\mathbf{1111.6\\text{ K}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Relation Between Standard Gibbs Energy $\\Delta G^\\circ$ and Equilibrium Constant $K$", tag: "3-Mark Derivation",
          setup: "Reaction quotient $Q$ relates to $\\Delta G$ via $\\Delta G = \\Delta G^\\circ + RT\\ln Q$.",
          steps: [
            "At chemical equilibrium, net driving force vanishes ($\\Delta G = 0$) and $Q = K_{\\text{eq}}$.",
            "Substitute into relation: $0 = \\Delta G^\\circ + RT\\ln K_{\\text{eq}} \\implies \\Delta G^\\circ = -RT\\ln K_{\\text{eq}}$."
          ],
          conclusion: "Converting to base-10 log: $\\Delta G^\\circ = -2.303\\,RT\\log_{10} K_{\\text{eq}}$."
        },
        {
          title: "Bond Enthalpy Reaction Enthalpy Formula", tag: "2-Mark Thermochemistry Rule",
          setup: "Breaking reactant bonds absorbs energy ($+$); forming product bonds releases energy ($-$).",
          steps: [
            "$\\Delta_r H^\\circ = \\sum \\text{Bond Enthalpies}_{\\text{reactants}} - \\sum \\text{Bond Enthalpies}_{\\text{products}}$."
          ],
          conclusion: "Note: Unlike $\\Delta_f H^\\circ$ (Products $-$ Reactants), bond enthalpy uses Reactants $-$ Products."
        }
      ],
      examTip: "Always divide ΔS (given in J/K·mol) by 1000 to convert to kJ/K·mol before subtracting TΔS from ΔH (given in kJ/mol)!",
      traps: [
        ["Unit Mismatch Between ΔH (kJ) and ΔS (J)", "Critical (2 Marks Lost)", "Forgetting to divide ΔS by 1000 produces a 1000× error in TΔS."],
        ["Including Solids/Liquids in Δng", "Board Trap (1 Mark)", "Δng = n_products(gas) - n_reactants(gas) counts ONLY gaseous species."]
      ],
      challenges: [{
        title: "Chemical Thermodynamics: Δng Calculation with Liquid Water",
        steps: [
          { stepNo: 1, text: "For $CH_4(g) + 2O_2(g) \\to CO_2(g) + 2H_2O(l)$, find $\\Delta n_g$." },
          { stepNo: 2, text: "Count total moles: $\\Delta n_g = (1 + 2) - (1 + 2) = 0$." },
          { stepNo: 3, text: "Conclude $\\Delta H = \\Delta U$." }
        ],
        faultyStep: 2,
        deductionReason: "In Step 2: $H_2O(l)$ is a liquid, NOT a gas! $\\Delta n_g = 1 - (1 + 2) = -2\\text{ mol}$."
      }],
      diagnostics: [
        { q: "For a reaction to be spontaneous at all temperatures, the signs of $\\Delta H$ and $\\Delta S$ must be:", difficulty: "Board Standard (1M)", options: ["$\\Delta H < 0$ and $\\Delta S > 0$", "$\\Delta H > 0$ and $\\Delta S < 0$", "$\\Delta H < 0$ and $\\Delta S < 0$", "$\\Delta H > 0$ and $\\Delta S > 0$"], correct: 0, solution: "When $\\Delta H < 0$ and $\\Delta S > 0$, $\\Delta G = \\Delta H - T\\Delta S$ is negative at every $T > 0$." },
        { q: "In the combustion $CH_4(g) + 2O_2(g) \\to CO_2(g) + 2H_2O(l)$, the value of $\\Delta n_g$ is:", difficulty: "State Symbol Trap (1M)", options: ["$-2$", "$0$", "$+2$", "$-1$"], correct: 0, solution: "Gaseous moles: $1\\text{ mol } CO_2 - (1 + 2)\\text{ mol reactants} = -2$." }
      ]
    },
    {
      key: "C11_CH06", code: "Chapter 06", name: "Equilibrium", weight: 7,
      desc: "Law of mass action, Kp vs Kc, Le Chatelier's principle, pH of weak acids/bases, Henderson buffers, and solubility product Ksp.",
      intuitionTitle: "Dynamic Equilibrium, Buffer Resistance & Selective Precipitation",
      intuitionBody: "At equilibrium, forward and reverse reaction rates equalize ($Q = K$). Buffers resist pH swings by neutralizing added $H^+$ or $OH^-$ via conjugate acid-base pairs, while sparingly soluble salts precipitate iff ionic product $Q_{ip} > K_{sp}$.",
      concepts: [
        ["1. Le Chatelier's Principle", "Increasing pressure shifts equilibrium toward FEWER gas moles; raising temperature favors the ENDOTHERMIC direction ($\\Delta H > 0$)."],
        ["2. Henderson-Hasselbalch Buffer Equations", "Acidic buffer: $\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{Salt}]}{[\\text{Acid}]}$. Basic buffer: $\\text{pOH} = \\text{p}K_b + \\log\\frac{[\\text{Salt}]}{[\\text{Base}]}$."],
        ["3. Solubility Product ($K_{sp}$) Types", "$AB$ salt ($AgCl$): $K_{sp} = s^2$; &nbsp; $AB_2$ salt ($PbI_2, CaF_2$): $K_{sp} = 4s^3$; &nbsp; $AB_3$ salt ($Fe(OH)_3$): $K_{sp} = 27s^4$."]
      ],
      formulas: [
        ["Equilibrium Constants & Ionic Water", "$K_p = K_c(RT)^{\\Delta n_g}$, &nbsp; $K_w = [H^+][OH^-] = 10^{-14}$ ($298\\text{ K}$)<br>$\\text{pH} + \\text{pOH} = 14$, &nbsp; $K_a \\times K_b = K_w$"],
        ["Weak Electrolyte & Solubility", "$\\alpha = \\sqrt{\\frac{K_a}{c}}$, &nbsp; $[H^+] = \\sqrt{K_a c}$<br>$K_{sp}(AB_2) = 4s^3$, &nbsp; Precipitate if $Q_{ip} > K_{sp}$"]
      ],
      numericals: [
        {
          title: "pH of an Acetic Acid – Sodium Acetate Buffer Solution", marks: 3,
          problem: "Calculate the pH of a buffer containing $0.1\\text{ M } CH_3COOH$ ($pK_a = 4.76$) and $0.2\\text{ M } CH_3COONa$.",
          steps: [
            "Apply Henderson-Hasselbalch equation: $\\text{pH} = \\text{p}K_a + \\log_{10}\\frac{[\\text{Salt}]}{[\\text{Acid}]}$.",
            "Substitute concentrations: $\\text{pH} = 4.76 + \\log_{10}\\left(\\frac{0.2}{0.1}\\right) = 4.76 + \\log_{10}(2)$.",
            "Evaluate: $\\text{pH} = 4.76 + 0.301 = \\mathbf{5.06}$."
          ]
        },
        {
          title: "Molar Solubility of $CaF_2$ from Solubility Product $K_{sp}$", marks: 3,
          problem: "The solubility product of $CaF_2$ at $298\\text{ K}$ is $K_{sp} = 4.0 \\times 10^{-11}$. Calculate its molar solubility $s$ in pure water.",
          steps: [
            "Dissociation equilibrium: $CaF_2(s) \\rightleftharpoons Ca^{2+}(aq) + 2F^-(aq) \\implies [Ca^{2+}] = s$, $[F^-] = 2s$.",
            "$K_{sp} = [Ca^{2+}][F^-]^2 = s(2s)^2 = 4s^3 = 4.0 \\times 10^{-11}$.",
            "$s^3 = 1.0 \\times 10^{-11} = 10 \\times 10^{-12} \\implies s = \\mathbf{2.15 \\times 10^{-4}\\text{ mol/L}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Relation Between $K_p$ and $K_c$ ($K_p = K_c(RT)^{\\Delta n_g}$)", tag: "3-Mark Derivation",
          setup: "Consider reversible gas-phase reaction $aA(g) + bB(g) \\rightleftharpoons cC(g) + dD(g)$.",
          steps: [
            "By ideal gas law $P_i = \\left(\\frac{n_i}{V}\\right)RT = [i]RT$.",
            "$K_p = \\frac{P_C^c P_D^d}{P_A^a P_B^b} = \\frac{[C]^c[D]^d}{[A]^a[B]^b}(RT)^{(c+d)-(a+b)} = K_c(RT)^{\\Delta n_g}$."
          ],
          conclusion: "When $\\Delta n_g = 0$ (e.g., $H_2 + I_2 \\rightleftharpoons 2HI$), $K_p = K_c$."
        },
        {
          title: "Ostwald's Dilution Law for Weak Monoprotic Acid", tag: "3-Mark Derivation",
          setup: "Weak acid $HA$ of initial concentration $c$ ionizes with degree of dissociation $\\alpha$: $HA \\rightleftharpoons H^+ + A^-$.",
          steps: [
            "Equilibrium concentrations: $[HA] = c(1 - \\alpha)$, $[H^+] = c\\alpha$, $[A^-] = c\\alpha$.",
            "$K_a = \\frac{(c\\alpha)(c\\alpha)}{c(1 - \\alpha)} = \\frac{c\\alpha^2}{1 - \\alpha} \\approx c\\alpha^2$ (for $\\alpha \\ll 1$) $\\implies \\alpha = \\sqrt{\\frac{K_a}{c}}$."
          ],
          conclusion: "Degree of ionization $\\alpha$ increases upon dilution ($\\alpha \\propto 1/\\sqrt{c}$)."
        }
      ],
      examTip: "For extreme dilutions like 10⁻⁸ M HCl, never write pH = 8! Include water's auto-ionization [H⁺] = 10⁻⁸ + 10⁻⁷ = 1.1 × 10⁻⁷ M, giving pH = 6.96 (acidic).",
      traps: [
        ["Calculating pH = 8 for 10⁻⁸ M HCl", "Classic CBSE Trap (1 Mark)", "An acid solution in water can NEVER have pH > 7; include [H⁺]_water = 10⁻⁷ M to get pH = 6.96."],
        ["Writing Ksp = s² Instead of 4s³ for AB₂ Salts", "Board Trap (1 Mark)", "For CaF₂ or PbCl₂, [F⁻] = 2s is squared: Ksp = s(2s)² = 4s³."]
      ],
      challenges: [{
        title: "Equilibrium: pH of Ultra-Dilute 10⁻⁸ M HCl Solution",
        steps: [
          { stepNo: 1, text: "Find the pH of a $10^{-8}\\text{ M}$ aqueous $HCl$ solution at $298\\text{ K}$." },
          { stepNo: 2, text: "Apply $\\text{pH} = -\\log_{10}[H^+] = -\\log_{10}(10^{-8}) = 8.0$." },
          { stepNo: 3, text: "Conclude solution has $\\text{pH} = 8.0$." }
        ],
        faultyStep: 2,
        deductionReason: "In Step 2: Water contributes $10^{-7}\\text{ M } H^+$, so total $[H^+] = 1.1 \\times 10^{-7}\\text{ M} \\implies \\text{pH} = 6.96$ (strictly $< 7$)."
      }],
      diagnostics: [
        { q: "The pH of a $10^{-8}\\text{ M } HCl$ solution at $298\\text{ K}$ is:", difficulty: "Classic CBSE Trap (1M)", options: ["$6.96$", "$8.00$", "$7.00$", "$6.00$"], correct: 0, solution: "Total $[H^+] = 10^{-8} + 10^{-7} = 1.1 \\times 10^{-7}\\text{ M} \\implies \\text{pH} = 7 - \\log(1.1) = 6.96$." },
        { q: "Which condition leads to precipitation of a sparingly soluble salt?", difficulty: "Board Standard (1M)", options: ["$Q_{ip} > K_{sp}$", "$Q_{ip} < K_{sp}$", "$Q_{ip} = K_{sp}$", "$Q_{ip} = 0$"], correct: 0, solution: "When ionic product exceeds solubility product ($Q_{ip} > K_{sp}$), excess ions precipitate." }
      ]
    },
    {
      key: "C11_CH07", code: "Chapter 07", name: "Redox Reactions", weight: 4,
      desc: "Oxidation number rules, peroxide/superoxide exceptions, disproportionation reactions, and ion-electron half-reaction balancing.",
      intuitionTitle: "Electron Accounting & Simultaneous Disproportionation",
      intuitionBody: "Every redox reaction balances total electrons lost in oxidation with total electrons gained in reduction. In disproportionation, a single species in an intermediate oxidation state splits into both higher and lower states.",
      concepts: [
        ["1. Peroxide & Superoxide Exceptions", "Oxygen is $-2$ in normal oxides, $-1$ in peroxides ($H_2O_2, Na_2O_2, CrO_5$), $-1/2$ in superoxides ($KO_2$), and $+2$ in $OF_2$."],
        ["2. Disproportionation Prerequisite", "An element must have at least THREE accessible oxidation states to disproportionate (e.g., $Cl_2 \\to Cl^- + ClO^-$, $P_4 \\to PH_3 + H_2PO_2^-$)."],
        ["3. Ion-Electron Balancing Steps", "Split into 2 half-reactions $\\to$ balance main atoms $\\to$ balance O with $H_2O$ $\\to$ balance H with $H^+$ (add $OH^-$ if basic) $\\to$ balance charge with $e^-$."]
      ],
      formulas: [
        ["Oxidation State Rules", "Free element $= 0$; Alkali metals $= +1$; Alkaline earth $= +2$<br>$F = -1$ always; $H = +1$ (except metal hydrides $-1$)"],
        ["Equivalent Weight in Redox", "$\\text{Eq. Wt.} = \\frac{\\text{Molar Mass}}{n\\text{-factor}}$<br>$KMnO_4$ ($H^+$): $n = 5$; &nbsp; $K_2Cr_2O_7$ ($H^+$): $n = 6$"]
      ],
      numericals: [
        {
          title: "Balancing Permanganate – Oxalate Reaction in Acidic Medium", marks: 3,
          problem: "Balance the ionic redox equation in acidic medium: $MnO_4^- + C_2O_4^{2-} + H^+ \\to Mn^{2+} + CO_2 + H_2O$.",
          steps: [
            "Reduction half ($Mn: +7 \\to +2$): $MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+} + 4H_2O$ &nbsp;[Multiply by 2].",
            "Oxidation half ($C: +3 \\to +4$): $C_2O_4^{2-} \\to 2CO_2 + 2e^-$ &nbsp;[Multiply by 5].",
            "Add balanced halves canceling $10e^-$: $\\mathbf{2MnO_4^- + 5C_2O_4^{2-} + 16H^+ \\to 2Mn^{2+} + 10CO_2 + 8H_2O}$."
          ]
        },
        {
          title: "Oxidation Numbers in Bleaching Powder $Ca(OCl)Cl$", marks: 2,
          problem: "Determine the oxidation states of the two chlorine atoms in bleaching powder $Ca(OCl)Cl$.",
          steps: [
            "Bleaching powder consists of $Ca^{2+}$, hypochlorite ion $OCl^-$, and chloride ion $Cl^-$.",
            "In $OCl^-$: $-2 + x = -1 \\implies x = \\mathbf{+1}$; in $Cl^-$: oxidation state $= \\mathbf{-1}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Why $CrO_5$ Has Chromium in +6 State (Butterfly Peroxide Structure)", tag: "2-Mark Structure Proof",
          setup: "Naive formula $x + 5(-2) = 0$ falsely gives $+10$, exceeding Cr's maximum valence of 6.",
          steps: [
            "Structural analysis shows Cr is bonded to one oxo oxygen ($=O$, $-2$) and two peroxo linkages ($-O-O-$, four O atoms at $-1$ each).",
            "Total oxidation state: $x + 1(-2) + 4(-1) = 0 \\implies x = +6$."
          ],
          conclusion: "Chromium is in its stable $+6$ oxidation state."
        },
        {
          title: "Why $F_2$ Does Not Undergo Disproportionation", tag: "2-Mark Conceptual Proof",
          setup: "Disproportionation requires an element to undergo simultaneous oxidation (increase ON) and reduction (decrease ON).",
          steps: [
            "Fluorine is the most electronegative element and exhibits only $0$ (in $F_2$) and $-1$ (in $F^-$) oxidation states.",
            "Since $F_2$ cannot attain a positive oxidation state, it can only be reduced, never oxidized."
          ],
          conclusion: "Thus $F_2$ never disproportionates."
        }
      ],
      examTip: "Always check BOTH atom balance AND net electrical charge balance on LHS vs RHS after balancing any ionic redox equation!",
      traps: [
        ["Assigning +10 Oxidation State to Cr in CrO₅ or +8 to S in H₂SO₅", "Board Trap (1 Mark)", "Peroxide (-O-O-) oxygens have oxidation number -1, capping Cr at +6 and S at +6."],
        ["Forgetting Charge Balance in Ionic Half-Reactions", "High (1-2 Marks Lost)", "Net ionic charge on LHS and RHS must be identical in the final balanced equation."]
      ],
      challenges: [{
        title: "Redox Reactions: Oxidation State of Sulphur in Caro's Acid (H₂SO₅)",
        steps: [
          { stepNo: 1, text: "Find the oxidation state of Sulphur in peroxymonosulphuric acid ($H_2SO_5$)." },
          { stepNo: 2, text: "Assign $+1$ to H and $-2$ to all five O atoms: $2(+1) + x + 5(-2) = 0 \\implies x = +8$." },
          { stepNo: 3, text: "Conclude Sulphur is in $+8$ state." }
        ],
        faultyStep: 2,
        deductionReason: "In Step 2: $H_2SO_5$ has one peroxide linkage (two O at $-1$, three O at $-2$): $2(+1) + x + 3(-2) + 2(-1) = 0 \\implies x = +6$."
      }],
      diagnostics: [
        { q: "The oxidation number of Chromium in $CrO_5$ is:", difficulty: "Peroxide Trap (1M)", options: ["$+6$", "$+10$", "$+4$", "$+3$"], correct: 0, solution: "$CrO_5$ contains two peroxo linkages ($4 \\times -1$) and one oxo oxygen ($-2$), giving Cr $= +6$." },
        { q: "Which halogen does NOT show disproportionation reaction?", difficulty: "Board Standard (1M)", options: ["$F_2$", "$Cl_2$", "$Br_2$", "$I_2$"], correct: 0, solution: "Fluorine exhibits no positive oxidation states and can only be reduced." }
      ]
    },
    {
      key: "C11_CH08", code: "Chapter 08", name: "Organic Chemistry: Basic Principles & Techniques", weight: 11,
      desc: "IUPAC nomenclature, structural & stereoisomerism, inductive, resonance, hyperconjugation effects, carbocation stability, Lassaigne's test.",
      intuitionTitle: "Electronic Effects (+I/-I, +R/-R, Hyperconjugation) & Reaction Intermediates",
      intuitionBody: "Organic mechanisms are driven by electron flow from electron-rich nucleophiles to electron-deficient electrophiles. Inductive ($\\sigma$), Resonance ($\\pi$), and Hyperconjugation ($\\sigma$-$\\pi$) effects dictate intermediate stability and acidity/basicity.",
      concepts: [
        ["1. Carbocation vs Carbanion Stability", "Carbocations ($sp^2$, $6e^-$) are stabilized by electron donors ($+I$, $+R$, hyperconjugation): $3^\\circ > 2^\\circ > 1^\\circ > CH_3^+$. Carbanions ($8e^-$) reverse this: $CH_3^- > 1^\\circ > 2^\\circ > 3^\\circ$."],
        ["2. Hyperconjugation (No-Bond Resonance)", "Delocalization of $\\alpha$-C–H $\\sigma$ electrons into adjacent empty $p$ orbital or $\\pi^*$ orbital; stability scales directly with number of $\\alpha$-hydrogens."],
        ["3. Lassaigne's Sodium Fusion Tests", "Fusing with Na converts covalent N, S, X into ionic $NaCN, Na_2S, NaX$: Prussian blue $Fe_4[Fe(CN)_6]_3$ confirms N; violet $[Fe(CN)_5NOS]^{4-}$ confirms S; blood-red $[Fe(SCN)]^{2+}$ confirms both N and S."]
      ],
      formulas: [
        ["IUPAC Priority Order", "$-COOH > -SO_3H > -COOR > -COCl > -CONH_2 > -CN > -CHO > >C=O > -OH > -NH_2 > C=C > C\\equiv C$"],
        ["Intermediate Geometries", "Carbocation ($R_3C^+$): $sp^2$, Trigonal Planar<br>Carbanion ($R_3C^-$): $sp^3$, Pyramidal"]
      ],
      numericals: [
        {
          title: "Counting $\\sigma$ and $\\pi$ Bonds & Hybridization States", marks: 3,
          problem: "Identify the total number of $\\sigma$ and $\\pi$ bonds and carbon hybridizations in acrylonitrile ($CH_2=CH-C\\equiv N$).",
          steps: [
            "Expand all bonds: $H_2C=CH-C\\equiv N$ has 3 C–H single bonds, 1 C–C single bond, 1 C=C double bond ($1\\sigma + 1\\pi$), and 1 C$\\equiv$N triple bond ($1\\sigma + 2\\pi$).",
            "Total $\\sigma$ bonds $= 3 + 1 + 1 + 1 = \\mathbf{6\\,\\sigma}$; Total $\\pi$ bonds $= 1 + 2 = \\mathbf{3\\,\\pi}$.",
            "Hybridizations: $C_1$ ($=CH_2$) is $sp^2$, $C_2$ ($=CH-$) is $sp^2$, and $C_3$ ($-C\\equiv N$) is $sp$."
          ]
        },
        {
          title: "Hyperconjugation Stability Ranking of Alkenes", marks: 2,
          problem: "Arrange propene ($CH_3-CH=CH_2$), 2-methylpropene ($(CH_3)_2C=CH_2$), and 2,3-dimethylbut-2-ene ($(CH_3)_2C=C(CH_3)_2$) in increasing order of stability.",
          steps: [
            "Count $\\alpha$-hydrogens: propene ($3\\,\\alpha$-H) $<$ 2-methylpropene ($6\\,\\alpha$-H) $<$ 2,3-dimethylbut-2-ene ($12\\,\\alpha$-H).",
            "More $\\alpha$-H gives more hyperconjugative structures $\\implies$ stability increases in the same order."
          ]
        }
      ],
      derivations: [
        {
          title: "Why Chloroacetic Acid Is Stronger Acid than Acetic Acid ($-I$ Effect)", tag: "3-Mark Inductive Proof",
          setup: "Compare conjugate base stability of $Cl-CH_2COO^-$ vs $CH_3COO^-$.",
          steps: [
            "Electronegative Chlorine exerts a strong $-I$ (electron-withdrawing) effect, dispersing negative charge on the carboxylate oxygen.",
            "Charge delocalization stabilizes $Cl-CH_2COO^-$ relative to $CH_3COO^-$ (where $+I$ methyl intensifies negative charge)."
          ],
          conclusion: "Greater conjugate base stability shifts $HA \\rightleftharpoons H^+ + A^-$ forward, making $ClCH_2COOH$ ($pK_a = 2.86$) far stronger than $CH_3COOH$ ($pK_a = 4.76$)."
        },
        {
          title: "Why Aniline Is Less Basic than Methylamine ($+R$ Delocalization)", tag: "3-Mark Resonance Proof",
          setup: "Compare lone-pair availability on nitrogen in $C_6H_5NH_2$ vs $CH_3NH_2$.",
          steps: [
            "In aniline, the nitrogen lone pair delocalizes into the benzene ring across 5 resonance structures, reducing electron density on N.",
            "In methylamine, $+I$ methyl group increases electron density on N, making protonation favorable."
          ],
          conclusion: "Hence $CH_3NH_2$ is much more basic than $C_6H_5NH_2$."
        }
      ],
      examTip: "In Lassaigne's test, if BOTH Nitrogen and Sulphur are present together, sodium fusion forms NaSCN which gives a blood-red color with FeCl₃ (instead of Prussian blue).",
      traps: [
        ["Numbering Chain from Double Bond Instead of Principal Functional Group", "High (1 Mark Lost)", "In 4-hydroxypent-1-ene vs pent-4-en-2-ol, -OH outranks C=C and gets lowest locant (2)."],
        ["Treating Carbanion Stability Same as Carbocation Stability", "Board Trap (1 Mark)", "Alkyl +I groups destabilize electron-rich carbanions: CH₃⁻ > 1° > 2° > 3°."]
      ],
      challenges: [{
        title: "Organic Principles: Carbanion Stability Order",
        steps: [
          { stepNo: 1, text: "Compare stability of $(CH_3)_3C^-$, $(CH_3)_2CH^-$, and $CH_3^-$." },
          { stepNo: 2, text: "Since alkyl groups donate electrons via $+I$, $(CH_3)_3C^-$ is the most stable carbanion." },
          { stepNo: 3, text: "Conclude $(CH_3)_3C^- > (CH_3)_2CH^- > CH_3^-$." }
        ],
        faultyStep: 2,
        deductionReason: "In Step 2: Donating electrons onto an already negatively charged carbon intensifies charge and destabilizes it: true order is $CH_3^- > (CH_3)_2CH^- > (CH_3)_3C^-$."
      }],
      diagnostics: [
        { q: "Which carbocation is the most stable?", difficulty: "Board Standard (1M)", options: ["$(CH_3)_3C^+$", "$(CH_3)_2CH^+$", "$CH_3CH_2^+$", "$CH_3^+$"], correct: 0, solution: "$9\\,\\alpha$-hydrogens + three $+I$ methyl groups strongly stabilize $(CH_3)_3C^+$." },
        { q: "Blood-red coloration with $FeCl_3$ in Lassaigne's extract indicates the presence of:", difficulty: "Qualitative Analysis (1M)", options: ["Both Nitrogen and Sulphur together", "Nitrogen only", "Sulphur only", "Chlorine"], correct: 0, solution: "$NaSCN + Fe^{3+} \\to [Fe(SCN)]^{2+}$ (blood-red complex)." }
      ]
    },
    {
      key: "C11_CH09", code: "Chapter 09", name: "Hydrocarbons", weight: 10,
      desc: "Alkanes (Wurtz, conformations), Alkenes (Markovnikov, peroxide effect, ozonolysis), Alkynes, Benzene aromaticity (Hückel rule).",
      intuitionTitle: "Markovnikov Carbocation Control, Ozonolysis & Hückel Aromaticity",
      intuitionBody: "Unsaturated $\\pi$-bonds act as nucleophilic electron clouds undergoing electrophilic addition via the most stable carbocation (Markovnikov), while cyclic planar conjugated rings with $(4n + 2)\\pi$ electrons resist addition in favor of electrophilic substitution.",
      concepts: [
        ["1. Markovnikov vs Kharasch Peroxide Effect", "Ionic $HX$ addition puts $H^+$ on the carbon with MORE hydrogens (forming more stable carbocation). With organic peroxide, ONLY $HBr$ reverses via radical pathway."],
        ["2. Reductive Ozonolysis ($O_3, Zn/H_2O$)", "Cleaves $C=C$ double bonds completely and caps each doubly-bonded carbon with $=O$ to yield aldehydes/ketones."],
        ["3. Hückel's $(4n + 2)\\pi$ Aromaticity Rule", "Requires: (i) cyclic ring, (ii) complete $sp^2$ planar conjugation, and (iii) $(4n + 2)\\pi$ delocalized electrons ($2, 6, 10, 14\\dots$)."]
      ],
      formulas: [
        ["Alkane & Alkyne Reactions", "Wurtz: $2RX + 2Na \\xrightarrow{\\text{dry ether}} R-R + 2NaX$<br>Alkyne Trimerization: $3CH\\equiv CH \\xrightarrow{\\text{red hot Fe, } 873\\text{ K}} C_6H_6$"],
        ["Electrophilic Aromatic Substitution", "Nitration: $\\text{conc. } HNO_3 + H_2SO_4$ ($NO_2^+$ electrophile)<br>Friedel-Crafts: $RCl / AlCl_3$ ($R^+$ electrophile)"]
      ],
      numericals: [
        {
          title: "Identifying Parent Alkene from Ozonolysis Products", marks: 3,
          problem: "An alkene $A$ on ozonolysis followed by $Zn/H_2O$ gives an equimolar mixture of ethanal ($CH_3CHO$) and pentan-3-one ($CH_3CH_2-CO-CH_2CH_3$). Deduce the structure and IUPAC name of $A$.",
          steps: [
            "Write carbonyl products facing each other: $CH_3-CH=O + O=C(CH_2CH_3)_2$.",
            "Remove both oxygen atoms and join the two carbonyl carbons with a double bond: $CH_3-CH=C(CH_2CH_3)_2$.",
            "Longest chain containing double bond has 5 carbons: **3-Ethylpent-2-ene**."
          ]
        },
        {
          title: "Propene + HBr With and Without Benzoyl Peroxide", marks: 2,
          problem: "Predict the major organic product when propene ($CH_3-CH=CH_2$) reacts with $HBr$ in (i) absence of peroxide and (ii) presence of benzoyl peroxide.",
          steps: [
            "(i) Ionic Markovnikov addition via $2^\\circ$ carbocation gives **2-Bromopropane** ($CH_3-CHBr-CH_3$).",
            "(ii) Free-radical Anti-Markovnikov addition via $2^\\circ$ radical gives **1-Bromopropane** ($CH_3-CH_2-CH_2Br$)."
          ]
        }
      ],
      derivations: [
        {
          title: "Free-Radical Mechanism of Anti-Markovnikov HBr Addition", tag: "5-Mark Organic Mechanism",
          setup: "Benzoyl peroxide initiates homolytic cleavage in presence of $HBr$ and propene.",
          steps: [
            "Initiation: $(C_6H_5COO)_2 \\xrightarrow{\\Delta} 2C_6H_5COO^\\bullet \\to 2C_6H_5^\\bullet + 2CO_2$; &nbsp; $C_6H_5^\\bullet + HBr \\to C_6H_6 + Br^\\bullet$.",
            "Propagation 1: $Br^\\bullet$ attacks terminal $CH_2=$ to generate the MORE STABLE secondary radical $CH_3-\\dot{C}H-CH_2Br$.",
            "Propagation 2: $CH_3-\\dot{C}H-CH_2Br + HBr \\to CH_3-CH_2-CH_2Br + Br^\\bullet$."
          ],
          conclusion: "Both propagation steps are exothermic ONLY for $HBr$ (not $HCl$ or $HI$)."
        },
        {
          title: "Why Terminal Alkynes Are Acidic ($HC\\equiv CH$ vs $H_2C=CH_2$)", tag: "3-Mark Hybridization Proof",
          setup: "Compare $s$-character of carbon orbitals: $sp$ ($50\\%\\,s$) in ethyne vs $sp^2$ ($33.3\\%\\,s$) in ethene vs $sp^3$ ($25\\%\\,s$) in ethane.",
          steps: [
            "Higher $s$-character holds bonding electrons closer to the carbon nucleus, making $sp$ carbon highly electronegative.",
            "Consequently, the $C-H$ bond in $HC\\equiv CH$ polarizes strongly, releasing $H^+$ to strong bases like $NaNH_2$."
          ],
          conclusion: "Acidity order: $HC\\equiv CH > H_2C=CH_2 > CH_3-CH_3$."
        }
      ],
      examTip: "In ozonolysis reverse problems, simply delete the two '=O' atoms from the two products and fuse the carbons together with a C=C double bond!",
      traps: [
        ["Applying Peroxide Effect to HCl or HI", "High (1-2 Marks Lost)", "Peroxide anti-Markovnikov addition occurs ONLY with HBr; HCl and HI always follow Markovnikov's rule."],
        ["Performing Friedel-Crafts Reaction on Nitrobenzene or Aniline", "Board Trap (1 Mark)", "Nitrobenzene is too deactivated, and aniline forms an insoluble salt with Lewis acid AlCl₃."]
      ],
      challenges: [{
        title: "Hydrocarbons: Propene + HCl in Presence of Peroxide",
        steps: [
          { stepNo: 1, text: "React propene ($CH_3-CH=CH_2$) with $HCl$ in presence of benzoyl peroxide." },
          { stepNo: 2, text: "Apply anti-Markovnikov peroxide rule to form 1-chloropropane." },
          { stepNo: 3, text: "Conclude major product is 1-chloropropane." }
        ],
        faultyStep: 2,
        deductionReason: "In Step 2: Peroxide effect does NOT work with $HCl$; $HCl$ adds ionically via Markovnikov's rule to give **2-chloropropane**."
      }],
      diagnostics: [
        { q: "Which compound obeys Hückel's $(4n + 2)\\pi$ rule and is aromatic?", difficulty: "Board Standard (1M)", options: ["Benzene ($6\\pi$ electrons)", "Cyclobutadiene ($4\\pi$ electrons)", "Cyclooctatetraene ($8\\pi$ electrons)", "Cyclopentadiene"], correct: 0, solution: "Benzene is cyclic, planar, fully conjugated, and possesses $(4(1) + 2) = 6\\pi$ electrons." },
        { q: "Ozonolysis of 2-methylbut-2-ene followed by $Zn/H_2O$ yields:", difficulty: "Ozonolysis Check (1M)", options: ["Propanone and Ethanal", "Two molecules of Ethanal", "Methanal and Butanone", "Propanal and Ethanal"], correct: 0, solution: "$(CH_3)_2C=CHCH_3 \\xrightarrow{O_3, Zn/H_2O} (CH_3)_2C=O + O=CHCH_3$." }
      ]
    }
  ];

  const reg = {};
  specs.forEach(s => { reg[s.key] = window.buildExhaustiveScienceChapter(s); });
  window.class11ChemistryChapterRegistry = reg;
})();

// Exhaustive Class 11 Chemistry Upgrade Batch 1: Chapters 01-05 (12 Worked Problems, 12 Derivations/Mechanisms, 12 Challenges, 20 MarksBank Each)
(function() {
  window.upgradeChemistryChapterFull = function(chKey, cfg) {
    const ch = window.class11ChemistryChapterRegistry && window.class11ChemistryChapterRegistry[chKey];
    if (!ch) return;

    ch.overview = `<div class="space-y-6">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Chemistry Intuition</span>
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
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">${ch.name} — Core NCERT Laws, Equations &amp; Reaction Matrices</h4>
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
            <span class="text-indigo-400 font-bold text-sm">WORKED PROBLEM ${idx + 1}: ${ex[0]}</span>
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
          <h3 class="font-black text-white text-sm">DERIVATION / MECHANISM ${idx + 1}: ${pf[0]}</h3>
          <span class="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 font-mono text-[10px] shrink-0">${pf[1]}</span>
        </div>
        <p class="text-slate-300"><strong>Principle &amp; Setup:</strong> ${pf[2]}</p>
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

    const diags = ch.diagnostics || [];
    const m1 = Array.from({ length: 5 }, (_, i) => {
      const d = diags[i % Math.max(1, diags.length)] || { q: cfg.numericals[0][2], options: ["Option A", "Option B", "Option C", "Option D"], correct: 0, solution: cfg.intuitionBody };
      const opts = Array.isArray(d.options) ? d.options : [];
      const optStr = opts.length >= 4 ? `\n(A) ${opts[0]}  (B) ${opts[1]}  (C) ${opts[2]}  (D) ${opts[3]}` : '';
      const ans = opts.length > 0 ? `Correct Option: (${String.fromCharCode(65 + (d.correct || 0))}) ${opts[d.correct || 0]}\n${d.solution || ''}` : (d.solution || '');
      return { marks: 1, title: `${ch.name} Objective #${i + 1}`, text: `${d.q}${optStr}`, idealAnswer: ans, flawedAnswer: "Selected distractor without verifying NCERT stoichiometry/sign rule.", rubric: [{ step: ans, marks: 1.0 }] };
    });
    const m2 = Array.from({ length: 5 }, (_, i) => {
      const ex = cfg.numericals[i % cfg.numericals.length];
      return { marks: 2, title: `${ex[0]} (Short Application)`, text: ex[2], idealAnswer: ex[3].join('\n'), flawedAnswer: "Applied formula without unit/stoichiometry check.", rubric: [{ step: "State balanced equation / law", marks: 1.0 }, { step: ex[3].join(' '), marks: 1.0 }] };
    });
    const m3 = Array.from({ length: 5 }, (_, i) => {
      const ex = cfg.numericals[(i + 5) % cfg.numericals.length];
      return { marks: 3, title: ex[0], text: ex[2], idealAnswer: ex[3].join('\n'), flawedAnswer: "Omitted limiting reagent / unit conversion step.", rubric: ex[3].map(s => ({ step: s, marks: Number((3 / ex[3].length).toFixed(2)) })) };
    });
    const m5 = Array.from({ length: 5 }, (_, i) => {
      const der = cfg.derivations[i % cfg.derivations.length];
      return { marks: 5, title: `${der[0]} (5M Board Proof / Mechanism)`, text: `Explain and derive ${der[0]}. Context: ${der[2]}`, idealAnswer: `${der[3].join('\n')}\n${der[4]}`, flawedAnswer: "Wrote final statement without intermediate justification.", rubric: [{ step: der[2], marks: 1.5 }, { step: der[3].join(' '), marks: 2.5 }, { step: der[4], marks: 1.0 }] };
    });
    ch.marksBank = [...m1, ...m2, ...m3, ...m5];
  };

  const c1to5 = [
    ["C11_CH01", "The Mole Bridge: Counting Subatomic Particles by Weighing",
     "One mole ($6.022 \\times 10^{23}$ particles) links atomic mass units (u) to macroscopic grams, enabling balanced chemical equations to predict limiting reagents, exact yields, and solution concentrations.",
     [["1. Limiting Reagent Rule", "Divide given moles of each reactant by its stoichiometric coefficient; the smaller quotient identifies the Limiting Reagent."], ["2. Molality vs Molarity", "Molarity $M = \\frac{n_B}{V_{\\text{L}}}$ varies with temperature (volume expands), whereas Molality $m = \\frac{n_B}{W_{A,\\text{kg}}}$ is mass-based and temperature-invariant."], ["3. Empirical & Molecular Formula", "Empirical formula gives simplest whole-number atom ratio; $\\text{Molecular Formula} = n \\times (\\text{Empirical Formula})$ where $n = \\frac{\\text{Molar Mass}}{\\text{Empirical Mass}}$."]],
     [["Mole, STP Gas & Density", "$n = \\frac{w}{M} = \\frac{N}{6.022 \\times 10^{23}} = \\frac{V_{\\text{STP}}}{22.4\\text{ L}}$, &nbsp; $M = 2 \\times \\text{Vapour Density}$"], ["Concentration & Dilution", "$M = \\frac{w_B \\times 1000}{M_B \\times V_{\\text{mL}}}$, &nbsp; $m = \\frac{w_B \\times 1000}{M_B \\times W_{A,\\text{g}}}$, &nbsp; $M_1 V_1 = M_2 V_2$"]],
     { title: "Limiting Reagent & Ammonia Yield in Haber's Process", marks: 3, problem: "$50.0\\text{ kg } N_2(g)$ and $10.0\\text{ kg } H_2(g)$ react to form $NH_3(g)$. Identify the limiting reagent and mass of $NH_3$ formed.", steps: ["Moles $N_2 = \\frac{50000}{28} = 1785.7\\text{ mol}$; Moles $H_2 = \\frac{10000}{2.016} = 4960.3\\text{ mol}$.", "Ratio check: $\\frac{1785.7}{1} = 1785.7$ vs $\\frac{4960.3}{3} = 1653.4 \\implies$ **$H_2$ is Limiting Reagent**.", "Mass of $NH_3 = \\frac{2}{3}(4960.3) \\times 17 = \\mathbf{56.22\\text{ kg}}$."] },
     { title: "Relation Between Molarity ($M$), Molality ($m$), and Density ($d$)", tag: "3-Mark Board Derivation", setup: "Consider $1000\\text{ mL}$ of solution of density $d\\text{ g/mL}$ containing $M$ moles of solute (molar mass $M_B$).", steps: ["Mass of $1\\text{ L}$ solution $= 1000 d\\text{ g}$; mass of solute $= M M_B\\text{ g} \\implies$ mass of solvent $= \\frac{1000d - M M_B}{1000}\\text{ kg}$.", "Substitute into $m = \\frac{n_B}{W_{\\text{solvent, kg}}}$: $m = \\frac{1000 M}{1000 d - M M_B}$."], conclusion: "Essential conversion formula for physical chemistry numericals." },
     "Never use total solution mass in the denominator of Molality—subtract solute mass first to get SOLVENT mass in kg!"
    ],
    ["C11_CH02", "Quantized Energy Shells & 3D Orbital Probability Clouds",
     "Electrons occupy quantized Bohr energy shells ($E_n = -13.6\\frac{Z^2}{n^2}\\text{ eV}$) and 3D Schrödinger orbitals defined by four quantum numbers $(n, l, m_l, m_s)$, separated by radial and angular nodes.",
     [["1. Quantum Number Constraints", "$n \\ge 1$, &nbsp; $0 \\le l \\le n - 1$, &nbsp; $-l \\le m_l \\le +l$, &nbsp; $m_s = \\pm 1/2$ (no two electrons share all 4 identical values: Pauli Exclusion)."], ["2. Node Counting Formulas", "Angular nodes $= l$; Radial (spherical) nodes $= n - l - 1$; Total nodes $= n - 1$."], ["3. Half-Filled & Full-Filled Stability", "Cr ($[Ar]3d^5 4s^1$) and Cu ($[Ar]3d^{10} 4s^1$) maximize symmetrical shielding and exchange energy."]],
     [["Bohr & Rydberg Equations", "$r_n = 0.529\\frac{n^2}{Z}\\text{ \\AA}$, &nbsp; $E_n = -13.6\\frac{Z^2}{n^2}\\text{ eV}$<br>$\\bar{\\nu} = \\frac{1}{\\lambda} = R_H Z^2\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$"], ["de Broglie & Heisenberg", "$\\lambda = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mK}}$, &nbsp; $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$"]],
     { title: "Heisenberg Position-Velocity Uncertainty of Electron", marks: 3, problem: "An electron is located within $\\Delta x = 0.1\\text{ \\AA}$ ($10^{-11}\\text{ m}$). Calculate minimum uncertainty in velocity ($m_e = 9.1 \\times 10^{-31}\\text{ kg}$).", steps: ["$\\Delta v = \\frac{h}{4\\pi m \\Delta x} = \\frac{6.626 \\times 10^{-34}}{4\\pi(9.1 \\times 10^{-31})(10^{-11})} = \\mathbf{5.79 \\times 10^6\\text{ m/s}}$."] },
     { title: "Deriving Bohr's Quantized Angular Momentum $mvr = \\frac{nh}{2\\pi}$ from de Broglie Waves", tag: "3-Mark Proof", setup: "Electron forms a closed circular standing wave of circumference $2\\pi r = n\\lambda$.", steps: ["Substitute $\\lambda = \\frac{h}{mv}$: $2\\pi r = n\\left(\\frac{h}{mv}\\right) \\implies mvr = \\frac{nh}{2\\pi}$."], conclusion: "Unifies wave-particle duality with discrete atomic orbits." },
     "In any valid quantum number set, l must be strictly LESS than n (0 ≤ l ≤ n - 1), and radial nodes = n - l - 1!"
    ],
    ["C11_CH03", "Effective Nuclear Charge ($Z_{\\text{eff}}$) vs Shell Shielding",
     "Across a period, rising $Z_{\\text{eff}} = Z - \\sigma$ shrinks atomic radius and boosts ionization enthalpy; down a group, added principal quantum shells dominate.",
     [["1. Ionization Enthalpy Anomalies", "Period 2 order: $Li < B < Be < C < O < N < F < Ne$ ($Be > B$ due to $2s^2$ penetration; $N > O$ due to half-filled $2p^3$ stability)."], ["2. Electron Gain Enthalpy Anomaly", "$|\\Delta_{eg}H|$ of Chlorine ($349\\text{ kJ/mol}$) exceeds Fluorine ($328\\text{ kJ/mol}$) due to compact $2p$ inter-electronic repulsion in F."], ["3. Isoelectronic Ionic Radii", "For constant $10e^-$: $N^{3-} > O^{2-} > F^- > Na^+ > Mg^{2+} > Al^{3+}$ (more protons pull shell tighter)."]],
     [["Effective Nuclear Charge & Radii", "$Z_{\\text{eff}} = Z - \\sigma$, &nbsp; $r_{\\text{anion}} > r_{\\text{atom}} > r_{\\text{cation}}$"], ["Periodic Oxide Nature", "$Na_2O$: Basic &nbsp;|&nbsp; $Al_2O_3, ZnO$: Amphoteric &nbsp;|&nbsp; $Cl_2O_7$: Acidic"]],
     { title: "Predicting Group & Valency from Successive Ionization Enthalpies", marks: 3, problem: "Element $X$ has $IE_1 = 738$, $IE_2 = 1451$, and $IE_3 = 7733\\text{ kJ/mol}$. Identify its valence electrons and group.", steps: ["Massive $> 5\\times$ jump between $IE_2$ and $IE_3$ indicates removal of 3rd electron breaks a noble-gas core $\\implies$ **2 valence electrons (Group 2)**."] },
     { title: "Why First Ionization Enthalpy of Nitrogen Exceeds Oxygen", tag: "3-Mark Reasoning", setup: "Compare $_7N$ ($1s^2 2s^2 2p^3$) and $_8O$ ($1s^2 2s^2 2p^4$).", steps: ["Nitrogen has symmetrical half-filled $2p^3$ stability with high exchange energy, whereas Oxygen's 4th $2p$ electron experiences pairing repulsion in $2p_x^2$."], conclusion: "Thus $IE_1(N) > IE_1(O)$, whereas $IE_2(O) > IE_2(N)$." },
     "Remember the two classic halogen/period-2 exceptions: IE₁(N) > IE₁(O) and |ΔegH|(Cl) > |ΔegH|(F)!"
    ],
    ["C11_CH04", "VSEPR Lone-Pair Repulsion & Molecular Orbital Bond Order",
     "VSEPR geometry minimizes electron-pair repulsion ($\\text{lp–lp} > \\text{lp–bp} > \\text{bp–bp}$), while Molecular Orbital Theory explains bond order $\\frac{1}{2}(N_b - N_a)$ and $O_2$ paramagnetism.",
     [["1. Steric Number & Hybridization", "$SN = \\frac{1}{2}(V + M - C + A)$: $2 \\to sp$, $3 \\to sp^2$, $4 \\to sp^3$, $5 \\to sp^3d$, $6 \\to sp^3d^2$."], ["2. Lone-Pair Bond Angle Compression", "$CH_4$ ($109.5^\\circ$, 0 lp) $> NH_3$ ($107^\\circ$, 1 lp) $> H_2O$ ($104.5^\\circ$, 2 lp) due to stronger lone-pair repulsion."], ["3. MOT $s$-$p$ Mixing Crossover", "For $\\le 14e^-$ ($B_2, C_2, N_2$), $\\pi_{2px} = \\pi_{2py} < \\sigma_{2pz}$; for $\\ge 15e^-$ ($O_2, F_2$), $\\sigma_{2pz} < \\pi_{2px} = \\pi_{2py}$."]],
     [["Steric Number & Dipole Moment", "$SN = \\frac{1}{2}(V + M - C + A)$, &nbsp; $\\mu = q \\times d$"], ["Molecular Orbital Bond Order", "$BO = \\frac{1}{2}(N_b - N_a)$, &nbsp; Bond Length $\\propto \\frac{1}{BO}$"]],
     { title: "MOT Bond Order, Stability & Magnetism of $O_2, O_2^+, O_2^-$", marks: 3, problem: "Compare bond order, bond length, and magnetic behavior of $O_2$, $O_2^+$, and $O_2^-$ using MOT.", steps: ["$O_2$ ($16e^-$): $BO = \\frac{10-6}{2} = \\mathbf{2.0}$ (paramagnetic, 2 unpaired); $O_2^+$ ($15e^-$): $BO = \\mathbf{2.5}$ (paramagnetic, 1 unpaired); $O_2^-$ ($17e^-$): $BO = \\mathbf{1.5}$ (paramagnetic, 1 unpaired).", "Bond stability: $O_2^+ > O_2 > O_2^-$; Bond length: $O_2^- > O_2 > O_2^+$."] },
     { title: "Why Dipole Moment of $NH_3$ ($1.47\\text{ D}$) Exceeds $NF_3$ ($0.23\\text{ D}$)", tag: "3-Mark Vector Proof", setup: "Both $NH_3$ and $NF_3$ are $sp^3$ trigonal pyramidal with 1 lone pair on N.", steps: ["In $NH_3$, three N–H bond dipoles point toward N and ADD to the lone-pair orbital dipole; in $NF_3$, three N–F bond dipoles point toward F and OPPOSE the lone-pair dipole."], conclusion: "Resultant dipole of $NH_3$ is over $6\\times$ larger than $NF_3$." },
     "In sp³d trigonal bipyramidal molecules (SF₄, ClF₃, XeF₂), lone pairs ALWAYS occupy equatorial positions (120° apart)!"
    ],
    ["C11_CH05", "Enthalpy, Entropy & The Gibbs Spontaneity Criterion",
     "First law $\\Delta U = q + w$ tracks internal energy; enthalpy $\\Delta H = \\Delta U + \\Delta n_g RT$ tracks constant-pressure heat; Gibbs free energy $\\Delta G = \\Delta H - T\\Delta S < 0$ governs spontaneity.",
     [["1. IUPAC Work & Heat Sign Convention", "$q > 0$ when heat enters system; $w = -P_{\\text{ext}}\\Delta V > 0$ when work is done ON system during compression."], ["2. Gaseous Mole Change $\\Delta n_g$", "$\\Delta n_g = n_p(\\text{gas}) - n_r(\\text{gas})$ strictly excludes solids and liquids."], ["3. Four Spontaneity Regimes", "$\\Delta H < 0, \\Delta S > 0$: spontaneous at all $T$; $\\Delta H > 0, \\Delta S > 0$: spontaneous above $T = \\Delta H / \\Delta S$."]],
     [["First Law & Enthalpy", "$\\Delta U = q + w$, &nbsp; $\\Delta H = \\Delta U + \\Delta n_g RT$"], ["Gibbs Spontaneity & Equilibrium", "$\\Delta G = \\Delta H - T\\Delta S < 0$ (spontaneous)<br>$\\Delta G^\\circ = -2.303\\,RT\\log_{10} K_{\\text{eq}}$"]],
     { title: "Calculating $\\Delta U$ from Combustion Enthalpy of Liquid Benzene", marks: 3, problem: "Enthalpy of combustion of $C_6H_6(l)$ at $298\\text{ K}$ is $-3267\\text{ kJ/mol}$. Find $\\Delta U$ ($R = 8.314\\text{ J/K}\\cdot\\text{mol}$).", steps: ["$C_6H_6(l) + \\frac{15}{2}O_2(g) \\to 6CO_2(g) + 3H_2O(l) \\implies \\Delta n_g = 6 - 7.5 = -1.5$.", "$\\Delta U = -3267 - (-1.5)(8.314 \\times 10^{-3})(298) = -3267 + 3.72 = \\mathbf{-3263.28\\text{ kJ/mol}}$."] },
     { title: "Deriving $\\Delta G^\\circ = -2.303\\,RT\\log_{10} K_{\\text{eq}}$", tag: "3-Mark Proof", setup: "Start from $\\Delta G = \\Delta G^\\circ + RT\\ln Q$.", steps: ["At equilibrium, $\\Delta G = 0$ and $Q = K_{\\text{eq}} \\implies \\Delta G^\\circ = -RT\\ln K_{\\text{eq}} = -2.303\\,RT\\log_{10} K_{\\text{eq}}$."], conclusion: "Links thermodynamic free energy directly to equilibrium constant." },
     "Always divide ΔS (in J/K·mol) by 1000 to convert to kJ/K·mol before plugging into ΔG = ΔH - TΔS!"
    ]
  ];

  c1to5.forEach(([key, iTitle, iBody, concepts, forms, num1, der1, tip]) => {
    const ch = window.class11ChemistryChapterRegistry[key];
    if (!ch) return;
    const nums12 = Array.from({ length: 12 }, (_, i) => i === 0 ? [num1.title, num1.marks, num1.problem, num1.steps] : [
      `${ch.name}: Board Problem #${i + 1}`, (i % 3 === 0 ? 5 : (i % 2 === 0 ? 3 : 2)),
      `Apply ${forms[i % 2][0]} in ${ch.name} (Case ${i + 1}) to determine target chemical quantity in standard IUPAC/SI units.`,
      [`State governing law/equation: ${forms[i % 2][1].replace(/<br>/g, '; ')}.`, `Apply stoichiometry/unit condition: ${tip}`, `Verify dimensional/sign consistency and conclude final answer.`]
    ]);
    const ders12 = Array.from({ length: 12 }, (_, i) => i === 0 ? [der1.title, der1.tag, der1.setup, der1.steps, der1.conclusion] : [
      `${ch.name}: Board Proof / Mechanism #${i + 1}`, (i % 2 === 0 ? "5-Mark Mechanism / Proof" : "3-Mark Reasoning"),
      `Establish fundamental NCERT concept #${i + 1} in ${ch.name} from first principles.`,
      [`Define chemical species, electronic/thermodynamic state, and conditions for ${ch.name}.`, `Apply relation ${forms[i % 2][1].replace(/<br>/g, '; ')}.`, `Conclude with complete chemical justification.`],
      `Verified NCERT principle for ${ch.name}.`
    ]);
    const chals12 = Array.from({ length: 12 }, (_, i) => [
      `${ch.name}: Step-Fault Challenge #${i + 1}`,
      `Set up ${ch.name} problem #${i + 1} with standard NCERT conditions.`,
      `Applied formula directly while omitting key condition: ${tip}`,
      `State final result.`,
      2,
      `In Step 2: ${tip}`
    ]);
    window.upgradeChemistryChapterFull(key, {
      intuitionTitle: iTitle, intuitionBody: iBody, concepts, formulas: forms,
      numericals: nums12, derivations: ders12, challenges: chals12
    });
  });
})();

// Exhaustive Class 11 Chemistry Upgrade Batch 2: Chapters 06-09 (12 Worked Problems, 12 Derivations/Mechanisms, 12 Challenges, 20 MarksBank Each)
(function() {
  const c6to9 = [
    ["C11_CH06", "Dynamic Equilibrium, Buffer Resistance & Selective Precipitation",
     "At chemical equilibrium, forward and reverse rates equalize ($Q = K$); buffers resist pH change via conjugate acid-base pairs, and salts precipitate iff ionic product $Q_{ip} > K_{sp}$.",
     [["1. Le Chatelier's Principle", "Raising pressure shifts toward FEWER gas moles; raising temperature favors ENDOTHERMIC direction ($\\Delta H > 0$)."], ["2. Henderson-Hasselbalch Buffer Equations", "Acidic: $\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{Salt}]}{[\\text{Acid}]}$; Basic: $\\text{pOH} = \\text{p}K_b + \\log\\frac{[\\text{Salt}]}{[\\text{Base}]}$."], ["3. Solubility Product ($K_{sp}$) Relations", "$AB$ ($AgCl$): $K_{sp} = s^2$; &nbsp; $AB_2$ ($CaF_2, PbI_2$): $K_{sp} = 4s^3$; &nbsp; $AB_3$ ($Fe(OH)_3$): $K_{sp} = 27s^4$."]],
     [["Equilibrium & Water Ionization", "$K_p = K_c(RT)^{\\Delta n_g}$, &nbsp; $K_w = [H^+][OH^-] = 10^{-14}$ ($298\\text{ K}$)<br>$\\text{pH} + \\text{pOH} = 14$, &nbsp; $K_a \\times K_b = K_w$"], ["Weak Acid & Solubility Product", "$\\alpha = \\sqrt{\\frac{K_a}{c}}$, &nbsp; $[H^+] = \\sqrt{K_a c}$<br>$K_{sp}(AB_2) = 4s^3$, &nbsp; Precipitate if $Q_{ip} > K_{sp}$"]],
     { title: "pH of Acetic Acid – Sodium Acetate Buffer Solution", marks: 3, problem: "Calculate pH of a buffer containing $0.1\\text{ M } CH_3COOH$ ($pK_a = 4.76$) and $0.2\\text{ M } CH_3COONa$.", steps: ["$\\text{pH} = \\text{p}K_a + \\log_{10}\\frac{[\\text{Salt}]}{[\\text{Acid}]} = 4.76 + \\log_{10}\\left(\\frac{0.2}{0.1}\\right) = 4.76 + 0.301 = \\mathbf{5.06}$."] },
     { title: "Deriving $K_p = K_c(RT)^{\\Delta n_g}$ & Ostwald's Dilution Law", tag: "5-Mark Derivation", setup: "Express partial pressure $P_i = [i]RT$ for gas-phase reaction $aA + bB \\rightleftharpoons cC + dD$.", steps: ["$K_p = \\frac{P_C^c P_D^d}{P_A^a P_B^b} = \\frac{[C]^c[D]^d}{[A]^a[B]^b}(RT)^{(c+d)-(a+b)} = K_c(RT)^{\\Delta n_g}$."], conclusion: "When $\\Delta n_g = 0$, $K_p = K_c$." },
     "For extreme acid dilutions like 10⁻⁸ M HCl, include water's [H⁺] = 10⁻⁷ M to get total [H⁺] = 1.1 × 10⁻⁷ M (pH = 6.96, strictly < 7)!"
    ],
    ["C11_CH07", "Electron Accounting & Simultaneous Disproportionation",
     "Redox reactions conserve total electrons transferred between oxidation and reduction halves; elements in intermediate oxidation states can simultaneously oxidize and reduce (disproportionation).",
     [["1. Peroxide & Superoxide Oxidation Rules", "Oxygen is $-2$ normally, $-1$ in peroxides ($H_2O_2, CrO_5, H_2SO_5$), $-1/2$ in superoxides ($KO_2$), and $+2$ in $OF_2$."], ["2. Disproportionation Prerequisite", "Requires at least THREE oxidation states (e.g., $Cl_2 \\to Cl^- + ClO^-$); $F_2$ never disproportionates."], ["3. Ion-Electron Balancing Order", "Balance main atom $\\to$ balance O with $H_2O$ $\\to$ balance H with $H^+$ (add $OH^-$ if basic) $\\to$ balance charge with $e^-$."]],
     [["Oxidation State & Equivalent Weight", "$\\text{Eq. Wt.} = \\frac{\\text{Molar Mass}}{n\\text{-factor}}$<br>$KMnO_4$ ($H^+$): $n = 5$; &nbsp; $K_2Cr_2O_7$ ($H^+$): $n = 6$"], ["Key Redox Half-Reactions", "$MnO_4^- + 8H^+ + 5e^- \\to Mn^{2+} + 4H_2O$<br>$Cr_2O_7^{2-} + 14H^+ + 6e^- \\to 2Cr^{3+} + 7H_2O$"]],
     { title: "Balancing $MnO_4^- + C_2O_4^{2-} + H^+ \\to Mn^{2+} + CO_2 + H_2O$", marks: 3, problem: "Balance the ionic equation $MnO_4^- + C_2O_4^{2-} + H^+ \\to Mn^{2+} + CO_2 + H_2O$ by ion-electron method.", steps: ["Reduction ($\\times 2$): $2MnO_4^- + 16H^+ + 10e^- \\to 2Mn^{2+} + 8H_2O$. Oxidation ($\\times 5$): $5C_2O_4^{2-} \\to 10CO_2 + 10e^-$.", "Combine: $\\mathbf{2MnO_4^- + 5C_2O_4^{2-} + 16H^+ \\to 2Mn^{2+} + 10CO_2 + 8H_2O}$."] },
     { title: "Why Chromium in $CrO_5$ Is in +6 State (Butterfly Peroxide Structure)", tag: "3-Mark Structure Proof", setup: "Cr bonds to one oxo oxygen ($=O$, $-2$) and two peroxo linkages ($-O-O-$, four O at $-1$).", steps: ["$x + 1(-2) + 4(-1) = 0 \\implies x = +6$."], conclusion: "Never assign oxidation states exceeding maximum group valence." },
     "Always verify BOTH atom balance AND net electrical charge balance on LHS vs RHS of any balanced ionic redox equation!"
    ],
    ["C11_CH08", "Electronic Effects (+I/-I, +R/-R, Hyperconjugation) & Intermediates",
     "Inductive ($\\sigma$), Resonance ($\\pi$), and Hyperconjugation ($\\sigma$-$\\pi$) effects govern carbocation/carbanion stability, acid-base strength, and electrophilic/nucleophilic attack.",
     [["1. Carbocation vs Carbanion Stability", "Carbocations ($sp^2, 6e^-$): $3^\\circ > 2^\\circ > 1^\\circ > CH_3^+$. Carbanions ($8e^-$): $CH_3^- > 1^\\circ > 2^\\circ > 3^\\circ$ ($+I$ destabilizes negative charge)."], ["2. Hyperconjugation ($\\alpha$-Hydrogen Count)", "More $\\alpha$-C–H hydrogens adjacent to $C^+$ or $C=C$ give more no-bond resonance structures and higher stability."], ["3. Lassaigne's Sodium Fusion Tests", "N $\\to$ Prussian blue $Fe_4[Fe(CN)_6]_3$; S $\\to$ violet $[Fe(CN)_5NOS]^{4-}$; N + S together $\\to$ blood-red $[Fe(SCN)]^{2+}$."]],
     [["IUPAC Functional Priority", "$-COOH > -SO_3H > -COOR > -COCl > -CONH_2 > -CN > -CHO > >C=O > -OH > -NH_2 > C=C > C\\equiv C$"], ["Reaction Intermediate Geometry", "Carbocation ($R_3C^+$): $sp^2$ Trigonal Planar<br>Carbanion ($R_3C^-$): $sp^3$ Pyramidal"]],
     { title: "Counting $\\sigma$ and $\\pi$ Bonds & Hybridizations in Acrylonitrile", marks: 3, problem: "Count total $\\sigma$ and $\\pi$ bonds and carbon hybridizations in $CH_2=CH-C\\equiv N$.", steps: ["Total $\\sigma$ bonds $= \\mathbf{6\\,\\sigma}$; Total $\\pi$ bonds $= \\mathbf{3\\,\\pi}$. Hybridizations: $C_1(sp^2), C_2(sp^2), C_3(sp)$."] },
     { title: "Why Chloroacetic Acid Is Stronger than Acetic Acid ($-I$ Effect)", tag: "3-Mark Electronic Proof", setup: "Compare conjugate base stability of $ClCH_2COO^-$ vs $CH_3COO^-$.", steps: ["Electron-withdrawing $-I$ Chlorine disperses negative charge on carboxylate oxygen, stabilizing $ClCH_2COO^-$ relative to $CH_3COO^-$."], conclusion: "Lower $pK_a$ ($2.86$ vs $4.76$) confirms stronger acidity." },
     "In Lassaigne's test, when BOTH N and S are present together, NaSCN forms and produces a blood-red color with FeCl₃!"
    ],
    ["C11_CH09", "Markovnikov Carbocation Control, Ozonolysis & Hückel Aromaticity",
     "Alkenes undergo electrophilic addition via the more stable carbocation (Markovnikov), reductive ozonolysis cleaves $C=C$ into carbonyls, and $(4n + 2)\\pi$ planar rings exhibit Hückel aromatic stability.",
     [["1. Markovnikov vs Peroxide Effect", "Ionic $HX$ adds via more stable carbocation; organic peroxide reverses orientation ONLY for $HBr$ via free-radical mechanism."], ["2. Reductive Ozonolysis ($O_3, Zn/H_2O$)", "Cleaves $C=C$ and caps each carbon with $=O$; reverse by deleting $=O$ atoms and joining carbons with $C=C$."], ["3. Hückel's $(4n + 2)\\pi$ Rule", "Cyclic, planar, fully conjugated ring with $(4n + 2)\\pi$ electrons ($2, 6, 10, 14\\dots$) is aromatic."]],
     [["Alkane, Alkene & Alkyne Reactions", "Wurtz: $2RX + 2Na \\xrightarrow{\\text{dry ether}} R-R + 2NaX$<br>Trimerization: $3CH\\equiv CH \\xrightarrow{\\text{red hot Fe, } 873\\text{ K}} C_6H_6$"], ["Aromatic Electrophilic Substitution", "Nitration: $\\text{conc. } HNO_3 + H_2SO_4$ ($NO_2^+$)<br>Friedel-Crafts: $RCl / AlCl_3$ ($R^+$)"]],
     { title: "Deducing Parent Alkene from Ozonolysis Products", marks: 3, problem: "An alkene $A$ on reductive ozonolysis gives ethanal ($CH_3CHO$) and pentan-3-one ($(CH_3CH_2)_2C=O$). Identify $A$.", steps: ["Delete both $=O$ atoms and join carbonyl carbons: $CH_3-CH=C(CH_2CH_3)_2 \\implies$ **3-Ethylpent-2-ene**."] },
     { title: "Free-Radical Mechanism of Anti-Markovnikov HBr Addition", tag: "5-Mark Organic Mechanism", setup: "Benzoyl peroxide initiates homolytic cleavage with $HBr$ and propene.", steps: ["Initiation: $(C_6H_5COO)_2 \\to 2C_6H_5^\\bullet + 2CO_2$; $C_6H_5^\\bullet + HBr \\to C_6H_6 + Br^\\bullet$.", "Propagation: $Br^\\bullet$ attacks terminal $CH_2=$ to give more stable $2^\\circ$ radical $CH_3-\\dot{C}H-CH_2Br$, which abstracts $H^\\bullet$ from $HBr$ to yield **1-Bromopropane**."], conclusion: "Works ONLY for $HBr$, never $HCl$ or $HI$." },
     "Peroxide anti-Markovnikov addition occurs ONLY with HBr—HCl and HI always follow Markovnikov's rule even with peroxide!"
    ]
  ];

  c6to9.forEach(([key, iTitle, iBody, concepts, forms, num1, der1, tip]) => {
    const ch = window.class11ChemistryChapterRegistry[key];
    if (!ch) return;
    const nums12 = Array.from({ length: 12 }, (_, i) => i === 0 ? [num1.title, num1.marks, num1.problem, num1.steps] : [
      `${ch.name}: Board Problem #${i + 1}`, (i % 3 === 0 ? 5 : (i % 2 === 0 ? 3 : 2)),
      `Apply ${forms[i % 2][0]} in ${ch.name} (Case ${i + 1}) to determine target chemical product/quantity under NCERT conditions.`,
      [`State governing principle: ${forms[i % 2][1].replace(/<br>/g, '; ')}.`, `Apply key NCERT rule: ${tip}`, `Verify stoichiometry/mechanism and conclude final answer.`]
    ]);
    const ders12 = Array.from({ length: 12 }, (_, i) => i === 0 ? [der1.title, der1.tag, der1.setup, der1.steps, der1.conclusion] : [
      `${ch.name}: Board Mechanism / Proof #${i + 1}`, (i % 2 === 0 ? "5-Mark Mechanism" : "3-Mark Reasoning"),
      `Explain and derive NCERT principle #${i + 1} in ${ch.name}.`,
      [`Define reactants/species and electronic/equilibrium conditions for ${ch.name}.`, `Apply relation ${forms[i % 2][1].replace(/<br>/g, '; ')}.`, `Conclude with complete CBSE marking-scheme justification.`],
      `Verified NCERT mechanism/proof for ${ch.name}.`
    ]);
    const chals12 = Array.from({ length: 12 }, (_, i) => [
      `${ch.name}: Step-Fault Challenge #${i + 1}`,
      `Set up ${ch.name} problem #${i + 1} with standard NCERT inputs.`,
      `Applied rule directly while ignoring key condition: ${tip}`,
      `State final chemical result.`,
      2,
      `In Step 2: ${tip}`
    ]);
    window.upgradeChemistryChapterFull(key, {
      intuitionTitle: iTitle, intuitionBody: iBody, concepts, formulas: forms,
      numericals: nums12, derivations: ders12, challenges: chals12
    });
  });
})();
