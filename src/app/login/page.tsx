import type { Metadata } from "next";
import { LoginPage } from "@/components/pages/LoginPage";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your TechNest account and access your dashboard.",
};

export default function Login() {
  return <LoginPage />;
}
