import hashlib
import json
import os
import re
import urllib.parse
from dotenv import load_dotenv
from sqlalchemy import Boolean, Column, create_engine, Numeric, String, Text, Integer
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import declarative_base, sessionmaker

load_dotenv()
DB_USER = os.getenv("DB_USER")
DB_PASS = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")
DB_NAME = os.getenv("DB_NAME")

encoded_pass = urllib.parse.quote_plus(DB_PASS) if DB_PASS else ""
DATABASE_URL = f"postgresql+psycopg://{DB_USER}:{encoded_pass}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class QuestionBank(Base):
    __tablename__ = "question_bank"
    question_id = Column(String, primary_key=True, index=True)
    chapter_id = Column(String, index=True, nullable=False)
    subject_code = Column(String(10), default="MATH", index=True)
    paper_region = Column(String(20), default="All India")
    concept_name = Column(String, nullable=True)
    math_track = Column(String, default="Standard (041)")
    question_text = Column(Text, nullable=False)
    marking_rubric = Column(JSONB, nullable=True)
    total_marks = Column(Numeric, nullable=False)
    question_category = Column(String, default="Board Exam")
    cognitive_type = Column(String, nullable=True)
    difficulty_tier = Column(String, default="Board Standard")
    fingerprint = Column(String(64), unique=True, index=True, nullable=True)
    source_tags = Column(JSONB, default=list)
    pyq_year = Column(Integer, nullable=True)
    pyq_set = Column(String, nullable=True)
    ideal_solution = Column(Text, nullable=True)
    is_active = Column(Boolean, default=True)

def compute_fingerprint(text: str) -> str:
    t = text.lower()
    t = re.sub(r"\\(text|mathbf|mathrm|mathit)\{([^}]+)\}", r"\2", t)
    t = re.sub(r"[\$\\]", "", t)
    t = re.sub(r"[^a-z0-9]", "", t)
    return hashlib.sha256(t.encode("utf-8")).hexdigest()

