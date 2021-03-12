import * as React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../components/FormikLogin";

test("formik login: submitting the form without input results in error", async () => {
  const handleSubmit = jest.fn();
  render(<Login onSubmit={handleSubmit} />);

  const username = screen.getByLabelText(/username/i);
  const password = screen.getByLabelText(/password/i);

  fireEvent.blur(username);

  await waitFor(() => {
    expect(screen.getByTestId("usernameError")).not.toBe(null);
    expect(screen.getByTestId("usernameError")).toHaveTextContent("Required");
  });

  fireEvent.blur(password);

  await waitFor(() => {
    expect(screen.getByTestId("passwordError")).not.toBe(null);
    expect(screen.getByTestId("passwordError")).toHaveTextContent("Required");
  });
});

test("formik login: submitting the form calls onSubmit with username and password", async () => {
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

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledWith(mockFormData);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});

/*
eslint
  no-unused-vars: "off",
*/
