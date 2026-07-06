import { Link } from "react-router-dom";

type YibyoCalloutProps = {
  title: string;
  subtitle: string;
  image: string;
  to?: string;
};

export default function YibyoCallout({
  title,
  subtitle,
  image,
  to,
}: YibyoCalloutProps) {
  return (
    <article className="yibyo-callout">
      <img className="yibyo-callout-image" src={image} alt="" />
      <div className="yibyo-callout-copy">
        <h2>
          {to ? (
            <Link className="yibyo-callout-title-link" to={to}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p>{subtitle}</p>
      </div>
    </article>
  );
}
