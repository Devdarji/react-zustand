import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/store" element={<ProductListingPage />}></Route>
      <Route path="/store/dp/:id" element={<ProductDetailPage />}></Route>
    </Routes>
  </BrowserRouter>
);
