import Footer1 from "@/components/footers/Footer1";
import HeaderTWW from "@/components/headers/HeaderTWW";
import TWWHero2 from "@/components/homes/tww-alt/TWWHero2";
import TWWPortfolio from "@/components/homes/tww-alt/TWWPortfolio";
import TWWHome from "@/components/homes/tww/TWWHome";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Client Business Name | City, ST",
  description:
    "Client Business Name provides professional services in City, ST. Contact us today for a free estimate.",
  path: "/",
});

export default function Home() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar light-content dark" data-light-nav="true">
          <HeaderTWW />
        </nav>
        <main id="main">
          <div className="home-section relative scrollSpysection" id="home">
            <TWWHero2 />
          </div>
          <TWWPortfolio />
          <TWWHome />
        </main>
        <Footer1 />
      </div>
    </div>
  );
}
