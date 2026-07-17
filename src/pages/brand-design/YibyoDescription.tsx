import YibyoDescriptionContentSection from "../../sections/brand-design/yibyo-description/YibyoDescriptionContentSection";
import YibyoColorIntroSection from "../../sections/brand-design/yibyo-description/YibyoColorIntroSection";
import YibyoColorStorySection from "../../sections/brand-design/yibyo-description/YibyoColorStorySection";
import YibyoColorSwatchesSection from "../../sections/brand-design/yibyo-description/YibyoColorSwatchesSection";
import YibyoGuidelinesTitleSection from "../../sections/brand-design/yibyo-description/YibyoGuidelinesTitleSection";
import YibyoTypographyDescriptionSection from "../../sections/brand-design/yibyo-description/YibyoTypographyDescriptionSection";
import YibyoTypographySection from "../../sections/brand-design/yibyo-description/YibyoTypographySection";
import "./YibyoDescription.css";

export default function YibyoDescription() {
  return (
    <main className="yibyo-description-page">
      <YibyoGuidelinesTitleSection />
      <YibyoDescriptionContentSection />
      <div className="yibyo-description-bottom-divider" aria-hidden="true" />
      <YibyoColorIntroSection />
      <YibyoColorSwatchesSection />
      <YibyoColorStorySection />
      <div className="yibyo-typography-top-divider" aria-hidden="true" />
      <YibyoTypographySection />
      <YibyoTypographyDescriptionSection />
      <div className="yibyo-typography-bottom-divider" aria-hidden="true" />
    </main>
  );
}
