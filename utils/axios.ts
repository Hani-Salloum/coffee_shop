import axios from 'axios';

export const baseURL = process.env.NEXT_PUBLIC_API_URL

const axiosIns = axios.create({
  baseURL: `${baseURL}/api` ,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosIns.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

axiosIns.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosIns;
