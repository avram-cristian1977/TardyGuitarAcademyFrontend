const Hero = ({ scrollTo }) => {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <div className="hero-text">

          <h1>
            Nu doar chitariști.
            <br />
            <span>Muzicieni.</span>
          </h1>

          <p className="hero-description">
            Învață chitara. Înțelege muzica.
            Creează-ți propriile piese.
          </p>

          <div className="hero-buttons">

<button
  className="primary-button"
  onClick={() =>
    window.open(
      "https://wa.me/40728181218",
      "_blank",
      "noopener,noreferrer"
    )
  }
>
  Programează o lecție
</button>

            <button
              className="secondary-button"
              onClick={() => scrollTo("method")}
            >
              Descoperă metoda
            </button>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-card">

            <img
              className="hero-logo"
              src="/logo.png"
              alt="Tardy Guitar Academy"
            />

            <div className="hero-message">

              <p>
                Învață să creezi.
              </p>

              <span>
                Nu doar să reproduci.
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;