"use client";
import { useState } from "react";
import AnimatedText from "@/components/common/AnimatedText";
import ImageBackground from "@/components/common/ImageBackground";
import "@/components/homes/tww/TWWHome.module.css";
import NextImageLightbox from "@/components/common/NextImageLightbox";
import Link from "next/link";
import Image from "next/image";
import site from "@/data/site";

const howImages = [
  { src: "/assets/tww-assets/tww-images/Patio_pavers_installed_in_backyard_202605131833.jpeg", alt: "Project photo 1", width: 1200, height: 1600 },
  { src: "/assets/tww-assets/tww-images/Patio_pavers_installed_in_backyard_202605131833_2.jpeg", alt: "Project photo 2", width: 1200, height: 900 },
  { src: "/assets/tww-assets/tww-images/Patio_pavers_installed_in_backyard_202605131833_3.jpeg", alt: "Project photo 3", width: 1200, height: 900 },
];

function TWWHowGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      <div className="tww-how-grid">
        {howImages.map((img, i) => (
          <button
            key={i}
            type="button"
            className="tww-how-img-wrap"
            style={i === 0 ? { gridRow: "1 / 3" } : {}}
            onClick={() => setLightboxIndex(i)}
            aria-label={`View ${img.alt}`}
          >
            <Image fill src={img.src} alt={img.alt} className="tww-how-img" sizes="(max-width: 992px) 100vw, 40vw" />
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

import TWWAbout from "./TWWAbout";
import TWWBenefits from "./TWWBenefits";
import TWWService from "./TWWService";
import TWWFacts from "./TWWFacts";
import TWWTestimonials from "./TWWTestimonials";
import TWWProcess from "./TWWProcess";
import TWWContact from "./TWWContact";

export default function TWWHome() {
  return (
    <>
      {/* Services */}
      <section className="page-section pt-60 scrollSpysection" id="services">
        <TWWService />
      </section>

      {/* Stats parallax band */}
      <section
        className="bg-dark bg-dark-alpha-60 light-content tww-fixed-bg-host tww-built-to-last-section tww-built-to-last-band"
      >
        <ImageBackground
          src="/assets/tww-assets/tww-images/Arizona_suburb_home_patio_pool_202605131833.jpeg"
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
                Quality craftsmanship built to stand the test of time. Every project is handled with care from start to finish.
              </p>
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <Link href="#contact-form" className="btn btn-mod btn-w btn-large btn-round btn-hover-anim" onClick={(e) => { e.preventDefault(); const el = document.getElementById("contact-form"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}>
                  <span>Get a Free Estimate</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-start justify-content-lg-end mb-md-40 mb-xs-30">
              <blockquote className="wow fadeInUp tww-dark-quote" data-wow-delay="0.2s">
                <p>&ldquo;Absolutely stunning work — every detail was perfect.&rdquo;</p>
                <footer>Client Name &mdash; Verified Review</footer>
              </blockquote>
            </div>
            <TWWFacts />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="page-section pb-0 scrollSpysection" id="about">
        <div className="container position-relative">
          <TWWAbout />
        </div>
      </section>

      {/* Testimonials */}
      <section className="page-section bg-gray-light-2 tww-testimonials-section">
        <TWWTestimonials />
      </section>

      <hr className="mt-0 mb-0" />

      {/* How We Work */}
      <section className="page-section">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-7 mb-md-60 mb-xs-30 pe-lg-5 wow fadeInUp" data-wow-duration="1.2s">
              <TWWHowGrid />
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="wow fadeInUp" data-wow-duration="1.2s" data-wow-offset={255}>
                <h2 className="section-title mb-50 mb-sm-20">How We Work</h2>
                <TWWProcess />
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
        className="page-section bg-dark bg-dark-alpha-70 light-content tww-fixed-bg-host"
      >
        <ImageBackground src="/assets/tww-assets/tww-images/Architectural_photo_of_Arizona_suburb_202605131833.jpeg" alt="" fixed />
        <div className="container position-relative">
          <div className="row text-center wow fadeInUp">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <h2 className="section-title mb-20">Let&rsquo;s Build Something Exceptional.</h2>
              <p className="section-descr mb-50 mb-sm-30">
                We&rsquo;ll come to you, walk the property, and put together a written estimate — no pressure, no obligation. Just an honest conversation about what&rsquo;s possible.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <a href={`tel:${site.phone}`} className="btn btn-mod btn-w btn-large btn-round btn-hover-anim">
                  <span>Call {site.phone.replace("+1-", "")}</span>
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
        <TWWContact />
      </section>
    </>
  );
}
