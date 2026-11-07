// frontend/data/class12PhysicsChapters.js
window.class12PhysicsChapterRegistry = {
  P12_CH01: {
    code: "Chapter 01",
    name: "Electric Charges and Fields",
    weight: 5,
    desc: "Coulomb law, electric field lines, electric dipole, and Gauss law with applications.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Gauss Law & Electrostatics</h3><p class="text-xs text-slate-300">Total electric flux through any closed Gaussian surface equals enclosed charge over permittivity: $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{in}}}{\\varepsilon_0}$.</p></div>'
  },
  P12_CH02: {
    code: "Chapter 02",
    name: "Electrostatic Potential and Capacitance",
    weight: 5,
    desc: "Electric potential, equipotential surfaces, capacitor energy, and dielectric polarizations.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Potential & Capacitance</h3><p class="text-xs text-slate-300">Energy density in electric fields is $u = \\frac{1}{2}\\varepsilon_0 E^2$. Dielectrics increase capacitance by factor $K$: $C = K C_0$.</p></div>'
  },
  P12_CH03: {
    code: "Chapter 03",
    name: "Current Electricity",
    weight: 6,
    desc: "Drift velocity, Ohm law, Kirchhoff rules, internal resistance, and Wheatstone bridge.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Kirchhoff Rules & Bridges</h3><p class="text-xs text-slate-300">Junction rule enforces charge conservation ($\\sum I = 0$); Loop rule enforces energy conservation ($\\sum \\Delta V = 0$). Balanced bridge condition: $\\frac{R_1}{R_2} = \\frac{R_3}{R_4}$.</p></div>'
  },
  P12_CH04: {
    code: "Chapter 04",
    name: "Moving Charges and Magnetism",
    weight: 5,
    desc: "Biot-Savart law, Ampere circuital law, Lorentz magnetic force, and moving coil galvanometer.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Lorentz Force & Magnetic Fields</h3><p class="text-xs text-slate-300">Moving charges feel $\\vec{F} = q(\\vec{v} \\times \\vec{B})$. Ampere law calculates field geometries: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enclosed}}$.</p></div>'
  },
  P12_CH05: {
    code: "Chapter 05",
    name: "Magnetism and Matter",
    weight: 4,
    desc: "Bar magnet dipole, magnetic field lines, Earth magnetism, and dia/para/ferromagnetic materials.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Gauss Law for Magnetism</h3><p class="text-xs text-slate-300">Magnetic monopoles do not exist: $\\oint \\vec{B} \\cdot d\\vec{A} = 0$. Material classification depends on magnetic susceptibility $\\chi_m$.</p></div>'
  },
  P12_CH06: {
    code: "Chapter 06",
    name: "Electromagnetic Induction",
    weight: 4,
    desc: "Faraday laws, Lenz law, motional electromotive force, and self/mutual inductance.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Faraday & Lenz Law</h3><p class="text-xs text-slate-300">Induced EMF opposes the change in flux producing it: $\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$. Energy is stored in inductors as $U = \\frac{1}{2} L I^2$.</p></div>'
  },
  P12_CH07: {
    code: "Chapter 07",
    name: "Alternating Current",
    weight: 4,
    desc: "Phasors, series LCR circuits, resonance, power factor, and AC transformers.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">LCR Resonance & Transformers</h3><p class="text-xs text-slate-300">Resonant frequency $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ minimizes circuit impedance to $Z = R$, producing peak current response.</p></div>'
  },
  P12_CH08: {
    code: "Chapter 08",
    name: "Electromagnetic Waves",
    weight: 3,
    desc: "Displacement current, Maxwell equations, and electromagnetic spectrum characteristics.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Maxwell Displacement Current</h3><p class="text-xs text-slate-300">Time-varying electric fields produce magnetic fields via displacement current $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$. EM waves propagate at speed $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$.</p></div>'
  },
  P12_CH09: {
    code: "Chapter 09",
    name: "Ray Optics and Optical Instruments",
    weight: 8,
    desc: "Total internal reflection, lens maker formula, refraction through prisms, and microscopes/telescopes.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Refraction & Lens Maker Formula</h3><p class="text-xs text-slate-300">Thin lens equation: $\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$. Total internal reflection governs optical fiber communications.</p></div>'
  },
  P12_CH10: {
    code: "Chapter 10",
    name: "Wave Optics",
    weight: 7,
    desc: "Huygens wave front principle, Young double-slit interference, and single-slit diffraction.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Interference & Diffraction</h3><p class="text-xs text-slate-300">Young fringe width $\\beta = \\frac{\\lambda D}{d}$ requires coherent sources. Diffraction spreads wavefronts past apertures of width $a \\sim \\lambda$.</p></div>'
  },
  P12_CH11: {
    code: "Chapter 11",
    name: "Dual Nature of Radiation and Matter",
    weight: 5,
    desc: "Photoelectric effect, Einstein photoelectric equation, de Broglie matter waves.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Einstein Photoelectric Equation</h3><p class="text-xs text-slate-300">Maximum kinetic energy of emitted photoelectrons: $K_{\\max} = h\\nu - \\Phi_0 = eV_0$. De Broglie wavelength: $\\lambda = \\frac{h}{p}$.</p></div>'
  },
  P12_CH12: {
    code: "Chapter 12",
    name: "Atoms",
    weight: 4,
    desc: "Alpha-particle scattering, Rutherford model, Bohr hydrogen atom postulates, and spectral series.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Bohr Hydrogen Model</h3><p class="text-xs text-slate-300">Quantized angular momentum $L = mvr = \\frac{nh}{2\\pi}$ produces discrete atomic energy levels $E_n = -\\frac{13.6}{n^2} \\text{ eV}$.</p></div>'
  },
  P12_CH13: {
    code: "Chapter 13",
    name: "Nuclei",
    weight: 3,
    desc: "Nuclear size and density, mass defect, binding energy per nucleon, and nuclear fission/fusion.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Mass Defect & Binding Energy</h3><p class="text-xs text-slate-300">Mass-energy equivalence $\\Delta E = \\Delta m \\cdot c^2$. Peak binding energy around $A \\approx 56$ (Iron) explains fusion and fission energetics.</p></div>'
  },
  P12_CH14: {
    code: "Chapter 14",
    name: "Semiconductor Electronics",
    weight: 7,
    desc: "Intrinsic/extrinsic semiconductors, p-n junction diode forward/reverse bias, and half/full-wave rectifiers.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Solid-State Junctions</h3><p class="text-xs text-slate-300">Doping creates majority carriers (electrons in n-type, holes in p-type). Depletion layer creates barrier potential allowing rectification.</p></div>'
  }
};
