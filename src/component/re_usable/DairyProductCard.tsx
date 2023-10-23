import React from "react";
import Button from "./Button";

interface dairyProduct {
  title?: string;
  description?: string;
  image?: string;
  bgColor?: string;
}
const DairyProducts = ({
  title,
  description,
  image,
  bgColor,
}: dairyProduct) => {
  return (
    <div className="pt-[80px]">
      {/* container for card  */}
      <div>
        {/*  card */}
        <div
          className={`h-[368px] bg-[${bgColor}]  w-[280px] sm:w-[410px] rounded-md flex flex-col justify-evenly  items-center`}
        >
          <div>
            <img src={`${image}`} alt="" />
          </div>

          <p className="font-[700] text-[20px]"> {title}</p>

          <p className="text-[16px] font-[400] text-center">{description}</p>
          <Button name="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default DairyProducts;
