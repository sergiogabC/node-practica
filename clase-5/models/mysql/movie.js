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

      const [genres] = await connection.query(
        `SELECT id, name FROM genres 
        WHERE LOWER(name) = ?`,
        [lowerCaseGenre]
      );

      //No genre found
      if (genres.length === 0) return [];

      //get the id from the first genre result
      const [{ id }] = genres;

      const [movies] = await connection.query(
        `
        SELECT BIN_TO_UUID(movies.id) AS id, movies.title, movies.year, movies.director, movies.duration, movies.poster, movies.rate
        FROM movies 
        inner join movie_genres ON movie_genres.movie_id = movies.id
        WHERE movie_genres.genre_id = ?;`,
        [id]
      );

      return movies;
    }

    const [movies] = await connection.query(
      "SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movies;"
    );
    return movies;
  }

  static async getById({ id }) {
    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id 
      FROM movies WHERE id = UUID_TO_BIN(?);`,
      [id]
    );

    if (movies.length === 0) return null;

    return movies[0];
  }

  static async create({ input }) {
    const {
      genre: genreInput,
      title,
      year,
      duration,
      director,
      rate,
      poster,
    } = input;

    console.log(title);
    console.log(genreInput.length);

    const [uuidResult] = await connection.query(`SELECT UUID() uuid;`);
    const [{ uuid }] = uuidResult;

    try {
      await connection.query(
        `INSERT INTO movies (id, title, year, director, duration, poster, rate)
        VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?);`,
        [title, year, director, duration, poster, rate]
      );
    } catch (e) {
      throw new Error("Movie no created");
      //Enviar a servicio propio
    }

    try {
      if (genreInput.length === 1) {
        await connection.query(
          `INSERT INTO movie_genres (movie_id, genre_id)
          Values
          ((SELECT id FROM movies WHERE title = ?), (SELECT id FROM genres WHERE name = ?))`,
          [title, genreInput]
        );

        return movies[0];
      }
      await genreInput.map((genero) => {
        connection.query(
          `INSERT INTO movie_genres (movie_id, genre_id)
          Values
          ((SELECT id FROM movies WHERE title = ?), (SELECT id FROM genres WHERE name = ?))`,
          [title, genero]
        );
      });
    } catch (e) {
      throw new Error("movie_genres not created");
    }
    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id
      FROM movies WHERE id = UUID_TO_BIN(?);`,
      [uuid]
    );
    return movies[0];
  }

  static async delete({ id }) {
    await connection.query(`set SQL_SAFE_UPDATES=0;`);

    await connection.query(
      `DELETE FROM movie_genres WHERE movie_id = UUID_TO_BIN(?);`,
      [id]
    );

    await connection.query(`DELETE FROM movies WHERE id = UUID_TO_BIN(?)`, [
      id,
    ]);
    await connection.query(`set SQL_SAFE_UPDATES=1;`);
  }

  static async update({ id, input }) {
    const {
      genre: genreModified,
      title,
      year,
      director,
      duration,
      poster,
      rate,
    } = input;

    //Validaciones

    var listaModified = [];

    if (title !== undefined) {
      listaModified.push(`title = "${title}",`);
    }

    if (year !== undefined) {
      listaModified.push(`year = ${year},`);
    }

    if (director !== undefined) {
      listaModified.push(`director = "${director}",`);
    }

    if (duration !== undefined) {
      listaModified.push(`duration = ${duration},`);
    }

    if (poster !== undefined) {
      listaModified.push(`poster = "${poster}",`);
    }

    if (rate !== undefined) {
      listaModified.push(`rate = ${rate},`);
    }

    console.log(listaModified);

    const endIndex = listaModified.length - 1;

    const endElement = listaModified[endIndex].replace(",", "");

    listaModified.splice(endIndex, 1, endElement);

    const sintaxSql = listaModified.join(" ");

    await connection.query(
      `UPDATE movies
        SET ${sintaxSql}
        WHERE id = UUID_TO_BIN(?);`,
      [id]
    );

    const movie = await connection.query(
      `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id 
      FROM movies WHERE id = UUID_TO_BIN(?);`,
      [id]
    );
    return movie[0];
  }
}
