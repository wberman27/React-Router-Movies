import React from 'react';
import {useHistory} from 'react-router-dom'
import Movie from './Movie';

export default function MovieList(props) {
  const {movies} = props

  return (
    <div className="movie-list">
      {movies.map(movie => ( //map each movie's details, give MovieDetails these props
        <MovieDetails key={movie.id} title = {movie.title} director = {movie.director} metascore = {movie.metascore} id = {movie.id}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props;

  const history = useHistory(); //allows use of history

  const routeToMovie = () =>{ //function for onClick of div movie-card to push you to correct movie
    history.push(`/movies/${id}`)
  }

  return (
    <div className="movie-card" onClick = {() => routeToMovie()}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}



