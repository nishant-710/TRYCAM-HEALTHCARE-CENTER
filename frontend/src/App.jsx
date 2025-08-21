import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Media from "./Media";
import NotFound from "./NotFound";
import Rajcen from "./Rajcen";
import Testimonials from "./Testimonials";
import Products from "./Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="/rajcen" element={<Rajcen />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
