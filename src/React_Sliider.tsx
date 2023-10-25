import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ItemCard from './component/re_usable/ItemCard';


const React_Sliider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      };
  return  (
    <div className='w-[90%] mx-auto'>
      <h2> Single Item</h2>
      <Slider {...settings} >
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          </Slider>
    </div>
  );
}

export default React_Sliider