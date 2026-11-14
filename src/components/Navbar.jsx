import { useState } from "react";

const Navbar = ({ scrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    scrollTo(section);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo" onClick={() => handleNavigation("home")}>
          <img src="/logo.png" alt="Tardy Guitar Academy" />
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Deschide meniul"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuOpen ? "mobile-menu-open" : ""}>
          <button onClick={() => handleNavigation("home")}>Acasă</button>
          <button onClick={() => handleNavigation("academy")}>Academie</button>
          <button onClick={() => handleNavigation("lessons")}>Lecții</button>
          <button onClick={() => handleNavigation("method")}>Metodă</button>
          <button onClick={() => handleNavigation("journey")}>Parcurs</button>
          <button onClick={() => handleNavigation("pricing")}>Prețuri</button>
          <button onClick={() => handleNavigation("about")}>Despre</button>
          <button
            onClick={() => {
              document.getElementById("footer")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
