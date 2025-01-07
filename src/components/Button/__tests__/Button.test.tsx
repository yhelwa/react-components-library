import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  test("renders the Button component", () => {
    const renderButton = render(<Button label="Hello world!" />);
    //create a failure
    expect(renderButton.getByText("Hello world!")).not.toBeCalled();
  });
});
