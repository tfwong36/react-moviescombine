import api from "./api";

export const getAllUpcomingMovieList = () => {
  return api.get("/movies");
};
