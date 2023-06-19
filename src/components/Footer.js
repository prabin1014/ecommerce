import React from "react";
import {
  FacebookOutlined,
  Instagram,
  Twitter,
  ArrowForward,
} from "@mui/icons-material";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Category section starts from here */}

        <div className="footer-category">
          <h3> Top Categories </h3>
          <ul>
            <li> Shoes </li>
            <li>Joggers </li>
            <li>Tshirt</li>
            <li> Men Boots </li>
          </ul>
        </div>

        {/* Contact section starts from here */}

        <div className="footer-contact">
          <h3> Contact Us </h3>
          <ul>
            <li>
              <div className="footer-contact-list"> Kathmandu, Nepal </div>
            </li>
            <li>
              <div className="footer-contact-list">info@elevate.com </div>
            </li>
            <li>
              <div className="footer-contact-list"> 01-5637382 </div>
            </li>
          </ul>
        </div>

        {/* Information section starts from here  */}

        <div className="footer-information">
          <h3> Information </h3>
          <ul>
            <li>
              <div className="footer-information-list"> My Account </div>
            </li>
            <li>
              {" "}
              <div className="footer-information-list"> Wishlist </div>
            </li>
            <li>
              <div className="footer-information-list"> Blog </div>
            </li>
            <li>
              <div className="footer-information"> About Us </div>
            </li>
          </ul>
        </div>

        {/* social section starts from here  */}

        <div className="footer-social">
          <h3> Let's Stay Connected </h3>
          <p> Enter your email to unlock 10% off </p>
          <div className="footer-social-email">
            <input
              className="footer-social-email-input"
              type="email"
              placeholder="Type your email here"
            ></input>
            <div className="footer-social-submit">
              <ArrowForward fontSize="large" sx={{ color: "white" }} />
            </div>
          </div>
          <h3> Follow Us </h3>
          <ul>
            <li>
              <FacebookOutlined fontSize="large" sx={{ color: "white" }} />
            </li>
            <li>
              <Instagram fontSize="large" style={{ color: "white" }} />
            </li>
            <li>
              <Twitter fontSize="large" style={{ color: "white" }} />
            </li>
          </ul>
        </div>
      </div>

      {/* copyright section starts from here  */}

      <div className="footer-copyright">
        <p className="footer-copyright-text">
          &copy; 2023 Elevate,Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
