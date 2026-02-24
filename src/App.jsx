import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import SingleMovie from "./components/MovieList/SingleMovie";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<MovieList type="popular" title="Popular" />}
          />
          <Route
            path="/top_rated"
            element={<MovieList type="top_rated" title="Top Rated" />}
          />
          <Route
            path="/upcoming"
            element={<MovieList type="upcoming" title="Upcoming" />}
          />
          <Route path="/movie/:id" element={<SingleMovie />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
