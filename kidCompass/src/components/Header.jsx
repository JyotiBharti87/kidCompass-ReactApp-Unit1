import { Link } from "react-router-dom";

import "../App.css";

function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="logo-container">
        <img src="/kidcompass_final.svg" alt="" className="logo" />
      </Link>
    </header>
  );
}
export default Header;
