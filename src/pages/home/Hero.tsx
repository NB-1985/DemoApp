import Home from "./Home";
import PopularCategories from "../products/PopularCategories";
import TopSellingItems from "../products/TopSellingItems";
import DairyProducts from "../products/DairyProducts";
import Ingredient from "../products/Ingredient";
import WhyShopWithUs from "../../component/footer/WhyShopWithUs";
import WeAtService from "../../component/we_are_at_service/WeAtService";

const Hero = () => {
  return (
    <div>
    
      <Home />
       <PopularCategories />
      <TopSellingItems />
      <DairyProducts />
      <WeAtService/>
      <Ingredient />
      <WhyShopWithUs />  
    </div>
  );
};

export default Hero;
