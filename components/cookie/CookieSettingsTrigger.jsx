"use client";
import { useEffect, useState } from "react";
import CookieSettings from "./CookieSettings";
import { setConsent } from "@/utils/consent";

// Listens for clicks on any <a href="#cookie-settings"> link in the footer
// and re-opens the cookie settings modal.
// Rendered once in layout.js — no props needed.
export default function CookieSettingsTrigger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest('a[href="#cookie-settings"]');
      if (anchor) {
        e.preventDefault();
        setOpen(true);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!open) return null;

  return (
    <CookieSettings
      onClose={() => setOpen(false)}
      onSave={(value) => {
        setConsent(value);
        setOpen(false);
      }}
    />
  );
}
