import { Card, Col, Row, Space, Typography, Tag } from "antd";

const { Title, Paragraph } = Typography;

const aiHighlights = [
  {
    title: "Product co-pilots",
    description: "Designed workflows where AI recommends actions and explains decisions inline.",
    tags: ["UX", "Prompting", "Evaluation"],
  },
  {
    title: "GenAI prototypes",
    description: "Rapid experiments connecting LLMs to product data with safety rails for users.",
    tags: ["LLM", "Prototyping", "Guardrails"],
  },
  {
    title: "Data storytelling",
    description: "Narratives that blend charts, text, and AI summaries to make insights stick.",
    tags: ["Data Viz", "Narrative", "Motion"],
  },
];

const ArtificialIntelligence = () => (
  <section className="section">
    <div className="section-header">
      <div>
        <div className="eyebrow">Practice area</div>
        <Title level={2}>Artificial Intelligence</Title>
      </div>
      <Paragraph className="section-copy">
        Exploring how AI elevates product value through trustworthy assistants, explainable outputs, and clear UX patterns.
      </Paragraph>
    </div>

    <Card className="card" bordered>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Title level={3}>Approach</Title>
          <Paragraph className="card-body">
            I focus on pairing strong UX with reliable AI behavior: setting expectations, clarifying confidence, and giving users control. Prototyping quickly and measuring quality keeps features honest.
          </Paragraph>
        </div>

        <div>
          <Title level={3}>Highlights</Title>
          <Row gutter={[12, 12]}>
            {aiHighlights.map((item) => (
              <Col xs={24} sm={12} md={8} key={item.title}>
                <Card className="card" bordered>
                  <Title level={4}>{item.title}</Title>
                  <Paragraph className="card-body">{item.description}</Paragraph>
                  <Space wrap>
                    {item.tags.map((tag) => (
                      <Tag key={tag} color="green" className="chip">
                        {tag}
                      </Tag>
                    ))}
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <Title level={3}>What I bring</Title>
          <Paragraph className="card-body">
            - Mapping user intents to AI capabilities
            <br />- Prompt and response design with safety in mind
            <br />- Prototyping with real data to validate usefulness
            <br />- Clear success metrics and evaluation loops
          </Paragraph>
        </div>

        <Card className="contact-card" bordered={false}>
          <Title level={3}>Have an AI idea to explore?</Title>
          <Paragraph className="section-copy">
            Let&apos;s pair up to design a pilot, validate it with users, and ship with confidence.
          </Paragraph>
          <Space>
            <a className="primary-button" href="mailto:nicolasranz@gmail.com">
              Email me
            </a>
            <a className="ghost-button" href="/">
              Back to home
            </a>
          </Space>
        </Card>
      </Space>
    </Card>
  </section>
);

export default ArtificialIntelligence;
