import { v4 as uuid_v4 } from "uuid";
import './App.css';

function Navigation() {
	return(
		<nav className="nav">
			<ul className="flex-nav">
				<li key={uuid_v4()}>
					<a href="#Action">Action</a>
				</li>
				<li key={uuid_v4()}>
					<a href="#Adventure">Adventure</a>
				</li>
				<li key={uuid_v4()}>
					<a href="#Horror">Horror</a>
				</li>
				<li key={uuid_v4()}>
					<a href="#Mystery">Mystery</a>
				</li>
				<li key={uuid_v4()}>
					<a href="#Romance">Romance</a>
				</li>
			</ul>
		</nav>
	)
}
export default Navigation;