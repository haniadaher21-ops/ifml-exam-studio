const EXAM_DATE = "2026-02-23T09:00:00";

const MODULES = [
  {
    id: "course-frame",
    title: "Course Frame and Core Concepts",
    summary:
      "Understand how monetary law, financial law, and cross-border legal structures fit together.",
    keyPoints: [
      "Monetary law covers legal basis of money, legal tender, and monetary policy authority.",
      "Financial law spans banking, securities, insurance, institutional regulation, and protection rules.",
      "International dimension: money and regulation operate across domestic, regional, and global levels.",
      "Lex monetae matters in private contracts and cross-border debt payments."
    ]
  },
  {
    id: "money",
    title: "Money: Functions and Legal Meaning",
    summary:
      "Master the legal framing of money, legal tender, state theory, and nominalism.",
    keyPoints: [
      "Core functions: medium of exchange, means of payment, unit of account, store of value.",
      "Law often treats money narrowly as currency rather than all monetary assets.",
      "Legal tender is what a jurisdiction accepts as satisfactory payment of debts.",
      "Nominalism: obligations stay in nominal currency terms despite external value shifts.",
      "Currency competition can challenge central bank control over money creation."
    ]
  },
  {
    id: "sources",
    title: "Legal Sources Regulating Money",
    summary:
      "Use public international law sources with UN institutional roles and soft-law layering.",
    keyPoints: [
      "Classic sources: treaties, custom, general principles, and subsidiary means.",
      "ICJ Article 38 is a starting list but not exhaustive in practice.",
      "UNGA processes can support treaty development and custom formation.",
      "UNSC Chapter VII decisions bind states (UN Charter Article 25).",
      "UN Charter Article 103 gives Charter obligations priority over conflicting treaties.",
      "Regulation is layered: domestic law, EU/regional law, and soft-law standards."
    ]
  },
  {
    id: "sovereignty",
    title: "Monetary Sovereignty and Lex Monetae",
    summary:
      "Differentiate legal sovereignty from effective sovereignty and identify practical limits.",
    keyPoints: [
      "Legal sovereignty: right to issue and regulate national currency.",
      "Effective sovereignty: real policy capacity to achieve economic goals.",
      "PCIJ 1929 supports state entitlement to regulate its currency.",
      "Lex monetae: issuing jurisdiction defines currency identity and nominal value.",
      "Limits arise through consent (e.g., EMU), IMF obligations, and market confidence shocks."
    ]
  },
  {
    id: "central-banks",
    title: "Central Banks, Independence, and Control",
    summary:
      "Cover central bank functions, accountability design, and ECB/ESCB treaty tasks.",
    keyPoints: [
      "Functions include payment system settlement, monetary policy, reserves, and LOLR.",
      "Inflation targeting has been a leading framework since the late 1980s.",
      "Rate channel: higher rates reduce credit demand; lower rates stimulate borrowing.",
      "Post-2008 tension: price stability objectives versus financial stability risks.",
      "Independence reduces short-term political pressure but requires accountability tools.",
      "EU judicial review uses a deferential manifest-error test plus a duty to state reasons.",
      "ECB/ESCB references: TFEU Articles 127, 128, 138, 219, and 296."
    ]
  },
  {
    id: "ims-imf",
    title: "International Monetary System and IMF",
    summary:
      "Track evolution from Bretton Woods to modern surveillance, conditionality, and soft governance.",
    keyPoints: [
      "Bretton Woods created treaty-based order via IMF Articles (1944/1945).",
      "Par value regime tied values to gold or the US dollar reference value.",
      "Triffin dilemma and Gresham's Law explain reserve tensions and gold-dollar instability.",
      "1971 ended dollar-gold backing; SDR emerged as supplementary reserve asset.",
      "Second Amendment expanded members' exchange arrangement choices.",
      "IMF roles: cooperation, stability, BOP support, surveillance, technical assistance, conditionality.",
      "Article VIII targets current-account convertibility, not equivalent capital-account control."
    ]
  }
];

