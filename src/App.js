import React from "react";
// import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Layout } from "./components/Layout";
import { Warehouse } from "./components/pages/Warehouse";
import { Wish } from "./components/pages/Wish";
import { Cart } from "./components/pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="wishlist" element={<Wish />} />
          <Route path="cart" element={<Cart />} />
          <Route path="warehouse" element={<Warehouse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
