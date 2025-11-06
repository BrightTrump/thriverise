import { Icons } from "@/ui";

export interface IndustryCard {
  title: string;
  icon: keyof typeof Icons;
  cardBg: string;
  iconBg: string;
}

export const BENEFITS_CARD = [
  {
    title: "Nationwide provider networks, pre-verified and ready.",
  },
  {
    title: "Faster claims, smoother payments, and fewer delays.",
  },
  {
    title: "Happier customers with transparent, self-service access.",
  },
  {
    title: "A connected, compliant, future-ready insurance ecosystem.",
  },
];

export const INDUSTRY_CARDS_TABS: IndustryCard[] = [
  {
    title: "For Insurers & Brokers",
    icon: "Security",
    cardBg: "bg-[#FFE2CF]",
    iconBg: "bg-[#FF9854]",
  },
  {
    title: "Service Providers",
    icon: "ServiceProvider",
    cardBg: "bg-[#B1D5C6]",
    iconBg: "bg-[#35936C]",
  },
  {
    title: "Policyholders",
    icon: "People",
    cardBg: "bg-[#CCCCFF]",
    iconBg: "bg-[#8A38F5]",
  },
  {
    title: "Agents & Intermediaries",
    icon: "Agent",
    cardBg: "bg-[#B0C9FF]",
    iconBg: "bg-[#0B4FDE]",
  },
];

export const INDUSTRY_CARDS = [
  {
    title: "Insurance",
    cardBg: "bg-[#FFE2CF]",
    cardBgSvg: "/website-ui/core-operations.svg",
    headline: "Core operations: policies, billing, claims, compliance.",
    description:
      "Rakisi empowers insurers and brokers with a single, unified platform to handle all their day-to-day operations. Instead of working across multiple disconnected tools, you get everything you need in one system, making it easier to manage clients, stay compliant, and grow your business",
  },
  {
    title: "Service Providers",
    cardBg: "bg-[#B1D5C6]",
    cardBgSvg: "/website-ui/service-operations.svg",
    headline:
      "Streamlined access to insurer networks for claims and remittance.",
    description:
      "Rakisi connects service providers, such as hospitals, pharmacies, mechanics, gyms, and more, directly to insurer networks, making it easier to handle insurance-related services without the usual paperwork and delays. With a dedicated portal, service providers can process claims, confirm coverage, and manage payments seamlessly.",
  },
  {
    title: "Policy Holders",
    cardBg: "bg-[#CCCCFF]",
    cardBgSvg: "/website-ui/policy-operations.svg",
    headline:
      "Self-service portals to view policies, request services, and track claims.",
    description:
      "Rakisi gives policyholders the convenience of managing their insurance through a secure, easy-to-use self-service portal. Instead of relying solely on agents or office visits, customers can access their policies, request services, and monitor claim progress from anywhere.",
  },
  {
    title: "Agents & Intermediaries",
    cardBg: "bg-[#B0C9FF]",
    cardBgSvg: "/website-ui/agents-operations.svg",
    headline: "Tools to manage clients, commissions, and reporting.",
    description:
      "Rakisi equips agents and intermediaries with digital tools to better manage their clients, track commissions, and stay on top of reporting requirements. Instead of juggling spreadsheets and manual reconciliations, agents get a single system that keeps their business organized, transparent, and scalable.",
  },
];

export const CHALLENGE_CARD = [
  {
    title: "Fragmented systems",
  },
  {
    title: "Manual operations",
  },
  {
    title: "Compliance burdens",
  },
  {
    title: "Limited service reach",
  },
  {
    title: "Low customer satisfaction",
  },
];

export const CHALLENGE_CARD_2 = [
  {
    title: "A single platform for all processes",
  },
  {
    title: "Automated, accurate, real-time workflow",
  },
  {
    title: "Built-in local compliance tools",
  },
  {
    title: "Nationwide provider integration",
  },
  {
    title: "Self-service tools and faster claims",
  },
];
