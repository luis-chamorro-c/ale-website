import Folder from "../components/Folder";
import SignatureLink from "../shared/SignatureLink";
import "../styles/educational-design/educational-design.css";
import wave from "../assets/educational-design/wavy-lines.png";
import harvestKirbyCucumber from '../assets/educational-design/harvest-kirby-cucumber.png';
import harvestMelonRunner from '../assets/educational-design/harvest-melon-runner.png';
import harvestCaterpillar from '../assets/educational-design/harvest-characters-bubble.png';
import harvestGhostbusterEggplant from '../assets/educational-design/harvest-ghostbuster-eggplant-card.png';
import harvestCabbageHero from '../assets/educational-design/harvest-cabbage-hero.png'
import FiftyPlusSection from "../components/educational-design/FiftyPlusSection";
import HarvestAboutSection from "../components/educational-design/HarvestAboutSection";
import PokemonInspiredSection from "../components/educational-design/PokemonInspiredSection";

const DescriptionBox = ({ title, subtitle }: { title: string; subtitle: string}) => {
  return (
  <div className="description-box">
    <div className="title">
      {title}
    </div>
    <div className="subtitle">
      {subtitle}
    </div>
  </div>
  )
}

function HarvestGamesTitle() {
  return <div className="harvest-games-title-wrapper">
    <h1 className={`harvest-games-title`}>Harvest&nbsp;&nbsp;&nbsp;Games</h1>
  </div>;
}

const Header = () => {
  return (
    <div className="header-container">
      <div className="harvest-games-header">
        <div className="description">
          For over a year , I worked as Studio Manager and Graphic Designer for the Participatory Action Design Studio at the University of Pennsylvania's Netter Center for Community Partnerships. In this role, I designed various educational materials for public schools in West Philadelphia. This 
section of my portfolio features two large projects I 
completed during this time. 
        </div>
        <div className="project-description-container">
          <div className="description-boxes">
            <DescriptionBox title="Title" subtitle="Harvest Games"/>
            <DescriptionBox title="Areas of Design" subtitle="Graphic Design, Illustration"/>
            <DescriptionBox title="Date" subtitle="2024-2025"/>
            <DescriptionBox title="Tools" subtitle="Adobe InDesign, Procreate, Adobe Photoshop, Canva."/>
          </div>
          <HarvestGamesTitle/>
        </div>
      </div>
    </div>
  )
}

export default function EducationalDesign() {
  return (
    <main className="edu-shell">
      <SignatureLink/>
      <Folder to="/educational-design" label="educational design" folderClassName="folder-educational-header" tabClassName="folder-tab-gray"/>
      <Header/>
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
          </div>
        </div>
      </div>
    </main>
  );
}
