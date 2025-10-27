import Link from "next/link";
import { CuratedItinerary } from "../data/highlights";

type ItineraryShowcaseProps = {
  itinerary: CuratedItinerary;
};

const tempoCopy: Record<CuratedItinerary["tempo"], string> = {
  slow: "Slow travel",
  balanced: "Balanced pacing",
  fast: "High-energy"
};

export function ItineraryShowcase({ itinerary }: ItineraryShowcaseProps) {
  return (
    <article className="itinerary-card">
      <header>
        <span className="pill">{tempoCopy[itinerary.tempo]}</span>
        <h3>{itinerary.title}</h3>
        <p className="itinerary-subhead">
          {itinerary.duration} • {itinerary.focus}
        </p>
      </header>

      <p className="itinerary-summary">{itinerary.summary}</p>

      <ul className="itinerary-highlights">
        {itinerary.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <footer>
        <Link href={`#destinations`} className="cta-link">
          Anchor: {itinerary.anchorDestination}
        </Link>
      </footer>
    </article>
  );
}
