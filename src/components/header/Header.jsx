import { NavLink, Link } from "react-router";

import "./header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__main">
        VD
      </Link>

      <div className="header__links">
        <NavLink to="/" className="header__link">
          Decode
        </NavLink>
        <span>/</span>
        <NavLink to="/variables" className="header__link">
          Variables
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
