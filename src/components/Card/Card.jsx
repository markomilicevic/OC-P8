import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ link, cover, alternate, title }) => {
	return (
		<Link className={styles.card} to={link}>
			<img className={styles.cover} src={cover} alt={alternate} />
			<div className={styles.layer}></div>
			<h2 className={styles.title}>{title}</h2>
		</Link>
	);
};

export default Card;
