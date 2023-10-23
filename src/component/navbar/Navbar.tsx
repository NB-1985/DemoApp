import React, { useState } from "react";


const Navbar = () => {
  const [nav, setnav] = useState(false);
  

  return (
    <div>
      {/* main container */}
      <div className="w-100% bg-[#2F4858] text-[#FFFFFF]">
        {/* inner container */}

        <div className="w-[90%] h-[50px]  mx-auto flex justify-between items-center">
          {/* //^left part */}
          <div>All Categories </div>


          {/* //! middle part */}
          <div className="hidden lg:block ">
            <ul className="flex gap-8 ">
                <li className="hover:text-[#FEBF34]"><a href="">Home</a></li>
                <li className="hover:text-[#FEBF34]"><a href="">New Products</a></li>
                <li className="hover:text-[#FEBF34]"><a href="">Shop</a></li> 
                <li className="hover:text-[#FEBF34]"><a href="">Offers</a></li>
                <li className="hover:text-[#FEBF34]"><a href="">Store Location</a></li>
            </ul>
          </div>




          {/* //*right part */}
          <div className="sm:flex items-center gap-4 hidden">
          <div>
            <p>Deliver to</p>
          </div>
          <div className="flex gap-2">
          <img src="./img/Location.svg" alt="" />

            <p>
            Berkshire. RG42 3DH
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
