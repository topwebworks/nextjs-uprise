import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import HeaderAMW from "@/components/headers/HeaderAMW";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/utils/seo";
import AMWPaverService from "@/components/homes/amw/AMWPaverService";


export const metadata = buildMetadata({
  title: "Paver Installation San Tan Valley AZ | Travertine, Concrete Pavers & Flagstone | AMW",
  description:
    "Expert paver installation for driveways, patios, pool decks & walkways. Travertine, concrete pavers, flagstone & porcelain. Serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler & Apache Junction AZ. Licensed ROC #359843. Free estimates.",
  path: "/services/paver-installation",
});
export default function PaverInstallationPage() {
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
                <ImageBackground src="/assets/tww-assets/amw-images/IMG_4281.HEIC.jpg" alt="" fixed priority />
                <div className="container position-relative pt-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-30">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            Pavers that stay locked. Base, pitch, and finish.
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-lg-12">
                            <p
                              className="section-descr mb-0 wow fadeInUp"
                              data-wow-delay="0.6s"
                              data-wow-duration="1.2s"
                            >
                              Driveways, patios, pool decks &amp; walkways. Installed right, from base to finish, built to hold in the Arizona heat.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </section>
              {/* End Header Section */}
              <section className="page-section" id="services">
                <AMWPaverService />
              </section>
              <section className="page-section pt-0 z-index-1">
                <div className="container position-relative">
                  <div className="row mb-50 mb-sm-50">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title-small mb-20">
                        Why choose AMW for pavers?
                      </h2>
                      <p className="text-gray mb-0">
                        The material is only as good as what&rsquo;s under it. Base depth, compaction, pitch, edge restraints, and joint sand are what separate a paver job that holds from one that shifts.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-n30 wow fadeInUp">
                    {[
                      { icon: "mi-clock",           title: "Base Built to Last",        description: "4–6 inches of compacted aggregate base on every job — the foundation that gives pavers the best chance of performing long-term in Arizona conditions." },
                      { icon: "mi-drop",            title: "Drainage Planned First",     description: "Surface pitch confirmed before the first paver goes down. Water drains away from the structure — not toward it. A detail most contractors skip." },
                      { icon: "mi-table",           title: "Clean Cuts & Tight Joints",  description: "Patterns laid out before cutting begins. Cuts made cleanly so joints stay tight, edges hold, and the finished surface looks intentional." },
                      { icon: "mi-document-check",  title: "Licensed & Insured",         description: "AZ licensed hardscape contractor — ROC #359843 · ROC #346552. Every job is fully insured from start to final walkthrough." },
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
                <ImageBackground src="/assets/tww-assets/amw-images/IMG_1773.HEIC.jpg" alt="" fixed />
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title amw-service-cta-title mb-0">
                        <AnimatedText text="The work you see is only as good as what's underneath." />
                      </h2>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container position-relative amw-service-cta-overlap">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <div
                      className="amw-service-cta-photo amw-service-cta-photo--pavers wow scaleOutIn"
                      data-wow-offset={0}
                    >
                      <ImageBackground
                        src="/assets/tww-assets/amw-images/IMG_2401.HEIC.jpg"
                        alt="Paver installation - AMW Hardscape Solutions"
                        sizes="(max-width: 991px) 100vw, 66vw"
                        objectPosition="center 48%"
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
                        Ready to get your pavers installed? We come to you, walk the&nbsp;property, and give you a written quote&nbsp;— no&nbsp;obligation, no&nbsp;pressure.
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
