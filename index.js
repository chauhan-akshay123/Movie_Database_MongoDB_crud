const { initializeDatabase } = require("./db/db.connect");
const Movie = require("./models/movie.model");
const express = require("express");
const createMovie = require("./utils/createMovie");
const { readAllMovies, readMovieByDirector } = require("./utils/readMovies");
const { updateMovie, updateMovieDetails } = require("./utils/updateMovies");
const { deleteMovieById, deleteMovieByTitle } = require("./utils/deleteMovies");
const app = express();

app.use(express.json());

initializeDatabase();

// Endpoint to create a movie  
app.post("/movies", async (req, res) => {
    try{
      const savedMovie = await createMovie(req.body);
      res.status(201).json({ message: "Movie added successfully.", movie: savedMovie });
    } catch(error){
      res.status(500).json({ error: "Failed to add movie", error: error });
    }
  });

// Endpoint to fetch all movies
app.get("/movies", async (req, res) => {
    try{
     const allMovies = await readAllMovies();
     res.status(200).json({ message: "All movies fetched successfully", allMovies }); 
    } catch(error){
      res.status(500).json({ error: "Failed to fetch movies", error: error });
    }
  });
  
// Endpoint to fetch movie by director name
app.get("/movies/director/:directorName", async (req, res) => {
    try{
      const { directorName } = req.params;
      const movies = await readMovieByDirector(directorName);
      res.status(200).json({ message: `Movies by director: ${directorName}`, movies }); 
    } catch(error){
      res.status(500).json({ message: "Error in fetching the movies by director", error: error });
    } 
  }); 
  
// Endpoint to update a movie by its ID
app.put("/movies/updateById", async (req, res) => {
    try{
     const { movieId, dataToUpdate } = req.body;
     const updatedMovie = await updateMovie(movieId, dataToUpdate);
     if(!updatedMovie) {
       return res.status(404).json({ message: "Movie not found." });
     }
     res.status(200).json({ message: "Movie updated successfully", movie: updatedMovie });
    } catch(error){
      res.status(500).json({ message: "Error updating movie", error: error.message });
    }
  }); 

// Endpoint to update a movie by its title
app.put("/movies/updateByTitle", async (req, res) => {
    try{
      const { movieTitle, dataToUpdate } = req.body;
      const updatedMovie = await updateMovieDetails(movieTitle, dataToUpdate);
      if(!updatedMovie){
        res.status(404).json({ message: "Movie not found." });
      }
      res.status(200).json({ message: "Movie updated successfully", updatedMovie });
    } catch(error){
      res.status(500).json({ message: "Error in updating the movie", error: error.message });
    }
  });  

// Endpoint to delete a by its ID
app.delete("/movies/delete/:movieId", async (req, res) => {
    try{
     const { movieId } = req.params;
     const deletedMovie = await deleteMovieById(movieId);
     if(!deletedMovie){
       return res.status(404).json({ message: "Movie not found." });  
     }
     res.status(200).json({ message: "Movie deleted successfully." });
    } catch(error){
      res.status(500).json({ message: "Error in deleting the movie", error: error.message });
    } 
  });  

// Endpoint to delete a movie by its title
app.delete("/movies/delete", async (req, res) => {
    try{
      const movieTitle = req.query.movieTitle;
      const deletedMovie = await deleteMovieByTitle(movieTitle);
      if(!deletedMovie){
       return res.status(404).json({ message: "Movie not found." })
      }
      res.status(200).json({ message: "Movie deleted successfully." });
    } catch(error){
      res.status(500).json({ message: "Error in deleting the movie", error: error.message });
    }
  });  

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});