import React from "react";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";

export const App = () => {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Content />
    // </BrowserRouter>
    <div>
      <Header />
      <Content />
    </div>
  );
};
