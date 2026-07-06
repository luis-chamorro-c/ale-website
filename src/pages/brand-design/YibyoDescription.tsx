import YibyoDescriptionContentSection from "../../sections/brand-design/yibyo-description/YibyoDescriptionContentSection";
import YibyoGuidelinesTitleSection from "../../sections/brand-design/yibyo-description/YibyoGuidelinesTitleSection";
import "./YibyoDescription.css";

export default function YibyoDescription() {
  return (
    <main className="yibyo-description-page">
      <YibyoGuidelinesTitleSection />
      <YibyoDescriptionContentSection />
      <div className="yibyo-description-bottom-divider" aria-hidden="true" />
    </main>
  );
}
