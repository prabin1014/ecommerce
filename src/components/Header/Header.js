import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
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
        <AddShoppingCartIcon fontSize="large" />
        <FavoriteBorderIcon fontSize="large" />

        {/* conditions for either to display profile dashboard or not  */}

        <div className="profile">
          <PersonOutlineIcon onClick={changeCollapse} fontSize="large" />
          {collapse && (
            <div className="profile-information">
              <p>
                <PersonOutlineIcon />
                Profile
              </p>
              <p>
                <BookmarkBorderIcon /> Saved Items
              </p>
              <p>
                <StarBorderIcon /> Ratings
              </p>
              <p>
                <NotificationsNoneIcon /> Notifications
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
