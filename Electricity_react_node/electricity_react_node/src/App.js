import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
	const [bill, setBill] = useState(null);
	const [units, setUnits] = useState("");

	const handleChange = e => {
		setUnits(e.target.value);
	};

	const calculateBill = async () => {
		try {
			const response = await axios.post("http://localhost:5000/api/calculate", {
				units,
			});
			setBill(response.data.bill);
		} catch (error) {
			console.log("There is an error while calculating the bill", error);
		}
	};
	return (
		<div className="App">
			<h1>Electricity Bill Generator</h1>
			<div>
				<label for="units">
					Enter no. of units used :
					<input type="numbers" value={units} onChange={handleChange} />
				</label>
			</div>
			<button type="submit" onClick={calculateBill}>
				Calculate Bill
			</button>
			{bill !== null && (
				<div>
					<h2>Your Bill: ${bill}</h2>
				</div>
			)}
		</div>
	);
}

export default App;
