import React from "react";
import "./Styles/Style.css";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="./images/netflix-logo.png" alt="" />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">TV Shows</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Anime</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
