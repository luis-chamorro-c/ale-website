import "./EducationalHeader.css";

type EducationalHeaderBoxProps = {
  title: string;
  subtitle: string;
};

function EducationalHeaderBox({ title, subtitle }: EducationalHeaderBoxProps) {
  return (
    <div className="edu-header-box">
      <div className="edu-header-box-title">{title}</div>
      <div className="edu-header-box-subtitle">{subtitle}</div>
    </div>
  );
}

function EducationalHeaderTitle() {
  return (
    <div className="edu-header-harvest-title-wrap">
      <h1 className="edu-header-harvest-title">Harvest&nbsp;&nbsp;&nbsp;Games</h1>
    </div>
  );
}

export default function EducationalHeader() {
  return (
    <div className="edu-header-container">
      <div className="edu-header-main">
        <div className="edu-header-description">
          For over a year , I worked as Studio Manager and Graphic Designer for the Participatory Action Design
          Studio at the University of Pennsylvania's Netter Center for Community Partnerships. In this role, I
          designed various educational materials for public schools in West Philadelphia. This section of my
          portfolio features two large projects I completed during this time.
        </div>
        <div className="edu-header-project-meta">
          <div className="edu-header-boxes">
            <EducationalHeaderBox title="Title" subtitle="Harvest Games" />
            <EducationalHeaderBox title="Areas of Design" subtitle="Graphic Design, Illustration" />
            <EducationalHeaderBox title="Date" subtitle="2024-2025" />
            <EducationalHeaderBox title="Tools" subtitle="Adobe InDesign, Procreate, Adobe Photoshop, Canva." />
          </div>
          <EducationalHeaderTitle />
        </div>
      </div>
    </div>
  );
}
