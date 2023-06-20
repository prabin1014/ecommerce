import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  // declaring state to either active or not of our profile dashboard
  const [collapse, setCollapse] = React.useState(false);

  function changeCollapse() {
    setCollapse(!collapse);
  }
  return (
    <header className="header">
      <div className="brand-name"> ELEVATE </div>

      <div className="header-name">
        <p className="header-name-item"> New </p>
        <p className="header-name-item"> Categories </p>
        <p className="header-name-item"> Stores </p>
      </div>

      <div className="header-logos">
        <Link to="/cart">
          <ShoppingCartOutlinedIcon fontSize="large" />
        </Link>
        <Link to="/wishlist">
          <FavoriteBorderIcon fontSize="large" />{" "}
        </Link>

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
