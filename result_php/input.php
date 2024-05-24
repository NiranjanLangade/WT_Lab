<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VIT Results</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-bottom: 15px;
            font-weight: bold;
            color: #555;
        }

        input[type="text"],
        input[type="number"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }

        button {
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #28a745;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            margin-top: 20px;
        }

        button:hover {
            background-color: #218838;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Result Generator</h1>
        <form id="inputForm" action="process.php" method="post">
            <label for="name">
                Enter your name:
                <input type="text" name="name" required>
            </label>
            <label for="rollno">
                Enter roll no.:
                <input type="number" name="rollno" required>
            </label>
            <label for="sub1mse">
                Enter sub1 MSE marks:
                <input type="number" name="sub1mse" required>
            </label>
            <label for="sub1ese">
                Enter sub1 ESE marks:
                <input type="number" name="sub1ese" required>
            </label>
            <label for="sub2mse">
                Enter sub2 MSE marks:
                <input type="number" name="sub2mse" required>
            </label>
            <label for="sub2ese">
                Enter sub2 ESE marks:
                <input type="number" name="sub2ese" required>
            </label>
            <label for="sub3mse">
                Enter sub3 MSE marks:
                <input type="number" name="sub3mse" required>
            </label>
            <label for="sub3ese">
                Enter sub3 ESE marks:
                <input type="number" name="sub3ese" required>
            </label>
            <label for="sub4mse">
                Enter sub4 MSE marks:
                <input type="number" name="sub4mse" required>
            </label>
            <label for="sub4ese">
                Enter sub4 ESE marks:
                <input type="number" name="sub4ese" required>
            </label>
            <button type="submit" name="submit">Submit</button>
        </form>
    </div>
</body>

</html>