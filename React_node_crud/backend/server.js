import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "node_crud",
});

db.connect(err => {
	if (err) {
		console.error("Database connection failed:", err.stack);
		return;
	}
	console.log("Connected to database.");
});

app.get("/", (req, res) => {
	const sql = "SELECT * FROM student";

	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({
				message: "Error inside server",
			});
		}
		return res.json(result);
	});
});

app.get("/read/:id", (req, res) => {
	const sql = "SELECT * FROM student WHERE id = ?";
	const id = req.params.id;

	db.query(sql, [id], (err, result) => {
		if (err) {
			return res.status(500).json({
				message: "Error inside server",
			});
		}
		if (result.length === 0) {
			return res.status(404).json({
				message: "Student not found",
			});
		}
		return res.json(result[0]);
	});
});

app.post("/student", (req, res) => {
	const sql = "INSERT INTO student (`name`, `email`, `department`) VALUES (?)";
	const values = [req.body.name, req.body.email, req.body.department];

	db.query(sql, [values], (err, result) => {
		if (err) {
			return res.status(500).json({
				message: "Error inside server",
			});
		}
		return res.status(201).json({
			message: "Student created successfully",
			id: result.insertId,
		});
	});
});

app.put("/update/:id", (req, res) => {
	const sql =
		"UPDATE student SET `name` = ?, `email` = ? , `department` = ?  WHERE id=? ";
	const id = req.params.id;
	db.query(
		sql,
		[req.body.name, req.body.email, req.body.department, id],
		(err, result) => {
			if (err) {
				return res.status(500).json({
					message: "Error inside server",
				});
			}
			return res.json(result);
		}
	);
});

app.delete("/delete/:id", (req, res) => {
	const sql = "DELETE FROM student WHERE id = ?";
	const id = req.params.id;
	db.query(sql, [id], (err, result) => {
		if (err) {
			return res.status(500).json({
				message: "Error inside server",
			});
		}
		return res.json(result);
	});
});

app.listen(8080, () => {
	console.log("Listening on port 8080...");
});
