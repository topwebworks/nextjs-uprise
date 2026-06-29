import Image from "next/image";
import Link from "next/link";
import "@/components/homes/tww/TWWAbout.module.css";

const claims = [
  "AZ ROC Licensed & Insured — ROC 340539 & ROC 347588",
  "Pool repair, resurfacing & renovation specialists",
  "Deck repair & resurfacing — structural integrity & aesthetics",
  "Equipment diagnosis, install & repair — pumps, heaters & filtration",
  "Clean jobsites, clear communication & no surprise charges",
  "Written scope of work provided before any project begins",
  "One team accountable from first call to final inspection",
  "Serving Gilbert, Mesa, Tempe, Chandler, Ahwatukee, Paradise Valley & Scottsdale",
];

export default function TWWAbout() {
  return (
    <>
      <div className="amw-about-wrap">
        <div
          className="amw-about-img wow fadeIn"
          data-wow-delay="0.1s"
          data-wow-duration="1.2s"
          role="img"
          aria-label="Uprise Pools — East Valley, AZ"
        >
          <Image
            src="/assets/tww-assets/client-images/1.jpg"
            alt=""
            fill
            sizes="(max-width: 991px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="amw-about-content">
          <h2 className="section-title mb-20 wow fadeInUp" data-wow-delay="0.2s">
            Who We Are
          </h2>
          <p className="text-gray mb-28 wow fadeInUp amw-about-intro" data-wow-delay="0.3s">
            Uprise Pools was founded in 2022 by Shane — a hands-on pool professional who got tired of watching homeowners get overcharged for misdiagnosed repairs. We built the company around one principle: diagnose it correctly, fix it right the first time, and be straight with you about what it takes to get there.
          </p>
          <p className="text-gray mb-28 wow fadeInUp amw-about-intro" data-wow-delay="0.35s">
            Whether your pool needs a crack repaired, a full resurface, new tile, a deck replacement, or equipment rebuilt — every job gets the same level of attention. Shane is on-site at every stage, assessing the problem, scoping the work, and verifying the result before we call it done.
          </p>
          <ul className="amw-about-claims wow fadeInUp" data-wow-delay="0.4s">
            {claims.map((c, i) => (
              <li key={i}>
                <i className="mi-check" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
          <div className="d-flex flex-wrap gap-3 wow fadeInUp" data-wow-delay="0.5s">
            <Link href="#contact-form" className="btn btn-mod btn-large btn-round btn-hover-anim">
              <span>Get a Free Estimate</span>
            </Link>
            <Link href="/about" className="btn btn-mod btn-border btn-large btn-round btn-hover-anim amw-btn-secondary">
              <span>About Us</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
