"use client";
import site from "@/data/site";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/components/homes/tww/TWWModal.module.css";
import "@/components/homes/tww/TWWServiceTab.module.css";
import "@/components/homes/tww/TWWPaverService.module.css";
import { useSwipeNavigation } from "@/utils/useSwipeNavigation";

const services = [
  {
    id: "travertine",
    label: "Travertine",
    number: "01",
    title: "Travertine",
    description:
      "The most popular paver in Arizona — stays cooler underfoot than concrete or brick in direct sun, ideal for pool decks and patios where bare feet are the norm.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Arizona_suburb_home_patio_pool_202605131833.jpeg",
        heading: "Why Travertine?",
        body: "Travertine stays significantly cooler underfoot than concrete or brick in direct sun, making it the right call for pool decks and patios. Its natural variation means no two jobs look identical, and the tumbled-edge finish hides chips and wear over time. We set travertine on a compacted base with proper pitch so surface water sheets off cleanly.",
        bullets: ["Stays cool underfoot in Arizona sun", "Natural variation — no two jobs identical", "Tumbled-edge finish hides wear over time"],
      },
      {
        image: "/assets/tww-assets/tww-images/Architectural_photo_of_Arizona_suburb_202605131833.jpeg",
        heading: "Installation & Base Prep",
        body: "Every travertine job starts with excavation, a compacted aggregate base, proper surface pitch, edge restraints, and joint sand. The base is what makes travertine last — skip that step and even the best stone will shift and crack within a few years.",
        bullets: ["Compacted aggregate base — 4 to 6 inches", "Surface pitched 1/8\" per foot minimum", "Polymeric sand joints for weed suppression"],
      },
    ],
  },
  {
    id: "concrete-pavers",
    label: "Concrete Pavers",
    number: "02",
    title: "Concrete Pavers",
    description:
      "Widest range of colors, shapes, and sizes. Denser than poured concrete, easier to repair, and the best all-around performer for driveways, patios, and front yards.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Arizona_house_installing_beautiful_202605131833.jpeg",
        heading: "Why Concrete Pavers?",
        body: "Concrete pavers are manufactured to tight tolerances so cuts stay clean and patterns stay consistent. High-quality concrete pavers are denser than poured concrete, resist cracking better, and individual units can be pulled and reset if a utility line ever needs access. Best all-around performer for most AZ projects.",
        bullets: ["Denser than poured concrete — resists cracking", "Widest color, shape & size range available", "Individual units removable for utility access"],
      },
      {
        image: "/assets/tww-assets/tww-images/Arizona_house_installing_pool_backyard_202605131833.jpeg",
        heading: "Driveways & Patios",
        body: "For large driveways, extended patios, and front yards, concrete pavers deliver long-term performance at a price point that makes sense. They hold up to vehicle traffic, heavy foot traffic, and Arizona heat cycles without the cracking risk of a monolithic slab.",
        bullets: ["Handles vehicle & heavy foot traffic", "No cracking risk from heat expansion", "Cleaner repair — replace units, not slabs"],
      },
    ],
  },
  {
    id: "flagstone",
    label: "Flagstone",
    number: "03",
    title: "Flagstone",
    description:
      "Natural, irregular cuts for patios and walkways where you want an organic look that concrete can't replicate. Arizona sandstone, slate, and quartzite.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Arizona_house_installing_beautiful_202605131833.jpeg",
        heading: "Why Flagstone?",
        body: "Flagstone is the natural choice for patios and garden walkways where you want an organic, irregular look. Arizona sandstone, slate, and quartzite are the most common — each with different color ranges and surface textures. No two flagstone installations look alike.",
        bullets: ["Arizona sandstone, slate & quartzite", "Organic look — no two jobs identical", "Works with desert landscaping & plantings"],
      },
      {
        image: "/assets/tww-assets/tww-images/Arizona_house_installing_pool_backyard_202605131833.jpeg",
        heading: "Dry-Set vs Mortar-Set",
        body: "Dry-set flagstone over a compacted DG base works well in AZ's dry climate and allows for natural movement. Mortar-set on concrete gives a more formal finish and prevents shifting in high-traffic areas. We match the setting method to how the space will actually be used.",
        bullets: ["Dry-set: natural movement, easier repair", "Mortar-set: formal finish, high-traffic areas", "Setting method matched to use case"],
      },
    ],
  },
  {
    id: "porcelain",
    label: "Porcelain",
    number: "04",
    title: "Porcelain",
    description:
      "Large-format, non-porous, virtually zero maintenance. The fastest-growing paver choice for upscale Arizona patios — worth the higher install cost for the right project.",
    cards: [
      {
        image: "/assets/tww-assets/client-images/after4-800h.webp",
        heading: "Why Porcelain?",
        body: "Large-format porcelain is non-porous — it won't stain from pool chemicals, sunscreen, or hard water, and it needs virtually zero maintenance. The large slab format creates a clean, modern look that's hard to achieve with traditional pavers. For the right project, it's worth every dollar.",
        bullets: ["Non-porous — won't stain from pool chemicals", "Virtually zero maintenance after install", "Large-format modern look, clean lines"],
      },
      {
        image: "/assets/tww-assets/client-images/luxury-custom-inground-swimming-pool-800h.webp",
        heading: "What to Know Before Choosing Porcelain",
        body: "Porcelain requires a very flat, stable base and more precise cuts than natural stone or concrete pavers. Install cost runs higher — but the long-term maintenance savings make it the right call for pool surrounds, covered patios, and outdoor kitchens where appearance matters most.",
        bullets: ["Requires flat, stable base — no shortcuts", "More precise cuts than concrete or stone", "Best for pool surrounds & covered patios"],
      },
    ],
  },
  {
    id: "base-drainage",
    label: "Base & Drainage",
    number: "05",
    title: "Base & Drainage",
    description:
      "What separates a 5-year paver job from a 30-year one. The base, pitch, and drainage are decided before the first stone is set — and they can't be fixed afterward.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Arizona_suburb_home_patio_pool_202605131833_2.jpeg",
        heading: "The Foundation of Every Job",
        body: "Every installation needs a compacted aggregate base — typically 4 to 6 inches of crushed rock — and a 1-inch bedding layer of coarse sand or decomposed granite. We check grade before we compact and confirm drainage direction before the first paver goes down. No shortcuts here.",
        bullets: ["4–6\" compacted crushed rock base", "1\" bedding layer: coarse sand or DG", "Grade checked before compaction begins"],
      },
      {
        image: "/assets/tww-assets/tww-images/Architectural_photo_of_Arizona_suburb_202605131833.jpeg",
        heading: "Surface Pitch & Water Management",
        body: "Surface pitch is the detail most contractors get wrong. Minimum 1/8 inch per foot away from the structure so water drains clear and doesn't pool against the foundation. We build pitch into the layout plan — not as an afterthought after the base is set.",
        bullets: ["1/8\" per foot minimum pitch from structure", "Drainage direction confirmed in layout stage", "No pooling against foundations or walls"],
      },
    ],
  },
  {
    id: "pattern-layout",
    label: "Pattern & Layout",
    number: "06",
    title: "Pattern & Layout",
    description:
      "Pattern affects structural performance, not just aesthetics. The right choice for a driveway is different from the right choice for a patio — and we map it out before a single paver is set.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/architectual_photo_of_arizona_house_202605131833_2.jpeg",
        heading: "Choosing the Right Pattern",
        body: "A 45-degree herringbone is the strongest pattern for driveways — the interlocking cuts distribute load across more joints and resist shifting under vehicle weight. Running bond works well for walkways and makes narrow spaces feel longer. Basketweave and pinwheel suit patios where the visual detail is the point.",
        bullets: ["Herringbone: strongest for driveways", "Running bond: walkways & narrow spaces", "Basketweave & pinwheel: patio focal points"],
      },
      {
        image: "/assets/tww-assets/tww-images/architectual_photo_of_arizona_house_202605131833_2.jpeg",
        heading: "We Dry-Lay Before We Commit",
        body: "We dry-lay a representative section before setting anything in sand so you can see the real scale and look of the pattern on your actual surface. What looks good on a sample board at 12 inches can look very different at full scale across a 400-square-foot driveway.",
        bullets: ["Dry-lay section before final install", "See real scale before committing", "Cuts planned to minimize waste & visible trimming"],
      },
    ],
  },
  {
    id: "other-pavers",
    label: "Other Pavers",
    number: "07",
    title: "Other Pavers",
    description:
      "Brick, cobblestone, decomposed granite, and specialty materials. If you have something specific in mind, ask us — we source what the job calls for.",
    cards: [
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833.jpeg",
        heading: "Specialty & Accent Materials",
        body: "Brick is timeless and durable — less popular in AZ due to heat absorption but a strong choice for shaded entries and accent borders. Cobblestone brings a high-end, old-world look that works well as border accents around larger paver fields. Each material has its place when the design calls for it.",
        bullets: ["Brick: shaded entries & accent borders", "Cobblestone: high-end accent & border work", "Each material matched to its best use case"],
      },
      {
        image: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_2.jpeg",
        heading: "Decomposed Granite & Ground Cover",
        body: "Decomposed granite isn't a paver but it pairs with every material above — it's the most common AZ ground cover for fill zones, transition areas, and low-water landscape beds. We integrate DG cleanly with pavers and concrete so borders look finished, not patched.",
        bullets: ["DG: fill zones & low-water landscape beds", "Clean borders between DG & paver fields", "If you have something specific in mind — ask us"],
      },
    ],
  },
];

