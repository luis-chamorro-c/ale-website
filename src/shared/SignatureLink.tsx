import { Link } from "react-router-dom";

export default function SignatureLink() {
  return (
    <Link className="signature-link" to="/" aria-label="Go to homepage">
      <span className="signature-by">BY:</span>
      <span className="signature-name">Alejandra Chamorro</span>
    </Link>
  );
}