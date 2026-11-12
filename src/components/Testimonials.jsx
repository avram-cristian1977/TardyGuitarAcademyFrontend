const Testimonials = ({
  testimonialSections,
  formatTestimonialHeading,
}) => {
  return (
    <section
      id="testimonials"
      className="section dark-section"
    >
      <div className="section-inner">

        <p className="eyebrow">
          TESTIMONIALE
        </p>

        <h2>
          Experiențele elevilor
        </h2>

          <div className="testimonial-grid">

            {testimonialSections.map(
              (section, index) => (

                <article
                  className="testimonial-card"
                  key={index}
                >

                  <div className="testimonial-quote">
                    “
                  </div>

                  <div className="testimonial-content">

                    {section.title && (
                      <h3>
                        {formatTestimonialHeading(
                          section.title
                        )}
                      </h3>
                    )}

                    {section.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>
                          {paragraph}
                        </p>
                      )
                    )}

                    {section.items.length > 0 && (

                      <div className="testimonial-items">

                        {section.items.map(
                          (item, itemIndex) => (
                            <span key={itemIndex}>
                              {item}
                            </span>
                          )
                        )}

                      </div>

                    )}

                  </div>

                  <div className="testimonial-line" />

                </article>

              )
            )}

          </div>

      </div>
    </section>
  );
}

export default Testimonials;