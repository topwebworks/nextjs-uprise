import { notFound } from "next/navigation";
import Footer1 from "@/components/footers/Footer1";
import ImageBackground from "@/components/common/ImageBackground";
import HeaderQuest from "@/components/headers/HeaderQuest";
import React from "react";
import Faq from "@/components/common/Faq";
import AMWContactSection from "@/components/homes/amw/AMWContactSection";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Contact AMW Hardscape Solutions | San Tan Valley, Queen Creek & East Valley",
  description:
    "Questions about a project, scheduling, or existing work? Contact AMW Hardscape Solutions — licensed hardscape contractor serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler & Apache Junction.",
  path: "/support",
  tags: ["contact", "hardscape contractor", "san tan valley", "queen creek", "gilbert", "east valley", "arizona hardscape"],
});

const cities = [
  { name: "San Tan Valley, AZ", body: "San Tan Valley is AMW's home base. We work throughout the 85140, 85143, and 85144 zip codes — from newer tract developments along Hunt Highway to established neighborhoods around Schnepf Road. The caliche hardpan common throughout San Tan Valley requires proper excavation and base prep on every hardscape job. We know the soil, the drainage patterns, and the HOA requirements across the major neighborhoods." },
  { name: "Queen Creek, AZ", body: "Queen Creek is one of AMW's most active service areas. The rapid growth along Ellsworth Road and the established neighborhoods off Rittenhouse have produced strong demand for paver patios, concrete driveways, decorative rock, and artificial turf. Queen Creek's larger lot sizes typically allow for full backyard hardscape transformations. We handle everything from permit coordination to final walkthrough." },
  { name: "Gilbert, AZ", body: "Gilbert homeowners consistently rank among AMW's most detail-oriented clients. The established neighborhoods throughout Gilbert — from Val Vista Lakes to Agritopia and Morrison Ranch — have mature landscaping that requires careful hardscape integration. We install pavers, concrete, turf, and decorative rock throughout Gilbert, including pool deck work and backyard outdoor living spaces." },
  { name: "Mesa, AZ", body: "AMW serves Mesa from the Superstition Springs corridor east to the San Tan Valley border. Mesa's mix of older concrete driveways approaching end of life and newer developments seeking paver and turf upgrades represents a large portion of our concrete repair, replacement, and paver installation work. We also handle decorative rock and DG installations throughout Mesa's desert-landscaped front yards." },
  { name: "Chandler, AZ", body: "Chandler's established neighborhoods — Ocotillo, Fulton Ranch, and the communities east of the 202 — are active AMW service territory. Paver patios, artificial turf conversions from grass, decorative rock, and driveway widening make up the majority of our Chandler work. We regularly work in gated communities and HOA-governed neighborhoods and are familiar with the approval process for hardscape modifications." },
  { name: "Apache Junction, AZ", body: "Apache Junction's terrain and soil conditions are among the most demanding in the East Valley. Rocky native soil, dramatic grade changes, and proximity to the Superstition Mountains create site conditions that require experienced assessment before any hardscape work begins. AMW handles paver installation, concrete work, decorative rock, and demolition throughout Apache Junction and Gold Canyon." },
  { name: "Maricopa, AZ", body: "Maricopa is a growing AMW service area as development along SR-347 continues expanding. The newer tract neighborhoods in Maricopa have large lots and clay-heavy soil that benefits from proper hardscape drainage planning. We install pavers, concrete, artificial turf, and decorative rock throughout Maricopa, including RV pad construction for the area's many recreational vehicle owners." },
  { name: "Florence, AZ", body: "AMW serves Florence and the surrounding Pinal County communities for paver installation, concrete work, decorative rock, and demolition. Florence's growth along Hunt Highway and the communities north of town have seen significant demand for hardscape upgrades. We coordinate with Pinal County permit requirements where applicable." },
  { name: "Gold Canyon, AZ", body: "Gold Canyon's terrain is characterized by rocky native soil, desert wash crossings, and properties with dramatic elevation changes. Hardscape in Gold Canyon requires careful drainage planning — monsoon runoff on sloped lots can undermine improperly graded surfaces within one season. AMW assesses site drainage before every job and designs hardscape that handles Gold Canyon's specific conditions." },
  { name: "Higley, AZ", body: "The Higley corridor — including communities along Williams Field Road and the neighborhoods between Gilbert and Queen Creek — is active AMW territory. Newer construction in this area often includes large backyards well-suited to paver patios, turf, and decorative rock combinations. We work in both HOA-governed communities and custom home properties throughout the Higley area." },
  { name: "Coolidge, AZ", body: "AMW serves Coolidge and the surrounding Pinal County area for hardscape installation and demolition. Coolidge properties tend toward larger lot sizes with significant opportunities for decorative rock, DG pathways, and concrete driveway work. We handle the full project from site assessment through haul-away and final walkthrough." },
];

