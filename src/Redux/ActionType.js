import { DECREMENT_ACTION, INCREMENT_ACTION, RESET_ACTION } from "./Action";

export const Increment = () => {
  return {
    type: INCREMENT_ACTION,
  };
};

export const Decrement = () => {
  return {
    type: DECREMENT_ACTION,
  };
};

export const Reset = () => {
  return {
    type: RESET_ACTION,
  };
};
