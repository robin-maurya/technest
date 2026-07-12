export default function Loading() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        gap: "0.8rem",
        color: "#64748b",
      }}
    >
      <div
        style={{
          width: "2.5rem",
          height: "2.5rem",
          border: "3px solid #e2e8f0",
          borderTopColor: "#4361ee",
          borderRadius: "50%",
        }}
      />
      <p>Loading your experience…</p>
    </div>
  );
}
