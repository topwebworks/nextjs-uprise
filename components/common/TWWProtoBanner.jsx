"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./TWWProtoBanner.module.css";

const STORAGE_KEY = "tww_protobanner_dismissed";

export default function TWWProtoBanner() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setDismissed(true);
    }
  }, []);

  const dismiss = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  }, []);

  if (dismissed) return null;

  return (
    <div className={styles.banner} role="complementary" aria-label="Site builder info">
      <span className={styles.label}>
        Free homepage prototype&nbsp;&mdash;&nbsp;
        <strong>Get found. Capture leads. Follow up automatically.</strong>
      </span>
      <a
        href="https://topwebworks.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cta}
      >
        TopWebWorks.com&nbsp;&rarr;
      </a>
      <button
        className={styles.dismiss}
        onClick={dismiss}
        aria-label="Dismiss prototype banner"
      >
        &#x2715;
      </button>
    </div>
  );
}
