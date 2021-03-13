import React, { useState, useRef, useEffect } from "react";
// import { } from "react-icons/fa";
import "../SearchForm/style.css";
import API from "../../utils/API";

const SearchForm = ({ setTrails }) => {
  const [userInput, setUserInput] = useState("");
  const inputEl = useRef();

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);

    //make a call to your backend for trails
    const loadTrails = (data) => {
      API.getTrails(data)
        .then((res) => {
          console.log(res)
          setTrails(res.data)
        })
        .catch((err) => console.log(err));
    };
    
    // once you have results setTrails(results)
    loadTrails();
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
  );
};

export default SearchForm;

// Do we want to add the dropdown list????
// <datalist id="breeds">
//         {props.breeds.map(breed => <option value={breed} key={breed} />)}
//       </datalist>
