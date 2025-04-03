import { object as _object, string, number, array, enum as enum_ } from "zod";

const movieSchema = _object({
  title: string({
    invalid_type_error: "Movie title must be a string",
    required_error: "Movie title is required",
  }),
  year: number().int().min(1900).max(2024),
  director: string(),
  duration: number().positive(),
  rate: number().min(0).max(10),
  poster: string().url({
    message: "Poster must be a valid URL",
  }),
  genre: array(
    enum_([
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Thriller",
      "Sci-Fi",
    ]),
    {
      required_error: "Movie genre is required",
      invalid_type_error: "Movie genre must be an array of enum Genre",
    }
  ),
});

//validamos el schema
export function validateMovie(object) {
  return movieSchema.safeParse(object); //safeParse te dice si hay un error o si hay datos
}

export function validatePartialMovie(object) {
  return movieSchema.partial().safeParse(object);
}
