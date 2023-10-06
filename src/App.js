import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [time, setTime] = useState(10);
	const [isPuased, setIsPaused] = useState(true);

	function pauseTimer() {
		setIsPaused(true);
		console.log(isPuased);
	}
	function startTimer() {
		console.log(isPuased);
		setIsPaused(false);
	}

	useEffect(() => {
		fetch("https://reqres.in/api/users?page=2")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
			});
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (time > 0 && !isPuased) {
				setTime((red) => red - 1);
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, [time, isPuased]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
				<input
					type="number"
					onChange={(e) => {
						setTime(e.target.value);
						console.log(isPuased);
					}}
				/>
				<div id="currentTimerValue" className="timer">
					{time}
				</div>
				<button id="startBtn" onClick={startTimer}>
					Start
				</button>
				<button id="pauseBtn" onClick={pauseTimer}>
					Pause
				</button>
			</header>
		</div>
	);
}

export default App;
