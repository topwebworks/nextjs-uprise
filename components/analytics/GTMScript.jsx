"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { analyticsAllowed } from "@/utils/consent";
import analytics from "@/data/analytics";

// Loads GTM only after the user has accepted analytics cookies.
// Also listens for the tww:consent event so it fires immediately on accept
// without requiring a page reload.
export default function GTMScript() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (analyticsAllowed()) {
      setLoad(true);
      return;
    }
    function onConsent(e) {
      if (e.detail?.value === "all") setLoad(true);
    }
    window.addEventListener("tww:consent", onConsent);
    return () => window.removeEventListener("tww:consent", onConsent);
  }, []);

  if (!load || !analytics.gtmId || analytics.gtmId === "GTM-XXXXXXX") return null;

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${analytics.gtmId}');
        `,
      }}
    />
  );
}
