import "./FrunoDivider.css";

export default function FrunoDivider() {
  return (
    <div className="fruno-divider" aria-hidden="true">
      <div className="fruno-divider-segment fruno-divider-orange">
        <div className="fruno-divider-stripe fruno-divider-stripe-orange" />
      </div>
      <div className="fruno-divider-segment fruno-divider-green">
        <div className="fruno-divider-stripe fruno-divider-stripe-green" />
      </div>
      <div className="fruno-divider-segment fruno-divider-yellow">
        <div className="fruno-divider-stripe fruno-divider-stripe-yellow" />
      </div>
      <div className="fruno-divider-segment fruno-divider-purple" />
    </div>
  );
}
