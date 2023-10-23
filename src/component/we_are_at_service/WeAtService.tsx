import React from "react";

const WeAtService = () => {
  return (
    <div className="py-[80px]">
      <div className="bg-[#6EA6520F] lg:h-[476px] flex items-center">
        <div className="w-[90%] mx-auto flex-col lg:flex-row   flex justify-between ">

          {/* left side  */}
          <div className="lg:w-[508px] lg:h-[269px] flex flex-col justify-between lg:gap-0 gap-10">
            <p className="font-[700] text-[20px] md:text-[34px]">
              We are at <span className="text-[#5A9C17]">your service</span>
            </p>

            <div >
              A came with the passion to offer ethnic, high-quality Indian and
              English grocery items at competitive prices, which will not only
              make you want to buy from us but also stay with us as a regular
              customer.
            </div>

            <div className="flex  justify-between " >
              <div className="flex  flex-col justify-center items-center">
             <img src="./img/Union (2).svg" alt='' />
                <span className="text-[12px] sm:text-base text-center">10,000+ Products</span> 
              </div>
              <div className="flex  flex-col justify-center items-center">
                <img src="./img/Union (3).svg" alt="" className="sm:mx-auto"/>
                <span className="text-[12px] sm:text-base text-center">3000+ Brands</span>
              </div>
               <div className="flex  flex-col justify-center items-center">
                <img src="./img/Union (4).svg" alt="" className="sm:mx-auto"/>
                <span className="text-[12px] sm:text-base text-center">24*7 online chat support</span>
              </div>
            </div>

          </div>

          {/* right side  */}
          <div className="pt-5 lg:pt-0">
            <img src="./img/Frame.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAtService;
