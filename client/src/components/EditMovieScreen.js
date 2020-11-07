import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Rate } from "antd";
import { GlobalContext } from "../context/GlobalState";
import "antd/dist/antd.css";
import { Navbar } from "./ui/Navbar";

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

  const onChangeRating = (value) => {
    setSelectedMovie({ ...selectedMovie, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editMovie(selectedMovie);
    history.push("/");
  };

  return (
    <>
      <Navbar page='movie-page' />
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
            <label className='mr-3'>Calificación</label>
            <Rate
              value={selectedMovie.rating}
              onChange={(value) => {
                onChangeRating(value);
              }}
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
