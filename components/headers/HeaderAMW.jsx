"use client";
import { toggleMobileMenu, closeMobileMenu } from "@/utils/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import site from "@/data/site";
import { serviceLinks } from "@/data/footer";
import "@/components/headers/HeaderAMW.module.css";

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
            <a href="/#gallery" onClick={closeMobileMenu}>
              Gallery
            </a>
          </li>
          <li>
            <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <a href="/#contact-form" onClick={closeMobileMenu}>
              FREE ESTIMATE
            </a>
          </li>
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
