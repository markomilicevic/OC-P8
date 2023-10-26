import styles from "./Host.module.scss";

const Host = ({ name, picture }) => {
	return (
		<div className={styles.host}>
			<div className={styles.name}>
				{name.split(" ").map((partOfName, index) => (
					<strong key={`${index}-${partOfName}`}>
						{partOfName}
					</strong>
				))}
			</div>
			<img className={styles.picture} src={picture} alt={name} />
		</div>
	);
};

export default Host;
