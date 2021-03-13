import React, { useState, useRef, useEffect } from "react";
import SearchTrailResult from "../components/SearchResults/SearchTrailResult";
import SearchBrewResult from "../components/SearchResults/SearchBrewResult";
import API from "../../src/utils/API";
import { Card, CardDeck } from "react-bootstrap";
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
    <div className="container">
      <div className="search">
        <h2>Search for Trails or Brews</h2>
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
        <div className="row">
          <div className="col-md-6">
            <SearchTrailResult filteredTrails={filteredTrails} />
          </div>
          <div className="col-md-6"><SearchBrewResult breweries={breweries} />
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Search;
