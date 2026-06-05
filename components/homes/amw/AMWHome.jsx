"use client";
import { useState } from "react";
import AnimatedText from "@/components/common/AnimatedText";
import ImageBackground from "@/components/common/ImageBackground";
import "@/components/homes/amw/AMWHome.module.css";
import NextImageLightbox from "@/components/common/NextImageLightbox";
import Link from "next/link";
import Image from "next/image";

const howImages = [
  { src: "/assets/tww-assets/quest-images/Suburb_home_with_patio_pool_202605131833_3.jpeg", alt: "Custom pool and patio by Quest Pool Co.", width: 1200, height: 1600 },
  { src: "/assets/tww-assets/quest-images/Suburb_home_with_patio_pool_202605131833_4.jpeg", alt: "Pool construction in progress - Quest Pool Co.", width: 1200, height: 900 },
  { src: "/assets/tww-assets/quest-images/Suburb_home_with_patio_pool_202605131833_5.jpeg", alt: "Finished pool and outdoor living - Quest Pool Co.", width: 1200, height: 900 },
];

function AMWHowGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      <div className="amw-how-grid">
        {howImages.map((img, i) => (
          <button
            key={i}
            type="button"
            className="amw-how-img-wrap"
            style={i === 0 ? { gridRow: "1 / 3" } : {}}
            onClick={() => setLightboxIndex(i)}
            aria-label={`View ${img.alt}`}
          >
            <Image fill src={img.src} alt={img.alt} className="amw-how-img" sizes="(max-width: 992px) 100vw, 40vw" />
          </button>
        ))}
      </div>

      <NextImageLightbox
        images={howImages}
        activeIndex={lightboxIndex}
        onChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  );
}
import AMWAbout from "./AMWAbout";
import AMWBenefits from "./AMWBenefits";
import AMWService from "./AMWService";
import AMWFacts from "./AMWFacts";
import AMWTestimonials from "./AMWTestimonials";
import AMWProcess from "./AMWProcess";
import AMWContact from "./AMWContact";

export default function AMWHome() {
  return (
    <>
      {/* Services */}
      <section className="page-section pt-60 scrollSpysection" id="services">
        <AMWService />
      </section>

      {/* Stats parallax band */}
      <section
        className="bg-dark bg-dark-alpha-60 light-content amw-fixed-bg-host amw-built-to-last-section amw-built-to-last-band"
      >
        <ImageBackground
          src="/assets/tww-assets/quest-images/quest-pool-sunset.jpg"
          alt=""
          fixed
        />
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-7 mb-md-40 mb-xs-30">
              <h2 className="section-title mb-20 wow fadeInUp">
                Precision. Craft. Built to last.
              </h2>
              <p className="section-descr mb-24 wow fadeInUp" data-wow-delay="0.1s">
                Arizona heat and expansive soil expose poor workmanship fast. Quest builds every pool and outdoor space from the ground up — proper excavation, quality materials, and finish details that hold up for decades.
              </p>
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <Link href="#contact-form" className="btn btn-mod btn-w btn-large btn-round btn-hover-anim" onClick={(e) => { e.preventDefault(); const el = document.getElementById("contact-form"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}>
                  <span>Get a Free Estimate</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-start justify-content-lg-end mb-md-40 mb-xs-30">
              <blockquote className="wow fadeInUp amw-dark-quote" data-wow-delay="0.2s">
                <p>&ldquo;Absolutely stunning work — every detail was perfect.&rdquo;</p>
                <footer>Queen Creek Homeowner &mdash; Verified Review</footer>
              </blockquote>
            </div>
            <AMWFacts />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="page-section pb-0 scrollSpysection" id="about">
        <div className="container position-relative">
          <AMWAbout />
        </div>
      </section>

      {/* Testimonials */}
      <section className="page-section bg-gray-light-2 amw-testimonials-section">
        <AMWTestimonials />
      </section>

      <hr className="mt-0 mb-0" />

      {/* How We Work */}
      <section className="page-section">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-7 mb-md-60 mb-xs-30 pe-lg-5 wow fadeInUp" data-wow-duration="1.2s">
              <AMWHowGrid />
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="wow fadeInUp" data-wow-duration="1.2s" data-wow-offset={255}>
                <h2 className="section-title mb-50 mb-sm-20">How We Work</h2>
                <AMWProcess />
                <div>
                  <Link href="#contact-form" className="btn btn-mod btn-large btn-round btn-hover-anim">
                    <span>Start Your Project</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="page-section bg-dark bg-dark-alpha-70 light-content amw-fixed-bg-host"
      >
        <ImageBackground src="/assets/tww-assets/quest-images/Architectural_photo_of_Arizona_suburb_202605131833.jpeg" alt="" fixed />
        <div className="container position-relative">
          <div className="row text-center wow fadeInUp">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <h2 className="section-title mb-20">Let&rsquo;s Build Something Exceptional.</h2>
              <p className="section-descr mb-50 mb-sm-30">
                We&rsquo;ll come to you, walk the property, and put together a written estimate — no pressure, no obligation. Just an honest conversation about what&rsquo;s possible.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <a href="tel:+14804778832" className="btn btn-mod btn-w btn-large btn-round btn-hover-anim">
                  <span>Call (480) 477-8832</span>
                </a>
                <Link href="#contact-form" className="btn btn-mod btn-border btn-border-w btn-large btn-round btn-hover-anim">
                  <span>Free Estimate</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="mt-0 mb-0" />

      {/* Contact */}
      <section className="page-section scrollSpysection" id="contact">
        <AMWContact />
      </section>
    </>
  );
}
