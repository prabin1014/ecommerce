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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,197.3C672,171,768,117,864,122.7C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="footer-container">

        <div className="footer-category">
          <h3> Top Categories </h3>
          <ul>
            <li> Shoes </li>
            <li> Joggers </li>
            <li> Tshirt</li>
            <li> Men Boots </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3> Talk To Us </h3>
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

        <div className="footer-information">
          <h3> Information </h3>
          <ul>
            <li>
              <div className="footer-information-list"> My Account </div>
            </li>
            <li>
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

        <div className="footer-social">
          <h3> Let's Stay Connected </h3>
          <p> Enter your email to unlock 10% off </p>
          <div className="footer-social-email">
            <input
              className="footer-social-input"
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
              <FacebookOutlined
                className="footer-social-media"
                fontSize="large"
                sx={{ color: "white" }}
              />
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

      <div className="footer-copyright">
        <p className="footer-copyright-text">
          &copy; 2023 Elevate,Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
