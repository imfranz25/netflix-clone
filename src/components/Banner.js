// LIBS
import React, { useState, useEffect } from "react";
// export instance => axios (alias)
import axios from "./../api/axios";
// API OBJECT REQUESTS (E.G fetchNetflixOriginals) -> Original Movies of Netflix
import requests from "./../api/request";
// STYLE
import "./../css/Banner.scss";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${IMG_BASE_URL}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-btn">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1 className="banner-desc">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
