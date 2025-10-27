"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#destinations", label: "Destinations" },
  { href: "#seasonal", label: "Seasonal Picks" },
  { href: "#itineraries", label: "Itineraries" },
  { href: "#tips", label: "Travel Tips" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-container">
        <div className="nav-brand">
          <Link href="/">
            <span className="brand-mark">Atlas Journeys</span>
          </Link>
          <span className="brand-tagline">Immersive Travel Intelligence</span>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${isOpen ? "is-open" : ""}`} aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="pill" href="#newsletter" onClick={() => setIsOpen(false)}>
            Plan a custom journey
          </Link>
        </nav>
      </div>
    </header>
  );
}
