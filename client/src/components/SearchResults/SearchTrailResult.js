import React from "react";
import { Card, CardDeck, Nav, Button } from "react-bootstrap";
import "../Cards/style.css";

const SearchTrailResult = ({ filteredTrails }) => {

  return (
    <div className="container">
      <div className="results">
        Trail Results
        {filteredTrails.map((trail) => (
          <CardDeck>
            <Card key={trail.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={trail.image} />
              <Card.Body>
                <Card.Title>{trail.trail}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {trail.location}
                </Card.Subtitle>
                <Card.Text>
                  Distance: {trail.distance}
                  <br />
                  Difficulty: {trail.difficulty}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Nav.Item>
                  <Nav.Link href={trail.link} target="_blank">Visit Site</Nav.Link>
                </Nav.Item>
                <Button variant="primary">Save Trail</Button>
              </Card.Footer>
            </Card>
          </CardDeck>
        ))}
      </div>
    </div>
  );
};

export default SearchTrailResult;
