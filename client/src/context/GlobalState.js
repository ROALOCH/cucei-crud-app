import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = { movies: [] };
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovie = (movie) => {
    dispatch({
      type: "ADD_MOVIE",
      payload: movie,
    });
  };

  const editMovie = (movie) => {
    dispatch({
      type: "EDIT_MOVIE",
      payload: movie,
    });
  };

  const deleteMovie = (id) => {
    dispatch({
      type: "DELETE_MOVIE",
      payload: id,
    });
  };

  const setMovies = (movies) => {
    dispatch({
      type: "SET_MOVIES",
      payload: movies,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        movies: state.movies,
        addMovie,
        editMovie,
        deleteMovie,
        setMovies,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
