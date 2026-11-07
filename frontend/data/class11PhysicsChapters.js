// frontend/data/class11PhysicsChapters.js
window.class11PhysicsChapterRegistry = {
  P11_CH01: {
    code: "Chapter 01",
    name: "Units and Measurements",
    weight: 4,
    desc: "SI units, dimensional analysis, significant figures, and error analysis.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">First Principles: Units & Dimensions</h3><p class="text-xs text-slate-300">Dimensions establish fundamental consistency across physical equations. Every physical quantity can be reduced to base dimensions $[M]$, $[L]$, $[T]$.</p></div>'
  },
  P11_CH02: {
    code: "Chapter 02",
    name: "Motion in a Straight Line",
    weight: 5,
    desc: "Kinematics equations, instantaneous velocity, acceleration, and relative velocity.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Kinematics in 1D</h3><p class="text-xs text-slate-300">Motion along a line governed by calculus rates of change: $v = \\frac{dx}{dt}$ and $a = \\frac{dv}{dt}$. Graphical slopes represent velocities and accelerations.</p></div>'
  },
  P11_CH03: {
    code: "Chapter 03",
    name: "Motion in a Plane",
    weight: 5,
    desc: "Vectors, resolution, projectile motion, and uniform circular motion.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">2D Motion & Projectiles</h3><p class="text-xs text-slate-300">Orthogonal directions are mutually independent. Horizontal motion is unaccelerated while vertical motion experiences constant gravitational acceleration $g$.</p></div>'
  },
  P11_CH04: {
    code: "Chapter 04",
    name: "Laws of Motion",
    weight: 6,
    desc: "Newton laws, inertia, momentum, friction dynamics, and circular banking.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Dynamics & Force Equilibrium</h3><p class="text-xs text-slate-300">Net force changes linear momentum $\\vec{F} = \\frac{d\\vec{p}}{dt}$. Free-body diagrams resolve normal reaction, friction limits $f_s \\le \\mu_s N$, and tension.</p></div>'
  },
  P11_CH05: {
    code: "Chapter 05",
    name: "Work, Energy and Power",
    weight: 5,
    desc: "Work-energy theorem, conservative forces, potential energy, and collisions.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Work-Energy Theorem</h3><p class="text-xs text-slate-300">The net work done by all forces equals the change in kinetic energy: $W_{\\text{net}} = \\Delta K$. Conservative forces store potential energy $F = -\\frac{dU}{dx}$.</p></div>'
  },
  P11_CH06: {
    code: "Chapter 06",
    name: "System of Particles and Rotational Motion",
    weight: 6,
    desc: "Center of mass, torque, angular momentum, and moment of inertia.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Rigid Body Dynamics</h3><p class="text-xs text-slate-300">Rotation mirrors translation: torque $\\vec{\\tau} = I\\vec{\\alpha}$, angular momentum $\\vec{L} = I\\vec{\\omega}$, and conservation of angular momentum under zero external torque.</p></div>'
  },
  P11_CH07: {
    code: "Chapter 07",
    name: "Gravitation",
    weight: 5,
    desc: "Kepler laws, universal gravitation, gravitational potential, and escape velocity.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Planetary Motion & Gravitation</h3><p class="text-xs text-slate-300">Inverse-square central force fields produce conic orbits. Gravitational binding energy dictates escape velocity $v_e = \\sqrt{\\frac{2GM}{R}}$.</p></div>'
  },
  P11_CH08: {
    code: "Chapter 08",
    name: "Mechanical Properties of Solids",
    weight: 4,
    desc: "Stress, strain, Hooke law, and elastic moduli (Young, Bulk, Shear).",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Elasticity & Solid Deformation</h3><p class="text-xs text-slate-300">Intermolecular forces act as micro-springs. Within the proportional limit, stress is proportional to strain ($Y = \\frac{\\text{Stress}}{\\text{Strain}}$).</p></div>'
  },
  P11_CH09: {
    code: "Chapter 09",
    name: "Mechanical Properties of Fluids",
    weight: 5,
    desc: "Pressure, Pascal principle, Archimedes principle, viscosity, and Bernoulli theorem.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Fluid Dynamics & Flow</h3><p class="text-xs text-slate-300">Conservation of energy in streamline flow is represented by Bernoulli equation: $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$.</p></div>'
  },
  P11_CH10: {
    code: "Chapter 10",
    name: "Thermal Properties of Matter",
    weight: 5,
    desc: "Temperature, thermal expansion, specific heat, latent heat, and heat transfer.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Thermal Physics & Heat Transfer</h3><p class="text-xs text-slate-300">Heat transfer occurs via conduction, convection, and radiation. Thermal expansion relates linearly to temperature differential: $\\Delta L = \\alpha L_0 \\Delta T$.</p></div>'
  },
  P11_CH11: {
    code: "Chapter 11",
    name: "Thermodynamics",
    weight: 6,
    desc: "Thermal equilibrium, first and second laws, isothermal and adiabatic processes.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Thermodynamic Laws</h3><p class="text-xs text-slate-300">First Law accounts for internal energy conservation $\\Delta Q = \\Delta U + \\Delta W$. Second Law establishes entropy directionality and heat engine limits.</p></div>'
  },
  P11_CH12: {
    code: "Chapter 12",
    name: "Kinetic Theory",
    weight: 4,
    desc: "Molecular ideal gas model, pressure derivation, degrees of freedom, equipartition.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Microscopic Gas Dynamics</h3><p class="text-xs text-slate-300">Pressure emerges from elastic collisions of particles with container walls: $P = \\frac{1}{3}\\rho \\bar{v}^2$. Average kinetic energy reflects temperature.</p></div>'
  },
  P11_CH13: {
    code: "Chapter 13",
    name: "Oscillations",
    weight: 5,
    desc: "Simple Harmonic Motion (SHM), force constant, energy in SHM, simple pendulum.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Periodic Motion & SHM</h3><p class="text-xs text-slate-300">Restoring force proportional to negative displacement $F = -kx$ yields sinusoidal acceleration $\\ddot{x} + \\omega^2 x = 0$ with period $T = 2\\pi\\sqrt{\\frac{m}{k}}$.</p></div>'
  },
  P11_CH14: {
    code: "Chapter 14",
    name: "Waves",
    weight: 5,
    desc: "Wave propagation, transverse/longitudinal wave speeds, superposition, beats.",
    overview: '<div class="p-4 rounded-xl bg-surfaceLight border border-slate-700"><h3 class="text-base font-bold text-white mb-2">Wave Mechanics & Superposition</h3><p class="text-xs text-slate-300">Wave displacement $y(x,t) = A \\sin(kx - \\omega t)$ transfers energy without mass transport. Interference generates standing waves and acoustic beats.</p></div>'
  }
};
