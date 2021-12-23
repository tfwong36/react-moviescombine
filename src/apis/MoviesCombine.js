import api from "./api";

export const getAllMovies = () => {
  return api.get("/movies");
};

export const getAllSeats = (sessionID) => {
  return api.get("/sessions/" + sessionID + "/seats");
};
export const getAllCinemas = () => {
  return api.get("/cinemas");
};

export const getAllSessionsByMovieId = (movieId) => {
  return api.get("/sessions?movieid=" + movieId);
};

export const getPaymentByPhoneNumber = (phoneNumber) => {
  return api.get("/payments?phoneNumber=" + phoneNumber);
};

export const postPasswordGetPaymentDetail = (paymentId, password) => {
  return api.post("/payments/" + paymentId, {password: password});
};

export const getAllSnacks = () => {
  return api.get("/foods");
};

