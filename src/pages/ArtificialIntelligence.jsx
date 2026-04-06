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
  <section className="section" id="ai">
    <div className="section-inner">
      <div className="section-header">
        <div>
          <div className="eyebrow">Practice area</div>
          <h2>Artificial Intelligence</h2>
        </div>
        <p className="section-copy">
          Exploring how AI elevates product value through trustworthy assistants, explainable outputs, and clear UX patterns.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
        <div>
          <h3>Approach</h3>
          <p className="card-body" style={{ marginTop: "0.75rem" }}>
            I focus on pairing strong UX with reliable AI behavior: setting expectations, clarifying confidence, and giving users control. Prototyping quickly and measuring quality keeps features honest.
          </p>
        </div>

        <div>
          <h3>Highlights</h3>
          <div className="grid" style={{ marginTop: "1.5rem" }}>
            {aiHighlights.map((item) => (
              <div key={item.title} className="card">
                <h3 style={{ marginBottom: "0.5rem" }}>{item.title}</h3>
                <p className="card-body">{item.description}</p>
                <div className="chip-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3>What I bring</h3>
          <div className="technical-snippet" style={{ marginTop: "1rem" }}>
            — Mapping user intents to AI capabilities<br />
            — Prompt and response design with safety in mind<br />
            — Prototyping with real data to validate usefulness<br />
            — Clear success metrics and evaluation loops
          </div>
        </div>

        <div className="contact-card">
          <h3>Have an AI idea to explore?</h3>
          <p className="section-copy" style={{ margin: "0.75rem 0 1.5rem" }}>
            Let&apos;s pair up to design a pilot, validate it with users, and ship with confidence.
          </p>
          <div className="cta-row">
            <a className="primary-button" href="mailto:nicolasranz@gmail.com">
              Email me
            </a>
            <a className="ghost-button" href="/">
              Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ArtificialIntelligence;
