import api from "./api";

export const getAllMovies = () => {
  return api.get("/movies");
};

export const getAllSeats = (sessionID) => {
  return api.get('/sessions/'+sessionID+'/seats')
}