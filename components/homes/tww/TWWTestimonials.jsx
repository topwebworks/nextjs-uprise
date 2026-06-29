import site from "@/data/site";
import "@/components/homes/tww/TWWTestimonials.module.css";

const testimonials = [
  {
    quote: "After 2 weeks of having other guys come out and not be able to do anything, Shane was here for maybe an hour. Not only did he diagnose the accurate issue, he fixed it — and even tried to not take payment because it was an easy fix. I had to insist. Great guy!",
    author: "Stephen T., Plano TX",
  },
  {
    quote: "Shane is the epitome of integrity. He was at our house for every step of the process, his attention to detail is something many larger companies can't provide. Our remodel included a full interior resurface, new tile, Baja shelf, structural repair, and deck resurface — he made it happen seamlessly.",
    author: "Amanda E., Chandler AZ",
  },
  {
    quote: "We had a complex backyard and pool renovation with surprises at every turn. The Uprise crew was always friendly and respectful of our property. My backyard looks like a mini resort. I would highly recommend them.",
    author: "Rosemary B., Tempe AZ",
  },
  {
    quote: "We had old pool tile replaced and they did a wonderful job. About a year later some tiles fell due to deck shifting — Shane was incredibly responsive and repaired it with no issues. So happy with their service!",
    author: "Hillary C., San Diego CA",
  },
  {
    quote: "I was looking to have some cracks repaired in my kool deck without redoing the entire deck. Uprise was the only one willing to do it. The results were fantastic. He was flexible, responsive, and the job came out exactly as hoped.",
    author: "Janice C., Gilbert AZ",
  },
  {
    quote: "Shane is knowledgeable, prompt in his communication, and makes sure to get the job done right at a fair price. He helped me with several miscellaneous repairs and did a great job on all of them. Highly recommended!",
    author: "Scott E., Gilbert AZ",
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
    <div className="container position-relative">
      <div className="row align-items-end amw-testimonials-header">
        <div className="col-md-8 wow fadeInUp">
          <h2 className="section-title">What Clients Say</h2>
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
                <div className="amw-review-source">Yelp Review</div>
              </div>
              <div className="amw-google-g"><i className="fab fa-yelp" aria-hidden="true" /></div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-40 wow fadeInUp" data-wow-delay="0.15s">
        <a
          href={site.social.yelp}
          target="_blank"
          rel="noopener noreferrer"
          className="amw-google-cta-btn"
          style={{ margin: "0 6px 12px" }}
        >
          <span className="amw-google-g"><i className="fab fa-yelp" aria-hidden="true" /></span>
          <span>See our Yelp Reviews</span>
        </a>
        <a
          href="https://www.google.com/search?q=Uprise+Pools+Gilbert+AZ+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="amw-google-cta-btn"
          style={{ margin: "0 6px 12px" }}
        >
          <span className="amw-google-g" style={{ background: "#4285f4" }}>G</span>
          <span>See our Google Reviews</span>
        </a>
      </div>
    </div>
  );
}
