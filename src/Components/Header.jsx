import React from "react";
import "./Styles/Header.css";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="./images/netflix-logo.png" alt="" />
      </div>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
