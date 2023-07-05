import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

const sum = (x: number, y: number) => {
  return x + y;
};

describe("APP Component", () => {
  it("should sum correctly", () => {
    expect(sum(1, 1)).toBe(2);
  });

  it("should render App with message", () => {
    render(<App />);

    screen.getByText("Hello world!");
  });

  it("should change msg on button click", () => {
    render(<App />);

    screen.getByText("Let's learn more about testing in React");

    const button = screen.getByText("Click me");

    fireEvent.click(button);

    screen.getByText("msg changed");
  });
});

export default {};
