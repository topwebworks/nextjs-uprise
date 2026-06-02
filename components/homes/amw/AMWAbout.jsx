import Image from "next/image";
import Link from "next/link";
import "@/components/homes/amw/AMWAbout.module.css";

const claims = [
  "Licensed, Bonded & Insured - ROC #359843 / ROC #346552",
  "Experienced crews - quality work on every project",
  "Written scope and honest upfront pricing",
  "High-quality materials built for Arizona heat",
  "Clean, professional work on every site",
  "Reliable scheduling with clear communication",
];

export default function AMWAbout() {
  return (
    <>
      <div className="amw-about-wrap">
        <div
          className="amw-about-img wow fadeIn"
          data-wow-delay="0.1s"
          data-wow-duration="1.2s"
          role="img"
          aria-label="AMW Hardscape Solutions crew - San Tan Valley, AZ"
        >
          <Image
            src="/assets/tww-assets/amw-images/b33260_fa685d2378ca4775b7b1eb4d6619cfcc~mv2.avif"
            alt=""
            fill
            sizes="(max-width: 991px) 100vw, 50vw"
          />
        </div>
        <div className="amw-about-content">
          <h2 className="section-title mb-20 wow fadeInUp" data-wow-delay="0.2s">
            Who We Are
          </h2>
          <p className="text-gray mb-28 wow fadeInUp amw-about-intro" data-wow-delay="0.3s">
            Our mission is simple - deliver high-quality work, honest pricing, and a stress-free experience for every customer. We serve San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler, Apache Junction, Maricopa, and the surrounding East Valley. Most of our business comes from referrals. That says everything.
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
              <span>Free Estimate</span>
            </Link>
            <Link href="/about" className="btn btn-mod btn-border btn-large btn-round btn-hover-anim amw-btn-secondary">
              <span>About AMW</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
