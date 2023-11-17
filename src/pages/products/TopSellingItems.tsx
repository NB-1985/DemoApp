import { useEffect, useState } from "react";
import ItemCard from "../../component/re_usable/ItemCard";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { itemCard } from "../../slices_reducers/itemCard";
import { Link, useParams } from "react-router-dom";

const TopSellingItems = () => {
  const dispatch: any = useDispatch();

  //*destructure the user from showUser and get the access of data and we can map it
  const { data } = useSelector((state: any) => state.card);
  const showData = data.hints;

  // ^ for load the userdata in page
  useEffect(() => {
    dispatch(itemCard());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1018,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 565,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-[80px]">
      {/* //* container  */}
      <div className="w-[90%] mx-auto">
        {/* //* title  */}
        <div className="grid place-content-center">
          <p className="pb-[8px] font-[700] text-[24px]"> Top Selling Items</p>
          <p className="text-[#A0A0A0]  text-[14px] text-center ">
            Available at Best Prices
          </p>
        </div>
        {/*  //^ card  container */}
        <div className="pt-[24px] ">
          <Slider {...settings}>
            {showData &&
              showData.map((item: any) => (
                <Link to={`productdetail`}>
                  <ItemCard
                    title={item.food.label}
                    itemImage={item.food.image}
                    key={item.food.foodId}
                  />
                </Link>
              ))}
          </Slider>
        </div>{" "}
        {/* //! card container ends here  */}
      </div>
    </div>
  );
};

export default TopSellingItems;
