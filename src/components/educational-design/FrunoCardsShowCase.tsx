import "./FrunoCardsShowCase.css";
import frunoCardsShowcaseRow from "../../assets/educational-design/fruno-cards-showcase-row.png";

export default function FrunoCardsShowCase() {
  return (
    <section className="fruno-cards-showcase" aria-label="Fruno card showcase">
      <img className="fruno-cards-showcase-image" src={frunoCardsShowcaseRow} alt="" />
    </section>
  );
}
