import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import InventoryIcon from '@mui/icons-material/Inventory';
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  // declaring state to either active or not of our profile dashboard
  const [collapse, setCollapse] = React.useState(false);

  function changeCollapse() {
    setCollapse(!collapse);
  }
  return (
    <header className="header">
      <NavLink to="/" className="brand-name">
        <div className="brand-name"> ELEVATE </div>
      </NavLink>

      <div className="header-name">
        <p className="header-name-item"> New </p>
        <p className="header-name-item"> Categories </p>
        <p className="header-name-item"> Stores </p>
      </div>

      <div className="header-logo">
        <NavLink 
        to="warehouse"
        className="header-logo-link">
          <InventoryIcon fontSize="large" color="black" />
        </NavLink>
        
        <NavLink
          to="cart"
          className="header-logo-link"

          /* Can also pass function like this in navlink for styling purpose 
          when we enter inside certain route
           {({ isActive }) => (isActive ? "header-logo-link" : null)} */
        >
          <ShoppingCartOutlinedIcon fontSize="large" />
        </NavLink>

        <NavLink to="wishlist" className="header-logo-link">
          <FavoriteBorderIcon fontSize="large" />
        </NavLink>

        {/* conditions for either to display profile dashboard or not  */}

        <div className="profile">
          <PersonOutlineIcon onClick={changeCollapse} fontSize="large" />
          {collapse && (
            <div className="profile-information">
              <div className="profile-information-item">
                <PersonOutlineIcon /> Profile
              </div>

              <div className="profile-information-item">
                <BookmarkBorderIcon /> Saved Items
              </div>
              <div className="profile-information-item">
                <StarBorderIcon /> Ratings
              </div>
              <div className="profile-information-item">
                <NotificationsNoneIcon /> Notifications
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
