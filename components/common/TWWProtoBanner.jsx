"use client";
import styles from "./TWWProtoBanner.module.css";

export default function TWWProtoBanner() {
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
    </div>
  );
}
