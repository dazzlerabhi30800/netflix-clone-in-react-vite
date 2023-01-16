import React, { useState, useEffect } from "react";

const Header = ({ headerImage }) => {
  const [counter, setCounter] = useState(0);
  const headerBackground = [
    "/src/assets/header-images/chainsaw-man.png",
    "/src/assets/header-images/one-punch-man.jpg",
    "/src/assets/header-images/no-country-old-men.jpg",
    "/src/assets/header-images/once-upon-a-time-in-hollywood.jpg",
    "/src/assets/header-images/lucifer.jpg",
    "/src/assets/header-images/inception.jpg",
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
