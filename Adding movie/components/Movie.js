import React,{useContext} from 'react';

import classes from './Movie.module.css';
import MovieContext from './Store/MovieContext';
const Movie = (props) => {
  const ctx = useContext(MovieContext);

  const deleteHandler =(id)=>{
    ctx.onDelete(id);

  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={()=>deleteHandler(props.id)}>Delete</button>
    </li>
  );
};

export default Movie;
