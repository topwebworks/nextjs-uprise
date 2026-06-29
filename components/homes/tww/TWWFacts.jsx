import "@/components/homes/tww/TWWFacts.module.css";

const trustSignals = [
  {
    icon: "mi-document-check",
    label: "AZ Licensed & Insured",
    sub: "ROC 340539 & ROC 347588",
  },
  {
    icon: "mi-users",
    label: "Owner-Operated",
    sub: "You work directly with Shane — the owner",
  },
  {
    icon: "mi-location",
    label: "Gilbert-Based",
    sub: "Serving the East Valley",
  },
  {
    icon: null,
    label: "5-Star Rated",
    sub: "Exceptional work on every project",
  },
];

export default function TWWFacts() {
  return (
    <>
      <div className="col-12">
        <div className="amw-trust-grid">
          {trustSignals.map((item, i) => (
            <div key={i} className="amw-trust-item wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
              {item.icon ? (
                <i className={`${item.icon} amw-trust-icon`} aria-hidden="true" />
              ) : (
                <div className="amw-trust-icon amw-trust-stars" aria-label="5 stars">
                  {[...Array(5)].map((_, s) => (
                    <i key={s} className="icon-star-rate amw-trust-star" aria-hidden="true" />
                  ))}
                </div>
              )}
              <div className="amw-trust-label">{item.label}</div>
              <div className="amw-trust-sub">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
