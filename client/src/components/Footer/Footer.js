import React from "react";
import "../../components/Footer/style.css";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bg-success">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
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
