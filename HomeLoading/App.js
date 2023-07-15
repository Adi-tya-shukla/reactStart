import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryTime, setRetryTime] = useState(5);
  const [showRetryButton, setShowRetryButton] = useState(false);

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

  const fetchMovieHandler = useCallback( async () => {
    setIsLoading(true);
    setError(null);
    
    setShowRetryButton(false);

    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
      setRetryTime(5);
      setShowRetryButton(true);
    }

    setIsLoading(false);
  },[]);

  useEffect (()=>{
  fetchMovieHandler();
},[fetchMovieHandler])

  return (
    <React.Fragment>
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
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies to display</p>}
        {isLoading && <p>Loading....</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
