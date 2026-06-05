"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "@/components/homes/amw/AMWContact.module.css";

const cities = [
  { name: "Queen Creek",     q: "Queen+Creek,+AZ" },
  { name: "San Tan Valley",  q: "San+Tan+Valley,+AZ" },
  { name: "Gilbert",         q: "Gilbert,+AZ" },
  { name: "Mesa",            q: "Mesa,+AZ" },
  { name: "Chandler",        q: "Chandler,+AZ" },
  { name: "Scottsdale",      q: "Scottsdale,+AZ" },
];

export default function AMWServiceAreaLinks() {
  const [activeCity, setActiveCity] = useState(null);
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (!activeCity) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setActiveCity(null); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeCity]);

  return (
    <>
      <div className="amw-service-cities">
        {cities.map(({ name, q }) => (
          <button
            key={name}
            className="amw-city-link"
            onClick={() => setActiveCity({ name, q })}
          >
            {name}
          </button>
        ))}
      </div>

      {activeCity && portalRoot && createPortal(
        <div className="amw-city-modal-backdrop" onClick={() => setActiveCity(null)}>
          <div className="amw-city-modal" onClick={(e) => e.stopPropagation()}>
            <div className="amw-city-modal-header">
              <span>{activeCity.name}, AZ</span>
              <button
                className="amw-city-modal-close"
                onClick={() => setActiveCity(null)}
                aria-label="Close map"
              >
                ×
              </button>
            </div>
            <iframe
              src={`https://maps.google.com/maps?q=${activeCity.q}&output=embed&z=13`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${activeCity.name} AZ map`}
            />
          </div>
        </div>,
        portalRoot
      )}
    </>
  );
}
