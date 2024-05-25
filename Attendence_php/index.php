<?php
// connect to the database
$conn = new mysqli('localhost', 'root', '', 'attendance_system');

// check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// fetch students
$sql = "SELECT * FROM students";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>

<head>
    <title>Student Attendance</title>
</head>

<body>
    <h1>Mark Attendance</h1>
    <form action="mark_attendance.php" method="post">
        <table>
            <tr>
                <th>Student Name</th>
                <th>Present</th>
            </tr>
            <?php while ($row = $result->fetch_assoc()) : ?>
                <tr>
                    <td><?php echo $row['name']; ?></td>
                    <td><input type="checkbox" name="attendance[<?php echo $row['id']; ?>]" value="1"></td>
                </tr>
            <?php endwhile; ?>
        </table>
        <button type="submit">Submit Attendance</button>
    </form>
</body>

</html>

<?php
// close connection
$conn->close();
?>