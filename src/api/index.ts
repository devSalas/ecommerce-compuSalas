import axios from "axios";

const api = axios.create({
  
  baseURL: 'https://compusalas.sunetya.site/',
  headers: {'Content-type': 'application/json'},
  validateStatus:(status)=> {
    return status<500
  }
});

export default api;