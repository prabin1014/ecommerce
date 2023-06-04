import React from "react";
import "./Content.css";
import bgImage from "../assets/image-1.jpg";
export const Content = () => {
  const [currentState, setCurrentState] = React.useState(0);

  return (
    <div className="content">
      <div className="content-image">
        <img
          className="content-image"
          src={bgImage}
          alt="image"
          style={{ width: "100%", height: "auto" }}
        ></img>
      </div>
    </div>
  );
};
