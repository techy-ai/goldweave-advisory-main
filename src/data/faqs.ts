export type Faq = { q: string; a: string; category: string };

export const faqCategories = [
  "GST",
  "Income Tax",
  "Investments",
  "Insurance",
  "Business Advisory",
] as const;

export const faqs: Faq[] = [
  {
    category: "GST",
    q: "Who needs to register for GST?",
    a: "Businesses with turnover above ₹40L (goods) or ₹20L (services), and anyone doing inter-state supply, e-commerce or reverse charge transactions.",
  },
  {
    category: "GST",
    q: "What is the difference between GSTR-1 and GSTR-3B?",
    a: "GSTR-1 reports outward supplies (sales), GSTR-3B is the summary return for tax payment. Both are mandatory monthly/quarterly.",
  },
  {
    category: "GST",
    q: "Can I claim ITC on all purchases?",
    a: "Only on purchases used for business, supported by valid tax invoices, and reflected in your GSTR-2B.",
  },
  {
    category: "GST",
    q: "What is the composition scheme?",
    a: "A simplified scheme for businesses with turnover up to ₹1.5 Cr — fixed tax rate, quarterly returns, but no ITC.",
  },
  {
    category: "Income Tax",
    q: "What is the last date to file ITR?",
    a: "Typically 31st July for individuals (non-audit) and 31st October for audit cases. Late filing attracts penalty up to ₹5,000.",
  },
  {
    category: "Income Tax",
    q: "Should I choose old or new tax regime?",
    a: "Depends on your deductions. If you claim 80C, 80D, HRA, home loan interest etc., old regime usually wins. We compute both and recommend.",
  },
  {
    category: "Income Tax",
    q: "What if I receive an income tax notice?",
    a: "Don't panic. Share it with us — we respond on the portal within the timeline. Most notices are routine queries.",
  },
  {
    category: "Income Tax",
    q: "How is capital gains taxed?",
    a: "Short term (under 1 yr equity / 2 yr property) at slab/15%, long term at 12.5% with indexation benefits for property.",
  },
  {
    category: "Investments",
    q: "Are direct mutual funds better than regular?",
    a: "Direct plans have lower expense ratio, but regular plans come with advisory and rebalancing. Net returns depend on your discipline.",
  },
  {
    category: "Investments",
    q: "How much should I invest in equity?",
    a: "A common rule: (100 − your age)% in equity. We refine based on goals and risk tolerance.",
  },
  {
    category: "Investments",
    q: "Are ELSS funds tax-saving?",
    a: "Yes — eligible for 80C up to ₹1.5L with a 3-year lock-in. They also offer equity-linked growth potential.",
  },
  {
    category: "Insurance",
    q: "How much term insurance do I need?",
    a: "Roughly 15–20× your annual income, adjusted for liabilities (home loan), goals (child education) and existing assets.",
  },
  {
    category: "Insurance",
    q: "Is health insurance enough from my employer?",
    a: "Not usually. Always have a personal family floater of at least ₹10L to protect against job change or hospital cost inflation.",
  },
  {
    category: "Insurance",
    q: "What is the right age to buy term insurance?",
    a: "As early as possible — premiums lock in at the entry age and stay flat for the entire policy term.",
  },
  {
    category: "Business Advisory",
    q: "When should a startup hire a CA?",
    a: "From day one — for entity setup, founder agreements and compliance. A wrong start costs 10× to fix later.",
  },
  {
    category: "Business Advisory",
    q: "Do you provide virtual CFO services?",
    a: "Yes — monthly MIS, cashflow forecasts, board reports and investor decks for growth-stage SMEs.",
  },
  {
    category: "Business Advisory",
    q: "Can you help with funding readiness?",
    a: "We prepare data rooms, financial models, valuation notes and assist in due diligence with VCs and banks.",
  },
];
