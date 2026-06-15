import { Link } from "react-router-dom";
import Folder from "../components/Folder";
import YibyoCallout from "../components/brand-design/YibyoCallout";
import yibyoAdvertisingMascot from "../assets/brand-design/yibyo-advertising-mascot.png";
import yibyoDescriptionMascot from "../assets/brand-design/yibyo-description-mascot.png";
import yibyoGuidelinesMascot from "../assets/brand-design/yibyo-guidelines-mascot.png";
import yibyoPackagingMascot from "../assets/brand-design/yibyo-packaging-mascot.png";
import yibyoWordmark from "../assets/brand-design/yibyo-wordmark.png";
import SignatureLink from "../shared/SignatureLink";
import "../styles/brand-design/brand-design.css";

export default function BrandDesign() {
  return (
    <main className="brand-design-page">
      <SignatureLink />
      <Folder
        to="/brand-design"
        label="brand design"
        folderClassName="folder-brand-header"
        tabClassName="folder-tab-cream"
      />
      <section className="yibyo-section" aria-labelledby="yibyo-title">
        <div className="yibyo-band">
          <div className="yibyo-band-inner">
            <header className="yibyo-title-block">
              <img
                id="yibyo-title"
                className="yibyo-title-image"
                src={yibyoWordmark}
                alt="YibYo"
              />
              <p>A case study in brand design.</p>
            </header>

            <div className="yibyo-callouts-grid">
              <div className="yibyo-callout-description">
                <YibyoCallout
                  image={yibyoDescriptionMascot}
                  title="Description"
                  subtitle="Get to know the brand."
                />
              </div>
              <div className="yibyo-callout-packaging">
                <YibyoCallout
                  image={yibyoPackagingMascot}
                  title="Packaging"
                  subtitle="Concept & Considerations"
                />
              </div>
              <div className="yibyo-callout-advertising">
                <YibyoCallout
                  image={yibyoAdvertisingMascot}
                  title="Advertising"
                  subtitle="Social Media & Outdoor"
                />
              </div>
              <div className="yibyo-callout-guidelines">
                <YibyoCallout
                  image={yibyoGuidelinesMascot}
                  title="Guidelines"
                  subtitle="Logo, Colors, Typography"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="yibyo-bottom-folder" />
        <Link className="yibyo-more-link" to="/more-projects">
          View More Projects
        </Link>
      </section>
    </main>
  );
}
