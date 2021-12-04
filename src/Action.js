import { v4 as uuid_v4 } from "uuid";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

function Action() {
	const [data, setData] = useState({ results: [] });
	const actionMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12&append_to_response=images&include_image_language=en,null`;	

	useEffect(() => {
		async function fetchData() {
			const result = await axios(actionMoviesUrl);
			setData(result.data)
		}
		fetchData();
	}, [actionMoviesUrl])
	return (
    	<div className="slider-container" id="Action">	
			<h2>Action Movies</h2>	
			<Splide options={ {
					rewind : true,
					perPage: 5,
					perMove: 3,
					gap    : '1rem',
					pagination: false
				} }>
				{data.results.map(result => (
					<SplideSlide key={uuid_v4()}>
						<div className="results-grid-child" key={uuid_v4()}>
							<img src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`} alt={result.title} />
							<h2>{result.title}</h2>
							<p>{result.overview}</p>
							<p className="date">{new Date(result.release_date).toDateString()}</p>
						</div>
					</SplideSlide>
				))}
			</Splide>
  		</div>
	);
}

export default Action;
