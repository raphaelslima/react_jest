import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("should disable style background red", () => {
    render(<Button disable onClick={() => {}} />);

    const button = screen.getByRole("button", { name: "Click me" });

    expect(button).toHaveStyle({ background: "red" });
  });

  it("should call on click prop on click", () => {
    const onClick = jest.fn();

    render(<Button disable onClick={onClick} />);

    const button = screen.getByText("Click me");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should call with parameter", () => {
    const onClick = jest.fn();

    render(<Button disable onClick={onClick} />);

    const button = screen.getByText("Click me");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledWith(10);

    const holdMsg = screen.queryByText(
      "Let's learn more about testing in React"
    );

    expect(holdMsg).toBeNull();
  });
});

export default {};
