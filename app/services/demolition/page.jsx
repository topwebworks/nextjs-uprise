import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import HeaderAMW from "@/components/headers/HeaderAMW";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/utils/seo";
import AMWDemolitionService from "@/components/homes/amw/AMWDemolitionService";

export const metadata = buildMetadata({
  title: "Concrete Demolition & Removal San Tan Valley AZ | Haul & Disposal | AMW Hardscape",
  description:
    "Concrete demolition, paver removal, turf & rock removal with full haul and disposal. Site assessment included, sub-grade left ready for the next install. Serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler & Apache Junction AZ. Free estimates.",
  path: "/services/demolition",
});

export default function DemoRemovalPage() {
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
                <ImageBackground src="/assets/tww-assets/amw-images/IMG_4249.HEIC.jpg" alt="" fixed priority />
                <div className="container position-relative pt-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-30">
                          <span className="wow charsAnimIn" data-splitting="chars">
                            Demolition &amp; removal. Clean site, ready to build.
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-lg-12">
                            <p
                              className="section-descr mb-0 wow fadeInUp"
                              data-wow-delay="0.6s"
                              data-wow-duration="1.2s"
                            >
                              Concrete, pavers, turf, and rock. Full removal, full haul, sub-grade assessed and left ready for whatever goes in next.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="page-section" id="services">
                <AMWDemolitionService />
              </section>

              <section className="page-section pt-0 z-index-1">
                <div className="container position-relative">
                  <div className="row mb-50 mb-sm-50">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title-small mb-20">
                        Why choose AMW for demolition &amp; removal?
                      </h2>
                      <p className="text-gray mb-0">
                        Demolition is the first job on every hardscape project. Sub-grade condition, drainage slope, and utility conflicts are all decided here — and determine what every crew that follows is working with.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-n30 wow fadeInUp">
                    {[
                      { icon: "mi-search",          title: "Assessment Before Demolition",    description: "Every demolition starts with a site walk — caliche depth, irrigation under the slab, drainage, and scope boundary marked before equipment moves. A bid without a site walk is a guess." },
                      { icon: "mi-drop",            title: "Sub-Grade Left to Spec",    description: "When AMW leaves a demolition site, the sub-grade is graded to elevation and drained away from the structure. The next install crew starts with an assessed, clean surface." },
                      { icon: "mi-archive",         title: "Haul & Disposal Included",  description: "Concrete, pavers, rock, turf, and base material leave with us. Haul truck sized to the job. Disposal is in the quote — not added after the truck is loaded. Site is clear when we leave." },
                      { icon: "mi-document-check",  title: "Licensed & Insured",        description: "AZ licensed hardscape contractor — ROC #359843 · ROC #346552. Every demolition job is fully insured from the first equipment move through final site turnover." },
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
                <ImageBackground src="/assets/tww-assets/amw-images/IMG_0524.jpg" alt="" fixed />
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title amw-service-cta-title mb-0">
                        <AnimatedText text="The new install is only as good as the demolition that came before it." />
                      </h2>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container position-relative amw-service-cta-overlap">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <div
                      className="amw-service-cta-photo amw-service-cta-photo--demolition wow scaleOutIn"
                      data-wow-offset={0}
                    >
                      <ImageBackground
                        src="/assets/tww-assets/amw-images/IMG_3706.HEIC.jpg"
                        alt="Demolition and removal - AMW Hardscape Solutions"
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
                        Need something removed before the new work goes in? We come to you, walk the&nbsp;property, assess the material and sub-grade, and give you a written quote&nbsp;— no&nbsp;obligation, no&nbsp;pressure.
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
