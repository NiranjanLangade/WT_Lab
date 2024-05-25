<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "attendance_system";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT students.name, attendance.date, attendance.status 
        FROM attendance 
        JOIN students ON attendance.student_id = students.id 
        ORDER BY attendance.date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Attendance</title>
</head>

<body>
    <h1>Attendance Records</h1>
    <table border="1">
        <tr>
            <th>Student Name</th>
            <th>Date</th>
            <th>Status</th>
        </tr>
        <?php
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>" . $row["name"] . "</td>
                        <td>" . $row["date"] . "</td>
                        <td>" . $row["status"] . "</td>
                      </tr>";
            }
        } else {
            echo "<tr><td colspan='3'>No records found</td></tr>";
        }
        ?>
    </table>
</body>

</html>

<?php
$conn->close();
?>