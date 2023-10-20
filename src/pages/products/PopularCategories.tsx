import Button from "../../component/re_usable/Button";
import ProductCategories from "../../component/re_usable/ProductCategories";

const PopularCategories = () => {
  return (
    <div className="pt-[80px]">
      {/* container */}
      <div className="w-[90%] mx-auto flex flex-col ">
        {/* tittle */}
        <p className="font-[700] text-[24px] text-center">Popular Categories</p>

        {/* products */}
        <div className="flex justify-center xl:justify-between gap-4 xl:gap-0 pt-[38px] flex-wrap xl:flex-nowrap">
       <ProductCategories title="Fresh Vegetables" image="./img/Group 938.svg"/>
       <ProductCategories title="Fresh Vegetables" image="./img/Group 938.svg"/>
       <ProductCategories title="Fresh Vegetables" image="./img/Group 938.svg"/>
       <ProductCategories title="Fresh Vegetables" image="./img/Group 938.svg"/>
       <ProductCategories title="Fresh Vegetables" image="./img/Group 938.svg"/>
       <ProductCategories title="Fresh Vegetables" image="./img/Group 938.svg"/>
       
        </div>

        {/* offers sale  */}
        <div className="pt-[80px] flex
        flex-col xl:flex-row  
         xl:justify-between 
         items-center
         ">

          
          {/* left img  */}
          <div className="pb-8 xl:pb-0">
          <div
            className="h-[280px] w-[300px] sm:w-[500px]  bg-center  xl:w-[630px]" 
            style={{ backgroundImage: `url("./img/Rectangle 111.png")` }}
          >
            <div className="pl-[60px]  w-full flex flex-col pt-[86px] gap-4 h-full">
              <p className="text-[#0AAD0A]">Summer Offer 20% Off</p>
              <p className="font-[700] text-[20px]">Fresh Fruits Big Sale</p>
              <Button
                bgColor="#5A9C17"
                width="160px"
                hoverBg="black"
                height="45px"
                name="Shop Now"
                textColor="#FFFF"
              />
            </div>
          </div>
          </div>

          {/* right img  */}
          <div>
          <div
            className="h-[280px] bg-center w-[300px] sm:w-[500px] xl:w-[630px]"
            style={{ backgroundImage: `url("./img/Rectangle 161.png")` }}
          >
            <div className="pl-[60px]  w-full flex flex-col pt-[86px] gap-4 h-full">
              <p className="text-[#0AAD0A]">Fresh Farm Products 40% Off</p>
              <p className="font-[700] text-[20px]">Vegetable Big Sale</p>
              <Button
                bgColor="#5A9C17"
                width="160px"
                hoverBg="black"
                height="45px"
                name="Shop Now"
                textColor="#FFFF"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
