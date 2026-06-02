"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/components/homes/amw/AMWModal.module.css";
import "@/components/homes/amw/AMWServiceTab.module.css";
import "@/components/homes/amw/AMWTurfService.module.css";
import { useSwipeNavigation } from "@/utils/useSwipeNavigation";

const services = [
  {
    id: "sub-base",
    label: "Sub-Base & Drainage",
    number: "01",
    title: "Sub-Base & Drainage",
    description:
      "The sub-base determines whether turf drains properly, stays level, and holds its edge over time. It's the same decision on every job — artificial or natural — and it has to be right before anything goes down.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/b33260_9f9ecc7972264e2f911437b41864181d~mv2.jpg",
        heading: "Sub-Base Prep",
        body: "AMW excavates 4–6 inches, kills the existing weed layer, removes vegetation and roots, and installs a compacted decomposed granite base. DG drains well, compacts firm, and gives turf a stable, level surface to sit on. We compact in lifts so the base doesn't settle unevenly after install. On artificial turf jobs, a weed barrier is stapled over the DG before the turf goes down to prevent breakthrough and block organic material from working up into the infill.",
        bullets: ["4–6\" excavation depth on every turf job", "DG compacted in lifts for uniform density across the full area", "Weed barrier stapled over DG before artificial turf install"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_4218.HEIC.jpg",
        heading: "Drainage",
        body: "Turf fails at the drainage layer before it fails anywhere else. AMW grades the sub-base so water moves away from structures on every job — artificial or sod. On artificial installs, we specify flow-through perforated backing and confirm drainage direction before the first roll goes down. In yards with poor natural drainage or caliche hardpan close to the surface, we address the grade and add perforated pipe as needed — not after the fact.",
        bullets: ["Sub-base graded away from structures on every install — artificial and sod", "Flow-through perforated backing specified on artificial turf jobs", "Perforated pipe added where caliche or poor native drainage requires it"],
      },
    ],
  },
  {
    id: "turf-selection",
    label: "Artificial Turf Selection",
    number: "02",
    title: "Artificial Turf Selection",
    description:
      "The install method and the specification together determine how long artificial turf lasts in Arizona. Face weight, blade profile, and UV rating are the specs that matter — and they only perform if the sub-base underneath them is built correctly.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/b33260_543fcf34b19b4fea8f524d0346067e3b~mv2.jpg",
        heading: "Specs That Actually Matter",
        body: "Face weight — measured in ounces per square foot — is the primary indicator of material quality. Below 40 oz is builder-grade that mats quickly regardless of how well it's installed. Quality residential turf runs 40–60 oz. Pile height affects the look: shorter pile (1–1.5\") reads manicured and suits front yards and putting greens; taller pile (1.5–2\") looks lusher for backyards and play areas. Blade shape determines recovery — C-shaped, M-shaped, and W-shaped profiles spring back under foot traffic far longer than flat blades. A high-spec product on a poorly compacted base still fails early. The installation has to support the material.",
        bullets: ["Face weight 40–60 oz for quality residential installs — below 40 oz mats fast", "C, M & W blade profiles recover under traffic; flat blades don't", "Spec and installation together determine lifespan — neither works without the other"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_2937.HEIC.jpg",
        heading: "Arizona Heat & UV",
        body: "UV degradation is the primary lifespan factor for artificial turf in Arizona — not foot traffic. A south-facing front yard in unshaded direct sun ages faster than a shaded north-facing backyard regardless of how much it's used. Standard turf also gets significantly hotter underfoot than natural grass in direct sun. AMW specifies cool-yarn products with UV-reflective fibers for high-sun exposures and tells you honestly what lifespan to expect based on your yard's actual orientation and shade coverage.",
        bullets: ["UV degradation is the primary lifespan factor in AZ — not traffic", "Cool-yarn technology specified for south & west exposures in direct sun", "Product and exposure matched before anything is ordered"],
      },
    ],
  },
  {
    id: "infill",
    label: "Infill",
    number: "03",
    title: "Infill",
    description:
      "Infill keeps artificial turf blades upright, adds cushion, and determines how the surface performs for the specific use — pets, kids, or general residential. The wrong infill for the application is a problem that can't be corrected after install without pulling the turf.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/708621812_122227402142562324_8565497786739555109_n.jpg",
        heading: "Infill Types",
        body: "Silica sand is the standard — affordable, stable, and correct for most residential installs. For pet runs, zeolite is the right call: it neutralizes odors through ion exchange, trapping ammonium compounds before they off-gas. For play areas where children spend extended time on the surface, AMW recommends TPE (thermoplastic elastomer) or cork over crumb rubber — crumb rubber retains more heat and has documented concerns around microplastics in contact areas. We explain what's in each option and let you make the call.",
        bullets: ["Silica sand: standard, stable, correct for most residential installs", "Zeolite: odor-neutralizing ion exchange — right choice for pet runs", "TPE or cork for play areas — lower heat retention, no microplastic concerns"],
      },
      {
        image: "/assets/tww-assets/amw-images/b33260_60fa8433f1e04529be6632e3d870638c~mv2.jpg",
        heading: "Infill Quantity & Distribution",
        body: "Infill rate is specified by the turf manufacturer for each product — not estimated in the field. Too little and blades lay flat and don't recover from foot traffic. Too much and the surface feels hard and unnatural. AMW applies infill at the correct rate and power-brushes it in evenly so the turf settles consistently across the full install. In Arizona, caliche dust from haboobs and monsoons compacts into the infill over time and reduces drainage — periodic rinsing after dust storms is the single most important maintenance task.",
        bullets: ["Infill rate matched to manufacturer spec — not field-estimated", "Power-brushed in evenly across full install", "Post-storm rinsing prevents caliche compaction in infill — the primary AZ maintenance issue"],
      },
    ],
  },
  {
    id: "seaming",
    label: "Seaming & Edges",
    number: "04",
    title: "Seaming & Edges",
    description:
      "Seams and edges are the details that determine whether an artificial turf install holds together at year ten or starts showing failure at year two. Done correctly they disappear. Done incorrectly they lift, gap, and gap wider with every monsoon.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/IMG_4523.HEIC.jpg",
        heading: "Seaming",
        body: "Turf seams are glued — not nailed. Seaming tape and polyurethane adhesive on a solid, compacted base is the correct method; nailing is for perimeter edges only. AMW dry-fits every section before adhesive goes down, confirms pile direction is consistent across the seam, and orients pile direction facing the primary viewing angle from the house so the turf shows its best color. A seam executed correctly on a proper base is invisible after infill is brushed in.",
        bullets: ["Seams glued with seaming tape and polyurethane adhesive — nailing is for perimeter only", "Pile direction consistent across every seam joint", "Pile oriented toward primary viewing angle before adhesive is applied"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_4280.HEIC.jpg",
        heading: "Edge Securing",
        body: "Edges are nailed every 3–4 inches along all borders, curves, and transitions to pavers, concrete, or decorative rock. Bender board or nail-down edging locks the perimeter and prevents the turf from pulling back over time. At transitions to hard surfaces, we cut clean and secure the edge flush — no gap for debris, ants, or weeds to establish and work under the backing.",
        bullets: ["Nailed every 3–4\" along all borders, curves, and hard surface transitions", "Bender board locks perimeter against long-term pullback", "Flush cuts at paver, concrete & rock transitions — no gap at the edge"],
      },
    ],
  },
  {
    id: "pets",
    label: "Pet & Kid Turf",
    number: "05",
    title: "Pet & Kid Turf",
    description:
      "Pet runs and play areas have drainage, infill, and durability requirements that differ from a standard residential artificial turf install. Getting the spec right upfront is the difference between a surface that performs for a decade and one that smells or compresses within two years.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/new_04.jpg",
        heading: "Pet Turf",
        body: "Pet turf has to handle urine volume and drainage without retaining odor. AMW installs flow-through perforated backing, zeolite infill for odor neutralization, and grades the base to move liquid away from the structure quickly. For high-use dedicated dog runs, we install a perforated pipe drainage system within the base — not a loose gravel layer, which migrates under load and creates unlevel surfaces. The result is a run that drains fast, stays level, and doesn't smell.",
        bullets: ["Flow-through perforated backing — liquids pass through immediately", "Zeolite infill neutralizes pet odors through ion exchange", "Perforated pipe drainage system for high-use dog runs — not loose gravel"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_4524.HEIC.jpg",
        heading: "Play Areas",
        body: "Play area turf needs enough cushion to soften falls and enough durability to handle constant traffic without compressing permanently. AMW recommends taller pile turf with TPE or cork infill — better heat characteristics and no microplastic concerns compared to crumb rubber. Where play equipment is involved, fall-height ratings are a real specification: turf systems must meet ASTM F1292 standards for critical fall height in the equipment's use zone. We advise on compliant installations based on your equipment.",
        bullets: ["Taller pile with TPE or cork infill — cooler and cleaner than crumb rubber", "ASTM F1292 compliant systems available for play equipment fall zones", "Durability spec matched to the traffic and use, not just the aesthetics"],
      },
    ],
  },
  {
    id: "natural-sod",
    label: "Natural Sod",
    number: "06",
    title: "Natural Sod Installation",
    description:
      "AMW installs natural sod. For properties where natural grass is the right call — HOA requirements, shaded yards, cooler microclimates, or client preference — we handle the full install from soil prep through sod placement.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/IMG_2916.HEIC.jpg",
        heading: "Soil Prep & Grade",
        body: "Natural sod lives or dies by what's underneath it. AMW amends the existing soil where needed — Arizona native soil is typically compacted caliche or sandy loam with low organic content that doesn't establish sod well without preparation. We till, amend with compost, establish grade for positive drainage, and roll the soil firm before sod goes down. Sod laid on uneven or unamended soil fails to root evenly and shows seams and dead patches within one growing season.",
        bullets: ["Soil tilled and amended before sod placement — caliche and sandy loam require prep", "Grade established for positive drainage away from structure", "Soil rolled firm so sod makes full contact across the entire surface"],
      },
      {
        image: "/assets/tww-assets/amw-images/IMG_1082.HEIC.jpg",
        heading: "Sod Selection & Arizona Varieties",
        body: "Bermuda is the dominant warm-season sod in the East Valley — it handles Arizona heat, recovers fast from traffic, and establishes quickly. Hybrid Bermudas like Tifway 419 and TifTuf are denser, finer-bladed, and more drought-tolerant than common Bermuda. Bermuda goes dormant and turns tan in winter — clients who want year-round green typically overseed with perennial ryegrass in October. For shaded areas where Bermuda won't establish, St. Augustine is the viable alternative. We match the variety to the yard's sun exposure, soil, water budget, and intended use.",
        bullets: ["Tifway 419 & TifTuf hybrid Bermuda — denser, finer, more drought-tolerant than common Bermuda", "Winter rye overseeding available for year-round green appearance", "St. Augustine for shaded areas where Bermuda won't establish"],
      },
    ],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    number: "07",
    title: "Maintenance",
    description:
      "Artificial turf and natural sod have different maintenance requirements in Arizona. Knowing what each surface actually needs here — not generic advice — is what keeps both looking right long-term.",
    cards: [
      {
        image: "/assets/tww-assets/amw-images/wix_inset_03.jpg",
        heading: "Artificial Turf in Arizona",
        body: "The primary maintenance issue for artificial turf in Arizona is caliche dust — not foot traffic or pet use. Haboobs and monsoons deposit fine caliche particles that compact into the infill over time, reducing drainage and hardening the surface feel. Periodic rinsing after dust storms flushes this out before it compacts. High-traffic areas benefit from brushing with a stiff broom or power brush to stand blades back up. Organic debris clears before it decomposes against the backing. UV degradation — not maintenance neglect — is what ends the lifespan of a well-installed Arizona turf job after 10–15 years.",
        bullets: ["Rinse after dust storms — caliche compaction in infill is the primary AZ issue", "Brush high-traffic areas periodically to restore blade upright", "Typical lifespan 10–15 years — UV, not maintenance, determines the end date"],
      },
      {
        image: "/assets/tww-assets/amw-images/wix_02.jpg",
        heading: "Natural Sod in Arizona",
        body: "Bermuda sod in Arizona needs consistent irrigation through establishment — typically 3–4 weeks of daily watering to root into amended soil. Once established, Bermuda is drought-tolerant and highly resilient, but it needs regular mowing during the growing season (March through October) to stay dense and prevent thatch buildup. Scalping in early spring — cutting low before green-up — promotes even, dense recovery. Winter ryegrass overseeding requires its own irrigation adjustment and a transition mow-down in spring to let Bermuda come back. We walk clients through the first-season schedule at completion.",
        bullets: ["3–4 weeks daily irrigation through establishment — then Bermuda is drought-tolerant", "Regular mowing March–October prevents thatch and keeps turf dense", "Spring scalp promotes even green-up; winter rye overseeding managed on separate schedule"],
      },
    ],
  },
];

