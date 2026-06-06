import Image from "next/image";
import Link from "next/link";
import "@/components/homes/tww/TWWAbout.module.css";
import site from "@/data/site";
import settings from "@/data/settings";

const claims = [
  "Licensed & Insured",
  "Owner-operated — you work directly with the builders",
  "Every detail reviewed by the owners before completion",
  "Premium materials sourced for longevity in the local climate",
  "Transparent pricing — written scope before any work begins",
  `${settings.company.address.city} based, serving the surrounding area`,
];

export default function TWWAbout2() {
  return (
    <>
      <div className="amw-about-wrap">
        <div
          className="amw-about-img wow fadeIn"
          data-wow-delay="0.1s"
          data-wow-duration="1.2s"
          role="img"
          aria-label={`${site.name} — ${site.address.city}, ${site.address.state}`}
        >
          <Image
            src="/assets/tww-assets/tww-images/Suburb_home_with_patio_pool_202605131833_2.jpeg"
            alt=""
            fill
            sizes="(max-width: 991px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="amw-about-content">
          <h2 className="section-title mb-20 wow fadeInUp" data-wow-delay="0.2s">
            Built by People Who Care
          </h2>
          <p className="text-gray mb-28 wow fadeInUp amw-about-intro" data-wow-delay="0.3s">
            {site.name} is owner-operated — which means the people who designed your project are the same people overseeing every phase of the build. No layers. No hand-offs. When you call, you reach someone who knows your job by name.
          </p>
          <p className="text-gray mb-28 wow fadeInUp amw-about-intro" data-wow-delay="0.35s">
            We believe outdoor spaces deserve the same level of care and precision as the homes they surround. Every material choice and finish detail reflects that standard — and we don't sign off until it does.
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
