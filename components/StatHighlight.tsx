import { TravelStat } from "../data/highlights";

type StatHighlightProps = {
  stat: TravelStat;
};

export function StatHighlight({ stat }: StatHighlightProps) {
  return (
    <article className="stat-card">
      <h3 className="stat-value">{stat.value}</h3>
      <p className="stat-label">{stat.label}</p>
      <p className="stat-context">{stat.context}</p>
    </article>
  );
}
