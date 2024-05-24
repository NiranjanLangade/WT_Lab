// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [students, setStudents] = useState([]);
	const [formData, setFormData] = useState({
		name: "",
		rollNo: "",
		subjects: [
			{ subName: "Sub1", mse: "", ese: "" },
			{ subName: "Sub2", mse: "", ese: "" },
			{ subName: "Sub3", mse: "", ese: "" },
			{ subName: "Sub4", mse: "", ese: "" },
		],
	});

	useEffect(() => {
		fetchStudents();
	}, []);

	const fetchStudents = async () => {
		const response = await axios.get("http://localhost:8080/api/students");
		setStudents(response.data);
	};

	const handleChange = (e, index, field) => {
		const newSubjects = [...formData.subjects];
		newSubjects[index][field] = e.target.value;
		setFormData({ ...formData, subjects: newSubjects });
	};

	const handleFormChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		await axios.post("http://localhost:8080/api/add-student", formData);
		fetchStudents();
		setFormData({
			name: "",
			rollNo: "",
			subjects: [
				{ subName: "Sub1", mse: "", ese: "" },
				{ subName: "Sub2", mse: "", ese: "" },
				{ subName: "Sub3", mse: "", ese: "" },
				{ subName: "Sub4", mse: "", ese: "" },
			],
		});
	};

	return (
		<div className="App">
			<h1>Student Results</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleFormChange}
						required
					/>
				</label>
				<label>
					Roll No:
					<input
						type="number"
						name="rollNo"
						value={formData.rollNo}
						onChange={handleFormChange}
						required
					/>
				</label>
				{formData.subjects.map((subject, index) => (
					<div key={index}>
						<h4>{subject.subName}</h4>
						<label>
							MSE:
							<input
								type="number"
								value={subject.mse}
								onChange={e => handleChange(e, index, "mse")}
								required
							/>
						</label>
						<label>
							ESE:
							<input
								type="number"
								value={subject.ese}
								onChange={e => handleChange(e, index, "ese")}
								required
							/>
						</label>
					</div>
				))}
				<button type="submit">Submit</button>
			</form>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Roll No</th>
						{formData.subjects.map((subject, index) => (
							<th key={index}>{subject.subName}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{students.map(student => (
						<tr key={student.id}>
							<td>{student.name}</td>
							<td>{student.rollNo}</td>
							{student.subjects.map((subject, index) => (
								<td key={index}>
									{subject.overall} ({subject.grade})
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
