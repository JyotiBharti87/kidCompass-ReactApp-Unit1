import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";

function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="logo-container">
        <img src={logo} alt="Kid Compass Logo" className="logo" />
      </Link>
    </header>
  );
}
export default Header;
