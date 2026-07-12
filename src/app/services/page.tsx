import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our services for brand positioning, digital experiences, strategy, and growth support.",
};

export default function Services() {
  return <ServicesPage />;
}
