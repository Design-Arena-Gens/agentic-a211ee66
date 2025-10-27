import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  destinations,
  getDestinationBySlug
} from "../../../data/destinations";

type DestinationPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export function generateMetadata({ params }: DestinationPageProps): Metadata {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    return {
      title: "Destination not found | Atlas Journeys",
      description: "The requested destination could not be located."
    };
  }

  return {
    title: `${destination.name} Travel Guide | Atlas Journeys`,
    description: destination.tagline,
    openGraph: {
      title: `${destination.name} Travel Guide | Atlas Journeys`,
      description: destination.description,
      images: [
        {
          url: destination.heroImage,
          width: 1200,
          height: 800,
          alt: destination.name
        }
      ]
    }
  };
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }

  const current = destination;

  return (
    <div className="destination-page">
      <section className="destination-hero">
        <div className="hero-overlay" />
        <Image
          src={current.heroImage}
          alt={current.name}
          fill
          priority
          sizes="100vw"
        />
        <div className="destination-hero-content">
          <span className="pill">{current.region}</span>
          <h1>{current.name}</h1>
          <p>{current.tagline}</p>
          <div className="hero-meta">
            <div>
              <span>Best time</span>
              <strong>{current.bestTime}</strong>
            </div>
            <div>
              <span>Climate</span>
              <strong>{current.climate}</strong>
            </div>
            <div>
              <span>Gateway</span>
              <strong>{current.airport}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="destination-section">
        <div className="container destination-body">
          <aside className="destination-sidebar">
            <h2>Travel Essentials</h2>
            <ul>
              <li>
                <strong>Time zone:</strong> {current.timeZone}
              </li>
              <li>
                <strong>Currency:</strong> {current.currency}
              </li>
              <li>
                <strong>Languages:</strong> {current.languages.join(", ")}
              </li>
            </ul>

            <h3>Insider Tips</h3>
            <ul className="tips-list">
              {current.insiderTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>

            <Link href="#daily-plan" className="cta-button">
              Jump to daily plan
            </Link>
          </aside>

          <article className="destination-main">
            <section>
              <h2>Why you'll love {current.name}</h2>
              <p>{current.description}</p>

              <h3>Signature Highlights</h3>
              <ul className="destination-highlights emphasized">
                {current.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3>Immersive Experiences</h3>
              <div className="experiences-grid">
                {current.experiences.map((experience) => (
                  <div key={experience.title} className="experience-card">
                    <h4>{experience.title}</h4>
                    <p>{experience.description}</p>
                    <span>{experience.duration}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="daily-plan">
              <h3>Curated Daily Plan</h3>
              <div className="daily-plan">
                {current.dailyPlan.map((day) => (
                  <div key={day.day} className="daily-card">
                    <span className="daily-label">{day.day}</span>
                    <h4>{day.focus}</h4>
                    <ul>
                      {day.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
