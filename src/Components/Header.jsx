import React, { useState, useEffect } from "react";

const Header = ({ headerImage }) => {
  const [counter, setCounter] = useState(0);
  const headerBackground = [
    "/public/images/header-images/chainsaw-man.png",
    "/public/images/header-images/one-punch-man.jpg",
    "/public/images/header-images/no-country-old-men.jpg",
    "/public/images/header-images/once-upon-a-time-in-hollywood.jpg",
    "/public/images/header-images/lucifer.jpg",
    "/public/images/header-images/inception.jpg",
  ];
  function changeBackground() {
    if (counter >= headerBackground.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeBackground();
    }, 20000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <header
      style={{ backgroundImage: `url(${headerBackground[counter]})` }}
      onClick={changeBackground}
      ref={headerImage}
    ></header>
  );
};

export default Header;
