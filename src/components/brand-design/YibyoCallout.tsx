type YibyoCalloutProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function YibyoCallout({ title, subtitle, image }: YibyoCalloutProps) {
  return (
    <article className="yibyo-callout">
      <img className="yibyo-callout-image" src={image} alt="" />
      <div className="yibyo-callout-copy">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </article>
  );
}
