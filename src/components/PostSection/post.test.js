import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import View from "./view";

test('renders text', () => {
    const testText = "hehe";

    render(<View />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, testText);

    const textElement = screen.getByText(testText);
    expect(textElement).toHaveAttribute();

});
