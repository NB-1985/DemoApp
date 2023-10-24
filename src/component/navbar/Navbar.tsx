import React, { useEffect, useRef, useState } from "react";
import { BsList } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  
  // hamburger closer open function
  const handlenav = () => {
    setnav(!nav);
  };

  // for out side click close hamburger function

  const menu = useRef<any>(); //TODO:what type here??ASK...

  useEffect(() => {
    const handle = (e:any) => {
      if (!menu.current.contains(e.target)) {
        setnav(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });


  

  return (
    <div>
      {/* main container */}
      <div className="sticky top-0 w-100% bg-[#2F4858] text-[#FFFFFF]">
        {/* inner container */}

        <div  ref={menu} className=" w-[90%] relative py-[22px] mx-auto flex justify-between items-center">
          {/* //^left part */}
          <div >All Categories </div>


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


        {/* below for hamburger menu */}
        <div
        onClick={handlenav}
        className="lg:hidden block cursor-pointer absolute right-0  z-20 "
        >
        {nav ? <BsXSquare size={30} /> : <BsList size={30} />}
          </div>
          <div className="w-full absolute top-0 bg-[#2F4858] ">
          <ul className={`transition-all ease-in-out duration-700 relative ${nav ? "flex font-[700]  gap-12 py-24 items-center flex-col":"-inset-40 h-0" } `}>
                <li className="hover:text-[#FEBF34]"><a href="">Home</a></li>
                <li className="hover:text-[#FEBF34]"><a href="">New Products</a></li>
                <li className="hover:text-[#FEBF34]"><a href="">Shop</a></li> 
                <li className="hover:text-[#FEBF34]"><a href="">Offers</a></li>
                <li className="hover:text-[#FEBF34]"><a href="">Store Location</a></li>
            </ul>
          </div>




          {/* //*right part */}
          <div className="lg:flex items-center gap-4 hidden">
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
