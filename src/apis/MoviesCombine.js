import api from "./api";

export const getAllMovies = () => {
  return api.get("/movies");
};

export const postPasswordGetPaymentDetail = (paymentId) => {
  return api.post("/payments/" + paymentId);
};