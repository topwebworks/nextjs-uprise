"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, navigationLinks, serviceLinks } from "@/data/footer";
import site from "@/data/site";
import "@/components/footers/Footer1.module.css";

export default function Footer1({ dark = false }) {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <footer
      className={`page-section footer ${
        dark ? "bg-dark-2 light-content dark" : "bg-gray-light-1"
      }  pb-30`}
    >
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
            <Link href={"/"} className="mb-30 d-inline-flex align-items-center text-decoration-none footer-logo-link">
              <span className="footer-logo-badge" role="img" aria-label="AMW logo">
                <Image
                  src="/assets/tww-assets/amw-images/IMG_9002_edited_edited.avif"
                  alt=""
                  fill
                  sizes="72px"
                />
              </span>
              <span className="footer-logo-text">
                <span className="footer-logo-primary">
                  <span className="footer-logo-amw">AMW</span>
                  <span className="footer-logo-hardscape"> Hardscape</span>
                </span>
                <span className="footer-logo-solutions">S O L U T I O N S</span>
              </span>
            </Link>
            <div className="clearlinks">
              <a href={`tel:${site.phone}`}>{site.phone}</a>
            </div>
            <div className="clearlinks">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="mt-10">{site.address.city}, {site.address.state}</div>
            {site.roc && (
              <div className="mt-10 footer-roc">
                {site.roc.join(" · ")}
              </div>
            )}
            <div className="mt-20 d-flex gap-3">
              {site.social.facebook && (
                <a href={site.social.facebook} target="_blank" rel="noopener nofollow" className="footer-social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              )}
              {site.social.instagram && (
                <a href={site.social.instagram} target="_blank" rel="noopener nofollow" className="footer-social-link" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              )}
            </div>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Services</h3>
                <ul className="fw-menu clearlist">
                  {serviceLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Company</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Legal</h3>
                <ul className="fw-menu clearlist">
                  {footerLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.path}>{elm.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Service areas — SEO only, visually hidden */}
        <div className="visually-hidden">
          Serving: San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler, Apache Junction, Maricopa, Florence, Gold Canyon, Higley, Coolidge, and surrounding East Valley communities. Hardscape contractor Arizona. Pavers, concrete, artificial turf, decorative rock, demolition, driveway additions.
        </div>
        {/* Footer Text */}
        <div className="row text-gray">
          <div className="col-12">
            <b className="footer-copyright">© {site.legalName} {new Date().getFullYear()}.</b>
            {/* Optional TWW logo placeholder for post-launch footer credit. */}
            {/* Back to Top Link */}
            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top" onClick={scrollToTop}>
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
            {/* End Back to Top Link */}
          </div>
        </div>
        {/* End Powered by TWW */}
        {/* End Footer Text */}
      </div>
    </footer>
  );
}
