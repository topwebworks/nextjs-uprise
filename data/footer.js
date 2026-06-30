/**
 * Footer/nav link data — service links pull from settings.js automatically.
 * Edit data/settings.js to change the service list.
 */
import settings from "./settings";

export const footerLinks = [
  { name: "Privacy Policy",   path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
  { name: "Cookie Policy",    path: "/cookie-policy" },
  { name: "Cookie Settings",  path: "#cookie-settings" },
];

export const footerLinks2 = [
  { text: "Privacy Policy",   href: "/privacy-policy" },
  { text: "Terms of Service", href: "/terms-of-service" },
  { text: "Cookie Policy",    href: "/cookie-policy" },
  { text: "Cookie Settings",  href: "#cookie-settings" },
];

// Driven by settings.services — edit there, not here
export const serviceLinks = settings.services.map((s) => ({
  href: s.href,
  text: s.navLabel || s.label,
}));

export const navigationLinks = [
  { href: "/#services",      text: "Services" },
  { href: "/#portfolio",     text: "Our Work" },
  { href: "/#about",         text: "About" },
  { href: "/#contact-form",  text: "Free Estimate" },
];

export const socialLinks = [
  { href: settings.social.instagram || "#", text: "Instagram" },
  { href: settings.social.facebook  || "#", text: "Facebook" },
  { href: settings.social.youtube   || "#", text: "YouTube" },
  { href: settings.social.linkedin  || "#", text: "LinkedIn" },
];

export const socialMediaLinks = [
  { href: settings.social.facebook  || "#", title: "Facebook",  iconClass: "fa-facebook-f",  name: "Facebook" },
  { href: settings.social.instagram || "#", title: "Instagram", iconClass: "fa-instagram",   name: "Instagram" },
  { href: settings.social.linkedin  || "#", title: "LinkedIn",  iconClass: "fa-linkedin",    name: "LinkedIn" },
  { href: settings.social.youtube   || "#", title: "YouTube",   iconClass: "fa-youtube",     name: "YouTube" },
];
