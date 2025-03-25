import React, { useState } from "react";
import "./MultiCard.css";
import SlideImages from "./Slide-Image/Slide-Image";
const MultiCard = ({ items, total, deleteFunc, id }) => {
  const [state, setState] = useState(true);
  let images = items.map((item) => item.image);
  images = [...images, "react.svg"];
  if (!state) {
    return;
  }
  return (
    <div className="MultiCard">
      <div className="MultiCard-column">
        <p>Total: {total}₮</p>
      </div>
      <div className="MultiCard-column">
        <SlideImages imagePaths={images}></SlideImages>
      </div>
      <div className="MultiCard-column">
        <button
          type="button"
          className="buttons"
          onClick={() => {
            deleteFunc(id);
            setState(false);
          }}
        >
          DELETE
        </button>
        <button type="button" className="buttons" onClick={deleteFunc}>
          ORDER
        </button>
      </div>
    </div>
  );
};

export default MultiCard;
