import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import HeaderAMW from "@/components/headers/HeaderAMW";
import { buildMetadata } from "@/utils/seo";
import site from "@/data/site";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of Service for ${site.name}. Governing your use of this website and the hardscape contracting services provided by ${site.legalName}.`,
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar amw-legal-nav">
            <HeaderAMW />
            <style>{`
              .amw-legal-nav.transparent:not(.small-height) .amw-logo-badge-wrap {
                background-color: transparent !important;
                box-shadow: none !important;
                border-radius: 0 !important;
              }
              .amw-legal-nav.transparent:not(.small-height) .amw-logo-primary { filter: none !important; }
              .amw-legal-nav.transparent:not(.small-height) .amw-logo-amw,
              .amw-legal-nav.transparent:not(.small-height) .amw-logo-hardscape { color: #111 !important; }
              .amw-legal-nav.transparent:not(.small-height) .amw-logo-solutions { color: rgba(0,0,0,0.62) !important; text-shadow: none !important; }
              .amw-legal-nav.transparent:not(.small-height) .inner-nav > ul > li > a,
              .amw-legal-nav.transparent:not(.small-height) .items-end a,
              .amw-legal-nav.transparent:not(.small-height) .items-end .link-strong { color: #222 !important; text-shadow: none !important; }
            `}</style>
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
                  <ImageBackground src="/assets/tww-assets/amw-images/Arizona_house_in_suburb_frontyard_202605131833.jpeg" alt="" fixed priority />
                  <div className="container position-relative pt-0">
                    <div className="text-center">
                      <div className="row">
                        <div className="col-12">
                          <h1 className="hs-title-1 mb-3 mx-auto" style={{ maxWidth: 960 }}>
                            <span className="wow charsAnimIn" data-splitting="chars">Terms of Service</span>
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

                    <h2 className="h4 mt-0 mb-3">1. Acceptance of Terms</h2>
                    <p>
                      By accessing or using the website located at <a href={site.url}>{site.url}</a> (the
                      &ldquo;Site&rdquo;) or by requesting, scheduling, or receiving any contracting services
                      from {site.legalName} (&ldquo;AMW,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound
                      by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms,
                      do not use the Site or engage our services.
                    </p>
                    <p>
                      These Terms apply to all visitors, clients, and others who access the Site
                      or engage AMW for hardscape contracting work.
                    </p>

                    <h2 className="h4 mt-5 mb-3">2. Services</h2>
                    <p>
                      {site.legalName} is a licensed hardscape contracting company operating in
                      the State of Arizona (ROC&nbsp;#359843 &middot; ROC&nbsp;#346552). We provide residential
                      and commercial hardscape services including paver installation, concrete flatwork,
                      artificial turf installation, natural sod installation, decorative rock installation,
                      demolition and removal, and driveway additions.
                    </p>
                    <p>
                      All contracting work is governed by a separate written agreement or work order
                      executed between AMW and the client prior to the commencement of work. These Terms
                      govern your use of the Site and your general relationship with AMW. In the event
                      of a conflict between these Terms and a signed project contract, the signed
                      project contract controls.
                    </p>
                    <p>
                      AMW reserves the right to decline, modify, or discontinue any service at any
                      time. Submission of a contact form or estimate request does not constitute
                      a contract or guarantee of service.
                    </p>

                    <h2 className="h4 mt-5 mb-3">3. Estimates &amp; Quotes</h2>
                    <p>
                      Written estimates provided by AMW are based on the information available at
                      the time of the site assessment and client consultation. Estimates are valid
                      for 30 days from the date of issue unless otherwise stated in writing. After
                      30 days, material costs, labor rates, and availability are subject to change
                      and the estimate must be reissued before work can be scheduled.
                    </p>
                    <p>
                      Estimates are not binding contracts. Final pricing may vary based on conditions
                      discovered during work — including but not limited to concealed reinforcement,
                      unexpected sub-grade conditions, caliche hardpan, unmarked utilities, irrigation
                      conflicts, or changes to the project scope requested by the client. Any material
                      change to the scope of work will be communicated to the client before that work
                      proceeds.
                    </p>

                    <h2 className="h4 mt-5 mb-3">4. Client Responsibilities</h2>
                    <p>You agree to:</p>
                    <ul>
                      <li>Provide accurate information about the property and project conditions at the time of estimate and throughout the project.</li>
                      <li>Disclose known underground utilities, irrigation lines, drainage infrastructure, and any other subsurface conditions that may affect the work.</li>
                      <li>Obtain any required HOA approvals, permits, or easement clearances prior to the commencement of work, unless otherwise agreed in writing with AMW.</li>
                      <li>Ensure site access is clear and adequate for the equipment and crew required by the project scope.</li>
                      <li>Make payments in accordance with the terms specified in your project agreement.</li>
                    </ul>
                    <p>
                      AMW is not responsible for delays, additional costs, or damage arising from
                      inaccurate or incomplete information provided by the client, undisclosed
                      subsurface conditions, or failure to obtain required approvals.
                    </p>
                    <p>
                      In the event of non-payment, AMW reserves all rights available under Arizona
                      law, including but not limited to the right to record a mechanic&rsquo;s lien
                      against the subject property pursuant to A.R.S. &sect;&nbsp;33-981 et seq. The
                      client is responsible for all costs of collection, including reasonable
                      attorney&rsquo;s fees, where permitted by law.
                    </p>

                    <h2 className="h4 mt-5 mb-3">5. Permits &amp; Compliance</h2>
                    <p>
                      Unless expressly agreed in writing, the responsibility for obtaining permits
                      and approvals rests with the property owner. AMW will advise clients when a
                      permit appears likely to be required based on project scope, but AMW does not
                      provide legal or code compliance determinations. Clients are responsible for
                      verifying permit requirements with the applicable jurisdiction before work begins.
                    </p>
                    <p>
                      Where AMW agrees in writing to pull a permit on the client&rsquo;s behalf, the
                      permit fee and any associated costs will be passed through to the client at
                      cost. AMW&rsquo;s responsibility is limited to submitting the application;
                      approval, timing, and compliance determinations remain with the applicable
                      jurisdiction.
                    </p>

                    <h2 className="h4 mt-5 mb-3">6. Material Performance</h2>
                    <p>
                      Concrete is a natural material that will crack over time. Control joints are
                      installed to manage where cracking occurs; they do not prevent cracking entirely.
                      Color variation, surface texture differences, bug holes, and minor surface
                      imperfections are inherent characteristics of concrete flatwork and are not
                      grounds for warranty claims unless they result from a documented installation defect.
                    </p>
                    <p>
                      Natural stone materials — including travertine, flagstone, slate, and quartzite —
                      exhibit natural variation in color, veining, surface texture, pitting, and
                      pattern that is inherent to the material and cannot be controlled by the installer.
                      Pavers and manufactured concrete products may exhibit batch-to-batch color variation.
                      These characteristics are not defects and are not grounds for warranty claims.
                    </p>
                    <p>
                      Material defects are governed by the applicable manufacturer warranty, not by AMW.
                    </p>

                    <h2 className="h4 mt-5 mb-3">7. Workmanship Warranty</h2>
                    <p>
                      AMW warrants its workmanship against defects in installation for one (1) year
                      from the date of project completion, unless a different period is specified in
                      the signed project contract. This warranty covers labor and installation method only.
                    </p>
                    <p>
                      This warranty does not cover damage caused by: subsurface conditions not disclosed
                      or reasonably discoverable at the time of install; acts of nature including monsoon
                      flooding, soil heaving, extreme heat events, or seismic activity; client modifications
                      to the finished work; failure to follow AMW&rsquo;s maintenance recommendations; normal
                      wear consistent with the intended use of the surface; or damage caused by third
                      parties after project completion.
                    </p>
                    <p>
                      Warranty claims must be submitted in writing to{" "}
                      <a href={`mailto:${site.email}`}>{site.email}</a> within the warranty period.
                      AMW will inspect the claimed defect within a reasonable time and, if the claim
                      is covered, will repair or replace the defective work at AMW&rsquo;s discretion.
                    </p>

                    <h2 className="h4 mt-5 mb-3">8. Photography &amp; Marketing</h2>
                    <p>
                      AMW may photograph completed work at the project site for use in its portfolio,
                      website, social media, and other marketing materials. Photos will not include
                      personally identifiable information such as house numbers, street signs, or client
                      names without separate written consent. Clients who wish to opt out of project
                      photography must notify AMW in writing before the project completion walkthrough.
                    </p>

                    <h2 className="h4 mt-5 mb-3">9. Force Majeure</h2>
                    <p>
                      AMW shall not be liable for delays or failure to perform resulting from causes
                      beyond its reasonable control, including but not limited to: extreme weather events
                      (monsoon season, excessive heat, flash flooding), material shortages or supply chain
                      disruptions, utility conflicts discovered during work, acts of government, labor
                      disputes, or other circumstances that could not reasonably have been anticipated
                      or prevented. In such events, AMW will notify the client as soon as practicable
                      and work to reschedule affected work at the earliest reasonable opportunity.
                    </p>

                    <h2 className="h4 mt-5 mb-3">10. Indemnification</h2>
                    <p>
                      You agree to indemnify, defend, and hold harmless {site.legalName}, its owners,
                      employees, subcontractors, and agents from and against any claims, damages, losses,
                      costs, and expenses (including reasonable attorney&rsquo;s fees) arising out of or
                      related to: your breach of these Terms; inaccurate or incomplete information you
                      provided to AMW; undisclosed subsurface conditions on the property; your failure
                      to obtain required permits or HOA approvals; or your use of the completed work
                      in a manner inconsistent with its intended purpose.
                    </p>

                    <h2 className="h4 mt-5 mb-3">11. Limitation of Liability</h2>
                    <p>
                      To the maximum extent permitted by applicable law, {site.legalName} shall not
                      be liable for any indirect, incidental, special, consequential, or punitive
                      damages arising out of or related to your use of the Site or the services
                      provided by AMW.
                    </p>
                    <p>
                      AMW&rsquo;s total liability to any client for any claim arising from a project
                      shall not exceed the total amount paid by that client to AMW for the specific
                      project giving rise to the claim.
                    </p>

                    <h2 className="h4 mt-5 mb-3">12. Intellectual Property</h2>
                    <p>
                      All content on this Site — including text, photographs, graphics, logos, and
                      design — is the property of {site.legalName} or its content suppliers and may
                      not be reproduced without prior written permission.
                    </p>

                    <h2 className="h4 mt-5 mb-3">13. Third-Party Services</h2>
                    <p>
                      The Site may contain links to third-party websites or use third-party services.
                      AMW does not control and is not responsible for the content, privacy practices,
                      or terms of any third-party site or service.
                    </p>

                    <h2 className="h4 mt-5 mb-3">14. Dispute Resolution</h2>
                    <p>
                      In the event of a dispute arising from a project or these Terms, the parties
                      agree to first attempt resolution through good-faith written communication.
                      If informal resolution fails, the parties agree to participate in one session
                      of non-binding mediation in Maricopa County, Arizona, before initiating any
                      formal legal proceeding.
                    </p>
                    <p>
                      For disputes involving amounts of $3,500 or less, either party may pursue
                      resolution in Arizona Small Claims Court (Justice Court) without first completing
                      mediation. For disputes exceeding $3,500 that cannot be resolved through mediation,
                      the parties agree to submit to binding arbitration in Maricopa County, Arizona,
                      under streamlined arbitration rules appropriate to the amount in dispute.
                    </p>
                    <p>
                      Nothing in this section prevents either party from seeking emergency injunctive
                      relief from a court of competent jurisdiction to prevent irreparable harm.
                    </p>

                    <h2 className="h4 mt-5 mb-3">15. Governing Law</h2>
                    <p>
                      These Terms are governed by the laws of the State of Arizona. Any legal action
                      not subject to arbitration shall be brought exclusively in the state or federal
                      courts located in Maricopa County, Arizona.
                    </p>

                    <h2 className="h4 mt-5 mb-3">16. Changes to These Terms</h2>
                    <p>
                      AMW reserves the right to update these Terms at any time. Changes will be
                      posted on this page with an updated effective date. Continued use of the Site
                      after changes are posted constitutes acceptance of the revised Terms.
                    </p>

                    <h2 className="h4 mt-5 mb-3">17. Contact</h2>
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
