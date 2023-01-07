import { render, screen } from "@testing-library/react";
import Register from "./Register";
import { userEvent } from "@testing-library/user-event/dist/types/setup";

describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<Register />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
    
  it("should show error message when all the fields are not entered", async () => {
    render(<Register />);
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);
    screen.debug();
});
});

