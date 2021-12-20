import {
  INIT_UPCOMING_MOVIES,
  INIT_SHOWING_MOVIES,
} from "../constants/constants";

const initState = { upComingMovieList: [], showingMovieList: [] };

const MovieReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_UPCOMING_MOVIES:
      return { upComingMovieList: action.payload };
    case INIT_SHOWING_MOVIES:
      return { showingMovieList: action.payload };
    default:
      return state;
  }
};

export default MovieReducer;
