import "./InfoCircle.css";

type InfoCircleProps = {
  firstLine?: string;
  secondLine?: string;
};

export default function InfoCircle({
  firstLine = "4 suits",
  secondLine = "4 colors",
}: InfoCircleProps) {
  const ariaLabel = `${firstLine}, ${secondLine}`;

  return (
    <div className="info-circle" aria-label={ariaLabel}>
      <div className="info-circle-face">
        <p className="info-circle-line">{firstLine}</p>
        <p className="info-circle-line info-circle-line-bottom">{secondLine}</p>
      </div>
    </div>
  );
}
