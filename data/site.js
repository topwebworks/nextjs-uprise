/**
 * Re-exports company/site data from the central settings file.
 * Edit data/settings.js — not this file.
 */
import settings from "./settings";

const site = {
  url:          settings.company.url,
  name:         settings.company.name,
  legalName:    settings.company.legalName,
  phone:        settings.company.phone,
  email:        settings.company.email,
  roc:          settings.company.licenseNumbers,
  address:      settings.company.address,
  businessType: settings.company.businessType,
  ogImage:      settings.ogImage,
  social:       settings.social,
};

export default site;
