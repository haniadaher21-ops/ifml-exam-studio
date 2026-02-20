const EXAM_DATE = "2026-02-23T09:00:00";

const MODULES = [
  {
    id: "money",
    title: "Money and Legal Characterization",
    summary: "Functions of money, legal tender doctrine, nominalism, state theory, and currency competition.",
    keyPoints: [
      "Money functions: medium of exchange, means of payment, unit of account, store of value.",
      "Legal systems often use a narrower definition of money as currency.",
      "Legal tender defines legally satisfactory discharge for debt payment.",
      "State theory: issuing jurisdiction defines what counts as money and nominal value.",
      "Nominalism allocates exchange-value fluctuation risk inside nominal currency terms."
    ]
  },
  {
    id: "sources",
    title: "Sources and Institutional Hierarchy",
    summary: "Treaty/custom/general principles, Article 38 non-exhaustiveness, UNGA and UNSC legal effects.",
    keyPoints: [
      "Article 38 ICJ list is a baseline, not a closed system.",
      "UNGA processes can feed treaty interpretation and custom formation.",
      "UNSC Chapter VII decisions are binding under Article 25 UN Charter.",
      "Article 103 UN Charter resolves normative conflict in favor of Charter obligations.",
      "Regulation is layered across domestic, regional, and international levels."
    ]
  },
  {
    id: "sovereignty",
    title: "Monetary Sovereignty and Lex Monetae",
    summary: "Legal sovereignty, effective sovereignty, doctrinal anchors, and erosion mechanisms.",
    keyPoints: [
      "Legal sovereignty: right to issue and regulate currency.",
      "Effective sovereignty: practical policy capability under market and legal constraints.",
      "PCIJ 1929 supports state authority over currency regulation.",
      "Lex monetae attaches currency identity and nominal value to issuing law.",
      "Confidence collapse and currency substitution can hollow out sovereignty in practice."
    ]
  },
  {
    id: "central-banks",
    title: "Central Banks and Governance",
    summary: "Functions, independence, accountability, judicial review, and ECB/ESCB treaty architecture.",
    keyPoints: [
      "Core functions: payment systems, policy rates, reserves, LOLR, oversight.",
      "Price stability is central; some systems include employment dimensions.",
      "Post-2008 expanded macroprudential/financial-stability focus.",
      "Independence requires legal accountability channels and reason-giving.",
      "EU review uses manifest-error deference while requiring a robust statement of reasons."
    ]
  },
  {
    id: "imf-ims",
    title: "International Monetary System and IMF",
    summary: "Bretton Woods design, collapse dynamics, IMF evolution, surveillance, and conditionality.",
    keyPoints: [
      "Bretton Woods institutionalized a treaty-based monetary order.",
      "Triffin dilemma and Gresham pressures destabilized gold-dollar convertibility.",
      "1971 break and Second Amendment altered exchange arrangement governance.",
      "IMF roles: surveillance, technical assistance, financing with conditionality.",
      "Article VIII emphasizes current-account convertibility over equivalent capital-account mandate."
    ]
  },
  {
    id: "architecture",
    title: "Global Financial Architecture and Soft Law",
    summary: "Informal governance, standard-setting pathways, and private-finance systemic risks.",
    keyPoints: [
      "International finance governance is often decentralized and soft-law heavy.",
      "Standards migrate from expert/private fora into domestic binding law.",
      "Basel-style norms shape prudential law via implementation chains.",
      "Private international finance can generate systemic risks outside hard treaty control.",
      "Institutional coordination gaps matter for crisis prevention and containment."
    ]
  }
];

