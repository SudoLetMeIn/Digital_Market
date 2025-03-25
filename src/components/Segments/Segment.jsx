import React, { useState } from "react";
import "./Segment.css";
import propTypes from "prop-types";
const Segment = ({ handleFilter }) => {
  const [selected, select] = useState(0);
  const mp = { 1: "toys", 2: "household", 3: "clothing", 4: "beauty" };
  const handleClick = (index) => {
    select(index);
    handleFilter(mp[index]);
  };
  return (
    <div className="SegmentContainer">
      <div
        className={selected === 1 ? "selected" : ""}
        onClick={() => handleClick(1)}
      >
        <img
          className="icons"
          src="svg/SegmentsSvg/gamepad-solid.svg"
          alt="toys icon"
          title="Icon"
        ></img>
      </div>
      <div
        className={selected === 2 ? "selected" : ""}
        onClick={() => handleClick(2)}
      >
        <img
          className="icons"
          src="svg/SegmentsSvg/house-user-solid.svg"
          alt="house icon"
          title="Icon"
        ></img>
      </div>

      <div
        className={selected === 3 ? "selected" : ""}
        onClick={() => handleClick(3)}
      >
        <img
          className="icons"
          src="svg/SegmentsSvg/shirt-solid.svg"
          alt="clothing icon"
          title="Icon"
        ></img>
      </div>
      <div
        className={selected === 4 ? "selected" : ""}
        onClick={() => handleClick(4)}
      >
        <img
          className="icons"
          src="svg/SegmentsSvg/beauty-products.svg"
          alt="beauty icon"
          title="Icon"
        ></img>
      </div>
    </div>
  );
};
Segment.propTypes = {
  handleFilter: propTypes.func,
};

export default Segment;
