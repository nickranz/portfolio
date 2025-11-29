import { Button, Space, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const Hero = () => (
  <section className="hero" id="home">
    <div className="eyebrow">Portfolio · 2024</div>
    <Title level={1}>
      I craft expressive digital products that feel fast, intentional, and human.
    </Title>
    <Paragraph className="lede">
      I partner with teams to shape product direction, build resilient interfaces, and
      ship experiences that customers remember.
    </Paragraph>
    <Space className="cta-row" wrap>
      <Button type="primary" size="large" href="#projects" className="primary-button">
        View selected work
      </Button>
      <Button
        type="default"
        size="large"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="ghost-button"
      >
        LinkedIn
      </Button>
    </Space>
    <div className="pill-grid">
      <div className="pill">
        <span className="pill-label">Years in craft</span>
        <Text strong>7+</Text>
      </div>
      <div className="pill">
        <span className="pill-label">Shipped releases</span>
        <Text strong>40+</Text>
      </div>
      <div className="pill">
        <span className="pill-label">Design systems</span>
        <Text strong>3</Text>
      </div>
    </div>
  </section>
);

export default Hero;
