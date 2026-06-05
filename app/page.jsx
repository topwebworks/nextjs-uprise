import Footer1 from "@/components/footers/Footer1";
import HeaderQuest from "@/components/headers/HeaderQuest";
import QuestHero from "@/components/homes/quest/QuestHero";
import QuestPortfolio from "@/components/homes/quest/QuestPortfolio";
import AMWHome from "@/components/homes/amw/AMWHome";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Custom Pools, Hardscape & Outdoor Living | Quest Pool Co. | Queen Creek AZ",
  description:
    "Quest Pool Co. builds luxury custom pools, hardscape, and outdoor living spaces across Arizona's East Valley. Precision craftsmanship, quality materials. ROC #338848. Free estimates — call (480) 477-8832.",
  path: "/",
});

export default function Home() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar light-content dark" data-light-nav="true">
          <HeaderQuest />
        </nav>
        <main id="main">
          <div className="home-section relative scrollSpysection" id="home">
            <QuestHero />
          </div>
          <QuestPortfolio />
          <AMWHome />
        </main>
        <Footer1 />
      </div>
    </div>
  );
}
