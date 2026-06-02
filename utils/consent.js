// Cookie consent helpers.
// Consent is stored in localStorage under "tww_cookie_consent".
// Values: "all" | "essential" | null (not yet decided)
//
// GTM/GA4 fire only when consent is "all".
// GHL scripts always load — they are functional/necessary.

const CONSENT_KEY = "tww_cookie_consent";

export function getConsent() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CONSENT_KEY);
}

export function setConsent(value) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent("tww:consent", { detail: { value } }));
}

export function hasConsented() {
  return getConsent() !== null;
}

export function analyticsAllowed() {
  return getConsent() === "all";
}
