import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
	const [values, setValues] = useState({
		name: "",
		email: "",
		department: "",
	});
	const navigate = useNavigate();
	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post("http://localhost:8080/student", values)
			.then(res => {
				console.log(res);
				navigate("/");
			})
			.catch(err => console.log.error);
	};
	return (
		<div className="d-flex vh-100 justify-content-center bg-primary align-items-center">
			<div className="w-50 bg-white rounded p-3">
				<form onSubmit={handleSubmit}>
					<h2>Add Student</h2>
					<div className="mb-2">
						<label>Name : </label>
						<input
							type="text"
							placeholder="Enter Name : "
							className="form-control"
							onChange={e => {
								setValues({ ...values, name: e.target.value });
							}}
						></input>
					</div>
					<div>
						<label>Email : </label>
						<input
							type="text"
							placeholder="Enter Email : "
							className="form-control"
							onChange={e => {
								setValues({ ...values, email: e.target.value });
							}}
						></input>
					</div>
					<div className="mb-2">
						<label>Department : </label>
						<input
							type="text"
							placeholder="Enter Department : "
							className="form-control"
							onChange={e => {
								setValues({ ...values, department: e.target.value });
							}}
						></input>
					</div>
					<button className="btn btn-success">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default Create;
