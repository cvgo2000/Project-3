import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";

const Search = () => {
  return (
    <div className="container">
      <div className="search">
        <h2>Search for Trails or Brews</h2>
        <SearchForm />
      </div>
    </div>
  );
};

export default Search;
