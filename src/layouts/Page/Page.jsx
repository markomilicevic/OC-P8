import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Page.module.scss";

const Page = () => (
	<div className={styles.page}>
		<Header />
		<Outlet />
		<Footer />
	</div>
);

export default Page;
