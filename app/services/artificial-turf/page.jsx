import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import HeaderAMW from "@/components/headers/HeaderAMW";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/utils/seo";
import AMWTurfService from "@/components/homes/amw/AMWTurfService";


export const metadata = buildMetadata({
  title: "Artificial Turf Installation San Tan Valley AZ | Turf & Natural Sod | AMW Hardscape",
  description:
    "Artificial turf and natural sod installation for backyards, front yards, pet runs & play areas. Proper sub-base, drainage & seaming. Serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler & Apache Junction AZ. Free estimates.",
  path: "/services/artificial-turf",
});
export default function ArtificialTurfPage() {
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
                <ImageBackground src="/assets/tww-assets/amw-images/Arizona_house_in_suburb_frontyard_202605131833.jpeg" alt="" fixed priority />
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
                            Artificial turf and sod. Prepped, laid,&nbsp;done.
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-lg-12">
                            <p
                              className="section-descr mb-0 wow fadeInUp"
                              data-wow-delay="0.6s"
                              data-wow-duration="1.2s"
                            >
                              Backyards, front yards, pet runs &amp; play areas — artificial turf or natural sod. Serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler, Apache Junction &amp; the East Valley. Sub-base prep, drainage, and the right spec for your yard.
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
                <AMWTurfService />
              </section>
              <section className="page-section pt-0 z-index-1">
                <div className="container position-relative">
                  <div className="row mb-50 mb-sm-50">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title-small mb-20">
                        Why choose AMW for turf installation?
                      </h2>
                      <p className="text-gray mb-0">
                        Sub-base, drainage grade, and seaming are what determine whether a turf job holds for a decade or starts failing after the first monsoon season.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-n30 wow fadeInUp">
                    {[
                      { icon: "mi-layers",          title: "Sub-Base Built Right",      description: "4–6 inches of compacted decomposed granite base on every job — artificial or sod. The foundation that keeps turf level, draining, and stable through Arizona heat cycles and monsoon seasons." },
                      { icon: "mi-drop",            title: "Drainage Graded First",      description: "Sub-base pitch confirmed before the first roll or sod piece goes down. Water moves away from structures on every install. Grade errors at this stage are permanent once the surface is placed." },
                      { icon: "mi-table",           title: "Artificial & Natural Sod",  description: "We install both. Artificial turf where low maintenance and year-round appearance matter most. Natural sod — Bermuda, hybrid varieties, St. Augustine — where the yard and client call for it." },
                      { icon: "mi-document-check",  title: "Licensed & Insured",         description: "AZ licensed hardscape contractor — ROC #359843 · ROC #346552. Every turf job is fully insured from excavation through final walkthrough." },
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
                <ImageBackground src="/assets/tww-assets/amw-images/IMG_2939.HEIC.jpg" alt="" fixed />
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title amw-service-cta-title mb-0">
                        <AnimatedText text="Turf built for Arizona yards and how you use them." />
                      </h2>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container position-relative amw-service-cta-overlap">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <div
                      className="amw-service-cta-photo amw-service-cta-photo--turf wow scaleOutIn"
                      data-wow-offset={0}
                    >
                      <ImageBackground
                        src="/assets/tww-assets/amw-images/IMG_4519.HEIC.jpg"
                        alt="Turf installation - AMW Hardscape Solutions"
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
                        Artificial turf or natural sod — we come to you, walk the&nbsp;property, assess the soil and drainage, and give you a written quote&nbsp;— no&nbsp;obligation, no&nbsp;pressure.
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
