import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "moviesdb",
};

const connection = await mysql.createConnection(config);

export class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase();

      //get genre ids from database table using genre names
      const [movies] = await connection.query(
        `SELECT movies.title as Pelicula, genres.name as Drama
            FROM genres 
            inner join movie_genres on movie_genres.genre_id = genres.id
            inner join movies on movies.id = movie_genres.movie_id
            where lower(genres.name) = ?`,
        [lowerCaseGenre]
      );

      return movies;
    }

    const [movies] = await connection.query(
      "SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movies;"
    );
    return movies;
  }

  static async getById({ id }) {}

  static async create({ input }) {}

  static async delete({ id }) {}

  static async update({ id, input }) {}
}