ALL_PAPERS = [
    # =========================================================================
    # SCIENCE (086) - CBSE 2024 DELHI SET 1 (COMPLETE 15 QUESTIONS • 40 MARKS)
    # =========================================================================
    {
        "question_id": "SCI_2024_D_Q01", "chapter_id": "S10_CH01", "subject_code": "SCI",
        "total_marks": 1, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "A student pours 2 mL of dilute hydrochloric acid over 1 g of zinc granules in a test tube. The gas evolved is:\n(A) Oxygen, which rekindles a glowing splint\n(B) Hydrogen, which burns with a pop sound\n(C) Carbon dioxide, which turns lime water milky\n(D) Nitrogen, which extinguishes a burning splint",
        "ideal_solution": "Correct Option: (B)\nZn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g). Hydrogen gas burns with a characteristic pop sound.",
        "marking_rubric": {"answer": "1 Mark for option (B)"}
    },
    {
        "question_id": "SCI_2024_D_Q02", "chapter_id": "S10_CH02", "subject_code": "SCI",
        "total_marks": 1, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "An aqueous solution with pH = 3 is diluted by adding distilled water until its volume doubles. The pH of the diluted solution will:\n(A) Decrease\n(B) Remain 3\n(C) Increase towards 7\n(D) Become greater than 7",
        "ideal_solution": "Correct Option: (C)\nDilution decreases the hydronium ion (H3O+) concentration per unit volume, which raises the pH towards 7.",
        "marking_rubric": {"answer": "1 Mark for option (C)"}
    },
    {
        "question_id": "SCI_2024_D_Q03", "chapter_id": "S10_CH03", "subject_code": "SCI",
        "total_marks": 1, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Which of the following metals exists in liquid state at standard room temperature?\n(A) Sodium\n(B) Mercury\n(C) Bromine\n(D) Gallium",
        "ideal_solution": "Correct Option: (B)\nMercury (Hg) is the only metal that is liquid at room temperature (Bromine is a non-metal).",
        "marking_rubric": {"answer": "1 Mark for option (B)"}
    },
    {
        "question_id": "SCI_2024_D_Q04", "chapter_id": "S10_CH06", "subject_code": "SCI",
        "total_marks": 1, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "In human digestive system, the proteolytic enzyme trypsin is secreted by:\n(A) Stomach and acts in acidic medium\n(B) Liver and acts in alkaline medium\n(C) Pancreas and acts in alkaline medium\n(D) Salivary glands and acts in neutral medium",
        "ideal_solution": "Correct Option: (C)\nTrypsin is secreted in pancreatic juice and digests proteins in an alkaline medium (pH ~8.0).",
        "marking_rubric": {"answer": "1 Mark for option (C)"}
    },
    {
        "question_id": "SCI_2024_D_Q05", "chapter_id": "S10_CH01", "subject_code": "SCI",
        "total_marks": 2, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Write a balanced chemical equation with physical state symbols for the reaction between quicklime and water. Classify it as exothermic or endothermic.",
        "ideal_solution": "CaO(s) + H2O(l) -> Ca(OH)2(aq) + Heat\nExothermic: A substantial amount of thermal energy is liberated, causing the solution to boil.",
        "marking_rubric": {"eq": "1 Mark for balanced equation with states", "type": "1 Mark for exothermic classification and reasoning"}
    },
    {
        "question_id": "SCI_2024_D_Q06", "chapter_id": "S10_CH07", "subject_code": "SCI",
        "total_marks": 2, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Name the plant hormones responsible for: (a) Phototropic curvature in shoots, (b) Stomatal closure during drought stress.",
        "ideal_solution": "(a) Auxin: Synthesized at shoot tips; diffuses to shaded side promoting cell elongation.\n(b) Abscisic Acid (ABA): Natural growth inhibitor that closes stomata during water stress.",
        "marking_rubric": {"a": "1 Mark for Auxin", "b": "1 Mark for Abscisic Acid"}
    },
    {
        "question_id": "SCI_2024_D_Q07", "chapter_id": "S10_CH10", "subject_code": "SCI",
        "total_marks": 2, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "A ray of light traveling in air enters obliquely into water. Does the ray bend towards the normal or away? Give the physical reason.",
        "ideal_solution": "The ray bends TOWARDS the normal.\nReason: Water is optically denser than air (n_water = 1.33 > n_air = 1.00). Light slows down when entering water, causing the wavefront to bend towards the normal.",
        "marking_rubric": {"direction": "1 Mark for towards normal", "reason": "1 Mark for optical density and speed reduction"}
    },
    {
        "question_id": "SCI_2024_D_Q08", "chapter_id": "S10_CH02", "subject_code": "SCI",
        "total_marks": 3, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Explain why Plaster of Paris must be stored in a moisture-proof container. Write the chemical equation for its reaction with water and state one medical use.",
        "ideal_solution": "1. Storage: POP absorbs atmospheric moisture and sets into hard crystalline gypsum, losing its molding capability.\n2. Equation: CaSO4·1/2H2O + 1.5H2O -> CaSO4·2H2O (Gypsum).\n3. Medical Use: Used to immobilize and align fractured bones.",
        "marking_rubric": {"reason": "1 Mark for storage reason", "eq": "1 Mark for balanced rehydration", "use": "1 Mark for medical use"}
    },
    {
        "question_id": "SCI_2024_D_Q09", "chapter_id": "S10_CH06", "subject_code": "SCI",
        "total_marks": 3, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Trace the three cellular metabolic pathways by which pyruvate is broken down to release energy in living cells.",
        "ideal_solution": "1. In Yeast (Absence of O2): Pyruvate -> Ethanol (2C) + CO2 + 2 ATP.\n2. In Muscle cells (Lack of O2): Pyruvate -> Lactic Acid (3C) + 2 ATP (causes muscle cramps).\n3. In Mitochondria (Presence of O2): Pyruvate + O2 -> 6CO2 + 6H2O + 38 ATP.",
        "marking_rubric": {"path1": "1 Mark for anaerobic fermentation", "path2": "1 Mark for lactic acid pathway", "path3": "1 Mark for aerobic oxidation"}
    },
    {
        "question_id": "SCI_2024_D_Q10", "chapter_id": "S10_CH10", "subject_code": "SCI",
        "total_marks": 3, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "An object 4 cm in size is placed 25 cm in front of a concave mirror of focal length 15 cm. Find the distance from the mirror at which a screen should be placed to obtain a sharp image, and calculate image size.",
        "ideal_solution": "u = -25 cm, f = -15 cm, h = +4 cm.\n1/v = 1/f - 1/u = 1/(-15) - 1/(-25) = -2/75 -> v = -37.5 cm.\nm = -v/u = -(-37.5)/(-25) = -1.5.\nh' = m * h = -1.5 * 4 cm = -6 cm.\nScreen placed at 37.5 cm in front of mirror; image is real, inverted, magnified (-6 cm).",
        "marking_rubric": {"mirror_formula": "1 Mark for formula & substitution", "v": "1 Mark for v = -37.5 cm", "size": "1 Mark for h' = -6 cm & nature"}
    },
    {
        "question_id": "SCI_2024_D_Q11", "chapter_id": "S10_CH12", "subject_code": "SCI",
        "total_marks": 3, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "State Joule's law of heating. Derive H = I^2 R t. Calculate the heat generated by a 20-ohm electric heater drawing 5 A for 30 seconds.",
        "ideal_solution": "1. Joule's Law: Heat produced in a resistor is directly proportional to I^2, R, and t.\n2. Derivation: W = V * Q = V * I * t. By Ohm's law V = IR, so W = (IR) * I * t = I^2 R t = H.\n3. Calculation: H = (5)^2 * 20 * 30 = 25 * 600 = 15,000 Joules (15 kJ).",
        "marking_rubric": {"law_deriv": "1.5 Marks for statement and derivation", "calc": "1.5 Marks for 15,000 J with correct units"}
    },
    {
        "question_id": "SCI_2024_D_Q12", "chapter_id": "S10_CH15", "subject_code": "SCI",
        "total_marks": 3, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "If 20,000 J of solar energy falls on green plant foliage, calculate the energy available to a hawk at the 4th trophic level (Grass -> Grasshopper -> Frog -> Hawk) using Lindeman's 10% law.",
        "ideal_solution": "1. Plants (T1): Capture 1% of solar energy = 1% of 20,000 J = 200 J.\n2. Grasshopper (T2): 10% of 200 J = 20 J.\n3. Frog (T3): 10% of 20 J = 2 J.\n4. Hawk (T4): 10% of 2 J = 0.2 Joules.",
        "marking_rubric": {"step1": "1 Mark for 1% solar capture (200 J)", "step2_4": "2 Marks for applying 10% consecutively to get 0.2 J"}
    },
    {
        "question_id": "SCI_2024_D_Q13", "chapter_id": "S10_CH04", "subject_code": "SCI",
        "total_marks": 5, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "(a) Explain the mechanism of micelle formation during the cleansing action of soap.\n(b) Differentiate between ethanol and ethanoic acid using a chemical test. Write the chemical equation.",
        "ideal_solution": "(a) Soap molecule (C17H35COONa) has a polar hydrophilic ionic head (-COO-Na+) and a non-polar hydrophobic hydrocarbon tail. In water, tails dissolve into the central oily dirt droplet while heads point outward into water, forming a spherical micelle that stays suspended as an emulsion and is rinsed away.\n(b) Add NaHCO3 solution: Ethanoic acid produces brisk effervescence of CO2 gas that turns lime water milky. Ethanol does not react.\nCH3COOH + NaHCO3 -> CH3COONa + H2O + CO2",
        "marking_rubric": {"micelle": "3 Marks for structure and mechanism", "test": "2 Marks for test and balanced equation"}
    },
    {
        "question_id": "SCI_2024_D_Q14", "chapter_id": "S10_CH08", "subject_code": "SCI",
        "total_marks": 5, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "(a) Explain the events of double fertilization and triple fusion in flowering plants.\n(b) What are the structural and functional differences between self-pollination and cross-pollination?",
        "ideal_solution": "(a) Pollen tube releases two male gametes into the embryo sac:\n1. Syngamy: 1st male gamete (n) + egg cell (n) -> 2n Zygote (develops into embryo).\n2. Triple Fusion: 2nd male gamete (n) + 2 polar nuclei (2n) -> 3n Primary Endosperm Nucleus (develops into nutrient endosperm).\nTwo fertilizations occur simultaneously -> Double Fertilization.\n(b) Self-pollination transfers pollen from anther to stigma of same flower or same plant; cross-pollination transfers pollen between different plants of the same species, requiring external agents (wind, insects) and introducing genetic variation.",
        "marking_rubric": {"part_a": "3 Marks for syngamy and triple fusion", "part_b": "2 Marks for 2 valid distinctions"}
    },
    {
        "question_id": "SCI_2024_D_Q15", "chapter_id": "S10_CH13", "subject_code": "SCI",
        "total_marks": 5, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "(a) State Fleming's Left-Hand Rule.\n(b) Describe the magnetic field pattern produced inside and outside a current-carrying solenoid with key traits.\n(c) What is the function of the earth wire in domestic electrical installations?",
        "ideal_solution": "(a) Stretch thumb, forefinger, and middle finger mutually perpendicular: Forefinger points in magnetic field direction, middle finger in current direction, and thumb indicates mechanical force/motion on the conductor.\n(b) Inside: Field lines are straight, parallel, and equidistant (uniform magnetic field). Outside: Resembles a magnetic dipole / bar magnet emerging from North and entering South.\n(c) Earth wire provides a low-resistance path to ground for leakage currents from metallic appliance bodies, preventing electric shocks by tripping the circuit fuse/MCB.",
        "marking_rubric": {"rule": "2 Marks for rule", "solenoid": "2 Marks for field traits", "earth": "1 Mark for safety function"}
    },

    # =========================================================================
    # SOCIAL SCIENCE (087) - CBSE 2024 DELHI SET 1 (COMPLETE 15 QUESTIONS • 40 MARKS)
    # =========================================================================
    {
        "question_id": "SST_2024_D_Q01", "chapter_id": "SS10_HIS_01", "subject_code": "SST",
        "total_marks": 1, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Which treaty recognized Greece as an independent sovereign nation?\n(A) Treaty of Vienna of 1815\n(B) Treaty of Constantinople of 1832\n(C) Treaty of Versailles of 1871\n(D) Treaty of Paris of 1856",
        "ideal_solution": "Correct Option: (B)\nThe Treaty of Constantinople of 1832 formally recognized Greece as an independent nation.",
        "marking_rubric": {"answer": "1 Mark for option (B)"}
    },
    {
        "question_id": "SST_2024_D_Q02", "chapter_id": "SS10_HIS_02", "subject_code": "SST",
        "total_marks": 1, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Under which colonial legislation were plantation workers in Assam prohibited from leaving tea gardens without permission?\n(A) Rowlatt Act of 1919\n(B) Vernacular Press Act of 1878\n(C) Inland Emigration Act of 1859\n(D) Arms Act of 1878",
        "ideal_solution": "Correct Option: (C)\nThe Inland Emigration Act of 1859 prevented tea garden workers from leaving plantations without authorization.",
        "marking_rubric": {"answer": "1 Mark for option (C)"}
    },
    {
        "question_id": "SST_2024_D_Q03", "chapter_id": "SS10_GEO_01", "subject_code": "SST",
        "total_marks": 1, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Which soil develops deep cracks during hot weather, aiding in proper soil aeration?\n(A) Alluvial Soil\n(B) Black Soil\n(C) Laterite Soil\n(D) Red Soil",
        "ideal_solution": "Correct Option: (B)\nBlack soil (Regur) has high clay content and develops deep fissures when dried, facilitating aeration.",
        "marking_rubric": {"answer": "1 Mark for option (B)"}
    },
    {
        "question_id": "SST_2024_D_Q04", "chapter_id": "SS10_POL_01", "subject_code": "SST",
        "total_marks": 1, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "A system of 'checks and balances' is an essential characteristic of:\n(A) Horizontal division of power\n(B) Vertical federal division of power\n(C) Majoritarian unitary governance\n(D) Community Government",
        "ideal_solution": "Correct Option: (A)\nHorizontal power sharing places the Legislature, Executive, and Judiciary at the same level so they check each other.",
        "marking_rubric": {"answer": "1 Mark for option (A)"}
    },
    {
        "question_id": "SST_2024_D_Q05", "chapter_id": "SS10_ECO_01", "subject_code": "SST",
        "total_marks": 2, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Why do different persons have different notions of development? Explain with two suitable real-life examples.",
        "ideal_solution": "People have different developmental goals because their life situations and aspirations differ:\n1. An industrialist may want high dams to generate electricity, while displaced tribals desire check-dams to preserve farmland.\n2. An educated unemployed youth desires a white-collar job, while a landless rural laborer seeks higher daily wages and local work.",
        "marking_rubric": {"explanation": "1 Mark for developmental divergence reason", "examples": "1 Mark for two valid contrasting examples"}
    },
    {
        "question_id": "SST_2024_D_Q06", "chapter_id": "SS10_POL_02", "subject_code": "SST",
        "total_marks": 2, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Distinguish between 'Coming Together' and 'Holding Together' federations with one country example for each.",
        "ideal_solution": "1. Coming Together: Independent states join to form a larger union to pool sovereignty and retain equal power (e.g., USA, Australia).\n2. Holding Together: A large nation divides governance between central and regional authorities, giving more power to the center (e.g., India, Spain, Belgium).",
        "marking_rubric": {"coming": "1 Mark for Coming Together definition and example", "holding": "1 Mark for Holding Together definition and example"}
    },
    {
        "question_id": "SST_2024_D_Q07", "chapter_id": "SS10_GEO_02", "subject_code": "SST",
        "total_marks": 2, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Name the two most important beverage crops grown in India. State the climatic conditions required for the growth of tea.",
        "ideal_solution": "1. Two beverage crops: Tea and Coffee.\n2. Tea climatic requirements: Warm, humid, frost-free climate throughout the year; abundant rainfall (150–300 cm) evenly distributed, and deep, well-drained loamy soil rich in humus.",
        "marking_rubric": {"crops": "1 Mark for Tea and Coffee", "climate": "1 Mark for temperature and rainfall requirements"}
    },
    {
        "question_id": "SST_2024_D_Q08", "chapter_id": "SS10_HIS_01", "subject_code": "SST",
        "total_marks": 3, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Explain the role played by Giuseppe Mazzini, Count Cavour, and Giuseppe Garibaldi in the unification of Italy.",
        "ideal_solution": "1. Giuseppe Mazzini (The Ideologue): Founded 'Young Italy' to promote a unified democratic Italian republic.\n2. Count Camillo de Cavour (The Diplomat): Prime Minister of Sardinia-Piedmont who formed an alliance with France to defeat Austria in 1859, unifying northern Italy.\n3. Giuseppe Garibaldi (The Sword): Led the 'Red Shirts' in the Expedition of the Thousand in 1860, liberating southern Italy.",
        "marking_rubric": {"mazzini": "1 Mark", "cavour": "1 Mark", "garibaldi": "1 Mark"}
    },
    {
        "question_id": "SST_2024_D_Q09", "chapter_id": "SS10_ECO_02", "subject_code": "SST",
        "total_marks": 3, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "What is disguised unemployment? Why is it prevalent in the agricultural sector of India? Suggest one remedy.",
        "ideal_solution": "1. Definition: A situation where more people work on a farm than needed; removing surplus workers does not reduce total agricultural output.\n2. Reason: Lack of non-farm employment in rural areas forces all family members to work on small, fragmented plots.\n3. Remedy: Establish agro-processing industries, rural transport infrastructure, and promote rural tourism.",
        "marking_rubric": {"def": "1 Mark for definition", "reason": "1 Mark for rural context", "remedy": "1 Mark for valid solution"}
    },
    {
        "question_id": "SST_2024_D_Q10", "chapter_id": "SS10_POL_03", "subject_code": "SST",
        "total_marks": 3, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "State three constitutional provisions that make India a secular state.",
        "ideal_solution": "1. No Official Religion: The Indian Constitution does not grant official status to any single religion.\n2. Freedom of Religion: Article 25 guarantees all citizens the right to profess, practice, and propagate any religion.\n3. Non-Discrimination: Article 15 prohibits discrimination on grounds of religion in public employment and access.",
        "marking_rubric": {"point1": "1 Mark", "point2": "1 Mark", "point3": "1 Mark"}
    },
    {
        "question_id": "SST_2024_D_Q11", "chapter_id": "SS10_ECO_03", "subject_code": "SST",
        "total_marks": 3, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Describe the organization and working mechanism of Self-Help Groups (SHGs) for rural women.",
        "ideal_solution": "1. Organization: Consists of 15–20 members from a neighborhood who contribute monthly savings (Rs. 25–100 per member).\n2. Internal Lending: Members take small short-term loans from pooled savings at modest interest rates without collateral.\n3. Bank Linkage: After 1–2 years of consistent savings, commercial banks sanction formal collateral-free loans to the group.",
        "marking_rubric": {"org": "1 Mark", "loans": "1 Mark", "bank": "1 Mark"}
    },
    {
        "question_id": "SST_2024_D_Q12", "chapter_id": "SS10_GEO_06", "subject_code": "SST",
        "total_marks": 3, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Why is the iron and steel industry concentrated mainly in the Chota Nagpur plateau region?",
        "ideal_solution": "1. Raw Material Proximity: High-grade hematite iron ore, coking coal (Jharia, Bokaro), and limestone flux are available in close proximity.\n2. Water & Power: Damodar Valley network provides reliable cooling water and thermal power.\n3. Transport & Labor: Dense railway network and low-cost labor from Bihar, Jharkhand, and Odisha support heavy operations.",
        "marking_rubric": {"raw_materials": "1 Mark", "power": "1 Mark", "logistics": "1 Mark"}
    },
    {
        "question_id": "SST_2024_D_Q13", "chapter_id": "SS10_HIS_02", "subject_code": "SST",
        "total_marks": 5, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "How did the Non-Cooperation Movement unfold in cities, countryside, and plantations? Why did Mahatma Gandhi call off the movement in 1922?",
        "ideal_solution": "1. Cities: Middle-class boycott of British schools, courts, and foreign cloth. Picketing of liquor shops.\n2. Countryside: Peasants in Awadh under Baba Ramchandra protested begar (unpaid forced labor) and talukdar rents; forest dwellers in Andhra protested grazing bans under Alluri Sitaram Raju.\n3. Plantations: Assam workers defied the 1859 Inland Emigration Act to leave plantations and return home.\n4. Withdrawal: In February 1922, a violent mob burned a police station at Chauri Chaura, killing 22 policemen. Gandhi called off the movement because non-violent discipline was breached.",
        "marking_rubric": {"cities": "1 Mark", "countryside": "1 Mark", "plantations": "1 Mark", "chauri_chaura": "2 Marks"}
    },
    {
        "question_id": "SST_2024_D_Q14", "chapter_id": "SS10_POL_02", "subject_code": "SST",
        "total_marks": 5, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "Describe the key constitutional provisions introduced by the 73rd and 74th Amendments of 1992 to make decentralization effective in India.",
        "ideal_solution": "1. Mandatory Regular Elections: Elections to local bodies every five years are constitutionally compulsory.\n2. Social Group Reservations: Reserved seats for Scheduled Castes and Scheduled Tribes proportional to population.\n3. Women's Reservation: At least one-third (33%) of all seats and chairperson positions are reserved for women.\n4. State Election Commission: Independent state commissions conduct transparent local elections.\n5. Revenue Sharing: State governments must share revenues and powers with local bodies via State Finance Commissions.",
        "marking_rubric": {"five_points": "5 Marks (1 Mark for each distinct amendment clause under headings)"}
    },
    {
        "question_id": "SST_2024_D_Q15", "chapter_id": "SS10_ECO_04", "subject_code": "SST",
        "total_marks": 5, "difficulty_tier": "Board Standard", "pyq_year": 2024, "pyq_set": "Delhi Set 1", "paper_region": "Delhi",
        "question_text": "What are Multinational Corporations (MNCs)? Explain the three major ways through which MNCs control production in other nations.",
        "ideal_solution": "1. Definition: An enterprise that owns or controls production in more than one nation.\n2. Three Ways of Control:\n- Buying Local Companies: Acquiring established domestic companies to access existing distribution networks (e.g., Cargill Foods purchasing Parakh Foods).\n- Joint Ventures: Partnering with domestic firms to supply capital and advanced machinery (e.g., Ford Motors partnering with Mahindra).\n- Placing Contracts: Subcontracting production to decentralized local manufacturers (garments, footwear, toys) and selling under global brand names.",
        "marking_rubric": {"def": "1 Mark for definition", "three_ways": "4 Marks (1.33 Marks per strategy with example)"}
    }
]

