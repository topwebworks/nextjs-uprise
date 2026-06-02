"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/components/homes/amw/AMWModal.module.css";
import "@/components/homes/amw/AMWServiceTab.module.css";
import "@/components/homes/amw/AMWConcreteService.module.css";

const services = [
  {
    id: "driveways",
    label: "Driveways",
    number: "01",
    title: "Concrete Driveways",
    description:
      "New pours and full replacements built for Arizona heat and heavy vehicle loads. Properly excavated, formed, and finished — work that holds up for the long run.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/706918803_122227402112562324_1976345922410022005_n.jpg",
        heading: "Concrete Driveways",
        body: "A concrete driveway is only as good as the prep underneath it. AMW excavates to proper depth, compacts the subgrade, sets forms level, and pours with the right mix ratio for Arizona summers. Control joints are cut or tooled at the correct spacing so the slab manages expansion and contraction without random cracking.",
        bullets: ["Proper excavation depth & subgrade compaction", "Control joints cut at correct spacing", "Arizona-rated mix ratios for heat resistance"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_3844.HEIC.jpg",
        heading: "Finish Options",
        body: "Broom finish is the standard — clean, slip-resistant, and built to last. Exposed aggregate adds texture and visual interest. Salt finish gives a pitted, non-slip surface that performs well in the Arizona sun. We match the finish to your home's exterior and how the surface will be used.",
        bullets: ["Broom finish: standard, slip-resistant", "Exposed aggregate: texture & curb appeal", "Salt finish: non-slip, low-maintenance"],
      },
    ],
  },
  {
    id: "patios",
    label: "Patio Slabs",
    number: "02",
    title: "Patio Slabs",
    description:
      "Flat, level, properly pitched patio slabs that drain away from the structure. Built with control joints to manage Arizona heat cycles the right way.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/471632943_122131258478562324_5373969824793971780_n.jpg",
        heading: "Patio Slabs",
        body: "Patio slabs need to be flat enough for furniture and pitched enough to drain. AMW grades before forming so water sheets away from the house — not toward it. We pour covered patios, open patios, pool surrounds, and outdoor kitchen pads. Every slab gets control joints to prevent random cracking.",
        bullets: ["Surface pitched for drainage away from structure", "Control joints prevent random cracking", "Covered patios, pool surrounds & outdoor kitchen pads"],
      },
      {
        image: "/assets/tww-assets/amw-images/468395672_122122826024562324_187685820092517944_n.jpg",
        heading: "Finish Options",
        body: "The finish affects how the patio looks and performs. Broom finish is clean and slip-resistant — the right call for most patios. Exposed aggregate adds texture and visual character. Salt finish gives a non-slip pitted surface that handles Arizona heat well. We walk you through the options based on your exterior and how the space will be used.",
        bullets: ["Broom finish: clean, slip-resistant standard", "Exposed aggregate: texture & visual character", "Salt finish: non-slip, performs well in Arizona heat"],
      },
    ],
  },
  {
    id: "rv-pads",
    label: "RV & Parking Pads",
    number: "03",
    title: "RV & Parking Pads",
    description:
      "Heavy-duty concrete pads for RVs, boats, trailers, and extra vehicles. Built thick, with the right reinforcement for the load.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/468439013_122122826012562324_1683475040342150020_n.jpg",
        heading: "RV & Parking Pads",
        body: "RV pads and heavy vehicle parking require more than a standard residential pour. AMW sizes the slab correctly, adds reinforcement where the load calls for it, and pitches for drainage. We match the finish to your existing driveway or hardscape so the addition looks like it was always there.",
        bullets: ["Reinforcement sized for vehicle load", "Pitched for drainage — no standing water", "Finish matched to existing hardscape"],
      },
      {
        image: "/assets/tww-assets/amw-images/468506890_122122825832562324_1654340029600896302_n.jpg",
        heading: "Driveway Extensions",
        body: "Need more parking without a full driveway replacement? AMW extends and widens existing concrete driveways with new pours that match the existing slab's elevation, finish, and joint pattern. We tie the new pour to the old with proper isolation joints so they move independently.",
        bullets: ["Elevation matched to existing slab", "Isolation joints between old & new pour", "Finish & joint pattern matched throughout"],
      },
    ],
  },
  {
    id: "base-prep",
    label: "Base & Prep",
    number: "04",
    title: "Base Prep & Subgrade",
    description:
      "What determines whether concrete lasts 5 years or 30 is what happens before the truck arrives. Grade, compaction, and forms — this is where the job is won or lost.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/IMG_3834.HEIC.jpg",
        heading: "Subgrade & Compaction",
        body: "Concrete cracks when the ground underneath it moves. AMW excavates to the correct depth, removes organic material, and compacts the subgrade before any forming begins. In areas with expansive clay soil — common in the East Valley — we take extra steps to ensure the base is stable before the pour.",
        bullets: ["Excavation to correct depth", "Organic material removed before compaction", "Extra steps for East Valley clay soil conditions"],
      },
      {
        image: "/assets/tww-assets/amw-images/471491786_122131258538562324_5519239003258990660_n.jpg",
        heading: "Form Setting & Reinforcement",
        body: "Forms set to the right grade and elevation. Rebar or wire mesh added where the project calls for it — heavier loads get heavier reinforcement. The pour doesn't start until the forms are right and the grade is confirmed. No shortcuts before the truck arrives.",
        bullets: ["Forms set to correct grade & elevation", "Rebar or mesh matched to load requirements", "Grade confirmed before pour begins"],
      },
    ],
  },
  {
    id: "control-joints",
    label: "Control Joints",
    number: "05",
    title: "Control Joints & Cracking",
    description:
      "Concrete always cracks — the question is whether those cracks happen where you planned them or randomly across your slab. Control joints are how you control it.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/b33260_f4ff9761c34d43cfba6812afedfad2cb~mv2.jpg",
        heading: "Why Concrete Cracks",
        body: "Concrete shrinks as it cures and expands and contracts with temperature — in Arizona, that temperature swing is significant. Without control joints, the slab cracks wherever stress concentrates. With properly spaced control joints, the slab cracks inside the joint where it's invisible and doesn't compromise the surface.",
        bullets: ["Arizona heat cycles create significant expansion & contraction", "Control joints guide cracks to planned locations", "Proper spacing: every 8–12 feet depending on slab thickness"],
      },
      {
        image: "/assets/tww-assets/amw-images/462686067_122101812944562324_6322616952928708378_n.jpg",
        heading: "Tooled vs Saw-Cut Joints",
        body: "Tooled joints are formed while the concrete is wet — cleaner look, faster process. Saw-cut joints are cut after the pour cures, typically within 6–12 hours, and allow more precise placement. We choose the method based on the project scope and finish type.",
        bullets: ["Tooled joints: formed wet, clean finish", "Saw-cut joints: precision placement after cure", "Method matched to finish type & project scope"],
      },
    ],
  },
  {
    id: "repairs",
    label: "Repairs & Replacement",
    number: "06",
    title: "Repairs & Replacement",
    description:
      "Cracked, heaved, or spalling concrete. We assess whether a repair makes sense or whether replacement is the better long-term investment.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/470184191_122127744806562324_7273177088857394801_n.jpg",
        heading: "When to Repair vs Replace",
        body: "Surface cracks and minor spalling can often be repaired. Structural cracking, heaving from tree roots or soil movement, and widespread spalling typically mean the slab needs to come out. We give you an honest assessment — not every cracked driveway needs a full replacement, and we'll tell you which is which.",
        bullets: ["Surface cracks & minor spalling: often repairable", "Structural cracks & heaving: typically replacement", "Honest assessment — no upsell"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_0524.jpg",
        heading: "Demolition & Full Replacement",
        body: "When replacement is the right call, AMW handles full tearout, haul-away, subgrade prep, and new pour — all under one project. No coordinating separate demolition and concrete crews. We address whatever caused the original failure before the new slab goes in.",
        bullets: ["Full tearout, haul-away & new pour", "Root cause addressed before new pour", "One crew, one project, one point of contact"],
      },
    ],
  },
];

