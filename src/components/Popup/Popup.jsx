import React from "react";
import "./Popup.css";
const Popup = ({ PopupState, title, children, locationReload = true }) => {
  return (
    <>
      <div id="overlay-success-popup"></div>
      <div className="popup" id="popup">
        <img src="svg/circle-check-solid.svg"></img>
        <h2>{title}</h2>
        <p>{children}</p>
        <button
          type="button"
          onClick={() => {
            PopupState(false);
            if (locationReload) {
              location.reload();
            }
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Popup;