def seed_database():
    db = SessionLocal()
    inserted, updated = 0, 0

    print("Connecting to database and seeding complete 15-question papers for Science and SST...")
    for item in ALL_PAPERS:
        fp = compute_fingerprint(item["question_text"])
        existing = db.query(QuestionBank).filter(
            (QuestionBank.question_id == item["question_id"]) | (QuestionBank.fingerprint == fp)
        ).first()

        if existing:
            existing.chapter_id = item["chapter_id"]
            existing.subject_code = item["subject_code"]
            existing.paper_region = item["paper_region"]
            existing.pyq_year = item["pyq_year"]
            existing.pyq_set = item["pyq_set"]
            existing.total_marks = item["total_marks"]
            existing.question_text = item["question_text"]
            existing.ideal_solution = item["ideal_solution"]
            existing.marking_rubric = item["marking_rubric"]
            updated += 1
        else:
            q = QuestionBank(
                question_id=item["question_id"],
                chapter_id=item["chapter_id"],
                subject_code=item["subject_code"],
                paper_region=item["paper_region"],
                concept_name=item.get("concept_name", item["chapter_id"]),
                math_track="Standard (041)",
                question_text=item["question_text"],
                marking_rubric=item["marking_rubric"],
                total_marks=item["total_marks"],
                question_category="Board Exam",
                cognitive_type="Procedural",
                difficulty_tier=item["difficulty_tier"],
                fingerprint=fp,
                source_tags=[f"CBSE {item['pyq_year']} • {item['paper_region']} ({item['pyq_set']})"],
                pyq_year=item["pyq_year"],
                pyq_set=item["pyq_set"],
                ideal_solution=item["ideal_solution"],
                is_active=True
            )
            db.add(q)
            inserted += 1

    db.commit()
    db.close()
    print(f"Ingestion complete: {inserted} new questions inserted, {updated} updated.")

if __name__ == "__main__":
    seed_database()