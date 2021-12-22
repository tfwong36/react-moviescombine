import api from "./api";

export const getAllMovies = () => {
  return api.get("/movies");
};

export const getAllCinemas = () => {
  return api.get("/cinemas");
};

export const getAllSessions = () => {
  return api.get("/sessions");
};
