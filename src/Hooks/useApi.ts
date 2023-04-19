import axios from "axios";
import { useState } from "react";

const useApi = <T extends any, R extends any[]>(
	apiFunc: (...args: R) => Promise<T>
) => {
	// Redux
	// const dispatch = useDispatch();

	const [data, setData] = useState<T>();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const request = async (...args: Parameters<typeof apiFunc>) => {
		setLoading(true);
		try {
			setError("");
			setData(undefined);

			const result = await apiFunc(...args);

			setData(result);
			return result;
		} catch (err) {
			if (err instanceof Error) {
				// An Error
				setError(err.message);
			} else if (axios.isAxiosError(err)) {
				if (err.response?.data?.message) {
					setError(err.response?.data.message);
					throw new Error(err.response?.data.message);
				} else {
					setError("خطایی رخ داده است!");
				}
			} else {
				// everything else
				setError("خطایی رخ داده است!");
			}
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return {
		data,
		error,
		loading,
		request,
	};
};

export default useApi;
