import Image from "next/image";
import Link from "next/link";
import { DestinationGuide } from "../data/destinations";

type DestinationCardProps = {
  destination: DestinationGuide;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  const bestSeason = destination.bestTime.split(".")[0];
  const climateSummary = destination.climate.split(".")[0];

  return (
    <article className="destination-card">
      <div className="destination-image">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
        <span className="destination-badge">{destination.region}</span>
      </div>

      <div className="destination-body">
        <h3>{destination.name}</h3>
        <p className="destination-tagline">{destination.tagline}</p>

        <ul className="tag-list">
          <li className="tag">Best season: {bestSeason}</li>
          <li className="tag">Climate: {climateSummary}</li>
          <li className="tag">Airport: {destination.airport.split("|")[0].trim()}</li>
        </ul>

        <p className="destination-description">{destination.description}</p>

        <ul className="destination-highlights">
          {destination.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <Link href={`/destinations/${destination.slug}`} className="cta-link">
          See full guide →
        </Link>
      </div>
    </article>
  );
}
