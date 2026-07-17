import "./YibyoColorSwatchesSection.css";

const primarySwatches = [
  {
    className: "yibyo-color-swatch-indigo",
    stripClassName: "yibyo-color-swatch-strip-indigo",
    label: "Indigo",
  },
  {
    className: "yibyo-color-swatch-cream",
    stripClassName: "yibyo-color-swatch-strip-cream",
    label: "Cream",
  },
  {
    className: "yibyo-color-swatch-rose",
    stripClassName: "yibyo-color-swatch-strip-rose",
    label: "Rose",
  },
];

const secondarySwatches = [
  { className: "yibyo-color-swatch-lilac", label: "Lilac" },
  { className: "yibyo-color-swatch-blue", label: "Blue" },
  { className: "yibyo-color-swatch-green", label: "Green" },
  { className: "yibyo-color-swatch-orange", label: "Orange" },
];

export default function YibyoColorSwatchesSection() {
  return (
    <section
      className="yibyo-color-swatches-section"
      aria-label="YibYo color swatches"
    >
      <div className="yibyo-color-swatches-group yibyo-color-swatches-primary">
        {primarySwatches.map((swatch) => (
          <div
            key={swatch.className}
            className={`yibyo-color-swatch ${swatch.className}`}
            aria-label={swatch.label}
          >
            <span
              className={`yibyo-color-swatch-strip ${swatch.stripClassName}`}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      <div className="yibyo-color-swatches-group yibyo-color-swatches-secondary">
        {secondarySwatches.map((swatch) => (
          <div
            key={swatch.className}
            className={`yibyo-color-swatch ${swatch.className}`}
            aria-label={swatch.label}
          />
        ))}
      </div>
    </section>
  );
}
