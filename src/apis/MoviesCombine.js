import api from "./api";

export const getAllMovieList = () => {
  return api.get("/movies");
};

export const getMovieListByIsShowing = (showing) => {
    return api.get("/movies", showing);
};