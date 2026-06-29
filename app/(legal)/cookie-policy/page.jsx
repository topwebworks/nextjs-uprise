import { notFound } from "next/navigation";
import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import HeaderTWW from "@/components/headers/HeaderTWW";
import { buildMetadata } from "@/utils/seo";
import site from "@/data/site";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: `Cookie policy for ${site.name}. What cookies we use and how to manage your preferences.`,
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
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
                  <ImageBackground src="/assets/tww-assets/tww-images/Arizona_house_installing_beautiful_202605131833.jpeg" alt="" fixed priority />
                  <div className="container position-relative pt-0">
                    <div className="text-center">
                      <div className="row">
                        <div className="col-12">
                          <h1 className="hs-title-1 mb-3 mx-auto" style={{ maxWidth: 960 }}>
                            <span className="wow charsAnimIn" data-splitting="chars">Cookie Policy</span>
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

                    <h2 className="h4 mt-0 mb-3">What Are Cookies</h2>
                    <p>
                      Cookies are small text files stored on your device when you visit a website.
                      They help us recognize your browser and remember certain information to
                      improve your experience and understand how our site is used.
                    </p>
                    <p>
                      In addition to cookies, this site uses browser <strong>localStorage</strong> to
                      store your cookie consent preference (under the key <code>tww_cookie_consent</code>).
                      LocalStorage is similar to cookies in that it persists data on your device, but
                      it is not transmitted with every request. Clearing your browser&rsquo;s site data
                      will remove this preference and the cookie banner will reappear on your next visit.
                    </p>

                    <h2 className="h4 mt-5 mb-3">Cookies We Use</h2>

                    <h3 className="h5 mt-4 mb-2">Essential Cookies (always active)</h3>
                    <p>
                      These cookies are necessary for the site to function and cannot be disabled.
                      They enable the live chat widget, contact forms, cookie preference storage,
                      and session management. Declining analytics cookies does not affect these
                      features — the site functions fully without analytics cookies enabled.
                      No personally identifiable information is collected by essential cookies.
                    </p>
                    <table className="table table-sm mt-3 mb-4" style={{ fontSize: 13.5 }}>
                      <thead>
                        <tr>
                          <th>Cookie / Storage Key</th>
                          <th>Purpose</th>
                          <th>Retention</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>tww_cookie_consent</code></td>
                          <td>Stores your cookie preference (localStorage)</td>
                          <td>Until site data is cleared</td>
                        </tr>
                        <tr>
                          <td>GHL chat / CRM cookies</td>
                          <td>Live chat widget and form session management</td>
                          <td>Session / up to 1 year</td>
                        </tr>
                      </tbody>
                    </table>

                    <h3 className="h5 mt-4 mb-2">Analytics Cookies (optional)</h3>
                    <p>
                      We use Google Analytics via Google Tag Manager to understand how visitors
                      use our site — pages visited, time on site, and general traffic sources.
                      These cookies only load after you accept analytics cookies via the cookie
                      banner. No personally identifiable information is collected. You can decline
                      or withdraw consent at any time without affecting your ability to use the site.
                    </p>
                    <table className="table table-sm mt-3 mb-4" style={{ fontSize: 13.5 }}>
                      <thead>
                        <tr>
                          <th>Cookie</th>
                          <th>Purpose</th>
                          <th>Retention</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>_ga</code></td>
                          <td>Google Analytics — distinguishes unique users</td>
                          <td>2 years</td>
                        </tr>
                        <tr>
                          <td><code>_ga_*</code></td>
                          <td>Google Analytics — session state</td>
                          <td>2 years</td>
                        </tr>
                        <tr>
                          <td><code>_gid</code></td>
                          <td>Google Analytics — distinguishes users (short-term)</td>
                          <td>24 hours</td>
                        </tr>
                      </tbody>
                    </table>

                    <h2 className="h4 mt-5 mb-3">Managing Your Preferences</h2>
                    <p>
                      You can update your cookie preferences at any time by clicking
                      &ldquo;Cookie Settings&rdquo; in the footer of any page on this site.
                      Declining analytics cookies does not affect the site&rsquo;s core functionality —
                      all forms, chat, and page features remain fully available.
                    </p>
                    <p>
                      You can also clear cookies and site data through your browser settings.
                      This will remove the stored consent preference and the cookie banner will
                      reappear on your next visit.
                    </p>

                    <h2 className="h4 mt-5 mb-3">Third-Party Cookies</h2>
                    <p>
                      Our CRM platform (used for chat, forms, and lead management) may set
                      functional cookies necessary for those features to operate. These are
                      classified as essential and load regardless of analytics preference.
                      Google Analytics cookies are set by Google and governed by
                      Google&rsquo;s privacy policy. Client does not have direct access to modify
                      or read Google Analytics cookie values beyond the aggregated reporting
                      provided in Google Analytics.
                    </p>

                    <h2 className="h4 mt-5 mb-3">Changes to This Policy</h2>
                    <p>
                      We may update this Cookie Policy from time to time. Changes will be posted
                      on this page with an updated effective date.
                    </p>

                    <h2 className="h4 mt-5 mb-3">Contact</h2>
                    <p>
                      Questions about our use of cookies? Contact us at{" "}
                      <a href={`mailto:${site.email}`}>{site.email}</a>.
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
