import { useState } from "react";
import styles from "./Dropdown.module.scss";
import icon from "./arrow.svg";

const Dropdown = ({ title, description, isHeadline }) => {
	const [isOpen, setIsOpen] = useState(false);

	const onTitleClicked = (e) => {
		// Toggle the state
		setIsOpen(!isOpen);
	};

	const TitleTag = isHeadline ? `h2` : `strong`;

	return (
		<div className={`${styles.dropdown} ${isOpen ? styles.is_open : styles.is_closed}`}>
			<div className={styles.title} onClick={onTitleClicked}>
				<TitleTag>{title}</TitleTag>
				<img src={icon} alt="Icône pour ouvrir ou fermer le contenu" />
			</div>
			<div className={styles.description}>
				{description.split("\n").map((line, index) => (
					<p key={index}>
						<span>{line}</span>
					</p>
				))}
			</div>
		</div>
	);
};

Dropdown.defaultProps = {
	isHeadline: false,
};

export default Dropdown;
