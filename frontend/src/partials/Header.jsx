import React from "react";
import "../assets/css/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        {/* Top Contact Strip */}
        <div className="top-contact-strip">
          <div className="container d-flex justify-content-between align-items-center py-1">
            {/* Left: Phone Numbers */}
            <div className="d-flex gap-4">
              <span>
                <i className="fas fa-phone-alt me-2" /> +91 9571470660
              </span>
              <span>
                <i className="fas fa-phone-alt me-2" /> +91 9950522660
              </span>
              <span>
                <i className="fas fa-phone-alt me-2" /> +91 1413185588
              </span>
            </div>
            {/* Right: Icons */}
            <div className="d-flex gap-3">
              <a
                href="mailto:trycamjpr@gmail.com"
                onclick="window.open('https://mail.google.com/mail/?view=cm&to=trycamjpr@gmail.com', '_blank')"
                className="text-dark"
              >
                <i className="fas fa-envelope" />
              </a>
              <a
                href="https://instagram.com/trycam_murlipura/"
                target="_blank"
                className="text-dark"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="./images/all/logo.webp" alt="TRYCAM Logo" height={60} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/testimonials"
                  >
                    Testimonials
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/rajcen"
                  >
                    Rajasthan Centers
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/media"
                  >
                    Media
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
