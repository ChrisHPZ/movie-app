import { v4 as uuid_v4 } from "uuid";
import { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const formReducer = (state, event) => {
	return {
		...state,
		[event.name]: event.value
	}
}

const Search = () => {
	const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);
	const handleSubmit = event => {
		event.preventDefault();
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
		}, 100000)
	}
	const handleChange = event => {
		setFormData({
			name: event.target.name,
			value: event.target.value
		});
	}
	const [data, setSearch] = useState({results: []});
	const searchMovies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=halloween&page=1&include_adult=true`;
	
	useEffect(() => {
		async function searchData() {
			const result = await axios(searchMovies);
			setSearch(result.data)
		}
		searchData();
	}, [searchMovies])
	return ( 
		<div className="slider-container" id="Action">	
			<h2>Search Results</h2>	
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
			{submitting && 
			<div>
				You are submitting the following:
				<ul>
					{Object.entries(formData).map(([name, value]) => (
						<li key={name}><strong>{name}</strong>: {value.toString()}</li>
					))}
				</ul>
			</div>
			}
			<form onSubmit={handleSubmit}>
				<fieldset>
					<label>
						<p>Name</p>
						<input name="name" onChange={handleChange} />
					</label>
				</fieldset>
			<button type="submit">Submit</button>
			</form>
  		</div>
	 );
}
 
export default Search;
