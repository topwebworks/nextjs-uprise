"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function NextImageLightbox({ images, activeIndex, onChange, onClose }) {
  const [portalRoot, setPortalRoot] = useState(null);
  const image = Number.isInteger(activeIndex) ? images[activeIndex] : null;
  const hasMultiple = images.length > 1;

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (!image) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
      if (hasMultiple && event.key === "ArrowLeft") {
        onChange((activeIndex - 1 + images.length) % images.length);
      }
      if (hasMultiple && event.key === "ArrowRight") {
        onChange((activeIndex + 1) % images.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, hasMultiple, image, images.length, onChange, onClose]);

  if (!image || !portalRoot) return null;

  return createPortal(
    <>
      <style>{`
        .amw-lightbox {
          position: fixed;
          inset: 0;
          z-index: 2147483000;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          background: rgba(0, 0, 0, 0.9);
        }
        .amw-lightbox-figure {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .amw-lightbox-image {
          display: block;
          width: auto;
          height: auto;
          max-width: min(92vw, 1200px);
          max-height: 82vh;
          object-fit: contain;
        }
        .amw-lightbox-caption {
          color: #fff;
          font-size: 14px;
          letter-spacing: 0.04em;
          text-align: center;
          text-transform: uppercase;
        }
        .amw-lightbox-caption span {
          display: block;
          margin-top: 3px;
          font-size: 11px;
          letter-spacing: 0.08em;
          opacity: 0.72;
        }
        .amw-lightbox-button {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .amw-lightbox-button:hover,
        .amw-lightbox-button:focus-visible {
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.7);
        }
        .amw-lightbox-close {
          top: 22px;
          right: 22px;
          padding: 11px 16px;
        }
        .amw-lightbox-prev,
        .amw-lightbox-next {
          top: 50%;
          transform: translateY(-50%);
          padding: 14px 18px;
        }
        .amw-lightbox-prev { left: 22px; }
        .amw-lightbox-next { right: 22px; }
        @media (max-width: 767px) {
          .amw-lightbox {
            padding: 18px;
          }
          .amw-lightbox-image {
            max-width: 94vw;
            max-height: 76vh;
          }
          .amw-lightbox-close {
            top: 12px;
            right: 12px;
          }
          .amw-lightbox-prev,
          .amw-lightbox-next {
            top: auto;
            bottom: 16px;
            transform: none;
          }
        }
      `}</style>

      <div className="amw-lightbox" role="dialog" aria-modal="true" onClick={onClose}>
        <button type="button" className="amw-lightbox-button amw-lightbox-close" onClick={onClose}>
          Close
        </button>

        {hasMultiple && (
          <button
            type="button"
            className="amw-lightbox-button amw-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              onChange((activeIndex - 1 + images.length) % images.length);
            }}
          >
            Prev
          </button>
        )}

        <figure className="amw-lightbox-figure" onClick={(event) => event.stopPropagation()}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1200px) 92vw, 1200px"
            className="amw-lightbox-image"
          />
          {(image.title || image.location) && (
            <figcaption className="amw-lightbox-caption">
              {image.title}
              {image.location && <span>{image.location}</span>}
            </figcaption>
          )}
        </figure>

        {hasMultiple && (
          <button
            type="button"
            className="amw-lightbox-button amw-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              onChange((activeIndex + 1) % images.length);
            }}
          >
            Next
          </button>
        )}
      </div>
    </>,
    portalRoot
  );
}
