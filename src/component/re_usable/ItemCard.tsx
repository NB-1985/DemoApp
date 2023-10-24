import { useDispatch } from "react-redux";
import { increment } from "../../slices_reducers/counterSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import { Link } from "react-router-dom";

interface itemCardComponent {
  title?: string;
  description?: string;
  itemImage?: string;
  price?: string | number;
}

const ItemCard = ({
  title,
  description,
  price,
  itemImage,
}: itemCardComponent) => {

  const dispatch=useDispatch();

const itemCard=[{title:"",description:"",price:"",itemImage:""}]

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

       <Link to={"/productdetail"}><img src={`${itemImage}`} alt="item image" /></Link> 
      </div>

      <div>
        <div className="flex justify-between">
          <span className="text-[#A0A0A0] text-[14px]"> {title}</span>
          <span>
            <img src="./img/fav.svg" alt="fav" />
          </span>
        </div>

        <div className="flex justify-between green">
          <span className="text-[14px] font-[500]">{description}</span>
          <span> {price}</span>
        </div>
      </div>


<Button name="Shop Now" className="text-gray-950 w-full bg-white border-2 hover:bg-[#5A9C17]" />
    
    </div>
  );
};

export default ItemCard;
