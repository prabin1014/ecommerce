import React from "react";
// import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Layout } from "./components/Layout";
import { Wish } from "./components/pages/Wish";
import { Cart } from "./components/pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Content />} />
          <Route path="/wishlist" element={<Wish />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
