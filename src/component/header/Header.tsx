const Header = () => {
  return (
    <div>
      {/* main container */}
      <div className="w-100% bg-[#FFFFFF] ">
        {/* inner container */}

        <div className="w-[90%] h-[82px]  mx-auto flex justify-between items-center">
          {/* left part */}

          <div className="flex gap-10">

            <div className="flex gap-2">
            <img src="./img/Group 938.svg" alt="grocery" />           
            <p>Epic Grocery</p>
            </div>

            <div className="flex gap-2">
              <img src="./img/Delivery.svg" alt="delivery" />
              <p>Free Delivery All Over UK*</p>
            </div>

          </div>

          {/* middel part */}
          <div className="flex bg-[#F1F1F1] p-[16px] w-[520px] justify-between">

            <input
              type="text"
              placeholder="What are you looking for ?"
              className="w-[454px] bg-[#F1F1F1]"
            />
            <img src="./img/Union.svg" alt="search" />

          </div>

          {/* right part */}
          <div className="flex gap-8">

            <div className="flex gap-2">
              <p>My Cart (0)</p>
              <img src="./img/Group 879.svg" alt="cart" />
            </div>

            <div className="flex gap-2">
              <img src="./img/Group 755.svg" alt="login" />
              <p>Login</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
