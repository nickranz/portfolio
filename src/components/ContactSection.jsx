import { Button, Card, Space, Typography } from "antd";

const { Title, Paragraph } = Typography;

const ContactSection = () => {
  return (
    <section className="section contact" id="contact">
      <Card className="contact-card" bordered={false}>
        <div>
          <div className="eyebrow">Let&apos;s build</div>
          <Title level={2}>Ready for a new project or collaboration?</Title>
          <Paragraph className="section-copy">
            I love tackling ambiguous problems, elevating product vision, and
            shipping polished experiences.
          </Paragraph>
        </div>
        <Space className="cta-row" wrap>
          <Button
            type="primary"
            size="large"
            href="mailto:nicolasranz@gmail.com"
            className="primary-button"
          >
            Email me
          </Button>
          <Button
            type="default"
            size="large"
            href="#projects"
            className="ghost-button"
          >
            See more work
          </Button>
        </Space>
      </Card>
    </section>
  );
};
export default ContactSection;
