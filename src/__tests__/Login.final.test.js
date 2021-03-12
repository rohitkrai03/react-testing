import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../components/Login";

test("basic login: submitting the form calls onSubmit with username and password", () => {
  const handleSubmit = jest.fn();
  render(<Login onSubmit={handleSubmit} />);

  const username = screen.getByLabelText(/username/i);
  const password = screen.getByLabelText(/password/i);
  const submit = screen.getByRole("button", { name: /submit/i });

  const mockFormData = {
    username: "rohitkrai03",
    password: "password03",
  };

  userEvent.type(username, mockFormData.username);
  userEvent.type(password, mockFormData.password);
  userEvent.click(submit);

  expect(handleSubmit).toHaveBeenCalledWith(mockFormData);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

/*
eslint
  no-unused-vars: "off",
*/
