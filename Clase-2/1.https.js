const http = require("node:http");
const fs = require("node:fs");

// eslint-disable-next-line no-undef
const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>Bienvenido a mi página de inicio</h1>");
  } else if (req.url === "/imagen") {
    fs.readFile("./Clase-2/alianza.png", (error, data) => {
      if (error) {
        console.log(error);
        res.statusCode = 500;
        res.end("<h1>500 Internal Server Error</h1>");
      } else {
        res.setHeader("Content-Type", "image/png");
        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    res.end("<h1>Contacto</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>NO Existe</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(
    `server listening on port http://localhost:${server.address().port}`
  );
});
