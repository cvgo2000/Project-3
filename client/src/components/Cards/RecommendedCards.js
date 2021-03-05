import React from "react";
import { CardDeck, Card, Row } from "react-bootstrap";
import "../../components/Cards/style.css";
import outerrange from "../../img/outer-range-brewing.jpg";
import dreamlake from "../../img/CO_dream_lake_trail.jpg";
import aspenbrewimg from "../../img/Aspen-Brewing-Company.jpg";
import hanglake from "../../img/hanging-lake.jpg";

const RecommendedCards = () => {
  return (
    <div className="container">
      <div className="card-container">
        <CardDeck>
          <Row className="row">
            <h2>Recommended Trails and Brewery</h2>
          </Row>
          <Row className="row">
            <Card className="cards">
              <Card.Img variant="top" src={outerrange} />
              <Card.Body>
                <Card.Title>Outer Range Brewing, Frisco CO</Card.Title>
                <Card.Text>
                Deserunt est enim consequat id aliquip esse.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="cards">
              <Card.Img variant="top" src={dreamlake} />
              <Card.Body>
                <Card.Title>Dream Lake Trail, Estes Park CO</Card.Title>
                <Card.Text>
                Deserunt est enim consequat id aliquip esse.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="cards">
              <Card.Img variant="top" src={aspenbrewimg} />
              <Card.Body>
                <Card.Title>Aspen Brewing, Aspen CO</Card.Title>
                <Card.Text>
                Deserunt est enim consequat id aliquip esse.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="cards">
              <Card.Img variant="top" src={hanglake} />
              <Card.Body>
                <Card.Title>Hanging Lake, Glenwood Springs CO</Card.Title>
                <Card.Text>
                Deserunt est enim consequat id aliquip esse.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Row>
        </CardDeck>
      </div>
    </div>
  );
};

export default RecommendedCards;
