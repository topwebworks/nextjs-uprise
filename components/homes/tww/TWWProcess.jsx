import "@/components/homes/tww/TWWProcess.module.css";

const steps = [
  {
    title: "Free On-Site Consultation",
    description: "We come to your pool, assess the condition, and listen to what's going on. No pressure — just an honest conversation about what's wrong and what it takes to fix it right.",
  },
  {
    title: "Written Scope & Material Selection",
    description: "We document exactly what needs to be done, walk you through material options, and provide clear pricing before anything is signed. No scope creep, no surprise charges.",
  },
  {
    title: "The Work & Communication",
    description: "Shane is on-site at every critical phase — from prep and repairs through finish and equipment. You'll hear from us throughout, not just at the beginning and end.",
  },
  {
    title: "Final Walkthrough & Handoff",
    description: "We walk the completed project with you detail by detail. We don't call it done until you're fully satisfied — and we make sure you know how to care for everything we repaired or installed.",
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
