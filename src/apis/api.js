import axios from "axios";

const api = axios.create({
    baseURL: "https://dev-moviescombine-api.herokuapp.com",
//   baseURL: "http://localhost:8080",
});

export default api;
