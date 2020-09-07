import { SET_CANVAS_TYPE } from "./constants";

export default (
  state = {
    type: null
  },
  action
) => {
  switch (action.type) {
    case SET_CANVAS_TYPE:
      return {
        ...state.canvas,
        type: action.payload,
      };
    default:
      return state;
  }
};
