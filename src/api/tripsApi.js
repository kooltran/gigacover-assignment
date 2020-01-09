import axios from "axios";

const targetUrl = process.env.REACT_APP_API_URL;

export const tripsApi = page =>
  axios.get(`${targetUrl}?page=${page}`).then(res => res.data);
