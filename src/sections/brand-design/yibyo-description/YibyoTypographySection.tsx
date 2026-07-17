import "./YibyoTypographySection.css";

const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerals = "1234567890!?%&@";

export default function YibyoTypographySection() {
  return (
    <section className="yibyo-typography-section" aria-label="YibYo typography">
      <div className="yibyo-typography-panel yibyo-typography-panel-semibold">
        <h2>Gelica Semibold</h2>
        <p>{alphabetLower}</p>
        <p>{alphabetUpper}</p>
        <p>{numerals}</p>
      </div>

      <div className="yibyo-typography-panel yibyo-typography-panel-regular">
        <h2>Gelica Regular</h2>
        <p>{alphabetLower}</p>
        <p>{alphabetUpper}</p>
        <p>{numerals}</p>
      </div>
    </section>
  );
}
