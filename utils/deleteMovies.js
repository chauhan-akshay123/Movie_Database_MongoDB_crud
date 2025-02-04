const Movie = require("../models/movie.model");

async function deleteMovieById(movieId) {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    return deletedMovie;
  } catch (error) {
    console.error("Error deleting movie by ID:", error);
    throw error;
  }
}

async function deleteMovieByTitle(movieTitle) {
  try {
    const deletedMovie = await Movie.findOneAndDelete({ title: movieTitle });
    return deletedMovie;
  } catch (error) {
    console.error("Error deleting movie by Title:", error);
    throw error;
  }
}

module.exports = { deleteMovieById, deleteMovieByTitle };
