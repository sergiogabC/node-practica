import { MovieModel } from "../models/mMovies.js";
import {
  validateMovie,
  validatePartialMovie,
} from "../schemas/moviesSchema.js";

export class MovieController {
  static async getAll(req, res) {
    const { genre } = req.query;
    const movies = await MovieModel.getAll({ genre });
    //Decide que renderiza
    res.json(movies);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const movie = await MovieModel.getById({ id });
    if (movie) return res.json(movie);
    res.status(404).json({ message: "Movie not found" });
  }

  static async delete(req, res) {
    const { id } = req.params;

    const result = await MovieModel.delete({ id });

    if (!result) {
      return res.status(404).json({ message: "Movie Not Found" });
    }

    return res.json({ message: "Movie Deleted" });
  }

  static async create(req, res) {
    const result = validateMovie(req.body);

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newMovie = await MovieModel.create(result.data);
    res.status(201).json(newMovie);
  }

  static async update(req, res) {
    const result = validatePartialMovie(req.body);

    const { id } = req.params;

    const updateMovie = await MovieModel.update({ id, input: result.data });

    if (!updateMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res.json(updateMovie);
  }
}
