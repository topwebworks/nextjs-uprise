"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { useEffect, useRef, useState } from "react";
import "@/components/homes/amw/AMWHero.module.css";

const YT_ID = "AXL8VsJl2kA";

const IMAGE_DURATION = 4000;
const VIDEO_DURATION = 9000;

const slides = [
  { type: "image", src: "/assets/tww-assets/amw-images/IMG_2916.HEIC.jpg" },
  { type: "image", src: "/assets/tww-assets/amw-images/IMG_4281.HEIC.jpg" },
  { type: "image", src: "/assets/tww-assets/amw-images/IMG_1543.HEIC.jpg" },
  { type: "image", src: "/assets/tww-assets/amw-images/IMG_1773.HEIC.jpg" },
  { type: "video" },
];

export default function AMWHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ytReady, setYtReady] = useState(false);
  const playerRef = useRef(null);
  const timerRef = useRef(null);

  function advance() {
    setActiveIndex((i) => (i + 1) % slides.length);
  }

  // Slide timer
  useEffect(() => {
    const current = slides[activeIndex];
    const duration = current.type === "video" ? VIDEO_DURATION : IMAGE_DURATION;
    timerRef.current = setTimeout(advance, duration);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex]);

  // YouTube API
  useEffect(() => {
    function initPlayer() {
      playerRef.current = new window.YT.Player("amw-yt-player", {
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
              // Poll near end to loop seamlessly
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
            if (e.data === window.YT.PlayerState.PAUSED ||
                e.data === window.YT.PlayerState.ENDED) {
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
      <div className="amw-hero-video-wrap">

        {/* Image slides */}
        {slides.map((slide, i) =>
          slide.type === "image" ? (
            <div
              key={i}
              className="amw-hero-slide"
              style={{
                backgroundImage: `url(${slide.src})`,
                opacity: activeIndex === i ? 1 : 0,
              }}
            />
          ) : null
        )}

        {/* YouTube slide — always mounted so it loads in background */}
        <div
          className="amw-yt-wrap"
          style={{ opacity: activeIndex === slides.length - 1 && ytReady ? 1 : 0 }}
        >
          <div id="amw-yt-player" />
        </div>

        <div className="amw-hero-overlay" />
      </div>

      {/* Hero content — static, never moves */}
      <div className="amw-hero-content">
        <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
          <div className="home-content light-content">
            <div className="row">
              <div className="col-md-10 offset-md-1 mb-20 mb-sm-0 text-center">

                <h2 className="hs-title-11 mb-20 mb-xs-10 wow fadeInUp" data-wow-duration="1.2s">
                  <span className="city">San Tan Valley</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline" aria-hidden="true"> &middot; </span>
                  <span className="city">Queen Creek</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline" aria-hidden="true"> &middot; </span>
                  <span className="city">Gilbert</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline" aria-hidden="true"> &middot; </span>
                  <span className="city">Mesa</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline" aria-hidden="true"> &middot; </span>
                  <span className="city">Chandler</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline" aria-hidden="true"> &middot; </span>
                  <span className="city">Apache Junction</span>
                </h2>

                <h1 className="hs-title-12 mb-30 mb-sm-20">
                  <AnimatedText text="Your property, built right." />
                </h1>

                <div className="amw-service-pills wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1.2s">
                  {[
                    { label: "Pavers", id: "pavers" },
                    { label: "Concrete", id: "concrete" },
                    { label: "Turf", id: "turf" },
                    { label: "Rock", id: "rock" },
                    { label: "Demolition & Removal", id: "demolition" },
                    { label: "Driveways", id: "driveway" },
                  ].map(({ label, id }) => (
                    <a
                      key={id}
                      href="#services"
                      className="amw-pill"
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
                    href="tel:+14807216561"
                    className="btn btn-mod btn-large btn-round align-middle amw-cta-primary"
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">Call (480) 721-6561</span>
                      <span className="btn-animate-y-2" aria-hidden="true">Call (480) 721-6561</span>
                    </span>
                  </a>
                  <a
                    href="#contact-form"
                    className="btn btn-mod btn-border btn-border-w btn-large btn-round align-middle"
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">Free Estimate</span>
                      <span className="btn-animate-y-2" aria-hidden="true">Free Estimate</span>
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className="local-scroll scroll-down-wrap-4 wow fadeInUp" data-wow-offset={0}>
            <div className="full-wrapper text-end">
              <a href="#services" className="scroll-down-4 amw-scroll-down">
                <i className="mi-arrow-down size-24" />
              </a>
            </div>
          </div>

          <div className="hs-status wow fadeInUp amw-status-badge" data-wow-offset={0}>
            AZ Licensed &amp; Insured
          </div>
        </div>
      </div>
    </>
  );
}
