import React from "react";
import "./Content.css";
// import img1 from "../assets/image-1.jpg";
// import img2 from "../assets/image-2.jpg";
// import img3 from "../assets/image-3.jpg";
// import img4 from "../assets/image-4.jpg";
// import img5 from "../assets/image-5.jpg";
// import img6 from "../assets/image-6.jpg";

export const Content = (props) => {
  return (
    <div className="content">
      <div className="content-1">
        <h3 className="text"> 10% off on everything </h3>

        <div className="content-search">
          <input type="text" placeholder="Search here" name="searchBar" />
          <label> Search </label>
        </div>
      </div>

      <div className="content-2">
        <div>
          <img
            src={require(`../assets/${props.item.url}`)}
            alt="product"
            className="product-image"
          />
          <p> {props.item.text} </p>
          <span> {props.item.price}</span>
        </div>
      </div>
      {/* 
        <div>
          <img
            src={require("../assets/image-1.jpg")}
            alt="product"
            className="product-image"
          />
          <p> {props.data.key2.text} </p>
          <span> {props.data.key2.price}</span>
        </div>
        <div>
          <img src={img3} alt="product" className="product-image" />
          <p> {props.data.key3.text} </p>
          <span> {props.data.key3.price}</span>
        </div>
      </div>

      <div className="content-3">
        <div>
          <img src={img4} alt="product" className="product-image" />
          <p> {props.data.key4.text} </p>
          <span> {props.data.key4.price}</span>
        </div>
        <div>
          <img src={img5} alt="product" className="product-image" />
          <p> {props.data.key5.text} </p>
          <span> {props.data.key5.price}</span>
        </div>
        <div>
          <img src={img6} alt="product" className="product-image" />
          <p> {props.data.key6.text} </p>
          <span> {props.data.key6.price}</span>
        </div>
      </div> */}
    </div>
  );
};
