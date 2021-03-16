import React, { createContext, useReducer, useContext, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  trailList: localStorage.getItem("trailList")
    ? JSON.parse(localStorage.getItem("trailList"))
    : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("trailList", JSON.stringify(state.trailList));
  }, [state]);

  //actions
  const addTrailToFav = (trail) => {
    dispatch({ type: "ADD_TRAIL_TO_FAV", payload: trail });
  };

  const removeTrailFromFav = (id) => {
    dispatch({type: "REMOVE_TRAIL_FROM_FAV", payload: id});
  }

  return (
    <GlobalContext.Provider
      value={{ trailList: state.trailList, addTrailToFav, removeTrailFromFav }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};


