import express, { json } from "express";
import { moviesRouter } from "./routes/mainMovies.js";
import { corsMiddleware } from "./middlewares/cors.js";

const PORT = process.env.PORT ?? 1234;
const app = express();

app.disable("x-powered-by"); //deshabilitar el header x-powered-by
app.use(json());
app.use(corsMiddleware());

app.use("/movies", moviesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
