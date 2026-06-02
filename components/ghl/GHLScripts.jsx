"use client";
import Script from "next/script";
import ghl from "@/data/ghl";

// Loaded once in layout.js — handles all sitewide GHL scripts.
// Individual form/calendar/review components only render their containers;
// they rely on these scripts already being present.
export default function GHLScripts() {
  return (
    <>
      {/* GHL site tracking pixel */}
      <Script
        id="ghl-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.GHL_LOCATION_ID = "${ghl.locationId}";
            (function(w,d,s,l){
              w[l]=w[l]||[];
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s);
              j.async=true;
              j.src='https://js.hs-analytics.net/analytics/'+w.GHL_LOCATION_ID+'.js';
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','_ghlTrack');
          `,
        }}
      />

      {/* GHL form + calendar embed script (shared — load once for all instances) */}
      <Script
        id="ghl-form-embed"
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />

      {/* GHL chat widget */}
      <Script
        id="ghl-chat"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id={ghl.chat.widgetId}
        strategy="afterInteractive"
      />
    </>
  );
}
