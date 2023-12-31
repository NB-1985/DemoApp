import Slider from "react-slick";
import Button from "../../component/re_usable/Button";
import ProductCategories from "../../component/re_usable/ProductCategories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

const PopularCategories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data: any = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(res.data);
    };
    data();
  }, []);

  //* slider settings...
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1129,
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
        breakpoint: 856,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="pt-[80px]">
      {/* container */}
      <div className="w-[90%] mx-auto flex flex-col ">
        {/*  //* tittle */}
        <p className="font-[700] text-[24px] text-center">Popular Categories</p>

        {/* //! products */}
        <div className="pt-[38px]">
          <Slider {...settings}>
            {data.slice(0,20).map((item: any) => (
              <ProductCategories title={item.id} image={item.url} key={item.id}/>
            ))}
          </Slider>
        </div>


        {/* //* offers sale  */}
        <div
          className="pt-[80px] flex
        flex-wrap md:flex-nowrap  
         items-center justify-center
         gap-8">


          {/*  //^ left img  */}
          <div>
            <div
              className="h-[280px]  w-[300px] md:w-[360px] sm:w-[500px]  bg-center  lg:w-[490px] xl:w-[630px]"
              style={{ backgroundImage: `url("./img/Rectangle 111.png")` }}
            >
              <div className="pl-[60px]  w-full flex flex-col pt-[86px] gap-4 h-full">
                <p className="text-[#0AAD0A]">Summer Offer 20% Off</p>
                <p className="font-[700] text-[20px]">Fresh Fruits Big Sale</p>
                <Button name="Shop Now" />
              </div>
            </div>
          </div>


          {/* //^ right img  */}
          <div>
            <div
              className="h-[280px] w-[300px]  md:w-[365px] lg:w-[490px] sm:w-[500px] xl:w-[630px]"
              style={{ backgroundImage: `url("./img/Rectangle 161.png")` }}
            >
              <div className="pl-[60px]  w-full flex flex-col pt-[86px] gap-4 h-full">
                <p className="text-[#0AAD0A] ">Fresh Farm Products 40% Off</p>
                <p className="font-[700] text-[20px]">Vegetable Big Sale</p>
                <Button name="Shop Now" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
