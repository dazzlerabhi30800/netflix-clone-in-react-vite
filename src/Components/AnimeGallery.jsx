import React, { useRef, useEffect } from "react";
import data from "./AnimeData";

const AnimeGallery = ({ scrollDistance }) => {
  const animeGallery = useRef();
  const animeItem = useRef();
  const Prev3 = useRef();
  const Next3 = useRef();
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
    const gallery = animeGallery.current;
    if (dir === 1) {
      gallery.scrollLeft += scrollDistance;
    } else {
      gallery.scrollLeft -= scrollDistance;
    }
    // console.log(gallery.scrollLeft);
  };

  const handleButtons = () => {
    const GalleryPercent = animeItem.current.offsetWidth - window.innerWidth;
    if (animeGallery.current.scrollLeft <= 10) {
      Prev3.current.style.opacity = 0;
    } else if (
      animeGallery.current.scrollLeft >= GalleryPercent &&
      window.innerWidth >= 1200
    ) {
      Next3.current.style.opacity = 0;
    } else if (
      animeGallery.current.scrollLeft >= GalleryPercent &&
      window.innerWidth <= 1200
    ) {
      Next3.current.style.opacity = 0;
    } else {
      Next3.current.style.opacity = 1;
      Prev3.current.style.opacity = 1;
    }
    // console.log(GalleryPercent);
  };

  useEffect(() => {
    handleButtons();
  }, []);

  return (
    <div className="gallery--wrapper">
      <div className="gallery--container">
        <h1 className="heading">Anime</h1>
        <div className="gallery--card">
          <div className="gallery" onScroll={handleButtons} ref={animeGallery}>
            <div ref={animeItem} className="gallery-scroll">
              {galleryComp}
            </div>
          </div>
          <button
            onClick={() => handleScroll(-1)}
            ref={Prev3}
            className="btn prev"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={() => handleScroll(1)}
            ref={Next3}
            className="btn next"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeGallery;