const DEEP_DIVES = [
  {
    topic: "Money",
    title: "Nominalism, Valorism, and Debt Stability",
    summary: "Nominalism dominates many systems, but inflation/devaluation stress tests fairness and risk allocation.",
    doctrine: [
      "Nominalism protects certainty and transaction speed by preserving nominal denomination.",
      "Valorist arguments seek value-adjusted outcomes under severe inflation shocks.",
      "Cross-border debt litigation often turns on chosen currency and governing law interaction."
    ],
    pitfalls: [
      "Confusing exchange-rate loss with automatic debt revaluation rights.",
      "Ignoring lex monetae before analyzing contractual clauses.",
      "Treating crypto adoption as a legal-tender displacement without statutory basis."
    ],
    examMove: "State the default nominalist baseline, then discuss exception pressure under extreme currency events."
  },
  {
    topic: "Sources",
    title: "Article 38 and Normative Growth",
    summary: "Use Article 38 as structure, but show how institutions and practice feed normative development.",
    doctrine: [
      "Treaty law remains anchor but custom and principles are dynamic.",
      "UNGA processes may evidence opinio juris/state practice pathways.",
      "UNSC binding outputs create obligations tied to mandate-specific contexts."
    ],
    pitfalls: [
      "Presenting UNGA resolutions as automatically binding.",
      "Claiming UNSC creates universal abstract law beyond mandate.",
      "Skipping hierarchy analysis when Article 103 is in play."
    ],
    examMove: "Map source hierarchy first, then test legal effect instrument-by-instrument."
  },
  {
    topic: "Sovereignty",
    title: "Legal vs Effective Monetary Sovereignty",
    summary: "Formal rights may remain intact while policy autonomy shrinks under external commitments and market behavior.",
    doctrine: [
      "Legal sovereignty concerns currency issuance/regulation entitlement.",
      "Effective sovereignty concerns real control over outcomes.",
      "EMU participation and IMF disciplines demonstrate consent-based constraints."
    ],
    pitfalls: [
      "Treating sovereignty as binary instead of spectrum.",
      "Ignoring confidence and substitution dynamics.",
      "Missing distinction between legal authority and policy capacity."
    ],
    examMove: "Define both dimensions, then test each against one legal and one market constraint."
  },
  {
    topic: "Central Banks",
    title: "Independence, Accountability, and Judicial Review",
    summary: "Independence is governance design, not immunity: democratic control and legal review still apply.",
    doctrine: [
      "Operational independence buffers short-term political interference.",
      "Accountability mechanisms include reporting, hearings, publication duties.",
      "EU review standard is deferential but requires a reasoned analytical record."
    ],
    pitfalls: [
      "Assuming independence means absence of institutional checks.",
      "Overstating court substitution for technical policy judgments.",
      "Reducing LOLR analysis to liquidity only without moral hazard."
    ],
    examMove: "Pair any independence claim with at least two accountability channels and review standard."
  },
  {
    topic: "IMF",
    title: "From Bretton Woods to Post-Convertibility Governance",
    summary: "The system moved from par value legal constraints to broader member choice plus surveillance-heavy discipline.",
    doctrine: [
      "Original Articles anchored par values and IMF legal oversight.",
      "Triffin and 1971 break exposed convertibility limits.",
      "Second Amendment shifted toward surveillance and softer coordination tools."
    ],
    pitfalls: [
      "Confusing current-account obligations with full capital-account liberalization mandate.",
      "Treating sanctions provisions as routine enforcement in practice.",
      "Missing institutional division between IMF short-term stabilization and World Bank long-term development."
    ],
    examMove: "Use timeline structure: design, stress, break, amendment, contemporary governance."
  },
  {
    topic: "Architecture",
    title: "Soft Law Transmission and Systemic Risk",
    summary: "Standards often travel from non-binding frameworks into binding domestic regulation.",
    doctrine: [
      "Standard-setting networks influence domestic legal drafting.",
      "Implementation heterogeneity creates regulatory arbitrage risks.",
      "Private cross-border finance can outpace hard-law institutional safeguards."
    ],
    pitfalls: [
      "Calling all soft law legally irrelevant.",
      "Ignoring assimilation process from private practice to public rule.",
      "Failing to discuss enforcement asymmetry across jurisdictions."
    ],
    examMove: "Explain the pipeline: private norm, expert standard, domestic transposition, supervisory enforcement."
  }
];

