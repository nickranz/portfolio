import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const SectionHeader = ({ eyebrow, title, copy }) => (
  <div className="section-header">
    <div>
      <div className="eyebrow">{eyebrow}</div>
      <Title level={2}>{title}</Title>
    </div>
    {copy ? <Paragraph className="section-copy">{copy}</Paragraph> : null}
  </div>
);

export default SectionHeader;
