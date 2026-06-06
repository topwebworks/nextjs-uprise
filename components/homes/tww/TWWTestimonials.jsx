import "@/components/homes/tww/TWWTestimonials.module.css";

const testimonials = [
  {
    quote: "We interviewed three pool companies and Client was the only one who walked us through every detail before asking us to sign anything. The finished pool is stunning — the coping, the tile work, the tanning ledge — everything exactly as we discussed. Couldn't be happier.",
    author: "Melissa T., Client City",
  },
  {
    quote: "From the first meeting to the day they handed us the keys, Client was professional, responsive, and genuinely cared about the outcome. Our backyard went from nothing to a resort. The pavers and fire feature are exactly what we envisioned.",
    author: "Ryan & Jess M., Gilbert",
  },
  {
    quote: "I've worked with contractors for years and Client is the rare kind — they actually show up when they say they will, communicate throughout the whole project, and don't cut corners on the finish. Our pool turned out better than the renderings.",
    author: "Kevin D., Chandler",
  },
  {
    quote: "The attention to detail is what sets them apart. The beveled coping edges, the way the pavers transition to the turf — it all looks intentional and refined. Our neighbors keep asking who built it.",
    author: "Sarah L., Client City",
  },
  {
    quote: "We added a pool, paver deck, and outdoor kitchen all at once. Client managed the whole thing without it feeling chaotic. Clean site every day, clear updates, and the finished product is absolutely beautiful.",
    author: "The Andersons, Mesa",
  },
  {
    quote: "Honest pricing, no surprises, and quality work that speaks for itself. They took the time to make sure our pool was built right — not just built fast. We've already referred them to two neighbors.",
    author: "Tom & Carol B., Client City",
  },
];

function Stars() {
  return (
    <div className="amw-stars-sm">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="icon-star-rate amw-star-sm" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function TWWTestimonials() {
  return (
    <>
      <div className="container position-relative">
        <div className="row align-items-end amw-testimonials-header">
          <div className="col-md-8 wow fadeInUp">
            <h2 className="section-title">Happy Homeowners</h2>
          </div>
          <div className="col-md-4 d-flex align-items-end justify-content-md-end mt-20 mt-md-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="amw-stars-lg">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="icon-star-rate amw-star-lg" aria-hidden="true" />
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
