"use client";
import { closeMobileMenu } from "@/utils/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import site from "@/data/site";
import settings from "@/data/settings";
import "@/components/headers/HeaderTWW.module.css";

const SERVICE_LINKS = settings.services.map((s) => ({ href: s.href, text: s.label }));

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

  return (
    <div className="tww-mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">

      <div className="tww-mobile-menu-header">
        <Link href="/" className="tww-mobile-logo" onClick={onClose}>
          <Image
            src="/assets/tww-assets/tww-images/main-logo.png"
            alt={site.name}
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <button className="tww-mobile-menu-close" onClick={onClose} aria-label="Close menu">
          <i className="mi-close" aria-hidden="true" />
        </button>
      </div>

      <nav className="tww-mobile-nav">
        <Link href="/about" className={`tww-mobile-nav-link${pathname === "/about" ? " active" : ""}`} onClick={onClose}>About</Link>

        <div className="tww-mobile-nav-item">
          <button
            className={`tww-mobile-nav-link tww-mobile-nav-accordion${servicesOpen ? " open" : ""}`}
            onClick={() => setServicesOpen((p) => !p)}
            aria-expanded={servicesOpen}
          >
            Services
            <i className={`mi-chevron-down tww-mobile-chevron${servicesOpen ? " open" : ""}`} aria-hidden="true" />
          </button>
          {servicesOpen && (
            <div className="tww-mobile-subnav">
              {SERVICE_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="tww-mobile-sub-link" onClick={onClose}>
                  {link.text}
                </Link>
              ))}
            </div>
          )}
        </div>

        <a href="/#portfolio" className="tww-mobile-nav-link" onClick={onClose}>Portfolio</a>
        <a href="/#contact-form" className="tww-mobile-nav-link tww-mobile-nav-cta" onClick={onClose}>Free Estimate</a>
      </nav>

      <div className="tww-mobile-menu-footer">
        <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="tww-mobile-social">
          <i className="fab fa-instagram" aria-hidden="true" />
        </a>
        <a href={`tel:${site.phone}`} className="tww-mobile-phone">
          {site.phone.replace("+1-", "")}
        </a>
      </div>

    </div>
  );
}

export default function HeaderTWW() {
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
          <Link href="/" className="logo tww-logo">
            <span className="tww-logo-img-wrap" role="img" aria-label={`${site.name} logo`}>
              <Image
                src="/assets/tww-assets/tww-images/main-logo.png"
                alt={site.name}
                fill
                sizes="180px"
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </span>
          </Link>
        </div>

        <button
          className="mobile-nav tww-mobile-trigger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <i className="mobile-nav-icon" />
        </button>

        <div className="inner-nav desktop-nav">
          <ul className="clearlist local-scroll">
            <li><a href="/#portfolio" onClick={closeMobileMenu}>Portfolio</a></li>
            <li className={`tww-services-dropdown${servicesOpen ? " js-opened" : ""}`}>
              <a
                href="/#services"
                className={`mn-has-sub${pathname.startsWith("/services") ? " active" : ""}`}
                onClick={handleServicesClick}
              >
                Services <i className="mi-chevron-down nav-chevron" style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </a>
              <ul className="mn-sub">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} onClick={() => { setServicesOpen(false); closeMobileMenu(); }}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={closeMobileMenu}>About</Link></li>
            <li>
              <a href="/#contact-form" onClick={closeMobileMenu} className="tww-nav-cta">
                Free Estimate
              </a>
            </li>
          </ul>
          <ul className="items-end clearlist">
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

      {mobileOpen && portalRoot && createPortal(
        <>
          <div className="tww-mobile-backdrop" onClick={() => setMobileOpen(false)} />
          <MobileMenu onClose={() => setMobileOpen(false)} />
        </>,
        portalRoot
      )}
    </>
  );
}
