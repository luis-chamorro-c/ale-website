import "./FrunoInfoBox.css";

type FrunoInfoBoxProps = {
  title?: string;
  description: string;
};

const FrunoInfoBox = ({ title, description }: FrunoInfoBoxProps) => {
  return (
    <section className="fruno-info-box-shell" aria-label={title}>
      <div className="fruno-info-box-tabs" aria-hidden="true">
        <span className="fruno-info-box-tab fruno-info-box-tab-purple" />
        <span className="fruno-info-box-tab fruno-info-box-tab-orange" />
        <span className="fruno-info-box-tab fruno-info-box-tab-yellow" />
        <span className="fruno-info-box-tab fruno-info-box-tab-green" />
      </div>

      <div className="fruno-info-box-stack">
        <div className="fruno-info-box-shadow" aria-hidden="true" />
        <article className="fruno-info-box-wrapper">
          <h3 className="fruno-info-box-title">{title}</h3>
          <p className="fruno-info-box-copy">{description}</p>
        </article>
      </div>
    </section>
  );
};

export default FrunoInfoBox;
