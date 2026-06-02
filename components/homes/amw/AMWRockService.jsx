"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/components/homes/amw/AMWModal.module.css";
import "@/components/homes/amw/AMWServiceTab.module.css";
import "@/components/homes/amw/AMWRockService.module.css";
import { useSwipeNavigation } from "@/utils/useSwipeNavigation";

const services = [
  {
    id: "site-prep",
    label: "Site Prep & Demolition",
    number: "01",
    title: "Site Prep & Demolition",
    description:
      "Rock work done right starts with a clean, properly graded surface. Existing vegetation, debris, and failed material have to come out before anything goes down — and the grade has to be set before the barrier does.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/b33260_29238812e92f471987cb400a85043da8~mv2.jpg",
        heading: "Clearing & Grading",
        body: "AMW clears existing vegetation, pulls roots, and establishes the finished grade before any barrier or rock goes down. Grade is the decision that determines where water goes for the life of the install — it can't be corrected after the fact without tearing everything out. In Arizona, caliche hardpan close to the surface can create a perched water table that causes long-term heaving and pooling. We identify it at the demolition stage and address it in the sub-grade, not later.",
        bullets: ["Grade established before barrier — not adjusted after rock is placed", "Caliche and hardpan conditions identified and corrected at demolition", "Positive drainage away from structure confirmed before any material goes down"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_4297.HEIC.jpg",
        heading: "Weed Barrier",
        body: "AMW installs commercial-grade woven polypropylene barrier on every decorative rock job — not the lightweight sheeting sold at box stores. The barrier is staked flat, overlapped a minimum of 6 inches at every seam, and tucked under edging at the perimeter before rock placement begins. Seam gaps are where barrier installs fail. We don't leave gaps.",
        bullets: ["Commercial-grade woven polypropylene — not lightweight sheeting", "6\" minimum overlap staked at every seam", "Perimeter edges tucked under edging before rock goes down"],
      },
    ],
  },
  {
    id: "edging",
    label: "Edging & Borders",
    number: "02",
    title: "Edging & Borders",
    description:
      "Edging is structural, not decorative. It's what keeps a rock install contained and readable five years after completion — and what fails first when it's done wrong.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/IMG_4298.HEIC.jpg",
        heading: "Steel & Aluminum Edging",
        body: "AMW installs steel or aluminum bender board edging on every decorative rock job. In Arizona, UV turns plastic edging brittle and it cracks — typically within two to three seasons. Once plastic edging starts to fail, it can't be repaired cleanly; the whole border has to come out. Metal edging is staked every 18–24 inches and set flush with the finished rock surface. A flush edge holds its line and doesn't create a trip hazard at the border.",
        bullets: ["Steel or aluminum — plastic edging fails in Arizona UV within 2–3 seasons", "Staked every 18–24\" for continuous hold along the full border", "Set flush with finished rock surface — no raised lip, no trip edge"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_4299.HEIC.jpg",
        heading: "Transitions to Pavers & Concrete",
        body: "Where decorative rock meets pavers, concrete, turf, or a planting bed, the transition detail determines how the whole property reads long-term. AMW tucks edging tight and continuous at every transition — no gaps, no step-downs, no material bleed. At paver borders, a soldier course set tight against the edging gives the rock field a hard stop that holds through monsoon wash and foot traffic without the materials mixing.",
        bullets: ["Continuous edging tight at every paver, concrete, turf, and bed transition", "Soldier course at paver borders — hard stop that holds through monsoon season", "No material bleed across transitions — each surface stays where it was placed"],
      },
    ],
  },
  {
    id: "depth-coverage",
    label: "Depth & Coverage",
    number: "03",
    title: "Depth & Coverage",
    description:
      "Depth is a technical decision with real installation consequences. Too shallow and the barrier shifts and weeds come through. Too deep and you've buried edging, stressed root flares, and created a surface that migrates under foot traffic.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/470181006_122127000578562324_6681322759639703916_n.jpg",
        heading: "Getting Depth Right",
        body: "For most crushed granite and smaller decorative rock, 2–3 inches over compacted sub-grade is the correct depth — enough to hold the barrier flat, suppress weeds, and stay stable underfoot. River rock and larger material can go 3–4 inches; the irregular shapes interlock and the added depth keeps the barrier from lifting during heavy rain. DG pathways are installed at 2–3 inches compacted — not loose. Going over depth on any of these doesn't improve performance; it buries edging tops, crowds root flares on existing plants, and creates a surface that shifts underfoot.",
        bullets: ["Crushed granite & small decorative rock: 2–3\" over compacted sub-grade", "River rock & larger material: 3–4\" — irregular shapes interlock and anchor the barrier", "DG pathways: 2–3\" compacted — installed and finished, not dumped loose"],
      },
      {
        image: "/assets/tww-assets/amw-images/b33260_4ff65584fd464f739c672745a9cbe20b~mv2.jpg",
        heading: "Drainage Slope & Pooling",
        body: "Decorative rock is permeable — water moves through it. What it moves into is the sub-grade, and the sub-grade is what determines where water actually goes. AMW establishes drainage slope at the sub-grade stage, before the barrier goes down. Any slope error made here is permanent once the rock is placed. Surface pooling on a finished decorative rock install is never a rock problem — it's a sub-grade grade failure, and fixing it means pulling the rock, pulling the barrier, and re-grading from scratch.",
        bullets: ["Drainage slope established at sub-grade — before barrier or rock placement", "Positive drainage confirmed away from structure, walls, and root zones", "Sub-grade grade failure is the only cause of pooling on a finished rock install"],
      },
    ],
  },
  {
    id: "material-decisions",
    label: "Material Decisions",
    number: "04",
    title: "Material Decisions",
    description:
      "Material selection is an installation decision — it affects how we prep the sub-grade, set the depth, detail the edging, and manage drainage. We walk through it with every client before anything gets ordered.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/IMG_3245.HEIC.jpg",
        heading: "How Material Affects the Install",
        body: "River rock, Apache brown, gold quartzite, and black lava all install differently. Larger, rounder material migrates more under foot traffic — it needs tighter edging and a slightly deeper bed to stay stable. Angular crushed material compacts and locks; it holds an edge better and is more forgiving on slopes. Dark material — black lava, dark Apache brown — absorbs significantly more heat and radiates it toward the structure through the night. On south and west exposures, that's a factor worth discussing before material is chosen, not after it's placed.",
        bullets: ["Material size and shape determine edging spec, bed depth, and slope tolerance", "Angular crushed material holds edges and slopes better than round river rock", "Dark material heat absorption on south & west exposures — a real installation consideration"],
      },
      {
        image: "/assets/tww-assets/amw-images/gilbert_05.jpg",
        heading: "Decomposed Granite",
        body: "DG is the most installation-specific material in Arizona hardscape — it has to be compacted to perform. Installed loose, DG tracks into the house, erodes in monsoon runoff, and never holds an edge. Installed correctly — compacted in lifts over a firm, graded sub-grade — it creates a stable, drainable surface for pathways, entries, and fill zones. Stabilized DG with a polymer binder gives a harder surface for high-traffic areas without going to concrete, but it requires a clean, compacted base and proper cure time to bond correctly.",
        bullets: ["DG must be compacted in lifts — installed loose it erodes and tracks indoors", "Stabilized DG with polymer binder for high-traffic entries and pathways", "Transitions to pavers and concrete detailed with edging, not butted loose"],
      },
    ],
  },
  {
    id: "accent-boulders",
    label: "Accent Boulders",
    number: "05",
    title: "Accent Boulders",
    description:
      "Boulders are the most misplaced element in Arizona hardscape. Set correctly, they look like they belong to the property. Set wrong — sitting flat on grade, wrong scale, wrong position — they look like they were dropped and forgotten.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/475318856_122138091542562324_2490206637378486010_n.jpg",
        heading: "Placement & Setting",
        body: "A boulder sitting flat on grade looks placed, not settled. AMW buries the bottom third to half of every accent boulder into the sub-grade so the stone reads as part of the ground, not as an object resting on top of it. The most visually interesting face — the one with the best color, texture, or profile — gets oriented toward the primary viewing angle before the surrounding rock field goes in. Once the field is placed, repositioning a boulder means pulling and regrading. We position first.",
        bullets: ["Bottom third to half buried into sub-grade — reads settled, not placed", "Most interesting face oriented toward street, entry, or patio before rock field is installed", "Position is permanent once the surrounding field is placed — we get it right before we commit"],
      },
      {
        image: "/assets/tww-assets/amw-images/474637667_122137974674562324_7700655110403643978_n.jpg",
        heading: "Scale & Grouping",
        body: "Single boulders almost never work at residential scale — they read as an afterthought regardless of how well they're set. Groupings of odd numbers in varied sizes — three or five — look deliberate and natural because that's how stone actually occurs in the landscape. Scale matters: a 12-inch stone in front of a 2,500-square-foot house reads as gravel, not a feature. AMW sizes boulders to the structure, the rock field, and the viewing distance so the composition reads as a designed element from the street.",
        bullets: ["Odd-number groupings — three or five — in varied sizes look natural and deliberate", "Scale matched to structure size and viewing distance from street or entry", "Boulders selected and positioned as a composition, not placed individually"],
      },
    ],
  },
  {
    id: "integration",
    label: "Hardscape Integration",
    number: "06",
    title: "Hardscape Integration",
    description:
      "Decorative rock rarely exists in isolation. How it meets pavers, concrete, block walls, and turf is what determines whether the finished property reads as one coherent hardscape or a collection of disconnected surfaces.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/472558135_122133547208562324_5973173010838996413_n.jpg",
        heading: "Rock & Paver Transitions",
        body: "Where decorative rock meets a paver field, the transition needs a hard stop — typically a soldier course set tight against the edging, or a buried concrete mow strip — to keep the materials from mixing over time. Monsoon water and foot traffic will always push loose material toward lower or softer surfaces. AMW details every paver-to-rock transition so the paver field stays clean and the rock field stays contained through years of weather. A paver border with rock fill is one of the most durable and low-maintenance combinations in Arizona residential hardscape — pavers where you walk, rock where you don't.",
        bullets: ["Soldier course or buried mow strip at every paver-to-rock transition", "Transition detail holds through monsoon wash and years of foot traffic", "Paver border with rock fill — durable, low-maintenance, and cost-effective"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_4363.HEIC.jpg",
        heading: "Rock & Block Wall Integration",
        body: "Decorative rock at the base of a block wall or retaining wall must drain away from the wall — never pool against it. Water that sits against a block wall base works into the mortar joints, migrates behind the wall cap, and eventually causes efflorescence, staining, and core erosion. AMW grades the rock field away from all wall bases and installs a transition zone of washed 3/4-inch drain rock at the wall footing so water moves through and away from the block, not into it.",
        bullets: ["Rock field graded away from block wall and retaining wall bases", "Washed 3/4\" drain rock at wall footings — water moves through, not into the block", "Prevents the moisture infiltration that causes efflorescence, staining, and long-term wall damage"],
      },
    ],
  },
];

