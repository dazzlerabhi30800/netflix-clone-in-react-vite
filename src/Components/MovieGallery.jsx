import React, { useEffect, useRef } from "react";
import data from "./MovieData";

const MovieGallery = ({ scrollDistance }) => {
  const movieGallery = useRef();
  const movieItem = useRef();
  const Next2 = useRef();
  const Prev2 = useRef();
  const galleryComp = data.map((element, i) => {
    return (
      <div
        style={{ backgroundImage: `url(${element})` }}
        className="gallery--item"
        key={i}
      >
        <div className="button--container">
          <button className="show">Watch Now</button>
          <button className="like">Add to Playlist</button>
        </div>
      </div>
    );
  });
  // function for scroll in gallery
  const handleScroll = (dir) => {
    const gallery = movieGallery.current;
    if (dir === 1) {
      gallery.scrollLeft += scrollDistance;
    } else {
      gallery.scrollLeft -= scrollDistance;
    }
    // console.log(gallery.scrollLeft);
  };

  const handleButtons = () => {
    const GalleryPercent = movieItem.current.offsetWidth - window.innerWidth;
    if (movieGallery.current.scrollLeft <= 10) {
      Prev2.current.style.opacity = 0;
    } else if (
      movieGallery.current.scrollLeft >= GalleryPercent &&
      window.innerWidth >= 1200
    ) {
      Next2.current.style.opacity = 0;
    } else if (
      movieGallery.current.scrollLeft >= GalleryPercent &&
      window.innerWidth <= 1200
    ) {
      Next2.current.style.opacity = 0;
    } else {
      Next2.current.style.opacity = 1;
      Prev2.current.style.opacity = 1;
    }
    // console.log(GalleryPercent);
  };

  useEffect(() => {
    handleButtons();
  }, []);
  return (
    <div className="gallery--wrapper">
      <div className="gallery--container">
        <h1 className="heading">Popular Movies</h1>
        <div className="gallery--card">
          <div className="gallery" onScroll={handleButtons} ref={movieGallery}>
            <div ref={movieItem} className="gallery-scroll">
              {galleryComp}
            </div>
          </div>
          <button
            onClick={() => handleScroll(-1)}
            ref={Prev2}
            className="btn prev"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={() => handleScroll(1)}
            ref={Next2}
            className="btn next"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieGallery;
