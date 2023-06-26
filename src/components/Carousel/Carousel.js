import React from "react";
import { ReactComponent as Profile1 } from "../../assets/profile-1.svg";
import { ReactComponent as Profile2 } from "../../assets/profile-2.svg";
import "./Carousel.css";

export const Carousel = () => {
  const carouselData = [
    {
      icon: <Profile2 />,
      description: `I completely love this site, found it on EBay at first now I just order directly through them...I am
                         always complemented on my outfits Thank you for having great clothes that fit and look good.`,
      person: "Alex Costa",
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
      person: "Bob Ziroll",
    },
  ];
  return (
    <div className="carousel">
      <div className="carousel-content"> sabai thik xa</div>
    </div>
  );
};
