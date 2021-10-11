import React from "react";
import { connect } from "react-redux";
import { getTodos, TodoItem } from "../redux/selectors";
import { State } from "../redux/types";
import Todo from "./Todo";

type TodoListProps = {
  todos: Array<TodoItem>;
};

const TodoList: React.FC<TodoListProps> = ({todos}) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
        return <Todo key={`todo-${todo.id}`} todo={todo} />;
      })
      : "No Todos, yay"
    }
  </ul>
);

const mapStateToProps = (state: State): TodoListProps => ({
  todos: getTodos(state)
});

export default connect(mapStateToProps)(TodoList);