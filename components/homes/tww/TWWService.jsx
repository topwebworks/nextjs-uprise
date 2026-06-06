"use client";
import site from "@/data/site";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/components/homes/tww/TWWModal.module.css";
import "@/components/homes/tww/TWWServiceTab.module.css";
import "@/components/homes/tww/TWWService.module.css";
import { useSwipeNavigation } from "@/utils/useSwipeNavigation";

const services = [
  {
    id: "pool-builds",
    label: "Pool Builds",
    number: "01",
    title: "Custom Pool Construction",
    description:
      "New pool construction built from the ground up — every phase in-house. Where others see a finish line, we see the details: seamless coping corners, level tile, consistent overhangs. That's the Client standard.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_2.jpeg",
        heading: "Full-Scope Pool Construction",
        body: "Client handles every phase of a new pool build in-house — design, excavation, steel, plumbing, decking, coping, tile, and finish. No subcontractors, no hand-offs. One crew accountable for the whole project from permit to first swim.",
        bullets: ["Design, excavation & steel in-house", "Plumbing, decking & coping included", "Tile, finish & equipment installation"],
      },
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833.jpeg",
        heading: "Where the Details Live",
        body: "The difference between a good pool and an exceptional one shows up in the corners. Beveled coping stones that meet seamlessly at every turn. Waterline tile that runs perfectly level all the way around. A consistent coping overhang that looks intentional from every angle. These aren't finishing touches at Client — they're the standard every build is held to from day one.",
        bullets: ["Premium quality pool finishes", "Seamless beveled coping at every corner & transition", "Waterline tile set level & true — no shortcuts"],
      },
    ],
  },
  {
    id: "pool-remodels",
    label: "Pool Remodels",
    number: "02",
    title: "Pool Remodels & Renovations",
    description:
      "Transform an aging pool into something that looks and performs like new — new finishes, updated coping, resurfacing, equipment upgrades, and feature additions.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Arizona_suburb_home_patio_pool_202605131833.jpeg",
        heading: "Pool Resurfacing & Finish Updates",
        body: "Old plaster, stained surfaces, or outdated finishes don't have to stay. Client remodels pools with premium finish materials — pebble, quartz, tile, and Gator brand finishes — that update the look and dramatically improve durability. Gator is one of the most respected pool finish brands in the industry, known for its refined texture and long-term performance in Arizona conditions.",
        bullets: ["Premium pool finish options available", "Pebble, quartz & tile options also available", "Surface prep done right before any finish goes on"],
      },
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_2.jpeg",
        heading: "Equipment, Water Features & Upgrades",
        body: "A remodel is the right time to upgrade equipment, add a spa, or install water features — deck jets, bubblers, sheer descents, and waterfalls that transform the pool experience. Client upgrades variable-speed pumps, LED lighting, heaters, and smart automation systems, designing every addition around your existing pool so it all looks intentional from day one.",
        bullets: ["Water features: deck jets, bubblers & waterfalls", "Variable-speed pump & LED lighting upgrades", "Heater, automation & smart control options"],
      },
    ],
  },
  {
    id: "hardscape",
    label: "Hardscape & Pavers",
    number: "03",
    title: "Hardscape & Paver Design",
    description:
      "Custom paver patios, pool decks, walkways, and travertine installations — designed as a single composition and built to perform in the Arizona climate for decades.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_3.jpeg",
        heading: "Pool Decks & Patio Design",
        body: "The pool deck and patio are designed alongside the pool — not added after. Coping transitions, deck pitch, material selection, and border details are determined at the layout stage so the finished result reads as one cohesive space.",
        bullets: ["Travertine, large-format pavers & natural stone", "Surface pitch engineered for drainage", "Coping, border & transition details included"],
      },
      {
        image: "/assets/tww-assets/tww-images/Arizona_house_backyard_landscaping_202605131833.jpeg",
        heading: "Walkways, Driveways & Outdoor Spaces",
        body: "Beyond the pool, Client installs pavers and hardscape throughout the property — front entries, side yards, driveways, and covered patio extensions. Every installation starts with proper base compaction and edge restraints so the surface holds its shape long-term.",
        bullets: ["Front entries, driveways & side yards", "Compacted base & edge restraints standard", "Pattern, color & material selection guidance"],
      },
    ],
  },
  {
    id: "turf",
    label: "Artificial Turf",
    number: "04",
    title: "Artificial Turf Installation",
    description:
      "Premium synthetic turf that stays green year-round without irrigation — the right solution for Arizona backyards, side yards, pet runs, and putting greens.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_4.jpeg",
        heading: "Turf Around the Pool",
        body: "Turf and pool decks work together when they're planned together. Client installs synthetic turf with clean transitions into pavers and coping — proper drainage, weed barrier, and seam direction all dialed in so the finished edge looks intentional and holds up to pool traffic.",
        bullets: ["Clean transitions into pavers & coping", "Proper drainage & weed barrier", "Pet-friendly & pool-safe infill options"],
      },
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_5.jpeg",
        heading: "Front Yards, Side Yards & Putting Greens",
        body: "Artificial turf works anywhere natural grass struggles in Arizona. We install in front yards, backyards, side yards, dog runs, and custom putting greens — always with proper sub-base prep, infill selection, and edge finishing so the result looks like it belongs.",
        bullets: ["Front yards, dog runs & putting greens", "DG sub-base, compaction & weed barrier", "Stays green 365 days — no irrigation needed"],
      },
    ],
  },
  {
    id: "landscaping",
    label: "Landscaping & Design",
    number: "05",
    title: "Landscaping & Outdoor Design",
    description:
      "Curated desert landscaping, irrigation, and plant installation that frames the hardscape, softens the space, and performs year-round in the Arizona climate.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Architectural_photo_of_Arizona_suburb_202605131833.jpeg",
        heading: "Desert Plant Design",
        body: "Great landscaping in Arizona isn't just rock and cactus — it's about texture, depth, and plant selection that complements the hardscape and holds its appearance through the seasons. Client curates plant palettes scaled to the space, chosen for low water use and year-round visual presence.",
        bullets: ["Curated desert plant palette", "Scaled to hardscape & architecture", "Low-water, high-impact selections"],
      },
      {
        image: "/assets/tww-assets/tww-images/architectual_photo_of_arizona_house_202605131833.jpeg",
        heading: "Irrigation & Lighting",
        body: "Smart drip irrigation and landscape lighting complete the outdoor space. Client designs drip systems for minimal water waste and installs in-ground lighting that highlights the pool, hardscape, and planting areas — making the backyard as beautiful at night as it is during the day.",
        bullets: ["Smart drip irrigation design & install", "In-ground landscape lighting", "Timer & smart controller integration"],
      },
    ],
  },
  {
    id: "outdoor-kitchens",
    label: "Outdoor Kitchens & Fire",
    number: "06",
    title: "Outdoor Kitchens & Fire Features",
    description:
      "Built-in BBQ islands, outdoor bars, fire pits, linear fire features, and fireplaces — custom-built to become the centerpiece of your outdoor living space.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_2.jpeg",
        heading: "Outdoor Kitchen & BBQ Islands",
        body: "A built-in outdoor kitchen adds function and permanence to the backyard. Client builds BBQ islands, outdoor bars, and prep stations on concrete block frames with stone veneer and porcelain tile finishes — materials proven to hold up to Arizona heat, UV exposure, and pool splash zones without cracking or fading.",
        bullets: ["Built-in BBQ grills & side burners", "Concrete block frame with stone veneer & porcelain tile", "Outdoor bar & prep surface design"],
      },
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_6.jpeg",
        heading: "Fire Features & Fireplaces",
        body: "Linear gas fire features, fire pits, and outdoor fireplaces add ambiance and extend the usability of the backyard into Arizona evenings. Client designs fire features as part of the overall composition — positioned and finished to complement the pool, deck, and kitchen.",
        bullets: ["Linear gas fire features & fire pits", "Outdoor fireplaces & fire bowls", "Integrated into pool & deck design"],
      },
    ],
  },
];

