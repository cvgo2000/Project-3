import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import "../Cards/style.css";

const SearchBrewResult = ({ breweries }) => {

  return (
    <div className="container">
      <div className="results">
        
        Brewery Results
        {breweries.map((brewery) => (
          <CardDeck>
            <Card key={brewery.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://static.wixstatic.com/media/6f16e4_75c18fcd4018499eacda48cda995e385~mv2.png/v1/fill/w_560,h_480,al_c,q_85,usm_0.66_1.00_0.01/6f16e4_75c18fcd4018499eacda48cda995e385~mv2.webp" />
              <Card.Body>
                <Card.Title>{brewery.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {brewery.city}
                </Card.Subtitle>
                <Card.Text>
                  {brewery.street}
                  {brewery.phone}
                </Card.Text>
                <Card.Link href="#">{brewery.website_url}</Card.Link>
              </Card.Body>
            </Card>
          </CardDeck>
        ))}
      </div>
    </div>
  );
};

export default SearchBrewResult;
