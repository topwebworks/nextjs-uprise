// GHL form embed component.
// Relies on form_embed.js being loaded by GHLScripts in layout.js.
//
// Usage:
//   <ContactForm form="contact" />
//   <ContactForm form="estimate" />
//   <ContactForm form="campaign_a" />
//
// The `form` prop must match a key in data/ghl.js > forms.
// Each key maps to a GHL form UUID.
import ghl from "@/data/ghl";
import "@/components/ghl/ContactForm.module.css";

export default function ContactForm({
  form = "contact",
  className = "",
  placeholderTitle = "Form embed not configured.",
  placeholderText,
  placeholderFields = [],
}) {
  const formId = ghl.forms[form];

  if (!formId || formId.includes("PLACEHOLDER")) {
    return (
      <div className={`ghl-form-placeholder p-4 border text-center ${className}`}>
        <div className="ghl-form-placeholder-inner">
          <h4 className="h5 mb-10">{placeholderTitle}</h4>
          {placeholderText ? (
            <p className="text-gray mb-0">{placeholderText}</p>
          ) : (
            <p className="text-muted mb-0">
              Add the form ID in <code>data/ghl.js - forms.{form}</code>.
            </p>
          )}
          {placeholderFields.length > 0 && (
            <ul className="ghl-form-fields" aria-label={`${form} form fields`}>
              {placeholderFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  // GHL's form_embed.js picks up this iframe and replaces it with the live form.
  return (
    <div className={className}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={form}
        data-height="auto"
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title={`${form} form`}
      />
    </div>
  );
}
