import axios from "axios";

const targetUrl = process.env.REACT_APP_API_URL;
export const tripsApi = () => axios.get(targetUrl).then(res => res.data);
