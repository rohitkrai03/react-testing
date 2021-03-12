import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/counter";

test("counter rtl: counter increments and decrements when the buttons are clicked", () => {
  const { container } = render(<Counter />);

  const [decrement, increment] = container.querySelectorAll("button");
  const message = container.firstChild.querySelector("div");

  expect(message).toHaveTextContent("Current count: 0");

  fireEvent.click(increment);
  expect(message).toHaveTextContent("Current count: 1");

  fireEvent.click(decrement);
  expect(message).toHaveTextContent("Current count: 0");
});

test("counter rtl extra: counter increments and decrements when the buttons are clicked", () => {
  render(<Counter />);
  const increment = screen.getByRole("button", { name: /increment/i });
  const decrement = screen.getByRole("button", { name: /decrement/i });
  const message = screen.getByText(/current count/i);

  expect(message).toHaveTextContent("Current count: 0");
  userEvent.click(increment);
  expect(message).toHaveTextContent("Current count: 1");
  userEvent.click(decrement);
  expect(message).toHaveTextContent("Current count: 0");
});

/* eslint no-unused-vars:0 */
