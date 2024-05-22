import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
	const [units, setUnits] = useState("");
	const [bill, setBill] = useState(null);

	const handleChange = e => {
		setUnits(e.target.value);
	};

	const calculateBill = async () => {
		try {
			const response = await axios.get(
				`http://localhost:8080/api/calculate?units=${units}`
			);
			setBill(response.data);
		} catch (error) {
			console.error("There was an error calculating the bill!", error);
		}
	};

	return (
		<div className="App">
			<h1>Electricity Bill Generator</h1>
			<div>
				<label>
					Enter no. of units used :
					<input type="numbers" value={units} onChange={handleChange} />
				</label>
			</div>
			<button onClick={calculateBill}>Calculate Bill</button>
			{bill !== null && (
				<div>
					<h2>Your Bill: ${bill}</h2>
				</div>
			)}
		</div>
	);
}

export default App;
