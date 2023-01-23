import React, { useEffect, useRef } from "react";
import data from "./KoreanData";

const KoreanGallery = ({ scrollDistance }) => {
  const koreanGallery = useRef();
  const koreanItem = useRef();
  const Prev4 = useRef();
  const Next4 = useRef();
  const galleryComp = data.map((element, i) => {
    return (
      <div
        style={{ backgroundImage: `url(${element})` }}
        className="gallery--item"
        key={i}
      >
        <div className="button--container">
          <button className="show">
            <i className="fas fa-play"></i>PLAY
          </button>
          <button className="like">
            <i className="fas fa-plus"></i>MY LIST
          </button>
        </div>
      </div>
    );
  });

  // function for scroll in gallery
  const handleScroll = (dir) => {
    const gallery = koreanGallery.current;
    if (dir === 1) {
      gallery.scrollLeft += scrollDistance;
    } else {
      gallery.scrollLeft -= scrollDistance;
    }
    // console.log(gallery.scrollLeft);
  };

  const handleButtons = () => {
    const GalleryPercent = koreanItem.current.offsetWidth - window.innerWidth;
    if (koreanGallery.current.scrollLeft <= 10) {
      Prev4.current.style.opacity = 0;
    } else if (
      koreanGallery.current.scrollLeft >= GalleryPercent &&
      window.innerWidth >= 1200
    ) {
      Next4.current.style.opacity = 0;
    } else if (
      koreanGallery.current.scrollLeft >= GalleryPercent &&
      window.innerWidth <= 1200
    ) {
      Next4.current.style.opacity = 0;
    } else {
      Next4.current.style.opacity = 1;
      Prev4.current.style.opacity = 1;
    }
    // console.log(GalleryPercent);
  };

  useEffect(() => {
    handleButtons();
  }, []);

  return (
    <div className="gallery--wrapper">
      <div className="gallery--container">
        <h1 className="heading">Koream Movies</h1>
        <div className="gallery--card">
          <div className="gallery" onScroll={handleButtons} ref={koreanGallery}>
            <div ref={koreanItem} className="gallery-scroll">
              {galleryComp}
            </div>
          </div>
          <button
            onClick={() => handleScroll(-1)}
            ref={Prev4}
            className="btn prev"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={() => handleScroll(1)}
            ref={Next4}
            className="btn next"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KoreanGallery;
