import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read TechNest's privacy policy and understand how we protect your data.",
};

export default function Privacy() {
  return <PrivacyPage />;
}
