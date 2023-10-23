import React from "react";
import Button from "../../component/re_usable/Button";
import IngredientCard from "../../component/re_usable/IngredientCard";

const Ingredient = () => {
  return (
    <div className="pt-[80px]">
      {/* card container  */}
      <div className="w-[90%] mx-auto flex justify-center gap-8 xl:gap-0 flex-wrap xl:flex-nowrap xl:justify-between">

        {/* card  */}
        <div
          style={{ backgroundImage: `url("./img/image 31.png")` }}
          className="h-[490px] w-[631px] bg-center "
        >
          <div className=" h-full flex flex-col justify-center pl-[40px] gap-4">
            <p className="text-[#0AAD0A] text-[16px]">Spcity Foods</p>
            <p className="font-[700] text-[34px]">Save 35% OFF</p>
            <p className="text-[16px] font-[400]">Available at best prices</p>
            <Button name="Shop Now"/>
          </div>
        </div>


{/* <IngredientCard title="back" description="name" sale="78" bgi="https://images.pexels.com/photos/18281979/pexels-photo-18281979/free-photo-of-sweet-pancakes-on-plate-on-table.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"/> */}



        {/* second card  */}
        <div
          style={{ backgroundImage: `url("./img/image 32.png")` }}
          className="h-[490px] w-[631px] bg-center "
        >
          <div className=" h-full flex flex-col justify-center pl-[40px] gap-4">
            <p className="text-[#0AAD0A] text-[16px]">Natural Beauty</p>
            <p className="font-[700] text-[34px]">Save 25% OFF</p>
            <p className="text-[16px] font-[400]">Available at best prices</p>
            <Button name="Shop Now"/>
          </div>
        </div>
      </div>     {/* card container end  */}
  

      {/* black friday offer   */}
      <div className="pt-[30px] ">
        <div
          style={{ backgroundImage: `url("./img/image 30.png")` }}
          className="h-[490px] w-[90%] mx-auto bg-center"
        >
          <div className=" h-full flex flex-col justify-center pl-[40px] gap-4">
            <p className="text-[#0AAD0A] text-[16px]">Black Fridays! offer</p>
            <p className="font-[700] text-[34px]">Sale 50% OFF</p>
            <p className="text-[16px] font-[400]">Available at best prices</p>
            <Button name="Shop Now"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
