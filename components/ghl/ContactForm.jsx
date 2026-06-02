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
        <style>{`
          .ghl-form-placeholder {
            min-height: 360px;
            border-color: #e5e5e5 !important;
            border-radius: 8px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ghl-form-placeholder-inner {
            max-width: 520px;
            margin: 0 auto;
          }
          .ghl-form-placeholder .h5 {
            max-width: 360px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.3;
          }
          .ghl-form-placeholder .text-gray {
            line-height: 1.7;
          }
          .ghl-form-fields {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            list-style: none;
            padding: 0;
            margin: 22px 0 0;
          }
          .ghl-form-fields li {
            border: 1px solid #e5e5e5;
            border-radius: 999px;
            color: #555;
            font-size: 12px;
            line-height: 1.2;
            padding: 7px 11px;
            background: #fafafa;
          }
        `}</style>
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
