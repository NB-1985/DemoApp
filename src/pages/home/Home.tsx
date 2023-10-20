import Button from "../../component/re_usable/Button";

const Home = () => {

  return (
    <div>
      {/* main container */}
      <div className=" bg-[#F7FFEE] flex justify-center xl:justify-end " >

        {/* inner container  */}
        <div className=" xl:h-[508px]  xl:w-[95%] w-[90%] mx-auto xl:mx-0 flex xl:justify-between
          justify-center items-center

         xl:flex-row flex-col">


          {/* left side */}
          <div className="flex items-center pt-5 xl:pt-0">
            <div className="h-[317px]  xl:w-[415px]  flex flex-col justify-evenly xl:justify-between">
              <p className="text-[#0AAD0A]">Save upto 30%</p>
              <p className="md:text-[60px] text-[40px] md:font-[700] leading-[70px]">
                Amazing Grocery deals
              </p>
              <p className="text-[16px] font-[400]">
                10% certifled-organic mix of fruit and veggies. Perfect for
                weekly cooking and snacking!
              </p>
              
              <Button 
              bgColor="#5A9C17" 
              width="160px" 
              hoverBg="black"
             height="45px" name="Shop Now" textColor="#FFFF"/>
            
            </div>
          </div>

          
          {/* right side  */}
          <div className="pt-10 xl:pt-0">
            <img src="./img/ewrwr 1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
