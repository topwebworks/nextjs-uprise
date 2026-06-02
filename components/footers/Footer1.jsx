"use client";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, navigationLinks, serviceLinks } from "@/data/footer";
import site from "@/data/site";
import "@/components/footers/Footer1.module.css";

export default function Footer1() {
  return (
    <footer className="amw-footer">
      <div className="container">

        {/* Main row */}
        <div className="amw-footer-main">

          {/* Brand column */}
          <div className="amw-footer-brand">
            <Link href="/" className="amw-footer-logo" aria-label="AMW Hardscape Solutions — home">
              <span className="amw-footer-logo-badge" role="img" aria-label="AMW logo">
                <Image
                  src="/assets/tww-assets/amw-images/IMG_9002_edited_edited.avif"
                  alt=""
                  fill
                  sizes="56px"
                />
              </span>
              <span className="amw-footer-logo-text">
                <span className="amw-footer-logo-primary">
                  <span className="amw-footer-logo-amw">AMW</span>
                  <span className="amw-footer-logo-hardscape"> Hardscape</span>
                </span>
                <span className="amw-footer-logo-solutions">S O L U T I O N S</span>
              </span>
            </Link>

            <p className="amw-footer-tagline">
              Licensed hardscape contractor serving the East Valley since day one.
            </p>

            <div className="amw-footer-contact">
              <a href={`tel:${site.phone}`} className="amw-footer-contact-link">
                {site.phone.replace("+1-", "")}
              </a>
              <a href={`mailto:${site.email}`} className="amw-footer-contact-link">
                {site.email}
              </a>
              <span className="amw-footer-contact-detail">{site.address.city}, {site.address.state}</span>
              {site.roc && (
                <span className="amw-footer-contact-detail">{site.roc.join(" · ")}</span>
              )}
            </div>

            <div className="amw-footer-social">
              {site.social.facebook && (
                <a href={site.social.facebook} target="_blank" rel="noopener nofollow" aria-label="Facebook" className="amw-footer-social-link">
                  <i className="fab fa-facebook-f" aria-hidden="true" />
                </a>
              )}
              {site.social.instagram && (
                <a href={site.social.instagram} target="_blank" rel="noopener nofollow" aria-label="Instagram" className="amw-footer-social-link">
                  <i className="fab fa-instagram" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Nav columns */}
          <div className="amw-footer-nav">
            <div className="amw-footer-col">
              <h4 className="amw-footer-col-title">Services</h4>
              <ul className="amw-footer-links">
                {serviceLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="amw-footer-col">
              <h4 className="amw-footer-col-title">Company</h4>
              <ul className="amw-footer-links">
                {navigationLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="amw-footer-col">
              <h4 className="amw-footer-col-title">Legal</h4>
              <ul className="amw-footer-links">
                {footerLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.path}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* SEO — visually hidden */}
        <div className="visually-hidden">
          Serving: San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler, Apache Junction, Maricopa, Florence, Gold Canyon, Higley, Coolidge, and surrounding East Valley communities. Hardscape contractor Arizona. Pavers, concrete, artificial turf, decorative rock, demolition, driveway additions.
        </div>

        {/* Bottom bar */}
        <div className="amw-footer-bottom">
          <span className="amw-footer-copy">
            © {site.legalName} {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>

        {/* Fixed scroll-to-top */}
        <a
          href="#top"
          className="amw-scroll-top"
          aria-label="Back to top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <i className="mi-arrow-up size-24" aria-hidden="true" />
        </a>

      </div>
    </footer>
  );
}
