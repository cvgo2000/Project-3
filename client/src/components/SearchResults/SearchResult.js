import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import "../Cards/style.css";

const SearchResult = ({ trails }) => {
  // console.log("inside of searchresult", trails);

  return (
    <div className="container">
      <div className="results">
        Results
        {trails.location.filter(location => location.includes('D')).map((trail) => (
          <CardDeck>
            <Card key={trail.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://cdn2.apstatic.com/photos/hike/7053480_large_1555703487.jpg" />
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
            </Card>
          </CardDeck>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
