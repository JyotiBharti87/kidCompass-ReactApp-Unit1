import { Link } from "react-router-dom";

import "../App.css";

function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="logo-container">
        <img src="/kidcompass_final.svg" alt="" className="logo" />
      </Link>
      <div className="nav-links">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
    </header>
  );
}
export default Header;