const FLASHCARDS = [
  { front: "Define lex monetae", back: "The law of the issuing state determines the legal identity and nominal value of the currency." },
  { front: "State theory of money", back: "Money exists legally because the state recognizes and structures it through law." },
  { front: "Nominalism", back: "Debt obligations are discharged in nominal currency units, regardless of external value changes." },
  { front: "Legal tender", back: "Money recognized by law as valid discharge for debts in the jurisdiction." },
  { front: "Article 38 ICJ: exhaustive?", back: "No. It is a classic framework and practical starting point, not a closed catalog." },
  { front: "UN Charter Article 25", back: "UN members must carry out Security Council decisions, including Chapter VII obligations." },
  { front: "UN Charter Article 103", back: "Charter obligations prevail over conflicting obligations under other international agreements." },
  { front: "Legal vs effective sovereignty", back: "Legal sovereignty is formal right; effective sovereignty is practical policy capacity." },
  { front: "PCIJ 1929 relevance", back: "Supports the principle that states may regulate their own currency." },
  { front: "Currency substitution risk", back: "Low confidence in domestic currency can shift usage to foreign currencies/assets." },
  { front: "Policy-rate transmission", back: "Higher rates generally cool credit demand; lower rates stimulate borrowing and demand." },
  { front: "LOLR", back: "Emergency central bank liquidity support to contain systemic contagion during stress." },
  { front: "Post-2008 central bank tension", back: "Balancing price stability with financial stability and macroprudential concerns." },
  { front: "ECB primary objective", back: "Price stability under Article 127(1) TFEU." },
  { front: "Article 296(2) TFEU", back: "EU acts must state reasons; central for reviewing technical decisions." },
  { front: "Bretton Woods", back: "Treaty-based postwar monetary order created through IMF Articles." },
  { front: "Triffin dilemma", back: "Reserve-currency liquidity needs require deficits that can undermine confidence in convertibility." },
  { front: "Gresham's Law", back: "At fixed parity, overvalued money displaces undervalued money in circulation/reserves." },
  { front: "SDR", back: "Special Drawing Rights: supplementary international reserve asset created by the IMF." },
  { front: "IMF Article VIII core", back: "Avoid restrictions on current payments and transfers (current-account convertibility)." },
  { front: "Conditionality", back: "Policy commitments linked to access to IMF financing resources." },
  { front: "Soft law in finance", back: "Non-binding standards that shape binding domestic/regional rules through implementation." }
];

