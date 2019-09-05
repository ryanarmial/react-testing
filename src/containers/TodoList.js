import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodo } from "../store/actions";

const TodoList = (props) => {
  const { todos, addTodo } = props;
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <>
      <form data-testid="new-todo-form" onSubmit={handleFormSubmit}>
        <input
          data-testid="new-todo-input"
          type="text"
          value={newTodo}
          onChange={handleNewTodoChange}
          placeholder="Enter your todo"
          autoComplete="off"
        />
        <button type="submit">Add</button>
      </form>
      <p>Your todos</p>
      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ todos }) => ({ todos });
const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
