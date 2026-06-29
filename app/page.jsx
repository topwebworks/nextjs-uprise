import Footer1 from "@/components/footers/Footer1";
import HeaderTWW from "@/components/headers/HeaderTWW";
import TWWHero2 from "@/components/homes/tww-alt/TWWHero2";
import TWWPortfolio from "@/components/homes/tww-alt/TWWPortfolio";
import TWWHome from "@/components/homes/tww/TWWHome";
import TWWProtoBanner from "@/components/common/TWWProtoBanner";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Uprise Pools | Pool Repair & Resurfacing — Gilbert, AZ",
  description:
    "Uprise Pools specializes in pool repair, resurfacing, deck restoration, and equipment repair across Gilbert, Mesa, Tempe, Chandler, and Scottsdale, AZ. Owner-operated. Free estimates.",
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
        {/* <TWWProtoBanner /> */}
      </div>
    </div>
  );
}
