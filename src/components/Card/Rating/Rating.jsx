import React, { useState } from "react";
import "./Rating.css";

const Rating = ({ value, onChange }) => {
  const handleClick = (newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={starValue}
          className={starValue <= value ? "star filled" : "star"}
          onClick={() => handleClick(starValue)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
