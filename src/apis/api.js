import axios from "axios";

const api = axios.create({
  baseURL: "https://dev-moviescombine-api.herokuapp.com",
});

export default api;
