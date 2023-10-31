import { render, screen } from "@testing-library/react";
import App from "./App";

 test("renders instructions text", () => {
 	render(<App />);
 	const textElement = screen.getByText(
 		/Enter a value and press start to start timer/i
 	);
 	expect(textElement).toBeInTheDocument();
 });

test("testing duplicate test", () => {
	render(<App />);
	const currentTimerVal = parseInt(
		document.getElementById("currentTimerValue").innerHTML
	);
	expect(currentTimerVal).toBeGreaterThan(0);
});
