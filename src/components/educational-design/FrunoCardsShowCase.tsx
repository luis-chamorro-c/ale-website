import "./FrunoCardsShowCase.css";
import frunoRowACard01 from "../../assets/educational-design/fruno-row-a-card-01.png";
import frunoRowACard02 from "../../assets/educational-design/fruno-row-a-card-02.png";
import frunoRowACard03 from "../../assets/educational-design/fruno-row-a-card-03.png";
import frunoRowACard04 from "../../assets/educational-design/fruno-row-a-card-04.png";
import frunoRowACard05 from "../../assets/educational-design/fruno-row-a-card-05.png";
import frunoRowACard06 from "../../assets/educational-design/fruno-row-a-card-06.png";
import frunoRowBCard01 from "../../assets/educational-design/fruno-row-b-card-01.png";
import frunoRowBCard02 from "../../assets/educational-design/fruno-row-b-card-02.png";
import frunoRowBCard03 from "../../assets/educational-design/fruno-row-b-card-03.png";
import frunoRowBCard04 from "../../assets/educational-design/fruno-row-b-card-04.png";
import frunoRowBCard05 from "../../assets/educational-design/fruno-row-b-card-05.png";
import frunoRowBCard06 from "../../assets/educational-design/fruno-row-b-card-06.png";
import InfoCircle from "./InfoCircle";

const rowA = [
  frunoRowACard01,
  frunoRowACard02,
  frunoRowACard03,
  frunoRowACard04,
  frunoRowACard05,
  frunoRowACard06,
];

const rowB = [
  frunoRowBCard01,
  frunoRowBCard02,
  frunoRowBCard03,
  frunoRowBCard04,
  frunoRowBCard05,
  frunoRowBCard06,
];

export default function FrunoCardsShowCase() {
  return (
    <section className="fruno-cards-showcase" aria-label="Fruno card showcase">
      <InfoCircle firstLine="4 suits" secondLine="4 colors"/>
      <div className="fruno-cards-showcase-row">
        {rowA.map((card, index) => (
          <img key={`a-${index + 1}`} className="fruno-cards-showcase-card" src={card} alt="" />
        ))}
      </div>
      <div className="fruno-cards-showcase-row">
        {rowB.map((card, index) => (
          <img key={`b-${index + 1}`} className="fruno-cards-showcase-card" src={card} alt="" />
        ))}
      </div>
    </section>
  );
}
