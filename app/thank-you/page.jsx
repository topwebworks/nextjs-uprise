import Footer1 from "@/components/footers/Footer1";
import HeaderAMW from "@/components/headers/HeaderAMW";
import ImageBackground from "@/components/common/ImageBackground";
import Link from "next/link";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Thank You",
  description: "We received your message and will be in touch shortly.",
  path: "/thank-you",
});

// GHL redirects here after form submission.
// robots.js disallows /thank-you so it doesn't appear in search results.
// GTM fires a conversion event on this page via a URL-based trigger.
export default function ThankYou() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar amw-ty-nav">
          <HeaderAMW />
          <style>{`
            .amw-ty-nav.transparent:not(.small-height) .amw-logo-badge-wrap {
              background-color: transparent !important;
              box-shadow: none !important;
              border-radius: 0 !important;
            }
            .amw-ty-nav.transparent:not(.small-height) .amw-logo-primary { filter: none !important; }
            .amw-ty-nav.transparent:not(.small-height) .amw-logo-amw,
            .amw-ty-nav.transparent:not(.small-height) .amw-logo-hardscape { color: #111 !important; }
            .amw-ty-nav.transparent:not(.small-height) .amw-logo-solutions { color: rgba(0,0,0,0.62) !important; text-shadow: none !important; }
            .amw-ty-nav.transparent:not(.small-height) .inner-nav > ul > li > a,
            .amw-ty-nav.transparent:not(.small-height) .items-end a,
            .amw-ty-nav.transparent:not(.small-height) .items-end .link-strong { color: #222 !important; text-shadow: none !important; }
          `}</style>
        </nav>
        <main id="main">
          <section className="page-section pt-0 pb-0">
            <section
              className="page-section bg-gray-light-1 bg-light-alpha-90 amw-fixed-bg-host"
              style={{
                paddingTop: 200,
                paddingBottom: 80,
              }}
            >
              <>
                <ImageBackground src="/assets/tww-assets/amw-images/IMG_4280.HEIC.jpg" alt="" fixed priority />
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                <div className="container position-relative pt-0">
                  <div className="text-center">
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <div className="mb-30 wow fadeInUp">
                          <svg
                            width="56"
                            height="56"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <circle cx="32" cy="32" r="32" fill="#111" fillOpacity="0.07" />
                            <path
                              d="M20 32l9 9 15-18"
                              stroke="#111"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <h1 className="hs-title-1 mb-20 wow fadeInUp" data-wow-delay="0.1s">
                          We got it — thank you.
                        </h1>
                        <p className="section-descr text-gray mb-40 wow fadeInUp" data-wow-delay="0.2s">
                          Someone from AMW will reach out within one business day to schedule your estimate.
                        </p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center wow fadeInUp" data-wow-delay="0.3s">
                          <Link href="/" className="btn btn-mod btn-large btn-round btn-hover-anim">
                            <span>Back to Home</span>
                          </Link>
                          <a href="tel:+14807216561" className="btn btn-mod btn-border btn-large btn-round btn-hover-anim btn-secondary-light">
                            <span>Call (480) 721-6561</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </section>
          </section>
        </main>
        <Footer1 />
      </div>
    </div>
  );
}
