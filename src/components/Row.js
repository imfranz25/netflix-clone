import React, { useState, useEffect } from 'react';
import axios from './../api/axios'; // export instance => axios (alias)

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchURL}) {
  const [movies , setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      console.table(request.data.results);
    }
    fetchData();
  },[fetchURL]); 

  return (
    <div>
      <h1>{title}</h1>
      {movies.map(movie => (
        <img src={IMG_BASE_URL+movie.poster_path} alt={movie.name} />
      ))}
    </div>
  )
}

export default Row;