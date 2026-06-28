"use client";
import { useEffect } from "react";
import Script from "next/script";
import analytics from "@/data/analytics";

// Consent Mode v2 — GTM always loads, consent signals control what fires.
// Defaults to denied. Updates immediately for returning visitors and in
// real-time when the user responds to the cookie banner (tww:consent event).
export default function GTMScript() {
  useEffect(() => {
    function onConsent(e) {
      const granted = e.detail?.value === "all" ? "granted" : "denied";
      window.gtag?.("consent", "update", {
        analytics_storage: granted,
        ad_storage: granted,
        ad_user_data: granted,
        ad_personalization: granted,
      });
    }
    window.addEventListener("tww:consent", onConsent);
    return () => window.removeEventListener("tww:consent", onConsent);
  }, []);

  if (!analytics.gtmId || analytics.gtmId === "GTM-XXXXXXX") return null;

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){window.dataLayer.push(arguments);};
          var _c = localStorage.getItem('tww_cookie_consent');
          var _g = _c === 'all' ? 'granted' : 'denied';
          window.gtag('consent', 'default', {
            analytics_storage: _g,
            ad_storage: _g,
            ad_user_data: _g,
            ad_personalization: _g,
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: _c === null ? 500 : 0
          });
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
