import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="brand-name"> ELEVATE </div>

      <div className="header-name">
        <p className="header-name-item"> New </p>
        <p className="header-name-item"> Categories </p>
        <p className="header-name-item"> Stores </p>
      </div>

      <div className="header-logos">
        <a>
          <AddShoppingCartIcon fontSize="large" />
        </a>
        <a>
          {" "}
          <PersonOutlineIcon fontSize="large" />
        </a>
        <a>
          <HelpOutlineIcon fontSize="large" />
        </a>
      </div>
    </header>
  );
};
