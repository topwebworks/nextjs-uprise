"use client";
import { useState, useEffect } from "react";
import { hasConsented, setConsent } from "@/utils/consent";
import CookieSettings from "./CookieSettings";

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
        className="position-fixed bottom-0 start-0 end-0 text-white"
        style={{ zIndex: 9999, background: "rgba(15,15,15,0.92)", backdropFilter: "blur(6px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
        role="region"
        aria-label="Cookie consent"
      >
        <div className="container d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 py-2">
          <p className="mb-0 small" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8rem" }}>
            We use cookies for analytics and site functionality.{" "}
            <button
              className="btn btn-link btn-sm p-0 text-decoration-underline"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8rem" }}
              onClick={() => setSettingsOpen(true)}
            >
              Settings
            </button>
            {" · "}
            <a href="/cookie-policy" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8rem" }}>
              Policy
            </a>
          </p>
          <div className="d-flex gap-2" style={{ flexShrink: 0 }}>
            <button
              className="btn btn-sm btn-outline-light py-1 px-3"
              style={{ fontSize: "0.78rem" }}
              onClick={essentialOnly}
            >
              Essential only
            </button>
            <button
              className="btn btn-sm btn-light py-1 px-3"
              style={{ fontSize: "0.78rem", color: "#111" }}
              onClick={acceptAll}
            >
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
