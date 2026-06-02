import "swiper/css";
import "../public/assets/css/styles.css";

import { DM_Sans } from "next/font/google";

import ClientInit from "@/components/ClientInit";
import GHLScripts from "@/components/ghl/GHLScripts";
import GTMScript from "@/components/analytics/GTMScript";
import GTMNoScript from "@/components/analytics/GTMNoScript";
import CookieBanner from "@/components/cookie/CookieBanner";
import CookieSettingsTrigger from "@/components/cookie/CookieSettingsTrigger";
import JsonLd from "@/components/seo/JsonLd";
import site from "@/data/site";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], display: "swap", variable: "--font-dm-sans" });

export const metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: "Licensed hardscape contractor serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler, Apache Junction & the East Valley. Pavers, concrete, artificial turf, decorative rock, demolition & driveway work. ROC #359843. Free estimates.",
  metadataBase: new URL(site.url),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`no-mobile no-touch ${dmSans.variable}`} data-scroll-behavior="smooth">
      <head>
        <JsonLd />
      </head>
      <body className="appear-animate body">
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
