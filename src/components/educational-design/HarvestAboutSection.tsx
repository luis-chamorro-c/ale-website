type HarvestAboutSectionProps = {
  className?: string;
};

export default function HarvestAboutSection({ className = "" }: HarvestAboutSectionProps) {
  return (
    <section className={`harvest-about-section ${className}`.trim()}>
      <p className="harvest-about-title">About</p>
      <div className="harvest-about-frame">
        <div className="harvest-about-box">
          <b>Harvest Games</b> is a set of trading cards created for public schools in West Philadelphia as part
          of a nutrition education program. Each card features a unique fruit or vegetable character and information
          about that fruit or vegetable.
        </div>
      </div>
    </section>
  );
}