const FACT_BANK = [
  { topic: "Money", concept: "Function", correct: "Money serves as medium of exchange, means of payment, unit of account, and store of value.", wrong: ["Money is only legal tender and nothing else.", "Money is only a macroprudential tool.", "Money must be backed by gold to be lawful."], article: "" },
  { topic: "Money", concept: "Legal tender", correct: "Legal tender is the legally recognized form of satisfactory debt payment.", wrong: ["Legal tender means any asset accepted by one merchant.", "Legal tender means only central bank reserves.", "Legal tender requires IMF approval."], article: "" },
  { topic: "Money", concept: "Nominalism", correct: "Nominalism preserves obligations in nominal currency units despite exchange-value movements.", wrong: ["Nominalism automatically indexes all debts to inflation.", "Nominalism requires payment in gold.", "Nominalism eliminates governing law disputes."], article: "" },
  { topic: "Money", concept: "Currency competition", correct: "Currency competition challenges exclusive reliance on state-issued currency for exchange/payment.", wrong: ["Currency competition is prohibited by all domestic legal systems.", "Currency competition only concerns tax law.", "Currency competition removes the need for contract law."], article: "" },

  { topic: "Sources", concept: "ICJ Article 38", correct: "Article 38 is a baseline framework for sources, commonly treated as non-exhaustive.", wrong: ["Article 38 excludes custom from legal reasoning.", "Article 38 makes all UNGA resolutions binding treaties.", "Article 38 applies only inside domestic law."], article: "Article 38 ICJ" },
  { topic: "Sources", concept: "UNGA role", correct: "UNGA processes can inform treaty-making and contribute evidence to custom formation.", wrong: ["UNGA adopts automatically binding global criminal statutes.", "UNGA replaces the ICJ in source hierarchy.", "UNGA resolutions always override treaties."], article: "" },
  { topic: "Sources", concept: "UNSC authority", correct: "Security Council Chapter VII decisions can bind all member states.", wrong: ["Security Council decisions are never binding.", "Only regional organizations can issue binding peace measures.", "Binding force depends on domestic parliamentary ratification only."], article: "UN Charter Art. 25" },
  { topic: "Sources", concept: "Norm conflict", correct: "UN Charter obligations prevail over conflicting treaty obligations.", wrong: ["Bilateral treaties always override the Charter.", "Private contracts prevail over Charter duties.", "Article 103 only applies to trade agreements."], article: "UN Charter Art. 103" },

  { topic: "Sovereignty", concept: "Definition", correct: "Legal monetary sovereignty is the state's right to issue and regulate its currency.", wrong: ["Monetary sovereignty means no external economic effects.", "Monetary sovereignty only exists in gold-standard regimes.", "Monetary sovereignty eliminates all treaty commitments."], article: "" },
  { topic: "Sovereignty", concept: "Effective sovereignty", correct: "Effective sovereignty measures practical policy capacity under accepted constraints.", wrong: ["Effective sovereignty equals territorial size.", "Effective sovereignty is irrelevant in monetary law.", "Effective sovereignty is identical to constitutional symbolism."], article: "" },
  { topic: "Sovereignty", concept: "Lex monetae", correct: "Lex monetae allocates currency identity and nominal valuation to issuing law.", wrong: ["Lex monetae lets creditors redefine currency terms unilaterally.", "Lex monetae is a WTO dispute doctrine.", "Lex monetae abolishes contractual choice-of-law clauses."], article: "" },
  { topic: "Sovereignty", concept: "Erosion mechanisms", correct: "Confidence shocks and currency substitution can weaken effective control despite formal authority.", wrong: ["Effective sovereignty rises automatically with inflation.", "Sovereignty erosion is impossible under international law.", "Exchange controls always increase confidence."], article: "" },

  { topic: "Central Banks", concept: "Core objective", correct: "Price stability is the leading monetary-policy objective in many central bank frameworks.", wrong: ["Price stability is unrelated to monetary policy.", "Price stability requires zero growth permanently.", "Price stability is purely a private-law concept."], article: "" },
  { topic: "Central Banks", concept: "Policy rate", correct: "The policy rate influences economy-wide borrowing costs and credit conditions.", wrong: ["Policy rates only affect court procedure.", "Policy rates do not affect investment decisions.", "Policy rates are set by private banks without public mandate."], article: "" },
  { topic: "Central Banks", concept: "LOLR", correct: "LOLR provides extraordinary liquidity to prevent contagion when market liquidity freezes.", wrong: ["LOLR permanently replaces private funding.", "LOLR is equivalent to fiscal taxation.", "LOLR has no moral-hazard implications."], article: "" },
  { topic: "Central Banks", concept: "Independence", correct: "Independence is designed to protect policy from short-term political pressure while preserving accountability.", wrong: ["Independence means no reporting obligations.", "Independence removes judicial scrutiny entirely.", "Independence requires abolishing legislatures."], article: "" },
  { topic: "Central Banks", concept: "EU review", correct: "EU courts apply a manifest-error standard while requiring careful reasoning and adequate statement of reasons.", wrong: ["EU courts never review ECB acts.", "EU courts substitute policy choices freely in all technical matters.", "Review in EU law ignores Article 296(2) TFEU."], article: "Article 296(2) TFEU" },
  { topic: "Central Banks", concept: "ECB tasks", correct: "Article 127(2) TFEU includes policy implementation, FX operations, reserves management, and payment systems support.", wrong: ["Article 127(2) only regulates private contract damages.", "ECB has no role in payment systems.", "ECB tasks are defined only by IMF Articles."], article: "Article 127(2) TFEU" },

  { topic: "IMF", concept: "Bretton Woods", correct: "Bretton Woods created treaty-based monetary governance through IMF Articles.", wrong: ["Bretton Woods created only an informal advisory forum.", "Bretton Woods abolished exchange regimes entirely.", "Bretton Woods established a private central bank union."], article: "" },
  { topic: "IMF", concept: "Par value", correct: "Original IMF framework tied par values to gold or the 1944 U.S. dollar reference.", wrong: ["Par value system required floating rates for all members.", "Par values were set by domestic courts.", "Par values were unrelated to IMF legal design."], article: "Original Article IV" },
  { topic: "IMF", concept: "Triffin dilemma", correct: "Global reserve demand required deficits that eventually undermined confidence in convertibility.", wrong: ["Triffin predicted immediate hyperinflation everywhere.", "Triffin denied reserve-currency dynamics.", "Triffin focused only on commercial contract law."], article: "" },
  { topic: "IMF", concept: "Second Amendment", correct: "Second Amendment widened member choice over exchange arrangements and reduced IMF substantive control.", wrong: ["Second Amendment restored strict gold convertibility.", "Second Amendment eliminated IMF surveillance.", "Second Amendment banned SDR use."], article: "Amended Article IV" },
  { topic: "IMF", concept: "Article I purposes", correct: "Article I includes cooperation, trade expansion, stability, payment-system support, and BOP adjustment.", wrong: ["Article I is limited to commodity tariffs.", "Article I forbids temporary use of IMF resources.", "Article I requires universal fixed exchange rates."], article: "Article I IMF" },
  { topic: "IMF", concept: "Article VIII", correct: "Article VIII focuses on avoiding restrictions on current payments/transfers.", wrong: ["Article VIII imposes full capital-account openness.", "Article VIII defines ECB judicial review.", "Article VIII is a UN Security Council article."], article: "Article VIII IMF" },

  { topic: "Architecture", concept: "Soft law", correct: "Soft-law standards shape domestic regulation through implementation and supervisory assimilation.", wrong: ["Soft law has no practical policy effect.", "Soft law automatically overrides constitutions.", "Soft law applies only to insurance marketing."], article: "" },
  { topic: "Architecture", concept: "De-centered governance", correct: "Global finance regulation often operates through decentralized networks, standards, and layered authorities.", wrong: ["Global finance is governed by one single world statute.", "Domestic law has no role in implementation.", "Private actors cannot influence standard formation."], article: "" },
  { topic: "Architecture", concept: "Private finance risk", correct: "Private international finance can generate systemic risks not fully captured by hard treaty law.", wrong: ["Private finance risks are legally impossible.", "Only public debt can create systemic instability.", "Treaty law already codifies every market innovation."], article: "" },
  { topic: "Architecture", concept: "Institutional split", correct: "IMF focuses on short-term BOP stabilization; World Bank/IBRD focuses on long-term development finance.", wrong: ["IMF and World Bank have identical mandates.", "World Bank supervises all exchange-rate arrangements.", "IMF only handles private securities listing."], article: "" }
];

