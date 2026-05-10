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
        <Folder to="/brand-design" label="case study: brand design" folderClassName="folder-brand" tabClassName="folder-tab-cream"/>
        <Folder to="/educational-design" label="educational design" folderClassName="folder-educational" tabClassName="folder-tab-gray"/>
        <Folder to="/more" label="more projects" folderClassName="folder-more" tabClassName="folder-tab-light-blue"/>
      </div>
    </main>
  );
}
