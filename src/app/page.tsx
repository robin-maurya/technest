import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "TechNest | Modern IT Solutions",
  description: "TechNest delivers modern digital products, IT consulting, and growth strategy for ambitious companies.",
};

export default function Home() {
  return <HomePage />;
}
