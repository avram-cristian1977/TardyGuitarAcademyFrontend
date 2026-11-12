const Navbar = ({ scrollTo }) => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo" onClick={() => scrollTo("home")}>
          <img src="/logo.png" alt="Tardy Guitar Academy" />
        </div>

        <nav>
          <button onClick={() => scrollTo("home")}>Acasă</button>

          <button onClick={() => scrollTo("academy")}>Academie</button>

          <button onClick={() => scrollTo("lessons")}>Lecții</button>

          <button onClick={() => scrollTo("method")}>Metodă</button>

          <button onClick={() => scrollTo("journey")}>Parcurs</button>

          <button onClick={() => scrollTo("pricing")}>Prețuri</button>

          <button onClick={() => scrollTo("about")}>Despre</button>

          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
