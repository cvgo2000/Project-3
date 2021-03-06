import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import API from "../utils/API"
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResult from "../components/SearchResults/SearchResult";

const Search = () => {
  // Setting our component's initial state
  const [trails, setTrails] = useState([])


    return (
      <div className="container">
        <div className="search">
          <h2>Search for Trails or Brews</h2>
          <SearchForm setTrails={setTrails}/>
          <SearchResult trails={trails} />
        </div>
      </div>
    );
  };


export default Search;
