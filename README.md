# Movie Database API (MongoDB)

A simple movie database API built using Node.js, Express.js, and MongoDB that supports CRUD operations to manage movie records. This API allows you to add, fetch, update, and delete movies, with features such as searching movies by director or title.

## Features

- **Create a movie**: Add a new movie to the database.
- **Read all movies**: Fetch a list of all movies.
- **Search movies by director**: Fetch movies by a specific director.
- **Update movie by ID**: Update a movie's details using its unique ID.
- **Update movie by title**: Update a movie's details using its title.
- **Delete movie by ID**: Delete a movie by its unique ID.
- **Delete movie by title**: Delete a movie by its title.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose (for MongoDB ORM)

## API Endpoints

### 1. Create a Movie
- **Method**: `POST`
- **URL**: `/movies`
- **Request Body**:
   ```json
  "title": "New Movie",
  "releaseYear": 2025,
  "genre": ["Drama"],
  "director": "Mia Khalifa",
  "actors": ["Lana Rhodes", "Johny Sins"],
  "language": "English",
  "country": "USA",
  "rating": 8.6,
  "plot": "It's a new adventure movie",
  "awards": "Oscar Nomination",
  "posterUrl": "https://example.com/poster-newMovie.jpg",
  "trailerUrl": "https://example.com/trailer-newMovie.mp4"

### 2. Get All movies
- **MEthod**: `GET`
- **URL**: `/movies`
- **Response**: A list of all movies.

### 3. Get Movie by Director
- **Method**: `GET`
- **URL**: `/movies/director/:directorName`,
- **URL Params**: `directorName` (The name of the director to search for)
- **Response**: A list of movies by the specified director.

### 4. Update Movie by ID
- **Method**: `PUT`,
- **URL**: `/movies/updatedById`
- **Request Body**:
  ```json
  {
    "movieId": "Movie ID",
    "dataToUpdate": {
    "rating": "New Rating",
    "year": "New Year"
   }
  }

### 5. Update Movie by Title
- **Method**: `PUT`,
- **URL**: `/movies/updateByTitle`,
- **Request Body**:
  ```json
  {
    "movieTitle": "Movie Title",
    "dataToUpdate": {
    "rating": "New Rating",
    "year": "New Year"
   }
  } 

### 6. Delete Movie by ID
- **Method**: `DELETE`
- **URL**: `/movies/delete/:movieId`
- **URL Params**: `movieId` (The unique ID of the movie to delete) 
- **Response**: Confirmation message of deletion. 

### 7. Delete Movie by Title
- **Method**: `DELETE`
- **URL**: `/movies/delete`
- **Query Params**: `movieTitle` (The title of the movie to delete)
- **Response**: Confirmation message of deletion

---

## Setup Instructions

### 1. Clone the repository:
``git clone https://github.com/yourusername/movie-database-api.git
  cd movie-database-api``

### 2. Install the dependencies:
`` npm install ``

### 3. Create ``.env`` file at the root of your project and your MongoDB connection string:
``MONGO_URI=your_mongodb_connection_string``

### 4. Start the server: 
`` node index.js ``
