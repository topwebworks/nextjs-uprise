"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/components/homes/amw/AMWModal.module.css";

const services = [
  {
    id: "assessment",
    label: "Site Assessment",
    number: "01",
    title: "Site Assessment",
    description:
      "Demolition work that goes wrong almost always goes wrong because nobody looked at what was under the surface before the first swing. Assessment is the job before the job.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/b33260_29238812e92f471987cb400a85043da8~mv2.jpg",
        heading: "What We Look for Before Demolition Starts",
        body: "Before any demolition begins, AMW walks the property and identifies what's coming out, what's staying, and what's likely underneath. In Arizona, caliche hardpan is common at shallow depth — flagging it before demolition starts allows us to plan for the right equipment and adjust scope before we're already into the slab. We review the client's irrigation as-builts where available, mark visible heads and valve boxes around the demolition zone, and identify drainage infrastructure that needs to be preserved or rerouted. A demolition bid without a site walk is a guess, not a quote.",
        bullets: ["Caliche and hardpan conditions flagged during site walk — equipment and scope planned accordingly", "Irrigation as-builts reviewed; visible heads and valve boxes marked before demolition", "Drainage infrastructure identified — preserved or rerouted as needed"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_3834.HEIC.jpg",
        heading: "What Stays & What Goes",
        body: "Every demolition job has a defined scope and a defined boundary. AMW marks what stays before equipment moves. Adjacent pavers, concrete edges, irrigation heads, and landscaping near the demolition zone are protected or marked for avoidance before work starts. Damage to adjacent surfaces during demolition is a scope failure, not an accident — it's what happens when no one defines the boundary before the work begins.",
        bullets: ["Demolition boundary marked before equipment is staged", "Adjacent pavers, concrete, and landscaping protected before work starts", "Scope defined in writing — what comes out and what stays"],
      },
    ],
  },
  {
    id: "concrete-demolition",
    label: "Concrete Demolition",
    number: "02",
    title: "Concrete Demolition",
    description:
      "Concrete removal is the most common demolition job in Arizona residential hardscape — old driveways, failed slabs, cracked patios, and flatwork that's past its useful life. The scope and method depend on thickness, reinforcement, and what's going in after.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/new_06.jpg",
        heading: "Slab Removal",
        body: "Residential concrete slabs are typically 3.5–4 inches thick over a sand, DG, or compacted native base — older tracts and pre-1990s construction often have no base course at all, just native caliche underneath. Unreinforced slabs break cleanly with a demolition hammer or mini-excavator and load out efficiently. Reinforced slabs — wire mesh or rebar — take longer: the steel has to be cut and separated from the concrete before either can be loaded. AMW confirms visible reinforcement and estimated thickness during the site walk so the quote reflects what's actually there.",
        bullets: ["Unreinforced slab: demolition hammer or mini-excavator, clean break", "Reinforced slab: steel cut and separated before removal — priced accordingly", "Slab thickness and base condition assessed at site walk — not assumed"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_4156.jpg",
        heading: "Selective Demolition & Saw Cutting",
        body: "Not every concrete removal job is a full tear-out. When a client is extending a patio, adding a driveway section, or matching into existing flatwork, AMW saw-cuts a clean, straight line at the remove/retain boundary before demolition begins. A clean saw cut gives the new pour a proper edge to butt against. Demolition work that just breaks to a ragged edge and patches it creates a visible seam and a weak joint that cracks again within a few years.",
        bullets: ["Saw cut at remove/retain boundary before demolition — clean straight edge", "New concrete has a proper edge to tie into, not a ragged break", "Selective removal priced by the linear foot of cut and square foot removed"],
      },
    ],
  },
  {
    id: "paver-demolition",
    label: "Paver & Stone Demolition",
    number: "03",
    title: "Paver & Stone Demolition",
    description:
      "Pavers and natural stone can often be salvaged during removal — which changes the method, the time, and sometimes whether the homeowner wants to keep them for a future project.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/472264730_122133547256562324_8638789622410595894_n.jpg",
        heading: "Salvage vs. Disposal",
        body: "Before paver demolition starts, AMW determines whether the material is worth salvaging. Travertine, quality concrete pavers, and natural flagstone in good condition have real value — a homeowner who plans another project may want to store them. Salvage removal is slower: pavers come up individually or in sections, are stacked on pallets, and kept intact. Disposal removal is faster: material is broken up and loaded for haul. The method is the client's call, made before work starts.",
        bullets: ["Salvage or disposal determined before demolition begins — client's decision", "Salvage: pavers pulled intact, stacked on pallets for reuse", "Disposal: broken and loaded for haul — faster, lower labor cost"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_4218.HEIC.jpg",
        heading: "Base Removal & Sub-Grade Condition",
        body: "Pulling pavers exposes the base underneath — and the base condition determines what the next install requires. A compacted aggregate base in good condition can often stay; a failed, undermined, or contaminated base has to come out. AMW assesses the exposed sub-grade after paver removal and tells the client what they're working with before any new work is scoped. Covering a bad base with new pavers is how a five-year job gets built on a two-year foundation.",
        bullets: ["Sub-grade condition assessed after paver removal — before new work is scoped", "Good base retained where possible — saves excavation and material cost", "Failed or contaminated base removed and rebuilt to spec"],
      },
    ],
  },
  {
    id: "turf-rock-demolition",
    label: "Turf & Rock Demolition",
    number: "04",
    title: "Turf & Rock Demolition",
    description:
      "Artificial turf and decorative rock removal are common precursors to hardscape installs in the East Valley. Each has specific removal considerations that affect what comes out, how long it takes, and what the sub-grade looks like when it's done.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/IMG_3039.HEIC.jpg",
        heading: "Artificial Turf Removal",
        body: "Artificial turf removal involves pulling the turf, removing the infill material, pulling the weed barrier, and assessing the DG base underneath. Infill — especially silica sand or zeolite — adds significant weight and has to be shoveled out separately before the turf roll can be pulled. Staples and nails along the perimeter have to be pulled clean so they don't end up in the new base. AMW leaves the sub-grade clean and assessed, not just the turf gone.",
        bullets: ["Infill removed separately before turf is pulled — adds weight and volume", "Perimeter staples and nails pulled clean from the sub-grade", "DG base condition assessed after removal — retained or rebuilt based on condition"],
      },
      {
        image: "/assets/tww-assets/amw-images/gilbert_05.jpg",
        heading: "Decorative Rock Removal",
        body: "Decorative rock removal is labor-intensive in proportion to the depth and area. Rock has to be raked and loaded by hand or with a small machine — it can't be scraped off grade without pulling the barrier and sub-grade with it. AMW removes rock, pulls barrier material, and assesses the exposed sub-grade before the next scope begins. Existing DG base is retained where it meets spec for the new install and rebuilt where it doesn't.",
        bullets: ["Rock raked and loaded — not scraped, which pulls barrier and sub-grade", "Weed barrier fully removed after rock is cleared", "Existing DG sub-grade assessed after clearing — retained where it meets spec, rebuilt where it doesn't"],
      },
    ],
  },
  {
    id: "haul-disposal",
    label: "Haul & Disposal",
    number: "05",
    title: "Haul & Disposal",
    description:
      "Demolition generates material volume that has to go somewhere. AMW handles haul and disposal as part of every demolition scope — the site is clear when we leave, not staged with debris for the client to figure out.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/475073428_122137974338562324_5243938571606077407_n.jpg",
        heading: "Full-Service Haul-Out",
        body: "Concrete, pavers, rock, turf, and base material all leave the property with AMW. We stage a dump trailer or schedule a haul truck sized to the job — not a pickup-truck operation that makes eight trips. Concrete and masonry are hauled to a crush facility where they're processed into recycled aggregate. Clean DG and base material may be recyclable depending on condition. The disposal method is documented so the client knows where the material went.",
        bullets: ["Dump trailer or haul truck sized to the job — staged on-site for the duration", "Concrete and masonry hauled to crush facility for recycling", "Site left clean at job completion — no debris staging for the client"],
      },
      {
        image: "/assets/tww-assets/amw-images/471569797_122131259060562324_6459019498087461197_n.jpg",
        heading: "Weight, Volume & Pricing",
        body: "Concrete is heavy — a standard 4-inch residential slab runs approximately 50 lbs per square foot. A 400 sq ft driveway is 20,000 lbs of material before the base is touched. Haul pricing is based on estimated volume and weight from the site assessment, so disposal cost is in the quote up front. Concealed conditions — unexpected rebar, deeper slab sections, buried footings — are disclosed as soon as they're encountered, not absorbed silently or billed at the end without notice.",
        bullets: ["Haul tonnage estimated from site assessment — disposal cost in the quote up front", "Concrete runs ~50 lbs/sqft at 4\" — volume calculated before pricing", "Concealed conditions disclosed as encountered — no silent scope changes"],
      },
    ],
  },
  {
    id: "site-ready",
    label: "Site Ready for Install",
    number: "06",
    title: "Site Ready for Install",
    description:
      "Demolition is preparation, not an end in itself. The standard AMW holds demolition work to is: when the demolition crew leaves, the next crew can start. Grade set, sub-grade assessed, utilities clear, debris gone.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/471544742_122131259132562324_7592514666165949808_n.jpg",
        heading: "Sub-Grade Left to Spec",
        body: "After demolition, AMW grades the exposed sub-grade to the elevation and slope needed for the next install — whether that's pavers, concrete, turf, or decorative rock. Positive drainage away from the structure is confirmed at this stage. If demolition uncovers unexpected conditions — buried footings, unmarked utilities, soft spots, or contaminated fill — we document them and communicate them to the client before the site is turned over. Unexpected conditions get disclosed, not covered back up.",
        bullets: ["Sub-grade graded to elevation and slope for the next install", "Positive drainage confirmed away from structure at demolition completion", "Unexpected buried conditions documented and communicated before site turnover — not covered up"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_4182.jpg",
        heading: "Coordination with the Install Scope",
        body: "When AMW is handling both demolition and the new install, the two scopes are coordinated from the start — not treated as separate jobs that happen to be sequential. Depth of excavation, base spec, drainage direction, and any conditions uncovered during demolition are resolved before install begins, not rediscovered mid-job. Demolition-only clients get a site walkthrough at completion — conditions noted, photographed, and communicated so the install contractor knows what they're starting with.",
        bullets: ["Demolition and install scopes coordinated from planning — not handed off cold", "Excavation depth, base spec, and drainage resolved at demolition stage", "Demolition-only clients: site walkthrough at completion, conditions noted and photographed"],
      },
    ],
  },
];

