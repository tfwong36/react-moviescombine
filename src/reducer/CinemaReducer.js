import { INIT_CINEMAS } from "../constants/constants";

const initState = { cinemaList: [] };

const CinemaReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_SESSIONS:
      return { ...state, cinemaList: action.payload };
    default:
      return state;
  }
};

export default CinemaReducer;
