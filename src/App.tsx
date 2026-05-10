import { Link } from "react-router-dom";
import Folder from "./components/Folder";
import "./styles/app/app.css";

export default function App() {
  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="portfolio-title">
        <h1 id="portfolio-title">Creative Portfolio</h1>
        <div className="home-meta">
          <p className="home-contact">
            <span>e-mail: alechamorro02@gmail.com</span>
            <a href="https://www.linkedin.com/in/alejandramchamorro">
              linkedin: www.linkedin.com/in/alejandramchamorro
            </a>
          </p>
          <Link className="signature-link home-signature" to="/">
            <span className="signature-by">BY:</span>
            <span className="signature-name">Alejandra Chamorro</span>
          </Link>
          <p className="home-disciplines">
            graphic design | brand strategy | illustration packaging design |
            digital art
          </p>
        </div>
      </section>

      <div className="folder-nav" aria-label="Portfolio sections">
        <Folder to="/about" label="about" folderClassName="folder-about" tabClassName="folder-tab-aqua" />
        <Folder to="/cpg" label="professional cpg work" folderClassName="folder-cpg" tabClassName="folder-tab-blue"/>
        {/* {/* <div className="folder folder-cpg">
          <div className="folder-shell folder-shell-blue" />
          <Link className="folder-label-link folder-tab folder-tab-blue" to="/cpg">
            professional
            <br />
            cpg work
          </Link>
        </div> */}
        {/* <div className="folder folder-brand">
          <div className="folder-shell folder-shell-cream" />
          <Link className="folder-label-link folder-tab folder-tab-cream" to="/brand-design">
            case study:
            <br />
            brand design
          </Link>
        </div>
        <div className="folder folder-educational">
          <div className="folder-shell folder-shell-gray" />
          <Link
            className="folder-label-link folder-tab folder-tab-gray"
            to="/educational-design"
          >
            educational
            <br />
            design
          </Link>
        </div>
        <div className="folder folder-more">
          <div className="folder-shell folder-shell-light-blue" />
          <Link className="folder-label-link folder-tab folder-tab-light-blue" to="/more">
            more projects
          </Link>
        </div> */}
      </div>
    </main>
  );
}
