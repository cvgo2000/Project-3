import React, { useState, useRef, useEffect } from "react";
// import SearchForm from "../components/SearchForm/SearchForm";
// import SearchResult from "../components/SearchResults/SearchResult";
import API from "../../src/utils/API";
import { Card, CardDeck } from "react-bootstrap";
import "../components/Cards/style.css";

const Search = () => {
  // Setting our component's initial state
  const [trails, setTrails] = useState([]);
  const [userInput, setUserInput] = useState("");
  const inputEl = useRef();
  const [filteredTrails, setFilteredTrails] =useState([]);

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

    // once you have results setTrails(results)
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
    <div className="container">
      <div className="search">
        <h2>Search for Trails or Brews</h2>
        {/* <SearchForm setTrails={setTrails}/> */}
        <div className="container">
          <div className="search-form">
            <form onSubmit={formSubmit}>
              <label className="form-label">Search by City</label>
              <input
                type="text"
                placeholder="Search"
                value={userInput}
                onChange={() => {
                  setUserInput(inputEl.current.value);                  
                }}
                className="form-control"
                ref={inputEl}
              />
              <button
                type="submit"
                className="btn btn-primary"
                // onClick={props.handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <hr></hr>
        {/* <SearchResult trails={trails} /> */}
        <div className="container">
          <div className="results">
            Results
            {filteredTrails.map((trail) => (
                
                <CardDeck>
                  <Card key={trail.id} style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://cdn2.apstatic.com/photos/hike/7053480_large_1555703487.jpg"
                    />
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
      </div>
    </div>
  );
};

export default Search;


