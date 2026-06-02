// Reads UTM params from the current URL and persists them in sessionStorage.
// Called once on page load via ClientInit.jsx.
// GHL reads these automatically from sessionStorage for form attribution.
//
// Params captured: utm_source, utm_medium, utm_campaign, utm_term, utm_content
// Session scope intentional — UTMs reset when a new session starts, matching
// standard attribution behavior.

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export function captureUTMs() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found = UTM_KEYS.filter((key) => params.has(key));
  if (found.length === 0) return;
  found.forEach((key) => {
    sessionStorage.setItem(key, params.get(key));
  });
}

export function getStoredUTMs() {
  if (typeof window === "undefined") return {};
  return UTM_KEYS.reduce((acc, key) => {
    const val = sessionStorage.getItem(key);
    if (val) acc[key] = val;
    return acc;
  }, {});
}
