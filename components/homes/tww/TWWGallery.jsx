"use client";
import { useState } from "react";
import Image from "next/image";
import NextImageLightbox from "@/components/common/NextImageLightbox";
import "@/components/homes/tww/TWWGallery.module.css";

const filters = ["All", "Pavers", "Concrete", "Driveways", "Turf", "Rock"];

const projects = [
  {
    src: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833.jpeg",
    alt: "Artificial turf and travertine pavers with pool and mountain views",
    categories: ["Turf", "Pavers"],
    title: "Turf & Pool Deck",
    location: "Client City",
    width: 1440,
    height: 1920,
  },
  {
    src: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_2.jpeg",
    alt: "Stepping stone walkway with artificial turf front yard",
    categories: ["Pavers", "Turf"],
    title: "Stepping Stone Entry",
    location: "Gilbert",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_3.jpeg",
    alt: "Travertine paver patio with turf, pool, fire pit, and string lights",
    categories: ["Pavers", "Turf"],
    title: "Patio, Pool & Fire Pit",
    location: "Client City",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_4.jpeg",
    alt: "Paver patio with stone fire pit surrounded by artificial turf",
    categories: ["Turf", "Pavers"],
    title: "Fire Pit & Turf",
    location: "Client City",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_5.jpeg",
    alt: "Organic-shaped artificial turf with paver border and desert landscaping",
    categories: ["Turf", "Rock"],
    title: "Desert Turf Yard",
    location: "Mesa",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_6.jpeg",
    alt: "Large travertine paver patio with lush trees and pool fence",
    categories: ["Pavers"],
    title: "Travertine Patio",
    location: "Chandler",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/tww-images/Arizona_suburb_home_patio_pool_202605131833.jpeg",
    alt: "Finished concrete driveway expansion with clean control joints",
    categories: ["Concrete", "Driveways"],
    title: "Driveway Expansion",
    location: "Gilbert",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/tww-images/Arizona_suburb_home_patio_pool_202605131833_2.jpeg",
    alt: "Paver driveway addition with dark border and decorative rock",
    categories: ["Driveways", "Pavers"],
    title: "Paver Driveway",
    location: "Client City",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/tww-images/Arizona_house_backyard_landscaping_202605131833.jpeg",
    alt: "Artificial turf backyard with paver stepping stones and pool",
    categories: ["Turf", "Pavers"],
    title: "Turf & Stepping Stones",
    location: "Chandler",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/tww-images/Arizona_house_in_suburb_frontyard_202605131833.jpeg",
    alt: "Dark herringbone paver patio with stone fire feature",
    categories: ["Pavers"],
    title: "Herringbone Pavers",
    location: "Client City",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/tww-images/Arizona_house_installing_artificial_202605131833.jpeg",
    alt: "Circular travertine paver fire pit surround with decorative rock",
    categories: ["Rock", "Pavers"],
    title: "Fire Pit Surround",
    location: "Client City",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/tww-images/Arizona_house_installing_artificial_202605131833_2.jpeg",
    alt: "Curved concrete driveway with clean sweep and blue sky",
    categories: ["Concrete", "Driveways"],
    title: "Concrete Driveway",
    location: "Service Area",
    width: 1179,
    height: 1572,
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
