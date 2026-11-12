const Journey = ({ journeySections, formatHeading }) => {
  return (
    <section id="journey" className="section">
      <div className="section-inner">
        <p className="eyebrow">PARCURSUL ELEVULUI</p>

        <h2>
          De la chitarist
          <br />
          la muzician.
        </h2>

        <div className="journey-grid">
          {journeySections.map((section, index) => (
            <article className="journey-card" key={index}>
              <div className="journey-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="journey-card-content">
                <h3>{formatHeading(section.title)}</h3>

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}

                {section.items.length > 0 && (
                  <div className="journey-items">
                    {section.items.map((item, itemIndex) => (
                      <span className="journey-item" key={itemIndex}>
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
