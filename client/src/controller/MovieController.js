const Axios = require('axios').default;

export const MovieController = () => {
	const getMovies = async () => {
		const response = await Axios.get('/api/movies');
		return response.data;
	};

	const getSeed = async () => {
		const response = await Axios.get('/api/movies/seed');
		return response.data;
	};

	const getMovieByID = async (id) => {
		const response = await Axios.get(`/api/movie/${id}`);
		return response.data;
	};

	const addMovie = async ({ id, title, synopsis, rating }) => {
		const response = await Axios.post('/api/movie', {
			id: id,
			title: title,
			synopsis: synopsis,
			rating: rating,
		});

		return response.data;
	};

	const editMovie = async ({ id, title, synopsis, rating }) => {
		const response = await Axios.post(`/api/movie/update/${id}`, {
			title: title,
			synopsis: synopsis,
			rating: rating,
		});

		return response.data;
	};

	const deleteMovie = async (id) => {
		const response = await Axios.post(`/api/movie/delete/${id}`);

		return response.data;
	};

	return {
		getMovies,
		getMovieByID,
		addMovie,
		editMovie,
		deleteMovie,
		getSeed,
	};
};
