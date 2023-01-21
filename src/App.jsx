import React from "react";
import "./App.css";
import AnimeGallery from "./Components/AnimeGallery";
import GalleryTv from "./Components/GalleryTv";
import Header from "./Components/Header";
import KoreanGallery from "./Components/KoreanGallery";
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
        <AnimeGallery scrollDistance={150} />
        <KoreanGallery scrollDistance={150} />
      </main>
    </div>
  );
}

export default App;
