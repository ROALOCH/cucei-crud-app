import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { useForm } from "../hooks/useForm";
import { v4 as uuid } from "uuid";

export const AddMovieScreen = () => {
  const history = useHistory();
  const { addMovie } = useContext(GlobalContext);

  const initialForm = {
    title: "",
    synopsis: "",
    rating: "",
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { title, synopsis, rating } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: uuid(),
      title: title,
      synopsis: synopsis,
      rating: rating,
    };

    addMovie(newMovie);
    history.push("/");
  };

  return (
    <div className='container mt-5'>
      <h1>Agregar Película</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label for=''>Título</label>
          <input
            name='title'
            type='text'
            className='form-control'
            value={title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form-group'>
          <label for=''>Sinópsis</label>
          <input
            name='synopsis'
            type='text'
            className='form-control'
            value={synopsis}
            onChange={handleInputChange}
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
            value={rating}
            onChange={handleInputChange}
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
  );
};
