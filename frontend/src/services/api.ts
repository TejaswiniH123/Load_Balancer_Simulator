import axios from "axios";

const api = axios.create({
  baseURL: "https://load-balancer-simulator-oy2d.onrender.com",
});

export default api;