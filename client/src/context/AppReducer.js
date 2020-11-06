import { MovieController } from "../controller/MovieController";

export const AppReducer = (state, action) => {
  const { addMovie, editMovie, deleteMovie, getMoviesSeed } = MovieController();

  switch (action.type) {
    case "SET_MOVIES":
      return {
        movies: action.payload,
      };

    case "ADD_MOVIE":
      addMovie(action.payload);
      return {
        movies: [action.payload, ...state.movies],
      };

    case "EDIT_MOVIE":
      editMovie(action.payload);
      const updatedMovie = action.payload;
      const updatedMovies = state.movies.map((movie) => {
        if (movie.id === updatedMovie.id) {
          return updatedMovie;
        }
        return movie;
      });

      return { movies: updatedMovies };

    case "DELETE_MOVIE":
      deleteMovie(action.payload);
      return {
        movies: state.movies.filter((movie) => {
          return movie.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};
