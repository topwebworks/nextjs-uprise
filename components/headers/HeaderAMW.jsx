"use client";
import { toggleMobileMenu, closeMobileMenu } from "@/utils/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import site from "@/data/site";
import { serviceLinks } from "@/data/footer";
import "@/components/headers/HeaderAMW.module.css";

function MobileMenu({ onClose }) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  function go(fn) {
    fn?.();
    onClose();
  }

  return (
    <div className="amw-mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">

      {/* Header bar */}
      <div className="amw-mobile-menu-header">
        <Link href="/" className="logo amw-logo" onClick={onClose}>
          <span className="amw-logo-badge-wrap" role="img" aria-label="AMW Hardscape Solutions logo">
            <Image src="/assets/tww-assets/amw-images/IMG_9002_edited_edited.avif" alt="" fill sizes="42px" className="amw-logo-badge-image" />
          </span>
          <span className="amw-logo-text">
            <span className="amw-logo-primary">
              <span className="amw-logo-amw">AMW</span>
              <span className="amw-logo-hardscape"> Hardscape</span>
            </span>
          </span>
        </Link>
        <button className="amw-mobile-menu-close" onClick={onClose} aria-label="Close menu">
          <i className="mi-close" aria-hidden="true" />
        </button>
      </div>

      {/* Nav items */}
      <nav className="amw-mobile-nav">

        {/* Services — accordion */}
        <div className="amw-mobile-nav-item">
          <button
            className={`amw-mobile-nav-link amw-mobile-nav-accordion${servicesOpen ? " open" : ""}${pathname.startsWith("/services") ? " active" : ""}`}
            onClick={() => setServicesOpen((p) => !p)}
            aria-expanded={servicesOpen}
          >
            Services
            <i className={`mi-chevron-down amw-mobile-chevron${servicesOpen ? " open" : ""}`} aria-hidden="true" />
          </button>
          {servicesOpen && (
            <div className="amw-mobile-subnav">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`amw-mobile-sub-link${pathname === link.href ? " active" : ""}`}
                  onClick={onClose}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/#gallery" className="amw-mobile-nav-link" onClick={onClose}>Gallery</Link>
        <Link href="/about" className={`amw-mobile-nav-link${pathname === "/about" ? " active" : ""}`} onClick={onClose}>About</Link>
        <Link href="/#contact-form" className="amw-mobile-nav-link amw-mobile-nav-cta" onClick={onClose}>Free Estimate</Link>

      </nav>

      {/* Footer bar — social + phone */}
      <div className="amw-mobile-menu-footer">
        <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="amw-mobile-social">
          <i className="fab fa-facebook" aria-hidden="true" />
        </a>
        <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="amw-mobile-social">
          <i className="fab fa-instagram" aria-hidden="true" />
        </a>
        <a href={`tel:${site.phone}`} className="amw-mobile-phone">
          {site.phone.replace("+1-", "")}
        </a>
      </div>

    </div>
  );
}

export default function HeaderAMW() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => { setPortalRoot(document.body); }, []);

  const handleServicesClick = (e) => {
    const desktopNav = document.querySelector(".desktop-nav");
    const isMobile = desktopNav && desktopNav.classList.contains("js-opened");
    if (isMobile) {
      e.preventDefault();
      setServicesOpen((prev) => !prev);
    }
  };

  return (
    <>
      <div className="main-nav-sub full-wrapper">
        <div className="nav-logo-wrap local-scroll">
          <Link href="/" className="logo amw-logo">
            <span className="amw-logo-badge-wrap" role="img" aria-label="AMW Hardscape Solutions logo">
              <Image src="/assets/tww-assets/amw-images/IMG_9002_edited_edited.avif" alt="" fill sizes="90px" className="amw-logo-badge-image" />
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

        {/* Mobile hamburger — opens our React menu instead of theme JS */}
        <button
          className="mobile-nav amw-mobile-trigger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <i className="mobile-nav-icon" />
        </button>

        {/* Desktop nav — untouched */}
        <div className="inner-nav desktop-nav">
          <ul className="clearlist local-scroll">
            <li className={`amw-services-dropdown${servicesOpen ? " js-opened" : ""}`}>
              <Link
                href="/services"
                className={`mn-has-sub${pathname.startsWith("/services") ? " active" : ""}`}
                onClick={handleServicesClick}
              >
                Services <i className="mi-chevron-down nav-chevron" style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
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
            <li><a href="/#gallery" onClick={closeMobileMenu}>Gallery</a></li>
            <li>
              <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={closeMobileMenu}>About</Link>
            </li>
            <li><a href="/#contact-form" onClick={closeMobileMenu}>FREE ESTIMATE</a></li>
          </ul>
          <ul className="items-end clearlist">
            <li>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="nav-social-link">
                <i className="fab fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-social-link">
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="opacity-1 no-hover">
                <span className="link-hover-anim underline" data-link-animate="y">
                  <span className="link-strong link-strong-unhovered">{site.phone.replace("+1-", "")}</span>
                  <span className="link-strong link-strong-hovered" aria-hidden="true">{site.phone.replace("+1-", "")}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* React-controlled mobile menu — rendered in portal */}
      {mobileOpen && portalRoot && createPortal(
        <MobileMenu onClose={() => setMobileOpen(false)} />,
        portalRoot
      )}
    </>
  );
}
