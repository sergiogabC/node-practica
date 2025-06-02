SELECT genres.name ,movies.title
FROM genres
inner join movie_genres on movie_genres.genre_id = genres.id
inner join movies on movies.id = movie_genres.movie_id
where lower(genres.name) = 'action';

SELECT * FROM genres;

SELECT * FROM movies;

SELECT * FROM movie_genres;

SELECT BIN_TO_UUID(movie_id) movie_id, genre_id FROM movie_genres;

SELECT genre_id,BIN_TO_UUID(movie_id) movie_id FROM movie_genres
WHERE genre_id = 2;

SELECT BIN_TO_UUID(movies.id) AS id, movies.title, movies.year, movies.director, movies.duration, movies.poster, movies.rate
FROM movies 
inner join movie_genres ON movie_genres.movie_id = movies.id
WHERE movie_genres.genre_id = 2;

SELECT * FROM movies WHERE BIN_TO_UUID(id) = '8e73702d-1487-11f0-bdc1-008cfa3b65c2'; -- x

SELECT id, name FROM genres WHERE LOWER(name) = 'Drama';

SELECT BIN_TO_UUID(movies.id),movies.title, movies.year, movies.director, movies.duration, movies.poster,genres.name AS genre, movies.rate
FROM movie_genres
INNER JOIN movies ON movies.id = movie_genres.movie_id
INNER JOIN genres ON genres.id = movie_genres.genre_id;


SELECT BIN_TO_UUID(id) as id, title, year, duration, poster, rate FROM movies;

set SQL_SAFE_UPDATES=0;
DELETE FROM movie_genres WHERE movie_id = UUID_TO_BIN("bb8bcdd0-1a00-11f0-a4a6-008cfa3b65c2");
DELETE FROM movies WHERE id = UUID_TO_BIN("bb8bcdd0-1a00-11f0-a4a6-008cfa3b65c2");
SET SQL_SAFE_UPDATES=1;

UPDATE movies 
SET year = 2023, rate = 8.3
WHERE id = UUID_TO_BIN("9bbb6cb3-1a09-11f0-a4a6-008cfa3b65c2");
