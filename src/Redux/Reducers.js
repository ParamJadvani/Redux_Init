import {
  DECREMENT_ACTION,
  INCREMENT_ACTION,
  RESET_ACTION,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./ActionType.js";

const initState = {
  count: 0,
  todos: [],
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
          { id: Date.now(), task: 
            payload, completed: false },
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

    default:
      return state;
  }
};