function rotateChoices(correct, wrong, seed) {
  const options = [correct, ...wrong];
  const step = seed % options.length;
  const rotated = options.slice(step).concat(options.slice(0, step));
  return {
    choices: rotated,
    answer: rotated.indexOf(correct)
  };
}

function generateQuestions() {
  const items = [];
  FACT_BANK.forEach((fact, idx) => {
    const q1 = rotateChoices(fact.correct, fact.wrong, idx);
    items.push({
      id: `F-${idx}-A`,
      topic: fact.topic,
      difficulty: idx % 3 === 0 ? "medium" : "core",
      prompt: `Which statement best captures ${fact.concept.toLowerCase()} in IFML?`,
      choices: q1.choices,
      answer: q1.answer,
      explanation: fact.article ? `Anchor: ${fact.article}. ${fact.correct}` : fact.correct
    });

    const q2 = rotateChoices(fact.correct, fact.wrong, idx + 1);
    items.push({
      id: `F-${idx}-B`,
      topic: fact.topic,
      difficulty: "advanced",
      prompt: `In exam analysis, which proposition should be treated as doctrinally strongest for ${fact.concept.toLowerCase()}?`,
      choices: q2.choices,
      answer: q2.answer,
      explanation: `Best answer aligns with worksheet framing: ${fact.correct}`
    });

    const q3 = rotateChoices(fact.correct, fact.wrong, idx + 2);
    items.push({
      id: `F-${idx}-C`,
      topic: fact.topic,
      difficulty: "application",
      prompt: `A marker asks for a concise legal proposition on ${fact.concept.toLowerCase()}. Choose the most accurate line.`,
      choices: q3.choices,
      answer: q3.answer,
      explanation: fact.article ? `Use this line and cite ${fact.article} where relevant.` : `Use this line as your baseline proposition.`
    });
  });

  return items;
}

const QUESTION_BANK = generateQuestions();

