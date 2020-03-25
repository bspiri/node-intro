const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url == "/goodbye") {
    response.writeHead(200);
    response.end("Goodbye World");
  } else if (request.url == "/error") {
    response.writeHead(500);
    response.end(JSON.stringify({ error: "server error" }));
  } else {
    response.writeHead(200);
    response.end("Hello World");
  }
});

server.listen(3000);
console.log("Server address: http://localhost:3000");
