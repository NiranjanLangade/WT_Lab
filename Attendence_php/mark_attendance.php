<?php
// connect to the database
$conn = new mysqli('localhost', 'root', '', 'attendance_system');

// check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $date = date('Y-m-d'); // you can also use a specific date if needed
    $attendance = $_POST['attendance'];

    foreach ($attendance as $student_id => $status) {
        $status = $status ? 1 : 0;
        $sql = "INSERT INTO attendance (student_id, date, status) VALUES ($student_id, '$date', $status)";
        $conn->query($sql);
    }

    echo "Attendance has been recorded!";
}

// close connection
$conn->close();
