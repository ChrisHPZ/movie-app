import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './App.css';
import Navigation from './Navigation';
import Action from './Action';
import Adventure from './Adventure';
import Horror from './Horror';
import Mystery from './Mystery';
import Romance from './Romance';
// import Search from './Search';

function App() {	
	return (
		<div className="app-container">
			<Navigation />
			<div className="slider">				
				<Action />
				<Adventure />
				<Horror />
				<Mystery />
				<Romance />
			</div>
		</div>
	);
}

export default App;
