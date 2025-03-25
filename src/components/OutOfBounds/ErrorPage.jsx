import React from "react";
import "./../main.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./error.css";
const ErrorPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="backButton">
        <pre> Page Not Found !!!</pre>
        <Link to={"/"} className="backButton">
          <strong>Back to Home Page</strong>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
