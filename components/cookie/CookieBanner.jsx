"use client";
import { useState, useEffect } from "react";
import { hasConsented, setConsent } from "@/utils/consent";
import CookieSettings from "./CookieSettings";
import "@/components/cookie/Cookie.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (!hasConsented()) setVisible(true);
  }, []);

  function acceptAll() {
    setConsent("all");
    setVisible(false);
  }

  function essentialOnly() {
    setConsent("essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <div
        className="position-fixed bottom-0 start-0 end-0 text-white cookie-banner"
        role="region"
        aria-label="Cookie consent"
      >
        <div className="container d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 cookie-banner-inner">
          <p className="mb-0 cookie-banner-text">
            We use cookies for analytics and site functionality.{" "}
            <button onClick={() => setSettingsOpen(true)} className="cookie-banner-link">
              Settings
            </button>
            {" · "}
            <a href="/cookie-policy" className="cookie-banner-link">
              Policy
            </a>
          </p>
          <div className="cookie-banner-actions">
            <button onClick={essentialOnly} className="cookie-btn-secondary">
              Essential only
            </button>
            <button onClick={acceptAll} className="cookie-btn-primary">
              Accept all
            </button>
          </div>
        </div>
      </div>

      {settingsOpen && (
        <CookieSettings
          onClose={() => setSettingsOpen(false)}
          onSave={(value) => {
            setConsent(value);
            setSettingsOpen(false);
            setVisible(false);
          }}
        />
      )}
    </>
  );
}
