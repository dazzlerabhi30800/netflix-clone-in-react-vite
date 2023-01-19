import React, { useRef, useEffect } from "react";
import "./Styles/Style.css";
import data from "./TvData";

const Gallery = ({ scrollDistance }) => {
  const Gallery = useRef();
  const GalleryItem = useRef();
  const Prev = useRef();
  const Next = useRef();
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
    const gallery = Gallery.current;
    if (dir === 1) {
      gallery.scrollLeft += scrollDistance;
    } else {
      gallery.scrollLeft -= scrollDistance;
    }
    // console.log(gallery.scrollLeft);
  };

  const handleButtons = () => {
    const GalleryPercent = GalleryItem.current.offsetWidth - window.innerWidth;
    if (Gallery.current.scrollLeft <= 10) {
      Prev.current.style.opacity = 0;
    } else if (
      Gallery.current.scrollLeft >= GalleryPercent &&
      window.innerWidth >= 1200
    ) {
      Next.current.style.opacity = 0;
    } else if (
      Gallery.current.scrollLeft >= GalleryPercent &&
      window.innerWidth <= 1200
    ) {
      Next.current.style.opacity = 0;
    } else {
      Next.current.style.opacity = 1;
      Prev.current.style.opacity = 1;
    }
    // console.log(GalleryPercent);
  };

  useEffect(() => {
    handleButtons();
  }, []);

  return (
    <div className="gallery--wrapper">
      <div className="gallery--container">
        <h1 className="heading">TV Shows</h1>
        <div className="gallery--card">
          <div className="gallery" onScroll={handleButtons} ref={Gallery}>
            <div ref={GalleryItem} className="gallery-scroll">
              {galleryComp}
            </div>
          </div>
          <button
            onClick={() => handleScroll(-1)}
            ref={Prev}
            className="btn prev"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={() => handleScroll(1)}
            ref={Next}
            className="btn next"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
