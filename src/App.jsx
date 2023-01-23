import React from "react";
import "./App.css";
import AnimeGallery from "./Components/AnimeGallery";
import Footer from "./Components/Footer";
import GalleryTv from "./Components/GalleryTv";
import Header from "./Components/Header";
import KoreanGallery from "./Components/KoreanGallery";
import MovieGallery from "./Components/MovieGallery";
import Navbar from "./Components/Navbar";
import ScrollButton from "./Components/ScrollButton";
import TrailerContainer from "./Components/TrailerContainer";

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
        {/* <ScrollButton /> */}
        {/* <TrailerContainer /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
