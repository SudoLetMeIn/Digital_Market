import React from "react";
import "./feed.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
const Feed = ({
  image,
  children,
  direction,
  reference,
  LinkName,
  link = "/shop",
}) => {
  if (direction === "left")
    return (
      <div className="Front feed feed-left">
        <div className="Front feed-cover stripe-left hide-left" ref={reference}>
          <div className="Images">
            <img src={image} alt="cover"></img>
          </div>
          <div className="text feed-text">
            <h1 className="headline">{children}</h1>
            <Link className="button" to={link}>
              {LinkName}
            </Link>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="Front feed feed-right">
        <div
          className="Front feed-cover stripe-right hide-right"
          ref={reference}
        >
          <div className="text feed-text">
            <h1 className="headline">{children}</h1>
            <Link className="button" to={link}>
              {LinkName}
            </Link>
          </div>
          <div className="Images">
            <img src={image} alt="cover"></img>
          </div>
        </div>
      </div>
    );
};

export default Feed;
