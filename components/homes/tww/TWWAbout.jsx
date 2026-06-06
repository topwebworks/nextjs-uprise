import Image from "next/image";
import Link from "next/link";
import "@/components/homes/tww/TWWAbout.module.css";

const claims = [
  "AZ Licensed & Insured — License #000000",
  "Structural pool shell engineered for Arizona soil & heat expansion",
  "Authorized Gator finish installer — one of Arizona's premier pool finish brands",
  "Seamless beveled coping corners — the detail that separates craft from standard",
  "Proper pitch, drainage & base prep on every hardscape install",
  "Equipment sized correctly — pumps, heaters & filtration matched to your pool",
  "Clean jobsites, clear communication & no surprise charges",
  "Written scope of work provided before any project begins",
  "Serving Client City, Gilbert, Mesa, Chandler & the Service Area",
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
          aria-label="Client Business Name custom pool build — City, ST"
        >
          <Image
            src="/assets/tww-assets/tww-images/architectual_photo_of_arizona_house_202605131833_2.jpeg"
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
            Client Business Name is owner-operated, which means the person overseeing your build has an eye for the details most contractors never notice — the way a beveled coping corner meets, whether the waterline tile runs true, how the finish looks in different light. That standard of care doesn't come from a checklist. It comes from someone who genuinely cares about the craft.
          </p>
          <p className="text-gray mb-28 wow fadeInUp amw-about-intro" data-wow-delay="0.35s">
            Based in Client City, we handle every phase in-house — design, excavation, plumbing, structural shell, decking, tile, coping, and finish. One team, one standard, accountable from permit to first swim.
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
