import React, { Children, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Link } from "react-router-dom";
import CustomCards from "./components/Cardv2/CustomCards.jsx";
import Feed from "./components/Feed/feed.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./components/main.css";
import "./components/HomePage.css";
import "./components/Cardv2/slide.css";

const HomePage = () => {
  // Create an array to store refs for intersection observer
  var refs = [useRef(null)];

  // Use useEffect hook to run code after the component has mounted
  useEffect(() => {
    // Create an IntersectionObserver to handle element intersection
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
      console.log(...refs); // Log all refs when they intersect
    });

    // Observe each ref element
    refs.map((ref) => {
      observer.observe(ref.current);
    });
  }, []);

  // Array containing top product data
  const TopProducts = [
    {
      Link: "/shop",
      title: "Shoes",
      image: "etik.png",
      price: 500,
      isComp: true,
      rating: 4.8,
      maxAmount: 13,
      Children: <strong>IDK</strong>,
      ref: useRef(),
    },
    {
      Link: "/shop",
      title: "Shoes",
      image: "etik.png",
      price: 500,
      isComp: true,
      rating: 4.8,
      maxAmount: 13,
      Children: <strong>IDK</strong>,
      ref: useRef(),
    },
    {
      Link: "/shop",
      title: "Shoes",
      image: "etik.png",
      price: 500,
      isComp: true,
      rating: 4.8,
      maxAmount: 13,
      Children: <strong>IDK</strong>,
      ref: useRef(),
    },
    {
      Link: "/shop",
      title: "Shoes",
      image: "etik.png",
      price: 500,
      isComp: true,
      rating: 4.8,
      maxAmount: 13,
      Children: <strong>IDK</strong>,
      ref: useRef(),
    },
  ];

  const Attractions = [
    {
      image: "cover.png",
      Children: <strong>StarFish, so beautiful</strong>,
      direction: "right",
      link: "/shop",
      LinkName: "To Shop",
      ref: useRef(),
    },
    {
      image: "cover.png",
      Children: <strong>Hello it's a me, Mario</strong>,
      direction: "left",
      link: "/shop",
      LinkName: "To Shop",
      ref: useRef(),
    },
    {
      image: "cover.png",
      Children: <strong>Hello it's a me, Mario</strong>,
      direction: "right",
      link: "/shop",
      LinkName: "To Shop",
      ref: useRef(),
    },
  ];
  return (
    <div style={{ overflow: "hidden", background: "#333" }}>
      <Navbar />
      <div className="Front">
        <div className="text">
          <pre className="Title">All in One Mart</pre>
          <h1 className="headline">
            Premium shopping experiences at a fraction of the cost
          </h1>
          <h3 className="description">
            From immersive retail to stunning digital design, showcase your
            brand on the only cost-effective platform for scale.
          </h3>
          <Link className="button" to={"/shop"}>
            Product List
          </Link>
        </div>
        <div className="Images">
          <img src="cover.png" alt="cover"></img>
        </div>
      </div>
      <div
        className="Bottom"
        style={{
          backgroundImage: "linear-gradient(0deg,#fff, #000)",
        }}
      >
        <h1
          ref={refs[0]}
          style={{
            color: "yellow",
            display: "flex",
            marginTop: "10vh",
            fontFamily: "Ailerons",
          }}
          className="hidden slider"
        >
          TOP PRODUCTS
        </h1>
        <div className="recommended-cards">
          {TopProducts.map((element, key) => (
            <Link
              ref={element.ref}
              to={element.Link}
              key={key}
              className={"hidden slider"}
            >
              <CustomCards
                title={element.title}
                image={element.image}
                price={element.price}
                isComp={element.isComp}
                rating={element.rating}
                maxAmount={element.maxAmount}
              >
                {element.Children}
              </CustomCards>
            </Link>
          ))}
          {/* Add refs from TopProducts to the refs array */}
          {TopProducts.map((element) => {
            refs.push(element.ref);
          })}
        </div>
        <div className="feeds">
          {Attractions.map((element, key) => (
            <Feed
              key={key}
              image={element.image}
              direction={element.direction}
              reference={element.ref}
              link={element.link}
              LinkName={element.LinkName}
            >
              {element.Children}
            </Feed>
          ))}
        </div>
        {Attractions.map((element) => {
          refs.push(element.ref);
        })}
        <Footer
          Image={"react.svg"}
          Title={"ALL IN ONE MART\nONLINE STORE"}
        ></Footer>
      </div>
    </div>
  );
};

export default HomePage;
