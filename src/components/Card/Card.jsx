import propTypes from "prop-types";
import { useState } from "react";
import Rating from "./Rating/Rating.jsx";
function Card({
  title,
  image,
  children,
  price,
  totalPrice = 0,
  setPrice,
  updateQuantity,
  id,
  updateInfo,
  isComp = false,
  rating,
  maxAmount = 999,
  selectedNumber = 0,
}) {
  if (isComp) {
    import("./Computer-style.css").then();
  } else {
    import("./Mobile-style.css").then();
  }
  const [totalNumber, setNumber] = useState(selectedNumber);
  const [subtractBtn, setMode] = useState(selectedNumber === 0);
  const [addBtn, setLimit] = useState(selectedNumber >= maxAmount);
  function handleClick(addition) {
    updateInfo(id, price, title, image);
    setNumber((totalNumber) => totalNumber + addition);
    updateQuantity(id, totalNumber + addition);
    setPrice((totalPrice) => totalPrice + addition * price);
    if (totalNumber + addition == 0) {
      setMode(true);
    } else {
      setMode(false);
    }
    if (totalNumber + addition == maxAmount) {
      setLimit(true);
    } else {
      setLimit(false);
    }
  }
  return (
    <>
      <div
        className="MyCard"
        onClick={() => {
          //TODO: Handle error when user clicks
          // handleClick(1);
        }}
      >
        <img className="MyCard_image" src={image} alt="Item picture"></img>
        <h2 className="MyCard_title">{title}</h2>
        <p className="MyCard_des">{children}</p>
        <span className="MyCard_price">
          <label>${price}</label>
          <Rating
            value={rating}
            onChange={(newValue) => console.log(newValue)}
          />
        </span>
        <div className="MyCard_numberInput">
          <button
            type="button"
            onClick={() => handleClick(1)}
            disabled={addBtn}
            className="addBtn"
          >
            +
          </button>
          <label className="Quantity" type="number">
            {totalNumber}
          </label>
          <button
            type="button"
            onClick={() => handleClick(-1)}
            disabled={subtractBtn}
            className="subtractBtn"
          >
            -
          </button>
          <br />
        </div>
      </div>
    </>
  );
}
Card.proptypes = {
  title: propTypes.string,
  image: propTypes.string,
  children: propTypes.node,
  price: propTypes.number,
  totalPrice: propTypes.number,
  setPrice: propTypes.func,
  updateQuantity: propTypes.func,
  id: propTypes.number,
  updateInfo: propTypes.func,
  isComp: propTypes.bool,
  rating: propTypes.number,
  maxAmount: propTypes.number.isRequired,
};
export default Card;
