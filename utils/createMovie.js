const Movie = require("../models/movie.model");

async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie);
    const savedMovie = await movie.save();
    return savedMovie;
  } catch (error) {
    console.error("Error creating movie:", error);
    throw error;
  }
}

module.exports = createMovie;
