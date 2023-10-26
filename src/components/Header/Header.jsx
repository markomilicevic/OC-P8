import { NavLink } from "react-router-dom";

const Header = () => (
	<div>
		<strong>Header</strong>
		<ul>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/listing/abc">Listing</NavLink>
			</li>
			<li>
				<NavLink to="/about">About</NavLink>
			</li>
			<li>
				<NavLink to="/not-found">Not Found</NavLink>
			</li>
		</ul>
	</div>
);

export default Header;
