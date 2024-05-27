import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Read = () => {
	const { id } = useParams();
	const [student, setStudent] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:8080/read/${id}`)
			.then(res => {
				setStudent(res.data);
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

	return (
		<div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
			<div className="w-50 bg-white rounded p-3">
				<h2>Student detail</h2>
				<h3>ID: {student.id}</h3>
				<h3>Name: {student.name}</h3>
				<h3>Email: {student.email}</h3>
				<h3>Department: {student.department}</h3>
				<Link to="/" className="btn btn-primary">
					Back
				</Link>
			</div>
		</div>
	);
};

export default Read;
