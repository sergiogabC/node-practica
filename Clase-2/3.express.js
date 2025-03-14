const express = require("express");

const app = express();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT ?? 1234;

const dittoJSON = require("./pokemon/ditto.json");

app.disable("x-powered-by");

app.use(express.json());
// app.use((req, res, next) => {
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();

//   //Solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = "";

//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();
//     //mutar la request y meter la información en el req.body
//     req.body = data;
//     next();
//   });
// });

app.get("/", (req, res) => {
  res.status(200).send("<h1>Mi página</h1>");
});

app.get("/pokemon/ditto", (req, res) => {
  res.status(200).json(dittoJSON);
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`Sever listening on port http://localhost:${PORT}`);
});
