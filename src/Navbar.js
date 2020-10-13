import React, { useState } from "react";
import "./Navbar.css";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=7ecd0b11bc4cd387a22b43cb37086584&query=";

const Navbar = ({ getMovies }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getMovies(`${SEARCH_API} ${searchItem}`);
  };

  const handleOnChange = (e) => {
    setSearchItem(e.target.value);
  };
  return (
    <div className="navbar">
      <form onSubmit={handleOnSubmit}>
        <input
          type="search"
          className="search"
          placeholder="Search..."
          value={searchItem}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};

export default Navbar;
