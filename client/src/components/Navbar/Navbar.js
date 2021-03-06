import React from "react";
// import { Link } from 'react-scroll';
import { Link } from "react-router-dom";
//Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../img/logo_transparent.png'
import "../Navbar/style.css"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success fixed-top">
      <div className="container">
        <Link to="/">
            <img src={logo} alt="logo" className="app-logo"/>
        </Link>
        
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
                to="/"
                offset={-50}
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
                // href="#"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="/search"
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
                to="/favorites"
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
                to="/signin"
                offset={-50}
                className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
                // href="#"
              >
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="/signin"
                offset={-50}
                className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
                // href="#"
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
