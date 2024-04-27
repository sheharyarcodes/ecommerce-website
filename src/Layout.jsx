import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import FilteredPage from "./pages/filteredPage/FilteredPage";
import Details from "./pages/details/Details";
import Cart from "@/pages/cart/Cart";
import PageNotFound from "./pages/404/PageNotFound";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/product/:id" element={<Details />} />
      <Route path="/products/category/:category" element={<FilteredPage />} />
      <Route path="/:userId/cart" element={<Cart />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Layout;
