import axios from "axios";

const api = axios.create({
  
  baseURL: import.meta.env.VITE_URL_BACKEND,
  headers: {'Content-type': 'application/json'},
  validateStatus:(status)=> {
    return status<500
  }
});

export default api;