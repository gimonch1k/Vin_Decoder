import { NavLink, Link } from "react-router";

import "./header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__main">
        VD
      </Link>
    </header>
  );
}

export default Header;
