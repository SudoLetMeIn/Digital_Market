import React from "react";
import "./Footer.css";
import { useState } from "react";
import axios from "axios";
const Footer = ({ Image, Title }) => {
  const facebookLink = "https://www.facebook.com";
  const instagramLink = "https://www.instagram.com";
  const twitterLink = "https://www.twitter.com";
  const whatsappLink = "https://www.whatsapp.com";
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email !== 0) {
      let url = "http://localhost:80/user/enquiry.php";
      let form = new FormData();
      form.append("email", email);
      axios
        .post(url, form)
        .then((response) => {
          alert(response.data);
        })
        .catch((error) => alert(error));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <footer className="myFooter">
      <div className="row">
        <div className="col" id="First-column">
          <img src={Image} className="logo" alt="React Logo" />
          <pre id="Title-Footer">{Title}</pre>
        </div>
        <div className="col">
          <h3>
            Office{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>Aygerim Syerik</p>
          <p>
            Ulaanbaatar, 17 horoo, Han-uul duureg, Rapid Harsh, 24-r bair, 89
            toot
          </p>
          <p id="email-id">
            <a
              href={"mailto:bagdaulet.aydos@gmail.com"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              aygerimsyerik@gmail.com
            </a>
          </p>
          <p>
            <a
              href={"tel:+97688696447"}
              style={{
                textDecoration: "none",
                color: "#fff",
                borderBottom: "border-bottom: 1px solid #ccc",
              }}
            >
              +976 - 88696447
            </a>
          </p>
        </div>
        <div className="col">
          <h3>
            Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="contacts">Contacts</a>
            </li>
            <li>
              <a href="shop">Shop</a>
            </li>
            <li>
              <a href="/">Contact with Developer</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Contact{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form onSubmit={handleSubmit}>
            <img
              className="fa-regular"
              src="svg/envelope.svg"
              alt="envelope-logo"
              title="logo"
            ></img>
            <input
              type="email"
              name={"email-field"}
              placeholder="Enter Your Email"
              onChange={handleEmailChange}
              required
            />
            <button type="submit">
              <img
                className="fa-arrow-right"
                src="svg/arrow.svg"
                alt="arrow-logo"
                title="logo"
              ></img>
            </button>
          </form>
          <div className="social-icons">
            <a target="_blank" href={facebookLink}>
              <img
                className="fa-brands"
                src="svg/facebook.svg"
                alt="paltform-logo"
                title="logo"
              ></img>
            </a>
            <a target="_blank" href={twitterLink}>
              <img
                className="fa-brands"
                src="svg/twitter.svg"
                alt="paltform-logo"
                title="logo"
              ></img>
            </a>
            <a target="_blank" href={instagramLink}>
              <img
                className="fa-brands"
                src="svg/instagram.svg"
                alt="paltform-logo"
                title="logo"
              ></img>
            </a>
            <a target="_blank" href={whatsappLink}>
              <img
                className="fa-brands"
                src="svg/whatsapp.svg"
                alt="paltform-logo"
                title="logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">All rights reserved 2024 ©</p>
    </footer>
  );
};

export default Footer;
