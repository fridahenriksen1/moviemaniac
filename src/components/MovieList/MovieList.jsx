import React from "react";
import "./MovieList.css";

const MovieList = () => {
  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">Popular</h2>
        <div className="movie_list_fs">
          <ul className="movie_filter">
            <li className="movie_filter_item"></li>
            <li className="movie_filter_item"></li>
            <li className="movie_filter_item"></li>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default MovieList;
