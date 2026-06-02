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
      <style>{`
        .amw-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 36px;
          padding-top: 28px;
        }
        @media (max-width: 767px) {
          .amw-trust-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
        @media (max-width: 575px) {
          .amw-trust-grid { grid-template-columns: 1fr; gap: 10px; }
          .amw-trust-item { padding: 14px 16px; }
          .amw-trust-icon { font-size: 18px; margin-bottom: 6px; display: block; }
          .amw-trust-label { font-size: 14px; margin-bottom: 3px; }
          .amw-trust-sub { font-size: 12px; }
        }
        .amw-trust-item {
          padding: 16px 20px;
          background: rgba(0,0,0,0.5);
          border-radius: 6px;
          backdrop-filter: blur(4px);
        }
        .amw-trust-icon {
          font-size: 22px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 12px;
          display: block;
        }
        .amw-trust-label {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 5px;
        }
        .amw-trust-sub {
          font-size: 12.5px;
          color: rgba(255,255,255,0.45);
          line-height: 1.5;
        }
      `}</style>
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
