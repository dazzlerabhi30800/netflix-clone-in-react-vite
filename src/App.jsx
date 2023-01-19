import React from "react";
import "./App.css";
import GalleryTv from "./Components/GalleryTv";
import Header from "./Components/Header";
import MovieGallery from "./Components/MovieGallery";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <GalleryTv scrollDistance={150} />
        <MovieGallery scrollDistance={150} />
      </main>
    </div>
  );
}

export default App;
