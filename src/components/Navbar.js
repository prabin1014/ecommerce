import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <p className="navbar-item-clothe"> Shoes </p>
        <p className="navbar-list-clothe"> Jackets </p>
        <p className="navbar-list-clothe"> Tshirts </p>
        <p className="navbar-list-clothe"> Joggers </p>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search here"></input>
        <label> Search</label>
      </div>
    </div>
  );
};
