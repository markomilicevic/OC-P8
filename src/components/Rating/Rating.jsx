import styles from "./Rating.module.scss";
import filledStar from "./filled-star.svg";
import emptyStar from "./empty-star.svg";

const Rating = ({ currentValue, maximumValue }) => {
	// Create dynamically the list of stars
	const FILLED_STAR = true;
	const EMPTY_STAR = false;
	const stars = Array(maximumValue).fill(EMPTY_STAR);
	for (let i = 0; i < currentValue; i++) {
		stars[i] = FILLED_STAR;
	}

	return (
		<div className={styles.rating}>
			{stars.map((star, index) => (
				<img
					key={index}
					className={styles.star}
					src={star === FILLED_STAR ? filledStar : emptyStar}
					alt={star === FILLED_STAR ? "Notation sous forme d'étoile remplie" : "Notation sous forme d'étoile vide"}
				/>
			))}
		</div>
	);
};

export default Rating;
