import "./YibyoColorIntroSection.css";

export default function YibyoColorIntroSection() {
  return (
    <section
      className="yibyo-color-intro-section"
      aria-label="YibYo color palette categories"
    >
      <article className="yibyo-color-intro-group yibyo-color-intro-group-primary">
        <div className="yibyo-color-intro-heading-row">
          <span className="yibyo-color-intro-rule" aria-hidden="true" />
          <h2>Primary Colors</h2>
          <span className="yibyo-color-intro-rule" aria-hidden="true" />
        </div>
        <p>Appear across all packaging, and most brand promotional materials</p>
      </article>

      <article className="yibyo-color-intro-group yibyo-color-intro-group-secondary">
        <div className="yibyo-color-intro-heading-row">
          <span className="yibyo-color-intro-rule" aria-hidden="true" />
          <h2>Secondary Colors</h2>
          <span className="yibyo-color-intro-rule" aria-hidden="true" />
        </div>
        <p>May be flavor specific, or used mainly as an accent color.</p>
      </article>
    </section>
  );
}
