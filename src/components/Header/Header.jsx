import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./logo.svg";

const Header = () => (
	<header className={styles.header}>
		<h1>
			<Link to="/">
				<img className={styles.logo} src={logo} alt="Kasa" />
			</Link>
		</h1>
		<nav>
			<ul className={styles.nav_list}>
				<li>
					<NavLink to="/" className={styles.nav_link}>
						Accueil
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" className={styles.nav_link}>
						A Propos
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
