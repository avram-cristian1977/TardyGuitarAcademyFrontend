const Academy = ({
  academySections,
  academyStats,
  renderWhyTga,
  renderGenericSection,
}) => {
  return (
    <section id="academy" className="section about-section">
      <div className="section-inner">
        <div className="academy-header">
          <p className="eyebrow">DESPRE ACADEMIE</p>

          <h2>Mai mult decât o școală de chitară</h2>
        </div>

        <>
          <div className="content-sections">
            {academySections.map((section, index) => {
              if (
                section.title
                  .toLowerCase()
                  .includes("de ce tardy guitar academy")
              ) {
                return (
                  <article className="content-block" key={index}>
                    <h3>De ce Tardy Guitar Academy?</h3>

                    {renderWhyTga(section)}
                  </article>
                );
              }

              return renderGenericSection(section, index);
            })}
          </div>

          <div className="academy-stats">
            {academyStats.map((stat, index) => (
              <div className="academy-stat" key={index}>
                <strong>{stat.value}</strong>

                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </>
      </div>
    </section>
  );
};

export default Academy;
