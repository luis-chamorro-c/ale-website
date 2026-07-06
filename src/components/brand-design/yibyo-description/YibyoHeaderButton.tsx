import { Link } from "react-router-dom";
import "./YibyoHeaderButton.css";

type YibyoHeaderButtonProps = {
  icon: "home" | "back" | "next";
  label: string;
  to?: string;
};

function YibyoHeaderButtonIcon({ icon }: Pick<YibyoHeaderButtonProps, "icon">) {
  if (icon === "home") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 10.5 12 4l7.5 6.5" />
        <path d="M6.75 9.25v9h10.5v-9" />
        <path d="M10 18.25v-5h4v5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icon === "back" ? (
        <>
          <path d="M19 12H5" />
          <path d="m11 6-6 6 6 6" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>
      )}
    </svg>
  );
}

export default function YibyoHeaderButton({
  icon,
  label,
  to,
}: YibyoHeaderButtonProps) {
  const content = <YibyoHeaderButtonIcon icon={icon} />;

  if (!to) {
    return (
      <button
        className="yibyo-header-button is-disabled"
        type="button"
        aria-label={label}
        disabled
      >
        {content}
      </button>
    );
  }

  return (
    <Link className="yibyo-header-button" to={to} aria-label={label}>
      {content}
    </Link>
  );
}
