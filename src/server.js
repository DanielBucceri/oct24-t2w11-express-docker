const express = require("express");

const app = express();

app.get("/", (request, response) => {
	console.log("Homepage of API requested!");
	response.json({
		message:"Hello, world!"
	});
});

// The below route is just if you're running in a container to check health
app.use((req, res) => {
	console.log("Request to path is not valid, path not found:" + req.path);
	process.exit(1);
});

module.exports = {
	app
}