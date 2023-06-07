import React from "react";
import datas from "./data";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Content } from "./components/Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";

export const App = () => {
  const products = datas.map((item) => {
    return <Content key={item.key} item={item} />;
  });
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      {products}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
};
