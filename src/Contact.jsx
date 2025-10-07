import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="py-5 contact-section">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="contact-header">
              <h2 className="display-4 fw-bold mb-3 contact-title">
                Contact Us
              </h2>
              <p className="lead contact-subtitle">
                Get in touch with us. Whether you have questions, feedback, or
                collaboration ideas, we’d love to hear from you. Connect with
                our team and we’ll get back to you as soon as possible.
              </p>
              <div className="contact-divider"></div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Contact Information */}
          <div className="col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title text-success mb-4 text-center">
                  Get in Touch
                </h3>

                {/* Address */}
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle bg-success text-white me-3">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h6 className="mb-1">Address</h6>
                    <p className="text-muted mb-0">
                      123 University Avenue
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle bg-success text-white me-3">
                    <FaPhone />
                  </div>
                  <div>
                    <h6 className="mb-1">Phone</h6>
                    <p className="text-muted mb-0">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle bg-success text-white me-3">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h6 className="mb-1">Email</h6>
                    <p className="text-muted mb-0">info@university.edu</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle bg-success text-white me-3">
                    <FaClock />
                  </div>
                  <div>
                    <h6 className="mb-1">Office Hours</h6>
                    <p className="text-muted mb-0">
                      Mon - Fri: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-4 text-center">
                  <h6 className="mb-3">Follow Us</h6>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="#" className="social-btn">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="social-btn">
                      <FaTwitter />
                    </a>
                    <a href="#" className="social-btn">
                      <FaInstagram />
                    </a>
                    <a href="#" className="social-btn">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title text-success mb-4 text-center">
                  Send us a Message
                </h3>

                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="6"
                      required
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-success btn-lg">
                      <FaPaperPlane className="me-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
