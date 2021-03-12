import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import "../Cards/style.css";

const SearchResult = ({ trails }) => {
  // console.log("inside of searchresult", trails);

  return (
    <div className="container">
      <div className="results">
        Results
        <CardDeck>
        {trails.map((trail) => (<Card key={trail.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{trail.trail}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {trail.location}
            </Card.Subtitle>
            <Card.Text>
              {trail.distance}
              {trail.difficulty}
            </Card.Text>
            <Card.Link href="#">{trail.link}</Card.Link>
          </Card.Body>
        </Card>))}
        </CardDeck>
      </div>
    </div>
  );
};

export default SearchResult;

