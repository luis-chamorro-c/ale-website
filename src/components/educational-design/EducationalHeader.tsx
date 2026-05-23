import "./EducationalHeader.css";

type EducationalHeaderBoxProps = {
  title: string;
  subtitle: string;
};

type EducationalHeaderProps = {
  description?: string;
  titleValue: string;
  areasOfDesignValue: string;
  dateValue: string;
  toolsValue: string;
  sectionTitle: string;
  titleAlign?: string;
  color: string;
};

function EducationalHeaderBox({ title, subtitle }: EducationalHeaderBoxProps) {
  return (
    <div className="edu-header-box">
      <div className="edu-header-box-title">{title}</div>
      <div className="edu-header-box-subtitle">{subtitle}</div>
    </div>
  );
}

function EducationalHeaderTitle({ title, color }: { title: string, color: string }) {
  const styles = { color };
  return (
    <div className={`edu-header-harvest-title-wrap`}>
      <h1 className="edu-header-harvest-title" style={styles}>{title}</h1>
    </div>
  );
}

export default function EducationalHeader({
  description,
  titleValue,
  areasOfDesignValue,
  dateValue,
  toolsValue,
  sectionTitle,
  titleAlign,
  color,
}: EducationalHeaderProps) {
  const isLeftAligned = titleAlign?.toLowerCase() === 'left';
  const headerTitle = <EducationalHeaderTitle title={sectionTitle} color={color}/>;
  const leftAlignClassName = isLeftAligned ? 'left-aligned' : null;
  return (
    <div className={`edu-header-main ${leftAlignClassName}`}>
      <div className="edu-header-description">
        {description}
        {isLeftAligned ? headerTitle : null}
      </div>
      <div className="edu-header-project-meta">
        <div className="edu-header-boxes">
          <EducationalHeaderBox title="Title" subtitle={titleValue} />
          <EducationalHeaderBox title="Areas of Design" subtitle={areasOfDesignValue} />
          <EducationalHeaderBox title="Date" subtitle={dateValue} />
          <EducationalHeaderBox title="Tools" subtitle={toolsValue} />
        </div>
        {isLeftAligned ? null : headerTitle}
      </div>
    </div>
  );
}
