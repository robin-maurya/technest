import type { ActivityItem, FeatureItem, ServiceItem, TeamMember, Testimonial } from "@/types";

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Brand Positioning",
    description: "Clarify your value proposition and craft a story that resonates with your audience.",
    icon: "✦",
    link: "/contact",
  },
  {
    id: 2,
    title: "Digital Experience",
    description: "Turn visitors into loyal customers with conversion-focused web experiences.",
    icon: "◌",
    link: "/contact",
  },
  {
    id: 3,
    title: "Product Strategy",
    description: "Launch and scale offerings with a roadmap aligned to measurable growth goals.",
    icon: "⬢",
    link: "/contact",
  },
  {
    id: 4,
    title: "Growth Marketing",
    description: "Use data-driven campaigns to acquire quality leads and deepen customer engagement.",
    icon: "↗",
    link: "/contact",
  },
  {
    id: 5,
    title: "Operations Design",
    description: "Build efficient systems that help teams move faster without sacrificing quality.",
    icon: "⚙",
    link: "/contact",
  },
  {
    id: 6,
    title: "Executive Advisory",
    description: "Get sharp guidance for key decisions, partnerships, and expansion opportunities.",
    icon: "◎",
    link: "/contact",
  },
];

export const features: FeatureItem[] = [
  {
    id: 1,
    title: "Insight-led strategy",
    description: "Every engagement begins with audience, market, and business signal analysis.",
    icon: "📈",
  },
  {
    id: 2,
    title: "Execution-ready plans",
    description: "We translate strategy into tangible launches, assets, and roadmaps.",
    icon: "🧭",
  },
  {
    id: 3,
    title: "Trusted partnership",
    description: "Clear communication and proactive support define every collaboration.",
    icon: "🤝",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "TechNest helped us sharpen our product strategy and bring clarity to a complex enterprise launch.",
    name: "Maya Chen",
    role: "Founder, Lumen Labs",
  },
  {
    id: 2,
    quote: "Their approach felt thoughtful, strategic, and deeply aligned with our growth goals.",
    name: "Alec Rivera",
    role: "COO, Atlas One",
  },
  {
    id: 3,
    quote: "The team made complex decisions feel simple, actionable, and surprisingly energizing.",
    name: "Nadia Brooks",
    role: "Head of Marketing, NovaHQ",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Elena Brooks",
    role: "CEO & Strategy Lead",
    bio: "Elena blends brand strategy and operations to help businesses scale with focus.",
  },
  {
    id: 2,
    name: "Marcus Cole",
    role: "Creative Director",
    bio: "Marcus shapes memorable digital experiences that connect people and products.",
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Growth Partner",
    bio: "Priya brings a measured, data-forward approach to campaign planning and delivery.",
  },
];

export const recentActivities: ActivityItem[] = [
  {
    id: 1,
    title: "Brand review submitted",
    detail: "Your latest strategy brief is now ready for the team.",
    time: "2h ago",
  },
  {
    id: 2,
    title: "Dashboard updated",
    detail: "We refreshed your growth report and highlighted new opportunities.",
    time: "Yesterday",
  },
  {
    id: 3,
    title: "Workshop invite sent",
    detail: "A planning session invite is on the way to your inbox.",
    time: "3 days ago",
  },
];
