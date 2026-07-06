import YibyoLogoDescription from "../../../components/brand-design/yibyo-description/YibyoLogoDescription";
import YibyoVisualSystem from "../../../components/brand-design/yibyo-description/YibyoVisualSystem";
import "./YibyoDescriptionContentSection.css";

export default function YibyoDescriptionContentSection() {
  return (
    <section
      className="yibyo-description-content-section"
      aria-label="YibYo visual system details"
    >
      <div className="yibyo-description-content-left">
        <YibyoLogoDescription />
      </div>
      <div className="yibyo-description-content-right">
        <YibyoVisualSystem />
      </div>
    </section>
  );
}
