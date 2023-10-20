import React from "react";
import ItemCard from "../../component/re_usable/ItemCard";

const TopSellingItems = () => {
  return (
    <div className="pt-[80px] ">
      {/* container  */}
      <div className="w-[90%] mx-auto">
        {/* title  */}
        <div className="grid place-content-center">
          <p className="pb-[8px] font-[700] text-[24px]"> Top Selling Items</p>
          <p className="text-[#A0A0A0]  text-[14px ]">
            Available at Best Prices
          </p>
        </div>

        {/*  card  container */}
        <div className="pt-[24px] justify-center gap-4 xl:gap-0  flex-wrap xl:flex-nowrap flex xl:justify-between">

          {/* card  */}
          <ItemCard
            title="Maggi"
            description="Madhur Pure & Hygienic Sulphurless Sugar..."
            price="$0.48"
          />
          <ItemCard
            title="Maggi"
            description="Madhur Pure & Hygienic Sulphurless Sugar..."
            price="$0.48"
          />
          <ItemCard
            title="Maggi"
            description="Madhur Pure & Hygienic Sulphurless Sugar..."
            price="$0.48"
          />
          <ItemCard
            title="Maggi"
            description="Madhur Pure & Hygienic xwSulphurless Sugar..."
            price="$0.48"
          />
          <ItemCard
            title="Maggi"
            description="Madhur Pure & Hygienic Sulphurless Sugar..."
            price="$0.48"
          />
        </div>
        {/* card container ends here  */}

        
      </div>
    </div>
  );
};

export default TopSellingItems;