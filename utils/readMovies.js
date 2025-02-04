const Movie = require("../models/movie.model");

async function readAllMovies() {
  try {
    const allMovies = await Movie.find();
    return allMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

async function readMovieByDirector(directorName) {
  try {
    const movieByDirector = await Movie.find({ director: directorName });
    return movieByDirector;
  } catch (error) {
    console.error("Error fetching movies by director:", error);
    throw error;
  }
}

module.exports = { readAllMovies, readMovieByDirector };
