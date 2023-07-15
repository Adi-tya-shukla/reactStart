import React,{useContext} from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';
import MovieContext from './Store/MovieContext';

const MovieList = (props) => {
  const ctx = useContext(MovieContext);
  return (
    <ul className={classes['movies-list']}>
      {ctx.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
