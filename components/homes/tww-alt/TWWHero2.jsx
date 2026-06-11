"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import "@/components/homes/tww-alt/TWWHero2.module.css";
import site from "@/data/site";

// TO ADD A VIDEO SLIDE:
// 1. Uncomment { type: "video" } below
// 2. Set YT_ID to the YouTube video ID
// 3. Copy the facade implementation from components/homes/amw/AMWHero.jsx in nextjs-reso-amw:
//    - YT_THUMB const, videoState, handlePlayClick, handleSkip
//    - YouTube thumbnail slide, amw-yt-wrap player div
//    - Watch/Skip badge inside hero content (amw-video-badge-center)
//    - Slide timer logic that pauses when videoState === "playing"
// 4. Copy the badge/player CSS from AMWHero.module.css (amw-video-play-btn, etc.)
//    into TWWHero2.module.css, renaming classes to tww- prefix if desired

// const YT_ID = "YOUR_VIDEO_ID";
const IMAGE_DURATION = 5000;

const slides = [
  { type: "image", src: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833.jpeg" },
  { type: "image", src: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_2.jpeg" },
  { type: "image", src: "/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833.jpeg" },
  { type: "image", src: "/assets/tww-assets/tww-images/Arizona_suburb_home_patio_pool_202605131833.jpeg" },
  { type: "image", src: "/assets/tww-assets/tww-images/Arizona_house_backyard_landscaping_202605131833.jpeg" },
  // { type: "video" },
];

export default function TWWHero2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % slides.length);
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(advance, IMAGE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex, advance]);

  return (
    <>
      {/* Background slider */}
      <div className="quest-hero-bg">

        {slides.map((slide, i) =>
          slide.type === "image" ? (
            <div
              key={i}
              className="quest-hero-slide"
              style={{
                opacity: activeIndex === i ? 1 : 0,
              }}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          ) : null
        )}

        <div className="quest-hero-overlay" />
      </div>

      {/* Hero content */}
      <div className="quest-hero-content">
        <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
          <div className="home-content light-content">
            <div className="row">
              <div className="col-md-10 offset-md-1 mb-20 mb-sm-0 text-center">

                <h2 className="hs-title-11 mb-20 mb-xs-10 wow fadeInUp" data-wow-duration="1.2s">
                  <span className="quest-eyebrow-item">Custom Pools</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline quest-eyebrow-dot" aria-hidden="true"> &middot; </span>
                  <span className="quest-eyebrow-item">Hardscape</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline quest-eyebrow-dot" aria-hidden="true"> &middot; </span>
                  <span className="quest-eyebrow-item">Landscaping</span>
                </h2>

                <h1 className="hs-title-12 mb-30 mb-sm-20">
                  <AnimatedText text="Where Every Detail is Deliberate." />
                </h1>

                <div className="quest-service-pills wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1.2s">
                  {[
                    { label: "Pool Builds", id: "pool-builds" },
                    { label: "Remodels", id: "pool-remodels" },
                    { label: "Hardscape", id: "hardscape" },
                    { label: "Turf", id: "turf" },
                    { label: "Landscaping", id: "landscaping" },
                    { label: "Fire & Kitchen", id: "outdoor-kitchens" },
                  ].map(({ label, id }) => (
                    <a
                      key={id}
                      href="#services"
                      className="quest-pill"
                      onClick={(e) => {
                        e.preventDefault();
                        const section = document.getElementById("services");
                        if (section) section.scrollIntoView({ behavior: "smooth" });
                        setTimeout(() => {
                          const tab = document.querySelector(`a[href="#service-${id}"]`);
                          if (tab) tab.click();
                        }, 600);
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </div>

                <div className="wch-unset wow fadeInUp d-flex flex-column flex-sm-row gap-2 justify-content-center" data-wow-delay="0.55s" data-wow-duration="1.2s">
                  <Link
                    href="/#contact-form"
                    className="btn btn-mod btn-large btn-round align-middle quest-cta-primary"
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">Get a Free Estimate</span>
                      <span className="btn-animate-y-2" aria-hidden="true">Get a Free Estimate</span>
                    </span>
                  </Link>
                  <a
                    href={`tel:${site.phone}`}
                    className="btn btn-mod btn-border btn-border-w btn-large btn-round align-middle"
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">{site.phone.replace("+1-", "")}</span>
                      <span className="btn-animate-y-2" aria-hidden="true">{site.phone.replace("+1-", "")}</span>
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className="local-scroll scroll-down-wrap-4 wow fadeInUp" data-wow-offset={0}>
            <div className="full-wrapper text-end">
              <a href="#portfolio" className="scroll-down-4 quest-scroll-down">
                <i className="mi-arrow-down size-24" />
              </a>
            </div>
          </div>

          <div className="hs-status wow fadeInUp quest-status-badge" data-wow-offset={0}>
            AZ Licensed &amp; Insured
          </div>
        </div>
      </div>
    </>
  );
}
