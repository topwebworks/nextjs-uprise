import "@/components/homes/tww/TWWProcess.module.css";

const steps = [
  {
    title: "Free On-Site Consultation",
    description: "We visit your property, assess the space, and listen to what you want. No pressure — just an honest conversation about what's possible and what it takes to get there.",
  },
  {
    title: "Design & Written Scope",
    description: "We develop the design, walk you through material selections, and provide a written scope of work with clear pricing before anything is signed. No surprises later.",
  },
  {
    title: "Construction & Communication",
    description: "Our crew handles every phase in-house — excavation, plumbing, structure, decking, tile, and finish. You'll hear from us throughout, not just at the beginning and end.",
  },
  {
    title: "Final Walkthrough & Handoff",
    description: "We walk the completed project with you detail by detail. We don't call it done until you're fully satisfied — and we make sure you know how to care for everything we built.",
  },
];

export default function TWWProcess() {
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
