import React from "react";

import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <a href="#popular">Popular</a>
        <a href="#top_rated">Top Rated</a>
        <a href="#upcoming">Upcoming</a>
        <DarkMode />
      </div>
    </nav>
  );
};

export default Navbar;
