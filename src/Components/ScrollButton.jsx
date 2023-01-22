import React, { useState } from "react";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  const scrollToTop = () => {
    if (showButton) {
      window.scrollTo(0, 0);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div
      className={`scroll--btn ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-chevron-up"></i>
    </div>
  );
};

export default ScrollButton;
