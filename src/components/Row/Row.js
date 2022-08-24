import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.scss";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

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

  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__posters__poster ${isLargeRow && "row__posters__posterLarge"}`}
            key={movie.id}
            src={`http://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
