import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter as Router } from "react-router-dom";

import App from "../App";

test("TodoList works well", () => {
  const app = render(<Router><App/></Router>);
  fireEvent.click(app.getByTestId("link-to-todos"));
  expect(app.queryByText(/Your todos/)).toBeInTheDocument();
  expect(app.queryByText(/Welcome/)).not.toBeInTheDocument();

  const event = {
    target: {
      value: 'Testing is super fun'
    },
  };

  fireEvent.change(app.queryByTestId("new-todo-input"), event);
  fireEvent.submit(app.queryByTestId("new-todo-form"))

  expect(app.queryByTestId("todo-list").children.length).toBe(1);
  expect(app.queryByTestId("todo-list")).toHaveTextContent(event.target.value);
});
