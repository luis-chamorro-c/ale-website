import "./PokemonInspiredSection.css";

export default function PokemonInspiredSection() {
  return (
    <section className="pokemon-inspired-section">
      <div className="pokemon-inspired-container">
        <div className="pokemon-inspired-top-pill" />
        <p className="pokemon-inspired-text">
          <span>Inspired by </span>
          <strong>Pokémon</strong>
          <span>cards.</span>
        </p>
      </div>
      <div className="pokemon-inspired-shadow"/>
    </section>
  );
}
