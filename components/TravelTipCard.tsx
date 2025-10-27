import { TravelTip } from "../data/highlights";

type TravelTipCardProps = {
  tip: TravelTip;
};

export function TravelTipCard({ tip }: TravelTipCardProps) {
  return (
    <article className="tip-card">
      <span className="tip-category">{tip.category}</span>
      <h3>{tip.title}</h3>
      <p>{tip.body}</p>
      <button type="button" className="secondary-button secondary-light">
        {tip.action}
      </button>
    </article>
  );
}
