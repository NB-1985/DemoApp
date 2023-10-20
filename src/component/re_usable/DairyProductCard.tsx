import React from "react";
import Button from "./Button";

const DairyProducts = ({ title, description, image, bgColor }: any) => {
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

          <Button
            bgColor="#FFFFFF"
            width="160px"
            height="45px"
            name="Shop Now"
            border="2"
            borderColor="black"
            textColor="#000000"
          />
        </div>
      </div>
    </div>
  );
};

export default DairyProducts;
