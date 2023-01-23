import React, { useRef, useState } from "react";
import data from "./TrailerData";

const TrailerContainer = () => {
  const [allowShift, setAllowShift] = useState(true);
  const [counter, setCounter] = useState(0);
  const trailerContainer = useRef();
  let newTrailer = [];
  newTrailer = [...data];
  newTrailer.push(data[0]);
  newTrailer.unshift(data[data.length - 1]);
  function changeTrailerBackground() {
    let posInitial = trailerContainer.current.offsetLeft;
    let slideSize = trailerContainer.current.children[0].offsetWidth;
    trailerContainer.current.classList.add("sliding");
    if (allowShift) {
      trailerContainer.current.style.left = posInitial - slideSize + "px";
      setCounter((prevState) => prevState + 1);
    }
    setAllowShift(false);
  }
  const checkIndex = () => {
    trailerContainer.current.classList.remove("sliding");
    let slideSize = trailerContainer.current.children[0].offsetWidth;

    if (counter === trailerContainer.current.children.length - 2) {
      trailerContainer.current.style.left = -(1 * slideSize) + "px";
      setCounter(0);
    }
    setAllowShift(true);
  };

  const trailerComp = newTrailer.map((src, i) => {
    return (
      <div
        className="trailer"
        key={i}
        style={{ backgroundImage: `url(${src})` }}
      >
        Trailer-{i}
      </div>
    );
  });

  return (
    <div className="trailer--wrapper">
      <div
        className="trailer--container"
        onClick={changeTrailerBackground}
        onTransitionEnd={checkIndex}
        ref={trailerContainer}
      >
        {trailerComp}
      </div>
    </div>
  );
};

export default TrailerContainer;
