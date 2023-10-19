import { url } from "inspector";
import React from "react";

const PopularCategories = () => {
  return (
    <div className="pt-[80px]">
      {/* container */}
      <div className="w-[90%] mx-auto flex flex-col ">
        
        {/* tittle */}
        <p className="font-[700] text-[24px] text-center">Popular Categories</p>

        {/* products */}
        <div className="flex justify-between pt-[38px]">
          <div className="h-[122px] w-[190px]  flex justify-center items-center flex-col gap-4 border-2 border-slate-200 shadow-2xl">
            <img
              src="./img/Group 938.svg "
              alt="products"
              className="h-[45px]"
            />
            <p>Fresh Vegetables</p>
          </div>
          <div className="h-[122px] w-[190px]  flex justify-center items-center flex-col gap-4 border-2 border-slate-200 shadow-2xl">
            <img
              src="./img/Group 938.svg "
              alt="products"
              className="h-[45px]"
            />
            <p>Fresh Vegetables</p>
          </div>
          <div className="h-[122px] w-[190px]  flex justify-center items-center flex-col gap-4 border-2 border-slate-200 shadow-2xl">
            <img
              src="./img/Group 938.svg "
              alt="products"
              className="h-[45px]"
            />
            <p>Fresh Vegetables</p>
          </div>
          <div className="h-[122px] w-[190px]  flex justify-center items-center flex-col gap-4 border-2 border-slate-200 shadow-2xl">
            <img
              src="./img/Group 938.svg "
              alt="products"
              className="h-[45px]"
            />
            <p>Fresh Vegetables</p>
          </div>
          <div className="h-[122px] w-[190px]  flex justify-center items-center flex-col gap-4 border-2 border-slate-200 shadow-2xl">
            <img
              src="./img/Group 938.svg "
              alt="products"
              className="h-[45px]"
            />
            <p>Fresh Vegetables</p>
          </div>
          <div className="h-[122px] w-[190px]  flex justify-center items-center flex-col gap-4 border-2 border-slate-200 shadow-2xl">
            <img
              src="./img/Group 938.svg "
              alt="products"
              className="h-[45px]"
            />
            <p>Fresh Vegetables</p>
          </div>
        </div>

        {/* offers sale  */}
        <div className="pt-[80px] flex justify-between ">

          {/* left img  */}
          <div
            className="h-[280px] w-[630px]"
            style={{ backgroundImage: `url("./img/Rectangle 111.png")` }}
          >
            <div className="pl-[60px]  w-full flex flex-col pt-[86px] gap-4 h-full">
              <p className="text-[#0AAD0A]">Summer Offer 20% Off</p>
              <p className="font-[700] text-[20px]">Fresh Fruits Big Sale</p>
              <button className="w-[130px] h-[45px]  bg-[#5A9C17] text-[#FFFF]">
                Shop Now
              </button>
            </div>
          </div>

          {/* right img  */}
          <div
            className="h-[280px] w-[630px]"
            style={{ backgroundImage: `url("./img/Rectangle 161.png")` }}
          >
            <div className="pl-[60px]  w-full flex flex-col pt-[86px] gap-4 h-full">
              <p className="text-[#0AAD0A]">Fresh Farm Products 40% Off</p>
              <p className="font-[700] text-[20px]">Vegetable Big Sale</p>
              <button className="w-[130px] h-[45px]  bg-[#5A9C17] text-[#FFFF]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