export default function AMWRockService() {
  const [modalSvc, setModalSvc] = useState(null);
  const [cardIdx, setCardIdx] = useState(0);

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
            <AnimatedText text="Decorative Rock Installation" />
          </h2>
          <div className="row">
            <div className="col-lg-10">
              <p className="section-descr mb-20 mb-sm-20 wow fadeInUp" data-wow-delay="0.4s">
                Every decorative rock job AMW installs starts with a site assessment, a graded sub-base, commercial barrier, and properly detailed edging. The grade, the barrier, the containment, and how the rock field integrates with everything else on the property are what determine whether an install holds together for ten years or starts failing after the first monsoon season.
              </p>
            </div>
          </div>
          <ul className="nav nav-tabs services-tabs rsvc-tabs-desktop wow fadeInUp" data-wow-delay="0.55s" role="tablist">
            {services.map((svc, i) => (
              <li key={svc.id} role="presentation">
                <a
                  href={`#rsvc-${svc.id}`}
                  className={i === 0 ? "active" : ""}
                  aria-controls={`rsvc-${svc.id}`}
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
            className="rsvc-tabs-mobile"
            defaultValue={services[0].id}
            onChange={(e) => {
              const tab = document.querySelector(`a[href="#rsvc-${e.target.value}"]`);
              if (tab) tab.click();
            }}
          >
            {services.map((svc) => (
              <option key={svc.id} value={svc.id}>{svc.label}</option>
            ))}
          </select>
          <div className="wow fadeInUp" data-wow-delay="0.7s">
            <Link href="/#contact-form" className="btn btn-mod btn-large btn-round btn-hover-anim">
              <span>Get a Free Estimate</span>
            </Link>
          </div>
        </div>

        <div className="col-lg-6 rsvc-img-col d-flex wow fadeInLeft" data-wow-delay="0.55s" data-wow-offset={275}>
          <div className="tab-content services-content">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`tab-pane services-content-item fade ${i === 0 ? "show active" : ""}`}
                id={`rsvc-${svc.id}`}
                role="tabpanel"
              >
                <div className="amw-service-img-wrap">
                  <Image
                    fill
                    src={svc.cards[0].image}
                    alt={svc.title}
                    className="amw-svc-tab-img"
                    sizes="(max-width: 992px) 100vw, 50vw"
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="services-text">
                  <div className="services-text-container">
                    <h4 className="services-title">{svc.title}</h4>
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
            <div className="amw-modal-img">
              <Image fill src={activeCard.image} alt={activeCard.heading} sizes="430px" />
            </div>
            <div className="amw-modal-body">
              <button className="amw-modal-close" onClick={closeModal} aria-label="Close">×</button>
              <h3 className="amw-modal-heading">{activeCard.heading}</h3>
              <p className="amw-modal-body-text">{activeCard.body}</p>
              {activeCard.bullets && (
                <ul className="amw-modal-bullets">
                  {activeCard.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
              {modalSvc.cards.length > 1 && (
                <div className="amw-modal-nav">
                  <button className="amw-modal-nav-btn" onClick={prev} disabled={cardIdx === 0} aria-label="Previous">‹</button>
                  <div className="amw-modal-nav-dots">
                    {modalSvc.cards.map((_, i) => (
                      <button key={i} className={`amw-modal-dot${cardIdx === i ? " active" : ""}`} onClick={() => setCardIdx(i)} aria-label={`Card ${i + 1}`} />
                    ))}
                  </div>
                  <button className="amw-modal-nav-btn" onClick={next} disabled={cardIdx === modalSvc.cards.length - 1} aria-label="Next">›</button>
                </div>
              )}
              <div className="amw-modal-ctas">
                <Link href="/#contact-form" className="btn btn-mod btn-large btn-round btn-hover-anim amw-modal-cta-primary" onClick={closeModal}>
                  <span>Free Estimate</span>
                </Link>
                <a href="tel:+14807216561" className="btn btn-mod btn-large btn-border btn-round amw-modal-cta-secondary">
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
