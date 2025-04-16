import { createApp } from "./app.js";
import { MovieModel } from "./models/local-file-system/mMovies.js";

createApp({ movieModel: MovieModel });
