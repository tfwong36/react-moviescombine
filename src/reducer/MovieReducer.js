import { INIT_MOVIES } from "../constants/constants";

const initState = { movieList: [] };

const MovieReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_MOVIES:
      return { movieList: action.payload };
    default:
      return state;
  }
};

export default MovieReducer;
