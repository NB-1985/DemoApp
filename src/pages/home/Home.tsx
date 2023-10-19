import React from "react";

const Home = () => {
  return (
    <div>
      {/* main container */}
      <div className=" bg-[#F7FFEE] flex justify-end">

        {/* inner container  */}
        <div className=" h-[508px]  w-[95%] flex justify-between ">

          {/* left side */}
          <div className="flex items-center ">
            <div className="h-[317px] w-[415px]  flex flex-col justify-between">
              <p className="text-[#0AAD0A]">Save upto 30%</p>
              <p className="text-[60px] font-[700] leading-[70px]">
                Amazing Grocery deals
              </p>
              <p className="text-[16px] font-[400]">
                10% certifled-organic mix of fruit and veggies. Perfect for
                weekly cooking and snacking!
              </p>
              <button className="w-[160px] h-[45px]  bg-[#5A9C17] text-[#FFFF]">
                Shop Now
              </button>
            </div>
          </div>

          
          {/* right side  */}
          <div>
            <img src="./img/ewrwr 1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
