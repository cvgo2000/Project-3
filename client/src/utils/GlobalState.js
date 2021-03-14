import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_TRAIL,
  REMOVE_TRAIL,
  UPDATE_TRAILS,
  ADD_TRAIL,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_TRAIL:
      return {
        ...state,
        currentPost: action.post,
        loading: false,
      };

    case UPDATE_TRAILS:
      return {
        ...state,
        posts: [...action.posts],
        loading: false,
      };

    case ADD_TRAIL:
      return {
        ...state,
        posts: [action.post, ...state.posts],
        loading: false,
      };

    case REMOVE_TRAIL:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post._id !== action._id;
        }),
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.post, ...state.favorites],
        loading: false,
      };

    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites],
        loading: false,
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((post) => {
          return post._id !== action._id;
        }),
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      trail: "",
      difficulty: "",
      location: "",
      distance: "",
      link: "",
      image: "",
      rating: "",
    },
    favorites: [],
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
