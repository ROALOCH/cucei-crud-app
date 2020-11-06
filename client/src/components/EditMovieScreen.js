import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const EditMovieScreen = () => {
  const { id } = useParams();
  const history = useHistory();

  const { movies, editMovie } = useContext(GlobalContext);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const sm = movies.find((movie) => movie.id === id);
    sm ? setSelectedMovie(sm) : history.push("/");
  }, [id]);

  const onChange = (e) => {
    setSelectedMovie({ ...selectedMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editMovie(selectedMovie);
    history.push("/");
  };

  return (
    <>
      <div className='container mt-5'>
        <h1>Editar Película</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label for=''>Título</label>
            <input
              name='title'
              type='text'
              className='form-control'
              value={selectedMovie.title}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label for=''>Sinópsis</label>
            <input
              name='synopsis'
              type='text'
              className='form-control'
              value={selectedMovie.synopsis}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label for=''>Calificación (1 a 5)</label>
            <input
              name='rating'
              type='number'
              className='form-control'
              min='1'
              max='5'
              step='1'
              value={selectedMovie.rating}
              onChange={onChange}
              required
            />
          </div>
          <button
            type='submit'
            className='btn btn-lg btn-outline-success btn-block mt-4'
          >
            Enviar
          </button>
          <div className='text-center mt-5'>
            <Link to='/' className='text-danger'>
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
