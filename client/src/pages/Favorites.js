import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import Cards from "../components/Cards/Cards";

const Favorites = () => {
  return (
    <div className="container">
      <div className="favorite">
        <h2>Search your favorite Trails or Brews</h2>
        <SearchForm />
        <Cards />
      </div>
    </div>
  );
};

export default Favorites;
