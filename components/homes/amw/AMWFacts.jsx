import "@/components/homes/amw/AMWFacts.module.css";

const trustSignals = [
  {
    icon: "mi-document-check",
    label: "AZ Licensed & Insured",
    sub: "ROC #338848 KA-5 · ROC #338103 CR-21",
  },
  {
    icon: "mi-users",
    label: "Owner-Operated",
    sub: "You work directly with the builders",
  },
  {
    icon: "mi-location",
    label: "Queen Creek Based",
    sub: "Serving the entire East Valley",
  },
  {
    icon: null,
    label: "5-Star Rated",
    sub: "Exceptional work on every project",
  },
];

export default function AMWFacts() {
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
