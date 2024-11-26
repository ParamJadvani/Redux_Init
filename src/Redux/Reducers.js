import { DECREMENT_ACTION, INCREMENT_ACTION, RESET_ACTION } from "./Action";

const initState = {
  count: 0,
};

export const Reducers = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_ACTION:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET_ACTION:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
