import { SET_CANVAS } from "./constants";

export default (
  state = {
    canvas: {},
    data: {},
  },
  action
) => {
  switch (action.type) {
    case SET_CANVAS:
      return {
        ...state.canvas,
        type: action.payload,
      };
    default:
      return state;
  }
};
