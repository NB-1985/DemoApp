import React from 'react'
import Header from './component/header/Header'
import Navbar from './component/navbar/Navbar'
import Home from './pages/home/Home'
import PopularCategories from './pages/products/PopularCategories'
import TopSellingItems from './pages/products/TopSellingItems'
import DairyProducts from './pages/products/DairyProducts'
import Ingredient from './pages/products/Ingredient'
import WhyShopWithUs from './component/footer/WhyShopWithUs'
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Home/>
      <PopularCategories/>
      <TopSellingItems/>
      <DairyProducts/>
      <Ingredient/>
      <WhyShopWithUs/>
      <Footer/>
    </div>
  )
}

export default App