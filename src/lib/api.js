import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api