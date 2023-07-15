import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieContext from './components/Store/MovieContext';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryTime, setRetryTime] = useState(5);
  const [showRetryButton, setShowRetryButton] = useState(false);
  const [addMovie, setAddMovie] = useState(false);


  useEffect(() => {
    let timer;
    if (retryTime > 0) {
      timer = setTimeout(() => {
        setRetryTime((prevTime) => prevTime - 1);
      }, 5000);
    } else {
      setShowRetryButton(true);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [retryTime]);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);


    try {
      const response = await fetch('https://react-proj-f7662-default-rtdb.firebaseio.com/movies.json');

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          openingText: data[key].openingText,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
        })
      }

      setShowRetryButton(false);


      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
      setRetryTime(5);
      setShowRetryButton(true);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler])

  async function addMovieHandler(movie) {
    const response = await fetch('https://react-proj-f7662-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
    setAddMovie(false)
    fetchMovieHandler();
  }

  const openFormHandler = () => {
    setAddMovie(true);
  }
  const closeFormHandler = () => {
    setAddMovie(false)
  }

  async function deleteMovieHandler(id) {
    try {
      const response = await fetch(
        `https://react-proj-f7662-default-rtdb.firebaseio.com/movies/${id}.json`,
        {
          method: 'DELETE',
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to delete movie.');
      }
  
      // Handle successful deletion here or update the movie list
    } catch (error) {
      setError(error.message)
    }
  }
  
  return (
    <MovieContext.Provider
    value={{
      onAdd : addMovieHandler,
      onClose : closeFormHandler,
      movies : movies,
      onDelete : deleteMovieHandler
    }}
    >
      <React.Fragment>
        <section>
          {!addMovie && <button onClick={openFormHandler}>Add Movie</button>}
          {addMovie && <AddMovie
          //  onAddMovie={addMovieHandler} onClose={closeFormHandler}
            />}
        </section>
        <section>
          {!showRetryButton &&
            <button onClick={fetchMovieHandler}
              disabled={showRetryButton}>
              Fetch Movies
            </button>}
          {showRetryButton && error && (
            <button
              onClick={fetchMovieHandler}
              disabled={!showRetryButton}
            >
              Retry
            </button>
          )}
        </section>
        <section>
          {!isLoading && movies.length > 0 && <MoviesList
          //  movies={movies}
            />}
          {!isLoading && movies.length === 0 && !error && <p>No movies to display</p>}
          {isLoading && <p>Loading....</p>}
          {!isLoading && error && <p>{error}</p>}
        </section>
      </React.Fragment>
    </MovieContext.Provider>

  );
}

export default App;
