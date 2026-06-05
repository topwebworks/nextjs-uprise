import { notFound } from "next/navigation";
import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import HeaderQuest from "@/components/headers/HeaderQuest";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/utils/seo";
import AMWConcreteService from "@/components/homes/amw/AMWConcreteService";

export const metadata = buildMetadata({
  title: "Concrete Contractor San Tan Valley AZ | Driveways, Patios & RV Pads | AMW Hardscape",
  description:
    "Concrete driveways, patio slabs, RV pads, driveway extensions, repairs & full replacement. Serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler, Apache Junction & Maricopa AZ. Licensed ROC #359843. Free estimates.",
  path: "/services/concrete",
});

export default function ConcreteSlabPage() {
  notFound();
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <HeaderQuest />
          </nav>
          <main id="main">
            <>
              <section
                className="page-section bg-dark-1 bg-dark-alpha-70 light-content amw-fixed-bg-host amw-service-hero"
              >
                <ImageBackground src="/assets/tww-assets/amw-images/IMG_4182.jpg" alt="" fixed priority />
                <div className="container position-relative pt-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-30">
                          <span className="wow charsAnimIn" data-splitting="chars">
                            Concrete work. Prepped, poured,&nbsp;finished.
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-lg-12">
                            <p className="section-descr mb-0 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1.2s">
                              Driveways, patios, RV pads &amp; extensions. Subgrade prepped, forms set right, poured and finished clean.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="page-section" id="services">
                <AMWConcreteService />
              </section>

              <section className="page-section pt-0 z-index-1">
                <div className="container position-relative">
                  <div className="row mb-50 mb-sm-50">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title-small mb-20">
                        Why choose AMW for concrete work?
                      </h2>
                      <p className="text-gray mb-0">
                        Driveways, patios, RV pads, and repairs — one crew from demolition through pour. The subgrade prep and pitch before the truck arrives is what separates concrete that holds from concrete that cracks.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-n30 wow fadeInUp">
                    {[
                      { icon: "mi-layers",          title: "Subgrade Compacted First",   description: "Concrete cracks when the ground moves. AMW excavates, removes organics, and compacts the subgrade before any forming begins — the step most contractors skip." },
                      { icon: "mi-drop",            title: "Pitched for Drainage",        description: "Every slab is graded so water drains away from the structure. Pooling water against a foundation causes long-term damage — we build pitch into the layout plan from day one." },
                      { icon: "mi-grid",            title: "Control Joints Done Right",   description: "Concrete always cracks — the question is where. Properly spaced control joints guide cracks to planned locations so they stay invisible and don't compromise the slab." },
                      { icon: "mi-document-check",  title: "Licensed & Insured",          description: "AZ licensed hardscape contractor — ROC #359843 · ROC #346552. Every job is fully insured from start to final walkthrough." },
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
                <ImageBackground src="/assets/tww-assets/amw-images/IMG_1167.HEIC.jpg" alt="" fixed />
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title amw-service-cta-title mb-0">
                        <AnimatedText text="The pour is the easy part. Prep is everything." />
                      </h2>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container position-relative amw-service-cta-overlap">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <div
                      className="amw-service-cta-photo amw-service-cta-photo--concrete wow scaleOutIn"
                      data-wow-offset={0}
                    >
                      <ImageBackground
                        src="/assets/tww-assets/amw-images/IMG_4156.jpg"
                        alt="Concrete slab pour - AMW Hardscape Solutions"
                        sizes="(max-width: 991px) 100vw, 66vw"
                        objectPosition="center 45%"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <section className="page-section pt-60 pt-sm-40 amw-service-after-cta">
                <div className="container position-relative">
                  <div className="decoration-21 d-none d-lg-block" data-rellax-y data-rellax-speed="0.7" data-rellax-percentage="0.5">
                    <Image width={148} height={148} className="svg-shape" src="/assets/images/decoration-2.svg" alt="" style={{ width: "auto", height: "auto" }} />
                  </div>
                  <div className="row text-center wow fadeInUp">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <p className="section-descr mb-50 mb-sm-30">
                        New pour, extension, repair, or full replacement — we come to you, walk the&nbsp;property, and give you a written quote&nbsp;— no&nbsp;obligation, no&nbsp;pressure.
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
