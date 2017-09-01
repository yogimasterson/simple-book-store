const promise = require('bluebird')

const options = {
  promiseLib: promise
}

const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/anime'
const db = pgp(connectionString)

const listTopSeries = () => {
  return db.any('SELECT * FROM shows WHERE end_date IS NOT NULL ORDER BY score DESC')
}

const listTopCurrent = () => {
  return db.any('SELECT * FROM shows WHERE end_date IS NULL ORDER BY score DESC')
}

const listAnimeInGenres = (genre) => {
  return db.any('SELECT * FROM shows_genres JOIN shows ON shows_genres.shows_id = shows.id JOIN genres ON shows_genres.genres_id = genres.id WHERE genres.name = $1 ORDER BY score DESC', genre)
}

module.exports = { listTopSeries, listTopCurrent, listAnimeInGenres }