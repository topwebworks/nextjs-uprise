"use client";
import { useState } from "react";
import "@/components/cookie/Cookie.module.css";

export default function CookieSettings({ onClose, onSave }) {
  const [analytics, setAnalytics] = useState(false);

  function handleSave() {
    onSave(analytics ? "all" : "essential");
  }

  return (
    <div
      className="modal d-block cookie-settings-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie settings"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cookie Settings</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* Essential — always on */}
            <div className="d-flex justify-content-between align-items-start mb-3 pb-3 border-bottom">
              <div>
                <p className="fw-semibold mb-1">Essential cookies</p>
                <p className="text-muted small mb-0">
                  Required for the site to function — chat, forms, session. Cannot be disabled.
                </p>
              </div>
              <span className="badge bg-secondary ms-3 cookie-no-shrink">Always on</span>
            </div>

            {/* Analytics — user toggle */}
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <p className="fw-semibold mb-1">Analytics cookies</p>
                <p className="text-muted small mb-0">
                  Google Analytics (via GTM) — helps us understand how visitors use the site.
                  No personal data is sold.
                </p>
              </div>
              <div className="form-check form-switch ms-3 cookie-no-shrink">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="analytics-toggle"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <label className="form-check-label visually-hidden" htmlFor="analytics-toggle">
                  Analytics cookies
                </label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline-secondary btn-sm" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-primary btn-sm" onClick={handleSave}>
              Save preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
