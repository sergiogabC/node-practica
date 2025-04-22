import express, { json } from "express";
import { articulosRutas } from "./routes/articulosRutas.js";

const app = express();
const PORT = process.env.PORT ?? 1234;

app.use(json());
app.use("/articulos", articulosRutas);

app.listen(PORT, () => {
  console.log(`Server Listening On Port: http://localhost:${PORT}`);
});
