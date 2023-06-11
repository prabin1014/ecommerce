import React from "react";
import { Link } from "react-router-dom";
import "./wishlist.css";

export const Wish = () => {
  return (
    <div className="wishlist">
      <h1 className="wishlist-title-1"> WISHLIST </h1>
      <h4 className="wishlist-title-2"> Home/Wishlist</h4>

      <div className="wishlist-info-link">
        <h2 className="wishlist-info"> No Wishlist Items Found </h2>
        <Link to="/">
          <div className="wishlist-link">
            <p> Continue Shopping </p>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};
