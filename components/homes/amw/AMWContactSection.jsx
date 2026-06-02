"use client";
import ContactForm from "@/components/ghl/ContactForm";
import site from "@/data/site";
import AMWServiceAreaLinks from "@/components/homes/amw/AMWServiceAreaLinks";
import "@/components/homes/amw/AMWContact.module.css";

export default function AMWContactSection({
  introTitle = "Don't hesitate to reach out to us.",
  introText = "",
  formDisclaimer,
  embedForm = false,
  formKey = "contact",
  formPlaceholderTitle = "Get in Touch",
  formPlaceholderText,
  formPlaceholderFields = [],
} = {}) {
  const defaultFormDisclaimer = (
    <>
      All the fields are required. By sending the form you agree to the{" "}
      <a href="/terms-of-service">Terms &amp; Conditions</a> and{" "}
      <a href="/privacy-policy">Privacy Policy</a>.
    </>
  );

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6">
          <div className="pe-lg-5">
            <h2 className="h5">{introTitle}</h2>

            <p className="text-gray mb-0">{introText}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row mb-20">
            {/* Contact Item */}
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
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                  <div>Mon-Sat 7am-6pm</div>
                </div>
              </div>
            </div>
            {/* End Contact Item */}
            {/* Contact Item */}
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
                  <AMWServiceAreaLinks />
                </div>
              </div>
            </div>
            {/* End Contact Item */}
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.5s">
        <div className="col-md-6 mb-sm-50">
          {embedForm ? (
            <ContactForm
              form={formKey}
              className="amw-support-contact-embed"
              placeholderTitle={formPlaceholderTitle}
              placeholderText={formPlaceholderText}
              placeholderFields={formPlaceholderFields}
            />
          ) : (
            <>
          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form pe-lg-5"
            id="contact_form"
          >
            <div className="row">
              <div className="col-lg-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Enter your name"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Enter your email"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="Enter your message"
                defaultValue={""}
                required
              />
            </div>
            <div className="row">
              <div className="col-lg-5">
                {/* Send Button */}
                <div className="pt-20">
                  <button
                    className="submit_btn btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    id="submit_btn"
                    aria-controls="result"
                  >
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-7">
                {/* Inform Tip */}
                <div className="form-tip pt-20 pt-sm-0 mt-sm-20">
                  <i className="icon-info size-16" />
                  {formDisclaimer || defaultFormDisclaimer}
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
            </>
          )}
        </div>
        <div className="col-md-6 d-flex flex-column gap-3">

          {/* Next steps */}
          <div className="amw-next-steps">
            <div className="amw-next-steps-title">What happens next</div>
            {[
              { n: "1", text: "We review your message and follow up directly" },
              { n: "2", text: "We answer your questions and talk through your options" },
              { n: "3", text: "If you're ready, we schedule a free on-site estimate" },
            ].map(({ n, text }) => (
              <div key={n} className="amw-next-step">
                <div className="amw-next-step-num">{n}</div>
                <div className="amw-next-step-text">{text}</div>
              </div>
            ))}
          </div>

          {/* Reviews */}
          {[
            { quote: "Brad and his crew did a great job on a patio extension and walkway. They were always on time, and communicated well throughout the whole project.", author: "Austin Bartley" },
            { quote: "Quality, good prices, neat and clean work.", author: "Daniel Gervasi" },
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
                <span className="amw-form-review-g">G</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
