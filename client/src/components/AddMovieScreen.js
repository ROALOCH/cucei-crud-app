import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Rate } from 'antd';
import { GlobalContext } from '../context/GlobalState';
import { useForm } from '../hooks/useForm';

export const AddMovieScreen = () => {
	const history = useHistory();
	const { addMovie } = useContext(GlobalContext);

	const initialForm = {
		title: '',
		synopsis: '',
	};

	const [formValues, handleInputChange] = useForm(initialForm);
	const [rating, setRating] = useState(0);
	const { title, synopsis } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		const newMovie = {
			id: uuid(),
			title: title,
			synopsis: synopsis,
			rating: rating,
		};

		addMovie(newMovie);
		history.push('/');
	};

	return (
		<>
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
						<label className='mr-3'>Calificación</label>
						<Rate
							defaultValue={0}
							onChange={(value) => {
								setRating(value);
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
