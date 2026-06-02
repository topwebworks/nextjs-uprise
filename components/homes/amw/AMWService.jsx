"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    id: "pavers",
    label: "Paver Installation",
    number: "01",
    title: "Paver Installation",
    description:
      "Driveways, patios, walkways, and pool decks designed for better curb appeal, cleaner outdoor living, and long-term performance in Arizona conditions.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/IMG_4281.HEIC.jpg",
        heading: "Paver Installation",
        body: "AMW installs travertine, concrete pavers, and natural stone for driveways, patios, pool decks, and walkways. Every job starts with excavation, compacted aggregate base, proper pitch, edge restraints, and joint sand so the surface has the support it needs.",
        bullets: ["Travertine, concrete pavers & natural stone", "Driveways, patios, pool decks & walkways", "Full base prep: compacted gravel & edge restraints"],
      },
      {
        image: "/assets/tww-assets/amw-images/473177002_122133547196562324_3990472910039640132_n.jpg",
        heading: "Design & Layout",
        body: "We handle design layout, material selection, and full installation from demolition to final sanding. Whether you want a classic brick pattern, a modern large-format slab, or a custom herringbone design — AMW maps it out before a single paver is set.",
        bullets: ["Custom pattern design & layout", "Material selection guidance included", "From demolition to final polymeric sand"],
      },
      {
        image: "/assets/tww-assets/amw-images/475318856_122138091542562324_2490206637378486010_n.jpg",
        heading: "Pool Decks & Outdoor Living",
        body: "A well-designed paver pool deck makes the backyard more usable and easier to enjoy. We install travertine and concrete pavers around pools with surface pitch, clean borders, and drainage in mind from the layout stage.",
        bullets: ["Travertine & textured concrete pavers", "Surface pitch planned for drainage", "Pairs with turf, rock & outdoor kitchen areas"],
      },
    ],
  },
  {
    id: "concrete",
    label: "Concrete Work",
    number: "02",
    title: "Concrete Work",
    description:
      "Driveways, slabs, extensions, and decorative concrete built for strength and longevity. Properly prepped, properly poured — work that holds up in the Arizona heat.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/IMG_3706.HEIC.jpg",
        heading: "Concrete Work",
        body: "Concrete work is all about the prep and the pour. AMW excavates and grades properly, sets forms precisely, and uses quality mix ratios built for Arizona summers. We pour driveways, patio slabs, RV pads, garage extensions, and decorative concrete.",
        bullets: ["Driveways, patio slabs & RV pads", "Garage extensions & decorative finishes", "Proper excavation, grading & form-setting"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_4182.jpg",
        heading: "Built for Arizona Heat",
        body: "Every slab is finished cleanly with proper control joints and isolation joints where needed. Good concrete work starts with compacted subgrade, correct forms, reinforcement when the project calls for it, and a finish suited to the space.",
        bullets: ["Control joints help manage cracking", "Compacted subgrade & reinforcement as needed", "Broom, salt & exposed-aggregate finishes"],
      },
    ],
  },
  {
    id: "turf",
    label: "Artificial Turf",
    number: "03",
    title: "Artificial Turf Installation",
    description:
      "Low-maintenance, water-saving turf that looks great year-round. Perfect for front yards, side yards, pet runs, and play areas — stays green without the water bill.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/b33260_543fcf34b19b4fea8f524d0346067e3b~mv2.jpg",
        heading: "Artificial Turf Installation",
        body: "Arizona summers are brutal on natural grass. AMW installs premium artificial turf with drainage, seam direction, infill, nail spacing, and edge details handled correctly. We prep the sub-base with decomposed granite, compaction, and weed barrier where appropriate.",
        bullets: ["Premium turf with proper drainage", "DG sub-base, compaction & weed barrier", "Seams, infill, nail spacing & clean edges"],
      },
      {
        image: "/assets/tww-assets/amw-images/b33260_60fa8433f1e04529be6632e3d870638c~mv2.jpg",
        heading: "Front Yards, Dog Runs & Putting Greens",
        body: "Artificial turf works anywhere natural grass struggles. Front yards, backyards, side yards, dog runs, and even custom putting greens. Stays green 365 days a year without irrigation — a real selling point in San Tan Valley and Queen Creek.",
        bullets: ["Front yards, backyards & side yards", "Dog runs & pet-friendly infill options", "Custom putting green installs available"],
      },
    ],
  },
  {
    id: "rock",
    label: "Decorative Rock",
    number: "04",
    title: "Decorative Rock",
    description:
      "Decorative rock accents built into your hardscape plan for cleaner borders, low-water ground cover, drainage zones, and finished transitions around pavers, turf, and concrete.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/IMG_4298.HEIC.jpg",
        heading: "Decorative Rock",
        body: "Decorative rock helps tie low-water Arizona hardscapes together. AMW uses rock, decomposed granite, boulders, and gravel accents to finish borders, drainage areas, and transitions around turf, pavers, and concrete.",
        bullets: ["Rock accents for hardscape borders", "Weed barrier & clean-edge transitions", "Pairs with turf, pavers & concrete"],
      },
      {
        image: "/assets/tww-assets/amw-images/wix_inset_04.jpg",
        heading: "Low Water. Low Maintenance.",
        body: "Rock areas keep finished hardscapes low-water and easier to maintain: no mowing, less replanting after freezes, and cleaner transitions between pavers, turf, concrete, and planting areas. We build it into the plan so it looks intentional.",
        bullets: ["No irrigation required for rock areas", "Weed suppression with fabric where needed", "Clean transitions between hardscape zones"],
      },
    ],
  },
  {
    id: "demolition",
    label: "Demolition & Removal",
    number: "05",
    title: "Demolition & Removal",
    description:
      "Let us update your yard by removing old concrete, pavers, or landscaping and installing a fresh new look. We handle full tearout and cleanup before the new install begins.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/new_06.jpg",
        heading: "Demolition & Removal",
        body: "Before new hardscape goes in, the old has to come out — and AMW does it right. We break out old concrete slabs, remove deteriorating pavers, pull up old landscaping, and haul everything away. Full site cleanup is included.",
        bullets: ["Concrete slab & paver tearout", "Old turf & landscaping removal", "Full haul-away & site cleanup included"],
      },
      {
        image: "/assets/tww-assets/amw-images/b33260_29238812e92f471987cb400a85043da8~mv2.jpg",
        heading: "Site-Ready for the Next Phase",
        body: "Whether you're replacing a cracked driveway, removing old turf, or starting fresh on a bare lot, we leave the site ready for the next phase of work. No debris, no surprise charges — just a clean slate.",
        bullets: ["Site graded & ready for install", "No hidden dump or haul fees", "Can bundle demolition + install into one project"],
      },
    ],
  },
  {
    id: "driveway",
    label: "Driveway Additions",
    number: "06",
    title: "Driveway Additions",
    description:
      "Create more parking that will look great and last. We extend and expand driveways with pavers or concrete — clean lines, solid base, and a finish that adds instant curb appeal.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/IMG_0524.jpg",
        heading: "Driveway Additions",
        body: "Need more parking for an RV, boat, or extra vehicles? AMW extends and widens driveways using pavers or concrete that matches or complements your existing surface. We check access, drainage, utilities, and HOA or city requirements before the work is finalized.",
        bullets: ["RV pads, boat parking & extra vehicle space", "Pavers or concrete matched to existing surface", "Base compaction, drainage & access reviewed"],
      },
      {
        image: "/assets/tww-assets/amw-images/470184191_122127744806562324_7273177088857394801_n.jpg",
        heading: "Seamless Curb Appeal",
        body: "A driveway addition done right looks like it was always there. Clean edges, tight seams, and a finish that adds instant curb appeal. We match materials, joint patterns, and finish textures to blend new work with existing hardscape.",
        bullets: ["Matches existing material & joint pattern", "Clean edges & tight seams throughout", "Improves curb appeal & usable parking"],
      },
    ],
  },
];

