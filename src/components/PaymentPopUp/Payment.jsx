import React from "react";
import "./Payment.css";
import Popup from "./../Popup/Popup.jsx";
import { useState } from "react";
import axios from "axios";
const Payment = ({ bundle }) => {
  const [accepted, setState] = useState(true);
  const [shipping_status, set_status] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [formSend, Send] = useState(false);
  const SendInfo = () => {
    Send(true);
  };
  return accepted ? (
    <Popup
      PopupState={setState}
      title={"Acknowledgement of Order"}
      locationReload={false}
    >
      This message means that your order is not registered yet. Enter some
      credentials
    </Popup>
  ) : (
    <>
      <div className="Overlay_background"></div>
      {!formSend ? (
        <div className="Form">
          <div className="Countaining_form">
            <div className="column">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter your name"
              ></input>
            </div>
            <div className="column">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
              ></input>
            </div>
            <div className="column yesno" style={{ gap: "5%" }}>
              <label style={{ lineHeight: "15px" }}>
                <p>Include Shipping</p>
                <p>(extra 50$)</p>
              </label>
              <button
                style={{ paddingBottom: "10px" }}
                onClick={() => set_status(true)}
              >
                Yes
              </button>
              <button
                style={{ paddingBottom: "10px" }}
                onClick={() => set_status(false)}
              >
                No
              </button>
            </div>
            {shipping_status && (
              <>
                <div className="column">
                  <label htmlFor="address">Address: </label>
                  <input
                    id="address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder="Enter shipping address"
                  ></input>
                </div>
              </>
            )}
            <div className="column submit">
              <button onClick={SendInfo}>Go</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="Instructions"></div>
      )}
    </>
  );
};

Payment.propTypes = {
  // bundle: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Payment;
