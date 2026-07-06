import YibyoHeaderButton from "../../../components/brand-design/yibyo-description/YibyoHeaderButton";
import "./YibyoGuidelinesTitleSection.css";

export default function YibyoGuidelinesTitleSection() {
  return (
    <header className="yibyo-guidelines-title-section">
      <nav
        className="yibyo-guidelines-title-nav"
        aria-label="YibYo detail navigation"
      >
        <YibyoHeaderButton icon="home" label="Brand design home" to="/brand-design" />
        <YibyoHeaderButton icon="back" label="Back to brand design" to="/brand-design" />
        <YibyoHeaderButton icon="next" label="Next section" />
      </nav>
      <h1>Brand Guidelines &amp; Visual System</h1>
      <div className="yibyo-guidelines-title-divider" aria-hidden="true" />
    </header>
  );
}
