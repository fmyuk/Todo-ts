import React from "react";

type AddTodoState = {
  input: string
};

class AddTodo extends React.Component<{}, AddTodoState> {
  constructor(props: {}) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input: string) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
  };

  render() {
    return (
      <div>
        <input
          onChange={this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default AddTodo;