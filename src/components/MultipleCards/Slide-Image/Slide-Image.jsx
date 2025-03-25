import React, { useState, useEffect } from "react";
import "./Slide-image.css";
const SlideImages = ({ imagePaths }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imgProps = imagePaths.map((element, index) => (
    <img src={element} alt={`Loading`}></img>
  ));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imgProps.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);
    return () => clearInterval(intervalId);
  }, [imgProps]);

  return (
    <div className="slide-bar">
      <div className="Slider-Image prev">
        {imgProps[(currentImageIndex - 1 + imgProps.length) % imgProps.length]}
      </div>
      <div className="Slider-Image curr">{imgProps[currentImageIndex]}</div>
      <div className="Slider-Image next">
        {imgProps[(currentImageIndex + 1 + imgProps.length) % imgProps.length]}
      </div>
    </div>
  );
};

export default SlideImages;
