import Link from "next/link";
import { DestinationCard } from "../components/DestinationCard";
import { ExperienceHighlight } from "../components/ExperienceHighlight";
import { ItineraryShowcase } from "../components/ItineraryShowcase";
import { TravelTipCard } from "../components/TravelTipCard";
import { StatHighlight } from "../components/StatHighlight";
import { featuredDestinations } from "../data/destinations";
import {
  curatedItineraries,
  seasonalHighlights,
  travelStats,
  travelTips
} from "../data/highlights";

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill">Atlas Journeys Travel Guide</div>
            <h1>
              Navigate the world with curated itineraries, seasonal inspiration, and
              culture-rich encounters.
            </h1>
            <p>
              We combine field research, local storyteller insight, and data-backed
              planning to deliver journeys that feel personal, purposeful, and
              effortlessly orchestrated.
            </p>

            <div className="hero-actions">
              <Link className="cta-button" href="#destinations">
                Explore featured destinations
              </Link>
              <Link className="secondary-button" href="#itineraries">
                Browse curated itineraries
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-card">
              <h3>Journey DNA</h3>
              <ul>
                <li>
                  <strong>Local intelligence:</strong> Insight gathered from on-the-ground
                  tastemakers in 28 cities.
                </li>
                <li>
                  <strong>Human + AI planning:</strong> Smart logistics with handcrafted
                  storytelling.
                </li>
                <li>
                  <strong>Purposeful pacing:</strong> Balanced tempo to savor moments, not
                  rush through them.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="destinations">
        <div className="container">
          <header className="section-header">
            <span className="section-kicker">Flagship Guides</span>
            <h2 className="section-title">Destinations with depth and dimension</h2>
            <p className="section-description">
              Handpicked cities where culture, cuisine, and community collide. Each guide
              includes daily plans, local experiences, travel logistics, and actionable
              tips.
            </p>
          </header>

          <div className="grid grid-3">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="seasonal">
        <div className="container">
          <header className="section-header">
            <span className="section-kicker">Seasonal Calendar</span>
            <h2 className="section-title">Time your trip for peak wonder</h2>
            <p className="section-description">
              Align with nature’s rhythm, festival energy, or ideal climate windows. Our
              seasonal picks highlight the journeys that shine right now.
            </p>
          </header>

          <div className="grid grid-3">
            {seasonalHighlights.map((highlight) => (
              <ExperienceHighlight key={highlight.id} highlight={highlight} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="itineraries">
        <div className="container">
          <header className="section-header">
            <span className="section-kicker">Curated Itineraries</span>
            <h2 className="section-title">Blueprints engineered for resonance</h2>
            <p className="section-description">
              Choose the pacing that fits your travel style. Each itinerary blends
              signature experiences with open pockets for spontaneous discoveries.
            </p>
          </header>

          <div className="grid grid-3">
            {curatedItineraries.map((itinerary) => (
              <ItineraryShowcase key={itinerary.id} itinerary={itinerary} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted stats-section">
        <div className="container stats-container">
          <header className="section-header">
            <span className="section-kicker">Why travelers choose us</span>
            <h2 className="section-title">
              Trusted intelligence, purposeful partnerships, measurable impact
            </h2>
          </header>

          <div className="stats-grid">
            {travelStats.map((stat) => (
              <StatHighlight key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="tips">
        <div className="container">
          <header className="section-header">
            <span className="section-kicker">Travel Playbook</span>
            <h2 className="section-title">Tips to elevate every itinerary</h2>
            <p className="section-description">
              From packing strategies to dining reservations, these quick wins keep your
              journey seamless and story-worthy.
            </p>
          </header>

          <div className="grid grid-3">
            {travelTips.map((tip) => (
              <TravelTipCard key={tip.title} tip={tip} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="newsletter">
        <div className="container">
          <div className="cta-banner">
            <h3>Need a tailored travel blueprint?</h3>
            <p>
              Share your travel style and aspirations—our concierge team will craft a
              bespoke itinerary within 48 hours, complete with vetted stays, dining,
              and immersive encounters.
            </p>
            <form className="cta-actions" aria-label="Request a bespoke itinerary">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
              />
              <label className="sr-only" htmlFor="travel-style">
                Preferred travel style
              </label>
              <input
                type="text"
                id="travel-style"
                name="travel-style"
                placeholder="Slow, adventurous, family-friendly..."
              />
              <button type="submit" className="cta-button">
                Begin my journey
              </button>
            </form>
            <small>We respond personally—no generic travel blasts.</small>
          </div>
        </div>
      </section>
    </div>
  );
}
