import "swiper/css";
import "../public/assets/css/styles.css";

import { DM_Sans, Poppins, Outfit, Playfair_Display } from "next/font/google";

import ClientInit from "@/components/ClientInit";
import GHLScripts from "@/components/ghl/GHLScripts";
import GTMScript from "@/components/analytics/GTMScript";
import GTMNoScript from "@/components/analytics/GTMNoScript";
import CookieBanner from "@/components/cookie/CookieBanner";
import CookieSettingsTrigger from "@/components/cookie/CookieSettingsTrigger";
import TopBar from "@/components/TopBar";
import JsonLd from "@/components/seo/JsonLd";
import site from "@/data/site";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], display: "swap", variable: "--font-dm-sans" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap", variable: "--font-poppins" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], display: "swap", variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--font-playfair" });

export const metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: "Licensed hardscape contractor serving the surrounding service area. Pavers, concrete, artificial turf, decorative rock, demolition & driveway work. License #000000. Free estimates.",
  metadataBase: new URL(site.url),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`no-mobile no-touch ${dmSans.variable} ${poppins.variable} ${outfit.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <head>
        <JsonLd />
      </head>
      <body className="appear-animate body">
        <TopBar />
        <GTMNoScript />
        <ClientInit />
        <GHLScripts />
        <GTMScript />
        <CookieBanner />
        <CookieSettingsTrigger />
        {children}
      </body>
    </html>
  );
}
