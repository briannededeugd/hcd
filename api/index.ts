const express = require("express");
const http = require("http");
const { fileURLToPath } = require("url");
const { dirname } = require("path");

const app = express();
app.use(express.static(__dirname + "/public"));
const server = http.createServer(app); // Create HTTP server using Express app

const port = 3000;

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html"); // Serve index.html file
});

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

module.exports = app;