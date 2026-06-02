import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import HeaderAMW from "@/components/headers/HeaderAMW";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/utils/seo";
import AMWDrivewayService from "@/components/homes/amw/AMWDrivewayService";

export const metadata = buildMetadata({
  title: "Driveway Contractor San Tan Valley AZ | Widening, RV Pads & Turnarounds | AMW Hardscape",
  description:
    "Driveway widening, parking pads, RV pads & turnarounds. Proper tie-in, base prep, drainage & control joints. Serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler, Apache Junction & Maricopa AZ. Licensed ROC #359843. Free estimates.",
  path: "/services/driveways",
});

export default function DrivewayAdditionsPage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <HeaderAMW />
          </nav>
          <main id="main">
            <>
              <section
                className="page-section bg-dark-1 bg-dark-alpha-70 light-content amw-fixed-bg-host amw-service-hero"
              >
                <ImageBackground src="/assets/tww-assets/amw-images/IMG_0524.jpg" alt="" fixed priority />
                <div className="container position-relative pt-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-30">
                          <span className="wow charsAnimIn" data-splitting="chars">
                            Wider driveways, parking pads &amp;&nbsp;RV pads.
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-lg-12">
                            <p
                              className="section-descr mb-0 wow fadeInUp"
                              data-wow-delay="0.6s"
                              data-wow-duration="1.2s"
                            >
                              Widening, parking pads, RV pads &amp; turnarounds. Properly tied in, drained right, and built to hold up long-term.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="page-section" id="services">
                <AMWDrivewayService />
              </section>

              <section className="page-section pt-0 z-index-1">
                <div className="container position-relative">
                  <div className="row mb-50 mb-sm-50">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title-small mb-20">
                        Why choose AMW for driveway additions?
                      </h2>
                      <p className="text-gray mb-0">
                        A driveway addition that cracks or separates at the joint isn&rsquo;t a material problem — it&rsquo;s an installation problem. Tie-in, drainage, and base spec are decided before the first form is set.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-n30 wow fadeInUp">
                    {[
                      { icon: "mi-link",            title: "Proper Tie-In",             description: "Concrete-to-concrete additions are saw-cut and doweled with epoxy-set rebar at 18-inch centers. Undoweled butt joints crack apart under Arizona thermal cycling. We don't pour them." },
                      { icon: "mi-drop",            title: "Drainage Designed First",   description: "Existing drainage direction confirmed before the addition is designed. New surface drains with the existing pattern — no new low points against the structure, no sheet flow diverted toward the house." },
                      { icon: "mi-layers",          title: "Base Built to Spec",        description: "4–6 inches of compacted aggregate base on every addition. Caliche variations addressed at base prep. Control joints at maximum 10-foot spacing, cut to one-quarter slab depth." },
                      { icon: "mi-document-check",  title: "Licensed & Insured",        description: "AZ licensed hardscape contractor — ROC #359843 · ROC #346552. Every driveway addition is fully insured from first excavation through final walkthrough." },
                    ].map((elm, i) => (
                      <div key={i} className="col-sm-6 col-xl-3 d-flex align-items-stretch">
                        <div className="alt-features-item box-shadow text-center mt-30 w-100">
                          <div className="alt-features-icon mb-20">
                            <i className={elm.icon} style={{ fontSize: 32 }} aria-hidden="true" />
                          </div>
                          <h4 className="alt-features-title">{elm.title}</h4>
                          <div className="alt-features-descr">{elm.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section
                className="page-section amw-fixed-bg-host amw-service-cta-section"
              >
                <ImageBackground src="/assets/tww-assets/amw-images/IMG_1509.HEIC.jpg" alt="" fixed />
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title amw-service-cta-title mb-0">
                        <AnimatedText text="The tie-in is where driveway additions succeed or fail." />
                      </h2>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container position-relative amw-service-cta-overlap">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <div
                      className="amw-service-cta-photo amw-service-cta-photo--driveways wow scaleOutIn"
                      data-wow-offset={0}
                    >
                      <ImageBackground
                        src="/assets/tww-assets/amw-images/IMG_3844.HEIC.jpg"
                        alt="Driveway addition - AMW Hardscape Solutions"
                        sizes="(max-width: 991px) 100vw, 66vw"
                        objectPosition="center 52%"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <section className="page-section pt-60 pt-sm-40 amw-service-after-cta">
                <div className="container position-relative">
                  <div className="decoration-21 d-none d-lg-block"
                    data-rellax-y
                    data-rellax-speed="0.7"
                    data-rellax-percentage="0.5"
                  >
                    <Image
                      width={148}
                      height={148}
                      className="svg-shape"
                      src="/assets/images/decoration-2.svg"
                      alt=""
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="row text-center wow fadeInUp">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <p className="section-descr mb-50 mb-sm-30">
                        Ready to expand your driveway? We come to you, assess the existing surface and drainage, and give you a written quote&nbsp;— no&nbsp;obligation, no&nbsp;pressure.
                      </p>
                      <div className="d-flex flex-wrap gap-3 justify-content-center">
                        <a href="tel:+14807216561" className="btn btn-mod btn-large btn-round btn-hover-anim">
                          <span>Call (480) 723-6561</span>
                        </a>
                        <Link href="/#contact-form" className="btn btn-mod btn-border btn-large btn-round btn-hover-anim btn-secondary-light">
                          <span>Get a Free Estimate</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
