import React from "react";
import "../Header/style.css";
import mtn from '../../img/mountain-hiking.png'

export const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Tour De Hops</h1>
        <br />
        <img className="hiker" src={mtn} alt="mountain png" />
        <br />
        <h3>Where the trail and brews meet!</h3>
      </div>
    </div>
  );
};

export default Header;
