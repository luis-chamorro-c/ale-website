type FiftyPlusSectionProps = {
  className?: string;
};

export default function FiftyPlusSection({ className = "" }: FiftyPlusSectionProps) {
  return (
    <div className={`fifty-plus-section ${className}`.trim()}>
      <p className="fifty-plus-value">50+</p>
      <p className="fifty-plus-copy">
        original
        <br />
        fruit and vegetable
        <br />
        characters.
      </p>
    </div>
  );
}
