<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        #converter {
            background-color: #fff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 8px;
        }

        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
        }

        button {
            background-color: #4caf50;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div id="converter">
        <h2>Currency Converter</h2>

        <form action="" method="post">
            <label for="amount">Amount:</label>
            <input type="number" name="amount" id="amount" placeholder="Enter amount" required>

            <label for="fromCurrency">From Currency:</label>
            <select name="fromCurrency" id="fromCurrency" required>
                <option value="USD">USD</option>
                <option value="RS">RS</option>
                <option value="EBP">EGP</option>
                <!-- Add more currencies as needed -->
            </select>

            <label for="toCurrency">To Currency:</label>
            <select name="toCurrency" id="toCurrency" required>
                <option value="USD">USD</option>
                <option value="RS">RS</option>
                <option value="EBP">EGP</option>
                <!-- Add more currencies as needed -->
            </select>

            <button type="submit">Convert</button>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $amount = $_POST["amount"];
            $fromCurrency = $_POST["fromCurrency"];
            $toCurrency = $_POST["toCurrency"];

            // Fixed exchange rates (replace with live exchange rates in a real-world scenario)
            $exchangeRates = [
                'USD' => 1,
                'RS' => 83,
                'EBP' => 30
                // Add more exchange rates as needed
            ];

            $conversionRate = $exchangeRates[$toCurrency] / $exchangeRates[$fromCurrency];
            $result = $amount * $conversionRate;

            echo "<h3>Result:</h3>";
            echo "<p>{$amount} {$fromCurrency} is equal to {$result} {$toCurrency}</p>";
        }
        ?>

    </div>

</body>
</html>

//////////////////////////////////////////////////

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Bill</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
<div class="main">
    <h1>Currancy Calculator</h1>
    <form action="" method="post" id="form">
        <div class ="label2">
            <label for="name">Enter Amt in Rupees:</label>
            <input type="text" name="name" id="name" required>
        </div>
        <button  type="submit" name="button" id="button">Calculate Bill</button>
    </form>

    <?php
    if (isset($_POST['button'])) {
       $amount = intval($_POST['name']);

       $ans = $amount / 80;

       echo "<h4>Amt in Dollar is:</h4>{$ans}";
    }
    ?>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>