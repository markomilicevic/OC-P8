import styles from "./Footer.module.scss";
import logo from "./logo.svg";

const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles.content}>
			<img className={styles.logo} src={logo} alt="Logo de Kasa sur fond noir" />
			<span className={styles.copyright}>© 2020 Kasa. All rights reserved</span>
		</div>
	</footer>
);

export default Footer;
