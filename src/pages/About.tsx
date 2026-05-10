import { Link } from "react-router-dom";
import folderAbout from "../assets/about/folder-about.png";
import norwayPhoto from "../assets/about/norway-photo.png";
import headshot from "../assets/about/headshot.png";
import pennPhoto from "../assets/about/penn-photo.png";
import adobeIllustrator from "../assets/about/adobe-illustrator.png";
import indesign from "../assets/about/indesign.png";
import procreate from "../assets/about/procreate.png";
import canva from "../assets/about/canva.png";
import photoshop from "../assets/about/photoshop.png";
import lightroom from "../assets/about/lightroom.png";
import afterEffects from "../assets/about/after-effects.png";
import capcut from "../assets/about/capcut.png";
import midjourney from "../assets/about/midjourney.png";
import figma from "../assets/about/figma.png";
import shapr3d from "../assets/about/shapr3d.png";

const tools = [
  { name: "ADOBE ILLUSTRATOR", image: adobeIllustrator },
  { name: "ADOBE INDESIGN", image: indesign },
  { name: "PROCREATE", image: procreate },
  { name: "CANVA", image: canva },
  { name: "ADOBE PHOTOSHOP", image: photoshop },
  { name: "ADOBE LIGHTROOM", image: lightroom },
  { name: "AFTER EFFECTS", image: afterEffects },
  { name: "CAPCUT", image: capcut },
  { name: "MIDJOURNEY AI", image: midjourney },
  { name: "FIGMA", image: figma },
  { name: "SHAPR3D", image: shapr3d },
];

function SignatureLink() {
  return (
    <Link className="signature-link" to="/" aria-label="Go to homepage">
      <span className="signature-by">BY:</span>
      <span className="signature-name">Alejandra Chamorro</span>
    </Link>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <header className="about-folder">
        <SignatureLink />
        <img src={folderAbout} alt="" className="about-folder-art" />
        <span className="about-folder-label">about</span>
      </header>

      <section className="about-intro" aria-labelledby="about-welcome">
        <img
          className="about-norway-photo"
          src={norwayPhoto}
          alt="Alejandra sitting above a Norwegian fjord."
        />
        <div className="about-copy">
          <p>
            I am a digital artist and recent graduate of the University of
            Pennsylvania, originally from Nicaragua. My work explores how visual
            cues shape perception, thought, and behavior.
          </p>
          <p>
            I bring this perspective into my design practice, creating work
            meant to be engaged with, whether to entertain, educate, evoke
            emotion, or function as a problem solving tool. Ultimately, I aim to
            build a career that merges creativity with functionality.
          </p>
        </div>
        <img
          className="about-headshot"
          src={headshot}
          alt="Portrait of Alejandra Chamorro."
        />
        <p className="about-script hello">Hello! My name is Alejandra.</p>
        <h1 id="about-welcome" className="about-display welcome">
          Welcome
        </h1>
      </section>

      <section className="education-band" aria-label="Education">
        <div className="education-cards">
          <article className="education-card">
            <h2>UNIVERSITY OF PENNSYLVANIA</h2>
            <p className="education-place">Philadelphia, PA</p>
            <p>
              College of Arts and Sciences 2021 - 2025 Bachelor of Arts in
              Cognitive Science
            </p>
            <p>
              GPA: <strong>3.93/4.00</strong>, Summa Cum Laude Concentration:
              Neuroscience
            </p>
            <p>Minors: Consumer Psychology &amp; Design</p>
          </article>
          <article className="education-card school">
            <h2>ST. AUGUSTINE PREPARATORY SCHOOL</h2>
            <p className="education-place">Managua, Nicaragua</p>
            <p>US High School Diploma &amp; Nicaraguan Baccalaureate</p>
            <p>
              GPA: <strong>4.39/4.00</strong>, Salutatorian
            </p>
          </article>
        </div>
        <p className="about-script penn-class">
          University of Pennsylvania Class of 2025
        </p>
        <img
          className="about-penn-photo"
          src={pennPhoto}
          alt="Alejandra sitting in front of a large window at the University of Pennsylvania."
        />
      </section>

      <section className="experience-section" aria-labelledby="experience">
        <h2 id="experience" className="about-display">
          Experience
        </h2>
        <p className="about-script roles-heading">Professional Design Roles:</p>

        <article className="role">
          <div className="role-heading">
            <div>
              <h3>BRAND STRATEGIST &amp; GRAPHIC DESIGNER</h3>
              <p>Café Soluble | Miami FL</p>
            </div>
            <time>August 2025 - Present</time>
          </div>
          <ul>
            <li>
              Modernized visual system for flagship brand by translating
              brand-personification insights into refined logotype, typography,
              and color strategy.
            </li>
            <li>
              Created high-visibility assets, including billboards, fleet
              graphics, and event materials, maintaining brand guidelines while
              shaping brand associations.
            </li>
            <li>
              Evaluated and optimized packaging for new and existing products,
              strengthening visual hierarchy and shelf presence.
            </li>
            <li>
              Translated research insights into communication guidelines for
              social media and new product launches.
            </li>
          </ul>
        </article>

        <article className="role">
          <div className="role-heading">
            <div>
              <h3>STUDIO MANAGER &amp; GRAPHIC DESIGNER</h3>
              <p>
                Netter Center for Community Partnerships @UPenn | Philadelphia
                PA
              </p>
            </div>
            <time>February 2024 - May 2025</time>
          </div>
          <ul>
            <li>
              Designed engaging educational materials for public schools in West
              Philadelphia.
            </li>
            <li>
              Developed a custom card game and a 55+ character trading deck to
              encourage healthy eating habits in children ages 7-12.
            </li>
            <li>
              Organized project tasks using Excel to track progress and prevent
              duplicated effort.
            </li>
            <li>
              Led weekly critique meetings that refined 30+ graphics using Adobe
              Suite and Canva.
            </li>
          </ul>
        </article>
      </section>

      <section className="skills-section" aria-labelledby="skills">
        <p className="about-script tools-heading">Tools:</p>
        <div className="tool-grid">
          {tools.map((tool) => (
            <figure className="tool-card" key={tool.name}>
              <img src={tool.image} alt="" />
              <figcaption>{tool.name}</figcaption>
            </figure>
          ))}
        </div>
        <h2 id="skills" className="about-display skills-title">
          Skills
        </h2>
      </section>

      <section className="personal-section" aria-label="Languages and hobbies">
        <div>
          <p className="about-script personal-heading">Languages:</p>
          <div className="language-grid">
            <div>
              <strong>ENGLISH</strong>
              <span>Bilingual Proficiency</span>
            </div>
            <div>
              <strong>SPANISH</strong>
              <span>Bilingual Proficiency</span>
            </div>
            <div>
              <strong>PORTUGUESE</strong>
              <span>Limited Working Proficiency</span>
            </div>
          </div>
        </div>
        <div>
          <p className="about-script personal-heading">Hobbies and Interests:</p>
          <div className="hobby-grid">
            <strong>CROCHET</strong>
            <strong>EMBROIDERY</strong>
            <strong>ANIMALS</strong>
            <strong>READING</strong>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <img src={folderAbout} alt="" className="about-footer-art" />
        <Link to="/cpg">View Professional CPG Work</Link>
      </footer>
    </main>
  );
}
