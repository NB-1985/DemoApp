import React from "react";
import DairyProduct from "../../component/re_usable/DairyProductCard"

const DairyProducts = () => {
  return (
   <div className="w-[90%] 
   flex-wrap xl:flex-nowrap 
    mx-auto flex justify-center  xl:justify-between">
    <DairyProduct  title="Your Daily Staples" description="Authentic Masalas for the Authentic Taste" image="./img/image 26.png " bgColor="#3460FE"/>
    <DairyProduct title="Desserts & Sweets" description="Authentic Masalas for the Authentic Taste" image="./img/image_2021_12_09T13_03_11_539Z 1.png" bgColor="#0AAD0A"/>
    <DairyProduct title="Dairy Prodcts" description="Authentic Masalas for the Authentic Taste" image="./img/image_2021_12_09T13_03_32_112Z 1.png " bgColor="#FFF3D6"/>
    </div>
  );
};

export default DairyProducts;
