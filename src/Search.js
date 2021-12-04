import { useReducer, useState } from 'react';
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
			value: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`+event.target.value+`&page=1&include_adult=true`
		});
	}
	return ( 
		<div className="slider-container" id="Search">	
			<h2>Search Results</h2>				
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
