import React, { useState, useRef, useEffect } from "react";
import SearchTrailResult from "../components/SearchResults/SearchTrailResult";
import SearchBrewResult from "../components/SearchResults/SearchBrewResult";
import API from "../../src/utils/API";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "../components/Cards/style.css";
import axios from "axios";

const Search = () => {
  // Setting our component's initial state
  const [trails, setTrails] = useState([]);
  const [breweries, setBreweries] = useState([]);
  const [userInput, setUserInput] = useState("");
  const inputEl = useRef();
  const [filteredTrails, setFilteredTrails] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("hi", userInput);

    //make a call to your backend for trails
    const loadTrails = (data) => {
      API.getTrails(data)
        .then((res) => {
          console.log("search-form", res);
          setTrails(res.data);
        })
        .catch((err) => console.log(err));
    };

    //API axios call to open brewery api
    const loadBreweries = async () => {
      const result = await axios(
        `https://api.openbrewerydb.org/breweries?by_city=${userInput}`
      );

      console.log("brewery call", result.data);
      setBreweries(result.data);
    };

    loadBreweries();
    loadTrails();
  };

  //useEffect filter?
  useEffect(() => {
    setFilteredTrails(
      trails.filter((trail) =>
        trail.location.toLowerCase().includes(userInput.toLowerCase())
      )
    );
  }, [userInput, trails]);

  return (
    <Container fluid>
      <div className="search">
        <div className="search-container">
          <h2>Search for Trails or Brews</h2>

          <div className="search-form">
            <Form onSubmit={formSubmit}>
              <Form.Label className="form-label">Search by City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Denver"
                value={userInput}
                onChange={() => {
                  setUserInput(inputEl.current.value);
                }}
                className="form-control"
                ref={inputEl}
              />
              <Button
                type="submit"
                className="btn btn-primary"
                // onClick={props.handleFormSubmit}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <hr></hr>
        <h3>Results</h3>
        <Row className="result-row">
          <Col >
            <SearchTrailResult filteredTrails={filteredTrails} />
          </Col>
          <Col>
            <SearchBrewResult breweries={breweries} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Search;
