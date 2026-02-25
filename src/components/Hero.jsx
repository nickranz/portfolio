import { Button, Space, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const Hero = () => {
  const year = new Date().getFullYear();

  return (
    <section className="hero" id="home">
      <div className="eyebrow">Portfolio · {year}</div>
      <Title level={1}>Hey, I'm Nick!</Title>
      <Paragraph className="lede">I'm a software developer</Paragraph>
      <Space className="cta-row" wrap>
        <Button
          type="primary"
          size="large"
          href="#projects"
          className="primary-button"
        >
          View selected work
        </Button>
        <Button
          type="default"
          size="large"
          href="https://www.linkedin.com/in/nick-ranz"
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
          <Text strong>{year - 2024}+</Text>
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
};

export default Hero;
