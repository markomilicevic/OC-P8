import { useState, useEffect } from "react";

/**
 * Custom React hook for fetching an JSON file trough the network
 *
 * @param {string} url URL to fetch in GET
 * @returns {object} Hook results: `isLoading`, `isError` and `data`
 */
const useFetch = (url) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState();

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				setIsError(false);

				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`Not a success response`);
				}

				const data = await response.json();
				setData(data);
			} catch (err) {
				console.log(`An error happened when calling ${url}: ${err.message}`);
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [url]);
	return { isLoading, isError, data };
};

export default useFetch;
