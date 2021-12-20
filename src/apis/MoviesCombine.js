import api from "./api";

export const getMovieListByIsShowing = (showing) => {
  return api.get("/movies?showing=" + showing);
};
