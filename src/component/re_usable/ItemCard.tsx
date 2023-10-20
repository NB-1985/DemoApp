import React from "react";
import Button from "./Button";

const ItemCard = ({ title, image, description, price }: any) => {
  return (
    <div
      className="border-slate-200  border-2 h-[346px] w-[239px]
          flex flex-col justify-evenly px-2 "
    >
      <div className="grid place-content-center relative ">
        <div className="h-12 text-white font-[500] absolute top-0 right-0 bg-[#5A9C17] rounded-full w-12 flex justify-center ">
          20% <br />
          Off
        </div>

        <img src="./img/image 23.png" alt="maggie image" />
      </div>

      <div className="flex justify-between">
        <span className="text-[#A0A0A0] text-[14px]"> {title}</span>
        <span>
          <img src={`${image}`} alt="" />
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-[14px] font-[500]">{description}</span>
        <span> {price}</span>
      </div>

      <Button
        bgColor="#FFFFFF"
        width="210px"
        height="40px"
        name="Add to Cart"
        border="2"
        borderColor="black"
        textColor="#000000"
        hoverText="white"
        hoverBg="black"
        margin="auto"
      />
    </div>
  );
};

export default ItemCard;
