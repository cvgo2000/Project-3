import React from "react";
import { Link } from 'react-scroll';
//Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success fixed-top">
      <div className="container">
        <div className="app-name">
            Tour De Hops
        </div>
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                smooth={true}
                to="home"
                offset={-50}
                className="nav-link"
                href="#"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-50}
                className="nav-link"
                href="#"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-50}
                className="nav-link"
                href="#"
              >
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contact"
                offset={-50}
                className="nav-link"
                href="#"
              >
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contact"
                offset={-50}
                className="nav-link"
                href="#"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
