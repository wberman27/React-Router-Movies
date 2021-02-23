import React from 'react';
import {useRouteMatch, useHistory} from 'react-router-dom'

export default function MovieList(props) {
  const {movies} = props

  const {url} = useRouteMatch();
  console.log(url)

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props;

  const history = useHistory();

  const routeToMovie = () =>{
    history.push(`/movies/1`)
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
