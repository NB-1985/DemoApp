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
  return (
    <div className="pb-12 mx-3 md:mx-0">
      <div
        className="border-slate-200  border-2  h-[346px] md:w-[218px]  sm:w-[180px]
          flex flex-col justify-evenly p-2"
      >
        <div className="grid place-content-center relative ">
          <div className="h-12 text-white text-[14px] flex-col items-center font-[500] absolute right-0 top-0 bg-[#5A9C17] rounded-full w-12 flex justify-center ">
            <p>20%</p>
            <p>off</p>
          </div>

          <img src={itemImage} alt="item image" />
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

        <Button
          name="Add To Cart "
          className="w-full hover:!text-[white]  !bg-white !text-black border-2 hover:!bg-[#5A9C17] !border-black "
        />
      </div>
    </div>
  );
};

export default ItemCard;
