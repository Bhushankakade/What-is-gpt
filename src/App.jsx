import React from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Headers,
} from "./containers";

import { CTA, Brand, Navbar } from "./Components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Headers />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
