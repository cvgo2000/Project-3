import React from "react";
import "../SearchForm/style.css";

const SearchForm = () => {
  return (
    <div className="container">
      <div className="search-form">
        <form>
          
            <label className="form-label">Search by City</label>
            <input type="text" className="form-control" />
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
