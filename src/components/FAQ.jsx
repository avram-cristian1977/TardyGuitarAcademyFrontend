const FAQ = ({
  faqSections,
  formatHeading,
}) => {
  return (
    <section
      id="faq"
      className="section dark-section"
    >
      <div className="section-inner">

        <p className="eyebrow">
          FAQ
        </p>

        <h2>
          Întrebări frecvente
        </h2>

          <div className="faq-list">

            {faqSections.map(
              (section, index) => (

                <article
                  className="faq-item"
                  key={index}
                >

                  <div className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="faq-content">

                    <h3>
                      {formatHeading(section.title)}
                    </h3>

                    {section.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>
                          {paragraph}
                        </p>
                      )
                    )}

                    {section.items.length > 0 && (

                      <ul>

                        {section.items.map(
                          (item, itemIndex) => (
                            <li key={itemIndex}>
                              {item}
                            </li>
                          )
                        )}

                      </ul>

                    )}

                  </div>

                </article>

              )
            )}

          </div>

      </div>
    </section>
  );
}

export default FAQ;