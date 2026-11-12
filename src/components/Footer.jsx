
const Footer = () => {
  const whatsappNumber = "40728181218";

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo">
          TARDY GUITAR ACADEMY
        </div>

        <p className="footer-tagline">
          Nu doar chitariști. Muzicieni.
        </p>

        <div className="footer-contact">
          <span className="footer-contact-label">
            AI O ÎNTREBARE?
          </span>

          <h3>Hai să vorbim.</h3>

          <p>
            Pentru informații despre lecții, abonamente sau programări,
            mă poți contacta direct pe WhatsApp.
          </p>

          <a
            className="whatsapp-button"
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="whatsapp-icon">◉</span>
            Scrie pe WhatsApp
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Tardy Guitar Academy
        </p>

        <div className="footer-legal">
          <p>
            Servicii de educație muzicală oferite de:
          </p>

          <p>
            <strong>AVRAM CRISTIAN PFA</strong>
          </p>

          <p>
            CUI: [CUI] | Nr. Reg. Com.: [Număr înregistrare]
          </p>

          <p>
            Sediu profesional: [Adresa sediului profesional]
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
