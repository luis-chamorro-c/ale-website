import "./MeetFrunoBox.css";

const MeetFrunoBox = () => {
  return (
    <section className="meet-fruno-shell" aria-label="Meet Fruno box">
      <div className="meet-fruno-tabs" aria-hidden="true">
        <span className="meet-fruno-tab meet-fruno-tab-purple" />
        <span className="meet-fruno-tab meet-fruno-tab-orange" />
        <span className="meet-fruno-tab meet-fruno-tab-yellow" />
        <span className="meet-fruno-tab meet-fruno-tab-green" />
      </div>

      <div className="meet-fruno-stack">
        <div className="meet-fruno-shadow" aria-hidden="true" />
        <article className="meet-fruno-wrapper">
          <h3 className="meet-fruno-title">Meet&nbsp;&nbsp;Fruno:</h3>
          <p className="meet-fruno-copy">
            The Uno-inspired card game that teaches children about fruits and vegetables.
          </p>
        </article>
      </div>
    </section>
  );
};

export default MeetFrunoBox;
