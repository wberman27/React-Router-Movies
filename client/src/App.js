import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Switch, useParams} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(res => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(res.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return ( //:movieID is setting a param for use in Movie component
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>
        <Switch>
          <Route path = '/movies/:movieID'><Movie /></Route>
          <Route path = '/'><MovieList movies = {movieList}/></Route>
        </Switch>
      </div>
    </div>
  );
}
