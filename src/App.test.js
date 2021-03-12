import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders react testing workshop header", () => {
  render(<App />);
  const linkElement = screen.getByText(/react testing workshop/i);
  expect(linkElement).toBeInTheDocument();
});
