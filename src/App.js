import React from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";

export const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Content />
    </div>
  );
};
