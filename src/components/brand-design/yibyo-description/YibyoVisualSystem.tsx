import yibyoFavicon from "../../../assets/brand-design/yibyo-favicon.png";
import yibyoSwatchWordmarkIndigo from "../../../assets/brand-design/yibyo-wordmark-indigo-swatch.png";
import yibyoSwatchWordmarkOffwhite from "../../../assets/brand-design/yibyo-wordmark-offwhite-swatch.png";
import yibyoWordmark from "../../../assets/brand-design/yibyo-wordmark.png";
import "./YibyoVisualSystem.css";

const swatches = [
  { name: "Dusty lavender", value: "#d2acd1", logo: yibyoSwatchWordmarkOffwhite },
  { name: "Muted rose", value: "#a2616f", logo: yibyoSwatchWordmarkOffwhite },
  { name: "Bright green", value: "#98c721", logo: yibyoSwatchWordmarkOffwhite },
  { name: "Off white", value: "#f7f2ec", logo: yibyoSwatchWordmarkIndigo },
];

export default function YibyoVisualSystem() {
  return (
    <section className="yibyo-visual-system" aria-label="YibYo visual system">
      <div className="yibyo-visual-system-wordmark">
        <img src={yibyoWordmark} alt="YibYo wordmark" />
      </div>

      <div className="yibyo-visual-system-grid">
        <div className="yibyo-visual-system-swatches" aria-label="YibYo color palette">
          {swatches.map((swatch) => (
            <div
              className="yibyo-visual-system-swatch"
              key={swatch.value}
              style={{ backgroundColor: swatch.value }}
              aria-label={`${swatch.name} ${swatch.value}`}
            >
              <img
                className="yibyo-visual-system-swatch-logo"
                src={swatch.logo}
                alt=""
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        <figure className="yibyo-visual-system-favicon">
          <img src={yibyoFavicon} alt="YibYo Y favicon" />
          <figcaption>Favicon</figcaption>
        </figure>
      </div>
    </section>
  );
}
