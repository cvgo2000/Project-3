import React, { useState, useRef } from "react";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import "../SearchForm/style.css";
import API from "../../utils/API"


const SearchForm = ({ setTrails }) => {
  const [userInput, setUserInput] = useState("");
  const inputEl = useRef();

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);

    //make a call to your backend for trails
    // once you have results setTrails(results)
    loadTrails()
  }

   const loadTrails =()=> {
    API.getTrails()
      .then(res => 
        setTrails(res.data)
      )
      .catch(err => console.log(err));
  };


  return (
    <div className="container">
      <div className="search-form">
        <form onSubmit={formSubmit}>
          <label className="form-label">Search by City</label>
          <input
            type="text"
            placeholder="Search"
            value={userInput}
            onChange={() => {
              setUserInput(inputEl.current.value)
            }}
            className="form-control"
            ref={inputEl}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
