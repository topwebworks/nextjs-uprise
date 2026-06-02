import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import HeaderAMW from "@/components/headers/HeaderAMW";
import AnimatedText from "@/components/common/AnimatedText";
import AMWFeatureCarousel from "@/components/homes/amw/AMWFeatureCarousel";
import AMWSplitPadding from "@/components/homes/amw/AMWSplitPadding";
import Image from "next/image";
import Link from "next/link";
import site from "@/data/site";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "About AMW Hardscape Solutions | Licensed Hardscape Contractor San Tan Valley & East Valley AZ",
  description:
    "AMW Hardscape Solutions — licensed hardscape contractor (ROC #359843 · ROC #346552) with 5-star Google reviews. Serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler, Apache Junction & the East Valley. Pavers, concrete, turf, rock & more.",
  path: "/about",
});

const amwStandards = [
  "Drainage checked",
  "Base compacted",
  "Edge restraints",
  "Site cleaned",
];

const amwWorkCards = [
  {
    title: "Hands-On AMW Crew",
    roleLines: [
      "Crews focused on prep, compaction,",
      "clean edges, and final walkthroughs.",
    ],
    image:
      "/assets/tww-assets/amw-images/IMG_4281.HEIC.jpg",
    position: "center",
  },
  {
    title: "Craft-Focused People",
    roleLines: [
      "Layout, cuts, and transitions planned",
      "before the first paver is set.",
    ],
    image:
      "/assets/tww-assets/amw-images/IMG_4182.jpg",
    position: "center",
  },
  {
    title: "Trusted Field Partners",
    roleLines: [
      "Trusted partners held to the same",
      "standards from demolition through cleanup.",
    ],
    image:
      "/assets/tww-assets/amw-images/472558464_122133547166562324_4988564263005936421_n.jpg",
    position: "center",
  },
  {
    title: "Respectful Job Sites",
    roleLines: [
      "Organized job sites, haul-away,",
      "and a clean space at sign-off.",
    ],
    image:
      "/assets/tww-assets/amw-images/b33260_60fa8433f1e04529be6632e3d870638c~mv2.jpg",
    position: "center",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <HeaderAMW />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <section
                className="page-section bg-dark-1 bg-dark-alpha-60 light-content amw-fixed-bg-host amw-secondary-hero"
              >
                <ImageBackground src="/assets/tww-assets/amw-images/IMG_4280.HEIC.jpg" alt="" fixed priority />
                <div className="container position-relative pt-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-40">
                          <AnimatedText text="The kind of work you'll brag about to your neighbors." />
                        </h1>
                        {/* Feature List */}
                        <div
                          className="mt-n10 wow fadeInUp"
                          data-wow-delay="0.6s"
                          data-wow-duration="1.2s"
                        >
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              Licensed &amp; Insured
                            </div>
                          </div>
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              {site.roc.join(" / ")}
                            </div>
                          </div>
                        </div>
                        {/* End Feature List */}
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </section>
            </section>
            <section className="page-section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 mb-xs-50">
                    <div className="call-action-4-images">
                      <div className="call-action-4-image-1" style={{ overflow: "hidden" }}>
                        <Image
                          src="/assets/tww-assets/amw-images/473177002_122133547196562324_3990472910039640132_n.jpg"
                          alt="Stepping stone entry - AMW Hardscape Solutions"
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          sizes="(max-width: 767px) 100vw, 42vw"
                          style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                      </div>
                      <div
                        className="call-action-4-image-2"
                        data-rellax-y=""
                        data-rellax-speed="0.7"
                        data-rellax-percentage="0.25"
                        style={{ right: "-8%" }}
                      >
                        <Image
                          src="/assets/tww-assets/amw-images/472536733_122133547178562324_4552320897647043634_n.jpg"
                          alt="Front entry pavers - AMW Hardscape Solutions"
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset={0}
                          sizes="(max-width: 767px) 70vw, 32vw"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-7 col-xl-6 offset-xl-1 mt-n10">
                    <div className="wow linesAnimIn" data-splitting="lines">
                      <p className="lead mt-0 mb-40">
                        AMW Hardscape Solutions is a licensed hardscape
                        contractor serving San Tan Valley, Mesa, Queen Creek,
                        and the greater East Valley. We specialize in paver
                        installation, concrete, artificial turf, decorative
                        rock, and driveway additions, with every phase handled
                        through one point of contact from estimate to final
                        walkthrough.
                      </p>
                      <p className="text-gray mb-40">
                        We started this company because homeowners deserve
                        better: honest pricing, quality materials, and a crew
                        that actually shows up and finishes the job. We measure
                        the space, check grade and drainage, talk through
                        material options, and put the scope in writing before
                        work begins. Most of our business comes from referrals.
                        We think that says everything.
                      </p>
                    </div>
                    <div
                      className="local-scroll wow fadeInUp"
                      data-wow-offset={0}
                    >
                      <Link
                        href="/#services"
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>Our Services</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="page-section bg-dark bg-dark-alpha-70 light-content amw-fixed-bg-host"
            >
              <ImageBackground src="/assets/tww-assets/amw-images/new_04.jpg" alt="" fixed />
              <AMWFeatureCarousel />
            </section>
            <>
              <section className="page-section" id="team">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-caption mb-xs-10 wow fadeInUp">
                        Our People
                      </h2>
                      <h3 className="section-title mb-50 mb-sm-30">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          A field team built around clean work and clear handoffs.
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="row position-relative mt-n40">
                    {/* Decorative Accent */}
                    <div
                      className="decoration-8 d-none"
                      data-rellax-y=""
                      data-rellax-speed="-0.6"
                      data-rellax-percentage={0}
                    >
                      <Image
                        src="/assets/images/decoration-2.svg"
                        width={103}
                        height={223}
                        alt=""
                        style={{ filter: "brightness(0)", opacity: 0.07, width: "auto", height: "auto" }}
                      />
                    </div>
                    {/* End Decorative Accent */}
                    {amwWorkCards.map((elm, i) => (
                      <div
                        key={i}
                        className="col-sm-6 col-lg-3 mt-40 wow fadeInUp"
                        data-wow-delay={`${0.08 + i * 0.12}s`}
                        data-wow-duration="0.9s"
                      >
                        <div className="team-item">
                          <div
                            className="team-item-image"
                            role="img"
                            aria-label={elm.title}
                            style={{
                              aspectRatio: "3 / 4",
                              position: "relative",
                              overflow: "hidden",
                              width: "100%",
                            }}
                          >
                            <Image
                              src={elm.image}
                              alt=""
                              fill
                              sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 25vw"
                              style={{ objectFit: "cover", objectPosition: elm.position }}
                            />
                          </div>
                          <div className="team-item-descr">
                            <div className="team-item-name">{elm.title}</div>
                            <div className="team-item-role">
                              {elm.roleLines.map((line, lineIndex) => (
                                <span key={lineIndex} className="d-block">
                                  {line}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section className="pt-30">
                <div id="paddingRightContainer" className="container" />
                <div className="row g-0">
                  <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
                    <div
                      id="paddingRight"
                      className="split-column-right bg-dark-1 light-content position-relative d-flex align-items-center"
                      data-rellax-y=""
                      data-rellax-speed="0.5"
                      data-rellax-percentage="0.5"
                    >
                      <div className="position-absolute top-0 start-0 pt-2 ps-2" style={{ opacity: 0.08 }}>
                        <Image
                          width={192}
                          height={222}
                          src="/assets/images/dot-field-decoration.svg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="section-title mb-30">
                          This is what done right looks like.
                        </h2>
                        <p className="mb-50">
                          A patio, driveway, or turf install only lasts when
                          the hidden work is done right. Our crew checks grade,
                          compacts the base, sets edge restraints, and handles
                          the details that keep the finished yard stable.
                        </p>
                        <div className="row mt-n20">
                          {amwStandards.map((item, index) => (
                            <div key={index} className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20">
                              <div className="features-list-icon">
                                <i className="mi-check" />
                              </div>
                              <div className="features-list-text">{item}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
                    <div className="split-image-left">
                      <Image
                        width={1100}
                        height={930}
                        src="/assets/tww-assets/amw-images/IMG_4523.HEIC.jpg"
                        alt="AMW crew setting pavers over a prepared base at an Arizona home"
                        sizes="(max-width: 991px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                <AMWSplitPadding />
              </section>
            </>
            <section className="page-section">
              <div className="container position-relative">
                <div className="row text-center wow fadeInUp">
                  <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <h2 className="section-title-small mb-20">
                      Ready to talk through your yard?
                    </h2>
                    <p className="section-descr mb-50 mb-sm-30">
                      Tell us what you want changed. We will walk the space,
                      answer questions, and give you a clear estimate for the
                      hardscape work that makes sense.
                    </p>
                    <div className="local-scroll">
                      <Link href="/#contact-form" className="btn btn-mod btn-large btn-round btn-hover-anim">
                        <span>Get a Free Estimate</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