export default function AMWTurfService() {
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
            <AnimatedText text="Turf Installation — Artificial & Natural Sod" />
          </h2>
          <div className="row">
            <div className="col-lg-10">
              <p className="section-descr mb-20 mb-sm-20 wow fadeInUp" data-wow-delay="0.4s">
                AMW installs both artificial turf and natural sod. Either way, the job starts the same: site assessment, sub-base prep, proper grade for drainage, and an installation spec matched to how the space is actually used. Arizona heat, soil conditions, pets, and intended use all factor into what goes in before the first roll or the first piece of sod is laid.
              </p>
            </div>
          </div>
          <ul className="nav nav-tabs services-tabs tsvc-tabs-desktop wow fadeInUp" data-wow-delay="0.55s" role="tablist">
            {services.map((svc, i) => (
              <li key={svc.id} role="presentation">
                <a
                  href={`#tsvc-${svc.id}`}
                  className={i === 0 ? "active" : ""}
                  aria-controls={`tsvc-${svc.id}`}
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
            className="tsvc-tabs-mobile"
            defaultValue={services[0].id}
            onChange={(e) => {
              const tab = document.querySelector(`a[href="#tsvc-${e.target.value}"]`);
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

        <div className="col-lg-6 tsvc-img-col d-flex wow fadeInLeft" data-wow-delay="0.55s" data-wow-offset={275}>
          <div className="tab-content services-content">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`tab-pane services-content-item fade ${i === 0 ? "show active" : ""}`}
                id={`tsvc-${svc.id}`}
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
                <a href="tel:+14807216561" className="btn btn-mod btn-large btn-border btn-round amw-modal-cta-secondary">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
