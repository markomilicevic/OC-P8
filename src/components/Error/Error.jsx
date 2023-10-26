import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

const Error = () => (
	<div className={styles.error}>
		Une erreur est survenue, veuillez&nbsp;<Link to={{}}>recharger la page</Link>
	</div>
);

export default Error;
