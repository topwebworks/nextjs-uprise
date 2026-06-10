"use client";
import site from "@/data/site";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/components/homes/tww/TWWModal.module.css";
import "@/components/homes/tww/TWWServiceTab.module.css";
import "@/components/homes/tww/TWWDrivewayService.module.css";
import { useSwipeNavigation } from "@/utils/useSwipeNavigation";

const services = [
  {
    id: "assessment",
    label: "Site Assessment",
    number: "01",
    title: "Site Assessment",
    description:
      "A driveway addition ties into what's already there — existing concrete, existing pavers, existing grade, and existing drainage. Getting the assessment right determines whether the addition looks and performs like it was always part of the property.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Patio_pavers_installed_in_backyard_202605131833_3.jpeg",
        heading: "Existing Conditions",
        body: "Before Client scopes a driveway addition, we assess the existing surface condition, thickness, reinforcement, and the drainage pattern of the current driveway. Existing concrete that's cracked through, heaving at joints, or undermined at the edges isn't a good candidate for a clean tie-in — that needs to be disclosed upfront so the client can decide whether to add onto a failing surface or address the root problem first. Tying a new pour to a deteriorating slab creates two failing surfaces instead of one.",
        bullets: ["Existing surface condition, thickness, and reinforcement assessed before quote", "Drainage pattern of current driveway confirmed — addition must drain with it, not against it", "Failing or undermined existing surface flagged before new work is scoped"],
      },
      {
        image: "/assets/tww-assets/tww-images/Architectural_photo_of_Arizona_suburb_202605131833.jpeg",
        heading: "Grade & Drainage Direction",
        body: "Driveway additions in Arizona have to manage sheet flow — the monsoon volume that hits an expanded driveway surface is significant. Client confirms the existing drainage direction and designs the addition so new surface water flows with the existing pattern, not across it or toward the structure. A driveway addition that creates a low point against the garage foundation or diverts sheet flow toward the house is a liability, not an improvement.",
        bullets: ["Existing drainage direction confirmed before addition is designed", "New surface drains with existing pattern — no new low points against structure", "Sheet flow path for monsoon volume confirmed in design, not discovered after pour"],
      },
    ],
  },
  {
    id: "widening",
    label: "Driveway Widening",
    number: "02",
    title: "Driveway Widening",
    description:
      "The most common driveway addition in the Service Area — adding width to an existing single-car drive to accommodate two cars, or widening a two-car drive to give real clearance on both sides. The tie-in to the existing edge is where this job succeeds or fails.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/architectual_photo_of_arizona_house_202605131833.jpeg",
        heading: "The Tie-In",
        body: "Where the new concrete or pavers meet the existing driveway edge is the most critical detail on a widening job. For concrete-to-concrete tie-ins, Client saw-cuts the existing edge straight, drills and epoxy-sets rebar dowels into the existing slab at 18-inch centers, and pours the addition against a clean, prepared face. Doweled tie-ins prevent differential vertical movement at the joint — one slab can't rise or drop relative to the other, which eliminates trip edges and keeps the surface flush over time. Undoweled butt joints have nothing holding elevation and crack apart under Arizona thermal cycling within a few summers.",
        bullets: ["Existing edge saw-cut straight before new pour", "Rebar dowels epoxy-set at 18\" centers — prevents differential movement at the joint", "Undoweled butt joints lose elevation and crack apart under AZ thermal cycling — we don't pour them"],
      },
      {
        image: "/assets/tww-assets/tww-images/architectual_photo_of_arizona_house_202605131833_2.jpeg",
        heading: "Width & Clearance",
        body: "A functional two-car driveway needs a minimum of 18 feet of paved width — 20 feet is better for comfortable door clearance on both sides. Many older Service Area homes were built with 16-foot driveways that technically fit two cars but don't allow doors to open without hitting each other or the wall. Client confirms functional target width with the client before designing the addition — adding 18 inches to a 16-foot drive still leaves a frustrating driveway.",
        bullets: ["Minimum 18' width for functional two-car use — 20' recommended for door clearance", "Existing width measured and target width confirmed before design", "Client advised to confirm HOA approval requirements before design is finalized"],
      },
    ],
  },
  {
    id: "parking-pad",
    label: "Parking Pads",
    number: "03",
    title: "Parking Pads",
    description:
      "A parking pad adjacent to the driveway adds a dedicated space for a third vehicle, a boat, or an RV without expanding the full driveway width. The connection to the existing driveway and the drainage design are the two decisions that determine long-term performance.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833.jpeg",
        heading: "Size & Surface",
        body: "A standard single-car parking pad is 9 feet wide by 18 feet deep minimum — 10 by 20 feet gives comfortable clearance for doors and the front overhang. Boat and trailer pads need to account for tongue length beyond the vehicle. RV pads require 12 by 40 feet or more depending on the rig. Client sizes pads to the actual vehicle before concrete is poured — undersized pads are the most common complaint on parking pad work, and the fix is a full demolition and repour.",
        bullets: ["Standard car pad: 10' × 20' minimum for comfortable use", "Boat and trailer: tongue length added to vehicle length for depth", "RV pad: 12'+ wide × 40'+ deep — sized to actual rig before pour"],
      },
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_2.jpeg",
        heading: "Connection & Drainage",
        body: "The parking pad has to drain — either back to the street via the driveway surface or to a designated drainage point at the perimeter. A pad that drains toward the house, pools in the center, or flows back through the garage door threshold is a failure regardless of how well the concrete was poured. Client establishes pad grade and drainage direction in the layout stage, before any base work begins. The drainage path for a 200-square-foot pad during a monsoon event is a real volume calculation, not a guess.",
        bullets: ["Pad grade and drainage direction established in layout — before base work", "Drainage routed to street via driveway surface or perimeter outlet", "Grade and drainage direction confirmed before pour — finish tolerance targeted to eliminate ponding"],
      },
    ],
  },
  {
    id: "rv-pad",
    label: "RV Pads",
    number: "04",
    title: "RV Pads",
    description:
      "An RV pad is the heaviest residential driveway addition Client installs. The issue isn't total vehicle weight — it's the concentrated point load from dual rear axles on a small contact patch. Standard residential concrete spec isn't built for that load repeated over years of parking, and the approach grade from the street determines whether the rig can get on and off without dragging.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_3.jpeg",
        heading: "Base & Thickness for RV Load",
        body: "Standard residential concrete is 4 inches over a compacted base — adequate for passenger vehicles but undersized for the concentrated axle load of an RV. The problem isn't the total weight of the rig spread across the whole pad — it's the point load from dual rear axles bearing down on a small footprint every time the vehicle parks. Client specs RV pads at 5–6 inches of concrete over 6 inches of compacted aggregate base, with #4 rebar on 18-inch centers rather than wire mesh. That spec handles repeated heavy axle loading without the progressive cracking that a standard residential pour develops over time.",
        bullets: ["5–6\" concrete — not standard 4\" residential spec", "6\" compacted aggregate base under full pad area", "#4 rebar on 18\" centers — not wire mesh"],
      },
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_4.jpeg",
        heading: "Approach Angle & Clearance",
        body: "Getting an RV onto a side pad from the street requires a transition grade that the rig can navigate without the rear overhang dragging or the front cap scraping on the approach. Client calculates the approach grade from the vehicle's wheelbase and overhang dimensions and flags the numbers to the client before pad elevation is set — the client confirms against their actual rig. The pad width also needs to account for slide-outs fully extended; a pad that's too narrow for slides is a problem discovered at 10 PM after a long drive.",
        bullets: ["Approach grade calculated from vehicle wheelbase and overhang — flagged to client before elevation is set", "Client confirms approach grade against actual rig before design is finalized", "Pad width accounts for slide-out clearance — confirmed with client before design"],
      },
    ],
  },
  {
    id: "turnaround",
    label: "Turnarounds",
    number: "05",
    title: "Turnarounds",
    description:
      "A driveway turnaround eliminates the need to back out to the street — a real safety and convenience improvement on properties where the existing driveway ends at a garage with no room to turn around. The design type and dimensions have to fit the actual vehicles using it and the space available.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_5.jpeg",
        heading: "Turnaround Types & Design",
        body: "Two design types handle most residential turnaround situations. A hammerhead — a T-shaped extension at the end of the driveway — works in narrow lots and allows a structured three-point turn. A circular apron with enough radius allows a true one-motion swing without multi-point maneuvering, but requires significantly more space. Client determines which design the site can accommodate, sizes it from the actual vehicle dimensions, and confirms the turning path works on paper before any forming begins. Getting the design wrong means the turnaround doesn't function as intended.",
        bullets: ["Hammerhead: three-point turn in narrow lots — width and crossbar depth sized to vehicle", "Circular apron: one-motion swing — requires more space, eliminates multi-point turn entirely", "Design confirmed from actual vehicle dimensions before forming begins"],
      },
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_6.jpeg",
        heading: "Material & Tie-In",
        body: "Turnarounds are most commonly poured in concrete to match an existing concrete driveway, but pavers work well where the visual detail is important or where the existing driveway is pavers. For concrete turnarounds tying into an existing concrete drive, Client dowels the connection the same way as a widening — saw-cut existing edge, epoxy-set rebar dowels, pour against a prepared face. For paver turnarounds, the pattern is laid out to flow naturally from the existing field without creating an obvious seam.",
        bullets: ["Concrete or pavers — matched to existing driveway material", "Concrete tie-in: saw-cut edge, epoxy-set dowels, pour against prepared face", "Paver tie-in: pattern flows from existing field — no visible seam at junction"],
      },
    ],
  },
  {
    id: "base-joints",
    label: "Base & Joints",
    number: "06",
    title: "Base & Joints",
    description:
      "The base and the joint placement determine the long-term performance of any driveway addition — regardless of material. Arizona's thermal range and monsoon saturation cycles stress driveway concrete harder than most climates. These details are not optional.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Arizona_suburb_home_patio_pool_202605131833.jpeg",
        heading: "Base Preparation",
        body: "Every driveway addition Client installs starts with excavation to the required depth, compaction of native sub-grade, and a 4–6 inch compacted aggregate base. In Arizona, caliche at shallow depth can create an uneven bearing layer that causes differential settling — Client identifies and addresses caliche variations during base prep rather than pouring over them. A consistent, compacted base is what gives a driveway addition the best chance of staying level and performing long-term. Concrete will crack — control joints manage where.",
        bullets: ["4–6\" compacted aggregate base on every addition", "Native sub-grade compacted before base material is placed", "Caliche variations identified and addressed at base prep — not poured over"],
      },
      {
        image: "/assets/tww-assets/tww-images/Arizona_suburb_home_patio_pool_202605131833_2.jpeg",
        heading: "Control Joints",
        body: "Concrete expands and contracts with temperature — in Arizona, the daily and seasonal thermal range is significant. Control joints cut into the slab at planned intervals give the concrete a place to crack that doesn't compromise the surface. Client cuts control joints at a maximum of 10 feet in each direction for residential driveway additions — tighter spacing in areas with direct sun exposure or significant thermal mass. Joints are cut to one-quarter the slab depth so they penetrate far enough to actually control where cracking occurs.",
        bullets: ["Control joints at maximum 10' spacing — tighter in high sun-exposure areas", "Joints cut to 1/4 slab depth — penetrates far enough to control crack location", "Joint layout planned before pour — not cut randomly after the fact"],
      },
    ],
  },
];

