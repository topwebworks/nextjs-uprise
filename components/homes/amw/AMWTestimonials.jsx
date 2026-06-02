import "@/components/homes/amw/AMWTestimonials.module.css";

const testimonials = [
  {
    quote: "We have used AMW for two large hardscape projects now, and we couldn't be happier with the results. Finding a contractor who is both reliable and highly skilled can be tough, but AMW delivers on every front. They show up on time, maintain great communication, and the quality of work is outstanding.",
    author: "Larisa Rodriguez",
  },
  {
    quote: "Brad and his crew did a great job on a patio extension and walkway. They were always on time, and communicated well throughout the whole project.",
    author: "Austin Bartley",
  },
  {
    quote: "They answer the phone which is a HUGE plus — showed up on time and stayed until the job was completed 100%. We will use them again.",
    author: "Frost",
  },
  {
    quote: "Honest, helpful, and happy I chose Brad and his crew to help me with my project of installing turf. Would recommend!",
    author: "BJ Carmack",
  },
  {
    quote: "Quality, good prices, neat and clean work.",
    author: "Daniel Gervasi",
  },
  {
    quote: "AMW Hardscape Solutions is always great to work with! They're super professional, easy to deal with, and always know exactly what they need. Solid team doing quality work.",
    author: "AZ Turf Suppliers",
  },
  {
    quote: "As an investor we have to stay tight on budget. This company had different solutions to help us get to the finish line. Thanks again to Brad for doing an amazing job.",
    author: "Work Hard",
  },
  {
    quote: "Brad and Brian were awesome to work with. We had some travertine pavers put in our backyard to frame a little section of grass. They took the time to make sure it was level and straight.",
    author: "David Prian",
  },
  {
    quote: "Great service! Got the job done! Excellent to work with!!",
    author: "Brian & Erin Wood",
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

export default function AMWTestimonials() {
  return (
    <>
      <div className="container position-relative">
        <div className="row align-items-end amw-testimonials-header">
          <div className="col-md-8 wow fadeInUp">
            <h2 className="section-title">What Our Clients Say</h2>
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
