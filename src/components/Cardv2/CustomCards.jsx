import React from "react";
import Rating from "../Card/Rating/Rating";
import "./custom.css";
import propTypes from "prop-types";
const CustomCards = ({
  title,
  image,
  children,
  price,
  isComp = false,
  rating,
  maxAmount = 999,
}) => {
  return (
    <>
      <div className={"MyRecomendedCard "}>
        <img
          className="MyRecomendedCard_image"
          src={image}
          alt="Item picture"
        ></img>
        <h2 className="MyRecomendedCard_title">{title}</h2>
        <p className="MyRecomendedCard_des">{children}</p>
        <span className="MyRecomendedCard_price">
          <label>${price}</label>
          <Rating value={rating} />
        </span>
      </div>
    </>
  );
};
CustomCards.proptypes = {
  title: propTypes.string,
  image: propTypes.string,
  children: propTypes.node,
  price: propTypes.number,
  isComp: propTypes.bool,
  rating: propTypes.number,
  maxAmount: propTypes.number.isRequired,
};

export default CustomCards;
