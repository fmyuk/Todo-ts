import { ActionTypes } from "./actionTypes";

let nextTodoIds = 0;

type AddTodoAction = {
  type: ActionTypes.ADD_TODO;
  payload: {
    id: number,
    content: string
  };
};

export const addTodo = (content: string): AddTodoAction => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    id: ++nextTodoIds,
    content
  }
});
