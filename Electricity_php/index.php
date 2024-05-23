<?php
if (isset($_POST['submit'])) {
    extract($_POST);
    $fixedRate = 100;
    if ($units < 100) {
        $bill = $fixedRate + $units * 1.0;
    } else if ($units < 200) {
        $bill = $fixedRate + $units * 2.0;
    } else {
        $bill = $fixedRate + $units * 3.0;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Bill Generator</title>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <div class="container">
        <form id="bill" action="index.php" method="post">
            <label for="units">Enter no. of units used:</label>
            <input type="number" id="units" name="units" required>
            <button type="submit" name="submit">Calculate Bill</button>
        </form>
        <div class="result">
            <?php
            if (isset($_POST['submit'])) {
                echo "<h1>Your electricity bill is $bill</h1>";
            }
            ?>
        </div>
    </div>
</body>

</html>