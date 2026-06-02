const steps = [
  {
    title: "Free Estimate",
    description: "We come to you, walk the property, and give you a written quote — no obligation, no pressure. Most estimates done within 48 hours.",
  },
  {
    title: "Design & Materials",
    description: "We walk you through materials, drainage, access, and layout. You'll know exactly what you're getting before work begins.",
  },
  {
    title: "Expert Installation",
    description: "Our crew handles every phase — prep, install, and cleanup. We show up on time and don't leave until the job is done right.",
  },
  {
    title: "Final Walkthrough",
    description: "We review every detail with you before we call it complete. Your sign-off is the only one that matters.",
  },
];

export default function AMWProcess() {
  return (
    <div className="mb-40">
      {steps.map((step, i) => (
        <div key={i} style={{ display: "flex", gap: 20, marginBottom: 24 }}>
          <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", background: "#111", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, marginTop: 2 }}>
            {i + 1}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{step.title}</div>
            <div style={{ fontSize: 14, color: "#666", lineHeight: 1.65 }}>{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
