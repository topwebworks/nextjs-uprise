"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import "@/components/common/NextImageLightbox.module.css";

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
