<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Results</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #f5f5f5;
        }
    </style>
</head>

<body>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "vit_results";

    // Connect to the database
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Get the data from the input form
    $name = $_POST["name"];
    $roll_no = $_POST["rollno"];
    $subject1_mse = $_POST["sub1mse"];
    $subject1_ese = $_POST["sub1ese"];
    $subject2_mse = $_POST["sub2mse"];
    $subject2_ese = $_POST["sub2ese"];
    $subject3_mse = $_POST["sub3mse"];
    $subject3_ese = $_POST["sub3ese"];
    $subject4_mse = $_POST["sub4mse"];
    $subject4_ese = $_POST["sub4ese"];

    // Calculate the overall marks for each subject
    $subject1_overall = $subject1_mse + $subject1_ese;
    $subject2_overall = $subject2_mse + $subject2_ese;
    $subject3_overall = $subject3_mse + $subject3_ese;
    $subject4_overall = $subject4_mse + $subject4_ese;

    function getGrade($marks)
    {
        if ($marks >= 90) {
            return "A";
        } elseif ($marks >= 80) {
            return "B";
        } elseif ($marks >= 70) {
            return "C";
        } elseif ($marks >= 60) {
            return "D";
        } else {
            return "F";
        }
    }

    $sql = "INSERT INTO students (name, rollno, sub1mse, sub1ese, sub1overall, sub1grade, sub2mse, sub2ese, sub2overall, sub2grade, sub3mse, sub3ese, sub3overall, sub3grade, sub4mse, sub4ese, sub4overall, sub4grade) VALUES ('$name', $roll_no, $subject1_mse, $subject1_ese, $subject1_overall, '" . getGrade($subject1_overall) . "', $subject2_mse, $subject2_ese, $subject2_overall, '" . getGrade($subject2_overall) . "', $subject3_mse, $subject3_ese, $subject3_overall, '" . getGrade($subject3_overall) . "', $subject4_mse, $subject4_ese, $subject4_overall, '" . getGrade($subject4_overall) . "')";
    mysqli_query($conn, $sql);

    $sql = "SELECT * FROM students";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        echo "<table border='1'>";
        echo "<tr>";
        echo "<th>Name</th><th>Roll No.</th><th>Subject 1</th><th>Subject 2</th><th>Subject 3</th><th>Subject 4</th>";
        echo "</tr>";

        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>" . $row['name'] . "</td><td>" . $row['rollno'] . "</td>";
            echo "<td>" . $row['sub1overall'] . " (" . $row['sub1grade'] . ")</td>";
            echo "<td>" . $row['sub2overall'] . " (" . $row['sub2grade'] . ")</td>";
            echo "<td>" . $row['sub3overall'] . " (" . $row['sub3grade'] . ")</td>";
            echo "<td>" . $row['sub4overall'] . " (" . $row['sub4grade'] . ")</td>";
            echo "</tr>";
        }

        echo "</table>";
    } else {
        echo "No students found";
    }

    mysqli_close($conn);
    ?>
</body>

</html>