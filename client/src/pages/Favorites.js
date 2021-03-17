import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../utils/GlobalState";
import { Card, CardDeck, Nav, Button, Container, Row } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import "../App.css";

const Favorites = ({ type, trail }) => {
  const { trailList } = useContext(GlobalContext);
  const { removeTrailFromFav } = useContext(GlobalContext);

  return (
    <Container className="fav-container">
      <div className="header">
        <h1 className="text-center">Here's All of Your Favorite Trails</h1>
      </div>

      <hr></hr>
      {console.log(trailList)}
      {trailList.length > 0 ? (
        <Container className="fav-card-container">
          {trailList.map((trail) => (
            <CardDeck>
              <Card
                className="result-card shadow-lg"
                key={trail._id}
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
                      className="ctrl-btn"
                      onClick={() => removeTrailFromFav(trail._id)}
                    >
                      <FaTrashAlt />
                    </Button>
                  </Row>
                </Card.Footer>
              </Card>
            </CardDeck>
          ))}
        </Container>
      ) : (
        <h2 className="no-trails">No Trails to display</h2>
      )}
    </Container>
  );
};

export default Favorites;
