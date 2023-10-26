import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => (
	<main className={styles.not_found}>
		<h2 className={styles.headline}>404</h2>
		<p className={styles.paragraph}>Oups! La page que vous demandez n'existe pas.</p>
		<Link className={styles.link} to="/">
			Retourner sur la page d’accueil
		</Link>
	</main>
);

export default NotFound;
