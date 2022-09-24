const http = require("http");

const server = http.createServer();

// using on for emitting the event
server.on("request", (req, res) => {
  res.send("Welcome");
});

server.listen(5000);
