import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000000
});

http.interceptors.request.use(
  (config) => {
    // You can add authorization headers or other custom logic here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default http;