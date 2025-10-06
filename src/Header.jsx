import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "./assets/logo-pnc.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            width="44"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          <b>University of Cabuyao</b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/mission-vision">
              Mission & Vision
            </Link>
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
