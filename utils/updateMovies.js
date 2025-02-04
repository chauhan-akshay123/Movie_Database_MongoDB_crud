const Movie = require("../models/movie.model");

async function updateMovie(movieId, dataToUpdate) {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, { new: true });
    return updatedMovie;
  } catch (error) {
    console.error("Error updating movie by ID:", error);
    throw error;
  }
}

async function updateMovieDetails(movieTitle, dataToUpdate) {
  try {
    const updatedMovie = await Movie.findOneAndUpdate({ title: movieTitle }, dataToUpdate, { new: true });
    return updatedMovie;
  } catch (error) {
    console.error("Error updating movie by Title:", error);
    throw error;
  }
}

module.exports = { updateMovie, updateMovieDetails }
