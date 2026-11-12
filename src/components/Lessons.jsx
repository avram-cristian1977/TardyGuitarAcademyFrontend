const Lessons = ({ lessonSections = [], formatHeading = (text) => text }) => {
  const renderLessonSection = (section, index) => {
    const paragraphs = Array.isArray(section?.paragraphs)
      ? section.paragraphs
      : [];

    const items = Array.isArray(section?.items) ? section.items : [];

    const title = section?.title || "";

    const specialSections = ["BROKEN LINK", "PLAY THE MOUTH"];

    const isSpecial = specialSections.includes(title.toUpperCase());

    return (
      <article
        className={`lesson-card ${isSpecial ? "lesson-card-special" : ""}`}
        key={index}
      >
        <div className="lesson-card-number">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="lesson-card-content">
          {title && <h3>{formatHeading(title)}</h3>}

          {paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}

          {items.length > 0 && (
            <div className="lesson-items">
              {items.map((item, itemIndex) => (
                <span className="lesson-item" key={itemIndex}>
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  };

  return (
    <section id="lessons" className="section">
      <div className="section-inner">
        <p className="eyebrow">LECȚII</p>

        <h2>Cum arată o lecție?</h2>

        <>
          <div className="lesson-grid">
            {lessonSections.map(renderLessonSection)}
          </div>
        </>
      </div>
    </section>
  );
};

export default Lessons;
