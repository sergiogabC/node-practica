import { Router } from "express";

import { MovieController } from "../controllers/cMovies.js";

export const moviesRouter = Router();

//Por tener async await deberia estar envuelto en un try catch, pero se manejaria de mejor forma en el middleware
moviesRouter.get("/", MovieController.getAll);
moviesRouter.get("/:id", MovieController.getById);

moviesRouter.delete("/:id", MovieController.delete);

moviesRouter.post("/", MovieController.create);

moviesRouter.patch("/:id", MovieController.update);
