import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button/>", () => {
  const defaultProps = {
    text: "Hello",
    handleClick: jest.fn(),
  };

  it("shows button text prop when passed", () => {
    const { getByText } = render(
      <Button handleClick={defaultProps.handleClick} text={defaultProps.text} />
    );
    expect(getByText(/Hello/)).toBeTruthy();
  });

  it("should call the handleClick function when button is clicked", () => {
    const { getByTestId } = render(
      <Button handleClick={defaultProps.handleClick} text={defaultProps.text} />
    );
    fireEvent.click(getByTestId(/buttonId/));
    expect(defaultProps.handleClick).toBeCalled();
  });
});
