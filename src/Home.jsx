import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import logo from "./assets/logo-pnc.png";
import heroImage from "./assets/uc-hero.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className="hero-section d-flex flex-column align-items-center justify-content-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content text-white position-relative container px-3">
          <div>
            <img
              src={logo}
              alt="Logo"
              width="155"
              height="140"
              className="d-inline-block align-text-top me-2"
            />
          </div>
          <h2 className="fw-semibold mb-2 animate-fade">Dangal Greetings!</h2>
          <h1 className="display-4 fw-bold mb-2 animate-fade">Welcome to</h1>
          <h1 className="display-3 fw-bold mb-3 text-uppercase text-success-glow animate-fade">
            University of Cabuyao
          </h1>
          <p className="lead mb-4 fst-italic animate-fade">
            Formerly known as{" "}
            <span className="fw-semibold text-success-light">
              Pamantasan ng Cabuyao
            </span>
          </p>
          <Link
            to="/about"
            className="btn btn-success btn-lg fw-semibold shadow-sm animate-fade hover-glow"
          >
            Learn More
          </Link>
        </div>

        {/* Optional subtle scroll indicator */}
        <div className="scroll-indicator text-white position-absolute bottom-0 mb-4 animate-bounce">
          <i className="bi bi-chevron-double-down fs-3"></i>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-success">Mission & Vision</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="p-4 bg-light rounded shadow-sm">
                <h4 className="fw-semibold">Mission</h4>
                <p>
                  As an institution of higher learning, PnC is committed to
                  equip individuals with knowledge, skills, and values that will
                  enable them to achieve their professional goals and provide
                  leadership and service for national development.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-4 bg-light rounded shadow-sm">
                <h4 className="fw-semibold">Vision</h4>
                <p>
                  UC envisions itself as a leading institution that produces
                  competent graduates who contribute to national progress
                  through innovation, research, and community service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-5 bg-success text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Gallery</h2>
          <div className="row g-4">
            <div className="col-6 col-md-4">
              <div className="gallery-box bg-white rounded shadow-sm p-3 text-success fw-semibold">
                <img src={img1} alt="Image-1" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="gallery-box bg-white rounded shadow-sm p-3 text-success fw-semibold">
                <img src={img2} alt="Image-2" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="gallery-box bg-white rounded shadow-sm p-3 text-success fw-semibold">
                <img src={img3} alt="Image-3" className="img-fluid rounded" />
              </div>
            </div>
            <div>
              <Link
                to="/gallery"
                className="btn btn-light btn-lg fw-semibold shadow-sm animate-fade hover-glow"
                data-bs-theme="dark"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-success">About Us</h2>
          <p className="lead">
            The University of Cabuyao is dedicated to academic excellence and
            innovation in education, research, and public service.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-success">Contact Us</h2>
          <p>Email: info@universityofcabuyao.edu.ph</p>
          <p>Phone: (049) 123-4567</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
