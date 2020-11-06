import React, { useContext, useEffect } from "react";
import { MovieCard } from "./MovieCard";

import { GlobalContext } from "../context/GlobalState";
import { MovieController } from "../controller/MovieController";

export const MovieList = () => {
  const { movies, setMovies } = useContext(GlobalContext);

  const { getMovies, getSeed } = MovieController();

  useEffect(() => {
    async function fetchData() {
      const data = await getMovies();
      setMovies(data);
    }
    fetchData();
  }, []);

  const getSeedData = async () => {
    const seed = await getSeed();
    const data = await getMovies();
    setMovies(data);
  };

  return (
    <div>
      <h1>Películas Registradas</h1>
      {movies.length < 1 && (
        <button type='button' class='btn btn-light' onClick={getSeedData}>
          Generar Películas
        </button>
      )}
      <hr />
      {movies.length < 1 && (
        <div>
          <p className='text-center text-muted'>No hay peliculas que mostrar</p>
        </div>
      )}

      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};
