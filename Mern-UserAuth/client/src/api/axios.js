import axios from "axios";
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
});

// Add a request interceptor to set the token dynamically
API.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);
export default API;



// Add token to every request if exists
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }

//   return req;
// });
