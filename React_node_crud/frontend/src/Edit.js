import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
	const { id } = useParams();
	const [student, setStudent] = useState(null);
	const [values, setValues] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/read/${id}`)
			.then(res => {
				setStudent(res.data);
				setValues(res.data);
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setError("Failed to fetch student data");
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (!student) {
		return <div>Student not found</div>;
	}

	const handleUpdate = e => {
		e.preventDefault();
		axios
			.put(`http://localhost:8080/update/${id}`, values)
			.then(res => {
				console.log(res);
				navigate("/");
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="d-flex vh-100 justify-content-center bg-primary align-items-center">
			<div className="w-50 bg-white rounded p-3">
				<form onSubmit={handleUpdate}>
					<h2>Update Student</h2>
					<div className="mb-2">
						<label>Name : </label>
						<input
							type="text"
							className="form-control"
							value={values.name || ""}
							onChange={e => setValues({ ...values, name: e.target.value })}
						></input>
					</div>
					<div className="mb-2">
						<label>Email : </label>
						<input
							type="email"
							placeholder="Enter Email"
							className="form-control"
							value={values.email || ""}
							onChange={e => setValues({ ...values, email: e.target.value })}
						></input>
					</div>
					<div className="mb-2">
						<label>Department : </label>
						<input
							type="text"
							placeholder="Enter Department"
							className="form-control"
							value={values.department || ""}
							onChange={e =>
								setValues({ ...values, department: e.target.value })
							}
						></input>
					</div>
					<button className="btn btn-success">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Edit;
