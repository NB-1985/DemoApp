import React from "react";
import WhyUs from "../re_usable/WhyUsCard";

const WhyShopWithUs = () => {
  return (
    <div className="pt-[80px]">
      {/* container  */}
      <div className="w-[90%] mx-auto lg:h-[152px]   flex  flex-col justify-between">
        <div>
          <p className="font-[700] text-[24px] text-center">
            Why Shop With Us?
          </p>
        </div>

        <div className="flex justify-center  pt-8  lg:justify-between flex-wrap gap-8 lg:gap-0 lg:flex-nowrap">
          <WhyUs
            title="Free Delivery"
            description="When you spend over £60!"
            image="./img/Delivery (1).svg"
          />
          <WhyUs
            title="Shipping Info"
            description="Fast Service*"
            image="./img/Union (1).svg"
          />
          <WhyUs
            title=" Loyalty Scheme"
            description="    Earn Points With an Account"
            image="./img/Loyality.svg"
          />
          <WhyUs
            title="Contact Us"
            description="  Here to Help"
            image="./img/Contact.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyShopWithUs;
