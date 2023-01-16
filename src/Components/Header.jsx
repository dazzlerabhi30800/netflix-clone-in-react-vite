import React, { useState, useEffect } from "react";

const Header = ({ headerImage }) => {
  const [counter, setCounter] = useState(0);
  const headerBackground = [
    "/img/header-images/chainsaw-man.png",
    "/img/header-images/one-punch-man.jpg",
    "/img/header-images/no-country-old-men.jpg",
    "/img/header-images/once-upon-a-time-in-hollywood.jpg",
    "/img/header-images/lucifer.jpg",
    "/img/header-images/inception.jpg",
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
