import React from "react";
import { CardDeck, Card, Row, Nav, Button } from "react-bootstrap";
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
                <Card.Title>Outer Range Brewing</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Frisco CO
                </Card.Subtitle>
                <Card.Text>
                  Address: 182 Lusher Ct
                  <br />
                  Phone: 9704558709
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <Row>
                    <Nav.Item>
                      <Nav.Link
                        href="https://www.outerrange.com/"
                        target="_blank"
                      >
                        Visit Site
                      </Nav.Link>
                    </Nav.Item>
                    <Button variant="primary" size="sm">
                      Save Brewery
                    </Button>
                  </Row>
                </small>
              </Card.Footer>
            </Card>
            <Card className="cards">
              <Card.Img variant="top" src={dreamlake} />
              <Card.Body>
                <Card.Title>Dream Lake Trail</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Estes Park CO
                </Card.Subtitle>
                <Card.Text>
                  Distance (km): 1.6
                  <br />
                  Difficulty: Intermediate
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <Row>
                    <Nav.Item>
                      <Nav.Link
                        href="https://www.hikingproject.com/trail/7001047/dream-lake-trail"
                        target="_blank"
                      >
                        Visit Site
                      </Nav.Link>
                    </Nav.Item>
                    <Button variant="primary" size="sm">
                      Save Trail
                    </Button>
                  </Row>
                </small>
              </Card.Footer>
            </Card>
            <Card className="cards">
              <Card.Img variant="top" src={aspenbrewimg} />
              <Card.Body>
                <Card.Title>Aspen Brewing</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Aspen CO
                </Card.Subtitle>
                <Card.Text>
                  Address: 121 S Galena St
                  <br />
                  Phone: 9707102461
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"><Row>
                    <Nav.Item>
                      <Nav.Link
                        href="http://aspenbrewingcompany.com/?age-verified=9ec4af4400"
                        target="_blank"
                      >
                        Visit Site
                      </Nav.Link>
                    </Nav.Item>
                    <Button variant="primary" size="sm">
                      Save Brewery
                    </Button>
                  </Row></small>
              </Card.Footer>
            </Card>
            <Card className="cards">
              <Card.Img variant="top" src={hanglake} />
              <Card.Body>
                <Card.Title>Hanging Lake</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Glenwood Springs CO
                </Card.Subtitle>
                <Card.Text></Card.Text>
                <Card.Text>
                  Distance (km): 4.1
                  <br />
                  Difficulty: Intermediate/Difficult
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <Row>
                    <Nav.Item>
                      <Nav.Link
                        href="https://www.hikingproject.com/trail/7003401/hanging-lake"
                        target="_blank"
                      >
                        Visit Site
                      </Nav.Link>
                    </Nav.Item>
                    <Button variant="primary" size="sm">
                      Save Trail
                    </Button>
                  </Row>
                </small>
              </Card.Footer>
            </Card>
          </Row>
        </CardDeck>
      </div>
    </div>
  );
};

export default RecommendedCards;