export default function TWWService() {
  const [modalSvc, setModalSvc] = useState(null);
  const [cardIdx, setCardIdx] = useState(0);

  useEffect(() => {
    const activateServiceFromHash = () => {
      if (!window.location.hash.startsWith("#service-")) return;

      const tab = document.querySelector(
        `.services-tabs a[href="${window.location.hash}"]`,
      );

      if (tab instanceof HTMLAnchorElement) {
        tab.click();
        document.getElementById("services")?.scrollIntoView({
          block: "start",
        });
      }
    };

    activateServiceFromHash();
    window.addEventListener("hashchange", activateServiceFromHash);

    return () => {
      window.removeEventListener("hashchange", activateServiceFromHash);
    };
  }, []);

  function openModal(svc) {
    setModalSvc(svc);
    setCardIdx(0);
  }

  function closeModal() {
    setModalSvc(null);
    setCardIdx(0);
  }

  function prev() {
    setCardIdx((i) => Math.max(0, i - 1));
  }

  function next() {
    setCardIdx((i) => Math.min(modalSvc.cards.length - 1, i + 1));
  }

  const activeCard = modalSvc ? modalSvc.cards[cardIdx] : null;
  const modalSwipeHandlers = useSwipeNavigation({
    canNext: Boolean(modalSvc && cardIdx < modalSvc.cards.length - 1),
    canPrev: cardIdx > 0,
    onNext: next,
    onPrev: prev,
  });

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-lg-0 mb-30">
          <h2 className="section-title mb-30">
            <AnimatedText text="Our Services" />
          </h2>
          <div className="row">
            <div className="col-lg-10">
              <p className="section-descr mb-20 mb-sm-20 wow fadeInUp" data-wow-delay="0.4s">
                6 services. One team. From custom pool construction and remodels to hardscape, turf, landscaping, and outdoor kitchens — Client handles every phase of your outdoor build with a single point of contact.
              </p>
            </div>
          </div>
          <ul className="nav nav-tabs services-tabs amw-svc-tabs-desktop wow fadeInUp" data-wow-delay="0.55s" role="tablist">
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
          <select
            className="amw-svc-tabs-mobile"
            defaultValue={services[0].id}
            onChange={(e) => {
              const tab = document.querySelector(`a[href="#service-${e.target.value}"]`);
              if (tab) tab.click();
            }}
          >
            {services.map((svc) => (
              <option key={svc.id} value={svc.id}>{svc.label}</option>
            ))}
          </select>
          <div>
            <div className="wow fadeInUp" data-wow-delay="0.7s">
              <Link href="#contact-form" className="btn btn-mod btn-large btn-round btn-hover-anim">
                <span>Get a Free Estimate</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 amw-svc-img-col d-flex wow fadeInLeft" data-wow-delay="0.55s" data-wow-offset={275}>
          <div className="tab-content services-content">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`tab-pane services-content-item fade ${i === 0 ? "show active" : ""}`}
                id={`service-${svc.id}`}
                role="tabpanel"
              >
                <div className="amw-service-img-wrap">
                  <Image
                    fill
                    src={svc.cards[0].image}
                    alt={svc.title.replace(/&amp;/g, "&")}
                    className="amw-svc-tab-img"
                    sizes="(max-width: 992px) 100vw, 50vw"
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="services-text">
                  <div className="services-text-container">
                    <h4 className="services-title" dangerouslySetInnerHTML={{ __html: svc.title }} />
                    <p className="text-gray mb-20">{svc.description}</p>
                    <button
                      className="btn btn-mod btn-small btn-round amw-learn-more-btn"
                      onClick={() => openModal(svc)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalSvc && activeCard && (
        <div className="amw-modal-backdrop" onClick={closeModal}>
          <div className="amw-modal" onClick={(e) => e.stopPropagation()} {...modalSwipeHandlers}>

            {/* Image */}
            <div className="amw-modal-img">
              <Image
                fill
                src={activeCard.image}
                alt={activeCard.heading}
                sizes="430px"
              />
            </div>

            {/* Content */}
            <div className="amw-modal-body">
              <button className="amw-modal-close" onClick={closeModal} aria-label="Close">×</button>

              <h3 className="amw-modal-heading">{activeCard.heading}</h3>
              <p className="amw-modal-body-text">{activeCard.body}</p>

              {activeCard.bullets && (
                <ul className="amw-modal-bullets">
                  {activeCard.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}

              {/* Card nav */}
              {modalSvc.cards.length > 1 && (
                <div className="amw-modal-nav">
                  <button
                    className="amw-modal-nav-btn"
                    onClick={prev}
                    disabled={cardIdx === 0}
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <div className="amw-modal-nav-dots">
                    {modalSvc.cards.map((_, i) => (
                      <button
                        key={i}
                        className={`amw-modal-dot${cardIdx === i ? " active" : ""}`}
                        onClick={() => setCardIdx(i)}
                        aria-label={`Card ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    className="amw-modal-nav-btn"
                    onClick={next}
                    disabled={cardIdx === modalSvc.cards.length - 1}
                    aria-label="Next"
                  >
                    ›
                  </button>
                </div>
              )}

              <div className="amw-modal-ctas">
                <a href="#contact-form" className="btn btn-mod btn-large btn-round btn-hover-anim amw-modal-cta-primary" onClick={closeModal}>
                  <span>Free Estimate</span>
                </a>
                <a href={`tel:${site.phone}`} className="btn btn-mod btn-large btn-border btn-round amw-modal-cta-secondary">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
