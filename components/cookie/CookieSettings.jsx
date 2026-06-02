"use client";
import { useState } from "react";
import "@/components/cookie/Cookie.module.css";

export default function CookieSettings({ onClose, onSave }) {
  const [analytics, setAnalytics] = useState(false);

  function handleSave() {
    onSave(analytics ? "all" : "essential");
  }

  return (
    <div className="cookie-settings-backdrop" role="dialog" aria-modal="true" aria-label="Cookie settings" onClick={onClose}>
      <div className="cookie-settings-panel" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="cookie-settings-header">
          <span className="cookie-settings-title">Cookie Preferences</span>
          <button className="cookie-settings-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {/* Body */}
        <div className="cookie-settings-body">

          {/* Essential */}
          <div className="cookie-setting-row">
            <div className="cookie-setting-info">
              <div className="cookie-setting-name">Essential cookies</div>
              <div className="cookie-setting-desc">
                Required for the site to work — contact forms, session, and security. These cannot be disabled.
              </div>
            </div>
            <div className="cookie-setting-control">
              <span className="cookie-always-on">Always on</span>
            </div>
          </div>

          <div className="cookie-settings-divider" />

          {/* Analytics */}
          <div className="cookie-setting-row">
            <div className="cookie-setting-info">
              <div className="cookie-setting-name">Analytics cookies</div>
              <div className="cookie-setting-desc">
                Google Analytics via GTM — helps us understand how visitors use the site. No personal data is sold or shared.
              </div>
            </div>
            <div className="cookie-setting-control">
              <button
                role="switch"
                aria-checked={analytics}
                aria-label="Analytics cookies"
                className={`cookie-toggle${analytics ? " on" : ""}`}
                onClick={() => setAnalytics((p) => !p)}
              >
                <span className="cookie-toggle-thumb" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="cookie-settings-footer">
          <button className="cookie-settings-cancel" onClick={onClose}>Cancel</button>
          <button className="cookie-settings-save" onClick={handleSave}>Save preferences</button>
        </div>

      </div>
    </div>
  );
}
