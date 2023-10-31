import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [inputValue, setInputValue] = useState(10)
	const [time, setTime] = useState(10);
	const [isPaused, setIsPaused] = useState(true);

    function handleInput(e) {
        setInputValue(e.target.value)
        setTime(e.target.value)
    }
	function pauseTimer() {
		setIsPaused(true);
		console.log(isPaused);
	}
	function startTimer() {
		console.log(isPaused);
		setInputValue("")
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
			if (time > 0 && !isPaused) {
				setTime((red) => red - 1);
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, [time, isPaused]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

                <div className="App-guide">
                    Enter a value and press start to start timer
                </div>
				<input
					type="number"
					className="timerInput"
					value={inputValue}
					onInput={(e) => {
						handleInput(e);
						console.log(isPaused);
					}}
				/>
				<div id="currentTimerValue" className="timer">
					{time}
				</div>

				<div className="dashboard">
                    <button id="startBtn" className="btn startBtn" onClick={startTimer}>
                        Start
                    </button>
                    <button id="pauseBtn" className="btn pauseBtn" onClick={pauseTimer}>
                        Pause
                    </button>
				</div>
			</header>

        <p className="devInstructions">
            Edit <code>src/App.js</code> and save to reload.
        </p>
		</div>
	);
}

export default App;
