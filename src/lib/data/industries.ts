export interface Industry {
  slug: string;
  name: string;
  description: string;
  relevantServices: string[];
}

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction & Infrastructure",
    description:
      "Labour transport, heavy equipment rental and machinery transport for contractors managing large, multi-phase sites.",
    relevantServices: ["labour-transportation", "heavy-equipment-rental", "heavy-machinery-transport"],
  },
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    description:
      "Scheduled staff and corporate transport for financial institutions with strict punctuality and safety requirements.",
    relevantServices: ["staff-transportation", "corporate-transportation", "monthly-contracts"],
  },
  {
    slug: "retail-malls",
    name: "Retail & Malls",
    description:
      "Staff shuttle programmes and event transport supporting retail operations and mall activations across the UAE.",
    relevantServices: ["staff-transportation", "event-transportation"],
  },
  {
    slug: "education",
    name: "Education",
    description:
      "Annual-contract school transportation with trained drivers and safety-first, purpose-built buses.",
    relevantServices: ["school-transportation", "annual-contracts"],
  },
  {
    slug: "security-telecom",
    name: "Security & Telecom",
    description:
      "Reliable staff mobilisation for security firms and telecom operators running round-the-clock operations.",
    relevantServices: ["staff-transportation", "corporate-transportation"],
  },
  {
    slug: "events-hospitality",
    name: "Events & Hospitality",
    description:
      "Guest shuttle coordination and rapid fleet scaling for conferences, exhibitions and hospitality programmes.",
    relevantServices: ["event-transportation", "bus-rental", "minibus-rental"],
  },
];
