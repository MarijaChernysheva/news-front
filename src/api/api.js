import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

api.interceptors.request.use(
  (config) => {
    const { headers } = config;
    if (token) {
      headers.authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
