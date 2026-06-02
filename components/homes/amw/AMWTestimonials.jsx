const testimonials = [
  {
    quote: "Brad and his crew did a great job on a patio extension and walkway. They were always on time, and communicated well throughout the whole project.",
    author: "Austin Bartley",
  },
  {
    quote: "Honest, helpful, and happy I chose Brad and his crew to help me with my project of installing turf. Would recommend!",
    author: "BJ Carmack",
  },
  {
    quote: "Brad and Roberto are awesome. Showed up and went straight to work every day. Brad explains everything and is easy to work with. Would definitely work with them again.",
    author: "Ride Red",
  },
  {
    quote: "AMW Hardscape Solutions is always great to work with! They're super professional, easy to deal with, and always know exactly what they need.",
    author: "AZ Turf Suppliers",
  },
  {
    quote: "They answer the phone which is a HUGE plus — showed up on time and stayed until the job was completed 100%. We will use them again.",
    author: "Frost",
  },
  {
    quote: "As an investor we have to stay tight on budget. This company had different solutions to help us get to the finish line. Thanks again to Brad.",
    author: "Work Hard",
  },
  {
    quote: "These guys are rock stars! Exactly what we wanted — could not be more happy with the results of the pavers and rock work.",
    author: "Real Estate 480",
  },
  {
    quote: "Brad and Brian were awesome to work with. We had some travertine pavers put in our backyard to frame a little section of grass. Great results!",
    author: "David Prian",
  },
  {
    quote: "Great service! Got the job done! Excellent to work with!!",
    author: "Brian & Erin Wood",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
      {[...Array(5)].map((_, i) => (
        <i key={i} className="icon-star-rate" style={{ color: "#F4B400", fontSize: 15 }} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function AMWTestimonials() {
  return (
    <>
      <style>{`
        .amw-reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .amw-testimonials-header {
          margin-bottom: 32px;
        }
        .amw-testimonials-header .section-title {
          margin-bottom: 0;
        }
        @media (max-width: 991px) {
          .amw-reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 575px) {
          .amw-testimonials-header { margin-bottom: 24px; }
          .amw-reviews-grid { grid-template-columns: 1fr; gap: 12px; }
        }
        .amw-review-card {
          background: #fff;
          border-radius: 8px;
          padding: 28px 26px 24px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 575px) {
          .amw-review-card { padding: 16px 14px 14px; }
        }
        .amw-review-quote {
          font-size: 15px;
          line-height: 1.7;
          color: #333;
          flex: 1;
          margin-bottom: 20px;
        }
        @media (max-width: 575px) {
          .amw-review-quote { font-size: 12px; line-height: 1.55; margin-bottom: 12px; }
          .amw-review-author { font-size: 12px !important; }
          .amw-review-source { font-size: 11px !important; }
          .amw-google-g { font-size: 15px !important; }
        }
        .amw-review-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          border-top: 1px solid #f0f0f0;
          padding-top: 16px;
        }
        .amw-review-author {
          font-size: 14px;
          font-weight: 600;
          color: #111;
        }
        .amw-review-source {
          font-size: 12px;
          color: #999;
          margin-top: 2px;
        }
        .amw-google-g {
          font-size: 18px;
          font-weight: 700;
          color: #4285F4;
          flex-shrink: 0;
          font-family: 'Google Sans', Arial, sans-serif;
        }
      `}</style>

      <div className="container position-relative">
        <div className="row align-items-end amw-testimonials-header">
          <div className="col-md-8 wow fadeInUp">
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="col-md-4 d-flex align-items-end justify-content-md-end mt-20 mt-md-0 wow fadeInUp" data-wow-delay="0.1s">
            <div style={{ display: "flex", gap: 3 }}>
              {[...Array(5)].map((_, i) => (
                <i key={i} className="icon-star-rate" style={{ color: "#F4B400", fontSize: 22 }} aria-hidden="true" />
              ))}
            </div>
          </div>
        </div>

        <div className="amw-reviews-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="amw-review-card wow fadeInUp" data-wow-delay={`${(i % 3) * 0.1}s`}>
              <Stars />
              <p className="amw-review-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="amw-review-footer">
                <div>
                  <div className="amw-review-author">{t.author}</div>
                  <div className="amw-review-source">Google Review</div>
                </div>
                <div className="amw-google-g">G</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
