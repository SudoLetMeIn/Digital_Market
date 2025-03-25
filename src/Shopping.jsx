import React, { useState, useEffect, useCallback } from "react";
import Card from "./components/Card/Card.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Segment from "./components/Segments/Segment.jsx";
import Popup from "./components/Popup/Popup.jsx";
import "./components/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Payment from "./components/PaymentPopUp/Payment.jsx";
const Shopping = ({ isComp }) => {
  const [totalPrice, setPrice] = useState(0);
  const [items, setItems] = useState([]);
  const [cardInfos, setCardInfos] = useState([]);
  const [StoredCardInfos, CacheCardInfos] = useState([]);
  const [StoreToLocal, setStoreToLocal] = useState(false);
  const [Ordering, SetOrder] = useState(false);
  const fetchCardInfos = useCallback(async () => {
    try {
      const response = await fetch("assets/prod.json");
      if (!response.ok) {
        throw new Error("Failed to fetch card data");
      }
      const data = await response.json();
      CacheCardInfos(data);
      setCardInfos(data);
    } catch (error) {
      console.error("Error Fetching card data:", error);
    }
  }, []);
  useEffect(() => {
    fetchCardInfos();
  }, []);
  const handleSelectionClick = (type) => {
    if (type === "all") {
      setCardInfos(StoredCardInfos);
    } else if (type === "toys") {
      setCardInfos(StoredCardInfos.filter((item) => item.type === "toys"));
    } else if (type === "household") {
      setCardInfos(StoredCardInfos.filter((item) => item.type === "household"));
    } else if (type === "clothing") {
      setCardInfos(StoredCardInfos.filter((item) => item.type === "clothing"));
    } else if (type === "beauty") {
      setCardInfos(StoredCardInfos.filter((item) => item.type === "beauty"));
    }
  };
  const updateQuantity = (id, quantity) => {
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      updatedItems[itemIndex].quantity = quantity;
      setItems(updatedItems);
    }
  };

  const updateInfo = (id, price, name, image) => {
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      updatedItems[itemIndex].unitPrice = price;
      updatedItems[itemIndex].name = name;
      setItems(updatedItems);
    } else {
      setItems([
        ...items,
        { id: id, quantity: 1, unitPrice: price, name: name, image: image },
      ]);
    }
  };
  const SelectionNumber = (id) => {
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      return updatedItems[itemIndex].quantity;
    }
    return 0;
  };
  const Store = () => {
    let state = false;
    items.forEach((item) => {
      if (item.quantity !== 0) {
        state = true;
      }
    });
    if (state) {
      const storedItems = JSON.parse(localStorage.getItem("storedItems")) || [];
      storedItems.push(items);
      localStorage.setItem("storedItems", JSON.stringify(storedItems));
      setStoreToLocal(true);
    }
  };
  return (
    <>
      <Navbar />
      <div style={{ height: "10px", background: "#24252ace" }}></div>
      <Segment handleFilter={handleSelectionClick}></Segment>
      <div
        style={{
          background: "#24252ace",
          height: "5px",
          border: "none",
          borderRadius: "10px",
        }}
      ></div>
      <div className="Contain">
        {StoreToLocal && (
          <Popup PopupState={setStoreToLocal} title={"Successfully Saved"}>
            Order details has been Successfully Saved to Cart
          </Popup>
        )}
        {Ordering && <Payment bundle={items}></Payment>}
        {cardInfos.map((element) => (
          <Card
            key={element.id}
            title={element.title}
            image={element.image}
            price={element.price}
            totalPrice={totalPrice}
            setPrice={setPrice}
            items={items}
            updateQuantity={updateQuantity}
            id={element.id}
            updateInfo={updateInfo}
            isComp={isComp}
            rating={element.rating}
            maxAmount={element.maxAmount}
            selectedNumber={SelectionNumber(element.id)}
          >
            {element.desc}
          </Card>
        ))}
        {console.log(...items)}
      </div>
      <div className="PlaceHolder"></div>
      <footer>
        <div className="Footer">
          <strong>{"Total: " + totalPrice + " $"}</strong>
          <button
            className="btns"
            onClick={() => {
              Store();
            }}
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button
            type="button"
            onClick={() => {
              SetOrder(true);
            }}
          >
            Худалдан авах
          </button>
        </div>
      </footer>
    </>
  );
};

export default Shopping;
