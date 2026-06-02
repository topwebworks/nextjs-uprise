"use client";
import AnimatedText from "@/components/common/AnimatedText";
import ContactForm from "@/components/ghl/ContactForm";
import site from "@/data/site";

export default function AMWContact() {
  return (
    <div className="container position-relative">
      <style>{`
        .amw-estimate-embed {
          min-height: 620px;
          border-radius: 8px;
          background: #fff;
        }
        .amw-estimate-embed iframe {
          min-height: 620px;
          display: block;
        }
        .amw-estimate-embed.border {
          min-height: 360px;
          padding: 48px 28px !important;
        }
        @media (max-width: 575px) {
          .amw-estimate-embed,
          .amw-estimate-embed iframe {
            min-height: 700px;
          }
        }
      `}</style>

      <div className="row">
        <div className="col-lg-6">
          <div className="row mb-50">
            <div className="col-lg-10">
              <h2 className="section-caption mb-xs-10">Contact Us</h2>
              <h3 className="section-title mb-0">
                <AnimatedText text="Request a free estimate." />
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
                    <a href="mailto:info@amwhardscape.com">
                      info@amwhardscape.com
                    </a>
                  </div>
                  <div>Mon-Sat 7am-6pm</div>
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
                  San Tan Valley &middot; Mesa &middot; Queen Creek &middot;
                  Gilbert &middot; Chandler &middot; Phoenix &amp; surrounding
                  East Valley
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact-form"
        className="row wow fadeInUp"
        data-wow-delay="0.5s"
        style={{ scrollMarginTop: 80 }}
      >
        <div className="col-md-6 mb-sm-50">
          <ContactForm
            form="estimate"
            className="amw-estimate-embed"
            placeholderTitle="Estimate form embed placeholder."
            placeholderText="This spot is ready for the estimate form embed once the AMW CRM account is connected."
            placeholderFields={[
              "Name",
              "Phone",
              "Email",
              "Project address",
              "Service type",
              "Timeline",
              "Project notes",
              "Photo upload",
              "SMS consent",
            ]}
          />
        </div>

        <div className="col-md-6 d-flex align-items-stretch">
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
        </div>
      </div>
    </div>
  );
}
