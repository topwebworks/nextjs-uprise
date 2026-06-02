"use client";
import { useState } from "react";
import Image from "next/image";
import NextImageLightbox from "@/components/common/NextImageLightbox";

const filters = ["All", "Pavers", "Concrete", "Driveways", "Turf", "Rock"];

const projects = [
  {
    src: "/assets/tww-assets/amw-images/IMG_4281.HEIC.jpg",
    alt: "Artificial turf and travertine pavers with pool and mountain views",
    categories: ["Turf", "Pavers"],
    title: "Turf & Pool Deck",
    location: "San Tan Valley",
    width: 1440,
    height: 1920,
  },
  {
    src: "/assets/tww-assets/amw-images/IMG_1082.HEIC.jpg",
    alt: "Stepping stone walkway with artificial turf front yard",
    categories: ["Pavers", "Turf"],
    title: "Stepping Stone Entry",
    location: "Gilbert",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/amw-images/IMG_1543.HEIC.jpg",
    alt: "Travertine paver patio with turf, pool, fire pit, and string lights",
    categories: ["Pavers", "Turf"],
    title: "Patio, Pool & Fire Pit",
    location: "Queen Creek",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/amw-images/IMG_2937.HEIC.jpg",
    alt: "Paver patio with stone fire pit surrounded by artificial turf",
    categories: ["Turf", "Pavers"],
    title: "Fire Pit & Turf",
    location: "San Tan Valley",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/amw-images/IMG_3039.HEIC.jpg",
    alt: "Organic-shaped artificial turf with paver border and desert landscaping",
    categories: ["Turf", "Rock"],
    title: "Desert Turf Yard",
    location: "Mesa",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/amw-images/IMG_1773.HEIC.jpg",
    alt: "Large travertine paver patio with lush trees and pool fence",
    categories: ["Pavers"],
    title: "Travertine Patio",
    location: "Chandler",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/amw-images/IMG_1509.HEIC.jpg",
    alt: "Finished concrete driveway expansion with clean control joints",
    categories: ["Concrete", "Driveways"],
    title: "Driveway Expansion",
    location: "Gilbert",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/amw-images/IMG_2401.HEIC.jpg",
    alt: "Paver driveway addition with dark border and decorative rock",
    categories: ["Driveways", "Pavers"],
    title: "Paver Driveway",
    location: "Queen Creek",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/amw-images/IMG_2916.HEIC.jpg",
    alt: "Artificial turf backyard with paver stepping stones and pool",
    categories: ["Turf", "Pavers"],
    title: "Turf & Stepping Stones",
    location: "Chandler",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/amw-images/IMG_3112.HEIC.jpg",
    alt: "Dark herringbone paver patio with stone fire feature",
    categories: ["Pavers"],
    title: "Herringbone Pavers",
    location: "San Tan Valley",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/amw-images/IMG_3245.HEIC.jpg",
    alt: "Circular travertine paver fire pit surround with decorative rock",
    categories: ["Rock", "Pavers"],
    title: "Fire Pit Surround",
    location: "Queen Creek",
    width: 1179,
    height: 1572,
  },
  {
    src: "/assets/tww-assets/amw-images/IMG_3687.HEIC.jpg",
    alt: "Curved concrete driveway with clean sweep and blue sky",
    categories: ["Concrete", "Driveways"],
    title: "Concrete Driveway",
    location: "East Valley",
    width: 1179,
    height: 1572,
  },
];

export default function AMWGallery() {
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
      <style>{`
        .amw-gallery-thumb {
          cursor: zoom-in;
          display: block;
          position: relative;
          overflow: hidden;
          aspect-ratio: 1/1;
          width: 100%;
          border: 0;
          padding: 0;
          background: transparent;
          color: inherit;
          text-align: left;
        }
        .amw-gallery-thumb img {
          filter: contrast(1.08) saturate(1.2) brightness(1.04);
          transition: transform 0.4s ease, filter 0.4s ease;
        }
        .amw-gallery-thumb:hover img {
          transform: scale(1.04);
          filter: contrast(1.12) saturate(1.3) brightness(1.08);
        }
        @keyframes amw-shuffle-in {
          0% { opacity: 0; transform: translateY(18px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .amw-shuffle .amw-gallery-thumb {
          animation: amw-shuffle-in 0.35s ease both;
        }
        .amw-filter-desktop { white-space: nowrap; flex-wrap: nowrap !important; }
        .amw-filter-mobile { display: none; }
        @media (max-width: 767px) {
          .amw-filter-desktop { display: none !important; }
          .amw-filter-mobile {
            display: block;
            width: 100%;
            max-width: 350px;
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
          }
        }
        @media (max-width: 575px) {
          .amw-filter-mobile { max-width: 100%; }
        }
      `}</style>

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
        <div style={{ marginBottom: 40 }}>
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
            className={`row g-3${!animating ? " amw-shuffle" : ""}`}
            style={{ transition: "opacity 0.18s ease", opacity: animating ? 0 : 1 }}
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
                        style={{ objectFit: "cover", objectPosition: "center", transition: "transform 0.4s ease" }}
                      />
                      <div
                        className="position-absolute bottom-0 start-0 end-0 p-3"
                        style={{
                          background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                          color: "#fff",
                          fontSize: 13,
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        {p.title}
                        <span style={{ display: "block", fontSize: 10, fontWeight: 400, letterSpacing: "0.06em", opacity: 0.75, marginTop: 2 }}>{p.location}</span>
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
