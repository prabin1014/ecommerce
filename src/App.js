import React from "react";
// import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Layout } from "./components/Layout";
import { Warehouse } from "./components/pages/Warehouse";
import { Wish } from "./components/pages/Wish";
import { Cart } from "./components/pages/Cart";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import "./App.css"


  export const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <h1 className="app-loading">Loading...</h1>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Content />} />
          <Route path="wishlist" element={<Wish />} />
          <Route path="cart" element={<Cart />} />
          {isAuthenticated ?
          (<Route path="warehouse" element={<Warehouse />} />) :
          (<Route element={<Content /> } />)
  }
          </Route>
          </Routes>
    </BrowserRouter>
  );
  }
