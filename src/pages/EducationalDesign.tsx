import { Link } from "react-router-dom";
import frame263 from "../assets/educational-design/frame263.png";
import wavyLines from "../assets/educational-design/wavy-lines.png";
import frame20 from "../assets/educational-design/frame20.png";
import frame22 from "../assets/educational-design/frame22.png";
import frame23 from "../assets/educational-design/frame23.png";
import frame30 from "../assets/educational-design/frame30.png";
import frame31 from "../assets/educational-design/frame31.png";
import frame32 from "../assets/educational-design/frame32.png";
import frame38 from "../assets/educational-design/frame38.png";
import frame48 from "../assets/educational-design/frame48.png";
import frame21 from "../assets/educational-design/frame21.png";
import frame50 from "../assets/educational-design/frame50.png";
import frame51 from "../assets/educational-design/frame51.png";
import frame52 from "../assets/educational-design/frame52.png";
import frame53 from "../assets/educational-design/frame53.png";
import frame70 from "../assets/educational-design/frame70.png";
import frame71 from "../assets/educational-design/frame71.png";
import frame72 from "../assets/educational-design/frame72.png";
import frame73 from "../assets/educational-design/frame73.png";
import frame74 from "../assets/educational-design/frame74.png";
import frame75 from "../assets/educational-design/frame75.png";
import frame76 from "../assets/educational-design/frame76.png";
import frame77 from "../assets/educational-design/frame77.png";
import frame78 from "../assets/educational-design/frame78.png";
import frame79 from "../assets/educational-design/frame79.png";
import frame80 from "../assets/educational-design/frame80.png";
import frame81 from "../assets/educational-design/frame81.png";
import frame82 from "../assets/educational-design/frame82.png";
import frame83 from "../assets/educational-design/frame83.png";
import frame84 from "../assets/educational-design/frame84.png";
import frame85 from "../assets/educational-design/frame85.png";
import frame86 from "../assets/educational-design/frame86.png";
import frame87 from "../assets/educational-design/frame87.png";
import frame88 from "../assets/educational-design/frame88.png";
import frame89 from "../assets/educational-design/frame89.png";
import frame90 from "../assets/educational-design/frame90.png";
import frame91 from "../assets/educational-design/frame91.png";
import frame92 from "../assets/educational-design/frame92.png";
import frame93 from "../assets/educational-design/frame93.png";
import frame94 from "../assets/educational-design/frame94.png";
import frame95 from "../assets/educational-design/frame95.png";
import frame96 from "../assets/educational-design/frame96.png";
import "../styles/educational-design/educational-design.css";

const rowA = [frame70, frame71, frame72, frame73, frame74, frame75];
const rowB = [frame76, frame77, frame78, frame79, frame80, frame81];

