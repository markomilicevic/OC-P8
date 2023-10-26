import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ALL_LISTINGS_URL } from "../../constants";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../components/Carousel";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import styles from "./Listing.module.scss";

const Listing = () => {
	const { listingId } = useParams();
	// TODO: Replace by a dedicated endpoint when the Backend is in place
	const [listing, setListing] = useState();
	const { isLoading, isError, data } = useFetch(ALL_LISTINGS_URL);
	const [isReady, setIsReady] = useState(false); // This is a state to inform if checking current listing details is done
	const navigate = useNavigate();

	// Get the current listing details from the entire mock based on the listing id from the URL
	useEffect(() => {
		if (data) {
			const currentListing = data.find((listing) => listing.id === listingId);
			setListing(currentListing);
			setIsReady(true);
		}
	}, [listingId, data, navigate]);

	return (
		<main className={styles.listing}>
			{isError ? (
				<Error />
			) : isLoading || !isReady ? (
				<Loader />
			) : (
				<>
					<div className={styles.carousel}>
						<Carousel pictures={listing.pictures} alternate={`Photos de ${listing.title}`} />
					</div>
				</>
			)}
		</main>
	);
};

export default Listing;
