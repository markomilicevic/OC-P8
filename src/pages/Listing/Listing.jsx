import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ALL_LISTINGS_URL } from "../../constants";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../components/Carousel";
import Dropdown from "../../components/Dropdown";
import Error from "../../components/Error";
import Host from "../../components/Host";
import Loader from "../../components/Loader";
import Rating from "../../components/Rating";
import Tag from "../../components/Tag";
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
					<div className={styles.introduction}>
						<div className={styles.main}>
							<h2 className={styles.title}>{listing.title}</h2>
							<h3 className={styles.location}>{listing.location}</h3>
							<ul className={styles.tags}>
								{listing.tags.map((tag, index) => (
									<li key={`${index}-${tag}`}>
										<Tag text={tag} />
									</li>
								))}
							</ul>
						</div>
						<div className={styles.secondary}>
							<div className={styles.rating}>
								<Rating currentValue={listing.rating} maximumValue={5} />
							</div>
							<div className={styles.host}>
								<Host name={listing.host.name} picture={listing.host.picture} />
							</div>
						</div>
					</div>
					<div className={styles.details}>
						<div className={styles.description}>
							<Dropdown title="Description" description={listing.description} defaultIsOpen={false} />
						</div>
						<div className={styles.equipments}>
							<Dropdown title="Équipements" description={listing.equipments.join("\n")} defaultIsOpen={false} />
						</div>
					</div>
				</>
			)}
		</main>
	);
};

export default Listing;
