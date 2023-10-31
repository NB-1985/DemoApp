import { Link, Navigate, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../auth/auth";
import { useState } from "react";

const Header = () => {

  const [showDropDown,setShowDropDown]=useState(false)
  const navigate=useNavigate();



 let token:any= localStorage.getItem("token")
 let userData=JSON.parse(token)

 
const CartRoute=()=>{
  if(isLoggedIn()){
    navigate("productdetail")
  }else{
    navigate("signup")
  }
}


  const handleLogOut=()=>{
      localStorage.removeItem("token")
      navigate("/")
      alert("Logged Out Successfully!!")
  }


  return (
    <div>

      {/* main container */}
      <div className="bg-[#FFFFFF] ">

        {/* inner container */}
        <div className="w-[90%] h-[82px]  mx-auto flex justify-between items-center">

          {/*  //!left part */}
          <div className="md:flex gap-10 " >

          <Link to={"/"}>
          <div className="flex gap-2  ">
            <img src="./img/Group 938.svg" alt="grocery" />           
            <p className="md:block hidden">Epic Grocery</p>
            </div></Link>  

            <div className="lg:flex gap-2 hidden ">
              <img src="./img/Delivery.svg" alt="delivery" />
              <p >Free Delivery All Over UK*</p>
            </div>

          </div>

          {/* //^ middel part */}
          <div className="flex bg-[#F1F1F1]  mx-2 rounded-md p-4 w-[70%]  sm:rounded-none sm:p-[16px] sm:w-[520px] justify-between">

            <input
              type="text"
              placeholder="What are you looking for ?"
              className="lg:w-[454px]  focus:outline-none bg-[#F1F1F1] w-[100%]"
            />
            <img src="./img/Union.svg" alt="search" className="hidden sm:block" />
          </div>

          {/* //!right part */}
          <div className="flex sm:gap-8 gap-3">

            
            <div className="flex sm:gap-2 gap-1 cursor-pointer" onClick={CartRoute}>
              <p className="hidden lg:block">My Cart</p>
              <img src="./img/Group 879.svg" alt="cart" className="w-4 sm:w-6"/>0
            </div>
            



             <div className="flex items-center sm:gap-2 cursor-pointer" >
              {
                isLoggedIn() ?      

                 //*conditionaly showing logout or login
                 <div className="flex cursor-pointer sm:gap-2 items-center">
              <img src="./img/Group 755.svg" alt="login"  className="sm:w-6 w-5"/>
                <p className="text-[12px] text-right cursor-pointer" onClick={handleLogOut}>{userData  ? `Logout ${userData.firstname}` : null }</p>
                </div>
                  :
                  <div className="flex gap-1 ">
                    <img src="./img/Group 755.svg" alt="" className="w-4 sm:w-6"/>
                  <p className="sm:text-[16px]  text-[13px] items-center  cursor-pointer" onClick={()=>navigate("signup")}>LogIn</p>
                  </div>
              }
      
            </div>
          </div>


        </div>
      </div>
     
    </div>

    
  );
};

export default Header;
