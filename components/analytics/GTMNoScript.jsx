// GTM <noscript> fallback — must be the first child of <body>.
// Only renders when a GTM ID is configured.
import analytics from "@/data/analytics";

export default function GTMNoScript() {
  if (!analytics.gtmId || analytics.gtmId === "GTM-XXXXXXX") return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${analytics.gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
