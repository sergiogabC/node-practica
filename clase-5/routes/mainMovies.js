import { Router } from "express";
import { MovieController } from "../controllers/cMovies.js";

export const createMovieRouter = ({ movieModel }) => {
  const moviesRouter = Router();
  const movieController = new MovieController({ movieModel });

  //Por tener async await deberia estar envuelto en un try catch, pero se manejaria de mejor forma en el middleware
  moviesRouter.get("/", movieController.getAll);
  moviesRouter.get("/:id", movieController.getById);

  moviesRouter.delete("/:id", movieController.delete);

  moviesRouter.post("/", movieController.create);

  moviesRouter.patch("/:id", movieController.update);

  return moviesRouter;
};
