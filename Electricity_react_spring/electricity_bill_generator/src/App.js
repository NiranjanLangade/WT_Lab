import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [units, setUnits] = useState("");
	const [bill, setBill] = useState(null);

	const handleInputChange = e => {
		setUnits(e.target.value);
	};

	const handleCalculateBill = async () => {
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
			<h1>Electricity Bill Calculator</h1>
			<div>
				<label>
					Enter units of electricity used:
					<input type="number" value={units} onChange={handleInputChange} />
				</label>
			</div>
			<button onClick={handleCalculateBill}>Calculate Bill</button>
			{bill !== null && (
				<div>
					<h2>Your Bill: ${bill}</h2>
				</div>
			)}
		</div>
	);
}

export default App;