const supportFaqs = [
  {
    question: "What photos and details help AMW price the job correctly?",
    answer:
      "Wide photos of the whole area, close-ups of problem spots, gate or access photos, rough dimensions, and a short description of what you want built all help. Existing concrete, pavers, slope, drainage, irrigation, and tight access can change the prep and price.",
  },
  {
    question: "Why does base prep matter so much?",
    answer:
      "Most hardscape failures start under the surface. Pavers, turf, rock, and concrete all need the right excavation, grading, compaction, borders, and drainage. Skipping base prep can lead to settling, soft spots, crooked edges, puddling, weeds, and cracked or uneven finished work.",
  },
  {
    question: "How do I choose between pavers, concrete, turf, and rock?",
    answer:
      "It depends on how the space will be used. Pavers are great for patios, walkways, and finished outdoor living areas. Concrete fits slabs, RV pads, and driveway work. Turf works for green usable space without watering. Decorative rock is best for low-water borders, transitions, and clean desert hardscape.",
  },
  {
    question: "Can AMW handle demolition, grading, borders, and cleanup?",
    answer:
      "Yes. Depending on the project, AMW can remove old material, haul away debris, shape the grade, prep the base, set edges or borders, install the finished surface, and clean the site before the final walkthrough.",
  },
  {
    question: "What can change the estimate after a site visit?",
    answer:
      "Common changes include hidden concrete, poor drainage, soft subgrade, narrow access, irrigation lines, utility conflicts, extra demolition, material changes, or a larger final layout. AMW reviews those items before work begins so the scope is clear.",
  },
  {
    question: "How long does a typical hardscape project take?",
    answer:
      "Small turf, rock, or paver areas may take a few days. Larger patios, driveways, concrete slabs, demolition-heavy projects, or jobs with drainage and grading work can take longer. Weather, material availability, access, and cure times can also affect the schedule.",
  },
];

export default function MainAboutPage1() {
  notFound();
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar amw-support-nav">
            <HeaderQuest />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <section
                className="page-section bg-gray-light-1 amw-fixed-bg-host amw-light-hero"
              >
                <>
                  <>
                    <ImageBackground src="/assets/tww-assets/amw-images/Patio_pavers_installed_in_backyard_202605131833_2.jpeg" alt="" fixed priority />
                    <div className="container position-relative pt-50">
                      {/* Section Content */}
                      <div className="text-center">
                        <div className="row">
                          {/* Page Title */}
                          <div className="col-12">
                            <h1 className="hs-title-1 mb-0 mx-auto" style={{ maxWidth: 960 }}>
                              <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                              >
                                Contact us. We&rsquo;re easy to reach.
                              </span>
                            </h1>
                          </div>
                          {/* End Page Title */}
                        </div>
                      </div>
                      {/* End Section Content */}
                    </div>
                  </>
                </>
              </section>
            </section>
            <>
              {/* Contact Section */}
              <section className="page-section pt-0 amw-light-hero-next amw-support-contact-section" id="contact">
                <AMWContactSection
                  introTitle="Questions, scheduling, or follow-up — we've got you."
                  introText="Whether you have a question about materials, want to check on scheduling, or need to follow up on work already done — send us a message. We respond to every inquiry directly."
                  formDisclaimer="All fields required. We'll follow up with you directly."
                  embedForm
                  formKey="contact"
                  formPlaceholderTitle="Get in Touch"
                  formPlaceholderText="Questions about a project, an existing job, or just want to talk through your options? Send us a message and we'll be in touch."
                  formPlaceholderFields={[
                    "Name",
                    "Phone",
                    "Email",
                    "Project address",
                    "Reason for reaching out",
                    "Message",
                  ]}
                />
              </section>
              {/* End Contact Section */}
              {/* FAQ Section */}
              <section className="page-section z-index-1 amw-faq-section">
                <div className="container position-relative">
                  <div className="row position-relative">
                    <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                      <h3 className="section-title mb-30">
                        Frequently Asked Questions
                      </h3>
                      <p className="text-gray mb-0">
                        Good hardscape starts before anything gets installed.
                        These answers cover the details that affect cost,
                        durability, drainage, access, base prep, material
                        choices, and what AMW needs to understand the job
                        clearly.
                      </p>
                      <p className="text-gray mb-0 mt-20">
                        If you want the work done right, look past the finished
                        surface. The layout, excavation depth, compacted base,
                        slope, edge restraints, joints, and cleanup plan are
                        what keep a yard looking clean through Arizona heat,
                        runoff, and everyday use.
                      </p>
                    </div>
                    <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                      {/* Accordion */}
                      <Faq faqData={supportFaqs} />
                      {/* End Accordion */}
                    </div>
                  </div>
                </div>
              </section>
            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
