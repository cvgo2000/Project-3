import React from "react";
import { Card, CardDeck, Nav, Button } from "react-bootstrap";
import coBrewImg from "../../img/co-craft-beer.jpg";
import "../SearchResults/style.css"

const SearchBrewResult = ({ breweries }) => {
  return (
    <div className="container">
      <div className="results">
        Brewery Results
        {breweries.map((brewery) => (
          <CardDeck>
            <Card className="result-card" key={brewery.id} style={{ width: "18rem"}}>
              <Card.Img variant="top" src={coBrewImg} />
              <Card.Body>
                <Card.Title>{brewery.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {brewery.city}
                </Card.Subtitle>
                <Card.Text>
                  Address: {brewery.street}
                  <br />
                  Phone: {brewery.phone}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <div className='row'>
                <Nav.Item>
                  <Nav.Link className="nav-link"href={brewery.website_url} target="_blank">Visit Site</Nav.Link>
                </Nav.Item>
                <Button variant="primary">Save Brewery</Button>
                </div>
              </Card.Footer>
            </Card>
          </CardDeck>
        ))}
      </div>
    </div>
  );
};

export default SearchBrewResult;
