import type { Metadata } from "next";
import { DashboardPage } from "@/components/pages/DashboardPage";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your TechNest profile and recent activity overview.",
};

export default function Dashboard() {
  return <DashboardPage />;
}
