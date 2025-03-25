import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./components/main.css";
import "./components/About.css";
const AboutUs = () => {
  return (
    <div style={{ background: "#333" }}>
      <Navbar />

      <div style={{ bottom: "0px", position: "relative" }}>
        <div className="Contents-Of-About-Us"></div>
        <Footer
          Image={"react.svg"}
          Title={"ALL IN ONE MART\nONLINE STORE"}
        ></Footer>
      </div>
    </div>
  );
};

export default AboutUs;
