import Image from "next/image";
import Link from "next/link";

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
      <style>{`
        .amw-about-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
          border-radius: 8px;
          overflow: hidden;
        }
        @media (max-width: 991px) {
          .amw-about-wrap { grid-template-columns: 1fr; }
          .amw-about-img { min-height: 320px; }
        }
        .amw-about-img {
          position: relative;
          overflow: hidden;
          filter: contrast(1.15) saturate(1.35) brightness(1.08);
        }
        .amw-about-content {
          background: #f7f7f5;
          padding: 52px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 575px) {
          .amw-about-content { padding-left: 16px; padding-right: 16px; }
          .amw-about-claims li { font-size: 13px; }
          .amw-about-content .btn { width: 100%; text-align: center; }
        }
        .amw-about-claims {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
        }
        .amw-about-claims li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 15px;
          line-height: 1.5;
          color: #444;
          padding: 7px 0;
          border-bottom: 1px solid #e8e8e5;
        }
        .amw-about-claims li:last-child { border-bottom: none; }
        .amw-btn-secondary { background: transparent; color: #111; border-color: #111; }
        .amw-btn-secondary.btn-hover-anim:before { background: #e8e8e6; }
        .amw-btn-secondary.btn-hover-anim:hover { border-color: #e8e8e6; color: #111; }
        .amw-about-claims li i {
          color: #2a7a2a;
          font-size: 17px;
          margin-top: 1px;
          flex-shrink: 0;
        }
      `}</style>

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
            style={{ objectFit: "cover", objectPosition: "center 70%" }}
          />
        </div>
        <div className="amw-about-content">
          <h2 className="section-title mb-20 wow fadeInUp" data-wow-delay="0.2s">
            Who We Are
          </h2>
          <p className="text-gray mb-28 wow fadeInUp" data-wow-delay="0.3s" style={{ fontSize: 16, lineHeight: 1.75 }}>
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
