import React from "react";
import "../Header/style.css";
// import logo from "../../img/co-strong-transparent.png";

export const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        {/* <img src={logo} className="header-logo"/> */}

        <h1>Tour De Hops</h1>
        <h3>Hiking and Brews!</h3>
      </div>
    </div>
  );
};

export default Header;
