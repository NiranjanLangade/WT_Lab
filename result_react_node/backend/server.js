const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection
const mongoURI =
	"mongodb+srv://niranjanlangade45:XApTgJ6Ig4O5TDu0@cluster0.ljy6skn.mongodb.net/";

mongoose
	.connect(mongoURI, {})
	.then(() => {
		console.log("Connected to MongoDB Atlas");
	})
	.catch(err => {
		console.error("Error connecting to MongoDB Atlas:", err);
	});

// Define a schema
const Schema = mongoose.Schema;
const studentSchema = new Schema({
	name: { type: String, required: true },
	rollno: { type: Number, required: true },
	subjects: [
		{
			subName: String,
			mse: Number,
			ese: Number,
			overall: Number,
			grade: String,
		},
	],
});

// Define a model
const Student = mongoose.model("Student", studentSchema);

// Add a student result
// Assuming your route to handle adding student data
app.post("/api/add-student", async (req, res) => {
	const { name, rollno, subjects } = req.body;

	if (!subjects || !Array.isArray(subjects)) {
		return res
			.status(400)
			.json({ error: "Subjects data is missing or not in correct format" });
	}

	try {
		// Calculate overall and grade for each subject
		subjects.forEach(subject => {
			subject.overall = subject.mse + subject.ese;
			subject.grade = getGrade(subject.overall); // Ensure getGrade function is defined
		});

		// Example MongoDB insert operation with Mongoose
		const student = new Student({
			name,
			rollno,
			subjects,
		});

		await student.save();
		res.status(200).json({ message: "Student result added successfully" });
	} catch (error) {
		console.error("Error adding student result:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Get all student results
app.get("/api/students", async (req, res) => {
	try {
		const students = await Student.find();
		res.json(students);
	} catch (err) {
		console.error("Error fetching students:", err);
		res.status(500).send("Internal Server Error");
	}
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

// Function to get grade based on marks
function getGrade(marks) {
	if (marks >= 90) return "A";
	if (marks >= 80) return "B";
	if (marks >= 70) return "C";
	if (marks >= 60) return "D";
	return "F";
}
