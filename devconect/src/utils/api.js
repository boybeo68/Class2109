import axios from "axios";

const api = axios.create({
  baseURL: "https://safe-island-07845.herokuapp.com",
  timeout: 20000,
});

export default api;