const CASE_LABS = [
  {
    title: "Debt Redenomination Shock",
    topic: "Sovereignty",
    facts: "State A redenominates domestic-law sovereign bonds from old currency to new currency after severe inflation. Foreign bondholders sue in another jurisdiction demanding payment in original denomination.",
    tasks: [
      "Identify which obligations are likely governed by lex monetae.",
      "Separate legal sovereignty arguments from effective-sovereignty concerns.",
      "Address nominalism and investor expectation arguments."
    ],
    modelPoints: [
      "Start with governing law and currency-of-account clause.",
      "Lex monetae supports issuing state's authority over currency identity and nominal value.",
      "Cross-border enforcement outcome depends on forum conflict rules and contract drafting."
    ]
  },
  {
    title: "UNSC Sanctions vs Prior Treaty",
    topic: "Sources",
    facts: "A state invokes an old bilateral treaty to justify a payment channel that appears inconsistent with a later UNSC Chapter VII sanctions resolution.",
    tasks: [
      "Map hierarchy between Charter obligations and treaty obligations.",
      "Assess Article 25 and Article 103 relevance.",
      "Explain limits of UNSC law-making characterization."
    ],
    modelPoints: [
      "Chapter VII obligations are binding under Article 25.",
      "Article 103 gives Charter obligations priority over conflicting treaty duties.",
      "Council creates binding obligations in context, not abstract universal legislation."
    ]
  },
  {
    title: "LOLR and Moral Hazard",
    topic: "Central Banks",
    facts: "A major bank faces rapid deposit outflows. The central bank considers emergency lending while inflation remains above target.",
    tasks: [
      "Frame LOLR rationale and contagion logic.",
      "Discuss inflation-stability tradeoff and policy communication.",
      "Identify accountability and review dimensions in a public-law setting."
    ],
    modelPoints: [
      "LOLR aims to stabilize system liquidity and avoid panic spillovers.",
      "Crisis action should be temporary and condition-based to limit moral hazard.",
      "Reason-giving and institutional accountability remain essential."
    ]
  },
  {
    title: "Current vs Capital Account Dispute",
    topic: "IMF",
    facts: "State B imposes controls on transfers related to short-term portfolio flows and claims Article VIII permits these restrictions in full.",
    tasks: [
      "Distinguish current-account payments from capital transactions.",
      "State the core Article VIII obligation accurately.",
      "Explain what IMF surveillance can and cannot force in practice."
    ],
    modelPoints: [
      "Article VIII focuses on current payments and transfers.",
      "Capital-account controls are not governed identically under the same mandate.",
      "Surveillance and conditionality tools are influential but formal hard enforcement is limited in practice."
    ]
  },
  {
    title: "Soft-Law Implementation Gap",
    topic: "Architecture",
    facts: "Two jurisdictions both claim Basel alignment, but one transposes standards into strict binding rules while the other issues non-binding supervisory guidance.",
    tasks: [
      "Explain regulation by assimilation.",
      "Analyze comparability and arbitrage concerns.",
      "Connect private standard-setting to public enforcement differences."
    ],
    modelPoints: [
      "Soft law gains force through domestic transposition and supervision.",
      "Divergent implementation creates uneven compliance burdens.",
      "Arbitrage incentives can undermine systemic stability goals."
    ]
  }
];

const EXAM_PROMPTS = {
  short: [
    "Define legal vs effective monetary sovereignty and give one legal limit plus one market limit.",
    "Explain why Article 38 ICJ is used as a framework but not treated as exhaustive.",
    "State the relationship between UN Charter Articles 25 and 103 in sanctions conflicts.",
    "Summarize lex monetae in three lines and connect it to nominalism.",
    "Explain why central bank independence and accountability must be analyzed together.",
    "State one major post-2008 tradeoff in central-bank policy design."
  ],
  long: [
    "Critically assess whether globalization has eroded monetary sovereignty, distinguishing legal sovereignty from effective sovereignty and using IMF/EMU examples.",
    "Compare Bretton Woods legal design with the post-Second-Amendment system, including Triffin, SDR, and surveillance evolution.",
    "Evaluate how soft-law standards become hard obligations through domestic implementation in international finance governance.",
    "Assess central-bank independence in constitutional terms: legitimacy, expertise, democratic control, and judicial review.",
    "Analyze current-account convertibility obligations under Article VIII and their limits in modern capital-market integration."
  ],
  debate: [
    "Argue both sides: 'Soft law is more effective than treaty law in modern financial regulation.'",
    "Argue both sides: 'Central-bank independence is economically necessary but democratically fragile.'",
    "Argue both sides: 'Nominalism should yield under extreme inflation in cross-border sovereign debt cases.'",
    "Argue both sides: 'IMF conditionality is governance through consent rather than coercion.'",
    "Argue both sides: 'Article 103 produces legal clarity but political legitimacy problems.'"
  ]
};
