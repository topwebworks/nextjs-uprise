/**
 * GHL (GoHighLevel / TWW CRM) per-client configuration.
 * Replace all PLACEHOLDER values when duplicating this template for a client.
 *
 * Where to find IDs in GHL:
 *   Location ID:   Settings > Business Info
 *   Chat widget:   Sites > Chat Widget > embed code (data-widget-id)
 *   Form UUID:     Sites > Forms > [form] > Integrate > snippet URL param
 *   Calendar UUID: Calendars > [calendar] > Integration > embed code
 *   Reviews widget: Reputation > Widget > embed code
 *
 * GHL is internal language — use "TWW CRM" in all client-facing copy.
 */

const ghl = {
  // Subaccount location ID
  locationId: "LOCATION_ID_PLACEHOLDER",

  // Chat widget (sitewide, loaded in layout)
  chat: {
    widgetId: "CHAT_WIDGET_ID_PLACEHOLDER",
  },

  // Forms — one entry per GHL form used anywhere on this site.
  // Key:   a readable name for use as the `form` prop on <ContactForm />
  // Value: the UUID from GHL's form embed code
  //
  // Every form capturing a phone number must include GHL's SMS consent field
  // (add it in the GHL form builder — required for TCPA compliance).
  forms: {
    contact:      "FORM_UUID_CONTACT_PLACEHOLDER",
    estimate:     "FORM_UUID_ESTIMATE_PLACEHOLDER",
    // Industry-specific examples — rename/add as needed per client:
    // quote:        "FORM_UUID_QUOTE_PLACEHOLDER",
    // consultation: "FORM_UUID_CONSULTATION_PLACEHOLDER",
    // intake:       "FORM_UUID_INTAKE_PLACEHOLDER",
    // campaign_a:   "FORM_UUID_CAMPAIGN_A_PLACEHOLDER",
    // campaign_b:   "FORM_UUID_CAMPAIGN_B_PLACEHOLDER",
  },

  // Calendars — one entry per booking calendar embed used on this site
  calendars: {
    main: "CALENDAR_UUID_PLACEHOLDER",
    // discovery: "CALENDAR_UUID_DISCOVERY_PLACEHOLDER",
  },

  // Reputation / reviews display widget
  reviews: {
    widgetId: "REVIEWS_WIDGET_ID_PLACEHOLDER",
  },
};

export default ghl;
