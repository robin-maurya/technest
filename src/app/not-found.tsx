import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <section style={{ padding: "5rem 0" }}>
      <div style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto" }}>
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            padding: "2rem",
            textAlign: "center",
            borderRadius: "1.5rem",
            background: "#ffffff",
            border: "1px solid rgba(15, 23, 42, 0.12)",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              marginBottom: "1rem",
              padding: "0.4rem 0.8rem",
              borderRadius: "999px",
              background: "#eef2ff",
              color: "#4361ee",
              fontWeight: 700,
            }}
          >
            404
          </div>
          <h1 style={{ marginBottom: "0.7rem" }}>Page not found</h1>
          <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: "1rem" }}>
            The page you are looking for may have moved or no longer exists.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              justifyContent: "center",
              padding: "0.9rem 1.2rem",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #4361ee, #7c3aed)",
              color: "white",
              fontWeight: 600,
            }}
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
