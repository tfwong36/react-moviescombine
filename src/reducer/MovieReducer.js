import {
  INIT_MOVIES,
  SELECT_SEAT,
  INIT_CINEMA_SESSIONS,
  INIT_CINEMAS,
  INIT_SESSIONS,
  INIT_SEATING_PLAN,
  GET_PAYMENT_BY_PHONE_NUMBER,
  INIT_SNACKS,
  REDUCE_SNACKS_QUANTITY,
  ADD_SNACKS_QUANTITY,
} from "../constants/constants";

const initState = {
  movieList: [],
  seatingStatusList: [],
  selectedSeatList: [],
  sessionList: [],
  snackList: [],
  cinemaListWithSessions: [],
  cinemaList: [],
  paymentByPhoneNumberList: [],
};

const MovieReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_MOVIES:
      return { ...state, movieList: action.payload };
    case INIT_SESSIONS:
      return { ...state, sessionList: action.payload };
    case INIT_CINEMA_SESSIONS:
      return { ...state, cinemaListWithSessions: action.payload };
    case INIT_CINEMAS:
      return { ...state, cinemaList: action.payload };

    case INIT_SEATING_PLAN:
      return { ...state, seatingStatusList: action.payload };

    case REDUCE_SNACKS_QUANTITY:
      return {
        ...state,
        snackList: state.snackList.map((snack, index) => {
          if (index === action.payload) {
            if (snack.quantity > 0) snack.quantity--;
          }
          return snack;
        }),
      };

    case ADD_SNACKS_QUANTITY:
      return {
        ...state,
        snackList: state.snackList.map((snack, index) => {
          if (index === action.payload) {
            if (snack.quantity < 99) snack.quantity++;
          }
          return snack;
        }),
      };

    case INIT_SNACKS:
      return { ...state, snackList: action.payload };

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
    default:
      return state;
  }
};

export default MovieReducer;
