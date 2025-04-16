import express from "express";

const app = express();
const PORT = process.env.PORT ?? 1234;

app.get("/", (req, res) => {
  return res.json("...");
});

app.listen(PORT, () => {
  console.log(`Server Listening On Port: http://localhost:${PORT}`);
});
