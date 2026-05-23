import Folder from "../components/Folder";
import SignatureLink from "../shared/SignatureLink";
import "../styles/educational-design/educational-design.css";
import wave from "../assets/educational-design/wavy-lines.png";
import harvestKirbyCucumber from '../assets/educational-design/harvest-kirby-cucumber.png';
import harvestMelonRunner from '../assets/educational-design/harvest-melon-runner.png';
import harvestCaterpillar from '../assets/educational-design/harvest-characters-bubble.png';
import harvestGhostbusterEggplant from '../assets/educational-design/harvest-ghostbuster-eggplant-card.png';
import harvestCabbageHero from '../assets/educational-design/harvest-cabbage-hero.png'
import harvestCardGridLeft from '../assets/educational-design/harvest-card-grid-left.png';
import harvestCardGridCenter from '../assets/educational-design/harvest-card-grid-center.png';
import harvestCardGridRight from '../assets/educational-design/harvest-card-grid-right.png';
import harvestDragon from '../assets/educational-design/harvest-card-back-stack.png';
import harvestExtraArt44 from '../assets/educational-design/harvest-extra-art-44.png';
import harvestExtraArt45 from '../assets/educational-design/harvest-extra-art-45.png';
import harvestExtraArt46 from '../assets/educational-design/harvest-extra-art-46.png';
import harvestExtraArt47 from '../assets/educational-design/harvest-extra-art-47.png';
import harvestExtraArt49 from '../assets/educational-design/harvest-extra-art-49.png';
import harvestTradingCardsFan from '../assets/educational-design/harvest-trading-cards-fan-flattened.png';
import FiftyPlusSection from "../components/educational-design/FiftyPlusSection";
import HarvestAboutSection from "../components/educational-design/HarvestAboutSection";
import PokemonInspiredSection from "../components/educational-design/PokemonInspiredSection";
import EducationalDivider from "../components/educational-design/EducationalDivider";
import EducationalHeader from "../components/educational-design/EducationalHeader";
import FrunoSection from "../components/educational-design/FrunoSection";

const harvestExtraArtRow = [
  harvestExtraArt46,
  harvestExtraArt44,
  harvestExtraArt47,
  harvestExtraArt49,
  harvestExtraArt45,
];

export default function EducationalDesign() {
  return (
    <main className="edu-shell">
      <SignatureLink/>
      <Folder to="/educational-design" label="educational design" folderClassName="folder-educational-header" tabClassName="folder-tab-gray"/>
      <div className="edu-header-container">
        <EducationalHeader
          description={
            "For over a year , I worked as Studio Manager and Graphic Designer for the Participatory Action Design Studio at the University of Pennsylvania's Netter Center for Community Partnerships. In this role, I designed various educational materials for public schools in West Philadelphia. This section of my portfolio features two large projects I completed during this time."
          }
          titleValue="Harvest Games"
          areasOfDesignValue="Graphic Design, Illustration"
          dateValue="2024-2025"
          toolsValue="Adobe InDesign, Procreate, Adobe Photoshop, Canva."
          sectionTitle={"Harvest\u00A0\u00A0\u00A0Games"}
          color={"#f06549"}
        />
      </div>
      <div className="hg-outer-wrapper">
        <div className="hg-middle-wrapper">
          <div className="hg-inner-wrapper">
            <div className="hg-wave-container">
              <div
                className="hg-wave-bg"
                style={{ backgroundImage: `url(${wave})` }}
                role="img"
                aria-label="Decorative wavy background"
              >
                <img className="harvestKirbyCucumber" src={harvestKirbyCucumber}/>
                <img className="harvestMelonRunner" src={harvestMelonRunner}/>
                <div className="hg-third-row"> 
                  <FiftyPlusSection/>
                  <img className="harvest-characters-bubble" src={harvestCaterpillar}/>
                </div>
              </div>
            </div>
            <div className="hg-bottom-wave-container">
              <div className="hg-bottom-horizontal-wave-container">
                <div>
                  <HarvestAboutSection/>
                  <div className="hg-pokemon-container">
                    <img className="harvestCabbageHero" src={harvestCabbageHero}/>
                    <PokemonInspiredSection/>
                  </div>
                </div>
                <div className="harvest-ghostbuster-eggplant">
                  <img className="harvestGhostBusterEggplant" src={harvestGhostbusterEggplant}/>
                  <div className="harvest-ghostbuster-label">Ghostbuster Eggplant</div>
                </div>
              </div> 
            </div>
            <EducationalDivider dividerText="Trading Cards"/>
            <div className="hg-trading-cards-section">
              <div className="hg-trading-cards-rows"> 
                <img src={harvestCardGridLeft}/>
                <img src={harvestCardGridCenter}/>
                <img src={harvestCardGridRight}/>
              </div>
              <div className="trading-cards-bottom-section">
                <img src={harvestDragon}/>
                <div> 
                  Through intensive research and thoughtful design <br/>
                  this deck not only <strong>entertains</strong> but also <strong>informs</strong>,<br/>
                  Making healthy foods more appealing to young audiences.
                </div>
              </div>
              <EducationalDivider dividerText=""/>
              <div className="hg-purple-character-bg">
                <div className="hg-purple-character-row">
                  {harvestExtraArtRow.map((art) => (
                    <div key={art} className="hg-purple-character-slot" aria-hidden="true">
                      <img src={art} className="hg-purple-character-art" alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="hg-light-purple-character-bg">
                <div className="info-card info-card-bottom">
                  Harvest game cards are playable and can be used for various games described on "Gameplay" cards.
                </div>
                <div className="hg-cards-fan-container">
                  <img src={harvestTradingCardsFan}/>
                </div>
                <div className="info-card info-card-top">
                  Harvest games applies the same character-based marketing style found in kids' snack brands to fruits and vegetables, making them more engaging to children.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EducationalHeader
        titleValue="Fruno"
        areasOfDesignValue="Graphic Design, Illustration"
        dateValue="2024-2025"
        toolsValue="Adobe InDesign, Procreate, Adobe Photoshop."
        sectionTitle={"Fruno"}
        color="#0154A4"
        titleAlign="left"
      />
      <FrunoSection/>
    </main>
  );
}
