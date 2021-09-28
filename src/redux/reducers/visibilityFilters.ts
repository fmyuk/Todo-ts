import { VISIBILITY_FILTERS } from "../../constants";
import { TodoActions } from "../actions";
import { ActionTypes } from "../actionTypes";
import { VisibilityFilterTypes } from "../types";

const initialState: VisibilityFilterTypes = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case ActionTypes.SET_FILETER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default visibilityFilter;