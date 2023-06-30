import React from "react";
import { ReactComponent as Profile1 } from "../../assets/profile-1.svg";
import { ReactComponent as Profile2 } from "../../assets/profile-2.svg";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "./Carousel.css";

export const Carousel = () => {
  const [change, setChange] = React.useState(0);
  function toggleRight() {
    setChange((prevIndex) => (prevIndex + 1) % carouselData.length);
  }
  function toggleLeft() {
    if (change > 0 && change < carouselData.length) {
      setChange((prevIndex) => (prevIndex - 1) % carouselData.length);
    }
  }
  const carouselData = [
    {
      icon: <Profile1 />,
      description: `I am always complemented on my outfits Thank you for having great clothes that fit and look good.`,
      person: "Gracie Abrahams",
    },
    {
      icon: <Profile2 />,
      description: `This is my very first order through site, and I am totally and completely satisfied!
                        The fit is great and so are the prices. I will definitely return again and again...`,
      person: "Diego Romero",
    },
    {
      icon: <Profile1 />,
      description: `Thank you for offering these beautifully unique boots. They are flattering and awesome.`,
      person: "Georgina Hill",
    },
  ];

  return (
    <div className="carousel">
      <div className="carousel-content">
        <div> {carouselData[change].icon}</div>
        <div className="carousel-description">
          {carouselData[change].description}
        </div>
        <div className="carousel-person"> {carouselData[change].person} </div>
      </div>

      <KeyboardArrowLeft
        className="carousel-left"
        fontSize="large"
        onClick={toggleLeft}
      />
      <KeyboardArrowRight
        className="carousel-right"
        fontSize="large"
        onClick={toggleRight}
      />
    </div>
  );
};
