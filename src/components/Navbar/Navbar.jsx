import React from "react";

import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <NavLink to="#popular">Popular</NavLink>
        <NavLink to="#top_rated">Top Rated</NavLink>
        <NavLink to="#upcoming">Upcoming</NavLink>
        <DarkMode />
      </div>
    </nav>
  );
};

export default Navbar;
