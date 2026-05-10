import { Link } from "react-router-dom";
import folderAbout from "./assets/home/folder-about.png";
import folderBrand from "./assets/home/folder-brand.png";
import folderCpg from "./assets/home/folder-cpg.png";
import folderEducational from "./assets/home/folder-educational.png";
import folderMore from "./assets/home/folder-more.png";

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

      <nav className="folder-nav" aria-label="Portfolio sections">
        <div className="folder folder-about">
          <img src={folderAbout} alt="" />
          <Link className="folder-label-link" to="/about">
            <span>about</span>
          </Link>
        </div>
        <div className="folder folder-cpg">
          <img src={folderCpg} alt="" />
          <Link className="folder-label-link" to="/cpg">
            <span>
              professional
              <br />
              cpg work
            </span>
          </Link>
        </div>
        <div className="folder folder-brand">
          <img src={folderBrand} alt="" />
          <Link className="folder-label-link" to="/brand-design">
            <span>
              case study:
              <br />
              brand design
            </span>
          </Link>
        </div>
        <div className="folder folder-educational">
          <img src={folderEducational} alt="" />
          <Link className="folder-label-link" to="/educational-design">
            <span>
              educational
              <br />
              design
            </span>
          </Link>
        </div>
        <div className="folder folder-more">
          <img src={folderMore} alt="" />
          <Link className="folder-label-link" to="/more">
            <span>more projects</span>
          </Link>
        </div>
      </nav>
    </main>
  );
}
