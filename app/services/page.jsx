import { notFound } from "next/navigation";
import Footer1 from "@/components/footers/Footer1";
import HeaderTWW from "@/components/headers/HeaderTWW";
import ImageBackground from "@/components/common/ImageBackground";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Hardscape Services Client City & Service Area AZ | Client Business Name",
  description:
    "Pavers, concrete, artificial turf, decorative rock, demolition & driveway work. Licensed hardscape contractor serving the surrounding service area. Free estimates.",
  path: "/services",
});

const serviceCards = [
  {
    number: "01",
    title: "Paver Installation",
    description:
      "Travertine, concrete pavers, flagstone, and porcelain for driveways, patios, pool decks, and walkways. Base, pitch, and finish — built to hold through Arizona heat cycles.",
    image: "/assets/tww-assets/tww-images/Arizona_house_installing_beautiful_202605131833.jpeg",
    href: "/services/paver-installation",
  },
  {
    number: "02",
    title: "Concrete Work",
    description:
      "Driveways, patio slabs, RV pads, driveway extensions, repairs, and full replacement. One crew from demolition through pour — properly prepped, properly poured.",
    image: "/assets/tww-assets/tww-images/Arizona_house_installing_pool_backyard_202605131833.jpeg",
    href: "/services/concrete",
  },
  {
    number: "03",
    title: "Artificial Turf & Natural Sod",
    description:
      "Artificial turf and natural sod installation for backyards, front yards, pet runs, and play areas. Sub-base prep, drainage, and the right product for your yard and how you use it.",
    image: "/assets/tww-assets/tww-images/Patio_pavers_installed_in_backyard_202605131833.jpeg",
    href: "/services/artificial-turf",
  },
  {
    number: "04",
    title: "Decorative Rock",
    description:
      "River rock, Apache brown, gold quartzite, DG, and accent boulders installed right — site prep, commercial barrier, metal edging, and proper drainage. Not just material dropped on the ground.",
    image: "/assets/tww-assets/tww-images/Patio_pavers_installed_in_backyard_202605131833_2.jpeg",
    href: "/services/decorative-rock",
  },
  {
    number: "05",
    title: "Demolition & Removal",
    description:
      "Concrete, pavers, turf, and rock removal with full haul and disposal. Site assessment, defined scope, proper removal method — sub-grade left clean and ready for the next install.",
    image: "/assets/tww-assets/tww-images/Patio_pavers_installed_in_backyard_202605131833_3.jpeg",
    href: "/services/demolition",
  },
  {
    number: "06",
    title: "Driveway Additions",
    description:
      "Widening, parking pads, RV pads, and turnarounds. The tie-in to existing hardscape, the drainage design, and the base spec are what determine whether the addition holds together long-term.",
    image: "/assets/tww-assets/tww-images/Architectural_photo_of_Arizona_suburb_202605131833.jpeg",
    href: "/services/driveways",
  },
];

export default function ServicesPage() {
  notFound();
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
          <HeaderTWW />
        </nav>
        <main id="main">
          <section
            className="page-section bg-dark-1 bg-dark-alpha-70 light-content amw-fixed-bg-host amw-service-hero"
          >
            <ImageBackground src="/assets/tww-assets/tww-images/architectual_photo_of_arizona_house_202605131833.jpeg" alt="" fixed priority />
            <div className="container position-relative pt-50">
              <div className="text-center">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <h1 className="hs-title-1 mb-30">
                      <AnimatedText text="Hardscape services for the Service Area." />
                    </h1>
                    <p className="section-descr mb-0 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1.2s">
                      Pavers, concrete, turf, rock, demolition, and driveway work — one licensed crew, one point of contact, from estimate to final walkthrough.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <div className="container position-relative">
              <div className="row mt-n30">
                {serviceCards.map((card, i) => (
                  <div key={i} className="col-md-6 col-lg-4 mt-30 d-flex">
                    <Link href={card.href} className="text-decoration-none d-flex flex-column w-100" style={{ color: "inherit" }}>
                      <div className="alt-features-item box-shadow d-flex flex-column wow fadeScaleIn" data-wow-delay={`${i * 0.08}s`} style={{ flex: 1, overflow: "hidden", padding: 0 }}>
                        <div style={{ height: 220, position: "relative", flexShrink: 0 }}>
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            style={{ objectFit: "cover", objectPosition: "center", filter: "contrast(1.1) saturate(1.2) brightness(1.04)" }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div style={{ padding: "24px 26px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#999", marginBottom: 8 }}>{card.number}</div>
                          <h3 className="alt-features-title mb-10" style={{ fontSize: 20 }}>{card.title}</h3>
                          <p className="alt-features-descr text-gray mb-0" style={{ flex: 1 }}>{card.description}</p>
                          <div className="mt-20" style={{ fontSize: 13, fontWeight: 600, color: "#111", letterSpacing: "0.04em" }}>
                            Learn more <i className="mi-arrow-right align-center" style={{ fontSize: 14 }} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="page-section pt-0">
            <div className="container position-relative">
              <div className="row text-center wow fadeInUp">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <h2 className="section-title-small mb-20">Ready to get started?</h2>
                  <p className="section-descr mb-50 mb-sm-30">
                    We come to you, walk the property, and give you a written quote — no obligation, no pressure.
                  </p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <a href="tel:+10000000000" className="btn btn-mod btn-large btn-round btn-hover-anim">
                      <span>Call 000-000-0000</span>
                    </a>
                    <Link href="/#contact-form" className="btn btn-mod btn-border btn-large btn-round btn-hover-anim">
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
  );
}
