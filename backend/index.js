const express = require("express");

const path = require("path");

const app = express();
const port = 5000;

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "build")));

// Catch-all route
app.get("/trainer", (req, res) => {
	console.log("hellooww");
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
	console.log(`App listening on port port ${port}.`);
});
