import * as React from "react";
import ReactDOM from "react-dom";
import Counter from "../components/Counter";

beforeEach(() => {
  document.body.innerHTML = "";
});

test("counter increments and decrements when the buttons are clicked", () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  const div = document.createElement("div");
  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.appendChild(div);
  // 🐨 use ReactDOM.render to render the <Counter /> to the div
  ReactDOM.render(<Counter />, div);
  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  const buttonElements = div.querySelectorAll("button");
  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  const messageElement = div.firstChild.querySelector("div");

  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(messageElement.textContent).toBe("Current count: 0");

  // 🐨 click the increment button (💰 increment.click())
  buttonElements[1].click();
  // 🐨 assert the message.textContent
  expect(messageElement.textContent).toBe("Current count: 1");

  // 🐨 click the decrement button (💰 decrement.click())
  buttonElements[0].click();
  // 🐨 assert the message.textContent
  expect(messageElement.textContent).toBe("Current count: 0");
});

test("extra credit: counter increments and decrements when the buttons are clicked", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(<Counter />, div);
  const [decrement, increment] = div.querySelectorAll("button");
  const message = div.firstChild.querySelector("div");

  expect(message.textContent).toBe("Current count: 0");

  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    button: 0,
  });

  increment.dispatchEvent(clickEvent);
  expect(message.textContent).toBe("Current count: 1");

  decrement.dispatchEvent(clickEvent);
  expect(message.textContent).toBe("Current count: 0");
});

/* eslint no-unused-vars:0 */
