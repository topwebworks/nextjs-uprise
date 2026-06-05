import Link from "next/link";
import Footer1 from "@/components/footers/Footer1";
import HeaderQuest from "@/components/headers/HeaderQuest";
import ImageBackground from "@/components/common/ImageBackground";
import site from "@/data/site";

export const metadata = {
  title: `Page Not Found | ${site.name}`,
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
          <HeaderQuest />
        </nav>

        <main id="main">
          <section
            className="home-section bg-dark-1 bg-dark-alpha-60 light-content amw-fixed-bg-host"
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
            }}
            id="home"
          >
            <ImageBackground src="/assets/tww-assets/amw-images/IMG_4281.HEIC.jpg" alt="" fixed priority />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 col-lg-6 text-center">
                  <div className="wow fadeInUp" data-wow-delay=".1s">
                    <h1 className="hs-title-12 mb-20">404</h1>
                  </div>
                  <div className="mb-40 wow fadeInUp" data-wow-delay=".2s">
                    <p className="section-descr mb-10">
                      That page doesn&rsquo;t exist.
                    </p>
                    <p className="section-descr" style={{ fontSize: "0.9em", opacity: 0.75 }}>
                      Head back home or give us a call.
                    </p>
                  </div>
                  <div className="d-flex flex-column flex-sm-row flex-wrap gap-3 justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <Link
                      href="/"
                      className="btn btn-mod btn-w btn-round btn-large btn-hover-anim"
                    >
                      <span>Back to Home</span>
                    </Link>
                    <a
                      href={`tel:${site.phone}`}
                      className="btn btn-mod btn-border-w btn-round btn-large btn-hover-anim"
                    >
                      <span>Call (480) 721-6561</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer1 />
      </div>
    </div>
  );
}
