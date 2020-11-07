import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { GlobalContext } from "../context/GlobalState";

export const MovieCard = ({ movie }) => {
  const { deleteMovie } = useContext(GlobalContext);
  const { id, title, synopsis, rating } = movie;

  return (
    <>
      <div className='card mb-3'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <Rate className='mb-3' disabled defaultValue={rating} />
          <p className='card-text text-justify'>{synopsis}</p>
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
