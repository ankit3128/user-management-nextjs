import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

httpClient.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("Request failed:", err.message);
    return Promise.reject(err);
  }
);

export default httpClient;