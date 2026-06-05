"use client";
import { closeMobileMenu } from "@/utils/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import site from "@/data/site";
import "@/components/headers/HeaderQuest.module.css";

const SERVICE_LINKS = [
  { href: "/services/pool-builds", text: "Pool Builds" },
  { href: "/services/pool-remodels", text: "Pool Remodels" },
  { href: "/services/hardscape", text: "Hardscape & Pavers" },
  { href: "/services/artificial-turf", text: "Artificial Turf" },
  { href: "/services/landscaping", text: "Landscaping & Design" },
  { href: "/services/outdoor-kitchens", text: "Outdoor Kitchens & Fire" },
];

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
    <div className="quest-mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">

      <div className="quest-mobile-menu-header">
        <Link href="/" className="quest-mobile-logo" onClick={onClose}>
          <Image
            src="/assets/tww-assets/quest-images/quest-logo.webp"
            alt="Quest Pool Co."
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <button className="quest-mobile-menu-close" onClick={onClose} aria-label="Close menu">
          <i className="mi-close" aria-hidden="true" />
        </button>
      </div>

      <nav className="quest-mobile-nav">
        <Link href="/about" className={`quest-mobile-nav-link${pathname === "/about" ? " active" : ""}`} onClick={onClose}>About</Link>

        <div className="quest-mobile-nav-item">
          <button
            className={`quest-mobile-nav-link quest-mobile-nav-accordion${servicesOpen ? " open" : ""}`}
            onClick={() => setServicesOpen((p) => !p)}
            aria-expanded={servicesOpen}
          >
            Services
            <i className={`mi-chevron-down amw-mobile-chevron${servicesOpen ? " open" : ""}`} aria-hidden="true" />
          </button>
          {servicesOpen && (
            <div className="amw-mobile-subnav">
              {SERVICE_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="amw-mobile-sub-link" onClick={onClose}>
                  {link.text}
                </Link>
              ))}
            </div>
          )}
        </div>

        <a href="/#portfolio" className="quest-mobile-nav-link" onClick={onClose}>Portfolio</a>
        <a href="/#contact-form" className="quest-mobile-nav-link quest-mobile-nav-cta" onClick={onClose}>Free Estimate</a>
      </nav>

      <div className="quest-mobile-menu-footer">
        <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="quest-mobile-social">
          <i className="fab fa-instagram" aria-hidden="true" />
        </a>
        <a href={`tel:${site.phone}`} className="quest-mobile-phone">
          {site.phone.replace("+1-", "")}
        </a>
      </div>

    </div>
  );
}

export default function HeaderQuest() {
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
          <Link href="/" className="logo quest-logo">
            <span className="quest-logo-img-wrap" role="img" aria-label="Quest Pool Co. logo">
              <Image
                src="/assets/tww-assets/quest-images/quest-logo.webp"
                alt="Quest Pool Co."
                fill
                sizes="180px"
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </span>
          </Link>
        </div>

        <button
          className="mobile-nav quest-mobile-trigger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <i className="mobile-nav-icon" />
        </button>

        <div className="inner-nav desktop-nav">
          <ul className="clearlist local-scroll">
            <li><a href="/#portfolio" onClick={closeMobileMenu}>Portfolio</a></li>
            <li className={`quest-services-dropdown${servicesOpen ? " js-opened" : ""}`}>
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
              <a href="/#contact-form" onClick={closeMobileMenu} className="quest-nav-cta">
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
          <div className="quest-mobile-backdrop" onClick={() => setMobileOpen(false)} />
          <MobileMenu onClose={() => setMobileOpen(false)} />
        </>,
        portalRoot
      )}
    </>
  );
}
