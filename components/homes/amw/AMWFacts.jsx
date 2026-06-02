import "@/components/homes/amw/AMWFacts.module.css";

const trustSignals = [
  {
    icon: "mi-document-check",
    label: "AZ Licensed & Insured",
    sub: "ROC #359843 · ROC #346552",
  },
  {
    icon: "mi-users",
    label: "Experienced Crews",
    sub: "Quality work on every project",
  },
  {
    icon: "mi-location",
    label: "East Valley Local",
    sub: "San Tan Valley, Mesa, Queen Creek, Gilbert, Chandler & Phoenix",
  },
  {
    icon: null,
    label: "5-Star Google Reviews",
    sub: "Rated 5 stars on Google Business",
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
                <div className="amw-trust-icon" style={{ fontSize: 16, letterSpacing: 1 }} aria-label="5 stars">
                  {[...Array(5)].map((_, s) => (
                    <i key={s} className="icon-star-rate" style={{ color: "#fff" }} aria-hidden="true" />
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
