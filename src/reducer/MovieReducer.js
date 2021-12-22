import { INIT_MOVIES, INIT_SESSIONS, INIT_CINEMAS } from "../constants/constants";

const initState = { movieList: [], sessionList: [], cinemaList: [] };

const MovieReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_MOVIES:
      return { ...state, movieList: action.payload };
    case INIT_SESSIONS:
      return { ...state, sessionList: action.payload };
    case INIT_CINEMAS:
        return { ...state, cinemaList: action.payload };
    default:
      return state;
  }
};

export default MovieReducer;
