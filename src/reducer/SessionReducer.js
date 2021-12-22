import { INIT_SESSIONS } from "../constants/constants";

const initState = { sessionList: [] };

const SessionReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_SESSIONS:
      return { ...state, sessionList: action.payload };
    default:
      return state;
  }
};

export default SessionReducer;
