import { useState } from "react";
import styles from "./Carousel.module.scss";
import leftArrowRectangle from "./left-arrow-rectangle.svg";
import rightArrowRectangle from "./right-arrow-rectangle.svg";
import leftArrowSquare from "./left-arrow-square.svg";
import rightArrowSquare from "./right-arrow-square.svg";

const Carousel = ({ pictures, alternate }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// One picture must be present at least
	if (!pictures || pictures.length === 0) {
		return <></>;
	}

	// The Previous, Next and counter are only available when having more than one picture
	const canSlide = pictures.length > 1;

	const goToPrevious = () => {
		const lastIndex = pictures.length - 1;
		if (currentIndex === 0) {
			setCurrentIndex(lastIndex); // Forward
		} else {
			setCurrentIndex(currentIndex - 1); // Rewind
		}
	};

	const goToNext = () => {
		const lastIndex = pictures.length - 1;
		if (currentIndex === lastIndex) {
			setCurrentIndex(0); // Rewind
		} else {
			setCurrentIndex(currentIndex + 1); // Forward
		}
	};

	return (
		<div className={styles.carousel}>
			<img className={styles.picture} src={pictures[currentIndex]} alt={alternate} />
			{canSlide && (
				<>
					<div className={styles.leftArrow} onClick={goToPrevious} title="Aller au précédent">
						<img className={styles.rectangle} src={leftArrowRectangle} alt="Aller au précédent" />
						<img className={styles.square} src={leftArrowSquare} alt="Aller au précédent" />
					</div>
					<div className={styles.rightArrow} onClick={goToNext} title="Aller au suivant">
						<img className={styles.rectangle} src={rightArrowRectangle} alt="Aller au suivant" />
						<img className={styles.square} src={rightArrowSquare} alt="Aller au suivant" />
					</div>
					<span className={styles.counter}>
						{currentIndex + 1}/{pictures.length}
					</span>
				</>
			)}
		</div>
	);
};

export default Carousel;
