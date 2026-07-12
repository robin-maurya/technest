import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover TechNest's mission, vision, and the team behind our modern IT services.",
};

export default function About() {
  return <AboutPage />;
}
