import React, { useEffect, useRef, useState } from "react";
import { BsList } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";
import Select from "react-select";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [value, setValue]: any = useState(null);
  // hamburger closer open function
  const handlenav = () => {
    setnav(!nav);
  };

  // for out side click close hamburger function

  const menu = useRef<any>(); //TODO:what type here??ASK...

  useEffect(() => {
    const handle = (e: any) => {
      if (!menu.current.contains(e.target)) {
        setnav(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });

  //* for react select options
  const options = [
    {
      value: "FRUITES",
      label: "Fruites",
    },
    {
      value: "VEGETABLES",
      label: "Vegetables",
    },
    {
      value: "GROCERY",
      label: "Grocery",
    },
  ];

  return (
    <div>
      {/* main container */}
      <div className=" bg-[#2F4858] text-[#FFFFFF] ">
        {/* inner container */}

        <div
          ref={menu}
          className=" w-[90%] relative py-[22px] mx-auto flex justify-between items-center transition-all ease-in duration-300"
        >

          {/* //^left part */}
          <div>

            {/* //* for select dropdown  */}
            {/* <Select
              options={options}
              defaultValue={value}
              onChange={setValue}
              placeholder="All Categories"
              isSearchable
              styles={{
                placeholder: (baseStyle, state) => ({
                  ...baseStyle,
                  color: "white",
                }),
                control: (base) => ({
                  ...base,
                  backgroundColor: "#2F4858",
                  border: "none",
                  color: "white",
                  boxShadow: "none",
                  width: "100%",
                }),
                option: (base) => ({
                  ...base,
                  color: "black",
                }),
                input: (base, props) => ({
                  ...base,
                  color: "white",
                }),
              }}
            /> */}
            <select
              className="bg-[#2F4858]"
              id="cars"
              name="carlist"
              form="carform"
            >
              <option value="all categories">All Categories</option>
              <option value="fruites">Fruites</option>
              <option value="vagetables">Vegetables</option>
              <option value="grocery">Grocery</option>
            </select>
          </div>

          {/* //! middle part */}

          <div className="hidden lg:block ">
            <ul className="flex gap-8 ">
              <li className="hover:text-[#FEBF34]">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-[#FEBF34]">
                <a href="#">New Products</a>
              </li>
              <li className="hover:text-[#FEBF34]">
                <a href="#">Shop</a>
              </li>
              <li className="hover:text-[#FEBF34]">
                <a href="#">Offers</a>
              </li>
              <li className="hover:text-[#FEBF34]">
                <a href="#">Store Location</a>
              </li>
            </ul>
          </div>

          {/* //*below for hamburger menu */}
          <div
            onClick={handlenav}
            className="lg:hidden block cursor-pointer absolute right-0  z-20 "
          >
            {nav ? <BsXSquare size={30} /> : <BsList size={30} />}
          </div>
          <div className="w-full absolute top-0 bg-[#2F4858] ">
            <ul
              className={`transition-all ease-in-out duration-700 relative ${
                nav
                  ? "flex font-[700]  gap-12 py-24 items-center flex-col"
                  : "-inset-52 h-0"
              } `}
            >
              <li className="hover:text-[#FEBF34]">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-[#FEBF34]">
                <a href="#">New Products</a>
              </li>
              <li className="hover:text-[#FEBF34]">
                <a href="#">Shop</a>
              </li>
              <li className="hover:text-[#FEBF34]">
                <a href="#">Offers</a>
              </li>
              <li className="hover:text-[#FEBF34]">
                <a href="#">Store Location</a>
              </li>
            </ul>
          </div>

          {/* //*right part */}
          <div className="lg:flex items-center gap-4 hidden">
            <div>
              <p>Deliver to</p>
            </div>
            <div className="flex gap-2">
              <img src="./img/Location.svg" alt="" />

              <p>Berkshire. RG42 3DH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
