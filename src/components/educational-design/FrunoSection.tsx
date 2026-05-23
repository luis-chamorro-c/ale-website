import "./FrunoSection.css";
import MeetFrunoBox from "./MeetFrunoBox";
import frunoThreeCardsOverlay from '../../assets/educational-design/fruno-three-cards-overlay.png'
import FrunoDivider from "./FrunoDivider";

export default function FrunoSection() {
  return (
    <div className="fruno-section">
      <div className="fruno-inner-triangle"/>
      <div className="fruno-outer-triangle"/>
      <div className="meet-fruno-section">
        <MeetFrunoBox/>
        <div className="fruno-cards-container">
          <img src={frunoThreeCardsOverlay}/>
        </div>
      </div>
      <FrunoDivider/>
      <div className="fruno-cards-showcase-section"/>
    </div>
  );
}
