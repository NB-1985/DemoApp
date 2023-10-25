import { useEffect, useState } from "react";
import ItemCard from "../../component/re_usable/ItemCard";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSellingItems = () => {
  //   const [data,setData]=useState([])

  //   useEffect(()=>{
  // axios.get("https://jsonplaceholder.typicode.com/posts")
  // .then((res=>setData(res.data)))
  //   },[])

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
    <div className="pt-[80px] ">
      {/* container  */}
      <div className="w-[90%] mx-auto">
        {/* title  */}
        <div className="grid place-content-center">
          <p className="pb-[8px] font-[700] text-[24px]"> Top Selling Items</p>
          <p className="text-[#A0A0A0]  text-[14px] text-center ">
            Available at Best Prices
          </p>
        </div>
        {/*  card  container */}
        <div className="pt-[24px]">
          <Slider {...settings}>
            <ItemCard
              title="Maggi"
              description="Madhur Pure & Hygienic Sulphurless Sugar..."
              price="$0.48"
              itemImage="./img/image 23.png"
            />
            <ItemCard
              title="Maggi"
              description="Madhur Pure & Hygienic Sulphurless Sugar..."
              price="$0.48"
              itemImage="./img/image 23.png"
            />
            <ItemCard
              title="Maggi"
              description="Madhur Pure & Hygienic Sulphurless Sugar..."
              price="$0.48"
              itemImage="./img/image 23.png"
            />
            <ItemCard
              title="Maggi"
              description="Madhur Pure & Hygienic Sulphurless Sugar..."
              price="$0.48"
              itemImage="./img/image 23.png"
            />
            <ItemCard
              title="Maggi"
              description="Madhur Pure & Hygienic Sulphurless Sugar..."
              price="$0.48"
              itemImage="./img/image 23.png"
            />
            <ItemCard
              title="Maggi"
              description="Madhur Pure & Hygienic Sulphurless Sugar..."
              price="$0.48"
              itemImage="./img/image 23.png"
            />
            <ItemCard
              title="Maggi"
              description="Madhur Pure & Hygienic Sulphurless Sugar..."
              price="$0.48"
              itemImage="./img/image 23.png"
            />
            <ItemCard
              title="Maggi"
              description="Madhur Pure & Hygienic Sulphurless Sugar..."
              price="$0.48"
              itemImage="./img/image 23.png"
            />
          </Slider>
        </div>{" "}
        {/* card container ends here  */}
      </div>
    </div>
  );
};

export default TopSellingItems;
