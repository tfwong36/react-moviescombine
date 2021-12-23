import {
  INIT_MOVIES,
  SELECT_SEAT,
  INIT_SEATING_PLAN,
  GET_PAYMENT_BY_PHONE_NUMBER,
  GET_PAYMENT_DETAIL_AFTER_PASSWORD,
} from "../constants/constants";

const initState = {
  movieList: [],
  seatingStatusList: [],
  selectedSeatList: [],
  sessionList: [],
  cinemaListWithSessions: [],
  cinemaList: [],
  paymentByPhoneNumberList: [],
  paymentListAfterPassword: [],
};

const MovieReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_MOVIES:
      return { ...state, movieList: action.payload };

    case INIT_SEATING_PLAN:
      return { ...state, seatingStatusList: action.payload };

    case SELECT_SEAT:
      return {
        ...state,
        seatingStatusList: state.seatingStatusList.map((seat) => {
          if (seat.key === action.payload.key) {
            action.payload.status = "s";
            return action.payload;
          }
          return seat;
        }),
        selectedSeatList: state.seatingStatusList.filter((seat) => {
          if (seat.status === "s") {
            return seat;
          }
        }),
      };
    case GET_PAYMENT_BY_PHONE_NUMBER:
      return { ...state, paymentByPhoneNumberList: action.payload };
    case GET_PAYMENT_DETAIL_AFTER_PASSWORD:
      return { ...state, paymentListAfterPassword: action.payload };
    default:
      return state;
  }
};

export default MovieReducer;
