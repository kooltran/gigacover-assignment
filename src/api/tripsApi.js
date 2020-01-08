import axios from "axios";

const targetUrl = process.env.REACT_APP_API_URL;
console.log(`${targetUrl}?page=${1}`);
export const tripsApi = page =>
  axios.get(`${targetUrl}?page=${page}`).then(res => res.data);
