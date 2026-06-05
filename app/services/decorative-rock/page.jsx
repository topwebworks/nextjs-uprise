import { notFound } from "next/navigation";
import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import HeaderQuest from "@/components/headers/HeaderQuest";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/utils/seo";
import AMWRockService from "@/components/homes/amw/AMWRockService";

export const metadata = buildMetadata({
  title: "Decorative Rock Installation San Tan Valley AZ | Desert Rock & DG | AMW Hardscape",
  description:
    "Decorative rock, decomposed granite & accent boulder installation. Site prep, weed barrier, metal edging & proper drainage. Serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler, Apache Junction & Maricopa AZ. Free estimates.",
  path: "/services/decorative-rock",
});

export default function DecorativeRockPage() {
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
                <ImageBackground src="/assets/tww-assets/amw-images/1000020965.jpg" alt="" fixed priority />
                <div className="container position-relative pt-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-30">
                          <span className="wow charsAnimIn" data-splitting="chars">
                            Base, barrier, drainage. Then the&nbsp;rock.
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-lg-12">
                            <p
                              className="section-descr mb-0 wow fadeInUp"
                              data-wow-delay="0.6s"
                              data-wow-duration="1.2s"
                            >
                              Desert rock, DG &amp; accent boulders for Arizona yards. Site graded, barrier down, edging set so the rock stays where it belongs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="page-section" id="services">
                <AMWRockService />
              </section>

              <section className="page-section pt-0 z-index-1">
                <div className="container position-relative">
                  <div className="row mb-50 mb-sm-50">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title-small mb-20">
                        Why choose AMW for decorative rock?
                      </h2>
                      <p className="text-gray mb-0">
                        The grade, the barrier, the edging, and how the rock field integrates with every adjacent surface — that&rsquo;s the work. That&rsquo;s what AMW gets right before the first stone is placed.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-n30 wow fadeInUp">
                    {[
                      { icon: "mi-layers",          title: "Grade Before Material",      description: "Sub-grade established for positive drainage before any barrier or rock goes down. Slope problems at this stage can't be fixed without a full tear-out." },
                      { icon: "mi-drop",            title: "Drainage That Holds",        description: "Caliche hardpan, poor native soil, and monsoon volume are Arizona realities. We address drainage issues in the base at site-prep — not after the rock is down." },
                      { icon: "mi-table",           title: "Contained & Integrated",     description: "Metal edging staked at every border. Tight transitions to pavers, concrete, turf, and block walls. Rock that stays put and reads as part of a finished hardscape." },
                      { icon: "mi-document-check",  title: "Licensed & Insured",         description: "AZ licensed hardscape contractor — ROC #359843 · ROC #346552. Every decorative rock job is fully insured from the first site visit through final walkthrough." },
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
                <ImageBackground src="/assets/tww-assets/amw-images/wix_inset_04.jpg" alt="" fixed />
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-title amw-service-cta-title mb-0">
                        <AnimatedText text="The install is the service. The rock is just the material." />
                      </h2>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container position-relative amw-service-cta-overlap">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <div
                      className="amw-service-cta-photo amw-service-cta-photo--rock wow scaleOutIn"
                      data-wow-offset={0}
                    >
                      <ImageBackground
                        src="/assets/tww-assets/amw-images/IMG_2460.HEIC.jpg"
                        alt="Decorative rock installation - AMW Hardscape Solutions"
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
                        Ready to get your yard done right? We come to you, walk the&nbsp;property, and give you a written quote&nbsp;— no&nbsp;obligation, no&nbsp;pressure.
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
