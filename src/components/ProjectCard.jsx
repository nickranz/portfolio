import { Card, Tag, Typography } from "antd";

const { Title, Paragraph, Link } = Typography;

const ProjectCard = ({ title, blurb, stack, link }) => (
  <Card className="card" bordered>
    <div className="card-header">
      <Title level={3}>{title}</Title>
      <Link href={link}>View</Link>
    </div>
    <Paragraph className="card-body">{blurb}</Paragraph>
    <div className="chip-row">
      {stack.map((item) => (
        <Tag key={item} color="geekblue" className="chip">
          {item}
        </Tag>
      ))}
    </div>
  </Card>
);

export default ProjectCard;
