"use client";
import ContactForm from "@/components/ghl/ContactForm";
import site from "@/data/site";

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
                  San Tan Valley &middot; Mesa &middot; Queen Creek &middot;
                  Gilbert &middot; Chandler &middot; Phoenix &amp; surrounding
                  East Valley
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
        <div className="col-md-6 d-flex align-items-stretch">
          {/* Google Map */}
          <div className="map-boxed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212000!2d-111.65!3d33.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b06b3b3b3b3b3%3A0x0!2sSan+Tan+Valley%2C+AZ!5e0!3m2!1sen!2sus!4v1716000000000"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AMW Hardscape Solutions service area - San Tan Valley, Mesa, Queen Creek, Gilbert AZ"
            />
          </div>
          {/* End Google Map */}
        </div>
      </div>
    </div>
  );
}
