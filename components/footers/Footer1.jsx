"use client";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, navigationLinks, serviceLinks } from "@/data/footer";
import site from "@/data/site";
import "@/components/footers/Footer1.css";

export default function Footer1() {
  return (
    <footer className="tww-footer">
      <div className="container">

        {/* Main row */}
        <div className="tww-footer-main">

          {/* Brand column */}
          <div className="tww-footer-brand">
            <Link href="/" className="tww-footer-logo" aria-label={`${site.name} — home`}>
              <span className="tww-footer-logo-badge" role="img" aria-label={`${site.name} logo`}>
                <Image
                  src="/assets/tww-assets/tww-images/main-logo.png"
                  alt=""
                  fill
                  sizes="120px"
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                />
              </span>
            </Link>

            <p className="tww-footer-tagline">
              {site.name} — {site.address.city}, {site.address.state}.
            </p>

            <div className="tww-footer-contact">
              <a href={`tel:${site.phone}`} className="tww-footer-contact-link">
                {site.phone.replace("+1-", "")}
              </a>
              <a href={`mailto:${site.email}`} className="tww-footer-contact-link">
                {site.email}
              </a>
              <span className="tww-footer-contact-detail">{site.address.city}, {site.address.state}</span>
              {site.roc && (
                <span className="tww-footer-contact-detail">{site.roc.join(" · ")}</span>
              )}
            </div>

            <div className="tww-footer-social">
              {site.social.facebook && (
                <a href={site.social.facebook} target="_blank" rel="noopener nofollow" aria-label="Facebook" className="tww-footer-social-link">
                  <i className="fab fa-facebook-f" aria-hidden="true" />
                </a>
              )}
              {site.social.instagram && (
                <a href={site.social.instagram} target="_blank" rel="noopener nofollow" aria-label="Instagram" className="tww-footer-social-link">
                  <i className="fab fa-instagram" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Nav columns */}
          <div className="tww-footer-nav">
            <div className="tww-footer-col">
              <h4 className="tww-footer-col-title">Services</h4>
              <ul className="tww-footer-links">
                {serviceLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tww-footer-col">
              <h4 className="tww-footer-col-title">Company</h4>
              <ul className="tww-footer-links">
                {navigationLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tww-footer-col">
              <h4 className="tww-footer-col-title">Legal</h4>
              <ul className="tww-footer-links">
                {footerLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.path}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* SEO — visually hidden — update with client service area, services, and license numbers */}
        <div className="visually-hidden">
          {site.legalName}. {site.address.city}, {site.address.state}.
          {site.roc && site.roc.length > 0 && ` ${site.roc.join(" · ")}.`}
        </div>

        {/* Bottom bar */}
        <div className="tww-footer-bottom">
          <span className="tww-footer-copy">
            © {site.legalName} {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>

        {/* Fixed scroll-to-top */}
        <a
          href="#top"
          className="tww-scroll-top"
          aria-label="Back to top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <i className="mi-arrow-up size-24" aria-hidden="true" />
        </a>

      </div>
    </footer>
  );
}