export default function AMWConcreteService() {
  const [modalSvc, setModalSvc] = useState(null);
  const [cardIdx, setCardIdx] = useState(0);

  function openModal(svc) { setModalSvc(svc); setCardIdx(0); }
  function closeModal() { setModalSvc(null); setCardIdx(0); }
  function prev() { setCardIdx((i) => Math.max(0, i - 1)); }
  function next() { setCardIdx((i) => Math.min(modalSvc.cards.length - 1, i + 1)); }

  const activeCard = modalSvc ? modalSvc.cards[cardIdx] : null;

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-lg-0 mb-30">
          <h2 className="section-title mb-30">
            <AnimatedText text="Concrete Work" />
          </h2>
          <div className="row">
            <div className="col-lg-10">
              <p className="section-descr mb-20 mb-sm-20 wow fadeInUp" data-wow-delay="0.4s">
                AMW handles the full scope of residential concrete — new driveways, patio slabs, RV pads, driveway extensions, repairs, and full replacements. Every job is one crew from demolition through pour, and every pour starts the same way: grade checked, subgrade compacted, forms set right before the truck arrives.
              </p>
            </div>
          </div>
          <ul className="nav nav-tabs services-tabs csvc-tabs-desktop wow fadeInUp" data-wow-delay="0.55s" role="tablist">
            {services.map((svc, i) => (
              <li key={svc.id} role="presentation">
                <a
                  href={`#csvc-${svc.id}`}
                  className={i === 0 ? "active" : ""}
                  aria-controls={`csvc-${svc.id}`}
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
            className="csvc-tabs-mobile"
            defaultValue={services[0].id}
            onChange={(e) => {
              const tab = document.querySelector(`a[href="#csvc-${e.target.value}"]`);
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

        <div className="col-lg-6 csvc-img-col d-flex wow fadeInLeft" data-wow-delay="0.55s" data-wow-offset={275}>
          <div className="tab-content services-content">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`tab-pane services-content-item fade ${i === 0 ? "show active" : ""}`}
                id={`csvc-${svc.id}`}
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
                    <button className="btn btn-mod btn-small btn-round amw-learn-more-btn" onClick={() => openModal(svc)}>
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
          <div className="amw-modal" onClick={(e) => e.stopPropagation()}>
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
                <Link href="/#contact-form" className="btn btn-mod btn-large btn-round btn-hover-anim amw-modal-cta-primary" onClick={closeModal}><span>Free Estimate</span></Link>
                <a href="tel:+14807216561" className="btn btn-mod btn-large btn-border btn-round amw-modal-cta-secondary">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
