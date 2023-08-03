import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Portfolio from "./components/pages/portfolio/Portfolio";
import Home from "./components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import About from "./components/sections/about/About";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
