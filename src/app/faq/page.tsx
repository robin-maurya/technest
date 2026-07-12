import type { Metadata } from "next";
import { FaqPage } from "@/components/pages/FaqPage";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about TechNest services, onboarding, and login.",
};

export default function FAQ() {
  return <FaqPage />;
}
