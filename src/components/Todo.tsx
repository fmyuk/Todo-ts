import React from "react";
import cx from "classnames";
import { TodoItem } from "../redux/selectors";
import { toggleTodo } from "../redux/actions";
import { connect } from "react-redux";

type TodoProps = {
  todo: TodoItem;
};

const Todo: React.FC<TodoProps> = ({ todo }) => (
  <li
    className="todo-item"
    onClick={() => toggleTodo(todo.id)}
  >
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);