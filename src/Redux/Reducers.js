import { DeleteCartData } from "./Action.js";
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

const initState = {
  // count: 0,
  todos: [],
  cart: [],
};

export const Reducers = (state = initState, { type, payload }) => {
  switch (type) {
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

    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), task: payload, completed: false },
        ],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case ADD_CARTDATA:
      return {
        ...state,
        cart: [...state.cart, { ...payload, qty: 1 }],
      };

    case DELETE_CARTDATA:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };

    case INCREMENT_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case DECREMENT_QTY:
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === payload ? { ...item, qty: item.qty - 1 } : item
          )
          .filter((item) => item.qty > 0),
      };

    default:
      return state;
  }
};
