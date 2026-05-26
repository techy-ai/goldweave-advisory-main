import {
  FileText,
  Receipt,
  Calculator,
  TrendingUp,
  ShieldCheck,
  PiggyBank,
  LineChart,
  Umbrella,
  Wallet,
  Building2,
  BookOpen,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  overview: string;
  benefits: string[];
  process: { title: string; desc: string }[];
  documents: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "gst-registration",
    name: "GST Registration",
    short: "End-to-end GST registration for businesses, freelancers and startups.",
    icon: Receipt,
    overview:
      "We handle complete GST registration with the GSTN portal — from documentation to GSTIN allotment — typically within 5–7 working days.",
    benefits: [
      "Legally compliant business",
      "Input tax credit eligibility",
      "Inter-state sales enabled",
      "Better vendor credibility",
    ],
    process: [
      { title: "Document collection", desc: "Share basic KYC, business proof and bank details." },
      { title: "Application filing", desc: "We file Form REG-01 with digital signatures." },
      { title: "ARN & verification", desc: "Track ARN, respond to clarifications." },
      { title: "GSTIN allotted", desc: "Receive certificate and start invoicing." },
    ],
    documents: [
      "PAN of business/proprietor",
      "Aadhaar card",
      "Address proof",
      "Bank statement / cancelled cheque",
      "Photograph",
      "Rental agreement / NOC",
    ],
    faqs: [
      {
        q: "Is GST registration mandatory?",
        a: "Yes if turnover exceeds ₹40L (goods) / ₹20L (services), or for inter-state supply and e-commerce.",
      },
      { q: "How long does it take?", a: "Usually 5–7 working days once documents are complete." },
    ],
  },
  {
    slug: "gst-return-filing",
    name: "GST Return Filing",
    short: "Monthly, quarterly and annual GST returns filed accurately and on time.",
    icon: FileText,
    overview:
      "We file GSTR-1, GSTR-3B, GSTR-9 and reconcile with GSTR-2B so you never miss credits or pay penalties.",
    benefits: [
      "Zero late fees",
      "Maximum input tax credit",
      "Reconciliation with books",
      "Dedicated account manager",
    ],
    process: [
      { title: "Data sync", desc: "Share sales & purchase data each month." },
      { title: "Reconciliation", desc: "Match books with GSTR-2B." },
      { title: "Filing & payment", desc: "File returns and pay tax." },
      { title: "Reports", desc: "Receive filed acknowledgements." },
    ],
    documents: ["Sales register", "Purchase register", "Bank statements", "Previous returns"],
    faqs: [
      {
        q: "What if I miss a deadline?",
        a: "Late filing attracts ₹50/day late fee plus interest. We ensure timely filing.",
      },
    ],
  },
  {
    slug: "income-tax-filing",
    name: "Income Tax Filing",
    short: "ITR filing for salaried, business, capital gains and NRI clients.",
    icon: Calculator,
    overview:
      "Personalised ITR preparation with maximum legal deductions, e-verification and refund tracking.",
    benefits: [
      "Maximum refund",
      "Old vs new regime analysis",
      "All ITR forms (1–7)",
      "Notice handling support",
    ],
    process: [
      { title: "Document review", desc: "Form 16, capital gains, interest, rental income." },
      { title: "Computation", desc: "Tax computed under both regimes." },
      { title: "Filing & e-verify", desc: "ITR filed and Aadhaar e-verified." },
      { title: "Refund tracking", desc: "We follow up till credit." },
    ],
    documents: [
      "PAN & Aadhaar",
      "Form 16 / 16A",
      "Bank statements",
      "Investment proofs",
      "Capital gains statement",
    ],
    faqs: [
      {
        q: "Old or new regime?",
        a: "Depends on your deductions — we compute both and recommend the lower tax option.",
      },
    ],
  },
  {
    slug: "tax-planning",
    name: "Tax Planning",
    short: "Strategic year-round tax planning to legally minimise your tax outgo.",
    icon: TrendingUp,
    overview:
      "Holistic tax planning aligned with your income, investments and life goals — under 80C, 80D, NPS, HRA, capital gains exemptions and more.",
    benefits: [
      "Lower tax liability",
      "Goal-aligned investments",
      "Quarterly review",
      "Long-term wealth",
    ],
    process: [
      { title: "Income analysis", desc: "Map all income sources." },
      { title: "Strategy design", desc: "Personalised plan across instruments." },
      { title: "Execution support", desc: "Help with investments & paperwork." },
      { title: "Annual review", desc: "Refine each financial year." },
    ],
    documents: ["Income summary", "Existing investments", "Loan statements", "Insurance policies"],
    faqs: [
      {
        q: "When should I start tax planning?",
        a: "At the start of the financial year — April — not in March.",
      },
    ],
  },
  {
    slug: "tds-filing",
    name: "TDS Filing",
    short: "Quarterly TDS returns (24Q, 26Q, 27Q) with Form 16/16A generation.",
    icon: ShieldCheck,
    overview:
      "We handle TDS deduction, deposit, return filing and certificate generation for employers and businesses.",
    benefits: [
      "Zero TRACES defaults",
      "On-time Form 16",
      "Lower deduction certificates",
      "Compliance peace of mind",
    ],
    process: [
      { title: "TDS computation", desc: "Calculate deduction per section." },
      { title: "Challan payment", desc: "Pay via authorised banks." },
      { title: "Return filing", desc: "Quarterly e-TDS returns." },
      { title: "Certificate issue", desc: "Form 16/16A generated." },
    ],
    documents: ["Salary register", "Vendor invoices", "PAN of deductees", "Challan copies"],
    faqs: [{ q: "What is the due date?", a: "31st of the month following the quarter end." }],
  },
  {
    slug: "mutual-funds",
    name: "Mutual Funds",
    short: "Curated mutual fund portfolios across equity, debt and hybrid categories.",
    icon: PiggyBank,
    overview:
      "AMFI-registered advisory with a research-led portfolio matched to your risk profile and goals.",
    benefits: [
      "Goal-based allocation",
      "Direct & regular options",
      "Tax-efficient choices",
      "Regular rebalancing",
    ],
    process: [
      { title: "Risk profiling", desc: "Understand your appetite." },
      { title: "Goal mapping", desc: "Short, mid, long term." },
      { title: "Portfolio build", desc: "Diversified across AMCs." },
      { title: "Review", desc: "Quarterly performance check." },
    ],
    documents: ["PAN & Aadhaar", "Bank details", "Risk profile form", "KYC documents"],
    faqs: [
      {
        q: "Are mutual funds safe?",
        a: "They carry market risk but offer transparency, regulation and professional management.",
      },
    ],
  },
  {
    slug: "sip-planning",
    name: "SIP Planning",
    short: "Systematic Investment Plans designed around your life goals.",
    icon: LineChart,
    overview:
      "Goal-based SIPs for retirement, child education, home buying — with step-up SIPs to beat inflation.",
    benefits: [
      "Disciplined investing",
      "Rupee cost averaging",
      "Power of compounding",
      "Goal probability tracking",
    ],
    process: [
      { title: "Goal definition", desc: "Quantify each goal with timeline." },
      { title: "SIP calculation", desc: "Monthly amount per goal." },
      { title: "Fund selection", desc: "Right category & scheme." },
      { title: "Auto-debit setup", desc: "Stress-free execution." },
    ],
    documents: ["KYC", "Bank mandate", "Goal sheet"],
    faqs: [{ q: "Can I pause my SIP?", a: "Yes — most AMCs allow pause for up to 6 months." }],
  },
  {
    slug: "insurance",
    name: "Insurance",
    short: "Term, health, motor and general insurance from top-rated insurers.",
    icon: Umbrella,
    overview:
      "Unbiased advisory on adequate cover — without mis-selling, with claim support included.",
    benefits: ["Right sum assured", "Tax benefits", "Claim assistance", "Annual review"],
    process: [
      { title: "Needs analysis", desc: "Cover gap assessment." },
      { title: "Comparison", desc: "Plans across insurers." },
      { title: "Policy issuance", desc: "Smooth onboarding." },
      { title: "Claim support", desc: "End-to-end help when needed." },
    ],
    documents: ["KYC", "Medical reports (if any)", "Existing policy copies"],
    faqs: [
      {
        q: "How much term cover do I need?",
        a: "Typically 15–20× your annual income, adjusted for liabilities and goals.",
      },
    ],
  },
  {
    slug: "financial-planning",
    name: "Financial Planning",
    short: "Comprehensive financial plans for individuals and families.",
    icon: Wallet,
    overview:
      "A 360° plan covering cashflow, insurance, investments, tax, retirement and estate — reviewed annually.",
    benefits: [
      "Single source of truth",
      "Goal-based clarity",
      "Stress-tested plan",
      "Annual updates",
    ],
    process: [
      { title: "Discovery", desc: "Income, expenses, goals." },
      { title: "Plan creation", desc: "Written plan delivered." },
      { title: "Implementation", desc: "We help execute." },
      { title: "Review", desc: "Annual reset." },
    ],
    documents: ["Income & expense data", "Asset & liability list", "Goal sheet"],
    faqs: [
      {
        q: "Is this only for HNIs?",
        a: "Not at all — every household benefits from a written plan.",
      },
    ],
  },
  {
    slug: "business-registration",
    name: "Business Registration",
    short: "Proprietorship, LLP, Pvt Ltd, OPC and partnership firm registration.",
    icon: Building2,
    overview: "Entity formation with PAN, TAN, MSME and GST — ready-to-operate in 10–15 days.",
    benefits: ["Limited liability", "Investor readiness", "Brand protection", "Easier funding"],
    process: [
      { title: "Structure advisory", desc: "Pick the right entity." },
      { title: "Name approval", desc: "MCA / Trademark check." },
      { title: "Incorporation", desc: "SPICe+ filing." },
      { title: "Post-incorp setup", desc: "PAN, TAN, GST, bank." },
    ],
    documents: ["Director KYC", "Address proof", "Photos", "Utility bill of office"],
    faqs: [
      {
        q: "Which structure is best?",
        a: "Pvt Ltd for funded startups, LLP for partnerships, OPC for solo founders.",
      },
    ],
  },
  {
    slug: "bookkeeping",
    name: "Bookkeeping",
    short: "Cloud bookkeeping with monthly P&L, balance sheet and dashboards.",
    icon: BookOpen,
    overview: "Tally / Zoho / QuickBooks bookkeeping with monthly MIS and bank reconciliation.",
    benefits: [
      "Always audit-ready",
      "Real-time financials",
      "Tax-ready books",
      "Affordable monthly plans",
    ],
    process: [
      { title: "Setup", desc: "Chart of accounts, opening balances." },
      { title: "Daily entries", desc: "Sales, purchase, expense." },
      { title: "Reconciliation", desc: "Bank, vendor, customer." },
      { title: "MIS reports", desc: "Monthly P&L and ratios." },
    ],
    documents: ["Bank statements", "Sales/purchase invoices", "Expense bills"],
    faqs: [
      { q: "Do you work remotely?", a: "Yes — we operate fully on cloud with secure access." },
    ],
  },
  {
    slug: "business-advisory",
    name: "Business Advisory",
    short: "Strategic CFO-level advisory for growth-stage SMEs and startups.",
    icon: Briefcase,
    overview:
      "Virtual CFO services — budgeting, cashflow, pricing, fundraising readiness and compliance oversight.",
    benefits: [
      "Better decisions",
      "Investor-ready data",
      "Cashflow visibility",
      "Profit improvement",
    ],
    process: [
      { title: "Diagnostic", desc: "Where you stand today." },
      { title: "Roadmap", desc: "12-month action plan." },
      { title: "Monthly review", desc: "KPIs, cashflow, risks." },
      { title: "Course-correct", desc: "Iterate quarterly." },
    ],
    documents: ["Last 2 yrs financials", "Current MIS", "Forecast / pipeline"],
    faqs: [
      {
        q: "How is this different from a CA?",
        a: "We focus on forward-looking decisions, not just compliance.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
