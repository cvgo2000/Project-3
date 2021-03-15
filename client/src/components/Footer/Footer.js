import React from "react";
import "../../components/Footer/style.css";
import { FaCopyright, FaGithub } from "react-icons/fa";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" >
              <p className="copyright">
                <FaCopyright size={30} /> Christian Go, Cody Chen, Cody Johnson,
                Devyn Bailey 
                <br />
                <Nav.Link href="https://github.com/cvgo2000/Project-3" target="_blank"><FaGithub size={30} /></Nav.Link>
                
              </p>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
