import React, {useState} from "react";
import SearchForm from "../components/SearchForm/SearchForm";
// import Results from "../components/SearchResults/SearchTrailResult";

const Favorites = () => {
  const [trails, setTrails] = useState([])
  
  return (
    <div className="container">
      <div className="favorite">
        <h2>Search your favorite Trails or Brews</h2>
        <SearchForm setTrails={setTrails}/>
        {/* <Results trails={trails} /> */}
      </div>
    </div>
  );
};

export default Favorites;
