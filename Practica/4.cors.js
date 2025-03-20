const express = require("express");
const app = express();
const redSocialData = require("./Json/redSocial.json");
const PORT = process.env.PORT ?? 1234;

app.get("/", (req, res) => {
  res.json(redSocialData);
});

app.listen(PORT, () => {
  console.log(`Server Listening on port: http://localhost:${PORT}`);
});
