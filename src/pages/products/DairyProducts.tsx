import React from "react";

const DairyProducts = () => {
  return (
    <div className="pt-[80px]">

        {/* container for card  */}
      <div className="w-[90%] mx-auto flex  justify-between">
        {/*  card */}
        <div className=" h-[368px] bg-[#3460FE] w-[410px] rounded-md flex flex-col justify-evenly  items-center">
          <div>
            <img src="./img/image 26.png" alt="" />
          </div>

          <p className="font-[700] text-[20px]"> Your Daily Staples</p>

          <p className="text-[16px] font-[400]">
            Authentic Masalas for the Authentic Taste
          </p>

          <button className="h-[45px] w-[160px] border-2 border-black bg-[#FFFF]">
            Shop Now
          </button>


          {/* second card */}
        </div>
        <div className=" h-[368px] bg-[#0AAD0A] w-[410px] rounded-md flex flex-col justify-evenly  items-center">
          <div>
            <img src="./img/image_2021_12_09T13_03_11_539Z 1.png" alt="" />
          </div>

          <p className="font-[700] text-[20px]"> Desserts & Sweets</p>

          <p className="text-[16px] font-[400]">
            Authentic Masalas for the Authentic Taste
          </p>

          <button className="h-[45px] w-[160px] border-2 border-black bg-[#FFFF]">
            Shop Now
          </button>
        </div>

          {/* third card */}
        <div className=" h-[368px] bg-[#FFF3D6] w-[410px] rounded-md flex flex-col justify-evenly  items-center">
          <div>
            <img src="./img/image_2021_12_09T13_03_32_112Z 1.png" alt="" />
          </div>

          <p className="font-[700] text-[20px]">Dairy Prodcts</p>

          <p className="text-[16px] font-[400]">
            Authentic Masalas for the Authentic Taste
          </p>

          <button className="h-[45px] w-[160px] border-2 border-black bg-[#FFFF]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DairyProducts;
