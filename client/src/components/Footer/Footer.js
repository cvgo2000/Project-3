import React from "react";
import "../../components/Footer/style.css";
import { FaCopyright } from "react-icons/fa";
// import logo from "../../img/logo_transparent.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" >
              {/* <img className="logo" src={logo} alt="logo" /> */}
              <p className="copyright">
                <FaCopyright size={30} /> Christian Go, Cody Chen, Cody Johnson,
                Devyn Bailey
              </p>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
