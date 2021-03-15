import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
//Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../Navbar/style.css";
import AuthNav from "../auth-nav";

export const AppNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="light" className="navbar">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link
            smooth={true}
            to="/"
            offset={-50}
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
            // href="#"
          >
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link
            smooth={true}
            to="/search"
            offset={-50}
            className="nav-link"
            href="#"
          >
            Search
          </Link>
          <Link
            smooth={true}
            to="/favorites"
            offset={-50}
            className="nav-link"
            href="#"
          >
            Favorites
          </Link>
        </Nav>
        <AuthNav />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;


// ******** OLD NAVBAR SET UP ************
// <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    //   <div className="container">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <div className="col ">
    //         <ul className="navbar-nav ">
    //           <li className="nav-item active justify-content-center">
    //             <Link
    //               smooth={true}
    //               to="/"
    //               offset={-50}
    //               className={
    //                 window.location.pathname === "/"
    //                   ? "nav-link active"
    //                   : "nav-link"
    //               }
    //             // href="#"
    //             >
    //               Home <span className="sr-only">(current)</span>
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link
    //               smooth={true}
    //               to="/search"
    //               offset={-50}
    //               className="nav-link"
    //               href="#"
    //             >
    //               Search
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link
    //               smooth={true}
    //               to="/favorites"
    //               offset={-50}
    //               className="nav-link"
    //               href="#"
    //             >
    //               Favorites
    //             </Link>
    //           </li>
    //           <AuthNav />
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>