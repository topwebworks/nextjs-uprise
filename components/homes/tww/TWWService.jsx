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
    id: "pool-repair",
    label: "Pool Repair",
    number: "01",
    title: "Pool Repair & Maintenance",
    description:
      "Leaks, cracks, surface damage, or just overdue for a tune-up — Uprise Pools diagnoses and fixes pool problems fast so you're back in the water with confidence.",
    cards: [
      {
        image: "/assets/tww-assets/client-images/2.jpg",
        heading: "Surface & Plaster Cracks",
        body: "In Arizona, extreme thermal cycling accelerates plaster stress fractures. What looks like a hairline crack today can open into a structural failure within one or two seasons. We grind the crack, apply epoxy or hydraulic cement based on depth, and match the surface finish so the repair integrates cleanly.",
        bullets: ["Hydrostatic pressure testing on all structural cracks", "Epoxy injection for active leaks, hydraulic cement for inactive", "Color-matched plaster patch or full resurfacing when needed"],
      },
      {
        image: "/assets/tww-assets/client-images/6.jpg",
        heading: "Bond Beam Damage",
        body: "The bond beam — the structural concrete ring at the waterline — is the most stressed part of your pool shell. Cracks here indicate soil movement, settlement, or hydrostatic pressure working against the structure. We excavate, stabilize if necessary, and rebuild the section properly before any cosmetic repair goes on.",
        bullets: ["Structural assessment before any cutting begins", "Full bond beam section rebuild, not filler patching", "Tile and coping matched to existing materials"],
      },
      {
        image: "/assets/tww-assets/client-images/1.jpg",
        heading: "Leak Detection & Plumbing Repair",
        body: "Arizona summers push normal evaporation to a quarter-inch a day or more, so water loss alone doesn't mean you have a leak. A bucket test tells the real story — if your pool is losing noticeably more than a bucket sitting on the step, that's a leak. We confirm with pressure testing, dye testing, and acoustic equipment to isolate whether the loss is in the shell, the plumbing, or the equipment pad. Then we fix it at the source, not the symptom.",
        bullets: ["Pressure & dye testing to isolate shell vs. plumbing leaks", "Mainline, return, and suction line repair", "Equipment unions, fittings, and valve replacement"],
      },
      {
        image: "/assets/tww-assets/client-images/7.jpg",
        heading: "Back in the Water",
        body: "Every repair ends the same way — a pool that holds water, runs correctly, and is safe to swim in. We don't sign off until we've pressure-tested the repairs, balanced the chemistry, and verified the equipment is operating within spec. You get a written account of every repair performed.",
        bullets: ["Full pressure test after every structural repair", "Water chemistry balanced before we leave the job", "Written documentation of all work performed"],
      },
    ],
  },
  {
    id: "pool-resurfacing",
    label: "Resurfacing",
    number: "02",
    title: "Pool Resurfacing & Renovation",
    description:
      "Old plaster, stained surfaces, or an outdated look — Uprise Pools updates your pool's appearance and structure with premium finishes built to handle Arizona conditions.",
    cards: [
      {
        image: "/assets/tww-assets/client-images/20.jpg",
        heading: "Surface Prep — Where Most Contractors Cut Corners",
        body: "The quality of any resurfacing job is decided before the first coat of finish goes on. We drain the pool, chip off all degraded plaster down to clean shell, address any structural issues, and apply a bonding layer. Skipping these steps is why resurfacing jobs fail in three years instead of fifteen.",
        bullets: ["Full plaster removal to clean shell — no skim coat over failing surface", "Structural cracks repaired before finishing begins", "Bond coat applied per manufacturer specification"],
      },
      {
        image: "/assets/tww-assets/client-images/10.jpg",
        heading: "Pebble Finish — Arizona's Standard",
        body: "Pebble aggregate finishes — PebbleTec, QuartzScapes, Hydrazzo — are the standard in Arizona for good reason. They handle UV exposure and hard water better than standard plaster, last 15–20 years versus 7–10 for plain plaster, and the texture doesn't show wear patterns the way smooth surfaces do.",
        bullets: ["15–20 year lifespan vs. 7–10 for standard plaster", "UV and hard water resistant — engineered for AZ conditions", "Multiple aggregate grades and color options available"],
      },
      {
        image: "/assets/tww-assets/client-images/11.jpg",
        heading: "Tile, Coping & Waterline Upgrades",
        body: "Resurfacing is the right time to update your waterline tile, coping, or spa tile while the pool is already drained and the crew is on-site. Adding tile work mid-project versus as a separate call saves significant cost. We source premium glass, porcelain, and stone tile and handle the full installation.",
        bullets: ["Waterline, spa bond beam, and accent tile installation", "Coping replacement and bull-nose grinding", "One crew, one schedule, no coordination gaps"],
      },
      {
        image: "/assets/tww-assets/client-images/IMG_0083-scaled-e1602915851302-800h.webp",
        heading: "Feature Additions During Resurfacing",
        body: "If you've been considering a tanning ledge, additional spa jets, or a water feature, a resurfacing project is the lowest-cost time to do it. The pool is already drained, the shell is exposed, and the plumbing is accessible. We sequence structural additions with the resurfacing work so nothing has to be redone.",
        bullets: ["Baja shelf and tanning ledge additions", "Spa jet and return port additions while plumbing is open", "In-floor cleaning system installation"],
      },
    ],
  },
  {
    id: "deck-repair",
    label: "Deck Repair",
    number: "03",
    title: "Deck Repair & Resurfacing",
    description:
      "Cracked, heaving, or faded decking? Uprise assesses the structure first, then resurfaces or replaces with materials rated for Arizona heat and pool chemical exposure.",
    cards: [
      {
        image: "/assets/tww-assets/client-images/unnamed+(2)-2880w.webp",
        heading: "Deck Safety — Not Just Aesthetics",
        body: "A cracked or heaving pool deck is a slip-and-fall hazard. In Arizona, sun-exposed concrete deteriorates faster than most homeowners expect. We assess whether the damage is surface-only or whether the base has moved — because the repair approach is completely different. Coating a failing base only delays the problem.",
        bullets: ["Sub-base inspection before any surface repair begins", "Crack routing and filling rated for pool chemical exposure", "Slip-resistant finish required in all pool areas"],
      },
      {
        image: "/assets/tww-assets/client-images/18.jpg",
        heading: "Travertine & Paver Deck Replacement",
        body: "When a concrete deck has settled unevenly or is too far gone to resurface, replacement with travertine or pavers is the right call. Travertine stays cooler underfoot in Arizona summer heat — a material property, not just marketing — drains better, and doesn't crack the same way poured concrete does under thermal stress.",
        bullets: ["Travertine runs 15–20°F cooler than concrete in direct AZ sun", "Natural drainage — no standing water around the pool", "Individual pavers can be replaced without full tear-out"],
      },
      {
        image: "/assets/tww-assets/client-images/5.jpg",
        heading: "Pool, Spa & Deck — Full Renovation",
        body: "The most cost-effective time to do deck work is when the pool is already being resurfaced. Both scopes are on-site, the pool is drained, and the coping and tile are already exposed. We coordinate the full renovation so materials are matched, finish lines are clean, and you pay one mobilization — not two.",
        bullets: ["Coping, tile, and deck materials matched to a cohesive palette", "Single contractor accountable for the full renovation", "Significantly lower cost vs. scheduling trades separately"],
      },
      {
        image: "/assets/tww-assets/client-images/after4-800h.webp",
        heading: "Deck Resurfacing & Color Treatments",
        body: "When the structure is sound but the surface is worn, faded, or stained, a resurfacing overlay with new texture and color is a cost-effective alternative to full replacement. We use products rated specifically for pool environments — not standard concrete coatings that peel when exposed to pool chemicals, chlorine splash, and UV.",
        bullets: ["Pool-rated resurfacing products — not standard concrete coatings", "New texture, color, and slip-resistance in one application", "Fraction of the cost of full deck replacement when structure is sound"],
      },
    ],
  },
  {
    id: "equipment",
    label: "Equipment",
    number: "04",
    title: "Equipment Install & Repair",
    description:
      "Pumps, heaters, filters, automation — Uprise Pools diagnoses failing systems correctly and installs new equipment sized and plumbed to run efficiently all year.",
    cards: [
      {
        image: "/assets/tww-assets/client-images/6101733a146c9.image-800h.webp",
        heading: "Diagnosis First — No Guessing",
        body: "Most pool equipment problems are misdiagnosed as the most expensive possible fix. We start with a systematic diagnostic — measuring amperage draw, testing capacitors, checking pressure differential across the filter, and verifying controller logic — before recommending any replacement. If it can be repaired correctly, we repair it.",
        bullets: ["Amperage and pressure testing before any replacement is recommended", "Capacitor, seal, and impeller repair before full unit replacement", "Written diagnosis report on every service call"],
      },
      {
        image: "/assets/tww-assets/client-images/9.jpg",
        heading: "Pump & Filtration Systems",
        body: "An undersized or failing pump means the water isn't turning over enough — a problem that shows up as chemistry issues before it ever shows up as equipment failure. We spec pumps correctly for your pool's volume, pipe diameter, and head pressure, then install them to code with proper plumbing and electrical.",
        bullets: ["Flow rate calculated for actual pool volume and plumbing layout", "Variable-speed pumps — 50–80% energy savings over single-speed", "Hayward, Pentair, and Jandy equipment available"],
      },
      {
        image: "/assets/tww-assets/client-images/13.jpg",
        heading: "Plumbing Repair & Equipment Pad Rebuilds",
        body: "Old PVC plumbing fails at fittings, unions, and valves long before the pipe itself fails. When we open a deteriorated equipment pad, we rebuild what's failing rather than patching individual components that will fail again within a season. A properly rebuilt pad runs quieter, more efficiently, and without the drips.",
        bullets: ["Full replumb when partial repair doesn't make economic sense", "Schedule 40 PVC with properly rated fittings and ball valves", "Equipment pad rebuilt to current Arizona code"],
      },
      {
        image: "/assets/tww-assets/client-images/15.jpg",
        heading: "Filter Service & Cartridge Maintenance",
        body: "A dirty or degraded filter doesn't just run inefficiently — it pushes debris back into the pool. Cartridge elements should be chemically cleaned every 3–4 months and replaced every 2–3 years in Arizona's hard-water climate. We inspect the housing, manifold, and o-rings at every service so a failed seal doesn't dump debris into your pool.",
        bullets: ["Chemical cleaning removes oils and mineral scale, not just debris", "Manifold and o-ring inspection prevents seal failures", "Filter sizing verified — oversizing causes channeling, undersizing causes bypass"],
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
                Pool repair, resurfacing, deck restoration, and equipment — Uprise Pools handles every pool need with a single point of contact and the accountability to back it up.
              </p>
            </div>
          </div>
          <ul className="nav nav-tabs services-tabs tww-svc-tabs-desktop wow fadeInUp" data-wow-delay="0.55s" role="tablist">
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
            className="tww-svc-tabs-mobile"
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

        <div className="col-lg-6 tww-svc-img-col d-flex wow fadeInLeft" data-wow-delay="0.55s" data-wow-offset={275}>
          <div className="tab-content services-content">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`tab-pane services-content-item fade ${i === 0 ? "show active" : ""}`}
                id={`service-${svc.id}`}
                role="tabpanel"
              >
                <div className="tww-service-img-wrap">
                  <Image
                    fill
                    src={svc.cards[0].image}
                    alt={svc.title.replace(/&amp;/g, "&")}
                    className="tww-svc-tab-img"
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
