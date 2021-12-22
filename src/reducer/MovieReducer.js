import {
  INIT_MOVIES,
  SELECT_SEAT,
  INIT_CINEMA_SESSIONS,
  INIT_CINEMAS,
  INIT_SESSIONS,
  INIT_SEATING_PLAN,
} from "../constants/constants";

const initState = {
  movieList: [],
  seatingStatusList: [],
  selectedSeatList: [],
  sessionList: [],
  cinemaListWithSessions: [],
  cinemaList: [],
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
    default:
      return state;
  }
};

export default MovieReducer;
