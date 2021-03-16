import React from "react";
import { Container, Jumbotron, Image } from "react-bootstrap";
import "../Header/style.css";
import mtn from "../../img/mountain-hiking.png";

export const Header = () => {
  return (
    <Jumbotron fluid id="home" className="header-wrapper">
      <Container className="main-info">
        <h1>Tour De Hops</h1>
        <br />
        <Image fluid className="img" src={mtn} alt="mountain png" />
        <br />
        <h3>Where the trail and brews meet!</h3>
      </Container>
    </Jumbotron>
  );
};

export default Header;
