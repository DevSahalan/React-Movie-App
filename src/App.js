import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./Movie";
import Navbar from "./Navbar";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ecd0b11bc4cd387a22b43cb37086584";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=7ecd0b11bc4cd387a22b43cb37086584&query=";

function App() {
  const [movies, setMovies] = useState([]);
  // const [searchItem, setSearchItem] = useState("");
  const getMovies = async (API) => {
    const data = await fetch(API);
    const moviesR = await data.json();
    setMovies(moviesR.results);
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(searchItem);
  //   getMovies(`${SEARCH_API}${searchItem}`);
  // };

  // const handleOnChange = (e) => {
  //   setSearchItem(e.target.value);
  // };
  return (
    <div className="App">
      {/* <div className="form-search">
      <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search..."
            value={searchItem}
            onChange={handleOnChange}
          />
        </form>
        </div> */}
      <Navbar getMovies={getMovies} />
      <div className="movie-comp">
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
