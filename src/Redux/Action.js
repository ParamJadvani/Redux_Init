import {
  DECREMENT_ACTION,
  INCREMENT_ACTION,
  RESET_ACTION,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  ADD_CARTDATA,
  DELETE_CARTDATA,
  INCREMENT_QTY,
  DECREMENT_QTY,
} from "./ActionType.js";

export const Increment = (data) => ({
  type: INCREMENT_ACTION,
  payload: data,
});

export const Decrement = (data) => ({
  type: DECREMENT_ACTION,
  payload: data,
});

export const Reset = () => {
  type: RESET_ACTION;
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

export const AddCartData = (data) => ({
  type: ADD_CARTDATA,
  payload: data,
});

export const DeleteCartData = (data) => ({
  type: DELETE_CARTDATA,
  payload: id,
});

export const incrementQty = (id) => ({
  type: INCREMENT_QTY,
  payload: id,
});

export const decrementQty = (id) => ({
  type: DECREMENT_QTY,
  payload: id,
});
