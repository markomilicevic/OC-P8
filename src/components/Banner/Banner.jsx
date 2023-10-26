import styles from "./Banner.module.scss";

const Banner = ({ cover, alternate, title }) => {
	return (
		<div className={styles.banner}>
			<img className={styles.cover} src={cover} alt={alternate} />
			<div className={styles.layer}></div>
			{title && <h2 className={styles.title}>{title}</h2>}
		</div>
	);
};

export default Banner;
