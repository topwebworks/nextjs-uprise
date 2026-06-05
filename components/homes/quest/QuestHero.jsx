"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { useEffect, useRef, useState } from "react";
import "@/components/homes/quest/QuestHero.module.css";

const YT_ID = "AXL8VsJl2kA";

const IMAGE_DURATION = 5000;
const VIDEO_DURATION = 9000;

const slides = [
  { type: "image", src: "/assets/tww-assets/quest-images/quest-pool-sunset.jpg" },
  { type: "image", src: "/assets/tww-assets/quest-images/IMG_9225.jpg" },
  { type: "image", src: "/assets/tww-assets/quest-images/Suburb_home_with_patio_pool_202605131833.jpeg" },
  { type: "image", src: "/assets/tww-assets/quest-images/Arizona_suburb_home_patio_pool_202605131833.jpeg" },
  { type: "image", src: "/assets/tww-assets/quest-images/Arizona_house_backyard_landscaping_202605131833.jpeg" },
  // { type: "video" }, // re-enable when Quest provides a video
];

export default function QuestHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ytReady, setYtReady] = useState(false);
  const playerRef = useRef(null);
  const timerRef = useRef(null);

  function advance() {
    setActiveIndex((i) => (i + 1) % slides.length);
  }

  useEffect(() => {
    const current = slides[activeIndex];
    const duration = current.type === "video" ? VIDEO_DURATION : IMAGE_DURATION;
    timerRef.current = setTimeout(advance, duration);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex]);

  useEffect(() => {
    function initPlayer() {
      playerRef.current = new window.YT.Player("quest-yt-player", {
        videoId: YT_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          playsinline: 1,
        },
        events: {
          onReady(e) {
            e.target.mute();
            e.target.setPlaybackQuality("hd1080");
            e.target.playVideo();
            setYtReady(true);
          },
          onStateChange(e) {
            if (e.data === window.YT.PlayerState.PLAYING) {
              e.target.setPlaybackQuality("hd1080");
              const duration = e.target.getDuration();
              if (duration > 0) {
                clearInterval(e.target._loopInterval);
                e.target._loopInterval = setInterval(() => {
                  if (e.target.getCurrentTime() >= duration - 0.5) {
                    e.target.seekTo(0);
                  }
                }, 250);
              }
            }
            if (
              e.data === window.YT.PlayerState.PAUSED ||
              e.data === window.YT.PlayerState.ENDED
            ) {
              clearInterval(e.target._loopInterval);
              e.target.playVideo();
            }
          },
        },
      });
    }

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
      if (!document.getElementById("yt-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "yt-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }

    return () => {
      if (playerRef.current?.destroy) playerRef.current.destroy();
    };
  }, []);

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
                backgroundImage: `url(${slide.src})`,
                opacity: activeIndex === i ? 1 : 0,
              }}
            />
          ) : null
        )}

        {/* YouTube slide — disabled until Quest provides a video; set opacity to 0 always */}
        <div className="quest-yt-wrap" style={{ opacity: 0, pointerEvents: "none" }}>
          <div id="quest-yt-player" />
        </div>

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
                  <span className="d-none d-sm-inline quest-eyebrow-dot" aria-hidden="true"> &middot; </span>
                  <span className="quest-eyebrow-item">Hardscape</span>
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
                  <a
                    href="/#contact-form"
                    className="btn btn-mod btn-large btn-round align-middle quest-cta-primary"
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">Get a Free Estimate</span>
                      <span className="btn-animate-y-2" aria-hidden="true">Get a Free Estimate</span>
                    </span>
                  </a>
                  <a
                    href="tel:+14804778832"
                    className="btn btn-mod btn-border btn-border-w btn-large btn-round align-middle"
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">(480) 477-8832</span>
                      <span className="btn-animate-y-2" aria-hidden="true">(480) 477-8832</span>
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className="local-scroll scroll-down-wrap-4 wow fadeInUp" data-wow-offset={0}>
            <div className="full-wrapper text-end">
              <a href="#services" className="scroll-down-4 quest-scroll-down">
                <i className="mi-arrow-down size-24" />
              </a>
            </div>
          </div>

          <div className="hs-status wow fadeInUp quest-status-badge" data-wow-offset={0}>
            AZ Licensed &amp; Insured &nbsp;&middot;&nbsp; <span style={{ color: "#ff6b00", fontWeight: 700 }}>Gator Finish Installer</span>
          </div>
        </div>
      </div>
    </>
  );
}
