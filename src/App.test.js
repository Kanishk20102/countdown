import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

test("testing duplicate test", () => {
	render(<App />);
	const currentTimerVal = document.getElementById("currentTimerValue");
	expect(currentTimerVal).toBeGreaterThan(0);
});
