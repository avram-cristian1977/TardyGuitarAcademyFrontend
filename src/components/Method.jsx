const Method = ({
  methodSections,
  formatHeading,
}) => {
  return (
    <section
      id="method"
      className="section dark-section"
    >
      <div className="section-inner">

        <p className="eyebrow">
          METODA
        </p>

        <h2>
          Învață să creezi,
          <br />
          nu doar să reproduci.
        </h2>

     

          <div className="method-grid">

            {methodSections.map((section, index) => (

              <article
                className="method-card"
                key={index}
              >

                <div className="method-card-top">

                  <span className="method-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="method-line" />

                </div>

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

                  <ul className="method-list">

                    {section.items.map(
                      (item, itemIndex) => (

                        <li key={itemIndex}>
                          <span>✓</span>
                          {item}
                        </li>

                      )
                    )}

                  </ul>

                )}

              </article>

            ))}

          </div>


      </div>
    </section>
  );
}

export default Method;