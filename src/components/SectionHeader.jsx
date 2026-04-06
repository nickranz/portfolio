const SectionHeader = ({ eyebrow, title, copy }) => (
  <div className="section-header">
    <div className="eyebrow">{eyebrow}</div>
    <h2>{title}</h2>
    {copy ? <p className="section-copy">{copy}</p> : null}
  </div>
);

export default SectionHeader;