export default function TWWPaverService() {
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
            <AnimatedText text="Paver Installation" />
          </h2>
          <div className="row">
            <div className="col-lg-10">
              <p className="section-descr mb-20 mb-sm-20 wow fadeInUp" data-wow-delay="0.4s">
                Every paver job starts before the first stone is set. We assess grade, drainage direction, and sub-base condition — because what&rsquo;s underneath is what separates a long-lasting install from one that starts shifting after the first monsoon.
              </p>
            </div>
          </div>
          <ul className="nav nav-tabs services-tabs psvc-tabs-desktop wow fadeInUp" data-wow-delay="0.55s" role="tablist">
            {services.map((svc, i) => (
              <li key={svc.id} role="presentation">
                <a
                  href={`#psvc-${svc.id}`}
                  className={i === 0 ? "active" : ""}
                  aria-controls={`psvc-${svc.id}`}
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
            className="psvc-tabs-mobile"
            defaultValue={services[0].id}
            onChange={(e) => {
              const tab = document.querySelector(`a[href="#psvc-${e.target.value}"]`);
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

        <div className="col-lg-6 psvc-img-col d-flex wow fadeInLeft" data-wow-delay="0.55s" data-wow-offset={275}>
          <div className="tab-content services-content">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`tab-pane services-content-item fade ${i === 0 ? "show active" : ""}`}
                id={`psvc-${svc.id}`}
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
