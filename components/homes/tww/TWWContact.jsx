"use client";
import AnimatedText from "@/components/common/AnimatedText";
import ContactForm from "@/components/ghl/ContactForm";
import site from "@/data/site";
import TWWServiceAreaLinks from "@/components/homes/tww/TWWServiceAreaLinks";
import "@/components/homes/tww/TWWContact.module.css";

export default function TWWContact() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6">
          <div className="row mb-50">
            <div className="col-lg-10">
              <h2 className="section-caption mb-xs-10">Ready to Get Started?</h2>
              <h3 className="section-title mb-0">
                <AnimatedText text="Tell us about your project." />
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row mb-20">
            <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".3s"
              >
                <div className="alt-features-icon">
                  <i className="mi-call size-24" aria-hidden="true" />
                </div>
                <h4 className="alt-features-title">Call or text</h4>
                <div className="alt-features-descr clearlinks">
                  <div>
                    <a href={`tel:${site.phone}`}>
                      {site.phone.replace("+1-", "")}
                    </a>
                  </div>
                  <div>
                    <a href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                  <div style={{ whiteSpace: "nowrap" }}>Mon–Fri 7am–5pm</div>
                  <div style={{ whiteSpace: "nowrap" }}>Sat 8am–4pm</div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".5s"
              >
                <div className="alt-features-icon">
                  <i className="mi-location size-24" aria-hidden="true" />
                </div>
                <h4 className="alt-features-title">Service area</h4>
                <div className="alt-features-descr">
                  <TWWServiceAreaLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact-form"
        className="row wow fadeInUp amw-contact-anchor"
        data-wow-delay="0.5s"
      >
        <div className="col-md-6 mb-sm-50">
          <ContactForm
            form="estimate"
            className="amw-estimate-embed"
            placeholderTitle="Request a Free Estimate"
            placeholderText="Tell us about your pool — repair, resurfacing, deck work, or equipment. We'll be in touch soon."
            placeholderFields={[
              "Name",
              "Phone",
              "Email",
              "Project address",
              "Service type",
              "Timeline",
              "Project details",
              "Project photos",
            ]}
          />
        </div>

        <div className="col-md-6 d-flex flex-column gap-3">

          {/* Next steps */}
          <div className="amw-next-steps">
            <div className="amw-next-steps-title">What happens next</div>
            {[
              { n: "1", text: "We call you to learn about your project" },
              { n: "2", text: "We come out, walk the site, and give you a written quote" },
              { n: "3", text: "You approve — we schedule and get to work" },
            ].map(({ n, text }) => (
              <div key={n} className="amw-next-step">
                <div className="amw-next-step-num">{n}</div>
                <div className="amw-next-step-text">{text}</div>
              </div>
            ))}
          </div>

          {/* Reviews */}
          {[
            { quote: "He was completely transparent during the whole process. Shane did a great job being available and always answering any question we had. Any hiccups we had he took care of. We were his primary focus. I would suggest this company 100%.", author: "Matt R., Greenfield, WI" },
            { quote: "Shane was great to work with — prompt with responses and on-time with appointments. The tile looks great and from start to finish the whole job took less than a week. The price was fair and we are very happy with the work.", author: "Scott T., Tempe, AZ" },
          ].map((r, i) => (
            <div key={i} className="amw-form-review">
              <div className="amw-form-review-stars">
                {[...Array(5)].map((_, s) => (
                  <i key={s} className="icon-star-rate amw-form-star" aria-hidden="true" />
                ))}
              </div>
              <p className="amw-form-review-quote">&ldquo;{r.quote}&rdquo;</p>
              <div className="amw-form-review-footer">
                <span className="amw-form-review-author">{r.author}</span>
                <span className="amw-form-review-g"><i className="fab fa-yelp" aria-hidden="true" /></span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
