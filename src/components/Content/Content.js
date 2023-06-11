import React from "react";
import data from "../../data";
import "./Content.css";

export const Content = () => {
  // declaring state to take input value
  const [searchTerm, setSearchTerm] = React.useState("");

  // performing map method over our data
  const products = data.map((item) => {
    return (
      <div className="content-products" key={item.key}>
        <div className="content-products-child">
          <img
            src={require(`../../assets/${item.url}`)}
            alt="product"
            className="product-image"
          />
          <p className="product-detail"> {item.text} </p>
          <p className="product-detail"> {item.price}</p>
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
  console.log(filtered);

  // JSX elements starts from here
  return (
    <div className="content">
      <div className="content-nav">
        <h3 className="text"> 10% off on everything </h3>

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
                    src={require(`../../assets/${product.url}`)}
                    alt="product"
                    className="product-image"
                  />
                  <p> {product.text} </p>
                  <span> {product.price}</span>
                </div>
              </div>
            );
          })
        : products}
    </div>
  );
};
