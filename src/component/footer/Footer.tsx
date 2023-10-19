import React from "react";

const Footer = () => {
  return (
    <div className="pt-[19px]">
      {/* img  */}
      <div className="relative">
        <img src="./img/Group 959.png" alt="" />
        <img src="./img/Rectangle 161 (1).png" alt="" />
        <img src="./img/Group 960.png" alt="" className="absolute bottom-3" />
      </div>

      {/* content container */}

      <div className="w-[90%] mx-auto flex justify-between pt-[80px] pb-[38px]" >
        <div>
          <ul>
            <p className="pb-[12px]">Information</p>
            <li>Store Location</li>
            <li>Term & Conditions</li>
            <li>Sitemaps</li>
            <li>Contact Us</li>
            <li>Refunds & Returns</li>
          </ul>
        </div>

        <div>
          <ul>
            <p className="pb-[12px]">About us</p>
            <li>Our Story</li>
            <li>General Enquiries</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Term & Conditions</li>
          </ul>
        </div>

        <div>
          <ul>
            <p className="pb-[12px]">Shop</p>
            <li>All Products</li>
            <li>Special Offers</li>
            <li>Brands</li>
            <li>Grocery</li>
            <li>Daily Needs</li>
          </ul>
        </div>

        <div className="w-[454px] flex flex-col justify-between">
          <p>NEWS LETTER</p>
          <p>Register now to get updates on promotions & coupons</p>
          <div className=" relative flex bg-[#FFFF]  border-black border-2 rounded-full p-[16px] w-[454px ] justify-between">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-[454px]"
            />
            <p className="absolute right-0 bg-black text-white rounded-full p-4 top-0">
              Subscribe
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://twitter.com"><img src="./img/Group 590.svg" alt="" /></a>  
            <a href="https://instagram.com"><img src="./img/Group 589.svg" alt="" /></a>  
            <a href="https://youtube.com"><img src="./img/Group 588.svg" alt="" /></a>  
            <a href="https://linkedin.com"><img src="./img/Group 591.svg" alt="" /></a>  
            </div>
        </div>
      </div>
      
      <p className="border-2 border-black w-[90%] mx-auto"></p>



{/* rights reserved */}
      <div className="pt-[24px] pb-[40px]">

        <div className="w-[90%] mx-auto flex justify-between">
          <p><span className="font-[700]">Epic Grocery</span> 2021. All Rights Reserved //<span>Created by &copy;NeelBhimani</span></p>
          
          <div className="flex gap-3">
            <p className="font-[500] text-[14px] text-[#0F0F0F] leading-[28px]">We Use Secure Payment Processing Methods</p>
            <img src="./img/Group 3.svg" alt="" />
            <img src="./img/Group 6.svg" alt="" />
            <img src="./img/Vector.svg" alt="" />
            <img src="./img/Group 5.svg" alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
