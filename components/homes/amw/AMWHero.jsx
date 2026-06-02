"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import "@/components/homes/amw/AMWHero.module.css";

export default function AMWHero() {
  return (
    <>
      {/* Video background */}
      <div className="amw-hero-video-wrap">
        <Image
          className="amw-hero-poster"
          src="/assets/tww-assets/amw-images/o.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <video
          className="amw-hero-video"
          src="/assets/tww-assets/amw-images/amw-drone.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="amw-hero-overlay" />
      </div>

      {/* Hero content */}
      <div className="amw-hero-content">
        <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
          <div className="home-content light-content">
            <div className="row">
              <div className="col-md-10 offset-md-1 mb-20 mb-sm-0 text-center">

                <h2 className="hs-title-11 mb-20 mb-xs-10 wow fadeInUp" data-wow-duration="1.2s">
                  <span>San Tan Valley</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline" aria-hidden="true"> &middot; </span>
                  <span>Queen Creek</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline" aria-hidden="true"> &middot; </span>
                  <span>Gilbert</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline" aria-hidden="true"> &middot; </span>
                  <span>Mesa</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline" aria-hidden="true"> &middot; </span>
                  <span>Chandler</span>
                  <span className="d-sm-none" aria-hidden="true">, </span>
                  <span className="d-none d-sm-inline" aria-hidden="true"> &middot; </span>
                  <span>Apache Junction</span>
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
