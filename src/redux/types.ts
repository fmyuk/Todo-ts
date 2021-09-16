import { VISIBILITY_FILTERS } from "../constants";

export type VisibilityFilterTypes = typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS];

export type TodoState = {
  allIds: Array<Number>,
  byIds: { [key: string]: TodoItemState }
};

export type TodoItemState = {
  content: string;
  completed: boolean;
};

export type State = {
  visibilityFilter: VisibilityFilterTypes;
  todo: TodoState;
};
