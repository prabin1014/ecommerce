import React from "react";
import data from "../../data";
import Homeimage1 from "../../assets/home-image-1.jpg";
import Homeimage2 from "../../assets/home-image-2.jpg";
import { ShoppingCartOutlined, FavoriteBorder } from "@mui/icons-material";
import { Carousel } from "../Carousel/Carousel";

import "./Content.css";

export const Content = () => {
  // declaring state to take input value
  const [searchTerm, setSearchTerm] = React.useState("");

  // array to store home images
  const homePhoto = [Homeimage1, Homeimage2];
  // state to change the index to change the images
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // calling changeImage function to change the home image
  React.useEffect(() => {
    const timerID = setInterval(() => {
      changeImage();
    }, 5000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  // function that changes home image
  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % homePhoto.length);
  };

  // current image variabe for storing the home image that keeps changing
  const currentImage = homePhoto[currentIndex];

  // performing map method over our data
  const products = data.map((item) => {
    return (
      <div className="content-products" key={item.key}>
        <div className="content-products-child">
          <img
            className="product-image"
            src={require(`../../assets/${item.url}`)}
            alt="product"
            loading="lazy"
          />
          <p className="product-detail"> {item.text} </p>
          <span className="product-detail-price"> {item.price} </span>
          <p className="product-detail-icons">
            {
              <ShoppingCartOutlined
                sx={{
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  },
                }}
              />
            }
          </p>
          <p className="product-detail-icons favorite-icon">
            {
              <FavoriteBorder
                sx={{
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  },
                }}
              />
            }
          </p>
        </div>
      </div>
    );
  });

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  // Filter the products based on the search term
  const filtered = data.filter((product) => {
    return product.text.includes(searchTerm);
  });

  // JSX elements starts from here
  return (
    <>
      <div className="content">
        <img
          className="content-home-image"
          src={currentImage}
          alt="Home"
          loading="lazy"
        />
        <div className="content-home-text"> Explore Now </div>

        <div className="content-nav">
          <h3 className="content-text"> This Week's Featured </h3>

          <div className="content-search">
            <input
              type="text"
              placeholder="Search here"
              name="searchBar"
              onChange={handleChange}
              value={searchTerm}
              className="content-search-input"
            />
            <label> Search </label>
          </div>
        </div>
        {/* ternary operator for our search filter */}

        {searchTerm
          ? filtered.map((product) => {
              return (
                <div className="content-products" key={product.key}>
                  <div className="content-products-child">
                    <img
                      className="product-image"
                      src={require(`../../assets/${product.url}`)}
                      alt="product"
                      loading="lazy"
                    />
                    <p> {product.text} </p>
                    <span> {product.price}</span>
                  </div>
                </div>
              );
            })
          : products}
      </div>
      <Carousel />
    </>
  );
};
