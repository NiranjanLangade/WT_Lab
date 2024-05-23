const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/calculate", (req, res) => {
	const units = req.body.units;
	const fixedAmt = 100;
	if (units < 100) {
		const bill = fixedAmt + units;
		res.json({ bill });
	} else if (units < 200) {
		const bill = fixedAmt + units * 2.0;
		res.json({ bill });
	} else {
		const bill = fixedAmt + units * 3.0;
		res.json({ bill });
	}
});

app.listen(PORT, () => {
	console.log(`App is running at port ${PORT}`);
});