const FLASHCARDS = [
  { front: "What is lex monetae?", back: "The issuing state's law determines the legal identity and nominal value of its currency." },
  { front: "What is nominalism in monetary obligations?", back: "Debt is discharged in nominal currency terms regardless of external value fluctuations." },
  { front: "Name 4 classic public international law sources.", back: "Treaties, custom, general principles, and subsidiary means (judicial decisions/writings)." },
  { front: "Why is ICJ Article 38 often called non-exhaustive?", back: "It is a baseline list, but practice recognizes broader norm development processes." },
  { front: "What does UN Charter Article 25 do?", back: "Makes UN Security Council Chapter VII decisions binding on UN members." },
  { front: "What does UN Charter Article 103 do?", back: "UN Charter obligations prevail over conflicting obligations from other treaties." },
  { front: "Legal vs effective monetary sovereignty?", back: "Legal = formal right to issue/regulate currency; effective = practical policy capacity." },
  { front: "One major risk that weakens monetary sovereignty?", back: "Loss of confidence leading to currency substitution and reduced policy control." },
  { front: "Core objective of many central banks?", back: "Price stability." },
  { front: "Main monetary policy transmission tool?", back: "Policy interest rate set by the central bank." },
  { front: "What is LOLR?", back: "Lender of Last Resort support: emergency liquidity to prevent systemic contagion." },
  { front: "Post-2008 policy tension?", back: "Balancing inflation targets with financial-stability and risk-taking concerns." },
  { front: "What did Bretton Woods establish?", back: "A treaty-based international monetary order centered on IMF Articles." },
  { front: "Triffin dilemma in one line", back: "Reserve-currency deficits support global liquidity but undermine confidence in convertibility." },
  { front: "Gresham's Law in this context", back: "At fixed parity, overvalued ('bad') money displaces undervalued ('good') money in circulation/reserves." },
  { front: "IMF Article VIII focus", back: "Avoid restrictions on current payments and transfers (current-account convertibility)." }
];