export default function TWWDrivewayService() {
  const [modalSvc, setModalSvc] = useState(null);
  const [cardIdx, setCardIdx] = useState(0);

  function openModal(svc) { setModalSvc(svc); setCardIdx(0); }
  function closeModal() { setModalSvc(null); setCardIdx(0); }
  function prev() { setCardIdx((i) => Math.max(0, i - 1)); }
  function next() { setCardIdx((i) => Math.min(modalSvc.cards.length - 1, i + 1)); }

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
            <AnimatedText text="Driveway Additions" />
          </h2>
          <div className="row">
            <div className="col-lg-10">
              <p className="section-descr mb-20 mb-sm-20 wow fadeInUp" data-wow-delay="0.4s">
                Widening, parking pads, RV pads, and turnarounds — additions that tie into what&rsquo;s already there. The existing surface condition, drainage pattern, and tie-in detail are the decisions that determine whether the addition performs as one integrated driveway or starts separating at the joint after the first Arizona summer.
              </p>
            </div>
          </div>
          <ul className="nav nav-tabs services-tabs wvsvc-tabs-desktop wow fadeInUp" data-wow-delay="0.55s" role="tablist">
            {services.map((svc, i) => (
              <li key={svc.id} role="presentation">
                <a
                  href={`#wvsvc-${svc.id}`}
                  className={i === 0 ? "active" : ""}
                  aria-controls={`#wvsvc-${svc.id}`}
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
            className="wvsvc-tabs-mobile"
            defaultValue={services[0].id}
            onChange={(e) => {
              const tab = document.querySelector(`a[href="#wvsvc-${e.target.value}"]`);
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

        <div className="col-lg-6 wvsvc-img-col d-flex wow fadeInLeft" data-wow-delay="0.55s" data-wow-offset={275}>
          <div className="tab-content services-content">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`tab-pane services-content-item fade ${i === 0 ? "show active" : ""}`}
                id={`wvsvc-${svc.id}`}
                role="tabpanel"
              >
                <div className="tww-service-img-wrap">
                  <Image
                    fill
                    src={svc.cards[0].image}
                    alt={svc.title}
                    className="tww-svc-tab-img"
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
                <Link href="/#contact-form" className="btn btn-mod btn-large btn-round btn-hover-anim amw-modal-cta-primary" onClick={closeModal}><span>Free Estimate</span></Link>
                <a href={`tel:${site.phone}`} className="btn btn-mod btn-large btn-border btn-round amw-modal-cta-secondary">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
