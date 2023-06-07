import React from "react";
import "./Sidebar.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

export const Sidebar = () => {
  const [collapse, setCollapse] = React.useState(false);

  function changeCollapse() {
    setCollapse(!collapse);
  }
  return (
    <div className="sidebar-container">
      <DensityMediumIcon onClick={changeCollapse} />
      {collapse && (
        <div className="sidebar">
          <p className="sidebar-item"> Shoes </p>
          <p className="sidebar-item"> Jackets </p>
          <p className="sidebar-item"> Tshirts </p>
          <p className="sidebar-item"> Joggers </p>
          <p className="sidebar-item"> Accessories</p>
        </div>
      )}
    </div>
  );
};
