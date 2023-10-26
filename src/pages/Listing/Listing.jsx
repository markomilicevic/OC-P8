import { useParams } from "react-router-dom";

const Listing = () => {
	const { listingId } = useParams();

	return <div>This is Listing for "{listingId}"</div>;
};

export default Listing;
