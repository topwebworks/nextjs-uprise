"use client";
import Link from "next/link";
import "@/components/homes/amw/AMWFeatureCarousel.module.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AMWFeatureCarousel() {
  return (
    <div className="container position-relative">
      <div className="wow fadeInUp">
        <div className="relative">
          <Swiper
            spaceBetween={0}
            breakpoints={{
              1199: {
                slidesPerView: 3, // When window width is <= 1199px
              },
              768: {
                slidesPerView: 2, // When window width is <= 768px
              },
              480: {
                slidesPerView: 1, // When window width is <= 480px
              },
              200: {
                slidesPerView: 1, // When window width is <= 200px
              },
            }}
            modules={[Navigation, Pagination]}
            loop
            navigation={{
              prevEl: ".snbp3",
              nextEl: ".snbn3",
            }}
            pagination={{
              el: ".sp1",
              clickable: true,
              bulletActiveClass: "active",
              renderBullet: (index, className) => {
                return `<div class=" owl-page ${className}">
                   <span></span>
                  </div>`;
              },
            }}
            watchSlidesProgress
            resizeObserver
            className="item-carousel owl-carousel owl-theme overflow-hidden position-static"
            style={{
              opacity: 1,
              display: "block",
            }}
          >
            {/* Team item */}

            <>
              <SwiperSlide className="owl-item">
                <Link
                  href="/#service-pavers"
                  className="features-item d-block amw-feature-link"
                  aria-label="View Paver Installation service"
                >
                  <div className="features-icon">
                    {/* Paver grid / tile icon */}
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="9" height="9" rx="1"/>
                      <rect x="13" y="2" width="9" height="9" rx="1"/>
                      <rect x="2" y="13" width="9" height="9" rx="1"/>
                      <rect x="13" y="13" width="9" height="9" rx="1"/>
                    </svg>
                  </div>
                  <div className="features-title">Paver Installation</div>
                  <div className="features-descr">
                    Driveways, patios, walkways, and pool decks installed with
                    concrete pavers or travertine, compacted base, edge
                    restraints, and joint sand.
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <Link
                  href="/#service-concrete"
                  className="features-item d-block amw-feature-link"
                  aria-label="View Concrete Work service"
                >
                  <div className="features-icon">
                    {/* Concrete pour icon */}
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2h8l1 6H7L8 2z"/>
                      <path d="M7 8l-3 12h16L17 8"/>
                      <path d="M10 13v4"/>
                      <path d="M14 13v4"/>
                    </svg>
                  </div>
                  <div className="features-title">Concrete Work</div>
                  <div className="features-descr">
                    Driveways, patio slabs, RV pads, and garage extensions
                    excavated, formed, poured over compacted subgrade, and
                    finished with proper control joints.
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <Link
                  href="/#service-turf"
                  className="features-item d-block amw-feature-link"
                  aria-label="View Artificial Turf service"
                >
                  <div className="features-icon">
                    {/* Grass blades / turf icon */}
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22V12"/>
                      <path d="M12 12C12 7 9 4 5 3c0 5 3 8 7 9"/>
                      <path d="M12 12c0-5 3-8 7-9-1 5-4 8-7 9"/>
                      <path d="M6 22v-6"/>
                      <path d="M6 16c0-3-2-5-4-6 0 3 2 5 4 6"/>
                      <path d="M18 22v-6"/>
                      <path d="M18 16c0-3 2-5 4-6 0 3-2 5-4 6"/>
                      <line x1="2" y1="22" x2="22" y2="22"/>
                    </svg>
                  </div>
                  <div className="features-title">Artificial Turf</div>
                  <div className="features-descr">
                    Front yards, side yards, dog runs, and putting greens
                    installed with DG base prep, drainage, infill, nail-set
                    edges, and clean seams.
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <Link
                  href="/#service-rock"
                  className="features-item d-block amw-feature-link"
                  aria-label="View Decorative Rock service"
                >
                  <div className="features-icon">
                    {/* Mountain / rock icon */}
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 3L1 21h22L15 3z"/>
                      <path d="M12 8l-4 13"/>
                      <path d="M12 8l4 13"/>
                    </svg>
                  </div>
                  <div className="features-title">Decorative Rock</div>
                  <div className="features-descr">
                    Decorative rock worked into paver, turf, concrete, and
                    border areas with fabric where needed, clean edges, and
                    low-water transitions.
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <Link
                  href="/#service-demolition"
                  className="features-item d-block amw-feature-link"
                  aria-label="View Demolition and Removal service"
                >
                  <div className="features-icon">
                    {/* Hammer / demolish icon */}
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12l-8.5 8.5a2.12 2.12 0 01-3-3L12 9"/>
                      <path d="M17.64 15L22 10.64"/>
                      <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 00-3.94-1.64H9l.92.82A6.18 6.18 0 0112 8.4v1.56l2 2h2.47l2.26 1.91"/>
                    </svg>
                  </div>
                  <div className="features-title">Demolition &amp; Removal</div>
                  <div className="features-descr">
                    Old concrete, pavers, turf, and landscaping removed,
                    hauled away, and cleaned up so the site is ready for the
                    next phase.
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <Link
                  href="/#service-driveway"
                  className="features-item d-block amw-feature-link"
                  aria-label="View Driveway Additions service"
                >
                  <div className="features-icon">
                    {/* Road / driveway icon */}
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="3" width="15" height="13" rx="1"/>
                      <path d="M16 8h4l3 3v5h-7V8z"/>
                      <circle cx="5.5" cy="18.5" r="2.5"/>
                      <circle cx="18.5" cy="18.5" r="2.5"/>
                    </svg>
                  </div>
                  <div className="features-title">Driveway Additions</div>
                  <div className="features-descr">
                    Driveways widened or extended with pavers or concrete for
                    RVs, extra parking, matched finishes, compacted base,
                    drainage, and clean edges.
                  </div>
                </Link>
              </SwiperSlide>
            </>

            <div className="owl-controls clickable">
              <div className="owl-pagination sp1"></div>
              <div className="owl-buttons">
                <div className="owl-prev snbp3" role="button" tabIndex="0">
                  <span className="visually-hidden">Previous Slide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    //   xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="27px"
                    height="57px"
                    viewBox="0 0 27 57"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"></path>
                  </svg>
                </div>
                <div className="owl-next snbn3" role="button" tabIndex="0">
                  <span className="visually-hidden">Next Slide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    //   xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="27px"
                    height="57px"
                    viewBox="0 0 27 57"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* End Team item */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
