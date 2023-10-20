import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* main container */}
      <div className="w-100% bg-[#FFFFFF] ">
        {/* inner container */}

        <div className="w-[90%] h-[82px]  mx-auto flex justify-between items-center">

          {/*  //!left part */}

          <div className="flex gap-10">

            <div className="flex gap-2">
            <img src="./img/Group 938.svg" alt="grocery" />           
            <p className="hidden md:block">Epic Grocery</p>
            </div>

            <div className="lg:flex gap-2 hidden ">
              <img src="./img/Delivery.svg" alt="delivery" />
              <p >Free Delivery All Over UK*</p>
            </div>

          </div>

          {/* //^ middel part */}
          <div className="flex bg-[#F1F1F1] p-1 rounded-3xl sm:rounded-none sm:p-[16px] sm:w-[520px] justify-between">

            <input
              type="text"
              placeholder="What are you looking for ?"
              className="lg:w-[454px] bg-[#F1F1F1]"
            />
            <img src="./img/Union.svg" alt="search" className="hidden sm:block" />
          </div>

          {/* right part */}
          <div className="flex sm:gap-8 gap-3">

            <div className="flex sm:gap-2 ">
              <p className="hidden lg:block">My Cart</p>
              <img src="./img/Group 879.svg" alt="cart"  />(0)
            </div>



          {/* //*for routing to login page  */}
             {/* <Link to={"/login"}>  */}
             <div className="flex gap-2">
              <img src="./img/Group 755.svg" alt="login" />
              <p className="hidden lg:block">Login</p>
            </div>
            {/* </Link>  */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
