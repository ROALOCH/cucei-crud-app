import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const MovieCard = ({ movie }) => {
  const { deleteMovie } = useContext(GlobalContext);
  const { id, title, synopsis, rating } = movie;

  return (
    <>
      <div className='card mb-3'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text text-justify'>{synopsis}</p>
          <p className='card-text text-muted'>Calificación: {rating} de 5</p>
          <Link to={`./movie/edit/${id}`} className='btn btn-outline-primary'>
            Editar
          </Link>
          <button
            onClick={() => deleteMovie(id)}
            className='btn btn-outline-danger ml-3'
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};
