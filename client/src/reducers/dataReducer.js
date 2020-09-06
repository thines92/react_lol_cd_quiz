import { FETCH_DATA } from "./constants";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
