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
        <div className="container d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3" style={{ padding: "16px 0" }}>
          <p className="mb-0" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", lineHeight: 1.5 }}>
            We use cookies for analytics and site functionality.{" "}
            <button
              onClick={() => setSettingsOpen(true)}
              style={{ background: "none", border: "none", padding: 0, color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", textDecoration: "underline", cursor: "pointer" }}
            >
              Settings
            </button>
            {" · "}
            <a href="/cookie-policy" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", textDecoration: "underline" }}>
              Policy
            </a>
          </p>
          <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
            <button
              onClick={essentialOnly}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "8px 18px",
                cursor: "pointer",
                borderRadius: 2,
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              Essential only
            </button>
            <button
              onClick={acceptAll}
              style={{
                background: "#fff",
                border: "1px solid #fff",
                color: "#111",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "8px 18px",
                cursor: "pointer",
                borderRadius: 2,
                transition: "background 0.2s, color 0.2s",
              }}
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
