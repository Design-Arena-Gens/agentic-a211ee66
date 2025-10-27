import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <h1>Destination currently off the map</h1>
        <p>
          The guide you were seeking is still in the research phase. Explore our
          flagship destinations or reach out for a bespoke travel blueprint.
        </p>
        <div className="hero-actions">
          <Link className="cta-button" href="/">
            Return to home base
          </Link>
          <Link className="secondary-button" href="#newsletter">
            Request a custom guide
          </Link>
        </div>
      </div>
    </section>
  );
}
