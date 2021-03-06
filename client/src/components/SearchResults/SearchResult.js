import React from "react";

const SearchResult = ({ trails }) => {
  return (
    <div className="container">
      <div className="results">
        Results
        <ul>{trails && trails.map((result) => <li>{result}</li>)}</ul>
      </div>
    </div>
  );
};

export default SearchResult;
