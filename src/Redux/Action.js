import {
  DECREMENT_ACTION,
  INCREMENT_ACTION,
  RESET_ACTION,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./ActionType.js";

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

export const addTodo = (task) => ({
  type: ADD_TODO,
  payload: task,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});
