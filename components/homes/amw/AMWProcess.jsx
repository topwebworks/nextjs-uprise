import "@/components/homes/amw/AMWProcess.module.css";

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
        <div key={i} className="amw-process-step">
          <div className="amw-process-number">{i + 1}</div>
          <div>
            <div className="amw-process-title">{step.title}</div>
            <div className="amw-process-desc">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
