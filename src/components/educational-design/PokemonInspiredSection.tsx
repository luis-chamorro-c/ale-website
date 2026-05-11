type PokemonInspiredSectionProps = {
  className?: string;
};

export default function PokemonInspiredSection({ className = "" }: PokemonInspiredSectionProps) {
  return (
    <div className={`pokemon-inspired-section ${className}`.trim()}>
      Inspired by <strong>Pokémon</strong> cards.
    </div>
  );
}