export default function AMWService() {
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
          height: 520px;
          overflow: hidden;
          border-radius: 4px;
        }
        @media (max-width: 1100px) {
          .amw-svc-tabs-desktop { display: none !important; }
          .amw-svc-tabs-mobile {
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
        .amw-svc-tabs-mobile { display: none; }
        @media (max-width: 991px) {
          .services-content { max-width: 100% !important; overflow: hidden !important; }
          .services-text { margin-top: 0 !important; }
          .services-text-container { margin-left: 0 !important; }
          .amw-svc-tabs-mobile { max-width: 100% !important; }
          .amw-svc-img-col { margin-top: 40px !important; }
        }
        @media (max-width: 575px) {
          .amw-service-img-wrap { height: 220px; }
          .services-text { margin-top: 0 !important; }
          .services-text-container { margin: 0 !important; padding: 16px 18px 20px !important; }
          .services-text-container p { font-size: 14px !important; line-height: 1.65 !important; }
          .services-text-container .services-title { font-size: 20px !important; margin-bottom: 8px !important; }
        }
        /* Description card overlaps bottom of image */
        .services-text {
          position: relative;
          z-index: 2;
          margin-top: -180px;
        }
        .services-text-container {
          background: #f5f5f5;
          padding: 28px 32px 32px;
          margin: 0 0 0 40px;
        }

        /* Modal backdrop */
        .amw-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          z-index: 9998;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        /* Modal card */
        .amw-modal {
          background: #fff;
          border-radius: 10px;
          max-width: 860px;
          width: 100%;
          max-height: 92vh;
          overflow: hidden;
          z-index: 9999;
          display: grid;
          grid-template-columns: 48% 52%;
          box-shadow: 0 24px 80px rgba(0,0,0,0.4);
          position: relative;
        }
        @media (max-width: 640px) {
          .amw-modal {
            grid-template-columns: 1fr;
            max-height: 92vh;
            overflow-y: auto;
          }
        }

        /* Image side */
        .amw-modal-img {
          position: relative;
          min-height: 340px;
          border-radius: 10px 0 0 10px;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .amw-modal-img { min-height: 240px; border-radius: 10px 10px 0 0; }
        }

        /* Content side */
        .amw-modal-body {
          padding: 44px 40px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          overflow-y: auto;
        }
        @media (max-width: 640px) {
          .amw-modal-body { padding: 30px 24px; }
        }

        /* Close */
        .amw-modal-close {
          position: absolute;
          top: 14px;
          right: 18px;
          background: rgba(255,255,255,0.92);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          color: #444;
          z-index: 10000;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .amw-modal-close:hover { color: #111; background: #fff; }

        /* Bullets */
        .amw-modal-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
          border-top: 1px solid #eee;
          padding-top: 16px;
        }
        .amw-modal-bullets li {
          padding-left: 20px;
          position: relative;
          color: #444;
          font-size: 13.5px;
          line-height: 1.45;
        }
        .amw-modal-bullets li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #111;
          font-size: 11px;
          top: 2px;
          font-weight: 700;
        }

        /* Card navigation */
        .amw-modal-nav {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0 4px;
          border-top: 1px solid #eee;
        }
        .amw-modal-nav-btn {
          background: #111;
          border: none;
          border-radius: 50%;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 22px;
          color: #fff;
          transition: background 0.15s;
          flex-shrink: 0;
          line-height: 1;
        }
        .amw-modal-nav-btn:hover:not(:disabled) { background: #333; }
        .amw-modal-nav-btn:disabled { opacity: 0.2; cursor: default; }
        .amw-modal-nav-dots {
          display: flex;
          gap: 7px;
          flex: 1;
          justify-content: center;
        }
        .amw-modal-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ccc;
          transition: background 0.15s, transform 0.15s;
          cursor: pointer;
          border: none;
          padding: 0;
        }
        .amw-modal-dot:hover { background: #888; }
        .amw-modal-dot.active { background: #111; transform: scale(1.3); }

        /* Learn More shake */
        @keyframes amw-shake {
          0%, 90%, 100% { transform: translateX(0); }
          92% { transform: translateX(-5px); }
          94% { transform: translateX(5px); }
          96% { transform: translateX(-4px); }
          98% { transform: translateX(3px); }
        }
        .amw-learn-more-btn {
          animation: amw-shake 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .amw-learn-more-btn:hover {
          animation: none;
        }

        /* CTA buttons */
        .amw-modal-ctas {
          display: flex;
          gap: 10px;
        }
        .amw-modal-cta-primary { flex: 1 1 auto; text-align: center; }
        .amw-modal-cta-secondary { flex: 0 0 auto; white-space: nowrap; }
        @media (max-width: 480px) {
          .amw-modal-ctas { flex-direction: column; }
          .amw-modal-cta-primary,
          .amw-modal-cta-secondary { flex: 1 1 auto; text-align: center; }
        }
      `}</style>

      <div className="row">
        <div className="col-lg-6 mb-lg-0 mb-30">
          <h2 className="section-title mb-30">
            <AnimatedText text="Our Services" />
          </h2>
          <div className="row">
            <div className="col-lg-10">
              <p className="section-descr mb-20 mb-sm-20 wow fadeInUp" data-wow-delay="0.4s">
                6 services. One call. From paver patios and concrete slabs to turf, rock, and full demolition — AMW handles every phase of your hardscape project with a single point of contact.
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
          <div className="tab-content services-content" style={{ width: "100%" }}>
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
                    style={{ objectFit: "cover", objectPosition: "center", filter: "contrast(1.12) saturate(1.25) brightness(1.06)" }}
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
          <div className="amw-modal" onClick={(e) => e.stopPropagation()}>

            {/* Image */}
            <div className="amw-modal-img">
              <Image
                fill
                src={activeCard.image}
                alt={activeCard.heading}
                style={{ objectFit: "cover", filter: "contrast(1.12) saturate(1.25) brightness(1.06)" }}
                sizes="430px"
              />
            </div>

            {/* Content */}
            <div className="amw-modal-body">
              <button className="amw-modal-close" onClick={closeModal} aria-label="Close">×</button>

              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 0, lineHeight: 1.2, paddingRight: 20 }}>
                {activeCard.heading}
              </h3>

              <p style={{ color: "#555", lineHeight: 1.75, marginBottom: 0, fontSize: 14 }}>
                {activeCard.body}
              </p>

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
