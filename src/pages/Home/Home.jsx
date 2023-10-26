import { ALL_LISTINGS_URL } from "../../constants";
import useFetch from "../../hooks/useFetch";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import styles from "./Home.module.scss";

const Home = () => {
	const { isLoading, isError, data: listings } = useFetch(ALL_LISTINGS_URL);

	return (
		<main className={styles.home}>
			<div className={styles.banner}>
				<Banner cover="/images/cover-home.jpg" alternate="Paysage de côte" title="Chez vous, partout et ailleurs" />
			</div>
			{isLoading ? (
				<Loader />
			) : isError ? (
				<Error />
			) : (
				<ul className={styles.listings}>
					{listings.map((listing) => (
						<li className={styles.listing} key={listing.id}>
							<Card link={`/listing/${listing.id}`} cover={listing.cover} alternate={listing.title} title={listing.title} />
						</li>
					))}
				</ul>
			)}
		</main>
	);
};

export default Home;
