import React, { useEffect, useContext } from "react";
import { Card, CardDeck, Nav, Button, Container, Row } from "react-bootstrap";
import { GlobalContext } from "../../utils/GlobalState";

const SearchTrailResult = ({ filteredTrails }) => {
  //code for saving to favorites
  const { addTrailToFav, trailList } = useContext(GlobalContext);

  let storedTrail = trailList.find((o) => o.id === filteredTrails.id);

  const trailListDisabled = storedTrail ? true : false;

  return (
    <Container>
      {/* {console.log(storedTrail)} */}
      <Container className="results">
        <h5>Trail Results</h5>
        {filteredTrails.map((trail) => (
          // console.log(trail )
          // if trail is in storedTrail then false
          <CardDeck>
            <Card
              className="result-card"
              key={trail.id}
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={trail.image} />
              <Card.Body>
                <Card.Title>{trail.trail}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {trail.location}
                </Card.Subtitle>
                <Card.Text>
                  Distance (km): {trail.distance}
                  <br />
                  Difficulty: {trail.difficulty}
                  <br />
                  Rating: {trail.rating}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Row>
                  <Nav.Item>
                    <Nav.Link href={trail.link} target="_blank">
                      Visit Site
                    </Nav.Link>
                  </Nav.Item>
                  <Button
                    className="btn"
                    // disabled={trailListDisabled}
                    onClick={() => addTrailToFav(trail)}
                    variant="primary"
                  >
                    Save Trail
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </CardDeck>
        ))}
      </Container>
    </Container>
  );
};

export default SearchTrailResult;
