const benefits = [
  {
    icon: "mi-document-check",
    title: "AZ Licensed & Insured",
    description: "Fully licensed hardscape contractor in Arizona. Every job is insured — your property is protected.",
  },
  {
    icon: "mi-price",
    title: "Free Estimates",
    description: "We come to you, assess the project, and give you a clear written quote. No obligation, no pressure.",
  },
  {
    icon: "mi-diamond",
    title: "High-Quality Materials",
    description: "Pavers, travertine, concrete, turf, and base materials selected for Arizona heat, drainage, and daily use.",
  },
  {
    icon: "mi-time",
    title: "Shows Up & Gets It Done",
    description: "On time, works clean, stays until the job is 100% complete. No surprises.",
  },
];

export default function AMWBenefits() {
  return (
    <div className="container position-relative">
      <div className="row align-items-center g-5">

        {/* Left: headline + quote */}
        <div className="col-lg-4 wow fadeInUp">
          <div className="section-caption mb-10">Why AMW</div>
          <h2 className="section-title mb-30">
            The team your<br />neighbors trust.
          </h2>
          <blockquote className="mb-0" style={{ borderLeft: "3px solid #111", paddingLeft: 18 }}>
            <p style={{ fontSize: 17, lineHeight: 1.6, fontStyle: "italic", color: "#333", marginBottom: 10 }}>
              &ldquo;Quality, good prices, neat and clean work.&rdquo;
            </p>
            <footer style={{ fontSize: 13, color: "#888" }}>
              Daniel Gervasi &mdash; <span>Verified Google Review</span>
            </footer>
          </blockquote>
        </div>

        {/* Right: 2x2 benefit cards */}
        <div className="col-lg-8">
          <div className="row g-3 wow fadeInUp" data-wow-delay="0.1s">
            {benefits.map((b, i) => (
              <div key={i} className="col-sm-6">
                <div className="alt-features-item box-shadow mt-0" style={{ height: "100%" }}>
                  <div className="alt-features-icon mb-10">
                    <i className={`${b.icon}`} style={{ fontSize: 28 }} aria-hidden="true" />
                  </div>
                  <h4 className="alt-features-title">{b.title}</h4>
                  <div className="alt-features-descr">{b.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
