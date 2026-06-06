import { notFound } from "next/navigation";
import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import HeaderTWW from "@/components/headers/HeaderTWW";
import { buildMetadata } from "@/utils/seo";
import site from "@/data/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}. How we collect, use, and protect your information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  notFound();
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar amw-legal-nav">
            <HeaderTWW />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0">
              <section
                className="page-section bg-gray-light-1 amw-fixed-bg-host amw-light-hero"
                style={{
                  paddingTop: 200,
                  paddingBottom: 0,
                }}
              >
                <>
                  <ImageBackground src="/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_3.jpeg" alt="" fixed priority />
                  <div className="container position-relative pt-0">
                    <div className="text-center">
                      <div className="row">
                        <div className="col-12">
                          <h1 className="hs-title-1 mb-3 mx-auto" style={{ maxWidth: 960 }}>
                            <span className="wow charsAnimIn" data-splitting="chars">Privacy Policy</span>
                          </h1>
                          <p className="text-muted mb-0">Last updated: May 29, 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </section>
            </section>

            <section className="page-section pt-30 amw-light-hero-next">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">

                    <h2 className="h4 mt-0 mb-3">Information We Collect</h2>
                    <p>
                      We collect information you provide directly to us, such as when you fill out a
                      contact form, request a quote, or schedule an appointment. This may include your
                      name, email address, phone number, project address, and the nature of your inquiry.
                    </p>

                    <h2 className="h4 mt-5 mb-3">How We Use Your Information</h2>
                    <p>
                      We use your information to respond to your inquiries, provide our services,
                      send appointment reminders, and follow up on your interest in our services.
                      With your consent, we may send you SMS and email communications about our services.
                    </p>

                    <h2 className="h4 mt-5 mb-3">How We Share Your Information</h2>
                    <p>
                      We do not sell your personal information to third parties. We may share your
                      name, project address, and relevant project details with field crews, subcontractors,
                      and material suppliers as necessary to complete your project. These parties receive
                      only the information needed to perform their specific role and are not authorized
                      to use your information for any other purpose.
                    </p>
                    <p>
                      We also use Google Analytics (via Google Tag Manager) for site analytics, and a
                      CRM platform for communication and lead management. These services may process
                      your data in accordance with their own privacy policies.
                    </p>

                    <h2 className="h4 mt-5 mb-3">SMS &amp; Email Communications</h2>
                    <p>
                      By providing your phone number and checking the SMS consent box on our forms,
                      you agree to receive text messages from {site.name}. Message and data rates may
                      apply. SMS consent is not a condition of purchase or service.
                    </p>
                    <p>
                      To unsubscribe from SMS messages, reply STOP at any time. Reply HELP for help.
                      If STOP does not resolve the issue, contact us directly at{" "}
                      <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
                      <a href={`tel:${site.phone}`}>{site.phone}</a> to request removal from all
                      SMS communications.
                    </p>

                    <h2 className="h4 mt-5 mb-3">Cookies &amp; Analytics</h2>
                    <p>
                      We use cookies and similar tracking technologies, including browser localStorage,
                      to store your cookie preferences and analyze how visitors use our site. Analytics
                      cookies only load after you accept them via the cookie banner. You can manage your
                      preferences at any time using the Cookie Settings link in the footer. See our{" "}
                      <a href="/cookie-policy">Cookie Policy</a> for details.
                    </p>
                    <p>
                      We do not respond to browser &ldquo;Do Not Track&rdquo; (DNT) signals, as there is no
                      industry-standard interpretation of DNT. You can limit analytics data collection
                      by declining analytics cookies in the cookie banner.
                    </p>

                    <h2 className="h4 mt-5 mb-3">Data Retention</h2>
                    <p>
                      We retain your information for as long as necessary to provide our services
                      and comply with our legal obligations. Contact and project information is
                      retained for the duration of your relationship with Client and for a reasonable
                      period thereafter for warranty and record-keeping purposes.
                    </p>

                    <h2 className="h4 mt-5 mb-3">Your Rights</h2>
                    <p>
                      You may request to access, correct, or delete your personal information at
                      any time by contacting us at <a href={`mailto:${site.email}`}>{site.email}</a>.
                      We will respond within a reasonable time and in accordance with applicable law.
                    </p>
                    <p>
                      <strong>California Residents:</strong> If you are a California resident, you may
                      have additional rights under the California Consumer Privacy Act (CCPA), including
                      the right to know what personal information we collect and how it is used, the right
                      to request deletion, and the right to opt out of the sale of personal information
                      (we do not sell personal information). To exercise these rights, contact us at{" "}
                      <a href={`mailto:${site.email}`}>{site.email}</a>.
                    </p>

                    <h2 className="h4 mt-5 mb-3">Changes to This Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time. Changes will be posted
                      on this page with an updated effective date. Continued use of our site after
                      changes are posted constitutes acceptance of the revised policy.
                    </p>

                    <h2 className="h4 mt-5 mb-3">Contact</h2>
                    <p>
                      {site.legalName}<br />
                      {site.address.city}, {site.address.state} {site.address.zip}<br />
                      <a href={`mailto:${site.email}`}>{site.email}</a><br />
                      <a href={`tel:${site.phone}`}>{site.phone}</a>
                    </p>

                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
