import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with TechNest for modern IT services and digital transformation support.",
};

export default function Contact() {
  return <ContactPage />;
}
