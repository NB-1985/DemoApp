import React from "react";

const WhyShopWithUs = () => {
  return (
    <div className="pt-[80px]">
      {/* container  */}
      <div className="w-[90%] mx-auto h-[152px]  flex  flex-col justify-between">

        <div>
          <p className="font-[700] text-[24px] text-center">
            Why Shop With Us?
          </p>
        </div>

        <div className="flex  justify-between">
          <div className=" flex gap-3">
            <img src="./img/Delivery (1).svg" alt="delivery" />
            <div className="flex flex-col font-[700] text-[20px] leading-[32px]">
              Free Delivery
              <span className="text-[14px] font-[500] text-[#A0A0A0]">
                When you spend over £60!
              </span>
            </div>
          </div>

          <div className=" flex gap-3 justify-center items-center">
            <img src="./img/Union.png" alt="delivery" className="h-[47.82px]"/>
            <div className="flex flex-col font-[700] text-[20px] leading-[32px]">
              Shipping Info
              <span className="text-[14px] font-[500] text-[#A0A0A0]">
                Fast Service*
              </span>
            </div>
          </div>

          <div className=" flex gap-3">
            <img src="./img/Loyality.png" alt="delivery" />
            <div className="flex flex-col font-[700] text-[20px] leading-[32px]">
              Loyalty Scheme
              <span className="text-[14px] font-[500] text-[#A0A0A0]">
                Earn Points With an Account
              </span>
            </div>
          </div>

          <div className=" flex gap-3">
            <img src="./img/Contact.png" alt="delivery" />
            <div className="flex flex-col font-[700] text-[20px] leading-[32px]">
              Contact Us
              <span className="text-[14px] font-[500] text-[#A0A0A0]">
                Here to Help
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyShopWithUs;
