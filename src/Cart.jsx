import React, { useState } from "react";
import "./components/Cart.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MultiCard from "./components/MultipleCards/MultiCard";
const Cart = () => {
  const Bundles = JSON.parse(localStorage.getItem("storedItems")) || [];
  const Total = (bundle) => {
    let total = 0;
    bundle.map((item) => {
      total += item.unitPrice * item.quantity;
    });
    console.log("total" + total);
    return total;
  };
  function deleteItemById(itemId) {
    const storedItems = JSON.parse(localStorage.getItem("storedItems")) || [];
    const newItems = storedItems.filter((item, index) => index !== itemId);
    localStorage.setItem("storedItems", JSON.stringify(newItems));
  }
  return (
    <div style={{ overflow: "hidden", background: "#333" }}>
      <Navbar></Navbar>
      <div
        className={
          "MultiCard-Container" + (Bundles == [] ? "Nothing-There" : "")
        }
      >
        {Bundles.map((bundle, key) => (
          <MultiCard
            key={key}
            items={bundle}
            total={Total(bundle)}
            deleteFunc={deleteItemById}
            id={key}
          ></MultiCard>
        ))}
      </div>

      <Footer
        Image={"react.svg"}
        Title={"ALL IN ONE MART\nONLINE STORE"}
      ></Footer>
      {console.log(Bundles)}
    </div>
  );
};

export default Cart;
