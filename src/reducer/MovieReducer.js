import {
  INIT_MOVIES,
  SELECT_SEAT,
  INIT_SEATING_PLAN,
} from "../constants/constants";

const initState = { movieList: [], seatingStatusList: [] };

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
          if (seat.key === action.payload) {
            return {
              key: action.payload,
              status: "s",
              row: seat.row,
              columnNumber: seat.columnNumber,
            };
          }
          return seat;
        }),
      };
    default:
      return state;
  }
};

export default MovieReducer;
