import axios from "axios";

// once deployed, follow this block of code, and remove
// the current const baseUrl and const api.
// const api = axios.create({
//   baseURL: process.env.NODE_ENV === 'production'
//       ? 'https://AppNameHere/.herokuapp.com/api'
//       : 'http://localhost:3000/api'
// })

const baseUrl = "https://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
