"use client";
import { toggleMobileMenu, closeMobileMenu } from "@/utils/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import site from "@/data/site";
import { serviceLinks } from "@/data/footer";

export default function HeaderAMW() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServicesClick = (e) => {
    const desktopNav = document.querySelector(".desktop-nav");
    const isMobile = desktopNav && desktopNav.classList.contains("js-opened");
    if (isMobile) {
      e.preventDefault();
      setServicesOpen((prev) => !prev);
    }
  };

  return (
    <div className="main-nav-sub full-wrapper">
      <div className="nav-logo-wrap local-scroll">
        <Link href="/" className="logo amw-logo">
          <span className="amw-logo-badge-wrap" role="img" aria-label="AMW Hardscape Solutions logo">
            <Image
              src="/assets/tww-assets/amw-images/IMG_9002_edited_edited.avif"
              alt=""
              fill
              sizes="90px"
              className="amw-logo-badge-image"
            />
          </span>
          <span className="amw-logo-text">
            <span className="amw-logo-primary">
              <span className="amw-logo-amw">AMW</span>
              <span className="amw-logo-hardscape"> Hardscape</span>
            </span>
            <span className="amw-logo-solutions">S O L U T I O N S</span>
          </span>
        </Link>
      </div>
      <style>{`
        .nav-logo-wrap .logo.amw-logo {
          display: flex !important;
          align-items: center !important;
          gap: 14px !important;
          height: auto !important;
          max-width: none !important;
          overflow: visible !important;
          text-decoration: none !important;
          padding: 12px 0 6px;
        }
        .amw-logo-badge-wrap {
          flex-shrink: 0;
          display: block;
          position: relative;
          overflow: hidden;
          width: 90px;
          height: 70px;
          background: rgba(255,255,255,0.75);
          border-radius: 12px;
          box-shadow: 0 6px 28px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2);
          transition: width 0.3s ease, height 0.3s ease;
        }
        .amw-logo-badge-image {
          object-fit: contain;
          object-position: center;
        }
        .amw-logo-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .amw-logo-primary {
          display: block;
          line-height: 1;
          filter: drop-shadow(0 4px 18px rgba(0,0,0,0.55));
        }
        .amw-logo-amw {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          transition: color 0.3s ease, font-size 0.3s ease;
        }
        .amw-logo-hardscape {
          font-size: 32px;
          font-weight: 300;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.92);
          transition: color 0.3s ease, font-size 0.3s ease;
        }
        .amw-logo-solutions {
          display: block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.92);
          text-shadow: 0 1px 6px rgba(0,0,0,0.5);
          line-height: 1;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        /* Scale down text at 1400px */
        @media (max-width: 1400px) {
          .amw-logo-amw { font-size: 26px; }
          .amw-logo-hardscape { font-size: 26px; }
          .amw-logo-solutions { font-size: 9.5px; }
          .nav-logo-wrap .logo.amw-logo { gap: 10px !important; }
        }

        /* Shrink more at 1280px */
        @media (max-width: 1280px) {
          .amw-logo-amw { font-size: 22px; }
          .amw-logo-hardscape { font-size: 22px; }
          .amw-logo-solutions { font-size: 8.5px; letter-spacing: 0.26em; }
          .amw-logo-badge-wrap { width: 80px; height: 58px; }
          .nav-logo-wrap .logo.amw-logo { gap: 8px !important; }
        }

        /* Tablet — condensed wordmark */
        @media (max-width: 1100px) {
          .amw-logo-badge-wrap { width: 54px; height: 48px; border-radius: 9px; }
          .nav-logo-wrap .logo.amw-logo { gap: 8px !important; }
          .amw-logo-solutions { display: none; }
          .amw-logo-amw { font-size: 22px; }
          .amw-logo-hardscape { font-size: 22px; }
        }
        /* Small tablet / large mobile — condensed wordmark */
        @media (max-width: 767px) and (min-width: 577px) {
          .amw-logo-badge-wrap { width: 42px; height: 38px; border-radius: 7px; }
          .nav-logo-wrap .logo.amw-logo { gap: 8px !important; }
          .amw-logo-text { display: flex !important; }
          .amw-logo-solutions { display: none; }
          .amw-logo-primary { filter: none; }
          .amw-logo-amw { font-size: 20px; color: #fff; }
          .amw-logo-hardscape { font-size: 20px; color: rgba(255,255,255,0.85); }
        }

        /* Mobile — show condensed wordmark */
        @media (max-width: 576px) {
          .amw-logo-badge-wrap { width: 42px; height: 38px; border-radius: 7px; }
          .nav-logo-wrap .logo.amw-logo { gap: 8px !important; padding: 26px 0 8px !important; }
          .small-height .nav-logo-wrap .logo.amw-logo { padding: 12px 0 6px !important; }
          .amw-logo-text { display: flex !important; }
          .amw-logo-solutions { display: none; }
          .amw-logo-amw { font-size: 20px; color: #fff; }
          .amw-logo-hardscape { font-size: 20px; color: rgba(255,255,255,0.85); }
          .amw-logo-primary { filter: none; }
        }

        /* Scrolled / sticky state — desktop (white nav bg) */
        .small-height .nav-logo-wrap .logo.amw-logo {
          gap: 10px !important;
          padding: 6px 0 !important;
        }
        .small-height .amw-logo-text {
          gap: 2px;
        }
        .small-height .amw-logo-badge-wrap {
          width: 54px;
          height: 54px;
          border-radius: 8px;
          box-shadow: none;
          background-color: transparent;
        }
        .small-height .amw-logo-primary { filter: none; }
        .small-height .amw-logo-amw {
          font-size: 22px;
          color: #111;
        }
        .small-height .amw-logo-hardscape {
          font-size: 22px;
          color: rgba(0,0,0,0.72);
        }
        .small-height .amw-logo-solutions {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.28em;
          color: rgba(0,0,0,0.55);
          text-shadow: none;
        }
        /* Sticky state on mobile — fix vertical alignment */
        @media (max-width: 1099px) {
          .small-height .amw-logo-amw { color: #111; }
          .small-height .amw-logo-hardscape { color: rgba(0,0,0,0.72); }
          .small-height .amw-logo-badge-wrap {
            background: rgba(255,255,255,0.85);
            width: 36px;
            height: 32px;
            border-radius: 6px;
          }
          .small-height .nav-logo-wrap .logo.amw-logo { padding: 16px 0 0 !important; }
        }
        /* Nav link readability over video */
        .main-nav.transparent:not(.small-height) .inner-nav > ul > li > a,
        .main-nav.transparent:not(.small-height) .items-end a {
          text-shadow: 0 1px 8px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4);
        }
        /* Mobile nav — prevent overflow */
        @media (max-width: 1099px) {
          .nav-logo-wrap { padding-left: 12px !important; }
          .mobile-nav { margin-right: 12px !important; }
          .main-nav-sub.full-wrapper {
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            max-width: 100vw !important;
            box-sizing: border-box !important;
          }
          .desktop-nav {
            overflow-x: hidden !important;
          }
          .inner-nav ul,
          .inner-nav .items-end {
            overflow-x: hidden !important;
          }
          /* Social + phone row layout handled in custom.css */
        }
      `}</style>
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      <div className="inner-nav desktop-nav">
        <ul className="clearlist local-scroll">
          <li className={`amw-services-dropdown${servicesOpen ? " js-opened" : ""}`}>
            <Link
              href="/services"
              className={`mn-has-sub${pathname.startsWith("/services") ? " active" : ""}`}
              onClick={handleServicesClick}
            >
              Services <i className="mi-chevron-down" style={{ fontSize: 12, marginLeft: 3, display: "inline-block", transition: "transform 0.2s ease", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </Link>
            <ul className="mn-sub">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} onClick={() => { setServicesOpen(false); closeMobileMenu(); }}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href="/#gallery" onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#contact-form" onClick={closeMobileMenu}>
              FREE ESTIMATE
            </Link>
          </li>
        </ul>
        <ul className="items-end clearlist">
          <li>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ fontSize: 22 }}>
              <i className="fab fa-facebook" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ fontSize: 22 }}>
              <i className="fab fa-instagram" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={`tel:${site.phone}`} className="opacity-1 no-hover">
              <span className="link-hover-anim underline" data-link-animate="y">
                <span className="link-strong link-strong-unhovered">
                  {site.phone.replace("+1-", "")}
                </span>
                <span className="link-strong link-strong-hovered" aria-hidden="true">
                  {site.phone.replace("+1-", "")}
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
