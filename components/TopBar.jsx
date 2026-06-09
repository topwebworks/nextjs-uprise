"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import brand from "@/data/brand";

const STORAGE_KEY    = "tww_topbar_dismissed";
const CYCLE_INTERVAL = 3500;
const FADE_DURATION  = 400;
const SLIVER_HEIGHT  = 4; // px — must match .tww-topbar-sliver height in brand.css

function setTopbarHeightVar(px) {
  document.documentElement.style.setProperty("--topbar-height", `${px}px`);
}

export default function TopBar() {
  const items = brand.topBar ?? [];

  const [dismissed, setDismissed]   = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible]        = useState(true);
  const barRef = useRef(null);

  // Session-based dismiss — read on mount only (avoids SSR mismatch)
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setDismissed(true);
    }
  }, []);

  // Keep --topbar-height in sync with actual rendered height
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const update = () => setTopbarHeightVar(el.offsetHeight);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [dismissed, items.length]);

  // Fade-cycle when there are 2+ items
  useEffect(() => {
    if (items.length < 2) return;

    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex((i) => (i + 1) % items.length);
        setVisible(true);
      }, FADE_DURATION);
    }, CYCLE_INTERVAL);

    return () => clearInterval(timer);
  }, [items.length]);

  const dismiss = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
    // Snap height to sliver immediately so the header repositions without layout flash
    setTopbarHeightVar(SLIVER_HEIGHT);
  }, []);

  const bgColor   = brand.topBarBg   || "var(--color-primary-1)";
  const textColor = brand.topBarText || "#fff";

  // ── Sliver mode ───────────────────────────────────────────────────────────
  if (items.length === 0 || dismissed) {
    return (
      <div
        ref={barRef}
        className="tww-topbar-sliver"
        style={{ background: bgColor }}
        aria-hidden="true"
      />
    );
  }

  // ── Announcement bar mode ─────────────────────────────────────────────────
  const current = items[activeIndex];
  const text    = typeof current === "string" ? current : current.text;
  const href    = typeof current === "object"  ? current.href : null;

  return (
    <div
      ref={barRef}
      className="tww-topbar"
      style={{ background: bgColor, color: textColor }}
      role="region"
      aria-label="Announcement"
    >
      <div className="tww-topbar-inner">
        <span
          className={`tww-topbar-message${visible ? " tww-topbar-in" : " tww-topbar-out"}`}
        >
          {href ? (
            <Link href={href} className="tww-topbar-link" style={{ color: textColor }}>
              {text}
            </Link>
          ) : (
            text
          )}
        </span>

        <button
          className="tww-topbar-dismiss"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          style={{ color: textColor }}
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
}
