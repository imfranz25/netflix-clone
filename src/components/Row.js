// LIBS
import React, { useState, useEffect } from "react";
import axios from "./../api/axios"; // export instance => axios (alias)
// STYLE
import "./../css/Row.scss";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row-container">
      <h1>{title}</h1>
      <div className="row-posters">
        {movies.map((movie, index) => (
          <img
            key={movie.id}
            className={`poster-img ${isLargeRow && "poster-imgLarge"}`}
            src={`${IMG_BASE_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
