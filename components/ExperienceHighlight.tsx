import Image from "next/image";
import { SeasonalHighlight } from "../data/highlights";

type ExperienceHighlightProps = {
  highlight: SeasonalHighlight;
};

export function ExperienceHighlight({ highlight }: ExperienceHighlightProps) {
  return (
    <article className="highlight-card">
      <div className="highlight-image">
        <Image
          src={highlight.image}
          alt={highlight.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="highlight-season">{highlight.season}</span>
      </div>

      <div className="highlight-body">
        <h3>{highlight.title}</h3>
        <p>{highlight.description}</p>

        <div className="highlight-meta">
          <span className="pill">Ideal for {highlight.idealFor}</span>
        </div>

        <ul>
          {highlight.experiences.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
