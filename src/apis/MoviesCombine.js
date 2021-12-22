import api from "./api";

export const getAllMovies = () => {
  return api.get("/movies");
};

export const getAllCinemas = () => {
  return api.get("/cinemas");
};

export const getAllSessionsByMovieId = (movieId) => {
  return api.get("/sessions?movieid=" + movieId);
};
