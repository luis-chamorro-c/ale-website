import "./FrunoSection.css";
import FrunoInfoBox from "./FrunoInfoBox";
import frunoThreeCardsOverlay from '../../assets/educational-design/fruno-three-cards-overlay.png'
import FrunoDivider from "./FrunoDivider";
import FrunoCardsShowCase from "./FrunoCardsShowCase";
import FrunoDescription from "./FrunoDescription";

export default function FrunoSection() {
  return (
    <div className="fruno-section">
      <div className="fruno-inner-triangle"/>
      <div className="fruno-outer-triangle"/>
      <div className="meet-fruno-section">
        <FrunoInfoBox
          title="Meet  Fruno:"
          description="The Uno-inspired card game that teaches children about fruits and vegetables."
        />
        <div className="fruno-cards-container">
          <img src={frunoThreeCardsOverlay} loading="lazy"/>
        </div>
      </div>
      <FrunoDivider/>
      <div className="fruno-cards-showcase-section">
        <FrunoCardsShowCase/>
      </div>
      <FrunoDivider/>
      <FrunoDescription/>
      <div className="fruno-inverted-inner-triangle"/>
      <div className="fruno-inverted-outer-triangle"/>
    </div>
  );
}
