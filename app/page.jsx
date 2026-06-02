import Footer1 from "@/components/footers/Footer1";
import HeaderAMW from "@/components/headers/HeaderAMW";
import AMWHome from "@/components/homes/amw/AMWHome";
import AMWHero from "@/components/homes/amw/AMWHero";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Hardscape Contractor San Tan Valley AZ | Pavers, Concrete & Turf | AMW Hardscape Solutions",
  description:
    "Licensed hardscape contractor serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler, Apache Junction & the East Valley. Paver installation, concrete, artificial turf, decorative rock & driveway work. ROC #359843. Free estimates — call (480) 721-6561.",
  path: "/",
});

export default function Home() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar light-content dark" data-light-nav="true">
          <HeaderAMW />
        </nav>
        <main id="main">
          <div className="home-section relative scrollSpysection" id="home">
            <AMWHero />
          </div>
          <AMWHome />
        </main>
        <Footer1 />
      </div>
    </div>
  );
}
