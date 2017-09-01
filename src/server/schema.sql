DROP DATABASE IF EXISTS anime;
CREATE DATABASE anime;

\c anime

DROP TABLE IF EXISTS shows;
CREATE TABLE shows(
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  score INT NOT NULL,
  episodes INT,
  start_date DATE NOT NULL,
  end_date DATE,
  image VARCHAR(64) NOT NULL
);

DROP TABLE IF EXISTS genres;
CREATE TABLE genres(
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(40) NOT NULL
);

DROP TABLE IF EXISTS shows_genres;
CREATE TABLE shows_genres(
  shows_id INT NOT NULL,
  genres_id INT NOT NULL,
  FOREIGN KEY (shows_id) REFERENCES shows (id),
  FOREIGN KEY (genres_id) REFERENCES genres (id)
);