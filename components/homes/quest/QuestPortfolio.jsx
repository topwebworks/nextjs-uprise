"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import portfolio, { categories } from "@/data/quest-portfolio";
import "@/components/homes/quest/QuestPortfolio.module.css";

function ProjectModal({ project, onClose }) {
  const [idx, setIdx] = useState(0);
  const slide = project.slides[idx];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => Math.min(i + 1, project.slides.length - 1));
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, project.slides.length]);

  return (
    <div className="qp-lightbox" onClick={onClose}>
      <div className="qp-lightbox-inner" onClick={(e) => e.stopPropagation()}>

        <button className="qp-lightbox-close" onClick={onClose} aria-label="Close">
          <i className="mi-close" />
        </button>

        {/* Desktop: image left, text right. Mobile: image top, text bottom */}
        <div className="qp-lightbox-stage">

          {/* Image column */}
          <div className="qp-lightbox-img-col">
            <div className="qp-lightbox-img-wrap">
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.heading}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 65vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Combined nav strip — arrow · thumbnails · arrow */}
            {project.slides.length > 1 && (
              <div className="qp-lightbox-nav-strip">
                <button
                  className="qp-lightbox-arrow"
                  onClick={() => setIdx((i) => Math.max(i - 1, 0))}
                  disabled={idx === 0}
                  aria-label="Previous"
                >
                  <i className="mi-arrow-left" />
                </button>
                <div className="qp-lightbox-thumbs">
                  {project.slides.map((s, i) => (
                    <button
                      key={i}
                      className={`qp-lightbox-thumb${idx === i ? " active" : ""}`}
                      onClick={() => setIdx(i)}
                      aria-label={`Photo ${i + 1}`}
                    >
                      <Image src={s.src} alt="" fill sizes="80px" style={{ objectFit: "cover" }} />
                    </button>
                  ))}
                </div>
                <button
                  className="qp-lightbox-arrow"
                  onClick={() => setIdx((i) => Math.min(i + 1, project.slides.length - 1))}
                  disabled={idx === project.slides.length - 1}
                  aria-label="Next"
                >
                  <i className="mi-arrow-right" />
                </button>
              </div>
            )}
          </div>

          {/* Text column — changes with each slide */}
          <div className="qp-lightbox-text-col">
            <p className="qp-lightbox-category">{project.category} &nbsp;&middot;&nbsp; {project.location}</p>
            <h3 className="qp-lightbox-project-title">{project.title}</h3>
            <div className="qp-lightbox-divider" />
            <h4 className="qp-lightbox-slide-heading" key={`h-${idx}`}>{slide.heading}</h4>
            <p className="qp-lightbox-desc" key={`d-${idx}`}>{slide.description}</p>
            <ul className="qp-lightbox-highlights" key={`l-${idx}`}>
              {slide.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="qp-lightbox-cta">
              <a href="/#contact-form" className="qp-lightbox-btn" onClick={onClose}>
                Start Your Project
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function QuestPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [displayed, setDisplayed] = useState("All");
  const [animating, setAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => { setPortalRoot(document.body); }, []);

  const visible = displayed === "All" ? portfolio : portfolio.filter((p) => p.category === displayed);

  function handleFilter(f) {
    if (f === activeFilter) return;
    setAnimating(true);
    setTimeout(() => {
      setDisplayed(f);
      setActiveFilter(f);
      setAnimating(false);
    }, 180);
  }

  return (
    <section className="page-section pt-80 pt-sm-60" style={{ paddingBottom: "50px" }} id="portfolio">
      <div className="container position-relative">

        <div className="row mb-20">
          <div className="col-md-8">
            <h2 className="section-title mb-0">Project Portfolio</h2>
          </div>
          <div className="col-md-4 d-flex align-items-end justify-content-md-end mt-20 mt-md-0">
            <a href="/#contact-form" className="btn btn-mod btn-large btn-round btn-hover-anim local-scroll">
              <span>Start Your Project</span>
            </a>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="mb-40 wow fadeInUp" data-wow-delay="0.1s">
          <div className="works-filter clearlist">
            {categories.map((c) => (
              <a
                key={c}
                href="#"
                className={activeFilter === c ? "active" : ""}
                onClick={(e) => { e.preventDefault(); handleFilter(c); }}
              >
                {c}
              </a>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div
          className={`row g-4 quest-portfolio-grid${!animating ? " quest-portfolio-animate" : ""}`}
          style={{ opacity: animating ? 0 : 1, transition: "opacity 0.18s ease" }}
        >
          {visible.map((project, i) => (
            <div key={project.id} className="col-12 col-sm-6 col-lg-4">
              <button
                type="button"
                className="quest-project-card"
                onClick={() => setSelectedProject(project)}
                aria-label={`View ${project.title}`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="quest-project-card-img">
                  <Image
                    src={project.cover || project.slides[0].src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="quest-project-card-overlay">
                    <span className="quest-project-view">View Project <i className="mi-arrow-right" /></span>
                  </div>
                </div>
                <div className="quest-project-card-info">
                  <span className="quest-project-category">{project.category}</span>
                  <h3 className="quest-project-title">{project.title}</h3>
                  <span className="quest-project-location"><i className="mi-location" /> {project.location}</span>
                </div>
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Modal portal */}
      {selectedProject && portalRoot && createPortal(
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />,
        portalRoot
      )}
    </section>
  );
}
