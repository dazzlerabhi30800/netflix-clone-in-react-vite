import React, { useState, useRef, useEffect } from "react";

const Header = ({ headerImage }) => {
  const [counter, setCounter] = useState(0);
  const [allowShift, setAllowShift] = useState(true);
  const sliderContainer = useRef();
  const headerBackground = [
    "/img/header-images/chainsaw-man.png",
    "/img/header-images/one-punch-man.jpg",
    "/img/header-images/no-country-old-men.jpg",
    "/img/header-images/once-upon-a-time-in-hollywood.jpg",
    "/img/header-images/lucifer.jpg",
    "/img/header-images/inception.jpg",
  ];
  let newSlides = [];
  newSlides = [...headerBackground];
  newSlides.push(headerBackground[0]);
  newSlides.unshift(headerBackground[headerBackground.length - 1]);

  function changeBackground() {
    let posInitial = sliderContainer.current.offsetLeft;
    let slideSize = sliderContainer.current.children[0].offsetWidth;
    sliderContainer.current.classList.add("shifting");
    if (allowShift) {
      sliderContainer.current.style.left = posInitial - slideSize + "px";
      setCounter((prevState) => prevState + 1);
    }
    setAllowShift(false);
  }

  const checkIndex = () => {
    sliderContainer.current.classList.remove("shifting");
    let slideSize = sliderContainer.current.children[0].offsetWidth;

    if (counter === sliderContainer.current.children.length - 2) {
      sliderContainer.current.style.left = -(1 * slideSize) + "px";
      setCounter(0);
    }
    setAllowShift(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeBackground();
    }, 60000);
    return () => clearInterval(interval);
  }, [allowShift]);

  return (
    <header
      // style={{ backgroundImage: `url(${headerBackground[counter]})` }}
      onClick={changeBackground}
      ref={headerImage}
    >
      <div className="slider--container">
        <div
          className="slide"
          ref={sliderContainer}
          onTransitionEnd={checkIndex}
        >
          {newSlides.map((img, i) => {
            return <img className="slide--img" src={img} key={i} alt="" />;
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
