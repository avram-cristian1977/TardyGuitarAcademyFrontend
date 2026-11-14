const Footer = () => {
  const whatsappNumber = "40728181218";

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">TARDY GUITAR ACADEMY</div>

          <p className="footer-tagline">Nu doar chitariști. Muzicieni.</p>
        </div>

        <div className="footer-contact">
          <span className="footer-contact-label">AI O ÎNTREBARE?</span>

          <h3>Hai să vorbim.</h3>

          <p>
            Pentru informații despre lecții, abonamente sau programări, mă poți
            contacta direct pe WhatsApp.
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
        <p>© {new Date().getFullYear()} Tardy Guitar Academy</p>
        <div className="footer-social-links">
          <a
            href="https://www.youtube.com/@TARDY-xq5by"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link youtube"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
            </svg>
            YouTube
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61596225283433"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link facebook"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.3c0-3 1.8-4.7 4.5-4.7 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12H17l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12Z" />
            </svg>
            Facebook
          </a>
        </div>

        <div className="footer-legal">
          <p>Servicii de educație muzicală oferite de:</p>

          <p>
            <strong className="pfa-text">AVRAM ȘTEFAN CRISTIAN PFA</strong>
          </p>
          {/* 
          <p>CUI: [CUI] | Nr. Reg. Com.: [Număr înregistrare]</p>

          <p>Sediu profesional: [Adresa sediului profesional]</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
