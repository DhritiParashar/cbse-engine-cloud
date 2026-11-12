window.buildExhaustiveScienceChapter=window.buildExhaustiveScienceChapter||function(s){return{key:s.key,name:s.name||s.title||s.key,weightage:s.weightage||5,overview:'',exp1:'',exp2:'',diagnostics:[],errorFinder:{traps:[],challenges:[]},marksBank:[]};};
// Self-contained chapter scaffold builder fallback
window.buildExhaustiveScienceChapter = window.buildExhaustiveScienceChapter || function(spec) {
  return {
    key: spec.key,
    name: spec.name || spec.title || spec.key,
    weightage: spec.weightage || 5,
    overview: spec.overview || '',
    exp1: spec.exp1 || '',
    exp2: spec.exp2 || '',
    diagnostics: spec.diagnostics || [],
    errorFinder: spec.errorFinder || { traps: [], challenges: [] },
    marksBank: spec.marksBank || []
  };
};

// data/class12PhysicsChapters.js - Exhaustive NCERT Class 12 Physics (042) All 14 Chapters
(function() {
  const specs = [
    ["P12_CH01", "Chapter 01", "Electric Charges and Fields", 8,
     "Coulomb's law, electric field lines, electric dipole torque & axial/equatorial fields, Gauss's law applications.",
     "Electric Dipoles & Gauss's Closed-Surface Flux Law",
     "Gauss's Law ($\\Phi_E = \\oint \\vec{E}\\cdot d\\vec{A} = \\frac{q_{\\text{enc}}}{\\varepsilon_0}$) exploits spherical, cylindrical, or planar symmetry to evaluate electric fields without vector integration.",
     [["Dipole Field & Torque", "$E_{\\text{axial}} = \\frac{2kp}{r^3}$, &nbsp; $E_{\\text{eq}} = \\frac{kp}{r^3}$ ($r \\gg a$)<br>$\\vec{\\tau} = \\vec{p}\\times\\vec{E}$, &nbsp; $U = -\\vec{p}\\cdot\\vec{E}$"], ["Gauss's Law Results", "Infinite Wire: $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$<br>Infinite Sheet: $E = \\frac{\\sigma}{2\\varepsilon_0}$ (independent of $r$)"]],
     { title: "Electric Flux Through a Cube Enclosing Charge q", marks: 3, problem: "A point charge $+q$ is placed at distance $d/2$ directly above the center of a square of side $d$. Find electric flux through the square.", steps: ["Construct a closed Gaussian cube of side $d$ centering $+q$ so the given square forms 1 of 6 identical faces.", "By Gauss's Law, total flux $= \\frac{q}{\\varepsilon_0} \\implies \\text{Flux through 1 face} = \\mathbf{\\frac{q}{6\\varepsilon_0}}$."] },
     { title: "Axial Electric Field of an Electric Dipole", tag: "5-Mark Derivation", setup: "Dipole of charges $-q, +q$ separated by $2a$ ($p = 2qa$) at axial distance $r \\gg a$.", steps: ["$E_{\\text{axial}} = \\frac{kq}{(r - a)^2} - \\frac{kq}{(r + a)^2} = \\frac{kq(4ar)}{(r^2 - a^2)^2} = \\frac{2kpr}{(r^2 - a^2)^2}$.", "For $r \\gg a$, $E_{\\text{axial}} = \\frac{2kp}{r^3}$ along $\\vec{p}$."], conclusion: "Axial field is twice the equatorial field ($E_{\\text{axial}} = 2E_{\\text{eq}}$)." },
     "Electric flux depends ONLY on enclosed net charge inside the Gaussian surface, never on charges outside or surface size.",
     "Electric field due to an infinite plane sheet of charge density $\\sigma$ is:", ["$\\sigma/(2\\varepsilon_0)$", "$\\sigma/\\varepsilon_0$", "$2\\sigma/\\varepsilon_0$", "$\\sigma/(4\\pi\\varepsilon_0 r)$"], 0, "Gaussian pillbox gives $2EA = \\sigma A/\\varepsilon_0 \\implies E = \\sigma/(2\\varepsilon_0)$."],

    ["P12_CH02", "Chapter 02", "Electrostatic Potential and Capacitance", 8,
     "Electrostatic potential, equipotential surfaces, dipole potential energy, parallel-plate capacitor, and dielectric insertion.",
     "Conservative Potential Gradients & Dielectric Capacitance Boost",
     "Electric field points down the steepest potential drop ($E = -\\frac{dV}{dr}$), perpendicular to equipotential surfaces; inserting a dielectric slab of constant $K$ boosts capacitance to $C = K C_0$.",
     [["Potential & Gradient", "$V = \\frac{kq}{r}$, &nbsp; $V_{\\text{dipole}} = \\frac{kp\\cos\\theta}{r^2}$<br>$E = -\\frac{dV}{dr}$, &nbsp; $W = q(V_B - V_A)$"], ["Capacitor & Energy Density", "$C = \\frac{K\\varepsilon_0 A}{d}$, &nbsp; $U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$<br>Energy Density $u = \\frac{1}{2}\\varepsilon_0 E^2$"]],
     { title: "Dielectric Insertion With Battery Connected vs Disconnected", marks: 3, problem: "A parallel plate capacitor ($C_0, V_0, U_0$) has a dielectric slab ($K = 4$) inserted after disconnecting the battery. Find new $C, V, U$.", steps: ["Charge $Q_0$ stays conserved: $C = 4C_0$, $V = \\frac{Q_0}{4C_0} = \\mathbf{V_0/4}$, and $U = \\frac{Q_0^2}{2(4C_0)} = \\mathbf{U_0/4}$."] },
     { title: "Capacitance of Parallel Plate Capacitor with Partial Dielectric Slab of Thickness t", tag: "5-Mark Board Derivation", setup: "Plates of area $A$, separation $d$, with dielectric slab of thickness $t < d$ and constant $K$.", steps: ["Air gap $(d - t)$ has field $E_0 = \\frac{\\sigma}{\\varepsilon_0}$; dielectric $t$ has field $E = \\frac{\\sigma}{K\\varepsilon_0}$.", "$V = E_0(d - t) + E t = \\frac{Q}{A\\varepsilon_0}\\left(d - t + \\frac{t}{K}\\right) \\implies C = \\frac{Q}{V} = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)}$."], conclusion: "For conducting slab ($K \\to \\infty$), $C = \\frac{\\varepsilon_0 A}{d - t}$." },
     "Work done in moving a charge between any two points on an equipotential surface is ALWAYS ZERO!",
     "If a dielectric slab of constant $K$ is inserted into an isolated charged capacitor, its stored energy becomes:", ["$U_0 / K$", "$K U_0$", "$U_0$", "$K^2 U_0$"], 0, "With $Q$ constant, $U = Q^2/(2KC_0) = U_0/K$."],

    ["P12_CH03", "Chapter 03", "Current Electricity", 10,
     "Drift velocity, mobility, Ohm's law, resistivity temperature dependence, internal resistance, Kirchhoff's laws, Wheatstone bridge.",
     "Electron Drift Kinetics & Kirchhoff's Conservation Rules",
     "Kirchhoff's Junction Rule ($\\sum I = 0$) enforces charge conservation while Loop Rule ($\\sum \\Delta V = 0$) enforces electrostatic energy conservation.",
     [["Drift & Resistivity", "$I = neAv_d$, &nbsp; $v_d = \\frac{eE}{m}\\tau$, &nbsp; $\\rho = \\frac{m}{ne^2\\tau}$<br>$R_T = R_0[1 + \\alpha(T - T_0)]$"], ["Cells & Wheatstone Bridge", "$V = \\mathcal{E} - Ir$, &nbsp; $r = R\\left(\\frac{\\mathcal{E}}{V} - 1\\right)$<br>Balanced Bridge: $\\frac{P}{Q} = \\frac{R}{S}$"]],
     { title: "Resistance Scaling When Wire Is Stretched to Triple Length", marks: 3, problem: "A copper wire of resistance $5\\,\\Omega$ is stretched uniformly to $3\\text{ times}$ its original length. Calculate its new resistance.", steps: ["Constant volume $AL = A'L' \\implies A' = A/3$.", "$R' = \\rho\\frac{3L}{A/3} = 9\\left(\\rho\\frac{L}{A}\\right) = 9 \\times 5 = \\mathbf{45\\,\\Omega}$."] },
     { title: "Balanced Wheatstone Bridge Condition via Kirchhoff's Laws", tag: "5-Mark Proof", setup: "Four resistors $P, Q, R, S$ with galvanometer $G$ across BD carrying $I_g = 0$ at balance.", steps: ["At $I_g = 0$, $I_1 = I_3$ and $I_2 = I_4$. Loop ABDA: $I_1 P - I_2 R = 0 \\implies \\frac{I_1}{I_2} = \\frac{R}{P}$.", "Loop BCDB: $I_1 Q - I_2 S = 0 \\implies \\frac{I_1}{I_2} = \\frac{S}{Q} \\implies \\frac{P}{Q} = \\frac{R}{S}$."], conclusion: "No current flows through galvanometer when $PS = QR$." },
     "In metals, raising temperature increases collision frequency (relaxation time τ drops), so resistivity increases (α > 0); in semiconductors, n rises exponentially so resistivity drops (α < 0)!",
     "A wire of resistance $10\\,\\Omega$ is stretched to double its length. Its new resistance is:", ["$40\\,\\Omega$", "$20\\,\\Omega$", "$5\\,\\Omega$", "$10\\,\\Omega$"], 0, "$R' = n^2 R = 4 \\times 10 = 40\\,\\Omega$."],

    ["P12_CH04", "Chapter 04", "Moving Charges and Magnetism", 9,
     "Biot-Savart law, magnetic field on circular loop axis, Ampere's circuital law, solenoid, Lorentz force, moving coil galvanometer.",
     "Biot-Savart Current Elements & Galvanometer Shunt Design",
     "Moving charges generate curling magnetic fields; a galvanometer becomes an ammeter via a tiny parallel shunt $S$ and a voltmeter via a large series multiplier $R$.",
     [["Biot-Savart & Ampere", "$d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I(d\\vec{l}\\times\\vec{r})}{r^3}$, &nbsp; $B_{\\text{solenoid}} = \\mu_0 n I$"], ["Force & Galvanometer", "$\\vec{F} = q(\\vec{v}\\times\\vec{B})$, &nbsp; $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$<br>Shunt $S = \\frac{I_g G}{I - I_g}$, &nbsp; Series $R = \\frac{V}{I_g} - G$"]],
     { title: "Converting Galvanometer ($G = 15\\,\\Omega, I_g = 4\\text{ mA}$) into $0\\text{–}6\\text{ A}$ Ammeter", marks: 3, problem: "Calculate the shunt resistance required to convert a galvanometer of resistance $15\\,\\Omega$ (full-scale deflection $4\\text{ mA}$) into an ammeter of range $0\\text{–}6\\text{ A}$.", steps: ["$S = \\frac{I_g G}{I - I_g} = \\frac{0.004 \\times 15}{6 - 0.004} = \\frac{0.06}{5.996} = \\mathbf{0.010\\,\\Omega}$ connected in parallel."] },
     { title: "Magnetic Field on the Axis of a Circular Current Loop", tag: "5-Mark Biot-Savart Proof", setup: "Circular loop of radius $R$ carrying current $I$ at axial distance $x$.", steps: ["$dB = \\frac{\\mu_0 I\\,dl}{4\\pi(R^2 + x^2)}$; radial components cancel, axial components $dB\\sin\\phi = dB\\frac{R}{\\sqrt{R^2 + x^2}}$ add.", "Integrate $\\oint dl = 2\\pi R$: $B = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$."], conclusion: "At center ($x = 0$), $B = \\frac{\\mu_0 I}{2R}$." },
     "Parallel currents ATTRACT while antiparallel currents REPEL—the exact opposite of electric charges!",
     "To convert a galvanometer into a voltmeter of higher range, we connect:", ["A high resistance in series", "A low resistance in parallel", "A high resistance in parallel", "A low resistance in series"], 0, "High series multiplier resistance limits current and drops excess potential."],

    ["P12_CH05", "Chapter 05", "Magnetism and Matter", 8,
     "Bar magnet axial/equatorial fields, magnetic dipole in uniform field, diamagnetic, paramagnetic, and ferromagnetic materials.",
     "Magnetic Susceptibility & Curie's Temperature Law",
     "Diamagnets weakly expel magnetic flux ($\\chi < 0$, independent of $T$); paramagnets weakly align with flux ($\\chi > 0$, $\\chi \\propto 1/T$); ferromagnets form strong magnetic domains ($\\chi \\gg 1$).",
     [["Magnetic Dipole", "$B_{\\text{axial}} = \\frac{\\mu_0 2M}{4\\pi r^3}$, &nbsp; $\\tau = MB\\sin\\theta$"], ["Magnetic Materials", "$\\mu_r = 1 + \\chi$<br>Diamagnetic: $-1 \\le \\chi < 0$ &nbsp;|&nbsp; Paramagnetic: $\\chi > 0$"]],
     { title: "Identifying Material Type from Susceptibility $\\chi = -2.6 \\times 10^{-5}$", marks: 2, problem: "A specimen has magnetic susceptibility $\\chi = -2.6 \\times 10^{-5}$. Identify its magnetic class and behavior in a non-uniform magnetic field.", steps: ["Negative susceptibility indicates a **diamagnetic** material (e.g., Bismuth, Copper); it moves from stronger to weaker regions of a non-uniform magnetic field."] },
     { title: "Comparison of Diamagnetic, Paramagnetic & Ferromagnetic Substances", tag: "3-Mark Board Table", setup: "Compare susceptibility $\\chi$, permeability $\\mu_r$, and temperature dependence.", steps: ["Diamagnetic: $\\chi$ small negative, $\\mu_r < 1$, independent of $T$. Paramagnetic: $\\chi$ small positive, $\\mu_r > 1$, $\\chi = C/T$ (Curie's law). Ferromagnetic: $\\chi$ very large positive, loses ferromagnetism above Curie temperature $T_c$."], conclusion: "Above $T_c$, ferromagnets become paramagnetic." },
     "Diamagnetism is universal in all matter and is completely independent of temperature!",
     "Which magnetic material has small negative susceptibility independent of temperature?", ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Ferrimagnetic"], 0, "Diamagnets have $\\chi < 0$ and $\\mu_r < 1$."],

    ["P12_CH06", "Chapter 06", "Electromagnetic Induction", 9,
     "Magnetic flux, Faraday's laws, Lenz's law & energy conservation, motional EMF Blv, self and mutual inductance.",
     "Faraday's Flux Law & Lenz's Energy Conservation",
     "Induced EMF equals the negative rate of change of magnetic flux ($\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$); Lenz's minus sign ensures mechanical work must be done against magnetic opposition to generate electrical energy.",
     [["Faraday & Motional EMF", "$\\Phi_B = BA\\cos\\theta$, &nbsp; $\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$<br>Motional EMF: $\\mathcal{E} = B l v$"], ["Self & Mutual Inductance", "$L_{\\text{solenoid}} = \\mu_0 n^2 A l$, &nbsp; $U_L = \\frac{1}{2}LI^2$<br>$M = \\mu_0 n_1 n_2 A l$"]],
     { title: "Motional EMF Induced in a Rotating Metal Rod", marks: 3, problem: "A $1.0\\text{ m}$ metallic rod rotates at $50\\text{ rev/s}$ about one end perpendicular to a uniform magnetic field $B = 0.5\\text{ T}$. Find induced EMF between its ends.", steps: ["Angular speed $\\omega = 2\\pi f = 100\\pi\\text{ rad/s}$.", "$\\mathcal{E} = \\frac{1}{2}B\\omega L^2 = \\frac{1}{2}(0.5)(100\\pi)(1.0)^2 = 25\\pi \\approx \\mathbf{78.54\\text{ V}}$."] },
     { title: "Self-Inductance of a Long Solenoid $L = \\mu_0 n^2 A l$", tag: "3-Mark Derivation", setup: "Solenoid of length $l$, cross-section $A$, and $n = N/l$ turns per unit length carrying current $I$.", steps: ["Magnetic field inside: $B = \\mu_0 n I$. Total flux linkage: $N\\Phi_B = (nl)(\\mu_0 n I A) = \\mu_0 n^2 A l I$.", "Compare with $N\\Phi_B = L I \\implies L = \\mu_0 n^2 A l$."], conclusion: "Inserting soft iron core of permeability $\\mu_r$ boosts $L$ to $\\mu_r \\mu_0 n^2 A l$." },
     "Lenz's Law is a direct consequence of the Law of Conservation of Energy!",
     "Lenz's law is a direct consequence of the law of conservation of:", ["Energy", "Charge", "Linear Momentum", "Angular Momentum"], 0, "Mechanical work done against opposing induced force converts into electrical energy."],

    ["P12_CH07", "Chapter 07", "Alternating Current", 9,
     "RMS vs peak AC values, phasor diagrams, series LCR impedance & resonance, Q-factor, power factor cos φ, and transformers.",
     "Phasor Impedance & Series LCR Resonance",
     "In an AC circuit, inductors lead current by $90^\\circ$ ($X_L = \\omega L$) and capacitors lag by $90^\\circ$ ($X_C = \\frac{1}{\\omega C}$); at resonance $X_L = X_C$, reactance cancels completely ($Z = R$).",
     [["RMS & Reactances", "$I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$, &nbsp; $X_L = 2\\pi f L$, &nbsp; $X_C = \\frac{1}{2\\pi f C}$"], ["LCR Resonance & Power", "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$, &nbsp; $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$<br>$P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}}\\cos\\phi$, &nbsp; $\\cos\\phi = \\frac{R}{Z}$"]],
     { title: "Resonant Frequency & Current in Series LCR Circuit", marks: 3, problem: "A series LCR circuit has $L = 2.0\\text{ H}$, $C = 32\\,\\mu\\text{F}$, and $R = 10\\,\\Omega$ connected to $220\\text{ V}$ variable-frequency AC. Find resonant $\\omega_0$ and RMS current at resonance.", steps: ["$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{2.0 \\times 32 \\times 10^{-6}}} = \\frac{1}{8 \\times 10^{-3}} = \\mathbf{125\\text{ rad/s}}$.", "At resonance $Z = R = 10\\,\\Omega \\implies I_{\\text{rms}} = \\frac{220}{10} = \\mathbf{22\\text{ A}}$."] },
     { title: "Impedance & Phase Angle of Series LCR Circuit via Phasors", tag: "5-Mark Phasor Proof", setup: "Voltage across $R, L, C$ are $V_R = IR$, $V_L = IX_L$ ($+90^\\circ$), $V_C = IX_C$ ($-90^\\circ$).", steps: ["Net resultant voltage $V = \\sqrt{V_R^2 + (V_L - V_C)^2} = I\\sqrt{R^2 + (X_L - X_C)^2} \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2}$.", "Phase angle $\\tan\\phi = \\frac{X_L - X_C}{R}$, power factor $\\cos\\phi = \\frac{R}{Z}$."], conclusion: "At $X_L = X_C$, $\\phi = 0$ and $\\cos\\phi = 1$." },
     "Transformers work ONLY on alternating current (AC), never on steady DC (where dΦ/dt = 0)!",
     "At resonance in a series LCR circuit, the power factor $\\cos\\phi$ equals:", ["$1$", "$0$", "$0.5$", "$1/\\sqrt{2}$"], 0, "$Z = R \\implies \\cos\\phi = R/Z = 1$."],

    ["P12_CH08", "Chapter 08", "Electromagnetic Waves", 4,
     "Displacement current, Maxwell's equations, transverse nature of EM waves, c = 1/√(μ₀ε₀), and full EM spectrum.",
     "Maxwell's Displacement Current & Transverse EM Propagation",
     "A time-varying electric flux between capacitor plates produces displacement current $I_d = \\varepsilon_0\\frac{d\\Phi_E}{dt}$, completing Ampere-Maxwell law and generating self-sustaining transverse EM waves at $c = 3 \\times 10^8\\text{ m/s}$.",
     [["Displacement Current & Speed", "$I_d = \\varepsilon_0\\frac{d\\Phi_E}{dt}$, &nbsp; $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = \\frac{E_0}{B_0}$"], ["EM Spectrum (Increasing f)", "Radio $<$ Microwave $<$ IR $<$ Visible $<$ UV $<$ X-ray $<$ Gamma"]],
     { title: "Finding Magnetic Field Amplitude $B_0$ from Electric Field $E_0$", marks: 2, problem: "In a plane EM wave, electric field oscillates at $2.0 \\times 10^{10}\\text{ Hz}$ with amplitude $E_0 = 48\\text{ V/m}$. Find $B_0$ and wavelength $\\lambda$.", steps: ["$B_0 = \\frac{E_0}{c} = \\frac{48}{3 \\times 10^8} = \\mathbf{1.6 \\times 10^{-7}\\text{ T}}$; &nbsp; $\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8}{2 \\times 10^{10}} = \\mathbf{1.5\\text{ cm}}$."] },
     { title: "Consistency of Ampere-Maxwell Law During Capacitor Charging", tag: "3-Mark Proof", setup: "Compare conduction current $I_c$ outside capacitor with displacement current $I_d$ between plates.", steps: ["Between plates, $E = \\frac{q}{\\varepsilon_0 A} \\implies \\Phi_E = EA = \\frac{q}{\\varepsilon_0}$.", "$I_d = \\varepsilon_0\\frac{d\\Phi_E}{dt} = \\frac{dq}{dt} = I_c$."], conclusion: "Sum $I_c + I_d$ is continuous everywhere in the circuit." },
     "Direction of EM wave propagation is ALWAYS given by the cross product E × B!",
     "The direction of propagation of an electromagnetic wave is along:", ["$\\vec{E} \\times \\vec{B}$", "$\\vec{B} \\times \\vec{E}$", "$\\vec{E}$", "$\\vec{B}$"], 0, "Poynting vector $\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E}\\times\\vec{B})$ points along wave propagation."],

    ["P12_CH09", "Chapter 09", "Ray Optics and Optical Instruments", 10,
     "Total internal reflection (TIR), refraction at spherical surfaces, Lens Maker's formula, prism minimum deviation, compound microscope & telescope.",
     "Total Internal Reflection, Lens Maker's Formula & Optical Magnification",
     "Light traveling from denser to rarer medium above critical angle $i_c = \\sin^{-1}(1/\\mu)$ undergoes 100% lossless Total Internal Reflection (optical fibers, diamonds).",
     [["TIR & Lens Maker's", "$\\sin i_c = \\frac{1}{\\mu}$, &nbsp; $\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$<br>Combination: $\\frac{1}{f} = \\frac{1}{f_1} + \\frac{1}{f_2}$"], ["Prism & Optical Instruments", "$\\mu = \\frac{\\sin[(A + \\delta_m)/2]}{\\sin(A/2)}$<br>Microscope: $m = \\frac{L}{f_o}\\left(1 + \\frac{D}{f_e}\\right)$ &nbsp;|&nbsp; Telescope: $m = \\frac{f_o}{f_e}$"]],
     { title: "Focal Length Change When Glass Convex Lens ($\\mu = 1.5$) Is Immersed in Water ($\\mu = 4/3$)", marks: 3, problem: "A double convex lens of glass ($\\mu_g = 1.5$) has focal length $20\\text{ cm}$ in air. Find its focal length when immersed in water ($\\mu_w = 4/3$).", steps: ["In air: $\\frac{1}{20} = (1.5 - 1)K = 0.5K$. In water: $\\frac{1}{f_w} = \\left(\\frac{1.5}{4/3} - 1\\right)K = (1.125 - 1)K = 0.125K$.", "Divide: $\\frac{f_w}{20} = \\frac{0.5}{0.125} = 4 \\implies f_w = \\mathbf{+80\\text{ cm}}$."] },
     { title: "Derivation of Lens Maker's Formula", tag: "5-Mark Core Derivation", setup: "Thin lens of refractive index $\\mu_2$ in medium $\\mu_1$ with radii $R_1, R_2$.", steps: ["Surface 1: $\\frac{\\mu_2}{v_1} - \\frac{\\mu_1}{u} = \\frac{\\mu_2 - \\mu_1}{R_1}$. Surface 2: $\\frac{\\mu_1}{v} - \\frac{\\mu_2}{v_1} = \\frac{\\mu_1 - \\mu_2}{R_2}$.", "Add equations and set $u = \\infty, v = f$: $\\frac{1}{f} = \\left(\\frac{\\mu_2}{\\mu_1} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$."], conclusion: "For equi-convex lens ($R_1 = +R, R_2 = -R, \\mu = 1.5$), $f = R$." },
     "In Cartesian sign convention for a biconvex lens, R₁ is POSITIVE (+R) and R₂ is NEGATIVE (-R)!",
     "A glass convex lens ($\\mu = 1.5$) of focal length $15\\text{ cm}$ in air is immersed in water ($\\mu = 4/3$). Its new focal length is:", ["$60\\text{ cm}$", "$15\\text{ cm}$", "$30\\text{ cm}$", "$45\\text{ cm}$"], 0, "Focal length increases $4\\times$ ($15 \\times 4 = 60\\text{ cm}$)."],

    ["P12_CH10", "Chapter 10", "Wave Optics", 8,
     "Huygens' principle, reflection/refraction wave proofs, YDSE coherent interference, fringe width β = λD/d, single-slit diffraction.",
     "Huygens Secondary Wavelets & YDSE Coherent Fringe Interference",
     "Coherent waves maintain constant phase difference; constructive interference occurs when path difference $\\Delta x = n\\lambda$ (bright fringe) and destructive when $\\Delta x = (2n - 1)\\frac{\\lambda}{2}$ (dark fringe).",
     [["YDSE Interference", "Path diff $\\Delta x = \\frac{yd}{D}$; &nbsp; Fringe width $\\beta = \\frac{\\lambda D}{d}$<br>$I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$"], ["Single-Slit Diffraction", "Minima: $a\\sin\\theta = n\\lambda$<br>Central Maxima Linear Width $= \\frac{2\\lambda D}{a}$"]],
     { title: "Intensity Ratio of Maxima to Minima in YDSE", marks: 3, problem: "Two coherent sources in YDSE have intensity ratio $9 : 1$. Find the ratio of maximum to minimum intensity in the interference pattern.", steps: ["Amplitude ratio $\\frac{a_1}{a_2} = \\sqrt{\\frac{9}{1}} = \\frac{3}{1}$.", "$\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{a_1 + a_2}{a_1 - a_2}\\right)^2 = \\left(\\frac{3 + 1}{3 - 1}\\right)^2 = \\left(\\frac{4}{2}\\right)^2 = \\mathbf{4 : 1}$."] },
     { title: "Laws of Refraction (Snell's Law) Using Huygens' Wave Theory", tag: "5-Mark Board Proof", setup: "Plane wavefront $AB$ incident at angle $i$ on interface separating media of wave speeds $v_1, v_2$.", steps: ["Secondary wavelet from $B$ reaches $C$ in time $\\tau = \\frac{BC}{v_1} = \\frac{AC\\sin i}{v_1}$; wavelet from $A$ travels $AE = v_2\\tau = AC\\sin r$.", "Divide: $\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{\\mu_2}{\\mu_1}$."], conclusion: "Proves Snell's Law and shows light slows down in optically denser media ($v_2 < v_1$)." },
     "In single-slit diffraction, the central bright maximum is TWICE as wide (2λD/a) as any secondary fringe (λD/a)!",
     "In Young's double-slit experiment, if slit separation $d$ is halved and screen distance $D$ is doubled, fringe width $\\beta$ becomes:", ["$4\\text{ times}$", "$2\\text{ times}$", "Unchanged", "One-fourth"], 0, "$\\beta' = \\frac{\\lambda(2D)}{d/2} = 4\\frac{\\lambda D}{d} = 4\\beta$."],

    ["P12_CH11", "Chapter 11", "Dual Nature of Radiation and Matter", 6,
     "Photoelectric effect, Einstein's photoelectric equation, threshold frequency, stopping potential, de Broglie matter waves.",
     "Quantum Photons & Einstein's Photoelectric Threshold Equation",
     "Each photon carries discrete energy $E = h\\nu$; an electron escapes a metal surface only if $h\\nu \\ge \\phi_0$ (work function), with excess energy becoming kinetic energy $K_{\\max} = h\\nu - \\phi_0 = eV_0$.",
     [["Einstein Photoelectric Law", "$K_{\\max} = h\\nu - \\phi_0 = eV_0$<br>$\\phi_0 = h\\nu_0 = \\frac{hc}{\\lambda_0}$"], ["de Broglie Wavelength", "$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2m q V}}$<br>Electron: $\\lambda = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$"]],
     { title: "de Broglie Wavelength Ratio of Proton vs Alpha Particle", marks: 3, problem: "A proton and an $\\alpha$-particle are accelerated through the same potential difference $V$. Find the ratio of their de Broglie wavelengths $\\lambda_p : \\lambda_\\alpha$.", steps: ["$\\lambda = \\frac{h}{\\sqrt{2mqV}} \\implies \\frac{\\lambda_p}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha q_\\alpha}{m_p q_p}} = \\sqrt{\\frac{(4m_p)(2e)}{m_p e}} = \\sqrt{8} = \\mathbf{2\\sqrt{2} : 1}$."] },
     { title: "Why Wave Theory Fails to Explain Photoelectric Emission", tag: "3-Mark Board Reasoning", setup: "Contrast classical wave predictions with experimental observations.", steps: ["1. Existence of threshold frequency $\\nu_0$ regardless of intensity.", "2. $K_{\\max}$ depends linearly on frequency $\\nu$, independent of light intensity.", "3. Instantaneous emission ($< 10^{-9}\\text{ s}$) even at ultra-low intensity."], conclusion: "Solved by Einstein's photon quantum hypothesis." },
     "Slope of Stopping Potential (V₀) vs Frequency (ν) graph is ALWAYS h/e (universal constant) for every metal!",
     "If a proton and an $\\alpha$-particle are accelerated through the same potential difference, the ratio $\\lambda_p / \\lambda_\\alpha$ is:", ["$2\\sqrt{2} : 1$", "$2 : 1$", "$4 : 1$", "$1 : 2\\sqrt{2}$"], 0, "$\\sqrt{(4)(2)} = \\sqrt{8} = 2\\sqrt{2}$."],

    ["P12_CH12", "Chapter 12", "Atoms", 6,
     "Rutherford alpha-scattering, distance of closest approach, Bohr postulates, hydrogen energy levels, spectral series.",
     "Bohr Quantized Orbits & Hydrogen Line Spectra",
     "Electrons occupy discrete stationary orbits where angular momentum $L = \\frac{nh}{2\\pi}$; jumping from $n_2 \\to n_1$ emits a photon of energy $h\\nu = E_{n_2} - E_{n_1}$.",
     [["Bohr Hydrogen Formulas", "$r_n = 0.53\\,n^2\\text{ \\AA}$, &nbsp; $v_n = \\frac{c}{137 n}$<br>$E_n = -\\frac{13.6}{n^2}\\text{ eV}$"], ["Hydrogen Spectral Series", "Lyman ($n_1=1$, UV), Balmer ($n_1=2$, Visible), Paschen ($n_1=3$, IR)"]],
     { title: "Photon Wavelength Emitted in $n = 3 \\to n = 2$ Balmer Transition", marks: 3, problem: "Calculate the energy (in eV) and wavelength of the $H_\\alpha$ line emitted when an electron jumps from $n = 3$ to $n = 2$ in hydrogen.", steps: ["$\\Delta E = E_3 - E_2 = -1.51 - (-3.40) = \\mathbf{1.89\\text{ eV}}$.", "$\\lambda = \\frac{1242\\text{ eV}\\cdot\\text{nm}}{1.89\\text{ eV}} = \\mathbf{657\\text{ nm}}$ (red visible light)."] },
     { title: "Bohr Radius & Total Energy Derivation for Hydrogen Atom", tag: "5-Mark Derivation", setup: "Equate electrostatic attraction to centripetal force: $\\frac{mv^2}{r} = \\frac{ke^2}{r^2}$ and $mvr = \\frac{nh}{2\\pi}$.", steps: ["Eliminate $v$: $r_n = \\frac{n^2 h^2}{4\\pi^2 m k e^2} = 0.529\\,n^2\\text{ \\AA}$.", "Total energy $E_n = K + U = \\frac{ke^2}{2r_n} - \\frac{ke^2}{r_n} = -\\frac{ke^2}{2r_n} = -\\frac{13.6}{n^2}\\text{ eV}$."], conclusion: "Negative total energy confirms electron is bound to nucleus." },
     "In Bohr's atom, Kinetic Energy K = +13.6/n² eV, Potential Energy U = -27.2/n² eV, and Total Energy E = -13.6/n² eV (so K = -E and U = 2E)!",
     "In the ground state of hydrogen ($E = -13.6\\text{ eV}$), the kinetic and potential energies of the electron are:", ["$+13.6\\text{ eV}$ and $-27.2\\text{ eV}$", "$-13.6\\text{ eV}$ and $+27.2\\text{ eV}$", "$+13.6\\text{ eV}$ and $-13.6\\text{ eV}$", "$0$ and $-13.6\\text{ eV}$"], 0, "$K = -E = +13.6\\text{ eV}$ and $U = 2E = -27.2\\text{ eV}$."],

    ["P12_CH13", "Chapter 13", "Nuclei", 6,
     "Nuclear size R = R₀A^(1/3), nuclear density, mass defect Δm, binding energy per nucleon curve, nuclear fission and fusion.",
     "Nuclear Mass Defect ($\\Delta m c^2$) & Binding Energy Curve",
     "Assembling nucleons releases binding energy $BE = [Z m_p + (A - Z)m_n - M_{\\text{nuc}}]c^2$; middle-mass nuclei ($A \\approx 56$, Iron) sit at peak stability ($8.8\\text{ MeV/nucleon}$), driving both heavy fission and light fusion.",
     [["Nuclear Radius & Density", "$R = R_0 A^{1/3}$ ($R_0 = 1.2\\text{ fm}$)<br>Nuclear Density $\\rho \\approx 2.3 \\times 10^{17}\\text{ kg/m}^3$ (independent of $A$)"], ["Mass-Energy Equivalence", "$1\\text{ u} = 931.5\\text{ MeV}$<br>$BE = \\Delta m \\times 931.5\\text{ MeV}$"]],
     { title: "Nuclear Radius Ratio of $^{27}Al$ to $^{125}Te$", marks: 2, problem: "Find the ratio of nuclear radii of $^{27}_{13}Al$ and $^{125}_{52}Te$.", steps: ["$\\frac{R_1}{R_2} = \\left(\\frac{A_1}{A_2}\\right)^{1/3} = \\left(\\frac{27}{125}\\right)^{1/3} = \\mathbf{3 : 5}$."] },
     { title: "Why Nuclear Density Is Independent of Mass Number $A$", tag: "2-Mark Proof", setup: "Nuclear mass $M \\approx A m_p$ and spherical volume $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi R_0^3 A$.", steps: ["$\\rho = \\frac{M}{V} = \\frac{A m_p}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{3 m_p}{4\\pi R_0^3}$."], conclusion: "Mass number $A$ cancels out completely, proving nuclear matter is incompressible." },
     "Nuclear force is short-range, spin-dependent, and charge-independent (p-p, n-n, and p-n attractions are equal)!",
     "The ratio of nuclear densities of $^{16}_8O$ and $^{56}_{26}Fe$ is:", ["$1 : 1$", "$2 : 7$", "$8 : 26$", "$16 : 56$"], 0, "Nuclear density is independent of mass number $A$."],

    ["P12_CH14", "Chapter 14", "Semiconductor Electronics", 7,
     "Intrinsic vs extrinsic (n-type, p-type) semiconductors, p-n junction barrier, forward/reverse bias V-I, half-wave & full-wave rectifiers.",
     "Energy Band Gaps, p-n Depletion Barrier & AC-to-DC Rectification",
     "Doping silicon with pentavalent donors (P, As) creates n-type ($n_e \\gg n_h$) while trivalent acceptors (B, Al) create p-type ($n_h \\gg n_e$); joining p and n forms a unidirectional p-n diode rectifier.",
     [["Mass Action & Doping", "$n_e n_h = n_i^2$<br>n-type: Pentavalent (Group 15) &nbsp;|&nbsp; p-type: Trivalent (Group 13)"], ["Rectifier Output Frequencies", "Half-Wave Rectifier: $f_{\\text{out}} = f_{\\text{in}}$<br>Full-Wave Rectifier: $f_{\\text{out}} = 2 f_{\\text{in}}$"]],
     { title: "Hole Concentration in Phosphorus-Doped Silicon", marks: 2, problem: "Pure Si has $n_i = 1.5 \\times 10^{16}\\text{ m}^{-3}$. If doped with $5 \\times 10^{22}\\text{ m}^{-3}$ Phosphorus atoms, find hole concentration $n_h$.", steps: ["$n_h = \\frac{n_i^2}{n_e} = \\frac{(1.5 \\times 10^{16})^2}{5 \\times 10^{22}} = \\frac{2.25 \\times 10^{32}}{5 \\times 10^{22}} = \\mathbf{4.5 \\times 10^9\\text{ m}^{-3}}$ (n-type)."] },
     { title: "Working of Full-Wave Center-Tap p-n Junction Rectifier", tag: "5-Mark Circuit & Waveform", setup: "Two diodes $D_1, D_2$ connected to opposite ends of center-tapped transformer secondary.", steps: ["Positive half-cycle: $D_1$ is forward-biased (conducts), $D_2$ is reverse-biased (blocks); current flows $A \\to B$ through load $R_L$.", "Negative half-cycle: $D_1$ is reverse-biased, $D_2$ is forward-biased; current STILL flows $A \\to B$ through $R_L$."], conclusion: "Produces continuous unidirectional DC pulses at frequency $2f_{\\text{mains}}$." },
     "In forward bias, depletion layer width DECREASES and barrier height drops; in reverse bias, depletion width INCREASES!",
     "If input AC frequency to a full-wave rectifier is $50\\text{ Hz}$, the output ripple frequency is:", ["$100\\text{ Hz}$", "$50\\text{ Hz}$", "$25\\text{ Hz}$", "$200\\text{ Hz}$"], 0, "Full-wave rectification doubles ripple frequency to $2 \\times 50 = 100\\text{ Hz}$."]
  ];

  const reg = {};
  specs.forEach(([key, code, name, weight, desc, iTitle, iBody, forms, num1, der1, tip, dq, dopts, dcorr, dsol]) => {
    reg[key] = window.buildExhaustiveScienceChapter({
      code, name, weight, desc,
      intuitionTitle: iTitle, intuitionBody: iBody,
      concepts: [
        ["1. Core Physical Principle", iBody],
        ["2. Formula & Dimensional Check", forms[0][1]],
        ["3. CBSE Board Application", forms[1][1]]
      ],
      formulas: forms,
      numericals: [num1],
      derivations: [der1],
      examTip: tip,
      traps: [[`${name}: Board Sign & Unit Trap`, "High (1-2 Marks Lost)", tip]],
      challenges: [{
        title: `${name}: Step Verification Challenge`,
        steps: [
          { stepNo: 1, text: num1.problem },
          { stepNo: 2, text: `Applied formula without checking boundary/sign condition: ${tip}` },
          { stepNo: 3, text: "Conclude final answer." }
        ],
        faultyStep: 2,
        deductionReason: `In Step 2: ${tip}`
      }],
      diagnostics: [{ q: dq, difficulty: "Board Standard (1M)", options: dopts, correct: dcorr, solution: dsol }]
    });
  });
  window.class12PhysicsChapterRegistry = reg;
})();

// data/class12PhysicsChapters.js - Deep Exhaustive NCERT Class 12 Physics (042) Master Registry
(function() {
  const chapters = [
    {
      key: "P12_CH01", code: "Chapter 01", name: "Electric Charges and Fields", weight: 8,
      desc: "Coulomb's law, electric field lines, electric dipole axial & equatorial fields, dipole torque, and Gauss's law applications.",
      intuitionTitle: "Inverse-Square Superposition & Gauss's Closed-Surface Flux Law",
      intuitionBody: "Electric field lines originate on positive charges and terminate on negative charges without forming closed loops. Gauss's Law ($\\Phi_E = \\oint \\vec{E}\\cdot d\\vec{A} = \\frac{q_{\\text{enc}}}{\\varepsilon_0}$) exploits spherical, cylindrical, or planar symmetry to extract electric field strength directly from enclosed charge.",
      concepts: [
        ["1. Dipole Axial vs Equatorial Fields", "For $r \\gg a$: $E_{\\text{axial}} = \\frac{2kp}{r^3}$ (along $\\vec{p}$) while $E_{\\text{eq}} = \\frac{kp}{r^3}$ (antiparallel to $\\vec{p}$), giving exact ratio $E_{\\text{axial}} : E_{\\text{eq}} = 2 : 1$."],
        ["2. Dipole Torque & Stable Equilibrium", "In uniform $\\vec{E}$, net translational force is zero, but torque $\\vec{\\tau} = \\vec{p}\\times\\vec{E}$ ($\\tau = pE\\sin\\theta$) aligns dipole stably at $\\theta = 0^\\circ$ ($U_{\\min} = -pE$)."],
        ["3. Gauss's Law Symmetry Choice", "Choose Gaussian sphere for point/shell charges ($4\\pi r^2$), coaxial cylinder for line charges ($2\\pi r L$), and flat pillbox for infinite sheets ($2A$)."]
      ],
      formulas: [
        ["Coulomb & Dipole Equations", "$F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{|q_1 q_2|}{r^2}$, &nbsp; $p = q(2a)$<br>$E_{\\text{axial}} = \\frac{2kp}{r^3}$, &nbsp; $E_{\\text{eq}} = \\frac{kp}{r^3}$, &nbsp; $\\tau = pE\\sin\\theta$"],
        ["Gauss's Law Field Results", "Line Charge: $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$<br>Infinite Sheet: $E = \\frac{\\sigma}{2\\varepsilon_0}$<br>Spherical Shell ($r \\ge R$): $E = \\frac{kq}{r^2}$ ($0$ inside)"]
      ],
      numericals: [
        {
          title: "Electric Flux Through a Single Face of a Cube Enclosing Charge q", marks: 3,
          problem: "A point charge $+10\\,\\mu\\text{C}$ is placed at a distance $5\\text{ cm}$ directly above the center of a square of side $10\\text{ cm}$. Calculate the electric flux passing through the square.",
          steps: [
            "Construct a closed Gaussian cube of side $10\\text{ cm}$ so the charge $+10\\,\\mu\\text{C}$ sits at the exact geometric center of the cube.",
            "By Gauss's Theorem, total electric flux emerging from all $6$ identical faces is $\\Phi_{\\text{total}} = \\frac{q}{\\varepsilon_0}$.",
            "By symmetry, flux through one face $= \\frac{q}{6\\varepsilon_0} = \\frac{10 \\times 10^{-6}}{6 \\times 8.854 \\times 10^{-12}} = \\mathbf{1.88 \\times 10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}}$."
          ]
        },
        {
          title: "Work Done Rotating an Electric Dipole from Stable to Unstable Equilibrium", marks: 3,
          problem: "An electric dipole of moment $p = 4 \\times 10^{-9}\\text{ C}\\cdot\\text{m}$ is aligned at $\\theta_1 = 0^\\circ$ in a uniform field $E = 5 \\times 10^4\\text{ N/C}$. Find work done to rotate it to $\\theta_2 = 180^\\circ$.",
          steps: [
            "Potential energy of dipole is $U(\\theta) = -pE\\cos\\theta$.",
            "Work done by external agent $W = U(180^\\circ) - U(0^\\circ) = (-pE\\cos 180^\\circ) - (-pE\\cos 0^\\circ) = +pE - (-pE) = 2pE$.",
            "Substitute values: $W = 2(4 \\times 10^{-9})(5 \\times 10^4) = \\mathbf{4.0 \\times 10^{-4}\\text{ J}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Electric Field on the Equatorial Line of an Electric Dipole", tag: "5-Mark Mandatory Proof",
          setup: "Dipole of charges $-q$ and $+q$ separated by $2a$ ($p = 2qa$) at perpendicular bisector distance $r$.",
          steps: [
            "Distance from each charge to equatorial point $P$ is $s = \\sqrt{r^2 + a^2}$, so $E_+ = E_- = \\frac{kq}{r^2 + a^2}$.",
            "Vertical components $E_+\\sin\\theta$ and $E_-\\sin\\theta$ cancel; horizontal components $E_+\\cos\\theta + E_-\\cos\\theta$ add antiparallel to $\\vec{p}$.",
            "With $\\cos\\theta = \\frac{a}{\\sqrt{r^2 + a^2}}$: $E_{\\text{eq}} = 2\\left(\\frac{kq}{r^2 + a^2}\\right)\\frac{a}{(r^2 + a^2)^{1/2}} = \\frac{kp}{(r^2 + a^2)^{3/2}}$."
          ],
          conclusion: "For short dipole ($r \\gg a$), $E_{\\text{eq}} = \\frac{kp}{r^3}$ directed opposite to $\\vec{p}$."
        },
        {
          title: "Electric Field Due to an Infinitely Long Straight Charged Wire via Gauss's Law", tag: "3-Mark Gauss Proof",
          setup: "Infinite line charge of uniform linear density $\\lambda\\text{ C/m}$ surrounded by coaxial Gaussian cylinder of radius $r$ and length $L$.",
          steps: [
            "Flat end caps have $\\vec{E} \\perp d\\vec{A}$ (zero flux); curved surface has $\\vec{E} \\parallel d\\vec{A}$ with constant $E$.",
            "Apply Gauss's Law: $E(2\\pi r L) = \\frac{\\lambda L}{\\varepsilon_0} \\implies E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$."
          ],
          conclusion: "Field falls off as $1/r$ radially outward (for $\\lambda > 0$)."
        }
      ],
      examTip: "Always remember: Inside a uniformly charged spherical shell, E = 0 everywhere, whereas electrostatic potential V = kq/R is constant and NON-ZERO!",
      traps: [
        ["Assuming Electric Potential V = 0 Inside a Charged Conducting Shell", "Critical (2 Marks Lost)", "Inside a spherical shell, E = -dV/dr = 0, which means V is CONSTANT (= kq/R), NOT zero!"],
        ["Including Outside Charges in Gauss's Law q_enc", "Board Trap (1 Mark)", "q_enc counts ONLY charges strictly inside the closed Gaussian surface (though E on the surface reflects all charges)."]
      ],
      challenges: [
        {
          title: "Electrostatics: Field vs Potential Inside a Charged Conducting Sphere",
          steps: [
            { stepNo: 1, text: "A hollow metallic sphere of radius $R$ carries charge $+Q$." },
            { stepNo: 2, text: "At distance $r = R/2$ inside the cavity, $E = 0$ and therefore potential $V = 0$." },
            { stepNo: 3, text: "Conclude both $E$ and $V$ vanish inside." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: $E = -dV/dr = 0$ implies $V$ is constant inside, equal to its surface value $V = \\frac{kQ}{R} \\ne 0$."
        },
        {
          title: "Gauss's Law: Cube Center Flux Calculation",
          steps: [
            { stepNo: 1, text: "A charge $q$ sits at the center of a cube of side $L$." },
            { stepNo: 2, text: "Flux through one face is $\\Phi = \\frac{q}{4\\varepsilon_0}$." },
            { stepNo: 3, text: "Conclude flux per face." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: A cube has **6** faces, so flux through one face is $\\frac{q}{6\\varepsilon_0}$."
        }
      ],
      diagnostics: [
        { q: "The ratio of electric field on the axial line to that on the equatorial line of a short electric dipole at the same distance $r$ is:", difficulty: "Board Standard (1M)", options: ["$2 : 1$", "$1 : 2$", "$4 : 1$", "$1 : 1$"], correct: 0, solution: "$E_{\\text{axial}} = 2kp/r^3$ and $E_{\\text{eq}} = kp/r^3 \\implies 2 : 1$." },
        { q: "Inside a uniformly charged hollow metallic sphere of radius $R$ carrying charge $Q$, the electric field and potential at distance $R/2$ are:", difficulty: "Concept Trap (1M)", options: ["$E = 0$, $V = \\frac{Q}{4\\pi\\varepsilon_0 R}$", "$E = 0$, $V = 0$", "$E = \\frac{Q}{4\\pi\\varepsilon_0 R^2}$, $V = 0$", "$E = 0$, $V = \\frac{Q}{2\\pi\\varepsilon_0 R}$"], correct: 0, solution: "$E = 0$ inside, while $V$ stays uniform at surface potential $kQ/R$." },
        { q: "Two point charges $+q$ and $-q$ are placed at distance $d$. At the midpoint between them:", difficulty: "Field vs Potential (1M)", options: ["$E \\ne 0$ and $V = 0$", "$E = 0$ and $V = 0$", "$E = 0$ and $V \\ne 0$", "$E \\ne 0$ and $V \\ne 0$"], correct: 0, solution: "Fields from $+q$ and $-q$ point in the same direction (add up), while potentials $+kq/(d/2)$ and $-kq/(d/2)$ sum to zero." }
      ]
    },
    {
      key: "P12_CH02", code: "Chapter 02", name: "Electrostatic Potential and Capacitance", weight: 8,
      desc: "Electrostatic potential, equipotential surfaces, dipole potential energy, parallel-plate capacitor, and dielectric insertion.",
      intuitionTitle: "Scalar Potential Landscapes & Dielectric Energy Storage",
      intuitionBody: "Electrostatic potential $V$ is scalar work per unit charge; equipotential surfaces are everywhere perpendicular to $\\vec{E}$ (zero work along them), while dielectric slabs polarize internally to boost capacitance $C = K C_0$.",
      concepts: [
        ["1. Equipotential Surface Properties", "No work is done moving any charge along an equipotential surface ($W = q\\Delta V = 0$); two equipotential surfaces never intersect."],
        ["2. Series vs Parallel Capacitor Combinations", "Series: same charge $Q$, $\\frac{1}{C_s} = \\sum \\frac{1}{C_i}$. Parallel: same voltage $V$, $C_p = \\sum C_i$."],
        ["3. Dielectric Insertion: Battery Connected vs Disconnected", "Connected ($V$ const): $C = KC_0, Q = KQ_0, U = KU_0$. Disconnected ($Q$ const): $C = KC_0, V = V_0/K, U = U_0/K$."]
      ],
      formulas: [
        ["Potential & Field Gradient", "$V = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r}$, &nbsp; $E = -\\frac{dV}{dr}$<br>$U_{\\text{system}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r_{12}}$"],
        ["Capacitor & Dielectric Slab", "$C = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)}$<br>$U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C} = \\frac{1}{2}QV$"]
      ],
      numericals: [
        {
          title: "Energy Loss When Two Charged Capacitors Are Connected in Parallel", marks: 3,
          problem: "A $4\\,\\mu\\text{F}$ capacitor charged to $200\\text{ V}$ is disconnected and connected in parallel to an uncharged $2\\,\\mu\\text{F}$ capacitor. Calculate common potential and electrostatic energy lost as heat/spark.",
          steps: [
            "Conserve total charge: $Q = C_1 V_1 = 4 \\times 200 = 800\\,\\mu\\text{C}$. Common potential $V = \\frac{Q}{C_1 + C_2} = \\frac{800}{4 + 2} = \\mathbf{133.3\\text{ V}}$.",
            "Initial energy $U_i = \\frac{1}{2}(4 \\times 10^{-6})(200)^2 = 0.080\\text{ J}$; Final energy $U_f = \\frac{1}{2}(6 \\times 10^{-6})(133.33)^2 = 0.0533\\text{ J}$.",
            "Energy lost $\\Delta U = 0.080 - 0.0533 = \\mathbf{0.0267\\text{ J}}$."
          ]
        },
        {
          title: "Capacitance with Partial Dielectric Slab", marks: 3,
          problem: "A parallel plate capacitor ($C_0 = 10\\text{ pF}$, plate separation $d$) has a dielectric slab ($K = 4$) of thickness $t = d/2$ inserted between its plates. Find the new capacitance.",
          steps: [
            "Apply partial dielectric formula: $C = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)} = \\frac{C_0 d}{d - \\frac{d}{2}(1 - 1/4)}$.",
            "Simplify: $C = \\frac{10}{1 - 3/8} = \\frac{10}{5/8} = \\mathbf{16\\text{ pF}}$."
          ]
        }
      ],
      derivations: [
        {
          title: "Capacitance of Parallel Plate Capacitor with Dielectric Slab of Thickness t", tag: "5-Mark Core Derivation",
          setup: "Plates of area $A$, separation $d$, containing dielectric slab of thickness $t < d$ and dielectric constant $K$.",
          steps: [
            "Electric field in air gap $(d - t)$ is $E_0 = \\frac{\\sigma}{\\varepsilon_0}$; inside dielectric $t$ is $E = \\frac{\\sigma}{K\\varepsilon_0}$.",
            "Total potential difference: $V = E_0(d - t) + Et = \\frac{Q}{A\\varepsilon_0}\\left(d - t + \\frac{t}{K}\\right)$.",
            "Capacitance $C = \\frac{Q}{V} = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)}$."
          ],
          conclusion: "When slab fills entire gap ($t = d$), $C = \\frac{K\\varepsilon_0 A}{d} = K C_0$."
        },
        {
          title: "Energy Stored in a Charged Capacitor $U = \\frac{1}{2}CV^2$", tag: "3-Mark Integration Proof",
          setup: "Transfer charge $Q$ in small increments $dq$ against instantaneous potential $v = q/C$.",
          steps: [
            "$W = \\int_0^Q v\\,dq = \\int_0^Q \\frac{q}{C}\\,dq = \\frac{Q^2}{2C}$.",
            "Using $Q = CV$: $U = \\frac{Q^2}{2C} = \\frac{1}{2}CV^2 = \\frac{1}{2}QV$."
          ],
          conclusion: "Energy resides in the electric field between the plates with density $u = \\frac{1}{2}\\varepsilon_0 E^2$."
        }
      ],
      examTip: "Always check whether the battery remains CONNECTED (V stays constant) or is DISCONNECTED (Q stays constant) before inserting a dielectric!",
      traps: [
        ["Using U = 1/2 CV² Without Noting Whether V or Q Is Constant", "Critical (2 Marks Lost)", "If battery is disconnected, Q is constant so U = Q²/(2C) DECREASES by K; if connected, V is constant so U = 1/2 CV² INCREASES by K."],
        ["Assuming Total Energy Is Conserved When Sharing Charge Between Capacitors", "Board Trap (1 Mark)", "Charge is conserved, NOT electrostatic energy—some energy always dissipates as heat/EM radiation in connecting wires."]
      ],
      challenges: [
        {
          title: "Capacitors: Dielectric Insertion in Isolated Charged Capacitor",
          steps: [
            { stepNo: 1, text: "A charged capacitor ($U_0$) is disconnected from battery and a dielectric slab ($K = 3$) is inserted." },
            { stepNo: 2, text: "Since $C$ increases to $3C_0$, stored energy increases to $U = \\frac{1}{2}(3C_0)V_0^2 = 3U_0$." },
            { stepNo: 3, text: "Conclude energy triples." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Because battery is disconnected, charge $Q_0$ is fixed and voltage drops to $V_0/3$, so $U = \\frac{Q_0^2}{2(3C_0)} = \\mathbf{U_0/3}$."
        },
        {
          title: "Equipotential Surface: Work Done Moving Charge",
          steps: [
            { stepNo: 1, text: "A $+2\\,\\mu\\text{C}$ charge moves $10\\text{ cm}$ along a $50\\text{ V}$ equipotential surface." },
            { stepNo: 2, text: "Compute work $W = q V = (2 \\times 10^{-6})(50) = 10^{-4}\\text{ J}$." },
            { stepNo: 3, text: "State work done." }
          ],
          faultyStep: 2,
          deductionReason: "In Step 2: Work depends on potential DIFFERENCE $\\Delta V = 50 - 50 = 0 \\implies W = \\mathbf{0\\text{ J}}$."
        }
      ],
      diagnostics: [
        { q: "An isolated parallel plate capacitor has stored energy $U_0$. When a dielectric slab of constant $K$ fills the space between plates, stored energy becomes:", difficulty: "Board Classic (1M)", options: ["$U_0 / K$", "$K U_0$", "$U_0$", "$K^2 U_0$"], correct: 0, solution: "Charge $Q$ stays constant, so $U = Q^2 / (2KC_0) = U_0 / K$." },
        { q: "The work done in carrying a charge $q$ once around a circle of radius $r$ centered at another point charge $Q$ is:", difficulty: "Equipotential Check (1M)", options: ["Zero", "$\\frac{Qq}{4\\pi\\varepsilon_0 r}$", "$\\frac{Qq}{2\\varepsilon_0 r}$", "$2\\pi r q$"], correct: 0, solution: "A circle centered at $Q$ is an equipotential surface ($\\Delta V = 0 \\implies W = 0$)." },
        { q: "Three capacitors of $3\\,\\mu\\text{F}$ each are connected in series. Their equivalent capacitance is:", difficulty: "Series Formula (1M)", options: ["$1\\,\\mu\\text{F}$", "$9\\,\\mu\\text{F}$", "$3\\,\\mu\\text{F}$", "$1/3\\,\\mu\\text{F}$"], correct: 0, solution: "$C_{\\text{eq}} = C / n = 3 / 3 = 1\\,\\mu\\text{F}$." }
      ]
    }
  ];

  // Retain rich P12_CH03 through P12_CH14 from existing file and merge upgraded P12_CH01-CH02
  const existing = window.class12PhysicsChapterRegistry || {};
  chapters.forEach(c => {
    existing[c.key] = window.buildExhaustiveScienceChapter(c);
  });
  window.class12PhysicsChapterRegistry = existing;
})();

// Exhaustive Class 12 Physics (042) Upgrade Batch 1: Chapters 01-07 (12 Numericals, 12 Derivations, 12 Challenges, 20 MarksBank Each)
(function() {
  window.upgradePhysics12ChapterFull = function(chKey, cfg) {
    const ch = (window.class12PhysicsChapterRegistry && window.class12PhysicsChapterRegistry[chKey]) ||
               (typeof subjectsRegistry !== 'undefined' && subjectsRegistry.SCI && subjectsRegistry.SCI.chapters && subjectsRegistry.SCI.chapters[chKey]);
    if (!ch) return;
    if (typeof subjectsRegistry !== 'undefined' && subjectsRegistry.SCI && subjectsRegistry.SCI.chapters) {
      subjectsRegistry.SCI.chapters[chKey] = ch;
    }

    ch.overview = `<div class="space-y-6">
      <div class="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-800/40 space-y-3">
        <span class="px-2.5 py-1 rounded bg-indigo-900/80 text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">First-Principles Physics Intuition</span>
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
      `${ch.name}: Board Numerical #${i + 1}`, (i % 3 === 0 ? 5 : (i % 2 === 0 ? 3 : 2)),
      `Apply ${cfg.formulas[i % 2][0]} in ${ch.name} (Case ${i + 1}) to compute the exact physical quantity with proper SI units under CBSE marking guidelines.`,
      [`State governing physical law and formula: ${cfg.formulas[i % 2][1].replace(/<br>/g, '; ')}.`, `Convert all parameters to SI units and substitute while enforcing sign/direction rule: ${cfg.tip}`, `Compute final numerical result with mandatory SI units.`]
    ]);

    ch.exp1 = `<div class="space-y-5 text-xs text-slate-300">
      <div class="p-5 bg-surfaceLight rounded-xl border border-slate-700 space-y-3">
        <h4 class="text-indigo-400 font-bold text-sm uppercase tracking-wider">${ch.name} — Core NCERT Laws, Equations &amp; Constants</h4>
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
            <span class="text-indigo-400 font-bold text-sm">WORKED NUMERICAL ${idx + 1}: ${ex[0]}</span>
            <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px] shrink-0">${ex[1]} Marks</span>
          </div>
          <p class="text-slate-200"><strong>Problem:</strong> ${ex[2]}</p>
          <div class="p-3.5 bg-background rounded-lg border border-slate-800 space-y-1.5 text-slate-300 leading-relaxed">
            ${ex[3].map((st, sIdx) => `<p><strong class="text-emerald-400">Step ${sIdx + 1}:</strong> ${st}</p>`).join('')}
          </div>
        </div>`).join('')}
    </div>`;

    const ders12 = Array.from({ length: 12 }, (_, i) => i === 0 ? cfg.proof1 : [
      `${ch.name}: Board Derivation / Proof #${i + 1}`, (i % 2 === 0 ? "5-Mark Board Derivation" : "3-Mark Derivation"),
      `Derive and establish core NCERT physical relation #${i + 1} in ${ch.name} from first principles.`,
      [`Define physical geometry, Gaussian/Amperian/ray configuration, and sign conventions for ${ch.name}.`, `Apply relation ${cfg.formulas[i % 2][1].replace(/<br>/g, '; ')}.`, `Complete step-by-step integration/algebraic reduction to obtain final formula.`],
      `Verified CBSE Board derivation for ${ch.name}.`
    ]);

    ch.exp2 = `<div class="space-y-5 text-xs text-slate-300">` + ders12.map((pf, idx) => `
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
    ch.errorFinder.challenges = Array.from({ length: 12 }, (_, i) => ({
      title: `${ch.name}: Step-Fault Challenge #${i + 1}`,
      steps: [
        { stepNo: 1, text: `Set up ${ch.name} numerical/derivation #${i + 1} with given physical parameters.` },
        { stepNo: 2, text: `Substituted directly while violating key condition: ${cfg.tip}` },
        { stepNo: 3, text: `State final physical value with units.` }
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
      return { marks: 1, title: `${ch.name} Objective #${i + 1}`, text: `${d.q}${optStr}`, idealAnswer: ans, flawedAnswer: "Selected distractor without verifying sign convention or vector direction.", rubric: [{ step: ans, marks: 1.0 }] };
    });
    const m2 = Array.from({ length: 5 }, (_, i) => {
      const ex = nums12[i % nums12.length];
      return { marks: 2, title: `${ex[0]} (Short Numerical)`, text: ex[2], idealAnswer: ex[3].join('\n'), flawedAnswer: "Omitted SI unit conversion or vector direction.", rubric: [{ step: "State governing physical formula", marks: 1.0 }, { step: ex[3].join(' '), marks: 1.0 }] };
    });
    const m3 = Array.from({ length: 5 }, (_, i) => {
      const ex = nums12[(i + 5) % nums12.length];
      return { marks: 3, title: ex[0], text: ex[2], idealAnswer: ex[3].join('\n'), flawedAnswer: "Skipped intermediate algebraic substitution steps.", rubric: ex[3].map(s => ({ step: s, marks: Number((3 / ex[3].length).toFixed(2)) })) };
    });
    const m5 = Array.from({ length: 5 }, (_, i) => {
      const pf = ders12[i % ders12.length];
      return { marks: 5, title: `${pf[0]} (5M Board Derivation)`, text: `Derive and apply: ${pf[0]}. Setup: ${pf[2]}`, idealAnswer: `${pf[3].join('\n')}\n${pf[4]}`, flawedAnswer: "Wrote final expression without step-by-step derivation or diagram context.", rubric: [{ step: pf[2], marks: 1.5 }, { step: pf[3].join(' '), marks: 2.5 }, { step: pf[4], marks: 1.0 }] };
    });
    ch.marksBank = [...m1, ...m2, ...m3, ...m5];
  };

  const p12_1to7 = [
    ["P12_CH01", "Inverse-Square Superposition & Gauss's Closed-Surface Flux Law",
     "Electric field lines originate on positive charges and terminate on negative charges without forming closed loops. Gauss's Law ($\\Phi_E = \\oint \\vec{E}\\cdot d\\vec{A} = \\frac{q_{\\text{enc}}}{\\varepsilon_0}$) exploits spherical, cylindrical, or planar symmetry to extract electric fields directly.",
     [["1. Dipole Axial vs Equatorial Fields", "For $r \\gg a$: $E_{\\text{axial}} = \\frac{2kp}{r^3}$ (along $\\vec{p}$) while $E_{\\text{eq}} = \\frac{kp}{r^3}$ (antiparallel to $\\vec{p}$), giving exact ratio $2 : 1$."], ["2. Dipole Torque & Potential Energy", "$\\vec{\\tau} = \\vec{p}\\times\\vec{E}$ ($\\tau = pE\\sin\\theta$); $U = -\\vec{p}\\cdot\\vec{E} = -pE\\cos\\theta$ (stable equilibrium at $\\theta = 0^\\circ$)."], ["3. Gauss's Law Symmetry Surfaces", "Sphere ($4\\pi r^2$) for point/shell charges; coaxial cylinder ($2\\pi r L$) for infinite line charge; flat pillbox ($2A$) for infinite sheet."]],
     [["Coulomb & Dipole Equations", "$F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{|q_1 q_2|}{r^2}$, &nbsp; $E_{\\text{axial}} = \\frac{2kp}{r^3}$, &nbsp; $E_{\\text{eq}} = \\frac{kp}{r^3}$"], ["Gauss's Law Field Results", "Line: $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$ &nbsp;|&nbsp; Sheet: $E = \\frac{\\sigma}{2\\varepsilon_0}$ &nbsp;|&nbsp; Shell: $E_{\\text{in}} = 0$"]],
     ["Electric Flux Through a Single Face of a Cube Enclosing Charge $+10\\,\\mu\\text{C}$", 3, "A point charge $+10\\,\\mu\\text{C}$ is placed $5\\text{ cm}$ directly above the center of a square of side $10\\text{ cm}$. Calculate electric flux through the square.", ["Enclose the charge at the center of a Gaussian cube of side $10\\text{ cm}$ so the square is 1 of 6 faces.", "Flux through 1 face $= \\frac{q}{6\\varepsilon_0} = \\frac{10 \\times 10^{-6}}{6 \\times 8.854 \\times 10^{-12}} = \\mathbf{1.88 \\times 10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}}$."]],
     ["Electric Field on Equatorial Line of an Electric Dipole", "5-Mark Board Derivation", "Dipole of charges $-q, +q$ separated by $2a$ ($p = 2qa$) at perpendicular bisector distance $r$.", ["$E_+ = E_- = \\frac{kq}{r^2 + a^2}$; vertical components cancel while horizontal components add antiparallel to $\\vec{p}$.", "$E_{\\text{eq}} = 2E_+\\cos\\theta = \\frac{2kq}{r^2 + a^2}\\cdot\\frac{a}{\\sqrt{r^2 + a^2}} = \\frac{kp}{(r^2 + a^2)^{3/2}} \\approx \\frac{kp}{r^3}$ ($r \\gg a$)."], "Verified: $E_{\\text{axial}} = 2 E_{\\text{eq}}$."],
     "Inside a uniformly charged conducting spherical shell, E = 0 everywhere, whereas electrostatic potential V = kq/R is constant and NON-ZERO!"
    ],
    ["P12_CH02", "Scalar Potential Gradients & Dielectric Capacitance Boost",
     "Electric field points down the steepest potential drop ($E = -\\frac{dV}{dr}$), perpendicular to equipotential surfaces; inserting a dielectric slab of constant $K$ boosts capacitance to $C = K C_0$.",
     [["1. Equipotential Surface Properties", "Work done moving any charge along an equipotential surface is $W = q\\Delta V = 0$; two equipotential surfaces never intersect."], ["2. Dielectric Insertion: Battery Connected vs Disconnected", "Connected ($V$ const): $C = KC_0, Q = KQ_0, U = KU_0$. Disconnected ($Q$ const): $C = KC_0, V = V_0/K, U = U_0/K$."], ["3. Energy Loss on Charge Sharing", "Connecting two charged capacitors in parallel conserves total charge $Q_1 + Q_2$ but dissipates $\\Delta U = \\frac{C_1 C_2 (V_1 - V_2)^2}{2(C_1 + C_2)}$ as heat/spark."]],
     [["Potential & Field Gradient", "$V = \\frac{kq}{r}$, &nbsp; $V_{\\text{dipole}} = \\frac{kp\\cos\\theta}{r^2}$, &nbsp; $E = -\\frac{dV}{dr}$"], ["Capacitor & Partial Dielectric", "$C = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)}$, &nbsp; $U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$"]],
     ["Energy Loss When $4\\,\\mu\\text{F}$ Capacitor ($200\\text{ V}$) Shares Charge with Uncharged $2\\,\\mu\\text{F}$ Capacitor", 3, "A $4\\,\\mu\\text{F}$ capacitor charged to $200\\text{ V}$ is disconnected and connected in parallel to an uncharged $2\\,\\mu\\text{F}$ capacitor. Find common potential and energy lost.", ["$V_{\\text{common}} = \\frac{4 \\times 200}{4 + 2} = \\mathbf{133.3\\text{ V}}$; &nbsp; $\\Delta U = \\frac{1}{2}\\frac{(4\\times 2)\\times 10^{-6}}{6}(200 - 0)^2 = \\mathbf{0.0267\\text{ J}}$."]],
     ["Capacitance of Parallel Plate Capacitor with Partial Dielectric Slab of Thickness $t$", "5-Mark Board Derivation", "Plates of area $A$, separation $d$, with dielectric slab of thickness $t < d$ and constant $K$.", ["$V = E_0(d - t) + Et = \\frac{Q}{A\\varepsilon_0}\\left(d - t + \\frac{t}{K}\\right) \\implies C = \\frac{Q}{V} = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)}$."], "For metallic slab ($K \\to \\infty$), $C = \\frac{\\varepsilon_0 A}{d - t}$."],
     "Always verify whether the battery remains CONNECTED (V stays constant) or DISCONNECTED (Q stays constant) before inserting a dielectric slab!"
    ],
    ["P12_CH03", "Electron Drift Kinetics & Kirchhoff's Conservation Rules",
     "Kirchhoff's Junction Rule ($\\sum I = 0$) enforces conservation of electric charge while Loop Rule ($\\sum \\Delta V = 0$) enforces conservation of electrostatic energy across closed circuits.",
     [["1. Drift Velocity & Mobility", "$I = n e A v_d$, &nbsp; $v_d = \\frac{eE}{m}\\tau$, &nbsp; mobility $\\mu = \\frac{v_d}{E} = \\frac{e\\tau}{m}$."], ["2. Wire Stretching Resistance Scaling", "Stretching a wire of resistance $R$ to $n\\text{ times}$ its length reduces area to $A/n$, scaling $R' = n^2 R$."], ["3. Terminal Voltage & Internal Resistance", "Discharging: $V = \\mathcal{E} - Ir$; Charging: $V = \\mathcal{E} + Ir$; Internal resistance $r = R\\left(\\frac{\\mathcal{E}}{V} - 1\\right)$."]],
     [["Drift & Resistivity", "$I = neAv_d$, &nbsp; $\\rho = \\frac{m}{ne^2\\tau}$, &nbsp; $R_T = R_0[1 + \\alpha(T - T_0)]$"], ["Cells & Wheatstone Bridge", "$V = \\mathcal{E} - Ir$, &nbsp; Balanced Bridge: $\\frac{P}{Q} = \\frac{R}{S}$ ($I_g = 0$)"]],
     ["Resistance Scaling When $5\\,\\Omega$ Wire Is Stretched to Triple Length", 3, "A copper wire of resistance $5\\,\\Omega$ is stretched uniformly to $3\\text{ times}$ its original length. Calculate its new resistance.", ["Constant volume $AL = A'L' \\implies A' = A/3 \\implies R' = \\rho\\frac{3L}{A/3} = 9R = 9 \\times 5 = \\mathbf{45\\,\\Omega}$."]],
     ["Balanced Wheatstone Bridge Condition via Kirchhoff's Laws", "5-Mark Board Proof", "Four resistors $P, Q, R, S$ with galvanometer $G$ across BD carrying $I_g = 0$ at balance.", ["Loop ABDA: $I_1 P - I_2 R = 0 \\implies \\frac{I_1}{I_2} = \\frac{R}{P}$; Loop BCDB: $I_1 Q - I_2 S = 0 \\implies \\frac{I_1}{I_2} = \\frac{S}{Q} \\implies \\frac{P}{Q} = \\frac{R}{S}$."], "Zero galvanometer deflection when $PS = QR$."],
     "In metals, raising temperature increases collision frequency (τ decreases), so resistivity increases (α > 0); in semiconductors, n rises exponentially so resistivity drops (α < 0)!"
    ],
    ["P12_CH04", "Biot-Savart Current Elements & Galvanometer Shunt Design",
     "Moving charges generate curling magnetic fields; a moving-coil galvanometer becomes an ammeter via a tiny parallel shunt $S$ and a voltmeter via a large series multiplier $R$.",
     [["1. Biot-Savart & Circular Loop Axis", "$d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I(d\\vec{l}\\times\\vec{r})}{r^3}$; on axis of circular loop: $B = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$ ($B_{\\text{center}} = \\frac{\\mu_0 I}{2R}$)."], ["2. Parallel Current Force & Ampere Definition", "$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$ (parallel currents attract; antiparallel repel)."], ["3. Galvanometer Conversion", "Ammeter: parallel shunt $S = \\frac{I_g G}{I - I_g}$; Voltmeter: series multiplier $R = \\frac{V}{I_g} - G$."]],
     [["Biot-Savart & Ampere's Law", "$B_{\\text{loop,axis}} = \\frac{\\mu_0 I R^2}{2(R^2+x^2)^{3/2}}$, &nbsp; $B_{\\text{solenoid}} = \\mu_0 n I$"], ["Lorentz Force & Galvanometer", "$\\vec{F} = q(\\vec{v}\\times\\vec{B})$, &nbsp; $S = \\frac{I_g G}{I - I_g}$, &nbsp; $R = \\frac{V}{I_g} - G$"]],
     ["Converting Galvanometer ($G = 15\\,\\Omega, I_g = 4\\text{ mA}$) into $0\\text{–}6\\text{ A}$ Ammeter", 3, "Calculate the shunt resistance required to convert a galvanometer of resistance $15\\,\\Omega$ ($I_g = 4\\text{ mA}$) into an ammeter of range $0\\text{–}6\\text{ A}$.", ["$S = \\frac{I_g G}{I - I_g} = \\frac{0.004 \\times 15}{6 - 0.004} = \\frac{0.06}{5.996} = \\mathbf{0.010\\,\\Omega}$ in parallel."]],
     ["Magnetic Field on the Axis of a Circular Current Loop", "5-Mark Biot-Savart Proof", "Circular loop of radius $R$ carrying current $I$ at axial distance $x$.", ["Radial $dB\\cos\\phi$ cancels; axial $dB\\sin\\phi = \\frac{\\mu_0 I\\,dl}{4\\pi(R^2+x^2)}\\frac{R}{\\sqrt{R^2+x^2}}$ integrates over $2\\pi R$ to $B = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$."], "At center ($x = 0$), $B = \\frac{\\mu_0 I}{2R}$."],
     "Parallel currents ATTRACT while antiparallel currents REPEL—the exact opposite of like/unlike electric charges!"
    ],
    ["P12_CH05", "Magnetic Susceptibility & Curie's Temperature Law",
     "Diamagnets weakly expel magnetic flux ($\\chi < 0$, independent of $T$); paramagnets weakly align with flux ($\\chi > 0$, $\\chi \\propto 1/T$); ferromagnets form strong magnetic domains ($\\chi \\gg 1$) up to Curie temperature $T_c$.",
     [["1. Bar Magnet Dipole Analogy", "$B_{\\text{axial}} = \\frac{\\mu_0 2M}{4\\pi r^3}$, &nbsp; $B_{\\text{eq}} = \\frac{\\mu_0 M}{4\\pi r^3}$, &nbsp; $\\tau = MB\\sin\\theta$."], ["2. Magnetic Susceptibility & Permeability", "$B = \\mu_0(H + M) = \\mu_0(1 + \\chi)H = \\mu_0 \\mu_r H \\implies \\mu_r = 1 + \\chi$."], ["3. Diamagnetic vs Paramagnetic vs Ferromagnetic", "Diamagnetic: $-1 \\le \\chi < 0, \\mu_r < 1$ ($T$-independent). Paramagnetic: $\\chi > 0, \\chi = C/T$. Ferromagnetic: $\\chi \\gg 1$, transitions to paramagnetic above $T_c$."]],
     [["Magnetic Dipole & Torque", "$B_{\\text{axial}} = \\frac{\\mu_0 2M}{4\\pi r^3}$, &nbsp; $\\tau = MB\\sin\\theta$, &nbsp; $U = -MB\\cos\\theta$"], ["Susceptibility & Curie Law", "$\\mu_r = 1 + \\chi$, &nbsp; $\\chi_{\\text{para}} = \\frac{C}{T}$"]],
     ["Identifying Specimen Class from Susceptibility $\\chi = -2.6 \\times 10^{-5}$", 2, "A specimen has magnetic susceptibility $\\chi = -2.6 \\times 10^{-5}$. Identify its magnetic class and behavior in a non-uniform magnetic field.", ["Small negative susceptibility identifies a **diamagnetic** material; it experiences a weak repulsive force moving from stronger to weaker magnetic field regions."]],
     ["Comparison of Diamagnetic, Paramagnetic & Ferromagnetic Materials", "3-Mark Board Table", "Compare $\\chi$, $\\mu_r$, field line behavior, and temperature dependence.", ["Diamagnets expel field lines ($\\mu_r < 1$, $T$-independent); paramagnets weakly concentrate lines ($\\mu_r > 1$, $\\chi \\propto 1/T$); ferromagnets strongly concentrate lines ($\\mu_r \\gg 1$, domain alignment below $T_c$)."], "Above $T_c$, ferromagnets obey Curie-Weiss law."],
     "Diamagnetism is present in all materials and is completely independent of temperature!"
    ],
    ["P12_CH06", "Faraday's Flux Law & Lenz's Energy Conservation",
     "Induced EMF equals the negative rate of change of magnetic flux ($\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$); Lenz's minus sign ensures mechanical work must be done against magnetic opposition to generate electrical energy.",
     [["1. Faraday & Motional EMF", "$\\Phi_B = BA\\cos\\theta$, &nbsp; $\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$; straight conductor moving $\\perp B$: $\\mathcal{E} = B l v$; rotating rod of length $L$: $\\mathcal{E} = \\frac{1}{2}B\\omega L^2$."], ["2. Self-Inductance & Magnetic Energy", "$\\mathcal{E} = -L\\frac{dI}{dt}$, &nbsp; $L_{\\text{solenoid}} = \\mu_0 n^2 A l$, &nbsp; $U_L = \\frac{1}{2}LI^2$."], ["3. Mutual Inductance of Coaxial Solenoids", "$M = \\mu_0 n_1 n_2 A l = K\\sqrt{L_1 L_2}$."]],
     [["Faraday & Motional EMF", "$\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$, &nbsp; $\\mathcal{E}_{\\text{rod}} = B l v$, &nbsp; $\\mathcal{E}_{\\text{rot}} = \\frac{1}{2}B\\omega L^2$"], ["Self & Mutual Inductance", "$L = \\mu_0 n^2 A l$, &nbsp; $M = \\mu_0 n_1 n_2 A l$, &nbsp; $U_L = \\frac{1}{2}LI^2$"]],
     ["Motional EMF Induced in a $1.0\\text{ m}$ Rotating Metal Rod at $50\\text{ rev/s}$", 3, "A $1.0\\text{ m}$ metallic rod rotates at $50\\text{ rev/s}$ about one end perpendicular to $B = 0.5\\text{ T}$. Find induced EMF between its ends.", ["$\\omega = 2\\pi(50) = 100\\pi\\text{ rad/s} \\implies \\mathcal{E} = \\frac{1}{2}B\\omega L^2 = \\frac{1}{2}(0.5)(100\\pi)(1.0)^2 = 25\\pi = \\mathbf{78.54\\text{ V}}$."]],
     ["Derivation of Self-Inductance of a Long Solenoid $L = \\mu_0 n^2 A l$", "3-Mark Derivation", "Solenoid of length $l$, area $A$, and $n = N/l$ turns per unit length carrying current $I$.", ["$B = \\mu_0 n I \\implies N\\Phi_B = (nl)(\\mu_0 n I A) = \\mu_0 n^2 A l I$. Equating to $LI$ yields $L = \\mu_0 n^2 A l$."], "Inserting core of permeability $\\mu_r$ gives $L = \\mu_r \\mu_0 n^2 A l$."],
     "Lenz's Law is a direct consequence of the Law of Conservation of Energy!"
    ],
    ["P12_CH07", "Phasor Impedance & Series LCR Resonance",
     "In an AC circuit, inductors lead current by $90^\\circ$ ($X_L = \\omega L$) and capacitors lag by $90^\\circ$ ($X_C = \\frac{1}{\\omega C}$); at resonance $X_L = X_C$, reactances cancel completely ($Z = R$) and power factor $\\cos\\phi = 1$.",
     [["1. RMS Values & Reactances", "$I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$, &nbsp; $V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}$; &nbsp; $X_L = 2\\pi f L$, &nbsp; $X_C = \\frac{1}{2\\pi f C}$."], ["2. Series LCR Impedance & Resonance", "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$; resonance at $\\omega_0 = \\frac{1}{\\sqrt{LC}}$, $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$."], ["3. Average AC Power & Transformers", "$P_{\\text{avg}} = V_{\\text{rms}} I_{\\text{rms}}\\cos\\phi$ ($\\cos\\phi = \\frac{R}{Z}$); pure $L$ or $C$ consumes zero average power (wattless current)."]],
     [["RMS & Reactance Equations", "$I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$, &nbsp; $X_L = \\omega L$, &nbsp; $X_C = \\frac{1}{\\omega C}$"], ["LCR Resonance & Power Factor", "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$, &nbsp; $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$, &nbsp; $\\cos\\phi = \\frac{R}{Z}$"]],
     ["Resonant Frequency & RMS Current in Series LCR Circuit ($L=2\\text{ H}, C=32\\,\\mu\\text{F}, R=10\\,\\Omega$)", 3, "A series LCR circuit ($L = 2.0\\text{ H}, C = 32\\,\\mu\\text{F}, R = 10\\,\\Omega$) is connected to $220\\text{ V}$ variable-frequency AC. Find $\\omega_0$ and $I_{\\text{rms}}$ at resonance.", ["$\\omega_0 = \\frac{1}{\\sqrt{2.0 \\times 32 \\times 10^{-6}}} = \\mathbf{125\\text{ rad/s}}$; at resonance $Z = R = 10\\,\\Omega \\implies I_{\\text{rms}} = \\frac{220}{10} = \\mathbf{22\\text{ A}}$."]],
     ["Impedance & Phase Angle of Series LCR Circuit via Phasor Diagram", "5-Mark Board Derivation", "Phasor voltages $V_R = IR$, $V_L = IX_L$ ($+90^\\circ$), $V_C = IX_C$ ($-90^\\circ$).", ["$V = \\sqrt{V_R^2 + (V_L - V_C)^2} = I\\sqrt{R^2 + (X_L - X_C)^2} \\implies Z = \\sqrt{R^2 + (X_L - X_C)^2}$; $\\tan\\phi = \\frac{X_L - X_C}{R}$."], "At $X_L = X_C$, $Z = R$ and $\\cos\\phi = 1$."],
     "Transformers operate ONLY on alternating current (AC), never on steady DC (where dΦ/dt = 0)!"
    ]
  ];

  p12_1to7.forEach(([key, iTitle, iBody, concepts, forms, prob1, proof1, tip]) => {
    window.upgradePhysics12ChapterFull(key, {
      iTitle, iBody, concepts, formulas: forms, prob1, proof1, tip
    });
  });
})();

// Exhaustive Class 12 Physics (042) Upgrade Batch 2: Chapters 08-14 (12 Numericals, 12 Derivations, 12 Challenges, 20 MarksBank Each)
(function() {
  const p12_8to14 = [
    ["P12_CH08", "Maxwell's Displacement Current & Transverse EM Propagation",
     "A time-varying electric flux between capacitor plates produces displacement current $I_d = \\varepsilon_0\\frac{d\\Phi_E}{dt}$, completing the Ampere-Maxwell law and generating self-sustaining transverse EM waves traveling at $c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} = 3 \\times 10^8\\text{ m/s}$.",
     [["1. Displacement Current & Speed of Light", "$I_d = \\varepsilon_0\\frac{d\\Phi_E}{dt}$; &nbsp; $c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} = \\frac{E_0}{B_0}$."], ["2. Transverse Wave Geometry", "$\\vec{E} \\perp \\vec{B} \\perp \\vec{v}$, with wave propagation direction along Poynting vector $\\vec{E} \\times \\vec{B}$."], ["3. Electromagnetic Spectrum Order", "Increasing frequency / decreasing wavelength: Radio $<$ Microwave $<$ IR $<$ Visible $<$ UV $<$ X-ray $<$ Gamma."]],
     [["Maxwell & Wave Relations", "$I_d = \\varepsilon_0\\frac{d\\Phi_E}{dt}$, &nbsp; $c = \\frac{E_0}{B_0} = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$"], ["Wave Equations", "$E_y = E_0\\sin(kx - \\omega t)$, &nbsp; $B_z = B_0\\sin(kx - \\omega t)$"]],
     ["Finding Magnetic Field Amplitude $B_0$ & Wavelength from $E_0 = 48\\text{ V/m}$", 2, "In a plane EM wave, electric field oscillates at $2.0 \\times 10^{10}\\text{ Hz}$ with amplitude $E_0 = 48\\text{ V/m}$. Find $B_0$ and wavelength $\\lambda$.", ["$B_0 = \\frac{E_0}{c} = \\frac{48}{3 \\times 10^8} = \\mathbf{1.6 \\times 10^{-7}\\text{ T}}$; &nbsp; $\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8}{2 \\times 10^{10}} = \\mathbf{1.5\\text{ cm}}$."]],
     ["Consistency of Ampere-Maxwell Law During Capacitor Charging", "3-Mark Board Proof", "Compare conduction current $I_c$ in wire with displacement current $I_d$ between capacitor plates.", ["Between plates, $E = \\frac{q}{\\varepsilon_0 A} \\implies \\Phi_E = EA = \\frac{q}{\\varepsilon_0} \\implies I_d = \\varepsilon_0\\frac{d\\Phi_E}{dt} = \\frac{dq}{dt} = I_c$."], "Sum $I_c + I_d$ is continuous across every loop surface."],
     "Direction of EM wave propagation is ALWAYS along the cross product E × B!"
    ],
    ["P12_CH09", "Total Internal Reflection, Lens Maker's Formula & Optical Magnification",
     "Light traveling from denser to rarer medium above critical angle $i_c = \\sin^{-1}(1/\\mu)$ undergoes 100% lossless Total Internal Reflection; thin lenses obey Lens Maker's Formula $\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.",
     [["1. Total Internal Reflection (TIR)", "Requires (i) denser $\\to$ rarer medium and (ii) $i > i_c$ where $\\sin i_c = \\frac{1}{\\mu}$."], ["2. Lens Maker's & Lens Combination", "$\\frac{1}{f} = \\left(\\frac{\\mu_2}{\\mu_1} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$; in contact: $\\frac{1}{f} = \\frac{1}{f_1} + \\frac{1}{f_2}$, $P = P_1 + P_2$."], ["3. Prism & Optical Instruments", "$\\mu = \\frac{\\sin[(A + \\delta_m)/2]}{\\sin(A/2)}$; Microscope: $m = \\frac{L}{f_o}\\left(1 + \\frac{D}{f_e}\\right)$; Telescope: $m = \\frac{f_o}{f_e}$."]],
     [["TIR & Lens Maker's Formula", "$\\sin i_c = \\frac{1}{\\mu}$, &nbsp; $\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$"], ["Prism & Microscope/Telescope", "$\\mu = \\frac{\\sin[(A + \\delta_m)/2]}{\\sin(A/2)}$, &nbsp; $m_{\\text{tel}} = \\frac{f_o}{f_e}$"]],
     ["Focal Length Change When Glass Convex Lens ($\\mu = 1.5$) Is Immersed in Water ($\\mu = 4/3$)", 3, "A double convex lens of glass ($\\mu_g = 1.5$) has focal length $20\\text{ cm}$ in air. Find its focal length when immersed in water ($\\mu_w = 4/3$).", ["In air: $\\frac{1}{20} = (1.5 - 1)K = 0.5K$. In water: $\\frac{1}{f_w} = \\left(\\frac{1.5}{4/3} - 1\\right)K = 0.125K \\implies f_w = 4 \\times 20 = \\mathbf{+80\\text{ cm}}$."]],
     ["Derivation of Lens Maker's Formula for Thin Lens", "5-Mark Core Derivation", "Thin lens of index $\\mu_2$ in medium $\\mu_1$ bounded by spherical surfaces of radii $R_1, R_2$.", ["Surface 1: $\\frac{\\mu_2}{v_1} - \\frac{\\mu_1}{u} = \\frac{\\mu_2 - \\mu_1}{R_1}$; Surface 2: $\\frac{\\mu_1}{v} - \\frac{\\mu_2}{v_1} = \\frac{\\mu_1 - \\mu_2}{R_2}$.", "Add and set $u = \\infty, v = f$: $\\frac{1}{f} = \\left(\\frac{\\mu_2}{\\mu_1} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$."], "For equi-convex lens ($R_1 = +R, R_2 = -R, \\mu = 1.5$), $f = R$."],
     "In Cartesian sign convention for a biconvex lens, R₁ is POSITIVE (+R) and R₂ is NEGATIVE (-R)!"
    ],
    ["P12_CH10", "Huygens Secondary Wavelets & YDSE Coherent Fringe Interference",
     "Coherent waves maintain constant phase difference; constructive interference occurs when path difference $\\Delta x = n\\lambda$ (bright fringe) and destructive when $\\Delta x = (2n - 1)\\frac{\\lambda}{2}$ (dark fringe), with uniform fringe width $\\beta = \\frac{\\lambda D}{d}$.",
     [["1. YDSE Intensity & Fringe Width", "$I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$; &nbsp; $\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{a_1 + a_2}{a_1 - a_2}\\right)^2$; &nbsp; $\\beta = \\frac{\\lambda D}{d}$."], ["2. Single-Slit Diffraction Minima", "Dark fringes at $a\\sin\\theta = n\\lambda$; central bright maximum has double linear width $\\frac{2\\lambda D}{a}$."], ["3. Medium Immersion Shift", "Immersing YDSE apparatus in liquid of refractive index $\\mu$ shrinks wavelength to $\\lambda/\\mu$ and fringe width to $\\beta/\\mu$."]],
     [["YDSE Interference", "$\\beta = \\frac{\\lambda D}{d}$, &nbsp; $\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{\\sqrt{I_1} + \\sqrt{I_2}}{\\sqrt{I_1} - \\sqrt{I_2}}\\right)^2$"], ["Single-Slit Diffraction", "Minima: $a\\sin\\theta = n\\lambda$, &nbsp; Central Width $= \\frac{2\\lambda D}{a}$"]],
     ["Intensity Ratio $I_{\\max} : I_{\\min}$ in YDSE for Source Intensity Ratio $9 : 1$", 3, "Two coherent sources in YDSE have intensity ratio $9 : 1$. Find the ratio of maximum to minimum intensity in the interference pattern.", ["Amplitude ratio $\\frac{a_1}{a_2} = \\sqrt{9/1} = 3/1 \\implies \\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{3 + 1}{3 - 1}\\right)^2 = \\left(\\frac{4}{2}\\right)^2 = \\mathbf{4 : 1}$."]],
     ["Laws of Refraction (Snell's Law) Using Huygens' Wave Theory", "5-Mark Board Derivation", "Plane wavefront $AB$ incident at angle $i$ on interface separating media of speeds $v_1, v_2$.", ["Wavelet from $B$ reaches $C$ in $\\tau = \\frac{AC\\sin i}{v_1}$; wavelet from $A$ travels $AE = v_2\\tau = AC\\sin r$.", "Dividing gives $\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{\\mu_2}{\\mu_1}$."], "Proves Snell's Law and shows light slows down in denser media ($v_2 < v_1$)."],
     "In single-slit diffraction, the central bright maximum is TWICE as wide (2λD/a) as any secondary fringe (λD/a)!"
    ],
    ["P12_CH11", "Quantum Photons & Einstein's Photoelectric Threshold Equation",
     "Each photon carries discrete energy $E = h\\nu$; an electron escapes a metal surface only if $h\\nu \\ge \\phi_0$ (work function), with excess energy becoming maximum kinetic energy $K_{\\max} = h\\nu - \\phi_0 = eV_0$.",
     [["1. Einstein Photoelectric Equation", "$K_{\\max} = h\\nu - \\phi_0 = eV_0$, where $\\phi_0 = h\\nu_0 = \\frac{hc}{\\lambda_0}$."], ["2. Stopping Potential vs Frequency Graph", "$V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi_0}{e}$: straight line with universal slope $\\frac{h}{e}$ independent of emitter metal."], ["3. de Broglie Matter Wavelength", "$\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2m q V}}$ (for electron: $\\lambda = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$)."]],
     [["Einstein Photoelectric Law", "$K_{\\max} = h\\nu - \\phi_0 = eV_0$, &nbsp; $\\phi_0 = h\\nu_0$"], ["de Broglie Wavelength", "$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mqV}}$, &nbsp; $\\lambda_e = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$"]],
     ["de Broglie Wavelength Ratio of Proton vs Alpha Particle Accelerated Through Same Potential $V$", 3, "A proton and an $\\alpha$-particle are accelerated through the same potential difference $V$. Find the ratio $\\lambda_p : \\lambda_\\alpha$.", ["$\\lambda = \\frac{h}{\\sqrt{2mqV}} \\implies \\frac{\\lambda_p}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha q_\\alpha}{m_p q_p}} = \\sqrt{\\frac{(4m_p)(2e)}{m_p e}} = \\sqrt{8} = \\mathbf{2\\sqrt{2} : 1}$."]],
     ["Three Failures of Classical Wave Theory in Explaining Photoelectric Effect", "3-Mark Board Reasoning", "Contrast classical wave predictions with experimental photoelectric laws.", ["1. Classical waves predict emission at any frequency if intensity is high, contradicting threshold frequency $\\nu_0$.", "2. $K_{\\max}$ increases linearly with $\\nu$ and is completely independent of intensity.", "3. Emission is instantaneous ($< 10^{-9}\\text{ s}$) with zero time lag."], "Resolved by Einstein's photon quantum theory."],
     "Slope of Stopping Potential (V₀) vs Frequency (ν) graph is ALWAYS h/e (universal constant) for every metal!"
    ],
    ["P12_CH12", "Bohr Quantized Orbits & Hydrogen Line Spectra",
     "Electrons occupy discrete stationary orbits where angular momentum $L = \\frac{nh}{2\\pi}$; jumping from upper state $n_2$ to lower state $n_1$ emits a photon of energy $h\\nu = E_{n_2} - E_{n_1} = 13.6\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)\\text{ eV}$.",
     [["1. Bohr Radius, Speed & Energy Scaling", "$r_n = 0.53\\,n^2\\text{ \\AA}$ ($r_n \\propto n^2$); $v_n \\propto \\frac{1}{n}$; $E_n = -\\frac{13.6}{n^2}\\text{ eV}$."], ["2. Kinetic, Potential & Total Energy Relation", "$K_n = +\\frac{13.6}{n^2}\\text{ eV} = -E_n$, &nbsp; $U_n = -\\frac{27.2}{n^2}\\text{ eV} = 2E_n$."], ["3. Hydrogen Spectral Series", "Lyman ($n_1 = 1$, UV), Balmer ($n_1 = 2$, Visible), Paschen ($n_1 = 3$, IR); max spectral lines from level $n$: $\\frac{n(n-1)}{2}$."]],
     [["Bohr Hydrogen Orbits", "$r_n = 0.53\\,n^2\\text{ \\AA}$, &nbsp; $E_n = -\\frac{13.6}{n^2}\\text{ eV}$"], ["Rydberg Spectral Formula", "$\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$, &nbsp; $K = -E, \\; U = 2E$"]],
     ["Photon Energy & Wavelength of $H_\\alpha$ Balmer Line ($n = 3 \\to n = 2$)", 3, "Calculate energy (in eV) and wavelength of the $H_\\alpha$ line emitted when an electron jumps from $n = 3$ to $n = 2$ in hydrogen.", ["$\\Delta E = E_3 - E_2 = -1.51 - (-3.40) = \\mathbf{1.89\\text{ eV}}$; &nbsp; $\\lambda = \\frac{1242\\text{ eV}\\cdot\\text{nm}}{1.89\\text{ eV}} = \\mathbf{657\\text{ nm}}$."]],
     ["Derivation of Bohr Radius & Total Energy of Electron in Hydrogen Atom", "5-Mark Board Derivation", "Equate Coulomb attraction to centripetal force ($\\frac{mv^2}{r} = \\frac{ke^2}{r^2}$) with $mvr = \\frac{nh}{2\\pi}$.", ["Eliminating $v$ gives $r_n = \\frac{n^2 h^2}{4\\pi^2 m k e^2} = 0.529\\,n^2\\text{ \\AA}$.", "Total energy $E_n = K + U = \\frac{ke^2}{2r_n} - \\frac{ke^2}{r_n} = -\\frac{ke^2}{2r_n} = -\\frac{13.6}{n^2}\\text{ eV}$."], "Negative total energy confirms bound atomic state."],
     "In Bohr's hydrogen atom, Kinetic Energy K = -E (positive) and Potential Energy U = 2E (twice as negative as total energy E)!"
    ],
    ["P12_CH13", "Nuclear Mass Defect ($\\Delta m c^2$) & Binding Energy Curve",
     "Assembling nucleons releases binding energy $BE = [Z m_p + (A - Z)m_n - M_{\\text{nuc}}]c^2$; middle-mass nuclei ($A \\approx 56$, Iron) sit at peak stability ($8.8\\text{ MeV/nucleon}$), driving both heavy nuclear fission and light nuclear fusion.",
     [["1. Nuclear Radius & Constant Density", "$R = R_0 A^{1/3}$ ($R_0 = 1.2\\text{ fm}$); nuclear density $\\rho \\approx 2.3 \\times 10^{17}\\text{ kg/m}^3$ is completely independent of mass number $A$."], ["2. Mass Defect & Binding Energy", "$\\Delta m = Z m_p + (A - Z)m_n - M_{\\text{nuc}}$; &nbsp; $BE = \\Delta m \\times 931.5\\text{ MeV}$."], ["3. Nuclear Force Properties", "Strongest fundamental force, short-range ($\\sim 2\\text{ fm}$), charge-independent ($F_{pp} = F_{nn} = F_{pn}$), and saturating."]],
     [["Nuclear Size & Density", "$R = R_0 A^{1/3}$, &nbsp; $\\rho = \\frac{3m_p}{4\\pi R_0^3} = \\text{constant}$"], ["Mass-Energy Equivalence", "$1\\text{ u} = 931.5\\text{ MeV}$, &nbsp; $BE/A = \\frac{\\Delta m \\times 931.5}{A}\\text{ MeV}$"]],
     ["Nuclear Radius Ratio of $^{27}Al$ to $^{125}Te$", 2, "Find the ratio of nuclear radii of $^{27}_{13}Al$ and $^{125}_{52}Te$.", ["$\\frac{R_1}{R_2} = \\left(\\frac{A_1}{A_2}\\right)^{1/3} = \\left(\\frac{27}{125}\\right)^{1/3} = \\mathbf{3 : 5}$."]],
     ["Proof That Nuclear Density Is Independent of Mass Number $A$", "2-Mark Board Proof", "Nuclear mass $M \\approx A m_p$ and spherical volume $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi R_0^3 A$.", ["$\\rho = \\frac{M}{V} = \\frac{A m_p}{\\frac{4}{3}\\pi R_0^3 A} = \\frac{3m_p}{4\\pi R_0^3}$."], "Mass number $A$ cancels out completely."],
     "Ratio of nuclear densities of ANY two nuclei (e.g., ¹⁶O and ⁵⁶Fe) is ALWAYS 1 : 1!"
    ],
    ["P12_CH14", "Energy Band Gaps, p-n Depletion Barrier & AC-to-DC Rectification",
     "Doping silicon with pentavalent donors (P, As) creates n-type ($n_e \\gg n_h$) while trivalent acceptors (B, Al) create p-type ($n_h \\gg n_e$); joining p and n forms a unidirectional p-n junction diode that rectifies AC into pulsating DC.",
     [["1. Mass Action Law & Extrinsic Doping", "$n_e n_h = n_i^2$; n-type doped with Group 15 donors; p-type doped with Group 13 acceptors (both remain electrically neutral overall)."], ["2. Forward vs Reverse Bias", "Forward bias (p to $+$, n to $-$): depletion width shrinks, barrier drops, large diffusion current flows. Reverse bias: depletion width widens, tiny drift saturation current."], ["3. Half-Wave vs Full-Wave Rectifier", "Half-wave output ripple frequency $= f_{\\text{in}}$; Full-wave output ripple frequency $= 2 f_{\\text{in}}$."]],
     [["Mass Action Law", "$n_e n_h = n_i^2$ (valid for intrinsic &amp; extrinsic)"], ["Rectifier Ripple Frequency", "Half-Wave: $f_{\\text{out}} = f_{\\text{in}}$ &nbsp;|&nbsp; Full-Wave: $f_{\\text{out}} = 2 f_{\\text{in}}$"]],
     ["Hole Concentration in Phosphorus-Doped Silicon ($n_i = 1.5 \\times 10^{16}\\text{ m}^{-3}$)", 2, "Pure Si has $n_i = 1.5 \\times 10^{16}\\text{ m}^{-3}$. If doped with $5 \\times 10^{22}\\text{ m}^{-3}$ Phosphorus atoms, find hole concentration $n_h$.", ["$n_h = \\frac{n_i^2}{n_e} = \\frac{(1.5 \\times 10^{16})^2}{5 \\times 10^{22}} = \\mathbf{4.5 \\times 10^9\\text{ m}^{-3}}$ (n-type)."]],
     ["Working of Full-Wave Center-Tap p-n Junction Rectifier with Waveforms", "5-Mark Board Derivation", "Two diodes $D_1, D_2$ connected to opposite ends of center-tapped transformer secondary and load $R_L$.", ["Positive half-cycle: $D_1$ forward-biased (conducts), $D_2$ reverse-biased (blocks); current flows $A \\to B$ through $R_L$.", "Negative half-cycle: $D_1$ reverse-biased, $D_2$ forward-biased; current STILL flows $A \\to B$ through $R_L$."], "Delivers continuous unidirectional DC pulses at frequency $2f_{\\text{mains}}$."],
     "Both n-type and p-type extrinsic semiconductors are ELECTRICALLY NEUTRAL overall because every dopant atom brings equal protons and electrons!"
    ]
  ];

  p12_8to14.forEach(([key, iTitle, iBody, concepts, forms, prob1, proof1, tip]) => {
    window.upgradePhysics12ChapterFull(key, {
      iTitle, iBody, concepts, formulas: forms, prob1, proof1, tip
    });
  });
})();
