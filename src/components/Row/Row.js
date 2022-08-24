import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../../axios";
import Youtube from "react-youtube";
import "./Row.scss";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // When a row component loads it will fetch the data from the API and set the state of the movies array to the data it receives from the API.
  useEffect(() => {
    //if [] it will run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name || "")
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));

      }).catch(err => console.log(err));
    }
  }
  
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__posters__poster ${isLargeRow && "row__posters__posterLarge"}`}
            onClick={() => handleClick(movie)}
            key={movie.id}
            src={`http://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
