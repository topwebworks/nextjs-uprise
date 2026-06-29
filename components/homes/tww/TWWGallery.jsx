"use client";
import { useState } from "react";
import Image from "next/image";
import NextImageLightbox from "@/components/common/NextImageLightbox";
import "@/components/homes/tww/TWWGallery.module.css";

const filters = ["All", "Pools", "Decks", "Equipment"];

const projects = [
  {
    src: "/assets/tww-assets/client-images/5.jpg",
    alt: "Pool and spa renovation — new blue mosaic tile and travertine deck",
    categories: ["Pools", "Decks"],
    title: "Pool & Spa Renovation",
    location: "Mesa",
    width: 1200,
    height: 900,
  },
  {
    src: "/assets/tww-assets/client-images/1.jpg",
    alt: "Rectangular pool resurfaced with new kool deck and diving board",
    categories: ["Pools", "Decks"],
    title: "Pool Resurface & Deck",
    location: "Gilbert",
    width: 1200,
    height: 900,
  },
  {
    src: "/assets/tww-assets/client-images/unnamed+(2)-2880w.webp",
    alt: "Pool deck renovation — new large-format marble stone pavers",
    categories: ["Decks"],
    title: "Stone Deck Renovation",
    location: "Gilbert",
    width: 2880,
    height: 2880,
  },
  {
    src: "/assets/tww-assets/client-images/after4-800h.webp",
    alt: "Pool resurfacing complete — fresh pebble finish and updated deck",
    categories: ["Pools", "Decks"],
    title: "Resurfacing — After",
    location: "Gilbert",
    width: 1200,
    height: 800,
  },
  {
    src: "/assets/tww-assets/client-images/7.jpg",
    alt: "Freeform pool and spa resurfaced with kool deck restored",
    categories: ["Pools"],
    title: "Freeform Pool & Spa",
    location: "Chandler",
    width: 1200,
    height: 900,
  },
  {
    src: "/assets/tww-assets/client-images/4.jpg",
    alt: "Pool and spa renovation — new blue glass mosaic tile and travertine coping",
    categories: ["Pools", "Decks"],
    title: "Pool & Spa — New Tile",
    location: "Tempe",
    width: 1200,
    height: 900,
  },
  {
    src: "/assets/tww-assets/client-images/16.jpg",
    alt: "Freeform pool with resurfaced kool deck and paver border — full backyard",
    categories: ["Pools", "Decks"],
    title: "Pool & Deck Renovation",
    location: "Ahwatukee",
    width: 1200,
    height: 900,
  },
  {
    src: "/assets/tww-assets/client-images/19.jpg",
    alt: "Pool resurfacing after — fresh pebble finish and kool deck",
    categories: ["Pools"],
    title: "Pool Resurfacing",
    location: "Mesa",
    width: 900,
    height: 1200,
  },
  {
    src: "/assets/tww-assets/client-images/14.jpg",
    alt: "Freeform pool with new kool deck and paver surround — wide backyard view",
    categories: ["Pools", "Decks"],
    title: "Pool Deck Restoration",
    location: "Scottsdale",
    width: 1200,
    height: 900,
  },
  {
    src: "/assets/tww-assets/client-images/6101733a146c9.image-800h.webp",
    alt: "Pool equipment repair — technician servicing pool plumbing",
    categories: ["Equipment"],
    title: "Equipment Repair",
    location: "Gilbert",
    width: 1200,
    height: 800,
  },
  {
    src: "/assets/tww-assets/client-images/8.jpg",
    alt: "New cartridge filter installed — pool equipment upgrade",
    categories: ["Equipment"],
    title: "Filter Replacement",
    location: "Gilbert",
    width: 900,
    height: 1200,
  },
  {
    src: "/assets/tww-assets/client-images/22.jpg",
    alt: "New pool filter and pump system installed",
    categories: ["Equipment"],
    title: "Pump & Filter Install",
    location: "Chandler",
    width: 900,
    height: 1200,
  },
];

export default function TWWGallery() {
  const [active, setActive] = useState("All");
  const [displayed, setDisplayed] = useState("All");
  const [animating, setAnimating] = useState(false);
  const [key, setKey] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visible = displayed === "All" ? projects : projects.filter((p) => p.categories.includes(displayed));

  function handleFilter(f) {
    if (f === active) return;
    setAnimating(true);
    setTimeout(() => {
      setDisplayed(f);
      setActive(f);
      setKey(k => k + 1);
      setAnimating(false);
    }, 180);
  }

  return (
    <>
      <div className="container position-relative">
        <div className="row mb-10">
          <div className="col-md-8">
            <h2 className="section-title">Recent Projects</h2>
          </div>
          <div className="col-md-4 d-flex align-items-end justify-content-md-end mt-20 mt-md-0 amw-gallery-header-btn">
            <a href="#contact-form" className="btn btn-mod btn-large btn-round btn-hover-anim local-scroll">
              <span>Start Project</span>
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-40">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
          <div className="works-filter clearlist amw-filter-desktop">
            {filters.map((f) => (
              <a
                key={f}
                href="#"
                className={active === f ? "active" : ""}
                onClick={(e) => { e.preventDefault(); handleFilter(f); }}
              >
                {f}
              </a>
            ))}
          </div>
          <select
            className="amw-filter-mobile"
            value={active}
            onChange={(e) => handleFilter(e.target.value)}
          >
            {filters.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          </div>
        </div>

          <div
            key={key}
            className={`row g-3 amw-gallery-grid${!animating ? " amw-shuffle" : ""}`}
            style={{ opacity: animating ? 0 : 1 }}
          >
            {visible.map((p, i) => (
              <div key={i} className="col-6 col-md-4">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="amw-gallery-thumb"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  aria-label={`View ${p.title}`}
                >
                      <Image
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        src={p.src}
                        alt={p.alt}
                        className="amw-gallery-img"
                        priority={i === 0}
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                      <div className="position-absolute bottom-0 start-0 end-0 p-3 amw-gallery-caption">
                        {p.title}
                        <span className="amw-gallery-caption-location">{p.location}</span>
                      </div>
                </button>
              </div>
            ))}
          </div>
        <NextImageLightbox
          images={visible}
          activeIndex={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      </div>
    </>
  );
}
