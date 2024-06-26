import express from "express";
import http from "http";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
