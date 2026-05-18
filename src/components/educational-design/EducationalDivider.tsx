import "./EducationalDivider.css";

const CHIP_COUNT = 7;

function Chips() {
  return (
    <div className="educational-divider-chips" aria-hidden="true">
      {Array.from({ length: CHIP_COUNT }).map((_, index) => (
        <span key={index} className="educational-divider-chip" />
      ))}
    </div>
  );
}

export default function EducationalDivider({ dividerText }: { dividerText: string}) {
  return (
    <div className={'educational-divider'} aria-hidden="true">
      <Chips />
      <div className="educational-divider-center">
        {dividerText}
      </div>
      <Chips />
    </div>
  );
}
