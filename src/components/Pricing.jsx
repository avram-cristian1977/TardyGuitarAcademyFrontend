const Pricing = () => {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="section-inner">
        <p className="eyebrow">PREȚURI</p>

        <h2>
          Alege ritmul potrivit
          <br />
          pentru tine.
        </h2>

        <div className="pricing-layout">
          <div className="pricing-intro">
            <h3>Lecții individuale</h3>

            <p>Lecțiile se desfășoară individual, unu la unu.</p>
          </div>

          <div className="pricing-offers">
            <article className="pricing-offer">
              <span className="pricing-offer-label">01</span>

              <h3>Abonament 4 lecții / lună</h3>

              <ul>
                <li>
                  <span>✓</span>4 lecții individuale.
                </li>

                <li>
                  <span>✓</span>
                  60–75 minute / lecție.
                </li>
              </ul>

              <div className="pricing-price">
                <strong>300 lei</strong>

                <span>/ lună</span>
              </div>

              <button
                className="primary-button"
                onClick={() =>
                  window.open(
                    "https://wa.me/40728181218",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                Programează o lecție
              </button>
            </article>

            <article className="pricing-offer pricing-offer-featured">
              <span className="pricing-offer-label">02</span>

              <span className="pricing-recommended">RECOMANDAT</span>

              <h3>Abonament 8 lecții / lună</h3>

              <ul>
                <li>
                  <span>✓</span>8 lecții individuale.
                </li>

                <li>
                  <span>✓</span>
                  60–75 minute / lecție.
                </li>
              </ul>

              <div className="pricing-price">
                <strong>500 lei</strong>

                <span>/ lună</span>
              </div>

              <button
                className="primary-button"
                onClick={() =>
                  window.open(
                    "https://wa.me/40728181218",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                Programează o lecție
              </button>
            </article>
          </div>

          <article className="pricing-info-block">
            <div className="pricing-info-header">
              <span className="pricing-section-number">03</span>

              <h3>Personalizarea lecțiilor</h3>
            </div>

            <p>Fiecare lecție este personalizată în funcție de:</p>

            <div className="pricing-tags">
              <span>Nivelul elevului</span>
              <span>Obiectivele elevului</span>
              <span>Ritmul de învățare</span>
              <span>Preferințele muzicale</span>
            </div>
          </article>

          <article className="pricing-info-block pricing-info-wide">
            <div className="pricing-info-header">
              <span className="pricing-section-number">04</span>

              <h3>Recuperarea lecțiilor</h3>
            </div>

            <p>
              Lecțiile la care elevul nu poate participa pot fi recuperate în
              cadrul lunii următoare, în limita disponibilității.
            </p>

            <p>
              Pentru o bună organizare, recomandăm anunțarea din timp atunci
              când o lecție nu poate fi onorată.
            </p>
          </article>

          <div className="pricing-production">
            <div className="pricing-production-header">
              <p className="eyebrow">PRODUCȚIE MUZICALĂ</p>

              <h3>Înregistrare și producție muzicală</h3>

              <p>
                Tardy Guitar Academy oferă posibilitatea de a lucra practic la
                propriile proiecte muzicale, de la ideea inițială până la o
                producție completă.
              </p>
            </div>

            <div className="pricing-production-grid">
              <article className="production-card">
                <span className="pricing-section-number">05</span>

                <h3>Înregistrare și preproducție</h3>

                <div className="production-price">
                  <strong>60 lei</strong>

                  <span>/ oră</span>
                </div>
              </article>

              <article className="production-services">
                <span className="pricing-section-number">06</span>

                <h3>Servicii disponibile</h3>

                <ul>
                  <li>Dezvoltarea și organizarea ideilor muzicale.</li>

                  <li>Construirea unei piese.</li>
                  <li>Înregistrarea chitarelor și a altor instrumente.</li>

                  <li>Preproducție.</li>

                  <li>Programarea și editarea părților de tobe.</li>

                  <li>Lucrul cu software de producție muzicală.</li>

                  <li>Experimentarea cu sunete și efecte.</li>

                  <li>Mix si master.</li>

                  <li>Pregătirea unei compoziții pentru etapa de producție.</li>
                </ul>
              </article>
            </div>

            <article className="pricing-own-music">
              <span className="pricing-section-number">07</span>

              <div>
                <h3>Lucrul la propriile piese</h3>

                <p>
                  Elevii au posibilitatea nu doar să învețe despre producție
                  muzicală, ci să lucreze efectiv la propriile piese și să
                  transforme ideile lor în muzică.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