export default function AMWDemolitionService() {
  const [modalSvc, setModalSvc] = useState(null);
  const [cardIdx, setCardIdx] = useState(0);

  function openModal(svc) { setModalSvc(svc); setCardIdx(0); }
  function closeModal() { setModalSvc(null); setCardIdx(0); }
  function prev() { setCardIdx((i) => Math.max(0, i - 1)); }
  function next() { setCardIdx((i) => Math.min(modalSvc.cards.length - 1, i + 1)); }

  const activeCard = modalSvc ? modalSvc.cards[cardIdx] : null;

  return (
    <div className="container position-relative">
      <style>{`
        .services-tabs .nav-link,
        .services-tabs a {
          font-size: 24px !important;
          font-weight: 500 !important;
          color: #555 !important;
          opacity: 1 !important;
        }
        .services-tabs a.active,
        .services-tabs .nav-link.active {
          color: #111 !important;
          font-weight: 700 !important;
        }
        .amw-service-img-wrap {
          position: relative;
          width: 100%;
          height: 680px;
          overflow: hidden;
          border-radius: 4px;
        }
        @media (max-width: 1100px) {
          .dsvc-tabs-desktop { display: none !important; }
          .dsvc-tabs-mobile {
            display: block !important;
            width: 100%;
            padding: 14px 18px;
            font-size: 18px;
            font-weight: 700;
            border: 1px solid #ccc;
            border-radius: 6px;
            background: #fff;
            color: #111;
            appearance: none;
            -webkit-appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9'%3E%3Cpath d='M1 1l6 6 6-6' stroke='%23111' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 16px center;
            cursor: pointer;
            margin-bottom: 24px;
            max-width: 350px;
          }
        }
        .dsvc-tabs-mobile { display: none; }
        @media (max-width: 991px) {
          .dsvc-tabs-mobile { max-width: 100% !important; }
          .services-text { margin-top: 0 !important; }
          .services-text-container { margin-left: 0 !important; }
          .dsvc-img-col { margin-top: 40px !important; }
        }
        @media (max-width: 767px) {
          .dsvc-img-col { margin-top: 32px !important; }
        }
        @media (max-width: 575px) {
          .amw-service-img-wrap { height: 280px; }
          .services-text { margin-top: 0 !important; }
          .services-text-container { margin: 0 !important; padding: 16px 18px 20px !important; }
          .services-text-container p { font-size: 14px !important; line-height: 1.65 !important; }
          .services-text-container .services-title { font-size: 20px !important; margin-bottom: 8px !important; }
        }
        .services-text { position: relative; z-index: 2; margin-top: -180px; }
        .services-text-container { background: #f5f5f5; padding: 28px 32px 32px; margin: 0 0 0 40px; }
        /* Modal styles → AMWModal.module.css */
      `}</style>

      <div className="row">
        <div className="col-lg-6 mb-lg-0 mb-30">
          <h2 className="section-title mb-30">
            <AnimatedText text="Demolition & Removal" />
          </h2>
          <div className="row">
            <div className="col-lg-10">
              <p className="section-descr mb-20 mb-sm-20 wow fadeInUp" data-wow-delay="0.4s">
                Every new hardscape install starts with removing what&rsquo;s there. AMW handles demolition as a full scope — site assessment, defined boundaries, proper removal method for the material, and a sub-grade handed off clean and ready for the next install.
              </p>
            </div>
          </div>
          <ul className="nav nav-tabs services-tabs dsvc-tabs-desktop wow fadeInUp" data-wow-delay="0.55s" role="tablist">
            {services.map((svc, i) => (
              <li key={svc.id} role="presentation">
                <a
                  href={`#dsvc-${svc.id}`}
                  className={i === 0 ? "active" : ""}
                  aria-controls={`dsvc-${svc.id}`}
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
            className="dsvc-tabs-mobile"
            defaultValue={services[0].id}
            onChange={(e) => {
              const tab = document.querySelector(`a[href="#dsvc-${e.target.value}"]`);
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

        <div className="col-lg-6 dsvc-img-col d-flex wow fadeInLeft" data-wow-delay="0.55s" data-wow-offset={275}>
          <div className="tab-content services-content" style={{ width: "100%" }}>
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`tab-pane services-content-item fade ${i === 0 ? "show active" : ""}`}
                id={`dsvc-${svc.id}`}
                role="tabpanel"
              >
                <div className="amw-service-img-wrap">
                  <Image
                    fill
                    src={svc.cards[0].image}
                    alt={svc.title}
                    style={{ objectFit: "cover", objectPosition: "center", filter: "contrast(1.12) saturate(1.25) brightness(1.06)" }}
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
              <Image fill src={activeCard.image} alt={activeCard.heading} style={{ objectFit: "cover", filter: "contrast(1.12) saturate(1.25) brightness(1.06)" }} sizes="430px" />
            </div>
            <div className="amw-modal-body">
              <button className="amw-modal-close" onClick={closeModal} aria-label="Close">×</button>
              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 0, lineHeight: 1.2, paddingRight: 20 }}>{activeCard.heading}</h3>
              <p style={{ color: "#555", lineHeight: 1.75, marginBottom: 0, fontSize: 14 }}>{activeCard.body}</p>
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
