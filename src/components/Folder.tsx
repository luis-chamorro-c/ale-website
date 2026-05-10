import { Link } from "react-router-dom";
import "./Folder.css";

type FolderProps = {
  to: string;
  label: string;
  folderClassName?: string;
  tabClassName?: string;
};

export default function Folder({
  to,
  label,
  folderClassName = "",
  tabClassName = "",
}: FolderProps) {
  return (
    <div className={`folder ${folderClassName}`.trim()}>
      <div className="folder-label-container">
        <Link className={`folder-label-link folder-tab ${tabClassName}`.trim()} to={to}>
          {label}
        </Link>
      </div>
      <div className={`folder-shell ${tabClassName.replace("folder-tab-", "folder-shell-")}`} />
    </div>
  );
}
