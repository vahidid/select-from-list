import axios from "axios";

const ApiClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

// We can add some interceptor for checking authentication or some other staff!

export default ApiClient;
