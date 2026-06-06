"use client";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import "@/components/homes/tww-alt/TWWService.module.css";

const services = [
  {
    id: "pools",
    label: "Pool Builds & Remodels",
    number: "01",
    title: "Pool Builds & Remodels",
    description:
      "New construction or a full remodel — we handle design, excavation, plumbing, decking, coping, and finish work. Every pool is engineered for the Arizona climate and built to last decades.",
    image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_2.jpeg",
  },
  {
    id: "hardscape",
    label: "Hardscape & Pavers",
    number: "02",
    title: "Hardscape & Paver Design",
    description:
      "Custom paver patios, pool decks, walkways, and travertine installations designed as one cohesive composition. We source premium materials and install with precision — no settling, no gaps, no mismatched finishes.",
    image: "/assets/tww-assets/tww-images/Arizona_suburb_home_patio_pool_202605131833.jpeg",
  },
  {
    id: "landscaping",
    label: "Landscaping & Outdoor Living",
    number: "03",
    title: "Landscaping & Outdoor Living",
    description:
      "Complete outdoor transformations — from curated desert plant palettes and irrigation to outdoor kitchens, pergolas, and lighting. We design environments that perform as well in the Arizona summer as they look year-round.",
    image: "/assets/tww-assets/tww-images/Arizona_house_backyard_landscaping_202605131833.jpeg",
  },
];

export default function TWWService2() {
  return (
    <div className="container position-relative quest-service-wrap">
      <div className="row">

        {/* Left — heading + vertical tabs */}
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">What We Build</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="Every outdoor space, under one roof." />
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p className="section-descr mb-20 wow fadeInUp" data-wow-delay="0.4s">
                Pools, hardscape, and landscaping handled in-house — one team, one timeline, one vision from concept to completion.
              </p>
              <p className="section-descr mb-50 mb-sm-30 wow fadeInUp" data-wow-delay="0.5s">
                We don't hand off to subcontractors. Every phase — from excavation to final finish — is managed by the same crew, held to the same standard.
              </p>
            </div>
          </div>

          <ul className="nav nav-tabs services-tabs wow fadeInUp" data-wow-delay="0.55s" role="tablist">
            {services.map((svc, i) => (
              <li key={svc.id} role="presentation">
                <a
                  href={`#service-${svc.id}`}
                  className={i === 0 ? "active" : ""}
                  aria-controls={`service-${svc.id}`}
                  role="tab"
                  aria-selected={i === 0}
                  data-bs-toggle="tab"
                >
                  {svc.label} <span className="number">{svc.number}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — tab content panels */}
        <div className="col-lg-6 d-flex wow fadeInLeft" data-wow-delay="0.55s" data-wow-offset={275}>
          <div className="tab-content services-content">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`tab-pane services-content-item fade ${i === 0 ? "show active" : ""}`}
                id={`service-${svc.id}`}
                role="tabpanel"
              >
                <div className="services-text">
                  <div className="services-text-container">
                    <h4 className="services-title">{svc.title}</h4>
                    <p className="text-gray mb-0">{svc.description}</p>
                  </div>
                </div>
                <Image
                  width={945}
                  height={630}
                  className="services-image"
                  src={svc.image}
                  alt={svc.title}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
