import React from "react";
import Header from "./component/header/Header";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import PopularCategories from "./pages/products/PopularCategories";
import TopSellingItems from "./pages/products/TopSellingItems";
import DairyProducts from "./pages/products/DairyProducts";
import Ingredient from "./pages/products/Ingredient";
import WhyShopWithUs from "./component/footer/WhyShopWithUs";
import Footer from "./component/footer/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Hero from "./pages/home/Hero";

const App = () => {
  const Layout = () => {
    return (
      <div>
        <div>
          <Header />
          <Navbar />
        </div>
        <div>
          <Outlet/>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    );
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="home" element={<Hero/>}/>
          <Route index element={<Hero/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
