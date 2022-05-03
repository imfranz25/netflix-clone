// LIBS
import React, { useState, useEffect } from "react";
import axios from "./../api/axios"; // export instance => axios (alias)
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
// STYLE
import "./../css/Row.scss";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "95%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row-container">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie, index) => (
          <img
            onClick={() => handleTrailer(movie)}
            key={movie.id}
            className={`poster-img ${isLargeRow && "poster-imgLarge"}`}
            src={`${IMG_BASE_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