export default function EducationalDesign() {
  return (
    <main className="edu-shell">
      <div className="edu-stage">
      <div className="edu-canvas">
        <img className="edu-top-art" src={frame263} alt="" />
        <Link className="signature-link edu-signature" to="/" aria-label="Go to homepage">
          <span className="signature-by">BY:</span>
          <span className="signature-name">Alejandra Chamorro</span>
        </Link>
        <p className="edu-tab">educational design</p>

        <section className="edu-intro">
          <p className="intro-copy">For over a year , I worked as Studio Manager and Graphic Designer for the Participatory Action Design Studio at the University of Pennsylvania&apos;s Netter Center for Community Partnerships. In this role, I designed various educational materials for public schools in West Philadelphia. This section of my portfolio features two large projects I completed during this time.</p>
          <div className="meta-row"><p><b>Title-</b> Harvest Games</p><p><b>Areas of Design-</b> Graphic Design, Illustration.</p><p><b>Date-</b> 2024-2025.</p><p><b>Tools-</b> Adobe InDesign, Procreate, Adobe Photoshop, Canva.</p></div>
          <h1>Harvest&nbsp;&nbsp;&nbsp;Games</h1>
        </section>

        <section className="harvest">
          <img className="wavy" src={wavyLines} alt="" />
          <img className="img20" src={frame20} alt="" /><img className="img22" src={frame22} alt="" /><img className="img23" src={frame23} alt="" />
          <img className="img31" src={frame31} alt="" /><img className="img32" src={frame32} alt="" /><img className="img30" src={frame30} alt="" />
          <img className="img38" src={frame38} alt="" /><img className="img48" src={frame48} alt="" /><img className="img21" src={frame21} alt="" />
          <img className="img50" src={frame50} alt="" />
          <div className="fifty-bubble">
            <p className="fifty-value">50+</p>
            <p className="fifty-copy">original<br />fruit and vegetable<br />characters.</p>
          </div>
          <p className="about-title">About</p>
          <div className="about-box"><b>Harvest Games</b> is a set of trading cards created for public schools in West Philadelphia as part of a nutrition education program. Each card features a unique fruit or vegetable character and information about that fruit or vegetable.</div>
          <div className="pokemon-box">Inspired by Pokémon cards.</div>
          <div className="divider divider-top" aria-hidden="true">
            <div className="divider-track">
              {Array.from({ length: 6 }).map((_, i) => <span key={`top-l-${i}`} />)}
            </div>
            <p>Trading Cards</p>
            <div className="divider-track">
              {Array.from({ length: 6 }).map((_, i) => <span key={`top-r-${i}`} />)}
            </div>
          </div>
          <p className="trading-title">Trading Cards</p>
          <div className="summary-box">Through extensive research and thoughtful design, this deck not only entertains but also informs, making healthy foods more appealing to young audiences.</div>
          <div className="divider divider-bottom" aria-hidden="true">
            <div className="divider-track">
              {Array.from({ length: 6 }).map((_, i) => <span key={`bot-l-${i}`} />)}
            </div>
            <div className="divider-center" />
            <div className="divider-track">
              {Array.from({ length: 6 }).map((_, i) => <span key={`bot-r-${i}`} />)}
            </div>
          </div>
          <div className="gameplay-box">Harvest Games cards are playable and can be used for various games described on “Gameplay” cards.</div>
          <div className="marketing-box">Harvest Games applies the same character-based marketing style found in kids’ snack brands to fruits and vegetables, making them more engaging and memorable for children.</div>
        </section>

        <section className="fruno-intro"><div className="meta-row"><p><b>Title-</b> Fruno</p><p><b>Areas of Design-</b> Graphic Design, Illustration.</p><p><b>Date-</b> 2024-2025.</p><p><b>Tools-</b> Adobe InDesign, Procreate, Adobe Photoshop.</p></div><h1>Fruno</h1></section>
        <section className="fruno-hero">
          <div className="meet-fruno">
            <div className="meet-colors"><span /><span /><span /><span /></div>
            <h4>Meet Fruno:</h4>
            <p>The Uno-inspired card game that teaches children about fruits and vegetables.</p>
          </div>
          <img className="f51" src={frame51} alt="" /><img className="f52" src={frame52} alt="" /><img className="f53" src={frame53} alt="" />
        </section>
        <section className="fruno-rows">
          <div className="stripe-row top"><span /><span /><span /><span /></div>
          <div className="row">{rowA.map((s, i) => <img key={i} src={s} alt="" />)}</div>
          <div className="suits-circle">4 suits<br />4 colors</div>
          <div className="row">{rowB.map((s, i) => <img key={i} src={s} alt="" />)}</div>
          <div className="stripe-row bottom"><span /><span /><span /><span /></div>
        </section>

        <section className="action-sec">
          <img className="a84" src={frame84} alt="" /><img className="a95" src={frame95} alt="" /><img className="a94" src={frame94} alt="" />
          <p className="a-copy1">Fruits with subtypes that fall into all 4 color categories are used as action cards.</p>
          <p className="a-copy2">*These cards were made for educational purposes only and are not intended for commercial use.*</p>
          <p className="a-copy3">A rainbow chard is used for the wild card because a single chard can contain all 4 colors.</p>
          <img className="a91" src={frame91} alt="" /><img className="a88" src={frame88} alt="" /><img className="a85" src={frame85} alt="" /><img className="a82" src={frame82} alt="" />
          <img className="a92" src={frame92} alt="" /><img className="a89" src={frame89} alt="" /><img className="a86" src={frame86} alt="" /><img className="a83" src={frame83} alt="" />
          <img className="a93" src={frame93} alt="" /><img className="a90" src={frame90} alt="" /><img className="a87" src={frame87} alt="" /><img className="a84b" src={frame84} alt="" />
          <img className="a96" src={frame96} alt="" />
        </section>

        <footer className="edu-footer"><img src={frame263} alt="" /><Link to="/more">View More Projects</Link></footer>
      </div>
      </div>
    </main>
  );
}