const QUIZ_QUESTIONS = [
  {
    id: 1,
    topic: "Money",
    prompt: "Which is NOT one of the classic functions of money in your worksheet?",
    choices: ["Unit of account", "Store of value", "Source of constitutional legitimacy", "Means of payment"],
    answer: 2,
    explanation: "The listed functions are medium of exchange, means of payment, unit of account, and store of value."
  },
  {
    id: 2,
    topic: "Money",
    prompt: "Legal tender is best defined as:",
    choices: [
      "Any digital asset accepted by market participants",
      "The form of money recognized by law as satisfactory payment of debt",
      "Only central bank reserve balances",
      "Only international reserve assets"
    ],
    answer: 1,
    explanation: "Legal tender is the legally recognized payment form for debts in a jurisdiction."
  },
  {
    id: 3,
    topic: "Sources",
    prompt: "The ICJ Article 38 source list is treated in class as:",
    choices: ["Exhaustive and closed", "Only relevant in wartime", "A starting point but not exhaustive", "Legally obsolete"],
    answer: 2,
    explanation: "Your worksheet states Article 38 is commonly used as a start, not an exhaustive list."
  },
  {
    id: 4,
    topic: "Sources",
    prompt: "Under UN Charter Article 103:",
    choices: [
      "Domestic constitutional law always prevails",
      "Regional law always prevails",
      "UN Charter obligations prevail over conflicting treaty obligations",
      "Security Council resolutions are advisory only"
    ],
    answer: 2,
    explanation: "Article 103 gives priority to UN Charter obligations."
  },
  {
    id: 5,
    topic: "Sovereignty",
    prompt: "Effective monetary sovereignty mainly refers to:",
    choices: [
      "Historical central bank origins",
      "Ability to use governance tools to reach policy goals",
      "Judicial review standards",
      "Membership in the UN Security Council"
    ],
    answer: 1,
    explanation: "Effective sovereignty is practical policy capacity, not just formal legal entitlement."
  },
  {
    id: 6,
    topic: "Sovereignty",
    prompt: "Lex monetae means:",
    choices: [
      "The debtor chooses payment currency at maturity",
      "The creditor chooses nominal value retroactively",
      "The issuing jurisdiction defines currency identity and nominal value",
      "The IMF defines all domestic currency values"
    ],
    answer: 2,
    explanation: "Lex monetae allocates this legal authority to the issuing jurisdiction."
  },
  {
    id: 7,
    topic: "Central Banks",
    prompt: "A key reason central bank independence is emphasized is to:",
    choices: [
      "Eliminate all accountability mechanisms",
      "Avoid short-term political pressure on monetary policy",
      "Replace all ministries and regulators",
      "Guarantee fixed exchange rates forever"
    ],
    answer: 1,
    explanation: "Independence aims to insulate monetary policy from short-term political cycles."
  },
  {
    id: 8,
    topic: "Central Banks",
    prompt: "Which pair best describes the policy-rate channel?",
    choices: [
      "Higher rates -> easier credit -> expansion",
      "Lower rates -> tighter credit -> contraction",
      "Higher rates -> more expensive borrowing -> cooling effect",
      "Rates do not affect investment decisions"
    ],
    answer: 2,
    explanation: "Higher policy rates generally reduce borrowing, credit growth, and demand pressures."
  },
  {
    id: 9,
    topic: "Central Banks",
    prompt: "LOLR intervention is primarily designed to:",
    choices: ["Boost stock prices", "Prevent systemic contagion from liquidity stress", "Fix fiscal deficits", "Create new tax revenue"],
    answer: 1,
    explanation: "LOLR support provides emergency liquidity to reduce contagion risk."
  },
  {
    id: 10,
    topic: "Central Banks",
    prompt: "In EU judicial review of ECB technical assessments, courts generally apply:",
    choices: ["Strict scrutiny with no deference", "Manifest-error review with duty to state reasons", "No review at all", "Automatic policy substitution"],
    answer: 1,
    explanation: "The worksheet highlights deferential manifest-error review plus reason-giving obligations."
  },
  {
    id: 11,
    topic: "IMF",
    prompt: "Bretton Woods created:",
    choices: ["An informal gold club", "A treaty-based monetary order via IMF Articles", "A private central bank cartel", "Only regional payment rules"],
    answer: 1,
    explanation: "The IMF Articles established a treaty-based postwar monetary framework."
  },
  {
    id: 12,
    topic: "IMF",
    prompt: "Triffin dilemma captures tension between:",
    choices: [
      "Domestic inflation and unemployment",
      "Global demand for reserve currency and confidence in its convertibility",
      "Private and public international law",
      "Trade and migration rules"
    ],
    answer: 1,
    explanation: "Supplying global reserves through deficits can weaken confidence in reserve-currency backing."
  },
  {
    id: 13,
    topic: "IMF",
    prompt: "After the IMF Second Amendment, members' exchange arrangements:",
    choices: [
      "Were fixed permanently to gold",
      "Were centrally imposed by the IMF in all cases",
      "Allowed broader member choice under amended Article IV",
      "Required UN Security Council approval"
    ],
    answer: 2,
    explanation: "The amendment reduced IMF substantive control over arrangement choices."
  },
  {
    id: 14,
    topic: "IMF",
    prompt: "IMF Article VIII is primarily linked to:",
    choices: ["Capital account liberalization mandates", "Current account convertibility obligations", "Public debt ceilings", "Regional reserve pooling"],
    answer: 1,
    explanation: "Article VIII focuses on current payments/transfers rather than equivalent capital-account control."
  },
  {
    id: 15,
    topic: "Architecture",
    prompt: "The worksheet describes international monetary/financial governance as:",
    choices: ["Fully codified with hard enforcement", "Informal and soft-law heavy in a decentered space", "Purely domestic", "No role for standards"],
    answer: 1,
    explanation: "It emphasizes informality and soft-law implementation dynamics."
  }
];

const EXAM_PROMPTS = [
  "Define monetary sovereignty (legal and effective) and explain constraints from EMU, IMF, and currency substitution.",
  "Explain lex monetae, state theory of money, and nominalism in cross-border debt disputes with PCIJ 1929 context.",
  "Explain legal sources of public international law and why Article 38 ICJ is not exhaustive; include UNGA and UNSC roles.",
  "Explain central bank functions: payment systems, policy transmission, LOLR, supervision, reserves, and exchange operations.",
  "Explain inflation targeting and the post-2008 tension between price stability and financial stability.",
  "Explain ECB/ESCB tasks and objectives using TFEU labels 127, 128, 138, 219, and 296.",
  "Explain control mechanisms for central banks and EU judicial review using manifest-error and duty-to-state-reasons standards.",
  "Explain Bretton Woods, par values, Triffin dilemma, Gresham's Law, SDR, the 1971 break, and the Second Amendment.",
  "Explain IMF purposes under Article I and operational tools under Articles IV, V, and VIII.",
  "Explain why international monetary architecture is described as informal and identify private international finance risks."
];
