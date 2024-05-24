import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [students, setStudents] = useState([]);
	const [formData, setFormData] = useState({
		name: "",
		rollNo: "",
		sub1mse: "",
		sub1ese: "",
		sub2mse: "",
		sub2ese: "",
		sub3mse: "",
		sub3ese: "",
		sub4mse: "",
		sub4ese: "",
	});

	useEffect(() => {
		fetchStudents();
	}, []);

	const fetchStudents = async () => {
		const response = await axios.get("http://localhost:3001/api/students");
		setStudents(response.data);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const {
			name,
			rollNo,
			sub1mse,
			sub1ese,
			sub2mse,
			sub2ese,
			sub3mse,
			sub3ese,
			sub4mse,
			sub4ese,
		} = formData;
		const subjects = [
			{ subName: "Subject 1", mse: Number(sub1mse), ese: Number(sub1ese) },
			{ subName: "Subject 2", mse: Number(sub2mse), ese: Number(sub2ese) },
			{ subName: "Subject 3", mse: Number(sub3mse), ese: Number(sub3ese) },
			{ subName: "Subject 4", mse: Number(sub4mse), ese: Number(sub4ese) },
		];

		const postData = {
			name,
			rollno: Number(rollNo),
			subjects,
		};

		try {
			await axios.post("http://localhost:3001/api/add-student", postData);
			fetchStudents();
			setFormData({
				name: "",
				rollNo: "",
				sub1mse: "",
				sub1ese: "",
				sub2mse: "",
				sub2ese: "",
				sub3mse: "",
				sub3ese: "",
				sub4mse: "",
				sub4ese: "",
			});
		} catch (error) {
			console.error("Error adding student:", error);
		}
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
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Roll No:
					<input
						type="number"
						name="rollNo"
						value={formData.rollNo}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Sub1 MSE:
					<input
						type="number"
						name="sub1mse"
						value={formData.sub1mse}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Sub1 ESE:
					<input
						type="number"
						name="sub1ese"
						value={formData.sub1ese}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Sub2 MSE:
					<input
						type="number"
						name="sub2mse"
						value={formData.sub2mse}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Sub2 ESE:
					<input
						type="number"
						name="sub2ese"
						value={formData.sub2ese}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Sub3 MSE:
					<input
						type="number"
						name="sub3mse"
						value={formData.sub3mse}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Sub3 ESE:
					<input
						type="number"
						name="sub3ese"
						value={formData.sub3ese}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Sub4 MSE:
					<input
						type="number"
						name="sub4mse"
						value={formData.sub4mse}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Sub4 ESE:
					<input
						type="number"
						name="sub4ese"
						value={formData.sub4ese}
						onChange={handleChange}
						required
					/>
				</label>
				<button type="submit">Submit</button>
			</form>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Roll No</th>
						<th>Subject 1</th>
						<th>Subject 2</th>
						<th>Subject 3</th>
						<th>Subject 4</th>
					</tr>
				</thead>
				<tbody>
					{students.map(student => (
						<tr key={student._id}>
							<td>{student.name}</td>
							<td>{student.rollno}</td>
							<td>
								{student.subjects[0].overall} ({student.subjects[0].grade})
							</td>
							<td>
								{student.subjects[1].overall} ({student.subjects[1].grade})
							</td>
							<td>
								{student.subjects[2].overall} ({student.subjects[2].grade})
							</td>
							<td>
								{student.subjects[3].overall} ({student.subjects[3].grade})
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
