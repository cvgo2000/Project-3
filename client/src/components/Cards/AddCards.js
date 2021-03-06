import React from "react";
import { CardDeck, Card, Row, Button } from "react-bootstrap";
import "../../components/Cards/style.css";
import brewery from "../../img/Brewery-background.jpg";
import hiking from "../../img/hiking-background.jpeg";


const Add = () => {
    return (
        <div className="container">
      <div className="card-container">
        <CardDeck>
          <Row className="row">
            <Card className="cards">
              <Card.Img variant="top" src={brewery} />
              <Card.Body>
                <Card.Title>Have a favorite spot not on our list?</Card.Title>
                <Card.Text>
                Deserunt est enim consequat id aliquip esse.
                </Card.Text>
                <Button variant="primary">Add Brewery</Button>
              </Card.Body>
            </Card>
            <Card className="cards">
              <Card.Img variant="top" src={hiking} />
              <Card.Body>
                <Card.Title>Add a favorite trail.</Card.Title>
                <Card.Text>
                Deserunt est enim consequat id aliquip esse.
                </Card.Text>
                <Button variant="primary">Add Trail</Button>
              </Card.Body>
            </Card>
            
          </Row>
        </CardDeck>
      </div>
    </div>
    )
}

export default Add
