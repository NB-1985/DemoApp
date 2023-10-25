import React from "react";
import Button from "./Button";

interface dairyProduct {
  title?: string;
  description?: string;
  image?: string;
  bgColor?: string;
className?: string;
}
const DairyProducts = ({
  title,
  description,
  image,
  bgColor,
  className,
}: dairyProduct) => {
  return (
    <div className="pt-[80px]">
      {/* container for card  */}
      <div>
        {/*  card */}
        <div
          className={` ${className} h-[368px] bg-gray-400  w-[280px] md:w-[260px] xl:w-[410px] rounded-md flex flex-col justify-evenly  items-center`}
        >
          <div>
            <img src={`${image}`} alt="" />
          </div>

          <p className="font-[700] text-[20px]"> {title}</p>

          <p className="text-[16px]  p-2 font-[400] text-center">{description}</p>
          <Button name="Shop Now" className="bg-white text-black border-2 border-black " />
        </div>
      </div>
    </div>
  );
};

export default DairyProducts;
