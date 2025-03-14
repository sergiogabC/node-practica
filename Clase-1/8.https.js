const http = require("node:http");
const { findAvailablePort } = require("./8.free-port.js");

// eslint-disable-next-line no-undef
const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("Request received");
  res.end("Hola Mundo");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(
      `server listening on port http://localhost:${server.address().port}`
    );
  });
});
